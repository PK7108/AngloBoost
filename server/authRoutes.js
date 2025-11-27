import express from 'express'
import db from './db.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import crypto from 'node:crypto'
import { sendResetEmail } from './mailer.js'

const router = express.Router()

function publicUser(u) {
  return { id: u.id, name: u.name || '', email: u.email }
}

function signToken(user) {
  const secret = process.env.JWT_SECRET || 'change_me'
  const expiresIn = process.env.JWT_EXPIRES || '7d'
  return jwt.sign({ sub: user.id }, secret, { expiresIn })
}

router.post('/register', async (req, res) => {
  try {
    const { name = '', email, password } = req.body || {}
    if (!email || !password) {
      return res.status(400).json({ error: 'Brak e-maila lub hasła' })
    }
    const exists = db.prepare('SELECT id FROM users WHERE email = ?').get(email)
    if (exists) {
      return res.status(409).json({ error: 'Użytkownik o takim e-mailu już istnieje' })
    }
    const hash = await bcrypt.hash(password, 10)
    const now = Date.now()
    const info = db
      .prepare('INSERT INTO users (name, email, password_hash, created_at) VALUES (?, ?, ?, ?)')
      .run(name, email, hash, now)
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(info.lastInsertRowid)
    const token = signToken(user)
    res.json({ user: publicUser(user), token })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    res.status(500).json({ error: 'Błąd serwera' })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body || {}
    if (!email || !password) {
      return res.status(400).json({ error: 'Brak e-maila lub hasła' })
    }
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email)
    if (!user) return res.status(401).json({ error: 'Nieprawidłowe dane logowania' })
    const ok = await bcrypt.compare(password, user.password_hash)
    if (!ok) return res.status(401).json({ error: 'Nieprawidłowe dane logowania' })
    const token = signToken(user)
    res.json({ user: publicUser(user), token })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    res.status(500).json({ error: 'Błąd serwera' })
  }
})

router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body || {}
    if (!email) return res.status(400).json({ error: 'Brak e-maila' })
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email)

    // Always respond 200 to avoid user enumeration
    res.json({ ok: true })

    if (!user) return

    const token = crypto.randomBytes(24).toString('hex')
    const now = Date.now()
    const expires = now + 1000 * 60 * 60 // 1h
    db.prepare(`
      INSERT INTO password_resets (user_id, token, expires_at, used, created_at)
      VALUES (?, ?, ?, 0, ?)
    `).run(user.id, token, expires, now)

    const appUrl = process.env.APP_URL || 'http://localhost:5173'
    const link = `${appUrl}/ustaw-haslo?token=${encodeURIComponent(token)}`
    try {
      await sendResetEmail(email, link)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('MAIL ERROR:', err.message)
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    // Still mask errors
  }
})

router.post('/reset-password', async (req, res) => {
  try {
    const { token, newPassword, confirmPassword } = req.body || {}

    if (!token || !newPassword || !confirmPassword) {
      return res.status(400).json({ error: 'Brak wymaganych pól' })
    }
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: 'Hasła nie są takie same' })
    }
    if (String(newPassword).length < 8) {
      return res.status(400).json({ error: 'Hasło musi mieć co najmniej 8 znaków' })
    }

    const row = db.prepare('SELECT * FROM password_resets WHERE token = ?').get(token)
    if (!row || row.used) return res.status(400).json({ error: 'Token jest nieprawidłowy' })
    if (Date.now() > row.expires_at) return res.status(400).json({ error: 'Token wygasł' })
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(row.user_id)
    if (!user) return res.status(400).json({ error: 'Użytkownik nie istnieje' })

    const newHash = await bcrypt.hash(newPassword, 10)
    db.prepare('UPDATE users SET password_hash = ? WHERE id = ?').run(newHash, user.id)
    db.prepare('UPDATE password_resets SET used = 1 WHERE id = ?').run(row.id)
    res.json({ ok: true })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    res.status(500).json({ error: 'Błąd serwera' })
  }
})

export default router
