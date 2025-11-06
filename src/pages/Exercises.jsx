import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const grammar = [
  { pl: 'Wymowa', en: 'Pronunciation' },
  { pl: 'Części mowy', en: 'Parts of Speech' },
  { pl: 'Czasy angielskie', en: 'Tenses' },
  { pl: 'Wyrażenia i zwroty', en: 'Phrases & Expressions' },
  { pl: 'Mowa zależna', en: 'Reported Speech' },
  { pl: 'Strona bierna', en: 'Passive Voice' },
  { pl: 'Okresy warunkowe', en: 'Conditionals' },
]

const vocabulary = [
  { pl: 'Słownik tematyczny', en: 'Thematic vocabulary' },
  { pl: 'Idiomy', en: 'Idioms' },
  { pl: 'Przysłowia', en: 'Proverbs' },
  { pl: 'Czasowniki nieregularne', en: 'Irregular verbs' },
  { pl: 'Slang (mowa potoczna)', en: 'Slang (colloquial speech)' },
  { pl: 'Business English', en: 'Business English' },
]

export default function Exercises() {
  const { user } = useAuth()
  const { lang, t } = useLanguage()

  return (
    <main className="sections">
      <div className="container">
        <h2>{t('exercises.title', 'Ćwiczenia')}</h2>
        <p className="sections__intro">
          {user
            ? t('exercises.intro.loggedIn', 'Jesteś zalogowany — Twoje wyniki będą zapisywane automatycznie.')
            : t('exercises.intro.loggedOut', 'Możesz rozwiązywać ćwiczenia bez logowania, ale wyniki nie będą zapisywane.')}
        </p>

        <h3 style={{ marginTop: '1rem' }}>{t('exercises.grammar', 'Gramatyka')}</h3>
        <div className="grid" style={{ marginTop: '0.6rem' }}>
          {grammar.map((g) => (
            <Link
              key={g.pl}
              to={`/cwiczenia/gramatyka/${g.pl.toLowerCase().replaceAll(' ', '-')}`}
              className="tile"
            >
              <div className="tile__badge" aria-hidden="true"></div>
              <h3>{lang === 'pl' ? `Ćwiczenia: ${g.pl}` : `Exercises: ${g.en}`}</h3>
              <p>{t('exercises.grammar.desc', 'Zadania utrwalające zagadnienia gramatyczne.')}</p>
              <span className="tile__link">{t('exercises.start', 'Rozpocznij →')}</span>
            </Link>
          ))}
        </div>

        <h3 style={{ marginTop: '1.2rem' }}>{t('exercises.vocabulary', 'Słownictwo')}</h3>
        <div className="grid" style={{ marginTop: '0.6rem' }}>
          {vocabulary.map((v) => (
            <Link
              key={v.pl}
              to={`/cwiczenia/slownictwo/${v.pl.toLowerCase().replaceAll(' ', '-').replaceAll('ł','l').replaceAll('ś','s').replaceAll('ć','c').replaceAll('ń','n').replaceAll('ó','o').replaceAll('ż','z').replaceAll('ź','z').replaceAll('ą','a').replaceAll('ę','e')}`}
              className="tile"
            >
              <div className="tile__badge" aria-hidden="true"></div>
              <h3>{lang === 'pl' ? `Ćwiczenia: ${v.pl}` : `Exercises: ${v.en}`}</h3>
              <p>{t('exercises.vocabulary.desc', 'Quizy i fiszki do powtórki słownictwa.')}</p>
              <span className="tile__link">{t('exercises.start', 'Rozpocznij →')}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
