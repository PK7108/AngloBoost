import React from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import '../../styles/topic-cards.css'

const sections = [
    { id: 'zero', label: 'Zerowy' },
    { id: 'first', label: 'Pierwszy' },
    { id: 'second', label: 'Drugi' },
    { id: 'third', label: 'Trzeci' },
    { id: 'mixed', label: 'Mieszane' },
]

const TOPICS = {
    zero: [
        {
            id: 'zero-form-comprehensive',
            title: 'Zero Conditional - Pełny przewodnik 🎯',
            excerpt: 'Kompletny przewodnik: If + Present, Present - fakty naukowe, ogólne prawdy, nawyki i praktyczne zastosowania.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Zero Conditional - Kompletny przewodnik</h3>
                        <p className="muted">Opisuje ogólne prawdy, fakty naukowe i sytuacje, które zawsze mają ten sam rezultat</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Fundamentalne zasady budowy</h4>
                                <div className="construction-formula-detailed">
                                    <div className="formula-breakdown">
                                        <span className="part condition">IF + PRESENT SIMPLE</span>
                                        <span className="operator">,</span>
                                        <span className="part result">PRESENT SIMPLE</span>
                                    </div>
                                </div>

                                <div className="rules-list-detailed">
                                    <div className="rule-item-expanded">
                                        <h5>🎯 Kluczowa charakterystyka</h5>
                                        <div className="comparison-grid">
                                            <div className="comparison-item">
                                                <h6>100% Pewność</h6>
                                                <p>Opisuje sytuacje, które <strong>zawsze</strong> mają ten sam rezultat</p>
                                                <p className="example">"If you heat water to 100°C, it boils."</p>
                                                <p className="explanation">(Zawsze się gotuje)</p>
                                            </div>
                                            <div className="comparison-item">
                                                <h6>Ogólne Prawdy</h6>
                                                <p>Dotyczy faktów naukowych i uniwersalnych zasad</p>
                                                <p className="example">"If you don't eat, you get hungry."</p>
                                                <p className="explanation">(Uniwersalna prawda)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-item-expanded">
                                        <h5>🔄 Elastyczność kolejności</h5>
                                        <div className="omission-cases">
                                            <div className="case">
                                                <strong>If na początku:</strong>
                                                <p>"<em>If you heat ice</em>, it melts."</p>
                                                <p className="explanation">Używamy przecinka</p>
                                            </div>
                                            <div className="case">
                                                <strong>If na końcu:</strong>
                                                <p>"Ice melts <em>if you heat it</em>."</p>
                                                <p className="explanation">Bez przecinka</p>
                                            </div>
                                            <div className="case">
                                                <strong>Zamienne "when":</strong>
                                                <p>"<em>When you heat ice</em>, it melts."</p>
                                                <p className="explanation">To samo znaczenie</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Główne zastosowania</h4>
                                <div className="tense-details">
                                    <div className="usage-context">
                                        <h5>Kiedy używamy?</h5>
                                        <div className="context-list">
                                            <div className="context-item">
                                                <span className="icon">🔬</span>
                                                <span className="text">Fakty naukowe i przyrodnicze</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🌍</span>
                                                <span className="text">Ogólne prawdy i zasady</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🔄</span>
                                                <span className="text">Nawyki i regularne sytuacje</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">📋</span>
                                                <span className="text">Instrukcje i procedury</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">⚡</span>
                                                <span className="text">Reakcje automatyczne</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📚 Zero Conditional - Praktyczne przykłady</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🔬 Fakty naukowe</h5>
                                <div className="example-group-expanded">
                                    <p>"If you mix red and blue, you get purple." - Jeśli zmieszasz czerwony i niebieski, dostaniesz fiolet.</p>
                                    <p>"When water reaches 0°C, it freezes." - Kiedy woda osiąga 0°C, zamarza.</p>
                                    <p>"If plants don't get enough sunlight, they die." - Jeśli rośliny nie dostają wystarczająco światła, umierają.</p>
                                    <p>"When you drop an object, it falls to the ground." - Kiedy upuścisz przedmiot, spada na ziemię.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🌍 Ogólne prawdy życiowe</h5>
                                <div className="example-group-expanded">
                                    <p>"If you don't eat, you get hungry." - Jeśli nie jesz, robisz się głodny.</p>
                                    <p>"When people exercise regularly, they feel better." - Kiedy ludzie regularnie ćwiczą, czują się lepiej.</p>
                                    <p>"If you work hard, you achieve your goals." - Jeśli ciężko pracujesz, osiągasz swoje cele.</p>
                                    <p>"When you save money, you have financial security." - Kiedy oszczędzasz pieniądze, masz bezpieczeństwo finansowe.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>📋 Instrukcje i procedury</h5>
                                <div className="example-group-expanded">
                                    <p>"If the light turns red, you stop the car." - Jeśli światło zrobi się czerwone, zatrzymujesz samochód.</p>
                                    <p>"When you finish the test, you hand it to the teacher." - Kiedy skończysz test, oddajesz go nauczycielowi.</p>
                                    <p>"If you feel sick, you see a doctor." - Jeśli czujesz się chory, idziesz do lekarza.</p>
                                    <p>"When the alarm rings, you leave the building." - Kiedy alarm zadzwoni, opuszczasz budynek.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔄 Wariacje i alternatywne formy</h4>
                        <div className="tense-details">
                            <div className="tense-structure">
                                <h5>Z czasownikami modalnymi</h5>
                                <div className="structure-examples">
                                    <div className="example-item">
                                        <span className="label">should (rada)</span>
                                        <span className="form">If you're tired, you should rest.</span>
                                    </div>
                                    <div className="example-item">
                                        <span className="label">can (możliwość)</span>
                                        <span className="form">If you have time, you can help me.</span>
                                    </div>
                                    <div className="example-item">
                                        <span className="label">must (obowiązek)</span>
                                        <span className="form">If you see fire, you must call emergency.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="usage-context">
                                <h5>Inne konstrukcje czasowe</h5>
                                <div className="context-list">
                                    <div className="context-item">
                                        <span className="icon">🔄</span>
                                        <span className="text">Present Continuous - dla czynności w trakcie</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">✅</span>
                                        <span className="text">Present Perfect - dla ukończonych działań</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">👑</span>
                                        <span className="text">Tryb rozkazujący - dla instrukcji</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🔄 Present Continuous</h5>
                                <div className="example-group-expanded">
                                    <p>"If you're driving, you don't use your phone." - Jeśli prowadzisz samochód, nie używasz telefonu.</p>
                                    <p>"When it's raining, people carry umbrellas." - Kiedy pada deszcz, ludzie noszą parasole.</p>
                                    <p>"If you're studying for an exam, you need quiet." - Jeśli uczysz się do egzaminu, potrzebujesz ciszy.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>👑 Tryb rozkazujący</h5>
                                <div className="example-group-expanded">
                                    <p>"If you see Anna, tell her to call me." - Jeśli zobaczysz Annę, powiedz jej żeby do mnie zadzwoniła.</p>
                                    <p>"When the phone rings, answer it politely." - Kiedy telefon dzwoni, odebierz go uprzejmie.</p>
                                    <p>"If you feel dizzy, sit down immediately." - Jeśli czujesz zawroty głowy, usiądź natychmiast.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚡ Różnice: Zero vs First Conditional</h4>
                        <div className="meaning-comparison">
                            <div className="comparison-scenario">
                                <h5>Scenario: Reakcja na temperaturę</h5>
                                <div className="contrast-examples">
                                    <div className="zero-example">
                                        <h6>Zero Conditional</h6>
                                        <p>"If you heat water to 100°C, it boils."</p>
                                        <p className="meaning">(Fakt naukowy - zawsze prawdziwe)</p>
                                        <p className="time-context">100% Pewność: ✓</p>
                                    </div>
                                    <div className="first-example">
                                        <h6>First Conditional</h6>
                                        <p>"If it rains tomorrow, we will cancel the picnic."</p>
                                        <p className="meaning">(Możliwa sytuacja w przyszłości)</p>
                                        <p className="time-context">Prawdopodobieństwo: ✓</p>
                                    </div>
                                </div>
                            </div>

                            <div className="comparison-scenario">
                                <h5>Scenario: Reakcje organizmu</h5>
                                <div className="contrast-examples">
                                    <div className="zero-example">
                                        <h6>Zero Conditional</h6>
                                        <p>"If you don't sleep enough, you feel tired."</p>
                                        <p className="meaning">(Ogólna prawda biologiczna)</p>
                                        <p className="time-context">Uniwersalna zasada: ✓</p>
                                    </div>
                                    <div className="first-example">
                                        <h6>First Conditional</h6>
                                        <p>"If I don't sleep well tonight, I will be tired tomorrow."</p>
                                        <p className="meaning">(Konkretna sytuacja)</p>
                                        <p className="time-context">Określony czas: ✓</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Specjalne zastosowania w różnych kontekstach</h4>
                        <div className="special-cases-detailed">
                            <div className="special-case-expanded">
                                <h5>🔬 Język naukowy i techniczny</h5>
                                <div className="language-comparison">
                                    <div className="language-version">
                                        <h6>Fizyka i chemia:</h6>
                                        <div className="example-box">
                                            <p>"If you apply force to an object, it accelerates."</p>
                                            <p>"When you combine sodium and chlorine, you get salt."</p>
                                        </div>
                                    </div>
                                    <div className="language-version">
                                        <h6>Biologia i medycyna:</h6>
                                        <div className="example-box">
                                            <p>"If you expose skin to sunlight, it produces vitamin D."</p>
                                            <p>"When the body temperature rises, you sweat."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="special-case-expanded">
                                <h5>💼 Biznes i przepisy</h5>
                                <div className="usage-comparison">
                                    <div className="usage-type">
                                        <h6>Procedury firmowe:</h6>
                                        <div className="example-box">
                                            <p>"If an employee is late three times, they receive a warning."</p>
                                            <p>"When the sales exceed target, the team gets a bonus."</p>
                                        </div>
                                    </div>
                                    <div className="usage-type">
                                        <h6>Przepisy prawne:</h6>
                                        <div className="example-box">
                                            <p>"If you drive above the speed limit, you pay a fine."</p>
                                            <p>"When you import goods, you declare them at customs."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🚫 Typowe błędy i jak ich unikać</h4>
                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>Błędy w doborze czasów</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <div className="polish">Użycie "will" w warunku</div>
                                        <div className="incorrect">"If water will reach 100°C, it boils."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If water reaches 100°C, it boils."</div>
                                        <div className="example">W Zero Conditional NIGDY nie używamy "will" po "if"</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Mieszanie z First Conditional</div>
                                        <div className="incorrect">"If you heat ice, it will melt."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If you heat ice, it melts."</div>
                                        <div className="example">Dla faktów używamy Present Simple w obu częściach</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Błędny przecinek</div>
                                        <div className="incorrect">"Ice melts, if you heat it."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"Ice melts if you heat it."</div>
                                        <div className="example">Przecinek tylko gdy "if" na początku zdania</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-category">
                                <h5>Błędy logiczne</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <div className="polish">Użycie dla konkretnych sytuacji</div>
                                        <div className="incorrect">"If it rains now, I take an umbrella."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If it rains, I take an umbrella."</div>
                                        <div className="example">Zero Conditional opisuje ogólne zasady, nie konkretne sytuacje</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Stosowanie dla hipotetycznych sytuacji</div>
                                        <div className="incorrect">"If I were president, I change the law."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If I am president, I change the law."</div>
                                        <div className="example">Dla hipotetycznych sytuacji używamy Second Conditional</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę Zero Conditional:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> What happens when you ______ ice?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="zero1" value="a" />
                                                <span>heat</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero1" value="b" />
                                                <span>will heat</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero1" value="c" />
                                                <span>heated</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Present Simple - opis faktu naukowego</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> If people ______ regularly, they ______ healthier.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="zero2" value="a" />
                                                <span>exercise, feel</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero2" value="b" />
                                                <span>will exercise, feel</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero2" value="c" />
                                                <span>exercise, will feel</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Present Simple w obu częściach - ogólna prawda</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> When the traffic light ______ red, cars ______.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="zero3" value="a" />
                                                <span>turns, stop</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero3" value="b" />
                                                <span>turn, stops</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero3" value="c" />
                                                <span>will turn, stop</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Opis standardowej procedury</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> If you ______ plants, they ______.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="zero4" value="a" />
                                                <span>don't water, die</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero4" value="b" />
                                                <span>won't water, die</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero4" value="c" />
                                                <span>don't water, will die</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Fakt biologiczny - Present Simple</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> If you ______ red and blue, you ______ purple.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="zero5" value="a" />
                                                <span>mix, get</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero5" value="b" />
                                                <span>will mix, get</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero5" value="c" />
                                                <span>mix, will get</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Fakt naukowy - zawsze prawdziwe</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> When water ______ 0°C, it ______.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="zero6" value="a" />
                                                <span>reaches, freezes</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero6" value="b" />
                                                <span>will reach, freezes</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero6" value="c" />
                                                <span>reaches, will freeze</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Zjawisko fizyczne - Present Simple</div>
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
                        <h4>📊 Podsumowanie Zero Conditional</h4>
                        <div className="tense-summary-detailed">
                            <table>
                                <thead>
                                <tr>
                                    <th>Zastosowanie</th>
                                    <th>Budowa</th>
                                    <th>Przykład</th>
                                    <th>Uwagi</th>
                                    <th>Cechy</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Fakty naukowe</td>
                                    <td>If + Present, Present</td>
                                    <td>If you heat water, it boils.</td>
                                    <td>Zawsze prawdziwe</td>
                                    <td>🔬 100% Pewność</td>
                                </tr>
                                <tr>
                                    <td>Ogólne prawdy</td>
                                    <td>If + Present, Present</td>
                                    <td>If you don't eat, you get hungry.</td>
                                    <td>Uniwersalne zasady</td>
                                    <td>🌍 Uniwersalne</td>
                                </tr>
                                <tr>
                                    <td>Nawyki</td>
                                    <td>If + Present, Present</td>
                                    <td>If I wake up early, I go running.</td>
                                    <td>Regularne sytuacje</td>
                                    <td>🔄 Powtarzalne</td>
                                </tr>
                                <tr>
                                    <td>Instrukcje</td>
                                    <td>If + Present, Present/Imperative</td>
                                    <td>If the alarm rings, leave the building.</td>
                                    <td>Procedury</td>
                                    <td>📋 Proceduralne</td>
                                </tr>
                                <tr>
                                    <td>Reakcje automatyczne</td>
                                    <td>When + Present, Present</td>
                                    <td>When you touch fire, it burns.</td>
                                    <td>"when" = "if"</td>
                                    <td>⚡ Automatyczne</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip success">
                            <h5>💡 Klucz do sukcesu</h5>
                            <p>Pamiętaj: <strong>Zero Conditional opisuje sytuacje, które ZAWSZE mają ten sam rezultat</strong>. Używaj go dla faktów naukowych, ogólnych prawd, nawyków i instrukcji. Present Simple w obu częściach zdania gwarantuje wyrażenie 100% pewności!</p>
                        </div>
                    </section>
                </>
            ),
        },
        {
            id: 'zero-variations-comprehensive',
            title: 'Wariacje i wyjątki 🔧',
            excerpt: 'Kompletny przewodnik: czasowniki modalne, alternatywne konstrukcje, zmiana kolejności zdań i specjalne przypadki użycia.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Zero Conditional - Wariacje i wyjątki</h3>
                        <p className="muted">Poznaj zaawansowane konstrukcje, czasowniki modalne i specjalne przypadki użycia w zerowym okresie warunkowym</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Rozszerzone zasady budowy</h4>
                                <div className="construction-formula-detailed">
                                    <div className="formula-breakdown">
                                        <span className="part condition">IF + PRESENT SIMPLE</span>
                                        <span className="operator">,</span>
                                        <span className="part modal">MODAL VERB</span>
                                        <span className="operator">+</span>
                                        <span className="part base">BEZOKOLICZNIK</span>
                                    </div>
                                </div>

                                <div className="rules-list-detailed">
                                    <div className="rule-item-expanded">
                                        <h5>🎯 Elastyczność konstrukcji</h5>
                                        <div className="comparison-grid">
                                            <div className="comparison-item">
                                                <h6>Podstawowa forma</h6>
                                                <p>Present Simple w obu częściach</p>
                                                <p className="example">"If you heat ice, it melts."</p>
                                                <p className="explanation">(Czysty fakt)</p>
                                            </div>
                                            <div className="comparison-item">
                                                <h6>Z czasownikami modalnymi</h6>
                                                <p>Present Simple + modal verb</p>
                                                <p className="example">"If you're tired, you should rest."</p>
                                                <p className="explanation">(Rada/sugestia)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-item-expanded">
                                        <h5>🔄 Uniwersalna kolejność</h5>
                                        <div className="omission-cases">
                                            <div className="case">
                                                <strong>Warunek na początku:</strong>
                                                <p>"<em>If you study hard</em>, you get good grades."</p>
                                                <p className="explanation">Przecinek obowiązkowy</p>
                                            </div>
                                            <div className="case">
                                                <strong>Warunek na końcu:</strong>
                                                <p>"You get good grades <em>if you study hard</em>."</p>
                                                <p className="explanation">Bez przecinka</p>
                                            </div>
                                            <div className="case">
                                                <strong>Znaczenie identyczne:</strong>
                                                <p>"Oba zdania mają <em>identyczne znaczenie</em>"</p>
                                                <p className="explanation">Różni się tylko emfaza</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Rodzaje wariacji</h4>
                                <div className="tense-details">
                                    <div className="usage-context">
                                        <h5>Główne typy modyfikacji</h5>
                                        <div className="context-list">
                                            <div className="context-item">
                                                <span className="icon">🔧</span>
                                                <span className="text">Czasowniki modalne</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🔄</span>
                                                <span className="text">Zmiana kolejności zdań</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">⚡</span>
                                                <span className="text">Tryb rozkazujący</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">📊</span>
                                                <span className="text">Inne czasy present</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🎯</span>
                                                <span className="text">Konstrukcje z "when"</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔧 Czasowniki modalne w Zero Conditional</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>💡 Should - rady i rekomendacje</h5>
                                <div className="example-group-expanded">
                                    <p>"If you want to improve your health, you should exercise regularly." - Jeśli chcesz poprawić swoje zdrowie, powinieneś regularnie ćwiczyć.</p>
                                    <p>"If you feel stressed, you should try meditation." - Jeśli czujesz się zestresowany, powinieneś spróbować medytacji.</p>
                                    <p>"If the computer freezes, you should restart it." - Jeśli komputer się zawiesza, powinieneś go zrestartować.</p>
                                    <p>"If you have a headache, you should drink more water." - Jeśli masz ból głowy, powinieneś pić więcej wody.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🔑 Can - możliwości i umiejętności</h5>
                                <div className="example-group-expanded">
                                    <p>"If you have a library card, you can borrow books for free." - Jeśli masz kartę biblioteczną, możesz wypożyczać książki za darmo.</p>
                                    <p>"If the weather is nice, we can have a picnic in the park." - Jeśli pogoda jest ładna, możemy urządzić piknik w parku.</p>
                                    <p>"If you know the password, you can access the system." - Jeśli znasz hasło, możesz uzyskać dostęp do systemu.</p>
                                    <p>"If you finish early, you can leave the office." - Jeśli skończysz wcześniej, możesz wyjść z biura.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>⚡ Must - obowiązki i konieczność</h5>
                                <div className="example-group-expanded">
                                    <p>"If you see a fire alarm, you must evacuate the building." - Jeśli zobaczysz alarm pożarowy, musisz ewakuować budynek.</p>
                                    <p>"If you want to drive, you must have a valid license." - Jeśli chcesz prowadzić samochód, musisz mieć ważne prawo jazdy.</p>
                                    <p>"If the temperature drops below zero, you must wear warm clothes." - Jeśli temperatura spadnie poniżej zera, musisz nosić ciepłe ubrania.</p>
                                    <p>"If you work with chemicals, you must wear protective gear." - Jeśli pracujesz z chemikaliami, musisz nosić odzież ochronną.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔄 Alternatywne konstrukcje czasowe</h4>
                        <div className="tense-details">
                            <div className="tense-structure">
                                <h5>Present Continuous - czynności w trakcie</h5>
                                <div className="structure-examples">
                                    <div className="example-item">
                                        <span className="label">Opis stanu</span>
                                        <span className="form">If you're driving, you don't use your phone.</span>
                                    </div>
                                    <div className="example-item">
                                        <span className="label">Czynność trwająca</span>
                                        <span className="form">If it's raining, people carry umbrellas.</span>
                                    </div>
                                    <div className="example-item">
                                        <span className="label">Tymczasowa sytuacja</span>
                                        <span className="form">If you're studying, you need quiet.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="usage-context">
                                <h5>Present Perfect - ukończone działania</h5>
                                <div className="context-list">
                                    <div className="context-item">
                                        <span className="icon">✅</span>
                                        <span className="text">Doświadczenie życiowe</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">📅</span>
                                        <span className="text">Niedawne ukończenie</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">🔗</span>
                                        <span className="text">Związek z teraźniejszością</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🔄 Present Continuous</h5>
                                <div className="example-group-expanded">
                                    <p>"If you're cooking dinner, you need to concentrate." - Jeśli gotujesz obiad, musisz się skoncentrować.</p>
                                    <p>"When people are exercising, they breathe heavily." - Kiedy ludzie ćwiczą, ciężko oddychają.</p>
                                    <p>"If the baby is sleeping, we keep quiet." - Jeśli dziecko śpi, zachowujemy ciszę.</p>
                                    <p>"When students are taking an exam, they can't talk." - Kiedy studenci zdają egzamin, nie mogą rozmawiać.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>✅ Present Perfect</h5>
                                <div className="example-group-expanded">
                                    <p>"If you've finished your work, you can go home." - Jeśli skończyłeś pracę, możesz iść do domu.</p>
                                    <p>"When you've seen one episode, you want to watch more." - Kiedy obejrzysz jeden odcinek, chcesz oglądać więcej.</p>
                                    <p>"If you've visited Paris, you know about the Eiffel Tower." - Jeśli odwiedziłeś Paryż, wiesz o Wieży Eiffla.</p>
                                    <p>"When you've tried this coffee, you understand why it's special." - Kiedy spróbujesz tej kawy, rozumiesz dlaczego jest wyjątkowa.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚡ Tryb rozkazujący w Zero Conditional</h4>
                        <div className="special-cases-detailed">
                            <div className="special-case-expanded">
                                <h5>👑 Instrukcje bezpośrednie</h5>
                                <div className="language-comparison">
                                    <div className="language-version">
                                        <h6>Z Present Simple:</h6>
                                        <div className="example-box">
                                            <p>"If you see Anna, you tell her to call me."</p>
                                            <p>"If the phone rings, you answer it politely."</p>
                                        </div>
                                    </div>
                                    <div className="language-version">
                                        <h6>Z trybem rozkazującym:</h6>
                                        <div className="example-box">
                                            <p>"If you see Anna, <em>tell her to call me</em>."</p>
                                            <p>"If the phone rings, <em>answer it politely</em>."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="special-case-expanded">
                                <h5>📋 Procedury i protokoły</h5>
                                <div className="usage-comparison">
                                    <div className="usage-type">
                                        <h6>Bezpośrednie instrukcje:</h6>
                                        <div className="example-box">
                                            <p>"If you smell gas, <em>leave the building immediately</em>."</p>
                                            <p>"When the alarm sounds, <em>proceed to the nearest exit</em>."</p>
                                        </div>
                                    </div>
                                    <div className="usage-type">
                                        <h6>Zakazy i ostrzeżenia:</h6>
                                        <div className="example-box">
                                            <p>"If you see this symbol, <em>do not touch the equipment</em>."</p>
                                            <p>"When the light is red, <em>stop the machine</em>."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>👑 Praktyczne zastosowania trybu rozkazującego</h5>
                                <div className="example-group-expanded">
                                    <p>"If you feel dizzy, <em>sit down immediately</em>." - Jeśli czujesz zawroty głowy, usiądź natychmiast.</p>
                                    <p>"When you finish the test, <em>hand it to the teacher</em>." - Kiedy skończysz test, oddaj go nauczycielowi.</p>
                                    <p>"If you see anything suspicious, <em>call security</em>." - Jeśli zobaczysz coś podejrzanego, zadzwoń do ochrony.</p>
                                    <p>"When the timer beeps, <em>remove the food from the oven</em>." - Kiedy timer zapiszczy, wyjmij jedzenie z piekarnika.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔄 Elastyczność kolejności zdań</h4>
                        <div className="meaning-comparison">
                            <div className="comparison-scenario">
                                <h5>Scenario: Zależność między nauką a wynikami</h5>
                                <div className="contrast-examples">
                                    <div className="zero-example">
                                        <h6>Warunek na początku</h6>
                                        <p>"<em>If you study hard</em>, you get good grades."</p>
                                        <p className="meaning">(Podkreśla warunek - nacisk na naukę)</p>
                                        <p className="time-context">Przecinek: ✓</p>
                                    </div>
                                    <div className="first-example">
                                        <h6>Warunek na końcu</h6>
                                        <p>"You get good grades <em>if you study hard</em>."</p>
                                        <p className="meaning">(Podkreśla rezultat - nacisk na oceny)</p>
                                        <p className="time-context">Przecinek: ✗</p>
                                    </div>
                                </div>
                            </div>

                            <div className="comparison-scenario">
                                <h5>Scenario: Reakcja na temperaturę</h5>
                                <div className="contrast-examples">
                                    <div className="zero-example">
                                        <h6>Warunek na początku</h6>
                                        <p>"<em>If the temperature drops below zero</em>, water freezes."</p>
                                        <p className="meaning">(Nacisk na warunek temperaturowy)</p>
                                    </div>
                                    <div className="first-example">
                                        <h6>Warunek na końcu</h6>
                                        <p>"Water freezes <em>if the temperature drops below zero</em>."</p>
                                        <p className="meaning">(Nacisk na zjawisko zamarzania)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip warning">
                            <h5>⚠️ Ważna uwaga o przecinku</h5>
                            <p><strong>Przecinek jest OBLIGATORYJNY tylko gdy zdanie z "if" jest na początku!</strong> Gdy "if" jest w środku lub na końcu zdania, przecinka NIE stawiamy.</p>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Specjalne przypadki i wyjątki</h4>
                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>Konstrukcje z "when" vs "if"</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <div className="polish">Zamienne użycie</div>
                                        <div className="incorrect">"When you heat ice, it will melt."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"When you heat ice, it melts."</div>
                                        <div className="example">W Zero Conditional "when" i "if" są często zamienne</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Subtelną różnica</div>
                                        <div className="comparison">
                                            <p>"When the sun sets, it gets dark." (zawsze)</p>
                                            <p>"If the sun sets, it gets dark." (też zawsze, ale mniej naturalne)</p>
                                        </div>
                                        <div className="example">"when" sugeruje większą pewność niż "if"</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-category">
                                <h5>Konstrukcje z czasownikami stanowymi</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <div className="polish">Czasowniki percepcji</div>
                                        <div className="comparison">
                                            <p>"If you see smoke, there is fire."</p>
                                            <p>"When you hear thunder, lightning has struck."</p>
                                        </div>
                                        <div className="example">Czasowniki zmysłów w Zero Conditional</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Czasowniki posiadania</div>
                                        <div className="comparison">
                                            <p>"If you have a ticket, you can enter."</p>
                                            <p>"When you own a car, you need insurance."</p>
                                        </div>
                                        <div className="example">"have" i "own" w kontekście warunkowym</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - rozpoznawanie wariacji</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Które zdania poprawnie używają wariacji Zero Conditional?</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> Wybierz poprawne zdanie z czasownikiem modalnym:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="zero_var1" value="a" />
                                                <span>If you want to be healthy, you should eat vegetables.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero_var1" value="b" />
                                                <span>If you will want to be healthy, you should eat vegetables.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero_var1" value="c" />
                                                <span>If you wanted to be healthy, you should eat vegetables.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Present Simple + "should" - poprawna konstrukcja</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> Które zdanie ma poprawną kolejność?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="zero_var2" value="a" />
                                                <span>If you exercise regularly, you feel better.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero_var2" value="b" />
                                                <span>You feel better, if you exercise regularly.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero_var2" value="c" />
                                                <span>You feel better if, you exercise regularly.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Gdy "if" na końcu, nie używamy przecinka</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> Wybierz poprawne użycie trybu rozkazującego:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="zero_var3" value="a" />
                                                <span>If you see fire, call the fire department.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero_var3" value="b" />
                                                <span>If you see fire, you call the fire department.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero_var3" value="c" />
                                                <span>If you will see fire, call the fire department.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Present Simple + tryb rozkazujący - instrukcja</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> Które zdanie używa Present Continuous poprawnie?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="zero_var4" value="a" />
                                                <span>If you're driving, you don't use your phone.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero_var4" value="b" />
                                                <span>If you drive, you're not using your phone.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero_var4" value="c" />
                                                <span>If you'll be driving, you don't use your phone.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Present Continuous opisuje czynność w trakcie</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> Wybierz poprawne użycie "can":</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="zero_var5" value="a" />
                                                <span>If you have a ticket, you can enter the concert.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero_var5" value="b" />
                                                <span>If you will have a ticket, you can enter the concert.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero_var5" value="c" />
                                                <span>If you have a ticket, you will can enter the concert.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"can" wyraża możliwość w Zero Conditional</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> Które zdanie poprawnie używa "must":</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="zero_var6" value="a" />
                                                <span>If you see a fire alarm, you must evacuate.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero_var6" value="b" />
                                                <span>If you will see a fire alarm, you must evacuate.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero_var6" value="c" />
                                                <span>If you see a fire alarm, you must to evacuate.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"must" wyraża obowiązek w Zero Conditional</div>
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
                        <h4>📊 Podsumowanie wariacji Zero Conditional</h4>
                        <div className="tense-summary-detailed">
                            <table>
                                <thead>
                                <tr>
                                    <th>Wariacja</th>
                                    <th>Budowa</th>
                                    <th>Przykład</th>
                                    <th>Zastosowanie</th>
                                    <th>Uwagi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Czasowniki modalne</td>
                                    <td>If + Present, modal + base</td>
                                    <td>If you're tired, you should rest.</td>
                                    <td>Rady i możliwości</td>
                                    <td>🔧 Elastyczność</td>
                                </tr>
                                <tr>
                                    <td>Present Continuous</td>
                                    <td>If + Pres. Continuous, Present</td>
                                    <td>If you're driving, don't text.</td>
                                    <td>Czynności w trakcie</td>
                                    <td>🔄 Trwanie</td>
                                </tr>
                                <tr>
                                    <td>Present Perfect</td>
                                    <td>If + Pres. Perfect, Present</td>
                                    <td>If you've finished, you can go.</td>
                                    <td>Ukończone działania</td>
                                    <td>✅ Kompletność</td>
                                </tr>
                                <tr>
                                    <td>Tryb rozkazujący</td>
                                    <td>If + Present, imperative</td>
                                    <td>If you see fire, call 911.</td>
                                    <td>Instrukcje bezpośrednie</td>
                                    <td>👑 Nakazy</td>
                                </tr>
                                <tr>
                                    <td>Zmiana kolejności</td>
                                    <td>Result + if + condition</td>
                                    <td>Water boils if you heat it.</td>
                                    <td>Zmiana emfazy</td>
                                    <td>🔄 Elastyczność</td>
                                </tr>
                                <tr>
                                    <td>Zamienne "when"</td>
                                    <td>When + Present, Present</td>
                                    <td>When water freezes, it expands.</td>
                                    <td>Większa pewność</td>
                                    <td>🎯 Pewność</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip success">
                            <h5>💡 Klucz do zaawansowanego użycia</h5>
                            <p>Pamiętaj: <strong>Zero Conditional oferuje wiele elastycznych konstrukcji poza podstawową formą</strong>. Czasowniki modalne dodają odcienie znaczeniowe, zmiana kolejności zdań pozwala na manipulację emfazą, a tryb rozkazujący tworzy bezpośrednie instrukcje. Wszystkie te wariacje zachowują fundamentalną zasadę 100% pewności!</p>
                        </div>
                    </section>
                </>
            ),
        },
    ],
    first: [
        {
            id: 'first-form-comprehensive',
            title: 'First Conditional - Pełny przewodnik 🎯',
            excerpt: 'Kompletny przewodnik: If + Present, will + base - rzeczy możliwe w przyszłości, obietnice, ostrzeżenia i praktyczne zastosowania.',
            content: () => (
                <>
                    <section className="card">
                        <h3>First Conditional - Kompletny przewodnik</h3>
                        <p className="muted">Opisuje realne i prawdopodobne sytuacje w przyszłości oraz ich konsekwencje</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Fundamentalne zasady budowy</h4>
                                <div className="construction-formula-detailed">
                                    <div className="formula-breakdown">
                                        <span className="part condition">IF + PRESENT SIMPLE</span>
                                        <span className="operator">,</span>
                                        <span className="part result">WILL + BEZOKOLICZNIK</span>
                                    </div>
                                </div>

                                <div className="rules-list-detailed">
                                    <div className="rule-item-expanded">
                                        <h5>🎯 Kluczowa charakterystyka</h5>
                                        <div className="comparison-grid">
                                            <div className="comparison-item basic">
                                                <h6>Realna przyszłość</h6>
                                                <p>Opisuje sytuacje, które <strong>mogą się wydarzyć</strong> w przyszłości</p>
                                                <p className="example">"If it rains tomorrow, we will cancel the picnic."</p>
                                                <p className="explanation">(Jest szansa, że będzie padać)</p>
                                            </div>
                                            <div className="comparison-item modal">
                                                <h6>Prawdopodobieństwo</h6>
                                                <p>Zakłada realne prawdopodobieństwo zajścia warunku</p>
                                                <p className="example">"If I see John, I will tell him the news."</p>
                                                <p className="explanation">(Mogę go spotkać)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-item-expanded">
                                        <h5>⚡ Natychmiastowe decyzje</h5>
                                        <div className="omission-cases">
                                            <div className="case">
                                                <strong>Decyzje spontaniczne:</strong>
                                                <p>"<em>If I have time</em>, I will help you with your project."</p>
                                                <p className="explanation">Decyzja podjęta w momencie mówienia</p>
                                            </div>
                                            <div className="case">
                                                <strong>Reakcje na sytuacje:</strong>
                                                <p>"<em>If she calls</em>, I will let you know immediately."</p>
                                                <p className="explanation">Reakcja na przyszłe zdarzenie</p>
                                            </div>
                                            <div className="case">
                                                <strong>Warunkowe obietnice:</strong>
                                                <p>"<em>If you pass the exam</em>, I will buy you a car."</p>
                                                <p className="explanation">Obietnica zależna od warunku</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Główne zastosowania</h4>
                                <div className="tense-details">
                                    <div className="usage-context">
                                        <h5>Kiedy używamy?</h5>
                                        <div className="context-list">
                                            <div className="context-item">
                                                <span className="icon">🔮</span>
                                                <span className="text">Przyszłe możliwości</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🤝</span>
                                                <span className="text">Obietnice i groźby</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">⚠️</span>
                                                <span className="text">Ostrzeżenia i porady</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">💼</span>
                                                <span className="text">Warunkowe umowy</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🎯</span>
                                                <span className="text">Negocjacje i warunki</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📚 First Conditional - Praktyczne przykłady</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🔮 Przyszłe możliwości</h5>
                                <div className="example-group-expanded">
                                    <p>"If I get the job, I will move to London." - Jeśli dostanę pracę, przeprowadzę się do Londynu.</p>
                                    <p>"If she passes the exam, she will go to university." - Jeśli zda egzamin, pójdzie na uniwersytet.</p>
                                    <p>"If we save enough money, we will buy a house." - Jeśli zaoszczędzimy wystarczająco pieniędzy, kupimy dom.</p>
                                    <p>"If the weather is nice, we will go to the beach." - Jeśli pogoda będzie ładna, pojedziemy na plażę.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🤝 Obietnice i groźby</h5>
                                <div className="example-group-expanded">
                                    <p>"If you finish your homework, I will buy you ice cream." - Jeśli skończysz pracę domową, kupię ci lody.</p>
                                    <p>"If you're late again, you will be in trouble." - Jeśli znowu się spóźnisz, będziesz miał kłopoty.</p>
                                    <p>"If you help me with this project, I will help you with yours." - Jeśli pomożesz mi z tym projektem, pomogę ci z twoim.</p>
                                    <p>"If you don't study, you will fail the test." - Jeśli nie będziesz się uczył, nie zdasz testu.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>⚠️ Ostrzeżenia i porady</h5>
                                <div className="example-group-expanded">
                                    <p>"If you don't hurry, you will miss the bus." - Jeśli się nie pospieszysz, spóźnisz się na autobus.</p>
                                    <p>"If you touch that, you will burn yourself." - Jeśli dotkniesz tego, oparzysz się.</p>
                                    <p>"If you don't wear a coat, you will catch a cold." - Jeśli nie założysz płaszcza, przeziębisz się.</p>
                                    <p>"If you don't reserve tickets, they will sell out." - Jeśli nie zarezerwujesz biletów, wyprzedadzą się.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔧 Wariacje budowy First Conditional</h4>
                        <div className="tense-details">
                            <div className="tense-structure">
                                <h5>Present Continuous - plany i umowy</h5>
                                <div className="structure-examples">
                                    <div className="example-item">
                                        <span className="label">Zaplanowane działania</span>
                                        <span className="form">If you're coming tonight, let me know.</span>
                                    </div>
                                    <div className="example-item">
                                        <span className="label">Umówione spotkania</span>
                                        <span className="form">If they're arriving late, we will wait.</span>
                                    </div>
                                    <div className="example-item">
                                        <span className="label">Bieżące plany</span>
                                        <span className="form">If you're leaving tomorrow, pack today.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="usage-context">
                                <h5>Present Perfect - ukończone działania</h5>
                                <div className="context-list">
                                    <div className="context-item">
                                        <span className="icon">✅</span>
                                        <span className="text">Zakończone czynności</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">📅</span>
                                        <span className="text">Doświadczenia</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">🔗</span>
                                        <span className="text">Wyniki wpływające na przyszłość</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🔄 Present Continuous</h5>
                                <div className="example-group-expanded">
                                    <p>"If you're meeting the client tomorrow, prepare the documents today." - Jeśli spotykasz się z klientem jutro, przygotuj dokumenty dziś.</p>
                                    <p>"If she's working late, we will have dinner without her." - Jeśli pracuje do późna, zjemy obiad bez niej.</p>
                                    <p>"If they're traveling this weekend, they need to book hotels." - Jeśli podróżują w ten weekend, muszą zarezerwować hotele.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>✅ Present Perfect</h5>
                                <div className="example-group-expanded">
                                    <p>"If you've finished your work, you can go home." - Jeśli skończyłeś pracę, możesz iść do domu.</p>
                                    <p>"If they've decided to join us, we will need more chairs." - Jeśli zdecydowali się do nas dołączyć, będziemy potrzebować więcej krzeseł.</p>
                                    <p>"If you've seen the movie, don't tell me the ending." - Jeśli widziałeś film, nie mów mi zakończenia.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚡ Różnice: First vs Zero Conditional</h4>
                        <div className="meaning-comparison">
                            <div className="comparison-scenario">
                                <h5>Scenario: Reakcja na pogodę</h5>
                                <div className="contrast-examples">
                                    <div className="first-example">
                                        <h6>First Conditional</h6>
                                        <p>"If it rains tomorrow, we will cancel the picnic."</p>
                                        <p className="meaning">(Możliwa sytuacja w przyszłości - nie wiemy czy będzie padać)</p>
                                        <p className="time-context">Prawdopodobieństwo: ✓</p>
                                    </div>
                                    <div className="zero-example">
                                        <h6>Zero Conditional</h6>
                                        <p>"If it rains, the streets get wet."</p>
                                        <p className="meaning">(Ogólna prawda - zawsze kiedy pada, ulice są mokre)</p>
                                        <p className="time-context">100% Pewność: ✓</p>
                                    </div>
                                </div>
                            </div>

                            <div className="comparison-scenario">
                                <h5>Scenario: Reakcje organizmu</h5>
                                <div className="contrast-examples">
                                    <div className="first-example">
                                        <h6>First Conditional</h6>
                                        <p>"If I don't sleep well tonight, I will be tired tomorrow."</p>
                                        <p className="meaning">(Konkretna sytuacja - nie wiem jak będę spać)</p>
                                        <p className="time-context">Określony czas: ✓</p>
                                    </div>
                                    <div className="zero-example">
                                        <h6>Zero Conditional</h6>
                                        <p>"If people don't sleep enough, they feel tired."</p>
                                        <p className="meaning">(Ogólna prawda biologiczna)</p>
                                        <p className="time-context">Uniwersalna zasada: ✓</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🚫 Typowe błędy i jak ich unikać</h4>
                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>Błędy w użyciu "will"</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <div className="polish">"will" w części warunkowej</div>
                                        <div className="incorrect">"If I will see him, I will tell him."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If I see him, I will tell him."</div>
                                        <div className="example">W części z "if" NIGDY nie używamy "will"</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Brak "will" w wyniku</div>
                                        <div className="incorrect">"If it rains, we cancel the picnic."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If it rains, we will cancel the picnic."</div>
                                        <div className="example">W wyniku używamy "will" dla przyszłości</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Mieszanie z Zero Conditional</div>
                                        <div className="incorrect">"If you heat water, it will boil."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If you heat water, it boils."</div>
                                        <div className="example">Dla faktów używamy Zero Conditional</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-category">
                                <h5>Błędy w szyku zdania</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <div className="polish">Błędny przecinek</div>
                                        <div className="incorrect">"I will be happy, if she comes."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"I will be happy if she comes."</div>
                                        <div className="example">Przecinek tylko gdy "if" na początku</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Podwójne "will"</div>
                                        <div className="incorrect">"If it will rain, we will stay home."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If it rains, we will stay home."</div>
                                        <div className="example">Tylko jedno "will" w zdaniu</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip warning">
                            <h5>⚠️ Złota zasada First Conditional</h5>
                            <p><strong>W części z "if" używamy Present Simple, w części głównej - "will" + bezokolicznik.</strong> Nigdy nie używamy "will" po "if", nawet jeśli mówimy o przyszłości!</p>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Uzupełnij zdania używając First Conditional:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> If I ______ (see) John, I ______ (tell) him the news.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="first1" value="a" />
                                                <span>see, will tell</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first1" value="b" />
                                                <span>will see, tell</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first1" value="c" />
                                                <span>will see, will tell</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Present Simple po "if", "will" w wyniku</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> If she ______ (pass) the exam, she ______ (go) to university.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="first2" value="a" />
                                                <span>passes, will go</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first2" value="b" />
                                                <span>will pass, goes</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first2" value="c" />
                                                <span>passes, goes</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Realna możliwość w przyszłości</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> If you ______ (not hurry), you ______ (miss) the bus.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="first3" value="a" />
                                                <span>don't hurry, will miss</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first3" value="b" />
                                                <span>won't hurry, miss</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first3" value="c" />
                                                <span>don't hurry, miss</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Ostrzeżenie o przyszłych konsekwencjach</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> If they ______ (arrive) late, we ______ (start) without them.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="first4" value="a" />
                                                <span>arrive, will start</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first4" value="b" />
                                                <span>will arrive, start</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first4" value="c" />
                                                <span>arrive, start</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Plan na wypadek konkretnej sytuacji</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> If it ______ (rain) tomorrow, we ______ (cancel) the picnic.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="first5" value="a" />
                                                <span>rains, will cancel</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first5" value="b" />
                                                <span>will rain, cancel</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first5" value="c" />
                                                <span>rains, cancel</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przyszła możliwość zależna od warunku</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> If you ______ (help) me with this project, I ______ (help) you with yours.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="first6" value="a" />
                                                <span>help, will help</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first6" value="b" />
                                                <span>will help, help</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first6" value="c" />
                                                <span>help, help</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Warunkowa obietnica pomocy</div>
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
                        <h4>📊 Podsumowanie First Conditional</h4>
                        <div className="tense-summary-detailed">
                            <table>
                                <thead>
                                <tr>
                                    <th>Zastosowanie</th>
                                    <th>Budowa</th>
                                    <th>Przykład</th>
                                    <th>Kluczowa cecha</th>
                                    <th>Pewność</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Przyszłe możliwości</td>
                                    <td>If + Present, will + base</td>
                                    <td>If I see him, I will tell him.</td>
                                    <td>Realne prawdopodobieństwo</td>
                                    <td>🔮 Możliwe</td>
                                </tr>
                                <tr>
                                    <td>Obietnice</td>
                                    <td>If + Present, will + base</td>
                                    <td>If you help me, I will help you.</td>
                                    <td>Warunkowe zobowiązania</td>
                                    <td>🤝 Zależne</td>
                                </tr>
                                <tr>
                                    <td>Groźby</td>
                                    <td>If + Present, will + base</td>
                                    <td>If you're late, you'll be in trouble.</td>
                                    <td>Konsekwencje</td>
                                    <td>⚡ Warunkowe</td>
                                </tr>
                                <tr>
                                    <td>Ostrzeżenia</td>
                                    <td>If + Present, will + base</td>
                                    <td>If you touch it, you'll burn yourself.</td>
                                    <td>Zapobieganie</td>
                                    <td>⚠️ Ostrzeżenie</td>
                                </tr>
                                <tr>
                                    <td>Porady</td>
                                    <td>If + Present, will + base</td>
                                    <td>If you study, you will pass.</td>
                                    <td>Rekomendacje</td>
                                    <td>💡 Sugestia</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip success">
                            <h5>💡 Klucz do sukcesu</h5>
                            <p>Pamiętaj: <strong>First Conditional opisuje REALNE i PRAWDOPODOBNE sytuacje w przyszłości</strong>. Używaj go gdy istnieje realna szansa, że warunek się spełni. Present Simple po "if" i "will" w wyniku to fundament poprawnej konstrukcji!</p>
                        </div>
                    </section>
                </>
            ),
        },
        {
            id: 'first-alternatives-comprehensive',
            title: 'Alternatywne formy 🔄',
            excerpt: 'Kompletny przewodnik: going to, czasowniki modalne, tryb rozkazujący i inne warianty First Conditional.',
            content: () => (
                <>
                    <section className="card">
                        <h3>First Conditional - Alternatywne formy</h3>
                        <p className="muted">Poznaj zaawansowane konstrukcje, które wzbogacają i modyfikują podstawową formę First Conditional</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Rozszerzone zasady budowy</h4>
                                <div className="construction-formula-detailed">
                                    <div className="formula-breakdown">
                                        <span className="part condition">IF + PRESENT SIMPLE</span>
                                        <span className="operator">,</span>
                                        <span className="part alternative">ALTERNATYWA + BEZOKOLICZNIK</span>
                                    </div>
                                </div>

                                <div className="rules-list-detailed">
                                    <div className="rule-item-expanded">
                                        <h5>🎯 Elastyczność konstrukcji</h5>
                                        <div className="comparison-grid">
                                            <div className="comparison-item basic">
                                                <h6>Podstawowa forma</h6>
                                                <p>"will" dla przyszłych konsekwencji</p>
                                                <p className="example">"If it rains, we will stay home."</p>
                                                <p className="explanation">(Standardowa przyszłość)</p>
                                            </div>
                                            <div className="comparison-item modal">
                                                <h6>Formy alternatywne</h6>
                                                <p>Różne znaczenia z innymi konstrukcjami</p>
                                                <p className="example">"If it rains, we might stay home."</p>
                                                <p className="explanation">(Mniejsza pewność)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-item-expanded">
                                        <h5>🔄 Uniwersalna kolejność</h5>
                                        <div className="omission-cases">
                                            <div className="case">
                                                <strong>Warunek na początku:</strong>
                                                <p>"<em>If she comes</em>, I will be happy."</p>
                                                <p className="explanation">Przecinek obowiązkowy</p>
                                            </div>
                                            <div className="case">
                                                <strong>Warunek na końcu:</strong>
                                                <p>"I will be happy <em>if she comes</em>."</p>
                                                <p className="explanation">Bez przecinka</p>
                                            </div>
                                            <div className="case">
                                                <strong>Znaczenie identyczne:</strong>
                                                <p>"Oba zdania mają <em>identyczne znaczenie</em>"</p>
                                                <p className="explanation">Różni się tylko emfaza</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Rodzaje alternatyw</h4>
                                <div className="tense-details">
                                    <div className="usage-context">
                                        <h5>Główne typy modyfikacji</h5>
                                        <div className="context-list">
                                            <div className="context-item">
                                                <span className="icon">📅</span>
                                                <span className="text">Going to - plany</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🔧</span>
                                                <span className="text">Czasowniki modalne</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">👑</span>
                                                <span className="text">Tryb rozkazujący</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🔄</span>
                                                <span className="text">Present Continuous</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">✅</span>
                                                <span className="text">Present Perfect</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📅 "Going to" zamiast "will"</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🎯 Zaplanowane działania</h5>
                                <div className="example-group-expanded">
                                    <p>"If it gets cold, I'm going to wear my coat." - Jeśli zrobi się zimno, zamierzam założyć płaszcz.</p>
                                    <p>"If we have time, we're going to visit the museum." - Jeśli będziemy mieli czas, zamierzamy odwiedzić muzeum.</p>
                                    <p>"If she calls, I'm going to tell her everything." - Jeśli zadzwoni, zamierzam powiedzieć jej wszystko.</p>
                                    <p>"If the price drops, we're going to buy it immediately." - Jeśli cena spadnie, zamierzamy to natychmiast kupić.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🔮 Przewidywania na podstawie obecnych oznak</h5>
                                <div className="example-group-expanded">
                                    <p>"Look at those clouds! If it starts raining, we're going to get wet." - Spójrz na te chmury! Jeśli zacznie padać, zmokniemy.</p>
                                    <p>"If he doesn't slow down, he's going to have an accident." - Jeśli nie zwolni, będzie miał wypadek.</p>
                                    <p>"If you don't study, you're going to fail the exam." - Jeśli nie będziesz się uczył, nie zdasz egzaminu.</p>
                                    <p>"If they continue like this, they're going to win the competition." - Jeśli będą tak kontynuować, wygrają konkurs.</p>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip warning">
                            <h5>💡 Różnica: "will" vs "going to"</h5>
                            <p><strong>"will"</strong> - decyzje spontaniczne, obietnice, przewidywania bez konkretnych oznak<br/>
                                <strong>"going to"</strong> - plany, zamiary, przewidywania oparte na obecnych oznakach</p>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔧 Czasowniki modalne w First Conditional</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🎲 Might - możliwość</h5>
                                <div className="example-group-expanded">
                                    <p>"If you study, you might pass the test." - Jeśli będziesz się uczył, możesz zdać test.</p>
                                    <p>"If it rains, we might stay home." - Jeśli będzie padać, możemy zostać w domu.</p>
                                    <p>"If he asks nicely, she might help him." - Jeśli poprosi grzecznie, może mu pomoże.</p>
                                    <p>"If we leave early, we might avoid traffic." - Jeśli wyjedziemy wcześnie, może unikniemy korków.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>⚡ Can - umiejętność/możliwość</h5>
                                <div className="example-group-expanded">
                                    <p>"If you have a ticket, you can enter the concert." - Jeśli masz bilet, możesz wejść na koncert.</p>
                                    <p>"If you need help, I can assist you." - Jeśli potrzebujesz pomocy, mogę ci pomóc.</p>
                                    <p>"If the weather is good, we can have a picnic." - Jeśli pogoda będzie dobra, możemy urządzić piknik.</p>
                                    <p>"If you finish early, you can leave." - Jeśli skończysz wcześnie, możesz wyjść.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>💪 Must - obowiązek/konieczność</h5>
                                <div className="example-group-expanded">
                                    <p>"If you want to succeed, you must work hard." - Jeśli chcesz odnieść sukces, musisz ciężko pracować.</p>
                                    <p>"If you see something suspicious, you must report it." - Jeśli zobaczysz coś podejrzanego, musisz to zgłosić.</p>
                                    <p>"If the alarm sounds, you must evacuate." - Jeśli alarm zadzwoni, musisz ewakuować się.</p>
                                    <p>"If you feel sick, you must see a doctor." - Jeśli czujesz się chory, musisz iść do lekarza.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>👑 Tryb rozkazujący w First Conditional</h4>
                        <div className="special-cases-detailed">
                            <div className="special-case-expanded">
                                <h5>📋 Instrukcje i polecenia</h5>
                                <div className="language-comparison">
                                    <div className="language-version">
                                        <h6>Z "will":</h6>
                                        <div className="example-box">
                                            <p>"If you see Anna, you will tell her to call me."</p>
                                            <p>"If the phone rings, you will answer it."</p>
                                        </div>
                                    </div>
                                    <div className="language-version">
                                        <h6>Z trybem rozkazującym:</h6>
                                        <div className="example-box">
                                            <p>"If you see Anna, <em>tell her to call me</em>."</p>
                                            <p>"If the phone rings, <em>answer it</em>."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="special-case-expanded">
                                <h5>🚫 Zakazy i ostrzeżenia</h5>
                                <div className="usage-comparison">
                                    <div className="usage-type">
                                        <h6>Ostrzeżenia:</h6>
                                        <div className="example-box">
                                            <p>"If you feel dizzy, <em>sit down immediately</em>."</p>
                                            <p>"If you see fire, <em>call the fire department</em>."</p>
                                        </div>
                                    </div>
                                    <div className="usage-type">
                                        <h6>Zakazy:</h6>
                                        <div className="example-box">
                                            <p>"If the light is red, <em>don't cross the street</em>."</p>
                                            <p>"If you're not sure, <em>don't answer</em>."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>👑 Praktyczne zastosowania</h5>
                                <div className="example-group-expanded">
                                    <p>"If you finish your homework, <em>you can play video games</em>." - Jeśli skończysz pracę domową, możesz grać w gry.</p>
                                    <p>"If you need anything, <em>just ask</em>." - Jeśli czegoś potrzebujesz, po prostu zapytaj.</p>
                                    <p>"If he calls, <em>tell him I'll call back later</em>." - Jeśli zadzwoni, powiedz mu, że oddzwonię później.</p>
                                    <p>"If you're going to be late, <em>send me a message</em>." - Jeśli się spóźnisz, wyślij mi wiadomość.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - rozpoznawanie alternatyw</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną alternatywną formę First Conditional:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> Jeśli będzie padać, możemy zostać w domu.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="first_alt1" value="a" />
                                                <span>If it rains, we might stay home.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first_alt1" value="b" />
                                                <span>If it will rain, we might stay home.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first_alt1" value="c" />
                                                <span>If it rains, we stay home.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"might" wyraża możliwość</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> Jeśli zobaczysz Annę, powiedz jej żeby do mnie zadzwoniła.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="first_alt2" value="a" />
                                                <span>If you see Anna, tell her to call me.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first_alt2" value="b" />
                                                <span>If you will see Anna, tell her to call me.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first_alt2" value="c" />
                                                <span>If you see Anna, you tell her to call me.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Tryb rozkazujący dla instrukcji</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> Jeśli cena spadnie, zamierzamy to kupić.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="first_alt3" value="a" />
                                                <span>If the price drops, we're going to buy it.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first_alt3" value="b" />
                                                <span>If the price will drop, we're going to buy it.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first_alt3" value="c" />
                                                <span>If the price drops, we will going to buy it.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"going to" dla planów</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> Jeśli będziesz potrzebował pomocy, mogę ci pomóc.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="first_alt4" value="a" />
                                                <span>If you need help, I can help you.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first_alt4" value="b" />
                                                <span>If you will need help, I can help you.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first_alt4" value="c" />
                                                <span>If you need help, I will can help you.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"can" dla oferty pomocy</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> Jeśli zobaczysz ogień, musisz zadzwonić do straży pożarnej.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="first_alt5" value="a" />
                                                <span>If you see fire, you must call the fire department.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first_alt5" value="b" />
                                                <span>If you will see fire, you must call the fire department.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first_alt5" value="c" />
                                                <span>If you see fire, you must to call the fire department.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"must" dla obowiązku</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> Jeśli będziesz zmęczony, powinieneś odpocząć.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="first_alt6" value="a" />
                                                <span>If you're tired, you should rest.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first_alt6" value="b" />
                                                <span>If you will be tired, you should rest.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="first_alt6" value="c" />
                                                <span>If you're tired, you should to rest.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"should" dla rady</div>
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
                        <h4>📊 Podsumowanie alternatyw First Conditional</h4>
                        <div className="tense-summary-detailed">
                            <table>
                                <thead>
                                <tr>
                                    <th>Alternatywa</th>
                                    <th>Budowa</th>
                                    <th>Przykład</th>
                                    <th>Znaczenie</th>
                                    <th>Użycie</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Going to</td>
                                    <td>If + Present, going to + base</td>
                                    <td>If it rains, we're going to stay home.</td>
                                    <td>Plany i zamiary</td>
                                    <td>📅 Planowane</td>
                                </tr>
                                <tr>
                                    <td>Might</td>
                                    <td>If + Present, might + base</td>
                                    <td>If you study, you might pass.</td>
                                    <td>Możliwość</td>
                                    <td>🎲 Prawdopodobieństwo</td>
                                </tr>
                                <tr>
                                    <td>Can</td>
                                    <td>If + Present, can + base</td>
                                    <td>If you have time, you can help.</td>
                                    <td>Możliwość/umiejętność</td>
                                    <td>🔧 Zdolność</td>
                                </tr>
                                <tr>
                                    <td>Must</td>
                                    <td>If + Present, must + base</td>
                                    <td>If you see fire, you must call.</td>
                                    <td>Obowiązek</td>
                                    <td>⚡ Konieczność</td>
                                </tr>
                                <tr>
                                    <td>Tryb rozkazujący</td>
                                    <td>If + Present, imperative</td>
                                    <td>If you see Anna, tell her.</td>
                                    <td>Instrukcje</td>
                                    <td>👑 Polecenia</td>
                                </tr>
                                <tr>
                                    <td>Should</td>
                                    <td>If + Present, should + base</td>
                                    <td>If you're tired, you should rest.</td>
                                    <td>Rada</td>
                                    <td>💡 Sugestia</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip success">
                            <h5>💡 Klucz do zaawansowanego użycia</h5>
                            <p>Pamiętaj: <strong>First Conditional oferuje bogactwo alternatywnych form, które precyzyjnie wyrażają różne odcienie znaczeniowe</strong>. Wybór między "will", "going to", czasownikami modalnymi czy trybem rozkazującym zależy od tego, czy mówimy o spontanicznych decyzjach, planach, możliwościach, obowiązkach czy instrukcjach!</p>
                        </div>
                    </section>
                </>
            ),
        },
    ],
    second: [
        {
            id: 'second-form-comprehensive',
            title: 'Second Conditional - Pełny przewodnik 🎭',
            excerpt: 'Kompletny przewodnik: If + Past, would + base - sytuacje hipotetyczne, nierealne marzenia, rady i praktyczne zastosowania.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Second Conditional - Kompletny przewodnik</h3>
                        <p className="muted">Opisuje hipotetyczne, nierealne lub mało prawdopodobne sytuacje w teraźniejszości lub przyszłości</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Fundamentalne zasady budowy</h4>
                                <div className="construction-formula-detailed">
                                    <div className="formula-breakdown">
                                        <span className="part condition">IF + PAST SIMPLE</span>
                                        <span className="operator">,</span>
                                        <span className="part result">WOULD + BEZOKOLICZNIK</span>
                                    </div>
                                </div>

                                <div className="rules-list-detailed">
                                    <div className="rule-item-expanded">
                                        <h5>🎯 Kluczowa charakterystyka</h5>
                                        <div className="comparison-grid">
                                            <div className="comparison-item basic">
                                                <h6>Hipotetyczna rzeczywistość</h6>
                                                <p>Opisuje sytuacje, które <strong>nie są prawdziwe</strong> w teraźniejszości</p>
                                                <p className="example">"If I were taller, I would play basketball."</p>
                                                <p className="explanation">(Ale nie jestem wyższy)</p>
                                            </div>
                                            <div className="comparison-item modal">
                                                <h6>Niska prawdopodobieństwo</h6>
                                                <p>Zakłada małe prawdopodobieństwo zajścia warunku</p>
                                                <p className="example">"If I won the lottery, I would travel the world."</p>
                                                <p className="explanation">(Mało prawdopodobne)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-item-expanded">
                                        <h5>💭 Wyrażanie życzeń i marzeń</h5>
                                        <div className="omission-cases">
                                            <div className="case">
                                                <strong>Nierealne marzenia:</strong>
                                                <p>"<em>If I could fly</em>, I would visit every country."</p>
                                                <p className="explanation">Marzenie niemożliwe do spełnienia</p>
                                            </div>
                                            <div className="case">
                                                <strong>Życzenia dotyczące teraźniejszości:</strong>
                                                <p>"<em>If I had more time</em>, I would learn Japanese."</p>
                                                <p className="explanation">Rzeczywistość jest inna</p>
                                            </div>
                                            <div className="case">
                                                <strong>Hipotetyczne zmiany:</strong>
                                                <p>"<em>If I were you</em>, I would take that job."</p>
                                                <p className="explanation">Radzenie w hipotetycznej sytuacji</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Główne zastosowania</h4>
                                <div className="tense-details">
                                    <div className="usage-context">
                                        <h5>Kiedy używamy?</h5>
                                        <div className="context-list">
                                            <div className="context-item">
                                                <span className="icon">🎭</span>
                                                <span className="text">Sytuacje hipotetyczne</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">💫</span>
                                                <span className="text">Nierealne marzenia</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">💡</span>
                                                <span className="text">Radzenie i sugestie</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🔮</span>
                                                <span className="text">Mało prawdopodobna przyszłość</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🔄</span>
                                                <span className="text">Hipotetyczne zmiany teraźniejszości</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📚 Second Conditional - Praktyczne przykłady</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🎭 Hipotetyczne sytuacje teraźniejsze</h5>
                                <div className="example-group-expanded">
                                    <p>"If I were taller, I would play basketball." - Gdybym był wyższy, grałbym w koszykówkę. (ale nie jestem wyższy)</p>
                                    <p>"If I had more time, I would learn Japanese." - Gdybym miał więcej czasu, uczyłbym się japońskiego. (ale nie mam czasu)</p>
                                    <p>"If I lived in Paris, I would visit museums every day." - Gdybym mieszkał w Paryżu, odwiedzałbym muzea codziennie. (ale nie mieszkam)</p>
                                    <p>"If I knew how to cook, I would prepare dinner." - Gdybym umiał gotować, przygotowałbym obiad. (ale nie umiem)</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>💫 Nierealne marzenia i życzenia</h5>
                                <div className="example-group-expanded">
                                    <p>"If I could fly, I would visit every country." - Gdybym umiał latać, odwiedziłbym każdy kraj. (ale nie umiem)</p>
                                    <p>"If I were a millionaire, I would help poor people." - Gdybym był milionerem, pomagałbym biednym ludziom. (ale nie jestem)</p>
                                    <p>"If I had a time machine, I would visit ancient Rome." - Gdybym miał wehikuł czasu, odwiedziłbym starożytny Rzym. (ale nie mam)</p>
                                    <p>"If I could speak all languages, I would travel the world." - Gdybym umiał mówić wszystkimi językami, podróżowałbym po świecie. (ale nie umiem)</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>💡 Radzenie i sugestie</h5>
                                <div className="example-group-expanded">
                                    <p>"If I were you, I would take that job." - Na twoim miejscu wziąłbym tę pracę.</p>
                                    <p>"If I were in your position, I would apologize." - Gdybym był na twoim miejscu, przeprosiłbym.</p>
                                    <p>"If I were her, I would study harder." - Gdybym był nią, uczyłbym się ciężej.</p>
                                    <p>"If I were the manager, I would change the policy." - Gdybym był menedżerem, zmieniłbym politykę.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>✨ Specjalne użycie "were" - Subjunctive Mood</h4>
                        <div className="tense-details">
                            <div className="tense-structure">
                                <h5>Forma "were" dla wszystkich osób</h5>
                                <div className="structure-examples">
                                    <div className="example-item">
                                        <span className="label">I</span>
                                        <span className="form">If I were rich...</span>
                                    </div>
                                    <div className="example-item">
                                        <span className="label">he/she/it</span>
                                        <span className="form">If he were here...</span>
                                    </div>
                                    <div className="example-item">
                                        <span className="label">you/we/they</span>
                                        <span className="form">If you were me...</span>
                                    </div>
                                </div>
                            </div>

                            <div className="usage-context">
                                <h5>Kiedy używać "were"?</h5>
                                <div className="context-list">
                                    <div className="context-item">
                                        <span className="icon">🎯</span>
                                        <span className="text">Język formalny i pisany</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">💡</span>
                                        <span className="text">Wyrażanie rad i sugestii</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">📚</span>
                                        <span className="text">Egzaminy i testy</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🎯 Formalne użycie "were"</h5>
                                <div className="example-group-expanded">
                                    <p>"If I were rich, I would buy a yacht." - Gdybym był bogaty, kupiłbym jacht.</p>
                                    <p>"If he were here, he would know what to do." - Gdyby on tu był, wiedziałby co robić.</p>
                                    <p>"If she were older, she could drive a car." - Gdyby była starsza, mogłaby prowadzić samochód.</p>
                                    <p>"If we were in London, we would visit the British Museum." - Gdybyśmy byli w Londynie, odwiedzilibyśmy British Museum.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>💬 Mowa potoczna z "was"</h5>
                                <div className="example-group-expanded">
                                    <p>"If I was rich, I would travel more." - Gdybym był bogaty, podróżowałbym więcej. (potocznie)</p>
                                    <p>"If he was here, he would help us." - Gdyby on tu był, pomógłby nam. (potocznie)</p>
                                    <p>"If she was taller, she could be a model." - Gdyby była wyższa, mogłaby być modelką. (potocznie)</p>
                                    <p className="explanation">Uwaga: W mowie potocznej często słyszy się "was", ale "were" jest bardziej poprawne gramatycznie!</p>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip warning">
                            <h5>⚠️ Ważna uwaga o "were" vs "was"</h5>
                            <p><strong>"were"</strong> - forma poprawna gramatycznie, używana w języku formalnym<br/>
                                <strong>"was"</strong> - używane w mowie potocznej, ale uważane za mniej poprawne</p>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔧 Czasowniki modalne w Second Conditional</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🚗 Could - umiejętności i możliwości</h5>
                                <div className="example-group-expanded">
                                    <p>"If I had a car, I could drive to work." - Gdybym miał samochód, mógłbym jeździć do pracy.</p>
                                    <p>"If she spoke French, she could work in Paris." - Gdyby mówiła po francusku, mogłaby pracować w Paryżu.</p>
                                    <p>"If we had more money, we could buy a house." - Gdybyśmy mieli więcej pieniędzy, moglibyśmy kupić dom.</p>
                                    <p>"If I knew the answer, I could help you." - Gdybym znał odpowiedź, mógłbym ci pomóc.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🎲 Might - prawdopodobieństwo</h5>
                                <div className="example-group-expanded">
                                    <p>"If you asked nicely, she might help you." - Gdybyś poprosił grzecznie, może by ci pomogła.</p>
                                    <p>"If I had more time, I might learn to play the guitar." - Gdybym miał więcej czasu, może nauczyłbym się grać na gitarze.</p>
                                    <p>"If they offered me the job, I might accept it." - Gdyby zaoferowali mi pracę, może bym ją przyjął.</p>
                                    <p>"If we left now, we might arrive on time." - Gdybyśmy wyjechali teraz, może dotarlibyśmy na czas.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>💪 Should - rady w hipotetycznych sytuacjach</h5>
                                <div className="example-group-expanded">
                                    <p>"If I were you, I should consider that offer." - Na twoim miejscu, powinienem rozważyć tę ofertę.</p>
                                    <p>"If we had more information, we should make a decision." - Gdybyśmy mieli więcej informacji, powinniśmy podjąć decyzję.</p>
                                    <p>"If you felt sick, you should see a doctor." - Gdybyś czuł się chory, powinieneś iść do lekarza.</p>
                                    <p>"If they were serious, they should make a formal proposal." - Gdyby byli poważni, powinni złożyć formalną propozycję.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚡ Różnice: First vs Second Conditional</h4>
                        <div className="meaning-comparison">
                            <div className="comparison-scenario">
                                <h5>Scenario: Pomoc koledze</h5>
                                <div className="contrast-examples">
                                    <div className="first-example">
                                        <h6>First Conditional</h6>
                                        <p>"If I have time, I will help you."</p>
                                        <p className="meaning">(Jest szansa, że będę miał czas - sytuacja realna)</p>
                                        <p className="time-context">Prawdopodobieństwo: Wysokie</p>
                                    </div>
                                    <div className="second-example">
                                        <h6>Second Conditional</h6>
                                        <p>"If I had time, I would help you."</p>
                                        <p className="meaning">(Wiem, że nie będę miał czasu - sytuacja hipotetyczna)</p>
                                        <p className="time-context">Prawdopodobieństwo: Niskie</p>
                                    </div>
                                </div>
                            </div>

                            <div className="comparison-scenario">
                                <h5>Scenario: Wygrać na loterii</h5>
                                <div className="contrast-examples">
                                    <div className="first-example">
                                        <h6>First Conditional</h6>
                                        <p>"If I win the lottery, I will buy a car."</p>
                                        <p className="meaning">(Mam kupiony los - sytuacja możliwa)</p>
                                        <p className="time-context">Rzeczywiste: ✓</p>
                                    </div>
                                    <div className="second-example">
                                        <h6>Second Conditional</h6>
                                        <p>"If I won the lottery, I would buy a yacht."</p>
                                        <p className="meaning">(Marzenie - sytuacja mało prawdopodobna)</p>
                                        <p className="time-context">Hipotetyczne: ✓</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🚫 Typowe błędy i jak ich unikać</h4>
                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>Błędy w użyciu czasów</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <div className="polish">Użycie "will" w warunku</div>
                                        <div className="incorrect">"If I would have time, I would help."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If I had time, I would help."</div>
                                        <div className="example">W części z "if" używamy Past Simple</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Brak "would" w wyniku</div>
                                        <div className="incorrect">"If I were rich, I buy a house."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If I were rich, I would buy a house."</div>
                                        <div className="example">W wyniku zawsze używamy "would"</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Mieszanie z First Conditional</div>
                                        <div className="incorrect">"If I had time, I will help."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If I had time, I would help."</div>
                                        <div className="example">Spójność czasów warunku i wyniku</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-category">
                                <h5>Błędy w użyciu "was/were"</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <div className="polish">"was" w języku formalnym</div>
                                        <div className="incorrect">"If I was you, I would go." (formalnie)</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If I were you, I would go."</div>
                                        <div className="example">W języku formalnym zawsze "were"</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Niepoprawna forma "would"</div>
                                        <div className="incorrect">"If I had money, I would to travel."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If I had money, I would travel."</div>
                                        <div className="example">Po "would" używamy bezokolicznika bez "to"</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip warning">
                            <h5>⚠️ Złota zasada Second Conditional</h5>
                            <p><strong>W części z "if" używamy Past Simple, w części głównej - "would" + bezokolicznik.</strong> Używamy "were" zamiast "was" dla wszystkich osób w języku formalnym. Second Conditional zawsze opisuje sytuacje nierealne lub mało prawdopodobne!</p>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Second Conditional</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Uzupełnij zdania używając Second Conditional:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> If I ______ (have) more money, I ______ (travel) around the world.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="second1" value="a" />
                                                <span>had, would travel</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second1" value="b" />
                                                <span>have, will travel</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second1" value="c" />
                                                <span>would have, traveled</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Past Simple po "if", "would" w wyniku</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> If she ______ (speak) French, she ______ (work) in Paris.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="second2" value="a" />
                                                <span>will speak, would work</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second2" value="b" />
                                                <span>spoke, could work</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second2" value="c" />
                                                <span>speaks, will work</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"could" wyraża możliwość w hipotetycznej sytuacji</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> If I ______ (be) you, I ______ (take) that job.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="second3" value="a" />
                                                <span>am, will take</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second3" value="b" />
                                                <span>were, would take</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second3" value="c" />
                                                <span>was, took</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"were" dla wszystkich osób w Second Conditional</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> If they ______ (not live) so far away, we ______ (visit) them more often.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="second4" value="a" />
                                                <span>don't live, will visit</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second4" value="b" />
                                                <span>didn't live, would visit</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second4" value="c" />
                                                <span>wouldn't live, visited</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przeczenie w Past Simple + "would"</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> If he ______ (know) the answer, he ______ (tell) us.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="second5" value="a" />
                                                <span>knew, would tell</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second5" value="b" />
                                                <span>knows, will tell</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second5" value="c" />
                                                <span>would know, told</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Hipotetyczna wiedza → hipotetyczna reakcja</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> If we ______ (have) a garden, we ______ (grow) our own vegetables.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="second6" value="a" />
                                                <span>have, will grow</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second6" value="b" />
                                                <span>had, would grow</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second6" value="c" />
                                                <span>would have, grew</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Hipotetyczne warunki → hipotetyczne działania</div>
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
                        <h4>📊 Podsumowanie Second Conditional</h4>
                        <div className="tense-summary-detailed">
                            <table>
                                <thead>
                                <tr>
                                    <th>Zastosowanie</th>
                                    <th>Budowa</th>
                                    <th>Przykład</th>
                                    <th>Kluczowa cecha</th>
                                    <th>Rzeczywistość</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Hipotetyczne sytuacje</td>
                                    <td>If + Past, would + base</td>
                                    <td>If I had time, I would help.</td>
                                    <td>Nierealne w teraźniejszości</td>
                                    <td>🎭 Hipotetyczna</td>
                                </tr>
                                <tr>
                                    <td>Nierealne marzenia</td>
                                    <td>If + Past, would + base</td>
                                    <td>If I could fly, I would travel.</td>
                                    <td>Życzenia niemożliwe</td>
                                    <td>💫 Marzenia</td>
                                </tr>
                                <tr>
                                    <td>Radzenie</td>
                                    <td>If + were, would + base</td>
                                    <td>If I were you, I'd go.</td>
                                    <td>Sugestie hipotetyczne</td>
                                    <td>💡 Rada</td>
                                </tr>
                                <tr>
                                    <td>Mało prawdopodobna przyszłość</td>
                                    <td>If + Past, would + base</td>
                                    <td>If I won lottery, I'd quit job.</td>
                                    <td>Niska szansa realizacji</td>
                                    <td>🔮 Niepewna</td>
                                </tr>
                                <tr>
                                    <td>Hipotetyczne zmiany</td>
                                    <td>If + Past, would + base</td>
                                    <td>If I lived there, I'd be happy.</td>
                                    <td>Alternatywna rzeczywistość</td>
                                    <td>🔄 Inna wersja</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip success">
                            <h5>💡 Klucz do sukcesu</h5>
                            <p>Pamiętaj: <strong>Second Conditional opisuje ŚWIAT JAKIM NIE JEST, ALE MÓGŁBY BYĆ</strong>. Używaj go dla sytuacji hipotetycznych, nierealnych marzeń i radzenia. Past Simple po "if" i "would" w wyniku tworzą most do alternatywnej rzeczywistości, która istnieje tylko w naszej wyobraźni!</p>
                        </div>
                    </section>
                </>
            ),
        },
        {
            id: 'second-practice-comprehensive',
            title: 'Ćwiczenia i wyjątki 🔧',
            excerpt: 'Kompletny przewodnik: Past Continuous, porównania z First Conditional, specjalne przypadki i zaawansowane zastosowania.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Second Conditional - Ćwiczenia i wyjątki</h3>
                        <p className="muted">Poznaj zaawansowane konstrukcje, specjalne przypadki użycia i praktyczne ćwiczenia Second Conditional</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Rozszerzone zasady budowy</h4>
                                <div className="construction-formula-detailed">
                                    <div className="formula-breakdown">
                                        <span className="part condition">IF + PAST CONTINUOUS</span>
                                        <span className="operator">,</span>
                                        <span className="part result">WOULD + BEZOKOLICZNIK</span>
                                    </div>
                                </div>

                                <div className="rules-list-detailed">
                                    <div className="rule-item-expanded">
                                        <h5>🎯 Past Continuous w Second Conditional</h5>
                                        <div className="comparison-grid">
                                            <div className="comparison-item basic">
                                                <h6>Past Simple</h6>
                                                <p>Dla stanów i ogólnych sytuacji</p>
                                                <p className="example">"If I had a car, I would drive to work."</p>
                                                <p className="explanation">(Stan posiadania)</p>
                                            </div>
                                            <div className="comparison-item continuous">
                                                <h6>Past Continuous</h6>
                                                <p>Dla czynności w toku i tymczasowych sytuacji</p>
                                                <p className="example">"If I were working less, I would have more free time."</p>
                                                <p className="explanation">(Czynność trwająca)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-item-expanded">
                                        <h5>🔄 Elastyczność czasów</h5>
                                        <div className="omission-cases">
                                            <div className="case">
                                                <strong>Past Simple dla stanów:</strong>
                                                <p>"<em>If I lived</em> in London, I would visit museums."</p>
                                                <p className="explanation">Stały stan</p>
                                            </div>
                                            <div className="case">
                                                <strong>Past Continuous dla działań:</strong>
                                                <p>"<em>If I were living</em> in London now, I would be exploring."</p>
                                                <p className="explanation">Tymczasowa sytuacja</p>
                                            </div>
                                            <div className="case">
                                                <strong>Różnica znaczeniowa:</strong>
                                                <p>"Past Continuous podkreśla <em>tymczasowość</em>"</p>
                                                <p className="explanation">Dodatkowy odcień znaczeniowy</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Zaawansowane zastosowania</h4>
                                <div className="tense-details">
                                    <div className="usage-context">
                                        <h5>Specjalne przypadki</h5>
                                        <div className="context-list">
                                            <div className="context-item">
                                                <span className="icon">🔄</span>
                                                <span className="text">Past Continuous</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">⚡</span>
                                                <span className="text">Porównanie z First Conditional</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🎯</span>
                                                <span className="text">Wyrażanie żalu</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">💭</span>
                                                <span className="text">Hipotetyczne dyskusje</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🔍</span>
                                                <span className="text">Zaawansowane ćwiczenia</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔄 Past Continuous w Second Conditional</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>⏰ Tymczasowe sytuacje</h5>
                                <div className="example-group-expanded">
                                    <p>"If I were working less, I would have more free time." - Gdybym mniej pracował, miałbym więcej wolnego czasu.</p>
                                    <p>"If she weren't living abroad, we would see her more often." - Gdyby nie mieszkała za granicą, widywalibyśmy ją częściej.</p>
                                    <p>"If they were staying longer, we could show them around." - Gdyby zostawali dłużej, moglibyśmy im pokazać miasto.</p>
                                    <p>"If I were studying harder, I would get better grades." - Gdybym uczył się ciężej, dostawałbym lepsze oceny.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🎯 Czynności w toku</h5>
                                <div className="example-group-expanded">
                                    <p>"If I were traveling now, I would send you postcards." - Gdybym teraz podróżował, wysyłałbym ci pocztówki.</p>
                                    <p>"If she were working on that project, she would need help." - Gdyby pracowała nad tym projektem, potrzebowałaby pomocy.</p>
                                    <p>"If we were building a house, we would hire an architect." - Gdybyśmy budowali dom, wynajęlibyśmy architekta.</p>
                                    <p>"If they were organizing the event, they would start planning now." - Gdyby organizowali wydarzenie, zaczęliby planować teraz.</p>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip warning">
                            <h5>💡 Różnica: Past Simple vs Past Continuous</h5>
                            <p><strong>Past Simple</strong> - stany stałe, ogólne sytuacje<br/>
                                <strong>Past Continuous</strong> - czynności w toku, sytuacje tymczasowe, działania w trakcie</p>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚡ Szczegółowe porównanie: First vs Second Conditional</h4>
                        <div className="special-cases-detailed">
                            <div className="special-case-expanded">
                                <h5>🔮 Prawdopodobieństwo realizacji</h5>
                                <div className="language-comparison">
                                    <div className="language-version">
                                        <h6>First Conditional:</h6>
                                        <div className="example-box">
                                            <p>"If I have time tomorrow, I will help you."</p>
                                            <p><strong>Prawdopodobieństwo:</strong> Wysokie</p>
                                            <p><strong>Rzeczywistość:</strong> Może się zdarzyć</p>
                                            <p><strong>Nastawienie:</strong> Optymistyczne</p>
                                        </div>
                                    </div>
                                    <div className="language-version">
                                        <h6>Second Conditional:</h6>
                                        <div className="example-box">
                                            <p>"If I had time, I would help you."</p>
                                            <p><strong>Prawdopodobieństwo:</strong> Niskie</p>
                                            <p><strong>Rzeczywistość:</strong> Nieprawdziwe teraz</p>
                                            <p><strong>Nastawienie:</strong> Hipotetyczne</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="special-case-expanded">
                                <h5>🎯 Rzeczywiste vs Hipotetyczne</h5>
                                <div className="usage-comparison">
                                    <div className="usage-type">
                                        <h6>First Conditional - Realne:</h6>
                                        <div className="example-box">
                                            <p>"If it rains, we will cancel the picnic."</p>
                                            <p>"If I see him, I will tell him."</p>
                                            <p>"If she studies, she will pass."</p>
                                        </div>
                                    </div>
                                    <div className="usage-type">
                                        <h6>Second Conditional - Hipotetyczne:</h6>
                                        <div className="example-box">
                                            <p>"If it rained, we would cancel the picnic."</p>
                                            <p>"If I saw him, I would tell him."</p>
                                            <p>"If she studied, she would pass."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Wyrażanie żalu i niezadowolenia</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>😔 Żal dotyczący teraźniejszości</h5>
                                <div className="example-group-expanded">
                                    <p>"If I had more money, I would buy a house." - Gdybym miał więcej pieniędzy, kupiłbym dom. (ale nie mam)</p>
                                    <p>"If I knew how to cook, I wouldn't eat out so much." - Gdybym umiał gotować, nie jadałbym tak często na mieście. (ale nie umiem)</p>
                                    <p>"If I lived closer to work, I wouldn't spend so much time commuting." - Gdybym mieszkał bliżej pracy, nie traciłbym tyle czasu na dojazdy. (ale mieszkam daleko)</p>
                                    <p>"If I had a car, I could visit my parents more often." - Gdybym miał samochód, mógłbym częściej odwiedzać rodziców. (ale nie mam)</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>💭 Hipotetyczne dyskusje i rozważania</h5>
                                <div className="example-group-expanded">
                                    <p>"What would you do if you won a million dollars?" - Co byś zrobił, gdybyś wygrał milion dolarów?</p>
                                    <p>"Where would you live if you could choose any country?" - Gdzie byś mieszkał, gdybyś mógł wybrać dowolny kraj?</p>
                                    <p>"How would your life be different if you had chosen another career?" - Jak różniłoby się twoje życie, gdybyś wybrał inną karierę?</p>
                                    <p>"What would you change about yourself if you had the chance?" - Co byś w sobie zmienił, gdybyś miał taką możliwość?</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Zaawansowane ćwiczenia praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Przekształć zdania na Second Conditional i wyjaśnij różnice:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> First: "If I have time, I will help you."<br/>
                                            Second: ________________________________</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="second_prac1" value="a" />
                                                <span>If I have time, I would help you.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second_prac1" value="b" />
                                                <span>If I had time, I would help you.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second_prac1" value="c" />
                                                <span>If I had time, I will help you.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">First: realna możliwość | Second: sytuacja hipotetyczna</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> First: "If she studies, she will pass the exam."<br/>
                                            Second: ________________________________</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="second_prac2" value="a" />
                                                <span>If she studies, she would pass the exam.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second_prac2" value="b" />
                                                <span>If she studied, she will pass the exam.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second_prac2" value="c" />
                                                <span>If she studied, she would pass the exam.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">First: prawdopodobne | Second: mało prawdopodobne</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> Użyj Past Continuous: "If I ______ (work) less, I ______ (have) more free time."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="second_prac3" value="a" />
                                                <span>worked, will have</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second_prac3" value="b" />
                                                <span>were working, would have</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second_prac3" value="c" />
                                                <span>am working, would have</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Past Continuous dla czynności w toku</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> Popraw błąd: "If I was you, I will take that job."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="second_prac4" value="a" />
                                                <span>If I was you, I would take that job.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second_prac4" value="b" />
                                                <span>If I were you, I will take that job.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second_prac4" value="c" />
                                                <span>If I were you, I would take that job.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"were" dla wszystkich osób + "would"</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> Użyj "could": "If I ______ (speak) Italian, I ______ (work) in Rome."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="second_prac5" value="a" />
                                                <span>spoke, could work</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second_prac5" value="b" />
                                                <span>speak, can work</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second_prac5" value="c" />
                                                <span>would speak, could work</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"could" wyraża hipotetyczną możliwość</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> Hipotetyczne marzenie: "If I ______ (can) fly, I ______ (visit) every country."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="second_prac6" value="a" />
                                                <span>can, will visit</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second_prac6" value="b" />
                                                <span>could, would visit</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="second_prac6" value="c" />
                                                <span>could, visited</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Nierealne marzenia wymagają Second Conditional</div>
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
                        <h4>📊 Podsumowanie zaawansowanych aspektów Second Conditional</h4>
                        <div className="tense-summary-detailed">
                            <table>
                                <thead>
                                <tr>
                                    <th>Aspekt</th>
                                    <th>Konstrukcja</th>
                                    <th>Przykład</th>
                                    <th>Zastosowanie</th>
                                    <th>Uwagi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Past Continuous</td>
                                    <td>If + Past Continuous, would + base</td>
                                    <td>If I were working less...</td>
                                    <td>Czynności w toku</td>
                                    <td>🔄 Tymczasowe</td>
                                </tr>
                                <tr>
                                    <td>Porównanie z First</td>
                                    <td>Present vs Past w warunku</td>
                                    <td>If I have vs If I had</td>
                                    <td>Rzeczywiste vs Hipotetyczne</td>
                                    <td>⚡ Różnica rzeczywistości</td>
                                </tr>
                                <tr>
                                    <td>Wyrażanie żalu</td>
                                    <td>If + Past, would + base</td>
                                    <td>If I had money...</td>
                                    <td>Niezadowolenie z teraźniejszości</td>
                                    <td>😔 Żal</td>
                                </tr>
                                <tr>
                                    <td>Hipotetyczne dyskusje</td>
                                    <td>What would you do if...</td>
                                    <td>What would you change?</td>
                                    <td>Rozważania teoretyczne</td>
                                    <td>💭 Dyskusje</td>
                                </tr>
                                <tr>
                                    <td>Zaawansowane ćwiczenia</td>
                                    <td>Transformacje i korekty</td>
                                    <td>Popraw błędy</td>
                                    <td>Utrwalanie wiedzy</td>
                                    <td>🔍 Praktyka</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip success">
                            <h5>💡 Mistrzostwo w Second Conditional</h5>
                            <p>Pamiętaj: <strong>Second Conditional to nie tylko gramatyka, to narzędzie do wyrażania alternatywnych rzeczywistości</strong>. Opanowanie Past Continuous, zrozumienie subtelnych różnic z First Conditional oraz umiejętność wyrażania żalu i prowadzenia hipotetycznych dyskusji otwiera drzwi do bogatszego, bardziej precyzyjnego wyrażania siebie w języku angielskim!</p>
                        </div>
                    </section>
                </>
            ),
        },
    ],
    third: [
        {
            id: 'third-form-comprehensive',
            title: 'Third Conditional - Pełny przewodnik ⏰',
            excerpt: 'Kompletny przewodnik: If + Past Perfect, would have + V3 - żal, hipotetyczna przeszłość, krytyka i spekulacje.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Third Conditional - Kompletny przewodnik</h3>
                        <p className="muted">Opisuje hipotetyczne sytuacje w przeszłości, które się nie wydarzyły, oraz ich alternatywne konsekwencje</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Fundamentalne zasady budowy</h4>
                                <div className="construction-formula-detailed">
                                    <div className="formula-breakdown">
                                        <span className="part condition">IF + PAST PERFECT</span>
                                        <span className="operator">,</span>
                                        <span className="part result">WOULD HAVE + PAST PARTICIPLE</span>
                                    </div>
                                </div>

                                <div className="rules-list-detailed">
                                    <div className="rule-item-expanded">
                                        <h5>🎯 Kluczowa charakterystyka</h5>
                                        <div className="comparison-grid">
                                            <div className="comparison-item basic">
                                                <h6>Hipotetyczna przeszłość</h6>
                                                <p>Opisuje sytuacje, które <strong>nie wydarzyły się</strong> w przeszłości</p>
                                                <p className="example">"If I had studied harder, I would have passed the exam."</p>
                                                <p className="explanation">(Ale nie uczyłem się ciężej)</p>
                                            </div>
                                            <div className="comparison-item modal">
                                                <h6>Alternatywna historia</h6>
                                                <p>Pokazuje co mogłoby się stać w innej wersji przeszłości</p>
                                                <p className="example">"If we had taken the other road, we would have arrived earlier."</p>
                                                <p className="explanation">(Ale pojechaliśmy tą drogą)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-item-expanded">
                                        <h5>😔 Wyrażanie żalu i refleksji</h5>
                                        <div className="omission-cases">
                                            <div className="case">
                                                <strong>Żal dotyczący przeszłości:</strong>
                                                <p>"<em>If I had listened to your advice</em>, I wouldn't have made that mistake."</p>
                                                <p className="explanation">Żałuję, że nie posłuchałem</p>
                                            </div>
                                            <div className="case">
                                                <strong>Krytyka przeszłych decyzji:</strong>
                                                <p>"<em>If you had told me the truth</em>, I could have helped you."</p>
                                                <p className="explanation">Krytyka braku komunikacji</p>
                                            </div>
                                            <div className="case">
                                                <strong>Spekulacje historyczne:</strong>
                                                <p>"<em>If he had left on time</em>, he would have caught the train."</p>
                                                <p className="explanation">Analiza alternatywnych scenariuszy</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Główne zastosowania</h4>
                                <div className="tense-details">
                                    <div className="usage-context">
                                        <h5>Kiedy używamy?</h5>
                                        <div className="context-list">
                                            <div className="context-item">
                                                <span className="icon">⏰</span>
                                                <span className="text">Hipotetyczna przeszłość</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">😔</span>
                                                <span className="text">Wyrażanie żalu</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">⚖️</span>
                                                <span className="text">Krytyka przeszłych działań</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🔮</span>
                                                <span className="text">Spekulacje historyczne</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">💭</span>
                                                <span className="text">Refleksje nad przeszłością</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📚 Third Conditional - Praktyczne przykłady</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>⏰ Hipotetyczna przeszłość</h5>
                                <div className="example-group-expanded">
                                    <p>"If I had studied harder, I would have passed the exam." - Gdybym uczył się ciężej, zdałbym egzamin. (ale nie uczyłem się)</p>
                                    <p>"If we had taken the other road, we would have arrived earlier." - Gdybyśmy pojechali inną drogą, dotarlibyśmy wcześniej. (ale nie pojechaliśmy)</p>
                                    <p>"If she had known the truth, she would have been very upset." - Gdyby znała prawdę, byłaby bardzo zdenerwowana. (ale nie znała)</p>
                                    <p>"If they had reserved tickets, they would have gotten good seats." - Gdyby zarezerwowali bilety, dostaliby dobre miejsca. (ale nie zarezerwowali)</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>😔 Wyrażanie żalu</h5>
                                <div className="example-group-expanded">
                                    <p>"If I had listened to your advice, I wouldn't have made that mistake." - Gdybym posłuchał twojej rady, nie popełniłbym tego błędu.</p>
                                    <p>"If you had told me earlier, I could have helped you." - Gdybyś powiedział mi wcześniej, mógłbym ci pomóc.</p>
                                    <p>"If we had known about the problem, we would have fixed it." - Gdybyśmy wiedzieli o problemie, naprawilibyśmy go.</p>
                                    <p>"If he had been more careful, he wouldn't have had the accident." - Gdyby był bardziej ostrożny, nie miałby wypadku.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🔮 Spekulacje historyczne</h5>
                                <div className="example-group-expanded">
                                    <p>"If he had left on time, he would have caught the train." - Gdyby wyjechał na czas, zdążyłby na pociąg.</p>
                                    <p>"If it hadn't rained, the match would have continued." - Gdyby nie padało, mecz by się kontynuował.</p>
                                    <p>"If she had accepted the job, she would be living in New York now." - Gdyby przyjęła pracę, mieszkałaby teraz w Nowym Jorku.</p>
                                    <p>"If they had invested in that company, they would be millionaires now." - Gdyby zainwestowali w tę firmę, byliby teraz milionerami.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔧 Czasowniki modalne w Third Conditional</h4>
                        <div className="tense-details">
                            <div className="tense-structure">
                                <h5>Could have - utracone możliwości</h5>
                                <div className="structure-examples">
                                    <div className="example-item">
                                        <span className="label">Umiejętność w przeszłości</span>
                                        <span className="form">If I had had more money, I could have bought the car.</span>
                                    </div>
                                    <div className="example-item">
                                        <span className="label">Utracona szansa</span>
                                        <span className="form">If you had called me, I could have helped you.</span>
                                    </div>
                                    <div className="example-item">
                                        <span className="label">Alternatywne możliwości</span>
                                        <span className="form">If we had known, we could have prevented it.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="usage-context">
                                <h5>Might have - hipotetyczne możliwości</h5>
                                <div className="context-list">
                                    <div className="context-item">
                                        <span className="icon">🎲</span>
                                        <span className="text">Możliwe scenariusze</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">🔍</span>
                                        <span className="text">Spekulacje</span>
                                    </div>
                                    <div className="context-item">
                                        <span className="icon">💭</span>
                                        <span className="text">Hipotetyczne wyniki</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🚗 Could have - utracone możliwości</h5>
                                <div className="example-group-expanded">
                                    <p>"If I had had more money, I could have bought the car." - Gdybym miał więcej pieniędzy, mógłbym kupić samochód.</p>
                                    <p>"If she had studied medicine, she could have become a doctor." - Gdyby studiowała medycynę, mogłaby zostać lekarzem.</p>
                                    <p>"If we had left earlier, we could have avoided the traffic." - Gdybyśmy wyjechali wcześniej, moglibyśmy uniknąć korków.</p>
                                    <p>"If you had asked me, I could have given you advice." - Gdybyś mnie zapytał, mógłbym ci dać radę.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🎲 Might have - hipotetyczne możliwości</h5>
                                <div className="example-group-expanded">
                                    <p>"If you had tried harder, you might have succeeded." - Gdybyś się bardziej postarał, może by ci się udało.</p>
                                    <p>"If we had taken that route, we might have arrived faster." - Gdybyśmy pojechali tą trasą, może dotarlibyśmy szybciej.</p>
                                    <p>"If he had explained better, I might have understood." - Gdyby wytłumaczył lepiej, może bym zrozumiał.</p>
                                    <p>"If they had invested, they might have made a profit." - Gdyby zainwestowali, może zarobiliby.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>💪 Should have - przeszłe obowiązki</h5>
                                <div className="example-group-expanded">
                                    <p>"If you had seen a doctor, you should have told him everything." - Gdybyś poszedł do lekarza, powinieneś był powiedzieć mu wszystko.</p>
                                    <p>"If we had known about the deadline, we should have started earlier." - Gdybyśmy wiedzieli o terminie, powinniśmy byli zacząć wcześniej.</p>
                                    <p>"If he had noticed the error, he should have reported it." - Gdyby zauważył błąd, powinien był go zgłosić.</p>
                                    <p>"If they had been there, they should have helped." - Gdyby tam byli, powinni byli pomóc.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚡ Różnice: Second vs Third Conditional</h4>
                        <div className="meaning-comparison">
                            <div className="comparison-scenario">
                                <h5>Scenario: Studia i praca</h5>
                                <div className="contrast-examples">
                                    <div className="second-example">
                                        <h6>Second Conditional</h6>
                                        <p>"If I studied harder, I would pass the exam."</p>
                                        <p className="meaning">(Hipotetyczna teraźniejszość - nadal mogę się uczyć)</p>
                                        <p className="time-context">Teraźniejszość/Hipotetyczna</p>
                                    </div>
                                    <div className="third-example">
                                        <h6>Third Conditional</h6>
                                        <p>"If I had studied harder, I would have passed the exam."</p>
                                        <p className="meaning">(Hipotetyczna przeszłość - egzamin już się odbył)</p>
                                        <p className="time-context">Przeszłość/Hipotetyczna</p>
                                    </div>
                                </div>
                            </div>

                            <div className="comparison-scenario">
                                <h5>Scenario: Podróż i decyzje</h5>
                                <div className="contrast-examples">
                                    <div className="second-example">
                                        <h6>Second Conditional</h6>
                                        <p>"If I had more money, I would travel the world."</p>
                                        <p className="meaning">(Obecna sytuacja finansowa - nadal mogę zarabiać)</p>
                                        <p className="time-context">Teraźniejszość: Nieprawdziwa</p>
                                    </div>
                                    <div className="third-example">
                                        <h6>Third Conditional</h6>
                                        <p>"If I had had more money, I would have traveled the world."</p>
                                        <p className="meaning">(Utracona szansa w przeszłości - okres podróży minął)</p>
                                        <p className="time-context">Przeszłość: Niezrealizowana</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📝 Specjalne konstrukcje i formy</h4>
                        <div className="special-cases-detailed">
                            <div className="special-case-expanded">
                                <h5>🔄 Zdania przeczące</h5>
                                <div className="language-comparison">
                                    <div className="language-version">
                                        <h6>Przeczenie w warunku:</h6>
                                        <div className="example-box">
                                            <p>"If I <em>hadn't missed</em> the bus, I wouldn't have been late."</p>
                                            <p>"If she <em>hadn't forgotten</em> her passport, she could have traveled."</p>
                                        </div>
                                    </div>
                                    <div className="language-version">
                                        <h6>Przeczenie w wyniku:</h6>
                                        <div className="example-box">
                                            <p>"If I had known, I <em>wouldn't have come</em>."</p>
                                            <p>"If they had warned us, we <em>wouldn't have invested</em>."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="special-case-expanded">
                                <h5>🎯 Mixed Conditional z Third Conditional</h5>
                                <div className="usage-comparison">
                                    <div className="usage-type">
                                        <h6>Część przeszła + teraźniejszy wynik:</h6>
                                        <div className="example-box">
                                            <p>"If I had studied medicine, <em>I would be a doctor now</em>."</p>
                                            <p>"If they had bought that house, <em>they would live near us</em>."</p>
                                        </div>
                                    </div>
                                    <div className="usage-type">
                                        <h6>Więzi czasowe:</h6>
                                        <div className="example-box">
                                            <p>Przeszły warunek → Teraźniejszy skutek</p>
                                            <p>Hipotetyczna decyzja → Obecna rzeczywistość</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🔄 Praktyczne zastosowania form przeczących</h5>
                                <div className="example-group-expanded">
                                    <p>"If I hadn't missed the bus, I wouldn't have been late for the interview." - Gdybym nie spóźnił się na autobus, nie spóźniłbym się na rozmowę.</p>
                                    <p>"If she hadn't forgotten her keys, she could have entered the house." - Gdyby nie zapomniała kluczy, mogłaby wejść do domu.</p>
                                    <p>"If we hadn't trusted him, we wouldn't have lost our money." - Gdybyśmy mu nie zaufali, nie stracilibyśmy naszych pieniędzy.</p>
                                    <p>"If they hadn't canceled the flight, we would have arrived on time." - Gdyby nie odwołali lotu, dotarlibyśmy na czas.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🚫 Typowe błędy i jak ich unikać</h4>
                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>Błędy w użyciu czasów</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <div className="polish">"would have" w warunku</div>
                                        <div className="incorrect">"If I would have known, I would have come."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If I had known, I would have come."</div>
                                        <div className="example">W części z "if" używamy Past Perfect, nie "would have"</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Brak "have" w wyniku</div>
                                        <div className="incorrect">"If I had studied, I would passed the exam."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If I had studied, I would have passed the exam."</div>
                                        <div className="example">W wyniku zawsze "would have" + past participle</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Błędny past participle</div>
                                        <div className="incorrect">"If I had went, I would have seen her."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If I had gone, I would have seen her."</div>
                                        <div className="example">Używaj poprawnej formy V3 czasownika</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-category">
                                <h5>Błędy w konstrukcji</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <div className="polish">Mieszanie z Second Conditional</div>
                                        <div className="incorrect">"If I had money, I would have bought it."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If I had had money, I would have bought it."</div>
                                        <div className="example">Third Conditional wymaga Past Perfect w warunku</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Podwójne "had"</div>
                                        <div className="incorrect">"If I had had had more time..."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If I had had more time..."</div>
                                        <div className="example">Tylko jedno "had" w Past Perfect</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Błędna kolejność</div>
                                        <div className="incorrect">"I would have passed if I had studied." (bez przecinka)</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"I would have passed if I had studied."</div>
                                        <div className="example">Gdy "if" na końcu, nie używamy przecinka</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip warning">
                            <h5>⚠️ Złota zasada Third Conditional</h5>
                            <p><strong>W części z "if" używamy Past Perfect (had + V3), w części głównej - "would have" + past participle.</strong> Nigdy nie używamy "would have" po "if"! Third Conditional zawsze opisuje sytuacje, które NIE wydarzyły się w przeszłości.</p>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Third Conditional</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Uzupełnij zdania używając Third Conditional:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> If I ______ (know) you were coming, I ______ (bake) a cake.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="third1" value="a" />
                                                <span>had known, would have baked</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="third1" value="b" />
                                                <span>knew, would bake</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="third1" value="c" />
                                                <span>would have known, had baked</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Past Perfect po "if", "would have" w wyniku</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> If she ______ (study) harder, she ______ (pass) the exam.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="third2" value="a" />
                                                <span>studied, would pass</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="third2" value="b" />
                                                <span>had studied, would have passed</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="third2" value="c" />
                                                <span>would have studied, had passed</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Hipotetyczna sytuacja w przeszłości</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> If we ______ (not miss) the bus, we ______ (arrive) on time.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="third3" value="a" />
                                                <span>didn't miss, would arrive</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="third3" value="b" />
                                                <span>wouldn't have missed, had arrived</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="third3" value="c" />
                                                <span>hadn't missed, would have arrived</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przeczenie w Past Perfect</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> If he ______ (have) more money, he ______ (can/buy) that car.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="third4" value="a" />
                                                <span>had, could buy</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="third4" value="b" />
                                                <span>had had, could have bought</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="third4" value="c" />
                                                <span>would have had, had bought</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"could have" dla utraconych możliwości</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> If they ______ (listen) to my advice, they ______ (not make) that mistake.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="third5" value="a" />
                                                <span>had listened, wouldn't have made</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="third5" value="b" />
                                                <span>listened, wouldn't make</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="third5" value="c" />
                                                <span>would have listened, hadn't made</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Wyrażanie żalu dotyczącego przeszłości</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> If it ______ (not rain), the match ______ (continue).</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="third6" value="a" />
                                                <span>hadn't rained, would have continued</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="third6" value="b" />
                                                <span>didn't rain, would continue</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="third6" value="c" />
                                                <span>wouldn't have rained, had continued</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Spekulacje historyczne</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> If you ______ (tell) me the truth, I ______ (help) you.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="third7" value="a" />
                                                <span>told, could help</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="third7" value="b" />
                                                <span>would have told, had helped</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="third7" value="c" />
                                                <span>had told, could have helped</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Krytyka przeszłych działań</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> If we ______ (start) earlier, we ______ (finish) by now.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="third8" value="a" />
                                                <span>started, would finish</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="third8" value="b" />
                                                <span>would have started, had finished</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="third8" value="c" />
                                                <span>had started, would have finished</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Refleksje nad przeszłymi decyzjami</div>
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
                        <h4>📊 Podsumowanie Third Conditional</h4>
                        <div className="tense-summary-detailed">
                            <table>
                                <thead>
                                <tr>
                                    <th>Zastosowanie</th>
                                    <th>Budowa</th>
                                    <th>Przykład</th>
                                    <th>Kluczowa cecha</th>
                                    <th>Czas</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Hipotetyczna przeszłość</td>
                                    <td>If + Past Perfect, would have + V3</td>
                                    <td>If I had known, I would have come.</td>
                                    <td>Niezdarzone sytuacje</td>
                                    <td>⏰ Przeszłość</td>
                                </tr>
                                <tr>
                                    <td>Wyrażanie żalu</td>
                                    <td>If + Past Perfect, would have + V3</td>
                                    <td>If I had listened, I wouldn't have failed.</td>
                                    <td>Żal i refleksja</td>
                                    <td>😔 Refleksyjne</td>
                                </tr>
                                <tr>
                                    <td>Krytyka przeszłości</td>
                                    <td>If + Past Perfect, would have + V3</td>
                                    <td>If you had told me, I could have helped.</td>
                                    <td>Ocena przeszłych działań</td>
                                    <td>⚖️ Oceniające</td>
                                </tr>
                                <tr>
                                    <td>Spekulacje historyczne</td>
                                    <td>If + Past Perfect, would have + V3</td>
                                    <td>If he had left, he would have arrived.</td>
                                    <td>Alternatywne scenariusze</td>
                                    <td>🔮 Spekulatywne</td>
                                </tr>
                                <tr>
                                    <td>Utracone możliwości</td>
                                    <td>If + Past Perfect, could have + V3</td>
                                    <td>If I had tried, I could have succeeded.</td>
                                    <td>Niezrealizowany potencjał</td>
                                    <td>💫 Potencjalne</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip success">
                            <h5>💡 Klucz do sukcesu</h5>
                            <p>Pamiętaj: <strong>Third Conditional to most do PRZESZŁOŚCI JAKA MOGŁA BYĆ, ALE NIE BYŁA</strong>. Używaj go by wyrażać żal, analizować przeszłe błędy i spekulować o alternatywnych historiach. Past Perfect po "if" i "would have" w wyniku tworzą portal do równoległej przeszłości, która istnieje tylko w naszej wyobraźni i refleksjach!</p>
                        </div>
                    </section>
                </>
            ),
        },
    ],
    mixed: [
        {
            id: 'mixed-form-comprehensive',
            title: 'Mixed Conditionals - Kompletny przewodnik 🔄',
            excerpt: 'Połączenie różnych czasów w okresach warunkowych - przeszłe decyzje wpływające na teraźniejszość i teraźniejsze cechy wpływające na przeszłość.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Mixed Conditionals - Kompletny przewodnik</h3>
                        <p className="muted">Łączenie różnych czasów w okresach warunkowych do opisywania złożonych zależności między przeszłością, teraźniejszością i przyszłością</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Fundamentalne zasady budowy</h4>
                                <div className="construction-formula-detailed">
                                    <div className="formula-breakdown">
                                        <span className="part condition">IF + PAST PERFECT</span>
                                        <span className="operator">,</span>
                                        <span className="part result">WOULD + BEZOKOLICZNIK</span>
                                    </div>
                                    <div className="formula-breakdown" style={{marginTop: '15px'}}>
                                        <span className="part condition">IF + PAST SIMPLE</span>
                                        <span className="operator">,</span>
                                        <span className="part result">WOULD HAVE + PAST PARTICIPLE</span>
                                    </div>
                                </div>

                                <div className="rules-list-detailed">
                                    <div className="rule-item-expanded">
                                        <h5>🎯 Kluczowa charakterystyka</h5>
                                        <div className="comparison-grid">
                                            <div className="comparison-item basic">
                                                <h6>Typ 1: Przeszłość → Teraźniejszość</h6>
                                                <p>Przeszłe decyzje wpływające na obecną sytuację</p>
                                                <p className="example">"If I had studied medicine, I would be a doctor now."</p>
                                                <p className="explanation">(Przeszła decyzja → obecna rzeczywistość)</p>
                                            </div>
                                            <div className="comparison-item modal">
                                                <h6>Typ 2: Teraźniejszość → Przeszłość</h6>
                                                <p>Obecne cechy charakteru wpływające na przeszłe działania</p>
                                                <p className="example">"If I were more careful, I wouldn't have broken the vase."</p>
                                                <p className="explanation">(Obecna cecha → przeszłe konsekwencje)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-item-expanded">
                                        <h5>🔄 Logika czasowa Mixed Conditionals</h5>
                                        <div className="omission-cases">
                                            <div className="case">
                                                <strong>Przeszłe okoliczności → obecne skutki:</strong>
                                                <p>"<em>If you had invested wisely</em>, you would be rich now."</p>
                                                <p className="explanation">Decyzja z przeszłości wpływa na stan obecny</p>
                                            </div>
                                            <div className="case">
                                                <strong>Obecne cechy → przeszłe konsekwencje:</strong>
                                                <p>"<em>If she were more organized</em>, she wouldn't have missed the deadline."</p>
                                                <p className="explanation">Stała cecha wpłynęła na przeszłe wydarzenie</p>
                                            </div>
                                            <div className="case">
                                                <strong>Łączenie różnych linii czasowych:</strong>
                                                <p>"Mixed Conditionals <em>łączą różne punkty w czasie</em>"</p>
                                                <p className="explanation">Tworzą most między przeszłością a teraźniejszością</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Główne zastosowania</h4>
                                <div className="tense-details">
                                    <div className="usage-context">
                                        <h5>Kiedy używamy?</h5>
                                        <div className="context-list">
                                            <div className="context-item">
                                                <span className="icon">🔄</span>
                                                <span className="text">Przeszłe decyzje → obecne skutki</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">⏰</span>
                                                <span className="text">Obecne cechy → przeszłe konsekwencje</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🤔</span>
                                                <span className="text">Żal i refleksje nad przeszłymi wyborami</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">💭</span>
                                                <span className="text">Hipotetyczne scenariusze życiowe</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🔮</span>
                                                <span className="text">Analiza alternatywnych ścieżek życiowych</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📚 Mixed Conditionals - Praktyczne przykłady</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🔄 Typ 1: Przeszły warunek → teraźniejszy skutek</h5>
                                <div className="example-group-expanded">
                                    <p>"If I had studied medicine, I would be a doctor now." - Gdybym studiował medycynę, byłbym teraz lekarzem. (przeszła decyzja → obecna rzeczywistość)</p>
                                    <p>"If you had taken that job in Paris, you would live in France now." - Gdybyś przyjął tamtą pracę w Paryżu, mieszkałbyś teraz we Francji.</p>
                                    <p>"If we had bought that house in 2020, we would own it completely now." - Gdybyśmy kupili ten dom w 2020, bylibyśmy teraz jego pełnymi właścicielami.</p>
                                    <p>"If she had learned to play the piano as a child, she could perform at concerts now." - Gdyby nauczyła się grać na pianinie jako dziecko, mogłaby teraz występować na koncertach.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>⏰ Typ 2: Teraźniejszy warunek → przeszły skutek</h5>
                                <div className="example-group-expanded">
                                    <p>"If I were more careful, I wouldn't have broken the vase." - Gdybym był bardziej ostrożny, nie stłukłbym wazy. (obecna cecha → przeszłe zdarzenie)</p>
                                    <p>"If she liked traveling, she would have visited more countries by now." - Gdyby lubiła podróżować, odwiedziłaby do tej pory więcej krajów.</p>
                                    <p>"If they were better at planning, they wouldn't have missed their flight." - Gdyby lepiej planowali, nie spóźniliby się na samolot.</p>
                                    <p>"If I were braver, I would have asked for a promotion last year." - Gdybym był odważniejszy, poprosiłbym o awans w zeszłym roku.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🤔 Wyrażanie żalu i refleksji</h5>
                                <div className="example-group-expanded">
                                    <p>"If I had saved money when I was younger, I wouldn't be struggling financially now." - Gdybym oszczędzał pieniądze, kiedy byłem młodszy, nie miałbym teraz problemów finansowych.</p>
                                    <p>"If you had listened to my advice, you wouldn't be in this situation now." - Gdybyś posłuchał mojej rady, nie byłbyś teraz w tej sytuacji.</p>
                                    <p>"If we had started earlier, we would have finished by now." - Gdybyśmy zaczęli wcześniej, skończylibyśmy już teraz.</p>
                                    <p>"If he were more responsible, he wouldn't have lost his job." - Gdyby był bardziej odpowiedzialny, nie straciłby pracy.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Szczegółowa analiza przypadków</h4>
                        <div className="analysis-grid">
                            <div className="analysis-card">
                                <h5>🔄 Scenariusz 1: Kariera zawodowa</h5>
                                <div className="analysis-details">
                                    <p><strong>Sytuacja wyjściowa:</strong> Nie studiowałem informatyki w przeszłości</p>
                                    <p><strong>Skutek teraz:</strong> Nie pracuję w branży IT</p>
                                    <p><strong>Mixed Conditional:</strong> "If I had studied computer science, I would work in tech now."</p>
                                    <p><strong>Analiza:</strong> Przeszła decyzja edukacyjna → obecna sytuacja zawodowa</p>
                                </div>
                            </div>

                            <div className="analysis-card">
                                <h5>⏰ Scenariusz 2: Relacje międzyludzkie</h5>
                                <div className="analysis-details">
                                    <p><strong>Sytuacja wyjściowa:</strong> Nie jestem osobą otwartą (cecha charakteru)</p>
                                    <p><strong>Skutek przeszły:</strong> Nie nawiązałem ważnych kontaktów</p>
                                    <p><strong>Mixed Conditional:</strong> "If I were more outgoing, I would have made more connections."</p>
                                    <p><strong>Analiza:</strong> Obecna cecha charakteru → przeszłe możliwości społeczne</p>
                                </div>
                            </div>

                            <div className="analysis-card">
                                <h5>💰 Scenariusz 3: Finanse osobiste</h5>
                                <div className="analysis-details">
                                    <p><strong>Sytuacja wyjściowa:</strong> Nie inwestowałem w Bitcoin w 2015</p>
                                    <p><strong>Skutek teraz:</strong> Nie jestem milionerem</p>
                                    <p><strong>Mixed Conditional:</strong> "If I had invested in Bitcoin, I would be a millionaire now."</p>
                                    <p><strong>Analiza:</strong> Przeszła decyzja inwestycyjna → obecny status finansowy</p>
                                </div>
                            </div>

                            <div className="analysis-card">
                                <h5>🌍 Scenariusz 4: Życie osobiste</h5>
                                <div className="analysis-details">
                                    <p><strong>Sytuacja wyjściowa:</strong> Jestem osobą nieśmiałą (cecha stała)</p>
                                    <p><strong>Skutek przeszły:</strong> Nie zaprosiłem jej na randkę</p>
                                    <p><strong>Mixed Conditional:</strong> "If I weren't so shy, I would have asked her out."</p>
                                    <p><strong>Analiza:</strong> Obecna cecha osobowości → przeszłe działania romantyczne</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔧 Czasowniki modalne w Mixed Conditionals</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🚗 Could - utracone możliwości</h5>
                                <div className="example-group-expanded">
                                    <p>"If I had learned Spanish in school, I could work as a translator now." - Gdybym nauczył się hiszpańskiego w szkole, mógłbym teraz pracować jako tłumacz.</p>
                                    <p>"If you had bought that property, you could be renting it out now." - Gdybyś kupił tę nieruchomość, mógłbyś ją teraz wynajmować.</p>
                                    <p>"If she had taken that course, she could be teaching it now." - Gdyby zrobiła ten kurs, mogłaby go teraz uczyć.</p>
                                    <p>"If we had started the business earlier, we could have competitors worried by now." - Gdybyśmy zaczęli biznes wcześniej, moglibyśmy już niepokoić konkurencję.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🎲 Might - hipotetyczne możliwości</h5>
                                <div className="example-group-expanded">
                                    <p>"If I had accepted that job offer, I might be living abroad now." - Gdybym przyjął tamtą ofertę pracy, może mieszkałbym teraz za granicą.</p>
                                    <p>"If you had studied harder, you might have passed that exam." - Gdybyś uczył się ciężej, może zdałbyś ten egzamin.</p>
                                    <p>"If they had invested in that startup, they might be millionaires now." - Gdyby zainwestowali w ten startup, może byliby teraz milionerami.</p>
                                    <p>"If he were more experienced, he might have handled that situation better." - Gdyby był bardziej doświadczony, może poradziłby sobie lepiej w tej sytuacji.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>💪 Should - przeszłe obowiązki</h5>
                                <div className="example-group-expanded">
                                    <p>"If I were more responsible, I should have saved more money." - Gdybym był bardziej odpowiedzialny, powinienem był zaoszczędzić więcej pieniędzy.</p>
                                    <p>"If you were truly committed, you should have finished that project by now." - Gdybyś był naprawdę zaangażowany, powinieneś był skończyć ten projekt.</p>
                                    <p>"If we were better planners, we should have anticipated these problems." - Gdybyśmy byli lepszymi planistami, powinniśmy byli przewidzieć te problemy.</p>
                                    <p>"If she were more professional, she should have met that deadline." - Gdyby była bardziej profesjonalna, powinna była dotrzymać tego terminu.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚡ Różnice: Mixed vs Standard Conditionals</h4>
                        <div className="meaning-comparison">
                            <div className="comparison-scenario">
                                <h5>Scenario: Decyzje edukacyjne</h5>
                                <div className="contrast-examples">
                                    <div className="third-example">
                                        <h6>Third Conditional</h6>
                                        <p>"If I had studied medicine, I would have become a doctor."</p>
                                        <p className="meaning">(Czysto przeszła hipoteza - mówimy tylko o przeszłości)</p>
                                        <p className="time-context">Przeszłość → Przeszłość</p>
                                    </div>
                                    <div className="mixed-example">
                                        <h6>Mixed Conditional</h6>
                                        <p>"If I had studied medicine, I would be a doctor now."</p>
                                        <p className="meaning">(Przeszła decyzja → obecna rzeczywistość)</p>
                                        <p className="time-context">Przeszłość → Teraźniejszość</p>
                                    </div>
                                </div>
                            </div>

                            <div className="comparison-scenario">
                                <h5>Scenario: Cechy charakteru</h5>
                                <div className="contrast-examples">
                                    <div className="second-example">
                                        <h6>Second Conditional</h6>
                                        <p>"If I were more organized, I would keep my desk tidy."</p>
                                        <p className="meaning">(Obecna cecha → obecne działanie)</p>
                                        <p className="time-context">Teraźniejszość → Teraźniejszość</p>
                                    </div>
                                    <div className="mixed-example">
                                        <h6>Mixed Conditional</h6>
                                        <p>"If I were more organized, I wouldn't have missed the deadline."</p>
                                        <p className="meaning">(Obecna cecha → przeszłe konsekwencje)</p>
                                        <p className="time-context">Teraźniejszość → Przeszłość</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Praktyczne zastosowania w życiu codziennym</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>💼 Sytuacje zawodowe</h5>
                                <div className="example-group-expanded">
                                    <p>"If I had negotiated better, I would have a higher salary now." - Gdybym lepiej negocjował, miałbym teraz wyższą pensję.</p>
                                    <p>"If you were more proactive, you would have gotten that promotion." - Gdybyś był bardziej proaktywny, dostałbyś ten awans.</p>
                                    <p>"If we had invested in training, our team would be more skilled now." - Gdybyśmy zainwestowali w szkolenia, nasz zespół byłby teraz bardziej wykwalifikowany.</p>
                                    <p>"If she weren't so perfectionistic, she would have finished the project on time." - Gdyby nie była taką perfekcjonistką, skończyłaby projekt na czas.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>❤️ Relacje osobiste</h5>
                                <div className="example-group-expanded">
                                    <p>"If I had been more understanding, we would still be together now." - Gdybym był bardziej wyrozumiały, bylibyśmy teraz jeszcze razem.</p>
                                    <p>"If you were more communicative, we wouldn't have had that argument." - Gdybyś był bardziej komunikatywny, nie mielibyśmy tej kłótni.</p>
                                    <p>"If they had trusted each other more, their relationship would be stronger now." - Gdyby bardziej sobie ufali, ich związek byłby teraz silniejszy.</p>
                                    <p>"If he were more romantic, he would have remembered our anniversary." - Gdyby był bardziej romantyczny, pamiętałby o naszej rocznicy.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>💰 Finanse i inwestycje</h5>
                                <div className="example-group-expanded">
                                    <p>"If I had bought Bitcoin when it was cheap, I would be retired now." - Gdybym kupił Bitcoina, kiedy był tani, byłbym teraz na emeryturze.</p>
                                    <p>"If you had saved just 10% of your income, you would have a safety net now." - Gdybyś oszczędzał tylko 10% swojego dochodu, miałbyś teraz poduszkę finansową.</p>
                                    <p>"If we weren't so impulsive with spending, we wouldn't be in debt now." - Gdybyśmy nie byli tak impulsywni w wydawaniu, nie bylibyśmy teraz w długach.</p>
                                    <p>"If she had diversified her investments, she wouldn't have lost so much money." - Gdyby dywersyfikowała swoje inwestycje, nie straciłaby tyle pieniędzy.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🚫 Typowe błędy i jak ich unikać</h4>
                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>Błędy w doborze czasów</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <div className="polish">Mieszanie nieprawidłowych czasów</div>
                                        <div className="incorrect">"If I would have studied, I would be smarter."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If I had studied, I would be smarter."</div>
                                        <div className="example">W warunku używamy Past Perfect, nie "would have"</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Nieprawidłowa kolejność czasów</div>
                                        <div className="incorrect">"If I am richer, I would have traveled more."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If I were richer, I would have traveled more."</div>
                                        <div className="example">Dla obecnych cech używamy Past Simple</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Błędne użycie "was" zamiast "were"</div>
                                        <div className="incorrect">"If I was more careful, I wouldn't have broken it."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If I were more careful, I wouldn't have broken it."</div>
                                        <div className="example">W języku formalnym używamy "were" dla wszystkich osób</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-category">
                                <h5>Błędy logiczne</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <div className="polish">Niespójność czasowa</div>
                                        <div className="incorrect">"If I had saved money, I will buy a car."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If I had saved money, I would buy a car."</div>
                                        <div className="example">Spójność: Past Perfect → would + bezokolicznik</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Błędne użycie dla faktów</div>
                                        <div className="incorrect">"If I had been born, I am alive."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"Since I was born, I am alive."</div>
                                        <div className="example">Dla faktów używamy innych konstrukcji</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Podwójne "would"</div>
                                        <div className="incorrect">"If I would have time, I would have helped."</div>
                                        <div className="arrow">→</div>
                                        <div className="correct">"If I had had time, I would have helped."</div>
                                        <div className="example">Tylko jedno "would" w zdaniu - w części głównej</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip warning">
                            <h5>⚠️ Złota zasada Mixed Conditionals</h5>
                            <p><strong>Typ 1:</strong> If + Past Perfect → would + bezokolicznik (przeszłość → teraźniejszość)<br/>
                                <strong>Typ 2:</strong> If + Past Simple → would have + past participle (teraźniejszość → przeszłość)<br/>
                                Zawsze sprawdzaj logiczny związek czasowy między warunkiem a skutkiem!</p>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Uzupełnij zdania używając Mixed Conditionals:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> If I ______ (study) harder in university, I ______ (have) a better job now.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="q1" value="a" />
                                                <span>had studied, would have</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="q1" value="b" />
                                                <span>studied, will have</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="q1" value="c" />
                                                <span>would have studied, had</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Past Perfect w warunku (przeszła decyzja) → would w wyniku (obecny skutek)</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> If she ______ (be) more confident, she ______ (ask) for that promotion last year.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="q2" value="a" />
                                                <span>were, would have asked</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="q2" value="b" />
                                                <span>was, will ask</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="q2" value="c" />
                                                <span>had been, would ask</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Past Simple w warunku (obecna cecha) → would have w wyniku (przeszła akcja)</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> If we ______ (not move) to London, we ______ (not meet) each other.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="q3" value="a" />
                                                <span>hadn't moved, wouldn't have met</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="q3" value="b" />
                                                <span>didn't move, wouldn't meet</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="q3" value="c" />
                                                <span>wouldn't move, hadn't met</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Przeczenie w Past Perfect → przeczenie w would have</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> If he ______ (like) cooking, he ______ (prepare) dinner yesterday.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="q4" value="a" />
                                                <span>liked, would have prepared</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="q4" value="b" />
                                                <span>had liked, would prepare</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="q4" value="c" />
                                                <span>would like, had prepared</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Obecna preferencja (Past Simple) → przeszła akcja (would have)</div>
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
                        <h4>📊 Podsumowanie Mixed Conditionals</h4>
                        <div className="tense-summary-detailed">
                            <table>
                                <thead>
                                <tr>
                                    <th>Typ</th>
                                    <th>Budowa</th>
                                    <th>Przykład</th>
                                    <th>Zastosowanie</th>
                                    <th>Logika czasowa</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Typ 1</td>
                                    <td>If + Past Perfect, would + base</td>
                                    <td>If I had studied, I would be a doctor.</td>
                                    <td>Przeszłe decyzje → obecne skutki</td>
                                    <td>🔄 Przeszłość → Teraźniejszość</td>
                                </tr>
                                <tr>
                                    <td>Typ 2</td>
                                    <td>If + Past Simple, would have + V3</td>
                                    <td>If I were brave, I would have asked.</td>
                                    <td>Obecne cechy → przeszłe działania</td>
                                    <td>⏰ Teraźniejszość → Przeszłość</td>
                                </tr>
                                <tr>
                                    <td>Z could</td>
                                    <td>If + Past Perfect, could + base</td>
                                    <td>If I had learned, I could work there.</td>
                                    <td>Utracone możliwości</td>
                                    <td>🚗 Możliwości</td>
                                </tr>
                                <tr>
                                    <td>Z might</td>
                                    <td>If + Past Perfect, might + base</td>
                                    <td>If I had tried, I might succeed.</td>
                                    <td>Hipotetyczne scenariusze</td>
                                    <td>🎲 Prawdopodobieństwo</td>
                                </tr>
                                <tr>
                                    <td>Przeczące</td>
                                    <td>If + hadn't + V3, wouldn't + base</td>
                                    <td>If I hadn't moved, I wouldn't be here.</td>
                                    <td>Alternatywne ścieżki</td>
                                    <td>🤔 Refleksje</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip success">
                            <h5>💡 Klucz do sukcesu</h5>
                            <p>Pamiętaj: <strong>Mixed Conditionals to mosty między czasami</strong>. Używaj ich, gdy chcesz pokazać, jak przeszłe decyzje kształtują teraźniejszość lub jak obecne cechy charakteru wpłynęły na przeszłe wydarzenia. To zaawansowane narzędzie do wyrażania złożonych refleksji życiowych i analizowania alternatywnych scenariuszy!</p>
                        </div>
                    </section>
                </>
            ),
        },
        {
            id: 'mixed-combinations-comprehensive',
            title: 'Zaawansowane kombinacje 🎯',
            excerpt: 'Rzadsze formy, specjalne przypadki i zaawansowane zastosowania mieszanych okresów warunkowych.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Mixed Conditionals - Zaawansowane kombinacje</h3>
                        <p className="muted">Poznaj rzadsze formy, specjalne przypadki i zaawansowane zastosowania mieszanych okresów warunkowych</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Rozszerzone zasady budowy</h4>
                                <div className="construction-formula-detailed">
                                    <div className="formula-breakdown">
                                        <span className="part condition">IF + PAST PERFECT</span>
                                        <span className="operator">,</span>
                                        <span className="part modal">MIGHT/COULD + BEZOKOLICZNIK</span>
                                    </div>
                                    <div className="formula-breakdown" style={{marginTop: '15px'}}>
                                        <span className="part condition">IF + PAST SIMPLE</span>
                                        <span className="operator">,</span>
                                        <span className="part modal">COULD HAVE + PAST PARTICIPLE</span>
                                    </div>
                                </div>

                                <div className="rules-list-detailed">
                                    <div className="rule-item-expanded">
                                        <h5>🎯 Zaawansowane kombinacje czasowe</h5>
                                        <div className="comparison-grid">
                                            <div className="comparison-item basic">
                                                <h6>Przeszłość → Przyszłość</h6>
                                                <p>Przeszłe działania wpływające na przyszłe możliwości</p>
                                                <p className="example">"If I had taken that course, I might get promoted next year."</p>
                                                <p className="explanation">(Przeszła decyzja → przyszła korzyść)</p>
                                            </div>
                                            <div className="comparison-item modal">
                                                <h6>Teraźniejszość → Przyszłość Perfect</h6>
                                                <p>Obecne cechy wpływające na przyszłe ukończone działania</p>
                                                <p className="example">"If I were more disciplined, I could have finished by tomorrow."</p>
                                                <p className="explanation">(Obecna cecha → przyszły rezultat)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-item-expanded">
                                        <h5>🔄 Niuanse znaczeniowe</h5>
                                        <div className="omission-cases">
                                            <div className="case">
                                                <strong>"might" vs "could":</strong>
                                                <p>"<em>If I had tried</em>, I might be successful now." (możliwość)</p>
                                                <p>"<em>If I had studied</em>, I could be an expert now." (zdolność)</p>
                                                <p className="explanation">"might" sugeruje możliwość, "could" - zdolność</p>
                                            </div>
                                            <div className="case">
                                                <strong>Stopniowalność prawdopodobieństwa:</strong>
                                                <p>"<em>If he were smarter</em>, he would have understood." (wysokie prawdopodobieństwo)</p>
                                                <p>"<em>If he were smarter</em>, he might have understood." (średnie prawdopodobieństwo)</p>
                                                <p className="explanation">Różne czasowniki modalne wyrażają różne stopnie pewności</p>
                                            </div>
                                            <div className="case">
                                                <strong>Kontekst formalny vs nieformalny:</strong>
                                                <p>"<em>If I were you</em>..." (formalnie)</p>
                                                <p>"<em>If I was you</em>..." (potocznie)</p>
                                                <p className="explanation">W języku pisanym preferujemy "were"</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Specjalne zastosowania</h4>
                                <div className="tense-details">
                                    <div className="usage-context">
                                        <h5>Zaawansowane scenariusze</h5>
                                        <div className="context-list">
                                            <div className="context-item">
                                                <span className="icon">🔮</span>
                                                <span className="text">Przewidywania oparte na przeszłości</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">⚡</span>
                                                <span className="text">Warunkowe możliwości</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🎯</span>
                                                <span className="text">Specjalne konstrukcje z "were to"</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">💡</span>
                                                <span className="text">Zaawansowane wyrażanie żalu</span>
                                            </div>
                                            <div className="context-item">
                                                <span className="icon">🚀</span>
                                                <span className="text">Kombinacje z czasownikami stanowymi</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔄 Rzadsze formy Mixed Conditionals</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>🔮 Przeszłość → Przyszłość</h5>
                                <div className="example-group-expanded">
                                    <p>"If I had invested in that company, I might be rich in five years." - Gdybym zainwestował w tę firmę, może byłbym bogaty za pięć lat.</p>
                                    <p>"If you had started learning Chinese, you could be fluent by next year." - Gdybyś zaczął uczyć się chińskiego, mógłbyś płynnie mówić w przyszłym roku.</p>
                                    <p>"If we had bought that property, it would be worth double in a decade." - Gdybyśmy kupili tę nieruchomość, byłaby warta dwa razy więcej za dekadę.</p>
                                    <p>"If she had accepted that job, she might be managing the department by now." - Gdyby przyjęła tę pracę, może kierowałaby już departamentem.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>⚡ Warunkowe możliwości</h5>
                                <div className="example-group-expanded">
                                    <p>"If I were a better swimmer, I could have rescued him." - Gdybym był lepszym pływakiem, mógłbym go uratować.</p>
                                    <p>"If you had a car, you could have given me a lift yesterday." - Gdybyś miał samochód, mógłbyś mnie podwieźć wczoraj.</p>
                                    <p>"If we knew the truth, we might have made a different decision." - Gdybyśmy znali prawdę, może podjęlibyśmy inną decyzję.</p>
                                    <p>"If he were more experienced, he could have handled that crisis." - Gdyby był bardziej doświadczony, mógłby poradzić sobie z tym kryzysem.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🎯 Konstrukcje z "were to"</h5>
                                <div className="example-group-expanded">
                                    <p>"If I were to have studied medicine, I would be a doctor now." - Gdybym miał studiować medycynę, byłbym teraz lekarzem.</p>
                                    <p>"If you were to have taken that risk, you might be successful now." - Gdybyś miał podjąć to ryzyko, może byłbyś teraz sukcesy.</p>
                                    <p>"If we were to have invested earlier, we would be retired now." - Gdybyśmy mieli zainwestować wcześniej, bylibyśmy teraz na emeryturze.</p>
                                    <p>"If she were to have accepted the offer, she would be living in Paris now." - Gdyby miała przyjąć ofertę, mieszkałaby teraz w Paryżu.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>💡 Zaawansowane wyrażanie żalu i refleksji</h4>
                        <div className="special-cases-detailed">
                            <div className="special-case-expanded">
                                <h5>😔 Głęboki żal życiowy</h5>
                                <div className="language-comparison">
                                    <div className="language-version">
                                        <h6>Żal dotyczący edukacji:</h6>
                                        <div className="example-box">
                                            <p>"If I had listened to my parents' advice, I would have a completely different career now."</p>
                                            <p>"If I hadn't dropped out of college, I might be in a leadership position today."</p>
                                            <p>"If I had pursued my passion, I would be happy with my work life now."</p>
                                        </div>
                                    </div>
                                    <div className="language-version">
                                        <h6>Żal dotyczący relacji:</h6>
                                        <div className="example-box">
                                            <p>"If I had been more understanding, we might still be together now."</p>
                                            <p>"If I had apologized when I should have, we wouldn't have lost touch."</p>
                                            <p>"If I weren't so stubborn, I would have many more friends today."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="special-case-expanded">
                                <h5>🤔 Refleksje nad ścieżkami życiowymi</h5>
                                <div className="usage-comparison">
                                    <div className="usage-type">
                                        <h6>Alternatywne kariery:</h6>
                                        <div className="example-box">
                                            <p>"If I had chosen art school, I would be an artist now instead of an accountant."</p>
                                            <p>"If I had taken that internship in New York, my whole career would be different."</p>
                                            <p>"If I weren't so risk-averse, I would have started my own business years ago."</p>
                                        </div>
                                    </div>
                                    <div className="usage-type">
                                        <h6>Życiowe decyzje:</h6>
                                        <div className="example-box">
                                            <p>"If we had moved abroad when we had the chance, our children would be bilingual now."</p>
                                            <p>"If I had bought that house when it was cheap, I would be mortgage-free now."</p>
                                            <p>"If I had prioritized health earlier, I wouldn't have these problems now."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🚀 Kombinacje z czasownikami stanowymi</h4>
                        <div className="practical-examples-grid">
                            <div className="example-category">
                                <h5>💭 Czasowniki percepcji i wiedzy</h5>
                                <div className="example-group-expanded">
                                    <p>"If I had known the truth, I would be making different decisions now." - Gdybym znał prawdę, podejmowałbym teraz inne decyzje.</p>
                                    <p>"If you understood the consequences, you wouldn't have acted so recklessly." - Gdybyś rozumiał konsekwencje, nie zachowałbyś się tak lekkomyślnie.</p>
                                    <p>"If we had realized the importance, we would be prioritizing this project now." - Gdybyśmy zdawali sobie sprawę z ważności, priorytetyzowalibyśmy teraz ten projekt.</p>
                                    <p>"If she believed in herself, she would have applied for that position." - Gdyby wierzyła w siebie, aplikowałaby na to stanowisko.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>❤️ Czasowniki emocji i preferencji</h5>
                                <div className="example-group-expanded">
                                    <p>"If I loved my job, I would have worked harder on that project." - Gdybym kochał swoją pracę, pracowałbym ciężej nad tym projektem.</p>
                                    <p>"If you valued our friendship, you wouldn't have lied to me." - Gdybyś cenił naszą przyjaźń, nie okłamałbyś mnie.</p>
                                    <p>"If we preferred city life, we would have moved to London years ago." - Gdybyśmy preferowali życie miejskie, przeprowadzilibyśmy się do Londynu lata temu.</p>
                                    <p>"If he cared about the environment, he would be driving an electric car now." - Gdyby troszczył się o środowisko, jeździłby teraz samochodem elektrycznym.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>🏠 Czasowniki posiadania i przynależności</h5>
                                <div className="example-group-expanded">
                                    <p>"If I had owned a computer earlier, I would be a programmer now." - Gdybym miał komputer wcześniej, byłbym teraz programistą.</p>
                                    <p>"If you belonged to that club, you would have received the invitation." - Gdybyś należał do tego klubu, dostałbyś zaproszenie.</p>
                                    <p>"If we had had more resources, we would be leading the market now." - Gdybyśmy mieli więcej zasobów, prowadzilibyśmy teraz na rynku.</p>
                                    <p>"If she possessed the necessary skills, she would have gotten the promotion." - Gdyby posiadała niezbędne umiejętności, dostałaby awans.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚡ Specjalne przypadki i wyjątki</h4>
                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>Konstrukcje z "wish" i Mixed Conditionals</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <div className="polish">"I wish" + Mixed Conditional</div>
                                        <div className="comparison">
                                            <p>"I wish I had studied harder. I would have a better job now."</p>
                                            <p>"I wish I were more organized. I wouldn't have missed the deadline."</p>
                                        </div>
                                        <div className="example">"wish" często łączy się z Mixed Conditionals w dłuższych wypowiedziach</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">"If only" dla emfazy</div>
                                        <div className="comparison">
                                            <p>"If only I had invested in Bitcoin!"</p>
                                            <p>"If only I were more confident!"</p>
                                        </div>
                                        <div className="example">"If only" wzmacnia wyrażanie żalu w Mixed Conditionals</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-category">
                                <h5>Zaawansowane konstrukcje czasowe</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <div className="polish">Czasowniki modalne w obu częściach</div>
                                        <div className="comparison">
                                            <p>"If I could have helped, I would have." (standardowe)</p>
                                            <p>"If I could have helped, I might be able to help now." (mixed)</p>
                                        </div>
                                        <div className="example">Rzadka, ale poprawna konstrukcja z modalnymi w obu częściach</div>
                                    </div>

                                    <div className="mistake-item">
                                        <div className="polish">Kombinacje z Continuous</div>
                                        <div className="comparison">
                                            <p>"If I had been paying attention, I would be understanding this now."</p>
                                            <p>"If I were working harder, I would have finished by yesterday."</p>
                                        </div>
                                        <div className="example">Continuous forms dodają aspekt trwania do Mixed Conditionals</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip warning">
                            <h5>💡 Zaawansowane użycie Mixed Conditionals</h5>
                            <p><strong>Najważniejsze to zachować logiczny związek czasowy</strong>. Nawet w najbardziej złożonych kombinacjach, relacja między warunkiem a skutkiem musi być jasna i spójna. Mixed Conditionals pozwalają na niezwykle precyzyjne wyrażanie złożonych myśli i refleksji!</p>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Zaawansowane ćwiczenia praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Przekształć zdania na Mixed Conditionals i wyjaśnij logikę czasową:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> Standard: "I didn't learn English as a child. I can't speak it fluently now."<br/>
                                            Mixed: ________________________________</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="mixed1" value="a" />
                                                <span>If I had learned English as a child, I would speak it fluently now.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="mixed1" value="b" />
                                                <span>If I learned English as a child, I would have spoken it fluently.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="mixed1" value="c" />
                                                <span>If I would have learned English, I spoke it fluently.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przeszła decyzja (nauka) → obecna umiejętność (płynność)</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> Standard: "She isn't careful with money. She spent all her savings."<br/>
                                            Mixed: ________________________________</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="mixed2" value="a" />
                                                <span>If she were careful with money, she wouldn't have spent all her savings.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="mixed2" value="b" />
                                                <span>If she had been careful with money, she wouldn't spend all her savings.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="mixed2" value="c" />
                                                <span>If she would be careful, she hadn't spent her savings.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Obecna cecha (nieostrożność) → przeszłe działanie (wydatki)</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> Użyj "might": "We didn't take the train. We are late for the meeting."<br/>
                                            Mixed: ________________________________</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="mixed3" value="a" />
                                                <span>If we had taken the train, we might be on time for the meeting.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="mixed3" value="b" />
                                                <span>If we took the train, we might have been on time.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="mixed3" value="c" />
                                                <span>If we would take the train, we might be on time.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">"might" wyraża możliwość, nie pewność</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> Popraw błąd: "If I would have studied medicine, I was a doctor now."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="mixed4" value="a" />
                                                <span>If I had studied medicine, I would be a doctor now.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="mixed4" value="b" />
                                                <span>If I studied medicine, I would have been a doctor.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="mixed4" value="c" />
                                                <span>If I would study medicine, I was a doctor.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Past Perfect w warunku + would w wyniku dla teraźniejszości</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> Wybierz poprawną kombinację: "If he ______ more confident, he ______ for that promotion last year."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="mixed5" value="a" />
                                                <span>was / would apply</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="mixed5" value="b" />
                                                <span>were / would have applied</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="mixed5" value="c" />
                                                <span>had been / would apply</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Obecna cecha (pewność siebie) → przeszła decyzja (aplikacja)</div>
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
                        <h4>📊 Podsumowanie zaawansowanych aspektów Mixed Conditionals</h4>
                        <div className="tense-summary-detailed">
                            <table>
                                <thead>
                                <tr>
                                    <th>Aspekt</th>
                                    <th>Konstrukcja</th>
                                    <th>Przykład</th>
                                    <th>Zastosowanie</th>
                                    <th>Uwagi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Przeszłość → Przyszłość</td>
                                    <td>If + Past Perfect, might + base</td>
                                    <td>If I had invested, I might be rich later.</td>
                                    <td>Przeszłe decyzje → przyszłe skutki</td>
                                    <td>🔮 Przewidywania</td>
                                </tr>
                                <tr>
                                    <td>Zaawansowane modalne</td>
                                    <td>If + Past Simple, could have + V3</td>
                                    <td>If I were stronger, I could have helped.</td>
                                    <td>Warunkowe możliwości</td>
                                    <td>⚡ Możliwości</td>
                                </tr>
                                <tr>
                                    <td>Konstrukcje z "were to"</td>
                                    <td>If + were to have + V3, would + base</td>
                                    <td>If I were to have studied...</td>
                                    <td>Hipotetyczne decyzje</td>
                                    <td>🎯 Formalne</td>
                                </tr>
                                <tr>
                                    <td>Czasowniki stanowe</td>
                                    <td>If + knew/loved/had, would + base</td>
                                    <td>If I knew, I would act differently.</td>
                                    <td>Stany mentalne/emocjonalne</td>
                                    <td>💭 Stany</td>
                                </tr>
                                <tr>
                                    <td>Zaawansowany żal</td>
                                    <td>If + Past Perfect, would be + V-ing</td>
                                    <td>If I had chosen art, I'd be creating.</td>
                                    <td>Głębokie refleksje</td>
                                    <td>😔 Refleksje</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip success">
                            <h5>💡 Mistrzostwo w Mixed Conditionals</h5>
                            <p>Pamiętaj: <strong>Mixed Conditionals to najwyższy poziom opanowania okresów warunkowych</strong>. Pozwalają one na wyrażanie niezwykle złożonych myśli, refleksji życiowych i analizowanie alternatywnych ścieżek. Opanowanie tych konstrukcji otwiera drzwi do prawdziwej płynności i precyzji w wyrażaniu siebie w języku angielskim!</p>
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
    React.useEffect(() => {
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


export default function Conditionals() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const active = section ?? 'zero'
    const topicId = searchParams.get('topic')
    const topics = TOPICS[active] ?? []
    const selected = topics.find(t => t.id === topicId)
    const basePath = `/gramatyka/okresy-warunkowe/${active}`

    return (
        <main className="topic-layout">
            <div className="container">
                <header className="topic-header">
                    <h2>Okresy warunkowe - Kompletny przewodnik</h2>
                    <p className="muted">Zero, First, Second, Third oraz Mixed Conditionals ze szczegółowymi przykładami</p>
                </header>

                <nav className="subnav" aria-label="Podstrony: Okresy warunkowe">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/gramatyka/okresy-warunkowe/${s.id}`}
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
                            <p className="muted">Wybierz temat, aby przejść do szczegółowego opisu z licznymi przykładami i wyjaśnieniami.</p>
                            <TopicsGrid basePath={basePath} active={active} />
                        </>
                    )}
                </article>
            </div>
        </main>
    )
}