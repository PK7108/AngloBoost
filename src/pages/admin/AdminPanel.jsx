// AdminPanel.jsx
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'

const API_URL = import.meta.env.VITE_API_URL || 'https://api007.angloboost.pl'

const statusOptions = [
    { value: 'planned', label: 'Planowane', color: '#3b82f6', bgColor: '#dbeafe' },
    { value: 'in_progress', label: 'W realizacji', color: '#f59e0b', bgColor: '#fef3c7' },
    { value: 'completed', label: 'Ukończone', color: '#10b981', bgColor: '#d1fae5' },
    { value: 'reviewed', label: 'Rozważane', color: '#8b5cf6', bgColor: '#ede9fe' },
]

export default function AdminPanel() {
    const { user, token } = useAuth()
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [editingId, setEditingId] = useState(null)
    const [editTitle, setEditTitle] = useState('')
    const [editDescription, setEditDescription] = useState('')

    const isAdmin = useMemo(() => user?.email === 'admin1927@gmail.com', [user])

    useEffect(() => {
        if (!user) return
        if (!isAdmin) {
            navigate('/')
            return
        }
        load()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, isAdmin])

    const load = async () => {
        setLoading(true)
        setError('')
        try {
            const res = await fetch(`${API_URL}/api/admin/feedback`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data?.error || 'Błąd pobierania')
            setItems(data.feedback || [])
        } catch (e) {
            setError(e.message || 'Błąd pobierania')
        } finally {
            setLoading(false)
        }
    }

    const changeStatus = async (id, status) => {
        try {
            const res = await fetch(`${API_URL}/api/admin/feedback/${id}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ status })
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data?.error || 'Błąd aktualizacji')
            setItems(prev => prev.map(i => i.id === id ? { ...i, status } : i))
        } catch (e) {
            alert(e.message || 'Błąd aktualizacji')
        }
    }

    const removeItem = async (id) => {
        if (!confirm('Czy na pewno chcesz usunąć to zgłoszenie?')) return
        try {
            const res = await fetch(`${API_URL}/api/admin/feedback/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` }
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data?.error || 'Błąd usuwania')
            setItems(prev => prev.filter(i => i.id !== id))
        } catch (e) {
            alert(e.message || 'Błąd usuwania')
        }
    }

    const startEdit = (item) => {
        setEditingId(item.id)
        setEditTitle(item.title)
        setEditDescription(item.description)
    }

    const cancelEdit = () => {
        setEditingId(null)
        setEditTitle('')
        setEditDescription('')
    }

    const saveEdit = async (id) => {
        if (!editTitle.trim()) {
            alert('Tytuł nie może być pusty')
            return
        }

        try {
            const res = await fetch(`${API_URL}/api/admin/feedback/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ title: editTitle, description: editDescription })
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data?.error || 'Błąd zapisu')
            setItems(prev => prev.map(i => i.id === id ? { ...i, title: editTitle, description: editDescription } : i))
            cancelEdit()
        } catch (e) {
            alert(e.message || 'Błąd zapisu')
        }
    }

    const getStatusStyle = (status) => {
        const option = statusOptions.find(opt => opt.value === status)
        return {
            color: option?.color || '#6b7280',
            backgroundColor: option?.bgColor || '#f3f4f6',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '600',
            display: 'inline-block'
        }
    }

    if (!isAdmin) return null

    return (
        <main className="sections admin-panel" style={{ paddingTop: 20, paddingBottom: 40 }}>
            <div className="container">
                <div className="admin-header">
                    <h1 className="admin-title">Panel administratora</h1>
                    <p className="admin-subtitle">Przeglądaj, zmieniaj status i usuwaj zgłoszenia użytkowników</p>
                </div>

                {error && <div className="auth-alert error-alert">{error}</div>}

                <div className="admin-actions">
                    <button className="btn btn--primary refresh-btn" onClick={load} disabled={loading}>
                        {loading ? (
                            <>
                                <span className="spinner"></span>
                                Ładowanie...
                            </>
                        ) : (
                            'Odśwież'
                        )}
                    </button>
                    <div className="stats">
                        <span className="stat-item">Łącznie: {items.length}</span>
                        {statusOptions.map(status => (
                            <span key={status.value} className="stat-item" style={{ color: status.color }}>
                {status.label}: {items.filter(item => item.status === status.value).length}
              </span>
                        ))}
                    </div>
                </div>

                <div className="feedback-list">
                    {items.length === 0 && !loading && (
                        <div className="empty-state">
                            <div className="empty-icon">📝</div>
                            <h3>Brak zgłoszeń</h3>
                            <p>Nie ma jeszcze żadnych zgłoszeń do wyświetlenia</p>
                        </div>
                    )}

                    {items.map(f => (
                        <div key={f.id} className="feedback-card">
                            <div className="feedback-header">
                                <div className="feedback-meta">
                                    <div className="feedback-title-section">
                                        {editingId === f.id ? (
                                            <input
                                                type="text"
                                                value={editTitle}
                                                onChange={(e) => setEditTitle(e.target.value)}
                                                placeholder="Tytuł zgłoszenia"
                                                className="edit-input"
                                            />
                                        ) : (
                                            <h3 className="feedback-title">{f.title}</h3>
                                        )}
                                        <span className="feedback-type">{f.type}</span>
                                    </div>
                                    <div className="feedback-user-info">
                                        <span className="user-name">{f.user_name || 'Użytkownik'}</span>
                                        <span className="feedback-date">{new Date(f.created_at).toLocaleString()}</span>
                                        <span className="upvote-count">👍 {f.upvote_count || 0}</span>
                                    </div>
                                </div>
                                <button
                                    className="btn btn--danger delete-btn"
                                    onClick={() => removeItem(f.id)}
                                    title="Usuń zgłoszenie"
                                >
                                    🗑️
                                </button>
                            </div>

                            {editingId === f.id ? (
                                <div className="edit-form">
                  <textarea
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      placeholder="Opis zgłoszenia"
                      rows={4}
                      className="edit-textarea"
                  />
                                    <div className="edit-actions">
                                        <button className="btn btn--primary save-btn" onClick={() => saveEdit(f.id)}>
                                            💾 Zapisz
                                        </button>
                                        <button className="btn btn--ghost cancel-btn" onClick={cancelEdit}>
                                            ❌ Anuluj
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <p className="feedback-description">{f.description}</p>
                                    <div className="feedback-actions">
                                        <button className="btn btn--outline edit-btn" onClick={() => startEdit(f)}>
                                            ✏️ Edytuj
                                        </button>
                                    </div>
                                </>
                            )}

                            <div className="status-section">
                                <label className="status-label">Status:</label>
                                <select
                                    value={f.status}
                                    onChange={(e) => changeStatus(f.id, e.target.value)}
                                    className="status-select"
                                    style={getStatusStyle(f.status)}
                                >
                                    {statusOptions.map(o => (
                                        <option key={o.value} value={o.value}>{o.label}</option>
                                    ))}
                                </select>
                                <span className="status-badge" style={getStatusStyle(f.status)}>
                  {statusOptions.find(o => o.value === f.status)?.label}
                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .admin-panel {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }

        .admin-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .admin-title {
          color: white;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .admin-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
          margin: 0;
        }

        .admin-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .refresh-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .stats {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .stat-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          color: white;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }

        .feedback-list {
          display: grid;
          gap: 1rem;
        }

        .feedback-card {
          background: white;
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border-left: 6px solid;
          border-left-color: #667eea;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .feedback-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .feedback-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .feedback-meta {
          flex: 1;
        }

        .feedback-title-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }

        .feedback-title {
          margin: 0;
          color: #1f2937;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .feedback-type {
          background: #e5e7eb;
          color: #6b7280;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .feedback-user-info {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .user-name {
          color: #4b5563;
          font-weight: 500;
        }

        .feedback-date {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .upvote-count {
          background: #f3f4f6;
          color: #4b5563;
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          font-size: 0.875rem;
        }

        .delete-btn {
          padding: 0.5rem;
          min-width: auto;
        }

        .feedback-description {
          color: #4b5563;
          line-height: 1.6;
          margin: 1rem 0;
          white-space: pre-wrap;
        }

        .edit-form {
          margin: 1rem 0;
          display: grid;
          gap: 1rem;
        }

        .edit-input {
          padding: 0.75rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s ease;
        }

        .edit-input:focus {
          outline: none;
          border-color: #667eea;
        }

        .edit-textarea {
          padding: 0.75rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 0.875rem;
          resize: vertical;
          min-height: 100px;
          transition: border-color 0.2s ease;
          font-family: inherit;
        }

        .edit-textarea:focus {
          outline: none;
          border-color: #667eea;
        }

        .edit-actions {
          display: flex;
          gap: 0.75rem;
        }

        .save-btn, .cancel-btn, .edit-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .feedback-actions {
          margin: 1rem 0;
        }

        .status-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #f3f4f6;
        }

        .status-label {
          color: #6b7280;
          font-weight: 500;
          font-size: 0.875rem;
        }

        .status-select {
          padding: 0.5rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 0.875rem;
          cursor: pointer;
          transition: border-color 0.2s ease;
        }

        .status-select:focus {
          outline: none;
          border-color: #667eea;
        }

        .status-badge {
          margin-left: auto;
          font-size: 0.75rem;
        }

        .empty-state {
          text-align: center;
          padding: 3rem 2rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .empty-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .empty-state h3 {
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .empty-state p {
          color: #6b7280;
          margin: 0;
        }

        .error-alert {
          background: #fee2e2;
          color: #dc2626;
          border: 1px solid #fecaca;
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .admin-actions {
            flex-direction: column;
            align-items: stretch;
          }
          
          .stats {
            justify-content: center;
          }
          
          .feedback-header {
            flex-direction: column;
            align-items: stretch;
          }
          
          .feedback-user-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
        </main>
    )
}