import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleStyles.css';

const CEFR = () => {
    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/artykuly" className="article__breadcrumb-link">Artykuły</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Poziomy CEFR</span>
                    </nav>
                    <h1 className="article__title">Poziomy CEFR: A1–C2 🇪🇺</h1>
                    <p className="article__intro">Kompletny przewodnik po międzynarodowej skali biegłości językowej</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 6 minut</span>
                        <span className="article__level">🎯 Dla: Wszystkich uczących się języków</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>🌍 Czym jest CEFR?</h3>
                            <p><strong>Common European Framework of Reference for Languages</strong> to międzynarodowy standard opisu kompetencji językowych, używany w całej Europie i na świecie.</p>
                        </div>

                        <h2>Dlaczego warto znać poziomy CEFR?</h2>
                        <div className="points-grid">
                            <div className="point-card">
                                <h4>🎯 Jasne cele</h4>
                                <p>Wiesz dokładnie, do jakiego poziomu dążysz i co musisz umieć</p>
                            </div>
                            <div className="point-card">
                                <h4>📊 Obiektywna ocena</h4>
                                <p>Standaryzowana skala uznawana przez pracodawców i uczelnie</p>
                            </div>
                            <div className="point-card">
                                <h4>🌐 Międzynarodowy standard</h4>
                                <p>Taki sam w każdym kraju i dla każdego języka</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja ogólnego przeglądu */}
                    <section className="article__section">
                        <h2>Przegląd poziomów CEFR 📊</h2>

                        <div className="cefr-overview">
                            <div className="cefr-level cefr-level--basic">
                                <div className="cefr-level__header">
                                    <h3>A: Podstawowy</h3>
                                    <span className="cefr-level__subtitle">Użytkownik podstawowy</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item">A1: Początkujący</div>
                                    <div className="cefr-item">A2: Podstawowy</div>
                                </div>
                            </div>

                            <div className="cefr-level cefr-level--independent">
                                <div className="cefr-level__header">
                                    <h3>B: Samodzielny</h3>
                                    <span className="cefr-level__subtitle">Użytkownik samodzielny</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item">B1: Średnio zaawansowany</div>
                                    <div className="cefr-item">B2: Ponad średnio zaawansowany</div>
                                </div>
                            </div>

                            <div className="cefr-level cefr-level--proficient">
                                <div className="cefr-level__header">
                                    <h3>C: Biegły</h3>
                                    <span className="cefr-level__subtitle">Użytkownik biegły</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item">C1: Zaawansowany</div>
                                    <div className="cefr-item">C2: Biegły</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Szczegółowy opis poziomów */}
                    <section className="article__section">
                        <h2>Szczegółowy opis każdego poziomu 🔍</h2>

                        {/* Poziom A1 */}
                        <div className="level-detail level-detail--a1">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">A1</span>
                                <h3>Początkujący (Breakthrough)</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Co potrafisz?</h4>
                                <ul className="skill-list">
                                    <li>✅ Przedstawić się i innych</li>
                                    <li>✅ Zadawać proste pytania o miejsce zamieszkania, znajomych</li>
                                    <li>✅ Prowadzić prostą rozmowę, jeśli rozmówca mówi wolno i wyraźnie</li>
                                    <li>✅ Rozumieć podstawowe zwroty i wyrażenia</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Przykład:</strong> "Hello, my name is Anna. I live in Warsaw."
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">~150h</span>
                                        <span className="stat-small__label">nauki</span>
                                    </div>
                                    <div className="stat-small">
                                        <span className="stat-small__value">500-800</span>
                                        <span className="stat-small__label">słów</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Poziom A2 */}
                        <div className="level-detail level-detail--a2">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">A2</span>
                                <h3>Podstawowy (Waystage)</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Co potrafisz?</h4>
                                <ul className="skill-list">
                                    <li>✅ Opisać swoje pochodzenie, otoczenie</li>
                                    <li>✅ Porozumieć się w prostych, rutynowych sytuacjach</li>
                                    <li>✅ Opisać w prosty sposób swoje potrzeby</li>
                                    <li>✅ Rozumieć pojedyncze zdania i często używane wyrażenia</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Przykład:</strong> "I work in an office. I usually start at 9 AM and finish at 5 PM."
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">~300h</span>
                                        <span className="stat-small__label">nauki</span>
                                    </div>
                                    <div className="stat-small">
                                        <span className="stat-small__value">1000-1500</span>
                                        <span className="stat-small__label">słów</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Poziom B1 */}
                        <div className="level-detail level-detail--b1">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">B1</span>
                                <h3>Średnio zaawansowany (Threshold)</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Co potrafisz?</h4>
                                <ul className="skill-list">
                                    <li>✅ Radzić sobie w większości sytuacji w podróży</li>
                                    <li>✅ Opisywać doświadczenia, marzenia, nadzieje</li>
                                    <li>✅ Tworzyć proste, spójne wypowiedzi na znane tematy</li>
                                    <li>✅ Rozumieć główne wątki w standardowej mowie</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Przykład:</strong> "I would like to visit Japan someday because I'm interested in their culture and technology."
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">~500h</span>
                                        <span className="stat-small__label">nauki</span>
                                    </div>
                                    <div className="stat-small">
                                        <span className="stat-small__value">2000-2500</span>
                                        <span className="stat-small__label">słów</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Poziom B2 */}
                        <div className="level-detail level-detail--b2">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">B2</span>
                                <h3>Ponad średnio zaawansowany (Vantage)</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Co potrafisz?</h4>
                                <ul className="skill-list">
                                    <li>✅ Rozumieć złożone teksty, w tym techniczne w swojej dziedzinie</li>
                                    <li>✅ Płynnie i spontanicznie porozumiewać się z native speakerami</li>
                                    <li>✅ Formułować szczegółowe wypowiedzi na różne tematy</li>
                                    <li>✅ Wyrażać opinie i bronić swoich poglądów</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Przykład:</strong> "While I acknowledge the benefits of remote work, I believe face-to-face collaboration fosters better team dynamics and innovation."
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">~700h</span>
                                        <span className="stat-small__label">nauki</span>
                                    </div>
                                    <div className="stat-small">
                                        <span className="stat-small__value">4000-5000</span>
                                        <span className="stat-small__label">słów</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Poziom C1 */}
                        <div className="level-detail level-detail--c1">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">C1</span>
                                <h3>Zaawansowany (Effective Operational Proficiency)</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Co potrafisz?</h4>
                                <ul className="skill-list">
                                    <li>✅ Rozumieć szeroki zakres trudnych, dłuższych tekstów</li>
                                    <li>✅ Wyrażać myśli płynnie, spontanicznie</li>
                                    <li>✅ Używać języka elastycznie i skutecznie w celach społecznych i zawodowych</li>
                                    <li>✅ Tworzyć szczegółowe, dobrze zbudowane teksty na złożone tematy</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Przykład:</strong> "The socioeconomic implications of artificial intelligence extend far beyond mere technological advancement, necessitating comprehensive ethical frameworks."
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">~900h</span>
                                        <span className="stat-small__label">nauki</span>
                                    </div>
                                    <div className="stat-small">
                                        <span className="stat-small__value">8000-10000</span>
                                        <span className="stat-small__label">słów</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Poziom C2 */}
                        <div className="level-detail level-detail--c2">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">C2</span>
                                <h3>Biegły (Mastery)</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Co potrafisz?</h4>
                                <ul className="skill-list">
                                    <li>✅ Z łatwością zrozumieć praktycznie wszystko, co usłyszysz lub przeczytasz</li>
                                    <li>✅ Podsumowywać informacje z różnych źródeł, rekonstruując argumenty</li>
                                    <li>✅ Wyrażać się spontanicznie, bardzo płynnie i precyzyjnie</li>
                                    <li>✅ Wypowiadać się na złożone tematy, subtelnie różnicując odcienie znaczeniowe</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Przykład:</strong> "The epistemological underpinnings of postmodern thought challenge traditional metaphysical assumptions, thereby necessitating a paradigm shift in our conceptual framework."
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">~1200h+</span>
                                        <span className="stat-small__label">nauki</span>
                                    </div>
                                    <div className="stat-small">
                                        <span className="stat-small__value">15000+</span>
                                        <span className="stat-small__label">słów</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja zastosowań praktycznych */}
                    <section className="article__section">
                        <h2>Zastosowania praktyczne 🎯</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>🏫 Edukacja</h4>
                                <ul>
                                    <li>Przyjęcie na studia za granicą (zwykle B2/C1)</li>
                                    <li>Programy wymiany studenckiej</li>
                                    <li>Ukończenie studiów filologicznych</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>💼 Praca</h4>
                                <ul>
                                    <li>Praca w międzynarodowej firmie (B2+)</li>
                                    <li>Stanowiska wymagające kontaktów z klientami zagranicznymi</li>
                                    <li>Kariera w dyplomacji lub organizacjach międzynarodowych</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🌍 Migracja</h4>
                                <ul>
                                    <li>Uzyskanie obywatelstwa (zwykle B1/B2)</li>
                                    <li>Procedury imigracyjne</li>
                                    <li>Integracja w nowym kraju</li>
                                </ul>
                            </div>
                        </div>

                        <div className="comparison-table">
                            <h4>Wymagania językowe w praktyce</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th>Cel</th>
                                    <th>Wymagany poziom</th>
                                    <th>Przykładowe certyfikaty</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Studia za granicą</td>
                                    <td>B2/C1</td>
                                    <td>IELTS 6.0+, TOEFL 80+</td>
                                </tr>
                                <tr>
                                    <td>Praca w korporacji</td>
                                    <td>B1/B2</td>
                                    <td>TOEIC, BEC</td>
                                </tr>
                                <tr>
                                    <td>Obywatelstwo UK</td>
                                    <td>B1</td>
                                    <td>IELTS Life Skills</td>
                                </tr>
                                <tr>
                                    <td>Nauczyciel języka</td>
                                    <td>C1/C2</td>
                                    <td>CAE, CPE, DELTA</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🎯 Sprawdź swój poziom!</h3>
                            <p>Nie wiesz, na jakim poziomie jesteś? Przetestuj swoją wiedzę i dowiedz się, od czego zacząć naukę!</p>
                            <div className="action-buttons">
                                <Link to="/test-poziomujacy" className="btn btn--primary">Test poziomujący</Link>
                                <Link to="/cwiczenia" className="btn btn--secondary">Ćwiczenia</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#cefr</span>
                            <span className="tag">#poziomajezykowe</span>
                            <span className="tag">#naukajezykow</span>
                            <span className="tag">#a1c2</span>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default CEFR;