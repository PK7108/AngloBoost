import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext.jsx'
import './account.css'

export default function AccountSettings() {
  const { user, updateAccount } = useAuth()
  const [email, setEmail] = useState(user?.email || '')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [status, setStatus] = useState({ type: '', msg: '' })
  const [loading, setLoading] = useState(false)
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
    const [deletePassword, setDeletePassword] = useState('')
    const [deleteLoading, setDeleteLoading] = useState(false)

  useEffect(() => {
    setEmail(user?.email || '')
  }, [user])

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', msg: '' })

    if (newPassword && newPassword.length < 6) {
      setStatus({ type: 'error', msg: 'Nowe hasło powinno mieć co najmniej 6 znaków.' })
      return
    }
    if (newPassword && newPassword !== confirmPassword) {
      setStatus({ type: 'error', msg: 'Hasła nie są identyczne.' })
      return
    }

    setLoading(true)
    try {
      const res = await updateAccount({ email, currentPassword, newPassword })
      setStatus({ type: 'success', msg: res?.message || 'Zapisano zmiany.' })
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } catch (err) {
      setStatus({ type: 'error', msg: err.message || 'Aktualizacja nieudana.' })
    } finally {
      setLoading(false)
    }
  }

    const handleDeleteAccount = async () => {
        if (!deletePassword) {
            setStatus({ type: 'error', msg: 'Podaj hasło aby potwierdzić usunięcie konta.' })
            return
        }

        setDeleteLoading(true)
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:4000'}/api/auth/account`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('ab_token')}`
                },
                body: JSON.stringify({ password: deletePassword })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data?.error || 'Usunięcie konta nieudane')
            }

            setStatus({ type: 'success', msg: 'Konto zostało pomyślnie usunięte. Nastąpi wylogowanie...' })

            // RĘCZNE WYLOGOWANIE - PEŁNE CZYSZCZENIE
            // 1. Wyczyść localStorage
            localStorage.removeItem('ab_token')
            localStorage.removeItem('ab_user')

            // 2. Wyczyść sessionStorage na wszelki wypadek
            sessionStorage.clear()

            // 3. Wywołaj logout z kontekstu (jeśli jeszcze dostępny)
            try {
                logout()
            } catch (e) {
                console.log('Logout z kontekstu nieudany, kontynuujemy czyszczenie')
            }

            // 4. Natychmiastowe przekierowanie
            setTimeout(() => {
                // Force refresh na stronie głównej
                window.location.href = '/?logout=true'
            }, 1000)

        } catch (err) {
            setStatus({ type: 'error', msg: err.message || 'Błąd podczas usuwania konta.' })
            setDeleteLoading(false)
            setShowDeleteConfirm(false)
            setDeletePassword('')
        }
    }

  return (
    <main className="account">
      <div className="container">
        <h2 className="page-title">Ustawienia konta</h2>
        <p className="lead">Zmieniaj dane swojego konta. Wkrótce dodamy więcej opcji personalizacji.</p>

        <form className="card form" onSubmit={onSubmit}>
          <fieldset className="field-group">
            <legend>Dane logowania</legend>
            <label className="field">
              <span className="label">Email</span>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </fieldset>

          <fieldset className="field-group">
            <legend>Zmiana hasła (opcjonalnie)</legend>
            <label className="field">
              <span className="label">Aktualne hasło</span>
              <input
                className="input"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Wpisz obecne hasło"
              />
            </label>
            <div className="grid-2">
              <label className="field">
                <span className="label">Nowe hasło</span>
                <input
                  className="input"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Pozostaw puste, aby nie zmieniać"
                />
              </label>
              <label className="field">
                <span className="label">Powtórz nowe hasło</span>
                <input
                  className="input"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </label>
            </div>
          </fieldset>

          {status.msg && (
            <div className={`note ${status.type === 'error' ? 'note--error' : 'note--ok'}`}>
              {status.msg}
            </div>
          )}

          <div className="actions">
            <button className="btn" type="button" onClick={() => window.history.back()}>Wróć</button>
            <button className="btn btn--primary" type="submit" disabled={loading}>
              {loading ? 'Zapisywanie…' : 'Zapisz zmiany'}
            </button>
          </div>
        </form>
          {/* Sekcja usuwania konta */}
          {/* Sekcja usuwania konta */}
          <div className="card form danger-zone">
              <fieldset className="field-group">
                  <legend className="danger-legend">
                      Chcesz usunąć swoje konto?
                  </legend>
                  <div className="danger-content">
                      <p className="danger-warning">
                          <strong>Usunięcie konta jest nieodwracalne.</strong><br />
                          Wszystkie Twoje dane, wyniki ćwiczeń i historia zostaną trwale usunięte.
                      </p>

                      {!showDeleteConfirm ? (
                          <button
                              className="btn btn--danger"
                              type="button"
                              onClick={() => setShowDeleteConfirm(true)}
                          >
                              🗑️ Usuń konto
                          </button>
                      ) : (
                          <div className="delete-confirm">
                              <p className="delete-warning">
                                  <strong>⚠️ Czy na pewno chcesz usunąć konto?</strong><br />
                                  Ta operacja jest nieodwracalna. Wpisz swoje hasło aby potwierdzić.
                              </p>
                              <label className="field">
                                  <span className="label">Potwierdź hasłem</span>
                                  <input
                                      className="input"
                                      type="password"
                                      value={deletePassword}
                                      onChange={(e) => setDeletePassword(e.target.value)}
                                      placeholder="Wpisz swoje obecne hasło"
                                  />
                              </label>
                              <div className="delete-actions">
                                  <button
                                      className="btn"
                                      type="button"
                                      onClick={() => {
                                          setShowDeleteConfirm(false)
                                          setDeletePassword('')
                                      }}
                                  >
                                      Anuluj
                                  </button>
                                  <button
                                      className="btn btn--danger"
                                      type="button"
                                      onClick={handleDeleteAccount}
                                      disabled={deleteLoading || !deletePassword}
                                  >
                                      {deleteLoading ? 'Usuwanie…' : '🗑️ Tak, usuń konto'}
                                  </button>
                              </div>
                          </div>
                      )}
                  </div>
              </fieldset>
          </div>
      </div>
    </main>
  )
}
