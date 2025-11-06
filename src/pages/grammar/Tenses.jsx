import React, { useEffect } from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import '../../styles/topic-cards.css'

const sections = [
    { id: 'present', label: 'Czasy Teraźniejsze' },
    { id: 'past', label: 'Czasy Przeszłe' },
    { id: 'future', label: 'Czasy Przyszłe' },
]

// Tematy (boksy) w ramach każdej zakładki czasów
const TOPICS = {
    present: [
        {
            id: 'present-simple',
            title: 'Present Simple 🎯',
            excerpt: 'Nawyki, fakty, rozkłady - podstawa codziennej komunikacji.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Present Simple - Czas Teraźniejszy Prosty</h3>
                        <p className="muted">Najczęściej używany czas w języku angielskim - opisuje stałe sytuacje i regularne czynności</p>
                            <div className="tense-forms">
                                <h4>📝 Budowa zdań</h4>
                                <div className="forms-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Typ zdania</th>
                                            <th>Wzór</th>
                                            <th>Przykład</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><strong>Twierdzące</strong></td>
                                            <td>I/you/we/they + V1<br/>he/she/it + V1 + s</td>
                                            <td>"I <strong>work</strong> here."<br/>"She <strong>works</strong> here."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Przeczące</strong></td>
                                            <td>I/you/we/they + don't + V1<br/>he/she/it + doesn't + V1</td>
                                            <td>"I <strong>don't work</strong> here."<br/>"She <strong>doesn't work</strong> here."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Pytające</strong></td>
                                            <td>Do + I/you/we/they + V1?<br/>Does + he/she/it + V1?</td>
                                            <td>"<strong>Do</strong> you <strong>work</strong> here?"<br/>"<strong>Does</strong> she <strong>work</strong> here?"</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grammar-tip">
                                    <h5>💡 Zasady dodawania -s w 3 os. l.poj.</h5>
                                    <div className="rules-list">
                                        <div className="rule-item">
                                            <strong>Większość czasowników:</strong> work → works, play → plays
                                        </div>
                                        <div className="rule-item">
                                            <strong>Końcówki -o, -s, -sh, -ch, -x:</strong> go → goes, miss → misses, wash → washes, watch → watches, fix → fixes
                                        </div>
                                        <div className="rule-item">
                                            <strong>-y po spółgłosce → -ies:</strong> study → studies, try → tries, fly → flies
                                        </div>
                                        <div className="rule-item">
                                            <strong>-y po samogłosce + -s:</strong> play → plays, buy → buys, enjoy → enjoys
                                        </div>
                                        <div className="rule-item">
                                            <strong>Wyjątki:</strong> have → has, do → does, say → says
                                        </div>
                                    </div>
                                </div>

                                <div className="grammar-tip warning">
                                    <h5>⚠️ Częste błędy</h5>
                                    <ul>
                                        <li>❌ "She don't like coffee." → ✅ "She <strong>doesn't like</strong> coffee."</li>
                                        <li>❌ "He work here." → ✅ "He <strong>works</strong> here."</li>
                                        <li>❌ "Does she works here?" → ✅ "Does she <strong>work</strong> here?"</li>
                                    </ul>
                                </div>
                            </div>
                        <div className="tense-grid">
                            <div className="tense-usage">
                                <h4>🎯 Kiedy używamy?</h4>
                                <div className="usage-cases">
                                    <div className="usage-case">
                                        <h5>🔁 Nawyki i rutyny</h5>
                                        <p><strong>Słowa kluczowe:</strong> always, usually, often, sometimes, rarely, never, every day/week/month, on Mondays</p>
                                        <div className="example-group">
                                            <p>"I <em>usually work</em> from 9 to 5." - Zazwyczaj pracuję od 9 do 17.</p>
                                            <p>"She <em>always goes</em> to the gym every day." - Ona zawsze chodzi na siłownię codziennie.</p>
                                            <p>"They <em>never eat</em> meat on Fridays." - Oni nigdy nie jedzą mięsa w piątki.</p>
                                            <p>"We <em>often visit</em> our grandparents at weekends." - Często odwiedzamy naszych dziadków w weekendy.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>🌍 Fakty i prawdy ogólne</h5>
                                        <p><strong>Słowa kluczowe:</strong> generally, normally, typically</p>
                                        <div className="example-group">
                                            <p>"The sun <em>rises</em> in the east." - Słońce wschodzi na wschodzie.</p>
                                            <p>"Water <em>boils</em> at 100°C." - Woda wrze w 100°C.</p>
                                            <p>"Cats <em>hate</em> water." - Koty nienawidzą wody.</p>
                                            <p>"The Earth <em>revolves</em> around the Sun." - Ziemia krąży wokół Słońca.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>📅 Rozkłady i harmonogramy</h5>
                                        <p><strong>Słowa kluczowe:</strong> timetable, schedule, according to the plan</p>
                                        <div className="example-group">
                                            <p>"The train <em>leaves</em> at 7 PM." - Pociąg odjeżdża o 19:00.</p>
                                            <p>"The store <em>opens</em> at 9 AM." - Sklep otwiera się o 9:00.</p>
                                            <p>"The lesson <em>starts</em> at 8:30." - Lekcja zaczyna się o 8:30.</p>
                                            <p>"The plane <em>takes off</em> at 14:25." - Samolot startuje o 14:25.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>💭 Stany umysłu, emocji i posiadania</h5>
                                        <p><strong>Słowa kluczowe:</strong> feel, think, believe, know, understand, want, need</p>
                                        <div className="example-group">
                                            <p>"I <em>like</em> chocolate." - Lubię czekoladę.</p>
                                            <p>"He <em>knows</em> the answer." - On zna odpowiedź.</p>
                                            <p>"She <em>believes</em> in ghosts." - Ona wierzy w duchy.</p>
                                            <p>"We <em>need</em> more time." - Potrzebujemy więcej czasu.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>📝 Instrukcje i wskazówki</h5>
                                        <div className="example-group">
                                            <p>"First you <em>mix</em> the ingredients." - Najpierw mieszasz składniki.</p>
                                            <p>"You <em>press</em> this button to start." - Naciskasz ten przycisk, żeby zacząć.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Czasowniki stanowe w Present Simple</h4>
                        <p>Niektóre czasowniki zwykle nie występują w formach Continuous - opisują stany, a nie czynności:</p>

                        <div className="stative-verbs">
                            <div className="verb-group">
                                <h5>🧠 Myślenie i wiedza</h5>
                                <p><strong>know, believe, understand, remember, forget, think</strong> (w znaczeniu "uważać"), <strong>mean, realize, suppose</strong></p>
                                <div className="example-group">
                                    <p>"I <em>know</em> the answer." (nie: "I am knowing")</p>
                                    <p>"She <em>believes</em> in magic." (nie: "is believing")</p>
                                    <p>"Do you <em>understand</em> the question?" (nie: "Are you understanding")</p>
                                </div>
                            </div>

                            <div className="verb-group">
                                <h5>💖 Emocje i preferencje</h5>
                                <p><strong>like, love, hate, prefer, want, need, wish, desire</strong></p>
                                <div className="example-group">
                                    <p>"She <em>loves</em> chocolate." (nie: "She is loving")</p>
                                    <p>"I <em>prefer</em> tea to coffee." (nie: "am preferring")</p>
                                    <p>"They <em>want</em> to leave now." (nie: "are wanting")</p>
                                </div>
                            </div>

                            <div className="verb-group">
                                <h5>👁️ Zmysły</h5>
                                <p><strong>see, hear, smell, taste, feel, look, sound</strong></p>
                                <div className="example-group">
                                    <p>"This coffee <em>smells</em> amazing." (nie: "is smelling")</p>
                                    <p>"You <em>look</em> tired today." (nie: "are looking")</p>
                                    <p>"The music <em>sounds</em> beautiful." (nie: "is sounding")</p>
                                </div>
                            </div>

                            <div className="verb-group">
                                <h5>📊 Posiadanie i relacje</h5>
                                <p><strong>have, own, possess, belong, contain, consist, include</strong></p>
                                <div className="example-group">
                                    <p>"I <em>have</em> two brothers." (nie: "am having")</p>
                                    <p>"This book <em>belongs</em> to me." (nie: "is belonging")</p>
                                    <p>"Water <em>contains</em> hydrogen." (nie: "is containing")</p>
                                </div>
                            </div>

                            <div className="grammar-tip warning">
                                <h5>💡 UWAGA: Czasowniki z podwójnym znaczeniem</h5>
                                <p>Niektóre czasowniki mogą być używane w obu formach, ale zmieniają znaczenie:</p>
                                <div className="example-group">
                                    <p><strong>think:</strong> "I think he's nice." (myślę, uważam) vs "I'm thinking about the problem." (rozmyślam)</p>
                                    <p><strong>have:</strong> "I have a car." (posiadam) vs "I'm having lunch." (jem obiad)</p>
                                    <p><strong>see:</strong> "I see the mountains." (widzę) vs "I'm seeing my doctor tomorrow." (spotykam się)</p>
                                    <p><strong>taste:</strong> "This tastes good." (ma smak) vs "I'm tasting the soup." (próbuję smak)</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Present Simple</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę Present Simple:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> She ______ (work) in a bank.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="simple_present1" value="a" />
                                                <span>work</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_present1" value="b" />
                                                <span>works</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_present1" value="c" />
                                                <span>working</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">3 os. l.poj. wymaga końcówki -s: works</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> They ______ (not/like) spicy food.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="simple_present2" value="a" />
                                                <span>doesn't like</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_present2" value="b" />
                                                <span>don't like</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_present2" value="c" />
                                                <span>not like</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">They = forma mnoga, więc używamy "don't"</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> ______ your brother ______ (play) tennis?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="simple_present3" value="a" />
                                                <span>Do, play</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_present3" value="b" />
                                                <span>Does, plays</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_present3" value="c" />
                                                <span>Does, play</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Your brother = 3 os. l.poj., więc "Does" + bezokolicznik</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> My sister ______ (study) at university.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="simple_present4" value="a" />
                                                <span>study</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_present4" value="b" />
                                                <span>studies</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_present4" value="c" />
                                                <span>studying</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">-y po spółgłosce → -ies: studies</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> The train ______ (leave) at 8 PM every day.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="simple_present5" value="a" />
                                                <span>leave</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_present5" value="b" />
                                                <span>leaves</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_present5" value="c" />
                                                <span>leaving</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Rozkład jazdy + 3 os. l.poj.: leaves</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> Water ______ (boil) at 100 degrees.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="simple_present6" value="a" />
                                                <span>boil</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_present6" value="b" />
                                                <span>boils</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_present6" value="c" />
                                                <span>boiling</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Fakt naukowy + 3 os. l.poj.: boils</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> I ______ (have) two brothers.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="simple_present7" value="a" />
                                                <span>have</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_present7" value="b" />
                                                <span>has</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_present7" value="c" />
                                                <span>having</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">I = have (wyjątek: have zamiast haves)</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> He ______ (do) his homework every evening.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="simple_present8" value="a" />
                                                <span>do</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_present8" value="b" />
                                                <span>does</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_present8" value="c" />
                                                <span>doing</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">He = does (wyjątek: do → does)</div>
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
            id: 'present-continuous',
            title: 'Present Continuous ⏳',
            excerpt: 'Czynności w trakcie teraz oraz plany na najbliższą przyszłość.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Present Continuous - Czas Teraźniejszy Ciągły</h3>
                        <p className="muted">Opisuje czynności trwające w momencie mówienia lub tymczasowe sytuacje</p>
                            <div className="tense-forms">
                                <h4>📝 Budowa zdań</h4>
                                <div className="forms-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Typ zdania</th>
                                            <th>Wzór</th>
                                            <th>Przykład</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><strong>Twierdzące</strong></td>
                                            <td>I + am + V-ing<br/>he/she/it + is + V-ing<br/>you/we/they + are + V-ing</td>
                                            <td>"I <strong>am working</strong> now."<br/>"She <strong>is working</strong> now."<br/>"They <strong>are working</strong> now."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Przeczące</strong></td>
                                            <td>I + am not + V-ing<br/>he/she/it + isn't + V-ing<br/>you/we/they + aren't + V-ing</td>
                                            <td>"I <strong>am not working</strong> now."<br/>"She <strong>isn't working</strong> now."<br/>"They <strong>aren't working</strong> now."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Pytające</strong></td>
                                            <td>Am + I + V-ing?<br/>Is + he/she/it + V-ing?<br/>Are + you/we/they + V-ing?</td>
                                            <td>"<strong>Are</strong> you <strong>working</strong> now?"<br/>"<strong>Is</strong> she <strong>working</strong> now?"<br/>"<strong>Are</strong> they <strong>working</strong> now?"</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grammar-tip">
                                    <h5>💡 Szczegółowe zasady tworzenia formy -ing</h5>
                                    <div className="rules-list">
                                        <div className="rule-item">
                                            <strong>Większość czasowników:</strong> work → working, play → playing, read → reading
                                        </div>
                                        <div className="rule-item">
                                            <strong>Usuwanie końcowego -e:</strong> take → taking, write → writing, make → making
                                        </div>
                                        <div className="rule-item">
                                            <strong>Podwajanie ostatniej spółgłoski:</strong> run → running, swim → swimming, stop → stopping<br/>
                                            <small>(gdy czasownik kończy się na: spółgłoska-samogłoska-spółgłoska + akcent)</small>
                                        </div>
                                        <div className="rule-item">
                                            <strong>-ie → -ying:</strong> lie → lying, die → dying, tie → tying
                                        </div>
                                        <div className="rule-item">
                                            <strong>-y pozostaje bez zmian:</strong> study → studying, play → playing, enjoy → enjoying
                                        </div>
                                        <div className="rule-item">
                                            <strong>Wyjątki:</strong>
                                            <ul>
                                                <li>be → being</li>
                                                <li>see → seeing</li>
                                                <li>age → ageing/aging</li>
                                                <li>dye → dyeing (aby odróżnić od die → dying)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="grammar-tip warning">
                                    <h5>⚠️ Częste błędy</h5>
                                    <ul>
                                        <li>❌ "I working now." → ✅ "I <strong>am working</strong> now."</li>
                                        <li>❌ "She is work now." → ✅ "She <strong>is working</strong> now."</li>
                                        <li>❌ "Are you work now?" → ✅ "<strong>Are you working</strong> now?"</li>
                                        <li>❌ "They no working." → ✅ "They <strong>aren't working</strong>."</li>
                                    </ul>
                                </div>
                            </div>
                        <div className="tense-grid">
                            <div className="tense-usage">
                                <h4>🎯 Kiedy używamy?</h4>
                                <div className="usage-cases">
                                    <div className="usage-case">
                                        <h5>⏰ Czynności teraz</h5>
                                        <p><strong>Słowa kluczowe:</strong> now, right now, at the moment, at present, currently, just now</p>
                                        <div className="example-group">
                                            <p>"I <em>am reading</em> a book right now." - Teraz czytam książkę.</p>
                                            <p>"She <em>is cooking</em> dinner at the moment." - Ona właśnie gotuje obiad.</p>
                                            <p>"Look! It <em>is raining</em>." - Popatrz! Pada.</p>
                                            <p>"They <em>are watching</em> TV now." - Oni teraz oglądają telewizję.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>📅 Tymczasowe sytuacje</h5>
                                        <p><strong>Słowa kluczowe:</strong> this week, this month, these days, temporarily, for now</p>
                                        <div className="example-group">
                                            <p>"I <em>am staying</em> with my parents this week." - Mieszkam u rodziców w tym tygodniu.</p>
                                            <p>"He <em>is working</em> on a special project this month." - On pracuje nad specjalnym projektem w tym miesiącu.</p>
                                            <p>"She <em>is studying</em> hard these days." - Ona ciężko się uczy w tych dniach.</p>
                                            <p>"We <em>are living</em> in a hotel temporarily." - Mieszkamy w hotelu tymczasowo.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>🗓️ Ustalone plany na przyszłość</h5>
                                        <p><strong>Słowa kluczowe:</strong> tomorrow, next week, next month, on Saturday, in the future</p>
                                        <div className="example-group">
                                            <p>"We <em>are meeting</em> at 6 PM tomorrow." - Spotykamy się jutro o 18:00.</p>
                                            <p>"I <em>am flying</em> to Paris next week." - Lecę do Paryża w przyszłym tygodniu.</p>
                                            <p>"They <em>are getting</em> married in June." - Oni biorą ślub w czerwcu.</p>
                                            <p>"What <em>are you doing</em> this evening?" - Co robisz dziś wieczorem?</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>📈 Zmiany i trendy</h5>
                                        <p><strong>Słowa kluczowe:</strong> more and more, increasingly, gradually, slowly</p>
                                        <div className="example-group">
                                            <p>"The climate <em>is getting</em> warmer." - Klimat się ociepla.</p>
                                            <p>"More people <em>are using</em> electric cars." - Więcej ludzi używa samochodów elektrycznych.</p>
                                            <p>"Technology <em>is developing</em> rapidly." - Technologia rozwija się szybko.</p>
                                            <p>"She <em>is getting</em> better at English." - Ona coraz lepiej zna angielski.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>😠 Irritating habits (denerwujące nawyki)</h5>
                                        <p><strong>Słowa kluczowe:</strong> always, constantly, forever</p>
                                        <div className="example-group">
                                            <p>"He <em>is always complaining</em> about something." - On zawsze na coś narzeka.</p>
                                            <p>"She <em>is constantly interrupting</em> me." - Ona ciągle mi przerywa.</p>
                                            <p>"You <em>are forever losing</em> your keys!" - Ty wiecznie gubisz swoje klucze!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>⚠️ Present Simple vs Present Continuous - Kluczowe różnice</h4>
                        <div className="tense-comparison">
                            <div className="comparison-case">
                                <h5>🎯 Present Simple - STAŁOŚĆ</h5>
                                <div className="example-group">
                                    <p>"I <em>work</em> in an office." - Pracuję w biurze (stała praca)</p>
                                    <p>"She <em>plays</em> tennis." - Gra w tenisa (umiejętność/hobby)</p>
                                    <p>"Water <em>boils</em> at 100°C." - Woda wrze w 100°C (fakt naukowy)</p>
                                    <p>"The train <em>leaves</em> at 7 PM." - Pociąg odjeżdża o 19:00 (rozkład)</p>
                                    <p>"I <em>like</em> coffee." - Lubię kawę (preferencja)</p>
                                </div>
                            </div>

                            <div className="comparison-case">
                                <h5>⏳ Present Continuous - TYMCZASOWOŚĆ</h5>
                                <div className="example-group">
                                    <p>"I <em>am working</em> from home today." - Pracuję dziś z domu (tymczasowo)</p>
                                    <p>"She <em>is playing</em> tennis right now." - Gra teraz w tenisa (w tej chwili)</p>
                                    <p>"The water <em>is boiling</em> now." - Woda się teraz gotuje (w tym momencie)</p>
                                    <p>"I <em>am taking</em> the 7 PM train." - Jadę pociągiem o 19:00 (plan)</p>
                                    <p>"I <em>am liking</em> this coffee more and more." - Coraz bardziej mi smakuje ta kawa (zmiana)</p>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip">
                            <h5>🔍 Test: Który czas wybrać?</h5>
                            <div className="quiz-examples">
                                <p><strong>1. "I usually _______ (get up) at 7 AM."</strong> → Present Simple (nawyki)</p>
                                <p><strong>2. "Look! It _______ (snow)."</strong> → Present Continuous (teraz)</p>
                                <p><strong>3. "She _______ (have) a party next Saturday."</strong> → Present Continuous (plan)</p>
                                <p><strong>4. "The sun _______ (rise) in the east."</strong> → Present Simple (fakt)</p>
                                <p><strong>5. "He _______ (always/talk) during the movie!"</strong> → Present Continuous (denerwujący nawyk)</p>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Present Continuous</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Uzupełnij zdania używając Present Continuous:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> Look! It ______ (rain) now.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="continuous_present1" value="a" />
                                                <span>is raining</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_present1" value="b" />
                                                <span>rains</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_present1" value="c" />
                                                <span>raining</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Czynność teraz: am/is/are + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> They ______ (not/watch) TV at the moment.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="continuous_present2" value="a" />
                                                <span>aren't watching</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_present2" value="b" />
                                                <span>don't watch</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_present2" value="c" />
                                                <span>not watching</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przeczenie: am not/isn't/aren't + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> ______ you ______ (wait) for someone?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="continuous_present3" value="a" />
                                                <span>Do, wait</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_present3" value="b" />
                                                <span>Are, waiting</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_present3" value="c" />
                                                <span>Is, waiting</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Pytanie: Are + you + V-ing?</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> She ______ (study) for her exam this week.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="continuous_present4" value="a" />
                                                <span>studies</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_present4" value="b" />
                                                <span>is studying</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_present4" value="c" />
                                                <span>study</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Tymczasowa sytuacja: is studying</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> I ______ (meet) my friends tonight.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="continuous_present5" value="a" />
                                                <span>meet</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_present5" value="b" />
                                                <span>am meeting</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_present5" value="c" />
                                                <span>meeting</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Ustalone plany na przyszłość: am meeting</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> He ______ (always/complain) about something!</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="continuous_present6" value="a" />
                                                <span>always complains</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_present6" value="b" />
                                                <span>is always complaining</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_present6" value="c" />
                                                <span>always complaining</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Denerwujące nawyki: is always + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> The population ______ (grow) rapidly.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="continuous_present7" value="a" />
                                                <span>grows</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_present7" value="b" />
                                                <span>is growing</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_present7" value="c" />
                                                <span>growing</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Zmiany i trendy: is growing</div>
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
            id: 'present-perfect-simple',
            title: 'Present Perfect Simple ✅',
            excerpt: 'Doświadczenia życiowe, skutki w teraźniejszości, niedawne wydarzenia.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Present Perfect Simple - Czas Przeszło-Teraźniejszy Prosty</h3>
                        <p className="muted">Łączy przeszłość z teraźniejszością - pokazuje doświadczenia i skutki</p>
                            <div className="tense-forms">
                                <h4>📝 Budowa zdań</h4>
                                <div className="forms-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Typ zdania</th>
                                            <th>Wzór</th>
                                            <th>Przykład</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><strong>Twierdzące</strong></td>
                                            <td>I/you/we/they + have + V3<br/>he/she/it + has + V3</td>
                                            <td>"I <strong>have finished</strong> my work."<br/>"She <strong>has finished</strong> her work."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Przeczące</strong></td>
                                            <td>I/you/we/they + haven't + V3<br/>he/she/it + hasn't + V3</td>
                                            <td>"I <strong>haven't finished</strong> my work."<br/>"She <strong>hasn't finished</strong> her work."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Pytające</strong></td>
                                            <td>Have + I/you/we/they + V3?<br/>Has + he/she/it + V3?</td>
                                            <td>"<strong>Have</strong> you <strong>finished</strong> your work?"<br/>"<strong>Has</strong> she <strong>finished</strong> her work?"</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grammar-tip">
                                    <h5>💡 Czasowniki regularne i nieregularne</h5>
                                    <div className="rules-list">
                                        <div className="rule-item">
                                            <strong>Czasowniki regularne:</strong> V3 = V1 + ed<br/>
                                            work → worked, play → played, watch → watched
                                        </div>
                                        <div className="rule-item">
                                            <strong>Czasowniki nieregularne:</strong> mają własne formy V3<br/>
                                            go → gone, see → seen, eat → eaten, write → written
                                        </div>
                                        <div className="rule-item">
                                            <strong>Ważne nieregularne:</strong>
                                            <ul>
                                                <li>be → been</li>
                                                <li>do → done</li>
                                                <li>have → had</li>
                                                <li>make → made</li>
                                                <li>take → taken</li>
                                                <li>come → come</li>
                                                <li>give → given</li>
                                                <li>see → seen</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="grammar-tip">
                                    <h5>📅 Określniki czasu - pozycja w zdaniu</h5>
                                    <div className="rules-list">
                                        <div className="rule-item">
                                            <strong>Just, already, never</strong> - między have/has a czasownikiem<br/>
                                            "I have <em>just</em> finished."<br/>
                                            "She has <em>already</em> left."
                                        </div>
                                        <div className="rule-item">
                                            <strong>Yet</strong> - na końcu zdania przeczącego lub pytającego<br/>
                                            "I haven't finished <em>yet</em>."<br/>
                                            "Have you seen him <em>yet</em>?"
                                        </div>
                                        <div className="rule-item">
                                            <strong>For, since</strong> - na końcu zdania<br/>
                                            "I have lived here <em>for 5 years</em>."<br/>
                                            "She has worked here <em>since 2020</em>."
                                        </div>
                                    </div>
                                </div>

                                <div className="grammar-tip warning">
                                    <h5>⚠️ Częste błędy</h5>
                                    <ul>
                                        <li>❌ "I have see that movie." → ✅ "I have <strong>seen</strong> that movie."</li>
                                        <li>❌ "She has went to school." → ✅ "She has <strong>gone</strong> to school."</li>
                                        <li>❌ "Have you ever been in London?" → ✅ "Have you ever <strong>been to</strong> London?"</li>
                                        <li>❌ "I live here since 2020." → ✅ "I <strong>have lived</strong> here since 2020."</li>
                                        <li>❌ "She has just leave." → ✅ "She has just <strong>left</strong>."</li>
                                    </ul>
                                </div>
                            </div>
                        <div className="tense-grid">
                            <div className="tense-usage">
                                <h4>🎯 Kiedy używamy?</h4>
                                <div className="usage-cases">
                                    <div className="usage-case">
                                        <h5>📚 Doświadczenia życiowe (bez podanego czasu)</h5>
                                        <p><strong>Słowa kluczowe:</strong> ever, never, once, twice, many times, several times, before</p>
                                        <div className="example-group">
                                            <p>"I <em>have visited</em> London three times." - Byłem w Londynie trzy razy.</p>
                                            <p>"She <em>has never tried</em> sushi." - Ona nigdy nie próbowała sushi.</p>
                                            <p>"<em>Have</em> you ever <em>been</em> to Paris?" - Czy byłeś kiedykolwiek w Paryżu?</p>
                                            <p>"We <em>have seen</em> that film before." - Widzieliśmy już ten film wcześniej.</p>
                                            <p>"He <em>has written</em> five books so far." - Napisał dotąd pięć książek.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>🔗 Skutki w teraźniejszości</h5>
                                        <p><strong>Słowa kluczowe:</strong> (widoczne skutki w teraźniejszości)</p>
                                        <div className="example-group">
                                            <p>"I <em>have lost</em> my keys." - Zgubiłem klucze (i nadal ich nie mam).</p>
                                            <p>"She <em>has broken</em> her leg." - Złamała nogę (i nadal jest w gipsie).</p>
                                            <p>"He <em>has finished</em> his homework." - Skończył pracę domową (teraz jest wolny).</p>
                                            <p>"They <em>have bought</em> a new car." - Kupili nowy samochód (teraz go mają).</p>
                                            <p>"I <em>have cleaned</em> my room." - Posprzątałem pokój (teraz jest czysty).</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>🕒 Niedawne wydarzenia</h5>
                                        <p><strong>Słowa kluczowe:</strong> just, recently, lately, already, yet</p>
                                        <div className="example-group">
                                            <p>"I <em>have just finished</em> my work." - Właśnie skończyłem pracę.</p>
                                            <p>"They <em>have recently moved</em> to a new house." - Niedawno się przeprowadzili.</p>
                                            <p>"She <em>has already seen</em> that movie." - Ona już widziała ten film.</p>
                                            <p>"<em>Have</em> you <em>done</em> your homework yet?" - Czy zrobiłeś już pracę domową?</p>
                                            <p>"I <em>haven't told</em> him yet." - Jeszcze mu nie powiedziałem.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>⏱️ Okresy czasu do teraz</h5>
                                        <p><strong>Słowa kluczowe:</strong> for, since, so far, up to now, until now</p>
                                        <div className="example-group">
                                            <p>"I <em>have lived</em> here for 5 years." - Mieszkam tu od 5 lat.</p>
                                            <p>"She <em>has worked</em> here since 2020." - Pracuje tu od 2020 roku.</p>
                                            <p>"We <em>have known</em> each other since childhood." - Znamy się od dzieciństwa.</p>
                                            <p>"He <em>has been</em> ill for a week." - Jest chory od tygodnia.</p>
                                            <p>"So far, I <em>have visited</em> ten countries." - Do tej pory odwiedziłem dziesięć krajów.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>🎯 Wydarzenia w nieokreślonej przeszłości</h5>
                                        <div className="example-group">
                                            <p>"Someone <em>has eaten</em> my sandwich!" - Ktoś zjadł moją kanapkę!</p>
                                            <p>"The rain <em>has stopped</em>." - Deszcz przestał padać.</p>
                                            <p>"I <em>have read</em> that book." - Czytałem tę książkę.</p>
                                            <p>"She <em>has changed</em> a lot." - Dużo się zmieniła.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Present Perfect vs Past Simple - Kluczowe różnice</h4>
                        <div className="tense-comparison">
                            <div className="comparison-case">
                                <h5>✅ Present Perfect</h5>
                                <p><strong>Związek z teraźniejszością</strong></p>
                                <div className="example-group">
                                    <p>"I <em>have been</em> to Paris." - Byłem w Paryżu (doświadczenie, nie wiemy kiedy)</p>
                                    <p>"She <em>has lived</em> here for 5 years." - Mieszka tu 5 lat (nadal tu mieszka)</p>
                                    <p>"He <em>has just finished</em> his work." - Właśnie skończył pracę (niedawno)</p>
                                    <p>"We <em>have already seen</em> that film." - Już widzieliśmy ten film (doświadczenie)</p>
                                    <p>"They <em>have bought</em> a new car." - Kupili nowy samochód (teraz go mają)</p>
                                </div>
                            </div>

                            <div className="comparison-case">
                                <h5>⏪ Past Simple</h5>
                                <p><strong>Zakończona przeszłość</strong></p>
                                <div className="example-group">
                                    <p>"I <em>went</em> to Paris last year." - Pojechałem do Paryża w zeszłym roku (wiemy kiedy)</p>
                                    <p>"She <em>lived</em> here for 5 years." - Mieszkała tu 5 lat (już tu nie mieszka)</p>
                                    <p>"He <em>finished</em> his work an hour ago." - Skończył pracę godzinę temu (określony czas)</p>
                                    <p>"We <em>saw</em> that film yesterday." - Widzieliśmy ten film wczoraj (określony czas)</p>
                                    <p>"They <em>bought</em> a new car in 2020." - Kupili nowy samochód w 2020 (określony czas)</p>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip">
                            <h5>🔍 Test: Present Perfect czy Past Simple?</h5>
                            <div className="quiz-examples">
                                <p><strong>1. "I _______ (live) in London since 2018."</strong> → Present Perfect (okres do teraz)</p>
                                <p><strong>2. "She _______ (visit) Paris last summer."</strong> → Past Simple (określony czas)</p>
                                <p><strong>3. "_______ you ever _______ (try) sushi?"</strong> → Present Perfect (doświadczenie)</p>
                                <p><strong>4. "They _______ (buy) a house two years ago."</strong> → Past Simple (określony czas)</p>
                                <p><strong>5. "He _______ just _______ (finish) his homework."</strong> → Present Perfect (niedawno)</p>
                                <p><strong>6. "We _______ (see) that film many times."</strong> → Present Perfect (doświadczenie)</p>
                            </div>
                        </div>

                        <div className="grammar-tip warning">
                            <h5>💡 WAŻNE: Kiedy NIE używamy Present Perfect?</h5>
                            <div className="rules-list">
                                <div className="rule-item">
                                    <strong>Z określeniami czasu przeszłości:</strong><br/>
                                    ❌ "I have seen him yesterday."<br/>
                                    ✅ "I saw him yesterday."
                                </div>
                                <div className="rule-item">
                                    <strong>Z pytaniem "When?":</strong><br/>
                                    ❌ "When have you arrived?"<br/>
                                    ✅ "When did you arrive?"
                                </div>
                                <div className="rule-item">
                                    <strong>Z konkretną datą:</strong><br/>
                                    ❌ "I have graduated in 2020."<br/>
                                    ✅ "I graduated in 2020."
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Specjalne użycia Present Perfect</h4>
                        <div className="special-usage">
                            <div className="usage-case">
                                <h5>📰 Wiadomości i ogłoszenia</h5>
                                <div className="example-group">
                                    <p>"The president <em>has arrived</em> in Warsaw." - Prezydent przybył do Warszawy.</p>
                                    <p>"Scientists <em>have discovered</em> a new planet." - Naukowcy odkryli nową planetę.</p>
                                    <p>"The company <em>has announced</em> new products." - Firma ogłosiła nowe produkty.</p>
                                </div>
                            </div>
                            <div className="usage-case">
                                <h5>✍️ Z czasownikami mówienia i myślenia</h5>
                                <div className="example-group">
                                    <p>"I <em>have decided</em> to change my job." - Zdecydowałem się zmienić pracę.</p>
                                    <p>"She <em>has told</em> me everything." - Powiedziała mi wszystko.</p>
                                    <p>"We <em>have thought</em> about your proposal." - Przedyskutowaliśmy twoją propozycję.</p>
                                </div>
                            </div>
                            <div className="usage-case">
                                <h5>🏆 Osiągnięcia i zmiany</h5>
                                <div className="example-group">
                                    <p>"He <em>has become</em> a famous actor." - Został sławnym aktorem.</p>
                                    <p>"Technology <em>has changed</em> our lives." - Technologia zmieniła nasze życie.</p>
                                    <p>"She <em>has improved</em> her English significantly." - Znacznie poprawiła swój angielski.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Present Perfect</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę Present Perfect:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> I ______ (finish) my homework.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_present1" value="a" />
                                                <span>have finished</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_present1" value="b" />
                                                <span>has finished</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_present1" value="c" />
                                                <span>finished</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">I = have + V3</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> She ______ (never/visit) Paris.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_present2" value="a" />
                                                <span>have never visited</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_present2" value="b" />
                                                <span>has never visited</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_present2" value="c" />
                                                <span>never visited</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">She = has + V3</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> ______ you ______ (see) this movie before?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_present3" value="a" />
                                                <span>Have, seen</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_present3" value="b" />
                                                <span>Has, seen</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_present3" value="c" />
                                                <span>Did, see</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">You = Have + V3 (doświadczenie)</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> They ______ (just/arrive).</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_present4" value="a" />
                                                <span>just arrive</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_present4" value="b" />
                                                <span>have just arrived</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_present4" value="c" />
                                                <span>has just arrived</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">They = have + V3, "just" między have/has a V3</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> He ______ (live) here since 2020.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_present5" value="a" />
                                                <span>has lived</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_present5" value="b" />
                                                <span>lived</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_present5" value="c" />
                                                <span>lives</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Okres czasu do teraz: has lived</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> I ______ (not/do) my homework yet.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_present6" value="a" />
                                                <span>haven't done</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_present6" value="b" />
                                                <span>hasn't done</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_present6" value="c" />
                                                <span>didn't do</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">I = haven't + V3, "yet" na końcu zdania</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> ______ she ______ (tell) you the news?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_present7" value="a" />
                                                <span>Has, told</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_present7" value="b" />
                                                <span>Have, told</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_present7" value="c" />
                                                <span>Did, tell</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">She = Has + V3</div>
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
            id: 'present-perfect-continuous',
            title: 'Present Perfect Continuous 🔄',
            excerpt: 'Długotrwałe czynności z naciskiem na czas trwania i ciągłość.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Present Perfect Continuous - Czas Przeszło-Teraźniejszy Ciągły</h3>
                        <p className="muted">Podkreśla czas trwania czynności i jej ciągły charakter</p>
                            <div className="tense-forms">
                                <h4>📝 Budowa zdań</h4>
                                <div className="forms-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Typ zdania</th>
                                            <th>Wzór</th>
                                            <th>Przykład</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><strong>Twierdzące</strong></td>
                                            <td>I/you/we/they + have been + V-ing<br/>he/she/it + has been + V-ing</td>
                                            <td>"I <strong>have been waiting</strong> for an hour."<br/>"She <strong>has been waiting</strong> for an hour."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Przeczące</strong></td>
                                            <td>I/you/we/they + haven't been + V-ing<br/>he/she/it + hasn't been + V-ing</td>
                                            <td>"I <strong>haven't been waiting</strong> long."<br/>"She <strong>hasn't been waiting</strong> long."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Pytające</strong></td>
                                            <td>Have + I/you/we/they + been + V-ing?<br/>Has + he/she/it + been + V-ing?</td>
                                            <td>"<strong>Have</strong> you <strong>been waiting</strong> long?"<br/>"<strong>Has</strong> she <strong>been waiting</strong> long?"</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grammar-tip">
                                    <h5>💡 Różnice w użyciu for/since</h5>
                                    <div className="rules-list">
                                        <div className="rule-item">
                                            <strong>For + okres czasu:</strong><br/>
                                            for 2 hours, for 3 days, for 5 years, for a long time
                                        </div>
                                        <div className="rule-item">
                                            <strong>Since + moment w czasie:</strong><br/>
                                            since 2020, since Monday, since I was a child, since last week
                                        </div>
                                        <div className="rule-item">
                                            <strong>Przykłady:</strong><br/>
                                            "I have been waiting <em>for two hours</em>."<br/>
                                            "She has been working here <em>since 2019</em>."
                                        </div>
                                    </div>
                                </div>

                                <div className="grammar-tip warning">
                                    <h5>⚠️ Częste błędy</h5>
                                    <ul>
                                        <li>❌ "I have been wait here for hours." → ✅ "I have been <strong>waiting</strong> here for hours."</li>
                                        <li>❌ "She has being studying." → ✅ "She has <strong>been studying</strong>."</li>
                                        <li>❌ "Have you been work all day?" → ✅ "Have you been <strong>working</strong> all day?"</li>
                                        <li>❌ "They have been to Paris for a week." → ✅ "They have <strong>been in</strong> Paris for a week."</li>
                                        <li>❌ "I have been living here since 5 years." → ✅ "I have been living here <strong>for 5 years</strong>."</li>
                                    </ul>
                                </div>
                            </div>
                        <div className="tense-grid">
                            <div className="tense-usage">
                                <h4>🎯 Kiedy używamy?</h4>
                                <div className="usage-cases">
                                    <div className="usage-case">
                                        <h5>⏱️ Długotrwałe czynności (ciągle trwające)</h5>
                                        <p><strong>Słowa kluczowe:</strong> for, since, all day, all week, recently, lately</p>
                                        <div className="example-group">
                                            <p>"I <em>have been studying</em> English for 3 years." - Uczę się angielskiego od 3 lat.</p>
                                            <p>"She <em>has been working</em> on this project since January." - Pracuje nad tym projektem od stycznia.</p>
                                            <p>"They <em>have been waiting</em> for the bus for 20 minutes." - Czekają na autobus od 20 minut.</p>
                                            <p>"He <em>has been living</em> in London all his life." - Mieszka w Londynie całe życie.</p>
                                            <p>"We <em>have been trying</em> to contact you all day." - Próbujemy się z tobą skontaktować cały dzień.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>🔄 Czynności niedawno zakończone (ze skutkami)</h5>
                                        <p><strong>Słowa kluczowe:</strong> (widoczne skutki w teraźniejszości)</p>
                                        <div className="example-group">
                                            <p>"I <em>have been running</em>." - Biegałem (jestem spocony).</p>
                                            <p>"It <em>has been raining</em>." - Padało (ulice są mokre).</p>
                                            <p>"She <em>has been crying</em>." - Płakała (ma czerwone oczy).</p>
                                            <p>"He <em>has been working</em> in the garden." - Pracował w ogrodzie (jest brudny).</p>
                                            <p>"They <em>have been painting</em> the house." - Malowali dom (pachnie farbą).</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>📈 Czynności tymczasowe</h5>
                                        <p><strong>Słowa kluczowe:</strong> temporarily, for now, these days</p>
                                        <div className="example-group">
                                            <p>"I <em>have been living</em> in London temporarily." - Mieszkam w Londynie tymczasowo.</p>
                                            <p>"He <em>has been working</em> extra hours lately." - Ostatnio pracuje nadgodziny.</p>
                                            <p>"She <em>has been studying</em> very hard these days." - Ostatnio bardzo ciężko się uczy.</p>
                                            <p>"We <em>have been staying</em> with friends for now." - Na razie mieszkamy u przyjaciół.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>😫 Skutki w teraźniejszości</h5>
                                        <p><strong>Słowa kluczowe:</strong> (wyjaśnienie obecnego stanu)</p>
                                        <div className="example-group">
                                            <p>"I'm tired because I <em>have been working</em> hard." - Jestem zmęczony, bo ciężko pracowałem.</p>
                                            <p>"Her eyes are red because she <em>has been crying</em>." - Ma czerwone oczy, bo płakała.</p>
                                            <p>"He's out of breath because he <em>has been running</em>." - Jest zdyszany, bo biegał.</p>
                                            <p>"The garden looks beautiful because we <em>have been working</em> on it." - Ogród wygląda pięknie, bo nad nim pracowaliśmy.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>🔄 Powtarzające się czynności</h5>
                                        <div className="example-group">
                                            <p>"I <em>have been calling</em> him all morning." - Dzwonię do niego cały ranek.</p>
                                            <p>"She <em>has been asking</em> about you constantly." - Ciągle pyta o ciebie.</p>
                                            <p>"They <em>have been coming</em> to this cafe for years." - Od lat przychodzą do tej kawiarni.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Present Perfect Simple vs Continuous - Kluczowe różnice</h4>
                        <div className="tense-comparison">
                            <div className="comparison-case">
                                <h5>✅ Present Perfect Simple</h5>
                                <p><strong>Skupia się na wyniku/rezultacie</strong></p>
                                <div className="example-group">
                                    <p>"I <em>have painted</em> the room." - Pokój jest pomalowany (rezultat)</p>
                                    <p>"She <em>has written</em> three letters." - Napisała trzy listy (skończona czynność)</p>
                                    <p>"He <em>has read</em> that book." - Przeczytał tę książkę (doświadczenie)</p>
                                    <p>"They <em>have built</em> a house." - Zbudowali dom (rezultat)</p>
                                    <p>"I <em>have finished</em> my work." - Skończyłem pracę (rezultat)</p>
                                </div>
                            </div>

                            <div className="comparison-case">
                                <h5>🔄 Present Perfect Continuous</h5>
                                <p><strong>Skupia się na czasie trwania</strong></p>
                                <div className="example-group">
                                    <p>"I <em>have been painting</em> the room." - Malowałem pokój (czas trwania)</p>
                                    <p>"She <em>has been writing</em> letters all morning." - Pisze listy cały ranek (ciągłość)</p>
                                    <p>"He <em>has been reading</em> for two hours." - Czyta od dwóch godzin (czas)</p>
                                    <p>"They <em>have been building</em> the house for months." - Budują dom od miesięcy (ciągłość)</p>
                                    <p>"I <em>have been working</em> on this project." - Pracuję nad tym projektem (ciągłość)</p>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip">
                            <h5>🔍 Test: Simple czy Continuous?</h5>
                            <div className="quiz-examples">
                                <p><strong>1. "I _______ (clean) the house all morning."</strong> → Continuous (czas trwania)</p>
                                <p><strong>2. "She _______ (write) ten emails today."</strong> → Simple (rezultat)</p>
                                <p><strong>3. "They _______ (play) tennis for two hours."</strong> → Continuous (czas)</p>
                                <p><strong>4. "He _______ (read) three books this month."</strong> → Simple (rezultat)</p>
                                <p><strong>5. "We _______ (wait) here since 8 o'clock."</strong> → Continuous (czas)</p>
                                <p><strong>6. "I _______ (lose) my keys."</strong> → Simple (rezultat)</p>
                            </div>
                        </div>

                        <div className="grammar-tip warning">
                            <h5>💡 WAŻNE: Kiedy NIE używamy Continuous?</h5>
                            <div className="rules-list">
                                <div className="rule-item">
                                    <strong>Z czasownikami stanowymi:</strong><br/>
                                    ❌ "I have been knowing him for years."<br/>
                                    ✅ "I have known him for years."
                                </div>
                                <div className="rule-item">
                                    <strong>Z czasownikami oznaczającymi zakończone czynności:</strong><br/>
                                    ❌ "I have been finishing my work."<br/>
                                    ✅ "I have finished my work."
                                </div>
                                <div className="rule-item">
                                    <strong>Z określeniami ilości:</strong><br/>
                                    ❌ "I have been reading three books."<br/>
                                    ✅ "I have read three books."
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Czasowniki, które zmieniają znaczenie</h4>
                        <div className="verb-meaning-changes">
                            <div className="meaning-group">
                                <h5>🏠 Live</h5>
                                <div className="example-group">
                                    <p><strong>Simple:</strong> "I <em>have lived</em> here for 5 years." - Mieszkam tu 5 lat (stan)</p>
                                    <p><strong>Continuous:</strong> "I <em>have been living</em> here for 5 years." - Mieszkam tu 5 lat (z naciskiem na czas)</p>
                                </div>
                            </div>
                            <div className="meaning-group">
                                <h5>📚 Learn</h5>
                                <div className="example-group">
                                    <p><strong>Simple:</strong> "I <em>have learned</em> a lot." - Nauczyłem się dużo (rezultat)</p>
                                    <p><strong>Continuous:</strong> "I <em>have been learning</em> for hours." - Uczę się od godzin (proces)</p>
                                </div>
                            </div>
                            <div className="meaning-group">
                                <h5>💼 Work</h5>
                                <div className="example-group">
                                    <p><strong>Simple:</strong> "I <em>have worked</em> here since 2020." - Pracuję tu od 2020 (stan)</p>
                                    <p><strong>Continuous:</strong> "I <em>have been working</em> hard lately." - Ostatnio ciężko pracuję (wysiłek)</p>
                                </div>
                            </div>
                            <div className="meaning-group">
                                <h5>🛠️ Repair</h5>
                                <div className="example-group">
                                    <p><strong>Simple:</strong> "I <em>have repaired</em> the car." - Naprawiłem samochód (skończone)</p>
                                    <p><strong>Continuous:</strong> "I <em>have been repairing</em> the car all day." - Naprawiam samochód cały dzień (ciągle)</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Present Perfect Continuous</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Uzupełnij zdania używając Present Perfect Continuous:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> I ______ (study) for three hours.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present1" value="a" />
                                                <span>have been studying</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present1" value="b" />
                                                <span>have studied</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present1" value="c" />
                                                <span>am studying</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Podkreślenie czasu trwania: have been + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> She ______ (work) here since 2019.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present2" value="a" />
                                                <span>has worked</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present2" value="b" />
                                                <span>has been working</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present2" value="c" />
                                                <span>works</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Ciągła czynność od momentu w przeszłości: has been working</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> They ______ (wait) for the bus for 20 minutes.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present3" value="a" />
                                                <span>have waited</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present3" value="b" />
                                                <span>have been waiting</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present3" value="c" />
                                                <span>are waiting</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Określenie czasu trwania: have been waiting</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> He's tired because he ______ (run).</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present4" value="a" />
                                                <span>has run</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present4" value="b" />
                                                <span>has been running</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present4" value="c" />
                                                <span>ran</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Wyjaśnienie obecnego stanu: has been running</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> How long ______ you ______ (learn) English?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present5" value="a" />
                                                <span>have, learned</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present5" value="b" />
                                                <span>have, been learning</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present5" value="c" />
                                                <span>are, learning</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Pytanie o czas trwania: have been learning</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> It ______ (rain) all day.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present6" value="a" />
                                                <span>has rained</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present6" value="b" />
                                                <span>has been raining</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present6" value="c" />
                                                <span>is raining</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Czynność trwająca przez cały okres: has been raining</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> We ______ (not/sleep) well recently.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present7" value="a" />
                                                <span>haven't been sleeping</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present7" value="b" />
                                                <span>haven't slept</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_present7" value="c" />
                                                <span>don't sleep</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przeczenie: haven't been + V-ing</div>
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
    past: [
        {
            id: 'past-simple',
            title: 'Past Simple ⏪',
            excerpt: 'Zakończone czynności w określonej przeszłości - podstawowy czas przeszły.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Past Simple - Czas Przeszły Prosty</h3>
                        <p className="muted">Opisuje pojedyncze, zakończone czynności w przeszłości z określonym czasem</p>
                            <div className="tense-forms">
                                <h4>📝 Budowa zdań</h4>
                                <div className="forms-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Typ zdania</th>
                                            <th>Wzór</th>
                                            <th>Przykład</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><strong>Twierdzące</strong></td>
                                            <td>Podmiot + V2<br/>(czasownik w formie przeszłej)</td>
                                            <td>"I <strong>worked</strong> yesterday."<br/>"She <strong>went</strong> to school."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Przeczące</strong></td>
                                            <td>Podmiot + didn't + V1</td>
                                            <td>"I <strong>didn't work</strong> yesterday."<br/>"She <strong>didn't go</strong> to school."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Pytające</strong></td>
                                            <td>Did + podmiot + V1?</td>
                                            <td>"<strong>Did</strong> you <strong>work</strong> yesterday?"<br/>"<strong>Did</strong> she <strong>go</strong> to school?"</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grammar-tip">
                                    <h5>💡 Czasowniki regularne i nieregularne</h5>
                                    <div className="rules-list">
                                        <div className="rule-item">
                                            <strong>Czasowniki regularne:</strong> V2 = V1 + ed<br/>
                                            work → worked, play → played, watch → watched
                                        </div>
                                        <div className="rule-item">
                                            <strong>Czasowniki nieregularne:</strong> mają własne formy V2<br/>
                                            go → went, see → saw, eat → ate, write → wrote
                                        </div>
                                        <div className="rule-item">
                                            <strong>Ważne nieregularne:</strong>
                                            <ul>
                                                <li>be → was/were</li>
                                                <li>have → had</li>
                                                <li>do → did</li>
                                                <li>say → said</li>
                                                <li>make → made</li>
                                                <li>take → took</li>
                                                <li>come → came</li>
                                                <li>get → got</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="grammar-tip warning">
                                    <h5>⚠️ Częste błędy</h5>
                                    <ul>
                                        <li>❌ "I didn't went to school." → ✅ "I <strong>didn't go</strong> to school."</li>
                                        <li>❌ "Did she went to the party?" → ✅ "<strong>Did she go</strong> to the party?"</li>
                                        <li>❌ "I was work yesterday." → ✅ "I <strong>worked</strong> yesterday."</li>
                                        <li>❌ "They didn't played football." → ✅ "They <strong>didn't play</strong> football."</li>
                                        <li>❌ "Where you went yesterday?" → ✅ "<strong>Where did you go</strong> yesterday?"</li>
                                    </ul>
                                </div>
                            </div>
                    <div className="tense-grid">
                        <div className="tense-usage">
                            <h4>🎯 Kiedy używamy?</h4>
                            <div className="usage-cases">
                                <div className="usage-case">
                                    <h5>⏰ Określone momenty w przeszłości</h5>
                                    <p><strong>Słowa kluczowe:</strong> yesterday, last week/month/year, ago, in 1990, on Monday</p>
                                    <div className="example-group">
                                        <p>"I <em>watched</em> a film yesterday." - Obejrzałem film wczoraj.</p>
                                        <p>"She <em>visited</em> Paris last year." - Odwiedziła Paryż w zeszłym roku.</p>
                                        <p>"They <em>moved</em> to London two years ago." - Przeprowadzili się do Londynu dwa lata temu.</p>
                                        <p>"He <em>was born</em> in 1990." - Urodził się w 1990 roku.</p>
                                        <p>"We <em>met</em> on Friday." - Spotkaliśmy się w piątek.</p>
                                    </div>
                                </div>
                                <div className="usage-case">
                                    <h5>🔄 Kolejne czynności w przeszłości</h5>
                                    <p><strong>Słowa kluczowe:</strong> first, then, after that, finally</p>
                                    <div className="example-group">
                                        <p>"I <em>woke up</em>, <em>had</em> breakfast, and <em>went</em> to work." - Obudziłem się, zjadłem śniadanie i poszedłem do pracy.</p>
                                        <p>"She <em>opened</em> the door, <em>entered</em> the room, and <em>sat</em> down." - Otworzyła drzwi, weszła do pokoju i usiadła.</p>
                                        <p>"First I <em>studied</em>, then I <em>watched</em> TV." - Najpierw się uczyłem, potem oglądałem TV.</p>
                                    </div>
                                </div>
                                <div className="usage-case">
                                    <h5>📖 Opowieści i historie</h5>
                                    <p><strong>Słowa kluczowe:</strong> once upon a time, long ago, in the past</p>
                                    <div className="example-group">
                                        <p>"Once upon a time, there <em>lived</em> a beautiful princess..." - Dawno, dawno temu żyła piękna księżniczka...</p>
                                        <p>"He <em>told</em> me an interesting story." - Opowiedział mi ciekawą historię.</p>
                                        <p>"Shakespeare <em>wrote</em> many famous plays." - Szekspir napisał wiele słynnych sztuk.</p>
                                        <p>"The war <em>ended</em> in 1945." - Wojna skończyła się w 1945 roku.</p>
                                    </div>
                                </div>
                                <div className="usage-case">
                                    <h5>💭 Przerywane nawyki i stany</h5>
                                    <p><strong>Słowa kluczowe:</strong> when I was young, in my childhood, used to</p>
                                    <div className="example-group">
                                        <p>"When I <em>was</em> young, I <em>played</em> football every day." - Kiedy byłem młody, grałem w piłkę codziennie.</p>
                                        <p>"She <em>lived</em> in Paris for five years." - Mieszkała w Paryżu przez pięć lat.</p>
                                        <p>"We <em>went</em> to the beach every summer." - Jeździliśmy na plażę każdego lata.</p>
                                        <p>"He <em>had</em> long hair when he was a student." - Miał długie włosy, kiedy był studentem.</p>
                                    </div>
                                </div>
                                <div className="usage-case">
                                    <h5>❓ Pytania o szczegóły przeszłości</h5>
                                    <div className="example-group">
                                        <p>"What time <em>did</em> you <em>arrive</em>?" - O której godzinie przyjechałeś?</p>
                                        <p>"Where <em>did</em> you <em>go</em> yesterday?" - Gdzie byłeś wczoraj?</p>
                                        <p>"How much <em>did</em> it <em>cost</em>?" - Ile to kosztowało?</p>
                                        <p>"Why <em>didn't</em> you <em>call</em> me?" - Dlaczego do mnie nie zadzwoniłeś?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Określniki czasu w Past Simple</h4>
                        <div className="time-expressions">
                            <div className="expression-group">
                                <h5>📅 Konkretne daty i okresy</h5>
                                <div className="example-group">
                                    <p><strong>yesterday</strong> - wczoraj</p>
                                    <p><strong>last week/month/year</strong> - w zeszłym tygodniu/miesiącu/roku</p>
                                    <p><strong>in 2020, in June</strong> - w 2020, w czerwcu</p>
                                    <p><strong>on Monday, on 15th May</strong> - w poniedziałek, 15 maja</p>
                                    <p><strong>at 5 o'clock, at Christmas</strong> - o 5:00, w święta</p>
                                </div>
                            </div>

                            <div className="expression-group">
                                <h5>⏱️ Określone momenty</h5>
                                <div className="example-group">
                                    <p><strong>two days ago, a week ago</strong> - dwa dni temu, tydzień temu</p>
                                    <p><strong>when I was young</strong> - kiedy byłem młody</p>
                                    <p><strong>in my childhood</strong> - w dzieciństwie</p>
                                    <p><strong>the other day</strong> - ostatnio, niedawno</p>
                                    <p><strong>once</strong> - kiedyś, raz</p>
                                </div>
                            </div>

                            <div className="expression-group">
                                <h5>🎭 W opowieściach i narracjach</h5>
                                <div className="example-group">
                                    <p><strong>then</strong> - potem</p>
                                    <p><strong>after that</strong> - po tym</p>
                                    <p><strong>suddenly</strong> - nagle</p>
                                    <p><strong>finally</strong> - wreszcie, finally</p>
                                    <p><strong>in the end</strong> - na końcu</p>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip">
                            <h5>🔍 Test: Uzupełnij zdania</h5>
                            <div className="quiz-examples">
                                <p><strong>1. "I _______ (see) that film last week."</strong> → saw</p>
                                <p><strong>2. "She _______ (not/go) to school yesterday."</strong> → didn't go</p>
                                <p><strong>3. "_______ you _______ (visit) Paris in 2019?"</strong> → Did, visit</p>
                                <p><strong>4. "They _______ (have) a party last Saturday."</strong> → had</p>
                                <p><strong>5. "He _______ (not/like) the movie."</strong> → didn't like</p>
                                <p><strong>6. "What time _______ you _______ (arrive)?"</strong> → did, arrive</p>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Used to - dawne nawyki i stany</h4>
                        <div className="special-usage">
                            <div className="usage-case">
                                <h5>📝 Użycie i znaczenie</h5>
                                <div className="example-group">
                                    <p>"I <em>used to play</em> tennis when I was younger." - Grałem w tenisa, kiedy byłem młodszy.</p>
                                    <p>"She <em>used to have</em> long hair." - Miała długie włosy.</p>
                                    <p>"They <em>used to live</em> in London." - Mieszkali w Londynie.</p>
                                    <p>"I <em>didn't use to like</em> coffee." - Nie lubiłem kawy.</p>
                                    <p>"<em>Did</em> you <em>use to go</em> to that school?" - Chodziłeś do tej szkoły?</p>
                                </div>
                            </div>
                            <div className="usage-case">
                                <h5>💡 Różnice w użyciu</h5>
                                <div className="example-group">
                                    <p><strong>Used to</strong> - tylko dla przeszłości, nieużywane czynności</p>
                                    <p><strong>Past Simple</strong> - może dotyczyć pojedynczych zdarzeń</p>
                                    <p>"I <em>used to smoke</em>." - Palilem (ale już nie pale)</p>
                                    <p>"I <em>smoked</em> a cigarette yesterday." - Zapaliłem papierosa wczoraj</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Past Simple</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę Past Simple:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> Yesterday I ______ (go) to the cinema.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="simple_past1" value="a" />
                                                <span>go</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_past1" value="b" />
                                                <span>went</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_past1" value="c" />
                                                <span>going</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">go → went (czasownik nieregularny)</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> They ______ (not/play) football last week.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="simple_past2" value="a" />
                                                <span>didn't play</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_past2" value="b" />
                                                <span>don't play</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_past2" value="c" />
                                                <span>not played</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przeczenie: didn't + bezokolicznik</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> ______ you ______ (see) that film yesterday?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="simple_past3" value="a" />
                                                <span>Did, see</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_past3" value="b" />
                                                <span>Do, see</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_past3" value="c" />
                                                <span>Did, saw</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Pytanie: Did + podmiot + bezokolicznik</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> She ______ (buy) a new car last month.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="simple_past4" value="a" />
                                                <span>buyed</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_past4" value="b" />
                                                <span>bought</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_past4" value="c" />
                                                <span>buy</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">buy → bought (czasownik nieregularny)</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> We ______ (study) French when we were young.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="simple_past5" value="a" />
                                                <span>study</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_past5" value="b" />
                                                <span>studied</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_past5" value="c" />
                                                <span>studying</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">study → studied (czasownik regularny)</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> He ______ (write) a letter to his friend.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="simple_past6" value="a" />
                                                <span>writed</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_past6" value="b" />
                                                <span>wrote</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_past6" value="c" />
                                                <span>write</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">write → wrote (czasownik nieregularny)</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> Where ______ you ______ (go) on holiday last year?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="simple_past7" value="a" />
                                                <span>did, go</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_past7" value="b" />
                                                <span>did, went</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_past7" value="c" />
                                                <span>do, go</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Pytanie z "where": Where + did + podmiot + bezokolicznik</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>8.</strong> They ______ (have) dinner at 7 PM yesterday.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="simple_past8" value="a" />
                                                <span>have</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_past8" value="b" />
                                                <span>had</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="simple_past8" value="c" />
                                                <span>haves</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">have → had (czasownik nieregularny)</div>
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
            id: 'past-continuous',
            title: 'Past Continuous 🔄',
            excerpt: 'Czynności w toku w przeszłości, tło dla innych wydarzeń.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Past Continuous - Czas Przeszły Ciągły</h3>
                        <p className="muted">Opisuje czynności trwające w określonym momencie w przeszłości</p>
                            <div className="tense-forms">
                                <h4>📝 Budowa zdań</h4>
                                <div className="forms-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Typ zdania</th>
                                            <th>Wzór</th>
                                            <th>Przykład</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><strong>Twierdzące</strong></td>
                                            <td>I/he/she/it + was + V-ing<br/>you/we/they + were + V-ing</td>
                                            <td>"I <strong>was working</strong> at 5 PM."<br/>"They <strong>were working</strong> at 5 PM."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Przeczące</strong></td>
                                            <td>I/he/she/it + wasn't + V-ing<br/>you/we/they + weren't + V-ing</td>
                                            <td>"I <strong>wasn't working</strong> at 5 PM."<br/>"They <strong>weren't working</strong> at 5 PM."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Pytające</strong></td>
                                            <td>Was + I/he/she/it + V-ing?<br/>Were + you/we/they + V-ing?</td>
                                            <td>"<strong>Were</strong> you <strong>working</strong> at 5 PM?"<br/>"<strong>Was</strong> she <strong>working</strong> at 5 PM?"</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grammar-tip">
                                    <h5>💡 Past Continuous z when i while</h5>
                                    <div className="rules-list">
                                        <div className="rule-item">
                                            <strong>When + Past Simple</strong> - krótka czynność przerywająca<br/>
                                            "When I arrived, she was cooking."
                                        </div>
                                        <div className="rule-item">
                                            <strong>While + Past Continuous</strong> - długa czynność w tle<br/>
                                            "While she was cooking, I was reading."
                                        </div>
                                        <div className="rule-item">
                                            <strong>While + Past Continuous, Past Simple</strong><br/>
                                            "While I was walking home, I met a friend."
                                        </div>
                                        <div className="rule-item">
                                            <strong>Past Simple + while + Past Continuous</strong><br/>
                                            "I met a friend while I was walking home."
                                        </div>
                                    </div>
                                </div>

                                <div className="grammar-tip warning">
                                    <h5>⚠️ Częste błędy</h5>
                                    <ul>
                                        <li>❌ "I was work at 5 PM." → ✅ "I <strong>was working</strong> at 5 PM."</li>
                                        <li>❌ "They were watch TV." → ✅ "They <strong>were watching</strong> TV."</li>
                                        <li>❌ "Was you sleeping?" → ✅ "<strong>Were you sleeping</strong>?"</li>
                                        <li>❌ "When I was arriving, she cooked." → ✅ "When I <strong>arrived</strong>, she <strong>was cooking</strong>."</li>
                                        <li>❌ "While I cooked, she was setting the table." → ✅ "While I <strong>was cooking</strong>, she was setting the table."</li>
                                    </ul>
                                </div>
                            </div>
                    <div className="tense-grid">
                        <div className="tense-usage">
                            <h4>🎯 Kiedy używamy?</h4>
                            <div className="usage-cases">
                                <div className="usage-case">
                                    <h5>⏰ Czynność w toku w określonym momencie przeszłości</h5>
                                    <p><strong>Słowa kluczowe:</strong> at 5 PM yesterday, at that time, at that moment</p>
                                    <div className="example-group">
                                        <p>"At 8 PM yesterday, I <em>was watching</em> TV." - Wczoraj o 20:00 oglądałem TV.</p>
                                        <p>"She <em>was studying</em> when I called." - Uczyła się, kiedy zadzwoniłem.</p>
                                        <p>"They <em>were having</em> dinner at 7 o'clock." - Jedli obiad o 7:00.</p>
                                        <p>"What <em>were</em> you <em>doing</em> at 10 AM yesterday?" - Co robiłeś wczoraj o 10:00?</p>
                                    </div>
                                </div>
                                <div className="usage-case">
                                    <h5>🎭 Tło dla innych wydarzeń</h5>
                                    <p><strong>Słowa kluczowe:</strong> when, while, as</p>
                                    <div className="example-group">
                                        <p>"While I <em>was walking</em> home, I <em>met</em> an old friend." - Kiedy szedłem do domu, spotkałem starego przyjaciela.</p>
                                        <p>"She <em>was cooking</em> dinner when the phone <em>rang</em>." - Gotowała obiad, kiedy zadzwonił telefon.</p>
                                        <p>"They <em>were watching</em> TV when the lights <em>went</em> out." - Oglądali TV, kiedy zgasły światła.</p>
                                        <p>"He <em>was driving</em> to work when he <em>had</em> an accident." - Jeździł do pracy, kiedy miał wypadek.</p>
                                    </div>
                                </div>
                                <div className="usage-case">
                                    <h5>📈 Dwie równoczesne czynności</h5>
                                    <p><strong>Słowa kluczowe:</strong> while, meanwhile, at the same time</p>
                                    <div className="example-group">
                                        <p>"While I <em>was cooking</em>, my husband <em>was setting</em> the table." - Kiedy ja gotowałam, mój mąż nakrywał do stołu.</p>
                                        <p>"She <em>was studying</em> while her brother <em>was playing</em> computer games." - Ona się uczyła, podczas gdy jej brat grał w gry.</p>
                                        <p>"I <em>was reading</em> a book while my wife <em>was watching</em> TV." - Czytałem książkę, podczas gdy moja żona oglądała TV.</p>
                                    </div>
                                </div>
                                <div className="usage-case">
                                    <h5>😠 Denerwujące nawyki w przeszłości</h5>
                                    <p><strong>Słowa kluczowe:</strong> always, constantly, forever</p>
                                    <div className="example-group">
                                        <p>"He <em>was always complaining</em> about something." - On zawsze na coś narzekał.</p>
                                        <p>"She <em>was constantly interrupting</em> me." - Ciągle mi przerywała.</p>
                                        <p>"They <em>were forever arguing</em> about money." - Wiecznie się kłócili o pieniądze.</p>
                                        <p>"My brother <em>was always borrowing</em> my clothes." - Mój brat zawsze pożyczał moje ubrania.</p>
                                    </div>
                                </div>
                                <div className="usage-case">
                                    <h5>🗣️ Opisy sytuacji i atmosfery</h5>
                                    <div className="example-group">
                                        <p>"The sun <em>was shining</em>, birds <em>were singing</em>..." - Świeciło słońce, śpiewały ptaki...</p>
                                        <p>"It <em>was raining</em> heavily, people <em>were running</em> for shelter." - Lało mocno, ludzie biegli szukać schronienia.</p>
                                        <p>"Everyone <em>was having</em> a great time at the party." - Wszyscy świetnie się bawili na przyjęciu.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Past Simple vs Past Continuous - Kluczowe różnice</h4>
                        <div className="tense-comparison">
                            <div className="comparison-case">
                                <h5>⏪ Past Simple</h5>
                                <p><strong>Krótkie, zakończone czynności</strong></p>
                                <div className="example-group">
                                    <p>"I <em>finished</em> my work at 5 PM." - Skończyłem pracę o 17:00.</p>
                                    <p>"She <em>called</em> me yesterday." - Zadzwoniła do mnie wczoraj.</p>
                                    <p>"They <em>arrived</em> at 8 o'clock." - Przyjechali o 8:00.</p>
                                    <p>"He <em>bought</em> a new car." - Kupił nowy samochód.</p>
                                    <p>"The phone <em>rang</em>." - Telefon zadzwonił.</p>
                                </div>
                            </div>

                            <div className="comparison-case">
                                <h5>🔄 Past Continuous</h5>
                                <p><strong>Długie, trwające czynności</strong></p>
                                <div className="example-group">
                                    <p>"I <em>was working</em> at 5 PM." - Pracowałem o 17:00.</p>
                                    <p>"She <em>was calling</em> me when you arrived." - Dzwoniła do mnie, kiedy przyjechałeś.</p>
                                    <p>"They <em>were arriving</em> when I left." - Przyjeżdżali, kiedy wychodziłem.</p>
                                    <p>"He <em>was buying</em> a car when I saw him." - Kupował samochód, kiedy go widziałem.</p>
                                    <p>"The phone <em>was ringing</em> when I entered." - Telefon dzwonił, kiedy wszedłem.</p>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip">
                            <h5>🔍 Test: Który czas wybrać?</h5>
                            <div className="quiz-examples">
                                <p><strong>1. "When I _______ (arrive), they _______ (have) dinner."</strong> → arrived, were having</p>
                                <p><strong>2. "She _______ (cook) while he _______ (watch) TV."</strong> → was cooking, was watching</p>
                                <p><strong>3. "I _______ (see) him yesterday at 5 PM."</strong> → saw</p>
                                <p><strong>4. "At 8 PM, we _______ (watch) a movie."</strong> → were watching</p>
                                <p><strong>5. "He _______ (always/complain) about his job."</strong> → was always complaining</p>
                                <p><strong>6. "They _______ (meet) in 2010."</strong> → met</p>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Past Continuous</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Uzupełnij zdania używając Past Continuous:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> I ______ (watch) TV when you called.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="continuous_past1" value="a" />
                                                <span>was watching</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_past1" value="b" />
                                                <span>watched</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_past1" value="c" />
                                                <span>am watching</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Czynność w toku w przeszłości: was/were + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> They ______ (not/work) at 5 PM yesterday.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="continuous_past2" value="a" />
                                                <span>didn't work</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_past2" value="b" />
                                                <span>weren't working</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_past2" value="c" />
                                                <span>not working</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przeczenie: wasn't/weren't + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> What ______ you ______ (do) at 8 PM last night?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="continuous_past3" value="a" />
                                                <span>were, doing</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_past3" value="b" />
                                                <span>did, do</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_past3" value="c" />
                                                <span>was, doing</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Pytanie: was/were + podmiot + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> While I ______ (cook), my sister was setting the table.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="continuous_past4" value="a" />
                                                <span>cooked</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_past4" value="b" />
                                                <span>was cooking</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_past4" value="c" />
                                                <span>cook</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Dwie równoczesne czynności: while + Past Continuous</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> He ______ (drive) to work when he had the accident.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="continuous_past5" value="a" />
                                                <span>drove</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_past5" value="b" />
                                                <span>was driving</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_past5" value="c" />
                                                <span>driving</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Tło dla innych wydarzeń: was driving</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> The sun ______ (shine) and birds ______ (sing).</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="continuous_past6" value="a" />
                                                <span>shone, sang</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_past6" value="b" />
                                                <span>was shining, were singing</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_past6" value="c" />
                                                <span>shined, singed</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Opisy sytuacji: was/were + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> She ______ (always/complain) about her job.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="continuous_past7" value="a" />
                                                <span>always complained</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_past7" value="b" />
                                                <span>was always complaining</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="continuous_past7" value="c" />
                                                <span>always complains</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Denerwujące nawyki w przeszłości: was always + V-ing</div>
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
            id: 'past-perfect-simple',
            title: 'Past Perfect Simple ✅',
            excerpt: 'Wcześniejsza przeszłość - czynności przed innymi przeszłymi wydarzeniami.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Past Perfect Simple - Czas Zaprzeszły Prosty</h3>
                        <p className="muted">Pokazuje, która czynność wydarzyła się wcześniej w przeszłości</p>
                            <div className="tense-forms">
                                <h4>📝 Budowa zdań</h4>
                                <div className="forms-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Typ zdania</th>
                                            <th>Wzór</th>
                                            <th>Przykład</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><strong>Twierdzące</strong></td>
                                            <td>Podmiot + had + V3</td>
                                            <td>"I <strong>had finished</strong> my work when she arrived."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Przeczące</strong></td>
                                            <td>Podmiot + hadn't + V3</td>
                                            <td>"I <strong>hadn't finished</strong> my work when she arrived."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Pytające</strong></td>
                                            <td>Had + podmiot + V3?</td>
                                            <td>"<strong>Had</strong> you <strong>finished</strong> your work when she arrived?"</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grammar-tip">
                                    <h5>💡 Past Perfect z Past Simple</h5>
                                    <div className="rules-list">
                                        <div className="rule-item">
                                            <strong>Kolejność czasowa:</strong><br/>
                                            Past Perfect → wcześniejsza czynność<br/>
                                            Past Simple → późniejsza czynność
                                        </div>
                                        <div className="rule-item">
                                            <strong>Przykłady:</strong><br/>
                                            "After I <em>had finished</em> (1) my work, I <em>went</em> (2) home."<br/>
                                            "She <em>had already left</em> (1) when I <em>arrived</em> (2)."
                                        </div>
                                        <div className="rule-item">
                                            <strong>Ważne:</strong> Czasami kolejność zdarzeń jest oczywista z kontekstu<br/>
                                            "I <em>went</em> to bed after I <em>finished</em> my work." (bez Past Perfect)
                                        </div>
                                    </div>
                                </div>

                                <div className="grammar-tip warning">
                                    <h5>⚠️ Częste błędy</h5>
                                    <ul>
                                        <li>❌ "I had went to the store." → ✅ "I had <strong>gone</strong> to the store."</li>
                                        <li>❌ "She had saw that movie." → ✅ "She had <strong>seen</strong> that movie."</li>
                                        <li>❌ "Had you finished your work when she had arrived?" → ✅ "Had you finished your work when she <strong>arrived</strong>?"</li>
                                        <li>❌ "I didn't see him because he went home." → ✅ "I didn't see him because he <strong>had gone</strong> home."</li>
                                        <li>❌ "After I finished work, I had gone home." → ✅ "After I <strong>had finished</strong> work, I went home."</li>
                                    </ul>
                                </div>
                            </div>
                        <div className="tense-grid">
                            <div className="tense-usage">
                                <h4>🎯 Kiedy używamy?</h4>
                                <div className="usage-cases">
                                    <div className="usage-case">
                                        <h5>⏪ Wcześniejsza przeszłość</h5>
                                        <p><strong>Słowa kluczowe:</strong> when, before, after, by the time, already</p>
                                        <div className="example-group">
                                            <p>"When I arrived, she <em>had already left</em>." - Kiedy przyjechałem, ona już wyszła.</p>
                                            <p>"He <em>had finished</em> his work before I called." - Skończył pracę, zanim zadzwoniłem.</p>
                                            <p>"After they <em>had eaten</em> dinner, they watched TV." - Po tym jak zjedli obiad, oglądali TV.</p>
                                            <p>"By the time we got there, the film <em>had started</em>." - Zanim tam dotarliśmy, film się już zaczął.</p>
                                            <p>"She <em>had never seen</em> snow before she moved to Canada." - Nigdy nie widziała śniegu przed przeprowadzką do Kanady.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>📖 Mowa zależna (reported speech)</h5>
                                        <p><strong>Słowa kluczowe:</strong> said, told, asked, thought</p>
                                        <div className="example-group">
                                            <p>"She told me she <em>had visited</em> Paris three times." - Powiedziała mi, że była w Paryżu trzy razy.</p>
                                            <p>"He said he <em>had finished</em> his homework." - Powiedział, że skończył pracę domową.</p>
                                            <p>"They thought they <em>had lost</em> the keys." - Myśleli, że zgubili klucze.</p>
                                            <p>"I asked if she <em>had seen</em> my brother." - Zapytałem, czy widziała mojego brata.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>😞 Niespełnione nadzieje i zamiary</h5>
                                        <p><strong>Słowa kluczowe:</strong> hoped, expected, wanted, intended</p>
                                        <div className="example-group">
                                            <p>"I <em>had hoped</em> to see you yesterday." - Miałem nadzieję, że cię wczoraj zobaczę.</p>
                                            <p>"She <em>had intended</em> to call you." - Zamierzała do ciebie zadzwonić.</p>
                                            <p>"We <em>had expected</em> more people to come." - Spodziewaliśmy się, że przyjdzie więcej ludzi.</p>
                                            <p>"He <em>had wanted</em> to be a doctor." - Chciał zostać lekarzem.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>🔚 Czynności przed określonym momentem</h5>
                                        <p><strong>Słowa kluczowe:</strong> by, by the time, until</p>
                                        <div className="example-group">
                                            <p>"By 2020, I <em>had already graduated</em> from university." - Do 2020 roku już skończyłem studia.</p>
                                            <p>"By the time he was 30, he <em>had visited</em> 20 countries." - Zanim skończył 30 lat, odwiedził 20 krajów.</p>
                                            <p>"Until yesterday, I <em>had never eaten</em> sushi." - Do wczoraj nigdy nie jadłem sushi.</p>
                                            <p>"She <em>had written</em> three books by the age of 40." - Napisała trzy książki do 40. roku życia.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>🎭 W opowieściach i narracjach</h5>
                                        <div className="example-group">
                                            <p>"When I got home, I realized I <em>had left</em> my keys at work." - Kiedy wróciłem do domu, zorientowałem się, że zostawiłem klucze w pracy.</p>
                                            <p>"He was tired because he <em>hadn't slept</em> well." - Był zmęczony, bo nie spał dobrze.</p>
                                            <p>"The house was empty - everyone <em>had gone</em> out." - Dom był pusty - wszyscy wyszli.</p>
                                            <p>"I didn't recognize her because she <em>had changed</em> so much." - Nie poznałem jej, bo tak bardzo się zmieniła.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Past Perfect vs Past Simple - Kluczowe różnice</h4>
                        <div className="tense-comparison">
                            <div className="comparison-case">
                                <h5>✅ Past Perfect</h5>
                                <p><strong>Wcześniejsza przeszłość</strong></p>
                                <div className="example-group">
                                    <p>"When I arrived, she <em>had already left</em>." - Ona wyszła PRZED moim przyjazdem</p>
                                    <p>"He <em>had finished</em> his work before I called." - Skończył PRZED telefonem</p>
                                    <p>"After they <em>had eaten</em>, they watched TV." - Jedli PRZED oglądaniem</p>
                                    <p>"By 2020, I <em>had graduated</em>." - Studia skończyłem PRZED 2020</p>
                                    <p>"She said she <em>had visited</em> Paris." - Odwiedziła PRZED rozmową</p>
                                </div>
                            </div>

                            <div className="comparison-case">
                                <h5>⏪ Past Simple</h5>
                                <p><strong>Kolejne zdarzenia w przeszłości</strong></p>
                                <div className="example-group">
                                    <p>"When I arrived, she <em>left</em>." - Ona wyszła PO moim przyjeździe</p>
                                    <p>"He <em>finished</em> his work and then I called." - Skończył, POTEM zadzwoniłem</p>
                                    <p>"They <em>ate</em> dinner and watched TV." - Jedli, POTEM oglądali</p>
                                    <p>"I <em>graduated</em> in 2020." - Studia skończyłem W 2020</p>
                                    <p>"She said she <em>visited</em> Paris last year." - Odwiedziła W ZESZŁYM ROKU</p>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip">
                            <h5>🔍 Test: Past Perfect czy Past Simple?</h5>
                            <div className="quiz-examples">
                                <p><strong>1. "After I _______ (finish) work, I went home."</strong> → had finished</p>
                                <p><strong>2. "She _______ (tell) me she _______ (see) that film."</strong> → told, had seen</p>
                                <p><strong>3. "When I _______ (arrive), the party _______ (already/start)."</strong> → arrived, had already started</p>
                                <p><strong>4. "He _______ (buy) a car last year."</strong> → bought</p>
                                <p><strong>5. "By 2010, they _______ (visit) ten countries."</strong> → had visited</p>
                                <p><strong>6. "I _______ (meet) him yesterday."</strong> → met</p>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Past Perfect</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę Past Perfect:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> When I arrived, she ______ (already/leave).</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_past1" value="a" />
                                                <span>already left</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_past1" value="b" />
                                                <span>had already left</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_past1" value="c" />
                                                <span>has already left</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Wcześniejsza przeszłość: had + V3</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> They ______ (not/eat) before they went to the cinema.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_past2" value="a" />
                                                <span>didn't eat</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_past2" value="b" />
                                                <span>hadn't eaten</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_past2" value="c" />
                                                <span>haven't eaten</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przeczenie: hadn't + V3</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> ______ you ______ (finish) your work when I called?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_past3" value="a" />
                                                <span>Had, finished</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_past3" value="b" />
                                                <span>Did, finish</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_past3" value="c" />
                                                <span>Have, finished</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Pytanie: Had + podmiot + V3</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> He told me he ______ (visit) Paris three times.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_past4" value="a" />
                                                <span>visited</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_past4" value="b" />
                                                <span>had visited</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_past4" value="c" />
                                                <span>has visited</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Mowa zależna: had + V3</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> By 2020, I ______ (graduate) from university.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_past5" value="a" />
                                                <span>graduated</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_past5" value="b" />
                                                <span>had graduated</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_past5" value="c" />
                                                <span>have graduated</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Czynność przed określonym momentem: had + V3</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> She was tired because she ______ (not/sleep) well.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_past6" value="a" />
                                                <span>didn't sleep</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_past6" value="b" />
                                                <span>hadn't slept</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_past6" value="c" />
                                                <span>hasn't slept</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Wyjaśnienie przyczyny: hadn't + V3</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> After they ______ (eat) dinner, they watched TV.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_past7" value="a" />
                                                <span>ate</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_past7" value="b" />
                                                <span>had eaten</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_past7" value="c" />
                                                <span>have eaten</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Kolejność zdarzeń: after + had + V3</div>
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
            id: 'past-perfect-continuous',
            title: 'Past Perfect Continuous 🔄',
            excerpt: 'Długotrwałe czynności przed innymi przeszłymi wydarzeniami.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Past Perfect Continuous - Czas Zaprzeszły Ciągły</h3>
                        <p className="muted">Podkreśla czas trwania czynności przed innym momentem w przeszłości</p>
                            <div className="tense-forms">
                                <h4>📝 Budowa zdań</h4>
                                <div className="forms-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Typ zdania</th>
                                            <th>Wzór</th>
                                            <th>Przykład</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><strong>Twierdzące</strong></td>
                                            <td>Podmiot + had been + V-ing</td>
                                            <td>"I <strong>had been waiting</strong> for an hour."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Przeczące</strong></td>
                                            <td>Podmiot + hadn't been + V-ing</td>
                                            <td>"I <strong>hadn't been waiting</strong> long."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Pytające</strong></td>
                                            <td>Had + podmiot + been + V-ing?</td>
                                            <td>"<strong>Had</strong> you <strong>been waiting</strong> long?"</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grammar-tip">
                                    <h5>💡 Past Perfect Simple vs Continuous</h5>
                                    <div className="rules-list">
                                        <div className="rule-item">
                                            <strong>Past Perfect Simple</strong> - skupia się na wyniku<br/>
                                            "She <em>had painted</em> the room." - Pokój był pomalowany
                                        </div>
                                        <div className="rule-item">
                                            <strong>Past Perfect Continuous</strong> - skupia się na czasie trwania<br/>
                                            "She <em>had been painting</em> the room." - Malowała pokój (podkreśla czas)
                                        </div>
                                        <div className="rule-item">
                                            <strong>Przykłady kontrastujące:</strong><br/>
                                            "I <em>had read</em> the book." - Przeczytałem książkę<br/>
                                            "I <em>had been reading</em> the book for hours." - Czytałem książkę godzinami
                                        </div>
                                    </div>
                                </div>

                                <div className="grammar-tip warning">
                                    <h5>⚠️ Częste błędy</h5>
                                    <ul>
                                        <li>❌ "I had been wait for hours." → ✅ "I had been <strong>waiting</strong> for hours."</li>
                                        <li>❌ "She had being studying." → ✅ "She had <strong>been studying</strong>."</li>
                                        <li>❌ "Had you been work all day?" → ✅ "Had you been <strong>working</strong> all day?"</li>
                                        <li>❌ "They had been to Paris for a week." → ✅ "They had <strong>been staying</strong> in Paris for a week."</li>
                                        <li>❌ "I had been live here since 2010." → ✅ "I had been <strong>living</strong> here since 2010."</li>
                                    </ul>
                                </div>
                            </div>
                        <div className="tense-grid">
                            <div className="tense-usage">
                                <h4>🎯 Kiedy używamy?</h4>
                                <div className="usage-cases">
                                    <div className="usage-case">
                                        <h5>⏱️ Długotrwałe czynności przed przeszłym momentem</h5>
                                        <p><strong>Słowa kluczowe:</strong> for, since, how long, all day/morning</p>
                                        <div className="example-group">
                                            <p>"I <em>had been waiting</em> for an hour when the bus finally came." - Czekałem godzinę, kiedy wreszcie przyjechał autobus.</p>
                                            <p>"She <em>had been working</em> there for 5 years when she got promoted." - Pracowała tam 5 lat, kiedy dostała awans.</p>
                                            <p>"They <em>had been living</em> in London since 2010 when they decided to move." - Mieszkali w Londynie od 2010, kiedy zdecydowali się przeprowadzić.</p>
                                            <p>"How long <em>had</em> you <em>been studying</em> before you passed the exam?" - Jak długo się uczyłeś, zanim zdałeś egzamin?</p>
                                            <p>"He <em>had been trying</em> to call her all morning." - Próbował się do niej dodzwonić cały ranek.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>😫 Przyczyna stanu w przeszłości</h5>
                                        <p><strong>Słowa kluczowe:</strong> because, as, since</p>
                                        <div className="example-group">
                                            <p>"He was tired because he <em>had been working</em> all day." - Był zmęczony, bo pracował cały dzień.</p>
                                            <p>"Her eyes were red because she <em>had been crying</em>." - Miała czerwone oczy, bo płakała.</p>
                                            <p>"They were out of breath because they <em>had been running</em>." - Byli zdyszani, bo biegli.</p>
                                            <p>"The ground was wet because it <em>had been raining</em>." - Ziemia była mokra, bo padało.</p>
                                            <p>"She was hungry because she <em>hadn't been eating</em> properly." - Była głodna, bo nie jadła porządnie.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>🔄 Czynności tymczasowe przed przeszłym momentem</h5>
                                        <div className="example-group">
                                            <p>"I <em>had been living</em> in London before I moved to Paris." - Mieszkałem w Londynie przed przeprowadzką do Paryża.</p>
                                            <p>"She <em>had been working</em> as a waitress before she found a better job." - Pracowała jako kelnerka przed tym, jak znalazła lepszą pracę.</p>
                                            <p>"They <em>had been saving</em> money for a year before they bought the house." - Oszczędzali pieniądze przez rok, zanim kupili dom.</p>
                                            <p>"He <em>had been studying</em> English for months before he visited England." - Uczył się angielskiego miesiącami, zanim odwiedził Anglię.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>📈 Czynności prowadzące do punktu kulminacyjnego</h5>
                                        <div className="example-group">
                                            <p>"I <em>had been feeling</em> unwell for days before I finally went to the doctor." - Źle się czułem od kilku dni, zanim wreszcie poszedłem do lekarza.</p>
                                            <p>"They <em>had been arguing</em> for weeks before they decided to break up." - Kłócili się od tygodni, zanim zdecydowali się rozstać.</p>
                                            <p>"The company <em>had been losing</em> money for years before it went bankrupt." - Firma traciła pieniądze od lat, zanim zbankrutowała.</p>
                                            <p>"He <em>had been practicing</em> for months before the competition." - Ćwiczył miesiącami przed zawodami.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Past Perfect Continuous vs Past Perfect Simple - Kluczowe różnice</h4>
                        <div className="tense-comparison">
                            <div className="comparison-case">
                                <h5>✅ Past Perfect Simple</h5>
                                <p><strong>Skupia się na wyniku/rezultacie</strong></p>
                                <div className="example-group">
                                    <p>"She <em>had painted</em> the room." - Pokój był pomalowany (rezultat)</p>
                                    <p>"I <em>had written</em> three letters." - Napisałem trzy listy (skończona czynność)</p>
                                    <p>"He <em>had read</em> the book." - Przeczytał książkę (doświadczenie)</p>
                                    <p>"They <em>had built</em> a house." - Zbudowali dom (rezultat)</p>
                                    <p>"I <em>had finished</em> my work." - Skończyłem pracę (rezultat)</p>
                                </div>
                            </div>

                            <div className="comparison-case">
                                <h5>🔄 Past Perfect Continuous</h5>
                                <p><strong>Skupia się na czasie trwania</strong></p>
                                <div className="example-group">
                                    <p>"She <em>had been painting</em> the room." - Malowała pokój (czas trwania)</p>
                                    <p>"I <em>had been writing</em> letters all morning." - Pisałem listy cały ranek (ciągłość)</p>
                                    <p>"He <em>had been reading</em> for two hours." - Czytał od dwóch godzin (czas)</p>
                                    <p>"They <em>had been building</em> the house for months." - Budowali dom od miesięcy (ciągłość)</p>
                                    <p>"I <em>had been working</em> on this project." - Pracowałem nad tym projektem (ciągłość)</p>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip">
                            <h5>🔍 Test: Simple czy Continuous?</h5>
                            <div className="quiz-examples">
                                <p><strong>1. "She _______ (work) there for 5 years when she was promoted."</strong> → had been working</p>
                                <p><strong>2. "I _______ (finish) my homework before you called."</strong> → had finished</p>
                                <p><strong>3. "They _______ (wait) for an hour when the bus arrived."</strong> → had been waiting</p>
                                <p><strong>4. "He _______ (read) three books that month."</strong> → had read</p>
                                <p><strong>5. "We _______ (live) in London since 2010."</strong> → had been living</p>
                                <p><strong>6. "I _______ (lose) my keys."</strong> → had lost</p>
                            </div>
                        </div>

                        <div className="grammar-tip warning">
                            <h5>💡 WAŻNE: Kiedy NIE używamy Continuous?</h5>
                            <div className="rules-list">
                                <div className="rule-item">
                                    <strong>Z czasownikami stanowymi:</strong><br/>
                                    ❌ "I had been knowing him for years."<br/>
                                    ✅ "I had known him for years."
                                </div>
                                <div className="rule-item">
                                    <strong>Z czasownikami oznaczającymi zakończone czynności:</strong><br/>
                                    ❌ "I had been finishing my work."<br/>
                                    ✅ "I had finished my work."
                                </div>
                                <div className="rule-item">
                                    <strong>Z określeniami ilości:</strong><br/>
                                    ❌ "I had been reading three books."<br/>
                                    ✅ "I had read three books."
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Past Perfect Continuous</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Uzupełnij zdania używając Past Perfect Continuous:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> I ______ (study) for three hours when you called.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past1" value="a" />
                                                <span>had studied</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past1" value="b" />
                                                <span>had been studying</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past1" value="c" />
                                                <span>was studying</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Podkreślenie czasu trwania: had been + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> They ______ (work) there for five years when the company closed.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past2" value="a" />
                                                <span>had worked</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past2" value="b" />
                                                <span>had been working</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past2" value="c" />
                                                <span>were working</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Długotrwała czynność przed przeszłym momentem: had been working</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> He was tired because he ______ (run).</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past3" value="a" />
                                                <span>had run</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past3" value="b" />
                                                <span>had been running</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past3" value="c" />
                                                <span>ran</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Wyjaśnienie przyczyny stanu: had been + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> How long ______ you ______ (wait) when the bus finally came?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past4" value="a" />
                                                <span>had, waited</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past4" value="b" />
                                                <span>had, been waiting</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past4" value="c" />
                                                <span>were, waiting</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Pytanie o czas trwania: had been waiting</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> She ______ (live) in London before she moved to Paris.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past5" value="a" />
                                                <span>lived</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past5" value="b" />
                                                <span>had lived</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past5" value="c" />
                                                <span>had been living</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Tymczasowa sytuacja przed przeszłym momentem: had been living</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> It ______ (rain) for hours when we decided to cancel the picnic.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past6" value="a" />
                                                <span>rained</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past6" value="b" />
                                                <span>had rained</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past6" value="c" />
                                                <span>had been raining</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Czynność prowadząca do punktu kulminacyjnego: had been raining</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> They ______ (not/sleep) well for weeks before they saw a doctor.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past7" value="a" />
                                                <span>hadn't been sleeping</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past7" value="b" />
                                                <span>didn't sleep</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="perfect_continuous_past7" value="c" />
                                                <span>haven't been sleeping</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przeczenie: hadn't been + V-ing</div>
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
    future: [
        {
            id: 'future-simple',
            title: 'Future Simple 🚀',
            excerpt: 'Spontaniczne decyzje, przewidywania, obietnice - will/shall.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Future Simple - Czas Przyszły Prosty</h3>
                        <p className="muted">Spontaniczne decyzje, przewidywania i obietnice dotyczące przyszłości</p>

                        <div className="tense-grid">
                            <div className="tense-forms">
                                <h4>📝 Budowa zdań</h4>
                                <div className="forms-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Typ zdania</th>
                                            <th>Wzór</th>
                                            <th>Przykład</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><strong>Twierdzące</strong></td>
                                            <td>Podmiot + will + V1</td>
                                            <td>"I <strong>will work</strong> tomorrow."<br/>"She <strong>will work</strong> tomorrow."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Przeczące</strong></td>
                                            <td>Podmiot + won't + V1</td>
                                            <td>"I <strong>won't work</strong> tomorrow."<br/>"She <strong>won't work</strong> tomorrow."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Pytające</strong></td>
                                            <td>Will + podmiot + V1?</td>
                                            <td>"<strong>Will</strong> you <strong>work</strong> tomorrow?"<br/>"<strong>Will</strong> she <strong>work</strong> tomorrow?"</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grammar-tip">
                                    <h5>💡 Will vs Shall - szczegółowe różnice</h5>
                                    <div className="rules-list">
                                        <div className="rule-item">
                                            <strong>Will</strong> - używamy w większości sytuacji:<br/>
                                            - spontaniczne decyzje<br/>
                                            - przewidywania<br/>
                                            - obietnice<br/>
                                            - groźby
                                        </div>
                                        <div className="rule-item">
                                            <strong>Shall</strong> - bardziej formalne, głównie w pytaniach:<br/>
                                            - sugestie ("Shall we go?")<br/>
                                            - oferty pomocy ("Shall I help you?")<br/>
                                            - pytania o preferencje ("What shall we do?")
                                        </div>
                                        <div className="rule-item">
                                            <strong>Skróty:</strong><br/>
                                            will not = won't<br/>
                                            shall not = shan't (rzadko używane)
                                        </div>
                                    </div>
                                </div>

                                <div className="grammar-tip warning">
                                    <h5>⚠️ Częste błędy</h5>
                                    <ul>
                                        <li>❌ "I will to go tomorrow." → ✅ "I <strong>will go</strong> tomorrow."</li>
                                        <li>❌ "She will works here." → ✅ "She <strong>will work</strong> here."</li>
                                        <li>❌ "Will you to come?" → ✅ "<strong>Will you come</strong>?"</li>
                                        <li>❌ "I won't to do it." → ✅ "I <strong>won't do</strong> it."</li>
                                        <li>❌ "They will going to school." → ✅ "They <strong>will go</strong> to school."</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="tense-usage">
                                <h4>🎯 Kiedy używamy?</h4>
                                <div className="usage-cases">
                                    <div className="usage-case">
                                        <h5>💡 Spontaniczne decyzje</h5>
                                        <p><strong>Słowa kluczowe:</strong> (decyzje podejmowane w momencie mówienia)</p>
                                        <div className="example-group">
                                            <p>"It's cold. I <em>will close</em> the window." - Zimno. Zamknę okno.</p>
                                            <p>"I <em>will help</em> you with your homework." - Pomogę ci z pracą domową.</p>
                                            <p>"This bag is heavy. I <em>will carry</em> it for you." - Ta torba jest ciężka. Poniosę ją dla ciebie.</p>
                                            <p>"I'm tired. I <em>will go</em> to bed early." - Jestem zmęczony. Pójdę wcześnie spać.</p>
                                            <p>"It's too expensive. I <em>won't buy</em> it." - To za drogie. Nie kupię tego.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>🔮 Przewidywania (bez pewności)</h5>
                                        <p><strong>Słowa kluczowe:</strong> think, believe, probably, maybe, perhaps</p>
                                        <div className="example-group">
                                            <p>"I think it <em>will rain</em> tomorrow." - Myślę, że jutro będzie padać.</p>
                                            <p>"She <em>will probably be</em> late." - Prawdopodobnie się spóźni.</p>
                                            <p>"They <em>will win</em> the match, I'm sure." - Na pewno wygrają mecz.</p>
                                            <p>"Maybe he <em>will call</em> us later." - Może do nas później zadzwoni.</p>
                                            <p>"I don't think she <em>will come</em> to the party." - Nie sądzę, żeby przyszła na imprezę.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>🤝 Obietnice i postanowienia</h5>
                                        <p><strong>Słowa kluczowe:</strong> promise, swear, guarantee</p>
                                        <div className="example-group">
                                            <p>"I <em>will call</em> you tomorrow." - Zadzwonię do ciebie jutro.</p>
                                            <p>"We <em>won't tell</em> anyone." - Nikomu nie powiemy.</p>
                                            <p>"I <em>will study</em> harder next year." - Będę się więcej uczyć w przyszłym roku.</p>
                                            <p>"She <em>will never forget</em> your kindness." - Nigdy nie zapomni twojej życzliwości.</p>
                                            <p>"I promise I <em>will be</em> on time." - Obiecuję, że będę na czas.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>📋 Oferty pomocy i prośby</h5>
                                        <p><strong>Słowa kluczowe:</strong> (pytania z will/shall)</p>
                                        <div className="example-group">
                                            <p>"<em>Shall</em> I open the window?" - Czy mam otworzyć okno?</p>
                                            <p>"<em>Will</em> you help me with this?" - Pomóżesz mi z tym?</p>
                                            <p>"<em>Shall</em> we go for a walk?" - Może pójdziemy na spacer?</p>
                                            <p>"<em>Will</em> you pass me the salt, please?" - Podasz mi sól, proszę?</p>
                                            <p>"What <em>shall</em> I wear to the party?" - Co mam założyć na imprezę?</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>⚡ Groźby i ostrzeżenia</h5>
                                        <div className="example-group">
                                            <p>"If you do that again, I <em>will tell</em> the teacher." - Jeśli zrobisz to jeszcze raz, powiem nauczycielowi.</p>
                                            <p>"You <em>will regret</em> this decision." - Pożałujesz tej decyzji.</p>
                                            <p>"Be careful or you <em>will hurt</em> yourself." - Uważaj, bo się zranisz.</p>
                                            <p>"I <em>will never forgive</em> you if you lie to me." - Nigdy ci nie wybaczę, jeśli mnie okłamiesz.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Future Simple w zdaniach warunkowych</h4>
                        <div className="conditional-usage">
                            <div className="usage-case">
                                <h5>📝 Pierwszy tryb warunkowy</h5>
                                <div className="example-group">
                                    <p>"If it rains, we <em>will stay</em> at home." - Jeśli będzie padać, zostaniemy w domu.</p>
                                    <p>"If you study hard, you <em>will pass</em> the exam." - Jeśli będziesz się uczyć, zdasz egzamin.</p>
                                    <p>"Unless he hurries, he <em>will be</em> late." - Jeśli się nie pospieszy, się spóźni.</p>
                                    <p>"As soon as she arrives, I <em>will call</em> you." - Jak tylko przyjedzie, do ciebie zadzwonię.</p>
                                </div>
                            </div>
                        </div>

                        <div className="grammar-tip">
                            <h5>🔍 Test: Uzupełnij zdania</h5>
                            <div className="quiz-examples">
                                <p><strong>1. "I think it _______ (rain) later."</strong> → will rain</p>
                                <p><strong>2. "_______ I help you with your bags?"</strong> → Shall</p>
                                <p><strong>3. "She _______ (not/come) to the party."</strong> → won't come</p>
                                <p><strong>4. "_______ you marry me?"</strong> → Will</p>
                                <p><strong>5. "They _______ (probably/be) late."</strong> → will probably be</p>
                                <p><strong>6. "I promise I _______ (call) you."</strong> → will call</p>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Future Simple</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę Future Simple:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> I think it ______ (rain) tomorrow.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_simple1" value="a" />
                                                <span>will rain</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_simple1" value="b" />
                                                <span>rains</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_simple1" value="c" />
                                                <span>raining</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przewidywanie: will + bezokolicznik</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> They ______ (not/come) to the party.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_simple2" value="a" />
                                                <span>won't come</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_simple2" value="b" />
                                                <span>don't come</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_simple2" value="c" />
                                                <span>not come</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przeczenie: won't + bezokolicznik</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> ______ you ______ (help) me with this project?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_simple3" value="a" />
                                                <span>Will, help</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_simple3" value="b" />
                                                <span>Do, help</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_simple3" value="c" />
                                                <span>Are, helping</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Pytanie: Will + podmiot + bezokolicznik</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> She ______ (probably/be) late.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_simple4" value="a" />
                                                <span>probably will be</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_simple4" value="b" />
                                                <span>will probably be</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_simple4" value="c" />
                                                <span>probably is</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przysłówki jak 'probably' stoją między 'will' a czasownikiem głównym</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> I promise I ______ (call) you tomorrow.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_simple5" value="a" />
                                                <span>call</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_simple5" value="b" />
                                                <span>will call</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_simple5" value="c" />
                                                <span>am calling</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Obietnica: will + bezokolicznik</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> ______ I open the window?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_simple6" value="a" />
                                                <span>Will</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_simple6" value="b" />
                                                <span>Shall</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_simple6" value="c" />
                                                <span>Do</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Oferta pomocy w 1 os. l.poj. i mnogiej: Shall I/we...</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>7.</strong> If it rains, we ______ (stay) at home.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_simple7" value="a" />
                                                <span>stay</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_simple7" value="b" />
                                                <span>will stay</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_simple7" value="c" />
                                                <span>stayed</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Pierwszy tryb warunkowy: if + Present Simple, will + bezokolicznik</div>
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
            id: 'future-continuous',
            title: 'Future Continuous ⏳',
            excerpt: 'Czynności, które będą trwać w określonym momencie w przyszłości.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Future Continuous - Czas Przyszły Ciągły</h3>
                        <p className="muted">Opisuje czynności, które będą w toku w określonym momencie w przyszłości</p>

                        <div className="tense-grid">
                            <div className="tense-forms">
                                <h4>📝 Budowa zdań</h4>
                                <div className="forms-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Typ zdania</th>
                                            <th>Wzór</th>
                                            <th>Przykład</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><strong>Twierdzące</strong></td>
                                            <td>Podmiot + will be + V-ing</td>
                                            <td>"I <strong>will be working</strong> at 5 PM tomorrow."<br/>"She <strong>will be working</strong> at 5 PM."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Przeczące</strong></td>
                                            <td>Podmiot + won't be + V-ing</td>
                                            <td>"I <strong>won't be working</strong> at 5 PM tomorrow."<br/>"She <strong>won't be working</strong> at 5 PM."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Pytające</strong></td>
                                            <td>Will + podmiot + be + V-ing?</td>
                                            <td>"<strong>Will</strong> you <strong>be working</strong> at 5 PM tomorrow?"<br/>"<strong>Will</strong> she <strong>be working</strong> at 5 PM?"</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grammar-tip">
                                    <h5>💡 Tworzenie formy -ing</h5>
                                    <div className="rules-list">
                                        <div className="rule-item">
                                            <strong>Większość czasowników:</strong> work → working, play → playing
                                        </div>
                                        <div className="rule-item">
                                            <strong>Usuwanie -e:</strong> take → taking, write → writing
                                        </div>
                                        <div className="rule-item">
                                            <strong>Podwajanie spółgłoski:</strong> run → running, swim → swimming
                                        </div>
                                        <div className="rule-item">
                                            <strong>-ie → -ying:</strong> lie → lying, die → dying
                                        </div>
                                    </div>
                                </div>

                                <div className="grammar-tip warning">
                                    <h5>⚠️ Częste błędy</h5>
                                    <ul>
                                        <li>❌ "I will be work at 5 PM." → ✅ "I <strong>will be working</strong> at 5 PM."</li>
                                        <li>❌ "She will being study." → ✅ "She <strong>will be studying</strong>."</li>
                                        <li>❌ "Will you be work tomorrow?" → ✅ "<strong>Will you be working</strong> tomorrow?"</li>
                                        <li>❌ "They won't be come." → ✅ "They <strong>won't be coming</strong>."</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="tense-usage">
                                <h4>🎯 Kiedy używamy?</h4>
                                <div className="usage-cases">
                                    <div className="usage-case">
                                        <h5>⏰ Czynności w toku w przyszłości</h5>
                                        <p><strong>Słowa kluczowe:</strong> this time tomorrow, at 8 PM, at that moment</p>
                                        <div className="example-group">
                                            <p>"This time tomorrow, I <em>will be flying</em> to Paris." - Jutro o tej porze będę leciał do Paryża.</p>
                                            <p>"At 8 PM, we <em>will be having</em> dinner." - O 20:00 będziemy jeść obiad.</p>
                                            <p>"Don't call at 6 - I <em>will be driving</em> home." - Nie dzwoń o 18 - będę jechał do domu.</p>
                                            <p>"At noon tomorrow, she <em>will be taking</em> her exam." - Jutro w południe będzie zdawać egzamin.</p>
                                            <p>"This time next week, we <em>will be lying</em> on the beach." - Za tydzień o tej porze będziemy leżeć na plaży.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>📅 Zaplanowane wydarzenia</h5>
                                        <p><strong>Słowa kluczowe:</strong> (czynności zaplanowane w kalendarzu)</p>
                                        <div className="example-group">
                                            <p>"Don't call at 6 - I <em>will be working</em>." - Nie dzwoń o 18 - będę pracować.</p>
                                            <p>"She <em>will be studying</em> all weekend." - Będzie się uczyć cały weekend.</p>
                                            <p>"They <em>will be traveling</em> in Japan next month." - Będą podróżować po Japonii w przyszłym miesiącu.</p>
                                            <p>"We <em>will be moving</em> to a new house in June." - Będziemy się przeprowadzać do nowego domu w czerwcu.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>🤔 Grzeczne pytania o plany</h5>
                                        <p><strong>Słowa kluczowe:</strong> (pytania o czyjeś plany bez presji)</p>
                                        <div className="example-group">
                                            <p>"<em>Will</em> you <em>be using</em> the car tomorrow?" - Czy będziesz jutro używać samochodu?</p>
                                            <p>"<em>Will</em> you <em>be staying</em> with us long?" - Czy zostaniesz z nami długo?</p>
                                            <p>"What <em>will</em> you <em>be doing</em> this evening?" - Co będziesz robić dziś wieczorem?</p>
                                            <p>"<em>Will</em> you <em>be needing</em> any help?" - Czy będziesz potrzebować pomocy?</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>🔄 Rutynowe czynności w przyszłości</h5>
                                        <div className="example-group">
                                            <p>"Most people <em>will be working</em> at this time tomorrow." - Większość ludzi będzie jutro o tej porze pracować.</p>
                                            <p>"The children <em>will be sleeping</em> when we get home." - Dzieci będą spać, kiedy wrócimy do domu.</p>
                                            <p>"He <em>will probably be watching</em> TV as usual." - Prawdopodobnie będzie oglądać telewizję jak zwykle.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Future Continuous vs Future Simple</h4>
                        <div className="tense-comparison">
                            <div className="comparison-case">
                                <h5>🚀 Future Simple</h5>
                                <p><strong>Decyzje i zamiary</strong></p>
                                <div className="example-group">
                                    <p>"I <em>will call</em> you tomorrow." - Zadzwonię do ciebie jutro.</p>
                                    <p>"She <em>will study</em> for the exam." - Będzie się uczyć do egzaminu.</p>
                                    <p>"They <em>will arrive</em> at 8 PM." - Przyjadą o 20:00.</p>
                                    <p>"We <em>will help</em> you." - Pomożemy ci.</p>
                                </div>
                            </div>

                            <div className="comparison-case">
                                <h5>⏳ Future Continuous</h5>
                                <p><strong>Czynności w toku</strong></p>
                                <div className="example-group">
                                    <p>"I <em>will be calling</em> you at 6 PM." - Będę do ciebie dzwonić o 18:00.</p>
                                    <p>"She <em>will be studying</em> when you arrive." - Będzie się uczyć, kiedy przyjedziesz.</p>
                                    <p>"They <em>will be arriving</em> at the airport." - Będą przyjeżdżać na lotnisko.</p>
                                    <p>"We <em>will be helping</em> with the project all day." - Będziemy pomagać przy projekcie cały dzień.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Future Continuous</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Uzupełnij zdania używając Future Continuous:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> This time tomorrow, I ______ (fly) to Paris.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_continuous1" value="a" />
                                                <span>will fly</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_continuous1" value="b" />
                                                <span>will be flying</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_continuous1" value="c" />
                                                <span>am flying</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Czynność w toku w określonym momencie: will be + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> At 8 PM, we ______ (have) dinner.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_continuous2" value="a" />
                                                <span>will have</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_continuous2" value="b" />
                                                <span>will be having</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_continuous2" value="c" />
                                                <span>have</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Zaplanowana czynność w danym momencie: will be + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> Don't call at 6 - I ______ (drive) home.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_continuous3" value="a" />
                                                <span>will drive</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_continuous3" value="b" />
                                                <span>will be driving</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_continuous3" value="c" />
                                                <span>drive</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Czynność w toku w danym momencie: will be + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> ______ you ______ (work) at 5 PM tomorrow?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_continuous4" value="a" />
                                                <span>Will, work</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_continuous4" value="b" />
                                                <span>Will, be working</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_continuous4" value="c" />
                                                <span>Are, working</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Pytanie: Will + podmiot + be + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> They ______ (not/watch) TV this time tomorrow.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_continuous5" value="a" />
                                                <span>won't watch</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_continuous5" value="b" />
                                                <span>won't be watching</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_continuous5" value="c" />
                                                <span>aren't watching</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przeczenie: won't be + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> What ______ you ______ (do) at this time next week?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_continuous6" value="a" />
                                                <span>will, do</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_continuous6" value="b" />
                                                <span>will, be doing</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_continuous6" value="c" />
                                                <span>are, doing</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Pytanie o czynność w danym momencie: will be + V-ing</div>
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
            id: 'future-perfect-simple',
            title: 'Future Perfect Simple ✅',
            excerpt: 'Czynności, które zakończą się przed określonym momentem w przyszłości.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Future Perfect Simple - Czas Przyszły Dokonany Prosty</h3>
                        <p className="muted">Pokazuje, że czynność zakończy się przed określonym momentem w przyszłości</p>

                        <div className="tense-grid">
                            <div className="tense-forms">
                                <h4>📝 Budowa zdań</h4>
                                <div className="forms-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Typ zdania</th>
                                            <th>Wzór</th>
                                            <th>Przykład</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><strong>Twierdzące</strong></td>
                                            <td>Podmiot + will have + V3</td>
                                            <td>"I <strong>will have finished</strong> by 6 PM."<br/>"She <strong>will have finished</strong> by 6 PM."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Przeczące</strong></td>
                                            <td>Podmiot + won't have + V3</td>
                                            <td>"I <strong>won't have finished</strong> by 6 PM."<br/>"She <strong>won't have finished</strong> by 6 PM."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Pytające</strong></td>
                                            <td>Will + podmiot + have + V3?</td>
                                            <td>"<strong>Will</strong> you <strong>have finished</strong> by 6 PM?"<br/>"<strong>Will</strong> she <strong>have finished</strong> by 6 PM?"</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grammar-tip">
                                    <h5>💡 Czasowniki regularne i nieregularne</h5>
                                    <div className="rules-list">
                                        <div className="rule-item">
                                            <strong>Czasowniki regularne:</strong> V3 = V1 + ed<br/>
                                            finish → finished, work → worked, play → played
                                        </div>
                                        <div className="rule-item">
                                            <strong>Czasowniki nieregularne:</strong> mają własne formy V3<br/>
                                            go → gone, see → seen, eat → eaten, write → written
                                        </div>
                                        <div className="rule-item">
                                            <strong>Ważne nieregularne:</strong>
                                            <ul>
                                                <li>be → been</li>
                                                <li>do → done</li>
                                                <li>have → had</li>
                                                <li>make → made</li>
                                                <li>take → taken</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="grammar-tip">
                                    <h5>📅 Określniki czasu - pozycja w zdaniu</h5>
                                    <div className="rules-list">
                                        <div className="rule-item">
                                            <strong>By + czas</strong> - na końcu zdania<br/>
                                            "I will have finished <em>by 6 PM</em>."<br/>
                                            "She will have arrived <em>by tomorrow</em>."
                                        </div>
                                        <div className="rule-item">
                                            <strong>By the time + zdanie</strong> - na początku lub końcu<br/>
                                            "<em>By the time you arrive</em>, I will have finished."<br/>
                                            "I will have finished <em>by the time you arrive</em>."
                                        </div>
                                        <div className="rule-item">
                                            <strong>Before + czas/zdanie</strong><br/>
                                            "I will have left <em>before 5 o'clock</em>."<br/>
                                            "She will have graduated <em>before she turns 25</em>."
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tense-usage">
                                <h4>🎯 Kiedy używamy?</h4>
                                <div className="usage-cases">
                                    <div className="usage-case">
                                        <h5>⏰ Czynności zakończone przed przyszłym momentem</h5>
                                        <p><strong>Słowa kluczowe:</strong> by, by the time, before, until</p>
                                        <div className="example-group">
                                            <p>"By 2025, I <em>will have finished</em> my studies." - Do 2025 roku skończę studia.</p>
                                            <p>"She <em>will have arrived</em> by the time we get there." - Ona będzie już na miejscu, kiedy my tam dotrzemy.</p>
                                            <p>"They <em>will have left</em> before we arrive." - Wyjadą, zanim my przyjedziemy.</p>
                                            <p>"I <em>will have completed</em> the project by Friday." - Ukończę projekt do piątku.</p>
                                            <p>"He <em>will have retired</em> by the age of 65." - Przejdzie na emeryturę do 65. roku życia.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>📈 Doświadczenia do danego momentu</h5>
                                        <p><strong>Słowa kluczowe:</strong> by then, by that time</p>
                                        <div className="example-group">
                                            <p>"By next year, I <em>will have visited</em> 10 countries." - Do przyszłego roku odwiedzę 10 krajów.</p>
                                            <p>"She <em>will have seen</em> that movie three times by tomorrow." - Zobaczy ten film trzy razy do jutra.</p>
                                            <p>"By the time he's 30, he <em>will have worked</em> for 10 years." - Zanim skończy 30 lat, będzie pracował 10 lat.</p>
                                            <p>"We <em>will have been</em> married for 25 years by 2030." - Będziemy małżeństwem 25 lat do 2030 roku.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>🎯 Osiągnięcia i rezultaty</h5>
                                        <div className="example-group">
                                            <p>"By the end of this course, you <em>will have learned</em> all the tenses." - Pod koniec tego kursu nauczysz się wszystkich czasów.</p>
                                            <p>"They <em>will have built</em> 100 houses by December." - Zbudują 100 domów do grudnia.</p>
                                            <p>"She <em>will have written</em> five books by next year." - Napisze pięć książek do przyszłego roku.</p>
                                            <p>"We <em>will have saved</em> enough money for a house by 2025." - Zaoszczędzimy wystarczająco pieniędzy na dom do 2025 roku.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Future Perfect Simple</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę Future Perfect Simple:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> By 2025, I ______ (finish) my studies.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_perfect1" value="a" />
                                                <span>will finish</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect1" value="b" />
                                                <span>will have finished</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect1" value="c" />
                                                <span>finish</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Czynność zakończona przed przyszłym momentem: will have + V3</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> She ______ (arrive) by the time we get there.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_perfect2" value="a" />
                                                <span>will arrive</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect2" value="b" />
                                                <span>will have arrived</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect2" value="c" />
                                                <span>arrives</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Czynność zakończona przed inną przyszłą czynnością: will have + V3</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> They ______ (not/complete) the project by Friday.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_perfect3" value="a" />
                                                <span>won't complete</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect3" value="b" />
                                                <span>won't have completed</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect3" value="c" />
                                                <span>don't complete</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przeczenie: won't have + V3</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> ______ you ______ (read) the book by tomorrow?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_perfect4" value="a" />
                                                <span>Will, read</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect4" value="b" />
                                                <span>Will, have read</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect4" value="c" />
                                                <span>Do, read</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Pytanie: Will + podmiot + have + V3</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> By next year, he ______ (work) here for 10 years.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_perfect5" value="a" />
                                                <span>will work</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect5" value="b" />
                                                <span>will have worked</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect5" value="c" />
                                                <span>works</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Doświadczenie do danego momentu: will have + V3</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> We ______ (save) enough money by December.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_perfect6" value="a" />
                                                <span>will save</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect6" value="b" />
                                                <span>will have saved</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect6" value="c" />
                                                <span>save</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Osiągnięcie do określonego momentu: will have + V3</div>
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
            id: 'future-perfect-continuous',
            title: 'Future Perfect Continuous 🔄',
            excerpt: 'Długotrwałe czynności trwające do określonego momentu w przyszłości.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Future Perfect Continuous - Czas Przyszły Dokonany Ciągły</h3>
                        <p className="muted">Podkreśla czas trwania czynności do określonego momentu w przyszłości</p>

                        <div className="tense-grid">
                            <div className="tense-forms">
                                <h4>📝 Budowa zdań</h4>
                                <div className="forms-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Typ zdania</th>
                                            <th>Wzór</th>
                                            <th>Przykład</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><strong>Twierdzące</strong></td>
                                            <td>Podmiot + will have been + V-ing</td>
                                            <td>"I <strong>will have been working</strong> for 5 hours by 6 PM."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Przeczące</strong></td>
                                            <td>Podmiot + won't have been + V-ing</td>
                                            <td>"I <strong>won't have been working</strong> for long by 6 PM."</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Pytające</strong></td>
                                            <td>Will + podmiot + have been + V-ing?</td>
                                            <td>"<strong>Will</strong> you <strong>have been working</strong> long by 6 PM?"</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="grammar-tip">
                                    <h5>💡 Różnice w użyciu for/since</h5>
                                    <div className="rules-list">
                                        <div className="rule-item">
                                            <strong>For + okres czasu:</strong><br/>
                                            for 2 hours, for 3 days, for 5 years
                                        </div>
                                        <div className="rule-item">
                                            <strong>Since + moment w czasie:</strong><br/>
                                            since 2020, since Monday, since I started
                                        </div>
                                        <div className="rule-item">
                                            <strong>Przykłady:</strong><br/>
                                            "I will have been waiting <em>for two hours</em>."<br/>
                                            "She will have been working here <em>since 2019</em>."
                                        </div>
                                    </div>
                                </div>

                                <div className="grammar-tip warning">
                                    <h5>⚠️ Częste błędy</h5>
                                    <ul>
                                        <li>❌ "I will have been work for hours." → ✅ "I will have been <strong>working</strong> for hours."</li>
                                        <li>❌ "She will have being studying." → ✅ "She will have <strong>been studying</strong>."</li>
                                        <li>❌ "Will you have been work all day?" → ✅ "Will you have been <strong>working</strong> all day?"</li>
                                        <li>❌ "They will have been to Paris for a week." → ✅ "They will have <strong>been staying</strong> in Paris for a week."</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="tense-usage">
                                <h4>🎯 Kiedy używamy?</h4>
                                <div className="usage-cases">
                                    <div className="usage-case">
                                        <h5>⏱️ Długotrwałe czynności do przyszłego momentu</h5>
                                        <p><strong>Słowa kluczowe:</strong> for, since, by, all day/week</p>
                                        <div className="example-group">
                                            <p>"By next May, I <em>will have been living</em> here for 10 years." - Do przyszłego maja będę mieszkał tu 10 lat.</p>
                                            <p>"In September, she <em>will have been working</em> here for 5 years." - We wrześniu będzie pracować tu 5 lat.</p>
                                            <p>"By 2025, they <em>will have been married</em> for 20 years." - Do 2025 roku będą małżeństwem 20 lat.</p>
                                            <p>"He <em>will have been studying</em> English for 8 years by the time he graduates." - Będzie uczył się angielskiego 8 lat, zanim skończy studia.</p>
                                            <p>"We <em>will have been traveling</em> for three months by December." - Będziemy podróżować trzy miesiące do grudnia.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>😫 Skutki długotrwałych czynności</h5>
                                        <div className="example-group">
                                            <p>"By the end of the day, I <em>will have been working</em> for 12 hours." - Pod koniec dnia będę pracował 12 godzin.</p>
                                            <p>"She will be exhausted because she <em>will have been studying</em> all night." - Będzie wyczerpana, bo będzie się uczyć całą noc.</p>
                                            <p>"They will be tired when they arrive because they <em>will have been driving</em> for 10 hours." - Będą zmęczeni, kiedy przyjadą, bo będą jechać 10 godzin.</p>
                                            <p>"By the time the guests arrive, I <em>will have been cooking</em> for six hours." - Zanim goście przyjdą, będę gotować sześć godzin.</p>
                                        </div>
                                    </div>
                                    <div className="usage-case">
                                        <h5>📊 Podkreślanie czasu trwania</h5>
                                        <div className="example-group">
                                            <p>"Next month, I <em>will have been learning</em> Spanish for two years." - W przyszłym miesiącu będę uczył się hiszpańskiego dwa lata.</p>
                                            <p>"By tomorrow, she <em>will have been waiting</em> for his call for a week." - Do jutra będzie czekać na jego telefon tydzień.</p>
                                            <p>"They <em>will have been building</em> this bridge for three years by next summer." - Będą budować ten most trzy lata do przyszłego lata.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Future Perfect Simple vs Continuous</h4>
                        <div className="tense-comparison">
                            <div className="comparison-case">
                                <h5>✅ Future Perfect Simple</h5>
                                <p><strong>Skupia się na wyniku</strong></p>
                                <div className="example-group">
                                    <p>"By 2025, I <em>will have finished</em> my degree." - Do 2025 skończę studia.</p>
                                    <p>"She <em>will have written</em> the report by Friday." - Napisze raport do piątku.</p>
                                    <p>"They <em>will have visited</em> 10 countries by next year." - Odwiedzą 10 krajów do przyszłego roku.</p>
                                </div>
                            </div>

                            <div className="comparison-case">
                                <h5>🔄 Future Perfect Continuous</h5>
                                <p><strong>Skupia się na czasie trwania</strong></p>
                                <div className="example-group">
                                    <p>"By 2025, I <em>will have been studying</em> for 5 years." - Będę studiować 5 lat do 2025.</p>
                                    <p>"She <em>will have been working</em> on the report for a week." - Będzie pracować nad raportem tydzień.</p>
                                    <p>"They <em>will have been traveling</em> for six months." - Będą podróżować sześć miesięcy.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Future Perfect Continuous</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Uzupełnij zdania używając Future Perfect Continuous:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> By next May, I ______ (live) here for 10 years.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont1" value="a" />
                                                <span>will live</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont1" value="b" />
                                                <span>will have lived</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont1" value="c" />
                                                <span>will have been living</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Podkreślenie czasu trwania: will have been + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> In September, she ______ (work) here for 5 years.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont2" value="a" />
                                                <span>will work</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont2" value="b" />
                                                <span>will have worked</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont2" value="c" />
                                                <span>will have been working</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Długotrwała czynność do przyszłego momentu: will have been + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> By 2025, they ______ (be) married for 20 years.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont3" value="a" />
                                                <span>will be</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont3" value="b" />
                                                <span>will have been</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont3" value="c" />
                                                <span>will have been being</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Czasownik 'be' w Future Perfect Continuous: will have been + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> He ______ (study) for 8 hours by the time we meet.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont4" value="a" />
                                                <span>will study</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont4" value="b" />
                                                <span>will have studied</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont4" value="c" />
                                                <span>will have been studying</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Podkreślenie czasu trwania czynności: will have been + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> How long ______ you ______ (learn) English by next year?</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont5" value="a" />
                                                <span>will, learn</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont5" value="b" />
                                                <span>will, have learned</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont5" value="c" />
                                                <span>will, have been learning</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Pytanie o czas trwania: will have been + V-ing</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> They ______ (not/work) here for long by December.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont6" value="a" />
                                                <span>won't work</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont6" value="b" />
                                                <span>won't have worked</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="future_perfect_cont6" value="c" />
                                                <span>won't have been working</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przeczenie: won't have been + V-ing</div>
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
            id: 'other-future-forms',
            title: 'Inne formy przyszłe 🎯',
            excerpt: 'Be going to, Present Continuous, Present Simple - różne sposoby wyrażania przyszłości.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Inne sposoby wyrażania przyszłości</h3>
                        <p className="muted">Angielski oferuje wiele sposobów mówienia o przyszłości - każdy z innym odcieniem znaczeniowym</p>

                        <div className="future-forms-comparison">
                            <div className="future-form">
                                <h4>🎯 Be going to</h4>
                                <div className="form-usage">
                                    <h5>Kiedy używamy?</h5>
                                    <div className="usage-cases">
                                        <div className="usage-case">
                                            <h6>📝 Zamiary i plany</h6>
                                            <p>"I <em>am going to study</em> medicine." - Zamierzam studiować medycynę.</p>
                                            <p>"We <em>are going to buy</em> a new car." - Zamierzamy kupić nowy samochód.</p>
                                        </div>
                                        <div className="usage-case">
                                            <h6>🔮 Przewidywania na podstawie oznak</h6>
                                            <p>"Look at those clouds - it <em>is going to rain</em>." - Spójrz na te chmury - będzie padać.</p>
                                            <p>"He <em>is going to be</em> late - there's a traffic jam." - Będzie spóźniony - jest korek.</p>
                                        </div>
                                    </div>

                                    <div className="forms-table">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>Typ zdania</th>
                                                <th>Przykład</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Twierdzące</td>
                                                <td>"I <strong>am going to work</strong> tomorrow."</td>
                                            </tr>
                                            <tr>
                                                <td>Przeczące</td>
                                                <td>"I <strong>am not going to work</strong> tomorrow."</td>
                                            </tr>
                                            <tr>
                                                <td>Pytające</td>
                                                <td>"<strong>Are</strong> you <strong>going to work</strong> tomorrow?"</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="future-form">
                                <h4>📅 Present Continuous</h4>
                                <div className="form-usage">
                                    <h5>Kiedy używamy?</h5>
                                    <p><strong>Ustalone plany i aranżacje</strong></p>
                                    <p>"I <em>am meeting</em> my friends tonight." - Spotykam się dziś wieczorem z przyjaciółmi.</p>
                                    <p>"We <em>are flying</em> to Paris next week." - Lecimy do Paryża w przyszłym tygodniu.</p>
                                </div>
                            </div>

                            <div className="future-form">
                                <h4>⏰ Present Simple</h4>
                                <div className="form-usage">
                                    <h5>Kiedy używamy?</h5>
                                    <p><strong>Rozkłady i harmonogramy</strong></p>
                                    <p>"The train <em>leaves</em> at 7 PM." - Pociąg odjeżdża o 19:00.</p>
                                    <p>"The store <em>opens</em> at 9 AM tomorrow." - Sklep jutro otwiera się o 9:00.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🎯 Porównanie form przyszłych</h4>
                        <div className="future-comparison-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Forma</th>
                                    <th>Znaczenie</th>
                                    <th>Przykład</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><strong>Will</strong></td>
                                    <td>Spontaniczne decyzje, przewidywania</td>
                                    <td>"I'll help you." - Pomogę ci.</td>
                                </tr>
                                <tr>
                                    <td><strong>Be going to</strong></td>
                                    <td>Zamiary, plany, przewidywania z oznak</td>
                                    <td>"I'm going to study harder." - Zamierzam się więcej uczyć.</td>
                                </tr>
                                <tr>
                                    <td><strong>Present Continuous</strong></td>
                                    <td>Ustalone plany</td>
                                    <td>"I'm meeting John at 6." - Spotykam się z Johnem o 18:00.</td>
                                </tr>
                                <tr>
                                    <td><strong>Present Simple</strong></td>
                                    <td>Rozkłady, harmonogramy</td>
                                    <td>"The film starts at 8." - Film zaczyna się o 20:00.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="card">
                        <h4>🔍 Ćwiczenie praktyczne - Różne formy przyszłe</h4>
                        <div className="practice-exercise">
                            <div className="exercise-question">
                                <h5>Wybierz poprawną formę wyrażania przyszłości:</h5>
                                <div className="exercise-items">
                                    <div className="exercise-item">
                                        <p><strong>1.</strong> Look at those dark clouds - it ______ (rain).</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="other_future1" value="a" />
                                                <span>will rain</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="other_future1" value="b" />
                                                <span>is going to rain</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="other_future1" value="c" />
                                                <span>rains</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przewidywanie na podstawie oznak: be going to</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>2.</strong> I ______ (study) medicine at university.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="other_future2" value="a" />
                                                <span>will study</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="other_future2" value="b" />
                                                <span>am going to study</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="other_future2" value="c" />
                                                <span>study</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Zamiar: be going to</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>3.</strong> The train ______ (leave) at 7 PM tomorrow.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="other_future3" value="a" />
                                                <span>will leave</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="other_future3" value="b" />
                                                <span>is leaving</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="other_future3" value="c" />
                                                <span>leaves</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Rozkład jazdy: Present Simple</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>4.</strong> I ______ (meet) my friends tonight at 8.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="other_future4" value="a" />
                                                <span>will meet</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="other_future4" value="b" />
                                                <span>am meeting</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="other_future4" value="c" />
                                                <span>meet</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Ustalone plany: Present Continuous</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>5.</strong> I think she ______ (pass) the exam.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="other_future5" value="a" />
                                                <span>will pass</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="other_future5" value="b" />
                                                <span>is going to pass</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="other_future5" value="c" />
                                                <span>passes</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Przewidywanie bez oznak: will</div>
                                        </div>
                                    </div>

                                    <div className="exercise-item">
                                        <p><strong>6.</strong> The conference ______ (start) on Monday at 9 AM.</p>
                                        <div className="options">
                                            <label className="option">
                                                <input type="radio" name="other_future6" value="a" />
                                                <span>will start</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="other_future6" value="b" />
                                                <span>is starting</span>
                                            </label>
                                            <label className="option">
                                                <input type="radio" name="other_future6" value="c" />
                                                <span>starts</span>
                                            </label>
                                        </div>
                                        <div className="exercise-feedback" style={{display: 'none'}}>
                                            <div className="explanation">Harmonogram wydarzeń: Present Simple</div>
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

export default function Tenses() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const active = section ?? 'present'
    const topicId = searchParams.get('topic')
    const topics = TOPICS[active] ?? []
    const selected = topics.find(t => t.id === topicId)
    const basePath = `/gramatyka/czasy-angielskie/${active}`

    return (
        <main className="topic-layout">
            <div className="container">
                <header className="topic-header">
                    <h2>Czasy angielskie</h2>
                    <p className="muted">Kompletny przewodnik po wszystkich czasach - od podstaw do zaawansowanych konstrukcji</p>
                </header>

                <nav className="subnav" aria-label="Podstrony: Czasy">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/gramatyka/czasy-angielskie/${s.id}`}
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
                                <h3>Opanuj czasy angielskie! ⏰</h3>
                                <p>Wybierz kategorię czasów, a następnie konkretny czas, który chcesz poznać.
                                    Znajdziesz tu szczegółowe wyjaśnienia, praktyczne przykłady i wskazówki,
                                    które pomogą Ci zrozumieć, kiedy używać danego czasu.</p>
                            </div>
                            <TopicsGrid basePath={basePath} active={active} />
                        </>
                    )}
                </article>
            </div>
        </main>
    )
}