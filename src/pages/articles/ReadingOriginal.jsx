import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleStyles.css';

const ReadingOriginal = () => {
    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/artykuly" className="article__breadcrumb-link">Artykuły</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Czytanie w oryginale</span>
                    </nav>
                    <h1 className="article__title">Czytanie literatury w oryginale – krok po kroku 📚</h1>
                    <p className="article__intro">Jak wybrać książkę, poziom trudności i słownictwo - kompletny przewodnik po świecie anglojęzycznej literatury</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 9 minut</span>
                        <span className="article__level">🎯 Dla: Poziom A2-C2</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>💡 Dlaczego warto czytać w oryginale?</h3>
                            <p><strong>Czytanie w oryginale rozwija słownictwo 3x szybciej niż tradycyjne metody nauki.</strong> Pozwala poczuć prawdziwy styl autora, zrozumieć niuanse językowe i kulturalne, których tłumaczenie nie oddaje.</p>
                        </div>

                        <h2>Korzyści z czytania literatury w oryginale</h2>
                        <div className="points-grid">
                            <div className="point-card">
                                <h4>📈 Bogatsze słownictwo</h4>
                                <p>Naturalne konteksty i powtórki słów w autentycznych sytuacjach</p>
                            </div>
                            <div className="point-card">
                                <h4>🎭 Prawdziwy język</h4>
                                <p>Autentyczne dialogi, idiomy i styl charakterystyczny dla autora</p>
                            </div>
                            <div className="point-card">
                                <h4>🌍 Zrozumienie kultury</h4>
                                <p>Kontekst kulturowy, humor i realia życia w krajach anglojęzycznych</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja wyboru książki */}
                    <section className="article__section">
                        <h2>Jak wybrać pierwszą książkę w oryginale? 🤔</h2>

                        <div className="cefr-overview">
                            <div className="cefr-level cefr-level--basic">
                                <div className="cefr-level__header">
                                    <h3>Poziom A2-B1</h3>
                                    <span className="cefr-level__subtitle">Dla początkujących</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item"><strong>"Charlotte's Web"</strong> - E.B. White</div>
                                    <div className="cefr-item"><strong>"The Giver"</strong> - Lois Lowry</div>
                                    <div className="cefr-item"><strong>"Wonder"</strong> - R.J. Palacio</div>
                                    <div className="cefr-item"><strong>"The Curious Incident..."</strong> - Mark Haddon</div>
                                    <div className="cefr-item"><strong>Graded readers</strong> - uproszczone wersje</div>
                                </div>
                                <div className="tool-recommendation">
                                    <strong>Kryterium:</strong> 1 nieznane słowo na 50 znanych
                                </div>
                            </div>

                            <div className="cefr-level cefr-level--independent">
                                <div className="cefr-level__header">
                                    <h3>Poziom B1-B2</h3>
                                    <span className="cefr-level__subtitle">Dla średniozaawansowanych</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item"><strong>"The Hunger Games"</strong> - Suzanne Collins</div>
                                    <div className="cefr-item"><strong>"Harry Potter"</strong> - J.K. Rowling</div>
                                    <div className="cefr-item"><strong>"The Alchemist"</strong> - Paulo Coelho</div>
                                    <div className="cefr-item"><strong>"The Little Prince"</strong> - Antoine de Saint-Exupéry</div>
                                    <div className="cefr-item"><strong>Young adult fiction</strong> - literatura młodzieżowa</div>
                                </div>
                                <div className="tool-recommendation">
                                    <strong>Kryterium:</strong> 1 nieznane słowo na 20-30 znanych
                                </div>
                            </div>

                            <div className="cefr-level cefr-level--proficient">
                                <div className="cefr-level__header">
                                    <h3>Poziom B2-C1</h3>
                                    <span className="cefr-level__subtitle">Dla zaawansowanych</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item"><strong>"1984"</strong> - George Orwell</div>
                                    <div className="cefr-item"><strong>"To Kill a Mockingbird"</strong> - Harper Lee</div>
                                    <div className="cefr-item"><strong>"The Great Gatsby"</strong> - F. Scott Fitzgerald</div>
                                    <div className="cefr-item"><strong>"Pride and Prejudice"</strong> - Jane Austen</div>
                                    <div className="cefr-item"><strong>Współczesna literatura</strong> - np. Jodi Picoult</div>
                                </div>
                                <div className="tool-recommendation">
                                    <strong>Kryterium:</strong> 1 nieznane słowo na 10-15 znanych
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja testu poziomu */}
                    <section className="article__section">
                        <h2>Jak sprawdzić, czy książka jest na Twoim poziomie? 📊</h2>

                        <div className="level-detail level-detail--a2">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">Metoda 1</span>
                                <h3>Test pierwszego rozdziału</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Kroki testu:</h4>
                                <ul className="skill-list">
                                    <li>✅ <strong>Przeczytaj pierwszy rozdział</strong> - bez słownika</li>
                                    <li>✅ <strong>Policz nieznane słowa</strong> - na jednej stronie</li>
                                    <li>✅ <strong>Oceń zrozumienie</strong> - czy rozumiesz ogólny sens?</li>
                                    <li>✅ <strong>Sprawdź płynność</strong> - czy czytanie nie męczy?</li>
                                    <li>✅ <strong>Zastanów się nad fabułą</strong> - czy jest interesująca?</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Przykład oceny:</strong><br/>
                                    Jeśli na stronie jest 5-10 nieznanych słów - książka jest idealna.<br/>
                                    Jeśli ponad 15 - może być zbyt trudna na początek.
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">5-10</span>
                                        <span className="stat-small__label">nieznanych słów/strona</span>
                                    </div>
                                    <div className="stat-small">
                                        <span className="stat-small__value">80%</span>
                                        <span className="stat-small__label">zrozumienia treści</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="level-detail level-detail--b1">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">Metoda 2</span>
                                <h3>Kryterium przyjemności czytania</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Znaki, że książka jest odpowiednia:</h4>
                                <ul className="skill-list">
                                    <li>✅ <strong>Czytasz płynnie</strong> - bez ciągłego sprawdzania słownika</li>
                                    <li>✅ <strong>Rozumiesz kontekst</strong> - nawet bez wszystkich słów</li>
                                    <li>✅ <strong>Chcesz czytać dalej</strong> - fabuła Cię wciąga</li>
                                    <li>✅ <strong>Uczysz się naturalnie</strong> - nowe słowa zapamiętują się same</li>
                                    <li>✅ <strong>Czujesz satysfakcję</strong> - a nie frustrację</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Złota zasada:</strong><br/>
                                    "Jeśli czytanie sprawia przyjemność i rozumiesz 85-90% treści, książka jest na odpowiednim poziomie."
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">85-90%</span>
                                        <span className="stat-small__label">zrozumienia</span>
                                    </div>
                                    <div className="stat-small">
                                        <Link to="/test-poziomujacy" className="article__breadcrumb-link">Sprawdź swój poziom</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja gatunków literackich */}
                    <section className="article__section">
                        <h2>Gatunki literackie - który dla Ciebie? 📖</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>🔍 Kryminały i thrillery</h4>
                                <ul>
                                    <li><strong>Plusy:</strong> Wciągająca fabuła, dialogi, codzienne słownictwo</li>
                                    <li><strong>Dla kogo:</strong> Lubiących zagadki i napięcie</li>
                                    <li><strong>Przykłady:</strong> Agatha Christie, Dan Brown, Gillian Flynn</li>
                                    <li><strong>Poziom:</strong> B1-C1</li>
                                    <li><strong>Słownictwo:</strong> Codzienne + specjalistyczne (policyjne)</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>💞 Romans i obyczajowe</h4>
                                <ul>
                                    <li><strong>Plusy:</strong> Emocjonalny język, relacje międzyludzkie</li>
                                    <li><strong>Dla kogo:</strong> Lubiących historie o związkach i emocjach</li>
                                    <li><strong>Przykłady:</strong> Nicholas Sparks, Jojo Moyes, Jane Austen</li>
                                    <li><strong>Poziom:</strong> B1-B2</li>
                                    <li><strong>Słownictwo:</strong> Emocje, relacje, życie codzienne</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🚀 Science Fiction i Fantasy</h4>
                                <ul>
                                    <li><strong>Plusy:</strong> Kreatywny język, wyobraźnia, neologizmy</li>
                                    <li><strong>Dla kogo:</strong> Lubiących światy alternatywne i futurystyczne</li>
                                    <li><strong>Przykłady:</strong> J.R.R. Tolkien, George R.R. Martin, Isaac Asimov</li>
                                    <li><strong>Poziom:</strong> B2-C2 (często trudniejsze)</li>
                                    <li><strong>Słownictwo:</strong> Specjalistyczne, wymyślone słowa</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja strategii czytania */}
                    <section className="article__section">
                        <h2>Strategie efektywnego czytania 🎯</h2>

                        <div className="comparison-table">
                            <h4>Metody pracy z tekstem</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th>Strategia</th>
                                    <th>Opis</th>
                                    <th>Dla poziomu</th>
                                    <th>Korzyści</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Extensive Reading</td>
                                    <td>Czytanie dla przyjemności, bez słownika</td>
                                    <td>Wszystkie</td>
                                    <td>Płynność, przyjemność, naturalne przyswajanie</td>
                                </tr>
                                <tr>
                                    <td>Intensive Reading</td>
                                    <td>Analityczne czytanie ze słownikiem</td>
                                    <td>B1+</td>
                                    <td>Bogacenie słownictwa, zrozumienie niuansów</td>
                                </tr>
                                <tr>
                                    <td>Skimming</td>
                                    <td>Szybkie czytanie dla ogólnego zrozumienia</td>
                                    <td>B2+</td>
                                    <td>Szybkość, wyszukiwanie informacji</td>
                                </tr>
                                <tr>
                                    <td>Scanning</td>
                                    <td>Szukanie konkretnych informacji</td>
                                    <td>B1+</td>
                                    <td>Celowość, efektywność czasowa</td>
                                </tr>
                                <tr>
                                    <td>Shadow Reading</td>
                                    <td>Czytanie + słuchanie audiobooka</td>
                                    <td>A2+</td>
                                    <td>Wymowa, intonacja, multisensoryczna nauka</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Sekcja pracy ze słownictwem */}
                    <section className="article__section">
                        <h2>Jak efektywnie uczyć się słownictwa z książek? 📝</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>📚 Prowadzenie czytelnika</h4>
                                <ul>
                                    <li><strong>Notuj nowe słowa</strong> - w kontekście zdania</li>
                                    <li><strong>Twórz fiszki</strong> - z przykładami z książki</li>
                                    <li><strong>Grupuj tematycznie</strong> - słowa z tej samej książki</li>
                                    <li><strong>Używaj kolorowych zakładek</strong> - do oznaczania stron</li>
                                    <li><strong>Pisz własne zdania</strong> - z nowymi słowami</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🎯 Inteligentny wybór słów</h4>
                                <ul>
                                    <li><strong>Ucz się częstych słów</strong> - które się powtarzają</li>
                                    <li><strong>Pomijaj archaizmy</strong> - chyba że czytasz klasykę</li>
                                    <li><strong>Zwracaj uwagę na kolokacje</strong> - naturalne połączenia</li>
                                    <li><strong>Notuj idiomy</strong> - charakterystyczne dla autora</li>
                                    <li><strong>Ucz się słowotwórstwa</strong> - przedrostki i przyrostki</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🔄 System powtórek</h4>
                                <ul>
                                    <li><strong>Powtarzaj regularnie</strong> - zgodnie z krzywą zapominania</li>
                                    <li><strong>Używaj aplikacji</strong> - Anki, Quizlet</li>
                                    <li><strong>Stosuj w praktyce</strong> - w mowie i piśmie</li>
                                    <li><strong>Wróć do notatek</strong> - po skończeniu książki</li>
                                    <li><strong>Recenzuj słownictwo</strong> - przed kolejną książką</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja narzędzi */}
                    <section className="article__section">
                        <h2>Niezbędne narzędzia do czytania w oryginale 🛠️</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>📱 E-booki i aplikacje</h4>
                                <ul>
                                    <li><strong>Kindle</strong> - wbudowany słownik</li>
                                    <li><strong>Google Play Books</strong> - tłumaczenie dotykowe</li>
                                    <li><strong>LingQ</strong> - specjalnie do nauki języków</li>
                                    <li><strong>Readlang</strong> - tłumaczenie w tekście</li>
                                    <li><strong>Audible</strong> - audiobooki + e-booki</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🌐 Słowniki online</h4>
                                <ul>
                                    <li><strong>Cambridge Dictionary</strong> - definicje + przykłady</li>
                                    <li><strong>Merriam-Webster</strong> - amerykański angielski</li>
                                    <li><strong>Oxford Learner's</strong> - dla uczących się</li>
                                    <li><strong>Reverso Context</strong> - przykłady z kontekstem</li>
                                    <li><strong>Vocabulary.com</strong> - nauka przez przykłady</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>📚 Nasze zasoby</h4>
                                <ul>
                                    <li><Link to="/materialy/literatura" className="article__breadcrumb-link">Polecana literatura</Link></li>
                                    <li><Link to="/slownictwo" className="article__breadcrumb-link">Słownictwo tematyczne</Link></li>
                                    <li><Link to="/cwiczenia/slownictwo" className="article__breadcrumb-link">Ćwiczenia leksykalne</Link></li>
                                    <li><Link to="/artykuly/czytanie-po-angielsku" className="article__breadcrumb-link">Więcej o czytaniu</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja planu czytania */}
                    <section className="article__section">
                        <h2>Plan czytania - od początkującego do zaawansowanego 📅</h2>

                        <div className="comparison-table">
                            <h4>30-dniowe wyzwanie czytelnicze</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th>Tydzień</th>
                                    <th>Cel</th>
                                    <th>Stron dziennie</th>
                                    <th>Strategia</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Książka dla młodzieży</td>
                                    <td>5-10 stron</td>
                                    <td>Extensive reading + notowanie 3 słów dziennie</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Współczesna powieść</td>
                                    <td>10-15 stron</td>
                                    <td>Intensive reading dla trudnych fragmentów</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Kryminał/thriller</td>
                                    <td>15-20 stron</td>
                                    <td>Skimming + intensive dla kluczowych scen</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Literatura klasyczna</td>
                                    <td>10 stron</td>
                                    <td>Shadow reading + analiza stylu autora</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🚀 Zacznij czytać w oryginale już dziś!</h3>
                            <p>Wybierz jedną książkę z tego artykułu i przeczytaj pierwszy rozdział. Pamiętaj - nawet 5 stron dziennie to 35 stron tygodniowo, a to już cała książka w 2-3 miesiące!</p>
                            <div className="action-buttons">
                                <Link to="/materialy/literatura" className="btn btn--primary">Polecana literatura</Link>
                                <Link to="/slownictwo" className="btn btn--secondary">Słownictwo</Link>
                                <Link to="/test-poziomujacy" className="btn btn--outline">Sprawdź poziom</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#czytanie</span>
                            <span className="tag">#literatura</span>
                            <span className="tag">#książki</span>
                            <span className="tag">#czytanieworyginale</span>
                            <span className="tag">#angielski</span>
                            <span className="tag">#naukaprzezczytanie</span>
                            <span className="tag">#slownictwo</span>
                            <span className="tag">#ebooki</span>
                        </div>

                        {/* UKRYTA SEKCJA SEO - NIE WIDOCZNA DLA UŻYTKOWNIKÓW */}
                        <div style={{display: 'none'}} aria-hidden="true">
                            <p>Czytanie literatury w oryginale, jak czytać książki po angielsku, wybór książki do nauki angielskiego, poziom trudności książek angielskich, nauka angielskiego przez czytanie, strategie czytania po angielsku, słownictwo z literatury angielskiej, extensive reading, intensive reading, książki dla uczących się angielskiego, literatura anglojęzyczna dla Polaków</p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default ReadingOriginal;