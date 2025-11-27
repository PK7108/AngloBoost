import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import useDocumentMeta from '../../useDocumentMeta';
import './ArticleStyles.css';

function getMetaTitle(lang) {
    const baseTitle = lang === 'pl'
        ? 'Angielski w polskiej szkole - Prawda i mity o poziomie nauczania'
        : 'English in Polish Schools - Truth and Myths About Teaching Level'

    return `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang) {
    const baseDescription = {
        pl: 'Kompleksowa analiza nauczania angielskiego w polskich szkołach. Poznaj mocne i słabe strony systemu, poziomy po każdym etapie edukacji i strategie uzupełniania braków.',
        en: 'Comprehensive analysis of English teaching in Polish schools. Learn the strengths and weaknesses of the system, levels after each education stage and strategies for filling gaps.'
    }

    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang) {
    return lang === 'pl'
        ? 'https://angloboost.pl/pl/artykuly/angielski-w-polskiej-szkole'
        : 'https://angloboost.pl/en/articles/english-in-polish-schools'
}

const PolishSchoolsLevel = () => {
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
                        <span className="article__breadcrumb-current">Angielski w szkole</span>
                    </nav>
                    <h1 className="article__title">Angielski w polskiej szkole: Prawda i mity 🏫</h1>
                    <p className="article__intro">Jak maksymalnie wykorzystać szkolny angielski i uzupełnić jego braki</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 9 minut</span>
                        <span className="article__level">🎯 Dla: Uczniów, rodziców i wszystkich uczących się</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>📊 Stan faktyczny</h3>
                            <p>Według raportów EF EPI 2023, Polska zajmuje 13. miejsce w Europie pod względem znajomości angielskiego. To dobry wynik, ale wciąż daleko nam do liderów.</p>
                        </div>

                        <h2>Czego naprawdę uczą w polskich szkołach?</h2>
                        <div className="reality-check">
                            <div className="reality-item">
                                <h4>✅ Mocne strony systemu</h4>
                                <ul>
                                    <li>Wcześniejsze rozpoczęcie nauki (od 1 klasy)</li>
                                    <li>Obowiązkowy egzamin maturalny</li>
                                    <li>Standaryzowany program nauczania</li>
                                    <li>Dostęp do podręczników i materiałów</li>
                                </ul>
                            </div>
                            <div className="reality-item">
                                <h4>❌ Słabe strony systemu</h4>
                                <ul>
                                    <li>Za mało mówienia i praktyki</li>
                                    <li>Przestarzałe metody nauczania</li>
                                    <li>Przeładowane klasy (30+ uczniów)</li>
                                    <li>Nacisk na gramatykę zamiast komunikacji</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja poziomów według etapów edukacji */}
                    <section className="article__section">
                        <h2>Poziomy po każdym etapie edukacji 📈</h2>

                        <div className="education-levels">
                            <div className="edu-level">
                                <div className="edu-level__header">
                                    <h3>Szkoła Podstawowa</h3>
                                    <span className="edu-level__years">klasy 1-8</span>
                                </div>
                                <div className="edu-level__content">
                                    <div className="level-expectation">
                                        <h4>Oczekiwany poziom po ukończeniu:</h4>
                                        <span className="cefr-level-badge">A2/B1</span>
                                    </div>
                                    <div className="level-reality">
                                        <h4>Rzeczywistość:</h4>
                                        <ul>
                                            <li>📚 Dużo słówek i podstaw gramatyki</li>
                                            <li>🎧 Rozumienie prostych tekstów</li>
                                            <li>🗣️ Mało okazji do mówienia</li>
                                            <li>📝 Nacisk na pisanie i testy</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="edu-level">
                                <div className="edu-level__header">
                                    <h3>Liceum/Technikum</h3>
                                    <span className="edu-level__years">klasy 1-4</span>
                                </div>
                                <div className="edu-level__content">
                                    <div className="level-expectation">
                                        <h4>Oczekiwany poziom po ukończeniu:</h4>
                                        <span className="cefr-level-badge">B1/B2</span>
                                    </div>
                                    <div className="level-reality">
                                        <h4>Rzeczywistość:</h4>
                                        <ul>
                                            <li>📖 Rozszerzone słownictwo</li>
                                            <li>⚡ Szybsze tempo nauki</li>
                                            <li>🎯 Przygotowanie do matury</li>
                                            <li>💬 Wciąż za mało konwersacji</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="edu-level">
                                <div className="edu-level__header">
                                    <h3>Matura</h3>
                                    <span className="edu-level__years">poziom podstawowy/rozszerzony</span>
                                </div>
                                <div className="edu-level__content">
                                    <div className="level-expectation">
                                        <h4>Wymagany poziom:</h4>
                                        <span className="cefr-level-badge">B1 (podst.) / B2 (rozsz.)</span>
                                    </div>
                                    <div className="level-reality">
                                        <h4>Rzeczywistość:</h4>
                                        <ul>
                                            <li>✅ Dobrze sprawdza czytanie i słuchanie</li>
                                            <li>📝 Pisanie zgodne ze schematem</li>
                                            <li>🎤 Egzamin ustny - sztuczne sytuacje</li>
                                            <li>⚠️ Nie przygotowuje do realnych rozmów</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja problemów systemu */}
                    <section className="article__section">
                        <h2>Dlaczego szkoła nie uczy mówić? 🚧</h2>

                        <div className="system-problems">
                            <div className="problem-card">
                                <h4>👥 Przeładowane klasy</h4>
                                <p>W klasie 30-osobowej każdy uczeń mówi średnio <strong>1-2 minuty</strong> na lekcji</p>
                                <div className="problem-stat">
                                    <span className="stat-number">2 min</span>
                                    <span className="stat-label">mówienia tygodniowo</span>
                                </div>
                            </div>

                            <div className="problem-card">
                                <h4>📝 Kult testów i egzaminów</h4>
                                <p>System nastawiony na wyniki testów, a nie realne umiejętności</p>
                                <div className="problem-stat">
                                    <span className="stat-number">70%</span>
                                    <span className="stat-label">czasu na testy</span>
                                </div>
                            </div>

                            <div className="problem-card">
                                <h4>🎯 Przestarzałe metody</h4>
                                <p>Nauka tłumaczeniowa zamiast komunikacyjnej, brak immersji</p>
                                <div className="problem-stat">
                                    <span className="stat-number">90%</span>
                                    <span className="stat-label">polskiego na lekcji</span>
                                </div>
                            </div>

                            <div className="problem-card">
                                <h4>📚 Nuda i brak motywacji</h4>
                                <p>Podręczniki oderwane od rzeczywistości, mało angażujące tematy</p>
                                <div className="problem-stat">
                                    <span className="stat-number">60%</span>
                                    <span className="stat-label">znudzonych uczniów</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja strategii dla uczniów */}
                    <section className="article__section">
                        <h2>Jak maksymalnie wykorzystać szkolny angielski? 🎯</h2>

                        <div className="strategy-cards">
                            <div className="strategy-card">
                                <h4>🏆 Bądź aktywny na lekcji</h4>
                                <div className="strategy-tips">
                                    <div className="tip">✋ Zgłaszaj się do odpowiedzi</div>
                                    <div className="tip">🎤 Mów pełnymi zdaniami</div>
                                    <div className="tip">💡 Zadawaj pytania po angielsku</div>
                                </div>
                                <div className="strategy-benefit">
                                    <strong>Efekt:</strong> +15 minut mówienia tygodniowo
                                </div>
                            </div>

                            <div className="strategy-card">
                                <h4>📚 Mądrze korzystaj z podręcznika</h4>
                                <div className="strategy-tips">
                                    <div className="tip">🎧 Słuchaj nagrań wielokrotnie</div>
                                    <div className="tip">📝 Rób dodatkowe ćwiczenia</div>
                                    <div className="tip">🔍 Szukaj ciekawostek w tematach</div>
                                </div>
                                <div className="strategy-benefit">
                                    <strong>Efekt:</strong> Lepsze zrozumienie materiału
                                </div>
                            </div>

                            <div className="strategy-card">
                                <h4>👥 Stwórz grupę naukową</h4>
                                <div className="strategy-tips">
                                    <div className="tip">🤝 Umów się z 2-3 osobami</div>
                                    <div className="tip">💬 Rozmawiajcie tylko po angielsku</div>
                                    <div className="tip">🎯 Odrabiajcie razem zadania</div>
                                </div>
                                <div className="strategy-benefit">
                                    <strong>Efekt:</strong> Naturalna praktyka mówienia
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja uzupełniania braków */}
                    <section className="article__section">
                        <h2>Jak uzupełnić braki szkolnej nauki? 🔧</h2>

                        <div className="gap-filling">
                            <div className="gap-card">
                                <h4>🗣️ Brak mówienia</h4>
                                <div className="solutions">
                                    <div className="solution-item">
                                        <h5>Mów do siebie</h5>
                                        <p>Opisuj swoje działania po angielsku przez 10 minut dziennie</p>
                                    </div>
                                    <div className="solution-item">
                                        <h5>Aplikacje konwersacyjne</h5>
                                        <p>HelloTalk, Tandem - rozmowy z native speakerami</p>
                                    </div>
                                    <div className="solution-item">
                                        <h5>Nagrywaj się</h5>
                                        <p>Nagraj 2-minutową wypowiedź i przeanalizuj błędy</p>
                                    </div>
                                </div>
                            </div>

                            <div className="gap-card">
                                <h4>🎧 Brak słuchania</h4>
                                <div className="solutions">
                                    <div className="solution-item">
                                        <h5>Podcasty dla uczących się</h5>
                                        <p>BBC Learning English, VOA Learning English</p>
                                    </div>
                                    <div className="solution-item">
                                        <h5>Seriale z napisami</h5>
                                        <p>Oglądaj z angielskimi napisami, potem bez</p>
                                    </div>
                                    <div className="solution-item">
                                        <h5>Muzyka z tekstami</h5>
                                        <p>Słuchaj i śpiewaj razem z tekstem</p>
                                    </div>
                                </div>
                            </div>

                            <div className="gap-card">
                                <h4>📖 Brak autentycznych materiałów</h4>
                                <div className="solutions">
                                    <div className="solution-item">
                                        <h5>Czytaj newsy po angielsku</h5>
                                        <p>BBC News, CNN Student News</p>
                                    </div>
                                    <div className="solution-item">
                                        <h5>Graj w gry po angielsku</h5>
                                        <p>Zmień język w grach na angielski</p>
                                    </div>
                                    <div className="solution-item">
                                        <h5>Korzystaj z angielskich social media</h5>
                                        <p>Obserwuj zagranicznych youtuberów</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja planu działania */}
                    <section className="article__section">
                        <h2>Twój tygodniowy plan nauki 📅</h2>

                        <div className="weekly-plan">
                            <div className="plan-day">
                                <h4>Poniedziałek</h4>
                                <ul>
                                    <li>🏫 Szkoła: Bądź aktywny na lekcji</li>
                                    <li>🏠 Dom: 15 min podcast</li>
                                    <li>💬 5 min mówienia do siebie</li>
                                </ul>
                            </div>
                            <div className="plan-day">
                                <h4>Wtorek</h4>
                                <ul>
                                    <li>🏫 Szkoła: Notatki po angielsku</li>
                                    <li>🏠 Dom: Obejrzyj odcinek serialu</li>
                                    <li>📝 Powtórz słówka z lekcji</li>
                                </ul>
                            </div>
                            <div className="plan-day">
                                <h4>Środa</h4>
                                <ul>
                                    <li>🏫 Szkoła: Grupowa praca po angielsku</li>
                                    <li>🏠 Dom: Rozmowa w aplikacji</li>
                                    <li>🎵 Tłumaczenie piosenki</li>
                                </ul>
                            </div>
                            <div className="plan-day">
                                <h4>Czwartek</h4>
                                <ul>
                                    <li>🏫 Szkoła: Zadawaj pytania po angielsku</li>
                                    <li>🏠 Dom: Czytanie artykułu</li>
                                    <li>🔊 Shadowing - naśladuj wymowę</li>
                                </ul>
                            </div>
                            <div className="plan-day">
                                <h4>Piątek</h4>
                                <ul>
                                    <li>🏫 Szkoła: Podsumuj lekcję po angielsku</li>
                                    <li>🏠 Dom: Gra komputerowa po angielsku</li>
                                    <li>📊 Powtórka tygodnia</li>
                                </ul>
                            </div>
                            <div className="plan-day plan-day--weekend">
                                <h4>Weekend</h4>
                                <ul>
                                    <li>🎬 Film lub serial bez napisów</li>
                                    <li>💻 Media społecznościowe po angielsku</li>
                                    <li>😊 Relaks z językiem</li>
                                </ul>
                            </div>
                        </div>

                        <div className="time-investment">
                            <h4>⏰ Inwestycja czasowa</h4>
                            <div className="investment-breakdown">
                                <div className="investment-item">
                                    <span className="investment-label">Szkoła (3h tygodniowo)</span>
                                    <div className="investment-bar">
                                        <div className="investment-fill" style={{width: '25%'}}></div>
                                    </div>
                                </div>
                                <div className="investment-item">
                                    <span className="investment-label">Dodatkowa nauka (5h tygodniowo)</span>
                                    <div className="investment-bar">
                                        <div className="investment-fill" style={{width: '42%'}}></div>
                                    </div>
                                </div>
                                <div className="investment-item">
                                    <span className="investment-label">Immersja (4h tygodniowo)</span>
                                    <div className="investment-bar">
                                        <div className="investment-fill" style={{width: '33%'}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="investment-total">
                                <strong>Łącznie: 12h angielskiego tygodniowo</strong> - to gwarancja szybkich postępów!
                            </div>
                        </div>
                    </section>

                    {/* Sekcja dla rodziców */}
                    <section className="article__section">
                        <h2>Dla rodziców: Jak wspierać dziecko? 👨‍👩‍👧‍👦</h2>

                        <div className="parent-advice">
                            <div className="advice-card">
                                <h4>💰 Mądrze inwestuj</h4>
                                <p>Zamiast drogich korepetycji, zainwestuj w:</p>
                                <ul>
                                    <li>Netflix z angielskimi napisami</li>
                                    <li>Dobre słuchawki do podcastów</li>
                                    <li>Gry komputerowe po angielsku</li>
                                    <li>Książki dostosowane do poziomu</li>
                                </ul>
                            </div>

                            <div className="advice-card">
                                <h4>🎯 Stwórz środowisko</h4>
                                <p>Angielski w domu:</p>
                                <ul>
                                    <li>Język w telefonie na angielski</li>
                                    <li>Angielskie napisy w TV</li>
                                    <li>Muzyka anglojęzyczna</li>
                                    <li>Rozmowy o angielskiej kulturze</li>
                                </ul>
                            </div>

                            <div className="advice-card">
                                <h4>🚀 Motywuj, nie zmuszaj</h4>
                                <p>Skuteczne metody:</p>
                                <ul>
                                    <li>Chwal za wysiłek, nie tylko wyniki</li>
                                    <li>Pokazuj praktyczne zastosowania</li>
                                    <li>Znajdź ciekawe tematy dla dziecka</li>
                                    <li>Organizuj wyjazdy językowe</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja inspiracji */}
                    <section className="article__section">
                        <div className="success-story">
                            <div className="success-story__quote">"</div>
                            <div className="success-story__content">
                                <h3>Historia Asi: Od szkolnej 3 do swobodnej konwersacji</h3>
                                <p>"W szkole miałam 3 z angielskiego i bałam się mówić. Zacząłam od oglądania seriali z napisami i mówienia do siebie. Po roku dodatkowej nauki dostałam 5 na maturze, a dziś studiuję w Anglii!"</p>
                                <div className="success-journey">
                                    <div className="journey-step">
                                        <span>Klasa 2 LO:</span> Ocena 3, strach przed mówieniem
                                    </div>
                                    <div className="journey-step">
                                        <span>Po 6 miesiącach:</span> Oglądanie seriali, podcasty
                                    </div>
                                    <div className="journey-step">
                                        <span>Po 1 roku:</span> Pierwsze konwersacje, ocena 4
                                    </div>
                                    <div className="journey-step">
                                        <span>Matura:</span> 90% rozszerzenie, studia za granicą
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🎯 Nie czekaj na system - działaj!</h3>
                            <p>Szkoła da Ci podstawy, ale prawdziwą płynność musisz wypracować sam. Zacznij od jednej metody dzisiaj!</p>
                            <div className="action-buttons">
                                <Link to="/cwiczenia" className="btn btn--primary">Ćwiczenia uzupełniające</Link>
                                <Link to="/slownictwo" className="btn btn--secondary">Słownictwo szkolne</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#szkoła</span>
                            <span className="tag">#naukaangielskiego</span>
                            <span className="tag">#edukacja</span>
                            <span className="tag">#matura</span>
                            <span className="tag">#polskaszkoła</span>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default PolishSchoolsLevel;