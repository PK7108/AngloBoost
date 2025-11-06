import React, { useEffect } from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import '../../styles/topic-cards.css'

const sections = [
    { id: 'present', label: 'W czasie teraźniejszym' },
    { id: 'past', label: 'W czasie przeszłym' },
    { id: 'pytania-rozkazy', label: 'Pytania i rozkazy' },
    { id: 'czasowniki-modalne', label: 'Czasowniki modalne' },
    { id: 'wyjatki-specjalne', label: 'Wyjątki i przypadki specjalne' },
]

const TOPICS = {
    present: [
        {
            id: 'reported-present-comprehensive',
            title: 'Mowa zależna – teraźniejszość 🕒',
            excerpt: 'Kompletny przewodnik: brak backshiftu, czasowniki wprowadzające, zmiany zaimków, określeń czasu i miejsca.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Mowa zależna w czasie teraźniejszym - kompletny przewodnik</h3>
                        <p className="muted">Gdy czasownik wprowadzający jest w czasie teraźniejszym, nie stosujemy
                            cofnięcia czasów - zachowujemy oryginalny czas wypowiedzi</p>

                        <div className="grammar-grid">
                            <div className="grammar-rule">
                                <h4>📝 Fundamentalne zasady</h4>
                                <div className="rules-list">
                                    <div className="rule-item">
                                        <h5>🔄 Brak backshiftu (cofnięcia czasów)</h5>
                                        <p>Gdy czasownik wprowadzający jest w Present Simple, Present Perfect, Present
                                            Continuous lub Future Simple</p>
                                        <div className="example-group-expanded">
                                            <p><strong>Present Simple:</strong> "I <em>work</em> here." → He says (that)
                                                he <em>works</em> here.</p>
                                            <p><strong>Present Continuous:</strong> "I <em>am studying</em> now." → She
                                                says (that) she <em>is studying</em> now.</p>
                                            <p><strong>Present Perfect:</strong> "I <em>have finished</em> my work." →
                                                They say (that) they <em>have finished</em> their work.</p>
                                            <p><strong>Future Simple:</strong> "I <em>will call</em> you." → He says
                                                (that) he <em>will call</em> me.</p>
                                        </div>
                                    </div>

                                    <div className="rule-item">
                                        <h5>👤 Zmiany zaimków osobowych i dzierżawczych</h5>
                                        <p>Zaimki dostosowujemy do kontekstu i osoby mówiącej</p>
                                        <div className="example-group-expanded">
                                            <p>"<em>I</em> like <em>my</em> job." → He says
                                                (that) <em>he</em> likes <em>his</em> job.</p>
                                            <p>"<em>We</em> love <em>our</em> house." → They say
                                                (that) <em>they</em> love <em>their</em> house.</p>
                                            <p>"<em>You</em> should clean <em>your</em> room." → She tells me
                                                (that) <em>I</em> should clean <em>my</em> room.</p>
                                        </div>
                                    </div>

                                    <div className="rule-item">
                                        <h5>📍 Zmiany określeń czasu i miejsca</h5>
                                        <p>Określenia dostosowujemy do nowego kontekstu czasowego i przestrzennego</p>
                                        <div className="example-group-expanded">
                                            <p>"I'm busy <em>now</em>." → She says (that) she is busy <em>then</em>.</p>
                                            <p>"I'll see you <em>tomorrow</em>." → He says (that) he will see me <em>the
                                                next day</em>.</p>
                                            <p>"I was there <em>yesterday</em>." → She says (that) she was there <em>the
                                                day before</em>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grammar-usage">
                                <h4>🎯 Czasowniki wprowadzające w czasie teraźniejszym</h4>
                                <div className="introductory-verbs-detailed">
                                    <div className="verb-category">
                                        <h5>💬 Podstawowe czasowniki mówienia</h5>
                                        <div className="verb-list">
                                            <div className="verb-item">
                                                <strong>say</strong> - mówić
                                                <div className="example">"I'm tired." → He <em>says</em> (that) he is
                                                    tired.</div>
                                            </div>
                                            <div className="verb-item">
                                                <strong>tell</strong> - mówić (komuś)
                                                <div className="example">"I'll help you." → She <em>tells</em> me (that)
                                                    she will help me.</div>
                                            </div>
                                            <div className="verb-item">
                                                <strong>explain</strong> - wyjaśniać
                                                <div className="example">"It works like this." →
                                                    He <em>explains</em> (that) it works like that.</div>
                                            </div>
                                            <div className="verb-item">
                                                <strong>mention</strong> - wspominać
                                                <div className="example">"I saw that movie." →
                                                    She <em>mentions</em> (that) she saw that movie.</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="verb-category">
                                        <h5>💭 Czasowniki myślenia i opinii</h5>
                                        <div className="verb-list">
                                            <div className="verb-item">
                                                <strong>think</strong> - myśleć
                                                <div className="example">"It's a good idea." → I <em>think</em> (that)
                                                    it's a good idea.</div>
                                            </div>
                                            <div className="verb-item">
                                                <strong>believe</strong> - wierzyć
                                                <div className="example">"He is honest." → We <em>believe</em> (that) he
                                                    is honest.</div>
                                            </div>
                                            <div className="verb-item">
                                                <strong>feel</strong> - czuć
                                                <div className="example">"Something is wrong." →
                                                    She <em>feels</em> (that) something is wrong.</div>
                                            </div>
                                            <div className="verb-item">
                                                <strong>hope</strong> - mieć nadzieję
                                                <div className="example">"It will stop raining." →
                                                    I <em>hope</em> (that) it will stop raining.</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="verb-category">
                                        <h5>📢 Czasowniki deklaracji i obietnic</h5>
                                        <div className="verb-list">
                                            <div className="verb-item">
                                                <strong>promise</strong> - obiecywać
                                                <div className="example">"I'll be on time." →
                                                    He <em>promises</em> (that) he will be on time.</div>
                                            </div>
                                            <div className="verb-item">
                                                <strong>admit</strong> - przyznawać
                                                <div className="example">"I made a mistake." →
                                                    She <em>admits</em> (that) she made a mistake.</div>
                                            </div>
                                            <div className="verb-item">
                                                <strong>claim</strong> - twierdzić
                                                <div className="example">"I saw a UFO." → He <em>claims</em> (that) he
                                                    saw a UFO.</div>
                                            </div>
                                            <div className="verb-item">
                                                <strong>announce</strong> - ogłaszać
                                                <div className="example">"We're getting married." →
                                                    They <em>announce</em> (that) they are getting married.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔄 Szczegółowe zmiany zaimków</h4>
                        <div className="pronoun-changes-detailed">
                            <div className="pronoun-category">
                                <h5>Zaimki osobowe</h5>
                                <div className="pronoun-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Mowa niezależna</th>
                                            <th>Mowa zależna</th>
                                            <th>Przykład</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>I</td>
                                            <td>he/she</td>
                                            <td>"I am busy" → He says <em>he</em> is busy</td>
                                        </tr>
                                        <tr>
                                            <td>you</td>
                                            <td>I/he/she/they</td>
                                            <td>"You are late" → She tells me <em>I</em> am late</td>
                                        </tr>
                                        <tr>
                                            <td>we</td>
                                            <td>they</td>
                                            <td>"We are ready" → They say <em>they</em> are ready</td>
                                        </tr>
                                        <tr>
                                            <td>they</td>
                                            <td>they</td>
                                            <td>"They are coming" → He says <em>they</em> are coming</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="pronoun-category">
                                <h5>Zaimki dzierżawcze</h5>
                                <div className="pronoun-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Mowa niezależna</th>
                                            <th>Mowa zależna</th>
                                            <th>Przykład</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>my</td>
                                            <td>his/her</td>
                                            <td>"This is my car" → He says this is <em>his</em> car</td>
                                        </tr>
                                        <tr>
                                            <td>your</td>
                                            <td>my/his/her</td>
                                            <td>"Where is your book?" → She asks where <em>my</em> book is</td>
                                        </tr>
                                        <tr>
                                            <td>our</td>
                                            <td>their</td>
                                            <td>"Our house is big" → They say <em>their</em> house is big</td>
                                        </tr>
                                        <tr>
                                            <td>their</td>
                                            <td>their</td>
                                            <td>"Their children are smart" → She says <em>their</em> children are smart
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="time-change-section">
                        <h3>⏰ Szczegółowe zmiany określeń czasu</h3>

                        <div className="time-change-block">
                            <h4>Zmiana z mowy niezależnej na zależną (Direct → Indirect Speech)</h4>
                            <div className="comparison-table">
                                <div className="row header">
                                    <div className="cell">Mowa niezależna</div>
                                    <div className="cell">→</div>
                                    <div className="cell">Mowa zależna</div>
                                </div>
                                <div className="row">
                                    <div className="cell"><strong>tomorrow</strong></div>
                                    <div className="cell">→</div>
                                    <div className="cell"><strong>the next day</strong></div>
                                </div>
                                <div className="row">
                                    <div className="cell"><strong>next week</strong></div>
                                    <div className="cell">→</div>
                                    <div className="cell"><strong>the following week</strong></div>
                                </div>
                                <div className="row">
                                    <div className="cell"><strong>now</strong></div>
                                    <div className="cell">→</div>
                                    <div className="cell"><strong>then</strong></div>
                                </div>
                                <div className="row">
                                    <div className="cell"><strong>today</strong></div>
                                    <div className="cell">→</div>
                                    <div className="cell"><strong>that day</strong></div>
                                </div>
                            </div>
                            <div className="example">
                                <p><strong>Przykład:</strong> "I'll call you <strong>tomorrow</strong>," he said. → He
                                    said he would call me <strong>the next day</strong>.</p>
                            </div>
                        </div>

                        <div className="divider"></div>

                        <div className="time-change-block">
                            <h4>Zmiana z mowy zależnej na niezależną (Indirect → Direct Speech)</h4>
                            <div className="comparison-table">
                                <div className="row header">
                                    <div className="cell">Mowa zależna</div>
                                    <div className="cell">→</div>
                                    <div className="cell">Mowa niezależna</div>
                                </div>
                                <div className="row">
                                    <div className="cell"><strong>the day before</strong></div>
                                    <div className="cell">→</div>
                                    <div className="cell"><strong>yesterday</strong></div>
                                </div>
                                <div className="row">
                                    <div className="cell"><strong>the previous week</strong></div>
                                    <div className="cell">→</div>
                                    <div className="cell"><strong>last week</strong></div>
                                </div>
                                <div className="row">
                                    <div className="cell"><strong>then</strong></div>
                                    <div className="cell">→</div>
                                    <div className="cell"><strong>now</strong></div>
                                </div>
                                <div className="row">
                                    <div className="cell"><strong>that day</strong></div>
                                    <div className="cell">→</div>
                                    <div className="cell"><strong>today</strong></div>
                                </div>
                            </div>
                            <div className="example">
                                <p><strong>Przykład:</strong> She said she had arrived <strong>the day before</strong>.
                                    → "I arrived <strong>yesterday</strong>."</p>
                            </div>
                        </div>
                    </div>

                    <section className="card">
                        <h4>🗺️ Szczegółowe zmiany określeń miejsca</h4>
                        <div className="place-changes-detailed">
                            <div className="place-category">
                                <h5>Określenia miejsca i wskaźniki</h5>
                                <div className="changes-grid">
                                    <div className="change-item-detailed">
                                        <span className="original">here</span>
                                        <span className="arrow">→</span>
                                        <span className="changed">there</span>
                                        <span
                                            className="example">"Put it <em>here</em>" → He says to put it <em>there</em></span>
                                    </div>
                                    <div className="change-item-detailed">
                                        <span className="original">this</span>
                                        <span className="arrow">→</span>
                                        <span className="changed">that</span>
                                        <span
                                            className="example">"I like <em>this</em> book" → She says she likes <em>that</em> book</span>
                                    </div>
                                    <div className="change-item-detailed">
                                        <span className="original">these</span>
                                        <span className="arrow">→</span>
                                        <span className="changed">those</span>
                                        <span className="example">"<em>These</em> are mine" → He says <em>those</em> are his</span>
                                    </div>
                                    <div className="change-item-detailed">
                                        <span className="original">come</span>
                                        <span className="arrow">→</span>
                                        <span className="changed">go</span>
                                        <span
                                            className="example">"I'll <em>come</em> later" → She says she'll <em>go</em> later</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚡ Wyjątki i przypadki specjalne</h4>
                        <div className="exceptions-detailed">
                            <div className="exception-category">
                                <h5>🎯 Kiedy NIE zmieniamy określeń?</h5>
                                <div className="exception-list">
                                    <div className="exception-item">
                                        <h6>Gdy mówimy w tym samym miejscu i czasie</h6>
                                        <div className="example-group-expanded">
                                            <p>"I'm happy <em>here</em>." → She says she's happy <em>here</em>. (jeśli
                                                nadal tu jest)</p>
                                            <p>"I'll do it <em>now</em>." → He says he'll do it <em>now</em>. (jeśli
                                                mówi w tej samej chwili)</p>
                                            <p>"<em>This</em> is my favorite place." → She says <em>this</em> is her
                                                favorite place. (jeśli wskazuje to samo miejsce)</p>
                                        </div>
                                    </div>

                                    <div className="exception-item">
                                        <h6>Gdy mówimy o faktach uniwersalnych</h6>
                                        <div className="example-group-expanded">
                                            <p>"The sun rises in the east." → He says the sun rises in the east.</p>
                                            <p>"Water boils at 100°C." → She says water boils at 100°C.</p>
                                            <p>"Paris is the capital of France." → They say Paris is the capital of
                                                France.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="exception-category">
                                <h5>⚠️ Czasowniki, które zawsze wymagają zmian</h5>
                                <div className="verb-exceptions">
                                    <div className="verb-exception-item">
                                        <strong>shall → will</strong>
                                        <div className="example">"<em>Shall</em> I help you?" → He asks if
                                            he <em>will</em> help me.
                                        </div>
                                    </div>
                                    <div className="verb-exception-item">
                                        <strong>may → might</strong>
                                        <div className="example">"I <em>may</em> come later." → She says
                                            she <em>might</em> come later.
                                        </div>
                                    </div>
                                    <div className="verb-exception-item">
                                        <strong>can → could</strong>
                                        <div className="example">"I <em>can</em> speak French." → He says
                                            he <em>could</em> speak French.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📚 Praktyczne przykłady w kontekście</h4>
                        <div className="contextual-examples">
                            <div className="context-scenario">
                                <h5>🎭 Rozmowa w pracy</h5>
                                <div className="dialogue">
                                    <div className="direct-speech">
                                        <h6>Mowa niezależna:</h6>
                                        <p>"<em>I am working</em> on the project <em>now</em> and <em>I will
                                            finish</em> it <em>tomorrow</em>. <em>My</em> team
                                            needs <em>this</em> computer <em>here</em>."</p>
                                    </div>
                                    <div className="reported-speech">
                                        <h6>Mowa zależna:</h6>
                                        <p>He says (that) <em>he is working</em> on the project <em>then</em> and <em>he
                                            will finish</em> it <em>the next day</em>. <em>His</em> team
                                            needs <em>that</em> computer <em>there</em>.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="context-scenario">
                                <h5>🏠 Rozmowa rodzinna</h5>
                                <div className="dialogue">
                                    <div className="direct-speech">
                                        <h6>Mowa niezależna:</h6>
                                        <p>"<em>We have bought</em> a new house <em>last month</em> and <em>we are
                                            moving</em> in <em>next week</em>. <em>Our</em> children
                                            love <em>this</em> neighborhood."</p>
                                    </div>
                                    <div className="reported-speech">
                                        <h6>Mowa zależna:</h6>
                                        <p>They say (that) <em>they have bought</em> a new house <em>the month
                                            before</em> and <em>they are moving</em> in <em>the following
                                            week</em>. <em>Their</em> children love <em>that</em> neighborhood.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="context-scenario">
                                <h5>📞 Rozmowa telefoniczna</h5>
                                <div className="dialogue">
                                    <div className="direct-speech">
                                        <h6>Mowa niezależna:</h6>
                                        <p>"<em>I can't meet</em> you <em>today</em> because <em>I have been
                                            feeling</em> sick since <em>yesterday</em>. <em>I will
                                            call</em> you <em>tomorrow</em> to reschedule."</p>
                                    </div>
                                    <div className="reported-speech">
                                        <h6>Mowa zależna:</h6>
                                        <p>She says (that) <em>she can't meet</em> me <em>that day</em> because <em>she
                                            has been feeling</em> sick since <em>the day before</em>. <em>She will
                                            call</em> me <em>the next day</em> to reschedule.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Przekształć zdania z mowy niezależnej na zależną (używając czasu
                                    teraźniejszego):</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> "I am studying for my exam right now."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="present1" value="a"/>
                                                <span>She says she is studying for her exam right now.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="present1" value="b"/>
                                                <span>She says she was studying for her exam then.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="present1" value="c"/>
                                                <span>She says she studied for her exam right now.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Brak backshiftu - zachowujemy Present
                                                Continuous
                                            </div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> "We will visit you tomorrow with our children."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="present2" value="a"/>
                                                <span>They say they will visit us the next day with their children.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="present2" value="b"/>
                                                <span>They say they would visit us tomorrow with our children.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="present2" value="c"/>
                                                <span>They say they visited us the next day with their children.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Zmiana zaimków i określeń czasu</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> "I have lived here since last year and I love this
                                            place."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="present3" value="a"/>
                                                <span>He says he has lived there since the year before and he loves that place.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="present3" value="b"/>
                                                <span>He says he had lived here since last year and he loved this place.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="present3" value="c"/>
                                                <span>He says he lives there since the year before and he loves that place.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Present Perfect pozostaje bez zmian + zmiany
                                                miejsca
                                            </div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> "You should finish your work before you leave today."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="present4" value="a"/>
                                                <span>She tells me I should finish my work before I leave that day.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="present4" value="b"/>
                                                <span>She tells me you should finish your work before you leave today.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="present4" value="c"/>
                                                <span>She tells me I should finish my work before I left that day.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Zmiana zaimka "you" na "I" i czasu</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="exercise-actions">
                                    <button className="btn btn-primary check-answers" disabled>Sprawdź odpowiedzi
                                    </button>
                                    <button className="btn btn-secondary reset-exercise"
                                            style={{display: 'none'}}>Spróbuj ponownie
                                    </button>
                                    <div className="exercise-result"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>💡 Zaawansowane wskazówki</h4>
                        <div className="advanced-tips">
                            <div className="tip-category">
                                <h5>🎯 Użycie "that" - opcjonalne</h5>
                                <div className="tip-content">
                                    <p>Słowo "that" w mowie zależnej jest opcjonalne - możesz je pominąć w mowie
                                        potocznej:</p>
                                    <div className="example-group-expanded">
                                        <p><strong>Z "that":</strong> She says <em>that</em> she is coming.</p>
                                        <p><strong>Bez "that":</strong> She says she is coming.</p>
                                        <p><strong>Formalnie:</strong> W piśmie formalnym lepiej używać "that"</p>
                                        <p><strong>Nieformalnie:</strong> W mowie potocznej pomijamy "that"</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tip-category">
                                <h5>⚡ Czasowniki z dopełnieniem</h5>
                                <div className="tip-content">
                                    <p>Niektóre czasowniki (tell, inform, remind) wymagają dopełnienia:</p>
                                    <div className="example-group-expanded">
                                        <p><strong>Tell:</strong> She <em>tells me</em> (that) she's busy. ✅</p>
                                        <p><strong>Say:</strong> She <em>says</em> (that) she's busy. ✅</p>
                                        <p><strong>Błąd:</strong> She tells (that) she's busy. ❌</p>
                                        <p><strong>Poprawnie:</strong> She tells <em>me</em> (that) she's busy. ✅</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tip-category">
                                <h5>🔄 Kolejność w zdaniach złożonych</h5>
                                <div className="tip-content">
                                    <p>Gdy mowa niezależna zawiera kilka zdań, w mowie zależnej łączymy je
                                        spójnikami:</p>
                                    <div className="example-group-expanded">
                                        <p><strong>Niezależna:</strong> "I'm tired. I'm going home. I'll call you
                                            tomorrow."</p>
                                        <p><strong>Zależna:</strong> He says (that) he's tired, <em>so</em> he's going
                                            home <em>and</em> he'll call me the next day.</p>
                                        <p><strong>Spójniki:</strong> and, but, so, because, since</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Podsumowanie - Kluczowe zasady</h4>
                        <div className="summary-table-detailed">
                            <table>
                                <thead>
                                <tr>
                                    <th>Element</th>
                                    <th>Zasada</th>
                                    <th>Przykład</th>
                                    <th>Uwagi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Czasy</td>
                                    <td>Brak backshiftu</td>
                                    <td>I work → He says he works</td>
                                    <td>Zachowujemy oryginalny czas</td>
                                </tr>
                                <tr>
                                    <td>Zaimki</td>
                                    <td>Dostosowanie do kontekstu</td>
                                    <td>I → he/she, my → his/her</td>
                                    <td>Uwaga na osobę mówiącą</td>
                                </tr>
                                <tr>
                                    <td>Czas</td>
                                    <td>Now → then, today → that day</td>
                                    <td>now → then</td>
                                    <td>Dostosowanie do nowego kontekstu</td>
                                </tr>
                                <tr>
                                    <td>Miejsce</td>
                                    <td>Here → there, this → that</td>
                                    <td>here → there</td>
                                    <td>Zmiana perspektywy przestrzennej</td>
                                </tr>
                                <tr>
                                    <td>That</td>
                                    <td>Opcjonalne</td>
                                    <td>She says (that)...</td>
                                    <td>Pomijalne w mowie potocznej</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grammar-tip success">
                            <h5>💪 Klucz do sukcesu</h5>
                            <p>Pamiętaj: <strong>czas teraźniejszy w zdaniu wprowadzającym = brak zmian
                                czasów</strong> w mowie zależnej. Skup się na zaimkach i określeniach czasu/miejsca, a
                                opanujesz mowę zależną w czasie teraźniejszym!</p>
                        </div>
                    </section>
                </>
            ),
        }
    ],
    past: [
        {
            id: 'reported-past-backshift',
            title: 'Backshifting - cofnięcie czasów ⏪',
            excerpt: 'Say/tell w Past wymaga cofnięcia czasu - kompletny przewodnik po backshifting.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Backshifting - cofnięcie czasów w mowie zależnej</h3>
                        <p className="muted">Gdy czasownik wprowadzający jest w czasie przeszłym, cofamy czasy o jeden "stopień" wstecz</p>

                        <div className="backshift-section">
                            <div className="backshift-column">
                                <h4>📝 Zasady cofania czasów</h4>
                                <div className="tense-table">
                                    <div className="table-row header">
                                        <div className="table-cell">Czas w mowie niezależnej</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">Czas w mowie zależnej</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>Present Simple</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>Past Simple</strong></div>
                                    </div>
                                    <div className="table-row example">
                                        <div className="table-cell">"I <em>work</em> here."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">He said he <em>worked</em> there.</div>
                                    </div>

                                    <div className="table-row">
                                        <div className="table-cell"><strong>Present Continuous</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>Past Continuous</strong></div>
                                    </div>
                                    <div className="table-row example">
                                        <div className="table-cell">"I <em>am waiting</em> for you."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">She said she <em>was waiting</em> for me.</div>
                                    </div>

                                    <div className="table-row">
                                        <div className="table-cell"><strong>Present Perfect</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>Past Perfect</strong></div>
                                    </div>
                                    <div className="table-row example">
                                        <div className="table-cell">"I <em>have finished</em> my work."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">He said he <em>had finished</em> his work.</div>
                                    </div>

                                    <div className="table-row">
                                        <div className="table-cell"><strong>Present Perfect Continuous</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>Past Perfect Continuous</strong></div>
                                    </div>
                                    <div className="table-row example">
                                        <div className="table-cell">"I <em>have been studying</em> for hours."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">She said she <em>had been studying</em> for hours.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="backshift-column">
                                <h4>🎯 Zaawansowane zmiany czasów</h4>
                                <div className="tense-table">
                                    <div className="table-row header">
                                        <div className="table-cell">Czas w mowie niezależnej</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">Czas w mowie zależnej</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>Past Simple</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>Past Perfect</strong></div>
                                    </div>
                                    <div className="table-row example">
                                        <div className="table-cell">"I <em>saw</em> that movie."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">He said he <em>had seen</em> that movie.</div>
                                    </div>

                                    <div className="table-row">
                                        <div className="table-cell"><strong>Past Continuous</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>Past Perfect Continuous</strong></div>
                                    </div>
                                    <div className="table-row example">
                                        <div className="table-cell">"I <em>was sleeping</em> when you called."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">She said she <em>had been sleeping</em> when I called.</div>
                                    </div>

                                    <div className="table-row">
                                        <div className="table-cell"><strong>Future Simple (will)</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>Conditional (would)</strong></div>
                                    </div>
                                    <div className="table-row example">
                                        <div className="table-cell">"I <em>will help</em> you."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">He said he <em>would help</em> me.</div>
                                    </div>

                                    <div className="table-row">
                                        <div className="table-cell"><strong>Future Continuous</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>Conditional Continuous</strong></div>
                                    </div>
                                    <div className="table-row example">
                                        <div className="table-cell">"I <em>will be waiting</em> for you."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">She said she <em>would be waiting</em> for me.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⏰ Określenia czasu w backshifting</h4>
                        <div className="time-changes-section">
                            <div className="time-column">
                                <h5>Podstawowe zmiany</h5>
                                <div className="time-table">
                                    <div className="table-row header">
                                        <div className="table-cell">Mowa niezależna</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">Mowa zależna</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>now</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>then</strong></div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>today</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>that day</strong></div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>yesterday</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>the day before</strong></div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>tomorrow</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>the next day</strong></div>
                                    </div>
                                </div>
                            </div>

                            <div className="time-column">
                                <h5>Zaawansowane zmiany</h5>
                                <div className="time-table">
                                    <div className="table-row header">
                                        <div className="table-cell">Mowa niezależna</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">Mowa zależna</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>last week</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>the week before</strong></div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>next month</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>the following month</strong></div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>two days ago</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>two days before</strong></div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>this evening</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>that evening</strong></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>📚 Kompletne przykłady z backshifting</h4>
                        <div className="examples-section">
                            <div className="complete-example">
                                <div className="speech-comparison">
                                    <div className="speech-type">
                                        <h5>Mowa niezależna</h5>
                                        <div className="speech-content">
                                            "<em>I am going</em> to the cinema <em>tonight</em> and <em>I will meet</em> my friends <em>there</em>."
                                        </div>
                                    </div>
                                    <div className="arrow">→</div>
                                    <div className="speech-type">
                                        <h5>Mowa zależna</h5>
                                        <div className="speech-content">
                                            She said (that) <em>she was going</em> to the cinema <em>that night</em> and <em>she would meet</em> her friends <em>there</em>.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="complete-example">
                                <div className="speech-comparison">
                                    <div className="speech-type">
                                        <h5>Mowa niezależna</h5>
                                        <div className="speech-content">
                                            "<em>We have been living</em> here for five years and <em>we bought</em> this house <em>last year</em>."
                                        </div>
                                    </div>
                                    <div className="arrow">→</div>
                                    <div className="speech-type">
                                        <h5>Mowa zależna</h5>
                                        <div className="speech-content">
                                            They said (that) <em>they had been living</em> there for five years and <em>they had bought</em> that house <em>the year before</em>.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Backshifting</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Przekształć zdania z mowy niezależnej na zależną (używając czasu przeszłego):</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> "I am working on the project now."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="backshift1" value="a"/>
                                                <span>He said he was working on the project then.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="backshift1" value="b"/>
                                                <span>He said he is working on the project now.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="backshift1" value="c"/>
                                                <span>He said he worked on the project then.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Present Continuous → Past Continuous + zmiana określeń czasu</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> "We have finished our homework."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="backshift2" value="a"/>
                                                <span>They said they had finished their homework.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="backshift2" value="b"/>
                                                <span>They said they have finished their homework.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="backshift2" value="c"/>
                                                <span>They said they finished their homework.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Present Perfect → Past Perfect</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> "I will call you tomorrow."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="backshift3" value="a"/>
                                                <span>She said she would call me the next day.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="backshift3" value="b"/>
                                                <span>She said she will call me tomorrow.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="backshift3" value="c"/>
                                                <span>She said she called me the next day.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Future Simple → Conditional + zmiana czasu</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> "I saw that movie last week."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="backshift4" value="a"/>
                                                <span>He said he had seen that movie the week before.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="backshift4" value="b"/>
                                                <span>He said he saw that movie last week.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="backshift4" value="c"/>
                                                <span>He said he has seen that movie the week before.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">Past Simple → Past Perfect + zmiana czasu</div>
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
            id: 'past-perfect-exceptions',
            title: 'Past Perfect - przypadki specjalne 🔄',
            excerpt: 'Kiedy Past Simple nie zmienia się na Past Perfect - wyjątki od reguły backshift.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Past Perfect w mowie zależnej - wyjątki</h3>
                        <p className="muted">Nie zawsze musimy zmieniać Past Simple na Past Perfect - poznaj wyjątki od reguły</p>

                        <div className="exceptions-section">
                            <div className="exception-column">
                                <h4>📝 Kiedy NIE zmieniamy Past Simple na Past Perfect?</h4>
                                <div className="exception-table">
                                    <div className="exception-case">
                                        <h5>🎯 Kolejność zdarzeń jest jasna</h5>
                                        <p>Gdy z kontekstu wynika jasno, która czynność wydarzyła się wcześniej</p>
                                        <div className="example-box">
                                            <div className="example-row">
                                                <strong>Mowa niezależna:</strong> "I finished work and then I went home."
                                            </div>
                                            <div className="example-row">
                                                <strong>Mowa zależna:</strong> He said (that) he <em>finished</em> work and then he <em>went</em> home.
                                            </div>
                                            <div className="explanation">
                                                (Kolejność jest jasna z użycia "then")
                                            </div>
                                        </div>
                                    </div>

                                    <div className="exception-case">
                                        <h5>⏰ Określenia czasu</h5>
                                        <p>Gdy użyte są określenia czasu, które jasno wskazują na kolejność</p>
                                        <div className="example-box">
                                            <div className="example-row">
                                                <strong>Mowa niezależna:</strong> "I was born in 1990."
                                            </div>
                                            <div className="example-row">
                                                <strong>Mowa zależna:</strong> She said (that) she <em>was born</em> in 1990.
                                            </div>
                                            <div className="explanation">
                                                (Data jest konkretna i niezmienna)
                                            </div>
                                        </div>
                                    </div>

                                    <div className="exception-case">
                                        <h5>🔁 Czynności habitualne</h5>
                                        <p>Gdy mówimy o przeszłych nawykach lub rutynach</p>
                                        <div className="example-box">
                                            <div className="example-row">
                                                <strong>Mowa niezależna:</strong> "When I was young, I played football every day."
                                            </div>
                                            <div className="example-row">
                                                <strong>Mowa zależna:</strong> He said (that) when he was young, he <em>played</em> football every day.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="exception-column">
                                <h4>🎯 Kiedy ZAWSZE używamy Past Perfect?</h4>
                                <div className="exception-table">
                                    <div className="exception-case">
                                        <h5>📅 Wcześniejsza przeszłość</h5>
                                        <p>Gdy musimy podkreślić, że jedna czynność wydarzyła się przed drugą</p>
                                        <div className="example-box">
                                            <div className="example-row">
                                                <strong>Mowa niezależna:</strong> "I had already left when she arrived."
                                            </div>
                                            <div className="example-row">
                                                <strong>Mowa zależna:</strong> He said (that) he <em>had already left</em> when she arrived.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="exception-case">
                                        <h5>💭 Żale i nierealne sytuacje</h5>
                                        <p>W konstrukcjach typu "I wish", "If only"</p>
                                        <div className="example-box">
                                            <div className="example-row">
                                                <strong>Mowa niezależna:</strong> "I wish I had studied more."
                                            </div>
                                            <div className="example-row">
                                                <strong>Mowa zależna:</strong> She said (that) she wished she <em>had studied</em> more.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Wyjątki Past Perfect</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Zdecyduj, czy w poniższych zdaniach należy użyć Past Perfect, czy zachować Past Simple:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> "I was born in 1990."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="pastperfect1" value="a"/>
                                                <span>She said she was born in 1990.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pastperfect1" value="b"/>
                                                <span>She said she had been born in 1990.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">OKREŚLENIE CZASU - data jest konkretna i niezmienna</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> "I finished work and then went home."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="pastperfect2" value="a"/>
                                                <span>He said he finished work and then went home.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pastperfect2" value="b"/>
                                                <span>He said he had finished work and then had gone home.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">KOLEJNOŚĆ JASNA - "then" wskazuje kolejność zdarzeń</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> "I had already eaten when she arrived."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="pastperfect3" value="a"/>
                                                <span>He said he already ate when she arrived.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pastperfect3" value="b"/>
                                                <span>He said he had already eaten when she arrived.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">WCZEŚNIEJSZA PRZESZŁOŚĆ - "already" wskazuje na czynność wcześniejszą</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> "When I was a child, I played football every day."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="pastperfect4" value="a"/>
                                                <span>She said when she was a child, she played football every day.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="pastperfect4" value="b"/>
                                                <span>She said when she was a child, she had played football every day.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">NAWYKI PRZESZŁE - mówimy o przeszłych rutynach</div>
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
    ],
    'pytania-rozkazy': [
        {
            id: 'reported-questions',
            title: 'Pytania w mowie zależnej ❓',
            excerpt: 'Jak przekształcać pytania - zmiana szyku, brak operatorów, użycie if/whether.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Pytania w mowie zależnej</h3>
                        <p className="muted">Przekształcanie pytań na zdania twierdzące w mowie zależnej</p>

                        <div className="questions-section">
                            <div className="question-column">
                                <h4>📝 Pytania z operatorami (Yes/No questions)</h4>
                                <div className="question-table">
                                    <div className="table-row header">
                                        <div className="table-cell">Pytanie bezpośrednie</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">Mowa zależna</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"<em>Are you</em> coming to the party?"</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">She asked <em>if I was coming</em> to the party.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"<em>Do you like</em> pizza?"</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">He asked <em>whether I liked</em> pizza.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"<em>Can you swim</em>?"</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">They asked <em>if I could swim</em>.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"<em>Have you finished</em> your work?"</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">She asked <em>whether I had finished</em> my work.</div>
                                    </div>
                                </div>
                                <div className="rule-box">
                                    <strong>Zasada:</strong> Używamy "if" lub "whether" + szyk zdania twierdzącego
                                </div>
                            </div>

                            <div className="question-column">
                                <h4>📝 Pytania z zaimkami pytającymi (Wh- questions)</h4>
                                <div className="question-table">
                                    <div className="table-row header">
                                        <div className="table-cell">Pytanie bezpośrednie</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">Mowa zależna</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"<em>Where do you live</em>?"</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">She asked <em>where I lived</em>.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"<em>What time will you arrive</em>?"</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">He asked <em>what time I would arrive</em>.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"<em>Why are you crying</em>?"</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">They asked <em>why I was crying</em>.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"<em>How much does it cost</em>?"</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">She asked <em>how much it cost</em>.</div>
                                    </div>
                                </div>
                                <div className="rule-box">
                                    <strong>Zasada:</strong> Zachowujemy zaimek pytający + szyk zdania twierdzącego
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Czasowniki wprowadzające pytania</h4>
                        <div className="verbs-section">
                            <div className="verbs-column">
                                <h5>Podstawowe</h5>
                                <div className="verbs-table">
                                    <div className="table-row header">
                                        <div className="table-cell">Czasownik</div>
                                        <div className="table-cell">Przykład</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>ask</strong></div>
                                        <div className="table-cell">She asked where I lived.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>wonder</strong></div>
                                        <div className="table-cell">I wonder what time it is.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>want to know</strong></div>
                                        <div className="table-cell">He wanted to know if I was coming.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>inquire</strong></div>
                                        <div className="table-cell">They inquired whether we had reservations.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="verbs-column">
                                <h5>Zaawansowane</h5>
                                <div className="verbs-table">
                                    <div className="table-row header">
                                        <div className="table-cell">Czasownik</div>
                                        <div className="table-cell">Przykład</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>question</strong></div>
                                        <div className="table-cell">The police questioned why he was there.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>query</strong></div>
                                        <div className="table-cell">She queried how much it would cost.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>interrogate</strong></div>
                                        <div className="table-cell">They interrogated him about his whereabouts.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>demand to know</strong></div>
                                        <div className="table-cell">He demanded to know what had happened.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h3>Rozkazy i prośby w mowie zależnej 🔊</h3>
                        <div className="commands-section">
                            <div className="command-column">
                                <h4>📝 Rozkazy (Imperatives)</h4>
                                <div className="command-table">
                                    <div className="table-row header">
                                        <div className="table-cell">Rozkaz bezpośredni</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">Mowa zależna</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"<em>Close the door</em>!"</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">She <em>told me to close</em> the door.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"<em>Don't be late</em>!"</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">He <em>told me not to be</em> late.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"<em>Be quiet</em>!"</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">The teacher <em>told us to be</em> quiet.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"<em>Don't touch that</em>!"</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">She <em>told him not to touch</em> that.</div>
                                    </div>
                                </div>
                                <div className="rule-box">
                                    <strong>Zasada:</strong> Używamy "tell/ask + dopełnienie + to + bezokolicznik"
                                </div>
                            </div>

                            <div className="command-column">
                                <h4>📝 Prośby (Requests)</h4>
                                <div className="command-table">
                                    <div className="table-row header">
                                        <div className="table-cell">Prośba bezpośrednia</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">Mowa zależna</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"<em>Please help me</em>."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">She <em>asked me to help</em> her.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"<em>Could you open the window</em>?"</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">He <em>asked me to open</em> the window.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"<em>Would you mind waiting</em>?"</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">They <em>asked us to wait</em>.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"<em>Please don't leave</em>."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">She <em>asked him not to leave</em>.</div>
                                    </div>
                                </div>
                                <div className="rule-box">
                                    <strong>Zasada:</strong> Używamy "ask/beg + dopełnienie + to + bezokolicznik"
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Pytania i rozkazy</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Przekształć pytania i rozkazy na mowę zależną:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> "Are you coming to the party?"</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="questions1" value="a"/>
                                                <span>She asked if I was coming to the party.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="questions1" value="b"/>
                                                <span>She asked was I coming to the party.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="questions1" value="c"/>
                                                <span>She asked if I am coming to the party.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">PYTANIE YES/NO - if/whether + szyk twierdzący + backshift</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> "Where do you live?"</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="questions2" value="a"/>
                                                <span>He asked where I lived.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="questions2" value="b"/>
                                                <span>He asked where did I live.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="questions2" value="c"/>
                                                <span>He asked where do I live.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">PYTANIE WH- - zaimek pytający + szyk twierdzący + backshift</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> "Close the window!"</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="questions3" value="a"/>
                                                <span>She told me to close the window.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="questions3" value="b"/>
                                                <span>She told me close the window.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="questions3" value="c"/>
                                                <span>She said me to close the window.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">ROZKAZ - tell + dopełnienie + to + bezokolicznik</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> "Please don't be late."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="questions4" value="a"/>
                                                <span>He asked me not to be late.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="questions4" value="b"/>
                                                <span>He asked me to not be late.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="questions4" value="c"/>
                                                <span>He said me not to be late.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">PROŚBA PRZECZĄCA - ask + dopełnienie + not + to + bezokolicznik</div>
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
    ],
    'czasowniki-modalne': [
        {
            id: 'reported-modals',
            title: 'Czasowniki modalne w mowie zależnej 🔧',
            excerpt: 'Will→would, can→could, may→might, must→had to - zmiany czasowników modalnych.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Czasowniki modalne w mowie zależnej</h3>
                        <p className="muted">Specjalne zasady przekształcania czasowników modalnych</p>

                        <div className="modals-section">
                            <div className="modal-column">
                                <h4>📝 Standardowe zmiany</h4>
                                <div className="modal-table">
                                    <div className="table-row header">
                                        <div className="table-cell">Mowa niezależna</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">Mowa zależna</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"I <em>will help</em> you."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">He said he <em>would help</em> me.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"I <em>can speak</em> French."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">She said she <em>could speak</em> French.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"I <em>may come</em> later."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">He said he <em>might come</em> later.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"<em>Shall I open</em> the window?"</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">She asked <em>if she should open</em> the window.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-column">
                                <h4>🎯 Specjalne przypadki</h4>
                                <div className="special-modals">
                                    <div className="special-case">
                                        <h5>must</h5>
                                        <div className="usage-type">
                                            <strong>Obowiązek teraźniejszy:</strong>
                                            <div className="example-box">
                                                <div className="example-row">
                                                    "I <em>must finish</em> this."
                                                </div>
                                                <div className="example-row">
                                                    → He said he <em>must finish/had to finish</em> that.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="usage-type">
                                            <strong>Wnioskowanie:</strong>
                                            <div className="example-box">
                                                <div className="example-row">
                                                    "You <em>must be</em> tired."
                                                </div>
                                                <div className="example-row">
                                                    → She said I <em>must be</em> tired.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="special-case">
                                        <h5>could, would, should, might</h5>
                                        <div className="usage-type">
                                            <strong>Bez zmian w niektórych kontekstach</strong>
                                            <div className="example-box">
                                                <div className="example-row">
                                                    "I <em>would like</em> some coffee."
                                                </div>
                                                <div className="example-row">
                                                    → He said he <em>would like</em> some coffee.
                                                </div>
                                            </div>
                                            <div className="example-box">
                                                <div className="example-row">
                                                    "You <em>should see</em> a doctor."
                                                </div>
                                                <div className="example-row">
                                                    → She said I <em>should see</em> a doctor.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>💡 Czasowniki modalne perfect</h4>
                        <div className="perfect-modals-section">
                            <div className="perfect-table">
                                <div className="table-row header">
                                    <div className="table-cell">Konstrukcja</div>
                                    <div className="table-cell">Mowa niezależna</div>
                                    <div className="table-cell">→</div>
                                    <div className="table-cell">Mowa zależna</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell"><strong>would have + past participle</strong></div>
                                    <div className="table-cell">"I <em>would have called</em> you."</div>
                                    <div className="table-cell">→</div>
                                    <div className="table-cell">He said he <em>would have called</em> me.</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell"><strong>could have + past participle</strong></div>
                                    <div className="table-cell">"I <em>could have helped</em> you."</div>
                                    <div className="table-cell">→</div>
                                    <div className="table-cell">She said she <em>could have helped</em> me.</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell"><strong>should have + past participle</strong></div>
                                    <div className="table-cell">"You <em>should have told</em> me."</div>
                                    <div className="table-cell">→</div>
                                    <div className="table-cell">He said I <em>should have told</em> him.</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell"><strong>might have + past participle</strong></div>
                                    <div className="table-cell">"I <em>might have left</em> it at home."</div>
                                    <div className="table-cell">→</div>
                                    <div className="table-cell">She said she <em>might have left</em> it at home.</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Czasowniki modalne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Przekształć zdania z czasownikami modalnymi na mowę zależną:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> "I can speak three languages."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modals1" value="a"/>
                                                <span>She said she could speak three languages.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modals1" value="b"/>
                                                <span>She said she can speak three languages.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modals1" value="c"/>
                                                <span>She said she can spoke three languages.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">CAN → COULD - standardowa zmiana czasownika modalnego</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> "You must finish your homework."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modals2" value="a"/>
                                                <span>He said I had to finish my homework.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modals2" value="b"/>
                                                <span>He said I must finish my homework.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modals2" value="c"/>
                                                <span>He said I must to finish my homework.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">MUST → HAD TO - gdy mówimy o obowiązku w przeszłości</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> "I would like some coffee."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modals3" value="a"/>
                                                <span>She said she would like some coffee.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modals3" value="b"/>
                                                <span>She said she will like some coffee.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modals3" value="c"/>
                                                <span>She said she would liked some coffee.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">WOULD - bez zmian w wyrażeniach grzecznościowych</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> "You should see a doctor."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="modals4" value="a"/>
                                                <span>He said I should see a doctor.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modals4" value="b"/>
                                                <span>He said I shall see a doctor.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="modals4" value="c"/>
                                                <span>He said I should to see a doctor.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">SHOULD - bez zmian (tak samo jak might, ought to)</div>
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
    ],
    'wyjatki-specjalne': [
        {
            id: 'reported-exceptions',
            title: 'Wyjątki i przypadki specjalne ⚠️',
            excerpt: 'Fakty ogólne, prawdy uniwersalne, sytuacje nadal aktualne - kiedy nie stosujemy backshift.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Wyjątki od reguły backshift</h3>
                        <p className="muted">Sytuacje, w których nie cofamy czasów mimo czasu przeszłego w zdaniu wprowadzającym</p>

                        <div className="exceptions-section">
                            <div className="exception-column">
                                <h4>🌍 Fakty ogólne i prawdy uniwersalne</h4>
                                <div className="exception-table">
                                    <div className="table-row header">
                                        <div className="table-cell">Mowa niezależna</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">Mowa zależna</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"The sun <em>rises</em> in the east."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">He said the sun <em>rises</em> in the east.</div>
                                    </div>
                                    <div className="table-row explanation">
                                        <div className="table-cell" colSpan="3">
                                            <strong>Wyjaśnienie:</strong> Fakt nauczny - zawsze prawdziwy
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"Water <em>boils</em> at 100°C."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">She said water <em>boils</em> at 100°C.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"Humans <em>need</em> oxygen to survive."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">They said humans <em>need</em> oxygen to survive.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="exception-column">
                                <h4>⏰ Sytuacje nadal aktualne</h4>
                                <div className="exception-table">
                                    <div className="table-row header">
                                        <div className="table-cell">Kontekst</div>
                                        <div className="table-cell">Mowa niezależna</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">Mowa zależna</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>Nadal aktualne</strong></div>
                                        <div className="table-cell">"I <em>work</em> in a bank."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">He said he <em>works</em> in a bank.</div>
                                    </div>
                                    <div className="table-row explanation">
                                        <div className="table-cell" colSpan="4">
                                            <strong>Wyjaśnienie:</strong> Jeśli nadal tam pracuje
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>Już nieaktualne</strong></div>
                                        <div className="table-cell">"I <em>work</em> in a bank."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">He said he <em>worked</em> in a bank.</div>
                                    </div>
                                    <div className="table-row explanation">
                                        <div className="table-cell" colSpan="4">
                                            <strong>Wyjaśnienie:</strong> Jeśli już tam nie pracuje
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Inne ważne wyjątki</h4>
                        <div className="other-exceptions-section">
                            <div className="exception-column">
                                <h5>Zdania warunkowe typu 2 i 3</h5>
                                <div className="exception-table">
                                    <div className="table-row header">
                                        <div className="table-cell">Mowa niezależna</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">Mowa zależna</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"If I <em>had</em> money, I <em>would buy</em> a car."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">She said if she <em>had</em> money, she <em>would buy</em> a car.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">"If I <em>had known</em>, I <em>would have come</em>."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">He said if he <em>had known</em>, he <em>would have come</em>.</div>
                                    </div>
                                </div>
                                <div className="rule-box">
                                    <strong>Zasada:</strong> Nie zmieniamy formy czasowników w zdaniach warunkowych typu 2 i 3
                                </div>
                            </div>

                            <div className="exception-column">
                                <h5>Czasowniki specjalne</h5>
                                <div className="exception-table">
                                    <div className="table-row header">
                                        <div className="table-cell">Konstrukcja</div>
                                        <div className="table-cell">Mowa niezależna</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">Mowa zależna</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>used to</strong></div>
                                        <div className="table-cell">"I <em>used to smoke</em>."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">He said he <em>used to smoke</em>.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>ought to</strong></div>
                                        <div className="table-cell">"You <em>ought to see</em> a doctor."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">She said I <em>ought to see</em> a doctor.</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>had better</strong></div>
                                        <div className="table-cell">"You <em>had better hurry</em>."</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">He said I <em>had better hurry</em>.</div>
                                    </div>
                                </div>
                                <div className="rule-box">
                                    <strong>Zasada:</strong> Bez zmian dla used to, ought to, had better
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>💡 Wyrażenia, które zawsze się zmieniają</h4>
                        <div className="changes-section">
                            <div className="change-column">
                                <h5>Określenia miejsca</h5>
                                <div className="change-table">
                                    <div className="table-row header">
                                        <div className="table-cell">Mowa niezależna</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">Mowa zależna</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>here</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>there</strong></div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>this</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>that</strong></div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>these</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>those</strong></div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>come</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>go</strong></div>
                                    </div>
                                </div>
                            </div>

                            <div className="change-column">
                                <h5>Określenia czasu (gdy kontekst się zmienił)</h5>
                                <div className="change-table">
                                    <div className="table-row header">
                                        <div className="table-cell">Mowa niezależna</div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell">Mowa zależna</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>now</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>then</strong></div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>today</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>that day</strong></div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>yesterday</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>the day before</strong></div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell"><strong>tomorrow</strong></div>
                                        <div className="table-cell">→</div>
                                        <div className="table-cell"><strong>the next day</strong></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Wyjątki i przypadki specjalne</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Zdecyduj, czy w poniższych zdaniach należy zastosować backshift, czy zachować oryginalny czas:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> "The sun rises in the east."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="exceptions1" value="a"/>
                                                <span>He said the sun rises in the east.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="exceptions1" value="b"/>
                                                <span>He said the sun rose in the east.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">FAKT UNIWERSALNY - zawsze prawdziwy, brak backshiftu</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> "I work in a bank." (nadal tam pracuje)</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="exceptions2" value="a"/>
                                                <span>She said she works in a bank.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="exceptions2" value="b"/>
                                                <span>She said she worked in a bank.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">SYTUACJA NADAL AKTUALNA - brak backshiftu</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> "If I had money, I would travel."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="exceptions3" value="a"/>
                                                <span>He said if he had money, he would travel.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="exceptions3" value="b"/>
                                                <span>He said if he had had money, he would have traveled.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">ZDANIE WARUNKOWE TYPU 2 - bez zmian czasów</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> "I used to play tennis."</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="exceptions4" value="a"/>
                                                <span>She said she used to play tennis.</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="exceptions4" value="b"/>
                                                <span>She said she had used to play tennis.</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback">
                                            <div className="explanation">USED TO - bez zmian (tak samo jak ought to, had better)</div>
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

export default function ReportedSpeech() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const active = section ?? 'present'
    const topicId = searchParams.get('topic')
    const topics = TOPICS[active] ?? []
    const selected = topics.find(t => t.id === topicId)
    const basePath = `/gramatyka/mowa-zależna/${active}`

    return (
        <main className="topic-layout">
            <div className="container">
                <header className="topic-header">
                    <h2>Mowa zależna (Reported Speech)</h2>
                    <p className="muted">Kompletny przewodnik po przekształcaniu wypowiedzi - od podstaw do zaawansowanych przypadków</p>
                </header>

                <nav className="subnav" aria-label="Podstrony: Mowa zależna">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/gramatyka/mowa-zależna/${s.id}`}
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
                                <h3>Opanuj mowę zależną! 🗣️</h3>
                                <p>Wybierz kategorię, aby poznać zasady przekształcania wypowiedzi z mowy niezależnej na zależną.
                                    Od podstawowych zmian przez zaawansowane przypadki specjalne.</p>
                            </div>
                            <TopicsGrid basePath={basePath} active={active} />
                        </>
                    )}
                </article>
            </div>
        </main>
    )
}