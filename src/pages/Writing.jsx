import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

const tiles = [
  {
    pl: 'Opowiadanie',
    en: 'Short Story',
    plDesc: 'Jak napisać ciekawe i spójne opowiadanie po angielsku.',
    enDesc: 'How to write an engaging and coherent short story in English.',
    to: '/writing/opowiadanie',
  },
  {
    pl: 'List formalny',
    en: 'Formal Letter',
    plDesc: 'Struktura i zwroty charakterystyczne dla oficjalnej korespondencji.',
    enDesc: 'Structure and phrases for formal correspondence.',
    to: '/writing/list-formalny',
  },
  {
    pl: 'List nieformalny',
    en: 'Informal Letter',
    plDesc: 'Jak pisać do znajomych i rodziny w swobodnym stylu.',
    enDesc: 'How to write to friends and family in an informal style.',
    to: '/writing/list-nieformalny',
  },
  {
    pl: 'Email',
    en: 'Email',
    plDesc: 'Pisanie wiadomości email w różnych kontekstach.',
    enDesc: 'Writing emails in different contexts.',
    to: '/writing/email',
  },
  {
    pl: 'Recenzja',
    en: 'Review',
    plDesc: 'Jak napisać opinię o książce, filmie lub produkcie.',
    enDesc: 'How to write a review of a book, film, or product.',
    to: '/writing/recenzja',
  },
  {
    pl: 'Raport',
    en: 'Report',
    plDesc: 'Struktura i język raportów biznesowych i akademickich.',
    enDesc: 'Structure and language for business and academic reports.',
    to: '/writing/raport',
  },
  {
    pl: 'Artykuł',
    en: 'Article',
    plDesc: 'Pisanie tekstów publicystycznych i informacyjnych.',
    enDesc: 'Writing editorial and informative articles.',
    to: '/writing/artykul',
  },
  {
    pl: 'Opis obrazka',
    en: 'Picture Description',
    plDesc: 'Jak szczegółowo opisać ilustracje i zdjęcia.',
    enDesc: 'How to describe pictures and photos in detail.',
    to: '/writing/opis-obrazka',
  },
    {
        pl: 'Rozprawka',
        en: 'Essay',
        plDesc: 'For and against oraz opinion essay - struktura i techniki pisania.',
        enDesc: 'For and against and opinion essay - structure and writing techniques.',
        to: '/writing/rozprawka',
    },
]

export default function Writing() {
  const { lang, t } = useLanguage()
  return (
    <main className="sections">
      <div className="container">
        <h2>{t('writing.title', 'Pisanie')}</h2>
        <p className="sections__intro">
          {t('writing.intro', 'Poznaj różne formy wypowiedzi pisemnych i doskonal swoje umiejętności:')}
        </p>
        <div className="grid">
          {tiles.map((tile) => {
            const title = lang === 'pl' ? tile.pl : tile.en
            const desc = lang === 'pl' ? tile.plDesc : tile.enDesc
            const secondary = lang === 'pl' ? tile.en : tile.pl
            return (
              <Link key={tile.pl} to={tile.to} className="tile">
                <div className="tile__badge" aria-hidden="true"></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <small style={{ color: '#5b657a', fontWeight: 700 }}>{secondary}</small>
                <span className="tile__link">{t('home.tile.go', 'Przejdź →')}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}