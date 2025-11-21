import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'

const API_URL = import.meta.env.VITE_API_URL || 'https://api007.angloboost.pl'

export default function UsersAdmin() {
    const { user, token } = useAuth()
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
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

    useEffect(() => {
        filterUsers()
    }, [searchTerm, items])

    const load = async () => {
        setLoading(true)
        setError('')
        try {
            const res = await fetch(`${API_URL}/api/admin/users`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data?.error || 'Błąd pobierania')
            setItems(data.users || [])
        } catch (e) {
            setError(e.message || 'Błąd pobierania')
        } finally {
            setLoading(false)
        }
    }

    const filterUsers = () => {
        if (!searchTerm.trim()) {
            setFilteredItems(items)
            return
        }

        const term = searchTerm.toLowerCase().trim()
        const isEmailSearch = term.includes('@')

        const filtered = items.filter(user => {
            if (isEmailSearch) {
                // Szukaj po emailu
                return user.email.toLowerCase().includes(term)
            } else {
                // Szukaj po nazwie użytkownika
                const userName = user.name || ''
                return userName.toLowerCase().includes(term)
            }
        })

        setFilteredItems(filtered)
    }

    const removeUser = async (id, email) => {
        if (email === 'admin1927@gmail.com') {
            alert('Nie można usunąć konta administratora.')
            return
        }
        if (!confirm(`Czy na pewno chcesz usunąć użytkownika ${email}?`)) return
        try {
            const res = await fetch(`${API_URL}/api/admin/users/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` }
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data?.error || 'Błąd usuwania')
            setItems(prev => prev.filter(u => u.id !== id))
        } catch (e) {
            alert(e.message || 'Błąd usuwania')
        }
    }

    const clearSearch = () => {
        setSearchTerm('')
    }

    const getSearchPlaceholder = () => {
        if (searchTerm.includes('@')) {
            return 'Szukaj po adresie email...'
        }
        return 'Szukaj po nazwie użytkownika...'
    }

    const getSearchIcon = () => {
        if (searchTerm.includes('@')) {
            return '✉️'
        }
        return '👤'
    }

    if (!isAdmin) return null

    return (
        <main className="sections users-admin" style={{ paddingTop: 20, paddingBottom: 40 }}>
            <div className="container">
                <div className="admin-header">
                    <h1 className="admin-title">Zarządzanie użytkownikami</h1>
                    <p className="admin-subtitle">Przeglądaj i zarządzaj kontami użytkowników systemu</p>
                </div>

                {error && <div className="auth-alert error-alert">{error}</div>}

                <div className="admin-actions">
                    <div className="search-section">
                        <div className="search-container">
                            <span className="search-icon">{getSearchIcon()}</span>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder={getSearchPlaceholder()}
                                className="search-input"
                            />
                            {searchTerm && (
                                <button className="clear-search-btn" onClick={clearSearch} title="Wyczyść wyszukiwanie">
                                    ❌
                                </button>
                            )}
                        </div>
                        <div className="search-hint">
                            {searchTerm.includes('@')
                                ? 'Wyszukiwanie po adresie email'
                                : 'Wyszukiwanie po nazwie użytkownika'
                            }
                        </div>
                    </div>

                    <div className="actions-right">
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
                            <span className="stat-item">Znaleziono: {filteredItems.length}</span>
                            {searchTerm && (
                                <span className="stat-item search-stat">
                  Szukasz: "{searchTerm}"
                </span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="users-grid">
                    {filteredItems.length === 0 && !loading && (
                        <div className="empty-state">
                            {searchTerm ? (
                                <>
                                    <div className="empty-icon">🔍</div>
                                    <h3>Nie znaleziono użytkowników</h3>
                                    <p>Brak wyników dla wyszukiwania "{searchTerm}"</p>
                                    <button className="btn btn--outline" onClick={clearSearch}>
                                        Wyczyść wyszukiwanie
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div className="empty-icon">👥</div>
                                    <h3>Brak użytkowników</h3>
                                    <p>Nie znaleziono żadnych użytkowników w systemie</p>
                                </>
                            )}
                        </div>
                    )}

                    {filteredItems.map(u => (
                        <div key={u.id} className={`user-card ${u.email === 'admin1927@gmail.com' ? 'admin-user' : ''}`}>
                            <div className="user-avatar">
                                {u.name ? u.name.charAt(0).toUpperCase() : u.email.charAt(0).toUpperCase()}
                            </div>

                            <div className="user-info">
                                <div className="user-name">{u.name || 'Brak nazwy'}</div>
                                <div className="user-email">{u.email}</div>
                                <div className="user-meta">
                                    Dołączył: {new Date(u.created_at).toLocaleDateString('pl-PL')}
                                </div>
                                {u.email === 'admin1927@gmail.com' && (
                                    <div className="admin-badge">Administrator</div>
                                )}
                            </div>

                            <div className="user-actions">
                                <button
                                    className={`btn btn--danger delete-btn ${u.email === 'admin1927@gmail.com' ? 'disabled' : ''}`}
                                    disabled={u.email === 'admin1927@gmail.com'}
                                    title={u.email === 'admin1927@gmail.com' ? 'Nie można usunąć konta administratora' : 'Usuń użytkownika'}
                                    onClick={() => removeUser(u.id, u.email)}
                                >
                                    🗑️ Usuń
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .users-admin {
                    background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%);
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
                    align-items: flex-start;
                    margin-bottom: 2rem;
                    flex-wrap: wrap;
                    gap: 1.5rem;
                }

                .search-section {
                    flex: 1;
                    min-width: 300px;
                    max-width: 400px;
                }

                .search-container {
                    position: relative;
                    display: flex;
                    align-items: center;
                    background: white;
                    border-radius: 12px;
                    padding: 0.5rem;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }

                .search-container:focus-within {
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                    transform: translateY(-1px);
                }

                .search-icon {
                    position: absolute; /* musi być absolute, fixed, or relative w zależności od celu */
                    right: 0.75rem;     /* to umieszcza ikonę od prawej */
                    left: auto;         /* USUWA ewentualny left: 22rem */
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 1.1rem;
                    z-index: 2;
                }



                .search-input {
                    flex: 1;
                    border: none;
                    outline: none;
                    padding: 0.75rem 0;
                    font-size: 1rem;
                    background: transparent;
                    color: #1f2937;
                }

                .search-input::placeholder {
                    color: #9ca3af;
                }

                .clear-search-btn {
                    background: none;
                    border: none;
                    padding: 0.5rem;
                    cursor: pointer;
                    border-radius: 6px;
                    transition: background-color 0.2s ease;
                    font-size: 0.9rem;
                }

                .clear-search-btn:hover {
                    background: #f3f4f6;
                }

                .search-hint {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 0.875rem;
                    margin-top: 0.5rem;
                    font-style: italic;
                }

                .actions-right {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    align-items: flex-end;
                }

                .refresh-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    white-space: nowrap;
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
                    justify-content: flex-end;
                }

                .stat-item {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    color: white;
                    font-weight: 500;
                    backdrop-filter: blur(10px);
                    font-size: 0.875rem;
                }

                .search-stat {
                    background: rgba(34, 197, 94, 0.2);
                    border: 1px solid rgba(34, 197, 94, 0.3);
                }

                .users-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 1.5rem;
                }

                .user-card {
                    background: white;
                    border-radius: 16px;
                    padding: 1.5rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    transition: all 0.3s ease;
                    border-left: 4px solid #0ea5e9;
                }

                .user-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                }

                .user-card.admin-user {
                    border-left-color: #ef4444;
                    background: linear-gradient(135deg, #fff, #fef2f2);
                }

                .user-avatar {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #0ea5e9, #3b82f6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 1.5rem;
                    font-weight: 700;
                    flex-shrink: 0;
                }

                .admin-user .user-avatar {
                    background: linear-gradient(135deg, #ef4444, #dc2626);
                }

                .user-info {
                    flex: 1;
                    min-width: 0;
                }

                .user-name {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #1f2937;
                    margin-bottom: 0.25rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .user-email {
                    color: #4b5563;
                    font-size: 0.875rem;
                    margin-bottom: 0.5rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .user-meta {
                    color: #6b7280;
                    font-size: 0.75rem;
                    margin-bottom: 0.5rem;
                }

                .admin-badge {
                    background: #fee2e2;
                    color: #dc2626;
                    padding: 0.25rem 0.75rem;
                    border-radius: 12px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    display: inline-block;
                }

                .user-actions {
                    flex-shrink: 0;
                }

                .delete-btn {
                    padding: 0.5rem 1rem;
                    font-size: 0.875rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .delete-btn.disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    background: #9ca3af;
                }

                .delete-btn:not(.disabled):hover {
                    background: #dc2626;
                    transform: scale(1.05);
                }

                .empty-state {
                    grid-column: 1 / -1;
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
                    margin: 0 0 1.5rem 0;
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
                    .users-grid {
                        grid-template-columns: 1fr;
                    }

                    .admin-actions {
                        flex-direction: column;
                        align-items: stretch;
                    }

                    .search-section {
                        max-width: none;
                    }

                    .actions-right {
                        align-items: stretch;
                    }

                    .stats {
                        justify-content: center;
                    }

                    .user-card {
                        flex-direction: column;
                        text-align: center;
                        padding: 1.5rem 1rem;
                    }

                    .user-info {
                        width: 100%;
                    }
                }

                @media (max-width: 480px) {
                    .admin-title {
                        font-size: 2rem;
                    }

                    .user-card {
                        padding: 1rem;
                    }

                    .stats {
                        flex-direction: column;
                        align-items: center;
                    }

                    .stat-item {
                        width: 100%;
                        text-align: center;
                    }
                }
            `}</style>
        </main>
    )
}