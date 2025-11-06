import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import authRoutes from './authRoutes.js'
import './db.js' // initialize DB
import jwt from 'jsonwebtoken'
import db, { dbPath } from './db.js' // <-- added db import for inspection
import fs from 'fs'
import bcrypt from 'bcryptjs'

// Load .env even if running from server/src directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '../.env') })

const app = express()

const origin = process.env.CORS_ORIGIN || 'http://localhost:5173'
app.use(cors({
  origin: (origin, callback) => callback(null, true), // pozwól na dowolny origin w dev
  credentials: true
}))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    name: 'AngloBoost Auth Server',
    ok: true,
    endpoints: ['/api/health', '/api/auth/register', '/api/auth/login', '/api/auth/forgot-password', '/api/auth/reset-password']
  })
})

app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

app.use('/api/auth', authRoutes)

// Middleware do weryfikacji JWT
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ error: 'Token dostępu wymagany' })
    }

    jwt.verify(token, process.env.JWT_SECRET || 'change_me', (err, user) => {
        if (err) return res.status(403).json({ error: 'Token nieprawidłowy' })
        req.user = user
        next()
    })
}

// Middleware do weryfikacji uprawnień administratora
function requireAdmin(req, res, next) {
    try {
        const userId = req.user?.sub
        if (!userId) return res.status(401).json({ error: 'Brak użytkownika' })
        const u = db.prepare('SELECT email FROM users WHERE id = ?').get(userId)
        if (!u || u.email !== 'admin1927@gmail.com') {
            return res.status(403).json({ error: 'Wymagane uprawnienia administratora' })
        }
        next()
    } catch (e) {
        return res.status(500).json({ error: 'Błąd autoryzacji' })
    }
}

// Feedback routes
app.post('/api/feedback', authenticateToken, async (req, res) => {
    try {
        const { type, title, description } = req.body
        const userId = req.user.sub

        if (!type || !title || !description) {
            return res.status(400).json({ error: 'Wypełnij wszystkie wymagane pola' })
        }

        const validTypes = ['feature', 'bug', 'improvement', 'content', 'other']
        if (!validTypes.includes(type)) {
            return res.status(400).json({ error: 'Nieprawidłowy typ feedbacku' })
        }

        const now = Date.now()
        const stmt = db.prepare(`
      INSERT INTO user_feedback (user_id, type, title, description, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `)

        const result = stmt.run(userId, type, title, description, now, now)

        // Nagroda w postaci premium na 7 dni za wartościowy feedback
        if (description.length > 50 && title.length > 5) {
            console.log(`Użytkownik ${userId} otrzymałby premium za feedback ID: ${result.lastInsertRowid}`)
            // Tutaj później dodasz logikę nadawania premium
        }

        res.json({
            ok: true,
            feedbackId: result.lastInsertRowid,
            message: 'Dziękujemy za Twój feedback! Twoja opinia pomaga nam rozwijać platformę.'
        })

    } catch (error) {
        console.error('Feedback error:', error)
        res.status(500).json({ error: 'Błąd podczas zapisywania feedbacku' })
    }
})

// Pobieranie feedbacku użytkownika
app.get('/api/feedback/my', authenticateToken, (req, res) => {
    try {
        const userId = req.user.sub
        const feedback = db.prepare(`
      SELECT 
        id, type, title, description, status, priority, upvotes,
        created_at, updated_at,
        (SELECT COUNT(*) FROM feedback_upvotes WHERE feedback_id = user_feedback.id) as upvote_count,
        (SELECT COUNT(*) FROM feedback_comments WHERE feedback_id = user_feedback.id) as comment_count
      FROM user_feedback 
      WHERE user_id = ? 
      ORDER BY created_at DESC
      LIMIT 50
    `).all(userId)

        res.json({ ok: true, feedback })
    } catch (error) {
        console.error('Get feedback error:', error)
        res.status(500).json({ error: 'Błąd podczas pobierania feedbacku' })
    }
})

