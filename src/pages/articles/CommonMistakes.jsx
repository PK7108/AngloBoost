import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleStyles.css';

const CommonMistakes = () => {
    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/artykuly" className="article__breadcrumb-link">Artykuły</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Błędy Polaków w angielskim</span>
                    </nav>
                    <h1 className="article__title">Najczęstsze błędy Polaków w angielskim ❌</h1>
                    <p className="article__intro">Pułapki gramatyczne, wymowy i typowe problemy - poznaj je i naucz się ich unikać, by mówić poprawnie jak native speaker</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 9 minut</span>
                        <span className="article__level">🎯 Dla: Wszystkich poziomów</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>💡 Dlaczego Polacy popełniają te same błędy?</h3>
                            <p><strong>Interferencja językowa i różnice strukturalne między polskim a angielskim</strong> powodują, że pewne błędy powtarzają się systematycznie. Znajomość tych pułapek to pierwszy krok do ich eliminacji.</p>
                        </div>

                        <h2>Najważniejsze obszary problemowe</h2>
                        <div className="points-grid">
                            <div className="point-card">
                                <h4>📝 Gramatyka</h4>
                                <p>Czasy, przedimki, przyimki i szyk zdania to największe wyzwania</p>
                            </div>
                            <div className="point-card">
                                <h4>🗣️ Wymowa</h4>
                                <p>Polskie dźwięki vs angielska fonetyka - kluczowe różnice</p>
                            </div>
                            <div className="point-card">
                                <h4>🔤 Słownictwo</h4>
                                <p>False friends i kalki językowe prowadzące do nieporozumień</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja błędów gramatycznych */}
                    <section className="article__section">
                        <h2>Błędy gramatyczne - najczęstsze pułapki 📝</h2>

                        <div className="cefr-overview">
                            <div className="cefr-level cefr-level--basic">
                                <div className="cefr-level__header">
                                    <h3>Przedimki (a/an/the)</h3>
                                    <span className="cefr-level__subtitle">Problem nawet na wysokich poziomach</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item"><strong>❌ I have dog</strong></div>
                                    <div className="cefr-item"><strong>✅ I have a dog</strong></div>
                                    <div className="cefr-item"><strong>❌ She is doctor</strong></div>
                                    <div className="cefr-item"><strong>✅ She is a doctor</strong></div>
                                    <div className="cefr-item"><strong>❌ I love the music</strong> (ogólnie)</div>
                                    <div className="cefr-item"><strong>✅ I love music</strong></div>
                                </div>
                                <div className="tool-recommendation">
                                    <strong>Zapamiętaj:</strong> "a/an" dla zawodów, "the" dla konkretnych rzeczy
                                </div>
                            </div>

                            <div className="cefr-level cefr-level--independent">
                                <div className="cefr-level__header">
                                    <h3>Czasy teraźniejsze</h3>
                                    <span className="cefr-level__subtitle">Mieszanie Present Simple i Continuous</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item"><strong>❌ I am liking pizza</strong></div>
                                    <div className="cefr-item"><strong>✅ I like pizza</strong> (stan)</div>
                                    <div className="cefr-item"><strong>❌ She works now</strong> (w tej chwili)</div>
                                    <div className="cefr-item"><strong>✅ She is working now</strong></div>
                                    <div className="cefr-item"><strong>❌ I live here since 2020</strong></div>
                                    <div className="cefr-item"><strong>✅ I have lived here since 2020</strong></div>
                                </div>
                                <div className="tool-recommendation">
                                    <strong>Zasada:</strong> Present Simple dla stanów i rutyny, Continuous dla teraźniejszych działań
                                </div>
                            </div>

                            <div className="cefr-level cefr-level--proficient">
                                <div className="cefr-level__header">
                                    <h3>Przyimki</h3>
                                    <span className="cefr-level__subtitle">In/on/at - wieczny problem</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item"><strong>❌ I'm in Monday</strong></div>
                                    <div className="cefr-item"><strong>✅ I'm on Monday</strong></div>
                                    <div className="cefr-item"><strong>❌ See you on 5 PM</strong></div>
                                    <div className="cefr-item"><strong>✅ See you at 5 PM</strong></div>
                                    <div className="cefr-item"><strong>❌ I live at London</strong></div>
                                    <div className="cefr-item"><strong>✅ I live in London</strong></div>
                                </div>
                                <div className="tool-recommendation">
                                    <Link to="/gramatyka/części-mowy/przedimki" className="article__breadcrumb-link">Naucz się przyimków w naszej sekcji gramatyki</Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja błędów wymowy */}
                    <section className="article__section">
                        <h2>Błędy wymowy - jak brzmieć naturalnie 🗣️</h2>

                        <div className="level-detail level-detail--a1">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">Wymowa</span>
                                <h3>Polskie vs angielskie dźwięki</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Kluczowe różnice fonetyczne:</h4>
                                <ul className="skill-list">
                                    <li>✅ <strong>"th" sounds</strong> - Polacy mówią "s" lub "z" zamiast /θ/ i /ð/</li>
                                    <li>✅ <strong>"r"</strong> - polskie twarde "r" vs angielskie miękkie /ɹ/</li>
                                    <li>✅ <strong>"w" i "v"</strong> - Polacy mieszają te dźwięki</li>
                                    <li>✅ <strong>Samogłoski</strong> - angielskie mają więcej odcieni (ship vs sheep)</li>
                                    <li>✅ <strong>Akcent wyrazowy</strong> - w polskim przewidywalny, w angielskim zmienny</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Przykłady:</strong><br/>
                                    ❌ "sink" zamiast "think" (/θɪŋk/)<br/>
                                    ❌ "wery" zamiast "very" (/ˈveri/)<br/>
                                    ❌ "szip" zamiast "ship" (/ʃɪp/) vs "sheep" (/ʃiːp/)
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">70%</span>
                                        <span className="stat-small__label">Polaków ma problem z "th"</span>
                                    </div>
                                    <div className="stat-small">
                                        <span className="stat-small__value">+50%</span>
                                        <span className="stat-small__label">zrozumienia po poprawie</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="level-detail level-detail--a2">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">Akcent</span>
                                <h3>Typowe błędy akcentuacyjne</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Słowa, w których Polacy często mylą akcent:</h4>
                                <ul className="skill-list">
                                    <li>✅ <strong>PHOtograph</strong> - ❌ photoGRAPH</li>
                                    <li>✅ <strong>phoTOGraphy</strong> - ❌ PHOtography</li>
                                    <li>✅ <strong>ecoNOmic</strong> - ❌ ECOnomic</li>
                                    <li>✅ <strong>deVEloPment</strong> - ❌ DEVelopment</li>
                                    <li>✅ <strong>inDUstry</strong> - ❌ INdustry</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Zapamiętaj:</strong> W wielu słowach akcent pada na trzecią sylabę od końca
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">85%</span>
                                        <span className="stat-small__label">poprawy po ćwiczeniach</span>
                                    </div>
                                    <div className="stat-small">
                                        <Link to="/gramatyka/wymowa" className="article__breadcrumb-link">Ćwicz wymowę</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja false friends */}
                    <section className="article__section">
                        <h2>False friends - zdradliwe słowa 🔤</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>❌ Najniebezpieczniejsze pary</h4>
                                <ul>
                                    <li><strong>actual</strong> ≠ aktualny (✅ current)</li>
                                    <li><strong>eventual</strong> ≠ ewentualny (✅ possible)</li>
                                    <li><strong>sympathetic</strong> ≠ sympatyczny (✅ nice)</li>
                                    <li><strong>lecture</strong> ≠ lektura (✅ reading)</li>
                                    <li><strong>fabric</strong> ≠ fabryka (✅ factory)</li>
                                    <li><strong>chef</strong> ≠ szef (✅ boss)</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>❌ Częste nieporozumienia</h4>
                                <ul>
                                    <li><strong>career</strong> ≠ kariera (w negatywnym znaczeniu)</li>
                                    <li><strong>dinner</strong> ≠ diner (restauracja)</li>
                                    <li><strong>quite</strong> ≠ kwit (✅ receipt)</li>
                                    <li><strong>lunch</strong> ≠ lancz (nie istnieje)</li>
                                    <li><strong>become</strong> ≠ bekom (✅ receive)</li>
                                    <li><strong>comprehensive</strong> ≠ kompresyjny</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>✅ Jak się uczyć?</h4>
                                <ul>
                                    <li>Twórz listy false friends</li>
                                    <li>Ucz się w parach z poprawnymi odpowiednikami</li>
                                    <li>Używaj w zdaniach kontekstowych</li>
                                    <li>Regularnie powtarzaj</li>
                                    <li>Świadomie sprawdzaj nowe słowa</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja błędów w słownictwie */}
                    <section className="article__section">
                        <h2>Błędy leksykalne i kalki językowe 📚</h2>

                        <div className="comparison-table">
                            <h4>Typowe kalki z polskiego na angielski</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th>❌ Błędna kalka</th>
                                    <th>✅ Poprawna wersja</th>
                                    <th>🔍 Wyjaśnienie</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>I have 26 years</td>
                                    <td>I am 26 years old</td>
                                    <td>W angielskim wiek to "be", nie "have"</td>
                                </tr>
                                <tr>
                                    <td>How is it called?</td>
                                    <td>What is it called?</td>
                                    <td>"How" pyta o sposób, "what" o nazwę</td>
                                </tr>
                                <tr>
                                    <td>I'm coming back home</td>
                                    <td>I'm going back home</td>
                                    <td>"Come" do mówiącego, "go" od mówiącego</td>
                                </tr>
                                <tr>
                                    <td>On the picture</td>
                                    <td>In the picture</td>
                                    <td>Ludzie są "in" zdjęciach, nie "on"</td>
                                </tr>
                                <tr>
                                    <td>It depends of</td>
                                    <td>It depends on</td>
                                    <td>Stały przyimek "depend on"</td>
                                </tr>
                                <tr>
                                    <td>I am agree</td>
                                    <td>I agree</td>
                                    <td>"Agree" to czasownik, nie przymiotnik</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Sekcja błędów zaawansowanych */}
                    <section className="article__section">
                        <h2>Błędy na wyższych poziomach 🎓</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>🔧 Czasowniki złożone</h4>
                                <ul>
                                    <li><strong>❌ I must to go</strong> → ✅ I must go</li>
                                    <li><strong>❌ I want that you come</strong> → ✅ I want you to come</li>
                                    <li><strong>❌ She suggested me to go</strong> → ✅ She suggested that I go</li>
                                    <li><strong>❌ I look forward to see you</strong> → ✅ I look forward to seeing you</li>
                                    <li><strong>❌ I'm used to get up early</strong> → ✅ I'm used to getting up early</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>📊 Strona bierna</h4>
                                <ul>
                                    <li><strong>❌ The book was written by Shakespeare</strong> (jeśli żyje)</li>
                                    <li><strong>✅ The book was written by Shakespeare</strong> (zmarł)</li>
                                    <li><strong>✅ Shakespeare wrote the book</strong> (lepiej dla żyjących)</li>
                                    <li><strong>❌ It is said that he is rich</strong> (nadmiernie formalne)</li>
                                    <li><strong>✅ People say he is rich</strong> (bardziej naturalne)</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🎯 Mowa zależna</h4>
                                <ul>
                                    <li><strong>❌ He said me that...</strong> → ✅ He told me that...</li>
                                    <li><strong>❌ She asked me where is the station</strong></li>
                                    <li><strong>✅ She asked me where the station was</strong></li>
                                    <li><strong>❌ He said he will come</strong> (niekonsekwencja czasów)</li>
                                    <li><strong>✅ He said he would come</strong></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja jak unikać błędów */}
                    <section className="article__section">
                        <h2>Jak skutecznie unikać błędów? 🛡️</h2>

                        <div className="points-grid">
                            <div className="point-card">
                                <h4>🎧 Słuchaj native speakerów</h4>
                                <p>Filmy, podcasty, seriale - osłuchaj się z naturalnym językiem</p>
                            </div>
                            <div className="point-card">
                                <h4>📖 Czytaj na głos</h4>
                                <p>Ćwicz wymowę i akcent z tekstami angielskimi</p>
                            </div>
                            <div className="point-card">
                                <h4>✍️ Pisz regularnie</h4>
                                <p>Poproś o korektę i ucz się na błędach</p>
                            </div>
                        </div>

                        <div className="comparison-table">
                            <h4>Plan eliminacji błędów - 30 dni</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th>Tydzień</th>
                                    <th>Obszar</th>
                                    <th>Ćwiczenia</th>
                                    <th>Cel</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Przedimki</td>
                                    <td>Zdania, fiszki, nagrania</td>
                                    <td>Automatyczne użycie a/an/the</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Wymowa "th", "r"</td>
                                    <td>Ćwiczenia fonetyczne, tongue twisters</td>
                                    <td>Czysta wymowa problematycznych dźwięków</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>False friends</td>
                                    <td>Listy, zdania kontekstowe</td>
                                    <td>Unikanie 20 najczęstszych false friends</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Czasy teraźniejsze</td>
                                    <td>Opisy dnia, historii</td>
                                    <td>Poprawne użycie Present Simple/Continuous</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Sekcja zasobów */}
                    <section className="article__section">
                        <h2>Narzędzia do pracy nad błędami 🛠️</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>📱 Aplikacje</h4>
                                <ul>
                                    <li><strong>Grammarly</strong> - korekta pisania</li>
                                    <li><strong>ELSA Speak</strong> - poprawa wymowy</li>
                                    <li><strong>Quizlet</strong> - nauka false friends</li>
                                    <li><strong>YouGlish</strong> - wyszukiwanie wymowy w YouTube</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🌐 Strony internetowe</h4>
                                <ul>
                                    <li><strong>Cambridge Dictionary</strong> - wymowa i przykłady</li>
                                    <li><strong>Forvo</strong> - wymowa przez native speakerów</li>
                                    <li><strong>Perfect English Grammar</strong> - ćwiczenia gramatyczne</li>
                                    <li><strong>BBC Learning English</strong> - kompleksowe materiały</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>📚 Nasze zasoby</h4>
                                <ul>
                                    <li><Link to="/gramatyka" className="article__breadcrumb-link">Gramatyka krok po kroku</Link></li>
                                    <li><Link to="/cwiczenia/gramatyka" className="article__breadcrumb-link">Ćwiczenia gramatyczne</Link></li>
                                    <li><Link to="/gramatyka/wymowa" className="article__breadcrumb-link">Ćwiczenia wymowy</Link></li>
                                    <li><Link to="/slownictwo" className="article__breadcrumb-link">Słownictwo tematyczne</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🚀 Zacznij eliminować błędy już dziś!</h3>
                            <p>Wybierz jeden obszar z tego artykułu i skup się na nim przez najbliższy tydzień. Małe, regularne kroki przynoszą najlepsze efekty!</p>
                            <div className="action-buttons">
                                <Link to="/cwiczenia/gramatyka" className="btn btn--primary">Ćwiczenia gramatyczne</Link>
                                <Link to="/gramatyka/wymowa" className="btn btn--secondary">Popraw wymowę</Link>
                                <Link to="/test-poziomujacy" className="btn btn--outline">Sprawdź poziom</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#błędy</span>
                            <span className="tag">#gramatyka</span>
                            <span className="tag">#wymowa</span>
                            <span className="tag">#polacy</span>
                            <span className="tag">#naukaangielskiego</span>
                            <span className="tag">#poprawność</span>
                            <span className="tag">#fonetyka</span>
                            <span className="tag">#falsefriends</span>
                        </div>

                        {/* UKRYTA SEKCJA SEO - NIE WIDOCZNA DLA UŻYTKOWNIKÓW */}
                        <div style={{display: 'none'}} aria-hidden="true">
                            <p>Najczęstsze błędy Polaków w angielskim, typowe błędy językowe, poprawa wymowy angielskiej, false friends angielski, gramatyka angielska dla Polaków, jak unikać błędów w angielskim, różnice polski angielski, wymowa angielska dla Polaków, błędy gramatyczne angielski, kalki językowe, interferencja językowa</p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default CommonMistakes;