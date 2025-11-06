import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('ab_user')
    return raw ? JSON.parse(raw) : null
  })
  const [token, setToken] = useState(() => localStorage.getItem('ab_token') || '')

  useEffect(() => {
    if (user) {
      localStorage.setItem('ab_user', JSON.stringify(user))
    } else {
      localStorage.removeItem('ab_user')
    }
  }, [user])

  useEffect(() => {
    if (token) {
      localStorage.setItem('ab_token', token)
    } else {
      localStorage.removeItem('ab_token')
    }
  }, [token])

  const login = async (email, password) => {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data?.error || 'Logowanie nieudane')
    setUser(data.user)
    setToken(data.token)
    return data.user
  }

  const register = async (name, email, password) => {
    const res = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data?.error || 'Rejestracja nieudana')
    setUser(data.user)
    setToken(data.token)
    return data.user
  }

  const logout = () => {
    setUser(null)
    setToken('')
  }

  // const updateAccount = async ({ email, currentPassword, newPassword }) => {
  //   const payload = { email, currentPassword, newPassword }
  //   try {
  //     const res = await fetch(`${API_URL}/api/auth/account`, {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         ...(token ? { Authorization: `Bearer ${token}` } : {}),
  //       },
  //       body: JSON.stringify(payload),
  //     })
  //     const data = await res.json()
  //     if (!res.ok) throw new Error(data?.error || 'Aktualizacja nieudana')
  //     if (data.user) setUser(data.user)
  //     return { ok: true, message: 'Zaktualizowano konto' }
  //   } catch (err) {
  //     // Fallback: zaktualizuj email lokalnie (np. w trybie demo/offline)
  //     if (email) setUser((prev) => (prev ? { ...prev, email } : prev))
  //     return { ok: true, message: 'Zaktualizowano dane lokalnie' }
  //   }
  // }

    const updateAccount = async ({ email, currentPassword, newPassword }) => {
        const payload = { email, currentPassword, newPassword }
        try {
            const res = await fetch(`${API_URL}/api/auth/account`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: JSON.stringify(payload),
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data?.error || 'Aktualizacja nieudana')
            if (data.user) setUser(data.user)
            return { ok: true, message: data.message || 'Zaktualizowano konto' }
        } catch (err) {
            // Fallback: zaktualizuj email lokalnie (np. w trybie demo/offline)
            if (email && !currentPassword && !newPassword) {
                setUser((prev) => (prev ? { ...prev, email } : prev))
                return { ok: true, message: 'Zaktualizowano dane lokalnie' }
            }
            throw err
        }
    }

  const saveExerciseResult = (category, name, percent) => {
    if (!user) return false
    const key = `ab_progress_${user.id}`
    const current = JSON.parse(localStorage.getItem(key) || '[]')
    const entry = {
      ts: Date.now(),
      category,
      name,
      percent,
    }
    const next = [entry, ...current].slice(0, 200)
    localStorage.setItem(key, JSON.stringify(next))
    return true
  }

  const value = useMemo(
    () => ({ user, token, login, register, logout, updateAccount, saveExerciseResult }),
    [user, token]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
