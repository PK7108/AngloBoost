import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  QUESTIONS,
  evaluateAnswer,
  getCorrectAnswerText,
  LEVEL_WEIGHT,
  estimateLevelByWeight,
} from './placement/questions.js'
import './placement/placement.css'

function formatDuration(ms) {
  if (!ms || ms < 0) return '—'
  const s = Math.floor(ms / 1000)
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${m} min ${sec} s`
}

export default function PlacementTestResult() {
  const navigate = useNavigate()
  const location = useLocation()

  const payload = useMemo(() => {
    if (location.state) return location.state
    const saved = localStorage.getItem('placementLatest')
    return saved ? JSON.parse(saved) : null
  }, [location.state])

  if (!payload) {
    return (
      <main className="placement">
        <div className="container">
          <h2 className="page-title">Wynik testu</h2>
          <p className="lead">Nie znaleziono wyników. Wykonaj test jeszcze raz.</p>
          <div className="actions">
            <button className="btn btn--primary" onClick={() => navigate('/test-poziomujacy')}>Przejdź do testu</button>
          </div>
        </div>
      </main>
    )
  }

  const { answers, startedAt, endedAt } = payload
  const duration = formatDuration((endedAt || 0) - (startedAt || 0))

  const details = QUESTIONS.map((q) => {
    const ua = answers[q.id]
    const correct = evaluateAnswer(q, ua)
    const correctText = getCorrectAnswerText(q)
    const userText =
      q.type === 'mcq'
        ? q.options[Number(ua)] ?? ''
        : (ua ?? '')
    return {
      id: q.id,
      question: q.question,
      level: q.level,
      category: q.category,
      type: q.type,
      correct,
      correctText,
      userText,
    }
  })

  const totals = useMemo(() => {
    let correct = 0
    let weightedMax = 0
    let weightedScore = 0
    const byLevel = {}
    const byCategory = {}
    QUESTIONS.forEach((q) => {
      const lev = q.level
      const cat = q.category || 'other'
      const weight = LEVEL_WEIGHT[lev] || 1
      const isCorrect = evaluateAnswer(q, answers[q.id])

      weightedMax += weight
      if (isCorrect) {
        correct += 1
        weightedScore += weight
      }
      byLevel[lev] = byLevel[lev] || { total: 0, correct: 0 }
      byLevel[lev].total += 1
      if (isCorrect) byLevel[lev].correct += 1

      byCategory[cat] = byCategory[cat] || { total: 0, correct: 0 }
      byCategory[cat].total += 1
      if (isCorrect) byCategory[cat].correct += 1
    })
    const fraction = weightedMax ? weightedScore / weightedMax : 0
    const estimated = estimateLevelByWeight(fraction)
    return { correct, total: QUESTIONS.length, byLevel, byCategory, fraction, estimated }
  }, [answers])

  const strengths = useMemo(() => {
    const entries = Object.entries(totals.byCategory).map(([cat, v]) => ({
      cat,
      acc: v.total ? v.correct / v.total : 0,
    }))
    entries.sort((a, b) => b.acc - a.acc)
    return entries.slice(0, 2)
  }, [totals])

  const weaknesses = useMemo(() => {
    const entries = Object.entries(totals.byCategory).map(([cat, v]) => ({
      cat,
      acc: v.total ? v.correct / v.total : 0,
    }))
    entries.sort((a, b) => a.acc - b.acc)
    return entries.slice(0, 2)
  }, [totals])

  return (
    <main className="placement">
      <div className="container">
        <h2 className="page-title">Wynik testu poziomującego</h2>
        <p className="lead">Poniżej znajdziesz podsumowanie, szacowany poziom CEFR oraz przegląd odpowiedzi.</p>

        <div className="result-summary">
          <section className="panel">
            <h3>Podsumowanie</h3>
            <div className="kpi">
              <div className="tile">
                <h4>Poprawne</h4>
                <div><strong>{totals.correct}</strong> / {totals.total}</div>
              </div>
              <div className="tile">
                <h4>Szacowany poziom</h4>
                <div><strong>{totals.estimated}</strong></div>
                <div className="helper">na podstawie ważonego wyniku</div>
              </div>
              <div className="tile">
                <h4>Czas</h4>
                <div><strong>{duration}</strong></div>
              </div>
            </div>

            <div className="strengths">
              <h4>Mocne strony</h4>
              <ul>
                {strengths.map((s) => (
                  <li key={s.cat}>
                    <strong>{s.cat}</strong>: {(s.acc * 100).toFixed(0)}%
                  </li>
                ))}
              </ul>
            </div>

            <div className="weaknesses">
              <h4>Obszary do poprawy</h4>
              <ul>
                {weaknesses.map((w) => (
                  <li key={w.cat}>
                    <strong>{w.cat}</strong>: {(w.acc * 100).toFixed(0)}%
                  </li>
                ))}
              </ul>
            </div>

            <div className="actions">
              <button
                className="btn"
                onClick={() => {
                  localStorage.removeItem('placementAnswers')
                  localStorage.removeItem('placementStartedAt')
                  navigate('/test-poziomujacy')
                }}
              >
                Powtórz test
              </button>
              <button className="btn btn--primary" onClick={() => navigate('/')}>
                Strona główna
              </button>
            </div>
          </section>

          <section className="panel">
            <h3>Skuteczność wg poziomu</h3>
            <ul>
              {['A1','A2','B1','B2','C1','C2'].map((lev) => {
                const v = totals.byLevel[lev] || { total: 0, correct: 0 }
                const pct = v.total ? Math.round((v.correct / v.total) * 100) : 0
                return (
                  <li key={lev}>
                    <span className="badge badge--level">Poziom: {lev}</span>{' '}
                    {v.correct} / {v.total} ({pct}%)
                  </li>
                )
              })}
            </ul>
          </section>
        </div>

        <section className="panel review">
          <h3>Przegląd odpowiedzi</h3>
          {details.map((d, i) => (
            <div key={d.id} className={`review-item ${d.correct ? 'correct' : 'incorrect'}`}>
              <div className="review-row">
                <div><strong>{i + 1}.</strong></div>
                <div>
                  <div className="helper">[{d.level}] {d.category}</div>
                  <div className="q-title">{d.question}</div>
                  <div>
                    Twoja odpowiedź:{' '}
                    <span className={`answer ${d.correct ? 'answer--ok' : 'answer--bad'}`}>
                      {d.userText || '—'}
                    </span>
                  </div>
                  {!d.correct && (
                    <div>
                      Poprawna odpowiedź:{' '}
                      <span className="answer">{d.correctText}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
