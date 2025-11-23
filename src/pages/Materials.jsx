import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'
import useDocumentMeta from '../useDocumentMeta'

const tiles = [
    {
        pl: 'Materiały video',
        en: 'Video materials',
        plDesc: 'Polecane kanały, wykłady i nagrania do nauki.',
        enDesc: 'Recommended channels, lectures and recordings for learning.'
    },
    {
        pl: 'Literatura',
        en: 'Literature',
        plDesc: 'Książki, poradniki i e-booki do samodzielnej nauki.',
        enDesc: 'Books, guides and e-books for self-study.'
    },
    {
        pl: 'Portale angielskie',
        en: 'English websites',
        plDesc: 'Strony i serwisy z wartościowymi treściami.',
        enDesc: 'Websites and services with valuable content.'
    },
    {
        pl: 'Serwery językowe',
        en: 'Language servers',
        plDesc: 'Serwery discord do nauki języka angielskiego',
        enDesc: 'Discord servers for learning English'
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

export default function Materials() {
    const { lang, t } = useLanguage()

    useDocumentMeta({
        title: lang === 'pl' ? 'Materiały – AngloBoost' : 'Materials – AngloBoost',
        description:
            lang === 'pl'
                ? 'Zestaw sprawdzonych źródeł do nauki języka angielskiego – wideo, literatura i serwisy online.'
                : 'A set of verified resources for learning English – videos, literature, and online services.',
        canonical: lang === 'pl'
            ? 'https://angloboost.pl/materialy'
            : 'https://angloboost.pl/en/materials',
        alternates: [
            { hrefLang: 'pl', href: 'https://angloboost.pl/materialy' },
            { hrefLang: 'en', href: 'https://angloboost.pl/en/materials' },
            { hrefLang: 'x-default', href: 'https://angloboost.pl/' },
        ],
    })

    return (
        <main className="sections">
            <div className="container">
                <h2>{t('materials.title', 'Materiały')}</h2>
                <p className="sections__intro">
                    {t('materials.intro', 'Zestaw sprawdzonych źródeł do nauki:')}
                </p>
                <div className="grid">
                    {tiles.map((tile) => {
                        const title = lang === 'pl' ? tile.pl : tile.en
                        const desc = lang === 'pl' ? tile.plDesc : tile.enDesc
                        const to = `/materialy/${slugFromPolish(tile.pl)}`

                        return (
                            <Link key={tile.pl} to={to} className="tile">
                                <div className="tile__badge" aria-hidden="true"></div>
                                <h3>{title}</h3>
                                <p>{desc}</p>
                                <span className="tile__link">{t('home.tile.go', 'Zobacz →')}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}