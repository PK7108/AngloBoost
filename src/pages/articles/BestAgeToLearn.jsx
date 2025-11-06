import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleStyles.css';

const BestAgeToLearn = () => {
    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/artykuly" className="article__breadcrumb-link">Artykuły</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Wiek a nauka angielskiego</span>
                    </nav>
                    <h1 className="article__title">W jakim wieku najlepiej uczyć się angielskiego? 🎂</h1>
                    <p className="article__intro">Realny wpływ wieku na poziom nauki angielskiego - prawda i mity</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 8 minut</span>
                        <span className="article__level">🎯 Dla: Wszystkich, niezależnie od wieku</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>💡 Najważniejsza prawda</h3>
                            <p><strong>Najlepszy czas na naukę angielskiego był 10 lat temu. Drugi najlepszy czas jest TERAZ!</strong> Wiek ma znaczenie, ale nie jest wyrocznią.</p>
                        </div>

                        <h2>Mit "krytycznego okresu" vs rzeczywistość</h2>
                        <div className="myth-reality">
                            <div className="myth-card">
                                <h4>❌ Popularny mit</h4>
                                <p>"Po 12. roku życia nie można nauczyć się języka jak native speaker"</p>
                                <div className="myth-source">
                                    <span>Źródło: Przestarzałe teorie językoznawcze</span>
                                </div>
                            </div>
                            <div className="reality-card">
                                <h4>✅ Rzeczywistość naukowa</h4>
                                <p>Dorośli uczą się SZYBCIEJ dzięki umiejętnościom poznawczym, a dzieci naturalniej dzięki plastyczności mózgu</p>
                                <div className="reality-source">
                                    <span>Badania: Białystok, 2018</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja porównania grup wiekowych */}
                    <section className="article__section">
                        <h2>Porównanie grup wiekowych 📊</h2>

                        <div className="age-comparison">
                            <div className="age-group">
                                <div className="age-group__header">
                                    <h3>3-7 lat</h3>
                                    <span className="age-label">Wczesne dzieciństwo</span>
                                </div>
                                <div className="age-group__content">
                                    <div className="advantages">
                                        <h4>✅ Zalety</h4>
                                        <ul>
                                            <li>🎯 Naturalna wymowa jak native</li>
                                            <li>🧠 Plastyczny mózg</li>
                                            <li>🎪 Nauka przez zabawę</li>
                                            <li>🔊 Doskonałe rozróżnianie dźwięków</li>
                                        </ul>
                                    </div>
                                    <div className="challenges">
                                        <h4>⚠️ Wyzwania</h4>
                                        <ul>
                                            <li>⏰ Bardzo wolne tempo</li>
                                            <li>📚 Brak świadomości językowej</li>
                                            <li>🎯 Trudność z abstrakcyjnymi pojęciami</li>
                                            <li>📝 Nieumiejętność czytania/pisania</li>
                                        </ul>
                                    </div>
                                    <div className="success-rate">
                                        <div className="rate-circle">
                                            <span className="rate-value">95%</span>
                                            <span className="rate-label">szans na native accent</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="age-group">
                                <div className="age-group__header">
                                    <h3>8-12 lat</h3>
                                    <span className="age-label">Średnie dzieciństwo</span>
                                </div>
                                <div className="age-group__content">
                                    <div className="advantages">
                                        <h4>✅ Zalety</h4>
                                        <ul>
                                            <li>⚡ Szybsze tempo niż młodsze dzieci</li>
                                            <li>🎯 Świadoma nauka</li>
                                            <li>📚 Umiejętność czytania</li>
                                            <li>🔊 Wciąż bardzo dobra wymowa</li>
                                        </ul>
                                    </div>
                                    <div className="challenges">
                                        <h4>⚠️ Wyzwania</h4>
                                        <ul>
                                            <li>😰 Wstyd przed błędami</li>
                                            <li>🎮 Konkurencja innych aktywności</li>
                                            <li>📝 Trudności z gramatyką</li>
                                            <li>🎯 Krótki czas koncentracji</li>
                                        </ul>
                                    </div>
                                    <div className="success-rate">
                                        <div className="rate-circle">
                                            <span className="rate-value">85%</span>
                                            <span className="rate-label">szans na native accent</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="age-group">
                                <div className="age-group__header">
                                    <h3>13-18 lat</h3>
                                    <span className="age-label">Młodzież</span>
                                </div>
                                <div className="age-group__content">
                                    <div className="advantages">
                                        <h4>✅ Zalety</h4>
                                        <ul>
                                            <li>🚀 Najszybsze tempo nauki</li>
                                            <li>🎯 Świadoma strategia uczenia się</li>
                                            <li>📚 Umiejętność korzystania z materiałów</li>
                                            <li>💡 Rozumienie abstrakcyjnych pojęć</li>
                                        </ul>
                                    </div>
                                    <div className="challenges">
                                        <h4>⚠️ Wyzwania</h4>
                                        <ul>
                                            <li>😰 Silny lęk przed oceną</li>
                                            <li>🎯 Konkurencja innych przedmiotów</li>
                                            <li>🔊 Akcent może być już utrwalony</li>
                                            <li>⏰ Brak czasu na dodatkową naukę</li>
                                        </ul>
                                    </div>
                                    <div className="success-rate">
                                        <div className="rate-circle">
                                            <span className="rate-value">70%</span>
                                            <span className="rate-label">szans na native accent</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="age-group">
                                <div className="age-group__header">
                                    <h3>19-40 lat</h3>
                                    <span className="age-label">Dorośli młodzi</span>
                                </div>
                                <div className="age-group__content">
                                    <div className="advantages">
                                        <h4>✅ Zalety</h4>
                                        <ul>
                                            <li>🎯 Silna motywacja wewnętrzna</li>
                                            <li>📚 Dojrzałe strategie uczenia się</li>
                                            <li>⏰ Samodzielne zarządzanie czasem</li>
                                            <li>💼 Praktyczne cele (praca, kariera)</li>
                                        </ul>
                                    </div>
                                    <div className="challenges">
                                        <h4>⚠️ Wyzwania</h4>
                                        <ul>
                                            <li>🔊 Akcent trudny do zmiany</li>
                                            <li>⏰ Ograniczony czas (praca, rodzina)</li>
                                            <li>🧠 Mniej plastyczny mózg</li>
                                            <li>😰 Perfekcjonizm blokujący mówienie</li>
                                        </ul>
                                    </div>
                                    <div className="success-rate">
                                        <div className="rate-circle">
                                            <span className="rate-value">40%</span>
                                            <span className="rate-label">szans na native accent</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="age-group">
                                <div className="age-group__header">
                                    <h3>40+ lat</h3>
                                    <span className="age-label">Dorośli dojrzali</span>
                                </div>
                                <div className="age-group__content">
                                    <div className="advantages">
                                        <h4>✅ Zalety</h4>
                                        <ul>
                                            <li>🎯 Bardzo silna motywacja</li>
                                            <li>🧠 Dojrzałość emocjonalna</li>
                                            <li>📚 Bogate doświadczenie życiowe</li>
                                            <li>⏰ Często więcej wolnego czasu</li>
                                        </ul>
                                    </div>
                                    <div className="challenges">
                                        <h4>⚠️ Wyzwania</h4>
                                        <ul>
                                            <li>🔊 Akcent bardzo utrwalony</li>
                                            <li>🧠 Wolniejsze zapamiętywanie</li>
                                            <li>👂 Trudności z rozróżnianiem dźwięków</li>
                                            <li>😰 Obawy przed nowymi technologiami</li>
                                        </ul>
                                    </div>
                                    <div className="success-rate">
                                        <div className="rate-circle">
                                            <span className="rate-value">25%</span>
                                            <span className="rate-label">szans na native accent</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja naukowych faktów */}
                    <section className="article__section">
                        <h2>Co mówią badania naukowe? 🔬</h2>

                        <div className="research-facts">
                            <div className="research-card">
                                <h4>📈 Tempo nauki</h4>
                                <p><strong>Dorośli uczą się 2-3x szybciej niż dzieci</strong> w początkowych etapach dzięki rozwiniętym strategiom uczenia się</p>
                                <div className="research-source">
                                    <span>Badanie: University of Essex, 2020</span>
                                </div>
                            </div>

                            <div className="research-card">
                                <h4>🔊 Wymowa</h4>
                                <p><strong>Po 12. roku życia szansa na perfect accent spada o 5% rocznie</strong>, ale komunikatywna wymowa jest możliwa w każdym wieku</p>
                                <div className="research-source">
                                    <span>Badanie: MIT, 2018</span>
                                </div>
                            </div>

                            <div className="research-card">
                                <h4>🧠 Neuroplastyczność</h4>
                                <p><strong>Mózg pozostaje plastyczny przez całe życie</strong> - nowe połączenia nerwowe tworzą się nawet u 80-latków</p>
                                <div className="research-source">
                                    <span>Badanie: Max Planck Institute, 2019</span>
                                </div>
                            </div>

                            <div className="research-card">
                                <h4>🎯 Płynność</h4>
                                <p><strong>Wiek rozpoczęcia nauki nie wpływa na ostateczną płynność</strong> - tylko na czas jej osiągnięcia</p>
                                <div className="research-source">
                                    <span>Meta-analiza: 47 badań, 2021</span>
                                </div>
                            </div>
                        </div>

                        <div className="learning-curve">
                            <h4>📊 Krzywa uczenia się w zależności od wieku</h4>
                            <div className="curve-chart">
                                <div className="curve-item">
                                    <span className="curve-label">Dzieci (3-12)</span>
                                    <div className="curve-bar">
                                        <div className="curve-fill curve-fill--slow" style={{width: '30%'}}>
                                            <span>Wolny start</span>
                                        </div>
                                        <div className="curve-fill curve-fill--steady" style={{width: '70%'}}>
                                            <span>Stały wzrost</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="curve-item">
                                    <span className="curve-label">Młodzież (13-18)</span>
                                    <div className="curve-bar">
                                        <div className="curve-fill curve-fill--fast" style={{width: '60%'}}>
                                            <span>Szybki start</span>
                                        </div>
                                        <div className="curve-fill curve-fill--steady" style={{width: '40%'}}>
                                            <span>Stabilizacja</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="curve-item">
                                    <span className="curve-label">Dorośli (19+)</span>
                                    <div className="curve-bar">
                                        <div className="curve-fill curve-fill--fast" style={{width: '80%'}}>
                                            <span>Błyskawiczny start</span>
                                        </div>
                                        <div className="curve-fill curve-fill--slow" style={{width: '20%'}}>
                                            <span>Spowolnienie</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja optymalnych strategii dla wieku */}
                    <section className="article__section">
                        <h2>Optymalne strategie dla każdego wieku 🎯</h2>

                        <div className="age-strategies">
                            <div className="strategy-group">
                                <h3>👶 3-7 lat</h3>
                                <div className="strategy-list">
                                    <div className="strategy-item">
                                        <h4>🎵 Nauka przez piosenki i rymowanki</h4>
                                        <p>Dzieci najlepiej uczą się przez zabawę i muzykę</p>
                                    </div>
                                    <div className="strategy-item">
                                        <h4>📺 Angielskie bajki i programy</h4>
                                        <p>Immersja przez media dostosowane do wieku</p>
                                    </div>
                                    <div className="strategy-item">
                                        <h4>🎮 Gry i zabawy językowe</h4>
                                        <p>Nauka w naturalnych, bezstresowych sytuacjach</p>
                                    </div>
                                </div>
                            </div>

                            <div className="strategy-group">
                                <h3>👦 8-12 lat</h3>
                                <div className="strategy-list">
                                    <div className="strategy-item">
                                        <h4>📚 Proste książki i komiksy</h4>
                                        <p>Czytanie dostosowane do poziomu z obrazkami</p>
                                    </div>
                                    <div className="strategy-item">
                                        <h4>🎯 Gry komputerowe po angielsku</h4>
                                        <p>Łączenie hobby z nauką języka</p>
                                    </div>
                                    <div className="strategy-item">
                                        <h4>👥 Proste konwersacje</h4>
                                        <p>Zachęcanie do mówienia bez presji</p>
                                    </div>
                                </div>
                            </div>

                            <div className="strategy-group">
                                <h3>👨‍🎓 13-18 lat</h3>
                                <div className="strategy-list">
                                    <div className="strategy-item">
                                        <h4>📱 Media społecznościowe po angielsku</h4>
                                        <p>Wykorzystanie naturalnego zainteresowania</p>
                                    </div>
                                    <div className="strategy-item">
                                        <h4>🎬 Filmy i seriale z napisami</h4>
                                        <p>Łączenie rozrywki z nauką</p>
                                    </div>
                                    <div className="strategy-item">
                                        <h4>💬 Aplikacje do rozmów</h4>
                                        <p>Bezpieczne środowisko do ćwiczenia mówienia</p>
                                    </div>
                                </div>
                            </div>

                            <div className="strategy-group">
                                <h3>👨‍💼 19-40 lat</h3>
                                <div className="strategy-list">
                                    <div className="strategy-item">
                                        <h4>🎯 Nauka ukierunkowana na cele</h4>
                                        <p>Praca, podróże, rozwój osobisty</p>
                                    </div>
                                    <div className="strategy-item">
                                        <h4>📊 Systematyczna nauka gramatyki</h4>
                                        <p>Wykorzystanie zdolności analitycznych</p>
                                    </div>
                                    <div className="strategy-item">
                                        <h4>👥 Konwersacje z native speakerami</h4>
                                        <p>Pokonywanie bariery mówienia</p>
                                    </div>
                                </div>
                            </div>

                            <div className="strategy-group">
                                <h3>👴 40+ lat</h3>
                                <div className="strategy-list">
                                    <div className="strategy-item">
                                        <h4>⏰ Nauka w swoim tempie</h4>
                                        <p>Bez presji, z naciskiem na regularność</p>
                                    </div>
                                    <div className="strategy-item">
                                        <h4>🎧 Słuchanie podcastów</h4>
                                        <p>Nauka podczas codziennych aktywności</p>
                                    </div>
                                    <div className="strategy-item">
                                        <h4>📝 Pisanie pamiętnika po angielsku</h4>
                                        <p>Łączenie refleksji z praktyką językową</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja inspiracji */}
                    <section className="article__section">
                        <h2>Historie sukcesu w każdym wieku 🌟</h2>

                        <div className="success-stories">
                            <div className="story-card">
                                <div className="story-age">65 lat</div>
                                <div className="story-content">
                                    <h4>Maria - emerytowana nauczycielka</h4>
                                    <p>"Zaczęłam uczyć się angielskiego na emeryturze. Po 2 latach mogę swobodnie rozmawiać z wnukami mieszkającymi w Anglii. Udowodniłam sobie, że na naukę nigdy nie jest za późno!"</p>
                                    <div className="story-progress">
                                        <span>Start: zero angielskiego</span>
                                        <span>2 lata: poziom B1+</span>
                                    </div>
                                </div>
                            </div>

                            <div className="story-card">
                                <div className="story-age">42 lata</div>
                                <div className="story-content">
                                    <h4>Piotr - kierownik projektu</h4>
                                    <p>"W pracy wymagali angielskiego. Miałem podstawy ze szkoły, ale bałem się mówić. Po roku systematycznej nauki prowadzę spotkania po angielsku i dostałem awans!"</p>
                                    <div className="story-progress">
                                        <span>Start: A2 (szkolny)</span>
                                        <span>1 rok: poziom B2+</span>
                                    </div>
                                </div>
                            </div>

                            <div className="story-card">
                                <div className="story-age">8 lat</div>
                                <div className="story-content">
                                    <h4>Zuzia - uczennica</h4>
                                    <p>"Uwielbiam oglądać bajki po angielsku! Nie wiedziałam, że to nauka. Teraz rozumiem coraz więcej i mogę rozmawiać z koleżanką z USA."</p>
                                    <div className="story-progress">
                                        <span>Start: podstawowe słówka</span>
                                        <span>6 miesięcy: poziom A1+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja podsumowania */}
                    <section className="article__section">
                        <div className="age-conclusion">
                            <h3>🎯 Podsumowanie: Prawda o wieku i nauce języków</h3>

                            <div className="conclusion-points">
                                <div className="conclusion-item">
                                    <h4>✅ Co jest prawdą?</h4>
                                    <ul>
                                        <li>Dzieci mają naturalną zdolność do perfect accent</li>
                                        <li>Dorośli uczą się początkowo szybciej</li>
                                        <li>Młodzież ma najlepsze warunki poznawcze</li>
                                        <li>Motywacja jest ważniejsza niż wiek</li>
                                    </ul>
                                </div>

                                <div className="conclusion-item">
                                    <h4>❌ Co jest mitem?</h4>
                                    <ul>
                                        <li>"Po 20-tce nie można nauczyć się języka"</li>
                                        <li>"Tylko dzieci uczą się naturalnie"</li>
                                        <li>"Starsi nie mają zdolności językowych"</li>
                                        <li>"Musisz zaczynać w dzieciństwie"</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="final-message">
                                <h4>💎 Najważniejszy wniosek</h4>
                                <p><strong>Wiek wpływa na TO, JAK się uczysz, ale nie na TO, CZY możesz się nauczyć.</strong> Każdy wiek ma swoje zalety - klucz to dostosować metodę do swoich możliwości i potrzeb.</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🎯 Niezależnie od wieku - zacznij dziś!</h3>
                            <p>Twój mózg jest gotowy na naukę w każdym wieku. Wybierz odpowiednią metodę i działaj!</p>
                            <div className="action-buttons">
                                <Link to="/test-poziomujacy" className="btn btn--primary">Sprawdź swój poziom</Link>
                                <Link to="/cwiczenia" className="btn btn--secondary">Dopasowane ćwiczenia</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#wiek</span>
                            <span className="tag">#naukajezykow</span>
                            <span className="tag">#neuroplastycznosc</span>
                            <span className="tag">#angielski</span>
                            <span className="tag">#edukacja</span>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default BestAgeToLearn;