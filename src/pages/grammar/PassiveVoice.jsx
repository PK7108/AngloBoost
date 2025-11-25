import React, { useEffect } from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import useDocumentMeta from '../../useDocumentMeta'
import '../../styles/topic-cards.css'
import {useLanguage} from "../../context/LanguageContext.jsx";

const sections = [
    { id: 'simple', label: 'Czasy Simple' },
    { id: 'continuous', label: 'Czasy Continuous' },
    { id: 'perfect', label: 'Czasy Perfect' },
    { id: 'modals', label: 'Czasowniki modalne' },
    { id: 'uzycie-wyjatki', label: 'Użycie i wyjątki' },
]

const TOPICS = {
    simple: [
        {
            id: 'passive-simple-forms-comprehensive',
            title: 'Formy w czasach Simple 🎯',
            excerpt: 'Kompletny przewodnik: be + past participle - zasady, użycie, wyjątki i praktyczne przykłady.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Strona bierna w czasach Simple - kompletny przewodnik</h3>
                        <p className="muted">Najczęściej używane formy strony biernej - od podstaw do zaawansowanych zastosowań</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Fundamentalne zasady budowy</h4>
                                <div className="construction-formula-detailed">
                                    <div className="formula-breakdown">
                                        <span className="part subject">PODMIOT</span>
                                        <span className="operator">+</span>
                                        <span className="part verb">ODPOWIEDNIA FORMA "BE"</span>
                                        <span className="operator">+</span>
                                        <span className="part participle">PAST PARTICIPLE (V3)</span>
                                        <span className="operator">+</span>
                                        <span className="part optional">(BY + WYKONAWCA)</span>
                                    </div>
                                </div>

                                <div className="rules-list-detailed">
                                    <div className="rule-item-expanded">
                                        <h5>🎯 Podstawowa zasada</h5>
                                        <p>Strona bierna przenosi uwagę z <strong>wykonawcy czynności</strong> na <strong>samą czynność</strong> lub jej <strong>obiekt</strong>.</p>
                                        <div className="example-comparison">
                                            <div className="active-voice">
                                                <h6>Strona czynna (akcent na wykonawcę):</h6>
                                                <p>"<em>The chef</em> prepares the meal."</p>
                                            </div>
                                            <div className="passive-voice">
                                                <h6>Strona bierna (akcent na czynność):</h6>
                                                <p>"<em>The meal</em> is prepared by the chef."</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-item-expanded">
                                        <h5>🔧 Kiedy pomijamy wykonawcę?</h5>
                                        <div className="omission-cases">
                                            <div className="case">
                                                <strong>Wykonawca nieznany:</strong>
                                                <p>"The window was broken." (nie wiemy przez kogo)</p>
                                            </div>
                                            <div className="case">
                                                <strong>Wykonawca oczywisty:</strong>
                                                <p>"He was arrested." (oczywiste, że przez policję)</p>
                                            </div>
                                            <div className="case">
                                                <strong>Wykonawca nieistotny:</strong>
                                                <p>"English is spoken here." (nie ważne kto mówi)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Present Simple Passive</h4>
                                <div className="tense-details">
                                    <div className="tense-structure">
                                        <h5>Budowa: am/is/are + past participle</h5>
                                        <div className="structure-examples">
                                            <div className="example-item">
                                                <span className="label">I</span>
                                                <span className="form">am invited</span>
                                            </div>
                                            <div className="example-item">
                                                <span className="label">he/she/it</span>
                                                <span className="form">is built</span>
                                            </div>
                                            <div className="example-item">
                                                <span className="label">you/we/they</span>
                                                <span className="form">are told</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="usage-context">
                                        <h5>Kiedy używamy?</h5>
                                        <div className="context-list">
                                            <div className="context-item">
                                                <span className="icon">🔄</span>
                                                <span className="text">Rutyny i regularne czynności</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🌍</span>
                                                <span className="text">Fakty ogólne i procesy</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">📋</span>
                                                <span className="text">Instrukcje i procedury</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🏭</span>
                                                <span className="text">Procesy produkcyjne</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📚 Present Simple Passive - Praktyczne przykłady</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🏭 Procesy i produkcja</h5>
                                <div className="example-group-expanded">
                                    <p>"Cars <em>are manufactured</em> in this factory." - Samochody są produkowane w tej fabryce.</p>
                                    <p>"Coffee <em>is grown</em> in Brazil." - Kawę uprawia się w Brazylii.</p>
                                    <p>"This software <em>is used</em> by millions of people." - To oprogramowanie jest używane przez miliony ludzi.</p>
                                    <p>"The rooms <em>are cleaned</em> every morning." - Pokoje są sprzątane każdego ranka.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>📊 Fakty i dane</h5>
                                <div className="example-group-expanded">
                                    <p>"English <em>is spoken</em> in many countries." - Angielski jest używany w wielu krajach.</p>
                                    <p>"The data <em>is analyzed</em> regularly." - Dane są regularnie analizowane.</p>
                                    <p>"Reports <em>are submitted</em> every Friday." - Raporty są składane w każdy piątek.</p>
                                    <p>"This bridge <em>is crossed</em> by thousands of cars daily." - Ten most jest przekraczany przez tysiące samochodów dziennie.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>💼 Biznes i administracja</h5>
                                <div className="example-group-expanded">
                                    <p>"Applications <em>are processed</em> within 48 hours." - Wnioski są rozpatrywane w ciągu 48 godzin.</p>
                                    <p>"Employees <em>are paid</em> on the last Friday of each month." - Pracownicy są opłacani w ostatni piątek każdego miesiąca.</p>
                                    <p>"Meetings <em>are held</em> in the main conference room." - Spotkania są organizowane w głównej sali konferencyjnej.</p>
                                    <p>"All complaints <em>are taken</em> seriously." - Wszystkie skargi są traktowane poważnie.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⏰ Past Simple Passive - Szczegółowy przegląd</h4>
                        <div className="tense-details">
                            <div className="tense-structure">
                                <h5>Budowa: was/were + past participle</h5>
                                <div className="structure-examples">
                                    <div className="example-item">
                                        <span className="label">I/he/she/it</span>
                                        <span className="form">was created</span>
                                    </div>
                                    <div className="example-item">
                                        <span className="label">you/we/they</span>
                                        <span className="form">were informed</span>
                                    </div>
                                </div>
                            </div>

                            <div className="usage-context">
                                <h5>Kiedy używamy?</h5>
                                <div className="context-list">
                                    <div className="context-item">
                                        <span className="icon">📅</span>
                                        <span className="text">Zakończone czynności w przeszłości</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">🏛️</span>
                                        <span className="text">Wydarzenia historyczne</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">📖</span>
                                        <span className="text">Opowieści i relacje</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">🔍</span>
                                        <span className="text">Opisy przeszłych zdarzeń</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🏛️ Wydarzenia historyczne</h5>
                                <div className="example-group-expanded">
                                    <p>"The telephone <em>was invented</em> by Alexander Graham Bell." - Telefon został wynaleziony przez Alexandra Grahama Bella.</p>
                                    <p>"This castle <em>was built</em> in the 15th century." - Ten zamek został zbudowany w XV wieku.</p>
                                    <p>"The document <em>was signed</em> in 1776." - Dokument został podpisany w 1776 roku.</p>
                                    <p>"Many ancient cities <em>were destroyed</em> by natural disasters." - Wiele starożytnych miast zostało zniszczonych przez klęski żywiołowe.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>📰 Relacje i doniesienia</h5>
                                <div className="example-group-expanded">
                                    <p>"The missing child <em>was found</em> safe and sound." - Zaginione dziecko zostało odnalezione całe i zdrowe.</p>
                                    <p>"The stolen painting <em>was recovered</em> by the police." - Skradziony obraz został odzyskany przez policję.</p>
                                    <p>"All passengers <em>were rescued</em> from the sinking ship." - Wszyscy pasażerowie zostali uratowani z tonącego statku.</p>
                                    <p>"The decision <em>was made</em> after long discussions." - Decyzja została podjęta po długich dyskusjach.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🚀 Future Simple Passive - Kompletny opis</h4>
                        <div className="tense-details">
                            <div className="tense-structure">
                                <h5>Budowa: will be + past participle</h5>
                                <div className="structure-examples">
                                    <div className="example-item">
                                        <span className="label">wszystkie podmioty</span>
                                        <span className="form">will be completed</span>
                                    </div>
                                </div>
                            </div>

                            <div className="usage-context">
                                <h5>Kiedy używamy?</h5>
                                <div className="context-list">
                                    <div className="context-item">
                                        <span className="icon">📋</span>
                                        <span className="text">Planowane działania</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">🤝</span>
                                        <span className="text">Obietnice i zobowiązania</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">🔮</span>
                                        <span className="text">Przewidywania</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">⏰</span>
                                        <span className="text">Harmonogramy</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>📅 Plany i harmonogramy</h5>
                                <div className="example-group-expanded">
                                    <p>"The new product <em>will be launched</em> next month." - Nowy produkt zostanie wprowadzony w przyszłym miesiącu.</p>
                                    <p>"The results <em>will be announced</em> on Friday." - Wyniki zostaną ogłoszone w piątek.</p>
                                    <p>"All applications <em>will be reviewed</em> by the committee." - Wszystkie aplikacje zostaną przejrzane przez komitet.</p>
                                    <p>"The building <em>will be constructed</em> within two years." - Budynek zostanie zbudowany w ciągu dwóch lat.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🤝 Obietnice i zobowiązania</h5>
                                <div className="example-group-expanded">
                                    <p>"Your order <em>will be delivered</em> by tomorrow." - Twoje zamówienie zostanie dostarczone do jutra.</p>
                                    <p>"The problem <em>will be solved</em> as soon as possible." - Problem zostanie rozwiązany tak szybko, jak to możliwe.</p>
                                    <p>"You <em>will be notified</em> when the item is available." - Zostaniesz powiadomiony, gdy przedmiot będzie dostępny.</p>
                                    <p>"All expenses <em>will be covered</em> by the company." - Wszystkie koszty zostaną pokryte przez firmę.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚡ Transformacje: Czynna → Bierna</h4>
                        <div className="transformation-guide">
                            <div className="transformation-step">
                                <h5>Krok 1: Znajdź obiekt strony czynnej</h5>
                                <div className="example-transformation">
                                    <div className="active">
                                        <p>"<em>The chef</em> prepares <strong>the meal</strong>."</p>
                                    </div>
                                    <div className="arrow">↓</div>
                                    <div className="passive">
                                        <p>"<strong>The meal</strong> is prepared by the chef."</p>
                                    </div>
                                </div>
                            </div>

                            <div className="transformation-step">
                                <h5>Krok 2: Użyj odpowiedniej formy "be"</h5>
                                <div className="tense-matching">
                                    <div className="match-item">
                                        <span className="active-tense">Present Simple</span>
                                        <span className="arrow">→</span>
                                        <span className="passive-form">am/is/are</span>
                                    </div>
                                    <div className="match-item">
                                        <span className="active-tense">Past Simple</span>
                                        <span className="arrow">→</span>
                                        <span className="passive-form">was/were</span>
                                    </div>
                                    <div className="match-item">
                                        <span className="active-tense">Future Simple</span>
                                        <span className="arrow">→</span>
                                        <span className="passive-form">will be</span>
                                    </div>
                                </div>
                            </div>

                            <div className="transformation-step">
                                <h5>Krok 3: Dodaj past participle</h5>
                                <div className="participle-examples">
                                    <div className="verb-set">
                                        <span className="base">write</span>
                                        <span className="arrow">→</span>
                                        <span className="participle">written</span>
                                    </div>
                                    <div className="verb-set">
                                        <span className="base">build</span>
                                        <span className="arrow">→</span>
                                        <span className="participle">built</span>
                                    </div>
                                    <div className="verb-set">
                                        <span className="base">make</span>
                                        <span className="arrow">→</span>
                                        <span className="participle">made</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Przekształć zdania ze strony czynnej na bierną:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> They clean the offices every evening.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_simple1" value="b" />
                                                <span>The offices are cleaned every evening.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_simple1" value="c" />
                                                <span>The offices were cleaned every evening.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_simple1" value="a" />
                                                <span>The offices will be cleaned every evening.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Present Simple - regularna czynność</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> Shakespeare wrote Hamlet in 1600.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_simple2" value="c" />
                                                <span>Hamlet was written by Shakespeare in 1600.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_simple2" value="a" />
                                                <span>Hamlet is written by Shakespeare in 1600.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_simple2" value="b" />
                                                <span>Hamlet will be written by Shakespeare in 1600.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Past Simple - wydarzenie historyczne</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> The company will deliver the package tomorrow.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_simple3" value="b" />
                                                <span>The package will be delivered tomorrow.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_simple3" value="c" />
                                                <span>The package is delivered tomorrow.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_simple3" value="a" />
                                                <span>The package was delivered tomorrow.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Future Simple - planowana dostawa</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> People speak English all over the world.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_simple4" value="c" />
                                                <span>English is spoken all over the world.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_simple4" value="a" />
                                                <span>English was spoken all over the world.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_simple4" value="b" />
                                                <span>English will be spoken all over the world.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Present Simple - fakt ogólny</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> The chef prepares delicious meals every day.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_simple5" value="b" />
                                                <span>Delicious meals are prepared every day.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_simple5" value="c" />
                                                <span>Delicious meals were prepared every day.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_simple5" value="a" />
                                                <span>Delicious meals will be prepared every day.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Present Simple - rutyna</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> They will build a new hospital next year.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_simple6" value="c" />
                                                <span>A new hospital will be built next year.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_simple6" value="a" />
                                                <span>A new hospital is built next year.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_simple6" value="b" />
                                                <span>A new hospital was built next year.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Future Simple - plan na przyszłość</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="exercise-actions">
                                    <button className="btn btn-primary check-answers" disabled>Sprawdź odpowiedzi</button>
                                    <button className="btn btn-secondary reset-exercise" style={{display: 'none'}}>Spróbuj ponownie</button>
                                    <div className="exercise-result"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📊 Podsumowanie czasów Simple w stronie biernej</h4>
                        <div className="tense-summary-detailed">
                            <table>
                                <thead>
                                <tr>
                                    <th>Czas</th>
                                    <th>Budowa</th>
                                    <th>Użycie</th>
                                    <th>Przykład</th>
                                    <th>Wskazówki</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Present Simple</td>
                                    <td>am/is/are + V3</td>
                                    <td>Rutyny, fakty, procesy</td>
                                    <td>The car is washed weekly.</td>
                                    <td>Używaj do regularnych czynności</td>
                                </tr>
                                <tr>
                                    <td>Past Simple</td>
                                    <td>was/were + V3</td>
                                    <td>Zakończone zdarzenia</td>
                                    <td>The house was built in 1990.</td>
                                    <td>Dla historii i przeszłych faktów</td>
                                </tr>
                                <tr>
                                    <td>Future Simple</td>
                                    <td>will be + V3</td>
                                    <td>Plany, obietnice</td>
                                    <td>The work will be finished soon.</td>
                                    <td>Do przyszłych zobowiązań</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip success">
                            <h5>💪 Klucz do sukcesu</h5>
                            <p>Pamiętaj: <strong>Strona bierna przenosi uwagę na czynność, a nie na wykonawcę</strong>. Używaj jej, gdy wykonawca jest nieznany, oczywisty lub nieistotny dla przekazu!</p>
                        </div>
                    </section>
                </>
            ),
        }
    ],
    continuous: [
        {
            id: 'passive-cont-forms-comprehensive',
            title: 'Formy w Continuous 🔄',
            excerpt: 'Kompletny przewodnik: be being + V3 - czynności w toku, procesy, wyjątki i praktyczne zastosowania.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Strona bierna w czasach Continuous - kompletny przewodnik</h3>
                        <p className="muted">Opisuje czynności, które są właśnie w trakcie wykonywania w danym momencie - teraźniejszym lub przeszłym</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Fundamentalne zasady budowy</h4>
                                <div className="construction-formula-detailed">
                                    <div className="formula-breakdown">
                                        <span className="part subject">PODMIOT</span>
                                        <span className="operator">+</span>
                                        <span className="part verb">am/is/are/was/were</span>
                                        <span className="operator">+</span>
                                        <span className="part continuous">BEING</span>
                                        <span className="operator">+</span>
                                        <span className="part participle">PAST PARTICIPLE (V3)</span>
                                    </div>
                                </div>

                                <div className="rules-list-detailed">
                                    <div className="rule-item-expanded">
                                        <h5>🎯 Kluczowa różnica: Simple vs Continuous Passive</h5>
                                        <div className="comparison-grid">
                                            <div className="comparison-item">
                                                <h6>Simple Passive</h6>
                                                <p>Opisuje <strong>stan lub ukończoną czynność</strong></p>
                                                <p className="example">"The car is repaired." (stan - samochód jest naprawiony)</p>
                                            </div>
                                            <div className="comparison-item">
                                                <h6>Continuous Passive</h6>
                                                <p>Opisuje <strong>czynność w trakcie trwania</strong></p>
                                                <p className="example">"The car is being repaired." (akcja - samochód jest właśnie naprawiany)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-item-expanded">
                                        <h5>⚠️ Ważne ograniczenia</h5>
                                        <div className="limitation-cases">
                                            <div className="limitation">
                                                <strong>Future Continuous Passive:</strong>
                                                <p className="incorrect">"The bridge will be being built next year." ❌</p>
                                                <p className="correct">"The bridge will be built next year." ✅</p>
                                                <p className="explanation">Używamy Future Simple Passive</p>
                                            </div>
                                            <div className="limitation">
                                                <strong>Perfect Continuous Passive:</strong>
                                                <p className="incorrect">"The house has been being built for months." ❌</p>
                                                <p className="correct">"The house has been built for months." ✅</p>
                                                <p className="explanation">Używamy Present Perfect Passive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Present Continuous Passive</h4>
                                <div className="tense-details">
                                    <div className="tense-structure">
                                        <h5>Budowa: am/is/are + being + past participle</h5>
                                        <div className="structure-examples">
                                            <div className="example-item">
                                                <span className="label">I</span>
                                                <span className="form">am being interviewed</span>
                                            </div>
                                            <div className="example-item">
                                                <span className="label">he/she/it</span>
                                                <span className="form">is being constructed</span>
                                            </div>
                                            <div className="example-item">
                                                <span className="label">you/we/they</span>
                                                <span className="form">are being considered</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="usage-context">
                                        <h5>Kiedy używamy?</h5>
                                        <div className="context-list">
                                            <div className="context-item">
                                                <span className="icon">⏳</span>
                                                <span className="text">Czynności w trakcie teraz</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🔄</span>
                                                <span className="text">Tymczasowe sytuacje</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">📈</span>
                                                <span className="text">Procesy w rozwoju</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🚧</span>
                                                <span className="text">Prace w toku</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📚 Present Continuous Passive - Praktyczne przykłady</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🏗️ Budowa i remonty</h5>
                                <div className="example-group-expanded">
                                    <p>"A new shopping center <em>is being built</em> in the city center." - Nowe centrum handlowe jest właśnie budowane w centrum miasta.</p>
                                    <p>"The road <em>is being repaired</em> this week." - Droga jest naprawiana w tym tygodniu.</p>
                                    <p>"Our office <em>is being renovated</em> at the moment." - Nasze biuro jest właśnie remontowane.</p>
                                    <p>"The bridge <em>is being strengthened</em> to withstand heavier traffic." - Most jest wzmacniany, aby wytrzymać cięższy ruch.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>💼 Biznes i administracja</h5>
                                <div className="example-group-expanded">
                                    <p>"Your application <em>is being processed</em> right now." - Twoja aplikacja jest właśnie przetwarzana.</p>
                                    <p>"The contract <em>is being reviewed</em> by our legal team." - Umowa jest przeglądana przez nasz zespół prawny.</p>
                                    <p>"A new marketing strategy <em>is being developed</em>." - Nowa strategia marketingowa jest opracowywana.</p>
                                    <p>"The issue <em>is being investigated</em> by the authorities." - Problem jest badany przez władze.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🏥 Opieka zdrowotna i usługi</h5>
                                <div className="example-group-expanded">
                                    <p>"The patient <em>is being examined</em> by the doctor." - Pacjent jest badany przez lekarza.</p>
                                    <p>"Your order <em>is being prepared</em> in the kitchen." - Twoje zamówienie jest przygotowywane w kuchni.</p>
                                    <p>"The software <em>is being updated</em> to fix the bugs." - Oprogramowanie jest aktualizowane, aby naprawić błędy.</p>
                                    <p>"The car <em>is being serviced</em> at the garage." - Samochód jest serwisowany w warsztacie.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⏰ Past Continuous Passive - Szczegółowy przegląd</h4>
                        <div className="tense-details">
                            <div className="tense-structure">
                                <h5>Budowa: was/were + being + past participle</h5>
                                <div className="structure-examples">
                                    <div className="example-item">
                                        <span className="label">I/he/she/it</span>
                                        <span className="form">was being interviewed</span>
                                    </div>
                                    <div className="example-item">
                                        <span className="label">you/we/they</span>
                                        <span className="form">were being constructed</span>
                                    </div>
                                </div>
                            </div>

                            <div className="usage-context">
                                <h5>Kiedy używamy?</h5>
                                <div className="context-list">
                                    <div className="context-item">
                                        <span className="icon">📅</span>
                                        <span className="text">Czynności w toku w przeszłości</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">🎭</span>
                                        <span className="text">Tło dla innych wydarzeń</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">⏰</span>
                                        <span className="text">Długotrwałe procesy w przeszłości</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">📖</span>
                                        <span className="text">Opisy w narracjach</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>📖 Narracje i opowieści</h5>
                                <div className="example-group-expanded">
                                    <p>"When I arrived, the room <em>was being cleaned</em> by the staff." - Kiedy przyjechałem, pokój był sprzątany przez personel.</p>
                                    <p>"The suspect <em>was being questioned</em> when the lawyer arrived." - Podejrzany był przesłuchiwany, kiedy przyjechał adwokat.</p>
                                    <p>"The documents <em>were being checked</em> while we were waiting." - Dokumenty były sprawdzane, podczas gdy my czekaliśmy.</p>
                                    <p>"The car <em>was being repaired</em> all morning yesterday." - Samochód był naprawiany cały wczorajszy poranek.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🏭 Procesy historyczne</h5>
                                <div className="example-group-expanded">
                                    <p>"The new system <em>was being implemented</em> throughout last year." - Nowy system był wdrażany przez cały zeszły rok.</p>
                                    <p>"While the treaty <em>was being negotiated</em>, tensions were high." - Podczas gdy traktat był negocjowany, napięcia były wysokie.</p>
                                    <p>"The building <em>was being constructed</em> when the earthquake struck." - Budynek był budowany, kiedy uderzyło trzęsienie ziemi.</p>
                                    <p>"The research <em>was being conducted</em> when new evidence emerged." - Badania były prowadzone, kiedy pojawiły się nowe dowody.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚡ Różnice w znaczeniu: Continuous vs Simple Passive</h4>
                        <div className="meaning-comparison">
                            <div className="comparison-scenario">
                                <h5>Scenario: Naprawa samochodu</h5>
                                <div className="contrast-examples">
                                    <div className="continuous-example">
                                        <h6>Present Continuous Passive</h6>
                                        <p>"The car <em>is being repaired</em> right now."</p>
                                        <p className="meaning">(Akcja w trakcie - mechanik pracuje nad samochodem w tej chwili)</p>
                                    </div>
                                    <div className="simple-example">
                                        <h6>Present Simple Passive</h6>
                                        <p>"The car <em>is repaired</em> every year."</p>
                                        <p className="meaning">(Stan/rutyna - samochód jest regularnie serwisowany)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="comparison-scenario">
                                <h5>Scenario: Budowa domu</h5>
                                <div className="contrast-examples">
                                    <div className="continuous-example">
                                        <h6>Past Continuous Passive</h6>
                                        <p>"The house <em>was being built</em> when I visited."</p>
                                        <p className="meaning">(Akcja w trakcie w przeszłości - prace trwały podczas wizyty)</p>
                                    </div>
                                    <div className="simple-example">
                                        <h6>Past Simple Passive</h6>
                                        <p>"The house <em>was built</em> in 2020."</p>
                                        <p className="meaning">(Zakończona czynność - dom został zbudowany w 2020)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🚫 Czasy bez form Continuous w stronie biernej</h4>
                        <div className="missing-tenses-detailed">
                            <div className="missing-tense-expanded">
                                <h5>Future Continuous Passive</h5>
                                <div className="tense-explanation">
                                    <div className="problem">
                                        <span className="icon">❌</span>
                                        <span className="text">Nie istnieje w stronie biernej!</span>
                                    </div>
                                    <div className="incorrect-example">
                                        <p>"The new hospital <em>will be being constructed</em> next year."</p>
                                        <p className="label">BŁĘDNE - nie używamy tej formy</p>
                                    </div>
                                    <div className="solutions">
                                        <h6>Rozwiązania alternatywne:</h6>
                                        <div className="solution-item">
                                            <strong>Future Simple Passive:</strong>
                                            <p>"The new hospital <em>will be constructed</em> next year."</p>
                                        </div>
                                        <div className="solution-item">
                                            <strong>Present Continuous Active:</strong>
                                            <p>"They <em>will be constructing</em> the new hospital next year."</p>
                                        </div>
                                        <div className="solution-item">
                                            <strong>Going to Passive:</strong>
                                            <p>"The new hospital <em>is going to be constructed</em> next year."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="missing-tense-expanded">
                                <h5>Perfect Continuous Passive</h5>
                                <div className="tense-explanation">
                                    <div className="problem">
                                        <span className="icon">❌</span>
                                        <span className="text">Nie istnieje w stronie biernej!</span>
                                    </div>
                                    <div className="incorrect-example">
                                        <p>"The report <em>has been being prepared</em> for weeks."</p>
                                        <p className="label">BŁĘDNE - nie używamy tej formy</p>
                                    </div>
                                    <div className="solutions">
                                        <h6>Rozwiązania alternatywne:</h6>
                                        <div className="solution-item">
                                            <strong>Present Perfect Passive:</strong>
                                            <p>"The report <em>has been prepared</em>."</p>
                                        </div>
                                        <div className="solution-item">
                                            <strong>Present Perfect Continuous Active:</strong>
                                            <p>"They <em>have been preparing</em> the report for weeks."</p>
                                        </div>
                                        <div className="solution-item">
                                            <strong>Present Continuous Passive + time expression:</strong>
                                            <p>"The report <em>is being prepared</em> and it's taking weeks."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę strony biernej:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> Look! The new bridge ______ right now.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_cont1" value="a" />
                                                <span>is being built</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_cont1" value="b" />
                                                <span>is built</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_cont1" value="c" />
                                                <span>will be built</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Present Continuous Passive - czynność w trakcie teraz</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> When I called, the dinner ______.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_cont2" value="a" />
                                                <span>was being prepared</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_cont2" value="b" />
                                                <span>was prepared</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_cont2" value="c" />
                                                <span>had been prepared</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Past Continuous Passive - czynność w trakcie w przeszłości</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> The software ______ for months. (wybierz poprawną alternatywę)</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_cont3" value="a" />
                                                <span>has been being updated</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_cont3" value="b" />
                                                <span>has been updated</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_cont3" value="c" />
                                                <span>is being updated</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Perfect Continuous Passive nie istnieje - używamy Present Perfect Passive</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> The new park ______ next year. (wybierz poprawną alternatywę)</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_cont4" value="a" />
                                                <span>will be being opened</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_cont4" value="b" />
                                                <span>will be opened</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_cont4" value="c" />
                                                <span>is being opened</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Future Continuous Passive nie istnieje - używamy Future Simple Passive</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> Right now, the rooms ______ for the guests.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_cont5" value="a" />
                                                <span>are being cleaned</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_cont5" value="b" />
                                                <span>are cleaned</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_cont5" value="c" />
                                                <span>were being cleaned</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Present Continuous - czynność w trakcie teraz</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> While we were waiting, our car ______.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_cont6" value="a" />
                                                <span>was being serviced</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_cont6" value="b" />
                                                <span>was serviced</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_cont6" value="c" />
                                                <span>is being serviced</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Past Continuous - czynność w trakcie w przeszłości</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="exercise-actions">
                                    <button className="btn btn-primary check-answers" disabled>Sprawdź odpowiedzi</button>
                                    <button className="btn btn-secondary reset-exercise" style={{display: 'none'}}>Spróbuj ponownie</button>
                                    <div className="exercise-result"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📊 Podsumowanie czasów Continuous w stronie biernej</h4>
                        <div className="tense-summary-detailed">
                            <table>
                                <thead>
                                <tr>
                                    <th>Czas</th>
                                    <th>Budowa</th>
                                    <th>Użycie</th>
                                    <th>Przykład</th>
                                    <th>Uwagi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Present Continuous</td>
                                    <td>am/is/are being + V3</td>
                                    <td>Czynności w trakcie teraz</td>
                                    <td>The dinner is being prepared.</td>
                                    <td>Używaj dla akcji właśnie trwających</td>
                                </tr>
                                <tr>
                                    <td>Past Continuous</td>
                                    <td>was/were being + V3</td>
                                    <td>Czynności w trakcie w przeszłości</td>
                                    <td>The room was being cleaned.</td>
                                    <td>Dla tła w narracjach przeszłych</td>
                                </tr>
                                <tr>
                                    <td>Future Continuous</td>
                                    <td colSpan="4" className="not-available">
                                        <span className="icon">❌</span>
                                        <span>NIE ISTNIEJE - używaj Future Simple Passive</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Perfect Continuous</td>
                                    <td colSpan="4" className="not-available">
                                        <span className="icon">❌</span>
                                        <span>NIE ISTNIEJE - używaj Present Perfect Passive</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip success">
                            <h5>💡 Klucz do sukcesu</h5>
                            <p>Pamiętaj: <strong>Continuous Passive podkreśla, że czynność jest W TRAKCIE wykonywania</strong>. Używaj go, gdy chcesz zaznaczyć, że akcja trwa w danym momencie, a nie że jest ukończona!</p>
                        </div>
                    </section>
                </>
            ),
        }
    ],
    perfect: [
        {
            id: 'passive-perfect-forms-comprehensive',
            title: 'Formy w Perfect ✅',
            excerpt: 'Kompletny przewodnik: have been + V3 - rezultaty czynności, związki czasowe, zaawansowane użycie.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Strona bierna w czasach Perfect - kompletny przewodnik</h3>
                        <p className="muted">Podkreśla rezultat czynności i jej związek z teraźniejszością lub innym momentem w czasie</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Fundamentalne zasady budowy</h4>
                                <div className="construction-formula-detailed">
                                    <div className="formula-breakdown">
                                        <span className="part subject">PODMIOT</span>
                                        <span className="operator">+</span>
                                        <span className="part verb">have/has/had/will have</span>
                                        <span className="operator">+</span>
                                        <span className="part perfect">BEEN</span>
                                        <span className="operator">+</span>
                                        <span className="part participle">PAST PARTICIPLE (V3)</span>
                                    </div>
                                </div>

                                <div className="rules-list-detailed">
                                    <div className="rule-item-expanded">
                                        <h5>🎯 Kluczowa różnica: Simple vs Perfect Passive</h5>
                                        <div className="comparison-grid">
                                            <div className="comparison-item">
                                                <h6>Simple Passive</h6>
                                                <p>Opisuje <strong>samą czynność</strong> lub <strong>stan</strong></p>
                                                <p className="example">"The letter was sent yesterday." (czynność)</p>
                                                <p className="example">"English is spoken here." (stan)</p>
                                            </div>
                                            <div className="comparison-item">
                                                <h6>Perfect Passive</h6>
                                                <p>Podkreśla <strong>rezultat</strong> i <strong>skutki</strong> czynności</p>
                                                <p className="example">"The letter has been sent." (rezultat - wiadomość jest już wysłana)</p>
                                                <p className="example">"The problem has been solved." (skutek - problem nie istnieje)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-item-expanded">
                                        <h5>🔗 Związek z czasem</h5>
                                        <div className="time-relationships">
                                            <div className="relationship">
                                                <strong>Present Perfect:</strong>
                                                <p>Związek z <em>teraźniejszością</em> - czynność wpłynęła na obecną sytuację</p>
                                            </div>
                                            <div className="relationship">
                                                <strong>Past Perfect:</strong>
                                                <p>Związek z <em>wcześniejszą przeszłością</em> - czynność przed innym momentem przeszłym</p>
                                            </div>
                                            <div className="relationship">
                                                <strong>Future Perfect:</strong>
                                                <p>Związek z <em>przyszłym momentem</em> - czynność ukończona przed przyszłą datą</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Present Perfect Passive</h4>
                                <div className="tense-details">
                                    <div className="tense-structure">
                                        <h5>Budowa: have/has + been + past participle</h5>
                                        <div className="structure-examples">
                                            <div className="example-item">
                                                <span className="label">I/you/we/they</span>
                                                <span className="form">have been completed</span>
                                            </div>
                                            <div className="example-item">
                                                <span className="label">he/she/it</span>
                                                <span className="form">has been finished</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="usage-context">
                                        <h5>Kiedy używamy?</h5>
                                        <div className="context-list">
                                            <div className="context-item">
                                                <span className="icon">✅</span>
                                                <span className="text">Czynności zakończone z widocznym skutkiem</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">📅</span>
                                                <span className="text">Doświadczenia życiowe (bez czasu)</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🕒</span>
                                                <span className="text">Czynności niedawno zakończone</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🔗</span>
                                                <span className="text">Wyniki wpływające na teraźniejszość</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📚 Present Perfect Passive - Praktyczne przykłady</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🏢 Biznes i administracja</h5>
                                <div className="example-group-expanded">
                                    <p>"The contract <em>has been signed</em> by both parties." - Umowa została podpisana przez obie strony.</p>
                                    <p>"All necessary documents <em>have been submitted</em> to the authorities." - Wszystkie wymagane dokumenty zostały złożone władzom.</p>
                                    <p>"The budget <em>has been approved</em> for the next quarter." - Budżet został zatwierdzony na następny kwartał.</p>
                                    <p>"The new policy <em>has been implemented</em> across the company." - Nowa polityka została wdrożona w całej firmie.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🔧 Technologia i rozwój</h5>
                                <div className="example-group-expanded">
                                    <p>"The software update <em>has been installed</em> on all devices." - Aktualizacja oprogramowania została zainstalowana na wszystkich urządzeniach.</p>
                                    <p>"The bug <em>has been fixed</em> by the development team." - Błąd został naprawiony przez zespół developerski.</p>
                                    <p>"The new feature <em>has been added</em> to the application." - Nowa funkcja została dodana do aplikacji.</p>
                                    <p>"The security breach <em>has been contained</em>." - Naruszenie bezpieczeństwa zostało opanowane.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🏠 Życie codzienne</h5>
                                <div className="example-group-expanded">
                                    <p>"The groceries <em>have been delivered</em> to our doorstep." - Zakupy zostały dostarczone pod nasze drzwi.</p>
                                    <p>"The car <em>has been serviced</em> and is ready for the trip." - Samochód został serwisowany i jest gotowy do podróży.</p>
                                    <p>"The reservation <em>has been confirmed</em> by the hotel." - Rezerwacja została potwierdzona przez hotel.</p>
                                    <p>"The package <em>has been received</em> at the post office." - Przesyłka została odebrana na poczcie.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⏰ Past Perfect Passive - Szczegółowy przegląd</h4>
                        <div className="tense-details">
                            <div className="tense-structure">
                                <h5>Budowa: had + been + past participle</h5>
                                <div className="structure-examples">
                                    <div className="example-item">
                                        <span className="label">wszystkie podmioty</span>
                                        <span className="form">had been completed</span>
                                    </div>
                                </div>
                            </div>

                            <div className="usage-context">
                                <h5>Kiedy używamy?</h5>
                                <div className="context-list">
                                    <div className="context-item">
                                        <span className="icon">📖</span>
                                        <span className="text">Wcześniejsza przeszłość</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">🔄</span>
                                        <span className="text">Czynności przed innym momentem przeszłym</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">🎭</span>
                                        <span className="text">W opowieściach i relacjach</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">💭</span>
                                        <span className="text">Wyrażanie żalu lub zdziwienia</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>📖 Narracje i opowieści</h5>
                                <div className="example-group-expanded">
                                    <p>"When we arrived at the station, the train <em>had already been departed</em>." - Kiedy przyjechaliśmy na stację, pociąg już odjechał.</p>
                                    <p>"The documents <em>had been reviewed</em> before the meeting started." - Dokumenty zostały przejrzane przed rozpoczęciem spotkania.</p>
                                    <p>"By the time the police arrived, the evidence <em>had been destroyed</em>." - Zanim przyjechała policja, dowody zostały zniszczone.</p>
                                    <p>"The decision <em>had been made</em> long before we were informed." - Decyzja została podjęta na długo przed tym, zanim nas poinformowano.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>💼 Sytuacje biznesowe</h5>
                                <div className="example-group-expanded">
                                    <p>"The payment <em>had been processed</em> before the deadline." - Płatność została przetworzona przed terminem.</p>
                                    <p>"The report <em>had been submitted</em> when the manager requested it." - Raport został złożony, kiedy menedżer go zażądał.</p>
                                    <p>"All preparations <em>had been completed</em> before the product launch." - Wszystkie przygotowania zostały ukończone przed premierą produktu.</p>
                                    <p>"The contract <em>had been signed</em> by both parties before the negotiations ended." - Umowa została podpisana przez obie strony przed zakończeniem negocjacji.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🚀 Future Perfect Passive - Kompletny opis</h4>
                        <div className="tense-details">
                            <div className="tense-structure">
                                <h5>Budowa: will have + been + past participle</h5>
                                <div className="structure-examples">
                                    <div className="example-item">
                                        <span className="label">wszystkie podmioty</span>
                                        <span className="form">will have been completed</span>
                                    </div>
                                </div>
                            </div>

                            <div className="usage-context">
                                <h5>Kiedy używamy?</h5>
                                <div className="context-list">
                                    <div className="context-item">
                                        <span className="icon">📅</span>
                                        <span className="text">Czynności zakończone przed przyszłym momentem</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">🔮</span>
                                        <span className="text">Prognozy i przewidywania</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">⏰</span>
                                        <span className="text">Planowanie długoterminowe</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">🎯</span>
                                        <span className="text">Cele i deadline'y</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>📊 Projekty i deadline'y</h5>
                                <div className="example-group-expanded">
                                    <p>"By next month, the construction <em>will have been completed</em>." - Do przyszłego miesiąca budowa zostanie ukończona.</p>
                                    <p>"The annual report <em>will have been finalized</em> by the end of the week." - Roczny raport zostanie sfinalizowany do końca tygodnia.</p>
                                    <p>"All preparations for the conference <em>will have been made</em> by Friday." - Wszystkie przygotowania do konferencji zostaną wykonane do piątku.</p>
                                    <p>"The software migration <em>will have been completed</em> before the system update." - Migracja oprogramowania zostanie ukończona przed aktualizacją systemu.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🌍 Prognozy i przewidywania</h5>
                                <div className="example-group-expanded">
                                    <p>"By 2030, renewable energy sources <em>will have been adopted</em> worldwide." - Do 2030 roku źródła energii odnawialnej zostaną przyjęte na całym świecie.</p>
                                    <p>"The new regulations <em>will have been implemented</em> across all departments by next year." - Nowe regulacje zostaną wdrożone we wszystkich działach do przyszłego roku.</p>
                                    <p>"The research <em>will have been published</em> in scientific journals by the time of the conference." - Badania zostaną opublikowane w czasopismach naukowych do czasu konferencji.</p>
                                    <p>"All necessary training <em>will have been provided</em> to employees before the new system goes live." - Wszystkie niezbędne szkolenia zostaną zapewnione pracownikom przed uruchomieniem nowego systemu.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚡ Różnice w znaczeniu: Perfect vs Simple Passive</h4>
                        <div className="meaning-comparison">
                            <div className="comparison-scenario">
                                <h5>Scenario: Wysłanie raportu</h5>
                                <div className="contrast-examples">
                                    <div className="perfect-example">
                                        <h6>Present Perfect Passive</h6>
                                        <p>"The report <em>has been sent</em> to the manager."</p>
                                        <p className="meaning">(Rezultat - raport jest już wysłany, możemy przejść do kolejnych zadań)</p>
                                        <p className="time-context">Związek z teraźniejszością: ✓</p>
                                    </div>
                                    <div className="simple-example">
                                        <h6>Past Simple Passive</h6>
                                        <p>"The report <em>was sent</em> yesterday."</p>
                                        <p className="meaning">(Fakt - opisujemy, kiedy czynność się odbyła)</p>
                                        <p className="time-context">Określony czas przeszłości: ✓</p>
                                    </div>
                                </div>
                            </div>

                            <div className="comparison-scenario">
                                <h5>Scenario: Naprawa systemu</h5>
                                <div className="contrast-examples">
                                    <div className="perfect-example">
                                        <h6>Past Perfect Passive</h6>
                                        <p>"The system <em>had been repaired</em> before the outage occurred."</p>
                                        <p className="meaning">(Wcześniejsza przeszłość - naprawa przed awarią)</p>
                                        <p className="time-context">Kolejność zdarzeń: ✓</p>
                                    </div>
                                    <div className="simple-example">
                                        <h6>Past Simple Passive</h6>
                                        <p>"The system <em>was repaired</em> last week."</p>
                                        <p className="meaning">(Po prostu fakt naprawy w przeszłości)</p>
                                        <p className="time-context">Określony czas: ✓</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę strony biernej w czasie Perfect:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> The missing documents ______ finally.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_perfect1" value="c" />
                                                <span>have been found</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_perfect1" value="b" />
                                                <span>were found</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_perfect1" value="a" />
                                                <span>had been found</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Present Perfect Passive - rezultat wpływa na teraźniejszość</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> When we arrived at the venue, all preparations ______.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_perfect2" value="b" />
                                                <span>had been completed</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_perfect2" value="a" />
                                                <span>have been completed</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_perfect2" value="c" />
                                                <span>were completed</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Past Perfect Passive - wcześniejsza przeszłość</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> By next year, the new regulations ______ across the EU.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_perfect3" value="c" />
                                                <span>will have been implemented</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_perfect3" value="a" />
                                                <span>will be implemented</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_perfect3" value="b" />
                                                <span>have been implemented</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Future Perfect Passive - czynność ukończona przed przyszłym momentem</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> The software update ______ on over 10,000 devices so far.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_perfect4" value="b" />
                                                <span>has been installed</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_perfect4" value="a" />
                                                <span>had been installed</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_perfect4" value="c" />
                                                <span>was installed</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Present Perfect Passive - doświadczenie do teraz</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> By the time the manager arrived, the report ______.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_perfect5" value="c" />
                                                <span>had been finished</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_perfect5" value="a" />
                                                <span>has been finished</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_perfect5" value="b" />
                                                <span>was finished</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Past Perfect - czynność przed innym momentem przeszłym</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> By 2025, this technology ______ worldwide.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_perfect6" value="b" />
                                                <span>will have been adopted</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_perfect6" value="a" />
                                                <span>will be adopted</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_perfect6" value="c" />
                                                <span>has been adopted</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Future Perfect - prognoza ukończenia przed przyszłą datą</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="exercise-actions">
                                    <button className="btn btn-primary check-answers" disabled>Sprawdź odpowiedzi</button>
                                    <button className="btn btn-secondary reset-exercise" style={{display: 'none'}}>Spróbuj ponownie</button>
                                    <div className="exercise-result"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📊 Podsumowanie czasów Perfect w stronie biernej</h4>
                        <div className="tense-summary-detailed">
                            <table>
                                <thead>
                                <tr>
                                    <th>Czas</th>
                                    <th>Budowa</th>
                                    <th>Użycie</th>
                                    <th>Przykład</th>
                                    <th>Wskazówki</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Present Perfect</td>
                                    <td>have/has been + V3</td>
                                    <td>Rezultaty wpływające na teraźniejszość</td>
                                    <td>The decision has been made.</td>
                                    <td>Używaj gdy rezultat jest ważny teraz</td>
                                </tr>
                                <tr>
                                    <td>Past Perfect</td>
                                    <td>had been + V3</td>
                                    <td>Wcześniejsza przeszłość</td>
                                    <td>The money had been transferred.</td>
                                    <td>Dla kolejności zdarzeń w przeszłości</td>
                                </tr>
                                <tr>
                                    <td>Future Perfect</td>
                                    <td>will have been + V3</td>
                                    <td>Czynności ukończone przed przyszłym momentem</td>
                                    <td>The project will have been completed.</td>
                                    <td>Do planowania i prognoz</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip success">
                            <h5>💡 Klucz do sukcesu</h5>
                            <p>Pamiętaj: <strong>Perfect Passive podkreśla REZULTAT i ZWIĄZEK CZASOWY</strong>. Używaj go, gdy chcesz pokazać, że czynność wpłynęła na obecną sytuację, wydarzyła się przed innym momentem w przeszłości, lub zostanie ukończona przed przyszłą datą!</p>
                        </div>
                    </section>
                </>
            ),
        },
    ],
    modals: [
        {
            id: 'passive-perfect-forms-comprehensive',
            title: 'Formy w Perfect ✅',
            excerpt: 'Kompletny przewodnik: have been + V3 - rezultaty czynności, związki czasowe, zaawansowane użycie.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Strona bierna w czasach Perfect - kompletny przewodnik</h3>
                        <p className="muted">Podkreśla rezultat czynności i jej związek z teraźniejszością lub innym momentem w czasie</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Fundamentalne zasady budowy</h4>
                                <div className="construction-formula-detailed">
                                    <div className="formula-breakdown">
                                        <span className="part subject">PODMIOT</span>
                                        <span className="operator">+</span>
                                        <span className="part verb">have/has/had/will have</span>
                                        <span className="operator">+</span>
                                        <span className="part perfect">BEEN</span>
                                        <span className="operator">+</span>
                                        <span className="part participle">PAST PARTICIPLE (V3)</span>
                                    </div>
                                </div>

                                <div className="rules-list-detailed">
                                    <div className="rule-item-expanded">
                                        <h5>🎯 Kluczowa różnica: Simple vs Perfect Passive</h5>
                                        <div className="comparison-grid">
                                            <div className="comparison-item">
                                                <h6>Simple Passive</h6>
                                                <p>Opisuje <strong>samą czynność</strong> lub <strong>stan</strong></p>
                                                <p className="example">"The letter was sent yesterday." (czynność)</p>
                                                <p className="example">"English is spoken here." (stan)</p>
                                            </div>
                                            <div className="comparison-item">
                                                <h6>Perfect Passive</h6>
                                                <p>Podkreśla <strong>rezultat</strong> i <strong>skutki</strong> czynności</p>
                                                <p className="example">"The letter has been sent." (rezultat - wiadomość jest już wysłana)</p>
                                                <p className="example">"The problem has been solved." (skutek - problem nie istnieje)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-item-expanded">
                                        <h5>🔗 Związek z czasem</h5>
                                        <div className="time-relationships">
                                            <div className="relationship">
                                                <strong>Present Perfect:</strong>
                                                <p>Związek z <em>teraźniejszością</em> - czynność wpłynęła na obecną sytuację</p>
                                            </div>
                                            <div className="relationship">
                                                <strong>Past Perfect:</strong>
                                                <p>Związek z <em>wcześniejszą przeszłością</em> - czynność przed innym momentem przeszłym</p>
                                            </div>
                                            <div className="relationship">
                                                <strong>Future Perfect:</strong>
                                                <p>Związek z <em>przyszłym momentem</em> - czynność ukończona przed przyszłą datą</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Present Perfect Passive</h4>
                                <div className="tense-details">
                                    <div className="tense-structure">
                                        <h5>Budowa: have/has + been + past participle</h5>
                                        <div className="structure-examples">
                                            <div className="example-item">
                                                <span className="label">I/you/we/they</span>
                                                <span className="form">have been completed</span>
                                            </div>
                                            <div className="example-item">
                                                <span className="label">he/she/it</span>
                                                <span className="form">has been finished</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="usage-context">
                                        <h5>Kiedy używamy?</h5>
                                        <div className="context-list">
                                            <div className="context-item">
                                                <span className="icon">✅</span>
                                                <span className="text">Czynności zakończone z widocznym skutkiem</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">📅</span>
                                                <span className="text">Doświadczenia życiowe (bez czasu)</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🕒</span>
                                                <span className="text">Czynności niedawno zakończone</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🔗</span>
                                                <span className="text">Wyniki wpływające na teraźniejszość</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📚 Present Perfect Passive - Praktyczne przykłady</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🏢 Biznes i administracja</h5>
                                <div className="example-group-expanded">
                                    <p>"The contract <em>has been signed</em> by both parties." - Umowa została podpisana przez obie strony.</p>
                                    <p>"All necessary documents <em>have been submitted</em> to the authorities." - Wszystkie wymagane dokumenty zostały złożone władzom.</p>
                                    <p>"The budget <em>has been approved</em> for the next quarter." - Budżet został zatwierdzony na następny kwartał.</p>
                                    <p>"The new policy <em>has been implemented</em> across the company." - Nowa polityka została wdrożona w całej firmie.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🔧 Technologia i rozwój</h5>
                                <div className="example-group-expanded">
                                    <p>"The software update <em>has been installed</em> on all devices." - Aktualizacja oprogramowania została zainstalowana na wszystkich urządzeniach.</p>
                                    <p>"The bug <em>has been fixed</em> by the development team." - Błąd został naprawiony przez zespół developerski.</p>
                                    <p>"The new feature <em>has been added</em> to the application." - Nowa funkcja została dodana do aplikacji.</p>
                                    <p>"The security breach <em>has been contained</em>." - Naruszenie bezpieczeństwa zostało opanowane.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🏠 Życie codzienne</h5>
                                <div className="example-group-expanded">
                                    <p>"The groceries <em>have been delivered</em> to our doorstep." - Zakupy zostały dostarczone pod nasze drzwi.</p>
                                    <p>"The car <em>has been serviced</em> and is ready for the trip." - Samochód został serwisowany i jest gotowy do podróży.</p>
                                    <p>"The reservation <em>has been confirmed</em> by the hotel." - Rezerwacja została potwierdzona przez hotel.</p>
                                    <p>"The package <em>has been received</em> at the post office." - Przesyłka została odebrana na poczcie.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⏰ Past Perfect Passive - Szczegółowy przegląd</h4>
                        <div className="tense-details">
                            <div className="tense-structure">
                                <h5>Budowa: had + been + past participle</h5>
                                <div className="structure-examples">
                                    <div className="example-item">
                                        <span className="label">wszystkie podmioty</span>
                                        <span className="form">had been completed</span>
                                    </div>
                                </div>
                            </div>

                            <div className="usage-context">
                                <h5>Kiedy używamy?</h5>
                                <div className="context-list">
                                    <div className="context-item">
                                        <span className="icon">📖</span>
                                        <span className="text">Wcześniejsza przeszłość</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">🔄</span>
                                        <span className="text">Czynności przed innym momentem przeszłym</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">🎭</span>
                                        <span className="text">W opowieściach i relacjach</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">💭</span>
                                        <span className="text">Wyrażanie żalu lub zdziwienia</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>📖 Narracje i opowieści</h5>
                                <div className="example-group-expanded">
                                    <p>"When we arrived at the station, the train <em>had already been departed</em>." - Kiedy przyjechaliśmy na stację, pociąg już odjechał.</p>
                                    <p>"The documents <em>had been reviewed</em> before the meeting started." - Dokumenty zostały przejrzane przed rozpoczęciem spotkania.</p>
                                    <p>"By the time the police arrived, the evidence <em>had been destroyed</em>." - Zanim przyjechała policja, dowody zostały zniszczone.</p>
                                    <p>"The decision <em>had been made</em> long before we were informed." - Decyzja została podjęta na długo przed tym, zanim nas poinformowano.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>💼 Sytuacje biznesowe</h5>
                                <div className="example-group-expanded">
                                    <p>"The payment <em>had been processed</em> before the deadline." - Płatność została przetworzona przed terminem.</p>
                                    <p>"The report <em>had been submitted</em> when the manager requested it." - Raport został złożony, kiedy menedżer go zażądał.</p>
                                    <p>"All preparations <em>had been completed</em> before the product launch." - Wszystkie przygotowania zostały ukończone przed premierą produktu.</p>
                                    <p>"The contract <em>had been signed</em> by both parties before the negotiations ended." - Umowa została podpisana przez obie strony przed zakończeniem negocjacji.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🚀 Future Perfect Passive - Kompletny opis</h4>
                        <div className="tense-details">
                            <div className="tense-structure">
                                <h5>Budowa: will have + been + past participle</h5>
                                <div className="structure-examples">
                                    <div className="example-item">
                                        <span className="label">wszystkie podmioty</span>
                                        <span className="form">will have been completed</span>
                                    </div>
                                </div>
                            </div>

                            <div className="usage-context">
                                <h5>Kiedy używamy?</h5>
                                <div className="context-list">
                                    <div className="context-item">
                                        <span className="icon">📅</span>
                                        <span className="text">Czynności zakończone przed przyszłym momentem</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">🔮</span>
                                        <span className="text">Prognozy i przewidywania</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">⏰</span>
                                        <span className="text">Planowanie długoterminowe</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">🎯</span>
                                        <span className="text">Cele i deadline'y</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>📊 Projekty i deadline'y</h5>
                                <div className="example-group-expanded">
                                    <p>"By next month, the construction <em>will have been completed</em>." - Do przyszłego miesiąca budowa zostanie ukończona.</p>
                                    <p>"The annual report <em>will have been finalized</em> by the end of the week." - Roczny raport zostanie sfinalizowany do końca tygodnia.</p>
                                    <p>"All preparations for the conference <em>will have been made</em> by Friday." - Wszystkie przygotowania do konferencji zostaną wykonane do piątku.</p>
                                    <p>"The software migration <em>will have been completed</em> before the system update." - Migracja oprogramowania zostanie ukończona przed aktualizacją systemu.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🌍 Prognozy i przewidywania</h5>
                                <div className="example-group-expanded">
                                    <p>"By 2030, renewable energy sources <em>will have been adopted</em> worldwide." - Do 2030 roku źródła energii odnawialnej zostaną przyjęte na całym świecie.</p>
                                    <p>"The new regulations <em>will have been implemented</em> across all departments by next year." - Nowe regulacje zostaną wdrożone we wszystkich działach do przyszłego roku.</p>
                                    <p>"The research <em>will have been published</em> in scientific journals by the time of the conference." - Badania zostaną opublikowane w czasopismach naukowych do czasu konferencji.</p>
                                    <p>"All necessary training <em>will have been provided</em> to employees before the new system goes live." - Wszystkie niezbędne szkolenia zostaną zapewnione pracownikom przed uruchomieniem nowego systemu.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚡ Różnice w znaczeniu: Perfect vs Simple Passive</h4>
                        <div className="meaning-comparison">
                            <div className="comparison-scenario">
                                <h5>Scenario: Wysłanie raportu</h5>
                                <div className="contrast-examples">
                                    <div className="perfect-example">
                                        <h6>Present Perfect Passive</h6>
                                        <p>"The report <em>has been sent</em> to the manager."</p>
                                        <p className="meaning">(Rezultat - raport jest już wysłany, możemy przejść do kolejnych zadań)</p>
                                        <p className="time-context">Związek z teraźniejszością: ✓</p>
                                    </div>
                                    <div className="simple-example">
                                        <h6>Past Simple Passive</h6>
                                        <p>"The report <em>was sent</em> yesterday."</p>
                                        <p className="meaning">(Fakt - opisujemy, kiedy czynność się odbyła)</p>
                                        <p className="time-context">Określony czas przeszłości: ✓</p>
                                    </div>
                                </div>
                            </div>

                            <div className="comparison-scenario">
                                <h5>Scenario: Naprawa systemu</h5>
                                <div className="contrast-examples">
                                    <div className="perfect-example">
                                        <h6>Past Perfect Passive</h6>
                                        <p>"The system <em>had been repaired</em> before the outage occurred."</p>
                                        <p className="meaning">(Wcześniejsza przeszłość - naprawa przed awarią)</p>
                                        <p className="time-context">Kolejność zdarzeń: ✓</p>
                                    </div>
                                    <div className="simple-example">
                                        <h6>Past Simple Passive</h6>
                                        <p>"The system <em>was repaired</em> last week."</p>
                                        <p className="meaning">(Po prostu fakt naprawy w przeszłości)</p>
                                        <p className="time-context">Określony czas: ✓</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - czasowniki modalne w stronie biernej</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę strony biernej z czasownikiem modalnym:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> The application ______ by the end of the week.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modal_passive1" value="a" />
                                                <span>must be submitted</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal_passive1" value="b" />
                                                <span>must submitted</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal_passive1" value="c" />
                                                <span>must to be submitted</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Modal + be + past participle - poprawna konstrukcja</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> All safety regulations ______ strictly.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modal_passive2" value="a" />
                                                <span>must followed</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal_passive2" value="b" />
                                                <span>must be followed</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal_passive2" value="c" />
                                                <span>must to follow</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"must be followed" wyraża obowiązek w stronie biernej</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> The ancient ruins ______ from the observation deck.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modal_passive3" value="a" />
                                                <span>can be seen</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal_passive3" value="b" />
                                                <span>can seen</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal_passive3" value="c" />
                                                <span>can to be seen</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"can be seen" wyraża możliwość w stronie biernej</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> This matter ______ at the next board meeting.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modal_passive4" value="a" />
                                                <span>should discussed</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal_passive4" value="b" />
                                                <span>should be discussed</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal_passive4" value="c" />
                                                <span>should to discuss</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"should be considered" daje radę w stronie biernej</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> The flight ______ due to the storm.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modal_passive5" value="a" />
                                                <span>might delayed</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal_passive5" value="b" />
                                                <span>might to be delayed</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal_passive5" value="c" />
                                                <span>might be delayed</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"might be delayed" wyraża niepewność w stronie biernej</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> More research ______ on this phenomenon.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modal_passive6" value="a" />
                                                <span>ought to be done</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal_passive6" value="b" />
                                                <span>ought to done</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal_passive6" value="c" />
                                                <span>ought be done</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"ought to be done" wyraża zalecenie w stronie biernej</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="exercise-actions">
                                    <button className="btn btn-primary check-answers" disabled>Sprawdź odpowiedzi</button>
                                    <button className="btn btn-secondary reset-exercise" style={{display: 'none'}}>Spróbuj ponownie</button>
                                    <div className="exercise-result"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📊 Podsumowanie czasów Perfect w stronie biernej</h4>
                        <div className="tense-summary-detailed">
                            <table>
                                <thead>
                                <tr>
                                    <th>Czas</th>
                                    <th>Budowa</th>
                                    <th>Użycie</th>
                                    <th>Przykład</th>
                                    <th>Wskazówki</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Present Perfect</td>
                                    <td>have/has been + V3</td>
                                    <td>Rezultaty wpływające na teraźniejszość</td>
                                    <td>The decision has been made.</td>
                                    <td>Używaj gdy rezultat jest ważny teraz</td>
                                </tr>
                                <tr>
                                    <td>Past Perfect</td>
                                    <td>had been + V3</td>
                                    <td>Wcześniejsza przeszłość</td>
                                    <td>The money had been transferred.</td>
                                    <td>Dla kolejności zdarzeń w przeszłości</td>
                                </tr>
                                <tr>
                                    <td>Future Perfect</td>
                                    <td>will have been + V3</td>
                                    <td>Czynności ukończone przed przyszłym momentem</td>
                                    <td>The project will have been completed.</td>
                                    <td>Do planowania i prognoz</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip success">
                            <h5>💡 Klucz do sukcesu</h5>
                            <p>Pamiętaj: <strong>Perfect Passive podkreśla REZULTAT i ZWIĄZEK CZASOWY</strong>. Używaj go, gdy chcesz pokazać, że czynność wpłynęła na obecną sytuację, wydarzyła się przed innym momentem w przeszłości, lub zostanie ukończona przed przyszłą datą!</p>
                        </div>
                    </section>
                </>
            ),
        }
    ],
    'uzycie-wyjatki': [
        {
            id: 'passive-usage-exceptions-comprehensive',
            title: 'Użycie i wyjątki ⚠️',
            excerpt: 'Kompletny przewodnik: kiedy używać strony biernej, czasowniki bez form biernych, typowe błędy i praktyczne wskazówki.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Strona bierna - użycie i wyjątki - kompletny przewodnik</h3>
                        <p className="muted">Poznaj sytuacje, w których strona bierna jest bardziej naturalna i skuteczna, oraz naucz się unikać typowych błędów</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Kiedy używać strony biernej?</h4>
                                <div className="construction-formula-detailed">
                                    <div className="formula-breakdown">
                                        <span className="part subject">STRONA BIERNA</span>
                                        <span className="operator">=</span>
                                        <span className="part verb">SKUPIENIE NA CZYNNOŚCI</span>
                                        <span className="operator">+</span>
                                        <span className="part participle">POMINIĘCIE WYKONAWCY</span>
                                    </div>
                                </div>

                                <div className="rules-list-detailed">
                                    <div className="rule-item-expanded">
                                        <h5>🎯 Kluczowa zasada: Akcent na czynność</h5>
                                        <div className="comparison-grid">
                                            <div className="comparison-item">
                                                <h6>Strona czynna</h6>
                                                <p>Akcent na <strong>wykonawcę</strong> czynności</p>
                                                <p className="example">"<em>The chef</em> prepared the meal."</p>
                                                <p className="explanation">(Ważne, kto przygotował)</p>
                                            </div>
                                            <div className="comparison-item">
                                                <h6>Strona bierna</h6>
                                                <p>Akcent na <strong>samą czynność</strong> lub jej obiekt</p>
                                                <p className="example">"The meal <em>was prepared</em>."</p>
                                                <p className="explanation">(Ważne, że posiłek został przygotowany)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-item-expanded">
                                        <h5>🔍 Kryteria wyboru strony biernej</h5>
                                        <div className="omission-cases">
                                            <div className="case">
                                                <strong>Wykonawca nieznany:</strong>
                                                <p>"The window was broken." (nie wiemy przez kogo)</p>
                                                <p className="explanation">Używamy gdy nie znamy sprawcy</p>
                                            </div>
                                            <div className="case">
                                                <strong>Wykonawca oczywisty:</strong>
                                                <p>"He was arrested." (oczywiste, że przez policję)</p>
                                                <p className="explanation">Pomijamy oczywistego wykonawcę</p>
                                            </div>
                                            <div className="case">
                                                <strong>Wykonawca nieistotny:</strong>
                                                <p>"English is spoken here." (nie ważne kto mówi)</p>
                                                <p className="explanation">Akcent na fakt, nie na mówców</p>
                                            </div>
                                            <div className="case">
                                                <strong>Czynność ważniejsza niż wykonawca:</strong>
                                                <p>"The new law will be introduced next month."</p>
                                                <p className="explanation">Ważne prawo, nie kto je wprowadza</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Konteksty użycia strony biernej</h4>
                                <div className="tense-details">
                                    <div className="usage-context">
                                        <h5>Gdzie najczęściej używamy?</h5>
                                        <div className="context-list">
                                            <div className="context-item">
                                                <span className="icon">📊</span>
                                                <span className="text">Raporty naukowe i techniczne</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">📰</span>
                                                <span className="text">Wiadomości i doniesienia prasowe</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">⚖️</span>
                                                <span className="text">Dokumenty prawne i formalne</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">📝</span>
                                                <span className="text">Instrukcje i procedury</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🔬</span>
                                                <span className="text">Opisy procesów i eksperymentów</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📚 Praktyczne przykłady użycia strony biernej</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>📰 Doniesienia prasowe</h5>
                                <div className="example-group-expanded">
                                    <p>"The suspect <em>was arrested</em> in connection with the robbery." - Podejrzany został aresztowany w związku z napadem.</p>
                                    <p>"Three people <em>were injured</em> in the accident." - Trzy osoby zostały ranne w wypadku.</p>
                                    <p>"The missing documents <em>have been found</em>." - Zaginione dokumenty zostały odnalezione.</p>
                                    <p>"A new species <em>has been discovered</em> in the Amazon." - Nowy gatunek został odkryty w Amazonii.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🔬 Raporty naukowe</h5>
                                <div className="example-group-expanded">
                                    <p>"The experiment <em>was conducted</em> under controlled conditions." - Eksperyment został przeprowadzony w kontrolowanych warunkach.</p>
                                    <p>"The data <em>were analyzed</em> using statistical methods." - Dane zostały przeanalizowane przy użyciu metod statystycznych.</p>
                                    <p>"It <em>is believed</em> that the phenomenon is caused by climate change." - Uważa się, że zjawisko jest spowodowane zmianami klimatu.</p>
                                    <p>"The results <em>will be published</em> in a scientific journal." - Wyniki zostaną opublikowane w czasopiśmie naukowym.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>💼 Biznes i administracja</h5>
                                <div className="example-group-expanded">
                                    <p>"All applications <em>must be submitted</em> by Friday." - Wszystkie aplikacje muszą być złożone do piątku.</p>
                                    <p>"The meeting <em>has been postponed</em> until next week." - Spotkanie zostało przełożone na przyszły tydzień.</p>
                                    <p>"Employees <em>are required</em> to attend the training." - Pracownicy są zobowiązani do uczestnictwa w szkoleniu.</p>
                                    <p>"The decision <em>will be made</em> by the board of directors." - Decyzja zostanie podjęta przez zarząd.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🚫 Czasowniki bez form biernych - kompletna lista</h4>
                        <div className="missing-tenses-detailed">
                            <div className="missing-tense-expanded">
                                <h5>🧠 Czasowniki stanowe (stative verbs)</h5>
                                <div className="tense-explanation">
                                    <div className="problem">
                                        <span className="icon">❌</span>
                                        <span className="text">Nie tworzą strony biernej - opisują stan, nie akcję</span>
                                    </div>

                                    <div className="solutions">
                                        <div className="solution-item">
                                            <strong>have (w znaczeniu posiadać)</strong>
                                            <div className="example-comparison">
                                                <div className="incorrect-example">
                                                    <p>"A car <em>is had</em> by me." ❌</p>
                                                    <p className="label">BŁĘDNE - nie używamy tej formy</p>
                                                </div>
                                                <div className="correct-example">
                                                    <p>"I <em>have</em> a car." ✅</p>
                                                    <p className="label">POPRAWNE - strona czynna</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="solution-item">
                                            <strong>lack (brakować)</strong>
                                            <div className="example-comparison">
                                                <div className="incorrect-example">
                                                    <p>"Experience <em>is lacked</em> by him." ❌</p>
                                                </div>
                                                <div className="correct-example">
                                                    <p>"He <em>lacks</em> experience." ✅</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="solution-item">
                                            <strong>resemble (przypominać)</strong>
                                            <div className="example-comparison">
                                                <div className="incorrect-example">
                                                    <p>"His father <em>is resembled</em> by him." ❌</p>
                                                </div>
                                                <div className="correct-example">
                                                    <p>"He <em>resembles</em> his father." ✅</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="solution-item">
                                            <strong>cost (kosztować)</strong>
                                            <div className="example-comparison">
                                                <div className="incorrect-example">
                                                    <p>"$100 <em>is cost</em> by this book." ❌</p>
                                                </div>
                                                <div className="correct-example">
                                                    <p>"This book <em>costs</em> $100." ✅</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="missing-tense-expanded">
                                <h5>💖 Czasowniki emocji i percepcji</h5>
                                <div className="tense-explanation">
                                    <div className="problem">
                                        <span className="icon">❌</span>
                                        <span className="text">Rzadko używane w stronie biernej - opisują subiektywne odczucia</span>
                                    </div>

                                    <div className="solutions">
                                        <div className="solution-item">
                                            <strong>like (lubić)</strong>
                                            <div className="example-comparison">
                                                <div className="incorrect-example">
                                                    <p>"Chocolate <em>is liked</em> by me." ❌</p>
                                                    <p className="label">Nienaturalne - lepiej użyć strony czynnej</p>
                                                </div>
                                                <div className="correct-example">
                                                    <p>"I <em>like</em> chocolate." ✅</p>
                                                    <p className="label">Naturalne i poprawne</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="solution-item">
                                            <strong>love (kochać)</strong>
                                            <div className="example-comparison">
                                                <div className="incorrect-example">
                                                    <p>"She <em>is loved</em> by him." ❌</p>
                                                    <p className="label">Rzadko używane, brzmi nienaturalnie</p>
                                                </div>
                                                <div className="correct-example">
                                                    <p>"He <em>loves</em> her." ✅</p>
                                                    <p className="label">Naturalne wyrażenie emocji</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="solution-item">
                                            <strong>want (chcieć)</strong>
                                            <div className="example-comparison">
                                                <div className="incorrect-example">
                                                    <p>"A new phone <em>is wanted</em> by me." ❌</p>
                                                </div>
                                                <div className="correct-example">
                                                    <p>"I <em>want</em> a new phone." ✅</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="solution-item">
                                            <strong>prefer (woleć)</strong>
                                            <div className="example-comparison">
                                                <div className="incorrect-example">
                                                    <p>"Tea <em>is preferred</em> by me to coffee." ❌</p>
                                                </div>
                                                <div className="correct-example">
                                                    <p>"I <em>prefer</em> tea to coffee." ✅</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="missing-tense-expanded">
                                <h5>🎯 Czasowniki zmysłów i postrzegania</h5>
                                <div className="tense-explanation">
                                    <div className="problem">
                                        <span className="icon">❌</span>
                                        <span className="text">Zwykle nie tworzą strony biernej - opisują doznania zmysłowe</span>
                                    </div>

                                    <div className="solutions">
                                        <div className="solution-item">
                                            <strong>see (widzieć)</strong>
                                            <div className="example-comparison">
                                                <div className="incorrect-example">
                                                    <p>"The bird <em>is seen</em> by me." ❌</p>
                                                    <p className="label">Nienaturalne w większości kontekstów</p>
                                                </div>
                                                <div className="correct-example">
                                                    <p>"I <em>see</em> the bird." ✅</p>
                                                    <p className="label">Naturalne wyrażenie percepcji</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="solution-item">
                                            <strong>hear (słyszeć)</strong>
                                            <div className="example-comparison">
                                                <div className="incorrect-example">
                                                    <p>"The music <em>is heard</em> by us." ❌</p>
                                                </div>
                                                <div className="correct-example">
                                                    <p>"We <em>hear</em> the music." ✅</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="solution-item">
                                            <strong>feel (czuć)</strong>
                                            <div className="example-comparison">
                                                <div className="incorrect-example">
                                                    <p>"Happiness <em>is felt</em> by me." ❌</p>
                                                </div>
                                                <div className="correct-example">
                                                    <p>"I <em>feel</em> happy." ✅</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Wyjątki i specjalne przypadki</h4>
                        <div className="special-cases-detailed">
                            <div className="special-case-expanded">
                                <h5>🔄 Czasowniki, które mogą mieć formę bierną w specyficznych kontekstach</h5>
                                <div className="language-comparison">
                                    <div className="language-version">
                                        <h6>Zwykle bez strony biernej:</h6>
                                        <div className="example-box">
                                            <p>"I <em>have</em> a car." (posiadać) ✅</p>
                                            <p>"A car <em>is had</em> by me." ❌</p>
                                        </div>
                                    </div>
                                    <div className="language-version">
                                        <h6>Ale mogą mieć w innych znaczeniach:</h6>
                                        <div className="example-box">
                                            <p>"Dinner <em>is had</em> at 6 PM." (jeść) ✅</p>
                                            <p>"A good time <em>was had</em> by all." (przeżywać) ✅</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="special-case-expanded">
                                <h5>📝 Czasowniki z przyimkami</h5>
                                <div className="usage-comparison">
                                    <div className="usage-type">
                                        <h6>Strona czynna z przyimkiem:</h6>
                                        <div className="example-box">
                                            <p>"They <em>laughed at</em> his joke."</p>
                                            <p>"She <em>looks after</em> the children."</p>
                                        </div>
                                    </div>
                                    <div className="usage-type">
                                        <h6>Strona bierna - przyimek na końcu:</h6>
                                        <div className="example-box">
                                            <p>"His joke <em>was laughed at</em>."</p>
                                            <p>"The children <em>are looked after</em> by her."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🚫 Typowe błędy w stronie biernej</h4>
                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>Błędy w budowie czasowników</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <div className="polish">Zapominanie o "be"</div>
                                        <div className="incorrect">"The letter written yesterday."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"The letter <em>was written</em> yesterday."</div>
                                        <div className="example">Brak operatora "be"</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Błędna forma imiesłowu</div>
                                        <div className="incorrect">"The window was broke."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"The window <em>was broken</em>."</div>
                                        <div className="example">Użycie formy podstawowej zamiast V3</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Podwójne "be" w czasownikach modalnych</div>
                                        <div className="incorrect">"It must be is done."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"It <em>must be done</em>."</div>
                                        <div className="example">Modal + be + V3 (tylko jedno "be")</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-category">
                                <h5>Błędy w użyciu przyimków</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <div className="polish">Niepotrzebne "by"</div>
                                        <div className="incorrect">"English is spoken by everywhere."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"English <em>is spoken everywhere</em>."</div>
                                        <div className="example">"by" tylko dla wykonawców osób</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Błędny przyimek z "by"</div>
                                        <div className="incorrect">"The book was written from Shakespeare."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"The book <em>was written by Shakespeare</em>."</div>
                                        <div className="example">Tylko "by" dla wykonawców</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Pomijanie przyimka w czasownikach frazowych</div>
                                        <div className="incorrect">"The children are looked."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"The children <em>are looked after</em>."</div>
                                        <div className="example">Przyimek jest częścią czasownika</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-category">
                                <h5>Błędy logiczne i stylistyczne</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <div className="polish">Nadużywanie strony biernej</div>
                                        <div className="incorrect">"It is believed by me that..."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"<em>I believe</em> that..."</div>
                                        <div className="example">Strona czynna jest bardziej bezpośrednia</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Używanie z czasownikami stanowymi</div>
                                        <div className="incorrect">"A car is had by me."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"<em>I have</em> a car."</div>
                                        <div className="example">Czasowniki stanowe nie tworzą strony biernej</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Brak spójności czasowej</div>
                                        <div className="incorrect">"The letter is written yesterday."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"The letter <em>was written</em> yesterday."</div>
                                        <div className="example">Czas musi być zgodny z kontekstem</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>💡 Praktyczne wskazówki i dobre praktyki</h4>
                        <div className="practical-tips-detailed">
                            <div className="tip-category">
                                <h5>🎯 Kiedy wybierać stronę bierną?</h5>
                                <div className="tip-list">
                                    <div className="tip-item">
                                        <span className="icon">📊</span>
                                        <div className="tip-content">
                                            <strong>W dokumentach formalnych i naukowych</strong>
                                            <p>"It is recommended that..." zamiast "We recommend that..."</p>
                                            <p className="explanation">Tworzy bardziej obiektywny i profesjonalny ton</p>
                                        </div>
                                    </div>

                                    <div className="tip-item">
                                        <span className="icon">📰</span>
                                        <div className="tip-content">
                                            <strong>W wiadomościach i raportach</strong>
                                            <p>"Three people were injured in the accident."</p>
                                            <p className="explanation">Skupia uwagę na ofiarach, nie na sprawcy</p>
                                        </div>
                                    </div>

                                    <div className="tip-item">
                                        <span className="icon">⚖️</span>
                                        <div className="tip-content">
                                            <strong>W tekstach prawnych i regulaminach</strong>
                                            <p>"All applications must be submitted by the deadline."</p>
                                            <p className="explanation">Podkreśla obowiązek, nie osobę</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tip-category">
                                <h5>🚫 Czego unikać?</h5>
                                <div className="tip-list">
                                    <div className="tip-item">
                                        <span className="icon">🗣️</span>
                                        <div className="tip-content">
                                            <strong>Nadużywania w mowie potocznej</strong>
                                            <p>Strona czynna jest często bardziej naturalna w codziennej rozmowie</p>
                                            <p className="explanation">"I made a mistake" brzmi lepiej niż "A mistake was made by me"</p>
                                        </div>
                                    </div>

                                    <div className="tip-item">
                                        <span className="icon">🔍</span>
                                        <div className="tip-content">
                                            <strong>Ukrywania odpowiedzialności</strong>
                                            <p>Unikaj używania strony biernej do unikania odpowiedzialności</p>
                                            <p className="explanation">"Mistakes were made" zamiast "I made mistakes"</p>
                                        </div>
                                    </div>

                                    <div className="tip-item">
                                        <span className="icon">📝</span>
                                        <div className="tip-content">
                                            <strong>Nadmiernej złożoności</strong>
                                            <p>Proste zdania w stronie czynnej są często bardziej zrozumiałe</p>
                                            <p className="explanation">"The team completed the project" vs "The project was completed by the team"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tip-category">
                                <h5>✅ Sprawdź przed użyciem</h5>
                                <div className="checklist">
                                    <div className="check-item">
                                        <input type="checkbox" checked readOnly />
                                        <span>Czy wykonawca jest nieznany lub nieistotny?</span>
                                    </div>
                                    <div className="check-item">
                                        <input type="checkbox" checked readOnly />
                                        <span>Czy chcę skupić uwagę na czynności, a nie na wykonawcy?</span>
                                    </div>
                                    <div className="check-item">
                                        <input type="checkbox" checked readOnly />
                                        <span>Czy czasownik może tworzyć stronę bierną?</span>
                                    </div>
                                    <div className="check-item">
                                        <input type="checkbox" checked readOnly />
                                        <span>Czy kontekst wymaga formalnego tonu?</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - rozpoznawanie poprawnego użycia</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Które zdania są poprawne, a które zawierają błędy w użyciu strony biernej?</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> Which sentence is CORRECT?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_usage1" value="a" />
                                                <span>A car is had by my brother.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_usage1" value="b" />
                                                <span>My brother has a car.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_usage1" value="c" />
                                                <span>A car was had by my brother yesterday.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"have" w znaczeniu posiadać nie tworzy strony biernej</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> Choose the better option for formal writing:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_usage2" value="c" />
                                                <span>We recommend that all applications be submitted online.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_usage2" value="a" />
                                                <span>It is recommended that all applications be submitted online.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_usage2" value="b" />
                                                <span>All applications should get submitted online by everyone.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Strona bierna jest bardziej formalna i obiektywna</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> Which sentence contains an ERROR?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_usage3" value="a" />
                                                <span>The children are looked after by their grandmother.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_usage3" value="b" />
                                                <span>Chocolate is liked by most children.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_usage3" value="c" />
                                                <span>This book costs $20.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"like" jako czasownik emocji rzadko używany w stronie biernej</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> Choose the most natural sounding sentence:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_usage4" value="c" />
                                                <span>A mistake was made by me in the calculations.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_usage4" value="a" />
                                                <span>I made a mistake in the calculations.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_usage4" value="b" />
                                                <span>The calculations were mistaken by me.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">W mowie potocznej strona czynna jest bardziej naturalna</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> Which sentence is grammatically INCORRECT?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_usage5" value="a" />
                                                <span>The window was broken by someone.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_usage5" value="b" />
                                                <span>She is resembled by her mother.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_usage5" value="c" />
                                                <span>The decision will be made tomorrow.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"resemble" nie tworzy strony biernej</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> Choose the appropriate passive form for a scientific report:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="passive_usage6" value="c" />
                                                <span>We conducted the experiment carefully.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_usage6" value="a" />
                                                <span>The experiment was conducted carefully.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="passive_usage6" value="b" />
                                                <span>I conducted the experiment very carefully.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Strona bierna jest bardziej obiektywna w raportach naukowych</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="exercise-actions">
                                    <button className="btn btn-primary check-answers" disabled>Sprawdź odpowiedzi</button>
                                    <button className="btn btn-secondary reset-exercise" style={{display: 'none'}}>Spróbuj ponownie</button>
                                    <div className="exercise-result"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📊 Podsumowanie - użycie strony biernej</h4>
                        <div className="tense-summary-detailed">
                            <table>
                                <thead>
                                <tr>
                                    <th>Sytuacja</th>
                                    <th>Strona bierna</th>
                                    <th>Strona czynna</th>
                                    <th>Przykład</th>
                                    <th>Uwagi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Wykonawca nieznany</td>
                                    <td className="correct">✅ Zalecana</td>
                                    <td className="incorrect">❌ Niemożliwa</td>
                                    <td>The window was broken.</td>
                                    <td>Naturalny wybór</td>
                                </tr>
                                <tr>
                                    <td>Wykonawca nieistotny</td>
                                    <td className="correct">✅ Dobry wybór</td>
                                    <td className="partial">⚠️ Możliwa</td>
                                    <td>English is spoken here.</td>
                                    <td>Skupia uwagę na fakcie</td>
                                </tr>
                                <tr>
                                    <td>Dokumenty formalne</td>
                                    <td className="correct">✅ Zalecana</td>
                                    <td className="partial">⚠️ Możliwa</td>
                                    <td>It is required that...</td>
                                    <td>Ton obiektywny</td>
                                </tr>
                                <tr>
                                    <td>Mowa potoczna</td>
                                    <td className="partial">⚠️ Ostrożnie</td>
                                    <td className="correct">✅ Zalecana</td>
                                    <td>I made dinner.</td>
                                    <td>Naturalniejsze brzmienie</td>
                                </tr>
                                <tr>
                                    <td>Czasowniki stanowe</td>
                                    <td className="incorrect">❌ Niemożliwa</td>
                                    <td className="correct">✅ Wymagana</td>
                                    <td>I have a car.</td>
                                    <td>Wyjątek gramatyczny</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip success">
                            <h5>💪 Klucz do sukcesu</h5>
                            <p>Pamiętaj: <strong>Strona bierna przenosi uwagę z wykonawcy na czynność</strong>. Używaj jej świadomie - w formalnych kontekstach, gdy wykonawca jest nieznany lub nieistotny, ale unikaj nadużywania w mowie potocznej i z czasownikami stanowymi!</p>
                        </div>
                    </section>
                </>
            ),
        },
    ],
}


