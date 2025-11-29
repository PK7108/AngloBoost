import React, { useEffect } from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext.jsx'
import useDocumentMeta from '../../useDocumentMeta'
import '../../styles/topic-cards.css'
import '../../styles/exercises.css'
import { initializeGrammarExercises } from '../exercise-interactions.js';

const sections = [
    { id: 'had-sth-done', label: 'Had sth done' },
    { id: 'indirect-questions', label: 'Pytania pośrednie' },
    { id: 'unreal-past', label: 'Unreal Past' },
    { id: 'cleft-sentences', label: 'Cleft Sentences' },
    { id: 'participle-clauses', label: 'Zdania imiesłowowe' },
    { id: 'so-vs-such', label: 'So vs Such' },
    { id: 'inversion', label: 'Inwersja' },
    { id: 'inne-wyrażenia', label: 'Inne wyrażenia' },
]

const TOPICS = {
    'had-sth-done': [
        {
            id: 'had-sth-done-basics',
            title: 'Konstrukcja i użycie 🛠️',
            excerpt: 'Have/get + object + past participle - kiedy ktoś robi coś dla nas.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Had something done - konstrukcja "kazać coś zrobić"</h3>
                        <p className="muted">Używamy, gdy ktoś wykonuje dla nas jakąś usługę lub czynność</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Budowa konstrukcji</h4>
                                <div className="construction">
                                    <div className="construction-formula">
                                        <span className="subject">Podmiot</span> +
                                        <span className="verb">have/get</span> +
                                        <span className="object">dopełnienie</span> +
                                        <span className="participle">past participle</span>
                                    </div>

                                    <div className="construction-examples">
                                        <div className="example">
                                            <h5>Have (bardziej formalne)</h5>
                                            <p>"I <em>have my car serviced</em> every year." - Serwisuję samochód co roku.</p>
                                            <p>"She <em>had her hair cut</em> yesterday." - Obcięła sobie włosy wczoraj.</p>
                                            <p>"We <em>have our windows cleaned</em> monthly." - Myjemy okna co miesiąc.</p>
                                        </div>

                                        <div className="example">
                                            <h5>Get (bardziej nieformalne)</h5>
                                            <p>"I <em>get my clothes cleaned</em> at that shop." - Piorę ubrania w tym sklepie.</p>
                                            <p>"He <em>got his computer fixed</em> last week." - Kazał naprawić komputer w zeszłym tygodniu.</p>
                                            <p>"They <em>get their garden maintained</em> by professionals." - Pielęgnują ogród przez profesjonalistów.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Kiedy używamy?</h4>
                                <div className="usage-cases">
                                    <div className="usage-case">
                                        <h5>💇 Usługi profesjonalne</h5>
                                        <p>"We <em>had the house painted</em> by professionals." - Kazaliśmy pomalować dom profesjonalistom.</p>
                                        <p>"She <em>has her nails done</em> every two weeks." - Robi manicure co dwa tygodnie.</p>
                                    </div>

                                    <div className="usage-case">
                                        <h5>🔧 Naprawy</h5>
                                        <p>"I need to <em>get my watch repaired</em>." - Muszę kazać naprawić zegarek.</p>
                                        <p>"He <em>had his bike fixed</em> after the accident." - Kazał naprawić rower po wypadku.</p>
                                    </div>

                                    <div className="usage-case">
                                        <h5>🏥 Zabiegi medyczne</h5>
                                        <p>"She <em>had her tooth filled</em> at the dentist." - Zaplombowała ząb u dentysty.</p>
                                        <p>"He <em>got his eyes tested</em> yesterday." - Zbadał sobie wzrok wczoraj.</p>
                                    </div>

                                    <div className="usage-case">
                                        <h5>📝 Formalne sprawy</h5>
                                        <p>"They <em>had their documents translated</em>." - Kazali przetłumaczyć dokumenty.</p>
                                        <p>"We <em>got our passports renewed</em> last month." - Odnowiliśmy paszporty w zeszłym miesiącu.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⏰ Różne czasy gramatyczne</h4>
                        <div className="tense-examples">
                            <div className="tense-group">
                                <h5>Present Simple</h5>
                                <p>"I <em>have my car washed</em> every week." - Myję samochód co tydzień.</p>
                                <p>"She <em>has her dog groomed</em> regularly." - Regularnie czesze psa u groomera.</p>
                            </div>

                            <div className="tense-group">
                                <h5>Past Simple</h5>
                                <p>"He <em>had his suit cleaned</em> for the wedding." - Wyczyścił garnitur na ślub.</p>
                                <p>"We <em>had our photos taken</em> by a professional." - Zrobiliśmy sobie zdjęcia u profesjonalisty.</p>
                            </div>

                            <div className="tense-group">
                                <h5>Future Simple</h5>
                                <p>"We <em>will have the roof repaired</em> next month." - Naprawimy dach w przyszłym miesiącu.</p>
                                <p>"I <em>will get my hair dyed</em> tomorrow." - Po farbuję włosy jutro.</p>
                            </div>

                            <div className="tense-group">
                                <h5>Present Continuous</h5>
                                <p>"She <em>is having her nails done</em> right now." - Właśnie robi sobie manicure.</p>
                                <p>"They <em>are getting their house decorated</em> at the moment." - Właśnie remontują dom.</p>
                            </div>

                            <div className="tense-group">
                                <h5>Present Perfect</h5>
                                <p>"I <em>have had my computer upgraded</em> recently." - Niedawno zmodernizowałem komputer.</p>
                                <p>"She <em>has just had her ears pierced</em>." - Właśnie przekłuła sobie uszy.</p>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>💡 Różnice znaczeniowe</h4>
                        <div className="comparison">
                            <div className="comparison-case">
                                <h5>Had sth done (ktoś dla nas)</h5>
                                <p>"I <em>had my hair cut</em>." - Obciąłem włosy (fryzjer dla mnie)</p>
                                <p>"We <em>had our house built</em>." - Wybudowaliśmy dom (firma budowlana dla nas)</p>
                            </div>

                            <div className="comparison-case">
                                <h5>Did sth myself (samodzielnie)</h5>
                                <p>"I <em>cut my hair</em>." - Obciąłem sobie włosy (sam to zrobiłem)</p>
                                <p>"We <em>built our house</em>." - Sami wybudowaliśmy dom</p>
                            </div>
                        </div>

                        <div className="grammar-tip">
                            <h5>💡 Ważna uwaga!</h5>
                            <p>Konstrukcja "have something done" może mieć również znaczenie <strong>pasywne</strong>, gdy coś nieprzyjemnego przytrafia się komuś:</p>
                            <div className="example-pair">
                                <div className="example">
                                    <p>"I <em>had my car stolen</em> last night." - Skradziono mi samochód zeszłej nocy.</p>
                                    <p>"He <em>had his wallet taken</em> in the crowd." - Skradziono mu portfel w tłumie.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Częste błędy i wyjątki</h4>
                        <div className="common-mistakes">
                            <div className="mistake-group">
                                <h5>❌ Niepoprawne użycie czasownika</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">I had my car to repair</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I had my car repaired</span>
                                        <span className="reason">(używamy past participle, nie infinitive)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">She got cut her hair</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">She got her hair cut</span>
                                        <span className="reason">(zachowujemy szyk: get + object + past participle)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-group">
                                <h5>❌ Pomijanie dopełnienia</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">I need to have repaired</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I need to have my watch repaired</span>
                                        <span className="reason">(konieczne jest dopełnienie)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip warning">
                            <h5>💡 Różnica między HAVE i GET</h5>
                            <div className="comparison-examples">
                                <div className="comparison-pair">
                                    <div className="case">
                                        <span className="title">HAVE (bardziej formalne):</span>
                                        <p>"I <em>have my accounts checked</em> by an accountant every year."</p>
                                        <p>"She <em>had the contract reviewed</em> by a lawyer."</p>
                                    </div>
                                    <div className="case">
                                        <span className="title">GET (bardziej nieformalne):</span>
                                        <p>"I <em>get my hair cut</em> at that new salon."</p>
                                        <p>"He <em>got his car washed</em> at the gas station."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Przekształć zdania używając konstrukcji "have something done":</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> A professional is painting their house.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="q1" value="a" />
                                                <span>They are having their house painted.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="q1" value="b" />
                                                <span>They have painted their house.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="q1" value="c" />
                                                <span>They are painting their house.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Używamy present continuous + past participle</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> Someone stole my bicycle yesterday.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="q2" value="a" />
                                                <span>I stole my bicycle yesterday.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="q2" value="b" />
                                                <span>I had my bicycle stolen yesterday.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="q2" value="c" />
                                                <span>I have stolen my bicycle yesterday.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">W znaczeniu pasywnym - coś nieprzyjemnego się przydarzyło</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> The mechanic services my car every six months.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="q3" value="a" />
                                                <span>I service my car every six months.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="q3" value="b" />
                                                <span>I have my car serviced every six months.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="q3" value="c" />
                                                <span>I am servicing my car every six months.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Present Simple dla regularnych czynności</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> Someone is going to deliver the package tomorrow.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="q4" value="a" />
                                                <span>I deliver the package tomorrow.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="q4" value="b" />
                                                <span>I am delivering the package tomorrow.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="q4" value="c" />
                                                <span>I will have the package delivered tomorrow.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Future Simple dla przyszłych planów</div>
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
                        <h4>📚 Dodatkowe przykłady z życia</h4>
                        <div className="real-life-examples">
                            <div className="example-category">
                                <h5>🏠 Dom i mieszkanie</h5>
                                <div className="example-group-expanded">
                                    <p>"We <em>had our kitchen renovated</em> last summer." - Remontowaliśmy kuchnię w zeszłe lato.</p>
                                    <p>"I <em>get my carpets cleaned</em> professionally twice a year." - Piorę dywany profesjonalnie dwa razy w roku.</p>
                                    <p>"They <em>are having a swimming pool built</em> in their garden." - Budują basen w ogrodzie.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>💼 Praca i biznes</h5>
                                <div className="example-group-expanded">
                                    <p>"The company <em>has its website updated</em> regularly." - Firma regularnie aktualizuje stronę internetową.</p>
                                    <p>"She <em>had her CV written</em> by a professional." - Kazala napisać CV profesjonaliście.</p>
                                    <p>"We <em>get our taxes prepared</em> by an accountant." - Rozliczamy podatki przez księgowego.</p>
                                </div>
                            </div>

                            <div className="example-category">
                                <h5>👤 Wygląd i zdrowie</h5>
                                <div className="example-group-expanded">
                                    <p>"He <em>gets his beard trimmed</em> every Friday." - Strzyże brodę co piątek.</p>
                                    <p>"I <em>had my blood tested</em> last week." - Zrobiłem badania krwi w zeszłym tygodniu.</p>
                                    <p>"She <em>is having her teeth whitened</em> next month." - Będzie wybielać zęby w przyszłym miesiącu.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Podsumowanie - Kiedy używać?</h4>
                        <div className="summary-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Sytuacja</th>
                                    <th>Przykład</th>
                                    <th>Wyjaśnienie</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Usługi profesjonalne</td>
                                    <td>have hair cut</td>
                                    <td>Gdy specjalista wykonuje usługę</td>
                                </tr>
                                <tr>
                                    <td>Naprawy</td>
                                    <td>get car fixed</td>
                                    <td>Gdy ktoś naprawia dla nas</td>
                                </tr>
                                <tr>
                                    <td>Zabiegi medyczne</td>
                                    <td>have teeth checked</td>
                                    <td>Wizyty u lekarzy, dentystów</td>
                                </tr>
                                <tr>
                                    <td>Sprawy formalne</td>
                                    <td>have documents translated</td>
                                    <td>Tłumaczenia, legalizacje</td>
                                </tr>
                                <tr>
                                    <td>Wydarzenia nieprzyjemne</td>
                                    <td>had wallet stolen</td>
                                    <td>Gdy coś niechcianego się przydarza</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip">
                            <h5>💡 Złota zasada</h5>
                            <p>Używaj konstrukcji "have/get something done" zawsze, gdy <strong>ktoś inny wykonuje czynność dla Ciebie</strong>, a nie robisz tego samodzielnie!</p>
                        </div>
                    </section>
                </>
            ),
        },
        {
            id: 'had-sth-done-advanced',
            title: 'Zaawansowane użycie 🎓',
            excerpt: 'Niuanse znaczeniowe, czasowniki złożone i sytuacje specjalne.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Zaawansowane aspekty konstrukcji "have something done"</h3>
                        <p className="muted">Niuanse znaczeniowe, czasowniki złożone i specjalne przypadki użycia</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Różnice znaczeniowe w kontekście</h4>
                                <div className="meaning-nuances">
                                    <div className="nuance-case">
                                        <h5>Planowane vs nieplanowane</h5>
                                        <div className="example-pair">
                                            <div className="example">
                                                <p>"I <em>had my hair cut</em> yesterday." (planowane)</p>
                                                <p className="translation">Umówiłem się na strzyżenie</p>
                                            </div>
                                            <div className="example">
                                                <p>"I <em>had my hair cut</em> by mistake!" (nieplanowane)</p>
                                                <p className="translation">Fryzjer omyłkowo za krótko obciął</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="nuance-case">
                                        <h5>Pozytywne vs negatywne konsekwencje</h5>
                                        <div className="example-pair">
                                            <div className="example">
                                                <p>"We <em>had our house valued</em>." (pozytywne)</p>
                                                <p className="translation">Chcieliśmy znać wartość domu</p>
                                            </div>
                                            <div className="example">
                                                <p>"We <em>had our house repossessed</em>." (negatywne)</p>
                                                <p className="translation">Bank przejął dom</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Czasowniki złożone (phrasal verbs)</h4>
                                <div className="phrasal-verbs">
                                    <div className="phrasal-group">
                                        <h5>Zachowujemy przyimek na końcu</h5>
                                        <div className="example-group-expanded">
                                            <p>"I <em>had my application looked into</em> by the committee."</p>
                                            <p>"She <em>got her proposal turned down</em> by the board."</p>
                                            <p>"We <em>had the problem dealt with</em> immediately."</p>
                                            <p>"He <em>had his name put forward</em> for the promotion."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⏰ Zaawansowane czasy gramatyczne</h4>
                        <div className="advanced-tenses">
                            <div className="tense-category">
                                <h5>Past Perfect Simple</h5>
                                <div className="tense-examples-detailed">
                                    <div className="example-group">
                                        <p>"By the time we arrived, they <em>had already had the room decorated</em>."</p>
                                        <p className="translation">Zanim przyjechaliśmy, oni już kazali udekorować pokój.</p>
                                        <p className="explanation">Czynność wykonana przed inną przeszłą czynnością</p>
                                    </div>
                                    <div className="example-group">
                                        <p>"She <em>had had her thesis reviewed</em> before submitting it."</p>
                                        <p className="translation">Kazała przejrzeć swoją pracę dyplomową przed złożeniem.</p>
                                        <p className="explanation">Czynność ukończona przed określonym momentem w przeszłości</p>
                                    </div>
                                    <div className="example-group">
                                        <p>"I realized I <em>had had my passport stolen</em> at the airport."</p>
                                        <p className="translation">Zorientowałem się, że skradziono mi paszport na lotnisku.</p>
                                        <p className="explanation">Doświadczenie z przeszłości mające wpływ na późniejszą sytuację</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tense-category">
                                <h5>Past Perfect Continuous</h5>
                                <div className="tense-examples-detailed">
                                    <div className="example-group">
                                        <p>"They <em>had been having their house renovated</em> for six months when they ran out of money."</p>
                                        <p className="translation">Od sześciu miesięcy remontowali dom, kiedy skończyły im się pieniądze.</p>
                                        <p className="explanation">Długotrwała czynność w przeszłości przerwana przez inną czynność</p>
                                    </div>
                                    <div className="example-group">
                                        <p>"He <em>had been getting his car serviced</em> at the same garage for years before it closed."</p>
                                        <p className="translation">Przez lata serwisował samochód w tym samym warsztacie, zanim został zamknięty.</p>
                                        <p className="explanation">Długotrwała, regularna czynność w przeszłości</p>
                                    </div>
                                    <div className="example-group">
                                        <p>"We <em>had been having our documents processed</em> for weeks when we finally got approval."</p>
                                        <p className="translation">Od tygodni załatwialiśmy dokumenty, kiedy wreszcie dostaliśmy zgodę.</p>
                                        <p className="explanation">Czynność trwająca przez pewien okres w przeszłości</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tense-category">
                                <h5>Future Continuous</h5>
                                <div className="tense-examples-detailed">
                                    <div className="example-group">
                                        <p>"This time tomorrow, I <em>will be having my interview conducted</em>."</p>
                                        <p className="translation">Jutro o tej porze będę miał przeprowadzanaą rozmowę kwalifikacyjną.</p>
                                        <p className="explanation">Czynność w trakcie trwania w określonym momencie przyszłości</p>
                                    </div>
                                    <div className="example-group">
                                        <p>"At 3 PM, she <em>will be getting her hair styled</em> for the wedding."</p>
                                        <p className="translation">O 15:00 będzie miała układane włosy na ślub.</p>
                                        <p className="explanation">Zaplanowana czynność w konkretnym momencie przyszłości</p>
                                    </div>
                                    <div className="example-group">
                                        <p>"While you're on vacation, we <em>will be having the office refurbished</em>."</p>
                                        <p className="translation">Podczas gdy ty będziesz na wakacjach, my będziemy remontować biuro.</p>
                                        <p className="explanation">Czynność trwająca w tle podczas innej przyszłej czynności</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tense-category">
                                <h5>Future Perfect</h5>
                                <div className="tense-examples-detailed">
                                    <div className="example-group">
                                        <p>"By next month, we <em>will have had the entire project completed</em>."</p>
                                        <p className="translation">Do przyszłego miesiąca będziemy mieli ukończony cały projekt.</p>
                                        <p className="explanation">Czynność ukończona przed określonym momentem w przyszłości</p>
                                    </div>
                                    <div className="example-group">
                                        <p>"By the time you return, I <em>will have had all the arrangements made</em>."</p>
                                        <p className="translation">Zanim wrócisz, będę miał poczynione wszystkie przygotowania.</p>
                                        <p className="explanation">Rezultat widoczny w przyszłości</p>
                                    </div>
                                    <div className="example-group">
                                        <p>"She <em>will have had her dissertation evaluated</em> by three experts by Friday."</p>
                                        <p className="translation">Do piątku będzie miała ocenioną dysertację przez trzech ekspertów.</p>
                                        <p className="explanation">Czynność wykonana przed określoną datą w przyszłości</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tense-category">
                                <h5>Future Perfect Continuous</h5>
                                <div className="tense-examples-detailed">
                                    <div className="example-group">
                                        <p>"By 2025, they <em>will have been having their house renovated</em> for two years."</p>
                                        <p className="translation">Do 2025 roku będą remontować dom od dwóch lat.</p>
                                        <p className="explanation">Podkreślenie czasu trwania czynności do określonego momentu w przyszłości</p>
                                    </div>
                                    <div className="example-group">
                                        <p>"In September, I <em>will have been getting my teeth checked</em> by the same dentist for a decade."</p>
                                        <p className="translation">We wrześniu minie dekada, odkąd badam zęby u tego samego dentysty.</p>
                                        <p className="explanation">Długotrwała czynność trwająca do określonego momentu w przyszłości</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚡ Sytuacje specjalne</h4>
                        <div className="special-situations">
                            <div className="situation-case">
                                <h5>Z podaniem wykonawcy</h5>
                                <div className="example-group-expanded">
                                    <p>"I <em>had the portrait painted by a famous artist</em>."</p>
                                    <p>"She <em>got her dress made by a top designer</em>."</p>
                                    <p>"We <em>had the house built by a local company</em>."</p>
                                    <p>"He <em>will have the contract reviewed by our legal team</em>."</p>
                                </div>
                            </div>

                            <div className="situation-case">
                                <h5>Z określeniem miejsca</h5>
                                <div className="example-group-expanded">
                                    <p>"He <em>had his suit made in Italy</em>."</p>
                                    <p>"I <em>get my car serviced at the official dealer</em>."</p>
                                    <p>"They <em>had their wedding photos taken in Paris</em>."</p>
                                    <p>"We <em>are having the ceremony held at the city hall</em>."</p>
                                </div>
                            </div>

                            <div className="situation-case">
                                <h5>Z określeniem czasu</h5>
                                <div className="example-group-expanded">
                                    <p>"I <em>had my computer fixed while I was on vacation</em>."</p>
                                    <p>"She <em>gets her nails done every fortnight</em>."</p>
                                    <p>"They <em>will have the building inspected before the purchase</em>."</p>
                                    <p>"We <em>had the documents translated within 24 hours</em>."</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Zaawansowane ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Uzupełnij zdania używając odpowiedniego czasu konstrukcji "have something done":</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> By the end of next year, we ______ (the new office/build).</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="adv1" value="a" />
                                                <span>will have had the new office built</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adv1" value="b" />
                                                <span>will have the new office built</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adv1" value="c" />
                                                <span>are having the new office built</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Future Perfect - czynność ukończona przed określonym momentem w przyszłości</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> When I called him, he ______ (his car/repair) for three hours.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="adv2" value="a" />
                                                <span>had been having his car repaired</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adv2" value="b" />
                                                <span>had his car repaired</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adv2" value="c" />
                                                <span>was having his car repaired</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Past Perfect Continuous - długotrwała czynność w przeszłości</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> This time next week, I ______ (my dissertation/defend).</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="adv3" value="a" />
                                                <span>will be having my dissertation defended</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adv3" value="b" />
                                                <span>will have my dissertation defended</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adv3" value="c" />
                                                <span>have my dissertation defended</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Future Continuous - czynność w trakcie trwania w określonym momencie przyszłości</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> By 2025, they ______ (their house/renovate) for two years.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="adv4" value="a" />
                                                <span>will have been having their house renovated</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adv4" value="b" />
                                                <span>will have their house renovated</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adv4" value="c" />
                                                <span>are having their house renovated</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Future Perfect Continuous - podkreślenie czasu trwania czynności</div>
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
                </>
            ),
        }
    ],
    'indirect-questions': [
        {
            id: 'indirect-questions-form',
            title: 'Forma i szyk zdania 🗣️',
            excerpt: 'Could you tell me where the station is? - grzeczniejsze pytania.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Pytania pośrednie (Indirect Questions)</h3>
                        <p className="muted">Grzeczniejsza forma zadawania pytań, używana w sytuacjach formalnych</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Budowa pytań pośrednich</h4>
                                <div className="question-structure">
                                    <div className="direct-indirect">
                                        <div className="question-type">
                                            <h5>Pytanie bezpośrednie</h5>
                                            <p>"<em>Where is the station?</em>" - Gdzie jest stacja?</p>
                                            <p>"<em>What time does the shop open?</em>" - O której otwiera się sklep?</p>
                                            <p>"<em>Did she finish the report?</em>" - Czy ona skończyła raport?</p>
                                        </div>

                                        <div className="arrow">→</div>

                                        <div className="question-type">
                                            <h5>Pytanie pośrednie</h5>
                                            <p>"<em>Could you tell me where the station is?</em>" - Czy możesz mi powiedzieć, gdzie jest stacja?</p>
                                            <p>"<em>Do you know what time the shop opens?</em>" - Czy wiesz, o której otwiera się sklep?</p>
                                            <p>"<em>I wonder if she finished the report.</em>" - Zastanawiam się, czy ona skończyła raport.</p>
                                        </div>
                                    </div>

                                    <div className="structure-rules">
                                        <h5>Zasady przekształcania:</h5>
                                        <div className="rules-list">
                                            <div className="rule-item">
                                                <strong>Brak inwersji</strong> - podmiot przed czasownikiem
                                                <div className="example-pair">
                                                    <span className="incorrect">where is the station</span>
                                                    <span className="arrow">→</span>
                                                    <span className="correct">where the station is</span>
                                                </div>
                                            </div>
                                            <div className="rule-item">
                                                <strong>Brak operatora do/does/did</strong>
                                                <div className="example-pair">
                                                    <span className="incorrect">what time does the shop open</span>
                                                    <span className="arrow">→</span>
                                                    <span className="correct">what time the shop opens</span>
                                                </div>
                                            </div>
                                            <div className="rule-item">
                                                <strong>Zachowanie szyku zdania twierdzącego</strong>
                                                <div className="example-pair">
                                                    <span className="incorrect">when will they come</span>
                                                    <span className="arrow">→</span>
                                                    <span className="correct">when they will come</span>
                                                </div>
                                            </div>
                                            <div className="rule-item">
                                                <strong>Użycie "if" lub "whether" dla pytań tak/nie</strong>
                                                <div className="example-pair">
                                                    <span className="incorrect">is he coming</span>
                                                    <span className="arrow">→</span>
                                                    <span className="correct">if he is coming</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Wyrażenia wprowadzające</h4>
                                <div className="introductory-phrases">
                                    <div className="phrase-group">
                                        <h5>Prośby i pytania</h5>
                                        <ul>
                                            <li><strong>Could you tell me...</strong> - Czy mógłbyś mi powiedzieć...</li>
                                            <li><strong>Can you tell me...</strong> - Czy możesz mi powiedzieć...</li>
                                            <li><strong>Do you know...</strong> - Czy wiesz...</li>
                                            <li><strong>I wonder...</strong> - Zastanawiam się...</li>
                                            <li><strong>I'd like to know...</strong> - Chciałbym wiedzieć...</li>
                                            <li><strong>Could you explain...</strong> - Czy mógłbyś wyjaśnić...</li>
                                            <li><strong>Would you mind telling me...</strong> - Czy miałbyś coś przeciwko powiedzeniu mi...</li>
                                        </ul>
                                    </div>

                                    <div className="phrase-group">
                                        <h5>Wyrażenia formalne</h5>
                                        <ul>
                                            <li><strong>I was wondering...</strong> - Zastanawiałem się...</li>
                                            <li><strong>Do you have any idea...</strong> - Czy masz jakieś pojęcie...</li>
                                            <li><strong>Could you possibly tell me...</strong> - Czy mógłbyś ewentualnie powiedzieć mi...</li>
                                            <li><strong>I'd be grateful if you could tell me...</strong> - Byłbym wdzięczny, gdybyś mógł mi powiedzieć...</li>
                                            <li><strong>Would it be possible to know...</strong> - Czy byłoby możliwe dowiedzieć się...</li>
                                            <li><strong>Might I ask...</strong> - Czy mógłbym zapytać...</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📚 Przykłady przekształceń</h4>
                        <div className="transformation-examples">
                            <div className="transformation-category">
                                <h5>Pytania z "where", "when", "why", "how"</h5>
                                <div className="transformation">
                                    <div className="original">
                                        <p>"Where <em>does she live</em>?"</p>
                                    </div>
                                    <div className="transformed">
                                        <p>"Do you know where <em>she lives</em>?"</p>
                                    </div>
                                </div>
                                <div className="transformation">
                                    <div className="original">
                                        <p>"When <em>will they arrive</em>?"</p>
                                    </div>
                                    <div className="transformed">
                                        <p>"Could you tell me when <em>they will arrive</em>?"</p>
                                    </div>
                                </div>
                                <div className="transformation">
                                    <div className="original">
                                        <p>"Why <em>did he leave</em> so early?"</p>
                                    </div>
                                    <div className="transformed">
                                        <p>"I wonder why <em>he left</em> so early."</p>
                                    </div>
                                </div>
                            </div>

                            <div className="transformation-category">
                                <h5>Pytania tak/nie (yes/no questions)</h5>
                                <div className="transformation">
                                    <div className="original">
                                        <p>"<em>Is he coming</em> to the party?"</p>
                                    </div>
                                    <div className="transformed">
                                        <p>"Do you know <em>if he is coming</em> to the party?"</p>
                                    </div>
                                </div>
                                <div className="transformation">
                                    <div className="original">
                                        <p>"<em>Have they finished</em> the project?"</p>
                                    </div>
                                    <div className="transformed">
                                        <p>"Could you tell me <em>whether they have finished</em> the project?"</p>
                                    </div>
                                </div>
                                <div className="transformation">
                                    <div className="original">
                                        <p>"<em>Does this bus go</em> to the city center?"</p>
                                    </div>
                                    <div className="transformed">
                                        <p>"Do you know <em>if this bus goes</em> to the city center?"</p>
                                    </div>
                                </div>
                            </div>

                            <div className="transformation-category">
                                <h5>Pytania z czasami złożonymi</h5>
                                <div className="transformation">
                                    <div className="original">
                                        <p>"What <em>has she been doing</em> all day?"</p>
                                    </div>
                                    <div className="transformed">
                                        <p>"I'd like to know what <em>she has been doing</em> all day."</p>
                                    </div>
                                </div>
                                <div className="transformation">
                                    <div className="original">
                                        <p>"How long <em>had they been waiting</em> before you arrived?"</p>
                                    </div>
                                    <div className="transformed">
                                        <p>"Could you tell me how long <em>they had been waiting</em> before you arrived?"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>💡 Kiedy używać pytań pośrednich?</h4>
                        <div className="usage-context">
                            <div className="context-case">
                                <h5>✅ Sytuacje formalne</h5>
                                <p>W urzędach, w pracy, z nieznajomymi, w korespondencji biznesowej</p>
                                <div className="example-group-expanded">
                                    <p>"<em>Could you tell me</em> where the manager's office is?"</p>
                                    <p>"<em>I was wondering</em> if you could help me with this matter."</p>
                                    <p>"<em>Would you mind telling me</em> what the procedure is?"</p>
                                </div>
                            </div>

                            <div className="context-case">
                                <h5>✅ Prośby o pomoc i informacje</h5>
                                <p>Kiedy potrzebujemy pomocy, wskazówek lub szczegółowych informacji</p>
                                <div className="example-group-expanded">
                                    <p>"<em>I wonder if</em> you could help me with this."</p>
                                    <p>"<em>Do you have any idea</em> how this machine works?"</p>
                                    <p>"<em>Could you explain</em> why this happened?"</p>
                                </div>
                            </div>

                            <div className="context-case">
                                <h5>✅ Wyrażanie wątpliwości lub ciekawości</h5>
                                <p>Gdy chcemy wyrazić wątpliwość lub zainteresowanie w kulturalny sposób</p>
                                <div className="example-group-expanded">
                                    <p>"<em>I'd like to know</em> more about your experience."</p>
                                    <p>"<em>I was wondering</em> whether you had considered other options."</p>
                                    <p>"<em>Do you know</em> when the results will be available?"</p>
                                </div>
                            </div>

                            <div className="context-case">
                                <h5>❌ Sytuacje nieformalne</h5>
                                <p>Z przyjaciółmi, rodziną, w swobodnych rozmowach - używamy pytań bezpośrednich</p>
                                <div className="example-group-expanded">
                                    <p>"Where are we meeting?" (zamiast "Could you tell me where we are meeting?")</p>
                                    <p>"What time does the movie start?" (zamiast "Do you know what time the movie starts?")</p>
                                    <p>"Are you coming?" (zamiast "I wonder if you are coming.")</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Częste błędy i wyjątki</h4>
                        <div className="common-mistakes">
                            <div className="mistake-group">
                                <h5>❌ Używanie inwersji w pytaniach pośrednich</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">Could you tell me where is the station?</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Could you tell me where the station is?</span>
                                        <span className="reason">(brak inwersji - szyk zdania twierdzącego)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">Do you know when will they arrive?</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Do you know when they will arrive?</span>
                                        <span className="reason">(podmiot przed czasownikiem)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-group">
                                <h5>❌ Pomijanie "if" lub "whether" w pytaniach tak/nie</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">I wonder he is coming.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I wonder if he is coming.</span>
                                        <span className="reason">(konieczne "if" lub "whether")</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">Could you tell me does this bus go to downtown?</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Could you tell me if this bus goes to downtown?</span>
                                        <span className="reason">(brak operatora "does")</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Różnica między "if" a "whether"</h5>
                                <div className="comparison-examples">
                                    <div className="comparison-pair">
                                        <div className="case">
                                            <span className="title">IF (bardziej powszechne):</span>
                                            <p>"Can you tell me <em>if</em> the meeting is tomorrow?"</p>
                                            <p>"I wonder <em>if</em> she received my email."</p>
                                        </div>
                                        <div className="case">
                                            <span className="title">WHETHER (bardziej formalne):</span>
                                            <p>"Please let me know <em>whether</em> you can attend."</p>
                                            <p>"We need to decide <em>whether</em> to proceed with the plan."</p>
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
                                <h5>Przekształć pytania bezpośrednie na pośrednie:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> "What time does the bank open?"</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="iq1" value="a" />
                                                <span>Could you tell me what time does the bank open?</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="iq1" value="b" />
                                                <span>Could you tell me what time the bank opens?</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="iq1" value="c" />
                                                <span>Could you tell me what time the bank open?</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Brak inwersji i brak operatora "does" - używamy szyku zdania twierdzącego</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> "Is there a pharmacy near here?"</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="iq2" value="a" />
                                                <span>Do you know is there a pharmacy near here?</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="iq2" value="b" />
                                                <span>Do you know if there is a pharmacy near here?</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="iq2" value="c" />
                                                <span>Do you know there is a pharmacy near here?</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Pytania tak/nie wymagają "if" lub "whether"</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> "Where did you put the keys?"</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="iq3" value="a" />
                                                <span>I wonder where did you put the keys.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="iq3" value="b" />
                                                <span>I wonder where you put the keys.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="iq3" value="c" />
                                                <span>I wonder where you did put the keys.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Brak operatora "did" - używamy czasu Past Simple bez pomocy</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> "How long have you been waiting?"</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="iq4" value="a" />
                                                <span>Could you tell me how long have you been waiting?</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="iq4" value="b" />
                                                <span>Could you tell me how long you have been waiting?</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="iq4" value="c" />
                                                <span>Could you tell me how long you have been waited?</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Zachowujemy szyk zdania twierdzącego - podmiot przed czasownikiem</div>
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
                        <h4>🎯 Podsumowanie - Kluczowe zasady</h4>
                        <div className="summary-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Zasada</th>
                                    <th>Przykład błędny</th>
                                    <th>Przykład poprawny</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Brak inwersji</td>
                                    <td>where <strong>is the</strong> station</td>
                                    <td>where <strong>the station is</strong></td>
                                </tr>
                                <tr>
                                    <td>Brak operatora do/does/did</td>
                                    <td>what time <strong>does</strong> the shop open</td>
                                    <td>what time the shop <strong>opens</strong></td>
                                </tr>
                                <tr>
                                    <td>Szyk zdania twierdzącego</td>
                                    <td>when <strong>will they</strong> come</td>
                                    <td>when <strong>they will</strong> come</td>
                                </tr>
                                <tr>
                                    <td>"if/whether" dla pytań tak/nie</td>
                                    <td>I wonder <strong>he is</strong> coming</td>
                                    <td>I wonder <strong>if he is</strong> coming</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip">
                            <h5>💡 Praktyczna wskazówka</h5>
                            <p>Pytania pośrednie są jak <strong>zdania twierdzące z pytającym wprowadzeniem</strong>. Jeśli pamiętasz o zachowaniu szyku zdania twierdzącego, unikniesz większości błędów!</p>
                        </div>
                    </section>
                </>
            ),
        },
    ],
    'unreal-past': [
        {
            id: 'unreal-past-wishes',
            title: 'Wishes i If only 🙏',
            excerpt: 'I wish I knew. If only I had studied. - wyrażanie życzeń i żalów.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Unreal Past - wyrażanie nierealnych życzeń i żalów</h3>
                        <p className="muted">Używamy do mówienia o sytuacjach, które nie są prawdziwe lub których żałujemy</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Konstrukcje z "wish"</h4>
                                <div className="wish-constructions">
                                    <div className="wish-type">
                                        <h5>I wish + Past Simple</h5>
                                        <p><strong>Teraźniejszość nierealna</strong> - życzenia dotyczące teraźniejszości (ale niemożliwe do spełnienia)</p>
                                        <div className="example-group-expanded">
                                            <p>"I wish <em>I knew</em> the answer." - Szkoda, że nie znam odpowiedzi.</p>
                                            <p>"She wishes <em>she had</em> more time." - Żałuje, że nie ma więcej czasu.</p>
                                            <p>"They wish <em>they lived</em> closer to the beach." - Szkoda, że nie mieszkają bliżej plaży.</p>
                                            <p>"I wish <em>I were</em> taller." - Szkoda, że nie jestem wyższy.</p>
                                        </div>
                                        <div className="grammar-tip">
                                            <h6>💡 Uwaga!</h6>
                                            <p>W formalnym angielskim używamy <strong>"I wish I were"</strong> zamiast "I wish I was"</p>
                                        </div>
                                    </div>

                                    <div className="wish-type">
                                        <h5>I wish + Past Perfect</h5>
                                        <p><strong>Przeszłość nierealna</strong> - żal dotyczący przeszłości (czynności, których nie zrobiliśmy)</p>
                                        <div className="example-group-expanded">
                                            <p>"I wish <em>I had studied</em> harder." - Żałuję, że nie uczyłem się ciężej.</p>
                                            <p>"He wishes <em>he hadn't said</em> that." - Żałuje, że to powiedział.</p>
                                            <p>"We wish <em>we had taken</em> that job offer." - Żałujemy, że nie przyjęliśmy tej oferty pracy.</p>
                                            <p>"She wishes <em>she had listened</em> to her parents' advice." - Żałuje, że nie posłuchała rad rodziców.</p>
                                        </div>
                                    </div>

                                    <div className="wish-type">
                                        <h5>I wish + would</h5>
                                        <p><strong>Skarga lub życzenie zmiany</strong> - gdy coś nas irytuje lub chcemy zmiany w przyszłości</p>
                                        <div className="example-group-expanded">
                                            <p>"I wish <em>it would stop</em> raining." - Chciałbym, żeby przestało padać.</p>
                                            <p>"I wish <em>you would listen</em> to me." - Chciałbym, żebyś mnie słuchał.</p>
                                            <p>"She wishes <em>her neighbors would be</em> quieter." - Chciałaby, żeby jej sąsiedzi byli cichsi.</p>
                                            <p>"I wish <em>this computer would work</em> properly." - Chciałbym, żeby ten komputer działał poprawnie.</p>
                                        </div>
                                        <div className="grammar-tip warning">
                                            <h6>⚠️ Ważne ograniczenie!</h6>
                                            <p><strong>Nie używamy "would" z podmiotem "I" lub "we"</strong> - mówimy o innych osobach lub rzeczach</p>
                                            <p className="incorrect">❌ I wish I would be richer.</p>
                                            <p className="correct">✅ I wish I were richer.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Inne konstrukcje "unreal past"</h4>
                                <div className="other-constructions">
                                    <div className="construction">
                                        <h5>If only</h5>
                                        <p><strong>Silniejsze emocjonalnie niż "I wish" - wyraża większy żal lub pragnienie</strong></p>
                                        <div className="example-group-expanded">
                                            <p>"<em>If only I had</em> more money!" - Gdybym tylko miał więcej pieniędzy!</p>
                                            <p>"<em>If only she hadn't left</em> so early." - Gdyby tylko nie wyszła tak wcześnie.</p>
                                            <p>"<em>If only we knew</em> the truth!" - Gdybyśmy tylko znali prawdę!</p>
                                            <p>"<em>If only it weren't</em> so expensive." - Gdyby tylko nie było tak drogo.</p>
                                        </div>
                                    </div>

                                    <div className="construction">
                                        <h5>It's (high) time</h5>
                                        <p><strong>Wyrażanie, że coś powinno się już wydarzyć (często z nutką irytacji)</strong></p>
                                        <div className="example-group-expanded">
                                            <p>"<em>It's time we left</em>." - Najwyższy czas, żebyśmy wyszli.</p>
                                            <p>"<em>It's high time you found</em> a job." - Najwyższy czas, żebyś znalazł pracę.</p>
                                            <p>"<em>It's time she learned</em> to be independent." - Najwyższy czas, żeby nauczyła się samodzielności.</p>
                                            <p>"<em>It's about time they fixed</em> that road." - Najwyższy czas, żeby naprawili tę drogę.</p>
                                        </div>
                                    </div>

                                    <div className="construction">
                                        <h5>Would rather</h5>
                                        <p><strong>Wyrażanie preferencji dotyczących teraźniejszości lub przyszłości</strong></p>
                                        <div className="example-group-expanded">
                                            <p>"I <em>would rather you didn't smoke</em> here." - Wolałbym, żebyś tu nie palił.</p>
                                            <p>"She <em>would rather we went</em> to the cinema." - Wolałaby, żebyśmy poszli do kina.</p>
                                            <p>"They <em>would rather their son studied</em> medicine." - Woleliby, żeby ich syn studiował medycynę.</p>
                                            <p>"I <em>would rather not talk</em> about it." - Wolałbym o tym nie rozmawiać.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📚 Praktyczne zastosowania</h4>
                        <div className="practical-uses">
                            <div className="use-case">
                                <h5>Życzenia dotyczące teraźniejszości</h5>
                                <div className="example-group-expanded">
                                    <p>"I wish <em>I spoke</em> French." (ale nie mówię)</p>
                                    <p>"If only <em>I had</em> a car." (ale nie mam)</p>
                                    <p>"I wish <em>I were</em> more confident." (ale nie jestem)</p>
                                    <p>"If only <em>it weren't</em> so cold." (ale jest zimno)</p>
                                </div>
                            </div>

                            <div className="use-case">
                                <h5>Żal dotyczący przeszłości</h5>
                                <div className="example-group-expanded">
                                    <p>"I wish <em>I had gone</em> to university." (ale nie poszedłem)</p>
                                    <p>"If only <em>I hadn't eaten</em> so much." (ale zjadłem)</p>
                                    <p>"She wishes <em>she had traveled</em> more when she was young." (ale nie podróżowała)</p>
                                    <p>"If only <em>we had known</em> about the traffic." (ale nie wiedzieliśmy)</p>
                                </div>
                            </div>

                            <div className="use-case">
                                <h5>Skargi i irytacja</h5>
                                <div className="example-group-expanded">
                                    <p>"I wish <em>you wouldn't interrupt</em> me all the time."</p>
                                    <p>"I wish <em>it wouldn't rain</em> every weekend."</p>
                                    <p>"If only <em>my phone would stop</em> freezing."</p>
                                    <p>"I wish <em>the neighbors would turn</em> down their music."</p>
                                </div>
                            </div>

                            <div className="use-case">
                                <h5>Sugestie i rady</h5>
                                <div className="example-group-expanded">
                                    <p>"<em>It's time you started</em> thinking about your future."</p>
                                    <p>"<em>It's high time we made</em> a decision."</p>
                                    <p>"I <em>would rather you told</em> me the truth."</p>
                                    <p>"She <em>would rather we didn't discuss</em> this now."</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Częste błędy i wyjątki</h4>
                        <div className="common-mistakes">
                            <div className="mistake-group">
                                <h5>❌ Mieszanie czasów w "wish"</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">I wish I have more time.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I wish I had more time.</span>
                                        <span className="reason">(zawsze Past Simple dla teraźniejszości)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">I wish I went to the party yesterday.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I wish I had gone to the party yesterday.</span>
                                        <span className="reason">(Past Perfect dla przeszłości)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">I wish I would be more organized.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I wish I were more organized.</span>
                                        <span className="reason">(nie używamy "would" z podmiotem "I")</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-group">
                                <h5>❌ Błędne użycie "If only" i "It's time"</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">If only I have a million dollars.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">If only I had a million dollars.</span>
                                        <span className="reason">(Past Simple jak w "wish")</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">It's time we leave.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">It's time we left.</span>
                                        <span className="reason">(Past Simple po "It's time")</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">It's time to we go.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">It's time for us to go.</span>
                                        <span className="reason">(inna konstrukcja z "to")</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Różnica między "wish" a "hope"</h5>
                                <div className="comparison-examples">
                                    <div className="comparison-pair">
                                        <div className="case">
                                            <span className="title">WISH (nierealne):</span>
                                            <p>"I <em>wish I were</em> rich." (nie jestem bogaty)</p>
                                            <p>"She <em>wishes she had studied</em> medicine." (nie studiowała)</p>
                                            <p><strong>Rzeczywistość: NIE jest bogata, NIE studiowała medycyny</strong></p>
                                        </div>
                                        <div className="case">
                                            <span className="title">HOPE (realne możliwości):</span>
                                            <p>"I <em>hope I pass</em> the exam." (mogę zdać)</p>
                                            <p>"She <em>hopes she will get</em> the job." (może dostać)</p>
                                            <p><strong>Rzeczywistość: MOŻE zdać, MOŻE dostać pracę</strong></p>
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
                                <h5>Wybierz poprawną formę dla konstrukcji Unreal Past:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> I wish I ______ how to play the guitar.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="up1" value="a" />
                                                <span>know</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="up1" value="b" />
                                                <span>knew</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="up1" value="c" />
                                                <span>had known</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Past Simple dla życzeń dotyczących teraźniejszości</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> If only I ______ harder for the exam.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="up2" value="a" />
                                                <span>study</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="up2" value="b" />
                                                <span>studied</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="up2" value="c" />
                                                <span>had studied</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Past Perfect dla żalu dotyczącego przeszłości</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> I wish you ______ talking while I'm trying to concentrate.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="up3" value="a" />
                                                <span>stop</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="up3" value="b" />
                                                <span>stopped</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="up3" value="c" />
                                                <span>would stop</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">"would" dla skarg i życzeń zmiany dotyczących innych osób</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> It's time we ______ a decision about this project.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="up4" value="a" />
                                                <span>make</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="up4" value="b" />
                                                <span>made</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="up4" value="c" />
                                                <span>will make</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Past Simple po "It's time"</div>
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
                        <h4>🎯 Podsumowanie - Której konstrukcji użyć?</h4>
                        <div className="summary-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Sytuacja</th>
                                    <th>Konstrukcja</th>
                                    <th>Przykład</th>
                                    <th>Znaczenie</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Życzenie teraźniejsze (niemożliwe)</td>
                                    <td>wish + Past Simple</td>
                                    <td>I wish I had a car</td>
                                    <td>Szkoda, że nie mam samochodu</td>
                                </tr>
                                <tr>
                                    <td>Żal przeszły</td>
                                    <td>wish + Past Perfect</td>
                                    <td>I wish I had studied</td>
                                    <td>Żałuję, że się nie uczyłem</td>
                                </tr>
                                <tr>
                                    <td>Skarga na innych</td>
                                    <td>wish + would</td>
                                    <td>I wish you would listen</td>
                                    <td>Chciałbym, żebyś słuchał</td>
                                </tr>
                                <tr>
                                    <td>Silne pragnienie</td>
                                    <td>If only + Past Simple/Perfect</td>
                                    <td>If only I knew</td>
                                    <td>Gdybym tylko wiedział</td>
                                </tr>
                                <tr>
                                    <td>Czas na zmianę</td>
                                    <td>It's time + Past Simple</td>
                                    <td>It's time we left</td>
                                    <td>Najwyższy czas wyjść</td>
                                </tr>
                                <tr>
                                    <td>Preferencje</td>
                                    <td>would rather + Past Simple</td>
                                    <td>I'd rather you didn't smoke</td>
                                    <td>Wolałbym, żebyś nie palił</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip">
                            <h5>💡 Klucz do sukcesu</h5>
                            <p>Pamiętaj: <strong>Unreal Past zawsze używa czasów przeszłych</strong> do mówienia o teraźniejszości lub przeszłości. To właśnie tworzy efekt "nierealności"!</p>
                        </div>
                    </section>
                </>
            ),
        },
    ],
    'cleft-sentences': [
        {
            id: 'cleft-it-what',
            title: 'It-/What-cleft 🎯',
            excerpt: 'It was John who called. What I need is a break. - podkreślanie elementów zdania.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Cleft Sentences - podkreślanie elementów zdania</h3>
                        <p className="muted">Specjalne konstrukcje służące do uwydatnienia konkretnej części zdania</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 It-cleft sentences</h4>
                                <div className="cleft-type">
                                    <p><strong>Podkreślamy: podmiot, dopełnienie, okolicznik czasu/miejsca/przyczyny</strong></p>

                                    <div className="cleft-structure">
                                        <div className="original">
                                            <h5>Zdanie zwykłe</h5>
                                            <p>"John called me yesterday."</p>
                                            <p className="translation">Jan zadzwonił do mnie wczoraj.</p>
                                        </div>

                                        <div className="cleft-forms">
                                            <div className="cleft-form">
                                                <h6>Podkreślenie podmiotu</h6>
                                                <p>"<em>It was John who</em> called me yesterday."</p>
                                                <p className="translation">To Jan zadzwonił do mnie wczoraj.</p>
                                                <p className="explanation">(kładziemy nacisk na osobę, która zadzwoniła)</p>
                                            </div>

                                            <div className="cleft-form">
                                                <h6>Podkreślenie dopełnienia</h6>
                                                <p>"<em>It was me who</em> John called yesterday."</p>
                                                <p className="translation">To do mnie Jan zadzwonił wczoraj.</p>
                                                <p className="explanation">(kładziemy nacisk na osobę, do której dzwoniono)</p>
                                            </div>

                                            <div className="cleft-form">
                                                <h6>Podkreślenie czasu</h6>
                                                <p>"<em>It was yesterday that</em> John called me."</p>
                                                <p className="translation">To wczoraj Jan do mnie zadzwonił.</p>
                                                <p className="explanation">(kładziemy nacisk na czas zdarzenia)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grammar-tip">
                                        <h6>💡 Budowa It-cleft:</h6>
                                        <p><strong>It + be + wyróżniony element + who/that/which + reszta zdania</strong></p>
                                        <div className="construction-breakdown">
                                            <span className="part">It was</span>
                                            <span className="highlighted">John</span>
                                            <span className="part">who</span>
                                            <span className="part">called me yesterday</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>📝 What-cleft sentences</h4>
                                <div className="cleft-type">
                                    <p><strong>Podkreślamy: całą akcję, stan, przyczynę lub skutek</strong></p>

                                    <div className="cleft-structure">
                                        <div className="original">
                                            <h5>Zdanie zwykłe</h5>
                                            <p>"I need a break."</p>
                                            <p className="translation">Potrzebuję przerwy.</p>
                                        </div>

                                        <div className="cleft-forms">
                                            <div className="cleft-form">
                                                <h6>Podkreślenie potrzeby</h6>
                                                <p>"<em>What I need is</em> a break."</p>
                                                <p className="translation">To, czego potrzebuję, to przerwa.</p>
                                                <p className="explanation">(kładziemy nacisk na potrzebę)</p>
                                            </div>

                                            <div className="cleft-form">
                                                <h6>Podkreślenie działania</h6>
                                                <p>"<em>What happened was that</em> I lost my keys."</p>
                                                <p className="translation">To, co się stało, to że zgubiłem klucze.</p>
                                                <p className="explanation">(kładziemy nacisk na zdarzenie)</p>
                                            </div>

                                            <div className="cleft-form">
                                                <h6>Podkreślenie przyczyny</h6>
                                                <p>"<em>What made me angry was</em> his attitude."</p>
                                                <p className="translation">To, co mnie rozzłościło, to jego postawa.</p>
                                                <p className="explanation">(kładziemy nacisk na przyczynę)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grammar-tip">
                                        <h6>💡 Budowa What-cleft:</h6>
                                        <p><strong>What + zdanie podrzędne + be + wyróżniony element</strong></p>
                                        <div className="construction-breakdown">
                                            <span className="part">What I need</span>
                                            <span className="part">is</span>
                                            <span className="highlighted">a break</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Inne typy cleft sentences</h4>
                        <div className="other-clefts">
                            <div className="cleft-category">
                                <h5>All-cleft sentences</h5>
                                <p><strong>Podkreślamy, że coś jest jedyną rzeczą</strong></p>
                                <div className="example-group-expanded">
                                    <p>"<em>All I want is</em> a quiet evening at home."</p>
                                    <p className="translation">Wszystko, czego chcę, to spokojny wieczór w domu.</p>
                                    <p>"<em>All you need to do is</em> press this button."</p>
                                    <p className="translation">Wszystko, co musisz zrobić, to nacisnąć ten przycisk.</p>
                                    <p>"<em>All that matters is</em> your happiness."</p>
                                    <p className="translation">Wszystko, co się liczy, to twoje szczęście.</p>
                                </div>
                            </div>

                            <div className="cleft-category">
                                <h5>There-cleft sentences</h5>
                                <p><strong>Podkreślamy istnienie czegoś</strong></p>
                                <div className="example-group-expanded">
                                    <p>"<em>There is nothing that</em> can stop us now."</p>
                                    <p className="translation">Nie ma niczego, co mogłoby nas teraz powstrzymać.</p>
                                    <p>"<em>There are few people who</em> understand this problem."</p>
                                    <p className="translation">Niewiele jest osób, które rozumieją ten problem.</p>
                                    <p>"<em>There was a moment when</em> I thought we would fail."</p>
                                    <p className="translation">Był taki moment, kiedy myślałem, że poniesiemy porażkę.</p>
                                </div>
                            </div>

                            <div className="cleft-category">
                                <h5>If-because cleft sentences</h5>
                                <p><strong>Podkreślamy warunki lub przyczyny</strong></p>
                                <div className="example-group-expanded">
                                    <p>"<em>If there's one thing I hate, it's</em> waiting in line."</p>
                                    <p className="translation">Jeśli jest jedna rzecz, której nienawidzę, to stanie w kolejce.</p>
                                    <p>"<em>If anyone can help us, it's</em> Sarah."</p>
                                    <p className="translation">Jeśli ktoś może nam pomóc, to Sarah.</p>
                                    <p>"<em>Because there's nothing worse than</em> being misunderstood."</p>
                                    <p className="translation">Bo nie ma nic gorszego niż bycie niezrozumianym.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Kiedy używać cleft sentences?</h4>
                        <div className="cleft-usage">
                            <div className="usage-case">
                                <h5>Korekta nieporozumień</h5>
                                <div className="example-group-expanded">
                                    <p>"No, <em>it was Mary who</em> organized the party, not John."</p>
                                    <p>"Actually, <em>what I said was</em> that we should meet at 5, not 6."</p>
                                    <p>"<em>It wasn't me who</em> broke the vase; <em>it was the cat that</em> knocked it over."</p>
                                </div>
                            </div>

                            <div className="usage-case">
                                <h5>Podkreślenie nowej informacji</h5>
                                <div className="example-group-expanded">
                                    <p>"<em>What surprised me was</em> how quickly he learned."</p>
                                    <p>"<em>It's the results that</em> really matter in this project."</p>
                                    <p>"<em>What we discovered was</em> completely unexpected."</p>
                                </div>
                            </div>

                            <div className="usage-case">
                                <h5>Uwydatnienie kontrastu</h5>
                                <div className="example-group-expanded">
                                    <p>"<em>It's not money that</em> I want, <em>it's recognition that</em> I need."</p>
                                    <p>"<em>What we need is</em> action, <em>not what we have is</em> empty promises."</p>
                                    <p>"<em>It was her kindness that</em> I remember, <em>not her wealth that</em> impressed me."</p>
                                </div>
                            </div>

                            <div className="usage-case">
                                <h5>W pisemnych formach i prezentacjach</h5>
                                <div className="example-group-expanded">
                                    <p>"<em>What the research demonstrates is</em> the importance of early education."</p>
                                    <p>"<em>It is this approach that</em> has yielded the best results."</p>
                                    <p>"<em>What we propose is</em> a completely new strategy."</p>
                                </div>
                            </div>

                            <div className="usage-case">
                                <h5>W mowie potocznej dla emocjonalnego podkreślenia</h5>
                                <div className="example-group-expanded">
                                    <p>"<em>What I don't understand is</em> why you didn't call me!"</p>
                                    <p>"<em>It was you who</em> said we should trust him!"</p>
                                    <p>"<em>All I'm asking for is</em> a little respect."</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Częste błędy i wyjątki</h4>
                        <div className="common-mistakes">
                            <div className="mistake-group">
                                <h5>❌ Błędny szyk w It-cleft</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">It was called John me yesterday.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">It was John who called me yesterday.</span>
                                        <span className="reason">(zachowujemy właściwy szyk: It + be + wyróżniony element + who/that)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">It was yesterday when John called me.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">It was yesterday that John called me.</span>
                                        <span className="reason">(używamy "that" z okolicznikami czasu)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-group">
                                <h5>❌ Błędna budowa What-cleft</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">What I need it is a break.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">What I need is a break.</span>
                                        <span className="reason">(nie powtarzamy podmiotu po "what")</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">What made me angry it was his attitude.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">What made me angry was his attitude.</span>
                                        <span className="reason">(pomijamy "it" w what-cleft)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Różnica między "who" a "that"</h5>
                                <div className="comparison-examples">
                                    <div className="comparison-pair">
                                        <div className="case">
                                            <span className="title">WHO (dla osób):</span>
                                            <p>"<em>It was John who</em> called me."</p>
                                            <p>"<em>It's the teacher who</em> deserves credit."</p>
                                            <p><strong>Używamy dla ludzi</strong></p>
                                        </div>
                                        <div className="case">
                                            <span className="title">THAT (dla rzeczy/okoliczności):</span>
                                            <p>"<em>It was the book that</em> influenced me most."</p>
                                            <p>"<em>It's your support that</em> I appreciate."</p>
                                            <p><strong>Używamy dla rzeczy, pojęć, czasu, miejsca</strong></p>
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
                                <h5>Przekształć zdania używając odpowiedniej konstrukcji cleft:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> Sarah broke the window, not Tom.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="cs1" value="a" />
                                                <span>It was Sarah who broke the window, not Tom.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="cs1" value="b" />
                                                <span>What Sarah broke was the window, not Tom.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="cs1" value="c" />
                                                <span>It broke the window that Sarah, not Tom.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">It-cleft do podkreślenia osoby (kto coś zrobił)</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> I really need some rest.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="cs2" value="a" />
                                                <span>It is some rest that I really need.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="cs2" value="b" />
                                                <span>What I really need is some rest.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="cs2" value="c" />
                                                <span>It need some rest that I really.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">What-cleft do podkreślenia potrzeby lub pragnienia</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> The bad weather caused the cancellation.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="cs3" value="a" />
                                                <span>It was the bad weather that caused the cancellation.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="cs3" value="b" />
                                                <span>What the bad weather caused was the cancellation.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="cs3" value="c" />
                                                <span>It caused the cancellation that the bad weather.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">It-cleft do podkreślenia przyczyny (rzecz)</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> I want only one thing - your honesty.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="cs4" value="a" />
                                                <span>It is your honesty that I want.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="cs4" value="b" />
                                                <span>What I want is your honesty.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="cs4" value="c" />
                                                <span>All I want is your honesty.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">All-cleft do podkreślenia, że coś jest jedyną rzeczą</div>
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
                        <h4>🎯 Podsumowanie - Której konstrukcji użyć?</h4>
                        <div className="summary-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Co podkreślamy?</th>
                                    <th>Konstrukcja</th>
                                    <th>Przykład</th>
                                    <th>Użycie</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Osobę (kto coś zrobił)</td>
                                    <td>It-cleft + who</td>
                                    <td>It was John who called</td>
                                    <td>Podkreślenie sprawcy</td>
                                </tr>
                                <tr>
                                    <td>Rzecz, czas, miejsce</td>
                                    <td>It-cleft + that</td>
                                    <td>It was yesterday that...</td>
                                    <td>Podkreślenie okoliczności</td>
                                </tr>
                                <tr>
                                    <td>Potrzebę, pragnienie</td>
                                    <td>What-cleft</td>
                                    <td>What I need is...</td>
                                    <td>Podkreślenie subiektywnej potrzeby</td>
                                </tr>
                                <tr>
                                    <td>Przyczynę, skutek</td>
                                    <td>What-cleft</td>
                                    <td>What happened was...</td>
                                    <td>Podkreślenie przyczyny lub zdarzenia</td>
                                </tr>
                                <tr>
                                    <td>Jedyną rzecz</td>
                                    <td>All-cleft</td>
                                    <td>All I want is...</td>
                                    <td>Podkreślenie wyłączności</td>
                                </tr>
                                <tr>
                                    <td>Istnienie czegoś</td>
                                    <td>There-cleft</td>
                                    <td>There is nothing that...</td>
                                    <td>Podkreślenie istnienia/braku</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip">
                            <h5>💡 Klucz do skutecznego użycia</h5>
                            <p>Cleft sentences są jak <strong>reflektor sceniczny</strong> - pozwalają skierować uwagę słuchacza dokładnie na ten element zdania, który chcesz wyróżnić. Używaj ich świadomie, aby Twoje wypowiedzi były bardziej precyzyjne i przekonujące!</p>
                        </div>
                    </section>
                </>
            ),
        },
    ],
    'participle-clauses': [
        {
            id: 'participle-reduction',
            title: 'Zdania imiesłowowe 📝',
            excerpt: 'Feeling tired, she went to bed. - skrócona forma zdań podrzędnych.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Participle Clauses - zdania imiesłowowe</h3>
                        <p className="muted">Skrócona forma zdań podrzędnych, używana głównie w języku pisanym</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Present Participle (-ing)</h4>
                                <div className="participle-type">
                                    <p><strong>Aktywne znaczenie, czynność równoczesna lub przyczyny</strong></p>

                                    <div className="participle-examples">
                                        <div className="example">
                                            <h5>Przyczyna</h5>
                                            <p>"<em>Feeling tired</em>, she went to bed early."</p>
                                            <p className="translation">(Ponieważ czuła się zmęczona, poszła wcześnie spać.)</p>
                                            <p className="explanation">Zamiast: Because she felt tired, she went...</p>
                                        </div>

                                        <div className="example">
                                            <h5>Czas</h5>
                                            <p>"<em>Walking down the street</em>, I met an old friend."</p>
                                            <p className="translation">(Kiedy szedłem ulicą, spotkałem starego przyjaciela.)</p>
                                            <p className="explanation">Zamiast: While I was walking down the street, I met...</p>
                                        </div>

                                        <div className="example">
                                            <h5>Warunek</h5>
                                            <p>"<em>Working hard</em>, you will succeed."</p>
                                            <p className="translation">(Jeśli będziesz ciężko pracować, odniesiesz sukces.)</p>
                                            <p className="explanation">Zamiast: If you work hard, you will succeed.</p>
                                        </div>

                                        <div className="example">
                                            <h5>Sposób</h5>
                                            <p>"<em>Smiling happily</em>, she accepted the award."</p>
                                            <p className="translation">(Uśmiechając się radośnie, przyjęła nagrodę.)</p>
                                            <p className="explanation">Zamiast: She accepted the award and she was smiling happily.</p>
                                        </div>
                                    </div>

                                    <div className="grammar-tip">
                                        <h6>💡 Budowa Present Participle:</h6>
                                        <p><strong>Present Participle (-ing) + reszta zdania głównego</strong></p>
                                        <div className="construction-breakdown">
                                            <span className="highlighted">Feeling tired</span>
                                            <span className="part">, she went to bed early</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>📝 Past Participle (III forma)</h4>
                                <div className="participle-type">
                                    <p><strong>Pasywne znaczenie - podmiot jest odbiorcą czynności</strong></p>

                                    <div className="participle-examples">
                                        <div className="example">
                                            <h5>Przyczyna</h5>
                                            <p>"<em>Seen from the hill</em>, the town looked beautiful."</p>
                                            <p className="translation">(Widziane ze wzgórza, miasto wyglądało pięknie.)</p>
                                            <p className="explanation">Zamiast: When it was seen from the hill, the town...</p>
                                        </div>

                                        <div className="example">
                                            <h5>Warunek</h5>
                                            <p>"<em>Heated to 100°C</em>, water boils."</p>
                                            <p className="translation">(Podgrzana do 100°C, woda wrze.)</p>
                                            <p className="explanation">Zamiast: If water is heated to 100°C, it boils.</p>
                                        </div>

                                        <div className="example">
                                            <h5>Czas</h5>
                                            <p>"<em>Built in the 19th century</em>, the house needs renovation."</p>
                                            <p className="translation">(Zbudowany w XIX wieku, dom potrzebuje renowacji.)</p>
                                            <p className="explanation">Zamiast: As it was built in the 19th century, the house...</p>
                                        </div>

                                        <div className="example">
                                            <h5>Stan</h5>
                                            <p>"<em>Surrounded by mountains</em>, the village is very picturesque."</p>
                                            <p className="translation">(Otoczony górami, wieś jest bardzo malownicza.)</p>
                                            <p className="explanation">Zamiast: The village is surrounded by mountains and it is...</p>
                                        </div>
                                    </div>

                                    <div className="grammar-tip">
                                        <h6>💡 Budowa Past Participle:</h6>
                                        <p><strong>Past Participle (III forma) + reszta zdania głównego</strong></p>
                                        <div className="construction-breakdown">
                                            <span className="highlighted">Seen from the hill</span>
                                            <span className="part">, the town looked beautiful</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Perfect Participle</h4>
                        <div className="perfect-participle">
                            <p><strong>Czynność wcześniejsza niż główne zdanie - podkreśla kolejność zdarzeń</strong></p>

                            <div className="perfect-examples">
                                <div className="example-group">
                                    <h5>Having + past participle (czynność aktywna)</h5>
                                    <div className="example">
                                        <p>"<em>Having finished his work</em>, he went home."</p>
                                        <p className="translation">(Po skończeniu pracy, poszedł do domu.)</p>
                                        <p className="explanation">Zamiast: After he had finished his work, he went home.</p>
                                    </div>
                                    <div className="example">
                                        <p>"<em>Having studied all night</em>, she felt exhausted."</p>
                                        <p className="translation">(Po nauce przez całą noc, czuła się wyczerpana.)</p>
                                        <p className="explanation">Zamiast: Because she had studied all night, she felt...</p>
                                    </div>
                                </div>

                                <div className="example-group">
                                    <h5>Having been + past participle (czynność pasywna)</h5>
                                    <div className="example">
                                        <p>"<em>Having been told the news</em>, she immediately called her family."</p>
                                        <p className="translation">(Po usłyszeniu wiadomości, natychmiast zadzwoniła do rodziny.)</p>
                                        <p className="explanation">Zamiast: After she had been told the news, she immediately...</p>
                                    </div>
                                    <div className="example">
                                        <p>"<em>Having been invited to the party</em>, they bought new clothes."</p>
                                        <p className="translation">(Po otrzymaniu zaproszenia na imprezę, kupili nowe ubrania.)</p>
                                        <p className="explanation">Zamiast: Because they had been invited to the party, they...</p>
                                    </div>
                                </div>

                                <div className="grammar-tip">
                                    <h6>💡 Budowa Perfect Participle:</h6>
                                    <p><strong>Having + past participle (aktywne) / Having been + past participle (pasywne)</strong></p>
                                    <div className="construction-breakdown">
                                        <span className="highlighted">Having finished his work</span>
                                        <span className="part">, he went home</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📚 Dodatkowe typy zdań imiesłowowych</h4>
                        <div className="additional-participle-types">
                            <div className="participle-category">
                                <h5>Zdania z "with" + participle</h5>
                                <p><strong>Opisują okoliczności towarzyszące</strong></p>
                                <div className="example-group-expanded">
                                    <p>"<em>With the sun setting</em> behind the mountains, we decided to head back."</p>
                                    <p className="translation">(Gdy słońce zachodziło za górami, postanowiliśmy wracać.)</p>
                                    <p>"<em>With her hands trembling</em>, she signed the document."</p>
                                    <p className="translation">(Z drżącymi rękami, podpisała dokument.)</p>
                                    <p>"<em>With all the work completed</em>, we could finally relax."</p>
                                    <p className="translation">(Po ukończeniu całej pracy, wreszcie mogliśmy odpocząć.)</p>
                                </div>
                            </div>

                            <div className="participle-category">
                                <h5>Zdania z partykułami przeczącymi</h5>
                                <p><strong>Wyrażają brak czynności lub zaprzeczenie</strong></p>
                                <div className="example-group-expanded">
                                    <p>"<em>Not knowing what to do</em>, he called his friend for advice."</p>
                                    <p className="translation">(Nie wiedząc, co robić, zadzwonił do przyjaciela po radę.)</p>
                                    <p>"<em>Never having been abroad before</em>, she was very excited."</p>
                                    <p className="translation">(Nigdy wcześniej nie będąc za granicą, była bardzo podekscytowana.)</p>
                                    <p>"<em>Not having received any reply</em>, we assumed they weren't interested."</p>
                                    <p className="translation">(Nie otrzymawszy żadnej odpowiedzi, założyliśmy, że nie są zainteresowani.)</p>
                                </div>
                            </div>

                            <div className="participle-category">
                                <h5>Zdania z wyrażeniami stałymi</h5>
                                <p><strong>Gotowe zwroty używane w zdaniach imiesłowowych</strong></p>
                                <div className="example-group-expanded">
                                    <p>"<em>Generally speaking</em>, the results were positive."</p>
                                    <p className="translation">(Ogólnie rzecz biorąc, wyniki były pozytywne.)</p>
                                    <p>"<em>Strictly speaking</em>, that's not entirely accurate."</p>
                                    <p className="translation">(Ściśle mówiąc, to nie jest całkowicie dokładne.)</p>
                                    <p>"<em>Considering the circumstances</em>, we did quite well."</p>
                                    <p className="translation">(Biorąc pod uwagę okoliczności, poradziliśmy sobie całkiem nieźle.)</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>💡 Zasady użycia</h4>
                        <div className="usage-rules">
                            <div className="rule">
                                <h5>Ten sam podmiot</h5>
                                <p>Zdanie imiesłowowe i główne muszą mieć ten sam podmiot</p>
                                <div className="example-pair">
                                    <div className="correct">
                                        <p>"<em>Opening the door</em>, I saw a strange man." ✅</p>
                                        <p className="explanation">(Ja otwieram drzwi i ja widzę)</p>
                                    </div>
                                    <div className="incorrect">
                                        <p>"<em>Opening the door</em>, a strange man was seen." ❌</p>
                                        <p className="explanation">(Kto otwiera drzwi? Dangling participle!)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rule">
                                <h5>Język pisany</h5>
                                <p>Głównie używane w języku pisanym, w mówionym rzadziej</p>
                                <div className="example-group-expanded">
                                    <p><strong>Pisane:</strong> "<em>Having considered all options</em>, we reached a decision."</p>
                                    <p><strong>Mówione:</strong> "After we considered all options, we reached a decision."</p>
                                </div>
                            </div>

                            <div className="rule">
                                <h5>Krótsza forma</h5>
                                <p>Zdania są zwykle krótsze i bardziej eleganckie</p>
                                <div className="example-pair">
                                    <div className="original">
                                        <p>"Because she felt tired, she went to bed early." (8 słów)</p>
                                    </div>
                                    <div className="improved">
                                        <p>"<em>Feeling tired</em>, she went to bed early." (6 słów)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rule">
                                <h5>Pozycja w zdaniu</h5>
                                <p>Zdanie imiesłowowe może stać na początku lub końcu zdania</p>
                                <div className="example-group-expanded">
                                    <p>"<em>Seeing the dark clouds</em>, we decided to stay home."</p>
                                    <p>"We decided to stay home, <em>seeing the dark clouds</em>."</p>
                                    <p>"She left the room, <em>slamming the door behind her</em>."</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Częste błędy i wyjątki</h4>
                        <div className="common-mistakes">
                            <div className="mistake-group">
                                <h5>❌ Dangling participles (wiszące imiesłowy)</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">Driving to work, the accident was seen.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Driving to work, I saw the accident.</span>
                                        <span className="reason">(kto prowadził? musi być ten sam podmiot)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">Having finished the report, the computer was turned off.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Having finished the report, I turned off the computer.</span>
                                        <span className="reason">(kto skończył raport? musi być ten sam podmiot)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-group">
                                <h5>❌ Mieszanie czasów w perfect participle</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">Having finish his work, he went home.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Having finished his work, he went home.</span>
                                        <span className="reason">(past participle po "having")</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">Having been tell the news, she called.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Having been told the news, she called.</span>
                                        <span className="reason">(past participle po "having been")</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Jak unikać błędów?</h5>
                                <div className="comparison-examples">
                                    <div className="comparison-pair">
                                        <div className="case">
                                            <span className="title">PRZED poprawką:</span>
                                            <p>"Running down the street, the bus was missed." ❌</p>
                                            <p><strong>Problem:</strong> Kto biegł? Bus nie może biegać!</p>
                                        </div>
                                        <div className="case">
                                            <span className="title">PO poprawce:</span>
                                            <p>"Running down the street, I missed the bus." ✅</p>
                                            <p>"While I was running down the street, I missed the bus." ✅</p>
                                            <p><strong>Rozwiązanie:</strong> Upewnij się, że podmiot jest jasny</p>
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
                                <h5>Przekształć zdania używając zdań imiesłowowych:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> Because he didn't know the answer, he remained silent.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="pc1" value="a" />
                                                <span>Not knowing the answer, he remained silent.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pc1" value="b" />
                                                <span>Knowing not the answer, he remained silent.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pc1" value="c" />
                                                <span>Not known the answer, he remained silent.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Present participle z przeczeniem "not" dla przyczyny</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> After she had finished her degree, she started looking for a job.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="pc2" value="a" />
                                                <span>Having finished her degree, she started looking for a job.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pc2" value="b" />
                                                <span>Finished her degree, she started looking for a job.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pc2" value="c" />
                                                <span>Having finish her degree, she started looking for a job.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Perfect participle dla czynności wcześniejszej</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> The book was written in the 18th century and is very valuable.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="pc3" value="a" />
                                                <span>Writing in the 18th century, the book is very valuable.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pc3" value="b" />
                                                <span>Written in the 18th century, the book is very valuable.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pc3" value="c" />
                                                <span>Having written in the 18th century, the book is very valuable.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Past participle dla znaczenia pasywnego</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> As I was walking through the park, I saw a beautiful bird.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="pc4" value="a" />
                                                <span>Walking through the park, a beautiful bird was seen.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pc4" value="b" />
                                                <span>Walking through the park, I saw a beautiful bird.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pc4" value="c" />
                                                <span>Walked through the park, I saw a beautiful bird.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Present participle dla czynności równoczesnej (uwaga na podmiot!)</div>
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
                        <h4>🎯 Podsumowanie - Której formy użyć?</h4>
                        <div className="summary-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Sytuacja</th>
                                    <th>Forma</th>
                                    <th>Przykład</th>
                                    <th>Znaczenie</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Czynność równoczesna (aktywna)</td>
                                    <td>Present Participle</td>
                                    <td>Walking to school, I...</td>
                                    <td>Kiedy szedłem do szkoły...</td>
                                </tr>
                                <tr>
                                    <td>Stan lub czynność pasywna</td>
                                    <td>Past Participle</td>
                                    <td>Built in 1900, the house...</td>
                                    <td>Zbudowany w 1900, dom...</td>
                                </tr>
                                <tr>
                                    <td>Czynność wcześniejsza (aktywna)</td>
                                    <td>Perfect Participle</td>
                                    <td>Having finished, I...</td>
                                    <td>Po skończeniu, ja...</td>
                                </tr>
                                <tr>
                                    <td>Czynność wcześniejsza (pasywna)</td>
                                    <td>Perfect Passive Participle</td>
                                    <td>Having been told, she...</td>
                                    <td>Po usłyszeniu, ona...</td>
                                </tr>
                                <tr>
                                    <td>Przyczyna (przecząca)</td>
                                    <td>Not + Participle</td>
                                    <td>Not knowing, he...</td>
                                    <td>Nie wiedząc, on...</td>
                                </tr>
                                <tr>
                                    <td>Okoliczności</td>
                                    <td>With + Participle</td>
                                    <td>With the sun setting...</td>
                                    <td>Gdy słońce zachodziło...</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip">
                            <h5>💡 Klucz do skutecznego użycia</h5>
                            <p>Zdania imiesłowowe są jak <strong>skróty gramatyczne</strong> - pozwalają wyrazić te same treści w bardziej zwięzły i elegancki sposób. Pamiętaj o zasadzie tego samego podmiotu, a unikniesz najczęstszych błędów!</p>
                        </div>
                    </section>
                </>
            ),
        },
    ],
    'so-vs-such': [
        {
            id: 'so-such-basics',
            title: 'So vs Such - podstawy 🎯',
            excerpt: 'So beautiful vs such a beautiful day - różnice w użyciu i konstrukcjach.',
            content: () => (
                <>
                    <section className="card">
                        <h3>So vs Such - różnice w użyciu</h3>
                        <p className="muted">Poznaj kluczowe różnice między "so" i "such" oraz ich poprawne zastosowanie</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Konstrukcja z SO</h4>
                                <div className="construction">
                                    <div className="construction-formula">
                                        <span className="keyword">SO</span> +
                                        <span className="adjective">przymiotnik</span> /
                                        <span className="adverb">przysłówek</span>
                                    </div>

                                    <div className="construction-examples">
                                        <div className="example">
                                            <h5>So + przymiotnik</h5>
                                            <p>"The movie was <em>so interesting</em>." - Film był taki interesujący.</p>
                                            <p>"She is <em>so intelligent</em>." - Ona jest taka inteligentna.</p>
                                            <p>"The weather is <em>so beautiful</em> today." - Pogoda jest taka piękna dziś.</p>
                                        </div>

                                        <div className="example">
                                            <h5>So + przysłówek</h5>
                                            <p>"He speaks <em>so quickly</em>." - Mówi tak szybko.</p>
                                            <p>"She sings <em>so beautifully</em>." - Ona śpiewa tak pięknie.</p>
                                            <p>"They work <em>so efficiently</em>." - Pracują tak efektywnie.</p>
                                        </div>

                                        <div className="example">
                                            <h5>So + many/much/few/little</h5>
                                            <p>"There were <em>so many people</em> at the concert." - Na koncercie było tak wielu ludzi.</p>
                                            <p>"I have <em>so much work</em> to do." - Mam tak dużo pracy do zrobienia.</p>
                                            <p>"We have <em>so little time</em>." - Mamy tak mało czasu.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>📝 Konstrukcja z SUCH</h4>
                                <div className="construction">
                                    <div className="construction-formula">
                                        <span className="keyword">SUCH</span> +
                                        <span className="article">a/an</span> +
                                        <span className="adjective">przymiotnik</span> +
                                        <span className="noun">rzeczownik</span>
                                    </div>

                                    <div className="construction-examples">
                                        <div className="example">
                                            <h5>Such + a/an + przymiotnik + rzeczownik (policzalny)</h5>
                                            <p>"It was <em>such an interesting movie</em>." - To był taki interesujący film.</p>
                                            <p>"He is <em>such a nice person</em>." - On jest taką miłą osobą.</p>
                                            <p>"It's <em>such a beautiful day</em>!" - To taki piękny dzień!</p>
                                        </div>

                                        <div className="example">
                                            <h5>Such + przymiotnik + rzeczownik (niepoliczalny/l.mn.)</h5>
                                            <p>"They are <em>such nice people</em>." - To tacy mili ludzie.</p>
                                            <p>"He has <em>such amazing talent</em>." - On ma tak niesamowity talent.</p>
                                            <p>"We had <em>such wonderful weather</em>." - Mieliśmy taką wspaniałą pogodę.</p>
                                        </div>

                                        <div className="example">
                                            <h5>Such + rzeczownik (bez przymiotnika)</h5>
                                            <p>"He is <em>such a fool</em>!" - On jest takim głupcem!</p>
                                            <p>"It was <em>such a surprise</em>." - To była taka niespodzianka.</p>
                                            <p>"She has <em>such patience</em>." - Ona ma taką cierpliwość.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Wyrażenia używane tylko z SO</h4>
                        <div className="special-expressions">
                            <div className="expression-group">
                                <h5>So w wyrażeniach z that (konsekwencja)</h5>
                                <div className="example-group-expanded">
                                    <p>"It was <em>so cold that</em> we stayed home." - Było tak zimno, że zostaliśmy w domu.</p>
                                    <p>"He was <em>so tired that</em> he fell asleep immediately." - Był tak zmęczony, że natychmiast zasnął.</p>
                                    <p>"The test was <em>so difficult that</em> many students failed." - Test był tak trudny, że wielu studentów oblało.</p>
                                    <p>"She spoke <em>so quickly that</em> I couldn't understand her." - Mówiła tak szybko, że nie mogłem jej zrozumieć.</p>
                                </div>
                            </div>

                            <div className="expression-group">
                                <h5>So w odpowiedziach krótkich</h5>
                                <div className="example-group-expanded">
                                    <p>"Is she really coming?" "<em>I think so</em>." - Chyba tak.</p>
                                    <p>"Will it rain tomorrow?" "<em>I hope so</em>." - Mam taką nadzieję.</p>
                                    <p>"Is this the right way?" "<em>I believe so</em>." - Wierzę, że tak.</p>
                                    <p>"Do you need help?" "<em>I guess so</em>." - Chyba tak.</p>
                                </div>
                            </div>

                            <div className="expression-group">
                                <h5>So w konstrukcjach inwersyjnych</h5>
                                <div className="example-group-expanded">
                                    <p>"<em>So beautiful was the music that</em> everyone was silent." - Tak piękna była muzyka, że wszyscy zamilkli.</p>
                                    <p>"<em>So quickly did he run that</em> no one could catch him." - Tak szybko biegł, że nikt nie mógł go złapać.</p>
                                    <p>"<em>So intense was the heat that</em> we had to stop." - Tak intensywny był upał, że musieliśmy się zatrzymać.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Wyrażenia używane tylko z SUCH</h4>
                        <div className="special-expressions">
                            <div className="expression-group">
                                <h5>Such w wyrażeniach z that (konsekwencja)</h5>
                                <div className="example-group-expanded">
                                    <p>"It was <em>such a cold day that</em> we stayed home." - To był tak zimny dzień, że zostaliśmy w domu.</p>
                                    <p>"It was <em>such a difficult exam that</em> many students failed." - To był tak trudny egzamin, że wielu studentów oblało.</p>
                                    <p>"He told <em>such a funny story that</em> everyone laughed." - Opowiedział tak zabawną historię, że wszyscy się śmiali.</p>
                                    <p>"It was <em>such a long journey that</em> we were exhausted." - To była tak długa podróż, że byliśmy wyczerpani.</p>
                                </div>
                            </div>

                            <div className="expression-group">
                                <h5>Such jako... (w znaczeniu "taki jak")</h5>
                                <div className="example-group-expanded">
                                    <p>"Companies <em>such as Google and Apple</em> are very innovative." - Firmy takie jak Google i Apple są bardzo innowacyjne.</p>
                                    <p>"Cities <em>such as Paris and Rome</em> are very romantic." - Miasta takie jak Paryż i Rzym są bardzo romantyczne.</p>
                                    <p>"Foods <em>such as pizza and pasta</em> are very popular." - Potrawy takie jak pizza i makaron są bardzo popularne.</p>
                                </div>
                            </div>

                            <div className="expression-group">
                                <h5>Such w konstrukcjach inwersyjnych</h5>
                                <div className="example-group-expanded">
                                    <p>"<em>Such was his anger that</em> he couldn't speak." - Tak wielki był jego gniew, że nie mógł mówić.</p>
                                    <p>"<em>Such is the nature of</em> this problem." - Taka jest natura tego problemu.</p>
                                    <p>"<em>Such were the circumstances that</em> we had to act quickly." - Takie były okoliczności, że musieliśmy działać szybko.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>💡 Praktyczne różnice i porównania</h4>
                        <div className="comparison">
                            <div className="comparison-case">
                                <h5>SO - bez rzeczownika</h5>
                                <div className="example-pair">
                                    <p>"The music is <em>so beautiful</em>."</p>
                                    <p className="translation">Muzyka jest taka piękna.</p>
                                </div>
                                <div className="example-pair">
                                    <p>"He works <em>so hard</em>."</p>
                                    <p className="translation">On pracuje tak ciężko.</p>
                                </div>
                                <div className="example-pair">
                                    <p>"There are <em>so many</em> options."</p>
                                    <p className="translation">Jest tak wiele opcji.</p>
                                </div>
                            </div>

                            <div className="comparison-case">
                                <h5>SUCH - z rzeczownikiem</h5>
                                <div className="example-pair">
                                    <p>"It's <em>such beautiful music</em>."</p>
                                    <p className="translation">To taka piękna muzyka.</p>
                                </div>
                                <div className="example-pair">
                                    <p>"He does <em>such hard work</em>."</p>
                                    <p className="translation">On wykonuje tak ciężką pracę.</p>
                                </div>
                                <div className="example-pair">
                                    <p>"These are <em>such good options</em>."</p>
                                    <p className="translation">To są tak dobre opcje.</p>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip">
                            <h5>💡 Złota zasada</h5>
                            <p><strong>SO</strong> używamy z <strong>przymiotnikami i przysłówkami</strong> (bez rzeczownika)<br/>
                                <strong>SUCH</strong> używamy z <strong>rzeczownikami</strong> (z przymiotnikiem lub bez)</p>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Częste błędy i wyjątki</h4>
                        <div className="common-mistakes">
                            <div className="mistake-group">
                                <h5>❌ Mieszanie SO i SUCH</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">It was so beautiful day.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">It was such a beautiful day.</span>
                                        <span className="reason">("such" z rzeczownikiem)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">She is such intelligent.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">She is so intelligent.</span>
                                        <span className="reason">("so" z przymiotnikiem bez rzeczownika)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">They are so nice people.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">They are such nice people.</span>
                                        <span className="reason">("such" z przymiotnikiem i rzeczownikiem)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-group">
                                <h5>❌ Błędne użycie artykułów</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">It was such beautiful day.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">It was such a beautiful day.</span>
                                        <span className="reason">(rzeczownik policzalny wymaga "a/an")</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">She has such a patience.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">She has such patience.</span>
                                        <span className="reason">(rzeczownik niepoliczalny bez "a/an")</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Wyjątki z SO</h5>
                                <div className="comparison-examples">
                                    <div className="comparison-pair">
                                        <div className="case">
                                            <span className="title">SO + many/few + rzeczownik policzalny:</span>
                                            <p>"<em>so many books</em>" - tak wiele książek</p>
                                            <p>"<em>so few opportunities</em>" - tak mało okazji</p>
                                        </div>
                                        <div className="case">
                                            <span className="title">SO + much/little + rzeczownik niepoliczalny:</span>
                                            <p>"<em>so much time</em>" - tak dużo czasu</p>
                                            <p>"<em>so little information</em>" - tak mało informacji</p>
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
                                <h5>Wybierz poprawną formę - SO lub SUCH:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> It was ______ beautiful music that I cried.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="ss1" value="a" />
                                                <span>so</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="ss1" value="b" />
                                                <span>such</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="ss1" value="c" />
                                                <span>such a</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">"such" z rzeczownikiem "music" (niepoliczalny)</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> She is ______ intelligent person.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="ss2" value="a" />
                                                <span>so</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="ss2" value="b" />
                                                <span>such</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="ss2" value="c" />
                                                <span>such an</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">"such an" z przymiotnikiem i rzeczownikiem policzalnym</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> I have ______ many things to do today.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="ss3" value="a" />
                                                <span>so</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="ss3" value="b" />
                                                <span>such</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="ss3" value="c" />
                                                <span>such a</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">"so many" z rzeczownikami policzalnymi w liczbie mnogiej</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> The test was ______ difficult that I failed.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="ss4" value="a" />
                                                <span>so</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="ss4" value="b" />
                                                <span>such</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="ss4" value="c" />
                                                <span>such a</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">"so" z przymiotnikiem "difficult" (bez rzeczownika)</div>
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
                        <h4>📚 Podsumowanie - Kiedy używać?</h4>
                        <div className="summary-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Konstrukcja</th>
                                    <th>Przykład</th>
                                    <th>Użycie</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>SO + przymiotnik</td>
                                    <td>so beautiful</td>
                                    <td>Bez rzeczownika</td>
                                </tr>
                                <tr>
                                    <td>SO + przysłówek</td>
                                    <td>so quickly</td>
                                    <td>Opisuje sposób działania</td>
                                </tr>
                                <tr>
                                    <td>SO + many/much</td>
                                    <td>so many people</td>
                                    <td>Określa ilość</td>
                                </tr>
                                <tr>
                                    <td>SUCH + a/an + przymiotnik + rzeczownik</td>
                                    <td>such a beautiful day</td>
                                    <td>Rzeczownik policzalny</td>
                                </tr>
                                <tr>
                                    <td>SUCH + przymiotnik + rzeczownik</td>
                                    <td>such beautiful weather</td>
                                    <td>Rzeczownik niepoliczalny/l.mn.</td>
                                </tr>
                                <tr>
                                    <td>SUCH + rzeczownik</td>
                                    <td>such nonsense</td>
                                    <td>Bez przymiotnika</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip">
                            <h5>💡 Praktyczna wskazówka</h5>
                            <p>Zapamiętaj: <strong>SO</strong> opisuje <strong>jakość</strong> (przymiotniki/przysłówki), <strong>SUCH</strong> opisuje <strong>rzeczy/ludzi/sytuacje</strong> (rzeczowniki). Jeśli możesz dodać rzeczownik - użyj SUCH, jeśli nie - użyj SO!</p>
                        </div>
                    </section>
                </>
            ),
        },
        {
            id: 'so-such-advanced',
            title: 'So vs Such - zaawansowane 🚀',
            excerpt: 'Zaawansowane konstrukcje, wyrażenia idiomatyczne i specjalne użycia.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Zaawansowane użycie SO i SUCH</h3>
                        <p className="muted">Idiomy, konstrukcje formalne i specjalne przypadki użycia</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Zaawansowane konstrukcje z SO</h4>
                                <div className="advanced-constructions">
                                    <div className="construction-type">
                                        <h5>So as to + infinitive (cel)</h5>
                                        <div className="example-group-expanded">
                                            <p>"She arrived early <em>so as to get</em> a good seat." - Przyjechała wcześnie, aby zająć dobre miejsce.</p>
                                            <p>"He studied hard <em>so as to pass</em> the exam." - Uczył się ciężko, aby zdać egzamin.</p>
                                            <p>"We left quietly <em>so as not to wake</em> the baby." - Wyszliśmy cicho, aby nie obudzić dziecka.</p>
                                            <p>"They saved money <em>so as to buy</em> a house." - Oszczędzali pieniądze, aby kupić dom.</p>
                                        </div>
                                    </div>

                                    <div className="construction-type">
                                        <h5>So + adjective + as + to + infinitive</h5>
                                        <div className="example-group-expanded">
                                            <p>"Would you be <em>so kind as to help</em> me?" - Czy byłbyś tak miły i pomógłbyś mi?</p>
                                            <p>"He was <em>so foolish as to believe</em> that story." - Był tak głupi, że uwierzył w tę historię.</p>
                                            <p>"She was <em>so careless as to leave</em> her keys in the car." - Była tak nieostrożna, że zostawiła kluczyki w samochodzie.</p>
                                        </div>
                                    </div>

                                    <div className="construction-type">
                                        <h5>So that + zdanie (cel)</h5>
                                        <div className="example-group-expanded">
                                            <p>"I'll call you <em>so that you know</em> I arrived safely." - Zadzwonię do ciebie, żebyś wiedział, że dotarłem bezpiecznie.</p>
                                            <p>"She wrote it down <em>so that she wouldn't forget</em>." - Zapisała to, żeby nie zapomnieć.</p>
                                            <p>"We arrived early <em>so that we could get</em> good seats." - Przyjechaliśmy wcześnie, żeby móc zająć dobre miejsca.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>📝 Zaawansowane konstrukcje z SUCH</h4>
                                <div className="advanced-constructions">
                                    <div className="construction-type">
                                        <h5>Such as + przykłady</h5>
                                        <div className="example-group-expanded">
                                            <p>"I enjoy outdoor activities, <em>such as hiking and cycling</em>." - Lubię aktywności na świeżym powietrzu, takie jak wędrówki i jazda na rowerze.</p>
                                            <p>"They visited several countries, <em>such as France, Italy, and Spain</em>." - Odwiedzili kilka krajów, takich jak Francja, Włochy i Hiszpania.</p>
                                            <p>"We need various tools, <em>such as hammers, screwdrivers, and pliers</em>." - Potrzebujemy różnych narzędzi, takich jak młotki, śrubokręty i szczypce.</p>
                                        </div>
                                    </div>

                                    <div className="construction-type">
                                        <h5>Such + that (skutek w zdaniach złożonych)</h5>
                                        <div className="example-group-expanded">
                                            <p>"It was <em>such a compelling argument that</em> everyone agreed immediately." - To był tak przekonujący argument, że wszyscy natychmiast się zgodzili.</p>
                                            <p>"He showed <em>such remarkable talent that</em> he was offered a scholarship." - Wykazał się tak niezwykłym talentem, że zaoferowano mu stypendium.</p>
                                            <p>"There was <em>such confusion that</em> the meeting had to be postponed." - Było takie zamieszanie, że spotkanie musiało zostać przełożone.</p>
                                        </div>
                                    </div>

                                    <div className="construction-type">
                                        <h5>No such thing as</h5>
                                        <div className="example-group-expanded">
                                            <p>"There's <em>no such thing as</em> a free lunch." - Nie ma czegoś takiego jak darmowy lunch.</p>
                                            <p>"<em>No such thing as</em> perfection exists." - Nie istnieje coś takiego jak perfekcja.</p>
                                            <p>"He believes there's <em>no such thing as</em> coincidence." - Wierzy, że nie ma czegoś takiego jak przypadek.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Wyrażenia idiomatyczne</h4>
                        <div className="idiomatic-expressions">
                            <div className="idiom-group">
                                <h5>Wyrażenia z SO</h5>
                                <div className="example-group-expanded">
                                    <p>"<em>So far, so good</em>." - Na razie dobrze.</p>
                                    <p>"<em>So be it</em>." - Niech tak będzie.</p>
                                    <p>"<em>So to speak</em>." - Żeby tak powiedzieć.</p>
                                    <p>"<em>So what?</em>" - I co z tego?</p>
                                    <p>"<em>So long!</em>" - Na razie! (pożegnanie)</p>
                                    <p>"<em>So-called</em> experts." - Tak zwani eksperci.</p>
                                </div>
                            </div>

                            <div className="idiom-group">
                                <h5>Wyrażenia z SUCH</h5>
                                <div className="example-group-expanded">
                                    <p>"<em>Such is life</em>." - Takie jest życie.</p>
                                    <p>"<em>In such cases</em>..." - W takich przypadkach...</p>
                                    <p>"<em>To such an extent that</em>..." - Do takiego stopnia, że...</p>
                                    <p>"<em>All such matters</em>..." - Wszystkie takie sprawy...</p>
                                    <p>"<em>Such and such</em>..." - Ten a ten, taka a taka...</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚡ Specjalne przypadki użycia</h4>
                        <div className="special-cases">
                            <div className="case-group">
                                <h5>So vs Very - różnice</h5>
                                <div className="comparison">
                                    <div className="comparison-case">
                                        <h6>SO (emocje, subiektywne)</h6>
                                        <p>"I'm <em>so happy</em> to see you!" - Jestem taki szczęśliwy, że cię widzę!</p>
                                        <p>"This soup is <em>so delicious</em>!" - Ta zupa jest taka pyszna!</p>
                                        <p className="explanation">Wyraża silne emocje i subiektywną opinię</p>
                                    </div>

                                    <div className="comparison-case">
                                        <h6>VERY (fakty, obiektywne)</h6>
                                        <p>"The building is <em>very tall</em>." - Budynek jest bardzo wysoki.</p>
                                        <p>"She speaks <em>very quickly</em>." - Ona mówi bardzo szybko.</p>
                                        <p className="explanation">Opisuje obiektywne fakty bez emocjonalnego zabarwienia</p>
                                    </div>
                                </div>
                            </div>

                            <div className="case-group">
                                <h5>Such w języku formalnym</h5>
                                <div className="example-group-expanded">
                                    <p>"<em>Such behavior</em> will not be tolerated." - Takie zachowanie nie będzie tolerowane.</p>
                                    <p>"<em>Such circumstances</em> require immediate action." - Takie okoliczności wymagają natychmiastowego działania.</p>
                                    <p>"<em>Such is the nature</em> of our business." - Taka jest natura naszego biznesu.</p>
                                    <p>"We have never encountered <em>such difficulties</em> before." - Nigdy wcześniej nie napotkaliśmy takich trudności.</p>
                                </div>
                            </div>

                            <div className="case-group">
                                <h5>So w mowie zależnej</h5>
                                <div className="example-group-expanded">
                                    <p>"He said he was <em>so tired</em> that he could barely stand." - Powiedział, że jest tak zmęczony, że ledwo może stać.</p>
                                    <p>"She thought the movie was <em>so boring</em> that she fell asleep." - Myślała, że film jest tak nudny, że zasnęła.</p>
                                    <p>"They claimed the food was <em>so spicy</em> that they couldn't eat it." - Twierdzili, że jedzenie jest tak ostre, że nie mogą go jeść.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Zaawansowane ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Uzupełnij zdania odpowiednią formą SO lub SUCH:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> It was ______ a complicated problem ______ we needed expert help.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="ssadv1" value="a" />
                                                <span>so... that</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="ssadv1" value="b" />
                                                <span>such... that</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="ssadv1" value="c" />
                                                <span>so... as</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">"such... that" z rzeczownikiem "problem"</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> Would you be ______ kind ______ to pass me the salt?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="ssadv2" value="a" />
                                                <span>so... as</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="ssadv2" value="b" />
                                                <span>such... as</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="ssadv2" value="c" />
                                                <span>so... that</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">"so... as to" w prośbach formalnych</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> We need various supplies, ______ paper, pens, and folders.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="ssadv3" value="a" />
                                                <span>so as</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="ssadv3" value="b" />
                                                <span>such as</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="ssadv3" value="c" />
                                                <span>so that</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">"such as" do podawania przykładów</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> The music was ______ loud ______ we couldn't hear each other.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="ssadv4" value="a" />
                                                <span>so... that</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="ssadv4" value="b" />
                                                <span>such... that</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="ssadv4" value="c" />
                                                <span>so... as</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">"so... that" z przymiotnikiem "loud"</div>
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
                        <h4>🎯 Podsumowanie zaawansowanych konstrukcji</h4>
                        <div className="summary-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Konstrukcja</th>
                                    <th>Znaczenie</th>
                                    <th>Przykład</th>
                                    <th>Użycie</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>so as to</td>
                                    <td>w celu, aby</td>
                                    <td>so as to improve</td>
                                    <td>Formalny cel</td>
                                </tr>
                                <tr>
                                    <td>so... as to</td>
                                    <td>na tyle... że</td>
                                    <td>so kind as to help</td>
                                    <td>Prośby formalne</td>
                                </tr>
                                <tr>
                                    <td>so that</td>
                                    <td>żeby, aby</td>
                                    <td>so that you know</td>
                                    <td>Cel w zdaniu złożonym</td>
                                </tr>
                                <tr>
                                    <td>such as</td>
                                    <td>takie jak</td>
                                    <td>cities such as Paris</td>
                                    <td>Podawanie przykładów</td>
                                </tr>
                                <tr>
                                    <td>such... that</td>
                                    <td>taki... że</td>
                                    <td>such a big house that</td>
                                    <td>Skutek z rzeczownikiem</td>
                                </tr>
                                <tr>
                                    <td>no such thing</td>
                                    <td>nie ma czegoś takiego</td>
                                    <td>no such thing as</td>
                                    <td>Zaprzeczenie istnienia</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip">
                            <h5>💡 Mistrzowskie użycie</h5>
                            <p>Zaawansowane konstrukcje z SO i SUCH pozwalają na bardziej precyzyjne i wyrafinowane wyrażanie myśli. Używaj ich świadomie, aby Twoje wypowiedzi w języku angielskim brzmiały naturalnie i profesjonalnie!</p>
                        </div>
                    </section>
                </>
            ),
        }
    ],
    'inversion': [
        {
            id: 'inversion-negative',
            title: 'Inwersja szyku 🔄',
            excerpt: 'Never have I seen such a view. - zmiana szyku dla podkreślenia.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Inversion - inwersja szyku zdania</h3>
                        <p className="muted">Zmiana normalnego szyku zdania dla podkreślenia lub w określonych konstrukcjach</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Inwersja po wyrażeniach negatywnych</h4>
                                <div className="inversion-type">
                                    <p><strong>Wyrażenia na początku zdania + inwersja (operator przed podmiotem)</strong></p>

                                    <div className="inversion-examples">
                                        <div className="example-group">
                                            <h5>Never, Rarely, Seldom</h5>
                                            <div className="example">
                                                <p>"<em>Never have I seen</em> such a beautiful sunset."</p>
                                                <p className="translation">Nigdy nie widziałem tak pięknego zachodu słońca.</p>
                                                <p className="explanation">Zamiast: I have never seen such a beautiful sunset.</p>
                                            </div>
                                            <div className="example">
                                                <p>"<em>Rarely do we have</em> the opportunity to travel."</p>
                                                <p className="translation">Rzadko mamy okazję podróżować.</p>
                                                <p className="explanation">Zamiast: We rarely have the opportunity to travel.</p>
                                            </div>
                                            <div className="example">
                                                <p>"<em>Seldom has there been</em> a better time to invest."</p>
                                                <p className="translation">Rzadko był lepszy czas na inwestycje.</p>
                                                <p className="explanation">Zamiast: There has seldom been a better time to invest.</p>
                                            </div>
                                        </div>

                                        <div className="example-group">
                                            <h5>Hardly, Scarcely, No sooner</h5>
                                            <div className="example">
                                                <p>"<em>Hardly had I arrived</em> when the phone rang."</p>
                                                <p className="translation">Ledwie przyjechałem, kiedy zadzwonił telefon.</p>
                                                <p className="explanation">Zamiast: I had hardly arrived when the phone rang.</p>
                                            </div>
                                            <div className="example">
                                                <p>"<em>Scarcely had she finished</em> speaking when the applause began."</p>
                                                <p className="translation">Zaledwie skończyła mówić, kiedy rozpoczęły się oklaski.</p>
                                                <p className="explanation">Zamiast: She had scarcely finished speaking when...</p>
                                            </div>
                                            <div className="example">
                                                <p>"<em>No sooner had she left</em> than he arrived."</p>
                                                <p className="translation">Nie minęła chwila od jej wyjścia, kiedy on przyjechał.</p>
                                                <p className="explanation">Zamiast: She had no sooner left than he arrived.</p>
                                            </div>
                                        </div>

                                        <div className="example-group">
                                            <h5>Little, Not only, Under no circumstances</h5>
                                            <div className="example">
                                                <p>"<em>Little did I know</em> what was about to happen."</p>
                                                <p className="translation">Mało wiedziałem, co się zaraz wydarzy.</p>
                                                <p className="explanation">Zamiast: I knew little about what was about to happen.</p>
                                            </div>
                                            <div className="example">
                                                <p>"<em>Not only did he finish</em> the project, but he also exceeded expectations."</p>
                                                <p className="translation">Nie tylko ukończył projekt, ale także przekroczył oczekiwania.</p>
                                                <p className="explanation">Zamiast: He not only finished the project but also...</p>
                                            </div>
                                            <div className="example">
                                                <p>"<em>Under no circumstances should you open</em> this door."</p>
                                                <p className="translation">Pod żadnym pozorem nie powinieneś otwierać tych drzwi.</p>
                                                <p className="explanation">Zamiast: You should under no circumstances open this door.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grammar-tip">
                                        <h6>💡 Budowa inwersji negatywnej:</h6>
                                        <p><strong>Wyrażenie negatywne + operator + podmiot + reszta zdania</strong></p>
                                        <div className="construction-breakdown">
                                            <span className="highlighted">Never</span>
                                            <span className="operator">have</span>
                                            <span className="subject">I</span>
                                            <span className="part">seen such a beautiful sunset</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>📝 Inwersja warunkowa</h4>
                                <div className="inversion-type">
                                    <p><strong>W zdaniach warunkowych bez "if" - bardziej formalne</strong></p>

                                    <div className="inversion-examples">
                                        <div className="example-group">
                                            <h5>Should (warunek typu 1)</h5>
                                            <div className="example">
                                                <p>"<em>Should you need</em> any help, please call me."</p>
                                                <p className="translation">Jeśli będziesz potrzebować pomocy, zadzwoń do mnie.</p>
                                                <p className="explanation">Zamiast: If you should need any help, please call me.</p>
                                            </div>
                                            <div className="example">
                                                <p>"<em>Should there be</em> any problems, contact the manager."</p>
                                                <p className="translation">Jeśli będą jakieś problemy, skontaktuj się z menedżerem.</p>
                                                <p className="explanation">Zamiast: If there should be any problems, contact...</p>
                                            </div>
                                        </div>

                                        <div className="example-group">
                                            <h5>Were (warunek typu 2)</h5>
                                            <div className="example">
                                                <p>"<em>Were I you</em>, I would accept the offer."</p>
                                                <p className="translation">Na twoim miejscu przyjąłbym ofertę.</p>
                                                <p className="explanation">Zamiast: If I were you, I would accept the offer.</p>
                                            </div>
                                            <div className="example">
                                                <p>"<em>Were she here</em>, she would know what to do."</p>
                                                <p className="translation">Gdyby tu była, wiedziałaby, co robić.</p>
                                                <p className="explanation">Zamiast: If she were here, she would know what to do.</p>
                                            </div>
                                        </div>

                                        <div className="example-group">
                                            <h5>Had (warunek typu 3)</h5>
                                            <div className="example">
                                                <p>"<em>Had I known</em> the truth, I would have acted differently."</p>
                                                <p className="translation">Gdybym znał prawdę, postąpiłbym inaczej.</p>
                                                <p className="explanation">Zamiast: If I had known the truth, I would have acted...</p>
                                            </div>
                                            <div className="example">
                                                <p>"<em>Had they arrived</em> on time, they wouldn't have missed the beginning."</p>
                                                <p className="translation">Gdyby przyjechali na czas, nie przegapiliby początku.</p>
                                                <p className="explanation">Zamiast: If they had arrived on time, they wouldn't...</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grammar-tip">
                                        <h6>💡 Budowa inwersji warunkowej:</h6>
                                        <p><strong>Should/Were/Had + podmiot + reszta zdania</strong></p>
                                        <div className="construction-breakdown">
                                            <span className="highlighted">Had</span>
                                            <span className="subject">I</span>
                                            <span className="part">known the truth, I would have acted differently</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Inne przypadki inwersji</h4>
                        <div className="other-inversions">
                            <div className="inversion-category">
                                <h5>So/Such... that</h5>
                                <p><strong>Podkreślenie intensywności</strong></p>
                                <div className="example-group-expanded">
                                    <p>"<em>So beautiful was the music that</em> everyone was silent."</p>
                                    <p className="translation">Tak piękna była muzyka, że wszyscy zamilkli.</p>
                                    <p>"<em>Such was his anger that</em> he couldn't speak."</p>
                                    <p className="translation">Tak wielki był jego gniew, że nie mógł mówić.</p>
                                    <p>"<em>So quickly did he run that</em> no one could catch him."</p>
                                    <p className="translation">Tak szybko biegł, że nikt nie mógł go złapać.</p>
                                </div>
                            </div>

                            <div className="inversion-category">
                                <h5>Here/There</h5>
                                <p><strong>Wskazywanie miejsca lub obecności</strong></p>
                                <div className="example-group-expanded">
                                    <p>"<em>Here comes</em> the bus!"</p>
                                    <p className="translation">Nadjeżdża autobus!</p>
                                    <p>"<em>There goes</em> my last chance!"</p>
                                    <p className="translation">Oto moja ostatnia szansa!</p>
                                    <p>"<em>Here is</em> the document you asked for."</p>
                                    <p className="translation">Oto dokument, o który prosiłeś.</p>
                                </div>
                            </div>

                            <div className="inversion-category">
                                <h5>Only after/then/when</h5>
                                <p><strong>Podkreślenie wyjątkowości czasu lub warunku</strong></p>
                                <div className="example-group-expanded">
                                    <p>"<em>Only after he left did I realize</em> my mistake."</p>
                                    <p className="translation">Dopiero po jego wyjściu zdałem sobie sprawę z błędu.</p>
                                    <p>"<em>Only then did I understand</em> the situation."</p>
                                    <p className="translation">Dopiero wtedy zrozumiałem sytuację.</p>
                                    <p>"<em>Only when it's too late do we appreciate</em> what we had."</p>
                                    <p className="translation">Dopiero gdy jest za późno, doceniamy to, co mieliśmy.</p>
                                </div>
                            </div>

                            <div className="inversion-category">
                                <h5>Inwersja w zdaniach przysłówkowych miejsca</h5>
                                <p><strong>Gdy okolicznik miejsca jest na początku</strong></p>
                                <div className="example-group-expanded">
                                    <p>"<em>On the hill stood</em> an ancient castle."</p>
                                    <p className="translation">Na wzgórzu stał starożytny zamek.</p>
                                    <p>"<em>Next to the river lies</em> a small village."</p>
                                    <p className="translation">Nad rzeką leży mała wioska.</p>
                                    <p>"<em>In front of the building were</em> hundreds of protesters."</p>
                                    <p className="translation">Przed budynkiem były setki protestujących.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>💡 Zasady użycia inwersji</h4>
                        <div className="inversion-rules">
                            <div className="rule">
                                <h5>Operator przed podmiotem</h5>
                                <p>W inwersji operator (have, do, be, modal) zawsze stoi przed podmiotem</p>
                                <div className="example-pair">
                                    <div className="normal">
                                        <p>"I <strong>have</strong> never seen such a view."</p>
                                        <p className="explanation">Normalny szyk: podmiot + operator</p>
                                    </div>
                                    <div className="inverted">
                                        <p>"Never <strong>have</strong> I seen such a view."</p>
                                        <p className="explanation">Inwersja: operator + podmiot</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rule">
                                <h5>Użycie operatora "do"</h5>
                                <p>Gdy w zdaniu nie ma operatora, dodajemy "do/does/did"</p>
                                <div className="example-pair">
                                    <div className="normal">
                                        <p>"She rarely <strong>visits</strong> her family."</p>
                                        <p className="explanation">Brak operatora w zdaniu twierdzącym</p>
                                    </div>
                                    <div className="inverted">
                                        <p>"Rarely <strong>does</strong> she visit her family."</p>
                                        <p className="explanation">Dodajemy operator "does"</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rule">
                                <h5>Styl formalny</h5>
                                <p>Inwersja jest charakterystyczna dla języka formalnego, literackiego i retorycznego</p>
                                <div className="example-group-expanded">
                                    <p><strong>Formalne:</strong> "<em>Not until much later did they discover</em> the truth."</p>
                                    <p><strong>Nieformalne:</strong> "They didn't discover the truth until much later."</p>
                                </div>
                            </div>

                            <div className="rule">
                                <h5>Emfaza i podkreślenie</h5>
                                <p>Inwersja służy do uwydatnienia ważnych informacji lub emocji</p>
                                <div className="example-group-expanded">
                                    <p>"<em>Little did she suspect</em> what was about to happen." (napięcie)</p>
                                    <p>"<em>So dramatic was the change that</em> no one recognized him." (zaskoczenie)</p>
                                    <p>"<em>Never in my life have I witnessed</em> such courage." (podziw)</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Częste błędy i ograniczenia</h4>
                        <div className="common-mistakes">
                            <div className="mistake-group">
                                <h5>❌ Inwersja w zdaniach twierdzących</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">Never I have seen such a view.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Never have I seen such a view.</span>
                                        <span className="reason">(operator musi być przed podmiotem)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">Rarely she visits her family.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Rarely does she visit her family.</span>
                                        <span className="reason">(brak operatora - trzeba dodać "does")</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-group">
                                <h5>❌ Nieprawidłowa inwersja warunkowa</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">If had I known, I would have called.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Had I known, I would have called.</span>
                                        <span className="reason">(w inwersji pomijamy "if")</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">Were I would you, I would accept.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Were I you, I would accept.</span>
                                        <span className="reason">(pomijamy "would" w części warunkowej)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Kiedy NIE stosować inwersji?</h5>
                                <div className="comparison-examples">
                                    <div className="comparison-pair">
                                        <div className="case">
                                            <span className="title">NIE używaj inwersji z:</span>
                                            <p>"<strong>Sometimes</strong> I go to the cinema." ✅</p>
                                            <p>"<strong>Often</strong> we meet for coffee." ✅</p>
                                            <p>"<strong>Usually</strong> she arrives early." ✅</p>
                                            <p><strong>Te przysłówki nie wymagają inwersji!</strong></p>
                                        </div>
                                        <div className="case">
                                            <span className="title">UŻYWAJ inwersji z:</span>
                                            <p>"<strong>Never</strong> have I been so happy." ✅</p>
                                            <p>"<strong>Rarely</strong> do we see such talent." ✅</p>
                                            <p>"<strong>Seldom</strong> has there been a better opportunity." ✅</p>
                                            <p><strong>Tylko określone wyrażenia negatywne!</strong></p>
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
                                <h5>Przekształć zdania używając inwersji:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> I have never been so embarrassed in my life.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="inv1" value="a" />
                                                <span>Never I have been so embarrassed in my life.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="inv1" value="b" />
                                                <span>Never have I been so embarrassed in my life.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="inv1" value="c" />
                                                <span>Never I been so embarrassed in my life.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Inwersja z "never" - operator "have" przed podmiotem "I"</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> If I had known about the traffic, I would have left earlier.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="inv2" value="a" />
                                                <span>If had I known about the traffic, I would have left earlier.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="inv2" value="b" />
                                                <span>Had I known about the traffic, I would have left earlier.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="inv2" value="c" />
                                                <span>Had known I about the traffic, I would have left earlier.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Inwersja warunkowa - pomijamy "if", "had" przed podmiotem</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> She not only finished the project but also wrote a detailed report.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="inv3" value="a" />
                                                <span>Not only she finished the project but also wrote a detailed report.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="inv3" value="b" />
                                                <span>Not only did she finish the project but also wrote a detailed report.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="inv3" value="c" />
                                                <span>Not only finished she the project but also wrote a detailed report.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">"Not only" wymaga inwersji i operatora "did"</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> The music was so beautiful that everyone cried.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="inv4" value="a" />
                                                <span>So beautiful the music was that everyone cried.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="inv4" value="b" />
                                                <span>So beautiful was the music that everyone cried.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="inv4" value="c" />
                                                <span>So beautiful was that the music everyone cried.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Inwersja ze "so...that" - operator "was" przed podmiotem</div>
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
                        <h4>🎯 Podsumowanie - Kiedy używać inwersji?</h4>
                        <div className="summary-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Sytuacja</th>
                                    <th>Konstrukcja</th>
                                    <th>Przykład</th>
                                    <th>Uwagi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Wyrażenia negatywne</td>
                                    <td>Never/Rarely/Seldom + operator + podmiot</td>
                                    <td>Never have I seen...</td>
                                    <td>Operator przed podmiotem</td>
                                </tr>
                                <tr>
                                    <td>Warunki bez "if"</td>
                                    <td>Should/Were/Had + podmiot</td>
                                    <td>Had I known...</td>
                                    <td>Bardziej formalne</td>
                                </tr>
                                <tr>
                                    <td>Intensywność</td>
                                    <td>So/Such... that + inwersja</td>
                                    <td>So beautiful was...</td>
                                    <td>Dla podkreślenia</td>
                                </tr>
                                <tr>
                                    <td>Miejsce</td>
                                    <td>Here/There + operator + podmiot</td>
                                    <td>Here comes...</td>
                                    <td>Dla wskazywania</td>
                                </tr>
                                <tr>
                                    <td>Wyłączność czasu</td>
                                    <td>Only after/then + operator + podmiot</td>
                                    <td>Only then did I...</td>
                                    <td>Podkreśla wyjątkowość</td>
                                </tr>
                                <tr>
                                    <td>Okoliczniki miejsca</td>
                                    <td>Miejsce + operator + podmiot</td>
                                    <td>On the hill stood...</td>
                                    <td>Styl literacki</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip">
                            <h5>💡 Klucz do skutecznego użycia</h5>
                            <p>Inwersja jest jak <strong>retoryczny zabieg sceniczny</strong> - pozwala nadać Twoim wypowiedziom dramatyzmu i elegancji. Używaj jej świadomie w sytuacjach formalnych, aby podkreślić najważniejsze myśli i zaskoczyć słuchacza nietypowym szykiem zdania!</p>
                        </div>
                    </section>
                </>
            ),
        },
    ],
    'inne-wyrażenia': [
        {
            id: 'misc-expressions',
            title: 'Inne przydatne konstrukcje 🎯',
            excerpt: 'so/such, be supposed to, would rather, used to - praktyczne zwroty.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Inne przydatne wyrażenia i konstrukcje</h3>
                        <p className="muted">Różne praktyczne zwroty używane w codziennej komunikacji</p>

                        <div className="expressions-grid">
                            <div className="expression-group">
                                <h4>📝 So vs Such</h4>
                                <div className="expression-detail">
                                    <div className="usage">
                                        <h5>So + przymiotnik/przysłówek</h5>
                                        <div className="example-group-expanded">
                                            <p>"The movie was <em>so interesting</em>." - Film był taki interesujący.</p>
                                            <p>"He speaks <em>so quickly</em>." - Mówi tak szybko.</p>
                                            <p>"The food was <em>so delicious</em> that we ordered more." - Jedzenie było tak pyszne, że zamówiliśmy więcej.</p>
                                            <p>"She sings <em>so beautifully</em>." - Ona śpiewa tak pięknie.</p>
                                        </div>
                                    </div>

                                    <div className="usage">
                                        <h5>Such + (a/an) + przymiotnik + rzeczownik</h5>
                                        <div className="example-group-expanded">
                                            <p>"It was <em>such an interesting movie</em>." - To był taki interesujący film.</p>
                                            <p>"They are <em>such nice people</em>." - To tacy mili ludzie.</p>
                                            <p>"It's <em>such a beautiful day</em>!" - To taki piękny dzień!</p>
                                            <p>"He has <em>such amazing talent</em>." - On ma tak niesamowity talent.</p>
                                        </div>
                                    </div>

                                    <div className="usage">
                                        <h5>So/Such... that (konsekwencja)</h5>
                                        <div className="example-group-expanded">
                                            <p>"It was <em>so cold that</em> we stayed home." - Było tak zimno, że zostaliśmy w domu.</p>
                                            <p>"It was <em>such a cold day that</em> we stayed home." - To był tak zimny dzień, że zostaliśmy w domu.</p>
                                            <p>"He was <em>so tired that</em> he fell asleep immediately." - Był tak zmęczony, że natychmiast zasnął.</p>
                                            <p>"It was <em>such a difficult exam that</em> many students failed." - To był tak trudny egzamin, że wielu studentów oblało.</p>
                                        </div>
                                    </div>

                                    <div className="grammar-tip">
                                        <h6>💡 Kluczowa różnica:</h6>
                                        <div className="construction-breakdown">
                                            <span className="part">SO</span>
                                            <span className="highlighted">+ przymiotnik/przysłówek</span>
                                            <span className="part">(bez rzeczownika)</span>
                                        </div>
                                        <div className="construction-breakdown">
                                            <span className="part">SUCH</span>
                                            <span className="highlighted">+ (a/an) + przymiotnik + rzeczownik</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="expression-group">
                                <h4>📝 Be supposed to</h4>
                                <div className="expression-detail">
                                    <div className="usage">
                                        <h5>Obowiązki i oczekiwania</h5>
                                        <div className="example-group-expanded">
                                            <p>"You <em>are supposed to wear</em> a uniform." - Powinieneś nosić mundur.</p>
                                            <p>"The train <em>is supposed to arrive</em> at 8." - Pociąg powinien przyjechać o 8.</p>
                                            <p>"Students <em>are supposed to complete</em> all assignments." - Studenci powinni ukończyć wszystkie zadania.</p>
                                            <p>"Employees <em>are supposed to follow</em> the dress code." - Pracownicy powinni przestrzegać dress code'u.</p>
                                        </div>
                                    </div>

                                    <div className="usage">
                                        <h5>Zamiary i plany</h5>
                                        <div className="example-group-expanded">
                                            <p>"I <em>was supposed to meet</em> her yesterday." - Miałem się z nią spotkać wczoraj.</p>
                                            <p>"We <em>were supposed to finish</em> the project today." - Mieliśmy skończyć projekt dzisiaj.</p>
                                            <p>"She <em>was supposed to call</em> me back." - Miała do mnie oddzwonić.</p>
                                            <p>"They <em>were supposed to arrive</em> by noon." - Mieli przyjechać przed południem.</p>
                                        </div>
                                    </div>

                                    <div className="usage">
                                        <h5>Plotki i domysły</h5>
                                        <div className="example-group-expanded">
                                            <p>"He <em>is supposed to be</em> very rich." - Podobno jest bardzo bogaty.</p>
                                            <p>"This restaurant <em>is supposed to serve</em> the best pizza in town." - Podobno ta restauracja serwuje najlepszą pizzę w mieście.</p>
                                            <p>"She <em>is supposed to know</em> everything about computers." - Podobno wie wszystko o komputerach.</p>
                                            <p>"That movie <em>is supposed to be</em> really scary." - Podobno ten film jest naprawdę straszny.</p>
                                        </div>
                                    </div>

                                    <div className="grammar-tip warning">
                                        <h6>⚠️ Uwaga!</h6>
                                        <p>"Be supposed to" w czasie przeszłym często oznacza, że coś <strong>nie wydarzyło się zgodnie z planem</strong>:</p>
                                        <p>"I was supposed to study, but I watched TV instead." - Miałem się uczyć, ale zamiast tego oglądałem TV.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Would rather vs Prefer</h4>
                        <div className="preference-expressions">
                            <div className="expression">
                                <h5>Would rather</h5>
                                <p><strong>Preferencje dotyczące teraźniejszości/przyszłości</strong></p>
                                <div className="example-group-expanded">
                                    <p>"I <em>would rather stay</em> home tonight." - Wolałbym zostać dziś wieczorem w domu.</p>
                                    <p>"She <em>would rather not go</em> to the party." - Wolałaby nie iść na imprezę.</p>
                                    <p>"They <em>would rather eat</em> at home than in a restaurant." - Wolą jeść w domu niż w restauracji.</p>
                                    <p>"We <em>would rather watch</em> a movie than go out." - Wolelibyśmy obejrzeć film niż wyjść.</p>
                                </div>

                                <p><strong>Z inną osobą (używamy Past Simple)</strong></p>
                                <div className="example-group-expanded">
                                    <p>"I <em>would rather you didn't smoke</em> here." - Wolałbym, żebyś tu nie palił.</p>
                                    <p>"She <em>would rather we arrived</em> earlier." - Wolałaby, żebyśmy przyszli wcześniej.</p>
                                    <p>"They <em>would rather their son studied</em> medicine." - Woleliby, żeby ich syn studiował medycynę.</p>
                                    <p>"I <em>would rather you told</em> me the truth." - Wolałbym, żebyś powiedział mi prawdę.</p>
                                </div>
                            </div>

                            <div className="expression">
                                <h5>Prefer</h5>
                                <div className="example-group-expanded">
                                    <p>"I <em>prefer tea to</em> coffee." - Wolę herbatę niż kawę.</p>
                                    <p>"She <em>prefers walking to</em> driving." - Woli chodzić pieszo niż jeździć samochodem.</p>
                                    <p>"I <em>would prefer to stay</em> home." - Wolałbym zostać w domu.</p>
                                    <p>"They <em>prefer watching</em> movies at home." - Wolą oglądać filmy w domu.</p>
                                </div>

                                <div className="grammar-tip">
                                    <h6>💡 Różnice w budowie:</h6>
                                    <div className="construction-breakdown">
                                        <span className="part">WOULD RATHER</span>
                                        <span className="highlighted">+ bezokolicznik (bez "to")</span>
                                    </div>
                                    <div className="construction-breakdown">
                                        <span className="part">PREFER</span>
                                        <span className="highlighted">+ -ing / to + infinitve</span>
                                    </div>
                                    <div className="construction-breakdown">
                                        <span className="part">WOULD PREFER</span>
                                        <span className="highlighted">+ to + infinitve</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📚 Used to vs Be used to vs Get used to</h4>
                        <div className="used-to-expressions">
                            <div className="expression">
                                <h5>Used to + infinitive</h5>
                                <p><strong>Przyzwyczajenia z przeszłości (już nieaktualne)</strong></p>
                                <div className="example-group-expanded">
                                    <p>"I <em>used to smoke</em>." - Palilem (ale już nie pale).</p>
                                    <p>"She <em>used to live</em> in London." - Mieszkała w Londynie (ale już nie mieszka).</p>
                                    <p>"We <em>used to go</em> to the beach every summer." - Jeździliśmy na plażę każde lato.</p>
                                    <p>"He <em>used to play</em> football when he was younger." - Grał w piłkę nożną, kiedy był młodszy.</p>
                                </div>
                                <div className="grammar-tip">
                                    <h6>💡 Uwaga!</h6>
                                    <p>"Used to" opisuje <strong>przeszłe nawyki i stany, które już nie istnieją</strong>. Nie używamy go dla pojedynczych zdarzeń.</p>
                                </div>
                            </div>

                            <div className="expression">
                                <h5>Be used to + noun/gerund</h5>
                                <p><strong>Być przyzwyczajonym do czegoś (obecny stan)</strong></p>
                                <div className="example-group-expanded">
                                    <p>"I <em>am used to the cold weather</em>." - Jestem przyzwyczajony do zimnej pogody.</p>
                                    <p>"He <em>is used to working</em> long hours." - Jest przyzwyczajony do pracy po godzinach.</p>
                                    <p>"They <em>are used to the noise</em> from the street." - Są przyzwyczajeni do hałasu z ulicy.</p>
                                    <p>"She <em>is used to getting up</em> early." - Jest przyzwyczajona do wczesnego wstawania.</p>
                                </div>
                            </div>

                            <div className="expression">
                                <h5>Get used to + noun/gerund</h5>
                                <p><strong>Przyzwyczajać się do czegoś (proces)</strong></p>
                                <div className="example-group-expanded">
                                    <p>"I can't <em>get used to the noise</em>." - Nie mogę przyzwyczaić się do hałasu.</p>
                                    <p>"She is <em>getting used to driving</em> on the left." - Przyzwyczaja się do jazdy lewą stroną.</p>
                                    <p>"It took me months to <em>get used to the new system</em>." - Zajęło mi miesiące przyzwyczajenie się do nowego systemu.</p>
                                    <p>"You'll soon <em>get used to the climate</em>." - Wkrótce przyzwyczaisz się do klimatu.</p>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip warning">
                            <h5>💡 Kluczowa różnica:</h5>
                            <div className="comparison-examples">
                                <div className="comparison-pair">
                                    <div className="case">
                                        <span className="title">USED TO + INFINITIVE:</span>
                                        <p>"I <em>used to live</em> in Paris." - Mieszkałem w Paryżu (ale już nie mieszkam)</p>
                                        <p><strong>Przeszłe przyzwyczajenia</strong></p>
                                    </div>
                                    <div className="case">
                                        <span className="title">BE USED TO + -ING/NOUN:</span>
                                        <p>"I <em>am used to living</em> in Paris." - Jestem przyzwyczajony do życia w Paryżu</p>
                                        <p><strong>Obecne przyzwyczajenie</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚡ Dodatkowe praktyczne wyrażenia</h4>
                        <div className="additional-expressions">
                            <div className="expression-category">
                                <h5>Had better</h5>
                                <p><strong>Rada, ostrzeżenie lub silna sugestia</strong></p>
                                <div className="example-group-expanded">
                                    <p>"You <em>had better study</em> for the exam." - Lepiej się ucz na egzamin.</p>
                                    <p>"We <em>had better leave</em> now or we'll be late." - Lepiej wyjdźmy teraz, bo się spóźnimy.</p>
                                    <p>"She <em>had better not forget</em> the documents." - Lepiej żeby nie zapomniała dokumentów.</p>
                                    <p>"They <em>had better apologize</em> for their behavior." - Powinni przeprosić za swoje zachowanie.</p>
                                </div>
                            </div>

                            <div className="expression-category">
                                <h5>Be about to</h5>
                                <p><strong>Bardzo bliska przyszłość - zaraz coś się wydarzy</strong></p>
                                <div className="example-group-expanded">
                                    <p>"The movie <em>is about to start</em>." - Film zaraz się zacznie.</p>
                                    <p>"I <em>was about to call</em> you when you arrived." - Właśnie miałem do ciebie dzwonić, kiedy przyszedłeś.</p>
                                    <p>"They <em>are about to announce</em> the results." - Zaraz ogłoszą wyniki.</p>
                                    <p>"Don't leave now - dinner <em>is about to be served</em>." - Nie wychodź teraz - obiad zaraz będzie podany.</p>
                                </div>
                            </div>

                            <div className="expression-category">
                                <h5>Be likely to</h5>
                                <p><strong>Prawdopodobieństwo</strong></p>
                                <div className="example-group-expanded">
                                    <p>"It <em>is likely to rain</em> later." - Prawdopodobnie później będzie padać.</p>
                                    <p>"She <em>is likely to get</em> the promotion." - Prawdopodobnie dostanie awans.</p>
                                    <p>"They <em>are not likely to agree</em> with our proposal." - Mało prawdopodobne, że zgodzą się z naszą propozycją.</p>
                                    <p>"The project <em>is likely to be completed</em> on time." - Projekt prawdopodobnie zostanie ukończony na czas.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Częste błędy</h4>
                        <div className="common-mistakes">
                            <div className="mistake-group">
                                <h5>❌ Mylenie "used to" z "be used to"</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">I am used to live in London.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I used to live in London. (przeszłość)</span>
                                        <span className="reason">lub</span>
                                        <span className="correct">I am used to living in London. (obecne przyzwyczajenie)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">She used to waking up early.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">She is used to waking up early.</span>
                                        <span className="reason">("be used to" wymaga formy -ing)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-group">
                                <h5>❌ Błędna budowa z "would rather"</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">I would rather to stay home.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I would rather stay home.</span>
                                        <span className="reason">(bez "to" po "would rather")</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">I would rather you don't smoke.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I would rather you didn't smoke.</span>
                                        <span className="reason">(Past Simple z inną osobą)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-group">
                                <h5>❌ Niepoprawne użycie "so" i "such"</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">It was so beautiful day.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">It was such a beautiful day.</span>
                                        <span className="reason">("such" z rzeczownikiem)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">She is such intelligent.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">She is so intelligent.</span>
                                        <span className="reason">("so" z przymiotnikiem)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> I ______ drink coffee every morning, but now I prefer tea.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="misc1" value="a" />
                                                <span>used to</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="misc1" value="b" />
                                                <span>am used to</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="misc1" value="c" />
                                                <span>get used to</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">"used to" dla przeszłych przyzwyczajeń, które już nie istnieją</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> It was ______ interesting book that I couldn't put it down.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="misc2" value="a" />
                                                <span>so</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="misc2" value="b" />
                                                <span>such</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="misc2" value="c" />
                                                <span>such an</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">"such a/an" z przymiotnikiem i rzeczownikiem policzalnym</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> I ______ you didn't interrupt me when I'm speaking.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="misc3" value="a" />
                                                <span>would rather</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="misc3" value="b" />
                                                <span>would prefer</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="misc3" value="c" />
                                                <span>prefer</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">"would rather" z Past Simple gdy mówimy o innych osobach</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> The meeting ______ start in five minutes.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="misc4" value="a" />
                                                <span>is supposed to</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="misc4" value="b" />
                                                <span>used to</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="misc4" value="c" />
                                                <span>is likely to</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">"be supposed to" dla planów i oczekiwań</div>
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
                        <h4>🎯 Podsumowanie - Której konstrukcji użyć?</h4>
                        <div className="summary-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Co chcesz wyrazić?</th>
                                    <th>Konstrukcja</th>
                                    <th>Przykład</th>
                                    <th>Uwagi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Intensywność (przymiotnik)</td>
                                    <td>So</td>
                                    <td>So beautiful</td>
                                    <td>Bez rzeczownika</td>
                                </tr>
                                <tr>
                                    <td>Intensywność (rzeczownik)</td>
                                    <td>Such</td>
                                    <td>Such a beautiful day</td>
                                    <td>Z rzeczownikiem</td>
                                </tr>
                                <tr>
                                    <td>Obowiązki/plany</td>
                                    <td>Be supposed to</td>
                                    <td>I am supposed to call</td>
                                    <td>Oczekiwania społeczne</td>
                                </tr>
                                <tr>
                                    <td>Preferencje (osoba mówiąca)</td>
                                    <td>Would rather</td>
                                    <td>I would rather stay</td>
                                    <td>Bez "to"</td>
                                </tr>
                                <tr>
                                    <td>Preferencje (inne osoby)</td>
                                    <td>Would rather + Past Simple</td>
                                    <td>I'd rather you stayed</td>
                                    <td>Past Simple po "you"</td>
                                </tr>
                                <tr>
                                    <td>Przeszłe przyzwyczajenia</td>
                                    <td>Used to</td>
                                    <td>I used to smoke</td>
                                    <td>Już nieaktualne</td>
                                </tr>
                                <tr>
                                    <td>Obecne przyzwyczajenie</td>
                                    <td>Be used to</td>
                                    <td>I am used to noise</td>
                                    <td>Z -ing lub rzeczownikiem</td>
                                </tr>
                                <tr>
                                    <td>Proces przyzwyczajania</td>
                                    <td>Get used to</td>
                                    <td>I'm getting used to it</td>
                                    <td>Stopniowy proces</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip">
                            <h5>💡 Praktyczna wskazówka</h5>
                            <p>Te konstrukcje są jak <strong>narzędzia w skrzynce narzędziowej</strong> - każde służy do czegoś innego. Naucz się ich dobrze, a Twoje wypowiedzi staną się bardziej naturalne i precyzyjne!</p>
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
        const initializeExercises = async () => {
            try {
                // Importujemy moduł
                const module = await import('../exercise-interactions.js');
                // Wywołujemy funkcję inicjalizującą
                if (module.initializeGrammarExercises) {
                    // Dodajemy opóźnienie dla pełnego renderowania React
                    setTimeout(() => {
                        module.initializeGrammarExercises();
                    }, 300);
                }
            } catch (error) {
                console.error('Błąd podczas ładowania skryptu ćwiczeń:', error);

                // Fallback: spróbuj załadować globalną funkcję
                setTimeout(() => {
                    if (window.initializeGrammarExercises) {
                        window.initializeGrammarExercises();
                    }
                }, 500);
            }
        };

        initializeExercises();

        // Cleanup function
        return () => {
            // Możesz dodać cleanup jeśli potrzeba
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

export default function PhrasesExpressions() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const { lang } = useLanguage()
    const active = section ?? 'had-sth-done'
    const topicId = searchParams.get('topic')
    const topics = TOPICS[active] ?? []
    const selected = topics.find(t => t.id === topicId)
    const basePath = `/gramatyka/wyrażenia-i-zwroty/${active}`

    useEffect(() => {
        // Zainicjalizuj logikę ćwiczeń po zamontowaniu i przy zmianie sekcji/tematu
        initializeGrammarExercises();
    }, [active, topicId]);

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
                    <h2>Wyrażenia i zwroty</h2>
                    <p className="muted">Zaawansowane konstrukcje i praktyczne wyrażenia angielskie</p>
                </header>

                <nav className="subnav" aria-label="Podstrony: Wyrażenia i zwroty">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/gramatyka/wyrażenia-i-zwroty/${s.id}`}
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
                            <div className="welcome-message">
                                <h3>Opanuj zaawansowane wyrażenia! 🎯</h3>
                                <p>Wybierz kategorię, aby poznać praktyczne konstrukcje i zwroty, które wzbogacą Twoją angielszczyznę.
                                    Od wyrażeń codziennych po zaawansowane struktury gramatyczne.</p>
                            </div>
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
            'had-sth-done': 'Had sth done - konstrukcja kazać coś zrobić',
            'indirect-questions': 'Pytania pośrednie - Indirect Questions',
            'unreal-past': 'Unreal Past - wyrażanie życzeń i żalów',
            'cleft-sentences': 'Cleft Sentences - podkreślanie elementów zdania',
            'participle-clauses': 'Zdania imiesłowowe - Participle Clauses',
            'so-vs-such': 'So vs Such - różnice w użyciu i konstrukcje',
            'inversion': 'Inwersja szyku zdania - Inversion',
            'inne-wyrażenia': 'Inne przydatne wyrażenia i konstrukcje'
        },
        en: {
            'had-sth-done': 'Had something done - causative construction',
            'indirect-questions': 'Indirect Questions - polite questioning',
            'unreal-past': 'Unreal Past - expressing wishes and regrets',
            'cleft-sentences': 'Cleft Sentences - emphasizing sentence elements',
            'participle-clauses': 'Participle Clauses - reduced clauses',
            'so-vs-such': 'So vs Such - differences in usage and constructions',
            'inversion': 'Inversion - changing word order for emphasis',
            'inne-wyrażenia': 'Other useful expressions and constructions'
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
            'had-sth-done': 'Konstrukcja have/get something done - kiedy ktoś robi coś dla nas. Zasady użycia, przykłady, ćwiczenia.',
            'indirect-questions': 'Pytania pośrednie - grzeczniejsza forma zadawania pytań. Budowa, zasady, przykłady z życia.',
            'unreal-past': 'Unreal Past - wyrażanie nierealnych życzeń i żalów. Konstrukcje I wish, If only, would rather.',
            'cleft-sentences': 'Cleft sentences - specjalne konstrukcje do podkreślania elementów zdania. It-cleft, what-cleft, all-cleft.',
            'participle-clauses': 'Zdania imiesłowowe - skrócona forma zdań podrzędnych. Present participle, past participle, perfect participle.',
            'so-vs-such': 'So vs Such - differences in usage and constructions',
            'inversion': 'Inwersja szyku zdania - zmiana szyku dla podkreślenia. Inwersja po wyrażeniach negatywnych i warunkowa.',
            'inne-wyrażenia': 'Inne przydatne wyrażenia: so/such, be supposed to, would rather, used to. Praktyczne zwroty angielskie.'
        },
        en: {
            'had-sth-done': 'Have/get something done construction - when someone does something for us. Usage rules, examples, exercises.',
            'indirect-questions': 'Indirect questions - more polite way of asking questions. Structure, rules, real-life examples.',
            'unreal-past': 'Unreal Past - expressing unreal wishes and regrets. I wish, If only, would rather constructions.',
            'cleft-sentences': 'Cleft sentences - special constructions for emphasizing sentence elements. It-cleft, what-cleft, all-cleft.',
            'participle-clauses': 'Participle clauses - reduced subordinate clauses. Present participle, past participle, perfect participle.',
            'so-vs-such': 'So vs Such - key differences in usage. When to use SO and when SUCH? Practical examples and exercises.',
            'inversion': 'Inversion - changing word order for emphasis. Inversion after negative expressions and conditional inversion.',
            'inne-wyrażenia': 'Other useful expressions: so/such, be supposed to, would rather, used to. Practical English phrases.'
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
        ? `https://angloboost.pl/pl/gramatyka/wyrażenia-i-zwroty/${activeSection}`
        : `https://angloboost.pl/en/grammar/phrases-expressions/${activeSection}`

    if (selectedTopic) {
        return `${baseUrl}?topic=${selectedTopic.id}`
    }

    return baseUrl
}

function getEnglishTopicTitle(topicId) {
    const englishTitles = {
        'had-sth-done-basics': 'Construction and Usage 🛠️',
        'had-sth-done-advanced': 'Advanced Usage 🎓',
        'indirect-questions-form': 'Form and Word Order 🗣️',
        'unreal-past-wishes': 'Wishes and If only 🙏',
        'cleft-it-what': 'It-/What-cleft 🎯',
        'participle-reduction': 'Participle Clauses 📝',
        'so-such-basics': 'So vs Such - Basics 🎯',
        'so-such-advanced': 'So vs Such - Advanced 🚀',
        'inversion-negative': 'Word Order Inversion 🔄',
        'misc-expressions': 'Other Useful Constructions 🎯'
    }
    return englishTitles[topicId] || 'English Expressions'
}

function getEnglishTopicExcerpt(topicId) {
    const englishExcerpts = {
        'had-sth-done-basics': 'Have/get + object + past participle - when someone does something for us.',
        'had-sth-done-advanced': 'Meaning nuances, phrasal verbs and special situations.',
        'indirect-questions-form': 'Could you tell me where the station is? - more polite questions.',
        'unreal-past-wishes': 'I wish I knew. If only I had studied. - expressing wishes and regrets.',
        'cleft-it-what': 'It was John who called. What I need is a break. - emphasizing sentence elements.',
        'participle-reduction': 'Feeling tired, she went to bed. - reduced form of subordinate clauses.',
        'so-such-basics': 'So beautiful vs such a beautiful day - differences in usage and constructions.',
        'so-such-advanced': 'Advanced constructions, idiomatic expressions and special uses.',
        'inversion-negative': 'Never have I seen such a view. - changing word order for emphasis.',
        'misc-expressions': 'so/such, be supposed to, would rather, used to - practical phrases.'
    }
    return englishExcerpts[topicId] || 'English expressions and constructions guide.'
}