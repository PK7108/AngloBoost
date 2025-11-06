import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleStyles.css';

const TimeInEnglish = () => {
    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/artykuly" className="article__breadcrumb-link">Artykuły</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Godziny po angielsku</span>
                    </nav>
                    <h1 className="article__title">Godziny w języku angielskim: Jak je poprawnie mówić i zapisywać ⏰</h1>
                    <p className="article__intro">Kompletny przewodnik po godzinach - format 12-godzinny vs 24-godzinny, wymowa i typowe błędy</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 6 minut</span>
                        <span className="article__level">🎯 Dla: Wszystkich uczących się</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>⏰ Dlaczego godziny są ważne?</h3>
                            <p><strong>Umiejętność poprawnego mówienia o godzinach jest kluczowa w codziennej komunikacji!</strong> Różnice między formatami brytyjskimi i amerykańskimi mogą prowadzić do nieporozumień w spotkaniach, podróżach i życiu codziennym.</p>
                        </div>

                        <h2>Kluczowe różnice w mówieniu o godzinach</h2>
                        <div className="points-grid">
                            <div className="point-card">
                                <h4>🇬🇧 Brytyjski system</h4>
                                <p>Częściej używa formatu 24-godzinnego w mowie, precyzyjne określenia jak "quarter past", "half past"</p>
                            </div>
                            <div className="point-card">
                                <h4>🇺🇸 Amerykański system</h4>
                                <p>Dominuje format 12-godzinny z AM/PM, bardziej bezpośrednie podawanie godzin</p>
                            </div>
                            <div className="point-card">
                                <h4>🎯 Unikanie błędów</h4>
                                <p>Polacy często mylą "to" i "past", zapominają o "o'clock" i nieprawidłowo używają AM/PM</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja formatów godzin */}
                    <section className="article__section">
                        <h2>Formaty zapisu godzin 📊</h2>

                        <div className="format-overview">
                            <div className="format-card format-card--british">
                                <div className="format-card__header">
                                    <h3>🇬🇧 Format brytyjski</h3>
                                    <span className="format-card__subtitle">12-godzinny i 24-godzinny</span>
                                </div>
                                <div className="format-card__content">
                                    <div className="format-example">
                                        <strong>12-godzinny:</strong> 3:15 PM, 11:45 AM
                                    </div>
                                    <div className="format-example">
                                        <strong>24-godzinny:</strong> 15:15, 23:45
                                    </div>
                                    <div className="format-example">
                                        <strong>Mowa:</strong> "quarter past three", "quarter to twelve"
                                    </div>
                                </div>
                            </div>

                            <div className="format-card format-card--american">
                                <div className="format-card__header">
                                    <h3>🇺🇸 Format amerykański</h3>
                                    <span className="format-card__subtitle">Głównie 12-godzinny</span>
                                </div>
                                <div className="format-card__content">
                                    <div className="format-example">
                                        <strong>12-godzinny:</strong> 3:15 p.m., 11:45 a.m.
                                    </div>
                                    <div className="format-example">
                                        <strong>Zapis:</strong> kropki w a.m./p.m.
                                    </div>
                                    <div className="format-example">
                                        <strong>Mowa:</strong> "three fifteen", "eleven forty-five"
                                    </div>
                                </div>
                            </div>

                            <div className="format-card format-card--international">
                                <div className="format-card__header">
                                    <h3>🌐 Format międzynarodowy</h3>
                                    <span className="format-card__subtitle">24-godzinny (wojskowy)</span>
                                </div>
                                <div className="format-card__content">
                                    <div className="format-example">
                                        <strong>Zapis:</strong> 15:00, 23:30
                                    </div>
                                    <div className="format-example">
                                        <strong>Mowa:</strong> "fifteen hundred", "twenty-three thirty"
                                    </div>
                                    <div className="format-example">
                                        <strong>Zastosowanie:</strong> transport, wojsko, medycyna
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Szczegółowy opis wymowy */}
                    <section className="article__section">
                        <h2>Szczegółowe zasady wymowy 🔍</h2>

                        {/* System 12-godzinny */}
                        <div className="rule-detail rule-detail--12hour">
                            <div className="rule-detail__header">
                                <span className="rule-detail__badge">1</span>
                                <h3>System 12-godzinny z "past" i "to"</h3>
                            </div>
                            <div className="rule-detail__content">
                                <div className="time-rules">
                                    <div className="time-rule">
                                        <h4>🕐 "past" - po pełnej godzinie (1-30 min)</h4>
                                        <div className="examples-grid">
                                            <div className="example-item">
                                                <strong>3:05</strong> - "five past three"<br/>
                                                <em>/faɪv pɑːst θriː/</em>
                                            </div>
                                            <div className="example-item">
                                                <strong>3:15</strong> - "quarter past three"<br/>
                                                <em>/ˈkwɔːrtər pɑːst θriː/</em>
                                            </div>
                                            <div className="example-item">
                                                <strong>3:30</strong> - "half past three"<br/>
                                                <em>/hæf pɑːst θriː/</em>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="time-rule">
                                        <h4>🕐 "to" - do pełnej godzinie (31-59 min)</h4>
                                        <div className="examples-grid">
                                            <div className="example-item">
                                                <strong>3:35</strong> - "twenty-five to four"<br/>
                                                <em>/ˈtwenti faɪv tə fɔːr/</em>
                                            </div>
                                            <div className="example-item">
                                                <strong>3:45</strong> - "quarter to four"<br/>
                                                <em>/ˈkwɔːrtər tə fɔːr/</em>
                                            </div>
                                            <div className="example-item">
                                                <strong>3:55</strong> - "five to four"<br/>
                                                <em>/faɪv tə fɔːr/</em>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="time-rule">
                                        <h4>🎯 Specjalne przypadki</h4>
                                        <div className="special-cases">
                                            <div className="special-case">
                                                <strong>3:00</strong> - "three o'clock"<br/>
                                                <em>/θriː əˈklɒk/</em>
                                            </div>
                                            <div className="special-case">
                                                <strong>3:03</strong> - "three oh three"<br/>
                                                <em>/θriː əʊ θriː/</em>
                                            </div>
                                            <div className="special-case">
                                                <strong>12:00</strong> - "twelve o'clock" lub "midday/midnight"<br/>
                                                <em>/twelv əˈklɒk/</em>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* System 24-godzinny */}
                        <div className="rule-detail rule-detail--24hour">
                            <div className="rule-detail__header">
                                <span className="rule-detail__badge">2</span>
                                <h3>System 24-godzinny (wojskowy)</h3>
                            </div>
                            <div className="rule-detail__content">
                                <div className="military-examples">
                                    <div className="military-rule">
                                        <h4>🎯 Godziny pełne</h4>
                                        <div className="examples-grid">
                                            <div className="example-item">
                                                <strong>08:00</strong> - "oh eight hundred"<br/>
                                                <em>/əʊ eɪt ˈhʌndrəd/</em>
                                            </div>
                                            <div className="example-item">
                                                <strong>14:00</strong> - "fourteen hundred"<br/>
                                                <em>/ˌfɔːrˈtiːn ˈhʌndrəd/</em>
                                            </div>
                                            <div className="example-item">
                                                <strong>20:00</strong> - "twenty hundred"<br/>
                                                <em>/ˈtwenti ˈhʌndrəd/</em>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="military-rule">
                                        <h4>🎯 Godziny z minutami</h4>
                                        <div className="examples-grid">
                                            <div className="example-item">
                                                <strong>08:15</strong> - "oh eight fifteen"<br/>
                                                <em>/əʊ eɪt ˈfɪfˈtiːn/</em>
                                            </div>
                                            <div className="example-item">
                                                <strong>14:30</strong> - "fourteen thirty"<br/>
                                                <em>/ˌfɔːrˈtiːn ˈθɜːrti/</em>
                                            </div>
                                            <div className="example-item">
                                                <strong>20:45</strong> - "twenty forty-five"<br/>
                                                <em>/ˈtwenti ˈfɔːrti faɪv/</em>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AM i PM */}
                        <div className="rule-detail rule-detail--ampm">
                            <div className="rule-detail__header">
                                <span className="rule-detail__badge">3</span>
                                <h3>AM i PM - zasady użycia</h3>
                            </div>
                            <div className="rule-detail__content">
                                <div className="ampm-rules">
                                    <div className="ampm-rule">
                                        <h4>🌅 AM (Ante Meridiem)</h4>
                                        <div className="ampm-examples">
                                            <div className="ampm-example">
                                                <strong>3:00 AM</strong> - "three in the morning"<br/>
                                                <em>godziny 00:00 - 11:59</em>
                                            </div>
                                            <div className="ampm-example">
                                                <strong>11:30 AM</strong> - "half past eleven in the morning"<br/>
                                                <em>przed południem</em>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ampm-rule">
                                        <h4>🌇 PM (Post Meridiem)</h4>
                                        <div className="ampm-examples">
                                            <div className="ampm-example">
                                                <strong>3:00 PM</strong> - "three in the afternoon"<br/>
                                                <em>godziny 12:00 - 17:59</em>
                                            </div>
                                            <div className="ampm-example">
                                                <strong>8:00 PM</strong> - "eight in the evening"<br/>
                                                <em>godziny 18:00 - 23:59</em>
                                            </div>
                                            <div className="ampm-example">
                                                <strong>11:30 PM</strong> - "half past eleven at night"<br/>
                                                <em>wieczorem/w nocy</em>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="warning-box">
                                    <h4>⚠️ Uwaga na typowe błędy!</h4>
                                    <ul>
                                        <li>❌ <strong>12:00 AM/PM</strong> - lepiej użyć "midday" lub "midnight"</li>
                                        <li>❌ <strong>Mieszanie systemów</strong> - nie mów "fifteen o'clock"</li>
                                        <li>❌ <strong>Brak AM/PM</strong> - w systemie 12-godzinnym zawsze określaj!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja praktycznych przykładów */}
                    <section className="article__section">
                        <h2>Praktyczne przykłady w rozmowach 🎯</h2>

                        <div className="conversation-examples">
                            <div className="conversation">
                                <h4>📅 Umawianie spotkania</h4>
                                <div className="dialogue">
                                    <div className="dialogue-line">
                                        <strong>A:</strong> "What time should we meet?"<br/>
                                        <em>"O której powinniśmy się spotkać?"</em>
                                    </div>
                                    <div className="dialogue-line">
                                        <strong>B:</strong> "Let's meet at quarter past three."<br/>
                                        <em>Wymowa: "lets meet et quarter past three"</em>
                                    </div>
                                    <div className="dialogue-line">
                                        <strong>A:</strong> "Perfect, see you at three fifteen!"<br/>
                                        <em>Wymowa: "see you at three fif-teen"</em>
                                    </div>
                                </div>
                            </div>

                            <div className="conversation">
                                <h4>✈️ Rozkład jazdy</h4>
                                <div className="dialogue">
                                    <div className="dialogue-line">
                                        <strong>A:</strong> "When does the train arrive?"<br/>
                                        <em>"Kiedy przyjeżdża pociąg?"</em>
                                    </div>
                                    <div className="dialogue-line">
                                        <strong>B:</strong> "It arrives at fourteen thirty."<br/>
                                        <em>Wymowa: "four-teen thur-ty" (14:30)</em>
                                    </div>
                                </div>
                            </div>

                            <div className="conversation">
                                <h4>🏢 W pracy</h4>
                                <div className="dialogue">
                                    <div className="dialogue-line">
                                        <strong>A:</strong> "The meeting starts at nine AM sharp."<br/>
                                        <em>Wymowa: "nine ay em sharp"</em>
                                    </div>
                                    <div className="dialogue-line">
                                        <strong>B:</strong> "And what time does it finish?"<br/>
                                        <em>"A o której się kończy?"</em>
                                    </div>
                                    <div className="dialogue-line">
                                        <strong>A:</strong> "Around half past eleven."<br/>
                                        <em>Wymowa: "around half past eleven"</em>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabela najtrudniejszych wymów */}
                        <div className="comparison-table">
                            <h4>Trudne przypadki - porównanie wymowy</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th>Godzina</th>
                                    <th>Format brytyjski</th>
                                    <th>Format amerykański</th>
                                    <th>Uwagi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>15:15</td>
                                    <td>"quarter past three"<br/><em>/ˈkwɔːrtər pɑːst θriː/</em></td>
                                    <td>"three fifteen"<br/><em>/θriː ˈfɪfˈtiːn/</em></td>
                                    <td>🇬🇧 częściej używa "past/to"</td>
                                </tr>
                                <tr>
                                    <td>17:45</td>
                                    <td>"quarter to six"<br/><em>/ˈkwɔːrtər tə sɪks/</em></td>
                                    <td>"five forty-five"<br/><em>/faɪv ˈfɔːrti faɪv/</em></td>
                                    <td>🇺🇸 bardziej bezpośrednio</td>
                                </tr>
                                <tr>
                                    <td>08:00</td>
                                    <td>"eight o'clock"<br/><em>/eɪt əˈklɒk/</em></td>
                                    <td>"eight AM"<br/><em>/eɪt eɪ ˈem/</em></td>
                                    <td>🇬🇧 "o'clock", 🇺🇸 "AM/PM"</td>
                                </tr>
                                <tr>
                                    <td>00:30</td>
                                    <td>"half past twelve"<br/><em>/hæf pɑːst twelv/</em></td>
                                    <td>"twelve thirty AM"<br/><em>/twelv ˈθɜːrti eɪ ˈem/</em></td>
                                    <td>lepiej "midnight" niż "12 AM"</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Sekcja typowych błędów */}
                    <section className="article__section">
                        <h2>Typowe błędy Polaków ❌</h2>

                        <div className="common-mistakes">
                            <div className="mistake-item">
                                <div className="mistake">❌ "Fifteen o'clock" (dla 15:00)</div>
                                <div className="correction">✅ "Three PM" lub "fifteen hundred"<br/>
                                    <em>Nigdy nie używamy "o'clock" z systemem 24-godzinnym!</em></div>
                            </div>
                            <div className="mistake-item">
                                <div className="mistake">❌ Mylenie "to" i "past"</div>
                                <div className="correction">✅ 3:20 = "twenty past three"<br/>
                                    ✅ 3:40 = "twenty to four"<br/>
                                    <em>"past" = po godzinie, "to" = do godziny</em></div>
                            </div>
                            <div className="mistake-item">
                                <div className="mistake">❌ Brak AM/PM w systemie 12-godzinnym</div>
                                <div className="correction">✅ Zawsze określaj! "Let's meet at three" → niejasne<br/>
                                    ✅ "Let's meet at three PM" → jasne</div>
                            </div>
                            <div className="mistake-item">
                                <div className="mistake">❌ "Half to four" (dla 3:30)</div>
                                <div className="correction">✅ "Half past three"<br/>
                                    <em>"Half" zawsze z "past"!</em></div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja ćwiczeń */}
                    <section className="article__section">
                        <h2>Ćwicz wymowę godzin! 🗣️</h2>

                        <div className="pronunciation-exercises">
                            <div className="exercise-card">
                                <h4>🎯 Ćwiczenie 1: Twoja codzienna rutyna</h4>
                                <div className="exercise-content">
                                    <p>Powiedz na głos po angielsku:</p>
                                    <ul>
                                        <li>Godzina pobudki: __________</li>
                                        <li>Godzina rozpoczęcia pracy: __________</li>
                                        <li>Godzina lunchu: __________</li>
                                        <li>Godzina powrotu do domu: __________</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>🎯 Ćwiczenie 2: Rozkład jazdy</h4>
                                <div className="exercise-content">
                                    <p>Przećwicz te godziny:</p>
                                    <div className="schedule-examples">
                                        <p><strong>07:15</strong> - "seven fifteen" lub "quarter past seven"</p>
                                        <p><strong>12:45</strong> - "twelve forty-five" lub "quarter to one"</p>
                                        <p><strong>18:30</strong> - "six thirty" lub "half past six"</p>
                                        <p><strong>23:05</strong> - "eleven oh five" lub "five past eleven"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🎯 Opanuj godziny po angielsku!</h3>
                            <p>Pobierz nasze ćwiczenia z nagraniami native speakerów i naucz się pewnie mówić o godzinach!</p>
                            <div className="action-buttons">
                                <Link to="/cwiczenia/godziny" className="btn btn--primary">Ćwiczenia z godzinami</Link>
                                <Link to="/nagrania/godziny" className="btn btn--secondary">Nagrania audio</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#godziny</span>
                            <span className="tag">#wymowa</span>
                            <span className="tag">#wymowa</span>
                            <span className="tag">#ampm</span>
                            <span className="tag">#naukaangielskiego</span>
                        </div>
                        <div className="article__update">
                            <p><strong>Ostatnia aktualizacja:</strong> Grudzień 2024</p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default TimeInEnglish;