function TopicsGrid({ basePath, active }) {
    const topics = TOPICS[active] ?? []
    return (
        <div className="topic-grid" role="list">
            {topics.map(t => (
                <Link key={t.id} to={`${basePath}?topic=${t.id}`} className="topic-card" role="listitem">
                    <h4 className="topic-card__title">{t.title}</h4>
                    <p className="topic-card__excerpt">{t.excerpt}</p>
                    <span className="topic-card__cta">Zobacz szczegóły →</span>
                </Link>
            ))}
        </div>
    )
}

function TopicDetail({ topic, onBack }) {
    useEffect(() => {
        // Dynamiczny import i inicjalizacja skryptu ćwiczeń
        const initializeExercises = async () => {
            try {
                // Importujemy moduł
                const module = await import('../exercise-interactions.js');
                // Wywołujemy funkcję inicjalizującą
                if (module.initializeGrammarExercises) {
                    // Dodajemy małe opóźnienie, aby React miał czas na renderowanie
                    setTimeout(() => {
                        module.initializeGrammarExercises();
                    }, 100);
                }
            } catch (error) {
                console.error('Błąd podczas ładowania skryptu ćwiczeń:', error);
            }
        };

        initializeExercises();

        // Funkcja czyszcząca - resetuje stan przy odmontowywaniu
        return () => {
            // Możesz dodać czyszczenie jeśli potrzeba
        };
    }, [topic]); // Uruchamiaj za każdym razem gdy zmienia się topic

    return (
        <div className="topic-detail">
            <div className="topic-detail__back">
                <Link to={onBack} className="btn-link">← Wróć do listy</Link>
            </div>
            {topic.content()}
        </div>
    );
}

