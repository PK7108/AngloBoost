import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

function Hero() {
  const { t } = useLanguage()
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1>{t('home.heroTitle', 'Nauka angielskiego za darmo')}</h1>
          <p className="lead">
            {t('home.heroLead1', 'AngloBoost to Twoje centrum nauki języka angielskiego: gramatyka, słownictwo,')}<br/>
            {t('home.heroLead2', 'artykuły, praktyczne ćwiczenia, gotowe materiały i wspierająca społeczność na forum.')}<br/>
            {t('home.heroLead3', 'Bez opłat, bez haczyków — ucz się skutecznie w rytmie dopasowanym do Ciebie.')}
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/test-poziomujacy">{t('home.ctaPrimary', 'Zrób test poziomujący')}</Link>
            <a className="btn btn--ghost" href="#sekcje">{t('home.ctaGhost', 'Zobacz możliwości')}</a>
          </div>
          <ul className="hero__points">
            <li>{t('home.point1', 'Setki ćwiczeń interaktywnych')}</li>
            <li>{t('home.point2', 'Wyjaśnienia gramatyczne po polsku')}</li>
            <li>{t('home.point3', 'Fiszki i listy słówek z nagraniami')}</li>
            <li>{t('home.point4', 'Materiały do druku i notatek')}</li>
          </ul>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__flag">
              <img src="../public/UK.svg" alt="Flaga angielskiego" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionsGrid() {
  const { t } = useLanguage()
  const tiles = [
    { href: '/gramatyka', title: t('home.tile.grammar', 'Gramatyka'), desc: t('home.tile.grammar.desc', 'Jasne wyjaśnienia i przykłady z życia.') },
    { href: '/slownictwo', title: t('home.tile.vocabulary', 'Słownictwo'), desc: t('home.tile.vocabulary.desc', 'Fiszki, listy tematyczne, wymowa.') },
    { href: '/cwiczenia', title: t('home.tile.exercises', 'Ćwiczenia'), desc: t('home.tile.exercises.desc', 'Interaktywne zadania z natychmiastowym feedbackiem.') },
    { href: '/artykuly', title: t('home.tile.articles', 'Artykuły'), desc: t('home.tile.articles.desc', 'Czytaj, ucz się i poszerzaj horyzonty.') },
    { href: '/writing', title: t('home.tile.writing', 'Writing'), desc: t('home.tile.writing.desc', 'Opisy wypowiedzi pisemnych.') },
    { href: '/materialy', title: t('home.tile.materials', 'Materiały'), desc: t('home.tile.materials.desc', 'Literatura, filmy i pomocne serwery.') },
    { href: '/test-poziomujacy', title: t('home.tile.placement', 'Test poziomujący'), desc: t('home.tile.placement.desc', 'Poznaj swój poziom i dobierz plan nauki.') },
  ]
  return (
    <section id="sekcje" className="sections">
      <div className="container">
        <h2>{t('home.sectionsTitle', 'Odkryj wszystkie możliwości')}</h2>
        <p className="sections__intro">
          {t('home.sectionsIntro', 'Wybierz obszar, który Cię interesuje. Każda sekcja prowadzi do dedykowanych treści i narzędzi.')}
        </p>
        <div className="grid">
          {tiles.map((tItem) => (
            <Link key={tItem.title} to={tItem.href} className="tile">
              <div className="tile__badge" aria-hidden="true"></div>
              <h3>{tItem.title}</h3>
              <p>{tItem.desc}</p>
              <span className="tile__link">{t('home.tile.go', 'Przejdź →')}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Newsletter() {
    const { t } = useLanguage()
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!email) return

        setLoading(true)
        setError('')

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:4000'}/api/newsletter/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data?.error || 'Błąd zapisu do newslettera')
            }

            setSubmitted(true)
            setEmail('')
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="newsletter">
            <div className="container newsletter__inner">
                <div className="newsletter__text">
                    <h2>{t('home.newsletter.title', 'Zapisz się na newsletter')}</h2>
                    <p>
                        {t('home.newsletter.copy1', 'Otrzymuj najlepsze wskazówki, nowe materiały i ćwiczenia prosto na maila.')}<br/>
                        {t('home.newsletter.copy2', 'Zero spamu, tylko konkret.')}
                    </p>
                </div>
                {submitted ? (
                    <div className="newsletter__thanks" role="status">
                        <div style={{textAlign: 'center'}}>
                            <h3 style={{color: '#40c057', marginBottom: '10px'}}>✅ Dziękujemy!</h3>
                            <p>{t('home.newsletter.thanks', 'Sprawdź skrzynkę odbiorczą - wysłaliśmy email powitalny!')}</p>
                        </div>
                    </div>
                ) : (
                    <form className="newsletter__form" onSubmit={onSubmit}>
                        <label htmlFor="email" className="visually-hidden">{t('home.newsletter.emailLabel', 'Adres e-mail')}</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder={t('home.newsletter.emailPlaceholder', 'Twój e-mail')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label={t('home.newsletter.emailLabel', 'Adres e-mail')}
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            className="btn btn--primary"
                            disabled={loading}
                        >
                            {loading ? 'Zapisywanie...' : t('home.newsletter.submit', 'Zapisz mnie')}
                        </button>

                        {error && (
                            <div style={{
                                color: '#dc3545',
                                fontSize: '14px',
                                marginTop: '10px',
                                textAlign: 'center'
                            }}>
                                {error}
                            </div>
                        )}
                    </form>
                )}
            </div>
        </section>
    )
}

function HowToUseSection() {
  const { t } = useLanguage()
  return (
    <section className="info info--how">
      <div className="container">
        <h2>{t('home.howToUse.title', 'Jak mądrze korzystać z AngloBoost')}</h2>
        <p>
          {t(
            'home.howToUse.lead',
            'Samo przeczytanie materiałów to dopiero początek. Skuteczna nauka to aktywne działanie: rozwiązywanie zadań, odtwarzanie z pamięci i regularne powtórki.'
          )}
        </p>
        <ul>
          <li>{t('home.howToUse.point1', 'Rób ćwiczenia po każdym rozdziale – sprawdzaj się na bieżąco i poprawiaj błędy.')}</li>
          <li>{t('home.howToUse.point2', 'Korzystaj ze spaced repetition (powtórek z odstępami) – wracaj do słówek i zagadnień w zaplanowanych odstępach.')}</li>
          <li>{t('home.howToUse.point3', 'Twórz własne przykłady zdań i mów na głos – aktywuj wiedzę, nie tylko ją „rozpoznawaj”.')}</li>
          <li>{t('home.howToUse.point4', 'Ucz się krótko, ale regularnie – np. 20–30 minut dziennie daje lepsze efekty niż długie sesje raz na tydzień.')}</li>
          <li>{t('home.howToUse.point5', 'Notuj wnioski i trudniejsze elementy – własne notatki pomagają w utrwaleniu.')}</li>
        </ul>
        <p>
          {t(
            'home.howToUse.closer',
            'W skrócie: czytanie to start, a zapamiętujesz dzięki praktyce, odtwarzaniu z pamięci i mądrym powtórkom.'
          )}
        </p>
        <div className="actions">
          <Link className="btn btn--primary" to="/cwiczenia">
            {t('home.howToUse.ctaExercises', 'Zacznij ćwiczyć')}
          </Link>
          <Link className="btn btn--ghost" to="/slownictwo">
            {t('home.howToUse.ctaVocabulary', 'Słówka')}
          </Link>
        </div>
      </div>
    </section>
  )
}

function EarlyAccessSection() {
    const { t } = useLanguage()
    const featuresInProgress = [
        { name: t('home.earlyAccess.feature1', 'Gramtyka i słownictwo'), progress: 80 },
        { name: t('home.earlyAccess.feature2', 'Ćwiczenia'), progress: 75 },
        { name: t('home.earlyAccess.feature3', 'Ulepszanie interfejsu'), progress: 45 },
        { name: t('home.earlyAccess.feature4', 'Fiszki'), progress: 20 }
    ]

    return (
        <section className="info info--early">
            <div className="container">
                <div className="early-access">
                    <div className="early-access__header">
                        <span className="early-access__badge">Beta</span>
                        <h2>{t('home.earlyAccess.title', 'Wersja wstępna – twórzmy ją razem')}</h2>
                        <p className="early-access__subtitle">
                            {t('home.earlyAccess.subtitle', 'AngloBoost rozwija się na żywo z naszą społecznością')}
                        </p>
                    </div>

                    <div className="early-access__content">
                        <div className="early-access__text">
                            <p>
                                {t(
                                    'home.earlyAccess.copy1',
                                    'AngloBoost jest w wersji wstępnej. Niektóre funkcje mogą być jeszcze niedostępne lub w trakcie prac.'
                                )}
                            </p>
                            <p>
                                {t('home.earlyAccess.copy2a', 'Chcemy rozwijać platformę razem ze społecznością.')}{' '}
                                {t('home.earlyAccess.copy2b', 'Po zalogowaniu przejdź do panelu')}{' '}
                                <strong>{t('home.earlyAccess.supportPanel', 'Wesprzyj nas')}</strong>{' '}
                                {t(
                                    'home.earlyAccess.copy2c',
                                    '— tam możesz proponować nowe funkcje i głosować na pomysły innych.'
                                )}
                            </p>

                            <div className="early-access__stats">
                                <div className="stat">
                                    <span className="stat__number">42</span>
                                    <span className="stat__label">{t('home.earlyAccess.ideas', 'zgłoszonych pomysłów')}</span>
                                </div>
                                <div className="stat">
                                    <span className="stat__number">11</span>
                                    <span className="stat__label">{t('home.earlyAccess.features', 'funkcji w rozwoju')}</span>
                                </div>
                            </div>
                        </div>

                        <div className="early-access__progress">
                            <h4>{t('home.earlyAccess.progressTitle', 'Aktualny postęp prac:')}</h4>
                            <div className="progress-list">
                                {featuresInProgress.map((feature, index) => (
                                    <div key={index} className="progress-item">
                                        <div className="progress-item__header">
                                            <span className="progress-item__name">{feature.name}</span>
                                            <span className="progress-item__percent">{feature.progress}%</span>
                                        </div>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-bar__fill"
                                                style={{ width: `${feature.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="early-access__actions">
                        <Link className="btn btn--primary" to="/logowanie">
                            {t('home.earlyAccess.login', 'Zaloguj się i zgłoś pomysł')}
                        </Link>
                        {/*<Link className="btn btn--outline" to="/roadmap">*/}
                        {/*    {t('home.earlyAccess.roadmap', 'Zobacz roadmap')}*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </div>
        </section>
    )
}

function CoffeeSupport() {
    const { t } = useLanguage()

    return (
        <section className="coffee-support">
            <div className="container">
                <div className="coffee-card">
                    <div className="coffee-content">
                        <div className="coffee-text">
                            <span className="coffee-badge">💝 {t('home.coffee.support', 'Wsparcie')}</span>
                            <h2>{t('home.coffee.title', 'Wesprzyj rozwój AngloBoost')}</h2>
                            <p className="coffee-description">
                                {t('home.coffee.description', 'AngloBoost to projekt tworzony z pasji i dostępny całkowicie za darmo. Jeśli chcesz wesprzeć dalszy rozwój platformy i tworzenie nowych materiałów, rozważ postawienie mi wirtualnej kawy. Każde wsparcie motywuje do dalszej pracy!')}
                            </p>
                            <div className="coffee-benefits">
                                <div className="benefit">
                                    <span className="benefit-icon">📚</span>
                                    <span>{t('home.coffee.benefit1', 'Nowe materiały i ćwiczenia')}</span>
                                </div>
                                <div className="benefit">
                                    <span className="benefit-icon">⚡</span>
                                    <span>{t('home.coffee.benefit2', 'Szybsze dodawanie funkcji')}</span>
                                </div>
                                <div className="benefit">
                                    <span className="benefit-icon">🆓</span>
                                    <span>{t('home.coffee.benefit3', 'Utrzymanie darmowego dostępu')}</span>
                                </div>
                            </div>
                        </div>

                        <div className="coffee-visual">
                            <div className="coffee-icon">
                                <div className="coffee-cup">
                                    <div className="cup-bowl"></div>
                                    <div className="cup-handle"></div>
                                </div>
                                <div className="coffee-heart">❤️</div>
                            </div>

                            <a
                                href="https://buycoffee.to/angloboost"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--coffee"
                            >
                                <span className="btn-icon">☕</span>
                                {t('home.coffee.cta', 'Wesprzyj projekt')}
                            </a>
                        </div>
                    </div>

                    <div className="coffee-footer">
                        <p className="coffee-note">
                            {t('home.coffee.note', 'Dziękujemy, że jesteś częścią naszej społeczności! ❤️')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionsGrid />
      <HowToUseSection />
      <EarlyAccessSection />
        <CoffeeSupport />
        <Newsletter />
    </main>
  )
}
