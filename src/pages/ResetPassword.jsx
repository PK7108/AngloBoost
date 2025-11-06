import React, { useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export default function ResetPassword() {
  const [params] = useSearchParams()
  const token = useMemo(() => params.get('token') || '', [params])
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, oldPassword, newPassword })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Nie udało się zresetować hasła')
      setDone(true)
    } catch (err) {
      setError(err.message || 'Wystąpił błąd')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="sections auth-wrap">
      <div className="container">
        <div className="auth-card">
          <h2>Ustaw nowe hasło</h2>
          {!token && (
            <div className="auth-alert">
              Brak tokenu resetu w adresie. Sprawdź, czy otwierasz poprawny link.
            </div>
          )}
          {done ? (
            <div className="auth-success">
              Hasło zostało zmienione. Możesz się teraz <Link to="/logowanie">zalogować</Link>.
            </div>
          ) : (
            <>
              <p className="sections__intro" style={{ textAlign: 'center' }}>
                Wpisz swoje stare hasło oraz nowe hasło.
              </p>
              {error && <div className="auth-alert">{error}</div>}
              <form className="auth-form" onSubmit={onSubmit}>
                <label htmlFor="old" className="visually-hidden">Stare hasło</label>
                <input
                  id="old"
                  type="password"
                  required
                  placeholder="Stare hasło"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  disabled={!token}
                />
                <label htmlFor="new" className="visually-hidden">Nowe hasło</label>
                <input
                  id="new"
                  type="password"
                  required
                  placeholder="Nowe hasło"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  disabled={!token}
                />
                <div className="auth-actions">
                  <button className="btn btn--primary" type="submit" disabled={!token || loading}>
                    {loading ? 'Zapisywanie...' : 'Ustaw hasło'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