// Publiczny feed feedbacku (do głosowania)
app.get('/api/feedback/community', (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 20
        const offset = (page - 1) * limit
        const type = req.query.type

        let query = `
      SELECT 
        uf.id, uf.type, uf.title, uf.description, uf.status, uf.priority, 
        uf.upvotes, uf.created_at, uf.updated_at,
        u.name as user_name,
        COUNT(DISTINCT fu.id) as upvote_count,
        COUNT(DISTINCT fc.id) as comment_count
      FROM user_feedback uf
      LEFT JOIN users u ON uf.user_id = u.id
      LEFT JOIN feedback_upvotes fu ON uf.id = fu.feedback_id
      LEFT JOIN feedback_comments fc ON uf.id = fc.feedback_id
    `

        const params = []

        if (type && type !== 'all') {
            query += ' WHERE uf.type = ?'
            params.push(type)
        }

        query += `
      GROUP BY uf.id
      ORDER BY upvote_count DESC, uf.created_at DESC
      LIMIT ? OFFSET ?
    `

        params.push(limit, offset)

        const feedback = db.prepare(query).all(...params)
        res.json({ ok: true, feedback, page, limit })
    } catch (error) {
        console.error('Community feedback error:', error)
        res.status(500).json({ error: 'Błąd podczas pobierania feedbacku społeczności' })
    }
})

// System głosowania
app.post('/api/feedback/:id/upvote', authenticateToken, (req, res) => {
    try {
        const feedbackId = parseInt(req.params.id)
        const userId = req.user.sub

        // Sprawdź czy użytkownik już głosował
        const existing = db.prepare(`
      SELECT id FROM feedback_upvotes WHERE feedback_id = ? AND user_id = ?
    `).get(feedbackId, userId)

        if (existing) {
            // Usuń głos
            db.prepare('DELETE FROM feedback_upvotes WHERE id = ?').run(existing.id)
            db.prepare('UPDATE user_feedback SET upvotes = upvotes - 1 WHERE id = ?').run(feedbackId)
        } else {
            // Dodaj głos
            const now = Date.now()
            db.prepare(`
        INSERT INTO feedback_upvotes (feedback_id, user_id, created_at) 
        VALUES (?, ?, ?)
      `).run(feedbackId, userId, now)
            db.prepare('UPDATE user_feedback SET upvotes = upvotes + 1 WHERE id = ?').run(feedbackId)
        }

        const newUpvotes = db.prepare('SELECT upvotes FROM user_feedback WHERE id = ?').get(feedbackId)
        res.json({ ok: true, upvotes: newUpvotes.upvotes, hasUpvoted: !existing })

    } catch (error) {
        console.error('Upvote error:', error)
        res.status(500).json({ error: 'Błąd podczas głosowania' })
    }
})

// Endpoint dla statystyk admina
app.get('/api/feedback/stats', authenticateToken, requireAdmin, (req, res) => {
    try {
        const stats = db.prepare(`
      SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) as new,
        SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed
      FROM user_feedback
    `).get();
        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: 'Błąd statystyk' });
    }
});

// Wszystkie feedbacki dla admina
app.get('/api/feedback/all', authenticateToken, requireAdmin, (req, res) => {
    try {
        const feedback = db.prepare(`
      SELECT uf.*, u.name as user_name,
        (SELECT COUNT(*) FROM feedback_upvotes WHERE feedback_id = uf.id) as upvote_count
      FROM user_feedback uf
      LEFT JOIN users u ON uf.user_id = u.id
      ORDER BY uf.created_at DESC
      LIMIT 100
    `).all();
        res.json(feedback);
    } catch (error) {
        res.status(500).json({ error: 'Błąd pobierania' });
    }
});

// Admin API: pobierz wszystkie zgłoszenia
app.get('/api/admin/feedback', authenticateToken, requireAdmin, (req, res) => {
    try {
        const feedback = db.prepare(`
      SELECT uf.*, u.name as user_name,
        (SELECT COUNT(*) FROM feedback_upvotes WHERE feedback_id = uf.id) as upvote_count
      FROM user_feedback uf
      LEFT JOIN users u ON uf.user_id = u.id
      ORDER BY uf.created_at DESC
      LIMIT 100
    `).all();
        res.json({ ok: true, feedback });
    } catch (error) {
        res.status(500).json({ error: 'Błąd pobierania' });
    }
});

