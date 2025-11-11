import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleStyles.css';

const VocabularyLearning = () => {
    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/artykuly" className="article__breadcrumb-link">Artykuły</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Nauka słownictwa</span>
                    </nav>
                    <h1 className="article__title">Jak efektywnie uczyć się słownictwa 📚</h1>
                    <p className="article__intro">Sprawdzone strategie i techniki opanowywania nowych słów i trwałego poszerzania zasobu słownictwa</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 7 minut</span>
                        <span className="article__level">🎯 Dla: Wszystkich uczących się języków</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>🧠 Dlaczego słownictwo jest ważne?</h3>
                            <p><strong>Słownictwo to fundament nauki języka.</strong> Bez słów nie można wyrażać myśli, rozumieć innych ani skutecznie się komunikować. Opanowanie słownictwa przyspiesza ogólny postęp w języku.</p>
                        </div>

                        <h2>Nauka oparta na badaniach</h2>
                        <div className="points-grid">
                            <div className="point-card">
                                <h4>⚡ Powtórki z odstępami</h4>
                                <p>Powtarzaj słowa w rosnących odstępach czasowych, aby przenieść je z pamięci krótkotrwałej do długotrwałej</p>
                            </div>
                            <div className="point-card">
                                <h4>🔗 Aktywne przypominanie</h4>
                                <p>Aktywnie wydobywaj słowa z pamięci zamiast biernie je przeglądać</p>
                            </div>
                            <div className="point-card">
                                <h4>🎯 Nauka w kontekście</h4>
                                <p>Ucz się słów w znaczących kontekstach zamiast z izolowanych list</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja metod fiszek */}
                    <section className="article__section">
                        <h2>Techniki pracy z fiszkami 📇</h2>

                        <div className="cefr-overview">
                            <div className="cefr-level cefr-level--basic">
                                <div className="cefr-level__header">
                                    <h3>System powtórek z odstępami (SRS)</h3>
                                    <span className="cefr-level__subtitle">Inteligentne odstępy czasowe</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item">Słowa, które znasz dobrze, pojawiają się rzadziej</div>
                                    <div className="cefr-item">Trudne słowa pojawiają się częściej</div>
                                    <div className="cefr-item">Optymalizuje sesje powtórkowe dla maksymalnego zapamiętywania</div>
                                </div>
                                <div className="tool-recommendation">
                                    <strong>Polecane narzędzia:</strong> Anki, Quizlet, Memrise
                                </div>
                            </div>

                            <div className="cefr-level cefr-level--independent">
                                <div className="cefr-level__header">
                                    <h3>Metoda aktywnego przypominania</h3>
                                    <span className="cefr-level__subtitle">Testuj swoją pamięć</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item">Staraj się przypomnieć słowo przed odwróceniem karty</div>
                                    <div className="cefr-item">Twórz podpowiedzi zamiast bezpośrednich tłumaczeń</div>
                                    <div className="cefr-item">Używaj obrazów i skojarzeń na kartach</div>
                                </div>
                                <div className="tool-recommendation">
                                    <strong>Porada:</strong> Dodawaj przykładowe zdania do każdej karty
                                </div>
                            </div>

                            <div className="cefr-level cefr-level--proficient">
                                <div className="cefr-level__header">
                                    <h3>Karty bogate w kontekst</h3>
                                    <span className="cefr-level__subtitle">Ucz się w kontekście</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item">Przód: Przykładowe zdanie z luką</div>
                                    <div className="cefr-item">Tył: Docelowe słowo + definicja</div>
                                    <div className="cefr-item">Dołącz wymowę i część mowy</div>
                                </div>
                                <div className="tool-recommendation">
                                    <strong>Przykład:</strong> "The weather was so ___ that we stayed inside all day." → "gloomy"
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja map myśli */}
                    <section className="article__section">
                        <h2>Mapy myśli dla słownictwa 🗺️</h2>

                        <div className="level-detail level-detail--a1">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">Metoda 1</span>
                                <h3>Mapy tematyczne</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Jak tworzyć:</h4>
                                <ul className="skill-list">
                                    <li>✅ Zacznij od centralnego tematu (np. "Travel")</li>
                                    <li>✅ Twórz gałęzie dla kategorii (transportation, accommodation, activities)</li>
                                    <li>✅ Dodawaj konkretne słownictwo do każdej gałęzi</li>
                                    <li>✅ Używaj kolorów i obrazów, aby wzmocnić pamięć</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Przykład struktury:</strong> Travel → Transportation → {`{airplane, ticket, boarding pass, luggage}`}
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">30-50</span>
                                        <span className="stat-small__label">słów na mapę</span>
                                    </div>
                                    <div className="stat-small">
                                        <span className="stat-small__value">+40%</span>
                                        <span className="stat-small__label">zapamiętywania</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="level-detail level-detail--a2">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">Metoda 2</span>
                                <h3>Mapy rodzin wyrazów</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Jak tworzyć:</h4>
                                <ul className="skill-list">
                                    <li>✅ Zacznij od słowa podstawowego (np. "create")</li>
                                    <li>✅ Mapuj wszystkie pokrewne formy (creation, creative, creatively, creativity)</li>
                                    <li>✅ Uwzględniaj synonimy i antonimy</li>
                                    <li>✅ Dodawaj kolokacje i częste zwroty</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Przykład:</strong> Create → creation (n), creative (adj), creatively (adv), creator (n), recreate (v)
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">5-10</span>
                                        <span className="stat-small__label">słów na rodzinę</span>
                                    </div>
                                    <div className="stat-small">
                                        <span className="stat-small__value">+35%</span>
                                        <span className="stat-small__label">użycia słów</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja zaawansowanych technik */}
                    <section className="article__section">
                        <h2>Zaawansowane strategie uczenia się 🔥</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>🏷️ Metoda słowa-klucza</h4>
                                <ul>
                                    <li>Twórz żywe obrazy mentalne łączące nowe słowa z podobnie brzmiącymi słowami</li>
                                    <li><strong>Przykład:</strong> Angielskie "letter" brzmi jak "leter" → Wyobraź sobie listonosza niosącego listy</li>
                                    <li>Działa szczególnie dobrze z rzeczownikami konkretnymi i czasownikami</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>📖 Czytanie ekstensywne</h4>
                                <ul>
                                    <li>Ucz się słów naturalnie przez kontekst w książkach i artykułach</li>
                                    <li>Czytaj bez zatrzymywania się przy każdym nieznanym słowie</li>
                                    <li>Zgaduj z kontekstu i sprawdzaj tylko kluczowe słownictwo</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🎭 Grupowanie kontekstowe</h4>
                                <ul>
                                    <li>Ucz się grup słów, które naturalnie występują razem</li>
                                    <li><strong>Przykład:</strong> Restaurant vocabulary: {`{menu, order, appetizer, main course, dessert, bill, tip}`}</li>
                                    <li>Pomaga zarówno w rozpoznawaniu, jak i używaniu słów</li>
                                </ul>
                            </div>
                        </div>

                        <div className="comparison-table">
                            <h4>Codzienna rutyna nauki</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th>Czas</th>
                                    <th>Aktywność</th>
                                    <th>Czas trwania</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Poranek</td>
                                    <td>Szybka powtórka fiszek z wczorajszych słów</td>
                                    <td>5 minut</td>
                                </tr>
                                <tr>
                                    <td>Południe</td>
                                    <td>Nauka 5-10 nowych słów z przykładowymi zdaniami</td>
                                    <td>10 minut</td>
                                </tr>
                                <tr>
                                    <td>Wieczór</td>
                                    <td>Ćwiczenie aktywnego przypominania bez patrzenia na odpowiedzi</td>
                                    <td>5 minut</td>
                                </tr>
                                <tr>
                                    <td>Tygodniowo</td>
                                    <td>Tworzenie map myśli i powtórka trudnych słów</td>
                                    <td>30 minut</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Sekcja narzędzi i zasobów */}
                    <section className="article__section">
                        <h2>Niezbędne narzędzia i zasoby 🛠️</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>📱 Fiszki cyfrowe</h4>
                                <ul>
                                    <li><strong>Anki</strong> - Wysoce konfigurowalny system SRS</li>
                                    <li><strong>Quizlet</strong> - Przyjazny dla użytkownika z grami</li>
                                    <li><strong>Memrise</strong> - Przykłady wideo i mnemotechniki</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🗺️ Narzędzia do map myśli</h4>
                                <ul>
                                    <li><strong>MindMeister</strong> - Praca online w zespole</li>
                                    <li><strong>XMind</strong> - Funkcje profesjonalne</li>
                                    <li><strong>SimpleMind</strong> - Przyjazny dla urządzeń mobilnych</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>📚 Zasoby do nauki</h4>
                                <ul>
                                    <li><strong>Vocabulary.com</strong> - Nauka adaptacyjna</li>
                                    <li><strong>WordBrewery</strong> - Nauka oparta na zdaniach</li>
                                    <li><strong>LingQ</strong> - Platforma do czytania ekstensywnego</li>
                                </ul>
                            </div>
                        </div>

                        <div className="comparison-table">
                            <h4>Śledzenie postępów</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th>Okres czasu</th>
                                    <th>Realny cel</th>
                                    <th>Pomiar</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1 Tydzień</td>
                                    <td>30-50 nowych słów</td>
                                    <td>Opanowanie fiszek</td>
                                </tr>
                                <tr>
                                    <td>1 Miesiąc</td>
                                    <td>150-200 nowych słów</td>
                                    <td>Aktywne użycie słownictwa</td>
                                </tr>
                                <tr>
                                    <td>3 Miesiące</td>
                                    <td>500-600 nowych słów</td>
                                    <td>Płynność konwersacyjna</td>
                                </tr>
                                <tr>
                                    <td>1 Rok</td>
                                    <td>2000+ nowych słów</td>
                                    <td>Zaawansowane rozumienie</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🚀 Zacznij się uczyć już dziś!</h3>
                            <p>Nie tylko czytaj o efektywnej nauce słownictwa - wdrażaj te strategie w praktyce! Wybierz jedną metodę i zacznij ją stosować już dzisiaj.</p>
                            <div className="action-buttons">
                                <Link to="/fiszki" className="btn btn--primary">Wypróbuj fiszki</Link>
                                <Link to="/cwiczenia-slownictwo" className="btn btn--secondary">Ćwiczenia słownictwa</Link>
                                <Link to="/test-poziomujacy" className="btn btn--outline">Sprawdź swój poziom</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#słownictwo</span>
                            <span className="tag">#metodynauki</span>
                            <span className="tag">#fiszki</span>
                            <span className="tag">#mapymyśli</span>
                            <span className="tag">#poradyjęzykowe</span>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default VocabularyLearning;