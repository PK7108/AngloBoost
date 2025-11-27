import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import useDocumentMeta from '../../useDocumentMeta';
import './ArticleStyles.css';

function getMetaTitle(lang) {
    const baseTitle = lang === 'pl'
        ? 'Jak nauczyć się angielskiego od zera? Kompletny przewodnik dla początkujących'
        : 'How to Learn English from Scratch? Complete Guide for Beginners'

    return `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang) {
    const baseDescription = {
        pl: 'Kompletny przewodnik jak nauczyć się angielskiego od zera. Plan nauki, najlepsze narzędzia, typowe błędy i strategie dla początkujących. Zacznij mówić po angielsku już dziś!',
        en: 'Complete guide on how to learn English from scratch. Learning plan, best tools, common mistakes and strategies for beginners. Start speaking English today!'
    }

    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang) {
    return lang === 'pl'
        ? 'https://angloboost.pl/pl/artykuly/angielski-od-zera'
        : 'https://angloboost.pl/en/articles/english-from-scratch'
}

const EnglishFromZero = () => {
    const { lang } = useLanguage()

    useDocumentMeta({
        title: getMetaTitle(lang),
        description: getMetaDescription(lang),
        canonical: getCanonicalUrl(lang),
        og: {
            title: getMetaTitle(lang),
            description: getMetaDescription(lang),
            image: 'https://angloboost.pl/UK-social.png',
            url: window.location.href
        }
    })

    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/artykuly" className="article__breadcrumb-link">Artykuły</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Angielski od zera</span>
                    </nav>
                    <h1 className="article__title">Jak się nauczyć angielskiego od zera? 📚</h1>
                    <p className="article__intro">Kompletny przewodnik dla początkujących - od pierwszego słowa do swobodnej komunikacji</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 10 minut</span>
                        <span className="article__level">🎯 Dla: Zupełnie początkujących</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box tip-box--important">
                            <h3>💡 Klucz do sukcesu</h3>
                            <p><strong>Systematyczność jest ważniejsza niż intensywność!</strong> Lepiej uczyć się 15 minut dziennie niż 3 godziny raz w tygodniu.</p>
                        </div>

                        <h2>Dlaczego warto zacząć uczyć się angielskiego?</h2>
                        <div className="benefit-cards">
                            <div className="benefit-card">
                                <h4>🌍 Podróże</h4>
                                <p>Swobodna komunikacja za granicą</p>
                            </div>

                            <div className="benefit-card">
                                <h4>💼 Praca</h4>
                                <p>Większe możliwości zawodowe</p>
                            </div>

                            <div className="benefit-card">
                                <h4>🎬 Rozrywka</h4>
                                <p>Filmy, seriale i gry w oryginale</p>
                            </div>

                            <div className="benefit-card">
                                <h4>🧠 Rozwój</h4>
                                <p>Trening mózgu i nowe perspektywy</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja fundamentów */}
                    <section className="article__section">
                        <h2>4 filary nauki od podstaw 🏗️</h2>

                        <div className="foundation-cards">
                            <div className="foundation-card">
                                <div className="foundation-card__icon">🔤</div>
                                <div className="foundation-card__content">
                                    <h3>1. Podstawowe słownictwo</h3>
                                    <p>Zacznij od najczęściej używanych słów - one pokrywają 80% codziennej komunikacji.</p>
                                    <ul>
                                        <li>🔹 Naucz się 500 najważniejszych słów</li>
                                        <li>🔹 Codziennie dodawaj 5-10 nowych</li>
                                        <li>🔹 Ucz się w kontekście zdań</li>
                                    </ul>
                                    <div className="foundation-stats">
                                        <div className="stat-mini">
                                            <span className="stat-mini__number">500</span>
                                            <span className="stat-mini__label">słów podstawowych</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="foundation-card">
                                <div className="foundation-card__icon">📝</div>
                                <div className="foundation-card__content">
                                    <h3>2. Prosta gramatyka</h3>
                                    <p>Skup się na najważniejszych strukturach, które umożliwią Ci podstawową komunikację.</p>
                                    <ul>
                                        <li>🔹 Czas present simple</li>
                                        <li>🔹 Podstawowe pytania</li>
                                        <li>🔹 Konstrukcja "to be"</li>
                                    </ul>
                                    <div className="example-box">
                                        <strong>Przykład:</strong> "I am a student. She works in an office. Do you like coffee?"
                                    </div>
                                </div>
                            </div>

                            <div className="foundation-card">
                                <div className="foundation-card__icon">🎧</div>
                                <div className="foundation-card__content">
                                    <h3>3. Rozumienie ze słuchu</h3>
                                    <p>Osłuchaj się z językiem od samego początku - to klucz do dobrej wymowy.</p>
                                    <ul>
                                        <li>🔹 Słuchaj prostych dialogów</li>
                                        <li>🔹 Oglądaj filmy z napisami</li>
                                        <li>🔹 Używaj aplikacji do nauki</li>
                                    </ul>
                                    <div className="phrase-examples">
                                        <div className="phrase-example">
                                            <span>Zacznij od: kursów dla początkujących</span>
                                            <span>Potem: podcasty na wolniejszym tempie</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="foundation-card">
                                <div className="foundation-card__icon">🗣️</div>
                                <div className="foundation-card__content">
                                    <h3>4. Mówienie od dnia 1</h3>
                                    <p>Nie czekaj aż "będziesz gotowy" - mów od samego początku, nawet pojedyncze słowa.</p>
                                    <ul>
                                        <li>🔹 Powtarzaj na głos</li>
                                        <li>🔹 Mów do siebie</li>
                                        <li>🔹 Nagrywaj się</li>
                                    </ul>
                                    <div className="method-tip">
                                        💡 <strong>Tip:</strong> Nie przejmuj się akcentem!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja planu nauki */}
                    <section className="article__section">
                        <h2>Plan nauki na pierwsze 30 dni 📅</h2>

                        <div className="learning-plan">
                            <div className="plan-phase">
                                <h3>Tydzień 1-2: Podstawy</h3>
                                <div className="plan-items">
                                    <div className="plan-item">
                                        <h4>Dzień 1-7</h4>
                                        <ul>
                                            <li>✅ Poznaj alfabet i wymowę</li>
                                            <li>✅ Naucz się 50 podstawowych słów</li>
                                            <li>✅ Zrozum czas present simple</li>
                                            <li>✅ Poznaj zaimki osobowe</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="plan-phase">
                                <h3>Tydzień 3-4: Rozbudowa</h3>
                                <div className="plan-items">
                                    <div className="plan-item">
                                        <h4>Dzień 8-30</h4>
                                        <ul>
                                            <li>✅ Dodawaj 10 słów dziennie</li>
                                            <li>✅ Ćwicz pytania i przeczenia</li>
                                            <li>✅ Słuchaj 15 minut dziennie</li>
                                            <li>✅ Mów przez 5 minut dziennie</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="daily-schedule">
                            <h4>📋 Przykładowy plan dnia</h4>
                            <div className="schedule-grid">
                                <div className="schedule-item">
                                    <span className="schedule-time">15 min</span>
                                    <span className="schedule-activity">Nowe słówka</span>
                                </div>
                                <div className="schedule-item">
                                    <span className="schedule-time">10 min</span>
                                    <span className="schedule-activity">Gramatyka</span>
                                </div>
                                <div className="schedule-item">
                                    <span className="schedule-time">15 min</span>
                                    <span className="schedule-activity">Słuchanie</span>
                                </div>
                                <div className="schedule-item">
                                    <span className="schedule-time">5 min</span>
                                    <span className="schedule-activity">Mówienie</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja narzędzi i zasobów */}
                    <section className="article__section">
                        <h2>Najlepsze narzędzia dla początkujących 🛠️</h2>

                        <div className="tools-grid">
                            <div className="tool-item">
                                <h4>📱 Aplikacje mobilne</h4>
                                <div className="tool-list">
                                    <div className="tool">
                                        <strong>Duolingo</strong>
                                        <span>Gamifikacja nauki</span>
                                    </div>
                                    <div className="tool">
                                        <strong>Memrise</strong>
                                        <span>Fiszki z memami</span>
                                    </div>
                                    <div className="tool">
                                        <strong>Busuu</strong>
                                        <span>Społeczność uczących się</span>
                                    </div>
                                </div>
                            </div>

                            <div className="tool-item">
                                <h4>🌐 Strony internetowe</h4>
                                <div className="tool-list">
                                    <div className="tool">
                                        <strong>British Council</strong>
                                        <span>Darmowe materiały</span>
                                    </div>
                                    <div className="tool">
                                        <strong>BBC Learning English</strong>
                                        <span>Filmy i kursy</span>
                                    </div>
                                    <div className="tool">
                                        <strong>Quizlet</strong>
                                        <span>Fiszki online</span>
                                    </div>
                                </div>
                            </div>

                            <div className="tool-item">
                                <h4>🎧 Media do słuchania</h4>
                                <div className="tool-list">
                                    <div className="tool">
                                        <strong>Podcasty dla początkujących</strong>
                                        <span>Wolniejsze tempo</span>
                                    </div>
                                    <div className="tool">
                                        <strong>Kanały YouTube</strong>
                                        <span>Wizualne wsparcie</span>
                                    </div>
                                    <div className="tool">
                                        <strong>Audiobooki</strong>
                                        <span>Proste historie</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja typowych błędów */}
                    <section className="article__section">
                        <h2>Czego unikać na początku? 🚫</h2>

                        <div className="mistakes-avoid">
                            <div className="mistake-item">
                                <h4>📚 Zbyt wiele materiałów</h4>
                                <div className="solution">
                                    <h5>Lepsze podejście:</h5>
                                    <p>Wybierz <strong>jeden dobry podręcznik</strong> i 1-2 aplikacje. Skup się na systematyczności.</p>
                                </div>
                            </div>

                            <div className="mistake-item">
                                <h4>🎯 Perfekcjonizm</h4>
                                <div className="solution">
                                    <h5>Lepsze podejście:</h5>
                                    <p>Popełnianie błędów jest <strong>naturalną częścią nauki</strong>. Skup się na komunikacji, nie na perfekcji.</p>
                                </div>
                            </div>

                            <div className="mistake-item">
                                <h4>⏰ Nieregularność</h4>
                                <div className="solution">
                                    <h5>Lepsze podejście:</h5>
                                    <p><strong>Lepiej 15 minut dziennie niż 3 godziny raz w tygodniu</strong>. Rutyna jest kluczowa.</p>
                                </div>
                            </div>

                            <div className="mistake-item">
                                <h4>🧠 Tłumaczenie wszystkiego</h4>
                                <div className="solution">
                                    <h5>Lepsze podejście:</h5>
                                    <p>Staraj się <strong>myśleć po angielsku</strong> od samego początku, nawet prostymi zdaniami.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja motywacji */}
                    <section className="article__section">
                        <h2>Jak nie stracić motywacji? 🔥</h2>

                        <div className="motivation-tips">
                            <div className="motivation-card">
                                <h4>🎯 Wyznaczaj małe cele</h4>
                                <p>Zamiast "nauczyć się angielskiego", celuj w "nauczenie się 30 słów w tym tygodniu"</p>
                            </div>

                            <div className="motivation-card">
                                <h4>📊 Śledź postępy</h4>
                                <p>Prowadź dziennik nauki i odhaczaj zrealizowane zadania</p>
                            </div>

                            <div className="motivation-card">
                                <h4>🎉 Nagradzaj się</h4>
                                <p>Za każde 30 dni nauki zafunduj sobie małą nagrodę</p>
                            </div>

                            <div className="motivation-card">
                                <h4>👥 Znajdź towarzystwo</h4>
                                <p>Ucz się z przyjacielem lub dołącz do grupy nauki</p>
                            </div>
                        </div>

                        <div className="progress-milestones">
                            <h4>🏆 Kamienie milowe</h4>
                            <div className="milestones">
                                <div className="milestone">
                                    <div className="milestone__number">1</div>
                                    <div className="milestone__content">
                                        <h5>Tydzień 1</h5>
                                        <p>Potrafię się przedstawić</p>
                                    </div>
                                </div>
                                <div className="milestone">
                                    <div className="milestone__number">2</div>
                                    <div className="milestone__content">
                                        <h5>Miesiąc 1</h5>
                                        <p>Rozumiem proste pytania</p>
                                    </div>
                                </div>
                                <div className="milestone">
                                    <div className="milestone__number">3</div>
                                    <div className="milestone__content">
                                        <h5>Miesiąc 3</h5>
                                        <p>Prowadzę prostą rozmowę</p>
                                    </div>
                                </div>
                                <div className="milestone">
                                    <div className="milestone__number">4</div>
                                    <div className="milestone__content">
                                        <h5>Miesiąc 6</h5>
                                        <p>Swobodna komunikacja w podstawowych sytuacjach</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja kosztów */}
                    <section className="article__section">
                        <h2>Nauka angielskiego za darmo 💰</h2>

                        <div className="free-resources">
                            <div className="resource-category">
                                <h4>📱 Darmowe aplikacje</h4>
                                <ul>
                                    <li><strong>Duolingo</strong> - kompleksowy kurs od podstaw</li>
                                    <li><strong>Memrise</strong> - fiszki z wymową</li>
                                    <li><strong>HelloTalk</strong> - rozmowy z native speakerami</li>
                                </ul>
                            </div>

                            <div className="resource-category">
                                <h4>🌐 Strony internetowe</h4>
                                <ul>
                                    <li><strong>British Council</strong> - kursy i ćwiczenia</li>
                                    <li><strong>BBC Learning English</strong> - materiały video</li>
                                    <li><strong>Duolingo Web</strong> - wersja przeglądarkowa</li>
                                </ul>
                            </div>

                            <div className="resource-category">
                                <h4>📚 Biblioteki</h4>
                                <ul>
                                    <li><strong>Podręczniki dla początkujących</strong></li>
                                    <li><strong>Proste czytanki</strong></li>
                                    <li><strong>Audiobooki</strong></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja historii sukcesu */}
                    <section className="article__section">
                        <div className="success-story">
                            <div className="success-story__quote">"</div>
                            <div className="success-story__content">
                                <h3>Historia Ani: Od zera do komunikacji w 6 miesięcy</h3>
                                <p>"Zaczynałam nie znając nawet alfabetu. Przez pierwsze 2 tygodnie uczyłam się tylko podstawowych zwrotów. Dziś, po 6 miesiącach, potrafię zamówić jedzenie w restauracji, zapytać o drogę i prowadzić prostą rozmowę. Kluczem była systematyczność!"</p>
                                <div className="success-timeline">
                                    <div className="timeline-milestone">
                                        <span>Tydzień 1-2:</span> Alfabet i podstawowe zwroty
                                    </div>
                                    <div className="timeline-milestone">
                                        <span>Miesiąc 1:</span> 300 słów + present simple
                                    </div>
                                    <div className="timeline-milestone">
                                        <span>Miesiąc 3:</span> Proste rozmowy w aplikacjach
                                    </div>
                                    <div className="timeline-milestone">
                                        <span>Miesiąc 6:</span> Samodzielna komunikacja za granicą
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🚀 Zacznij już dziś!</h3>
                            <p>Nie czekaj na "od poniedziałku" czy "idealny moment". Pierwszy krok jest najtrudniejszy - zrób go teraz!</p>
                            <div className="action-buttons">
                                <Link to="/kursy/dla-poczatkujacych" className="btn btn--primary">Kurs dla początkujących</Link>
                                <Link to="/slownictwo/podstawowe" className="btn btn--secondary">Podstawowe słownictwo</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#początkujący</span>
                            <span className="tag">#odzera</span>
                            <span className="tag">#podstawy</span>
                            <span className="tag">#angielski</span>
                            <span className="tag">#naukajęzyków</span>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default EnglishFromZero;