// Admin API: zmiana statusu zgłoszenia
app.patch('/api/admin/feedback/:id/status', authenticateToken, requireAdmin, (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { status } = req.body || {}
        const allowed = new Set(['planned','in_progress','completed','reviewed'])
        if (!allowed.has(status)) {
            return res.status(400).json({ error: 'Nieprawidłowy status' })
        }
        const now = Date.now()
        const info = db.prepare('UPDATE user_feedback SET status = ?, updated_at = ? WHERE id = ?').run(status, now, id)
        if (info.changes === 0) return res.status(404).json({ error: 'Nie znaleziono zgłoszenia' })
        res.json({ ok: true })
    } catch (error) {
        res.status(500).json({ error: 'Błąd aktualizacji' })
    }
})

// Admin API: usuń zgłoszenie
app.delete('/api/admin/feedback/:id', authenticateToken, requireAdmin, (req, res) => {
    try {
        const id = parseInt(req.params.id)
        db.prepare('DELETE FROM feedback_upvotes WHERE feedback_id = ?').run(id)
        db.prepare('DELETE FROM feedback_comments WHERE feedback_id = ?').run(id)
        const info = db.prepare('DELETE FROM user_feedback WHERE id = ?').run(id)
        if (info.changes === 0) return res.status(404).json({ error: 'Nie znaleziono zgłoszenia' })
        res.json({ ok: true })
    } catch (error) {
        res.status(500).json({ error: 'Błąd usuwania' })
    }
})

// Endpointy do zarządzania wynikami ćwiczeń
app.post('/api/exercise/save-score', authenticateToken, (req, res) => {
    try {
        const { exerciseId, scorePercent } = req.body
        const userId = req.user.sub

        if (!exerciseId || scorePercent === undefined) {
            return res.status(400).json({ error: 'Brak wymaganych pól: exerciseId, scorePercent' })
        }

        const now = Date.now()
        const stmt = db.prepare(`
            INSERT OR REPLACE INTO user_exercise_scores (user_id, exercise_id, score_percent, completed_at)
            VALUES (?, ?, ?, ?)
        `)

        const result = stmt.run(userId, exerciseId, scorePercent, now)
        res.json({
            ok: true,
            scoreId: result.lastInsertRowid,
            message: 'Wynik zapisany pomyślnie'
        })

    } catch (error) {
        console.error('Save score error:', error)
        res.status(500).json({ error: 'Błąd podczas zapisywania wyniku' })
    }
})

// Pobieranie wszystkich wyników użytkownika
app.get('/api/exercise/scores', authenticateToken, (req, res) => {
    try {
        const userId = req.user.sub
        const scores = db.prepare(`
            SELECT exercise_id, score_percent, completed_at 
            FROM user_exercise_scores 
            WHERE user_id = ?
            ORDER BY completed_at DESC
        `).all(userId)

        // Konwertuj na obiekt dla łatwiejszego dostępu
        const scoresMap = {}
        scores.forEach(score => {
            scoresMap[score.exercise_id] = {
                percent: score.score_percent,
                completedAt: score.completed_at
            }
        })

        res.json({ ok: true, scores: scoresMap })
    } catch (error) {
        console.error('Get scores error:', error)
        res.status(500).json({ error: 'Błąd podczas pobierania wyników' })
    }
})

// Pobieranie wyniku dla konkretnego ćwiczenia
app.get('/api/exercise/score/:exerciseId', authenticateToken, (req, res) => {
    try {
        const userId = req.user.sub
        const exerciseId = req.params.exerciseId

        const score = db.prepare(`
            SELECT score_percent, completed_at 
            FROM user_exercise_scores 
            WHERE user_id = ? AND exercise_id = ?
        `).get(userId, exerciseId)

        res.json({
            ok: true,
            score: score ? {
                percent: score.score_percent,
                completedAt: score.completed_at
            } : null
        })
    } catch (error) {
        console.error('Get score error:', error)
        res.status(500).json({ error: 'Błąd podczas pobierania wyniku' })
    }
})

