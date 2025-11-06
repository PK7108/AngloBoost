import React, { useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import './navbar.admin.css'

export default function AdminNavbar() {
    const { user, logout } = useAuth()
    const location = useLocation()
    const isActive = (path) => location.pathname.startsWith(path)
    const isAdmin = useMemo(() => user?.email === 'admin1927@gmail.com', [user])
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleLogout = () => {
        logout()
        setMobileOpen(false)
    }

    return (
        <header className="nav admin-nav">
            <div className="container nav__inner">
                <Link to="/" className="logo" aria-label="Strona główna AngloBoost">
                    <span className="logo__flag">UK</span>
                    <span className="logo__text">AngloBoost</span>
                </Link>

                <nav aria-label="Nawigacja panelu administratora">
                    <ul className="menu admin-menu">
                        <li>
                            <NavLink
                                to="/admin/messages"
                                className={isActive('/admin/messages') ? 'is-active' : undefined}
                            >
                                Wiadomości
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/admin/users"
                                className={isActive('/admin/users') ? 'is-active' : undefined}
                            >
                                Użytkownicy
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <button
                    className="nav__toggle"
                    aria-label="Otwórz menu"
                    aria-controls="admin-mobile-menu"
                    aria-expanded={mobileOpen ? 'true' : 'false'}
                    onClick={() => setMobileOpen(v => !v)}
                    title="Menu"
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/>
                    </svg>
                </button>

                <div className="nav__cta">
                    {user ? (
                        <div className="admin-user">
                            <span className="admin-user__email" title={user.email}>{user.email}</span>
                            {isAdmin && <span className="admin-badge" title="Administrator">Admin</span>}
                            <button className="btn btn--outline" onClick={logout}>Wyloguj się</button>
                        </div>
                    ) : (
                        <Link className="btn btn--outline" to="/logowanie">Zaloguj się</Link>
                    )}
                </div>

                <div id="admin-mobile-menu" className={`mobile-menu ${mobileOpen ? 'is-open' : ''}`}>
                    <div className="mobile-menu__user-info">
                        <span className="mobile-menu__email" title={user?.email}>{user?.email}</span>
                        {isAdmin && <span className="mobile-menu__badge">Admin</span>}
                    </div>

                    <ul className="mobile-menu__list">
                        <li>
                            <NavLink
                                to="/admin/messages"
                                className={isActive('/admin/messages') ? 'is-active' : undefined}
                                onClick={() => setMobileOpen(false)}
                            >
                                Wiadomości
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/admin/users"
                                className={isActive('/admin/users') ? 'is-active' : undefined}
                                onClick={() => setMobileOpen(false)}
                            >
                                Użytkownicy
                            </NavLink>
                        </li>
                        <li className="mobile-menu__divider"></li>
                        <li>
                            <button
                                className="mobile-menu__logout-btn"
                                onClick={handleLogout}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                                </svg>
                                Wyloguj się
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}