export default function PassiveVoice() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const { lang } = useLanguage()
    const active = section ?? 'simple'
    const topicId = searchParams.get('topic')
    const topics = TOPICS[active] ?? []
    const selected = topics.find(t => t.id === topicId)
    const basePath = `/gramatyka/strona-bierna/${active}`

    useDocumentMeta({
        title: getMetaTitle(lang, active, selected),
        description: getMetaDescription(lang, active, selected),
        canonical: getCanonicalUrl(lang, active, selected),
        og: {
            title: getMetaTitle(lang, active, selected),
            description: getMetaDescription(lang, active, selected),
            image: 'https://angloboost.pl/UK-social.png',
            url: window.location.href
        }
    })

    return (
        <main className="topic-layout">
            <div className="container">
                <header className="topic-header">
                    <h2>Strona bierna</h2>
                    <p className="muted">Formy w Simple, Continuous, Perfect oraz modalne</p>
                </header>

                <nav className="subnav" aria-label="Podstrony: Strona bierna">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/gramatyka/strona-bierna/${s.id}`}
                            className={({ isActive }) => `subnav__item${isActive ? ' subnav__item--active' : ''}`}
                        >
                            <span className="subnav__title">{s.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <article className="topic-content">
                    {selected ? (
                        <TopicDetail topic={selected} onBack={basePath} />
                    ) : (
                        <>
                            <p className="muted">Wybierz temat, aby przejść do szczegółowego opisu.</p>
                            <TopicsGrid basePath={basePath} active={active} />
                        </>
                    )}
                </article>
            </div>
        </main>
    )
}

function getMetaTitle(lang, activeSection, selectedTopic) {
    const sectionTitles = {
        pl: {
            'simple': 'Strona bierna w czasach Simple - formy i użycie',
            'continuous': 'Strona bierna w czasach Continuous - formy i użycie',
            'perfect': 'Strona bierna w czasach Perfect - formy i użycie',
            'modals': 'Strona bierna z czasownikami modalnymi',
            'uzycie-wyjatki': 'Strona bierna - użycie i wyjątki'
        },
        en: {
            'simple': 'Passive Voice in Simple Tenses - Forms and Usage',
            'continuous': 'Passive Voice in Continuous Tenses - Forms and Usage',
            'perfect': 'Passive Voice in Perfect Tenses - Forms and Usage',
            'modals': 'Passive Voice with Modal Verbs',
            'uzycie-wyjatki': 'Passive Voice - Usage and Exceptions'
        }
    }

    if (selectedTopic) {
        const topicTitle = lang === 'pl' ? selectedTopic.title : getEnglishTopicTitle(selectedTopic.id)
        return `${topicTitle} — AngloBoost`
    }

    const baseTitle = sectionTitles[lang]?.[activeSection] || sectionTitles.pl[activeSection]
    return lang === 'pl'
        ? `${baseTitle} — AngloBoost`
        : `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang, activeSection, selectedTopic) {
    const sectionDescriptions = {
        pl: {
            'simple': 'Strona bierna w czasach Simple: Present, Past, Future Simple Passive. Zasady budowy, przykłady, ćwiczenia. Kompletny przewodnik.',
            'continuous': 'Strona bierna w czasach Continuous: Present i Past Continuous Passive. Czynności w trakcie, wyjątki, praktyczne zastosowania.',
            'perfect': 'Strona bierna w czasach Perfect: Present, Past, Future Perfect Passive. Rezultaty czynności, związki czasowe, zaawansowane użycie.',
            'modals': 'Strona bierna z czasownikami modalnymi: must be done, can be seen, should be considered. Zasady budowy i przykłady.',
            'uzycie-wyjatki': 'Strona bierna - użycie i wyjątki: kiedy używać, czasowniki bez form biernych, typowe błędy, praktyczne wskazówki.'
        },
        en: {
            'simple': 'Passive voice in Simple tenses: Present, Past, Future Simple Passive. Construction rules, examples, exercises. Complete guide.',
            'continuous': 'Passive voice in Continuous tenses: Present and Past Continuous Passive. Ongoing actions, exceptions, practical applications.',
            'perfect': 'Passive voice in Perfect tenses: Present, Past, Future Perfect Passive. Action results, time relationships, advanced usage.',
            'modals': 'Passive voice with modal verbs: must be done, can be seen, should be considered. Construction rules and examples.',
            'uzycie-wyjatki': 'Passive voice - usage and exceptions: when to use, verbs without passive forms, common mistakes, practical tips.'
        }
    }

    if (selectedTopic) {
        return lang === 'pl'
            ? `${selectedTopic.excerpt} Szczegółowe wyjaśnienia i przykłady.`
            : `${getEnglishTopicExcerpt(selectedTopic.id)} Detailed explanations and examples.`
    }

    return sectionDescriptions[lang]?.[activeSection] || sectionDescriptions.pl[activeSection]
}

