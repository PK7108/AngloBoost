import React, { useMemo, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { QUESTIONS } from './placement/questions.js'
import './placement/placement.css'

export default function PlacementTest() {
  const navigate = useNavigate()
  const total = QUESTIONS.length
  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem('placementAnswers')
    return saved ? JSON.parse(saved) : {}
  })
  const [startedAt] = useState(() => {
    const saved = localStorage.getItem('placementStartedAt')
    return saved ? Number(saved) : Date.now()
  })
  const [error, setError] = useState('')

  useEffect(() => {
    localStorage.setItem('placementAnswers', JSON.stringify(answers))
  }, [answers])

  useEffect(() => {
    localStorage.setItem('placementStartedAt', String(startedAt))
  }, [startedAt])

  const answeredCount = useMemo(
    () => Object.keys(answers).filter((k) => answers[k] !== undefined && answers[k] !== '').length,
    [answers]
  )
  const progress = Math.round((answeredCount / total) * 100)

  const onSelect = (qid, value) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }))
  }

  const finish = () => {
    const endedAt = Date.now()
    const payload = { answers, startedAt, endedAt }
    localStorage.setItem('placementLatest', JSON.stringify(payload))
    navigate('/test-poziomujacy/wynik', { state: payload, replace: false })
  }

  return (
    <main className="placement">
      <div className="container">
        <h2 className="page-title">Test poziomujący (A1–C2)</h2>
        <p className="lead">Odpowiedz na 40 pytań. Na końcu zobaczysz wynik, szacowany poziom oraz analizę mocnych i słabych stron.</p>

        <div className="panel">
          <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
            <div className="progress__bar" style={{ width: `${progress}%` }} />
          </div>
          <div className="progress__info">
            <span>Postęp: {answeredCount}/{total}</span>
            <span>{progress}%</span>
          </div>
          <div className="helper">Możesz zakończyć test w dowolnym momencie. Pytania bez odpowiedzi nie będą punktowane.</div>
        </div>

        <div className="test-grid">
          {QUESTIONS.map((q, idx) => (
            <article className="question-card" key={q.id}>
              <div className="q-head">
                <span className="badge badge--level">Poziom: {q.level}</span>
                <span className="badge badge--cat">{q.category ? q.category : '—'}</span>
                <span className="helper">Pytanie {idx + 1} z {total}</span>
              </div>
              <div className="q-title">{q.question}</div>

              {q.type === 'mcq' ? (
                <div className="options" role="group" aria-label={`Opcje do pytania ${idx + 1}`}>
                  {q.options.map((opt, i) => {
                    const name = `q-${q.id}`
                    const id = `q-${q.id}-opt-${i}`
                    return (
                      <label key={id} className="option" htmlFor={id}>
                        <input
                          id={id}
                          type="radio"
                          name={name}
                          checked={Number(answers[q.id]) === i}
                          onChange={() => onSelect(q.id, i)}
                        />
                        <span>{opt}</span>
                      </label>
                    )
                  })}
                </div>
              ) : (
                <div>
                  <input
                    className="text-input"
                    type="text"
                    placeholder="Wpisz odpowiedź…"
                    value={answers[q.id] || ''}
                    onChange={(e) => onSelect(q.id, e.target.value)}
                  />
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="actions">
          <button className="btn btn--ghost" onClick={() => { localStorage.removeItem('placementAnswers'); setAnswers({}) }}>
            Wyczyść odpowiedzi
          </button>
          <button className="btn btn--primary" onClick={finish}>
            Zakończ test
          </button>
        </div>
      </div>
    </main>
  )
}
