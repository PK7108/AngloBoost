import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'
import useDocumentMeta from '../useDocumentMeta.jsx'

const tiles = [
  {
    pl: 'Słownik tematyczny',
    en: 'Thematic vocabulary',
    plDesc: 'Listy słówek według tematów z przykładami.',
    enDesc: 'Topic-based word lists with examples.',
  },
  {
    pl: 'Idiomy',
    en: 'Idioms',
    plDesc: 'Najpopularniejsze idiomy z objaśnieniami.',
    enDesc: 'The most popular idioms with explanations.',
  },
  {
    pl: 'Przysłowia',
    en: 'Proverbs',
    plDesc: 'Mądrości językowe i ich tłumaczenia.',
    enDesc: 'Language wisdom and their translations.',
  },
  {
    pl: 'Czasowniki nieregularne',
    en: 'Irregular verbs',
    plDesc: 'Tabela form + ćwiczenia na utrwalenie.',
    enDesc: 'Forms table + practice exercises.',
  },
  {
    pl: 'Slang',
    en: 'Slang',
    plDesc: 'Mowa potoczna w codziennych konwersacjach.',
    enDesc: 'Colloquial speech for everyday conversations.',
  },
  {
    pl: 'Business English',
    en: 'Business English',
    plDesc: 'Słownictwo do pracy i biznesu.',
    enDesc: 'Vocabulary for work and business.',
  },
]

function slugFromPolish(pl) {
  return pl
    .toLowerCase()
    .replaceAll(' ', '-')
    .replaceAll('ł', 'l')
    .replaceAll('ś', 's')
    .replaceAll('ć', 'c')
    .replaceAll('ń', 'n')
    .replaceAll('ó', 'o')
    .replaceAll('ż', 'z')
    .replaceAll('ź', 'z')
    .replaceAll('ą', 'a')
    .replaceAll('ę', 'e')
}

export default function Vocabulary() {
  const { lang, t } = useLanguage()

    useDocumentMeta({
        title: lang === 'pl' ? 'Słownictwo – AngloBoost' : 'Vocabulary – AngloBoost',
        description:
            lang === 'pl'
                ? 'Rozwijaj słownictwo praktycznie: tematyczne listy słówek, idiomy, przysłowia, czasowniki nieregularne i slang.'
                : 'Learn vocabulary effectively: thematic word lists, idioms, proverbs, irregular verbs and slang.',
        canonical: lang === 'pl'
            ? 'https://angloboost.pl/slownictwo'
            : 'https://angloboost.pl/en/vocabulary',
        alternates: [
            { hrefLang: 'pl', href: 'https://angloboost.pl/slownictwo' },
            { hrefLang: 'en', href: 'https://angloboost.pl/en/vocabulary' },
            { hrefLang: 'x-default', href: 'https://angloboost.pl/' },
        ],
    })

  return (
    <main className="sections">
      <div className="container">
        <h2>{t('vocabulary.title', 'Słownictwo')}</h2>
        <p className="sections__intro">
          {t('vocabulary.intro', 'Rozwijaj słownictwo praktycznie i skutecznie:')}
        </p>
        <div className="grid">
          {tiles.map((tile) => {
            const title = lang === 'pl' ? tile.pl : tile.en
            const desc = lang === 'pl' ? tile.plDesc : tile.enDesc
            const to = `/slownictwo/${slugFromPolish(tile.pl)}`
            return (
              <Link key={tile.pl} to={to} className="tile">
                <div className="tile__badge" aria-hidden="true"></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="tile__link">{t('home.tile.go', 'Wejdź →')}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
