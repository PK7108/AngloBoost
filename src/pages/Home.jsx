import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'
import './home.css'

function Hero() {
  const { t } = useLanguage()
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1>{t('home.heroTitle', 'Nauka angielskiego za darmo')}</h1>
          <p className="lead">
            {t('home.heroLead1', 'AngloBoost to Twoje centrum nauki języka angielskiego: gramatyka, słownictwo,')}<br/>
            {t('home.heroLead2', 'artykuły, praktyczne ćwiczenia, gotowe materiały i wspierająca społeczność.')}<br/>
            {t('home.heroLead3', 'Bez opłat, bez haczyków — ucz się skutecznie w rytmie dopasowanym do Ciebie.')}
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/test-poziomujacy">{t('home.ctaPrimary', 'Zrób test poziomujący')}</Link>
              <button className="btn btn--ghost" onClick={() => document.getElementById('sekcje')?.scrollIntoView({behavior:'smooth'})}>
                  {t('home.ctaGhost','Zobacz możliwości')}
              </button>
          </div>
          <ul className="hero__points">
            <li>{t('home.point1', 'Setki ćwiczeń interaktywnych')}</li>
            <li>{t('home.point2', 'Wyjaśnienia gramatyczne po polsku')}</li>
            <li>{t('home.point3', 'Fiszki i listy słówek')}</li>
              <li>{t('home.point4','Polecane strony, wideo i książki')}</li>
          </ul>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__flag">
              <img src="/UK.svg" alt="Flaga Wielkiej Brytanii – nauka języka angielskiego" fetchpriority="high" decoding="sync"/>
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
    <section id="sekcje" className="sections" aria-labelledby="sections-heading">
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

function WhyChooseSection() {
    const { t } = useLanguage()

    const features = [
        {
            key: 'independence',
            title: t('home.why.independence.title', 'Pełna niezależność'),
            desc: t('home.why.independence.desc', 'Ty decydujesz co i jak ćwiczysz — układasz własne ścieżki nauki albo korzystasz z gotowych planów.'),
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2h3V4a2 2 0 0 1 2-2h0zM9 12h6v2H9v-2z"/>
                </svg>
            )
        },
        {
            key: 'exercises',
            title: t('home.why.exercises.title', 'Pełna baza ćwiczeń'),
            desc: t('home.why.exercises.desc', 'Setki zadań tematycznych i interaktywnych ćwiczeń od A1 do C1 — natychmiastowy feedback i zapis wyników.'),
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M3 5h18v2H3V5zm0 6h12v2H3v-2zm0 6h18v2H3v-2z"/>
                </svg>
            )
        },
        {
            key: 'voting',
            title: t('home.why.voting.title', 'Realny wpływ użytkowników'),
            desc: t('home.why.voting.desc', 'System zgłaszania i głosowania na pomysły — rozwijamy projekt razem z użytkownikami. Twoja sugestia może stać się częścią strony.'),
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M12 2l3 7h7l-5.7 4.3L21 22l-9-6-9 6 4.7-8.7L2 9h7z"/>
                </svg>
            )
        },
        {
            key: 'paths',
            title: t('home.why.paths.title', 'Brak blokad funkcji'),
            desc: t('home.why.paths.desc', 'W aktualnej, bezpłatnej wersji korzystasz z kluczowych narzędzi bez ograniczeń i opłat.'),
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M3 11h2v8H3v-8zm4-6h2v14H7V5zm4 10h2V5h-2v10zm4-4h2v4h-2v-4z"/>
                </svg>
            )
        },
        {
            key: 'community',
            title: t('home.why.community.title', 'Otwarte zasoby'),
            desc: t('home.why.community.desc', 'Ćwiczenia, artykuły i materiały dostępne bez paywalla — uczysz się za darmo, kiedy chcesz.'),
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm-3 9h2v4H9v-4zm4 0h2v4h-2v-4z"/>
                </svg>
            )
        },
        {
            key: 'adfree',
            title: t('home.why.adfree.title', 'Lekka i szybka strona'),
            desc: t('home.why.adfree.desc', 'Bez ciężkich reklam i śledzących skryptów — maksimum koncentracji na nauce.'),
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M5 12h14v2H5v-2zm7-9v2h2V3h-2zm0 16v2h2v-2h-2zM3 7h2v2H3V7zm16 0h2v2h-2V7z"/>
                </svg>
            )
        }
    ]

    return (
        <section className="why" aria-labelledby="why-heading">
            <div className="container">
                <div className="why__intro">
                    <h2 id="why-heading">{t('home.why.title', 'Co nas wyróżnia — dlaczego warto wybrać AngloBoost')}</h2>
                    <p className="why__lead">
                        {t('home.why.lead', 'AngloBoost to miejsce, gdzie to Ty masz kontrolę nad swoją nauką. Oferujemy pełne zasoby, realny wpływ na rozwój platformy i narzędzia, które pomagają uczyć się efektywniej.')}
                    </p>
                    <div className="why__cta">
                        <Link to="/logowanie" className="btn btn--ghost">{t('home.why.ctaJoin', 'Zaloguj się i zgłoś pomysł')}</Link>
                    </div>
                </div>

                <div className="why__grid" role="list">
                    {features.map((f) => (
                        <article key={f.key} className="why__card" role="listitem" tabIndex={0}>
                            <div className="why__icon" aria-hidden="true">{f.icon}</div>
                            <h3 id={`why-${f.key}-title`} className="why__title">{f.title}</h3>
                            <p className="why__desc">{f.desc}</p>
                        </article>
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
            const res = await fetch(`${import.meta.env.VITE_API_URL || 'https://api007.angloboost.pl'}/api/newsletter/subscribe`, {
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
        <section className="newsletter" aria-labelledby="newsletter-heading">
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
                            <div role="alert" style={{
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
        { name: t('home.earlyAccess.feature1', 'Gramatyka i słownictwo'), progress: 80 },
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
        <WhyChooseSection />
      <HowToUseSection />
      {/*<EarlyAccessSection />*/}
        <CoffeeSupport />
        <Newsletter />
    </main>
  )
}
