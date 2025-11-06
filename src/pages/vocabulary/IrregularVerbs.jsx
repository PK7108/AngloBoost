import React from 'react'
import '../../styles/topic-cards.css'
import '../../styles/vocabulary.css'

const VERBS = [
  ['be', 'was/were', 'been', 'być'],
  ['become', 'became', 'become', 'stawać się'],
  ['begin', 'began', 'begun', 'zaczynać'],
  ['break', 'broke', 'broken', 'łamać'],
  ['bring', 'brought', 'brought', 'przynosić'],
  ['build', 'built', 'built', 'budować'],
  ['buy', 'bought', 'bought', 'kupować'],
  ['catch', 'caught', 'caught', 'łapać'],
  ['choose', 'chose', 'chosen', 'wybierać'],
  ['come', 'came', 'come', 'przychodzić'],
  ['do', 'did', 'done', 'robić'],
  ['draw', 'drew', 'drawn', 'rysować'],
  ['drink', 'drank', 'drunk', 'pić'],
  ['drive', 'drove', 'driven', 'prowadzić'],
  ['eat', 'ate', 'eaten', 'jeść'],
  ['fall', 'fell', 'fallen', 'upadać'],
  ['feel', 'felt', 'felt', 'czuć'],
  ['find', 'found', 'found', 'znaleźć'],
  ['fly', 'flew', 'flown', 'latać'],
  ['forget', 'forgot', 'forgotten', 'zapominać'],
  ['get', 'got', 'got/gotten', 'dostawać'],
  ['give', 'gave', 'given', 'dawać'],
  ['go', 'went', 'gone', 'iść'],
  ['grow', 'grew', 'grown', 'rosnąć'],
  ['have', 'had', 'had', 'mieć'],
  ['hear', 'heard', 'heard', 'słyszeć'],
  ['keep', 'kept', 'kept', 'trzymać'],
  ['know', 'knew', 'known', 'wiedzieć/znać'],
  ['learn', 'learnt/learned', 'learnt/learned', 'uczyć się'],
  ['leave', 'left', 'left', 'opuszczać'],
  ['lose', 'lost', 'lost', 'gubić'],
  ['make', 'made', 'made', 'robić'],
  ['meet', 'met', 'met', 'spotykać'],
  ['pay', 'paid', 'paid', 'płacić'],
  ['read', 'read', 'read', 'czytać'],
  ['run', 'ran', 'run', 'biec'],
  ['say', 'said', 'said', 'mówić'],
  ['see', 'saw', 'seen', 'widzieć'],
  ['sell', 'sold', 'sold', 'sprzedawać'],
  ['send', 'sent', 'sent', 'wysyłać'],
  ['sit', 'sat', 'sat', 'siedzieć'],
  ['sleep', 'slept', 'slept', 'spać'],
  ['speak', 'spoke', 'spoken', 'mówić'],
  ['spend', 'spent', 'spent', 'spędzać/wydawać'],
  ['swim', 'swam', 'swum', 'pływać'],
  ['take', 'took', 'taken', 'brać'],
  ['teach', 'taught', 'taught', 'uczyć (kogoś)'],
  ['tell', 'told', 'told', 'powiedzieć'],
  ['think', 'thought', 'thought', 'myśleć'],
  ['understand', 'understood', 'understood', 'rozumieć'],
  ['write', 'wrote', 'written', 'pisać'],
]

export default function IrregularVerbs() {
  return (
    <main className="topic-layout">
      <div className="container">
        <header className="topic-header">
          <h2>Czasowniki nieregularne</h2>
          <p className="muted">Lista z formami II i III oraz tłumaczeniem</p>
        </header>

        <article className="topic-content">
          <section className="card">
            <table className="vocab-table">
              <thead>
                <tr>
                  <th>Czasownik</th>
                  <th>II forma</th>
                  <th>III forma</th>
                  <th>Znaczenie</th>
                </tr>
              </thead>
              <tbody>
                {VERBS.map(([v, v2, v3, pl]) => (
                  <tr key={`${v}-${v2}`}>
                    <td><strong>{v}</strong></td>
                    <td>{v2}</td>
                    <td>{v3}</td>
                    <td>{pl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </article>
      </div>
    </main>
  )
}