// Prosty panel admina do przeglądania feedbacku
app.get('/admin/feedback', (req, res) => {
    const adminHtml = `<!doctype html>
<html>
<head>
  <title>Admin - Feedback</title>
  <style>
    body{font-family:system-ui;padding:20px;background:#f7f7f7}
    .feedback-item{background:white;padding:15px;margin:10px 0;border-radius:8px;border-left:4px solid #667eea}
    .status-new{border-left-color:#868e96}
    .status-completed{border-left-color:#40c057}
    .stats{display:flex;gap:20px;margin-bottom:20px}
    .stat-card{background:white;padding:15px;border-radius:8px;flex:1;text-align:center}
  </style>
</head>
<body>
  <h1>Admin - Feedback</h1>
  <div id="stats" class="stats"></div>
  <div id="feedback"></div>
  <script>
    async function load() {
      const [stats, feedback] = await Promise.all([
        fetch('/api/feedback/stats').then(r => r.json()),
        fetch('/api/feedback/all').then(r => r.json())
      ]);
      
      // Pokaz statystyki
      document.getElementById('stats').innerHTML = \`
        <div class="stat-card"><h3>\${stats.total}</h3><p>Wszystkich</p></div>
        <div class="stat-card"><h3>\${stats.new}</h3><p>Nowych</p></div>
        <div class="stat-card"><h3>\${stats.completed}</h3><p>Zrealizowanych</p></div>
      \`;
      
      // Pokaz feedback
      document.getElementById('feedback').innerHTML = feedback.map(f => \`
        <div class="feedback-item status-\${f.status}">
          <h3>\${f.title} <span style="color:#666;font-size:14px">(\${f.type})</span></h3>
          <p>\${f.description}</p>
          <div style="color:#666;font-size:12px">
            \${f.user_name} • \${new Date(f.created_at).toLocaleDateString()} • 
            Status: \${f.status} • 👍 \${f.upvote_count}
          </div>
        </div>
      \`).join('');
    }
    load();
  </script>
</body>
</html>`;
    res.type('html').send(adminHtml);
});

// Usuwanie konta użytkownika
app.delete('/api/auth/account', authenticateToken, async (req, res) => {
    try {
        const { password } = req.body
        const userId = req.user.sub

        if (!password) {
            return res.status(400).json({ error: 'Wymagane podanie hasła' })
        }

        // Pobierz użytkownika
        const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId)
        if (!user) {
            return res.status(404).json({ error: 'Użytkownik nie istnieje' })
        }

        // Sprawdź hasło
        const validPassword = await bcrypt.compare(password, user.password_hash)
        if (!validPassword) {
            return res.status(401).json({ error: 'Nieprawidłowe hasło' })
        }

        // Nie pozwól usunąć konta administratora
        if (user.email === 'admin1927@gmail.com') {
            return res.status(403).json({ error: 'Nie można usunąć konta administratora' })
        }

        // Rozpocznij transakcję do usunięcia wszystkich danych użytkownika
        db.transaction(() => {
            // Usuń głosy użytkownika w feedbacku
            db.prepare('DELETE FROM feedback_upvotes WHERE user_id = ?').run(userId)

            // Usuń komentarze użytkownika
            db.prepare('DELETE FROM feedback_comments WHERE user_id = ?').run(userId)

            // Pobierz ID feedbacków użytkownika
            const userFeedbackIds = db.prepare('SELECT id FROM user_feedback WHERE user_id = ?')
                .all(userId)
                .map(row => row.id)

            // Usuń głosy i komentarze powiązane z feedbackami użytkownika
            if (userFeedbackIds.length > 0) {
                const placeholders = userFeedbackIds.map(() => '?').join(',')
                db.prepare(`DELETE FROM feedback_upvotes WHERE feedback_id IN (${placeholders})`)
                    .run(...userFeedbackIds)
                db.prepare(`DELETE FROM feedback_comments WHERE feedback_id IN (${placeholders})`)
                    .run(...userFeedbackIds)
            }

            // Usuń feedback użytkownika
            db.prepare('DELETE FROM user_feedback WHERE user_id = ?').run(userId)

            // Usuń wyniki ćwiczeń użytkownika
            db.prepare('DELETE FROM user_exercise_scores WHERE user_id = ?').run(userId)

            // Usuń tokeny resetowania hasła
            db.prepare('DELETE FROM password_resets WHERE user_id = ?').run(userId)

            // Na końcu usuń użytkownika
            const deleteResult = db.prepare('DELETE FROM users WHERE id = ?').run(userId)

            console.log(`Usunięto użytkownika ID: ${userId}, zmiany: ${deleteResult.changes}`)
        })()

        res.json({
            ok: true,
            message: 'Konto zostało pomyślnie usunięte'
        })

    } catch (error) {
        console.error('Delete account error:', error)
        res.status(500).json({ error: 'Błąd podczas usuwania konta' })
    }
})

