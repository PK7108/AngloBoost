import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

function getTiles(lang) {
  const pl = [
    { title: 'Jak się uczyć angielskiego', to: '/artykuly/jak-sie-uczyc-angielskiego', desc: 'Praktyczny przewodnik po skutecznych metodach.' },
    { title: 'Poziomy CEFR', to: '/artykuly/poziomy-cefr', desc: 'Co oznaczają poziomy A1–C2 i jak je rozumieć.' },
    { title: 'Czy warto robić certyfikat językowy?', to: '/artykuly/certyfikaty-czy-warto', desc: 'Plusy i minusy podejścia do egzaminów.' },
    { title: 'Jak sie nauczyć mówić płynnie po angielsku?', to: '/artykuly/plynna-mowa', desc: 'Jak i gdzie to zrobić?' },
    { title: 'Ocena poziomu nauczania angielskiego w szkole', to: '/artykuly/angielski-szkola', desc: 'Plusy i minusy uczenia sie angielskiego w szkole' },
    { title: 'Czytanie książek po angielsku', to: '/artykuly/czytanie-po-angielsku', desc: 'Czy warto i jak się za to zabrać?' },
    { title: 'W jakim wieku najlepiej uczyć się angielskiego?', to: '/artykuly/najlepszy-wiek', desc: 'Realny wpływ wieku na poziom nauki angielskiego' },
    { title: 'Wszystko o alfabecie fonetycznym', to: '/artykuly/alfabet-fonetyczny', desc: 'Czym jest alfabet fonetyczny i czy jest przydatny?' },
    { title: 'So vs such', to: '/artykuly/so-vs-such', desc: 'Różnice między so oraz such - kiedy którego używamy?' },
    { title: 'Daty w języku angielskim - jak je poprawnie wymawiać?', to: '/artykuly/daty-po-angielsku', desc: 'Jak wymawiać w sposób poprawny daty?' },
    { title: 'Jak mówić o godzinach?', to: '/artykuly/godziny-po-angielsku', desc: 'Jak powiedzieć, że cos stało się o danej godzinie bez problemu?' },
    { title: 'Jak się nauczyć angielskiego od zera?', to: '/artykuly/angielski-od-zera', desc: 'Poradnik zawierający odpowiedź na pytanie oraz plan nauki' },
  ]
  const en = [
    { title: 'How to learn English effectively', to: '/artykuly/jak-sie-uczyc-angielskiego', desc: 'A practical guide to proven methods.' },
    { title: 'CEFR levels', to: '/artykuly/poziomy-cefr', desc: 'What A1–C2 mean and how to interpret them.' },
    { title: 'Language certificates — are they worth it?', to: '/artykuly/certyfikaty-czy-warto', desc: 'Pros and cons of taking exams.' },
    { title: 'How to become fluent in English?', to: '/artykuly/plynna-mowa', desc: 'Where and how to get there.' },
    { title: 'How good is school English teaching?', to: '/artykuly/angielski-szkola', desc: 'Pros and cons of learning at school.' },
    { title: 'Reading books in English', to: '/artykuly/czytanie-po-angielsku', desc: 'Is it worth it and how to start?' },
    { title: 'What is the best age to learn English?', to: '/artykuly/najlepszy-wiek', desc: 'The real impact of age on learning.' },
    { title: 'All about the phonetic alphabet', to: '/artykuly/alfabet-fonetyczny', desc: 'What it is and whether it helps.' },
    { title: 'So vs such', to: '/artykuly/so-vs-such', desc: 'Differences and when to use each.' },
    { title: 'Dates in English — how to say them correctly?', to: '/artykuly/daty-po-angielsku', desc: 'Pronouncing dates the right way.' },
    { title: 'How to talk about time?', to: '/artykuly/godziny-po-angielsku', desc: 'Say when something happened without fuss.' },
    { title: 'How to learn English from scratch?', to: '/artykuly/angielski-od-zera', desc: 'Answers and a learning plan.' },
  ]
  return lang === 'pl' ? pl : en
}

export default function Articles() {
  const { t, lang } = useLanguage()
  const tiles = getTiles(lang)
  return (
    <main className="sections">
      <div className="container">
        <h2>{t('articles.title', 'Artykuły')}</h2>
        <p className="sections__intro">{t('articles.intro', 'Czytaj i poszerzaj horyzonty:')}</p>
        <div className="grid">
          {tiles.map((tile) => (
            <Link key={tile.title} to={tile.to} className="tile">
              <div className="tile__badge" aria-hidden="true"></div>
              <h3>{tile.title}</h3>
              <p>{tile.desc}</p>
              <span className="tile__link">{t('articles.tile.read', 'Czytaj →')}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
