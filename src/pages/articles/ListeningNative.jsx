import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import useDocumentMeta from '../../useDocumentMeta';
import './ArticleStyles.css';

function getMetaTitle(lang) {
    const baseTitle = lang === 'pl'
        ? 'Jak słuchać po angielsku i rozumieć native speakerów? Kompletny przewodnik'
        : 'How to Listen in English and Understand Native Speakers? Complete Guide'

    return `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang) {
    const baseDescription = {
        pl: 'Kompletny przewodnik po słuchaniu i rozumieniu native speakerów. Poznaj techniki słuchania, najlepsze podcasty, seriale i metody nauki naturalnego języka mówionego.',
        en: 'Complete guide to listening and understanding native speakers. Learn listening techniques, best podcasts, series and methods for learning natural spoken language.'
    }

    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang) {
    return lang === 'pl'
        ? 'https://angloboost.pl/pl/artykuly/sluchanie-native-speakerow'
        : 'https://angloboost.pl/en/articles/listening-to-native-speakers'
}

const ListeningNative = () => {
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
                        <span className="article__breadcrumb-current">Słuchanie native speakerów</span>
                    </nav>
                    <h1 className="article__title">Jak słuchać po angielsku i rozumieć native speakerów 🎧</h1>
                    <p className="article__intro">Techniki słuchania, podcasty i seriale - opanuj sztukę rozumienia naturalnego, szybkiego języka mówionego</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 8 minut</span>
                        <span className="article__level">🎯 Dla: Poziom A2-C2</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>💡 Dlaczego native speakerzy są tacy trudni do zrozumienia?</h3>
                            <p><strong>Native speakerzy używają connected speech, redukcji i slangu,</strong> które rzadko pojawiają się w podręcznikach. Opanowanie tych elementów to klucz do naturalnej komunikacji.</p>
                        </div>

                        <h2>Główne wyzwania w słuchaniu</h2>
                        <div className="points-grid">
                            <div className="point-card">
                                <h4>⚡ Szybkość mówienia</h4>
                                <p>Native speakerzy mówią 150-200 słów na minutę, łącząc wyrazy</p>
                            </div>
                            <div className="point-card">
                                <h4>🔗 Connected speech</h4>
                                <p>Wyrazy łączą się ze sobą, zmieniając brzmienie</p>
                            </div>
                            <div className="point-card">
                                <h4>🎭 Różne akcenty</h4>
                                <p>Brytyjski, amerykański, australijski - każdy brzmi inaczej</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja technik słuchania */}
                    <section className="article__section">
                        <h2>Techniki skutecznego słuchania 🎯</h2>

                        <div className="cefr-overview">
                            <div className="cefr-level cefr-level--basic">
                                <div className="cefr-level__header">
                                    <h3>Connected Speech</h3>
                                    <span className="cefr-level__subtitle">Jak łączą się wyrazy</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item"><strong>Linking:</strong> "an apple" → "a napple"</div>
                                    <div className="cefr-item"><strong>Reduction:</strong> "going to" → "gonna"</div>
                                    <div className="cefr-item"><strong>Elision:</strong> "next day" → "nex day"</div>
                                    <div className="cefr-item"><strong>Assimilation:</strong> "would you" → "wudja"</div>
                                    <div className="cefr-item"><strong>Intrusion:</strong> "I am" → "I yam"</div>
                                </div>
                                <div className="tool-recommendation">
                                    <strong>Przykład:</strong> "What are you going to do?" → "Whaddaya gonna do?"
                                </div>
                            </div>

                            <div className="cefr-level cefr-level--independent">
                                <div className="cefr-level__header">
                                    <h3>Aktywne słuchanie</h3>
                                    <span className="cefr-level__subtitle">Strategie rozumienia</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item"><strong>Słuchaj dla ogólnego sensu</strong> - nie każdego słowa</div>
                                    <div className="cefr-item"><strong>Przewiduj treść</strong> - na podstawie kontekstu</div>
                                    <div className="cefr-item"><strong>Szukaj słów-kluczy</strong> - które niosą znaczenie</div>
                                    <div className="cefr-item"><strong>Rozpoznawaj intonację</strong> - pytania vs stwierdzenia</div>
                                    <div className="cefr-item"><strong>Ćwicz z transkryptami</strong> - słuchaj i czytaj jednocześnie</div>
                                </div>
                                <div className="tool-recommendation">
                                    <Link to="/gramatyka/wymowa" className="article__breadcrumb-link">Ćwicz wymowę i connected speech</Link>
                                </div>
                            </div>

                            <div className="cefr-level cefr-level--proficient">
                                <div className="cefr-level__header">
                                    <h3>Różne akcenty</h3>
                                    <span className="cefr-level__subtitle">Brytyjski vs Amerykański</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item"><strong>Water:</strong> UK /ˈwɔːtə/ vs US /ˈwɔːtər/</div>
                                    <div className="cefr-item"><strong>Schedule:</strong> UK /ˈʃedjuːl/ vs US /ˈskedʒuːl/</div>
                                    <div className="cefr-item"><strong>Tomato:</strong> UK /təˈmɑːtəʊ/ vs US /təˈmeɪtoʊ/</div>
                                    <div className="cefr-item"><strong>Vocabulary:</strong> różnice w słownictwie</div>
                                    <div className="cefr-item"><strong>Spelling:</strong> colour vs color</div>
                                </div>
                                <div className="tool-recommendation">
                                    <strong>Rada:</strong> Oglądaj materiały z różnych krajów anglojęzycznych
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja praktycznych ćwiczeń */}
                    <section className="article__section">
                        <h2>Praktyczne ćwiczenia słuchania 🏋️</h2>

                        <div className="level-detail level-detail--a2">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">Poziom A2-B1</span>
                                <h3>Ćwiczenia dla początkujących</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Proste techniki:</h4>
                                <ul className="skill-list">
                                    <li>✅ <strong>Słuchanie z transkryptem</strong> - śledź tekst podczas słuchania</li>
                                    <li>✅ <strong>Powtarzanie za mówcą</strong> - ćwicz wymowę i rytm</li>
                                    <li>✅ <strong>Dyktanda</strong> - zapisuj usłyszane zdania</li>
                                    <li>✅ <strong>Zatrzymywanie i powtarzanie</strong> - trudne fragmenty</li>
                                    <li>✅ <strong>Proste podcasty</strong> - dostosowane do poziomu</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Przykład ćwiczenia:</strong><br/>
                                    Słuchaj krótkiego dialogu 3 razy: raz dla ogólnego zrozumienia, raz z transkryptem, raz powtarzając za mówcami.
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">15 min</span>
                                        <span className="stat-small__label">dziennie</span>
                                    </div>
                                    <div className="stat-small">
                                        <span className="stat-small__value">+40%</span>
                                        <span className="stat-small__label">zrozumienia w 1 miesiąc</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="level-detail level-detail--b2">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">Poziom B2-C1</span>
                                <h3>Ćwiczenia dla zaawansowanych</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Zaawansowane techniki:</h4>
                                <ul className="skill-list">
                                    <li>✅ <strong>Słuchanie bez transkryptu</strong> - prawdziwe wyzwanie</li>
                                    <li>✅ <strong>Różne akcenty</strong> - brytyjski, amerykański, australijski</li>
                                    <li>✅ <strong>Tematyczne podcasty</strong> - specjalistyczne słownictwo</li>
                                    <li>✅ <strong>Filmy bez napisów</strong> - lub z angielskimi napisami</li>
                                    <li>✅ <strong>Notowanie głównych myśli</strong> - jak w prawdziwej rozmowie</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Przykład ćwiczenia:</strong><br/>
                                    Obejrzyj fragment wiadomości BBC, a następnie opowiedz komuś o głównych punktach własnymi słowami.
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">30 min</span>
                                        <span className="stat-small__label">dziennie</span>
                                    </div>
                                    <div className="stat-small">
                                        <Link to="/materialy/materialy-video" className="article__breadcrumb-link">Materiały video</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja podcastów */}
                    <section className="article__section">
                        <h2>Najlepsze podcasty do nauki 🎧</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>📚 Dla początkujących (A2-B1)</h4>
                                <ul>
                                    <li><strong>BBC 6 Minute English</strong> - krótkie, wyraźne lekcje</li>
                                    <li><strong>Learn English Podcast</strong> - British Council</li>
                                    <li><strong>Voice of America Learning English</strong> - wolne tempo</li>
                                    <li><strong>EnglishClass101</strong> - strukturalne lekcje</li>
                                    <li><strong>Spotlight English</strong> - proste słownictwo</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🎯 Dla średniozaawansowanych (B1-B2)</h4>
                                <ul>
                                    <li><strong>BBC The English We Speak</strong> - idiomy i slang</li>
                                    <li><strong>All Ears English</strong> - amerykański angielski</li>
                                    <li><strong>Luke's English Podcast</strong> - różne tematy</li>
                                    <li><strong>Culips Everyday English</strong> - codzienne rozmowy</li>
                                    <li><strong>Better at English</strong> - naturalne rozmowy</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🚀 Dla zaawansowanych (C1-C2)</h4>
                                <ul>
                                    <li><strong>This American Life</strong> - amerykańskie historie</li>
                                    <li><strong>BBC Radio 4</strong> - różnorodne programy</li>
                                    <li><strong>TED Talks Daily</strong> - inspirujące prezentacje</li>
                                    <li><strong>The Daily</strong> - New York Times</li>
                                    <li><strong>Freakonomics Radio</strong> - analizy ekonomiczne</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja filmów i seriali */}
                    <section className="article__section">
                        <h2>Filmy i seriale do nauki 🎬</h2>

                        <div className="comparison-table">
                            <h4>Polecane produkcje według poziomu</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th>Poziom</th>
                                    <th>Serial/Film</th>
                                    <th>Dlaczego warto?</th>
                                    <th>Akcent</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>A2-B1</td>
                                    <td>Friends</td>
                                    <td>Powtarzalne sytuacje, wyraźna wymowa</td>
                                    <td>Amerykański</td>
                                </tr>
                                <tr>
                                    <td>B1-B2</td>
                                    <td>The Crown</td>
                                    <td>Formalny język, wyraźna brytyjska wymowa</td>
                                    <td>Brytyjski</td>
                                </tr>
                                <tr>
                                    <td>B2-C1</td>
                                    <td>Breaking Bad</td>
                                    <td>Różne akcenty amerykańskie, slang</td>
                                    <td>Amerykański</td>
                                </tr>
                                <tr>
                                    <td>C1-C2</td>
                                    <td>Peaky Blinders</td>
                                    <td>Silny akcent Birmingham, historyczny slang</td>
                                    <td>Brytyjski</td>
                                </tr>
                                <tr>
                                    <td>Wszystkie</td>
                                    <td>Modern Family</td>
                                    <td>Różne pokolenia i style mówienia</td>
                                    <td>Amerykański</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="tip-box tip-box--important">
                            <h3>💡 Jak efektywnie uczyć się przez filmy i seriale?</h3>
                            <p><strong>Oglądaj z angielskimi napisami, zatrzymuj trudne fragmenty i powtarjaj za postaciami.</strong> Zacznij od krótkich scen, a nie całych odcinków na raz.</p>
                        </div>
                    </section>

                    {/* Sekcja technik oglądania */}
                    <section className="article__section">
                        <h2>Techniki efektywnego oglądania 📺</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>🎯 Metoda trzech kroków</h4>
                                <ul>
                                    <li><strong>Krok 1:</strong> Obejrzyj z polskimi napisami</li>
                                    <li><strong>Krok 2:</strong> Obejrzyj z angielskimi napisami</li>
                                    <li><strong>Krok 3:</strong> Obejrzyj bez napisów</li>
                                    <li><strong>Efekt:</strong> Stopniowe przyzwyczajanie do naturalnego języka</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>📝 Aktywne oglądanie</h4>
                                <ul>
                                    <li>Zatrzymuj i powtarjaj trudne fragmenty</li>
                                    <li>Notuj nowe słowa i wyrażenia</li>
                                    <li>Przewiduj, co powie postać</li>
                                    <li>Omawiaj z kimś obejrzany materiał</li>
                                    <li>Używaj funkcji spowalniania</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🔄 Powtórki i praktyka</h4>
                                <ul>
                                    <li>Oglądaj ulubione sceny wielokrotnie</li>
                                    <li>Powtarjaj kwestie za postaciami</li>
                                    <li>Odgrywaj scenki z pamięci</li>
                                    <li>Używaj nowych zwrotów w rozmowach</li>
                                    <li>Twórz własne zdania z nowym słownictwem</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja planu nauki */}
                    <section className="article__section">
                        <h2>Plan nauki słuchania - 30 dni 📅</h2>

                        <div className="comparison-table">
                            <h4>Harmonogram rozwoju umiejętności słuchania</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th>Tydzień</th>
                                    <th>Główne aktywności</th>
                                    <th>Czas dziennie</th>
                                    <th>Cele</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Podcasty dla początkujących + transkrypty</td>
                                    <td>20 minut</td>
                                    <td>Oswojenie z tempem i rytmem</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Serial z angielskimi napisami + powtarzanie</td>
                                    <td>25 minut</td>
                                    <td>Rozpoznawanie connected speech</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Różne akcenty + notowanie głównych myśli</td>
                                    <td>30 minut</td>
                                    <td>Adaptacja do różnych stylów mówienia</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Materiały bez napisów + opowiadanie treści</td>
                                    <td>35 minut</td>
                                    <td>Płynne rozumienie naturalnego języka</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Sekcja narzędzi i aplikacji */}
                    <section className="article__section">
                        <h2>Narzędzia i aplikacje do nauki słuchania 🛠️</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>📱 Aplikacje mobilne</h4>
                                <ul>
                                    <li><strong>Audible</strong> - audiobooki po angielsku</li>
                                    <li><strong>Spotify</strong> - podcasty i audycje</li>
                                    <li><strong>YouTube</strong> - filmy z transkryptami</li>
                                    <li><strong>ELSA Speak</strong> - ćwiczenia wymowy</li>
                                    <li><strong>BBC Sounds</strong> - brytyjskie radio</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🌐 Strony internetowe</h4>
                                <ul>
                                    <li><strong>BBC Learning English</strong> - materiały do słuchania</li>
                                    <li><strong>TED Talks</strong> - z interaktywnymi transkryptami</li>
                                    <li><strong>ESL Lab</strong> - ćwiczenia ze zrozumieniem</li>
                                    <li><strong>Breaking News English</strong> - wiadomości na różnych poziomach</li>
                                    <li><strong>Lyrics Training</strong> - nauka przez piosenki</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>📚 Nasze zasoby</h4>
                                <ul>
                                    <li><Link to="/materialy/materialy-video" className="article__breadcrumb-link">Materiały video</Link></li>
                                    <li><Link to="/cwiczenia/gramatyka/wymowa" className="article__breadcrumb-link">Ćwiczenia wymowy</Link></li>
                                    <li><Link to="/slownictwo" className="article__breadcrumb-link">Słownictwo tematyczne</Link></li>
                                    <li><Link to="/artykuly/angielski-przez-filmy-i-seriale" className="article__breadcrumb-link">Więcej o nauce przez filmy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🚀 Zacznij rozumieć native speakerów już dziś!</h3>
                            <p>Wybierz jeden podcast lub serial z tego artykułu i poświęć 15 minut dziennie na aktywne słuchanie. Małe, regularne kroki przynoszą spektakularne efekty!</p>
                            <div className="action-buttons">
                                <Link to="/materialy/materialy-video" className="btn btn--primary">Materiały video</Link>
                                <Link to="/cwiczenia/gramatyka/wymowa" className="btn btn--secondary">Ćwiczenia słuchania</Link>
                                <Link to="/test-poziomujacy" className="btn btn--outline">Sprawdź poziom</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#słuchanie</span>
                            <span className="tag">#native</span>
                            <span className="tag">#podcasty</span>
                            <span className="tag">#seriale</span>
                            <span className="tag">#connectedspeech</span>
                            <span className="tag">#akcenty</span>
                            <span className="tag">#rozumienie</span>
                            <span className="tag">#audio</span>
                        </div>

                        {/* UKRYTA SEKCJA SEO - NIE WIDOCZNA DLA UŻYTKOWNIKÓW */}
                        <div style={{display: 'none'}} aria-hidden="true">
                            <p>Jak słuchać po angielsku i rozumieć native speakerów, techniki słuchania angielski, podcasty do nauki angielskiego, seriale do nauki angielskiego, connected speech, rozumienie native speakerów, ćwiczenia słuchania angielski, akcenty angielskie, brytyjski vs amerykański angielski, nauka przez filmy i seriale, słuchanie ze zrozumieniem angielski</p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default ListeningNative;