// Newsletter endpoints
app.post('/api/newsletter/subscribe', async (req, res) => {
    try {
        const { email } = req.body

        if (!email || !email.includes('@')) {
            return res.status(400).json({ error: 'Podaj prawidłowy adres email' })
        }

        // Sprawdź czy email już istnieje
        const existing = db.prepare('SELECT id, is_active FROM newsletter_subscriptions WHERE email = ?').get(email)

        const now = Date.now()

        if (existing) {
            if (existing.is_active) {
                return res.status(409).json({ error: 'Ten adres email jest już zapisany do newslettera' })
            } else {
                // Reaktywuj subskrypcję
                db.prepare('UPDATE newsletter_subscriptions SET is_active = 1, subscribed_at = ? WHERE email = ?')
                    .run(now, email)
            }
        } else {
            // Nowa subskrypcja
            db.prepare('INSERT INTO newsletter_subscriptions (email, subscribed_at, is_active) VALUES (?, ?, 1)')
                .run(email, now)
        }

        // Wyślij email powitalny
        try {
            await sendNewsletterWelcome(email)
        } catch (emailError) {
            console.error('Błąd wysyłania emaila powitalnego:', emailError)
            // Kontynuuj mimo błędu emaila - subskrypcja i tak jest zapisana
        }

        res.json({
            ok: true,
            message: 'Dziękujemy za zapis do newslettera! Wysłaliśmy email powitalny.'
        })

    } catch (error) {
        console.error('Newsletter subscribe error:', error)
        res.status(500).json({ error: 'Błąd podczas zapisywania do newslettera' })
    }
})

// Endpoint do zarządzania subskrypcjami (dla admina)
app.get('/api/admin/newsletter', authenticateToken, requireAdmin, (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 50
        const offset = (page - 1) * limit

        const subscriptions = db.prepare(`
      SELECT email, subscribed_at, is_active 
      FROM newsletter_subscriptions 
      ORDER BY subscribed_at DESC 
      LIMIT ? OFFSET ?
    `).all(limit, offset)

        const total = db.prepare('SELECT COUNT(*) as count FROM newsletter_subscriptions').get()

        res.json({
            ok: true,
            subscriptions,
            total: total.count,
            page,
            limit
        })
    } catch (error) {
        res.status(500).json({ error: 'Błąd pobierania subskrypcji' })
    }
})

