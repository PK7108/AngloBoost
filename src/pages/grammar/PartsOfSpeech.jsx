import React, { useEffect } from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext.jsx'
import useDocumentMeta from '../../useDocumentMeta'
import '../../styles/topic-cards.css'
import { initializeGrammarExercises } from '../exercise-interactions.js'

const sections = [
    { id: 'przedimki', label: 'Przedimki' },
    { id: 'rzeczowniki', label: 'Rzeczowniki' },
    { id: 'czasowniki', label: 'Czasowniki' },
    { id: 'przymiotniki', label: 'Przymiotniki' },
    { id: 'przyslowki', label: 'Przysłówki' },
    { id: 'zaimki', label: 'Zaimki' },
    { id: 'spojniki', label: 'Spójniki' },
    { id: 'liczebniki', label: 'Liczebniki' },
    { id: 'przyimki', label: 'Przyimki' },
]

// Zestaw tematów dla każdej części mowy
const TOPICS = {
    przedimki: [
        {
            id: 'przedimki-nieokreslone',
            title: 'A czy AN?',
            excerpt: 'Kiedy użyć "a", a kiedy "an" - proste zasady i podchwytliwe przykłady.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Przedimki nieokreślone: A / AN</h3>
                        <p className="muted">Używamy ich, gdy mówimy o czymś po raz pierwszy, nieokreślonym lub jednym z wielu</p>

                        <div className="grammar-grid">
                            <div className="grammar-forms">
                                <h4>📝 Budowa i wymowa</h4>
                                <div className="forms-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Przedimek</th>
                                            <th>Użycie</th>
                                            <th>Wymowa</th>
                                            <th>Przykład</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><strong>A</strong></td>
                                            <td>Przed spółgłoskowym brzmieniem</td>
                                            <td>/ə/</td>
                                            <td><em>a cat</em> /ə kæt/</td>
                                        </tr>
                                        <tr>
                                            <td><strong>AN</strong></td>
                                            <td>Przed samogłoskowym brzmieniem</td>
                                            <td>/ən/</td>
                                            <td><em>an apple</em> /ən ˈæp.l̩/</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grammar-tip">
                                    <h5>💡 Złota zasada</h5>
                                    <p>To nie pisownia, a <strong>wymowa</strong> decyduje o wyborze przedimka!</p>
                                    <div className="phonetic-examples">
                                        <div className="phonetic-item">
                                            <span className="word">a university</span>
                                            <span className="phonetic">/ə ˌjuːnɪˈvɜːsəti/</span>
                                            <span className="explanation">(U wymawiane jak /j/ - spółgłoska)</span>
                                        </div>
                                        <div className="phonetic-item">
                                            <span className="word">an hour</span>
                                            <span className="phonetic">/ən ˈaʊər/</span>
                                            <span className="explanation">(H nieme - zaczyna się od samogłoski)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Szczegółowe zasady wymowy</h4>
                                <div className="pronunciation-rules">
                                    <div className="pronunciation-rule">
                                        <h5>🔤 Litery samogłoskowe - UWAGA!</h5>
                                        <div className="example-grid">
                                            <div className="example-pair">
                                                <div className="correct">
                                                    <span className="article">an</span>
                                                    <span className="example">honest person</span>
                                                    <span className="phonetic">/ən ˈɒn.ɪst/</span>
                                                </div>
                                                <div className="explanation">H nieme → samogłoska</div>
                                            </div>
                                            <div className="example-pair">
                                                <div className="correct">
                                                    <span className="article">a</span>
                                                    <span className="example">university</span>
                                                    <span className="phonetic">/ə ˌjuːnɪˈvɜːsəti/</span>
                                                </div>
                                                <div className="explanation">U jak /j/ → spółgłoska</div>
                                            </div>
                                            <div className="example-pair">
                                                <div className="correct">
                                                    <span className="article">a</span>
                                                    <span className="example">European</span>
                                                    <span className="phonetic">/ə ˌjʊərəˈpiːən/</span>
                                                </div>
                                                <div className="explanation">Eu jak /j/ → spółgłoska</div>
                                            </div>
                                            <div className="example-pair">
                                                <div className="correct">
                                                    <span className="article">an</span>
                                                    <span className="example">hourglass</span>
                                                    <span className="phonetic">/ən ˈaʊəɡlɑːs/</span>
                                                </div>
                                                <div className="explanation">H nieme → samogłoska</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pronunciation-rule">
                                        <h5>🔢 Liczby i skróty</h5>
                                        <div className="example-grid">
                                            <div className="example-pair">
                                                <div className="correct">
                                                    <span className="article">an</span>
                                                    <span className="example">8-year-old</span>
                                                    <span className="phonetic">/ən ˈeɪt jɪər əʊld/</span>
                                                </div>
                                                <div className="explanation">8 wymawiane "eight" → samogłoska</div>
                                            </div>
                                            <div className="example-pair">
                                                <div className="correct">
                                                    <span className="article">a</span>
                                                    <span className="example">one-way street</span>
                                                    <span className="phonetic">/ə ˈwʌn weɪ striːt/</span>
                                                </div>
                                                <div className="explanation">One jak /w/ → spółgłoska</div>
                                            </div>
                                            <div className="example-pair">
                                                <div className="correct">
                                                    <span className="article">an</span>
                                                    <span className="example">MBA</span>
                                                    <span className="phonetic">/ən em biː ˈeɪ/</span>
                                                </div>
                                                <div className="explanation">M wymawiane "em" → samogłoska</div>
                                            </div>
                                            <div className="example-pair">
                                                <div className="correct">
                                                    <span className="article">a</span>
                                                    <span className="example">UN resolution</span>
                                                    <span className="phonetic">/ə ˌjuːˈen ˌrezəˈluːʃn/</span>
                                                </div>
                                                <div className="explanation">U jak /j/ → spółgłoska</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Kiedy używamy A/AN? - Kompletny przewodnik</h4>
                        <div className="usage-cases-detailed">
                            <div className="usage-case-main">
                                <h5>🎯 Pierwsze wzmiankowanie</h5>
                                <div className="example-group-expanded">
                                    <p>"I saw <em>a</em> great movie yesterday. <em>The</em> movie was about space exploration."</p>
                                    <p>"She bought <em>a</em> new car. <em>The</em> car is electric and very fast."</p>
                                    <p>"There's <em>a</em> strange noise coming from the basement."</p>
                                    <p>"I met <em>an</em> interesting person at the conference."</p>
                                    <p className="explanation">Używamy a/an przy pierwszym wspomnieniu, potem the</p>
                                </div>
                            </div>

                            <div className="usage-case-main">
                                <h5>👤 Zawody, narodowości, religie</h5>
                                <div className="example-group-expanded">
                                    <p>"She's <em>a</em> doctor at the local hospital."</p>
                                    <p>"He became <em>an</em> actor after graduating from drama school."</p>
                                    <p>"My neighbor is <em>a</em> French engineer."</p>
                                    <p>"She's <em>a</em> Catholic and goes to church every Sunday."</p>
                                    <p>"He's <em>a</em> Buddhist monk from Thailand."</p>
                                    <p className="explanation">Przy określaniu zawodów, narodowości i wyznań</p>
                                </div>
                            </div>

                            <div className="usage-case-main">
                                <h5>🔢 Jeden z wielu - nieokreślony</h5>
                                <div className="example-group-expanded">
                                    <p>"Can I have <em>an</em> orange?" (jeden z wielu pomarańczy w koszu)</p>
                                    <p>"I need <em>a</em> pen to sign this document." (jakikolwiek długopis)</p>
                                    <p>"We're looking for <em>a</em> new apartment in the city center."</p>
                                    <p>"She wants to buy <em>a</em> dress for the wedding."</p>
                                    <p className="explanation">Gdy mówimy o dowolnym przedstawicielu grupy</p>
                                </div>
                            </div>

                            <div className="usage-case-main">
                                <h5>📏 Przed jednostkami miar i cenami</h5>
                                <div className="example-group-expanded">
                                    <p>"I go to the gym twice <em>a</em> week."</p>
                                    <p>"The car was doing 100 km <em>an</em> hour."</p>
                                    <p>"These apples cost $2 <em>a</em> kilo."</p>
                                    <p>"She earns $50 <em>an</em> hour as a consultant."</p>
                                    <p>"We have meetings three times <em>a</em> month."</p>
                                    <p className="explanation">W wyrażeniach częstotliwości i cen</p>
                                </div>
                            </div>

                            <div className="usage-case-main">
                                <h5>🎭 W wyrażeniach i zwrotach</h5>
                                <div className="example-group-expanded">
                                    <p>"What <em>a</em> beautiful day!"</p>
                                    <p>"It's <em>a</em> pity you can't come to the party."</p>
                                    <p>"He's in such <em>a</em> hurry!"</p>
                                    <p>"That's <em>a</em> shame you missed the concert."</p>
                                    <p>"She's <em>a</em> lot happier now."</p>
                                    <p>"It's <em>a</em> pleasure to meet you."</p>
                                </div>
                            </div>

                            <div className="usage-case-main">
                                <h5>🔤 Z nazwami własnymi w specyficznym znaczeniu</h5>
                                <div className="example-group-expanded">
                                    <p>"He thinks he's <em>a</em> Shakespeare." (jak jakiś Shakespeare)</p>
                                    <p>"She wants to be <em>a</em> Marie Curie." (jak kolejna Marie Curie)</p>
                                    <p>"This is <em>a</em> different London from the one I remember."</p>
                                    <p>"I'm not <em>a</em> Brad Pitt, but I'm happy with my looks."</p>
                                    <p className="explanation">Gdy nazwa własna oznacza "jakiś" lub "pewien"</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🚫 Kiedy NIE używamy przedimków nieokreślonych?</h4>
                        <div className="common-mistakes">
                            <div className="mistake-group">
                                <h5>❌ Z rzeczownikami niepoliczalnymi</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">a water</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">water</span>
                                        <span className="reason">(rzeczownik niepoliczalny)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">an advice</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">advice</span>
                                        <span className="reason">(rzeczownik niepoliczalny)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">an information</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">information</span>
                                        <span className="reason">(rzeczownik niepoliczalny)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">a weather</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">the weather / weather</span>
                                        <span className="reason">(rzeczownik niepoliczalny)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">a furniture</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">furniture / a piece of furniture</span>
                                        <span className="reason">(rzeczownik niepoliczalny)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-group">
                                <h5>❌ Z rzeczownikami w liczbie mnogiej</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">a books</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">books</span>
                                        <span className="reason">(liczba mnoga)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">an apples</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">apples</span>
                                        <span className="reason">(liczba mnoga)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">a children</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">children</span>
                                        <span className="reason">(liczba mnoga)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">a people</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">people</span>
                                        <span className="reason">(liczba mnoga)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Rzeczowniki niepoliczalne - główne kategorie</h5>
                                <div className="categories-grid">
                                    <div className="category">
                                        <span className="category-name">Płyny:</span>
                                        <span className="examples">water, milk, coffee, tea, juice, wine</span>
                                    </div>
                                    <div className="category">
                                        <span className="category-name">Materiały:</span>
                                        <span className="examples">wood, metal, glass, plastic, gold, silver</span>
                                    </div>
                                    <div className="category">
                                        <span className="category-name">Abstrakty:</span>
                                        <span className="examples">love, happiness, information, advice, knowledge</span>
                                    </div>
                                    <div className="category">
                                        <span className="category-name">Jedzenie:</span>
                                        <span className="examples">bread, cheese, rice, sugar, meat, butter</span>
                                    </div>
                                    <div className="category">
                                        <span className="category-name">Przedmioty zbiorowe:</span>
                                        <span className="examples">furniture, luggage, equipment, homework</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip">
                                <h5>💡 Pamiętaj o przymiotnikach!</h5>
                                <p>Przedimek zależy od dźwięku następującego po nim słowa:</p>
                                <div className="example-pair">
                                    <div className="correct">
                                        <span className="article">a</span>
                                        <span className="example">big apple</span>
                                        <span className="phonetic">/ə bɪɡ ˈæp.l̩/</span>
                                    </div>
                                    <div className="correct">
                                        <span className="article">an</span>
                                        <span className="example">old university</span>
                                        <span className="phonetic">/ən əʊld ˌjuːnɪˈvɜːsəti/</span>
                                    </div>
                                </div>
                                <p>W powyższych przykładach przedimek zależy od przymiotnika, nie od rzeczownika!</p>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📊 Podsumowanie - A/AN vs THE vs brak przedimka</h4>
                        <div className="summary-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Sytuacja</th>
                                    <th>A/AN</th>
                                    <th>THE</th>
                                    <th>---</th>
                                    <th>Przykład</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Pierwsze wzmiankowanie</td>
                                    <td>✅</td>
                                    <td>❌</td>
                                    <td>❌</td>
                                    <td>I saw <em>a</em> cat.</td>
                                </tr>
                                <tr>
                                    <td>Wspomniane wcześniej</td>
                                    <td>❌</td>
                                    <td>✅</td>
                                    <td>❌</td>
                                    <td><em>The</em> cat was black.</td>
                                </tr>
                                <tr>
                                    <td>Jeden z wielu</td>
                                    <td>✅</td>
                                    <td>❌</td>
                                    <td>❌</td>
                                    <td>I need <em>a</em> pen.</td>
                                </tr>
                                <tr>
                                    <td>Rzeczownik niepoliczalny</td>
                                    <td>❌</td>
                                    <td>❌</td>
                                    <td>✅</td>
                                    <td>I need <em>water</em>.</td>
                                </tr>
                                <tr>
                                    <td>Rzeczownik mnogi ogólnie</td>
                                    <td>❌</td>
                                    <td>❌</td>
                                    <td>✅</td>
                                    <td><em>Cats</em> are animals.</td>
                                </tr>
                                <tr>
                                    <td>Zawody</td>
                                    <td>✅</td>
                                    <td>❌</td>
                                    <td>❌</td>
                                    <td>She's <em>a</em> doctor.</td>
                                </tr>
                                <tr>
                                    <td>Nazwy własne</td>
                                    <td>❌</td>
                                    <td>❌</td>
                                    <td>✅</td>
                                    <td><em>John</em> lives in <em>Paris</em>.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip">
                            <h5>💡 Praktyczna zasada</h5>
                            <p><strong>A/AN</strong> = coś nowego, nieokreślonego, jednego z wielu<br/>
                                <strong>THE</strong> = coś konkretnego, znanego, unikatowego<br/>
                                <strong>---</strong> = ogólne pojęcia, rzeczy niepoliczalne, nazwy własne</p>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz właściwy przedimek nieokreślony (a/an):</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> I need _____ uniform for school.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="a_an1" value="a"/>
                                                <span>a</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="a_an1" value="b"/>
                                                <span>an</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> She is _____ honest person.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="a_an2" value="a"/>
                                                <span>a</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="a_an2" value="b"/>
                                                <span>an</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> He's _____ university professor.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="a_an3" value="a"/>
                                                <span>a</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="a_an3" value="b"/>
                                                <span>an</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> It was _____ unique experience.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="a_an4" value="a"/>
                                                <span>a</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="a_an4" value="b"/>
                                                <span>an</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> We saw _____ elephant at the zoo.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="a_an5" value="a"/>
                                                <span>a</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="a_an5" value="b"/>
                                                <span>an</span>
                                            </label>
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
        },
        {
            id: 'przedimek-okreslony',
            title: 'Przedimek THE',
            excerpt: 'Kiedy używać "the" - od konkretnych sytuacji po wyrażenia idiomatyczne.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Przedimek określony: THE</h3>
                        <p className="muted">Używamy go, gdy mówimy o czymś konkretnym, znanym rozmówcy lub unikatowym</p>

                        <div className="grammar-grid">
                            <div className="grammar-forms">
                                <h4>📝 Budowa i wymowa</h4>
                                <div className="forms-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Sytuacja</th>
                                            <th>Wymowa</th>
                                            <th>Przykład</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Przed spółgłoską</td>
                                            <td>/ðə/</td>
                                            <td><em>the car</em> /ðə kɑːr/</td>
                                        </tr>
                                        <tr>
                                            <td>Przed samogłoską</td>
                                            <td>/ði/</td>
                                            <td><em>the apple</em> /ði ˈæp.l̩/</td>
                                        </tr>
                                        <tr>
                                            <td>Wymowa emfatyczna</td>
                                            <td>/ðiː/</td>
                                            <td><em>THE best</em> /ðiː best/</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grammar-tip">
                                    <h5>💡 Wymowa THE</h5>
                                    <p>Przedimek THE zmienia wymowę w zależności od następującego dźwięku:</p>
                                    <div className="phonetic-examples">
                                        <div className="phonetic-item">
                                            <span className="word">the university</span>
                                            <span className="phonetic">/ðə ˌjuːnɪˈvɜːsəti/</span>
                                            <span className="explanation">(przed /j/ - spółgłoska)</span>
                                        </div>
                                        <div className="phonetic-item">
                                            <span className="word">the hour</span>
                                            <span className="phonetic">/ði ˈaʊər/</span>
                                            <span className="explanation">(przed samogłoską)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Kompletny przewodnik użycia THE</h4>
                                <div className="usage-cases-detailed">
                                    <div className="usage-case-main">
                                        <h5>🎯 Wspomniane wcześniej</h5>
                                        <div className="example-group-expanded">
                                            <p>"I bought <em>a</em> car yesterday. <em>The</em> car is red and very fast."</p>
                                            <p>"There's <em>a</em> book on the table. Could you pass me <em>the</em> book?"</p>
                                            <p>"We met <em>an</em> interesting man. <em>The</em> man was from Brazil."</p>
                                            <p>"She told me <em>a</em> story. <em>The</em> story was about her childhood."</p>
                                        </div>
                                    </div>

                                    <div className="usage-case-main">
                                        <h5>🌍 Unikatowe obiekty i zjawiska</h5>
                                        <div className="example-group-expanded">
                                            <p>"<em>The</em> sun rises in the east and sets in the west."</p>
                                            <p>"Have you seen <em>the</em> moon tonight? It's beautiful."</p>
                                            <p>"<em>The</em> internet has changed our lives completely."</p>
                                            <p>"<em>The</em> weather is getting warmer these days."</p>
                                            <p>"<em>The</em> sky is so clear today."</p>
                                        </div>
                                    </div>

                                    <div className="usage-case-main">
                                        <h5>🏆 Superlatywy i kolejność</h5>
                                        <div className="example-group-expanded">
                                            <p>"This is <em>the</em> best movie I've ever seen."</p>
                                            <p>"She was <em>the</em> first person to arrive at the party."</p>
                                            <p>"Read <em>the</em> last chapter of the book."</p>
                                            <p>"He's <em>the</em> tallest boy in the class."</p>
                                            <p>"This is <em>the</em> most expensive restaurant in town."</p>
                                        </div>
                                    </div>

                                    <div className="usage-case-main">
                                        <h5>🎵 Instrumenty muzyczne</h5>
                                        <div className="example-group-expanded">
                                            <p>"She plays <em>the</em> piano beautifully."</p>
                                            <p>"He's learning to play <em>the</em> guitar."</p>
                                            <p>"Can you play <em>the</em> violin?"</p>
                                            <p>"I've always wanted to learn <em>the</em> drums."</p>
                                        </div>
                                    </div>

                                    <div className="usage-case-main">
                                        <h5>🗺️ Kraje, regiony, geografia</h5>
                                        <div className="example-group-expanded">
                                            <p>"<em>The</em> United States is a large country."</p>
                                            <p>"We're visiting <em>the</em> Netherlands next month."</p>
                                            <p>"<em>The</em> Alps are beautiful in winter."</p>
                                            <p>"<em>The</em> Amazon is the longest river in South America."</p>
                                            <p>"Have you been to <em>the</em> Bahamas?"</p>
                                        </div>
                                    </div>

                                    <div className="usage-case-main">
                                        <h5>🏛️ Instytucje i budynki</h5>
                                        <div className="example-group-expanded">
                                            <p>"We went to <em>the</em> cinema last night."</p>
                                            <p>"She works at <em>the</em> hospital as a nurse."</p>
                                            <p>"Let's meet in front of <em>the</em> library."</p>
                                            <p>"They're renovating <em>the</em> town hall."</p>
                                        </div>
                                    </div>

                                    <div className="usage-case-main">
                                        <h5>📰 Prasa i media</h5>
                                        <div className="example-group-expanded">
                                            <p>"I read it in <em>the</em> Times yesterday."</p>
                                            <p>"Did you see <em>the</em> news on television?"</p>
                                            <p>"<em>The</em> BBC is a British broadcasting corporation."</p>
                                            <p>"He was interviewed by <em>the</em> Guardian."</p>
                                        </div>
                                    </div>

                                    <div className="usage-case-main">
                                        <h5>👥 Grupy narodowościowe</h5>
                                        <div className="example-group-expanded">
                                            <p>"<em>The</em> French are known for their cuisine."</p>
                                            <p>"<em>The</em> Japanese have a rich cultural heritage."</p>
                                            <p>"<em>The</em> English drink a lot of tea."</p>
                                            <p>"<em>The</em> Chinese invented paper."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Kiedy NIE używamy THE?</h4>
                        <div className="common-mistakes">
                            <div className="mistake-group">
                                <h5>❌ Nie używamy THE z:</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="incorrect">the life is beautiful</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Life is beautiful</span>
                                        <span className="reason">(ogólne znaczenie)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">the breakfast at 8</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">breakfast at 8</span>
                                        <span className="reason">(posiłki ogólnie)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">the school as student</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">school as student</span>
                                        <span className="reason">(miejsce w podstawowej funkcji)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="incorrect">the Europe</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Europe</span>
                                        <span className="reason">(kraje pojedyncze)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Różnica: miejsce vs funkcja</h5>
                                <div className="comparison-examples">
                                    <div className="comparison-pair">
                                        <div className="case">
                                            <span className="title">BEZ THE (funkcja):</span>
                                            <p>"He goes to <em>school</em>." (jako uczeń)</p>
                                            <p>"She's in <em>hospital</em>." (jako pacjent)</p>
                                            <p>"They're at <em>university</em>." (jako studenci)</p>
                                        </div>
                                        <div className="case">
                                            <span className="title">Z THE (miejsce):</span>
                                            <p>"I went to <em>the school</em> to meet the teacher." (jako budynek)</p>
                                            <p>"She works at <em>the hospital</em>." (jako pracownik)</p>
                                            <p>"We visited <em>the university</em> campus." (jako teren)</p>
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
                                <h5>Wybierz poprawną formę (a/an/the/---):</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> I play _____ piano every day.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="the1" value="a"/>
                                                <span>a</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="the1" value="b"/>
                                                <span>an</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="the1" value="c"/>
                                                <span>the</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="the1" value="d"/>
                                                <span>---</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> _____ sun rises in _____ east.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="the2" value="a"/>
                                                <span>A / a</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="the2" value="b"/>
                                                <span>An / an</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="the2" value="c"/>
                                                <span>The / the</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="the2" value="d"/>
                                                <span>--- / ---</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> She is _____ only person who knows _____ answer.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="the3" value="a"/>
                                                <span>a / a</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="the3" value="b"/>
                                                <span>an / an</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="the3" value="c"/>
                                                <span>the / the</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="the3" value="d"/>
                                                <span>the / an</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> We went to _____ cinema yesterday.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="the4" value="a"/>
                                                <span>a</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="the4" value="b"/>
                                                <span>an</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="the4" value="c"/>
                                                <span>the</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="the4" value="d"/>
                                                <span>---</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> He's _____ best student in _____ class.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="the5" value="a"/>
                                                <span>a / a</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="the5" value="b"/>
                                                <span>the / the</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="the5" value="c"/>
                                                <span>a / the</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="the5" value="d"/>
                                                <span>the / a</span>
                                            </label>
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
        },
        {
            id: 'przedimek-zerowy',
            title: 'Brak przedimka',
            excerpt: 'Kiedy nie używać żadnego przedimka - rzeczowniki niepoliczalne, ogólne pojęcia i więcej.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Przedimek zerowy - kiedy NIE używamy przedimka</h3>
                        <p className="muted">Czasami najlepszym przedimkiem jest... brak przedimka! Poznaj sytuacje, gdy przedimek jest zbędny</p>

                        <div className="grammar-grid">
                            <div className="grammar-forms">
                                <h4>📝 Zasady użycia przedimka zerowego</h4>
                                <div className="forms-table">
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
                                            <td>Rzeczowniki niepoliczalne</td>
                                            <td><em>Water</em> is essential.</td>
                                            <td>ogólne znaczenie</td>
                                        </tr>
                                        <tr>
                                            <td>Rzeczowniki policzalne mnogie</td>
                                            <td><em>Cats</em> are animals.</td>
                                            <td>ogólna kategoria</td>
                                        </tr>
                                        <tr>
                                            <td>Nazwy własne</td>
                                            <td><em>John</em> lives in <em>Paris</em>.</td>
                                            <td>imię, miasto</td>
                                        </tr>
                                        <tr>
                                            <td>Posiłki ogólnie</td>
                                            <td>We have <em>lunch</em> at noon.</td>
                                            <td>czynność rutynowa</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grammar-tip">
                                    <h5>💡 Kluczowa zasada</h5>
                                    <p>Przedimka zerowego używamy, gdy mówimy o:</p>
                                    <ul>
                                        <li><strong>Pojęciach ogólnych</strong> (life, love, happiness)</li>
                                        <li><strong>Kategoriach ogólnych</strong> (cats, books, cars)</li>
                                        <li><strong>Rzeczach unikatowych z nazwy</strong> (John, London, Microsoft)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Kompletny przewodnik przedimka zerowego</h4>
                                <div className="usage-cases-detailed">
                                    <div className="usage-case-main">
                                        <h5>💧 Rzeczowniki niepoliczalne w ogólnym znaczeniu</h5>
                                        <div className="example-group-expanded">
                                            <p>"<em>Water</em> is essential for life." (woda jako pojęcie ogólne)</p>
                                            <p>"I love <em>music</em>." (muzyka ogólnie)</p>
                                            <p>"<em>Information</em> is power." (informacja jako koncept)</p>
                                            <p>"She needs <em>advice</em>." (rada ogólnie, nie konkretna)</p>
                                            <p>"<em>Knowledge</em> is valuable." (wiedza jako abstrakcja)</p>
                                        </div>
                                    </div>

                                    <div className="usage-case-main">
                                        <h5>🐾 Rzeczowniki policzalne w liczbie mnogiej - ogólnie</h5>
                                        <div className="example-group-expanded">
                                            <p>"<em>Cats</em> are independent animals." (wszystkie koty)</p>
                                            <p>"<em>Books</em> can change your life." (książki ogólnie)</p>
                                            <p>"<em>Children</em> need love and attention." (dzieci jako grupa)</p>
                                            <p>"<em>Computers</em> have revolutionized our world." (komputery ogólnie)</p>
                                            <p>"I don't like <em>horror movies</em>." (kategoria filmów)</p>
                                        </div>
                                    </div>

                                    <div className="usage-case-main">
                                        <h5>🏷️ Nazwy własne</h5>
                                        <div className="example-group-expanded">
                                            <p>"<em>John</em> lives in <em>London</em> on <em>Baker Street</em>."</p>
                                            <p>"We're going to <em>Italy</em> in <em>March</em>."</p>
                                            <p>"She works for <em>Microsoft</em> in <em>Seattle</em>."</p>
                                            <p>"<em>Mount Everest</em> is the highest mountain."</p>
                                            <p>"<em>Lake Superior</em> is beautiful in autumn."</p>
                                        </div>
                                    </div>

                                    <div className="usage-case-main">
                                        <h5>🍽️ Posiłki, miejsca, instytucje</h5>
                                        <div className="example-group-expanded">
                                            <p>"We have <em>lunch</em> at noon every day." (posiłek rutynowo)</p>
                                            <p>"He's in <em>hospital</em>." (BrE - jako pacjent)</p>
                                            <p>"She's at <em>university</em>." (jako studentka)</p>
                                            <p>"They go to <em>church</em> every Sunday." (jako wierni)</p>
                                            <p>"He was sent to <em>prison</em> for five years." (jako więzień)</p>
                                        </div>
                                    </div>

                                    <div className="usage-case-main">
                                        <h5>⚽ Sporty, gry, aktywności</h5>
                                        <div className="example-group-expanded">
                                            <p>"I play <em>tennis</em> every weekend."</p>
                                            <p>"She's learning to play <em>chess</em>."</p>
                                            <p>"<em>Football</em> is popular worldwide."</p>
                                            <p>"Do you like <em>swimming</em>?"</p>
                                            <p>"<em>Reading</em> is my favorite hobby."</p>
                                        </div>
                                    </div>

                                    <div className="usage-case-main">
                                        <h5>📚 Przedmioty akademickie</h5>
                                        <div className="example-group-expanded">
                                            <p>"She studies <em>biology</em> at university."</p>
                                            <p>"I was never good at <em>mathematics</em>."</p>
                                            <p>"<em>History</em> is my favorite subject."</p>
                                            <p>"He teaches <em>physics</em> at the high school."</p>
                                        </div>
                                    </div>

                                    <div className="usage-case-main">
                                        <h5>🚗 Transport i podróże</h5>
                                        <div className="example-group-expanded">
                                            <p>"I go to work by <em>bus</em>."</p>
                                            <p>"They came by <em>car</em>."</p>
                                            <p>"We're traveling by <em>plane</em>."</p>
                                            <p>"She goes to school on <em>foot</em>."</p>
                                        </div>
                                    </div>

                                    <div className="usage-case-main">
                                        <h5>⏰ Czas i pory</h5>
                                        <div className="example-group-expanded">
                                            <p>"See you on <em>Monday</em>."</p>
                                            <p>"We're going in <em>summer</em>."</p>
                                            <p>"The shop opens at <em>9 o'clock</em>."</p>
                                            <p>"I'll call you in <em>March</em>."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>💡 Różnice między British i American English</h4>
                        <div className="comparison-table-expanded">
                            <table>
                                <thead>
                                <tr>
                                    <th>Sytuacja</th>
                                    <th>British English</th>
                                    <th>American English</th>
                                    <th>Wyjaśnienie</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Pobyt w szpitalu</td>
                                    <td>in hospital</td>
                                    <td>in the hospital</td>
                                    <td>BrE: jako pacjent, AmE: zawsze z THE</td>
                                </tr>
                                <tr>
                                    <td>Nauka w szkole</td>
                                    <td>at university</td>
                                    <td>in college/university</td>
                                    <td>BrE: bez przedimka, AmE: często z przedimkiem</td>
                                </tr>
                                <tr>
                                    <td>Odsiadka wyroku</td>
                                    <td>in prison</td>
                                    <td>in prison / in the prison</td>
                                    <td>BrE: jako więzień, AmE: obie formy</td>
                                </tr>
                                <tr>
                                    <td>Uczęszczanie do kościoła</td>
                                    <td>go to church</td>
                                    <td>go to church / go to the church</td>
                                    <td>BrE: jako wierny, AmE: obie formy</td>
                                </tr>
                                <tr>
                                    <td>Leczenie się</td>
                                    <td>in hospital</td>
                                    <td>in the hospital</td>
                                    <td>BrE: pacjent, AmE: zawsze z THE</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip">
                            <h5>🇬🇧🇺🇸 Ważna uwaga</h5>
                            <p>W British English przedimek zerowy często wskazuje na <strong>funkcję lub status</strong>, podczas gdy w American English częściej używa się przedimka określonego THE.</p>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę (a/an/the/---):</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> Can you give me _____ advice?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="zero1" value="a"/>
                                                <span>a</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero1" value="b"/>
                                                <span>an</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero1" value="c"/>
                                                <span>the</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero1" value="d"/>
                                                <span>---</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> She plays _____ tennis every weekend.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="zero2" value="a"/>
                                                <span>a</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero2" value="b"/>
                                                <span>an</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero2" value="c"/>
                                                <span>the</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero2" value="d"/>
                                                <span>---</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> We had _____ dinner at 7 PM.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="zero3" value="a"/>
                                                <span>a</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero3" value="b"/>
                                                <span>an</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero3" value="c"/>
                                                <span>the</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero3" value="d"/>
                                                <span>---</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> _____ love is all you need.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="zero4" value="a"/>
                                                <span>A</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero4" value="b"/>
                                                <span>An</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero4" value="c"/>
                                                <span>The</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero4" value="d"/>
                                                <span>---</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> They are going to _____ school now.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="zero5" value="a"/>
                                                <span>a</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero5" value="b"/>
                                                <span>an</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero5" value="c"/>
                                                <span>the</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="zero5" value="d"/>
                                                <span>---</span>
                                            </label>
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
                        <h4>📊 Podsumowanie - Kiedy którego przedimka używać?</h4>
                        <div className="summary-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Sytuacja</th>
                                    <th>A/AN</th>
                                    <th>THE</th>
                                    <th>---</th>
                                    <th>Przykład</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Pierwsze wzmiankowanie</td>
                                    <td>✅</td>
                                    <td>❌</td>
                                    <td>❌</td>
                                    <td>I saw <em>a</em> cat.</td>
                                </tr>
                                <tr>
                                    <td>Wspomniane wcześniej</td>
                                    <td>❌</td>
                                    <td>✅</td>
                                    <td>❌</td>
                                    <td><em>The</em> cat was black.</td>
                                </tr>
                                <tr>
                                    <td>Unikatowe obiekty</td>
                                    <td>❌</td>
                                    <td>✅</td>
                                    <td>❌</td>
                                    <td><em>the</em> sun, <em>the</em> moon</td>
                                </tr>
                                <tr>
                                    <td>Rzeczowniki niepoliczalne</td>
                                    <td>❌</td>
                                    <td>❌</td>
                                    <td>✅</td>
                                    <td>I need <em>water</em>.</td>
                                </tr>
                                <tr>
                                    <td>Rzeczowniki mnogie ogólnie</td>
                                    <td>❌</td>
                                    <td>❌</td>
                                    <td>✅</td>
                                    <td><em>Cats</em> are animals.</td>
                                </tr>
                                <tr>
                                    <td>Nazwy własne</td>
                                    <td>❌</td>
                                    <td>❌</td>
                                    <td>✅</td>
                                    <td><em>John</em> lives in <em>Paris</em>.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </>
            ),
        },
    ],
    rzeczowniki: [
        {
            id: 'rodzaje-rzeczownikow',
            title: 'Rodzaje rzeczowników',
            excerpt: 'Policzalne, niepoliczalne, własne, pospolite - poznaj wszystkie kategorie.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Rodzaje rzeczowników w angielskim</h3>
                        <p className="muted">Kompletny przewodnik po wszystkich kategoriach rzeczowników z uwzględnieniem wyjątków</p>

                        <div className="noun-types-grid-expanded">
                            <div className="noun-type-main">
                                <h4>🔢 Rzeczowniki policzalne (Countable Nouns)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Charakterystyka:</h5>
                                        <ul>
                                            <li>Mają liczbę pojedynczą i mnogą</li>
                                            <li>Używamy z przedimkami a/an</li>
                                            <li>Można je policzyć (one, two, three...)</li>
                                            <li>Używamy z many, few, several</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Przykłady:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>a book</em></span>
                                                <span className="plural"><em>three books</em></span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>an idea</em></span>
                                                <span className="plural"><em>many ideas</em></span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>a car</em></span>
                                                <span className="plural"><em>several cars</em></span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>a child</em></span>
                                                <span className="plural"><em>two children</em></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>🌊 Rzeczowniki niepoliczalne (Uncountable Nouns)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Charakterystyka:</h5>
                                        <ul>
                                            <li>Używamy tylko w liczbie pojedynczej</li>
                                            <li>Nie używamy a/an</li>
                                            <li>Nie można ich policzyć bez jednostek</li>
                                            <li>Używamy z much, little, some</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Kategorie i przykłady:</h5>
                                        <div className="categories-grid">
                                            <div className="category">
                                                <span className="category-name">Płyny:</span>
                                                <span className="examples">water, milk, coffee, tea</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Materiały:</span>
                                                <span className="examples">wood, metal, glass, plastic</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Abstrakty:</span>
                                                <span className="examples">love, happiness, information, advice</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Jedzenie:</span>
                                                <span className="examples">bread, cheese, rice, sugar</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>🏷️ Rzeczowniki własne (Proper Nouns)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Charakterystyka:</h5>
                                        <ul>
                                            <li>Zaczynają się z wielkiej litery</li>
                                            <li>Nie używamy przedimków (z wyjątkami!)</li>
                                            <li>Określają konkretne byty</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Kategorie i przykłady:</h5>
                                        <div className="categories-grid">
                                            <div className="category">
                                                <span className="category-name">Imiona:</span>
                                                <span className="examples">John, Mary, David</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Miejsca:</span>
                                                <span className="examples">London, Paris, Mount Everest</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Firmy:</span>
                                                <span className="examples">Microsoft, Apple, Google</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Tytuły:</span>
                                                <span className="examples">The Times, Harry Potter</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>📝 Rzeczowniki pospolite (Common Nouns)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Charakterystyka:</h5>
                                        <ul>
                                            <li>Zaczynają się z małej litery</li>
                                            <li>Określają kategorie ogólne</li>
                                            <li>Mogą być policzalne lub nie</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Przykłady:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>city</em></span>
                                                <span className="plural"><em>cities</em></span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>woman</em></span>
                                                <span className="plural"><em>women</em></span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>company</em></span>
                                                <span className="plural"><em>companies</em></span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>happiness</em></span>
                                                <span className="plural"><em>- (niepoliczalny)</em></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Rzeczowniki, które mogą być policzalne i niepoliczalne</h4>
                        <div className="dual-nouns">
                            <div className="dual-noun-category">
                                <h5>🍷 Jedzenie i napoje</h5>
                                <div className="dual-examples">
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Ogólne znaczenie:</span>
                                            <span className="example">I don't drink <em>coffee</em>.</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Konkretne porcje:</span>
                                            <span className="example">Two <em>coffees</em>, please.</span>
                                        </div>
                                    </div>
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Ogólne:</span>
                                            <span className="example">I love <em>chocolate</em>.</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Konkretne sztuki:</span>
                                            <span className="example">I ate three <em>chocolates</em>.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dual-noun-category">
                                <h5>🧵 Materiały i przedmioty</h5>
                                <div className="dual-examples">
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Materiał:</span>
                                            <span className="example">The table is made of <em>glass</em>.</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Przedmiot:</span>
                                            <span className="example">I broke two <em>glasses</em>.</span>
                                        </div>
                                    </div>
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Materiał:</span>
                                            <span className="example">This is made of <em>paper</em>.</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Dokumenty:</span>
                                            <span className="example">I have important <em>papers</em>.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dual-noun-category">
                                <h5>💡 Abstrakty i emocje</h5>
                                <div className="dual-examples">
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Ogólne:</span>
                                            <span className="example">Life is beautiful.</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Konkretne:</span>
                                            <span className="example">Many lives were saved.</span>
                                        </div>
                                    </div>
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Doświadczenie:</span>
                                            <span className="example">I need more experience.</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Wydarzenie:</span>
                                            <span className="example">It was an unforgettable experience.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Najczęstsze błędy - polskie naleciałości</h4>
                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>❌ Rzeczowniki zawsze niepoliczalne w angielskim:</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="polish">meble</span>
                                        <span className="incorrect">furnitures</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">furniture</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">informacje</span>
                                        <span className="incorrect">informations</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">information</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">wiadomości</span>
                                        <span className="incorrect">newses</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">news</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">rady</span>
                                        <span className="incorrect">advices</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">advice</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">sprzęt</span>
                                        <span className="incorrect">equipments</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">equipment</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">bagaż</span>
                                        <span className="incorrect">luggages</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">luggage</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Jak mówić o ilościach rzeczy niepoliczalnych?</h5>
                                <div className="measurement-examples">
                                    <div className="measurement">
                                        <span className="phrase">a piece of furniture</span>
                                        <span className="meaning">jeden mebel</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">a piece of advice</span>
                                        <span className="meaning">jedna rada</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">a glass of water</span>
                                        <span className="meaning">szklanka wody</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">a loaf of bread</span>
                                        <span className="meaning">bochenek chleba</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Określ czy rzeczownik jest policzalny (C), niepoliczalny (U) lub może być obu (B):</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> information</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="noun1" value="a"/>
                                                <span>C</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="noun1" value="b"/>
                                                <span>U</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="noun1" value="c"/>
                                                <span>B</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> furniture</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="noun2" value="a"/>
                                                <span>C</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="noun2" value="b"/>
                                                <span>U</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="noun2" value="c"/>
                                                <span>B</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> chocolate</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="noun3" value="a"/>
                                                <span>C</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="noun3" value="b"/>
                                                <span>U</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="noun3" value="c"/>
                                                <span>B</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> experience</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="noun4" value="a"/>
                                                <span>C</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="noun4" value="b"/>
                                                <span>U</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="noun4" value="c"/>
                                                <span>B</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> hair</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="noun5" value="a"/>
                                                <span>C</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="noun5" value="b"/>
                                                <span>U</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="noun5" value="c"/>
                                                <span>B</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> paper</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="noun6" value="a"/>
                                                <span>C</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="noun6" value="b"/>
                                                <span>U</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="noun6" value="c"/>
                                                <span>B</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> time</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="noun7" value="a"/>
                                                <span>C</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="noun7" value="b"/>
                                                <span>U</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="noun7" value="c"/>
                                                <span>B</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> work</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="noun8" value="a"/>
                                                <span>C</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="noun8" value="b"/>
                                                <span>U</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="noun8" value="c"/>
                                                <span>B</span>
                                            </label>
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
        },
        {
            id: 'liczba-mnoga',
            title: 'Liczba mnoga',
            excerpt: 'Od regularnych -s po najbardziej nieregularne formy - kompletny przewodnik.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Tworzenie liczby mnogiej - kompletny przewodnik</h3>
                        <p className="muted">Setki przykładów regularnych i nieregularnych form z uwzględnieniem wszystkich wyjątków</p>

                        <div className="plural-rules-expanded">
                            <div className="rules-category">
                                <h4>📗 Rzeczowniki regularne - szczegółowe zasady</h4>
                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>➕ +s (większość rzeczowników)</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">book</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">books</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">car</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">cars</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">house</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">houses</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">computer</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">computers</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>➕ +es (po s, sh, ch, x, z)</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">bus</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">buses</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">dish</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">dishes</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">watch</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">watches</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">box</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">boxes</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">quiz</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">quizzes</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>📝 y → ies (po spółgłosce)</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">city</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">cities</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">baby</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">babies</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">lady</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">ladies</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">country</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">countries</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>➕ +s (y po samogłosce)</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">boy</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">boys</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">day</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">days</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">key</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">keys</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">monkey</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">monkeys</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>📝 -f/-fe → -ves</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">wife</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">wives</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">knife</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">knives</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">leaf</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">leaves</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">wolf</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">wolves</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>⚠️ Wyjątki -f → +s</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">roof</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">roofs</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">chief</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">chiefs</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">belief</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">beliefs</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">cliff</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">cliffs</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>📝 -o → +es</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">potato</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">potatoes</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">tomato</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">tomatoes</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">hero</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">heroes</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">echo</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">echoes</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>⚠️ Wyjątki -o → +s</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">photo</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">photos</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">piano</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">pianos</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">kilo</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">kilos</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">studio</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">studios</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rules-category">
                                <h4>📘 Rzeczowniki nieregularne - kompletna lista</h4>
                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>🔄 Zmiana samogłoski</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">man</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">men</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">woman</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">women</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">foot</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">feet</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">tooth</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">teeth</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">goose</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">geese</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">mouse</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">mice</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">louse</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">lice</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>➕ Dodanie -en/-ren</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">child</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">children</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">ox</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">oxen</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">brother</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">brethren</span>
                                                <span className="note">(religijne)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>🔄 Ta sama forma</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">sheep</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">sheep</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">fish</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">fish</span>
                                                <span className="note">(fishes dla gatunków)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">deer</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">deer</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">series</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">series</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">species</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">species</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">aircraft</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">aircraft</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>🌍 Obce pochodzenie</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">criterion</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">criteria</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">phenomenon</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">phenomena</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">analysis</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">analyses</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">thesis</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">theses</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">cactus</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">cacti / cactuses</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">fungus</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">fungi</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>⚠️ Zupełnie nieregularne</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">person</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">people</span>
                                                <span className="note">(persons w języku prawnym)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">die</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">dice</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">penny</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">pence</span>
                                                <span className="note">(wartość) / pennies (monety)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Rzeczowniki tylko w liczbie mnogiej</h4>
                        <div className="plural-only-expanded">
                            <div className="plural-categories">
                                <div className="plural-category">
                                    <h5>👖 Ubrania (zawsze w parach)</h5>
                                    <div className="plural-items">
                                        <div className="plural-item">
                                            <span className="noun">trousers</span>
                                            <span className="meaning">spodnie</span>
                                            <span className="example">"These trousers are too long."</span>
                                        </div>
                                        <div className="plural-item">
                                            <span className="noun">jeans</span>
                                            <span className="meaning">dżinsy</span>
                                            <span className="example">"My jeans are blue."</span>
                                        </div>
                                        <div className="plural-item">
                                            <span className="noun">pajamas</span>
                                            <span className="meaning">piżama</span>
                                            <span className="example">"I need new pajamas."</span>
                                        </div>
                                        <div className="plural-item">
                                            <span className="noun">shorts</span>
                                            <span className="meaning">szorty</span>
                                            <span className="example">"Shorts are comfortable in summer."</span>
                                        </div>
                                        <div className="plural-item">
                                            <span className="noun">tights</span>
                                            <span className="meaning">rajstopy</span>
                                            <span className="example">"She wears tights in winter."</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="plural-category">
                                    <h5>✂️ Narzędzia i przybory</h5>
                                    <div className="plural-items">
                                        <div className="plural-item">
                                            <span className="noun">scissors</span>
                                            <span className="meaning">nożyczki</span>
                                            <span className="example">"The scissors are sharp."</span>
                                        </div>
                                        <div className="plural-item">
                                            <span className="noun">glasses</span>
                                            <span className="meaning">okulary</span>
                                            <span className="example">"His glasses are broken."</span>
                                        </div>
                                        <div className="plural-item">
                                            <span className="noun">headphones</span>
                                            <span className="meaning">słuchawki</span>
                                            <span className="example">"These headphones are expensive."</span>
                                        </div>
                                        <div className="plural-item">
                                            <span className="noun">binoculars</span>
                                            <span className="meaning">lornetka</span>
                                            <span className="example">"The binoculars are powerful."</span>
                                        </div>
                                        <div className="plural-item">
                                            <span className="noun">tweezers</span>
                                            <span className="meaning">pęseta</span>
                                            <span className="example">"The tweezers are on the table."</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="plural-category">
                                    <h5>🧳 Inne rzeczowniki mnogie</h5>
                                    <div className="plural-items">
                                        <div className="plural-item">
                                            <span className="noun">belongings</span>
                                            <span className="meaning">rzeczy osobiste</span>
                                            <span className="example">"Pack your belongings."</span>
                                        </div>
                                        <div className="plural-item">
                                            <span className="noun">surroundings</span>
                                            <span className="meaning">otoczenie</span>
                                            <span className="example">"The surroundings are beautiful."</span>
                                        </div>
                                        <div className="plural-item">
                                            <span className="noun">thanks</span>
                                            <span className="meaning">podziękowania</span>
                                            <span className="example">"Many thanks for your help."</span>
                                        </div>
                                        <div className="plural-item">
                                            <span className="noun">congratulations</span>
                                            <span className="meaning">gratulacje</span>
                                            <span className="example">"Congratulations on your success!"</span>
                                        </div>
                                        <div className="plural-item">
                                            <span className="noun">earnings</span>
                                            <span className="meaning">zarobki</span>
                                            <span className="example">"His earnings have increased."</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip">
                                <h5>💡 Jak mówić o pojedynczych sztukach?</h5>
                                <div className="pair-examples">
                                    <div className="pair-example">
                                        <span className="phrase">a pair of trousers</span>
                                        <span className="meaning">jedne spodnie</span>
                                    </div>
                                    <div className="pair-example">
                                        <span className="phrase">two pairs of glasses</span>
                                        <span className="meaning">dwie pary okularów</span>
                                    </div>
                                    <div className="pair-example">
                                        <span className="phrase">this pair of scissors</span>
                                        <span className="meaning">te nożyczki</span>
                                    </div>
                                    <div className="pair-example">
                                        <span className="phrase">several pairs of jeans</span>
                                        <span className="meaning">kilka par dżinsów</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Utwórz liczbę mnogą od podanych rzeczowników:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> child</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="plural1" value="a"/>
                                                <span>childs</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural1" value="b"/>
                                                <span>children</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural1" value="c"/>
                                                <span>childes</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural1" value="d"/>
                                                <span>child's</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> potato</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="plural2" value="a"/>
                                                <span>potatos</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural2" value="b"/>
                                                <span>potatoes</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural2" value="c"/>
                                                <span>potato's</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural2" value="d"/>
                                                <span>potaties</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> knife</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="plural3" value="a"/>
                                                <span>knifes</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural3" value="b"/>
                                                <span>knives</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural3" value="c"/>
                                                <span>knive's</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural3" value="d"/>
                                                <span>knifves</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> criterion</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="plural4" value="a"/>
                                                <span>criterions</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural4" value="b"/>
                                                <span>criterion's</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural4" value="c"/>
                                                <span>criteria</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural4" value="d"/>
                                                <span>criterias</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> sheep</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="plural5" value="a"/>
                                                <span>sheeps</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural5" value="b"/>
                                                <span>sheep</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural5" value="c"/>
                                                <span>sheepes</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural5" value="d"/>
                                                <span>sheep's</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> analysis</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="plural6" value="a"/>
                                                <span>analysis</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural6" value="b"/>
                                                <span>analyses</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural6" value="c"/>
                                                <span>analysises</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural6" value="d"/>
                                                <span>analysises</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> phenomenon</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="plural7" value="a"/>
                                                <span>phenomenons</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural7" value="b"/>
                                                <span>phenomena</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural7" value="c"/>
                                                <span>phenomenas</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural7" value="d"/>
                                                <span>phenomenon's</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> radius</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="plural8" value="a"/>
                                                <span>radiuses</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural8" value="b"/>
                                                <span>radii</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural8" value="c"/>
                                                <span>radius's</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="plural8" value="d"/>
                                                <span>radia</span>
                                            </label>
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
        },
        {
            id: 'dzierzawczosc',
            title: 'Dzierżawczość',
            excerpt: "Saxon genitive ('s), of construction - wyrażanie przynależności na różne sposoby.",
            content: () => (
                <>
                    <section className="card">
                        <h3>Dzierżawczość w języku angielskim - kompletny przewodnik</h3>
                        <p className="muted">Od podstawowego 's po zaawansowane konstrukcje - wszystko o wyrażaniu przynależności</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Saxon Genitive ('s) - dopełniacz saksoński</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>🎯 Kiedy używamy:</h5>
                                        <ul>
                                            <li>Dla osób i zwierząt domowych</li>
                                            <li>Wyrażeń czasowych</li>
                                            <li>Nazw miejsc i organizacji</li>
                                            <li>Wyrażeń dotyczących odległości</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Podstawowe zasady:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>+ 's</em></span>
                                                <span className="plural">dla rzeczowników w liczbie pojedynczej</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>+ '</em></span>
                                                <span className="plural">dla rzeczowników w liczbie mnogiej kończących się na -s</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>+ 's</em></span>
                                                <span className="plural">dla rzeczowników w liczbie mnogiej NIEkończących się na -s</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rules-grid">
                            <div className="rule-detailed">
                                <h5>👤 Dla osób i relacji</h5>
                                <div className="examples-detailed">
                                    <div className="example-group">
                                        <span className="singular">my sister</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">my sister's car</span>
                                        <span className="note">samochód mojej siostry</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">John</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">John's house</span>
                                        <span className="note">dom Johna</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">the doctor</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">the doctor's office</span>
                                        <span className="note">gabinet lekarza</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rule-detailed">
                                <h5>🐾 Dla zwierząt</h5>
                                <div className="examples-detailed">
                                    <div className="example-group">
                                        <span className="singular">the dog</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">the dog's tail</span>
                                        <span className="note">ogon psa</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">my cat</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">my cat's food</span>
                                        <span className="note">jedzenie mojego kota</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">the bird</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">the bird's nest</span>
                                        <span className="note">gniazdo ptaka</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rule-detailed">
                                <h5>⏰ Wyrażenia czasowe</h5>
                                <div className="examples-detailed">
                                    <div className="example-group">
                                        <span className="singular">a week</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">a week's holiday</span>
                                        <span className="note">tygodniowy urlop</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">two hours</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">two hours' drive</span>
                                        <span className="note">dwugodzinna jazda</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">today</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">today's news</span>
                                        <span className="note">dzisiejsze wiadomości</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>💡 Specjalne przypadki i wyjątki</h4>

                        <div className="plural-categories">
                            <div className="plural-category">
                                <h5>🔤 Rzeczowniki kończące się na -s</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">James's book</span>
                                        <span className="meaning">książka Jamesa (British English)</span>
                                        <span className="example">"James's car is new."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">James' book</span>
                                        <span className="meaning">książka Jamesa (American English)</span>
                                        <span className="example">"James' house is big."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">the bus's wheels</span>
                                        <span className="meaning">koła autobusu</span>
                                        <span className="example">"The bus's engine is loud."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">Jesus' teachings</span>
                                        <span className="meaning">nauczanie Jezusa (tradycyjna forma)</span>
                                        <span className="example">"We study Jesus' parables."</span>
                                    </div>
                                </div>
                            </div>

                            <div className="plural-category">
                                <h5>👥 Wspólna i indywidualna własność</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">John and Mary's house</span>
                                        <span className="meaning">dom Johna i Mary (jeden dom)</span>
                                        <span className="example">"They bought John and Mary's house together."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">John's and Mary's houses</span>
                                        <span className="meaning">domy Johna i Mary (dwa domy)</span>
                                        <span className="example">"John's and Mary's houses are in different cities."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">my mother and father's car</span>
                                        <span className="meaning">samochód mojej mamy i taty (jeden samochód)</span>
                                        <span className="example">"My mother and father's car is blue."</span>
                                    </div>
                                </div>
                            </div>

                            <div className="plural-category">
                                <h5>🏛️ Nazwy miejsc i organizacji</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">St Paul's Cathedral</span>
                                        <span className="meaning">katedra Św. Pawła</span>
                                        <span className="example">"St Paul's Cathedral is in London."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">McDonald's</span>
                                        <span className="meaning">restauracja McDonald's</span>
                                        <span className="example">"Let's meet at McDonald's."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">the baker's</span>
                                        <span className="meaning">piekarnia (sklep piekarza)</span>
                                        <span className="example">"I'm going to the baker's."</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔄 Konstrukcja z "OF" - kiedy jej używamy?</h4>

                        <div className="dual-nouns">
                            <div className="dual-noun-category">
                                <h5>🏠 Dla rzeczy i przedmiotów</h5>
                                <div className="dual-examples">
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">the roof of the house</span>
                                            <span className="example">dach domu</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">the color of the sky</span>
                                            <span className="example">kolor nieba</span>
                                        </div>
                                    </div>
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">the door of the car</span>
                                            <span className="example">drzwi samochodu</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">the pages of the book</span>
                                            <span className="example">strony książki</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dual-noun-category">
                                <h5>🌍 Dla miejsc geograficznych</h5>
                                <div className="dual-examples">
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">the capital of Poland</span>
                                            <span className="example">stolica Polski</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">the mountains of Switzerland</span>
                                            <span className="example">góry Szwajcarii</span>
                                        </div>
                                    </div>
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">the beaches of Brazil</span>
                                            <span className="example">plaże Brazylii</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">the rivers of Europe</span>
                                            <span className="example">rzeki Europy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dual-noun-category">
                                <h5>📊 Dla pojęć abstrakcyjnych</h5>
                                <div className="dual-examples">
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">the cost of living</span>
                                            <span className="example">koszt utrzymania</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">the beauty of nature</span>
                                            <span className="example">piękno natury</span>
                                        </div>
                                    </div>
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">the importance of education</span>
                                            <span className="example">znaczenie edukacji</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">the power of love</span>
                                            <span className="example">siła miłości</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚖️ 'S vs OF - który wybrać?</h4>

                        <div className="comparison-table-expanded">
                            <table>
                                <thead>
                                <tr>
                                    <th>Sytuacja</th>
                                    <th>Używamy 'S</th>
                                    <th>Używamy OF</th>
                                    <th>Uwagi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Ludzie</td>
                                    <td className="correct">my brother's friend</td>
                                    <td className="incorrect">the friend of my brother</td>
                                    <td>'s jest naturalniejsze dla osób</td>
                                </tr>
                                <tr>
                                    <td>Zwierzeta</td>
                                    <td className="correct">the dog's bowl</td>
                                    <td className="incorrect">the bowl of the dog</td>
                                    <td>Dla zwierząt domowych używamy 's</td>
                                </tr>
                                <tr>
                                    <td>Czas</td>
                                    <td className="correct">today's weather</td>
                                    <td className="incorrect">the weather of today</td>
                                    <td>Wyrażenia czasowe zawsze z 's</td>
                                </tr>
                                <tr>
                                    <td>Rzeczy</td>
                                    <td className="incorrect">the car's door</td>
                                    <td className="correct">the door of the car</td>
                                    <td>Dla przedmiotów OF jest lepsze</td>
                                </tr>
                                <tr>
                                    <td>Miejsca</td>
                                    <td className="incorrect">the city's center</td>
                                    <td className="correct">the center of the city</td>
                                    <td>Dla miejsc geograficznych OF</td>
                                </tr>
                                <tr>
                                    <td>Abstrakty</td>
                                    <td className="incorrect">the life's meaning</td>
                                    <td className="correct">the meaning of life</td>
                                    <td>Pojęcia abstrakcyjne z OF</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip">
                            <h5>💡 Praktyczna zasada:</h5>
                            <p><strong>Używaj 's dla żywych istot (ludzi, zwierząt), a OF dla rzeczy i pojęć abstrakcyjnych.</strong> Wyjątki to wyrażenia czasowe i niektóre nazwy własne.</p>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Najczęstsze błędy - polskie naleciałości</h4>

                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>❌ Kalki językowe z polskiego:</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="polish">samochód Johna</span>
                                        <span className="incorrect">car of John</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">John's car</span>
                                        <span className="reason">dla osób używamy 's</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">drzwi samochodu</span>
                                        <span className="incorrect">car's door</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">the door of the car</span>
                                        <span className="reason">dla rzeczy używamy OF</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">książka siostry mojego przyjaciela</span>
                                        <span className="incorrect">book of my friend's sister</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">my friend's sister's book</span>
                                        <span className="reason">podwójny dopełniacz</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">koniec tygodnia</span>
                                        <span className="incorrect">end of the week</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">the week's end</span>
                                        <span className="reason">wyrażenia czasowe z 's</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>🚫 Czego NIE robić:</h5>
                                <div className="measurement-examples">
                                    <div className="measurement">
                                        <span className="phrase">❌ the car of my father</span>
                                        <span className="meaning">zamiast: ✓ my father's car</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">❌ the house's roof</span>
                                        <span className="meaning">zamiast: ✓ the roof of the house</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">❌ the book of Jane</span>
                                        <span className="meaning">zamiast: ✓ Jane's book</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">❌ the meaning of life's</span>
                                        <span className="meaning">zamiast: ✓ the meaning of life</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Zaawansowane użycie - podwójny dopełniacz</h4>

                        <div className="advanced-possessive">
                            <div className="advanced-cases">
                                <div className="advanced-case">
                                    <h5>Podwójny dopełniacz 's</h5>
                                    <div className="example-group-expanded">
                                        <p><em>my brother's friend's car</em> - samochód przyjaciela mojego brata</p>
                                        <p><em>the company's manager's office</em> - biuro menedżera firmy</p>
                                        <p><em>Sarah's mother's recipe</em> - przepis matki Sary</p>
                                    </div>
                                </div>

                                <div className="advanced-case">
                                    <h5>Konstrukcja "a friend of..."</h5>
                                    <div className="example-group-expanded">
                                        <p><em>a friend of my brother's</em> - jeden z przyjaciół mojego brata</p>
                                        <p><em>a colleague of my father's</em> - jeden z kolegów mojego ojca</p>
                                        <p><em>that nice dog of our neighbors'</em> - ten miły pies naszych sąsiadów</p>
                                    </div>
                                </div>

                                <div className="advanced-case">
                                    <h5>Dopełniacz dla grup i organizacji</h5>
                                    <div className="example-group-expanded">
                                        <p><em>the government's decision</em> - decyzja rządu</p>
                                        <p><em>the company's policy</em> - polityka firmy</p>
                                        <p><em>the team's victory</em> - zwycięstwo drużyny</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę dzierżawczą:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> To jest dom moich rodziców.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="possessive1" value="a"/>
                                                <span>my parents house</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive1" value="b"/>
                                                <span>my parents' house</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive1" value="c"/>
                                                <span>house of my parents</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive1" value="d"/>
                                                <span>my parent's house</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> To są zabawki dzieci.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="possessive2" value="a"/>
                                                <span>the childrens' toys</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive2" value="b"/>
                                                <span>the children's toys</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive2" value="c"/>
                                                <span>the toys of children</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive2" value="d"/>
                                                <span>the childrens toys</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> Kolor tego samochodu jest czerwony.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="possessive3" value="a"/>
                                                <span>the car's color</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive3" value="b"/>
                                                <span>the color of the car</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive3" value="c"/>
                                                <span>the color of the car's</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive3" value="d"/>
                                                <span>the cars' color</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> To jest roczna gwarancja.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="possessive4" value="a"/>
                                                <span>a year warranty</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive4" value="b"/>
                                                <span>warranty of a year</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive4" value="c"/>
                                                <span>a year's warranty</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive4" value="d"/>
                                                <span>a years' warranty</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> To jest samochód siostry mojego przyjaciela.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="possessive5" value="a"/>
                                                <span>my friend's sister's car</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive5" value="b"/>
                                                <span>my friends sister car</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive5" value="c"/>
                                                <span>car of my friend's sister</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive5" value="d"/>
                                                <span>my friend sister's car</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> To jest wspólny dom Anny i Marka.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="possessive6" value="a"/>
                                                <span>Anna and Mark's house</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive6" value="b"/>
                                                <span>Anna's and Mark's house</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive6" value="c"/>
                                                <span>Anna and Mark house</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive6" value="d"/>
                                                <span>house of Anna and Mark</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> To jest biuro menedżera firmy.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="possessive7" value="a"/>
                                                <span>the company's manager's office</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive7" value="b"/>
                                                <span>the company manager office</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive7" value="c"/>
                                                <span>the office of the company's manager</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive7" value="d"/>
                                                <span>the companies manager's office</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> To jest decyzja rządu.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="possessive8" value="a"/>
                                                <span>the government's decision</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive8" value="b"/>
                                                <span>the governments decision</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive8" value="c"/>
                                                <span>the decision of government</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive8" value="d"/>
                                                <span>the government decision</span>
                                            </label>
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
    czasowniki: [
        {
            id: 'rodzaje-czasownikow',
            title: 'Rodzaje czasowników',
            excerpt: 'Statyczne, dynamiczne, posiłkowe, modalne - poznaj różne kategorie czasowników.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Rodzaje czasowników w języku angielskim - kompletny przewodnik</h3>
                        <p className="muted">Od podstawowego podziału po zaawansowane niuanse - wszystko o czasownikach</p>

                        <div className="noun-types-grid-expanded">
                            <div className="noun-type-main">
                                <h4>🧠 Czasowniki statyczne (Stative Verbs)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Charakterystyka:</h5>
                                        <ul>
                                            <li>Opisują stany, a nie akcje</li>
                                            <li>Zwykle NIE używamy w czasach Continuous</li>
                                            <li>Wyrażają emocje, myśli, posiadanie</li>
                                            <li>Nie mają formy -ing w podstawowym znaczeniu</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Główne kategorie:</h5>
                                        <div className="categories-grid">
                                            <div className="category">
                                                <span className="category-name">Emocje i uczucia:</span>
                                                <span className="examples">love, hate, like, prefer, want, need</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Myślenie i wiedza:</span>
                                                <span className="examples">know, believe, understand, think, remember</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Własność i posiadanie:</span>
                                                <span className="examples">have, own, possess, belong, contain</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Zmysły i percepcja:</span>
                                                <span className="examples">see, hear, smell, taste, feel, seem</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Inne stany:</span>
                                                <span className="examples">be, exist, cost, weigh, matter</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grammar-tip">
                                    <h5>💡 Przykłady poprawnego użycia:</h5>
                                    <div className="example-pairs">
                                        <div className="example-pair">
                                            <span className="singular"><em>I love chocolate.</em></span>
                                            <span className="plural">(NIE: I am loving chocolate)</span>
                                        </div>
                                        <div className="example-pair">
                                            <span className="singular"><em>She knows the answer.</em></span>
                                            <span className="plural">(NIE: She is knowing the answer)</span>
                                        </div>
                                        <div className="example-pair">
                                            <span className="singular"><em>This car belongs to me.</em></span>
                                            <span className="plural">(NIE: This car is belonging to me)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>⚡ Czasowniki dynamiczne (Dynamic Verbs)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Charakterystyka:</h5>
                                        <ul>
                                            <li>Opisują akcje i czynności</li>
                                            <li>Mogą tworzyć formy Continuous</li>
                                            <li>Wyrażają ruch, procesy, zmiany</li>
                                            <li>Mają formę -ing</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Główne kategorie:</h5>
                                        <div className="categories-grid">
                                            <div className="category">
                                                <span className="category-name">Ruch i aktywność:</span>
                                                <span className="examples">run, walk, jump, swim, dance, drive</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Czynności codzienne:</span>
                                                <span className="examples">read, write, cook, clean, work, study</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Procesy i zmiany:</span>
                                                <span className="examples">become, grow, change, improve, develop</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Tworzenie i niszczenie:</span>
                                                <span className="examples">make, build, create, destroy, break</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Komunikacja:</span>
                                                <span className="examples">speak, talk, say, tell, explain</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grammar-tip">
                                    <h5>💡 Przykłady poprawnego użycia:</h5>
                                    <div className="example-pairs">
                                        <div className="example-pair">
                                            <span className="singular"><em>She is reading a book.</em></span>
                                            <span className="plural">(On czyta książkę)</span>
                                        </div>
                                        <div className="example-pair">
                                            <span className="singular"><em>They are playing football.</em></span>
                                            <span className="plural">(Oni grają w piłkę)</span>
                                        </div>
                                        <div className="example-pair">
                                            <span className="singular"><em>I'm learning English.</em></span>
                                            <span className="plural">(Uczę się angielskiego)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎭 Czasowniki o podwójnym charakterze - zmiana znaczenia</h4>
                        <p className="muted">Niektóre czasowniki mogą być zarówno statyczne, jak i dynamiczne - w zależności od znaczenia!</p>

                        <div className="dual-nouns">
                            <div className="dual-noun-category">
                                <h5>🔄 HAVE</h5>
                                <div className="dual-examples">
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Statyczne: posiadać</span>
                                            <span className="example">"I <em>have</em> a car and a house."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Dynamiczne: uczestniczyć, spożywać</span>
                                            <span className="example">"I'm <em>having</em> dinner with friends."</span>
                                        </div>
                                    </div>
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Statyczne: charakteryzować się</span>
                                            <span className="example">"She <em>has</em> blue eyes."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Dynamiczne: doświadczać</span>
                                            <span className="example">"We're <em>having</em> a great time!"</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dual-noun-category">
                                <h5>💭 THINK</h5>
                                <div className="dual-examples">
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Statyczne: uważać, wierzyć</span>
                                            <span className="example">"I <em>think</em> it's a good idea."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Dynamiczne: rozważać, myśleć o</span>
                                            <span className="example">"I'm <em>thinking</em> about changing jobs."</span>
                                        </div>
                                    </div>
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Statyczne: mieć opinię</span>
                                            <span className="example">"What do you <em>think</em> of this movie?"</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Dynamiczne: proces myślenia</span>
                                            <span className="example">"Be quiet, I'm <em>thinking</em>!"</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dual-noun-category">
                                <h5>👁️ SEE</h5>
                                <div className="dual-examples">
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Statyczne: widzieć (zmysł)</span>
                                            <span className="example">"I <em>see</em> a bird in the tree."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Dynamiczne: spotykać się, rozumieć</span>
                                            <span className="example">"I'm <em>seeing</em> my doctor tomorrow."</span>
                                        </div>
                                    </div>
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Statyczne: rozumieć</span>
                                            <span className="example">"I <em>see</em> what you mean."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Dynamiczne: wyobrażać sobie</span>
                                            <span className="example">"I'm <em>seeing</em> this project as a success."</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dual-noun-category">
                                <h5>❤️ FEEL</h5>
                                <div className="dual-examples">
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Statyczne: czuć (emocje)</span>
                                            <span className="example">"I <em>feel</em> happy today."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Dynamiczne: dotykać, badać</span>
                                            <span className="example">"The doctor is <em>feeling</em> my pulse."</span>
                                        </div>
                                    </div>
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Statyczne: wydawać się</span>
                                            <span className="example">"This <em>feels</em> like silk."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Dynamiczne: szukać po omacku</span>
                                            <span className="example">"I'm <em>feeling</em> for the light switch."</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dual-noun-category">
                                <h5>👃 SMELL / 👅 TASTE</h5>
                                <div className="dual-examples">
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Statyczne: pachnieć/smakować</span>
                                            <span className="example">"This cake <em>tastes</em> delicious."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Dynamiczne: wąchać/kosztować</span>
                                            <span className="example">"She is <em>smelling</em> the flowers."</span>
                                        </div>
                                    </div>
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Statyczne: mieć zapach/smak</span>
                                            <span className="example">"Coffee <em>smells</em> wonderful."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Dynamiczne: celowo wąchać</span>
                                            <span className="example">"Why are you <em>smelling</em> the milk?"</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Najczęstsze błędy - czasowniki statyczne w Continuous</h4>

                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>❌ Błędne użycie w formie Continuous:</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="polish">Kocham cię.</span>
                                        <span className="incorrect">I am loving you.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I love you.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Wierzę w ciebie.</span>
                                        <span className="incorrect">I am believing in you.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I believe in you.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">To należy do mnie.</span>
                                        <span className="incorrect">This is belonging to me.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">This belongs to me.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Widzę problem.</span>
                                        <span className="incorrect">I am seeing a problem.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I see a problem.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Chcę pomocy.</span>
                                        <span className="incorrect">I am wanting help.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I want help.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Rozumiem.</span>
                                        <span className="incorrect">I am understanding.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I understand.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Kiedy czasowniki statyczne MOGĄ mieć formę -ing?</h5>
                                <div className="measurement-examples">
                                    <div className="measurement">
                                        <span className="phrase">I'm loving this party!</span>
                                        <span className="meaning">(nieformalnie, dla podkreślenia emocji)</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">She's being silly.</span>
                                        <span className="meaning">(zachowywać się w określony sposób)</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">I'm having a great time!</span>
                                        <span className="meaning">(doświadczać czegoś)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Określ czy czasownik w zdaniu jest używany jako statyczny (S) czy dynamiczny (D):</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> She has two brothers.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="verb_type1" value="a"/>
                                                <span>S</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="verb_type1" value="b"/>
                                                <span>D</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> We are having dinner now.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="verb_type2" value="a"/>
                                                <span>S</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="verb_type2" value="b"/>
                                                <span>D</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> I think it's a good idea.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="verb_type3" value="a"/>
                                                <span>S</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="verb_type3" value="b"/>
                                                <span>D</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> He's thinking about the problem.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="verb_type4" value="a"/>
                                                <span>S</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="verb_type4" value="b"/>
                                                <span>D</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> This soup tastes amazing.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="verb_type5" value="a"/>
                                                <span>S</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="verb_type5" value="b"/>
                                                <span>D</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> She is tasting the sauce.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="verb_type6" value="a"/>
                                                <span>S</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="verb_type6" value="b"/>
                                                <span>D</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> I see what you mean.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="verb_type7" value="a"/>
                                                <span>S</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="verb_type7" value="b"/>
                                                <span>D</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> I'm seeing my doctor tomorrow.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="verb_type8" value="a"/>
                                                <span>S</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="verb_type8" value="b"/>
                                                <span>D</span>
                                            </label>
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
        },
        {
            id: 'czasowniki-posilkowe',
            title: 'Czasowniki posiłkowe',
            excerpt: 'Do/does/did, have/has/had, be - małe słówka o wielkiej mocy w zdaniach.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Czasowniki posiłkowe (Auxiliary Verbs) - kompletny przewodnik</h3>
                        <p className="muted">Małe słówka, które rządzą angielską gramatyką - pytania, przeczenia, czasy złożone</p>

                        <div className="noun-types-grid-expanded">
                            <div className="noun-type-main">
                                <h4>🔹 BE (am/is/are/was/were/been)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Główne funkcje:</h5>
                                        <ul>
                                            <li>Tworzenie czasów Continuous</li>
                                            <li>Tworzenie strony biernej (Passive Voice)</li>
                                            <li>Określanie tożsamości i stanów</li>
                                            <li>Krótkie odpowiedzi i pytania ogonkowe</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Formy czasownika BE:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Present:</em></span>
                                                <span className="plural">am, is, are</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Past:</em></span>
                                                <span className="plural">was, were</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Past Participle:</em></span>
                                                <span className="plural">been</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Present Participle:</em></span>
                                                <span className="plural">being</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>⏰ Czasy Continuous</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">Present Continuous</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">"She <em>is working</em> now."</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">Past Continuous</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">"They <em>were sleeping</em> when I called."</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">Future Continuous</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">"I <em>will be waiting</em> for you."</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>📄 Strona bierna (Passive Voice)</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">Present Simple Passive</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">"English <em>is spoken</em> worldwide."</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">Past Simple Passive</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">"The book <em>was written</em> in 2020."</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">Present Perfect Passive</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">"The work <em>has been finished</em>."</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>🔹 DO/DOES/DID</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Główne funkcje:</h5>
                                        <ul>
                                            <li>Pytania w czasach prostych (Present/Past Simple)</li>
                                            <li>Przeczenia w czasach prostych</li>
                                            <li>Krótkie odpowiedzi</li>
                                            <li>Wzmocnienie znaczenia (emfaza)</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Formy czasownika DO:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Present:</em></span>
                                                <span className="plural">do, does</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Past:</em></span>
                                                <span className="plural">did</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Past Participle:</em></span>
                                                <span className="plural">done</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Present Participle:</em></span>
                                                <span className="plural">doing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>❓ Pytania w Present Simple</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular"><em>Do</em> you like coffee?</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Czy lubisz kawę?</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular"><em>Does</em> she work here?</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Czy ona tu pracuje?</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">Where <em>do</em> they live?</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Gdzie oni mieszkają?</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>🚫 Przeczenia w Present Simple</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">I <em>don't</em> understand.</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Nie rozumiem.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">He <em>doesn't</em> like pizza.</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">On nie lubi pizzy.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">We <em>didn't</em> go yesterday.</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Nie poszliśmy wczoraj.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>🔹 HAVE/HAS/HAD</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Główne funkcje:</h5>
                                        <ul>
                                            <li>Tworzenie czasów Perfect</li>
                                            <li>Wyrażanie konieczności (have to)</li>
                                            <li>Określanie posiadania</li>
                                            <li>Konstrukcje causative (have something done)</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Formy czasownika HAVE:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Present:</em></span>
                                                <span className="plural">have, has</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Past:</em></span>
                                                <span className="plural">had</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Past Participle:</em></span>
                                                <span className="plural">had</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Present Participle:</em></span>
                                                <span className="plural">having</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>⏳ Czasy Perfect</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">Present Perfect</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">"I <em>have finished</em> my work."</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">Past Perfect</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">"They <em>had already left</em> when we arrived."</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">Future Perfect</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">"She <em>will have completed</em> the course by June."</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>📋 Konieczność (have to)</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">I <em>have to</em> work tomorrow.</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Muszę pracować jutro.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">She <em>has to</em> study for the exam.</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Ona musi uczyć się do egzaminu.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">We <em>had to</em> leave early.</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Musieliśmy wyjść wcześnie.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>💡 Czasowniki posiłkowe vs zwykłe - kompletne porównanie</h4>

                        <div className="comparison-table-expanded">
                            <table>
                                <thead>
                                <tr>
                                    <th>Sytuacja</th>
                                    <th>Z czasownikiem posiłkowym</th>
                                    <th>Bez czasownika posiłkowego</th>
                                    <th>Komentarz</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Pytanie w Present Simple</td>
                                    <td className="correct">"<em>Do</em> you work here?"</td>
                                    <td className="incorrect">"Work you here?"</td>
                                    <td>W czasach prostych musimy użyć do/does</td>
                                </tr>
                                <tr>
                                    <td>Przeczenie w Past Simple</td>
                                    <td className="correct">"I <em>didn't</em> see him."</td>
                                    <td className="incorrect">"I saw not him."</td>
                                    <td>Did + not + czasownik podstawowy</td>
                                </tr>
                                <tr>
                                    <td>Krótka odpowiedź</td>
                                    <td className="correct">"Yes, I <em>do</em>."</td>
                                    <td className="correct">"Yes, I work."</td>
                                    <td>Obie poprawne, ale z "do" bardziej naturalne</td>
                                </tr>
                                <tr>
                                    <td>Pytanie o ciągłą czynność</td>
                                    <td className="correct">"<em>Are</em> you working?"</td>
                                    <td className="incorrect">"Work you?"</td>
                                    <td>W Continuous używamy be + -ing</td>
                                </tr>
                                <tr>
                                    <td>Doświadczenia życiowe</td>
                                    <td className="correct">"<em>Have</em> you ever been to Paris?"</td>
                                    <td className="incorrect">"Been you to Paris?"</td>
                                    <td>Present Perfect wymaga have/has</td>
                                </tr>
                                <tr>
                                    <td>Wzmocnienie (emfaza)</td>
                                    <td className="correct">"I <em>do</em> like chocolate!"</td>
                                    <td className="correct">"I like chocolate."</td>
                                    <td>"Do" podkreśla prawdziwość stwierdzenia</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Najczęstsze błędy - polskie naleciałości</h4>

                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>❌ Pomijanie czasowników posiłkowych:</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="polish">Czy lubisz kawę?</span>
                                        <span className="incorrect">Like you coffee?</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Do you like coffee?</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Nie rozumiem.</span>
                                        <span className="incorrect">I understand not.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I don't understand.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Gdzie mieszkasz?</span>
                                        <span className="incorrect">Where live you?</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Where do you live?</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Czy jadłeś śniadanie?</span>
                                        <span className="incorrect">Ate you breakfast?</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Did you eat breakfast?</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">On nie przyszedł.</span>
                                        <span className="incorrect">He came not.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">He didn't come.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Pamiętaj o tej prostej zasadzie:</h5>
                                <div className="measurement-examples">
                                    <div className="measurement">
                                        <span className="phrase">Present Simple pytania</span>
                                        <span className="meaning">→ DO/DOES + podmiot + czasownik</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">Present Simple przeczenia</span>
                                        <span className="meaning">→ podmiot + DON'T/DOESN'T + czasownik</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">Czasy Continuous</span>
                                        <span className="meaning">→ forma BE + czasownik -ING</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">Czasy Perfect</span>
                                        <span className="meaning">→ HAVE/HAS/HAD + past participle</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę czasownika posiłkowego:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> ________ you like pizza?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="auxiliary1" value="a"/>
                                                <span>Are</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary1" value="b"/>
                                                <span>Do</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary1" value="c"/>
                                                <span>Have</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary1" value="d"/>
                                                <span>Is</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> She ________ working now.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="auxiliary2" value="a"/>
                                                <span>is</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary2" value="b"/>
                                                <span>do</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary2" value="c"/>
                                                <span>have</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary2" value="d"/>
                                                <span>does</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> They ________ already finished their homework.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="auxiliary3" value="a"/>
                                                <span>are</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary3" value="b"/>
                                                <span>do</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary3" value="c"/>
                                                <span>have</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary3" value="d"/>
                                                <span>were</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> I ________ not understand this question.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="auxiliary4" value="a"/>
                                                <span>am</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary4" value="b"/>
                                                <span>do</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary4" value="c"/>
                                                <span>have</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary4" value="d"/>
                                                <span>was</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> ________ you ever been to London?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="auxiliary5" value="a"/>
                                                <span>Are</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary5" value="b"/>
                                                <span>Do</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary5" value="c"/>
                                                <span>Have</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary5" value="d"/>
                                                <span>Were</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> He ________ watching TV when I called.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="auxiliary6" value="a"/>
                                                <span>did</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary6" value="b"/>
                                                <span>had</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary6" value="c"/>
                                                <span>was</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary6" value="d"/>
                                                <span>have</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> We ________ not go to school yesterday.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="auxiliary7" value="a"/>
                                                <span>are</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary7" value="b"/>
                                                <span>did</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary7" value="c"/>
                                                <span>have</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary7" value="d"/>
                                                <span>were</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> ________ she coming to the party?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="auxiliary8" value="a"/>
                                                <span>Are</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary8" value="b"/>
                                                <span>Do</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary8" value="c"/>
                                                <span>Has</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="auxiliary8" value="d"/>
                                                <span>Is</span>
                                            </label>
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
        },
        {
            id: 'czasowniki-modalne',
            title: 'Czasowniki modalne',
            excerpt: 'Can, could, may, might, must, should - wyrażanie możliwości, obowiązku, pozwolenia.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Czasowniki modalne - kompletny przewodnik 🎯</h3>
                        <p className="muted">Małe słówka o wielkiej mocy - wyrażanie możliwości, obowiązku, pozwolenia i nie tylko!</p>

                        <div className="noun-types-grid-expanded">
                            <div className="noun-type-main">
                                <h4>🔹 CAN / COULD / BE ABLE TO</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Główne funkcje:</h5>
                                        <ul>
                                            <li>Umiejętność i zdolność</li>
                                            <li>Pozwolenie i prośby</li>
                                            <li>Możliwość i prawdopodobieństwo</li>
                                            <li>Ofiary pomocy</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Formy czasowe:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Present:</em></span>
                                                <span className="plural">can, am/is/are able to</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Past:</em></span>
                                                <span className="plural">could, was/were able to</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Future:</em></span>
                                                <span className="plural">will be able to</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Perfect:</em></span>
                                                <span className="plural">have been able to</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>💪 Umiejętność - różnice</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"I <em>can</em> swim."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Ogólna umiejętność</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"I <em>was able to</em> fix the car yesterday."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Konkretna sytuacja w przeszłości</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"She <em>could</em> speak French when she was young."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Umiejętność w przeszłości (ogólna)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>🙏 Pozwolenie i prośby</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"<em>Can</em> I borrow your pen?"</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Nieformalna prośba</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"<em>Could</em> you help me, please?"</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Bardziej grzeczna prośba</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"<em>May</em> I use your phone?"</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Formalna prośba o pozwolenie</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>🔹 MUST / HAVE TO / NEED TO</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Główne funkcje:</h5>
                                        <ul>
                                            <li>Obowiązek i konieczność</li>
                                            <li>Zakazy (mustn't)</li>
                                            <li>Brak konieczności (don't have to)</li>
                                            <li>Wnioskowanie logiczne</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Różnice znaczeniowe:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Must</em></span>
                                                <span className="plural">obowiązek subiektywny</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Have to</em></span>
                                                <span className="plural">obowiązek obiektywny</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Need to</em></span>
                                                <span className="plural">konieczność praktyczna</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>⚡ Obowiązek - kluczowe różnice</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"I <em>must</em> finish this report."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Ja tak czuję (subiektywnie)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"I <em>have to</em> work on Saturday."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Szef mi kazał (obiektywnie)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"You <em>need to</em> drink more water."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Dla zdrowia (konieczność)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>🚫 Zakazy vs brak konieczności</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"You <em>mustn't</em> smoke here."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Zakaz - nie wolno!</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"You <em>don't have to</em> come."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Nie musisz, ale możesz</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"You <em>needn't</em> worry."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Nie ma potrzeby (formalnie)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>🔹 SHOULD / OUGHT TO / HAD BETTER</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Główne funkcje:</h5>
                                        <ul>
                                            <li>Rada i rekomendacje</li>
                                            <li>Moralny obowiązek</li>
                                            <li>Ostrzeżenia</li>
                                            <li>Oczekiwania</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Stopień rekomendacji:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Should</em></span>
                                                <span className="plural">ogólna rada</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Ought to</em></span>
                                                <span className="plural">moralny obowiązek</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Had better</em></span>
                                                <span className="plural">ostrzeżenie, konsekwencje</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>💡 Rada - subtelne różnice</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"You <em>should</em> see a doctor."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Ogólna, życzliwa rada</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"You <em>ought to</em> help your parents."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Moralny obowiązek</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"You <em>had better</em> apologize."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Albo będą konsekwencje!</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>🎯 Konkretne użycie</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"We <em>should</em> leave early."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">To byłoby rozsądne</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"He <em>ought to</em> be more careful."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">To jego moralny obowiązek</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"You <em>had better</em> not be late."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Ostrzeżenie przed konsekwencjami</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⏰ Formy przeszłe czasowników modalnych</h4>

                        <div className="comparison-table-expanded">
                            <table>
                                <thead>
                                <tr>
                                    <th>Czasownik</th>
                                    <th>Forma przeszła</th>
                                    <th>Użycie</th>
                                    <th>Przykład</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><strong>can</strong></td>
                                    <td>could / was able to</td>
                                    <td>could - ogólna umiejętność<br/>was able to - konkretna sytuacja</td>
                                    <td>"I <em>could</em> swim when I was 5."<br/>"I <em>was able to</em> solve the problem yesterday."</td>
                                </tr>
                                <tr>
                                    <td><strong>may</strong></td>
                                    <td>might / was allowed to</td>
                                    <td>might - prawdopodobieństwo<br/>was allowed to - pozwolenie</td>
                                    <td>"She <em>might</em> have called."<br/>"I <em>was allowed to</em> go out."</td>
                                </tr>
                                <tr>
                                    <td><strong>will</strong></td>
                                    <td>would</td>
                                    <td>przyszłość w przeszłości<br/>powtarzające się czynności</td>
                                    <td>"He said he <em>would</em> come."<br/>"When I was young, I <em>would</em> play football every day."</td>
                                </tr>
                                <tr>
                                    <td><strong>shall</strong></td>
                                    <td>should</td>
                                    <td>przyszłość w przeszłości<br/>rada w teraźniejszości</td>
                                    <td>"I thought I <em>should</em> help."<br/>"You <em>should</em> see a doctor."</td>
                                </tr>
                                <tr>
                                    <td><strong>must</strong></td>
                                    <td>had to</td>
                                    <td>konieczność w przeszłości</td>
                                    <td>"I <em>had to</em> work yesterday."</td>
                                </tr>
                                <tr>
                                    <td><strong>should</strong></td>
                                    <td>should have + past participle</td>
                                    <td>krytyka przeszłych działań</td>
                                    <td>"You <em>should have studied</em> more for the exam."</td>
                                </tr>
                                <tr>
                                    <td><strong>could</strong></td>
                                    <td>could have + past participle</td>
                                    <td>niewykorzystana możliwość</td>
                                    <td>"I <em>could have gone</em> to university."</td>
                                </tr>
                                <tr>
                                    <td><strong>might</strong></td>
                                    <td>might have + past participle</td>
                                    <td>przypuszczenie o przeszłości</td>
                                    <td>"She <em>might have forgotten</em> about the meeting."</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎭 Szczegółowe porównanie podobnych form</h4>

                        <div className="plural-categories">
                            <div className="plural-category">
                                <h5>⚖️ Must vs Have to - kluczowe różnice</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">MUST</span>
                                        <span className="meaning">Obowiązek subiektywny (od mówcy)</span>
                                        <span className="example">"I <em>must</em> clean my room." (sam tak postanowiłem)<br/>"You <em>must</em> see this film!" (moja rekomendacja)</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">HAVE TO</span>
                                        <span className="meaning">Obowiązek obiektywny (z zewnątrz)</span>
                                        <span className="example">"I <em>have to</em> work on Saturday." (szef mi kazał)<br/>"You <em>have to</em> have a passport to travel." (prawo)</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">MUSTN'T vs DON'T HAVE TO</span>
                                        <span className="meaning">Zakaz vs brak konieczności</span>
                                        <span className="example">"You <em>mustn't</em> smoke here." (zakaz)<br/>"You <em>don't have to</em> come." (nie musisz, ale możesz)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="plural-category">
                                <h5>🎓 Should vs Ought to vs Had better</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">SHOULD</span>
                                        <span className="meaning">Ogólna rada, rekomendacja</span>
                                        <span className="example">"You <em>should</em> study more." (to byłoby mądrze)<br/>"He <em>should</em> arrive soon." (oczekiwanie)</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">OUGHT TO</span>
                                        <span className="meaning">Moralny obowiązek, powinność</span>
                                        <span className="example">"You <em>ought to</em> respect your elders." (moralny obowiązek)<br/>"We <em>ought to</em> help the poor." (powinność moralna)</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">HAD BETTER</span>
                                        <span className="meaning">Ostrzeżenie, groźba konsekwencji</span>
                                        <span className="example">"You <em>had better</em> finish your work." (albo będzie kłopot)<br/>"I <em>had better</em> not be late." (bo szef się zezłości)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="plural-category">
                                <h5>🤔 Can vs Could vs May - pozwolenie</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">CAN</span>
                                        <span className="meaning">Nieformalne pozwolenie</span>
                                        <span className="example">"<em>Can</em> I borrow your pen?" (wśród znajomych)<br/>"You <em>can</em> use my phone." (nieformalna zgoda)</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">COULD</span>
                                        <span className="meaning">Grzeczna prośba</span>
                                        <span className="example">"<em>Could</em> I ask a question?" (bardziej grzecznie)<br/>"<em>Could</em> you pass the salt, please?" (uprzejma prośba)</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">MAY</span>
                                        <span className="meaning">Formalne pozwolenie</span>
                                        <span className="example">"<em>May</em> I see your passport?" (oficjalnie)<br/>"You <em>may</em> begin the exam now." (formalna zgoda)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawny czasownik modalny:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> I ________ finish this report by Friday - it's very important.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modal1" value="a"/>
                                                <span>should</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal1" value="b"/>
                                                <span>can</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal1" value="c"/>
                                                <span>must</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal1" value="d"/>
                                                <span>might</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> You ________ smoke in the hospital - it's strictly prohibited.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modal2" value="a"/>
                                                <span>don't have to</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal2" value="b"/>
                                                <span>shouldn't</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal2" value="c"/>
                                                <span>mustn't</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal2" value="d"/>
                                                <span>needn't</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> When I was younger, I ________ run 10 kilometers.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modal3" value="a"/>
                                                <span>should</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal3" value="b"/>
                                                <span>could</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal3" value="c"/>
                                                <span>must</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal3" value="d"/>
                                                <span>may</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> You look very tired. You ________ go to bed earlier.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modal4" value="a"/>
                                                <span>can</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal4" value="b"/>
                                                <span>must</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal4" value="c"/>
                                                <span>should</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal4" value="d"/>
                                                <span>might</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> We ________ pay taxes - it's the law.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modal5" value="a"/>
                                                <span>should</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal5" value="b"/>
                                                <span>have to</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal5" value="c"/>
                                                <span>must</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal5" value="d"/>
                                                <span>ought to</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> You ________ have told me you were coming! I would have prepared dinner.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modal6" value="a"/>
                                                <span>can</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal6" value="b"/>
                                                <span>must</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal6" value="c"/>
                                                <span>should</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal6" value="d"/>
                                                <span>may</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> ________ I borrow your pen for a moment?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modal7" value="a"/>
                                                <span>Can</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal7" value="b"/>
                                                <span>May</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal7" value="c"/>
                                                <span>Must</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal7" value="d"/>
                                                <span>Should</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> She ________ be at home - her car is in the driveway.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modal8" value="a"/>
                                                <span>can</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal8" value="b"/>
                                                <span>may</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal8" value="c"/>
                                                <span>must</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modal8" value="d"/>
                                                <span>should</span>
                                            </label>
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
        },
        {
            id: 'czasowniki-semi-modalne',
            title: 'Czasowniki semi-modalne',
            excerpt: 'Dare, need, used to, would - czasowniki o cechach modalnych i zwykłych.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Czasowniki semi-modalne - hybrydy gramatyczne 🔄</h3>
                        <p className="muted">Czasowniki, które mogą zachowywać się jak modalne lub zwykłe - poznaj ich wyjątkowość!</p>

                        <div className="noun-types-grid-expanded">
                            <div className="noun-type-main">
                                <h4>🔹 USED TO / WOULD</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Główne funkcje:</h5>
                                        <ul>
                                            <li>Wyrażanie przeszłych nawyków</li>
                                            <li>Opisywanie powtarzających się czynności</li>
                                            <li>Mówienie o dawnych stanów</li>
                                            <li>Wspominanie przeszłości</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Różnice:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Used to</em></span>
                                                <span className="plural">nawyki i stany</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Would</em></span>
                                                <span className="plural">tylko powtarzające się czynności</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Oba</em></span>
                                                <span className="plural">tylko dla przeszłości</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>🔄 Used to - przeszłe nawyki i stany</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"I <em>used to</em> smoke."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Kiedyś paliłem, ale już nie.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"She <em>used to</em> have long hair."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Kiedyś miała długie włosy.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"We <em>used to</em> live in London."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Kiedyś mieszkaliśmy w Londynie.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>⏰ Would - przeszłe powtarzające się czynności</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"When I was a child, I <em>would</em> visit my grandparents every summer."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Powtarzająca się czynność w przeszłości</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"He <em>would</em> always bring me flowers."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Regularna, powtarzająca się akcja</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">❌ "I <em>would</em> like chocolate."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">NIE - to present tense!</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grammar-tip warning">
                                    <h5>⚠️ Ważne ograniczenia:</h5>
                                    <div className="example-pairs">
                                        <div className="example-pair">
                                            <span className="singular"><em>Used to</em> - dla stanów i czynności</span>
                                            <span className="plural">✓ I used to be shy. ✓ I used to play football.</span>
                                        </div>
                                        <div className="example-pair">
                                            <span className="singular"><em>Would</em> - tylko dla czynności</span>
                                            <span className="plural">✓ I would play football. ❌ I would be shy.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>🔹 DARE / NEED</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Podwójna natura:</h5>
                                        <ul>
                                            <li>Mogą być czasownikami modalnymi</li>
                                            <li>Mogą być czasownikami zwykłymi</li>
                                            <li>Różnice w formach gramatycznych</li>
                                            <li>Różnice w znaczeniu</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Formy:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Modalny:</em></span>
                                                <span className="plural">bez "to", bez "s"</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Zwykły:</em></span>
                                                <span className="plural">z "to", z "s" w 3 os.</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Oba:</em></span>
                                                <span className="plural">rzadkie w mowie</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>🎯 DARE - wyzwania i odwaga</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"How <em>dare</em> you speak to me like that!"</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Modalny - oburzenie</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"I <em>dare</em> you to jump!"</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Zwykły - wyzwanie</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"She <em>doesn't dare</em> to tell him the truth."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Zwykły - brak odwagi</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>📋 NEED - konieczność</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"You <em>needn't</em> worry."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Modalny - brak konieczności</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"I <em>need to</em> finish this work."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Zwykły - konieczność</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"He <em>needs</em> help with his homework."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Zwykły - potrzeba</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grammar-tip">
                                    <h5>💡 Współczesne użycie:</h5>
                                    <p>We współczesnym angielskim <strong>need</strong> i <strong>dare</strong> są znacznie częściej używane jako czasowniki zwykłe. Formy modalne są rzadsze i bardziej formalne.</p>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>🔹 WOULD - wielofunkcyjność</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Różne funkcje:</h5>
                                        <ul>
                                            <li>Warunki (conditional)</li>
                                            <li>Przeszłe nawyki</li>
                                            <li>Uprzejme prośby</li>
                                            <li>Przyszłość w przeszłości</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Konteksty:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Conditional</em></span>
                                                <span className="plural">I would go if I could</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Past habit</em></span>
                                                <span className="plural">I would always call her</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Polite request</em></span>
                                                <span className="plural">Would you mind...?</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>🎭 Różne znaczenia WOULD</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"I <em>would</em> help you if I had time."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Warunek (conditional)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"When I was young, I <em>would</em> play outside every day."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Przeszły nawyk</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"<em>Would</em> you pass the salt, please?"</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Uprzejma prośba</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>🕒 Future in the past</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"He said he <em>would</em> call me."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Obietnica z przeszłości</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"I knew she <em>would</em> be successful."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Przewidywanie z przeszłości</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"They promised they <em>would</em> come."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Zobowiązanie z przeszłości</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚖️ Porównanie used to vs would vs past simple</h4>

                        <div className="comparison-table-expanded">
                            <table>
                                <thead>
                                <tr>
                                    <th>Czasownik</th>
                                    <th>Użycie</th>
                                    <th>Przykład</th>
                                    <th>Uwagi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><strong>Used to</strong></td>
                                    <td>Przeszłe nawyki i stany które się skończyły</td>
                                    <td>"I <em>used to</em> live in Paris."<br/>"She <em>used to</em> be shy."</td>
                                    <td>Może dotyczyć stanów i czynności. Zawsze oznacza zmianę.</td>
                                </tr>
                                <tr>
                                    <td><strong>Would</strong></td>
                                    <td>Powtarzające się czynności w przeszłości</td>
                                    <td>"When I was a child, I <em>would</em> visit my grandmother every Sunday."</td>
                                    <td>TYLKO dla czynności, NIGDY dla stanów. Często z "always", "often".</td>
                                </tr>
                                <tr>
                                    <td><strong>Past Simple</strong></td>
                                    <td>Pojedyncze zdarzenia w przeszłości</td>
                                    <td>"I <em>lived</em> in Paris in 2010."<br/>"She <em>was</em> shy at the party."</td>
                                    <td>Nie wskazuje na nawyk, tylko fakt. Może być pojedyncze zdarzenie.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Najczęstsze błędy - semi-modals</h4>

                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>❌ Błędne użycie used to i would:</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="polish">Kiedyś byłem wysoki.</span>
                                        <span className="incorrect">I would be tall.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I used to be tall.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Kiedyś mieszkałem w Warszawie.</span>
                                        <span className="incorrect">I would live in Warsaw.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I used to live in Warsaw.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Potrzebuję pomocy.</span>
                                        <span className="incorrect">I need help.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I need help. (poprawne!)<br/>Modal: I needn't help. (nie potrzebuję pomocy)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Odważysz się skoczyć?</span>
                                        <span className="incorrect">Dare you jump?</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Do you dare to jump?<br/>Lub: Dare you jump? (bardzo formalne)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Praktyczne wskazówki:</h5>
                                <div className="measurement-examples">
                                    <div className="measurement">
                                        <span className="phrase">Used to + bezokolicznik</span>
                                        <span className="meaning">I used to play → Kiedyś grałem</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">Be used to + -ing</span>
                                        <span className="meaning">I'm used to playing → Jestem przyzwyczajony do grania</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">Get used to + -ing</span>
                                        <span className="meaning">I'm getting used to playing → Przyzwyczajam się do grania</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">Would tylko dla czynności</span>
                                        <span className="meaning">✓ I would play ❌ I would be happy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę czasownika semi-modalnego:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> When I was a child, I ________ play in the park every day.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="semi1" value="a"/>
                                                <span>used to</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi1" value="b"/>
                                                <span>would</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi1" value="c"/>
                                                <span>used to/would</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi1" value="d"/>
                                                <span>use to</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> I ________ have long hair when I was younger.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="semi2" value="a"/>
                                                <span>used to</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi2" value="b"/>
                                                <span>would</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi2" value="c"/>
                                                <span>use to</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi2" value="d"/>
                                                <span>will</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> You ________ worry about the exam - it's not difficult.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="semi3" value="a"/>
                                                <span>don't need to</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi3" value="b"/>
                                                <span>needn't</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi3" value="c"/>
                                                <span>don't need to/needn't</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi3" value="d"/>
                                                <span>doesn't need</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> How ________ you speak to me like that!</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="semi4" value="a"/>
                                                <span>do dare</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi4" value="b"/>
                                                <span>dare</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi4" value="c"/>
                                                <span>dared</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi4" value="d"/>
                                                <span>dares</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> She said she ________ call me back later.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="semi5" value="a"/>
                                                <span>will</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi5" value="b"/>
                                                <span>would</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi5" value="c"/>
                                                <span>used to</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi5" value="d"/>
                                                <span>shall</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> I'm ________ living in a big city now.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="semi6" value="a"/>
                                                <span>used to</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi6" value="b"/>
                                                <span>used to</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi6" value="c"/>
                                                <span>use to</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi6" value="d"/>
                                                <span>would</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> He ________ to help us with the project.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="semi7" value="a"/>
                                                <span>dare not</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi7" value="b"/>
                                                <span>doesn't dare</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi7" value="c"/>
                                                <span>dare not/doesn't dare</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi7" value="d"/>
                                                <span>not dare</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> In those days, we ________ visit our grandparents every Sunday.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="semi8" value="a"/>
                                                <span>used to</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi8" value="b"/>
                                                <span>would</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi8" value="c"/>
                                                <span>used to/would</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="semi8" value="d"/>
                                                <span>use to</span>
                                            </label>
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
    przymiotniki: [
        {
            id: 'stopniowanie-przymiotnikow',
            title: 'Stopniowanie przymiotników',
            excerpt: 'Stopień wyższy i najwyższy - od prostych form po najbardziej nieregularne.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Stopniowanie przymiotników - kompletny przewodnik 📈</h3>
                        <p className="muted">Od podstawowych zasad po najbardziej złożone wyjątki - wszystko o porównywaniu cech</p>

                        <div className="noun-types-grid-expanded">
                            <div className="noun-type-main">
                                <h4>📏 Przymiotniki krótkie (1-2 sylaby)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Zasady stopniowania:</h5>
                                        <ul>
                                            <li><strong>+ -er / -est</strong> - większość przymiotników</li>
                                            <li><strong>Podwajanie spółgłoski</strong> - po krótkiej samogłosce</li>
                                            <li><strong>y → ier / iest</strong> - po spółgłosce</li>
                                            <li><strong>e + r / st</strong> - dla kończących się na -e</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Formy stopniowania:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Stopień równy</em></span>
                                                <span className="plural"><em>Wyższy / Najwyższy</em></span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">tall</span>
                                                <span className="plural">taller / tallest</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">big</span>
                                                <span className="plural">bigger / biggest</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">happy</span>
                                                <span className="plural">happier / happiest</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">nice</span>
                                                <span className="plural">nicer / nicest</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>➕ +er / +est (większość)</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">small</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">smaller</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">smallest</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">fast</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">faster</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">fastest</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">clean</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">cleaner</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">cleanest</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>📝 Podwajanie spółgłoski</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">big</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">bigger</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">biggest</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">hot</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">hotter</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">hottest</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">thin</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">thinner</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">thinnest</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>📝 y → ier / iest</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">happy</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">happier</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">happiest</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">easy</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">easier</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">easiest</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">pretty</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">prettier</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">prettiest</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>➕ e + r / st</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">nice</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">nicer</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">nicest</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">large</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">larger</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">largest</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">wise</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">wiser</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">wisest</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>🎯 Przymiotniki długie (2+ sylab)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Zasady stopniowania:</h5>
                                        <ul>
                                            <li><strong>more / most</strong> - większość długich przymiotników</li>
                                            <li><strong>Wyjątki 2-sylabowe</strong> - kończące się na -y, -er, -le, -ow</li>
                                            <li><strong>Przymiotniki z przedrostkami</strong> - zawsze z more/most</li>
                                            <li><strong>Participial adjectives</strong> - zawsze z more/most</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Przykłady:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Stopień równy</em></span>
                                                <span className="plural"><em>Wyższy / Najwyższy</em></span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">beautiful</span>
                                                <span className="plural">more beautiful / most beautiful</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">interesting</span>
                                                <span className="plural">more interesting / most interesting</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">expensive</span>
                                                <span className="plural">more expensive / most expensive</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>🌟 Długie przymiotniki z more/most</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">beautiful</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">more beautiful</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">most beautiful</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">difficult</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">more difficult</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">most difficult</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">comfortable</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">more comfortable</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">most comfortable</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>⚠️ Wyjątki 2-sylabowe z -er/-est</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">happy</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">happier</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">happiest</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">clever</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">cleverer</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">cleverest</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">gentle</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">gentler</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">gentlest</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">narrow</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">narrower</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">narrowest</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>🌟 Przymiotniki nieregularne</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Charakterystyka:</h5>
                                        <ul>
                                            <li>Całkowicie nieregularne formy</li>
                                            <li>Nie stosują się do żadnych zasad</li>
                                            <li>Należy je zapamiętać</li>
                                            <li>Używane bardzo często</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Najważniejsze nieregularne:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Równy</em></span>
                                                <span className="plural"><em>Wyższy / Najwyższy</em></span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">good</span>
                                                <span className="plural">better / best</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">bad</span>
                                                <span className="plural">worse / worst</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">far</span>
                                                <span className="plural">farther/further / farthest/furthest</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>✅ Dobry vs ❌ Zły</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">good</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">better</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">best</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">bad</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">worse</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">worst</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">well (przysłówek)</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">better</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">best</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>📊 Ilość i odległość</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">much/many</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">more</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">most</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">little</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">less</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">least</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">far</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">farther/further</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">farthest/furthest</span>
                                            </div>
                                            <div className="note">
                                                farther - fizyczna odległość<br/>
                                                further - abstrakcyjna
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Stopniowanie w zdaniach - praktyczne użycie</h4>

                        <div className="dual-nouns">
                            <div className="dual-noun-category">
                                <h5>📈 Stopień wyższy (comparative)</h5>
                                <div className="dual-examples">
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Porównanie dwóch elementów</span>
                                            <span className="example">"My car is <em>faster than</em> yours."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Z "than"</span>
                                            <span className="example">"She is <em>taller than</em> her brother."</span>
                                        </div>
                                    </div>
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Coraz bardziej...</span>
                                            <span className="example">"It's getting <em>colder and colder</em>."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Im... tym...</span>
                                            <span className="example">"<em>The more</em> you practice, <em>the better</em> you get."</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dual-noun-category">
                                <h5>🏆 Stopień najwyższy (superlative)</h5>
                                <div className="dual-examples">
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">W grupie 3+ elementów</span>
                                            <span className="example">"This is <em>the tallest</em> building in the city."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Z "the" i "in/of"</span>
                                            <span className="example">"He is <em>the smartest</em> student in the class."</span>
                                        </div>
                                    </div>
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Jeden z naj...</span>
                                            <span className="example">"It's <em>one of the most beautiful</em> places I've seen."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Drugi/trzeci naj...</span>
                                            <span className="example">"This is <em>the second largest</em> city in the country."</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Najczęstsze błędy - polskie naleciałości</h4>

                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>❌ Błędne formy stopniowania:</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="polish">bardziej interesujący</span>
                                        <span className="incorrect">interesanter</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">more interesting</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">lepszy</span>
                                        <span className="incorrect">more good</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">better</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">najbardziej piękny</span>
                                        <span className="incorrect">the most beautifulest</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">the most beautiful</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">bardziej duży</span>
                                        <span className="incorrect">more big</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">bigger</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">najgorszy</span>
                                        <span className="incorrect">the baddest</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">the worst</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">bardziej zły</span>
                                        <span className="incorrect">more bad</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">worse</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Praktyczna zasada:</h5>
                                <div className="measurement-examples">
                                    <div className="measurement">
                                        <span className="phrase">1 sylaba</span>
                                        <span className="meaning">+ -er / -est (fast → faster → fastest)</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">2 sylaby kończące się na -y</span>
                                        <span className="meaning">y → ier / iest (happy → happier → happiest)</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">2+ sylab (inne)</span>
                                        <span className="meaning">more / most (beautiful → more beautiful → most beautiful)</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">Nieregularne</span>
                                        <span className="meaning">zapamiętać! (good → better → best)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz właściwą formę stopnia wyższego:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> This car is ________ than that one.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="comp1" value="a"/>
                                                <span>more fast</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="comp1" value="b"/>
                                                <span>faster</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> Her dress is ________ than mine.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="comp2" value="a"/>
                                                <span>beautifuler</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="comp2" value="b"/>
                                                <span>more beautiful</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> This problem is ________ than I thought.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="comp3" value="a"/>
                                                <span>badder</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="comp3" value="b"/>
                                                <span>worse</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> The weather is getting ________ every day.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="comp4" value="a"/>
                                                <span>more good</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="comp4" value="b"/>
                                                <span>better</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> This box is ________ than that one.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="comp5" value="a"/>
                                                <span>heavier</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="comp5" value="b"/>
                                                <span>more heavy</span>
                                            </label>
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
        },
        {
            id: 'kolejnosc-przymiotnikow',
            title: 'Kolejność przymiotników',
            excerpt: 'OSAShCOMP - magiczny akronim, który pomoże Ci ułożyć przymiotniki w poprawnej kolejności.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Kolejność przymiotników - kompletny przewodnik 🎨</h3>
                        <p className="muted">Gdy używasz wielu przymiotników, ważna jest ich kolejność! Poznaj system OSAShCOMP</p>

                        <div className="noun-types-grid-expanded">
                            <div className="noun-type-main">
                                <h4>📋 System OSAShCOMP - magiczny akronim</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>🎯 Kolejność kategorii:</h5>
                                        <ul>
                                            <li><strong>O</strong>pinion - Opinia</li>
                                            <li><strong>S</strong>ize - Rozmiar</li>
                                            <li><strong>A</strong>ge - Wiek</li>
                                            <li><strong>Sh</strong>ape - Kształt</li>
                                            <li><strong>C</strong>olor - Kolor</li>
                                            <li><strong>O</strong>rigin - Pochodzenie</li>
                                            <li><strong>M</strong>aterial - Materiał</li>
                                            <li><strong>P</strong>urpose - Przeznaczenie</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Przykłady kategorii:</h5>
                                        <div className="categories-grid">
                                            <div className="category">
                                                <span className="category-name">Opinia:</span>
                                                <span className="examples">beautiful, ugly, nice, terrible</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Rozmiar:</span>
                                                <span className="examples">big, small, tall, short</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Wiek:</span>
                                                <span className="examples">old, new, young, ancient</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Kształt:</span>
                                                <span className="examples">round, square, rectangular</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Kolor:</span>
                                                <span className="examples">red, blue, green, black</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Pochodzenie:</span>
                                                <span className="examples">American, Chinese, European</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Materiał:</span>
                                                <span className="examples">wooden, plastic, glass, metal</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Przeznaczenie:</span>
                                                <span className="examples">sleeping (bag), cooking (oil)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rules-grid">
                            <div className="rule-detailed">
                                <h5>1️⃣ OPINIA (Opinion)</h5>
                                <div className="examples-detailed">
                                    <div className="example-group">
                                        <span className="singular">Subiektywna ocena</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>beautiful</em> big house"</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">Ocena ogólna</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"an <em>ugly</em> old car"</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">Wrażenia</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>delicious</em> hot meal"</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rule-detailed">
                                <h5>2️⃣ ROZMIAR (Size)</h5>
                                <div className="examples-detailed">
                                    <div className="example-group">
                                        <span className="singular">Wymiary fizyczne</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>small</em> round table"</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">Wysokość/długość</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>tall</em> young man"</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">Ogólne rozmiary</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>huge</em> ancient tree"</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rule-detailed">
                                <h5>3️⃣ WIEK (Age)</h5>
                                <div className="examples-detailed">
                                    <div className="example-group">
                                        <span className="singular">Wiek względny</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>new</em> red car"</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">Okres historyczny</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"an <em>old</em> wooden house"</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">Stan zużycia</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>modern</em> glass building"</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rule-detailed">
                                <h5>4️⃣ KSZTAŁT (Shape)</h5>
                                <div className="examples-detailed">
                                    <div className="example-group">
                                        <span className="singular">Forma geometryczna</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>round</em> glass table"</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">Kontury</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"an <em>oval</em> wooden frame"</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">Struktura</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>flat</em> metal surface"</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rule-detailed">
                                <h5>5️⃣ KOLOR (Color)</h5>
                                <div className="examples-detailed">
                                    <div className="example-group">
                                        <span className="singular">Barwy podstawowe</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>red</em> Italian car"</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">Odcienie</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>dark blue</em> cotton shirt"</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">Kombinacje kolorów</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>black and white</em> photo"</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rule-detailed">
                                <h5>6️⃣ POCHODZENIE (Origin)</h5>
                                <div className="examples-detailed">
                                    <div className="example-group">
                                        <span className="singular">Kraj/region</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"an <em>Italian</em> leather bag"</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">Kultura</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>Chinese</em> silk dress"</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">Miejsce pochodzenia</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"<em>European</em> wooden furniture"</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rule-detailed">
                                <h5>7️⃣ MATERIAŁ (Material)</h5>
                                <div className="examples-detailed">
                                    <div className="example-group">
                                        <span className="singular">Substancja</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>wooden</em> dining table"</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">Tworzywo</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>plastic</em> garden chair"</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">Materiał</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>glass</em> coffee table"</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rule-detailed">
                                <h5>8️⃣ PRZEZNACZENIE (Purpose)</h5>
                                <div className="examples-detailed">
                                    <div className="example-group">
                                        <span className="singular">Funkcja</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>sleeping</em> bag"</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">Cel użytkowy</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"<em>cooking</em> oil"</span>
                                    </div>
                                    <div className="example-group">
                                        <span className="singular">Zastosowanie</span>
                                        <span className="arrow">→</span>
                                        <span className="plural">"a <em>tennis</em> racket"</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Praktyczne przykłady - od prostych do złożonych</h4>

                        <div className="plural-categories">
                            <div className="plural-category">
                                <h5>🏠 Przykłady z życia codziennego</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">"a beautiful big modern house"</span>
                                        <span className="meaning">piękny duży nowoczesny dom</span>
                                        <span className="example">opinia → rozmiar → wiek</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">"an expensive Italian leather bag"</span>
                                        <span className="meaning">droga włoska skórzana torba</span>
                                        <span className="example">opinia → pochodzenie → materiał</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">"a small round wooden table"</span>
                                        <span className="meaning">mały okrągły drewniany stół</span>
                                        <span className="example">rozmiar → kształt → materiał</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">"a delicious hot Chinese soup"</span>
                                        <span className="meaning">pyszna gorąca chińska zupa</span>
                                        <span className="example">opinia → wiek → pochodzenie</span>
                                    </div>
                                </div>
                            </div>

                            <div className="plural-category">
                                <h5>🎨 Bardziej złożone przykłady</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">"a lovely small old rectangular brown French wooden writing desk"</span>
                                        <span className="meaning">śliczne małe stare prostokątne brązowe francuskie drewniane biurko</span>
                                        <span className="example">OSAShCOMP w pełnej krasie!</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">"an ugly big new square red Chinese plastic garden chair"</span>
                                        <span className="meaning">brzydkie duże nowe kwadratowe czerwone chińskie plastikowe krzesło ogrodowe</span>
                                        <span className="example">wszystkie 8 kategorii</span>
                                    </div>
                                </div>
                            </div>

                            <div className="plural-category">
                                <h5>💼 Przykłady biznesowe</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">"a successful large American technology company"</span>
                                        <span className="meaning">udana duża amerykańska firma technologiczna</span>
                                        <span className="example">opinia → rozmiar → pochodzenie → przeznaczenie</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">"an efficient new German manufacturing system"</span>
                                        <span className="meaning">wydajny nowy niemiecki system produkcyjny</span>
                                        <span className="example">opinia → wiek → pochodzenie → przeznaczenie</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Najczęstsze błędy i wyjątki</h4>

                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>❌ Typowe błędy w kolejności:</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="polish">duży czerwony samochód</span>
                                        <span className="incorrect">red big car</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">big red car</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">stare drewniane drzwi</span>
                                        <span className="incorrect">wooden old doors</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">old wooden doors</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">francuska piękna aktorka</span>
                                        <span className="incorrect">French beautiful actress</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">beautiful French actress</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">nowy mały dom</span>
                                        <span className="incorrect">new small house</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">small new house</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Praktyczne wskazówki:</h5>
                                <div className="measurement-examples">
                                    <div className="measurement">
                                        <span className="phrase">Rzadko więcej niż 3</span>
                                        <span className="meaning">Używaj maksymalnie 2-3 przymiotników</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">Opinia zawsze pierwsza</span>
                                        <span className="meaning">beautiful, nice, ugly → na początku</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">Przeznaczenie zawsze ostatnie</span>
                                        <span className="meaning">sleeping bag, tennis racket → na końcu</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">Rozmiar przed wiekiem</span>
                                        <span className="meaning">big old house (nie: old big house)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Ułóż przymiotniki w poprawnej kolejności:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> car / Italian / red / sports</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="order1" value="a"/>
                                                <span>Italian red sports car</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="order1" value="b"/>
                                                <span>red Italian sports car</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="order1" value="c"/>
                                                <span>sports red Italian car</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> house / big / beautiful / old</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="order2" value="a"/>
                                                <span>big beautiful old house</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="order2" value="b"/>
                                                <span>beautiful big old house</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="order2" value="c"/>
                                                <span>old beautiful big house</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> table / wooden / small / coffee</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="order3" value="a"/>
                                                <span>wooden small coffee table</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="order3" value="b"/>
                                                <span>small wooden coffee table</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="order3" value="c"/>
                                                <span>coffee small wooden table</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> dress / silk / beautiful / Chinese</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="order4" value="a"/>
                                                <span>Chinese beautiful silk dress</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="order4" value="b"/>
                                                <span>beautiful Chinese silk dress</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="order4" value="c"/>
                                                <span>silk beautiful Chinese dress</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> bag / leather / black / expensive</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="order5" value="a"/>
                                                <span>black expensive leather bag</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="order5" value="b"/>
                                                <span>expensive black leather bag</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="order5" value="c"/>
                                                <span>leather expensive black bag</span>
                                            </label>
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
    przyslowki: [
        {
            id: 'rodzaje-przyslowkow',
            title: 'Rodzaje przysłówków',
            excerpt: 'Sposobu, miejsca, czasu, częstotliwości - poznaj wszystkie kategorie przysłówków.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Przysłówki - kompletny przewodnik ✨</h3>
                        <p className="muted">Od podstawowych kategorii po zaawansowane użycie - wszystko o przysłówkach w języku angielskim</p>

                        <div className="noun-types-grid-expanded">
                            <div className="noun-type-main">
                                <h4>🎭 Przysłówki sposobu (Adverbs of Manner)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Charakterystyka:</h5>
                                        <ul>
                                            <li>Odpowiadają na pytanie HOW? (jak?)</li>
                                            <li>Opisują sposób wykonania czynności</li>
                                            <li>Często kończą się na -ly</li>
                                            <li>Zwykle stoją po czasowniku lub na końcu zdania</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Najczęstsze przysłówki sposobu:</h5>
                                        <div className="categories-grid">
                                            <div className="category">
                                                <span className="category-name">Szybkość:</span>
                                                <span className="examples">quickly, slowly, fast, rapidly</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Ostrożność:</span>
                                                <span className="examples">carefully, cautiously, gently</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Umiejętności:</span>
                                                <span className="examples">beautifully, skillfully, professionally</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Głośność:</span>
                                                <span className="examples">loudly, quietly, silently, noisily</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Wyjątki bez -ly:</span>
                                                <span className="examples">well, fast, hard, late</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>💃 Opis wykonania</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"She dances <em>gracefully</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Tańczy z gracją.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"He speaks English <em>fluently</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Mówi po angielsku płynnie.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"They work <em>efficiently</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Pracują wydajnie.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>🎵 Jakość wykonania</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"She sings <em>beautifully</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Śpiewa pięknie.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"He plays the piano <em>well</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Gra dobrze na pianinie.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"The team performed <em>poorly</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Zespół zaprezentował się słabo.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>📍 Przysłówki miejsca (Adverbs of Place)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Charakterystyka:</h5>
                                        <ul>
                                            <li>Odpowiadają na pytanie WHERE? (gdzie?)</li>
                                            <li>Określają miejsce działania</li>
                                            <li>Często to przyimki lub wyrażenia przyimkowe</li>
                                            <li>Zwykle na końcu zdania</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Najczęstsze przysłówki miejsca:</h5>
                                        <div className="categories-grid">
                                            <div className="category">
                                                <span className="category-name">Podstawowe:</span>
                                                <span className="examples">here, there, everywhere, nowhere</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Kierunki:</span>
                                                <span className="examples">up, down, inside, outside</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Pozycje:</span>
                                                <span className="examples">above, below, behind, in front</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Ruch:</span>
                                                <span className="examples">away, back, forward, home</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Wyrażenia:</span>
                                                <span className="examples">in the room, at school, on the table</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>🏠 Określanie lokalizacji</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"The children are playing <em>outside</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Dzieci bawią się na zewnątrz.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"Your keys are <em>here</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Twoje klucze są tutaj.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"I looked <em>everywhere</em> for my phone."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Szukałem telefonu wszędzie.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>🧭 Kierunki i ruch</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"Please come <em>in</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Proszę, wejdź do środka.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"He went <em>away</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Odszedł.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"Let's go <em>home</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Chodźmy do domu.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>⏰ Przysłówki czasu (Adverbs of Time)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Charakterystyka:</h5>
                                        <ul>
                                            <li>Odpowiadają na pytanie WHEN? (kiedy?)</li>
                                            <li>Określają czas działania</li>
                                            <li>Mogą być pojedynczymi słowami lub wyrażeniami</li>
                                            <li>Często na początku lub końcu zdania</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Najczęstsze przysłówki czasu:</h5>
                                        <div className="categories-grid">
                                            <div className="category">
                                                <span className="category-name">Określone:</span>
                                                <span className="examples">now, then, today, yesterday</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Nieokreślone:</span>
                                                <span className="examples">soon, later, recently, already</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Czas trwania:</span>
                                                <span className="examples">still, yet, always, never</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Części dnia:</span>
                                                <span className="examples">tomorrow, tonight, this morning</span>
                                            </div>
                                            <div className="category">
                                                <span className="category-name">Wyrażenia:</span>
                                                <span className="examples">last week, next month, in 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>📅 Określony czas</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"<em>Yesterday</em>, I visited my grandmother."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Wczoraj odwiedziłem babcię.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"I will call you <em>tomorrow</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Zadzwonię do ciebie jutro.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"We met <em>last year</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Poznaliśmy się w zeszłym roku.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>⏳ Czas względny</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"I have <em>already</em> finished."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Już skończyłem.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"She hasn't arrived <em>yet</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Ona jeszcze nie przyjechała.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"I'm <em>still</em> waiting."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Wciąż czekam.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>🔄 Przysłówki częstotliwości (Adverbs of Frequency)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Charakterystyka:</h5>
                                        <ul>
                                            <li>Odpowiadają na pytanie HOW OFTEN? (jak często?)</li>
                                            <li>Określają regularność działania</li>
                                            <li>Zwykle przed głównym czasownikiem</li>
                                            <li>Po czasowniku "be"</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Skala częstotliwości:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>always</em></span>
                                                <span className="plural">zawsze (100%)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>usually</em></span>
                                                <span className="plural">zwykle (90%)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>often</em></span>
                                                <span className="plural">często (70%)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>sometimes</em></span>
                                                <span className="plural">czasami (50%)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>rarely</em></span>
                                                <span className="plural">rzadko (20%)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>never</em></span>
                                                <span className="plural">nigdy (0%)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>📊 Regularne nawyki</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"I <em>always</em> drink coffee in the morning."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Zawsze piję kawę rano.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"She <em>usually</em> goes to bed early."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Zwykle chodzi spać wcześnie.</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"They <em>never</em> eat meat."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Nigdy nie jedzą mięsa.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>🎯 Pozycja w zdaniu</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"He is <em>always</em> late."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Po czasowniku "be"</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"I <em>often</em> visit my parents."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Przed głównym czasownikiem</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"We <em>sometimes</em> go to the cinema."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">Przed głównym czasownikiem</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Tworzenie przysłówków od przymiotników - szczegółowe zasady</h4>

                        <div className="plural-categories">
                            <div className="plural-category">
                                <h5>➕ Podstawowe zasady tworzenia</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">Przymiotnik + -ly</span>
                                        <span className="meaning">quick → quickly</span>
                                        <span className="example">"She runs <em>quickly</em>."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">-y → -ily</span>
                                        <span className="meaning">happy → happily</span>
                                        <span className="example">"They live <em>happily</em>."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">-le → -ly</span>
                                        <span className="meaning">simple → simply</span>
                                        <span className="example">"He explained it <em>simply</em>."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">-ic → -ically</span>
                                        <span className="meaning">basic → basically</span>
                                        <span className="example">"<em>Basically</em>, I agree with you."</span>
                                    </div>
                                </div>
                            </div>

                            <div className="plural-category">
                                <h5>⚠️ Wyjątki i formy nieregularne</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">good → well</span>
                                        <span className="meaning">(nie: goodly)</span>
                                        <span className="example">"She speaks English <em>well</em>."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">fast → fast</span>
                                        <span className="meaning">(ta sama forma)</span>
                                        <span className="example">"He runs <em>fast</em>."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">hard → hard</span>
                                        <span className="meaning">(ta sama forma)</span>
                                        <span className="example">"They work <em>hard</em>."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">late → late</span>
                                        <span className="meaning">(ta sama forma)</span>
                                        <span className="example">"She arrived <em>late</em>."</span>
                                    </div>
                                </div>
                            </div>

                            <div className="plural-category">
                                <h5>🔍 Przysłówki z podwójnymi formami</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">hard (ciężko) vs hardly (prawie wcale)</span>
                                        <span className="meaning">różne znaczenia!</span>
                                        <span className="example">"I work <em>hard</em>." vs "I <em>hardly</em> work."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">late (późno) vs lately (ostatnio)</span>
                                        <span className="meaning">różne znaczenia!</span>
                                        <span className="example">"He came <em>late</em>." vs "I haven't seen him <em>lately</em>."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">near (blisko) vs nearly (prawie)</span>
                                        <span className="meaning">różne znaczenia!</span>
                                        <span className="example">"Sit <em>near</em> me." vs "I <em>nearly</em> fell."</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Określ rodzaj przysłówka w zdaniu:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> She sings beautifully.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="adverb1" value="a"/>
                                                <span>sposobu</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adverb1" value="b"/>
                                                <span>miejsca</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adverb1" value="c"/>
                                                <span>czasu</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> I usually have breakfast at 7 AM.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="adverb2" value="a"/>
                                                <span>sposobu</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adverb2" value="b"/>
                                                <span>częstotliwości</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adverb2" value="c"/>
                                                <span>miejsca</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> They will meet tomorrow.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="adverb3" value="a"/>
                                                <span>czasu</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adverb3" value="b"/>
                                                <span>sposobu</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adverb3" value="c"/>
                                                <span>miejsca</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> Please wait here.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="adverb4" value="a"/>
                                                <span>miejsca</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adverb4" value="b"/>
                                                <span>czasu</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adverb4" value="c"/>
                                                <span>sposobu</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> He works hard every day.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="adverb5" value="a"/>
                                                <span>sposobu</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adverb5" value="b"/>
                                                <span>czasu</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="adverb5" value="c"/>
                                                <span>częstotliwości</span>
                                            </label>
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
        },
        {
            id: 'umiejscowienie-przyslowkow',
            title: 'Umiejscowienie przysłówków',
            excerpt: 'Gdzie w zdaniu umieścić przysłówek? Poznaj zasady pozycji przysłówków w zdaniu.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Umiejscowienie przysłówków - kompletny przewodnik 📍</h3>
                        <p className="muted">Od podstawowych zasad po zaawansowane przypadki - wszystko o pozycji przysłówków w zdaniu</p>

                        <div className="noun-types-grid-expanded">
                            <div className="noun-type-main">
                                <h4>🎭 Przysłówki sposobu (Adverbs of Manner)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Podstawowe pozycje:</h5>
                                        <ul>
                                            <li><strong>Po czasowniku:</strong> She sings beautifully.</li>
                                            <li><strong>Po przedmiocie:</strong> He drives the car carefully.</li>
                                            <li><strong>Przed czasownikiem:</strong> He quickly finished.</li>
                                            <li><strong>Na początku zdania:</strong> Slowly, she opened the door.</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Szczegółowe zasady:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Krótkie przysłówki</em></span>
                                                <span className="plural">często przed czasownikiem</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Długie przysłówki</em></span>
                                                <span className="plural">często po czasowniku</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Akcent emocjonalny</em></span>
                                                <span className="plural">na początku zdania</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Zdania z przedmiotem</em></span>
                                                <span className="plural">po przedmiocie</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>✅ Poprawne pozycje</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"She speaks English <em>fluently</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">po przedmiocie</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"He <em>quickly</em> answered the question."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">przed czasownikiem</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"<em>Carefully</em>, she handled the antique vase."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">na początku (akcent)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>❌ Typowe błędy</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"She speaks <em>fluently</em> English."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">ŹLE! między czasownikiem a przedmiotem</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"He answered <em>quickly</em> the question."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">ŹLE! między czasownikiem a przedmiotem</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"She <em>beautifully</em> sings."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">ŹLE! (chyba że w poezji)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>🔄 Przysłówki częstotliwości (Adverbs of Frequency)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Kluczowe zasady:</h5>
                                        <ul>
                                            <li><strong>Przed głównym czasownikiem:</strong> I often go...</li>
                                            <li><strong>Po czasowniku "be":</strong> She is always...</li>
                                            <li><strong>Po czasownikach posiłkowych:</strong> I have never seen...</li>
                                            <li><strong>W pytaniach:</strong> Do you usually...?</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Pozycje w różnych konstrukcjach:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Present Simple</em></span>
                                                <span className="plural">I always work hard.</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Past Simple</em></span>
                                                <span className="plural">She never called me.</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Future Simple</em></span>
                                                <span className="plural">They will probably come.</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Present Perfect</em></span>
                                                <span className="plural">I have often visited Paris.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>📊 Z czasownikiem "be"</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"She is <em>always</em> late."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">PO czasowniku "be"</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"They are <em>usually</em> happy."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">PO czasowniku "be"</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"I am <em>never</em> bored."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">PO czasowniku "be"</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>⚡ Z innymi czasownikami</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"I <em>often</em> go to the cinema."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">PRZED głównym czasownikiem</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"She <em>sometimes</em> cooks dinner."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">PRZED głównym czasownikiem</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"We <em>rarely</em> eat out."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">PRZED głównym czasownikiem</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>📍 Przysłówki miejsca i czasu</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Podstawowe pozycje:</h5>
                                        <ul>
                                            <li><strong>Przysłówki miejsca:</strong> zwykle na końcu zdania</li>
                                            <li><strong>Przysłówki czasu:</strong> na początku lub końcu zdania</li>
                                            <li><strong>Kolejność:</strong> sposób → miejsce → czas</li>
                                            <li><strong>Wyrażenia czasowe:</strong> często na początku</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Kolejność w zdaniu:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Sposób + Miejsce</em></span>
                                                <span className="plural">worked hard at home</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Miejsce + Czas</em></span>
                                                <span className="plural">in Paris last year</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Sposób + Miejsce + Czas</em></span>
                                                <span className="plural">sang beautifully there yesterday</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Wyrażenia czasowe</em></span>
                                                <span className="plural">at the beginning</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>🏠 Przysłówki miejsca</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"The children are playing <em>outside</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">na końcu zdania</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"I left my keys <em>there</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">na końcu zdania</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"We looked <em>everywhere</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">na końcu zdania</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>⏰ Przysłówki czasu</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"<em>Yesterday</em>, I met my friend."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">na początku zdania</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"I will call you <em>tomorrow</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">na końcu zdania</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"We are leaving <em>soon</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">na końcu zdania</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Kolejność wielu przysłówków - szczegółowy system</h4>

                        <div className="comparison-table-expanded">
                            <table>
                                <thead>
                                <tr>
                                    <th>Kolejność</th>
                                    <th>Typ przysłówka</th>
                                    <th>Przykład</th>
                                    <th>Uwagi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><strong>Sposób (Manner)</strong></td>
                                    <td>beautifully, carefully, quickly</td>
                                    <td>Jak coś jest robione</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><strong>Miejsce (Place)</strong></td>
                                    <td>here, there, at home, in the park</td>
                                    <td>Gdzie coś się dzieje</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><strong>Częstotliwość (Frequency)</strong></td>
                                    <td>often, sometimes, never</td>
                                    <td>Jak często (w środku zdania)</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><strong>Czas (Time)</strong></td>
                                    <td>yesterday, today, soon, now</td>
                                    <td>Kiedy (na początku lub końcu)</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><strong>Cel (Purpose)</strong></td>
                                    <td>to improve, for fun</td>
                                    <td>Po co (na końcu)</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="dual-nouns">
                            <div className="dual-noun-category">
                                <h5>✅ Poprawne przykłady kolejności</h5>
                                <div className="dual-examples">
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Sposób + Miejsce</span>
                                            <span className="example">"She sang <em>beautifully at the concert</em>."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Sposób + Czas</span>
                                            <span className="example">"He worked <em>hard yesterday</em>."</span>
                                        </div>
                                    </div>
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Sposób + Miejsce + Czas</span>
                                            <span className="example">"They danced <em>happily in the park all night</em>."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Miejsce + Czas</span>
                                            <span className="example">"We met <em>in London last year</em>."</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dual-noun-category">
                                <h5>❌ Typowe błędy w kolejności</h5>
                                <div className="dual-examples">
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">ŹLE: Czas przed sposobem</span>
                                            <span className="example">"She yesterday sang beautifully."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">POPRAWNIE:</span>
                                            <span className="example">"She sang beautifully yesterday."</span>
                                        </div>
                                    </div>
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">ŹLE: Miejsce przed sposobem</span>
                                            <span className="example">"He in the office works hard."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">POPRAWNIE:</span>
                                            <span className="example">"He works hard in the office."</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Najczęstsze błędy - polskie naleciałości</h4>

                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>❌ Błędne pozycje przysłówków:</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="polish">Ona mówi płynnie po angielsku.</span>
                                        <span className="incorrect">She speaks fluently English.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">She speaks English fluently.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">On zawsze jest spóźniony.</span>
                                        <span className="incorrect">He always is late.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">He is always late.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Wczoraj poszedłem do kina.</span>
                                        <span className="incorrect">I went to the cinema yesterday.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I went to the cinema yesterday. (poprawne!)<br/>Lub: Yesterday, I went to the cinema.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Ona pięknie śpiewa.</span>
                                        <span className="incorrect">She beautifully sings.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">She sings beautifully.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Często chodzę na spacery.</span>
                                        <span className="incorrect">I go often for walks.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I often go for walks.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">On szybko odpowiedział.</span>
                                        <span className="incorrect">He answered quickly.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">He answered quickly. (poprawne!)<br/>Lub: He quickly answered.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Złote zasady pozycji przysłówków:</h5>
                                <div className="measurement-examples">
                                    <div className="measurement">
                                        <span className="phrase">Częstotliwość z "be"</span>
                                        <span className="meaning">PO czasowniku: She is always...</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">Częstotliwość z innymi czasownikami</span>
                                        <span className="meaning">PRZED czasownikiem: I often go...</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">Sposób z przedmiotem</span>
                                        <span className="meaning">PO przedmiocie: She speaks English fluently</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">Kolejność wielu przysłówków</span>
                                        <span className="meaning">SPOSÓB → MIEJSCE → CZAS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz zdanie z poprawną pozycją przysłówka:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> Gdzie powinien stać przysłówek "always"?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="position1" value="a"/>
                                                <span>She always is happy.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="position1" value="b"/>
                                                <span>She is always happy.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="position1" value="c"/>
                                                <span>Always she is happy.</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> Gdzie powinien stać przysłówek "fluently"?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="position2" value="a"/>
                                                <span>She speaks fluently English.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="position2" value="b"/>
                                                <span>She speaks English fluently.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="position2" value="c"/>
                                                <span>She fluently speaks English.</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> Gdzie powinien stać przysłówek "often"?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="position3" value="a"/>
                                                <span>He is often late.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="position3" value="b"/>
                                                <span>He often is late.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="position3" value="c"/>
                                                <span>Often he is late.</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> Gdzie powinien stać przysłówek "never"?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="position4" value="a"/>
                                                <span>I never have been to Paris.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="position4" value="b"/>
                                                <span>I have never been to Paris.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="position4" value="c"/>
                                                <span>I have been never to Paris.</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> Gdzie powinien stać przysłówek "yesterday"?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="position5" value="a"/>
                                                <span>I yesterday went shopping.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="position5" value="b"/>
                                                <span>I went shopping yesterday.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="position5" value="c"/>
                                                <span>Yesterday I went shopping.</span>
                                            </label>
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
    zaimki: [
        {
            id: 'zaimki-osobowe',
            title: 'Zaimki osobowe',
            excerpt: 'I/you/he/she/it/we/they - podmiot i dopełnienie w zdaniu.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Zaimki osobowe - kompletny przewodnik 👤</h3>
                        <p className="muted">Od podstawowych form po zaawansowane użycie - wszystko o zaimkach osobowych jako podmiot i dopełnienie</p>

                        <div className="comparison-table-expanded">
                            <table>
                                <thead>
                                <tr>
                                    <th>Osoba</th>
                                    <th>Zaimek osobowy (podmiot)</th>
                                    <th>Przykłady</th>
                                    <th>Zaimek osobowy (dopełnienie)</th>
                                    <th>Przykłady</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><strong>1 os. l.poj.</strong></td>
                                    <td className="correct"><strong>I</strong></td>
                                    <td>"<em>I</em> like coffee."</td>
                                    <td className="correct"><strong>me</strong></td>
                                    <td>"He called <em>me</em>."</td>
                                </tr>
                                <tr>
                                    <td><strong>2 os. l.poj.</strong></td>
                                    <td className="correct"><strong>you</strong></td>
                                    <td>"<em>You</em> are nice."</td>
                                    <td className="correct"><strong>you</strong></td>
                                    <td>"I see <em>you</em>."</td>
                                </tr>
                                <tr>
                                    <td><strong>3 os. l.poj. (m)</strong></td>
                                    <td className="correct"><strong>he</strong></td>
                                    <td>"<em>He</em> is a doctor."</td>
                                    <td className="correct"><strong>him</strong></td>
                                    <td>"She loves <em>him</em>."</td>
                                </tr>
                                <tr>
                                    <td><strong>3 os. l.poj. (ż)</strong></td>
                                    <td className="correct"><strong>she</strong></td>
                                    <td>"<em>She</em> sings well."</td>
                                    <td className="correct"><strong>her</strong></td>
                                    <td>"I know <em>her</em>."</td>
                                </tr>
                                <tr>
                                    <td><strong>3 os. l.poj. (n)</strong></td>
                                    <td className="correct"><strong>it</strong></td>
                                    <td>"<em>It</em> is raining."</td>
                                    <td className="correct"><strong>it</strong></td>
                                    <td>"I bought <em>it</em>."</td>
                                </tr>
                                <tr>
                                    <td><strong>1 os. l.mn.</strong></td>
                                    <td className="correct"><strong>we</strong></td>
                                    <td>"<em>We</em> are students."</td>
                                    <td className="correct"><strong>us</strong></td>
                                    <td>"They invited <em>us</em>."</td>
                                </tr>
                                <tr>
                                    <td><strong>2 os. l.mn.</strong></td>
                                    <td className="correct"><strong>you</strong></td>
                                    <td>"<em>You</em> are friends."</td>
                                    <td className="correct"><strong>you</strong></td>
                                    <td>"I help <em>you</em>."</td>
                                </tr>
                                <tr>
                                    <td><strong>3 os. l.mn.</strong></td>
                                    <td className="correct"><strong>they</strong></td>
                                    <td>"<em>They</em> work here."</td>
                                    <td className="correct"><strong>them</strong></td>
                                    <td>"I met <em>them</em>."</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="noun-types-grid-expanded">
                            <div className="noun-type-main">
                                <h4>🎯 Zaimek osobowy - podmiot (Subject Pronouns)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Charakterystyka:</h5>
                                        <ul>
                                            <li>Występują jako podmiot zdania</li>
                                            <li>Wykonują akcję w zdaniu</li>
                                            <li>Zawsze na początku zdania twierdzącego</li>
                                            <li>Od nich zaczynamy pytania</li>
                                            <li>Nie mogą być pominięte (w przeciwieństwie do polskiego)</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Szczegółowe użycie:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>I</em> work every day.</span>
                                                <span className="plural">(JA pracuję - podmiot)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>You</em> should study more.</span>
                                                <span className="plural">(TY powinieneś - podmiot)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>He</em> plays football.</span>
                                                <span className="plural">(ON gra - podmiot)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>We</em> are going now.</span>
                                                <span className="plural">(MY idziemy - podmiot)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>🎯 Zaimek osobowy - dopełnienie (Object Pronouns)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Charakterystyka:</h5>
                                        <ul>
                                            <li>Występują jako dopełnienie zdania</li>
                                            <li>Odbierają akcję w zdaniu</li>
                                            <li>Po czasownikach i przyimkach</li>
                                            <li>Odpowiadają na pytania: kogo? co? komu? czemu?</li>
                                            <li>Używane po przyimkach: to, for, with, about, etc.</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Szczegółowe użycie:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular">Can you help <em>me</em>?</span>
                                                <span className="plural">(pomóc KOMU? - mnie)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">I'm waiting for <em>her</em>.</span>
                                                <span className="plural">(czekam na KOGO? - na nią)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">Give it to <em>us</em>.</span>
                                                <span className="plural">(dać KOMU? - nam)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">She is talking about <em>them</em>.</span>
                                                <span className="plural">(mówi o KIM? - o nich)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Najczęstsze błędy - zaimki osobowe</h4>

                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>❌ Mieszanie podmiotu i dopełnienia:</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="polish">Ona i ja poszłyśmy do kina.</span>
                                        <span className="incorrect">Her and me went to the cinema.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">She and I went to the cinema.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">To jest dla mnie i dla niej.</span>
                                        <span className="incorrect">This is for I and she.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">This is for me and her.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">On dał to mnie.</span>
                                        <span className="incorrect">He gave it to I.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">He gave it to me.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Widziałem ich wczoraj.</span>
                                        <span className="incorrect">I saw they yesterday.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I saw them yesterday.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Praktyczna zasada:</h5>
                                <p><strong>Podmiot</strong> wykonuje akcję, <strong>dopełnienie</strong> odbiera akcję.</p>
                                <div className="measurement-examples">
                                    <div className="measurement">
                                        <span className="phrase"><em>I</em> called him.</span>
                                        <span className="meaning">JA zadzwoniłem (podmiot)</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">He called <em>me</em>.</span>
                                        <span className="meaning">do MNIE (dopełnienie)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawny zaimek osobowy:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> ________ are my best friends.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="pronoun1" value="a"/>
                                                <span>They</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pronoun1" value="b"/>
                                                <span>Them</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pronoun1" value="c"/>
                                                <span>Their</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> Can you help ________ with this homework?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="pronoun2" value="a"/>
                                                <span>I</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pronoun2" value="b"/>
                                                <span>me</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pronoun2" value="c"/>
                                                <span>my</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> ________ is raining outside.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="pronoun3" value="a"/>
                                                <span>It</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pronoun3" value="b"/>
                                                <span>He</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pronoun3" value="c"/>
                                                <span>She</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> Please give the book to ________.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="pronoun4" value="a"/>
                                                <span>she</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pronoun4" value="b"/>
                                                <span>her</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pronoun4" value="c"/>
                                                <span>hers</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> ________ and I went to the cinema.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="pronoun5" value="a"/>
                                                <span>He</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pronoun5" value="b"/>
                                                <span>Him</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pronoun5" value="c"/>
                                                <span>His</span>
                                            </label>
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
        },
        {
            id: 'zaimki-dzierzawcze',
            title: 'Zaimki dzierżawcze',
            excerpt: 'My/your/his/her/its/our/their - przymiotniki i zaimki dzierżawcze.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Zaimki dzierżawcze - kompletny przewodnik 🔑</h3>
                        <p className="muted">Od podstawowych form po zaawansowane różnice - wszystko o wyrażaniu przynależności</p>

                        <div className="comparison-table-expanded">
                            <table>
                                <thead>
                                <tr>
                                    <th>Osoba</th>
                                    <th>Przymiotnik dzierżawczy</th>
                                    <th>Przykłady</th>
                                    <th>Zaimek dzierżawczy</th>
                                    <th>Przykłady</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><strong>1 os. l.poj.</strong></td>
                                    <td className="correct"><strong>my</strong></td>
                                    <td>"This is <em>my</em> book."</td>
                                    <td className="correct"><strong>mine</strong></td>
                                    <td>"This book is <em>mine</em>."</td>
                                </tr>
                                <tr>
                                    <td><strong>2 os. l.poj.</strong></td>
                                    <td className="correct"><strong>your</strong></td>
                                    <td>"Where is <em>your</em> car?"</td>
                                    <td className="correct"><strong>yours</strong></td>
                                    <td>"Is this car <em>yours</em>?"</td>
                                </tr>
                                <tr>
                                    <td><strong>3 os. l.poj. (m)</strong></td>
                                    <td className="correct"><strong>his</strong></td>
                                    <td>"That is <em>his</em> house."</td>
                                    <td className="correct"><strong>his</strong></td>
                                    <td>"That house is <em>his</em>."</td>
                                </tr>
                                <tr>
                                    <td><strong>3 os. l.poj. (ż)</strong></td>
                                    <td className="correct"><strong>her</strong></td>
                                    <td>"I like <em>her</em> dress."</td>
                                    <td className="correct"><strong>hers</strong></td>
                                    <td>"This dress is <em>hers</em>."</td>
                                </tr>
                                <tr>
                                    <td><strong>3 os. l.poj. (n)</strong></td>
                                    <td className="correct"><strong>its</strong></td>
                                    <td>"The dog wagged <em>its</em> tail."</td>
                                    <td className="correct"><strong>-</strong></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td><strong>1 os. l.mn.</strong></td>
                                    <td className="correct"><strong>our</strong></td>
                                    <td>"This is <em>our</em> school."</td>
                                    <td className="correct"><strong>ours</strong></td>
                                    <td>"This school is <em>ours</em>."</td>
                                </tr>
                                <tr>
                                    <td><strong>2 os. l.mn.</strong></td>
                                    <td className="correct"><strong>your</strong></td>
                                    <td>"Are these <em>your</em> keys?"</td>
                                    <td className="correct"><strong>yours</strong></td>
                                    <td>"Are these keys <em>yours</em>?"</td>
                                </tr>
                                <tr>
                                    <td><strong>3 os. l.mn.</strong></td>
                                    <td className="correct"><strong>their</strong></td>
                                    <td>"I know <em>their</em> parents."</td>
                                    <td className="correct"><strong>theirs</strong></td>
                                    <td>"Those parents are <em>theirs</em>."</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="noun-types-grid-expanded">
                            <div className="noun-type-main">
                                <h4>🏠 Przymiotnik dzierżawczy (Possessive Adjectives)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Kluczowe zasady:</h5>
                                        <ul>
                                            <li>Zawsze występują z rzeczownikiem</li>
                                            <li>Stoją bezpośrednio przed rzeczownikiem</li>
                                            <li>Nie zmieniają formy dla liczby mnogiej</li>
                                            <li>Określają przynależność</li>
                                            <li>Odpowiadają na pytanie: czyj? czyja? czyje?</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Szczegółowe użycie:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>My</em> brother is tall.</span>
                                                <span className="plural">(mój brat - z rzeczownikiem)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Your</em> friends are nice.</span>
                                                <span className="plural">(twoi przyjaciele - z rzeczownikiem)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Our</em> house is big.</span>
                                                <span className="plural">(nasz dom - z rzeczownikiem)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Their</em> car is new.</span>
                                                <span className="plural">(ich samochód - z rzeczownikiem)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>🔑 Zaimek dzierżawczy (Possessive Pronouns)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Kluczowe zasady:</h5>
                                        <ul>
                                            <li>Stoją samodzielnie (bez rzeczownika)</li>
                                            <li>Zastępują przymiotnik dzierżawczy + rzeczownik</li>
                                            <li>Kończą się na -s (oprócz mine i his)</li>
                                            <li>Używane, aby uniknąć powtórzeń</li>
                                            <li>Odpowiadają na pytanie: czyje?</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Szczegółowe użycie:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular">This book is <em>mine</em>.</span>
                                                <span className="plural">(moja - zamiast 'my book')</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">Is this pen <em>yours</em>?</span>
                                                <span className="plural">(twój - zamiast 'your pen')</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">The red house is <em>ours</em>.</span>
                                                <span className="plural">(nasz - zamiast 'our house')</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">These keys are <em>theirs</em>.</span>
                                                <span className="plural">(ich - zamiast 'their keys')</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Specjalne przypadki i wyjątki</h4>

                        <div className="plural-categories">
                            <div className="plural-category">
                                <h5>⚠️ Its vs It's</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">its</span>
                                        <span className="meaning">przymiotnik dzierżawczy</span>
                                        <span className="example">"The cat licked <em>its</em> paw."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">it's</span>
                                        <span className="meaning">skrót od 'it is' lub 'it has'</span>
                                        <span className="example">"<em>It's</em> raining today."</span>
                                    </div>
                                </div>
                            </div>

                            <div className="plural-category">
                                <h5>🎭 Whose vs Who's</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">whose</span>
                                        <span className="meaning">zaimek dzierżawczy pytający</span>
                                        <span className="example">"<em>Whose</em> book is this?"</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">who's</span>
                                        <span className="meaning">skrót od 'who is' lub 'who has'</span>
                                        <span className="example">"<em>Who's</em> coming to the party?"</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawny zaimek dzierżawczy:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> This is ________ house.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="possessive1" value="a"/>
                                                <span>they</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive1" value="b"/>
                                                <span>their</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive1" value="c"/>
                                                <span>theirs</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> Is this pen ________?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="possessive2" value="a"/>
                                                <span>your</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive2" value="b"/>
                                                <span>yours</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive2" value="c"/>
                                                <span>you</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> That car is ________.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="possessive3" value="a"/>
                                                <span>her</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive3" value="b"/>
                                                <span>hers</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive3" value="c"/>
                                                <span>she</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> ________ brother is a doctor.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="possessive4" value="a"/>
                                                <span>My</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive4" value="b"/>
                                                <span>Mine</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive4" value="c"/>
                                                <span>I</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> These books are ________.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="possessive5" value="a"/>
                                                <span>our</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive5" value="b"/>
                                                <span>ours</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="possessive5" value="c"/>
                                                <span>us</span>
                                            </label>
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
        },
        {
            id: 'zaimki-wskazujace',
            title: 'Zaimki wskazujące',
            excerpt: 'This/that/these/those - wskazywanie osób, przedmiotów i idei.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Zaimki wskazujące - kompletny przewodnik 👉</h3>
                        <p className="muted">Od podstawowego rozróżnienia po zaawansowane użycie - wszystko o this, that, these, those</p>

                        <div className="comparison-table-expanded">
                            <table>
                                <thead>
                                <tr>
                                    <th>Zaimek</th>
                                    <th>Liczba</th>
                                    <th>Odległość</th>
                                    <th>Tłumaczenie</th>
                                    <th>Przykłady</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="correct"><strong>this</strong></td>
                                    <td>pojedyncza</td>
                                    <td>blisko</td>
                                    <td>ten/ta/to</td>
                                    <td>"<em>This</em> is my phone."</td>
                                </tr>
                                <tr>
                                    <td className="correct"><strong>that</strong></td>
                                    <td>pojedyncza</td>
                                    <td>daleko</td>
                                    <td>tamten/tamta/tamto</td>
                                    <td>"<em>That</em> is the Eiffel Tower."</td>
                                </tr>
                                <tr>
                                    <td className="correct"><strong>these</strong></td>
                                    <td>mnoga</td>
                                    <td>blisko</td>
                                    <td>ci/te</td>
                                    <td>"<em>These</em> are my keys."</td>
                                </tr>
                                <tr>
                                    <td className="correct"><strong>those</strong></td>
                                    <td>mnoga</td>
                                    <td>daleko</td>
                                    <td>tamci/tamte</td>
                                    <td>"<em>Those</em> are my parents."</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="noun-types-grid-expanded">
                            <div className="noun-type-main">
                                <h4>📍 Wskazywanie w przestrzeni</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Zasady przestrzenne:</h5>
                                        <ul>
                                            <li><strong>This</strong> - w zasięgu ręki mówcy</li>
                                            <li><strong>That</strong> - poza zasięgiem ręki mówcy</li>
                                            <li><strong>These</strong> - wiele przedmiotów blisko</li>
                                            <li><strong>Those</strong> - wiele przedmiotów daleko</li>
                                            <li>Odległość jest względna i subiektywna</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Przykłady przestrzenne:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular">"<em>This</em> pen in my hand is blue."</span>
                                                <span className="plural">(blisko - w ręku)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">"<em>That</em> building across the street is old."</span>
                                                <span className="plural">(daleko - po drugiej stronie)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">"<em>These</em> books on my desk are interesting."</span>
                                                <span className="plural">(blisko - na biurku)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">"<em>Those</em> mountains in the distance are beautiful."</span>
                                                <span className="plural">(daleko - w oddali)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>⏰ Wskazywanie w czasie</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Zasady czasowe:</h5>
                                        <ul>
                                            <li><strong>This</strong> - teraźniejszość i bliska przyszłość</li>
                                            <li><strong>That</strong> - przeszłość i odległa przyszłość</li>
                                            <li><strong>These</strong> - obecny okres czasu</li>
                                            <li><strong>Those</strong> - miniony okres czasu</li>
                                            <li>Używane z wyrażeniami czasowymi</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Przykłady czasowe:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular">"<em>This</em> week is very busy."</span>
                                                <span className="plural">(obecny tydzień)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">"<em>That</em> day changed my life."</span>
                                                <span className="plural">(przeszły dzień)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">"<em>These</em> days I work a lot."</span>
                                                <span className="plural">(obecne dni)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">"In <em>those</em> days we were happy."</span>
                                                <span className="plural">(minione dni)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Zaimki wskazujące jako przymiotniki</h4>

                        <div className="plural-categories">
                            <div className="plural-category">
                                <h5>📝 Z pojedynczymi rzeczownikami</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">this + rzeczownik l.poj.</span>
                                        <span className="meaning">"<em>This book</em> is interesting."</span>
                                        <span className="example">(ta książka - blisko)</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">that + rzeczownik l.poj.</span>
                                        <span className="meaning">"Look at <em>that car</em>!"</span>
                                        <span className="example">(tamten samochód - daleko)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="plural-category">
                                <h5>📝 Z mnogimi rzeczownikami</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">these + rzeczownik l.mn.</span>
                                        <span className="meaning">"<em>These apples</em> are delicious."</span>
                                        <span className="example">(te jabłka - blisko)</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">those + rzeczownik l.mn.</span>
                                        <span className="meaning">"I want <em>those shoes</em>."</span>
                                        <span className="example">(tamte buty - daleko)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="plural-category">
                                <h5>🎨 Z przymiotnikami</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">this/that + przymiotnik</span>
                                        <span className="meaning">"<em>This red car</em> is mine."</span>
                                        <span className="example">(ten czerwony samochód)</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">these/those + przymiotnik</span>
                                        <span className="meaning">"<em>Those old books</em> are valuable."</span>
                                        <span className="example">(tamte stare książki)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawny zaimek wskazujący:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> Look at ________ birds in the tree!</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="demonstrative1" value="a"/>
                                                <span>this</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="demonstrative1" value="b"/>
                                                <span>that</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="demonstrative1" value="c"/>
                                                <span>those</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> ________ is my favorite book.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="demonstrative2" value="a"/>
                                                <span>This</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="demonstrative2" value="b"/>
                                                <span>These</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="demonstrative2" value="c"/>
                                                <span>Those</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> I don't like ________ shoes over there.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="demonstrative3" value="a"/>
                                                <span>this</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="demonstrative3" value="b"/>
                                                <span>that</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="demonstrative3" value="c"/>
                                                <span>those</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> ________ flowers here are beautiful.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="demonstrative4" value="a"/>
                                                <span>This</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="demonstrative4" value="b"/>
                                                <span>These</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="demonstrative4" value="c"/>
                                                <span>That</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> What is ________ strange noise?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="demonstrative5" value="a"/>
                                                <span>this</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="demonstrative5" value="b"/>
                                                <span>that</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="demonstrative5" value="c"/>
                                                <span>these</span>
                                            </label>
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
        },
        {
            id: 'zaimki-wzgledne',
            title: 'Zaimki względne',
            excerpt: 'Who/which/that/whose - łączenie zdań i określanie relacji.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Zaimki względne - kompletny przewodnik 🔗</h3>
                        <p className="muted">Od podstawowych funkcji po zaawansowane konstrukcje - wszystko o who, which, that, whose, whom</p>

                        <div className="comparison-table-expanded">
                            <table>
                                <thead>
                                <tr>
                                    <th>Zaimek</th>
                                    <th>Użycie</th>
                                    <th>Funkcja</th>
                                    <th>Przykłady</th>
                                    <th>Uwagi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="correct"><strong>who</strong></td>
                                    <td>dla osób</td>
                                    <td>podmiot/dopełnienie</td>
                                    <td>"The woman <em>who</em> called..."</td>
                                    <td>nieformalne, powszechne</td>
                                </tr>
                                <tr>
                                    <td className="correct"><strong>whom</strong></td>
                                    <td>dla osób</td>
                                    <td>tylko dopełnienie</td>
                                    <td>"The person <em>whom</em> I met..."</td>
                                    <td>formalne, rzadkie</td>
                                </tr>
                                <tr>
                                    <td className="correct"><strong>which</strong></td>
                                    <td>dla rzeczy/zwierząt</td>
                                    <td>podmiot/dopełnienie</td>
                                    <td>"The book <em>which</em> is..."</td>
                                    <td>tylko dla nie-ludzi</td>
                                </tr>
                                <tr>
                                    <td className="correct"><strong>that</strong></td>
                                    <td>dla osób i rzeczy</td>
                                    <td>podmiot/dopełnienie</td>
                                    <td>"The car <em>that</em> I bought..."</td>
                                    <td>uniwersalne, nieformalne</td>
                                </tr>
                                <tr>
                                    <td className="correct"><strong>whose</strong></td>
                                    <td>dla osób i rzeczy</td>
                                    <td>przynależność</td>
                                    <td>"The man <em>whose</em> car..."</td>
                                    <td>określa posiadanie</td>
                                </tr>
                                <tr>
                                    <td className="correct"><strong>where</strong></td>
                                    <td>dla miejsc</td>
                                    <td>określa miejsce</td>
                                    <td>"The city <em>where</em> I was born"</td>
                                    <td>zastępuje 'in which'</td>
                                </tr>
                                <tr>
                                    <td className="correct"><strong>when</strong></td>
                                    <td>dla czasu</td>
                                    <td>określa czas</td>
                                    <td>"The day <em>when</em> we met"</td>
                                    <td>zastępuje 'on which'</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="noun-types-grid-expanded">
                            <div className="noun-type-main">
                                <h4>👤 WHO vs WHOM - szczegółowe różnice</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 WHO (podmiot):</h5>
                                        <ul>
                                            <li>Wykonuje akcję w zdaniu względnym</li>
                                            <li>Odpowiada na pytanie: kto?</li>
                                            <li>Używane w mowie potocznej</li>
                                            <li>Zastępuje he/she/they</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Przykłady WHO:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular">"The person <em>who</em> called you is my boss."</span>
                                                <span className="plural">(KTO zadzwonił? - podmiot)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">"She's the girl <em>who</em> won the competition."</span>
                                                <span className="plural">(KTO wygrał? - podmiot)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 WHOM (dopełnienie):</h5>
                                        <ul>
                                            <li>Odbiera akcję w zdaniu względnym</li>
                                            <li>Odpowiada na pytanie: kogo? komu?</li>
                                            <li>Używane w języku formalnym</li>
                                            <li>Zastępuje him/her/them</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Przykłady WHOM:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular">"The person <em>whom</em> you met is famous."</span>
                                                <span className="plural">(KOГО spotkałeś? - dopełnienie)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">"This is the candidate <em>whom</em> we selected."</span>
                                                <span className="plural">(KOГО wybraliśmy? - dopełnienie)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Zdania ograniczające vs nieograniczające</h4>

                        <div className="dual-nouns">
                            <div className="dual-noun-category">
                                <h5>🔒 Zdania ograniczające (Restrictive)</h5>
                                <div className="dual-examples">
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Bez przecinków</span>
                                            <span className="example">"The book <em>that</em> I'm reading is interesting."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Kluczowa informacja</span>
                                            <span className="example">Określa, KTÓRĄ książkę</span>
                                        </div>
                                    </div>
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Można użyć THAT</span>
                                            <span className="example">"The woman <em>who/that</em> lives here is nice."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Informacja konieczna</span>
                                            <span className="example">Bez niej zdanie traci sens</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dual-noun-category">
                                <h5>🔓 Zdania nieograniczające (Non-restrictive)</h5>
                                <div className="dual-examples">
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">Z przecinkami</span>
                                            <span className="example">"My car, <em>which</em> is red, is parked outside."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Dodatkowa informacja</span>
                                            <span className="example">Tylko która jest czerwona</span>
                                        </div>
                                    </div>
                                    <div className="dual-example">
                                        <div className="uncountable">
                                            <span className="meaning">NIE można użyć THAT</span>
                                            <span className="example">"Mr. Smith, <em>who</em> is my neighbor, is doctor."</span>
                                        </div>
                                        <div className="countable">
                                            <span className="meaning">Informacja dodatkowa</span>
                                            <span className="example">Można ją pominąć</span>
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
                                <h5>Wybierz poprawny zaimek względny:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> The woman ________ lives next door is a doctor.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="relative1" value="a"/>
                                                <span>which</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative1" value="b"/>
                                                <span>who</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative1" value="c"/>
                                                <span>whose</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative1" value="d"/>
                                                <span>whom</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> This is the book ________ I was telling you about.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="relative2" value="a"/>
                                                <span>who</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative2" value="b"/>
                                                <span>which</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative2" value="c"/>
                                                <span>whose</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative2" value="d"/>
                                                <span>whom</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> The man ________ car was stolen called the police.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="relative3" value="a"/>
                                                <span>who</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative3" value="b"/>
                                                <span>which</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative3" value="c"/>
                                                <span>whose</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative3" value="d"/>
                                                <span>whom</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> This is the hospital ________ I was born.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="relative4" value="a"/>
                                                <span>where</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative4" value="b"/>
                                                <span>which</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative4" value="c"/>
                                                <span>who</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative4" value="d"/>
                                                <span>whose</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> The person ________ you recommended was excellent.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="relative5" value="a"/>
                                                <span>who</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative5" value="b"/>
                                                <span>whom</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative5" value="c"/>
                                                <span>which</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative5" value="d"/>
                                                <span>whose</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> I remember the day ________ we first met.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="relative6" value="a"/>
                                                <span>where</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative6" value="b"/>
                                                <span>when</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative6" value="c"/>
                                                <span>which</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative6" value="d"/>
                                                <span>who</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> The movie ________ we saw yesterday was fantastic.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="relative7" value="a"/>
                                                <span>who</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative7" value="b"/>
                                                <span>which</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative7" value="c"/>
                                                <span>whose</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative7" value="d"/>
                                                <span>whom</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> The company ________ products I use is very reliable.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="relative8" value="a"/>
                                                <span>who</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative8" value="b"/>
                                                <span>which</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative8" value="c"/>
                                                <span>whose</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="relative8" value="d"/>
                                                <span>where</span>
                                            </label>
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
        },
        {
            id: 'zaimki-zwrotne',
            title: 'Zaimki zwrotne',
            excerpt: 'Myself/yourself/himself/herself - działania zwrotne i emfaza.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Zaimki zwrotne - kompletny przewodnik 🔄</h3>
                        <p className="muted">Od podstawowych form po zaawansowane użycie - wszystko o myself, yourself, themselves etc.</p>

                        <div className="comparison-table-expanded">
                            <table>
                                <thead>
                                <tr>
                                    <th>Osoba</th>
                                    <th>Zaimek zwrotny</th>
                                    <th>Użycie zwrotne</th>
                                    <th>Użycie emfatyczne</th>
                                    <th>Przykłady</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><strong>1 os. l.poj.</strong></td>
                                    <td className="correct"><strong>myself</strong></td>
                                    <td>I hurt myself.</td>
                                    <td>I myself saw it.</td>
                                    <td>"I taught <em>myself</em> English."</td>
                                </tr>
                                <tr>
                                    <td><strong>2 os. l.poj.</strong></td>
                                    <td className="correct"><strong>yourself</strong></td>
                                    <td>You see yourself.</td>
                                    <td>You yourself know.</td>
                                    <td>"You should be proud of <em>yourself</em>."</td>
                                </tr>
                                <tr>
                                    <td><strong>3 os. l.poj. (m)</strong></td>
                                    <td className="correct"><strong>himself</strong></td>
                                    <td>He cut himself.</td>
                                    <td>He himself said it.</td>
                                    <td>"He built the house <em>himself</em>."</td>
                                </tr>
                                <tr>
                                    <td><strong>3 os. l.poj. (ż)</strong></td>
                                    <td className="correct"><strong>herself</strong></td>
                                    <td>She dressed herself.</td>
                                    <td>She herself wrote it.</td>
                                    <td>"She bought <em>herself</em> a gift."</td>
                                </tr>
                                <tr>
                                    <td><strong>3 os. l.poj. (n)</strong></td>
                                    <td className="correct"><strong>itself</strong></td>
                                    <td>The cat washed itself.</td>
                                    <td>The device itself works.</td>
                                    <td>"The computer turned <em>itself</em> off."</td>
                                </tr>
                                <tr>
                                    <td><strong>1 os. l.mn.</strong></td>
                                    <td className="correct"><strong>ourselves</strong></td>
                                    <td>We enjoyed ourselves.</td>
                                    <td>We ourselves decided.</td>
                                    <td>"We prepared <em>ourselves</em> for the exam."</td>
                                </tr>
                                <tr>
                                    <td><strong>2 os. l.mn.</strong></td>
                                    <td className="correct"><strong>yourselves</strong></td>
                                    <td>You help yourselves.</td>
                                    <td>You yourselves saw it.</td>
                                    <td>"Please make <em>yourselves</em> at home."</td>
                                </tr>
                                <tr>
                                    <td><strong>3 os. l.mn.</strong></td>
                                    <td className="correct"><strong>themselves</strong></td>
                                    <td>They hurt themselves.</td>
                                    <td>They themselves know.</td>
                                    <td>"They organized the party <em>themselves</em>."</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="noun-types-grid-expanded">
                            <div className="noun-type-main">
                                <h4>🎯 Użycie zwrotne (Reflexive Use)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Kiedy używamy:</h5>
                                        <ul>
                                            <li>Gdy podmiot i dopełnienie są tą samą osobą</li>
                                            <li>Z czasownikami zwrotnymi: hurt, cut, teach, enjoy</li>
                                            <li>Po przyimkach: for, by, to, of</li>
                                            <li>Gdy akcja wraca do wykonawcy</li>
                                            <li>Z czasownikami codziennych czynności</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Przykłady użycia zwrotnego:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular">"I cut <em>myself</em> while cooking."</span>
                                                <span className="plural">(podmiot i dopełnienie to ta sama osoba)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">"She taught <em>herself</em> to play piano."</span>
                                                <span className="plural">(uczyła samą siebie)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">"We enjoyed <em>ourselves</em> at the party."</span>
                                                <span className="plural">(my sami się bawiliśmy)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">"He spoke to <em>himself</em>."</span>
                                                <span className="plural">(mówił do siebie)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>💪 Użycie emfatyczne (Emphatic Use)</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Kiedy używamy:</h5>
                                        <ul>
                                            <li>Dla podkreślenia, że ktoś zrobił coś SAM</li>
                                            <li>Dla wzmocnienia znaczenia</li>
                                            <li>Może stać w różnych pozycjach w zdaniu</li>
                                            <li>Często na końcu zdania</li>
                                            <li>Może być pomijalne bez zmiany sensu</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Przykłady użycia emfatycznego:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular">"I <em>myself</em> saw the accident."</span>
                                                <span className="plural">(ja SAM to widziałem - podkreślenie)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">"She made this cake <em>herself</em>."</span>
                                                <span className="plural">(ona SAMA zrobiła - bez pomocy)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">"The president <em>himself</em> attended."</span>
                                                <span className="plural">(SAM prezydent był obecny)</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular">"You should do it <em>yourself</em>."</span>
                                                <span className="plural">(ty SAM powinieneś to zrobić)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Częste błędy - zaimki zwrotne</h4>

                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>❌ Niepotrzebne użycie zaimków zwrotnych:</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="polish">Umyłem się rano.</span>
                                        <span className="incorrect">I washed myself in the morning.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I washed in the morning.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Ubrałem się szybko.</span>
                                        <span className="incorrect">I dressed myself quickly.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I dressed quickly.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Spotkamy się jutro.</span>
                                        <span className="incorrect">We will meet ourselves tomorrow.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">We will meet tomorrow.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Kiedy NIE używamy zaimków zwrotnych:</h5>
                                <div className="measurement-examples">
                                    <div className="measurement">
                                        <span className="phrase">Czynności codzienne</span>
                                        <span className="meaning">wash, dress, shave (chyba że specjalnie)</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">Czasowniki spotkania</span>
                                        <span className="meaning">meet, marry, divorce</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">Zmiana pozycji</span>
                                        <span className="meaning">stand up, sit down, wake up</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">Czynności koncentracji</span>
                                        <span className="meaning">concentrate, focus, relax</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawny zaimek zwrotny:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> She bought ________ a new dress.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="reflexive1" value="a"/>
                                                <span>her</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="reflexive1" value="b"/>
                                                <span>herself</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="reflexive1" value="c"/>
                                                <span>she</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> We enjoyed ________ at the party.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="reflexive2" value="a"/>
                                                <span>us</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="reflexive2" value="b"/>
                                                <span>ourselves</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="reflexive2" value="c"/>
                                                <span>our</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> He taught ________ to play guitar.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="reflexive3" value="a"/>
                                                <span>him</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="reflexive3" value="b"/>
                                                <span>himself</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="reflexive3" value="c"/>
                                                <span>his</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> I made this cake ________.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="reflexive4" value="a"/>
                                                <span>me</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="reflexive4" value="b"/>
                                                <span>myself</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="reflexive4" value="c"/>
                                                <span>my</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> The cat cleaned ________.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="reflexive5" value="a"/>
                                                <span>itself</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="reflexive5" value="b"/>
                                                <span>it</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="reflexive5" value="c"/>
                                                <span>its</span>
                                            </label>
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
    spojniki: [
        {
            id: 'spojniki-podstawowe',
            title: 'Spójniki podstawowe',
            excerpt: 'And, but, or, so, because - najczęściej używane spójniki i ich zastosowania.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Spójniki podstawowe - kompletny przewodnik 🔗</h3>
                        <p className="muted">Od podstawowych połączeń po zaawansowane użycie - wszystko o and, but, or, so, because</p>

                        <div className="noun-types-grid-expanded">
                            <div className="noun-type-main">
                                <h4>➕ AND - łączenie i dodawanie</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Główne funkcje:</h5>
                                        <ul>
                                            <li>Łączy podobne idee i informacje</li>
                                            <li>Dodaje kolejne elementy do listy</li>
                                            <li>Pokazuje sekwencję czasową</li>
                                            <li>Używany w wyliczeniach</li>
                                            <li>Tworzy spójne opowieści</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Szczegółowe użycie:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Łączenie rzeczowników</em></span>
                                                <span className="plural">"I like tea <em>and</em> coffee."</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Łączenie przymiotników</em></span>
                                                <span className="plural">"She is smart <em>and</em> beautiful."</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Sekwencja czasowa</em></span>
                                                <span className="plural">"We went to the park <em>and</em> played football."</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Wyliczenia</em></span>
                                                <span className="plural">"I need bread, milk, <em>and</em> eggs."</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>✅ Poprawne użycie AND</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"I work hard <em>and</em> I play hard."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(dwie podobne czynności)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"He opened the door <em>and</em> entered the room."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(sekwencja zdarzeń)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"The movie was long <em>and</em> boring."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(dwie cechy)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>⚠️ Przecinek przed AND</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"I like apples, oranges, <em>and</em> bananas."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(przecinek w wyliczeniach)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"She is tall, <em>and</em> she has blue eyes."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(przecinek między zdaniami)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"He works hard and plays hard."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(bez przecinka przy krótkich zdaniach)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>➖ BUT - kontrast i przeciwieństwo</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Główne funkcje:</h5>
                                        <ul>
                                            <li>Pokazuje kontrast między ideami</li>
                                            <li>Wprowadza niespodziewany zwrot</li>
                                            <li>Wyraża sprzeciw lub ograniczenie</li>
                                            <li>Łączy przeciwstawne stwierdzenia</li>
                                            <li>Często z przecinkiem przed</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Szczegółowe użycie:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Kontrast idei</em></span>
                                                <span className="plural">"I want to go, <em>but</em> I'm too tired."</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Przeciwstawne cechy</em></span>
                                                <span className="plural">"He's rich, <em>but</em> he's not happy."</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Niespodziewany zwrot</em></span>
                                                <span className="plural">"The food was expensive, <em>but</em> delicious."</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Wyrażenie sprzeciwu</em></span>
                                                <span className="plural">"I understand, <em>but</em> I don't agree."</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>✅ Różne rodzaje kontrastu</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"She is small <em>but</em> strong."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(kontrast fizyczny)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"I like coffee, <em>but</em> I prefer tea."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(kontrast preferencji)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"He studied hard, <em>but</em> he failed the exam."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(kontrast oczekiwań)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>🎯 BUT vs HOWEVER</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"I like coffee, <em>but</em> I don't drink it often."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(bardziej nieformalne)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"I like coffee. <em>However</em>, I don't drink it often."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(bardziej formalne)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"I like coffee; <em>however</em>, I don't drink it often."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(z średnikiem)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>🔀 OR - alternatywa i wybór</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Główne funkcje:</h5>
                                        <ul>
                                            <li>Pokazuje alternatywę lub wybór</li>
                                            <li>Wymienia możliwości</li>
                                            <li>Używany w pytaniach i ofertach</li>
                                            <li>Może wyrażać przybliżoną liczbę</li>
                                            <li>W połączeniu z "either"</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Szczegółowe użycie:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Pytania o wybór</em></span>
                                                <span className="plural">"Would you like tea <em>or</em> coffee?"</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Alternatywy czasowe</em></span>
                                                <span className="plural">"We can go today <em>or</em> tomorrow."</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Możliwości płatności</em></span>
                                                <span className="plural">"You can pay by cash <em>or</em> credit card."</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Przybliżone liczby</em></span>
                                                <span className="plural">"There were ten <em>or</em> twelve people."</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>✅ Różne rodzaje alternatyw</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"You can come with us <em>or</em> stay here."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(wybór między działaniami)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"Is it black <em>or</em> white?"</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(pytanie o cechę)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"Hurry up, <em>or</em> we'll be late."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(ostrzeżenie)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>⚠️ OR w zdaniach przeczących</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"I don't like tea <em>or</em> coffee."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(ani... ani...)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"She never drinks <em>or</em> smokes."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(ani... ani...)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"There isn't any milk <em>or</em> bread."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(ani... ani...)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Spójniki przyczynowo-skutkowe</h4>

                        <div className="plural-categories">
                            <div className="plural-category">
                                <h5>❓ BECAUSE - przyczyna i powód</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">Wyjaśnianie przyczyn</span>
                                        <span className="meaning">"I'm happy <em>because</em> it's Friday."</span>
                                        <span className="example">(ponieważ - powód)</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">Z "because of"</span>
                                        <span className="meaning">"We stayed home <em>because of</em> the rain."</span>
                                        <span className="example">(z powodu - z rzeczownikiem)</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">Odpowiadanie na pytania "why?"</span>
                                        <span className="meaning">"Why are you late?" "<em>Because</em> I missed the bus."</span>
                                        <span className="example">(krótka odpowiedź)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="plural-category">
                                <h5>🎯 SO - skutek i konsekwencja</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">Pokazywanie rezultatu</span>
                                        <span className="meaning">"It was raining, <em>so</em> we stayed home."</span>
                                        <span className="example">(więc - konsekwencja)</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">Logiczny ciąg zdarzeń</span>
                                        <span className="meaning">"I was hungry, <em>so</em> I made a sandwich."</span>
                                        <span className="example">(dlatego - naturalna kolejność)</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">Rezultat wysiłku</span>
                                        <span className="meaning">"She studied hard, <em>so</em> she passed the exam."</span>
                                        <span className="example">(w rezultacie - efekt)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="plural-category">
                                <h5>⚖️ BECAUSE vs SO - kluczowe różnice</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">BECAUSE + powód</span>
                                        <span className="meaning">"I'm tired <em>because</em> I didn't sleep well."</span>
                                        <span className="example">(przyczyna na drugim miejscu)</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">SO + skutek</span>
                                        <span className="meaning">"I didn't sleep well, <em>so</em> I'm tired."</span>
                                        <span className="example">(skutek na drugim miejscu)</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">Nie używamy razem!</span>
                                        <span className="meaning">❌ "Because I was late, so I missed the bus."</span>
                                        <span className="example">✓ "Because I was late, I missed the bus."</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Najczęstsze błędy - spójniki podstawowe</h4>

                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>❌ Typowe błędy w użyciu spójników:</h5>
                                <div className="mistake-list">
                                    <div className="mistake-item">
                                        <span className="polish">Lubię herbatę i kawę.</span>
                                        <span className="incorrect">I like tea and coffee.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I like tea and coffee. (poprawne!)</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Chcę iść, ale jestem zmęczony.</span>
                                        <span className="incorrect">I want to go but I'm tired.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I want to go, but I'm tired.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Ponieważ padało, więc zostaliśmy w domu.</span>
                                        <span className="incorrect">Because it was raining, so we stayed home.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Because it was raining, we stayed home.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Nie lubię herbaty ani kawy.</span>
                                        <span className="incorrect">I don't like tea and coffee.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I don't like tea or coffee.</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="polish">Ona jest nie tylko piękna, ale także mądra.</span>
                                        <span className="incorrect">She is not only beautiful but also intelligent.</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">She is not only beautiful but also intelligent. (poprawne!)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Złote zasady spójników:</h5>
                                <div className="measurement-examples">
                                    <div className="measurement">
                                        <span className="phrase">Przecinek przed BUT</span>
                                        <span className="meaning">zawsze w zdaniach złożonych</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">OR w przeczeniach</span>
                                        <span className="meaning">zamiast AND (ani... ani...)</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">BECAUSE i SO</span>
                                        <span className="meaning">nigdy razem w tym samym zdaniu</span>
                                    </div>
                                    <div className="measurement">
                                        <span className="phrase">AND w wyliczeniach</span>
                                        <span className="meaning">przecinek przed ostatnim elementem</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz właściwy spójnik:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> I like tea ________ coffee.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="conj1" value="a"/>
                                                <span>and</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="conj1" value="b"/>
                                                <span>but</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="conj1" value="c"/>
                                                <span>or</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> I want to go, ________ I'm too tired.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="conj2" value="a"/>
                                                <span>and</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="conj2" value="b"/>
                                                <span>but</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="conj2" value="c"/>
                                                <span>so</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> It was raining, ________ we stayed home.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="conj3" value="a"/>
                                                <span>because</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="conj3" value="b"/>
                                                <span>so</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="conj3" value="c"/>
                                                <span>or</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> Would you like tea ________ coffee?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="conj4" value="a"/>
                                                <span>and</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="conj4" value="b"/>
                                                <span>but</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="conj4" value="c"/>
                                                <span>or</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> I'm studying hard ________ I want to pass the exam.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="conj5" value="a"/>
                                                <span>because</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="conj5" value="b"/>
                                                <span>so</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="conj5" value="c"/>
                                                <span>but</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> She can speak English ________ French fluently.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="conj6" value="a"/>
                                                <span>and</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="conj6" value="b"/>
                                                <span>but</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="conj6" value="c"/>
                                                <span>or</span>
                                            </label>
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
        },
        {
            id: 'spojniki-zlozone',
            title: 'Spójniki złożone',
            excerpt: 'Either/or, neither/nor, both/and, not only/but also - zaawansowane konstrukcje.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Spójniki złożone - kompletny przewodnik 🎭</h3>
                        <p className="muted">Od podstawowych par po zaawansowane konstrukcje - wszystko o spójnikach korelacyjnych</p>

                        <div className="comparison-table-expanded">
                            <table>
                                <thead>
                                <tr>
                                    <th>Para spójników</th>
                                    <th>Znaczenie</th>
                                    <th>Użycie</th>
                                    <th>Przykłady</th>
                                    <th>Uwagi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="correct"><strong>either... or...</strong></td>
                                    <td>albo... albo...</td>
                                    <td>jedna z dwóch możliwości</td>
                                    <td>"You can have <em>either</em> tea <em>or</em> coffee."</td>
                                    <td>pozytywny wybór</td>
                                </tr>
                                <tr>
                                    <td className="correct"><strong>neither... nor...</strong></td>
                                    <td>ani... ani...</td>
                                    <td>żadna z możliwości</td>
                                    <td>"I like <em>neither</em> coffee <em>nor</em> tea."</td>
                                    <td>przeczenie obu</td>
                                </tr>
                                <tr>
                                    <td className="correct"><strong>both... and...</strong></td>
                                    <td>zarówno... jak i...</td>
                                    <td>obie możliwości</td>
                                    <td>"I like <em>both</em> tea <em>and</em> coffee."</td>
                                    <td>pozytywne obie</td>
                                </tr>
                                <tr>
                                    <td className="correct"><strong>not only... but also...</strong></td>
                                    <td>nie tylko... ale także...</td>
                                    <td>podkreślenie obu</td>
                                    <td>"She is <em>not only</em> smart <em>but also</em> kind."</td>
                                    <td>z naciskiem</td>
                                </tr>
                                <tr>
                                    <td className="correct"><strong>whether... or...</strong></td>
                                    <td>czy... czy...</td>
                                    <td>niezależnie od wyboru</td>
                                    <td>"<em>Whether</em> you go <em>or</em> stay, I'll support you."</td>
                                    <td>warunkowe</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="noun-types-grid-expanded">
                            <div className="noun-type-main">
                                <h4>🟢🔴 EITHER... OR... - wybór alternatywny</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Charakterystyka:</h5>
                                        <ul>
                                            <li>Pokazuje dwie możliwości do wyboru</li>
                                            <li>Używany w zdaniach twierdzących i pytających</li>
                                            <li>Czasownik zgadza się z drugim podmiotem</li>
                                            <li>Może łączyć różne części mowy</li>
                                            <li>Pozytywna alternatywa</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Szczegółowe użycie:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Z rzeczownikami</em></span>
                                                <span className="plural">"You can have <em>either</em> tea <em>or</em> coffee."</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Z czasownikami</em></span>
                                                <span className="plural">"You can <em>either</em> come with us <em>or</em> stay here."</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Z przymiotnikami</em></span>
                                                <span className="plural">"The answer is <em>either</em> right <em>or</em> wrong."</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Z podmiotami</em></span>
                                                <span className="plural">"<em>Either</em> John <em>or</em> his brothers are coming."</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>✅ Zgoda podmiotu z czasownikiem</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"<em>Either</em> the students <em>or</em> the teacher <strong>is</strong> responsible."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(czasownik z drugim podmiotem)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"<em>Either</em> the teacher <em>or</em> the students <strong>are</strong> responsible."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(czasownik z drugim podmiotem)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>🎯 Either na końcu zdania</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"I don't like coffee. I don't like tea <em>either</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(w zdaniach przeczących)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"You can come too, if you want." "I don't want to come <em>either</em>."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(jako odpowiedź)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="noun-type-main">
                                <h4>❌❌ NEITHER... NOR... - wykluczenie obu</h4>
                                <div className="noun-details">
                                    <div className="noun-characteristics">
                                        <h5>📋 Charakterystyka:</h5>
                                        <ul>
                                            <li>Wyklucza obie możliwości</li>
                                            <li>Używany w zdaniach przeczących</li>
                                            <li>Czasownik w formie twierdzącej</li>
                                            <li>Tworzy silne przeczenie</li>
                                            <li>Może zastąpić "not... either"</li>
                                        </ul>
                                    </div>
                                    <div className="noun-examples">
                                        <h5>📚 Szczegółowe użycie:</h5>
                                        <div className="example-pairs">
                                            <div className="example-pair">
                                                <span className="singular"><em>Z rzeczownikami</em></span>
                                                <span className="plural">"I like <em>neither</em> coffee <em>nor</em> tea."</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Z czasownikami</em></span>
                                                <span className="plural">"She <em>neither</em> smokes <em>nor</em> drinks."</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Z przymiotnikami</em></span>
                                                <span className="plural">"The movie was <em>neither</em> interesting <em>nor</em> entertaining."</span>
                                            </div>
                                            <div className="example-pair">
                                                <span className="singular"><em>Z podmiotami</em></span>
                                                <span className="plural">"<em>Neither</em> John <em>nor</em> Mary likes coffee."</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rules-grid">
                                    <div className="rule-detailed">
                                        <h5>✅ Zastępowanie NOT... EITHER</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"I don't like coffee. I don't like tea either."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(dwa zdania)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">"I like <em>neither</em> coffee <em>nor</em> tea."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(jedno zdanie - bardziej eleganckie)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rule-detailed">
                                        <h5>⚠️ Czasownik twierdzący</h5>
                                        <div className="examples-detailed">
                                            <div className="example-group">
                                                <span className="singular">"She <em>neither</em> smokes <em>nor</em> drinks."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(smokes i drinks - forma twierdząca)</span>
                                            </div>
                                            <div className="example-group">
                                                <span className="singular">❌ "She doesn't neither smoke nor drink."</span>
                                                <span className="arrow">→</span>
                                                <span className="plural">(podwójne przeczenie - BŁĄD!)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Spójniki podrzędne - zaawansowane użycie</h4>

                        <div className="plural-categories">
                            <div className="plural-category">
                                <h5>⏰ Spójniki czasu</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">when</span>
                                        <span className="meaning">gdy, kiedy</span>
                                        <span className="example">"I'll call you <em>when</em> I arrive."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">while</span>
                                        <span className="meaning">podczas gdy</span>
                                        <span className="example">"She was reading <em>while</em> I was cooking."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">as soon as</span>
                                        <span className="meaning">jak tylko</span>
                                        <span className="example">"I'll leave <em>as soon as</em> the rain stops."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">until</span>
                                        <span className="meaning">dopóki nie</span>
                                        <span className="example">"Wait here <em>until</em> I come back."</span>
                                    </div>
                                </div>
                            </div>

                            <div className="plural-category">
                                <h5>🎭 Spójniki przyczyny</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">because</span>
                                        <span className="meaning">ponieważ</span>
                                        <span className="example">"We stayed home <em>because</em> it was raining."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">since</span>
                                        <span className="meaning">skoro, ponieważ</span>
                                        <span className="example">"<em>Since</em> you're here, let's have dinner."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">as</span>
                                        <span className="meaning">jako że</span>
                                        <span className="example">"<em>As</em> it was getting late, we decided to leave."</span>
                                    </div>
                                </div>
                            </div>

                            <div className="plural-category">
                                <h5>⚡ Spójniki warunku</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">if</span>
                                        <span className="meaning">jeśli</span>
                                        <span className="example">"I'll go <em>if</em> you come with me."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">unless</span>
                                        <span className="meaning">chyba że</span>
                                        <span className="example">"We won't go <em>unless</em> the weather improves."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">provided that</span>
                                        <span className="meaning">pod warunkiem że</span>
                                        <span className="example">"You can borrow my car <em>provided that</em> you drive carefully."</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="plural-categories">
                            <div className="plural-category">
                                <h5>🎯 Spójniki celu</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">so that</span>
                                        <span className="meaning">żeby, aby</span>
                                        <span className="example">"I studied hard <em>so that</em> I could pass the exam."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">in order to</span>
                                        <span className="meaning">w celu</span>
                                        <span className="example">"She woke up early <em>in order to</em> catch the train."</span>
                                    </div>
                                </div>
                            </div>

                            <div className="plural-category">
                                <h5>🔄 Spójniki przeciwstawienia</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">although</span>
                                        <span className="meaning">chociaż</span>
                                        <span className="example">"<em>Although</em> it was raining, we went for a walk."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">even though</span>
                                        <span className="meaning">nawet jeśli</span>
                                        <span className="example">"<em>Even though</em> he was tired, he finished the work."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">while</span>
                                        <span className="meaning">podczas gdy (kontrast)</span>
                                        <span className="example">"<em>While</em> I like coffee, my wife prefers tea."</span>
                                    </div>
                                </div>
                            </div>

                            <div className="plural-category">
                                <h5>📝 Spójniki miejsca</h5>
                                <div className="plural-items">
                                    <div className="plural-item">
                                        <span className="noun">where</span>
                                        <span className="meaning">gdzie</span>
                                        <span className="example">"This is the house <em>where</em> I was born."</span>
                                    </div>
                                    <div className="plural-item">
                                        <span className="noun">wherever</span>
                                        <span className="meaning">gdziekolwiek</span>
                                        <span className="example">"I'll follow you <em>wherever</em> you go."</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Uzupełnij zdania właściwymi spójnikami złożonymi:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> You can have ________ tea ________ coffee.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="corr1" value="a"/>
                                                <span>either... or...</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="corr1" value="b"/>
                                                <span>neither... nor...</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="corr1" value="c"/>
                                                <span>both... and...</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> I like ________ coffee ________ tea.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="corr2" value="a"/>
                                                <span>either... or...</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="corr2" value="b"/>
                                                <span>neither... nor...</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="corr2" value="c"/>
                                                <span>both... and...</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> She is ________ intelligent ________ hardworking.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="corr3" value="a"/>
                                                <span>not only... but also...</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="corr3" value="b"/>
                                                <span>either... or...</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="corr3" value="c"/>
                                                <span>neither... nor...</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> ________ John ________ Mary can help you.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="corr4" value="a"/>
                                                <span>Both... and...</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="corr4" value="b"/>
                                                <span>Either... or...</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="corr4" value="c"/>
                                                <span>Neither... nor...</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> He ________ sings ________ plays the guitar.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="corr5" value="a"/>
                                                <span>not only... but also...</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="corr5" value="b"/>
                                                <span>either... or...</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="corr5" value="c"/>
                                                <span>both... and...</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> ________ you study hard ________ you will fail.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="corr6" value="a"/>
                                                <span>Either... or...</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="corr6" value="b"/>
                                                <span>Neither... nor...</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="corr6" value="c"/>
                                                <span>Both... and...</span>
                                            </label>
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
    liczebniki: [
        {
            id: 'liczebniki-glowne-porzadkowe',
            title: 'Liczebniki główne i porządkowe',
            excerpt: 'One/first, two/second - kompletny przewodnik po angielskich liczebnikach z wyjątkami i praktycznymi użyciami.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Liczebniki główne i porządkowe 🔢</h3>
                        <p className="muted">Kompletny przewodnik po liczebnikach głównych (cardinal) i porządkowych (ordinal) z wyjątkami i praktycznymi zastosowaniami</p>

                        <div className="numerals-comparison">
                            <div className="numerals-type">
                                <h4>🔢 Liczebniki główne (Cardinal Numbers)</h4>
                                <p>Odpowiadają na pytanie <strong>ile?</strong> - pokazują ilość</p>
                                <div className="numerals-list-detailed">
                                    <div className="numeral-category">
                                        <h5>0-12 (podstawowe)</h5>
                                        <div className="numeral-items-grid">
                                            <div className="numeral-item-detailed">
                                                <span className="number">0</span>
                                                <span className="word">zero / nought / oh</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">1</span>
                                                <span className="word">one</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">2</span>
                                                <span className="word">two</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">3</span>
                                                <span className="word">three</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">4</span>
                                                <span className="word">four</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">5</span>
                                                <span className="word">five</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">6</span>
                                                <span className="word">six</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">7</span>
                                                <span className="word">seven</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">8</span>
                                                <span className="word">eight</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">9</span>
                                                <span className="word">nine</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">10</span>
                                                <span className="word">ten</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">11</span>
                                                <span className="word">eleven</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">12</span>
                                                <span className="word">twelve</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="numeral-category">
                                        <h5>13-19 (nastki)</h5>
                                        <div className="numeral-items-grid">
                                            <div className="numeral-item-detailed">
                                                <span className="number">13</span>
                                                <span className="word">thirteen</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">14</span>
                                                <span className="word">fourteen</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">15</span>
                                                <span className="word">fifteen</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">16</span>
                                                <span className="word">sixteen</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">17</span>
                                                <span className="word">seventeen</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">18</span>
                                                <span className="word">eighteen</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">19</span>
                                                <span className="word">nineteen</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="numeral-category">
                                        <h5>20-90 (dziesiątki)</h5>
                                        <div className="numeral-items-grid">
                                            <div className="numeral-item-detailed">
                                                <span className="number">20</span>
                                                <span className="word">twenty</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">30</span>
                                                <span className="word">thirty</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">40</span>
                                                <span className="word">forty</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">50</span>
                                                <span className="word">fifty</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">60</span>
                                                <span className="word">sixty</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">70</span>
                                                <span className="word">seventy</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">80</span>
                                                <span className="word">eighty</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">90</span>
                                                <span className="word">ninety</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="numerals-type">
                                <h4>🥇 Liczebniki porządkowe (Ordinal Numbers)</h4>
                                <p>Odpowiadają na pytanie <strong>który z kolei?</strong> - pokazują kolejność</p>
                                <div className="numerals-list-detailed">
                                    <div className="numeral-category">
                                        <h5>1st-20th (podstawowe)</h5>
                                        <div className="numeral-items-grid">
                                            <div className="numeral-item-detailed">
                                                <span className="number">1st</span>
                                                <span className="word">first</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">2nd</span>
                                                <span className="word">second</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">3rd</span>
                                                <span className="word">third</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">4th</span>
                                                <span className="word">fourth</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">5th</span>
                                                <span className="word">fifth</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">6th</span>
                                                <span className="word">sixth</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">7th</span>
                                                <span className="word">seventh</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">8th</span>
                                                <span className="word">eighth</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">9th</span>
                                                <span className="word">ninth</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">10th</span>
                                                <span className="word">tenth</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">11th</span>
                                                <span className="word">eleventh</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">12th</span>
                                                <span className="word">twelfth</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">13th</span>
                                                <span className="word">thirteenth</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">14th</span>
                                                <span className="word">fourteenth</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">15th</span>
                                                <span className="word">fifteenth</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">16th</span>
                                                <span className="word">sixteenth</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">17th</span>
                                                <span className="word">seventeenth</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">18th</span>
                                                <span className="word">eighteenth</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">19th</span>
                                                <span className="word">nineteenth</span>
                                            </div>
                                            <div className="numeral-item-detailed">
                                                <span className="number">20th</span>
                                                <span className="word">twentieth</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip">
                            <h5>💡 Kluczowe różnice w pisowni - wyjątki</h5>
                            <div className="comparison-pair">
                                <div className="case">
                                    <span className="title">Liczebniki główne → porządkowe</span>
                                    <div className="exception-list">
                                        <div className="exception-item">
                                            <span className="base">five (5)</span>
                                            <span className="arrow">→</span>
                                            <span className="ordinal">fifth (5th)</span>
                                            <span className="note">(ve → f)</span>
                                        </div>
                                        <div className="exception-item">
                                            <span className="base">eight (8)</span>
                                            <span className="arrow">→</span>
                                            <span className="ordinal">eighth (8th)</span>
                                            <span className="note">(dodajemy h)</span>
                                        </div>
                                        <div className="exception-item">
                                            <span className="base">nine (9)</span>
                                            <span className="arrow">→</span>
                                            <span className="ordinal">ninth (9th)</span>
                                            <span className="note">(usuń e)</span>
                                        </div>
                                        <div className="exception-item">
                                            <span className="base">twelve (12)</span>
                                            <span className="arrow">→</span>
                                            <span className="ordinal">twelfth (12th)</span>
                                            <span className="note">(ve → f)</span>
                                        </div>
                                        <div className="exception-item">
                                            <span className="base">twenty (20)</span>
                                            <span className="arrow">→</span>
                                            <span className="ordinal">twentieth (20th)</span>
                                            <span className="note">(y → ie)</span>
                                        </div>
                                        <div className="exception-item">
                                            <span className="base">thirty (30)</span>
                                            <span className="arrow">→</span>
                                            <span className="ordinal">thirtieth (30th)</span>
                                            <span className="note">(y → ie)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Szczegółowe użycie w praktyce z przykładami</h4>

                        <div className="numerals-usage-detailed">
                            <div className="usage-category">
                                <h5>📊 Liczebniki główne - zastosowania</h5>
                                <div className="usage-examples-expanded">
                                    <div className="usage-group">
                                        <h6>Ilość przedmiotów</h6>
                                        <div className="example-item">
                                            <p>"I have <em>three</em> books and <em>five</em> pencils."</p>
                                            <p>"There are <em>twenty-five</em> students in the class."</p>
                                        </div>
                                    </div>
                                    <div className="usage-group">
                                        <h6>Wiek</h6>
                                        <div className="example-item">
                                            <p>"She is <em>twenty-five</em> years old."</p>
                                            <p>"He just turned <em>eighteen</em>."</p>
                                        </div>
                                    </div>
                                    <div className="usage-group">
                                        <h6>Numery telefonu</h6>
                                        <div className="example-item">
                                            <p>"My number is <em>five-five-five</em> <em>one-two-three-four</em>."</p>
                                            <p>"Call me at <em>oh-seven-seven</em> <em>double-eight</em> <em>nine-nine</em>."</p>
                                        </div>
                                    </div>
                                    <div className="usage-group">
                                        <h6>Ceny i pieniądze</h6>
                                        <div className="example-item">
                                            <p>"This costs <em>fifteen</em> dollars."</p>
                                            <p>"The total is <em>one hundred twenty</em> pounds."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="usage-category">
                                <h5>📈 Liczebniki porządkowe - zastosowania</h5>
                                <div className="usage-examples-expanded">
                                    <div className="usage-group">
                                        <h6>Kolejność i pozycja</h6>
                                        <div className="example-item">
                                            <p>"This is my <em>first</em> visit to Paris."</p>
                                            <p>"She finished in <em>third</em> place."</p>
                                        </div>
                                    </div>
                                    <div className="usage-group">
                                        <h6>Piętra i poziomy</h6>
                                        <div className="example-item">
                                            <p>"Her office is on the <em>fifth</em> floor."</p>
                                            <p>"Take the elevator to the <em>tenth</em> level."</p>
                                        </div>
                                    </div>
                                    <div className="usage-group">
                                        <h6>Daty</h6>
                                        <div className="example-item">
                                            <p>"Today is May <em>tenth</em>."</p>
                                            <p>"We're meeting on the <em>twenty-first</em> of June."</p>
                                        </div>
                                    </div>
                                    <div className="usage-group">
                                        <h6>Urodziny i rocznice</h6>
                                        <div className="example-item">
                                            <p>"It's my <em>twenty-first</em> birthday."</p>
                                            <p>"Their <em>fiftieth</em> wedding anniversary."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip warning">
                            <h5>⚠️ Najczęstsze błędy Polaków</h5>
                            <div className="common-mistakes-detailed">
                                <div className="mistake-item">
                                    <span className="polish">Mam 21 lat</span>
                                    <span className="incorrect">I have twenty-one years</span>
                                    <span className="arrow">→</span>
                                    <span className="correct">I am twenty-one years old</span>
                                    <span className="reason">Używamy konstrukcji "to be + age + years old"</span>
                                </div>
                                <div className="mistake-item">
                                    <span className="polish">To jest mój pierwszy raz</span>
                                    <span className="incorrect">This is my one time</span>
                                    <span className="arrow">→</span>
                                    <span className="correct">This is my first time</span>
                                    <span className="reason">Kolejność = liczebnik porządkowy</span>
                                </div>
                                <div className="mistake-item">
                                    <span className="polish">Urodziłem się 3-go maja</span>
                                    <span className="incorrect">I was born in three May</span>
                                    <span className="arrow">→</span>
                                    <span className="correct">I was born on May third</span>
                                    <span className="reason">Daty z liczebnikami porządkowymi</span>
                                </div>
                                <div className="mistake-item">
                                    <span className="polish">Na piątym piętrze</span>
                                    <span className="incorrect">On the five floor</span>
                                    <span className="arrow">→</span>
                                    <span className="correct">On the fifth floor</span>
                                    <span className="reason">Piętra zawsze z liczebnikami porządkowymi</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Wyjątki i specjalne przypadki</h4>

                        <div className="special-cases-detailed">
                            <div className="special-case-expanded">
                                <h5>🎯 "And" w British vs American English</h5>
                                <div className="comparison-examples">
                                    <div className="language-comparison">
                                        <div className="language-version">
                                            <h6>🇬🇧 British English</h6>
                                            <div className="examples">
                                                <p>125 → "one hundred <em>and</em> twenty-five"</p>
                                                <p>1,005 → "one thousand <em>and</em> five"</p>
                                                <p>2,350 → "two thousand, three hundred <em>and</em> fifty"</p>
                                            </div>
                                        </div>
                                        <div className="language-version">
                                            <h6>🇺🇸 American English</h6>
                                            <div className="examples">
                                                <p>125 → "one hundred twenty-five"</p>
                                                <p>1,005 → "one thousand five"</p>
                                                <p>2,350 → "two thousand three hundred fifty"</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="special-case-expanded">
                                <h5>🔢 "A" vs "one" przed setkami i tysiącami</h5>
                                <div className="usage-comparison">
                                    <div className="usage-type">
                                        <h6>Nieformalne (częstsze)</h6>
                                        <div className="examples">
                                            <p>"<em>A</em> hundred people attended."</p>
                                            <p>"It costs <em>a</em> thousand dollars."</p>
                                            <p>"I've told you <em>a</em> million times!"</p>
                                        </div>
                                    </div>
                                    <div className="usage-type">
                                        <h6>Formalne (dokładne)</h6>
                                        <div className="examples">
                                            <p>"<em>One</em> hundred and twenty-five delegates."</p>
                                            <p>"The price is <em>one</em> thousand pounds."</p>
                                            <p>"<em>One</em> million dollars was donated."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="special-case-expanded">
                                <h5>📝 Skrócone formy liczebników porządkowych</h5>
                                <div className="ordinal-rules">
                                    <div className="rule-category">
                                        <h6>Końcówki -st, -nd, -rd, -th</h6>
                                        <div className="rule-examples">
                                            <div className="rule-item">
                                                <span className="pattern">1, 21, 31, 41...</span>
                                                <span className="ending">-st</span>
                                                <span className="examples"> 1st, 21st, 31st, 41st</span>
                                            </div>
                                            <div className="rule-item">
                                                <span className="pattern">2, 22, 32, 42...</span>
                                                <span className="ending">-nd</span>
                                                <span className="examples"> 2nd, 22nd, 32nd, 42nd</span>
                                            </div>
                                            <div className="rule-item">
                                                <span className="pattern">3, 23, 33, 43...</span>
                                                <span className="ending">-rd</span>
                                                <span className="examples"> 3rd, 23rd, 33rd, 43rd</span>
                                            </div>
                                            <div className="rule-item">
                                                <span className="pattern">4-20, 24-30, 34-40...</span>
                                                <span className="ending">-th</span>
                                                <span className="examples"> 4th-20th, 24th-30th</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - liczebniki główne i porządkowe</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę liczebnika:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> This is my ________ visit to London.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="num1" value="a"/>
                                                <span>one</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="num1" value="b"/>
                                                <span>first</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="num1" value="c"/>
                                                <span>firstth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> I have ________ brothers and ________ sisters.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="num2" value="a"/>
                                                <span>two / three</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="num2" value="b"/>
                                                <span>second / third</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="num2" value="c"/>
                                                <span>twoth / threeth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> Her office is on the ________ floor.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="num3" value="a"/>
                                                <span>twelve</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="num3" value="b"/>
                                                <span>twelveth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="num3" value="c"/>
                                                <span>twelfth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> Today is May ________.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="num4" value="a"/>
                                                <span>twenty-one</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="num4" value="b"/>
                                                <span>twenty-first</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="num4" value="c"/>
                                                <span>twenty-oneth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> He finished in ________ place in the competition.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="num5" value="a"/>
                                                <span>three</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="num5" value="b"/>
                                                <span>third</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="num5" value="c"/>
                                                <span>threeth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> Choose the correct spelling:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="num6" value="a"/>
                                                <span>fiveth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="num6" value="b"/>
                                                <span>fifth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="num6" value="c"/>
                                                <span>fifeth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> It's their ________ wedding anniversary.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="num7" value="a"/>
                                                <span>fifty</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="num7" value="b"/>
                                                <span>fiftieth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="num7" value="c"/>
                                                <span>fiftyth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> Which is the correct ordinal number for 8?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="num8" value="a"/>
                                                <span>eighth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="num8" value="b"/>
                                                <span>eightth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="num8" value="c"/>
                                                <span>eigth</span>
                                            </label>
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
                        <h4>🎯 Ćwiczenie dodatkowe - zastosowanie w zdaniach</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Uzupełnij zdania właściwymi formami liczebników:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> This is chapter ________ of the book.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="sent1" value="a"/>
                                                <span>four</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="sent1" value="b"/>
                                                <span>fourth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="sent1" value="c"/>
                                                <span>forth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> She has ________ children.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="sent2" value="a"/>
                                                <span>three</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="sent2" value="b"/>
                                                <span>third</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="sent2" value="c"/>
                                                <span>threeth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> The ________ of July is Independence Day in the US.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="sent3" value="a"/>
                                                <span>four</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="sent3" value="b"/>
                                                <span>fourth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="sent3" value="c"/>
                                                <span>forth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> He celebrated his ________ birthday yesterday.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="sent4" value="a"/>
                                                <span>twenty-one</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="sent4" value="b"/>
                                                <span>twenty-first</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="sent4" value="c"/>
                                                <span>twenty-oneth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> This is the ________ time I've visited Paris.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="sent5" value="a"/>
                                                <span>second</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="sent5" value="b"/>
                                                <span>two</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="sent5" value="c"/>
                                                <span>twoth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> The ________ century began in 2001.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="sent6" value="a"/>
                                                <span>twenty-one</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="sent6" value="b"/>
                                                <span>twenty-first</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="sent6" value="c"/>
                                                <span>twenty-oneth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> Which is the correct form for 12th?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="sent7" value="a"/>
                                                <span>twelveth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="sent7" value="b"/>
                                                <span>twelfth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="sent7" value="c"/>
                                                <span>twelth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> She came in ________ in the race.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="sent8" value="a"/>
                                                <span>ninth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="sent8" value="b"/>
                                                <span>nineth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="sent8" value="c"/>
                                                <span>nineteenth</span>
                                            </label>
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
                        <h4>📝 Ćwiczenie z pisowni i wyjątków</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną pisownię liczebnika:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> Wybierz poprawną formę dla 5th:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="spell1" value="a"/>
                                                <span>fiveth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="spell1" value="b"/>
                                                <span>fifth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="spell1" value="c"/>
                                                <span>fifthe</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> Poprawna forma dla 9th to:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="spell2" value="a"/>
                                                <span>nineth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="spell2" value="b"/>
                                                <span>ninth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="spell2" value="c"/>
                                                <span>nineteenth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> Która forma jest poprawna dla 20th?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="spell3" value="a"/>
                                                <span>twentyth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="spell3" value="b"/>
                                                <span>twentieth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="spell3" value="c"/>
                                                <span>twenteeth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> Poprawna pisownia dla 30th to:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="spell4" value="a"/>
                                                <span>thirtyth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="spell4" value="b"/>
                                                <span>thirtieth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="spell4" value="c"/>
                                                <span>threetieth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> Która forma jest błędna?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="spell5" value="a"/>
                                                <span>eighth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="spell5" value="b"/>
                                                <span>twelfth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="spell5" value="c"/>
                                                <span>fiveth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> Poprawna forma dla 100th to:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="spell6" value="a"/>
                                                <span>hundredth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="spell6" value="b"/>
                                                <span>hundredst</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="spell6" value="c"/>
                                                <span>hundredeth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> Która forma jest poprawna dla 1000th?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="spell7" value="a"/>
                                                <span>thousandth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="spell7" value="b"/>
                                                <span>thousandst</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="spell7" value="c"/>
                                                <span>thousandeth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> Wybierz wszystkie poprawne formy:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="spell8" value="a"/>
                                                <span>first, second, third</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="spell8" value="b"/>
                                                <span>oneth, twoth, threeth</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="spell8" value="c"/>
                                                <span>first, twoth, third</span>
                                            </label>
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
        },
        {
            id: 'daty-czasy',
            title: 'Daty i czasy',
            excerpt: 'Jak czytać daty, godziny, przedziały czasowe - różnice między British i American English.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Daty w języku angielskim 📅</h3>
                        <p className="muted">Kompletny przewodnik po zapisie i wymowie dat w British English i American English</p>

                        <div className="dates-comparison-detailed">
                            <div className="date-format-expanded">
                                <h4>🇬🇧 British English Format</h4>
                                <div className="format-details">
                                    <div className="format-rule">
                                        <h5>📝 Zasady zapisu:</h5>
                                        <ul>
                                            <li><strong>Dzień/Miesiąc/Rok</strong> - kolejność</li>
                                            <li>Przecinki nie są wymagane</li>
                                            <li>Możliwe zapisy: 15th May 2024 lub 15 May 2024</li>
                                            <li>Wymowa z "the" i "of": "the fifteenth of May"</li>
                                            <li>Przyimki: <em>on</em> + data</li>
                                        </ul>
                                    </div>
                                    <div className="date-examples-detailed">
                                        <h5>📚 Przykłady:</h5>
                                        <div className="example-group-detailed">
                                            <span className="written">"15th May 2024"</span>
                                            <span className="arrow">→</span>
                                            <span className="spoken">"the fifteenth of May twenty twenty-four"</span>
                                        </div>
                                        <div className="example-group-detailed">
                                            <span className="written">"1st January 2023"</span>
                                            <span className="arrow">→</span>
                                            <span className="spoken">"the first of January twenty twenty-three"</span>
                                        </div>
                                        <div className="example-group-detailed">
                                            <span className="written">"22/11/2024"</span>
                                            <span className="arrow">→</span>
                                            <span className="spoken">"the twenty-second of November twenty twenty-four"</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="date-format-expanded">
                                <h4>🇺🇸 American English Format</h4>
                                <div className="format-details">
                                    <div className="format-rule">
                                        <h5>📝 Zasady zapisu:</h5>
                                        <ul>
                                            <li><strong>Miesiąc/Dzień/Rok</strong> - kolejność</li>
                                            <li>Przecinek przed rokiem</li>
                                            <li>Zapis: May 15, 2024 lub May 15th, 2024</li>
                                            <li>Wymowa bez "the" i "of": "May fifteenth"</li>
                                            <li>Przyimki: <em>on</em> + data</li>
                                        </ul>
                                    </div>
                                    <div className="date-examples-detailed">
                                        <h5>📚 Przykłady:</h5>
                                        <div className="example-group-detailed">
                                            <span className="written">"May 15, 2024"</span>
                                            <span className="arrow">→</span>
                                            <span className="spoken">"May fifteenth twenty twenty-four"</span>
                                        </div>
                                        <div className="example-group-detailed">
                                            <span className="written">"January 1, 2023"</span>
                                            <span className="arrow">→</span>
                                            <span className="spoken">"January first twenty twenty-three"</span>
                                        </div>
                                        <div className="example-group-detailed">
                                            <span className="written">"11/22/2024"</span>
                                            <span className="arrow">→</span>
                                            <span className="spoken">"November twenty-second twenty twenty-four"</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip">
                            <h5>💡 Specjalne przypadki w datach</h5>
                            <div className="special-date-cases">
                                <div className="special-case-detailed">
                                    <h6>🎯 Lata - wymowa</h6>
                                    <div className="year-examples">
                                        <div className="year-item">
                                            <span className="year">1999</span>
                                            <span className="pronunciation">nineteen ninety-nine</span>
                                        </div>
                                        <div className="year-item">
                                            <span className="year">2001</span>
                                            <span className="pronunciation">two thousand and one</span>
                                        </div>
                                        <div className="year-item">
                                            <span className="year">2010</span>
                                            <span className="pronunciation">twenty ten</span>
                                        </div>
                                        <div className="year-item">
                                            <span className="year">2024</span>
                                            <span className="pronunciation">twenty twenty-four</span>
                                        </div>
                                        <div className="year-item">
                                            <span className="year">1905</span>
                                            <span className="pronunciation">nineteen oh-five</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="special-case-detailed">
                                    <h6>📅 Wieki i dekady</h6>
                                    <div className="century-examples">
                                        <div className="century-item">
                                            <span className="century">20th century</span>
                                            <span className="pronunciation">the twentieth century</span>
                                        </div>
                                        <div className="century-item">
                                            <span className="century">21st century</span>
                                            <span className="pronunciation">the twenty-first century</span>
                                        </div>
                                        <div className="century-item">
                                            <span className="decade">1990s</span>
                                            <span className="pronunciation">the nineties</span>
                                        </div>
                                        <div className="century-item">
                                            <span className="decade">2000s</span>
                                            <span className="pronunciation">the two thousands</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h3>Godziny i przedziały czasowe ⏰</h3>

                        <div className="time-formats-detailed">
                            <div className="time-format-detailed">
                                <h4>🕐 Zegar 12-godzinny (nieformalny)</h4>
                                <div className="time-examples-detailed">
                                    <div className="time-category">
                                        <h5>⏰ Dokładne godziny</h5>
                                        <div className="time-items-grid">
                                            <div className="time-item-detailed">
                                                <span className="digital">09:00</span>
                                                <span className="spoken">nine o'clock / nine a.m.</span>
                                            </div>
                                            <div className="time-item-detailed">
                                                <span className="digital">15:00</span>
                                                <span className="spoken">three o'clock / three p.m.</span>
                                            </div>
                                            <div className="time-item-detailed">
                                                <span className="digital">12:00</span>
                                                <span className="spoken">twelve o'clock / midday / noon</span>
                                            </div>
                                            <div className="time-item-detailed">
                                                <span className="digital">00:00</span>
                                                <span className="spoken">twelve o'clock / midnight</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="time-category">
                                        <h5>↔️ Z przedziałami</h5>
                                        <div className="time-items-grid">
                                            <div className="time-item-detailed">
                                                <span className="digital">09:15</span>
                                                <span className="spoken">nine fifteen / quarter past nine</span>
                                            </div>
                                            <div className="time-item-detailed">
                                                <span className="digital">09:30</span>
                                                <span className="spoken">nine thirty / half past nine</span>
                                            </div>
                                            <div className="time-item-detailed">
                                                <span className="digital">09:45</span>
                                                <span className="spoken">nine forty-five / quarter to ten</span>
                                            </div>
                                            <div className="time-item-detailed">
                                                <span className="digital">08:05</span>
                                                <span className="spoken">eight oh-five / five past eight</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="time-format-detailed">
                                <h4>🕙 Zegar 24-godzinny (oficjalny)</h4>
                                <div className="time-examples-detailed">
                                    <div className="time-items-grid">
                                        <div className="time-item-detailed">
                                            <span className="digital">09:00</span>
                                            <span className="spoken">oh nine hundred hours</span>
                                        </div>
                                        <div className="time-item-detailed">
                                            <span className="digital">14:30</span>
                                            <span className="spoken">fourteen thirty</span>
                                        </div>
                                        <div className="time-item-detailed">
                                            <span className="digital">18:45</span>
                                            <span className="spoken">eighteen forty-five</span>
                                        </div>
                                        <div className="time-item-detailed">
                                            <span className="digital">23:15</span>
                                            <span className="spoken">twenty-three fifteen</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip">
                            <h5>🎯 Określenia czasu dnia</h5>
                            <div className="time-periods-detailed">
                                <div className="period-category-detailed">
                                    <h6>🌅 Części dnia</h6>
                                    <div className="period-list-detailed">
                                        <div className="period-item-detailed">
                                            <span className="time-range">00:00-06:00</span>
                                            <span className="period-name">in the middle of the night</span>
                                            <span className="example">"I woke up in the middle of the night"</span>
                                        </div>
                                        <div className="period-item-detailed">
                                            <span className="time-range">06:00-12:00</span>
                                            <span className="period-name">in the morning</span>
                                            <span className="example">"I work best in the morning"</span>
                                        </div>
                                        <div className="period-item-detailed">
                                            <span className="time-range">12:00-18:00</span>
                                            <span className="period-name">in the afternoon</span>
                                            <span className="example">"Let's meet in the afternoon"</span>
                                        </div>
                                        <div className="period-item-detailed">
                                            <span className="time-range">18:00-00:00</span>
                                            <span className="period-name">in the evening / at night</span>
                                            <span className="example">"I read books in the evening"</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="period-category-detailed">
                                    <h6>📅 Określenia względne</h6>
                                    <div className="period-list-detailed">
                                        <div className="period-item-detailed">
                                            <span className="time-range">-</span>
                                            <span className="period-name">yesterday (wczoraj)</span>
                                            <span className="example">"I saw her yesterday"</span>
                                        </div>
                                        <div className="period-item-detailed">
                                            <span className="time-range">-</span>
                                            <span className="period-name">today (dzisiaj)</span>
                                            <span className="example">"What are you doing today?"</span>
                                        </div>
                                        <div className="period-item-detailed">
                                            <span className="time-range">-</span>
                                            <span className="period-name">tomorrow (jutro)</span>
                                            <span className="example">"We'll leave tomorrow"</span>
                                        </div>
                                        <div className="period-item-detailed">
                                            <span className="time-range">-</span>
                                            <span className="period-name">the day after tomorrow (pojutrze)</span>
                                            <span className="example">"The package arrives the day after tomorrow"</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Najczęstsze błędy w datach i godzinach</h4>

                        <div className="common-mistakes-detailed">
                            <div className="mistake-category">
                                <h5>❌ Typowe błędy:</h5>
                                <div className="mistake-list-detailed">
                                    <div className="mistake-item-detailed">
                                        <span className="polish">Urodziłem się 5-go maja</span>
                                        <span className="incorrect">I was born in 5 May</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">I was born on May 5th</span>
                                        <span className="reason">Używamy "on" z konkretnymi datami</span>
                                    </div>
                                    <div className="mistake-item-detailed">
                                        <span className="polish">Spotkajmy się o 15:00</span>
                                        <span className="incorrect">Let's meet at fifteen hours</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">Let's meet at 3 p.m.</span>
                                        <span className="reason">Używamy systemu 12-godzinnego z a.m./p.m.</span>
                                    </div>
                                    <div className="mistake-item-detailed">
                                        <span className="polish">W 21 wieku</span>
                                        <span className="incorrect">In the twenty-one century</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">In the twenty-first century</span>
                                        <span className="reason">Wieki zawsze z liczebnikami porządkowymi</span>
                                    </div>
                                    <div className="mistake-item-detailed">
                                        <span className="polish">W latach 90-tych</span>
                                        <span className="incorrect">In the ninety years</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">In the nineties</span>
                                        <span className="reason">Dekady mają specjalne nazwy</span>
                                    </div>
                                    <div className="mistake-item-detailed">
                                        <span className="polish">O północy</span>
                                        <span className="incorrect">At the midnight</span>
                                        <span className="arrow">→</span>
                                        <span className="correct">At midnight</span>
                                        <span className="reason">Bez przedimka z "midnight" i "noon"</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 Złote zasady:</h5>
                                <div className="golden-rules">
                                    <div className="rule-item-golden">
                                        <span className="rule-phrase">Przyimki w datach: </span>
                                        <span className="rule-meaning">ON + konkretna data, IN + miesiąc/rok, AT + godzina</span>
                                    </div>
                                    <div className="rule-item-golden">
                                        <span className="rule-phrase">Godziny: </span>
                                        <span className="rule-meaning">AT + godzina, użyj a.m./p.m. lub system 24-godzinny</span>
                                    </div>
                                    <div className="rule-item-golden">
                                        <span className="rule-phrase">Lata: </span>
                                        <span className="rule-meaning">czytaj po dwóch cyfrach: 1999 → nineteen ninety-nine</span>
                                    </div>
                                    <div className="rule-item-golden">
                                        <span className="rule-phrase">Wieki: </span>
                                        <span className="rule-meaning">zawsze liczebnik porządkowy: 21st century</span>
                                    </div>
                                    <div className="rule-item-golden">
                                        <span className="rule-phrase">Dekady: </span>
                                        <span className="rule-meaning">the + liczba mnoga: the nineties (90s)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - daty i czasy</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> I was born ________ 1990.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="date1" value="a"/>
                                                <span>in</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="date1" value="b"/>
                                                <span>on</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="date1" value="c"/>
                                                <span>at</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> The meeting is ________ Monday.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="date2" value="a"/>
                                                <span>in</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="date2" value="b"/>
                                                <span>on</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="date2" value="c"/>
                                                <span>at</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> We'll meet ________ 3:30 PM.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="date3" value="a"/>
                                                <span>in</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="date3" value="b"/>
                                                <span>on</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="date3" value="c"/>
                                                <span>at</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> How do you read "1905"?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="date4" value="a"/>
                                                <span>one thousand nine hundred five</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="date4" value="b"/>
                                                <span>nineteen oh five</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="date4" value="c"/>
                                                <span>nineteen five</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> "The 21st century" is read as:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="date5" value="a"/>
                                                <span>the twenty-one century</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="date5" value="b"/>
                                                <span>the twenty-first century</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="date5" value="c"/>
                                                <span>the twentieth first century</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> Choose the correct time expression:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="date6" value="a"/>
                                                <span>in the midnight</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="date6" value="b"/>
                                                <span>at the midnight</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="date6" value="c"/>
                                                <span>at midnight</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> How do you say "9:45"?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="date7" value="a"/>
                                                <span>nine forty-five</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="date7" value="b"/>
                                                <span>quarter to ten</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="date7" value="c"/>
                                                <span>both are correct</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> The correct British format is:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="date8" value="a"/>
                                                <span>May 15, 2024</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="date8" value="b"/>
                                                <span>15th May 2024</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="date8" value="c"/>
                                                <span>2024 May 15</span>
                                            </label>
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
        },
        {
            id: 'ulamki-liczby-specjalne',
            title: 'Ułamki i liczby specjalne',
            excerpt: 'Ułamki zwykłe, dziesiętne, procenty, duże liczby, pomiary - kompletny przewodnik.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Ułamki zwykłe i dziesiętne ½ 0.5</h3>
                        <p className="muted">Szczegółowy przewodnik po ułamkach, liczbach dziesiętnych i ich praktycznym użyciu</p>

                        <div className="fractions-decimals-detailed">
                            <div className="fractions-expanded">
                                <h4>🔢 Ułamki zwykłe (Fractions)</h4>
                                <div className="fractions-grid-detailed">
                                    <div className="fraction-category-detailed">
                                        <h5>🎯 Proste ułamki</h5>
                                        <div className="fraction-examples-detailed">
                                            <div className="fraction-item-detailed">
                                                <div className="fraction-header">
                                                    <span className="fraction-value">1/2</span>
                                                    <span className="fraction-spoken">a half / one half</span>
                                                </div>
                                                <div className="fraction-usage">"Half an hour" - pół godziny</div>
                                            </div>
                                            <div className="fraction-item-detailed">
                                                <div className="fraction-header">
                                                    <span className="fraction-value">1/3</span>
                                                    <span className="fraction-spoken">a third / one third</span>
                                                </div>
                                                <div className="fraction-usage">"One third of the students" - jedna trzecia studentów</div>
                                            </div>
                                            <div className="fraction-item-detailed">
                                                <div className="fraction-header">
                                                    <span className="fraction-value">1/4</span>
                                                    <span className="fraction-spoken">a quarter / one quarter</span>
                                                </div>
                                                <div className="fraction-usage">"Quarter past three" - kwadrans po trzeciej</div>
                                            </div>
                                            <div className="fraction-item-detailed">
                                                <div className="fraction-header">
                                                    <span className="fraction-value">1/5</span>
                                                    <span className="fraction-spoken">a fifth / one fifth</span>
                                                </div>
                                                <div className="fraction-usage">"One fifth of the budget" - jedna piąta budżetu</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fraction-category-detailed">
                                        <h5>📊 Złożone ułamki</h5>
                                        <div className="fraction-examples-detailed">
                                            <div className="fraction-item-detailed">
                                                <div className="fraction-header">
                                                    <span className="fraction-value">2/3</span>
                                                    <span className="fraction-spoken">two thirds</span>
                                                </div>
                                                <div className="fraction-usage">Licznik w liczbie mnogiej</div>
                                            </div>
                                            <div className="fraction-item-detailed">
                                                <div className="fraction-header">
                                                    <span className="fraction-value">3/4</span>
                                                    <span className="fraction-spoken">three quarters</span>
                                                </div>
                                                <div className="fraction-usage">"Three quarters of an hour" - trzy kwadranse</div>
                                            </div>
                                            <div className="fraction-item-detailed">
                                                <div className="fraction-header">
                                                    <span className="fraction-value">5/8</span>
                                                    <span className="fraction-spoken">five eighths</span>
                                                </div>
                                                <div className="fraction-usage">Mianownik w liczbie mnogiej z -s</div>
                                            </div>
                                            <div className="fraction-item-detailed">
                                                <div className="fraction-header">
                                                    <span className="fraction-value">7/10</span>
                                                    <span className="fraction-spoken">seven tenths</span>
                                                </div>
                                                <div className="fraction-usage">"Seven tenths of the population" - siedem dziesiątych populacji</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="decimals-expanded">
                                <h4>📐 Liczby dziesiętne (Decimals)</h4>
                                <div className="decimals-grid-detailed">
                                    <div className="decimal-category-detailed">
                                        <h5>🎯 Podstawowe liczby dziesiętne</h5>
                                        <div className="decimal-examples-detailed">
                                            <div className="decimal-item-detailed">
                                                <div className="decimal-header">
                                                    <span className="decimal-value">0.5</span>
                                                    <span className="decimal-spoken">
                                                    nought point five (BrE)<br/>
                                                    zero point five (AmE)
                                                </span>
                                                </div>
                                                <div className="decimal-usage">Różnice między British i American English</div>
                                            </div>
                                            <div className="decimal-item-detailed">
                                                <div className="decimal-header">
                                                    <span className="decimal-value">3.14</span>
                                                    <span className="decimal-spoken">three point one four</span>
                                                </div>
                                                <div className="decimal-usage">Każdą cyfrę czytamy osobno</div>
                                            </div>
                                            <div className="decimal-item-detailed">
                                                <div className="decimal-header">
                                                    <span className="decimal-value">10.25</span>
                                                    <span className="decimal-spoken">ten point two five</span>
                                                </div>
                                                <div className="decimal-usage">Nie: "ten point twenty-five"</div>
                                            </div>
                                            <div className="decimal-item-detailed">
                                                <div className="decimal-header">
                                                    <span className="decimal-value">100.75</span>
                                                    <span className="decimal-spoken">one hundred point seven five</span>
                                                </div>
                                                <div className="decimal-usage">Część dziesiętna po "point"</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="decimal-category-detailed">
                                        <h5>📈 Zaawansowane przypadki</h5>
                                        <div className="decimal-examples-detailed">
                                            <div className="decimal-item-detailed">
                                                <div className="decimal-header">
                                                    <span className="decimal-value">0.001</span>
                                                    <span className="decimal-spoken">nought point zero zero one</span>
                                                </div>
                                                <div className="decimal-usage">Zera po przecinku czytamy jako "zero"</div>
                                            </div>
                                            <div className="decimal-item-detailed">
                                                <div className="decimal-header">
                                                    <span className="decimal-value">2.5%</span>
                                                    <span className="decimal-spoken">two point five percent</span>
                                                </div>
                                                <div className="decimal-usage">Procenty czytamy normalnie</div>
                                            </div>
                                            <div className="decimal-item-detailed">
                                                <div className="decimal-header">
                                                    <span className="decimal-value">$10.99</span>
                                                    <span className="decimal-spoken">ten dollars ninety-nine</span>
                                                </div>
                                                <div className="decimal-usage">W cenach często pomijamy "point"</div>
                                            </div>
                                            <div className="decimal-item-detailed">
                                                <div className="decimal-header">
                                                    <span className="decimal-value">1.5 million</span>
                                                    <span className="decimal-spoken">one point five million</span>
                                                </div>
                                                <div className="decimal-usage">Ułamki z dużymi liczbami</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip">
                            <h5>💡 Różnice w zapisie - polski vs angielski</h5>
                            <div className="comparison-table-expanded">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Język</th>
                                        <th>Separator tysięcy</th>
                                        <th>Separator dziesiętny</th>
                                        <th>Przykład</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><strong>Polski</strong></td>
                                        <td>spacja lub kropka</td>
                                        <td>przecinek</td>
                                        <td>1 000 000,50 lub 1.000.000,50</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Angielski</strong></td>
                                        <td>przecinek</td>
                                        <td>kropka</td>
                                        <td>1,000,000.50</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h3>Duże liczby i pomiary 🏦</h3>

                        <div className="large-numbers-detailed">
                            <div className="number-scales-detailed">
                                <h4>📊 Skale liczbowe</h4>
                                <div className="scale-grid-detailed">
                                    <div className="scale-item-detailed">
                                        <div className="scale-number">1,000</div>
                                        <div className="scale-word">one thousand</div>
                                        <div className="scale-example">"a thousand people"</div>
                                    </div>
                                    <div className="scale-item-detailed">
                                        <div className="scale-number">10,000</div>
                                        <div className="scale-word">ten thousand</div>
                                        <div className="scale-example">"ten thousand dollars"</div>
                                    </div>
                                    <div className="scale-item-detailed">
                                        <div className="scale-number">100,000</div>
                                        <div className="scale-word">one hundred thousand</div>
                                        <div className="scale-example">"100k followers"</div>
                                    </div>
                                    <div className="scale-item-detailed">
                                        <div className="scale-number">1,000,000</div>
                                        <div className="scale-word">one million</div>
                                        <div className="scale-example">"a million pounds"</div>
                                    </div>
                                    <div className="scale-item-detailed">
                                        <div className="scale-number">1,000,000,000</div>
                                        <div className="scale-word">one billion</div>
                                        <div className="scale-example">"a billion dollars"</div>
                                    </div>
                                    <div className="scale-item-detailed">
                                        <div className="scale-number">1,000,000,000,000</div>
                                        <div className="scale-word">one trillion</div>
                                        <div className="scale-example">"national debt in trillions"</div>
                                    </div>
                                </div>
                            </div>

                            <div className="measurements-detailed">
                                <h4>📏 Pomiary i jednostki</h4>
                                <div className="measurement-categories-detailed">
                                    <div className="measurement-category-detailed">
                                        <h5>📐 Długość</h5>
                                        <div className="measurement-list-detailed">
                                            <div className="measurement-item-detailed">
                                                <span className="measurement-value">5 cm</span>
                                                <span className="measurement-spoken">five centimeters</span>
                                            </div>
                                            <div className="measurement-item-detailed">
                                                <span className="measurement-value">2 m</span>
                                                <span className="measurement-spoken">two meters</span>
                                            </div>
                                            <div className="measurement-item-detailed">
                                                <span className="measurement-value">10 km</span>
                                                <span className="measurement-spoken">ten kilometers</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="measurement-category-detailed">
                                        <h5>⚖️ Waga</h5>
                                        <div className="measurement-list-detailed">
                                            <div className="measurement-item-detailed">
                                                <span className="measurement-value">500 g</span>
                                                <span className="measurement-spoken">five hundred grams</span>
                                            </div>
                                            <div className="measurement-item-detailed">
                                                <span className="measurement-value">2 kg</span>
                                                <span className="measurement-spoken">two kilograms</span>
                                            </div>
                                            <div className="measurement-item-detailed">
                                                <span className="measurement-value">1.5 t</span>
                                                <span className="measurement-spoken">one point five tons</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="measurement-category-detailed">
                                        <h5>🇺🇸 Imperialne (USA/UK)</h5>
                                        <div className="measurement-list-detailed">
                                            <div className="measurement-item-detailed">
                                                <span className="measurement-value">5'10"</span>
                                                <span className="measurement-spoken">five feet ten inches</span>
                                            </div>
                                            <div className="measurement-item-detailed">
                                                <span className="measurement-value">160 lbs</span>
                                                <span className="measurement-spoken">one hundred sixty pounds</span>
                                            </div>
                                            <div className="measurement-item-detailed">
                                                <span className="measurement-value">10 miles</span>
                                                <span className="measurement-spoken">ten miles</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Procenty i wyrażenia matematyczne</h4>

                        <div className="percentages-math-detailed">
                            <div className="percentages-detailed">
                                <h5>📈 Procenty</h5>
                                <div className="percentage-examples-detailed">
                                    <div className="percentage-item-detailed">
                                        <span className="percentage-value">25%</span>
                                        <span className="percentage-spoken">twenty-five percent</span>
                                        <span className="percentage-usage">"Twenty-five percent of students"</span>
                                    </div>
                                    <div className="percentage-item-detailed">
                                        <span className="percentage-value">100%</span>
                                        <span className="percentage-spoken">one hundred percent</span>
                                        <span className="percentage-usage">"I agree one hundred percent"</span>
                                    </div>
                                    <div className="percentage-item-detailed">
                                        <span className="percentage-value">0.5%</span>
                                        <span className="percentage-spoken">zero point five percent</span>
                                        <span className="percentage-usage">"Interest rate of zero point five percent"</span>
                                    </div>
                                    <div className="percentage-item-detailed">
                                        <span className="percentage-value">150%</span>
                                        <span className="percentage-spoken">one hundred fifty percent</span>
                                        <span className="percentage-usage">"Sales increased by one hundred fifty percent"</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mathematical-expressions-detailed">
                                <h5>🧮 Wyrażenia matematyczne</h5>
                                <div className="math-examples-detailed">
                                    <div className="math-item-detailed">
                                        <span className="math-expression">2 + 3 = 5</span>
                                        <span className="math-spoken">two plus three equals five</span>
                                    </div>
                                    <div className="math-item-detailed">
                                        <span className="math-expression">10 - 4 = 6</span>
                                        <span className="math-spoken">ten minus four equals six</span>
                                    </div>
                                    <div className="math-item-detailed">
                                        <span className="math-expression">5 × 6 = 30</span>
                                        <span className="math-spoken">five times six equals thirty</span>
                                    </div>
                                    <div className="math-item-detailed">
                                        <span className="math-expression">20 ÷ 4 = 5</span>
                                        <span className="math-spoken">twenty divided by four equals five</span>
                                    </div>
                                    <div className="math-item-detailed">
                                        <span className="math-expression">7² = 49</span>
                                        <span className="math-spoken">seven squared equals forty-nine</span>
                                    </div>
                                    <div className="math-item-detailed">
                                        <span className="math-expression">√9 = 3</span>
                                        <span className="math-spoken">the square root of nine equals three</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip warning">
                            <h5>⚠️ Specjalne przypadki i wyjątki</h5>
                            <div className="special-number-cases-detailed">
                                <div className="special-case-detailed">
                                    <h6>🔢 "Zero" vs "Oh" vs "Nought"</h6>
                                    <div className="special-examples">
                                        <div className="special-item">
                                            <span className="context">W temperaturach</span>
                                            <span className="example">zero degrees (0°C)</span>
                                        </div>
                                        <div className="special-item">
                                            <span className="context">W numerach telefonu</span>
                                            <span className="example">oh-five-oh (050)</span>
                                        </div>
                                        <div className="special-item">
                                            <span className="context">W matematyce (BrE)</span>
                                            <span className="example">nought point five (0.5)</span>
                                        </div>
                                        <div className="special-item">
                                            <span className="context">W wynikach sportowych</span>
                                            <span className="example">nil-nil (0-0)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="special-case-detailed">
                                    <h6>📝 Liczby w nazwach własnych</h6>
                                    <div className="special-examples">
                                        <div className="special-item">
                                            <span className="context">Władcy</span>
                                            <span className="example">King Henry VIII → King Henry the Eighth</span>
                                        </div>
                                        <div className="special-item">
                                            <span className="context">Wojny</span>
                                            <span className="example">World War II → World War Two</span>
                                        </div>
                                        <div className="special-item">
                                            <span className="context">Kanały TV</span>
                                            <span className="example">Channel 4 → Channel Four</span>
                                        </div>
                                        <div className="special-item">
                                            <span className="context">Autostrady</span>
                                            <span className="example">M25 → the M twenty-five</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - ułamki i liczby specjalne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną odpowiedź:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> How do you read "¾"?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="frac1" value="a"/>
                                                <span>three four</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="frac1" value="b"/>
                                                <span>three quarters</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="frac1" value="c"/>
                                                <span>three fourth</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> The correct way to read "0.75" is:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="frac2" value="a"/>
                                                <span>zero point seventy-five</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="frac2" value="b"/>
                                                <span>zero point seven five</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="frac2" value="c"/>
                                                <span>zero comma seventy-five</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> How do you say "2⅓"?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="frac3" value="a"/>
                                                <span>two and one three</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="frac3" value="b"/>
                                                <span>two and one third</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="frac3" value="c"/>
                                                <span>two one third</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> Choose the correct percentage reading:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="frac4" value="a"/>
                                                <span>twenty-five percentage</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="frac4" value="b"/>
                                                <span>twenty-five percent</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="frac4" value="c"/>
                                                <span>twenty-five percents</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> How do you read "1,500,000"?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="frac5" value="a"/>
                                                <span>one million five hundred thousand</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="frac5" value="b"/>
                                                <span>one point five million</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="frac5" value="c"/>
                                                <span>both are correct</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> The correct mathematical expression for "5 × 3 = 15" is:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="frac6" value="a"/>
                                                <span>five by three equals fifteen</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="frac6" value="b"/>
                                                <span>five times three equals fifteen</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="frac6" value="c"/>
                                                <span>five multiplied three equals fifteen</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> How do you read "√25 = 5"?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="frac7" value="a"/>
                                                <span>root twenty-five equals five</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="frac7" value="b"/>
                                                <span>square root of twenty-five equals five</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="frac7" value="c"/>
                                                <span>radical twenty-five equals five</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> Choose the correct measurement reading:</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="frac8" value="a"/>
                                                <span>five foot ten inches</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="frac8" value="b"/>
                                                <span>five feet ten inches</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="frac8" value="c"/>
                                                <span>five feet ten inch</span>
                                            </label>
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
    przyimki: [
        {
            id: 'przyimki-miejsca-czasu',
            title: 'Przyimki miejsca i czasu',
            excerpt: 'In/on/at - kiedy używać którego? Kompletny przewodnik po przyimkach miejsca i czasu.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Przyimki miejsca 🗺️</h3>
                        <p className="muted">Określają położenie osób i przedmiotów</p>

                        <div className="prepositions-grid">
                            <div className="preposition-group">
                                <h4>📍 IN - w (wewnątrz)</h4>
                                <div className="preposition-uses">
                                    <div className="preposition-use">
                                        <h5>Pomieszczenia, budynki</h5>
                                        <p>"in the room", "in the house", "in the kitchen"</p>
                                    </div>
                                    <div className="preposition-use">
                                        <h5>Miasta, kraje, kontynenty</h5>
                                        <p>"in London", "in Poland", "in Europe"</p>
                                    </div>
                                    <div className="preposition-use">
                                        <h5>Zamknięte przestrzenie</h5>
                                        <p>"in the car", "in the box", "in my pocket"</p>
                                    </div>
                                    <div className="preposition-use">
                                        <h5>Wody, obszary geograficzne</h5>
                                        <p>"in the water", "in the sea", "in the mountains"</p>
                                    </div>
                                    <div className="preposition-use">
                                        <h5>Książki, gazety</h5>
                                        <p>"in the book", "in the newspaper", "in the magazine"</p>
                                    </div>
                                </div>
                            </div>

                            <div className="preposition-group">
                                <h4>📌 ON - na (powierzchnia)</h4>
                                <div className="preposition-uses">
                                    <div className="preposition-use">
                                        <h5>Powierzchnie</h5>
                                        <p>"on the table", "on the wall", "on the floor"</p>
                                    </div>
                                    <div className="preposition-use">
                                        <h5>Transport publiczny</h5>
                                        <p>"on the bus", "on the train", "on the plane"</p>
                                    </div>
                                    <div className="preposition-use">
                                        <h5>Media</h5>
                                        <p>"on TV", "on the radio", "on the internet"</p>
                                    </div>
                                    <div className="preposition-use">
                                        <h5>Ulice, drogi</h5>
                                        <p>"on Main Street", "on the road", "on the highway"</p>
                                    </div>
                                    <div className="preposition-use">
                                        <h5>Części ciała</h5>
                                        <p>"on my head", "on his arm", "on her nose"</p>
                                    </div>
                                </div>
                            </div>

                            <div className="preposition-group">
                                <h4>🎯 AT - przy, w (konkretny punkt)</h4>
                                <div className="preposition-uses">
                                    <div className="preposition-use">
                                        <h5>Konkretne miejsca</h5>
                                        <p>"at the bus stop", "at the door", "at the station"</p>
                                    </div>
                                    <div className="preposition-use">
                                        <h5>Adresy</h5>
                                        <p>"at 15 Main Street", "at my friend's house"</p>
                                    </div>
                                    <div className="preposition-use">
                                        <h5>Wydarzenia</h5>
                                        <p>"at the party", "at the concert", "at the meeting"</p>
                                    </div>
                                    <div className="preposition-use">
                                        <h5>Miejsca pracy/edukacji</h5>
                                        <p>"at work", "at school", "at university"</p>
                                    </div>
                                    <div className="preposition-use">
                                        <h5>Końce, rogi</h5>
                                        <p>"at the end", "at the corner", "at the top"</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip warning">
                            <h5>⚠️ Specjalne przypadki i wyjątki</h5>
                            <div className="special-preposition-cases">
                                <div className="special-case">
                                    <h6>🏠 Home vs House</h6>
                                    <div className="special-examples">
                                        <div className="special-item">
                                            <span className="context">at home</span>
                                            <span className="example">"I'm at home" (poprawnie)</span>
                                        </div>
                                        <div className="special-item">
                                            <span className="context">in my house</span>
                                            <span className="example">"I'm in my house" (poprawnie)</span>
                                        </div>
                                        <div className="special-item">
                                            <span className="context">❌ in home</span>
                                            <span className="example">"I'm in home" (błędnie)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="special-case">
                                    <h6>📍 In the corner vs At the corner</h6>
                                    <div className="special-examples">
                                        <div className="special-item">
                                            <span className="context">in the corner</span>
                                            <span className="example">wewnątrz pomieszczenia</span>
                                        </div>
                                        <div className="special-item">
                                            <span className="context">at the corner</span>
                                            <span className="example">na zewnątrz (ulica)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h3>Przyimki czasu ⏰</h3>

                        <div className="time-prepositions">
                            <div className="time-preposition">
                                <h4>📅 IN - w (dłuższe okresy)</h4>
                                <div className="time-examples">
                                    <div className="time-example-item">
                                        <span className="period">Miesiące</span>
                                        <span className="example">"in January", "in December"</span>
                                    </div>
                                    <div className="time-example-item">
                                        <span className="period">Lata</span>
                                        <span className="example">"in 2024", "in 1999"</span>
                                    </div>
                                    <div className="time-example-item">
                                        <span className="period">Pory roku</span>
                                        <span className="example">"in the summer", "in winter"</span>
                                    </div>
                                    <div className="time-example-item">
                                        <span className="period">Pory dnia</span>
                                        <span className="example">"in the morning", "in the afternoon"</span>
                                    </div>
                                    <div className="time-example-item">
                                        <span className="period">Przyszłość</span>
                                        <span className="example">"in five minutes", "in two weeks"</span>
                                    </div>
                                </div>
                            </div>

                            <div className="time-preposition">
                                <h4>📅 ON - w (konkretne dni)</h4>
                                <div className="time-examples">
                                    <div className="time-example-item">
                                        <span className="period">Dni tygodnia</span>
                                        <span className="example">"on Monday", "on Friday"</span>
                                    </div>
                                    <div className="time-example-item">
                                        <span className="period">Święta</span>
                                        <span className="example">"on Christmas Day", "on my birthday"</span>
                                    </div>
                                    <div className="time-example-item">
                                        <span className="period">Weekend</span>
                                        <span className="example">"on the weekend" (AmE)</span>
                                    </div>
                                    <div className="time-example-item">
                                        <span className="period">Daty</span>
                                        <span className="example">"on 15th May", "on the first of January"</span>
                                    </div>
                                    <div className="time-example-item">
                                        <span className="period">Określone dni</span>
                                        <span className="example">"on Saturday morning", "on that day"</span>
                                    </div>
                                </div>
                            </div>

                            <div className="time-preposition">
                                <h4>⏱️ AT - o (konkretny czas)</h4>
                                <div className="time-examples">
                                    <div className="time-example-item">
                                        <span className="period">Godziny</span>
                                        <span className="example">"at 3 o'clock", "at 5:30"</span>
                                    </div>
                                    <div className="time-example-item">
                                        <span className="period">Pory dnia</span>
                                        <span className="example">"at noon", "at midnight", "at night"</span>
                                    </div>
                                    <div className="time-example-item">
                                        <span className="period">Wyrażenia</span>
                                        <span className="example">"at the moment", "at present"</span>
                                    </div>
                                    <div className="time-example-item">
                                        <span className="period">Święta</span>
                                        <span className="example">"at Christmas", "at Easter"</span>
                                    </div>
                                    <div className="time-example-item">
                                        <span className="period">Wieki</span>
                                        <span className="example">"at the age of 25"</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip info">
                            <h5>💡 Różnice między "in the night" a "at night"</h5>
                            <div className="time-comparisons">
                                <div className="time-comparison">
                                    <span className="expression">at night</span>
                                    <span className="explanation">ogólnie o porze nocnej</span>
                                    <span className="example">"I work at night"</span>
                                </div>
                                <div className="time-comparison">
                                    <span className="expression">in the night</span>
                                    <span className="explanation">konkretna noc, coś się wydarzyło</span>
                                    <span className="example">"I woke up in the night"</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz właściwy przyimek:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> I live ________ London.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="prep1" value="a"/>
                                                <span>in</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="prep1" value="b"/>
                                                <span>on</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="prep1" value="c"/>
                                                <span>at</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> The meeting is ________ Monday.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="prep2" value="a"/>
                                                <span>in</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="prep2" value="b"/>
                                                <span>on</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="prep2" value="c"/>
                                                <span>at</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> We'll meet ________ 5 o'clock.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="prep3" value="a"/>
                                                <span>in</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="prep3" value="b"/>
                                                <span>on</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="prep3" value="c"/>
                                                <span>at</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> The book is ________ the table.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="prep4" value="a"/>
                                                <span>in</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="prep4" value="b"/>
                                                <span>on</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="prep4" value="c"/>
                                                <span>at</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> She was born ________ 1990.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="prep5" value="a"/>
                                                <span>in</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="prep5" value="b"/>
                                                <span>on</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="prep5" value="c"/>
                                                <span>at</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> I'll see you ________ the morning.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="prep6" value="a"/>
                                                <span>in</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="prep6" value="b"/>
                                                <span>on</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="prep6" value="c"/>
                                                <span>at</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> He's ________ work right now.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="prep7" value="a"/>
                                                <span>in</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="prep7" value="b"/>
                                                <span>on</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="prep7" value="c"/>
                                                <span>at</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> The keys are ________ my pocket.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="prep8" value="a"/>
                                                <span>in</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="prep8" value="b"/>
                                                <span>on</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="prep8" value="c"/>
                                                <span>at</span>
                                            </label>
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
        },
        {
            id: 'przyimki-ruchu',
            title: 'Przyimki ruchu',
            excerpt: 'Into, out of, through, across - wyrażanie kierunku i ruchu w przestrzeni.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Przyimki ruchu i kierunku 🚶‍♂️</h3>
                        <p className="muted">Opisują przemieszczanie się z jednego miejsca do drugiego</p>

                        <div className="movement-prepositions">
                            <div className="movement-group">
                                <h4>📥 INTO - do (wnętrza)</h4>
                                <p>Ruch <strong>do środka</strong> czegoś</p>
                                <div className="movement-examples">
                                    <div className="movement-example">
                                        <span className="sentence">"She walked <em>into</em> the room."</span>
                                        <span className="translation">Weszła do pokoju.</span>
                                    </div>
                                    <div className="movement-example">
                                        <span className="sentence">"The cat jumped <em>into</em> the box."</span>
                                        <span className="translation">Kot wskoczył do pudełka.</span>
                                    </div>
                                    <div className="movement-example">
                                        <span className="sentence">"He got <em>into</em> the car."</span>
                                        <span className="translation">Wsiadł do samochodu.</span>
                                    </div>
                                    <div className="movement-example">
                                        <span className="sentence">"Pour the water <em>into</em> the glass."</span>
                                        <span className="translation">Wlej wodę do szklanki.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="movement-group">
                                <h4>📤 OUT OF - z (wnętrza)</h4>
                                <p>Ruch <strong>z wnętrza</strong> na zewnątrz</p>
                                <div className="movement-examples">
                                    <div className="movement-example">
                                        <span className="sentence">"She ran <em>out of</em> the building."</span>
                                        <span className="translation">Wypadła z budynku.</span>
                                    </div>
                                    <div className="movement-example">
                                        <span className="sentence">"Take the books <em>out of</em> the bag."</span>
                                        <span className="translation">Wyjmij książki z torby.</span>
                                    </div>
                                    <div className="movement-example">
                                        <span className="sentence">"He got <em>out of</em> bed."</span>
                                        <span className="translation">Wstał z łóżka.</span>
                                    </div>
                                    <div className="movement-example">
                                        <span className="sentence">"We're moving <em>out of</em> the city."</span>
                                        <span className="translation">Wyprowadzamy się z miasta.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="movement-group">
                                <h4>🔄 THROUGH - przez (środek)</h4>
                                <p>Ruch <strong>przez środek</strong> czegoś</p>
                                <div className="movement-examples">
                                    <div className="movement-example">
                                        <span className="sentence">"We walked <em>through</em> the forest."</span>
                                        <span className="translation">Szliśmy przez las.</span>
                                    </div>
                                    <div className="movement-example">
                                        <span className="sentence">"The train goes <em>through</em> the tunnel."</span>
                                        <span className="translation">Pociąg jedzie przez tunel.</span>
                                    </div>
                                    <div className="movement-example">
                                        <span className="sentence">"She looked <em>through</em> the window."</span>
                                        <span className="translation">Patrzyła przez okno.</span>
                                    </div>
                                    <div className="movement-example">
                                        <span className="sentence">"The river flows <em>through</em> the valley."</span>
                                        <span className="translation">Rzeka płynie przez dolinę.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="movement-group">
                                <h4>↔️ ACROSS - przez (powierzchnię)</h4>
                                <p>Ruch <strong>przez powierzchnię</strong> na drugą stronę</p>
                                <div className="movement-examples">
                                    <div className="movement-example">
                                        <span className="sentence">"They swam <em>across</em> the river."</span>
                                        <span className="translation">Przepłynęli przez rzekę.</span>
                                    </div>
                                    <div className="movement-example">
                                        <span className="sentence">"Walk <em>across</em> the bridge."</span>
                                        <span className="translation">Przejdź przez most.</span>
                                    </div>
                                    <div className="movement-example">
                                        <span className="sentence">"The cat ran <em>across</em> the road."</span>
                                        <span className="translation">Kot przebiegł przez ulicę.</span>
                                    </div>
                                    <div className="movement-example">
                                        <span className="sentence">"We sailed <em>across</em> the ocean."</span>
                                        <span className="translation">Przepłynęliśmy przez ocean.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Inne ważne przyimki ruchu</h4>

                        <div className="additional-prepositions">
                            <div className="preposition-pair">
                                <div className="preposition-item">
                                    <h5>UP - w górę</h5>
                                    <div className="preposition-examples">
                                        <p>"He walked <em>up</em> the stairs." - Szedł po schodach w górę.</p>
                                        <p>"The prices went <em>up</em>." - Ceny poszły w górę.</p>
                                        <p>"Climb <em>up</em> the mountain." - Wspinaj się na górę.</p>
                                    </div>
                                </div>

                                <div className="preposition-item">
                                    <h5>DOWN - w dół</h5>
                                    <div className="preposition-examples">
                                        <p>"She ran <em>down</em> the hill." - Biegła w dół wzgórza.</p>
                                        <p>"Put the book <em>down</em>." - Odłóż książkę.</p>
                                        <p>"The ball rolled <em>down</em> the slope." - Piłka potoczyła się w dół zbocza.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="preposition-pair">
                                <div className="preposition-item">
                                    <h5>OVER - nad, przez</h5>
                                    <div className="preposition-examples">
                                        <p>"The plane flew <em>over</em> the city." - Samolot leciał nad miastem.</p>
                                        <p>"Jump <em>over</em> the fence." - Przeskocz przez płot.</p>
                                        <p>"The dog jumped <em>over</em> the stream." - Pies przeskoczył przez strumień.</p>
                                    </div>
                                </div>

                                <div className="preposition-item">
                                    <h5>UNDER - pod</h5>
                                    <div className="preposition-examples">
                                        <p>"The dog ran <em>under</em> the table." - Pies przebiegł pod stołem.</p>
                                        <p>"We walked <em>under</em> the bridge." - Szliśmy pod mostem.</p>
                                        <p>"The rabbit hid <em>under</em> the bush." - Królik schował się pod krzakiem.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="preposition-pair">
                                <div className="preposition-item">
                                    <h5>ALONG - wzdłuż</h5>
                                    <div className="preposition-examples">
                                        <p>"We walked <em>along</em> the beach." - Szliśmy wzdłuż plaży.</p>
                                        <p>"Drive <em>along</em> this road." - Jedź wzdłuż tej drogi.</p>
                                        <p>"The path runs <em>along</em> the river." - Ścieżka biegnie wzdłuż rzeki.</p>
                                    </div>
                                </div>

                                <div className="preposition-item">
                                    <h5>AROUND - wokół</h5>
                                    <div className="preposition-examples">
                                        <p>"They walked <em>around</em> the park." - Chodzili po parku.</p>
                                        <p>"The Earth moves <em>around</em> the Sun." - Ziemia krąży wokół Słońca.</p>
                                        <p>"We drove <em>around</em> the city." - Jeździliśmy po mieście.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>💡 Różnice między przyimkami</h4>
                        <div className="preposition-comparisons">
                            <div className="comparison">
                                <h5>Across vs Through</h5>
                                <div className="comparison-details">
                                    <div className="comparison-item">
                                        <span className="preposition">Across</span>
                                        <span className="usage">przez powierzchnię (płaską)</span>
                                        <span className="example">"Walk <em>across</em> the street."</span>
                                    </div>
                                    <div className="comparison-item">
                                        <span className="preposition">Through</span>
                                        <span className="usage">przez środek (trójwymiarowe)</span>
                                        <span className="example">"Walk <em>through</em> the park."</span>
                                    </div>
                                </div>
                            </div>

                            <div className="comparison">
                                <h5>In vs Into</h5>
                                <div className="comparison-details">
                                    <div className="comparison-item">
                                        <span className="preposition">In</span>
                                        <span className="usage">pozycja statyczna (w środku)</span>
                                        <span className="example">"She is <em>in</em> the room."</span>
                                    </div>
                                    <div className="comparison-item">
                                        <span className="preposition">Into</span>
                                        <span className="usage">ruch (do środka)</span>
                                        <span className="example">"She walked <em>into</em> the room."</span>
                                    </div>
                                </div>
                            </div>

                            <div className="comparison">
                                <h5>On vs Onto</h5>
                                <div className="comparison-details">
                                    <div className="comparison-item">
                                        <span className="preposition">On</span>
                                        <span className="usage">pozycja na powierzchni</span>
                                        <span className="example">"The book is <em>on</em> the table."</span>
                                    </div>
                                    <div className="comparison-item">
                                        <span className="preposition">Onto</span>
                                        <span className="usage">ruch na powierzchnię</span>
                                        <span className="example">"Put the book <em>onto</em> the table."</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Częste błędy i wyjątki</h4>
                        <div className="common-mistakes">
                            <div className="mistake-group">
                                <h5>Get in/on/off</h5>
                                <div className="mistake-examples">
                                    <div className="mistake-item">
                                        <span className="correct">✓ get in the car</span>
                                        <span className="incorrect">❌ get on the car</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="correct">✓ get on the bus</span>
                                        <span className="incorrect">❌ get in the bus</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="correct">✓ get off the train</span>
                                        <span className="incorrect">❌ get out of the train</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-group">
                                <h5>Arrive in/at</h5>
                                <div className="mistake-examples">
                                    <div className="mistake-item">
                                        <span className="correct">✓ arrive in London</span>
                                        <span className="incorrect">❌ arrive at London</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="correct">✓ arrive at the station</span>
                                        <span className="incorrect">❌ arrive in the station</span>
                                    </div>
                                    <div className="mistake-item">
                                        <span className="correct">✓ arrive home (bez przyimka!)</span>
                                        <span className="incorrect">❌ arrive at home</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz właściwy przyimek ruchu:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> She walked ________ the room.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="move1" value="a"/>
                                                <span>into</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="move1" value="b"/>
                                                <span>out of</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="move1" value="c"/>
                                                <span>through</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> We walked ________ the park.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="move2" value="a"/>
                                                <span>across</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="move2" value="b"/>
                                                <span>through</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="move2" value="c"/>
                                                <span>into</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> The cat jumped ________ the box.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="move3" value="a"/>
                                                <span>out of</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="move3" value="b"/>
                                                <span>into</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="move3" value="c"/>
                                                <span>across</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> They swam ________ the river.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="move4" value="a"/>
                                                <span>through</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="move4" value="b"/>
                                                <span>across</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="move4" value="c"/>
                                                <span>into</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> He ran ________ the building.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="move5" value="a"/>
                                                <span>out of</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="move5" value="b"/>
                                                <span>into</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="move5" value="c"/>
                                                <span>through</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> The train goes ________ the tunnel.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="move6" value="a"/>
                                                <span>across</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="move6" value="b"/>
                                                <span>through</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="move6" value="c"/>
                                                <span>into</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> Walk ________ the bridge.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="move7" value="a"/>
                                                <span>across</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="move7" value="b"/>
                                                <span>through</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="move7" value="c"/>
                                                <span>into</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> She looked ________ the window.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="move8" value="a"/>
                                                <span>through</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="move8" value="b"/>
                                                <span>across</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="move8" value="c"/>
                                                <span>out of</span>
                                            </label>
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
        // Zainicjalizuj interakcje ćwiczeń po zmianie tematu/sekcji
        // małe opóźnienie, aby DOM był gotowy
        const t = setTimeout(() => {
            try {
                initializeGrammarExercises();
            } catch (e) {
                console.error('Błąd inicjalizacji ćwiczeń:', e);
            }
        }, 0);
        return () => clearTimeout(t);
    }, [topic]);

    return (
        <div className="topic-detail">
            <div className="topic-detail__back">
                <Link to={onBack} className="btn-link">← Wróć do listy</Link>
            </div>
            {topic.content()}
        </div>
    )
}

export default function PartsOfSpeech() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const active = section ?? 'przedimki'
    const topicId = searchParams.get('topic')
    const topics = TOPICS[active] ?? []
    const selected = topics.find(t => t.id === topicId)

    const basePath = `/gramatyka/części-mowy/${active}`

    useDocumentMeta({
        title: selected ? `${selected.title} — Części mowy | Gramatyka angielska` : 'Części mowy — Gramatyka angielska',
        description: selected
            ? selected.excerpt
            : 'Poznaj budulec języka angielskiego: przedimki, rzeczowniki, czasowniki, przymiotniki, przysłówki, zaimki, spójniki, liczebniki i przyimki.',
        canonical: window.location.href,
        og: {
            title: selected ? `${selected.title} — Części mowy` : 'Części mowy — Gramatyka angielska',
            description: selected
                ? selected.excerpt
                : 'Praktyczne wyjaśnienia i przykłady dla każdej części mowy.',
            url: window.location.href
        }
    })

    return (
        <main className="topic-layout">
            <div className="container">
                <header className="topic-header">
                    <h2>Części mowy</h2>
                    <p className="muted">Poznaj budulec języka angielskiego - od podstaw po zaawansowane zasady</p>
                </header>

                <nav className="subnav" aria-label="Podstrony: Części mowy">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/gramatyka/części-mowy/${s.id}`}
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
                                <h3>Witaj w świecie części mowy! 🎓</h3>
                                <p>Wybierz kategorię z menu powyżej, a następnie konkretny temat, który Cię interesuje.
                                    Znajdziesz tu szczegółowe wyjaśnienia, praktyczne przykłady i wskazówki,
                                    które pomogą Ci opanować angielską gramatykę.</p>
                            </div>
                            <TopicsGrid basePath={basePath} active={active} />
                        </>
                    )}
                </article>
            </div>
        </main>
    )
}