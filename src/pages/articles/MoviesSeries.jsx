import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleStyles.css';

const MoviesSeries = () => {
    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/artykuly" className="article__breadcrumb-link">Artykuły</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Filmy i seriale</span>
                    </nav>
                    <h1 className="article__title">Jak uczyć się angielskiego przez filmy i seriale 🎬</h1>
                    <p className="article__intro">Metody oglądania z napisami i bez - przekształć rozrywkę w efektywną naukę języka</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 7 minut</span>
                        <span className="article__level">🎯 Dla: Poziom A2-C2</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>🎯 Dlaczego filmy i seriale to doskonałe narzędzie nauki?</h3>
                            <p><strong>Oglądając filmy w oryginale, osłuchujesz się z naturalnym językiem, akcentami i codziennym słownictwem</strong> w autentycznych kontekstach. To nauka przez immersję - najskuteczniejsza metoda przyswajania języka.</p>
                        </div>

                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <div className="benefit-icon">🎭</div>
                                <h4>Autentyczny język</h4>
                                <p>Prawdziwe dialogi, slang i wyrażenia używane na co dzień</p>
                                <div className="benefit-stat">
                                    <span className="stat-number">95%</span>
                                    <span className="stat-label">naturalnego języka</span>
                                </div>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">👂</div>
                                <h4>Różne akcenty</h4>
                                <p>Brytyjski, amerykański, australijski w autentycznych sytuacjach</p>
                                <div className="benefit-stat">
                                    <span className="stat-number">10+</span>
                                    <span className="stat-label">akcentów</span>
                                </div>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">💬</div>
                                <h4>Kontekst wizualny</h4>
                                <p>Obraz pomaga zrozumieć znaczenie nieznanych słów</p>
                                <div className="benefit-stat">
                                    <span className="stat-number">60%</span>
                                    <span className="stat-label">łatwiejsze zapamiętywanie</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja metod oglądania */}
                    <section className="article__section">
                        <h2>Metody oglądania - od początkującego do zaawansowanego 🎮</h2>

                        <div className="method-grid">
                            <div className="method-item">
                                <h4>🔤 Poziom A2-B1</h4>
                                <p><strong>Metoda: Napisy polskie → angielskie</strong></p>
                                <ul>
                                    <li>Oglądaj z polskimi napisami dla zrozumienia fabuły</li>
                                    <li>Następnie obejrzyj z angielskimi napisami</li>
                                    <li>Notuj ciekawe wyrażenia i słowa</li>
                                    <li>Powtarjaj kwestie za postaciami</li>
                                </ul>
                                <div className="method-tip">
                                    <strong>💡 Wskazówka:</strong> Zacznij od animacji i komedii - mają prostszy język
                                </div>
                            </div>

                            <div className="method-item">
                                <h4>🎯 Poziom B1-B2</h4>
                                <p><strong>Metoda: Tylko angielskie napisy</strong></p>
                                <ul>
                                    <li>Oglądaj wyłącznie z angielskimi napisami</li>
                                    <li>Zatrzymuj trudne fragmenty</li>
                                    <li>Sprawdzaj wymowę w słowniku</li>
                                    <li>Ćwicz shadowing - powtarzanie na głos</li>
                                </ul>
                                <div className="method-tip">
                                    <strong>💡 Wskazówka:</strong> Używaj funkcji spowalniania dla trudnych scen
                                </div>
                            </div>

                            <div className="method-item">
                                <h4>🚀 Poziom B2-C1</h4>
                                <p><strong>Metoda: Bez napisów</strong></p>
                                <ul>
                                    <li>Oglądaj bez żadnych napisów</li>
                                    <li>Skup się na zrozumieniu z kontekstu</li>
                                    <li>Notuj idiomy i slang</li>
                                    <li>Analizuj różnice w akcentach</li>
                                </ul>
                                <div className="method-tip">
                                    <strong>💡 Wskazówka:</strong> Oglądaj ten sam fragment kilka razy
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja progresji */}
                    <section className="article__section">
                        <h2>Progresja nauki - 30-dniowe wyzwanie 📈</h2>

                        <div className="progress-chart">
                            <div className="chart-bar" style={{width: '25%'}}>
                                <span>Tydzień 1: Napisy polskie + angielskie</span>
                            </div>
                            <div className="chart-bar" style={{width: '50%'}}>
                                <span>Tydzień 2: Tylko angielskie napisy</span>
                            </div>
                            <div className="chart-bar" style={{width: '75%'}}>
                                <span>Tydzień 3: Angielskie napisy (trudne produkcje)</span>
                            </div>
                            <div className="chart-bar" style={{width: '100%'}}>
                                <span>Tydzień 4: Bez napisów (proste sceny)</span>
                            </div>
                        </div>

                        <div className="schedule">
                            <div className="schedule__day">
                                <h4>Poniedziałek</h4>
                                <ul>
                                    <li>15 min serial komediowy</li>
                                    <li>Notowanie 5 słów</li>
                                    <li>Powtarzanie dialogów</li>
                                </ul>
                            </div>
                            <div className="schedule__day">
                                <h4>Środa</h4>
                                <ul>
                                    <li>20 min film dokumentalny</li>
                                    <li>Ćwiczenie wymowy</li>
                                    <li>Shadowing</li>
                                </ul>
                            </div>
                            <div className="schedule__day schedule__day--weekend">
                                <h4>Sobota</h4>
                                <ul>
                                    <li>30 min ulubiony serial</li>
                                    <li>Rozmowa o fabule</li>
                                    <li>Powtórka słownictwa</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja polecanych produkcji */}
                    <section className="article__section">
                        <h2>Polecane filmy i seriale według poziomu 🏆</h2>

                        <div className="pros-cons">
                            <div className="pros-cons__column">
                                <div className="pros-cons__header pros-cons__header--pro">
                                    <h3>📚 Dla początkujących (A2-B1)</h3>
                                </div>
                                <div className="pros-cons__list">
                                    <div className="pros-cons__item">
                                        <h4>Friends 🫂</h4>
                                        <p><strong>Dlaczego:</strong> Powtarzalne sytuacje, wyraźna wymowa, codzienne słownictwo</p>
                                        <p><strong>Akcent:</strong> Amerykański</p>
                                        <p><strong>Czas na odcinek:</strong> 22 minuty</p>
                                    </div>
                                    <div className="pros-cons__item">
                                        <h4>Modern Family 👨‍👩‍👧‍👦</h4>
                                        <p><strong>Dlaczego:</strong> Różne pokolenia, współczesny język, humor</p>
                                        <p><strong>Akcent:</strong> Amerykański</p>
                                        <p><strong>Czas na odcinek:</strong> 22 minuty</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pros-cons__column">
                                <div className="pros-cons__header pros-cons__header--con">
                                    <h3>🎯 Dla zaawansowanych (B2-C1)</h3>
                                </div>
                                <div className="pros-cons__list">
                                    <div className="pros-cons__item">
                                        <h4>The Crown 👑</h4>
                                        <p><strong>Dlaczego:</strong> Formalny język, brytyjska wymowa, historyczne słownictwo</p>
                                        <p><strong>Akcent:</strong> Brytyjski (RP)</p>
                                        <p><strong>Czas na odcinek:</strong> 50 minut</p>
                                    </div>
                                    <div className="pros-cons__item">
                                        <h4>Peaky Blinders 🎩</h4>
                                        <p><strong>Dlaczego:</strong> Silny akcent, historyczny slang, złożone dialogi</p>
                                        <p><strong>Akcent:</strong> Birmingham</p>
                                        <p><strong>Czas na odcinek:</strong> 55 minut</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja technik aktywnych */}
                    <section className="article__section">
                        <h2>Aktywne techniki oglądania 🏋️</h2>

                        <div className="foundation-cards">
                            <div className="foundation-card">
                                <div className="foundation-card__icon">🎯</div>
                                <div className="foundation-card__content">
                                    <h3>Shadowing Technique</h3>
                                    <p><strong>Powtarzaj na głos za postaciami</strong> - ćwicz wymowę, intonację i płynność</p>
                                    <ul>
                                        <li>Wybierz krótki fragment (30-60 sekund)</li>
                                        <li>Odtwórz, zatrzymaj, powtórz</li>
                                        <li>Naśladuj emocje i intonację</li>
                                        <li>Nagrywaj się i porównuj z oryginałem</li>
                                    </ul>
                                    <div className="foundation-stats">
                                        <div className="stat-mini">
                                            <span className="stat-mini__number">15 min</span>
                                            <span className="stat-mini__label">dziennie</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="foundation-card">
                                <div className="foundation-card__icon">📝</div>
                                <div className="foundation-card__content">
                                    <h3>Notowanie słownictwa</h3>
                                    <p><strong>Twórz własny słownik filmowy</strong> - kontekstowe uczenie się słów</p>
                                    <ul>
                                        <li>Notuj słowo + zdanie z filmu</li>
                                        <li>Dodaj definicję własnymi słowami</li>
                                        <li>Grupuj tematycznie (emocje, praca, dom)</li>
                                        <li>Regularnie powtarzaj</li>
                                    </ul>
                                    <div className="phrase-examples">
                                        <div className="phrase-example">
                                            <span>Z filmu: "I'm thrilled to be here!"</span>
                                            <span>thrilled = bardzo podekscytowany</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja narzędzi */}
                    <section className="article__section">
                        <h2>Niezbędne narzędzia i aplikacje 🛠️</h2>

                        <div className="tools-showcase">
                            <div className="tool-category">
                                <h4>📺 Platformy streamingowe</h4>
                                <div className="tool-list">
                                    <div className="tool-item">
                                        <h5>Netflix</h5>
                                        <p>Language Reactor, podwójne napisy, spowalnianie</p>
                                    </div>
                                    <div className="tool-item">
                                        <h5>YouTube</h5>
                                        <p>Automatyczne napisy, zmiana prędkości</p>
                                    </div>
                                    <div className="tool-item">
                                        <h5>Amazon Prime</h5>
                                        <p>X-Ray, szczegóły o aktorach i scenach</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tool-category">
                                <h4>📱 Aplikacje do nauki</h4>
                                <div className="tool-list">
                                    <div className="tool-item">
                                        <h5>Language Reactor</h5>
                                        <p>Podwójne napisy, słownik, powtarzanie scen</p>
                                    </div>
                                    <div className="tool-item">
                                        <h5>FluentU</h5>
                                        <p>Interaktywne napisy, fiszki, śledzenie postępów</p>
                                    </div>
                                    <div className="tool-item">
                                        <h5>YouGlish</h5>
                                        <p>Wyszukiwanie wymowy słów w filmach YouTube</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tech-tip">
                            <h4>🚀 Pro Tip: Language Reactor</h4>
                            <p>Zainstaluj rozszerzenie Language Reactor do Chrome - pokazuje podwójne napisy, automatycznie tworzy fiszki i pozwala łatwo powtarzać trudne fragmenty!</p>
                        </div>
                    </section>

                    {/* Sekcja typowych błędów */}
                    <section className="article__section">
                        <h2>Częste błędy i jak ich unikać ⚠️</h2>

                        <div className="mistakes-grid">
                            <div className="mistake-card">
                                <h4>❌ Oglądanie bez celu</h4>
                                <p>Po prostu oglądanie jak rozrywka bez aktywnej nauki</p>
                                <div className="solution">
                                    <h5>✅ Rozwiązanie:</h5>
                                    <p>Zawsze miej konkretny cel językowy na każdą sesję oglądania</p>
                                </div>
                            </div>

                            <div className="mistake-card">
                                <h4>❌ Zbyt trudne materiały</h4>
                                <p>Wybieranie produkcji dalekich od aktualnego poziomu</p>
                                <div className="solution">
                                    <h5>✅ Rozwiązanie:</h5>
                                    <p>Stosuj zasadę 85% - rozumiej 85% treści bez słownika</p>
                                </div>
                            </div>

                            <div className="mistake-card">
                                <h4>❌ Brak powtórek</h4>
                                <p>Oglądanie ciągle nowych rzeczy bez utrwalania</p>
                                <div className="solution">
                                    <h5>✅ Rozwiązanie:</h5>
                                    <p>Oglądaj ulubione sceny wielokrotnie, powtarzaj słownictwo</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🎬 Zacznij naukę przez filmy już dziś!</h3>
                            <p>Wybierz jeden serial z tego artykułu i zastosuj metodę odpowiednią dla Twojego poziomu. Pamiętaj - nawet 15 minut dziennie przynosi niesamowite efekty!</p>
                            <div className="action-buttons">
                                <Link to="/materialy/materialy-video" className="btn btn--primary">Materiały Video</Link>
                                <Link to="/cwiczenia/gramatyka/wymowa" className="btn btn--secondary">Ćwiczenia Wymowy</Link>
                                <Link to="/slownictwo" className="btn btn--outline">Słownictwo</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#filmy</span>
                            <span className="tag">#seriale</span>
                            <span className="tag">#naukaprzezzabawe</span>
                            <span className="tag">#netflix</span>
                            <span className="tag">#shadowing</span>
                            <span className="tag">#napisy</span>
                            <span className="tag">#akcenty</span>
                            <span className="tag">#immersja</span>
                        </div>

                        {/* UKRYTA SEKCJA SEO - NIE WIDOCZNA DLA UŻYTKOWNIKÓW */}
                        <div style={{display: 'none'}} aria-hidden="true">
                            <p>Jak uczyć się angielskiego przez filmy i seriale, metody oglądania z napisami, nauka angielskiego przez netflix, shadowing technique, filmy do nauki angielskiego, seriale do nauki angielskiego, oglądanie z napisami angielskimi, language reactor, immersive learning, nauka przez rozrywkę, akcenty w filmach</p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default MoviesSeries;