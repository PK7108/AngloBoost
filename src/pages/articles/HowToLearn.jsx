import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleStyles.css'; // Dodamy ten plik CSS

const JakSieUczycAngielskiego = () => {
    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/artykuly" className="article__breadcrumb-link">Artykuły</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Jak się uczyć angielskiego</span>
                    </nav>
                    <h1 className="article__title">Jak skutecznie uczyć się angielskiego? 📚</h1>
                    <p className="article__intro">Praktyczny przewodnik po sprawdzonych metodach nauki języka angielskiego</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 8 minut</span>
                        <span className="article__level">🎯 Dla: Początkujący i średniozaawansowani</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box tip-box--important">
                            <h3>💡 Klucz do sukcesu</h3>
                            <p>Najważniejsza w nauce języka jest <strong>konsekwencja</strong>. Lepiej uczyć się 15 minut dziennie niż 3 godziny raz w tygodniu!</p>
                        </div>

                        <h2>Dlaczego tradycyjne metody często zawodzą?</h2>
                        <p>Wiele osób spędza lata na nauce angielskiego w szkole, ale wciąż nie potrafi swobodnie rozmawiać. Dlaczego? Ponieważ tradycyjne metody często:</p>

                        <div className="points-grid">
                            <div className="point-card point-card--negative">
                                <h4>❌ Za dużo teorii</h4>
                                <p>Koncentrują się na gramatyce zamiast na praktycznej komunikacji</p>
                            </div>
                            <div className="point-card point-card--negative">
                                <h4>❌ Brak kontekstu</h4>
                                <p>Słowa uczone są w izolacji, a nie w naturalnych zdaniach</p>
                            </div>
                            <div className="point-card point-card--negative">
                                <h4>❌ Mało mówienia</h4>
                                <p>Uczniowie słuchają, ale rzadko mają okazję samodzielnie mówić</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja metod nauki */}
                    <section className="article__section">
                        <h2>Skuteczne metody nauki angielskiego 🚀</h2>

                        <div className="method-card">
                            <div className="method-card__icon">🎧</div>
                            <div className="method-card__content">
                                <h3>1. Immersja językowa (zanurzenie)</h3>
                                <p>Otocz się angielskim w codziennym życiu:</p>
                                <ul className="method-list">
                                    <li>🔹 Oglądaj filmy i seriale po angielsku (najpierw z napisami)</li>
                                    <li>🔹 Słuchaj angielskiej muzyki i podcastów</li>
                                    <li>🔹 Zmień język w telefonie i mediach społecznościowych na angielski</li>
                                    <li>🔹 Czytaj newsy i artykuły po angielsku</li>
                                </ul>
                                <div className="example-box">
                                    <strong>Przykład:</strong> Zamiast oglądać polski serial, wybierz angielski z angielskimi napisami.
                                </div>
                            </div>
                        </div>

                        <div className="method-card">
                            <div className="method-card__icon">💬</div>
                            <div className="method-card__content">
                                <h3>2. Praktyka mówienia</h3>
                                <p>Mówienie to klucz do płynności:</p>
                                <ul className="method-list">
                                    <li>🔹 Znajdź partnera do rozmów (np. przez Tandem, HelloTalk)</li>
                                    <li>🔹 Nagrywaj siebie mówiącego po angielsku</li>
                                    <li>🔹 Mów do siebie w myślach po angielsku</li>
                                    <li>🔹 Opowiadaj na głos co robisz w ciągu dnia</li>
                                </ul>
                                <div className="stat-box">
                                    <div className="stat">
                                        <span className="stat__number">15 min</span>
                                        <span className="stat__label">dziennej rozmowy</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat__number">3×</span>
                                        <span className="stat__label">szybszy postęp</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="method-card">
                            <div className="method-card__icon">📝</div>
                            <div className="method-card__content">
                                <h3>3. Systematyczna nauka słownictwa</h3>
                                <p>Ucz się mądrze, nie dużo:</p>
                                <ul className="method-list">
                                    <li>🔹 Ucz się całych fraz, a nie pojedynczych słów</li>
                                    <li>🔹 Używaj aplikacji do fiszek (Anki, Quizlet)</li>
                                    <li>🔹 Stosuj metodę spaced repetition</li>
                                    <li>🔹 Grupuj słownictwo tematycznie</li>
                                </ul>
                                <div className="progress-chart">
                                    <div className="chart-bar" style={{width: '90%'}}>
                                        <span>10 słów dziennie = 3650 rocznie</span>
                                    </div>
                                    <div className="chart-bar" style={{width: '45%'}}>
                                        <span>5 słów dziennie = 1825 rocznie</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Plan nauki */}
                    <section className="article__section">
                        <h2>Przykładowy plan tygodnia nauki 📅</h2>

                        <div className="schedule">
                            <div className="schedule__day">
                                <h4>Poniedziałek</h4>
                                <ul>
                                    <li>🎧 15 min podcast</li>
                                    <li>📚 10 nowych słówek</li>
                                    <li>💬 5 min mówienia</li>
                                </ul>
                            </div>
                            <div className="schedule__day">
                                <h4>Wtorek</h4>
                                <ul>
                                    <li>📺 20 min serialu</li>
                                    <li>🔄 Powtórka słówek</li>
                                    <li>✍️ Krótki tekst</li>
                                </ul>
                            </div>
                            <div className="schedule__day">
                                <h4>Środa</h4>
                                <ul>
                                    <li>💬 Rozmowa z partnerem</li>
                                    <li>📖 Czytanie artykułu</li>
                                    <li>🎵 Tłumaczenie piosenki</li>
                                </ul>
                            </div>
                            <div className="schedule__day">
                                <h4>Czwartek</h4>
                                <ul>
                                    <li>🎧 15 min podcast</li>
                                    <li>📚 10 nowych słówek</li>
                                    <li>📝 Ćwiczenia gramatyczne</li>
                                </ul>
                            </div>
                            <div className="schedule__day">
                                <h4>Piątek</h4>
                                <ul>
                                    <li>📺 Film po angielsku</li>
                                    <li>🔄 Powtórka tygodnia</li>
                                    <li>💭 Myślenie po angielsku</li>
                                </ul>
                            </div>
                            <div className="schedule__day schedule__day--weekend">
                                <h4>Weekend</h4>
                                <ul>
                                    <li>🎮 Gry po angielsku</li>
                                    <li>📱 Media społecznościowe</li>
                                    <li>😊 Relaks z językiem</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Błędy do unikania */}
                    <section className="article__section">
                        <h2>Czego unikać? 🚫</h2>

                        <div className="warning-cards">
                            <div className="warning-card">
                                <h4>🔄 Tylko powtarzanie bez nowości</h4>
                                <p>Zawsze dodawaj nowy materiał, żeby się rozwijać</p>
                            </div>
                            <div className="warning-card">
                                <h4>📖 Uczenie się tylko z jednego źródła</h4>
                                <p>Różnorodność materiałów = lepsze efekty</p>
                            </div>
                            <div className="warning-card">
                                <h4>😰 Strach przed błędami</h4>
                                <p>Błędy są naturalną częścią nauki - każdy je popełnia!</p>
                            </div>
                            <div className="warning-card">
                                <h4>⏰ Nieregularność</h4>
                                <p>Lepiej 15 minut codziennie niż 3 godziny raz w miesiącu</p>
                            </div>
                        </div>
                    </section>

                    {/* Zakończenie */}
                    <section className="article__section">
                        <div className="success-story">
                            <div className="success-story__quote">"</div>
                            <div className="success-story__content">
                                <h3>Historia sukcesu: Anna, 28 lat</h3>
                                <p>"Zaczynałam od zera. Przez 6 miesięcy uczyłam się 30 minut dziennie metodą małych kroków. Dziś swobodnie rozmawiam z klientami z całego świata i dostałam awans!"</p>
                                <div className="success-story__progress">
                                    <div className="progress-item">
                                        <span>Miesiąc 1:</span> Podstawowe zwroty
                                    </div>
                                    <div className="progress-item">
                                        <span>Miesiąc 3:</span> Proste rozmowy
                                    </div>
                                    <div className="progress-item">
                                        <span>Miesiąc 6:</span> Płynna komunikacja
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="action-box">
                            <h3>🎯 Zacznij już dziś!</h3>
                            <p>Wybierz jedną metodę z tego artykułu i zastosuj ją jeszcze dzisiaj. Małe kroki prowadzą do wielkich celów!</p>
                            <div className="action-buttons">
                                <Link to="/cwiczenia" className="btn btn--primary">Rozpocznij ćwiczenia</Link>
                                <Link to="/slownictwo" className="btn btn--secondary">Poznaj słownictwo</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#naukajęzyka</span>
                            <span className="tag">#angielski</span>
                            <span className="tag">#metodynauki</span>
                            <span className="tag">#językangielski</span>
                        </div>
                        <div className="article__share">
                            <p>Podziel się tym artykułem z przyjaciółmi! 👇</p>
                            {/* Tutaj można dodać przyciski share do social media */}
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default JakSieUczycAngielskiego;