import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { register } = useAuth()
    const { lang, t } = useLanguage()

    const onSubmit = async (e) => {
        e.preventDefault()
        setError('')

        // Walidacja hasła
        if (password !== confirmPassword) {
            setError(t('register.passwordMismatch', 'Hasła nie są identyczne'))
            return
        }

        setLoading(true)
        try {
            await register(name, email, password)
            navigate('/')
        } catch (err) {
            setError(err.message || t('register.error', 'Rejestracja nieudana'))
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="sections auth-wrap">
            <div className="container">
                <div className="auth-card">
                    <h2>{t('register.title', 'Rejestracja')}</h2>
                    <p className="sections__intro" style={{ textAlign: 'center' }}>
                        {t('register.description', 'Utwórz konto, by zapisywać postępy w ćwiczeniach.')}
                    </p>
                    {error && <div className="auth-alert">{error}</div>}
                    <form className="auth-form" onSubmit={onSubmit}>
                        <label htmlFor="name" className="visually-hidden">
                            {t('register.nameLabel', 'Imię')}
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder={t('register.namePlaceholder', 'Imię (opcjonalnie)')}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="email" className="visually-hidden">
                            {t('register.emailLabel', 'E-mail')}
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            placeholder={t('register.emailPlaceholder', 'E-mail')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password" className="visually-hidden">
                            {t('register.passwordLabel', 'Hasło')}
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            placeholder={t('register.passwordPlaceholder', 'Hasło')}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="confirmPassword" className="visually-hidden">
                            {t('register.confirmPasswordLabel', 'Powtórz hasło')}
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            required
                            placeholder={t('register.confirmPasswordPlaceholder', 'Powtórz hasło')}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <div className="auth-actions">
                            <button className="btn btn--primary" type="submit" disabled={loading}>
                                {loading ? t('register.creating', 'Tworzenie...') : t('register.submit', 'Zarejestruj')}
                            </button>
                            <Link className="btn btn--ghost" to="/logowanie">
                                {t('register.haveAccount', 'Masz już konto?')}
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}