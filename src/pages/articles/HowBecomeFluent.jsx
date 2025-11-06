import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleStyles.css';

const BecomingFluent = () => {
    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/artykuly" className="article__breadcrumb-link">Artykuły</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Płynna mowa</span>
                    </nav>
                    <h1 className="article__title">Jak nauczyć się mówić płynnie po angielsku? 🗣️</h1>
                    <p className="article__intro">Praktyczny przewodnik od niemowy do swobodnej konwersacji</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 8 minut</span>
                        <span className="article__level">🎯 Dla: Wszystkich, którzy chcą swobodnie rozmawiać</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box tip-box--important">
                            <h3>💡 Klucz do płynności</h3>
                            <p><strong>Płynność to nie perfekcja!</strong> Chodzi o swobodę komunikacji, a nie brak błędów. Native speakerzy też popełniają błędy!</p>
                        </div>

                        <h2>Dlaczego tak trudno zacząć mówić?</h2>
                        <div className="problem-cards">
                            <div className="problem-card">
                                <h4>😰 Lęk przed błędami</h4>
                                <p>"Boje się, że powiem coś źle i będę wyglądać głupio"</p>
                            </div>

                            <div className="problem-card">
                                <h4>⏳ Brak czasu na myślenie</h4>
                                <p>"Nie nadążam myśleć po polsku i tłumaczyć na angielski"</p>
                            </div>

                            <div className="problem-card">
                                <h4>🔁 Perfekcjonizm</h4>
                                <p>"Chcę mówić idealnie, więc wolę wcale nie mówić"</p>
                            </div>

                            <div className="problem-card">
                                <h4>🎯 Brak praktyki</h4>
                                <p>"Uczę się latami, ale nigdy nie mam okazji rozmawiać"</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja fundamentów */}
                    <section className="article__section">
                        <h2>3 fundamenty płynnej mowy 🏗️</h2>

                        <div className="foundation-cards">
                            <div className="foundation-card">
                                <div className="foundation-card__icon">🎧</div>
                                <div className="foundation-card__content">
                                    <h3>1. Bogate słuchanie</h3>
                                    <p>Mózg uczy się przez naśladownictwo. Im więcej słyszysz, tym naturalniej mówisz.</p>
                                    <ul>
                                        <li>🔹 Słuchaj podcastów codziennie</li>
                                        <li>🔹 Oglądaj filmy bez napisów</li>
                                        <li>🔹 Naśladuj wymowę native speakerów</li>
                                    </ul>
                                    <div className="foundation-stats">
                                        <div className="stat-mini">
                                            <span className="stat-mini__number">30 min</span>
                                            <span className="stat-mini__label">dziennie</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="foundation-card">
                                <div className="foundation-card__icon">💭</div>
                                <div className="foundation-card__content">
                                    <h3>2. Myślenie po angielsku</h3>
                                    <p>Przestań tłumaczyć w głowie! Zacznij myśleć bezpośrednio po angielsku.</p>
                                    <ul>
                                        <li>🔹 Opowiadaj sobie w myślach co robisz</li>
                                        <li>🔹 Planuj dzień po angielsku</li>
                                        <li>🔹 Prowadź wewnętrzny monolog</li>
                                    </ul>
                                    <div className="example-box">
                                        <strong>Ćwiczenie:</strong> "I'm making coffee. The water is boiling. I need to go to work soon."
                                    </div>
                                </div>
                            </div>

                            <div className="foundation-card">
                                <div className="foundation-card__icon">🔄</div>
                                <div className="foundation-card__content">
                                    <h3>3. Automatyzacja zwrotów</h3>
                                    <p>Ucz się całych fraz, a nie pojedynczych słów. Gotowe wyrażenia płyną łatwiej.</p>
                                    <ul>
                                        <li>🔹 Ucz się kolokacji</li>
                                        <li>🔹 Zapamiętuj całe zdania</li>
                                        <li>🔹 Używaj gotowych szablonów</li>
                                    </ul>
                                    <div className="phrase-examples">
                                        <div className="phrase-example">
                                            <span>Zamiast: "I am very happy"</span>
                                            <span>Mów: "I'm thrilled to..."</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja praktycznych metod */}
                    <section className="article__section">
                        <h2>Praktyczne metody treningu mówienia 🏋️</h2>

                        <div className="method-grid">
                            <div className="method-item">
                                <h4>🗣️ Mów do siebie</h4>
                                <p><strong>Najtańsza i najskuteczniejsza metoda</strong></p>
                                <ul>
                                    <li>Opisuj swoje działania na głos</li>
                                    <li>Opowiadaj o swoim dniu</li>
                                    <li>Opisz co widzisz przez okno</li>
                                </ul>
                                <div className="method-tip">
                                    💡 <strong>Tip:</strong> Nagrywaj się i odsłuchuj
                                </div>
                            </div>

                            <div className="method-item">
                                <h4>📱 Aplikacje do rozmów</h4>
                                <p><strong>Znajdź partnerów do konwersacji</strong></p>
                                <ul>
                                    <li>HelloTalk, Tandem</li>
                                    <li>Rozmowy głosowe i tekstowe</li>
                                    <li>Korekta od native speakerów</li>
                                </ul>
                                <div className="method-tip">
                                    💡 <strong>Tip:</strong> Umów się na regularne spotkania
                                </div>
                            </div>

                            <div className="method-item">
                                <h4>🎙️ Shadowing</h4>
                                <p><strong>Naśladuj native speakerów</strong></p>
                                <ul>
                                    <li>Odtwarzaj nagrania</li>
                                    <li>Powtarzaj bezpośrednio za mówcą</li>
                                    <li>Naśladuj intonację i rytm</li>
                                </ul>
                                <div className="method-tip">
                                    💡 <strong>Tip:</strong> Zacznij od wolniejszych podcastów
                                </div>
                            </div>

                            <div className="method-item">
                                <h4>📝 Nagrywanie siebie</h4>
                                <p><strong>Analizuj i poprawiaj</strong></p>
                                <ul>
                                    <li>Nagraj 2-minutową wypowiedź</li>
                                    <li>Odsłuchaj i znajdź błędy</li>
                                    <li>Popraw i nagraj jeszcze raz</li>
                                </ul>
                                <div className="method-tip">
                                    💡 <strong>Tip:</strong> Porównuj nagrania co miesiąc
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja przełamywania barier */}
                    <section className="article__section">
                        <h2>Jak przełamać strach przed mówieniem? 🚧</h2>

                        <div className="fear-breaking">
                            <div className="fear-item">
                                <h4>😰 "Boję się błędów"</h4>
                                <div className="solution">
                                    <h5>Rozwiązanie:</h5>
                                    <p>Pamiętaj, że <strong>błędy są naturalne</strong>. Każdy je popełnia, nawet native speakerzy! Skup się na komunikacji, nie na perfekcji.</p>
                                </div>
                            </div>

                            <div className="fear-item">
                                <h4>⏰ "Nie mam czasu myśleć"</h4>
                                <div className="solution">
                                    <h5>Rozwiązanie:</h5>
                                    <p>Używaj <strong>wypełniaczy konwersacyjnych</strong>: "Well...", "Let me think...", "That's a good question..."</p>
                                </div>
                            </div>

                            <div className="fear-item">
                                <h4>🎯 "Chcę mówić idealnie"</h4>
                                <div className="solution">
                                    <h5>Rozwiązanie:</h5>
                                    <p>Postaw sobie <strong>realistyczne cele</strong>. Zamiast "mówić perfekcyjnie", celuj w "być zrozumianym".</p>
                                </div>
                            </div>

                            <div className="fear-item">
                                <h4>👥 "Wstydzę się mówić"</h4>
                                <div className="solution">
                                    <h5>Rozwiązanie:</h5>
                                    <p>Zacznij od <strong>bezpiecznego środowiska</strong>: mów do siebie, potem z przyjacielem, na koniec z obcymi.</p>
                                </div>
                            </div>
                        </div>

                        <div className="confidence-building">
                            <h3>🏗️ Budowanie pewności siebie krok po kroku</h3>
                            <div className="confidence-steps">
                                <div className="confidence-step">
                                    <div className="step-number">1</div>
                                    <div className="step-content">
                                        <h5>Mów do siebie</h5>
                                        <p>Bez stresu, bez oceniania</p>
                                    </div>
                                </div>
                                <div className="confidence-step">
                                    <div className="step-number">2</div>
                                    <div className="step-content">
                                        <h5>Rozmawiaj z przyjacielem</h5>
                                        <p>Ktoś, kto nie będzie Cię oceniał</p>
                                    </div>
                                </div>
                                <div className="confidence-step">
                                    <div className="step-number">3</div>
                                    <div className="step-content">
                                        <h5>Aplikacje językowe</h5>
                                        <p>Bezpieczne środowisko online</p>
                                    </div>
                                </div>
                                <div className="confidence-step">
                                    <div className="step-number">4</div>
                                    <div className="step-content">
                                        <h5>Rozmowy z obcymi</h5>
                                        <p>Prawdziwy test umiejętności</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja codziennych nawyków */}
                    <section className="article__section">
                        <h2>Codzienne nawyki dla płynności 📅</h2>

                        <div className="daily-habits">
                            <div className="habit-card">
                                <h4>🌅 Poranna rutyna</h4>
                                <ul>
                                    <li>5 min - myślenie po angielsku</li>
                                    <li>10 min - podcast przy śniadaniu</li>
                                    <li>2 min - mówienie do siebie</li>
                                </ul>
                            </div>

                            <div className="habit-card">
                                <h4>🏢 W pracy/szkole</h4>
                                <ul>
                                    <li>Notatki po angielsku</li>
                                    <li>Angielski w myślach</li>
                                    <li>Krótkie przerwy na mówienie</li>
                                </ul>
                            </div>

                            <div className="habit-card">
                                <h4>🌃 Wieczorna praktyka</h4>
                                <ul>
                                    <li>5 min - podsumowanie dnia</li>
                                    <li>10 min - rozmowa w aplikacji</li>
                                    <li>2 min - planowanie jutra</li>
                                </ul>
                            </div>
                        </div>

                        <div className="progress-tracker">
                            <h4>📈 Śledź swój postęp</h4>
                            <div className="tracker-grid">
                                <div className="tracker-item">
                                    <span className="tracker-label">Dni konsekwentnej praktyki</span>
                                    <div className="tracker-bar">
                                        <div className="tracker-fill" style={{width: '45%'}}></div>
                                    </div>
                                </div>
                                <div className="tracker-item">
                                    <span className="tracker-label">Czas mówienia dziennie</span>
                                    <div className="tracker-bar">
                                        <div className="tracker-fill" style={{width: '60%'}}></div>
                                    </div>
                                </div>
                                <div className="tracker-item">
                                    <span className="tracker-label">Pewność siebie</span>
                                    <div className="tracker-bar">
                                        <div className="tracker-fill" style={{width: '30%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja zaawansowanych technik */}
                    <section className="article__section">
                        <h2>Zaawansowane techniki 🚀</h2>

                        <div className="advanced-techniques">
                            <div className="technique-card">
                                <h4>🎭 Role-playing</h4>
                                <p>Odtwarzaj różne sytuacje życiowe:</p>
                                <div className="scenario-list">
                                    <div className="scenario">Rezerwacja stolika</div>
                                    <div className="scenario">Skarga w sklepie</div>
                                    <div className="scenario">Rozmowa o pracę</div>
                                    <div className="scenario">Small talk</div>
                                </div>
                            </div>

                            <div className="technique-card">
                                <h4>⚡ Thinking on your feet</h4>
                                <p>Ćwicz improwizację:</p>
                                <ul>
                                    <li>Mów przez 2 minuty bez przerwy</li>
                                    <li>Odpowiadaj na niespodziewane pytania</li>
                                    <li>Opowiadaj historie z pamięci</li>
                                </ul>
                            </div>

                            <div className="technique-card">
                                <h4>🎯 Idiomy i slang</h4>
                                <p>Brzmij bardziej naturalnie:</p>
                                <div className="idiom-examples">
                                    <div className="idiom">
                                        <span>"Piece of cake"</span>
                                        <span>Buatka z masłem</span>
                                    </div>
                                    <div className="idiom">
                                        <span>"Hit the nail on the head"</span>
                                        <span>Trafić w sedno</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja historii sukcesu */}
                    <section className="article__section">
                        <div className="success-story">
                            <div className="success-story__quote">"</div>
                            <div className="success-story__content">
                                <h3>Historia Marka: Od niemowy do swobodnej konwersacji</h3>
                                <p>"Przez 10 lat uczyłem się angielskiego, ale bałem się mówić. Zacząłem od 5 minut dziennie mówienia do siebie. Po 3 miesiącach umówiłem się na pierwszą rozmowę przez Skype. Dziś prowadzę spotkania biznesowe po angielsku!"</p>
                                <div className="success-timeline">
                                    <div className="timeline-milestone">
                                        <span>Tydzień 1-2:</span> Mówienie do siebie
                                    </div>
                                    <div className="timeline-milestone">
                                        <span>Miesiąc 1:</span> Pierwsze rozmowy w aplikacjach
                                    </div>
                                    <div className="timeline-milestone">
                                        <span>Miesiąc 3:</span> Regularne konwersacje
                                    </div>
                                    <div className="timeline-milestone">
                                        <span>Miesiąc 6:</span> Swoboda w rozmowach
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🎯 Zacznij już dziś!</h3>
                            <p>Wybierz jedną metodę z tego artykułu i zastosuj ją przez najbliższe 7 dni. Małe kroki prowadzą do wielkich zmian!</p>
                            <div className="action-buttons">
                                <Link to="/cwiczenia/mowienie" className="btn btn--primary">Ćwiczenia mówienia</Link>
                                <Link to="/slownictwo/konwersacje" className="btn btn--secondary">Zwroty konwersacyjne</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#mowienie</span>
                            <span className="tag">#płynnosc</span>
                            <span className="tag">#konwersacje</span>
                            <span className="tag">#angielski</span>
                            <span className="tag">#komunikacja</span>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default BecomingFluent;