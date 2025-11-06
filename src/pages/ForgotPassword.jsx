import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { lang, t } = useLanguage()

    const onSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            await fetch(`${API_URL}/api/auth/forgot-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            })
            setSent(true)
        } catch (err) {
            setError(t('forgotPassword.error', 'Wystąpił błąd. Spróbuj ponownie później.'))
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="sections auth-wrap">
            <div className="container">
                <div className="auth-card">
                    <h2>{t('forgotPassword.title', 'Reset hasła')}</h2>
                    {!sent ? (
                        <>
                            <p className="sections__intro" style={{ textAlign: 'center' }}>
                                {t('forgotPassword.description', 'Podaj adres e-mail powiązany z Twoim kontem. Wyślemy do Ciebie wiadomość.')}
                            </p>
                            {error && <div className="auth-alert">{error}</div>}
                            <form className="auth-form" onSubmit={onSubmit}>
                                <label htmlFor="email" className="visually-hidden">
                                    {t('forgotPassword.emailLabel', 'E-mail')}
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder={t('forgotPassword.emailPlaceholder', 'E-mail')}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="auth-actions">
                                    <button className="btn btn--primary" type="submit" disabled={loading}>
                                        {loading ? t('forgotPassword.sending', 'Wysyłanie...') : t('forgotPassword.submit', 'Wyślij link resetu')}
                                    </button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <div className="auth-success">
                            {t('forgotPassword.success', 'Jeśli konto istnieje, wysłaliśmy e-mail z instrukcjami na adres:')} <strong>{email}</strong>.
                            {t('forgotPassword.checkSpam', ' Sprawdź skrzynkę odbiorczą oraz folder spam.')}
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}