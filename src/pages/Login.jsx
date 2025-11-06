import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { login } = useAuth()
    const { lang, t } = useLanguage()

    const onSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            const u = await login(email, password)
            if (u?.email === 'admin1927@gmail.com') {
                navigate('/admin/messages')
            } else {
                navigate('/')
            }
        } catch (err) {
            setError(err.message || t('login.error', 'Logowanie nieudane'))
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="sections auth-wrap">
            <div className="container">
                <div className="auth-card">
                    <h2>{t('login.title', 'Logowanie')}</h2>
                    <p className="sections__intro" style={{ textAlign: 'center' }}>
                        {t('login.description', 'Zaloguj się, aby zapisywać swoje wyniki ćwiczeń.')}
                    </p>
                    {error && <div className="auth-alert">{error}</div>}
                    <form className="auth-form" onSubmit={onSubmit}>
                        <label htmlFor="email" className="visually-hidden">
                            {t('login.emailLabel', 'E-mail')}
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            placeholder={t('login.emailPlaceholder', 'E-mail')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password" className="visually-hidden">
                            {t('login.passwordLabel', 'Hasło')}
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            placeholder={t('login.passwordPlaceholder', 'Hasło')}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="auth-actions">
                            <button className="btn btn--primary" type="submit" disabled={loading}>
                                {loading ? t('login.loggingIn', 'Logowanie...') : t('login.submit', 'Zaloguj')}
                            </button>
                            <Link className="btn btn--ghost" to="/rejestracja">
                                {t('login.createAccount', 'Utwórz konto')}
                            </Link>
                        </div>
                    </form>
                    <div className="auth-links">
                        <Link to="/zapomniales-hasla">
                            {t('login.forgotPassword', 'Zapomniałeś hasła?')}
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}