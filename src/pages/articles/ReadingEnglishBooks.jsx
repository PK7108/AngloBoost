import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleStyles.css';

const ReadingEnglishBooks = () => {
    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/artykuly" className="article__breadcrumb-link">Artykuły</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Czytanie po angielsku</span>
                    </nav>
                    <h1 className="article__title">Czytanie książek po angielsku 📚</h1>
                    <p className="article__intro">Czy warto i jak to robić, aby jak najwięcej się nauczyć?</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 7 minut</span>
                        <span className="article__level">🎯 Dla: Wszystkich, którzy chcą czytać w oryginale</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>💎 Czytanie vs inne metody</h3>
                            <p><strong>Czytanie daje najwięcej korzyści językowych w przeliczeniu na godzinę nauki.</strong> To najbardziej efektywny sposób nauki słownictwa!</p>
                        </div>

                        <h2>Dlaczego warto czytać po angielsku?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <h4>📈 Bogate słownictwo</h4>
                                <p>Książki zawierają 3x więcej unikalnych słów niż rozmowy</p>
                                <div className="benefit-stat">
                                    <span className="stat-number">8.6x</span>
                                    <span className="stat-label">więcej słów niż TV</span>
                                </div>
                            </div>

                            <div className="benefit-card">
                                <h4>🎯 Naturalna gramatyka</h4>
                                <p>Widzisz struktury gramatyczne w prawdziwym kontekście</p>
                                <div className="benefit-stat">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">poprawnych wzorców</span>
                                </div>
                            </div>

                            <div className="benefit-card">
                                <h4>🧠 Myślenie po angielsku</h4>
                                <p>Twój mózg przestaje tłumaczyć i zaczyna myśleć w języku</p>
                                <div className="benefit-stat">
                                    <span className="stat-number">2x</span>
                                    <span className="stat-label">szybsze przyswajanie</span>
                                </div>
                            </div>

                            <div className="benefit-card">
                                <h4>🎪 Przyjemność i kultura</h4>
                                <p>Odkrywasz książki w oryginale, bez strat w tłumaczeniu</p>
                                <div className="benefit-stat">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">autentyczności</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja wyboru książek */}
                    <section className="article__section">
                        <h2>Jak wybrać pierwszą książkę? 🎯</h2>

                        <div className="book-selection">
                            <div className="selection-guide">
                                <h3>Zasada 90%</h3>
                                <p>Wybierz książkę, w której <strong>rozumiesz 90% słów</strong>. 10% nowych słów to optymalna ilość do nauki.</p>

                                <div className="comprehension-scale">
                                    <div className="comprehension-level">
                                        <span className="level-indicator level-indicator--poor"></span>
                                        <span className="level-label">70% - Za trudne</span>
                                    </div>
                                    <div className="comprehension-level">
                                        <span className="level-indicator level-indicator--good"></span>
                                        <span className="level-label">90% - Idealne</span>
                                    </div>
                                    <div className="comprehension-level">
                                        <span className="level-indicator level-indicator--easy"></span>
                                        <span className="level-label">98% - Za łatwe</span>
                                    </div>
                                </div>
                            </div>

                            <div className="book-recommendations">
                                <h3>Polecane na start:</h3>
                                <div className="recommendation-list">
                                    <div className="recommendation-item">
                                        <h4>📖 Poziom A2/B1</h4>
                                        <ul>
                                            <li>"The Little Prince" - Antoine de Saint-Exupéry</li>
                                            <li>"Charlotte's Web" - E.B. White</li>
                                            <li>Graded readers (dostosowane do poziomu)</li>
                                        </ul>
                                    </div>
                                    <div className="recommendation-item">
                                        <h4>📚 Poziom B1/B2</h4>
                                        <ul>
                                            <li>"Harry Potter" - J.K. Rowling</li>
                                            <li>"The Hunger Games" - Suzanne Collins</li>
                                            <li>"The Curious Incident..." - Mark Haddon</li>
                                        </ul>
                                    </div>
                                    <div className="recommendation-item">
                                        <h4>📕 Poziom B2/C1</h4>
                                        <ul>
                                            <li>"1984" - George Orwell</li>
                                            <li>"The Great Gatsby" - F. Scott Fitzgerald</li>
                                            <li>"The Alchemist" - Paulo Coelho</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja metod czytania */}
                    <section className="article__section">
                        <h2>3 skuteczne metody czytania 🎨</h2>

                        <div className="reading-methods">
                            <div className="method-card">
                                <div className="method-card__header">
                                    <h3>1. Ekstensywne</h3>
                                    <span className="method-difficulty">Łatwe</span>
                                </div>
                                <div className="method-card__content">
                                    <p><strong>Czytanie dla przyjemności</strong> - nie sprawdzasz każdego słowa</p>
                                    <ul>
                                        <li>🔹 Czytać dużo i szybko</li>
                                        <li>🔹 Zgadywać znaczenie z kontekstu</li>
                                        <li>🔹 Nie przerywać na każde nieznane słowo</li>
                                    </ul>
                                    <div className="method-tips">
                                        <h5>Kiedy stosować?</h5>
                                        <p>Do budowania płynności i przyzwyczajenia mózgu do języka</p>
                                    </div>
                                </div>
                            </div>

                            <div className="method-card">
                                <div className="method-card__header">
                                    <h3>2. Intensywne</h3>
                                    <span className="method-difficulty">Średnie</span>
                                </div>
                                <div className="method-card__content">
                                    <p><strong>Czytanie z nauką</strong> - dokładna analiza tekstu</p>
                                    <ul>
                                        <li>🔹 Sprawdzać nieznane słowa</li>
                                        <li>🔹 Notować ciekawe wyrażenia</li>
                                        <li>🔹 Analizować struktury gramatyczne</li>
                                    </ul>
                                    <div className="method-tips">
                                        <h5>Kiedy stosować?</h5>
                                        <p>Do celowej nauki nowego słownictwa i gramatyki</p>
                                    </div>
                                </div>
                            </div>

                            <div className="method-card">
                                <div className="method-card__header">
                                    <h3>3. Mieszane</h3>
                                    <span className="method-difficulty">Optymalne</span>
                                </div>
                                <div className="method-card__content">
                                    <p><strong>Połączenie obu metod</strong> - złoty środek</p>
                                    <ul>
                                        <li>🔹 Czytać rozdział ekstensywnie</li>
                                        <li>🔹 Wybrać 5-10 kluczowych słów do nauki</li>
                                        <li>🔹 Wrócić i przeczytać intensywnie</li>
                                    </ul>
                                    <div className="method-tips">
                                        <h5>Kiedy stosować?</h5>
                                        <p>Dla najlepszych efektów - przyjemność + nauka</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja praktycznych technik */}
                    <section className="article__section">
                        <h2>Praktyczne techniki nauki przez czytanie 🛠️</h2>

                        <div className="technique-grid">
                            <div className="technique-item">
                                <h4>📝 Notowanie słówek</h4>
                                <div className="technique-steps">
                                    <div className="step">1. Czytaj bez przerywania</div>
                                    <div className="step">2. Zaznacz nieznane słowa</div>
                                    <div className="step">3. Po rozdziale wróć do zaznaczonych</div>
                                    <div className="step">4. Zapisz 5-10 najważniejszych</div>
                                </div>
                                <div className="technique-tip">
                                    💡 <strong>Tip:</strong> Ucz się słów w zdaniach, nie w izolacji
                                </div>
                            </div>

                            <div className="technique-item">
                                <h4>🎧 Czytanie + słuchanie</h4>
                                <div className="technique-steps">
                                    <div className="step">1. Znajdź audiobooka</div>
                                    <div className="step">2. Słuchaj i śledź tekst</div>
                                    <div className="step">3. Naśladuj wymowę</div>
                                    <div className="step">4. Zwracaj uwagę na intonację</div>
                                </div>
                                <div className="technique-tip">
                                    💡 <strong>Tip:</strong> Używaj funkcji zmiany prędkości
                                </div>
                            </div>

                            <div className="technique-item">
                                <h4>🔁 Powtórki z spaced repetition</h4>
                                <div className="technique-steps">
                                    <div className="step">1. Nowe słówka do Anki/Quizlet</div>
                                    <div className="step">2. Powtarzaj systematycznie</div>
                                    <div className="step">3. Używaj w zdaniach</div>
                                    <div className="step">4. Wracaj do starych rozdziałów</div>
                                </div>
                                <div className="technique-tip">
                                    💡 <strong>Tip:</strong> 5 minut powtórek dziennie &gt; 1 godzina raz w tygodniu
                                </div>
                            </div>

                            <div className="technique-item">
                                <h4>💭 Myślenie o tekście</h4>
                                <div className="technique-steps">
                                    <div className="step">1. Po przeczytaniu zamknij książkę</div>
                                    <div className="step">2. Opowiedz sobie co przeczytałeś</div>
                                    <div className="step">3. Pomyśl o tym po angielsku</div>
                                    <div className="step">4. Zadaj sobie pytania o tekst</div>
                                </div>
                                <div className="technique-tip">
                                    💡 <strong>Tip:</strong> Używaj nowych słów w swoich przemyśleniach
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja narzędzi i aplikacji */}
                    <section className="article__section">
                        <h2>Niezbędne narzędzia dla czytelnika 📱</h2>

                        <div className="tools-showcase">
                            <div className="tool-category">
                                <h4>📖 E-booki i czytniki</h4>
                                <div className="tool-list">
                                    <div className="tool-item">
                                        <h5>Amazon Kindle</h5>
                                        <p>Wbudowany słownik, możliwość zaznaczania</p>
                                    </div>
                                    <div className="tool-item">
                                        <h5>Google Play Books</h5>
                                        <p>Tłumaczenie dotykowe, synchronizacja</p>
                                    </div>
                                    <div className="tool-item">
                                        <h5>Apple Books</h5>
                                        <p>Integracja z iOS, słownik</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tool-category">
                                <h4>🔧 Aplikacje do nauki</h4>
                                <div className="tool-list">
                                    <div className="tool-item">
                                        <h5>LingQ</h5>
                                        <p>Specjalnie dla uczących się języków</p>
                                    </div>
                                    <div className="tool-item">
                                        <h5>Readlang</h5>
                                        <p>Tłumaczenie stron internetowych</p>
                                    </div>
                                    <div className="tool-item">
                                        <h5>Anki</h5>
                                        <p>Fiszki z nowymi słówkami</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tool-category">
                                <h4>🎧 Audiobooki</h4>
                                <div className="tool-list">
                                    <div className="tool-item">
                                        <h5>Audible</h5>
                                        <p>Największy wybór, dobra jakość</p>
                                    </div>
                                    <div className="tool-item">
                                        <h5>Spotify</h5>
                                        <p>Coraz więcej audiobooków</p>
                                    </div>
                                    <div className="tool-item">
                                        <h5>YouTube</h5>
                                        <p>Darmowe audiobooki w domenie publicznej</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tech-tip">
                            <h4>💡 Technologia ułatwia naukę!</h4>
                            <p>Wykorzystaj funkcje takie jak: <strong>słownik dotykowy, tłumaczenie w locie, zaznaczanie, notatki głosowe</strong>. To jak mieć prywatnego nauczyciela!</p>
                        </div>
                    </section>

                    {/* Sekcja typowych błędów */}
                    <section className="article__section">
                        <h2>Czego unikać? 🚫</h2>

                        <div className="mistakes-grid">
                            <div className="mistake-card">
                                <h4>📖 Zbyt trudna książka</h4>
                                <p>Wybierając książkę 2 poziomy ponad swój, szybko się zniechęcisz</p>
                                <div className="solution">
                                    <strong>Rozwiązanie:</strong> Zastosuj zasadę 90%
                                </div>
                            </div>

                            <div className="mistake-card">
                                <h4>🔍 Sprawdzanie każdego słowa</h4>
                                <p>To zabija przyjemność z czytania i płynność</p>
                                <div className="solution">
                                    <strong>Rozwiązanie:</strong> Zgaduj z kontekstu, sprawdzaj tylko kluczowe
                                </div>
                            </div>

                            <div className="mistake-card">
                                <h4>⏰ Nieregularność</h4>
                                <p>Czytanie raz na miesiąc nie da efektów</p>
                                <div className="solution">
                                    <strong>Rozwiązanie:</strong> 15 minut dziennie &gt; 3 godziny raz w miesiącu
                                </div>
                            </div>

                            <div className="mistake-card">
                                <h4>🎯 Tylko intensywne czytanie</h4>
                                <p>Brak przyjemności = brak motywacji</p>
                                <div className="solution">
                                    <strong>Rozwiązanie:</strong> Mieszaj metody - przyjemność + nauka
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja planu czytania */}
                    <section className="article__section">
                        <h2>Twój 30-dniowy plan czytania 📅</h2>

                        <div className="reading-plan">
                            <div className="plan-phase">
                                <h4>Tydzień 1-2: Przyzwyczajenie</h4>
                                <ul>
                                    <li>📚 Wybierz łatwą książkę (90% zrozumienia)</li>
                                    <li>⏰ 10-15 minut czytania dziennie</li>
                                    <li>🎯 Metoda ekstensywna</li>
                                    <li>📝 Notuj 3 nowe słówka dziennie</li>
                                </ul>
                            </div>

                            <div className="plan-phase">
                                <h4>Tydzień 3-4: Budowanie nawyku</h4>
                                <ul>
                                    <li>📚 Nieco trudniejsza książka</li>
                                    <li>⏰ 20-25 minut czytania dziennie</li>
                                    <li>🎯 Metoda mieszana</li>
                                    <li>📝 5-7 nowych słówek dziennie</li>
                                </ul>
                            </div>

                            <div className="plan-phase">
                                <h4>Miesiąc 2: Płynność</h4>
                                <ul>
                                    <li>📚 Książki na swoim poziomie</li>
                                    <li>⏰ 30+ minut dziennie</li>
                                    <li>🎯 Głównie ekstensywnie</li>
                                    <li>📝 Naturalne przyswajanie słownictwa</li>
                                </ul>
                            </div>
                        </div>

                        <div className="progress-milestones">
                            <h4>🎯 Kamienie milowe</h4>
                            <div className="milestones">
                                <div className="milestone">
                                    <span className="milestone-number">7 dni</span>
                                    <span className="milestone-text">Nawyk codziennego czytania</span>
                                </div>
                                <div className="milestone">
                                    <span className="milestone-number">30 dni</span>
                                    <span className="milestone-text">Pierwsza ukończona książka</span>
                                </div>
                                <div className="milestone">
                                    <span className="milestone-number">3 miesiące</span>
                                    <span className="milestone-text">Czytanie dla przyjemności</span>
                                </div>
                                <div className="milestone">
                                    <span className="milestone-number">6 miesięcy</span>
                                    <span className="milestone-text">+2000 nowych słów</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja inspiracji */}
                    <section className="article__section">
                        <div className="success-story">
                            <div className="success-story__quote">"</div>
                            <div className="success-story__content">
                                <h3>Historia Tomka: Od słownika do swobodnego czytania</h3>
                                <p>"Zaczynałem od 'The Little Prince' ze słownikiem - każde zdanie było wyzwaniem. Po 3 miesiącach regularnego czytania mogłem już czytać 'Harry'ego Pottera' prawie bez pomocy. Dziś czytam Stephena Kinga w oryginale i nie wyobrażam sobie powrotu do tłumaczeń!"</p>
                                <div className="reading-journey">
                                    <div className="journey-point">
                                        <span>Start:</span> The Little Prince + słownik
                                    </div>
                                    <div className="journey-point">
                                        <span>3 miesiące:</span> Harry Potter z minimalną pomocą
                                    </div>
                                    <div className="journey-point">
                                        <span>6 miesięcy:</span> The Hunger Games bez pomocy
                                    </div>
                                    <div className="journey-point">
                                        <span>1 rok:</span> Stephen King dla przyjemności
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🎯 Zacznij swoją przygodę z czytaniem!</h3>
                            <p>Wybierz pierwszą książkę już dziś. Pamiętaj - nawet 10 minut dziennie zmieni Twój angielski!</p>
                            <div className="action-buttons">
                                <Link to="/slownictwo/czytanie" className="btn btn--primary">Słownictwo do czytania</Link>
                                <Link to="/cwiczenia/czytanie" className="btn btn--secondary">Ćwiczenia czytania</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#czytanie</span>
                            <span className="tag">#książki</span>
                            <span className="tag">#naukasłownictwa</span>
                            <span className="tag">#angielski</span>
                            <span className="tag">#czytanieworyginale</span>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default ReadingEnglishBooks;