function getCanonicalUrl(lang, activeSection, selectedTopic) {
    const baseUrl = lang === 'pl'
        ? `https://angloboost.pl/pl/gramatyka/strona-bierna/${activeSection}`
        : `https://angloboost.pl/en/grammar/passive-voice/${activeSection}`

    if (selectedTopic) {
        return `${baseUrl}?topic=${selectedTopic.id}`
    }

    return baseUrl
}

function getEnglishTopicTitle(topicId) {
    const englishTitles = {
        'passive-simple-forms-comprehensive': 'Forms in Simple Tenses 🎯',
        'passive-cont-forms-comprehensive': 'Forms in Continuous Tenses 🔄',
        'passive-perfect-forms-comprehensive': 'Forms in Perfect Tenses ✅',
        'passive-usage-exceptions-comprehensive': 'Usage and Exceptions ⚠️'
    }
    return englishTitles[topicId] || 'Passive Voice'
}

function getEnglishTopicExcerpt(topicId) {
    const englishExcerpts = {
        'passive-simple-forms-comprehensive': 'Complete guide: be + past participle - rules, usage, exceptions and practical examples.',
        'passive-cont-forms-comprehensive': 'Complete guide: be being + V3 - ongoing actions, processes, exceptions and practical applications.',
        'passive-perfect-forms-comprehensive': 'Complete guide: have been + V3 - action results, time relationships, advanced usage.',
        'passive-usage-exceptions-comprehensive': 'Complete guide: when to use passive voice, verbs without passive forms, common mistakes and practical tips.'
    }
    return englishExcerpts[topicId] || 'Passive voice guide with examples.'
}