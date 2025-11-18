// hooks/useExerciseScores.js
import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'

export function useExerciseScores() {
    const [scores, setScores] = useState({})
    const [loading, setLoading] = useState(false)
    const { user, token } = useAuth()

    // Pobierz wszystkie wyniki użytkownika
    const loadScores = async () => {
        if (!user || !token) {
            // Dla niezalogowanych - spróbuj pobrać z localStorage
            const localScores = localStorage.getItem('exerciseScores')
            if (localScores) {
                setScores(JSON.parse(localScores))
            }
            return
        }

        setLoading(true)
        try {
            // const API_URL = import.meta.env.VITE_API_URL || 'https://api007.angloboost.pl'
            const API_URL = 'https://api007.angloboost.pl'
            const response = await fetch(`${API_URL}/api/exercise/scores`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            if (data.ok) {
                setScores(data.scores)
            }
        } catch (error) {
            console.error('Error loading scores:', error)
        } finally {
            setLoading(false)
        }
    }

    const clearLocalScores = () => {
        localStorage.removeItem('exerciseScores')
        setScores({})
    }

    // Zapisz wynik ćwiczenia
    const saveScore = async (exerciseId, scorePercent) => {
        // Zapisz lokalnie niezależnie od statusu logowania
        const newScores = {
            ...scores,
            [exerciseId]: {
                percent: scorePercent,
                completedAt: Date.now()
            }
        }
        setScores(newScores)

        // Dla niezalogowanych - zapisz w localStorage
        if (!user || !token) {
            localStorage.setItem('exerciseScores', JSON.stringify(newScores))
            return
        }

        // Dla zalogowanych - wyślij na serwer
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'
            await fetch(`${API_URL}/api/exercise/save-score`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    exerciseId,
                    scorePercent
                })
            })
        } catch (error) {
            console.error('Error saving score:', error)
        }
    }

    // Pobierz wynik dla konkretnego ćwiczenia
    const getScore = (exerciseId) => {
        return scores[exerciseId] || null
    }

    // Załaduj wyniki przy montowaniu komponentu
    useEffect(() => {
        loadScores()
    }, [user, token])

    return {
        scores,
        loading,
        saveScore,
        getScore,
        refreshScores: loadScores,
        clearLocalScores
    }
}