app.patch('/api/auth/account', authenticateToken, async (req, res) => {
    try {
        const { email, currentPassword, newPassword } = req.body
        const userId = req.user.sub

        // Pobierz aktualne dane użytkownika
        const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId)
        if (!user) {
            return res.status(404).json({ error: 'Użytkownik nie istnieje' })
        }

        const updates = []
        const params = []

        // Aktualizacja emaila
        if (email && email !== user.email) {
            // Sprawdź unikalność emaila
            const emailExists = db.prepare('SELECT id FROM users WHERE email = ? AND id != ?').get(email, userId)
            if (emailExists) {
                return res.status(409).json({ error: 'Email jest już używany przez innego użytkownika' })
            }
            updates.push('email = ?')
            params.push(email)
        }

        // Aktualizacja hasła
        if (newPassword) {
            if (!currentPassword) {
                return res.status(400).json({ error: 'Aby zmienić hasło, podaj obecne hasło' })
            }

            const validPassword = await bcrypt.compare(currentPassword, user.password_hash)
            if (!validPassword) {
                return res.status(401).json({ error: 'Nieprawidłowe obecne hasło' })
            }

            const newHash = await bcrypt.hash(newPassword, 10)
            updates.push('password_hash = ?')
            params.push(newHash)
        }

        // Jeśli są zmiany do wykonania
        if (updates.length > 0) {
            params.push(userId)
            const query = `UPDATE users SET ${updates.join(', ')} WHERE id = ?`
            db.prepare(query).run(...params)

            // Pobierz zaktualizowanego użytkownika
            const updatedUser = db.prepare('SELECT id, name, email, created_at FROM users WHERE id = ?').get(userId)

            res.json({
                ok: true,
                message: 'Dane konta zostały zaktualizowane',
                user: updatedUser
            })
        } else {
            res.json({
                ok: true,
                message: 'Brak zmian do zapisania'
            })
        }

    } catch (error) {
        console.error('Update account error:', error)
        res.status(500).json({ error: 'Błąd podczas aktualizacji konta' })
    }
})

// Admin API: edycja treści zgłoszenia (tytuł i opis)
app.patch('/api/admin/feedback/:id', authenticateToken, requireAdmin, (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { title, description } = req.body || {}
        if (!title || !description) {
            return res.status(400).json({ error: 'Wymagane: title i description' })
        }
        const now = Date.now()
        const info = db.prepare('UPDATE user_feedback SET title = ?, description = ?, updated_at = ? WHERE id = ?')
            .run(title, description, now, id)
        if (info.changes === 0) return res.status(404).json({ error: 'Nie znaleziono zgłoszenia' })
        res.json({ ok: true })
    } catch (error) {
        res.status(500).json({ error: 'Błąd edycji' })
    }
})

// Admin API: lista użytkowników
app.get('/api/admin/users', authenticateToken, requireAdmin, (req, res) => {
    try {
        const users = db.prepare('SELECT id, name, email, created_at FROM users ORDER BY created_at DESC LIMIT 500').all()
        res.json({ ok: true, users })
    } catch (error) {
        res.status(500).json({ error: 'Błąd pobierania użytkowników' })
    }
})

// Admin API: usunięcie użytkownika (z czyszczeniem powiązanych danych)
app.delete('/api/admin/users/:id', authenticateToken, requireAdmin, (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const user = db.prepare('SELECT id, email FROM users WHERE id = ?').get(id)
        if (!user) return res.status(404).json({ error: 'Nie znaleziono użytkownika' })
        if (user.email === 'admin1927@gmail.com') {
            return res.status(400).json({ error: 'Nie można usunąć konta administratora' })
        }

        db.transaction(() => {
            // usunięcie głosów i komentarzy użytkownika
            db.prepare('DELETE FROM feedback_upvotes WHERE user_id = ?').run(id)
            db.prepare('DELETE FROM feedback_comments WHERE user_id = ?').run(id)

            // usunięcie powiązanych danych z jego feedbacków
            const feedbackIds = db.prepare('SELECT id FROM user_feedback WHERE user_id = ?').all(id).map(r => r.id)
            for (const fid of feedbackIds) {
                db.prepare('DELETE FROM feedback_upvotes WHERE feedback_id = ?').run(fid)
                db.prepare('DELETE FROM feedback_comments WHERE feedback_id = ?').run(fid)
            }
            db.prepare('DELETE FROM user_feedback WHERE user_id = ?').run(id)

            // na końcu usuń użytkownika
            db.prepare('DELETE FROM users WHERE id = ?').run(id)
        })()

        res.json({ ok: true })
    } catch (error) {
        res.status(500).json({ error: 'Błąd usuwania użytkownika' })
    }
})

// --- NEW: DB inspection endpoints (development only) ---
app.get('/api/db/tables', (req, res) => {
  try {
    const rows = db.prepare("SELECT name, type FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name").all()
    res.json({ ok: true, tables: rows.map(r => r.name) })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('DB LIST ERROR:', err)
    res.status(500).json({ error: 'Nie można pobrać listy tabel' })
  }
})

