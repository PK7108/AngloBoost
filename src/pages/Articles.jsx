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

      { title: 'Jak skutecznie uczyć się słownictwa', to: '/artykuly/uczenie-sie-slownictwa', desc: 'Strategie zapamiętywania nowych słów, fiszki, mapy myśli.' },
      { title: 'Idiomy angielskie, które musisz znać', to: '/artykuly/idiomy-angielskie', desc: 'Popularne zwroty, które często pojawiają się w rozmowach i książkach.' },
      { title: 'Najczęstsze błędy Polaków w angielskim', to: '/artykuly/najczestsze-bledy', desc: 'Pułapki gramatyczne i wymowy, jak ich unikać.' },
      { title: 'Angielski w pracy i biznesie', to: '/artykuly/angielski-w-pracy', desc: 'E-maile, prezentacje, rozmowy telefoniczne.' },
      { title: 'Jak słuchać po angielsku i rozumieć native speakerów', to: '/artykuly/sluchanie-native-speaker', desc: 'Techniki słuchania, podcasty i seriale.' },
      { title: 'Czytanie literatury w oryginale – krok po kroku', to: '/artykuly/czytanie-literatury', desc: 'Jak wybrać książkę, poziom trudności i słownictwo.' },
      { title: 'Jak uczyć się angielskiego przez film i seriale', to: '/artykuly/angielski-przez-filmy', desc: 'Metody oglądania z napisami i bez.' },
      { title: 'Angielski w podróży – praktyczne zwroty', to: '/artykuly/angielski-w-podrozy', desc: 'Sytuacje: lotnisko, hotel, restauracja.' },
      { title: 'Jak pisać w języku angielskim', to: '/artykuly/pisanie-po-angielsku', desc: 'E-maile, eseje, notatki, blogi.' },
      { title: 'Najlepsze aplikacje i narzędzia do nauki angielskiego', to: '/artykuly/aplikacje-nauka-angielskiego', desc: 'Darmowe i płatne narzędzia do nauki.' },
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

      { title: 'How to learn vocabulary effectively', to: '/artykuly/uczenie-sie-slownictwa', desc: 'Strategies for memorizing new words, flashcards, mind maps.' },
      { title: 'English idioms you must know', to: '/artykuly/idiomy-angielskie', desc: 'Common phrases often used in conversations and books.' },
      { title: 'Most common mistakes Poles make in English', to: '/artykuly/najczestsze-bledy', desc: 'Grammar and pronunciation pitfalls and how to avoid them.' },
      { title: 'English at work and in business', to: '/artykuly/angielski-w-pracy', desc: 'Emails, presentations, phone calls.' },
      { title: 'How to listen and understand native speakers', to: '/artykuly/sluchanie-native-speaker', desc: 'Listening techniques, podcasts, and TV series.' },
      { title: 'Reading literature in original – step by step', to: '/artykuly/czytanie-literatury', desc: 'How to choose a book, difficulty level, and vocabulary.' },
      { title: 'Learning English through movies and series', to: '/artykuly/angielski-przez-filmy', desc: 'Methods for watching with or without subtitles.' },
      { title: 'English for travel – practical phrases', to: '/artykuly/angielski-w-podrozy', desc: 'Situations: airport, hotel, restaurant.' },
      { title: 'How to write in English', to: '/artykuly/pisanie-po-angielsku', desc: 'Emails, essays, notes, blogs.' },
      { title: 'Best apps and tools for learning English', to: '/artykuly/aplikacje-nauka-angielskiego', desc: 'Free and paid learning tools.' },
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
