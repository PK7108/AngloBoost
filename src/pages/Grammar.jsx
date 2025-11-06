import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

const tiles = [
  {
    pl: 'Wymowa',
    en: 'Pronunciation',
    plDesc: 'Zasady wymowy, akcent i intonacja.',
    enDesc: 'Pronunciation rules, stress and intonation.'
  },
  {
    pl: 'Części mowy',
    en: 'Parts of Speech',
    plDesc: 'Rzeczowniki, czasowniki, przymiotniki i więcej.',
    enDesc: 'Nouns, verbs, adjectives and more.'
  },
  {
    pl: 'Czasy angielskie',
    en: 'Tenses',
    plDesc: 'Present, past, future – jasne schematy i przykłady.',
    enDesc: 'Present, past, future — clear patterns and examples.'
  },
  {
    pl: 'Wyrażenia i zwroty',
    en: 'Phrases & Expressions',
    plDesc: 'Użyteczne frazy na co dzień.',
    enDesc: 'Useful everyday phrases.'
  },
  {
    pl: 'Mowa zależna',
    en: 'Reported Speech',
    plDesc: 'Jak parafrazować cudze wypowiedzi.',
    enDesc: 'How to paraphrase what others said.'
  },
  {
    pl: 'Strona bierna',
    en: 'Passive Voice',
    plDesc: 'Konstrukcje, użycie i typowe błędy.',
    enDesc: 'Constructions, usage and common mistakes.'
  },
  {
    pl: 'Okresy warunkowe',
    en: 'Conditionals',
    plDesc: 'Zero, First, Second, Third oraz Mixed.',
    enDesc: 'Zero, First, Second, Third and Mixed.'
  },
]

export default function Grammar() {
  const { lang, t } = useLanguage()
  return (
    <main className="sections">
      <div className="container">
        <h2>{t('grammar.title', 'Gramatyka')}</h2>
        <p className="sections__intro">{t('grammar.intro', 'Przejrzyste wyjaśnienia i przykłady. Wybierz dział:')}</p>
        <div className="grid">
          {tiles.map((tile) => {
            const href = `/gramatyka/${tile.pl.toLowerCase().replaceAll(' ', '-')}`
            const title = lang === 'pl' ? tile.pl : tile.en
            const desc = lang === 'pl' ? tile.plDesc : tile.enDesc
            return (
              <Link key={tile.pl} to={href} className="tile">
                <div className="tile__badge" aria-hidden="true"></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <small style={{ color: '#5b657a', fontWeight: 700 }}>{lang === 'pl' ? tile.en : tile.pl}</small>
                <span className="tile__link">{t('grammar.tile.open', 'Wejdź →')}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