app.get('/api/db/table/:name', (req, res) => {
  try {
    const name = String(req.params.name || '').trim()
    const limit = Number(req.query.limit) || 50
    if (!name) return res.status(400).json({ error: 'Brak nazwy tabeli' })

    // Validate table exists (case-insensitive)
    const found = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND lower(name)=lower(?)").get(name)
    if (!found) return res.status(404).json({ error: 'Tabela nie istnieje' })

    // Safe to interpolate validated table name wrapped in double quotes
    const tableName = found.name
    const rows = db.prepare(`SELECT * FROM "${tableName}" LIMIT ?`).all(limit)
    res.json({ ok: true, table: tableName, rows })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('DB TABLE ERROR:', err)
    res.status(500).json({ error: 'Nie można pobrać danych z tabeli' })
  }
})

app.get('/api/db/download', (req, res) => {
  try {
    if (!fs.existsSync(dbPath)) return res.status(404).json({ error: 'Plik bazy nie istnieje' })
    res.download(dbPath, 'data.sqlite')
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('DB DOWNLOAD ERROR:', err)
    res.status(500).json({ error: 'Błąd podczas pobierania pliku bazy' })
  }
})
// --- end new endpoints ---

// --- NEW: lightweight browser DB viewer (development only) ---
app.get('/db', (req, res) => {
  const viewerHtml = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>DB Viewer</title>
  <style>
    body{font-family:system-ui,Segoe UI,Roboto,Arial;background:#f7f7f7;padding:20px}
    a{color:#0366d6}
    pre{background:#fff;padding:10px;border:1px solid #ddd;overflow:auto;max-height:60vh}
    .tbl{margin:6px 0}
    button{margin-bottom:10px}
  </style>
</head>
<body>
  <h2>Local SQLite Viewer</h2>
  <p>Uses server endpoints: <code>/api/db/tables</code>, <code>/api/db/table/:name</code>, <code>/api/db/download</code></p>
  <div id="content">Loading...</div>
  <script>
    async function load() {
      const c = document.getElementById('content')
      c.textContent = 'Loading...'
      try {
        const r = await fetch('/api/db/tables')
        if (!r.ok) { c.textContent = 'Error fetching tables: ' + r.status; return }
        const j = await r.json()
        if (!j.ok && !j.tables) { c.textContent = JSON.stringify(j); return }
        c.innerHTML = ''
        j.tables.forEach(t => {
          const d = document.createElement('div'); d.className='tbl'
          const a = document.createElement('a'); a.href='#'; a.textContent = t
          a.onclick = function(e){ e.preventDefault(); loadTable(t) }
          d.appendChild(a)
          c.appendChild(d)
        })
        const dl = document.createElement('a'); dl.href = '/api/db/download'; dl.textContent = 'Download data.sqlite'; dl.style.display='inline-block'; dl.style.marginTop='12px'
        c.appendChild(dl)
      } catch (err) {
        c.textContent = 'Fetch error: '+err.message
      }
    }
    async function loadTable(name) {
      const c = document.getElementById('content')
      c.innerHTML = '<button id="back">Back</button><div>Loading table '+name+' …</div>'
      document.getElementById('back').onclick = load
      try {
        const r = await fetch('/api/db/table/'+encodeURIComponent(name)+'?limit=200')
        const j = await r.json()
        if (!r.ok) { c.textContent = 'Error: ' + (j.error || r.status); return }
        c.innerHTML = '<button id="back2">Back</button><h3>Table: '+j.table+'</h3>'
        document.getElementById('back2').onclick = load
        const pre = document.createElement('pre')
        pre.textContent = JSON.stringify(j.rows, null, 2)
        c.appendChild(pre)
      } catch (err) {
        c.textContent = 'Fetch error: '+err.message
      }
    }
    load()
  </script>
</body>
</html>`
  res.type('html').send(viewerHtml)
})
// --- end viewer ---

const port = Number(process.env.PORT || 4000)
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Auth server listening on http://localhost:${port}`)
})
