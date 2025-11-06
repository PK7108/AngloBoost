import React from 'react';
import { Link } from 'react-router-dom';
import './WritingStyles.css';

const StoryWriting = () => {
    return (
        <article className="writing-article">
            <div className="writing-article__header">
                <div className="container">
                    <nav className="writing-article__breadcrumb">
                        <Link to="/pisanie" className="writing-article__breadcrumb-link">Pisanie</Link>
                        <span className="writing-article__breadcrumb-separator">/</span>
                        <span className="writing-article__breadcrumb-current">Opowiadanie</span>
                    </nav>
                    <h1 className="writing-article__title">Jak pisać opowiadanie po angielsku? 📖</h1>
                    <p className="writing-article__intro">Kompletny przewodnik po tworzeniu ciekawych i poprawnych językowo opowiadań w języku angielskim</p>
                    <div className="writing-article__meta">
                        <span className="writing-article__reading-time">⏱️ Czas czytania: 8 minut</span>
                        <span className="writing-article__level">🎯 Poziom: A2-C1</span>
                        <span className="writing-article__words">📝 Słowa kluczowe: narrative, plot, characters, setting</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="writing-article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="writing-article__section">
                        <div className="writing-tip-box">
                            <h3>✍️ Czym jest opowiadanie po angielsku?</h3>
                            <p><strong>Short story</strong> to krótka forma narracyjna, która opowiada spójną historię z początkiem, rozwinięciem i zakończeniem. W nauce języka angielskiego pisanie opowiadań rozwija umiejętność używania czasów przeszłych, bogatego słownictwa i konstrukcji narracyjnych.</p>
                        </div>

                        <h2>Dlaczego warto ćwiczyć pisanie opowiadań?</h2>
                        <div className="writing-points-grid">
                            <div className="writing-point-card">
                                <h4>🎭 Rozwija wyobraźnię</h4>
                                <p>Tworzysz własne światy i postaci, co czyni naukę bardziej angażującą</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>📚 Poszerza słownictwo</h4>
                                <p>Wymaga użycia różnorodnych czasowników, przymiotników i wyrażeń</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>⏰ Ćwiczy czasy przeszłe</h4>
                                <p>Perfect opportunity to practice Past Simple, Past Continuous i Past Perfect</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja struktury */}
                    <section className="writing-article__section">
                        <h2>Struktura opowiadania 🏗️</h2>

                        <div className="story-structure">
                            <div className="structure-phase">
                                <div className="phase-header">
                                    <span className="phase-number">1</span>
                                    <h3>Wstęp (Introduction)</h3>
                                </div>
                                <div className="phase-content">
                                    <h4>Cel: Zainteresować czytelnika</h4>
                                    <ul>
                                        <li>✅ Przedstaw głównych bohaterów</li>
                                        <li>✅ Określ czas i miejsce akcji</li>
                                        <li>✅ Nakreśl sytuację wyjściową</li>
                                        <li>✅ Zadbaj o hook - pierwsze zdanie, które przykuwa uwagę</li>
                                    </ul>
                                    <div className="phase-example">
                                        <strong>Przykład:</strong> "It was a dark and stormy night when Emma decided to explore the abandoned mansion on the hill."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-phase">
                                <div className="phase-header">
                                    <span className="phase-number">2</span>
                                    <h3>Rozwinięcie (Development)</h3>
                                </div>
                                <div className="phase-content">
                                    <h4>Cel: Budować napięcie i rozwijać akcję</h4>
                                    <ul>
                                        <li>✅ Opisz wydarzenia w porządku chronologicznym</li>
                                        <li>✅ Wprowadź konflikt lub wyzwanie</li>
                                        <li>✅ Rozwijaj charaktery bohaterów</li>
                                        <li>✅ Używaj łączników czasu do płynnych przejść</li>
                                    </ul>
                                    <div className="phase-example">
                                        <strong>Przykład:</strong> "As she entered the dusty hallway, she heard a faint whisper coming from the room at the end."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-phase">
                                <div className="phase-header">
                                    <span className="phase-number">3</span>
                                    <h3>Zakończenie (Conclusion)</h3>
                                </div>
                                <div className="phase-content">
                                    <h4>Cel: Rozwiązać wątki i zostawić czytelnika z refleksją</h4>
                                    <ul>
                                        <li>✅ Rozwiąż główny konflikt</li>
                                        <li>✅ Podsumuj losy bohaterów</li>
                                        <li>✅ Zostaw morał lub otwarte zakończenie</li>
                                        <li>✅ Unikaj nagłych, nielogicznych zakończeń</li>
                                    </ul>
                                    <div className="phase-example">
                                        <strong>Przykład:</strong> "In the end, Emma realized that the real treasure wasn't in the mansion, but in the courage she found within herself."
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja czasów gramatycznych */}
                    <section className="writing-article__section">
                        <h2>Czasy gramatyczne w opowiadaniu ⏳</h2>

                        <div className="tenses-guide">
                            <div className="tense-card">
                                <div className="tense-header">
                                    <h3>Past Simple</h3>
                                    <span className="tense-usage">Główne wydarzenia</span>
                                </div>
                                <div className="tense-content">
                                    <p><strong>Użycie:</strong> Do opisywania kolejnych wydarzeń w historii</p>
                                    <div className="tense-examples">
                                        <div className="example-pair">
                                            <span className="example">"She opened the door and entered the room."</span>
                                            <span className="translation">Otworzyła drzwi i weszła do pokoju.</span>
                                        </div>
                                        <div className="example-pair">
                                            <span className="example">"He decided to take the risk."</span>
                                            <span className="translation">Zdecydował się zaryzykować.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tense-card">
                                <div className="tense-header">
                                    <h3>Past Continuous</h3>
                                    <span className="tense-usage">Tło wydarzeń</span>
                                </div>
                                <div className="tense-content">
                                    <p><strong>Użycie:</strong> Do opisywania tła, atmosfery i działań w trakcie trwania</p>
                                    <div className="tense-examples">
                                        <div className="example-pair">
                                            <span className="example">"The wind was howling outside."</span>
                                            <span className="translation">Na zewnątrz wył wiatr.</span>
                                        </div>
                                        <div className="example-pair">
                                            <span className="example">"While she was searching for clues, the phone rang."</span>
                                            <span className="translation">Gdy szukała wskazówek, zadzwonił telefon.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tense-card">
                                <div className="tense-header">
                                    <h3>Past Perfect</h3>
                                    <span className="tense-usage">Wydarzenia wcześniejsze</span>
                                </div>
                                <div className="tense-content">
                                    <p><strong>Użycie:</strong> Do opisywania wydarzeń, które miały miejsce przed główną akcją</p>
                                    <div className="tense-examples">
                                        <div className="example-pair">
                                            <span className="example">"She realized she had seen that face before."</span>
                                            <span className="translation">Zdała sobie sprawę, że widziała już wcześniej tę twarz.</span>
                                        </div>
                                        <div className="example-pair">
                                            <span className="example">"He had already left when she arrived."</span>
                                            <span className="translation">On już wyszedł, gdy ona przyjechała.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja słownictwa */}
                    <section className="writing-article__section">
                        <h2>Niezbędne słownictwo 📝</h2>

                        <div className="vocabulary-sections">
                            <div className="vocab-category">
                                <h3>🔄 Łączniki czasu i sekwencji</h3>
                                <div className="vocab-grid">
                                    <div className="vocab-item">
                                        <span className="vocab-word">Meanwhile</span>
                                        <span className="vocab-translation">Tymczasem</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">Eventually</span>
                                        <span className="vocab-translation">Ostatecznie</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">Suddenly</span>
                                        <span className="vocab-translation">Nagle</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">Shortly after</span>
                                        <span className="vocab-translation">Wkrótce potem</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">In the meantime</span>
                                        <span className="vocab-translation">W międzyczasie</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">As soon as</span>
                                        <span className="vocab-translation">Jak tylko</span>
                                    </div>
                                </div>
                            </div>

                            <div className="vocab-category">
                                <h3>🎭 Czasowniki opisujące akcję</h3>
                                <div className="vocab-grid">
                                    <div className="vocab-item">
                                        <span className="vocab-word">whispered</span>
                                        <span className="vocab-translation">szepnął</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">exclaimed</span>
                                        <span className="vocab-translation">zawołał</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">wandered</span>
                                        <span className="vocab-translation">błądził</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">glanced</span>
                                        <span className="vocab-translation">rzucił okiem</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">realized</span>
                                        <span className="vocab-translation">zdał sobie sprawę</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">decided</span>
                                        <span className="vocab-translation">zdecydował</span>
                                    </div>
                                </div>
                            </div>

                            <div className="vocab-category">
                                <h3>😊 Wyrażenia emocji</h3>
                                <div className="vocab-grid">
                                    <div className="vocab-item">
                                        <span className="vocab-word">thrilled</span>
                                        <span className="vocab-translation">podekscytowany</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">terrified</span>
                                        <span className="vocab-translation">przerażony</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">astonished</span>
                                        <span className="vocab-translation">zdumiony</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">anxious</span>
                                        <span className="vocab-translation">niespokojny</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">relieved</span>
                                        <span className="vocab-translation">ulżony</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">disappointed</span>
                                        <span className="vocab-translation">rozczarowany</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Przykładowe opowiadanie */}
                    <section className="writing-article__section">
                        <h2>Przykładowe opowiadanie ✨</h2>

                        <div className="sample-story">
                            <div className="story-header">
                                <h3>"The Mysterious Key"</h3>
                                <div className="story-stats">
                                    <span className="stat">Słowa: 350</span>
                                    <span className="stat">Poziom: B1</span>
                                    <span className="stat">Czasy: Past Simple, Continuous, Perfect</span>
                                </div>
                            </div>

                            <div className="story-content">
                                <div className="story-paragraph">
                                    <p className="story-text">
                                        <strong>It was a rainy afternoon</strong> when Sarah decided to clean her grandmother's old attic. The dust particles danced in the dim light as she opened the first box. She had always been curious about her family's history, and today felt like the perfect day for discovery.
                                    </p>
                                    <p className="story-analysis">
                                        <strong>Analiza:</strong> Wstęp wprowadza bohaterkę, miejsce i nastrój. Użyto Past Simple (decided, opened) i Past Perfect (had been).
                                    </p>
                                </div>

                                <div className="story-paragraph">
                                    <p className="story-text">
                                        <strong>Suddenly,</strong> her fingers touched something cold and metallic at the bottom of the box. It was an ancient-looking key with intricate patterns that seemed to tell a story of their own. Her heart started beating faster as she wondered what secrets this key might unlock.
                                    </p>
                                    <p className="story-analysis">
                                        <strong>Analiza:</strong> Punkt zwrotny akcji. "Suddenly" wprowadza napięcie, Past Continuous (started beating) pokazuje trwającą akcję.
                                    </p>
                                </div>

                                <div className="story-paragraph">
                                    <p className="story-text">
                                        <strong>Meanwhile,</strong> downstairs, the phone rang but Sarah was too absorbed in her discovery to answer. She examined the key carefully, noticing the initials "E.W." engraved on its surface. She realized she had seen those initials before in her grandmother's old diary.
                                    </p>
                                    <p className="story-analysis">
                                        <strong>Analiza:</strong> "Meanwhile" tworzy równoległą akcję. Past Perfect (had seen) wskazuje na wcześniejsze doświadczenie.
                                    </p>
                                </div>

                                <div className="story-paragraph">
                                    <p className="story-text">
                                        <strong>After searching</strong> for what felt like hours, she finally found a small wooden chest hidden behind some old books. Her hands trembled as she inserted the key. To her astonishment, the chest opened smoothly, revealing a collection of old letters and photographs that would change her understanding of family history forever.
                                    </p>
                                    <p className="story-analysis">
                                        <strong>Analiza:</strong> Kulminacja i rozwiązanie. Sequence of events prowadzi do odkrycia, emocje podkreślone przez "to her astonishment".
                                    </p>
                                </div>

                                <div className="story-paragraph">
                                    <p className="story-text">
                                        <strong>In the end,</strong> Sarah understood that some family secrets are meant to be discovered, and that every object has a story waiting to be told. She closed the chest, promising herself to preserve these memories for future generations.
                                    </p>
                                    <p className="story-analysis">
                                        <strong>Analiza:</strong> Refleksyjne zakończenie z morałem. "In the end" sygnalizuje zamknięcie historii.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja technik pisania */}
                    <section className="writing-article__section">
                        <h2>Zaawansowane techniki pisania 🎨</h2>

                        <div className="writing-techniques">
                            <div className="technique-card">
                                <h4>Show, Don't Tell</h4>
                                <p>Zamiast mówić o emocjach, pokaż je przez działania i opisy</p>
                                <div className="technique-examples">
                                    <div className="example-comparison">
                                        <div className="bad-example">
                                            <strong>Tell:</strong> "She was scared."
                                        </div>
                                        <div className="good-example">
                                            <strong>Show:</strong> "Her hands trembled and she could feel her heart pounding in her chest."
                                        </div>
                                    </div>
                                    <div className="example-comparison">
                                        <div className="bad-example">
                                            <strong>Tell:</strong> "It was a beautiful day."
                                        </div>
                                        <div className="good-example">
                                            <strong>Show:</strong> "The sun warmed her skin while birds sang cheerful melodies in the trees."
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="technique-card">
                                <h4>Dialogi</h4>
                                <p>Używaj dialogów do rozwoju postaci i akcji</p>
                                <div className="dialogue-example">
                                    <p>"I don't understand," she whispered, her voice barely audible.</p>
                                    <p>"You will," the old man replied mysteriously. "When the time is right."</p>
                                    <p><em>Uwaga: W opowiadaniach dialogi piszemy w Present Tense, nawet gdy cała historia jest w czasie przeszłym.</em></p>
                                </div>
                            </div>

                            <div className="technique-card">
                                <h4>Opisy sensoryczne</h4>
                                <p>Angażuj wszystkie zmysły czytelnika</p>
                                <div className="sensory-example">
                                    <p><strong>Wzrok:</strong> "The crimson sunset painted the sky in shades of orange and purple."</p>
                                    <p><strong>Dźwięk:</strong> "The leaves crunched under her feet with each step."</p>
                                    <p><strong>Zapach:</strong> "The air smelled of fresh rain and wet earth."</p>
                                    <p><strong>Dotyk:</strong> "The rough bark scratched her palms as she climbed."</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja wskazówek */}
                    <section className="writing-article__section">
                        <h2>Praktyczne wskazówki 💡</h2>

                        <div className="writing-tips">
                            <div className="tip-section">
                                <h4>✅ Planuj przed pisaniem</h4>
                                <ul>
                                    <li>Stwórz outline z głównymi punktami fabuły</li>
                                    <li>Zdefiniuj głównych bohaterów i ich cele</li>
                                    <li>Określ główny konflikt i rozwiązanie</li>
                                    <li>Zaplanuj strukturę: wstęp, punkt zwrotny, kulminacja, zakończenie</li>
                                </ul>
                            </div>

                            <div className="tip-section">
                                <h4>✅ Używaj pierwszej lub trzeciej osoby konsekwentnie</h4>
                                <div className="perspective-examples">
                                    <div className="perspective">
                                        <strong>First person (I/we):</strong> "I couldn't believe what I was seeing."
                                    </div>
                                    <div className="perspective">
                                        <strong>Third person (he/she/they):</strong> "She couldn't believe what she was seeing."
                                    </div>
                                </div>
                                <p><em>Ważne: Nie mieszaj perspektyw w jednym opowiadaniu!</em></p>
                            </div>

                            <div className="tip-section">
                                <h4>✅ Utrzymuj spójność czasową</h4>
                                <ul>
                                    <li>Past Simple dla głównych wydarzeń</li>
                                    <li>Past Continuous dla tła i równoczesnych akcji</li>
                                    <li>Past Perfect dla wydarzeń wcześniejszych</li>
                                    <li>Present Tense tylko w dialogach</li>
                                </ul>
                            </div>

                            <div className="tip-section">
                                <h4>✅ Edytuj i poprawiaj</h4>
                                <ul>
                                    <li>Sprawdź spójność czasów</li>
                                    <li>Eliminuj powtórzenia słów</li>
                                    <li>Upewnij się, że każde zdanie wnosi coś do historii</li>
                                    <li>Popraw błędy gramatyczne i ortograficzne</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja ćwiczeń */}
                    <section className="writing-article__section">
                        <h2>Ćwiczenia do samodzielnej pracy 🏋️</h2>

                        <div className="writing-exercises">
                            <div className="exercise-card">
                                <h4>Ćwiczenie 1: Rozwiń zdanie</h4>
                                <p><strong>Zadanie:</strong> Rozwiń poniższe zdanie, dodając opis sensoryczny i emocje:</p>
                                <div className="exercise-prompt">
                                    "She walked into the room."
                                </div>
                                <div className="exercise-hint">
                                    <strong>Podpowiedź:</strong> Opisz co zobaczyła, usłyszała, poczuła. Jakie emocje towarzyszyły jej wejściu?
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>Ćwiczenie 2: Napisz zakończenie</h4>
                                <p><strong>Zadanie:</strong> Dokończ historię zaczynającą się od:</p>
                                <div className="exercise-prompt">
                                    "The map was old and torn, but it was the only clue he had..."
                                </div>
                                <div className="exercise-requirements">
                                    <strong>Wymagania:</strong> Użyj przynajmniej 3 różnych czasów przeszłych i 5 słów z podanego słownictwa.
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>Ćwiczenie 3: Przekształć "tell" w "show"</h4>
                                <p><strong>Zadanie:</strong> Przekształć poniższe zdania z "telling" na "showing":</p>
                                <div className="transformation-exercise">
                                    <div className="transformation-item">
                                        <span className="original">"He was nervous."</span>
                                        <span className="hint">→ Opisz fizyczne objawy nerwowości</span>
                                    </div>
                                    <div className="transformation-item">
                                        <span className="original">"The house was haunted."</span>
                                        <span className="hint">→ Opisz dźwięki, uczucia, atmosferę</span>
                                    </div>
                                    <div className="transformation-item">
                                        <span className="original">"She was happy to see him."</span>
                                        <span className="hint">→ Opisz jej reakcje fizyczne i zachowanie</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="writing-article__section">
                        <div className="writing-action-box">
                            <h3>🎯 Czas na praktykę!</h3>
                            <p>Wybierz jeden z tematów poniżej i napisz swoje pierwsze opowiadanie po angielsku. Pamiętaj o strukturze, czasach i opisach sensorycznych!</p>
                            <div className="writing-prompts">
                                <div className="prompt-card">
                                    <h4>Topic 1: The Unexpected Discovery</h4>
                                    <p>Write about someone who finds something extraordinary in an ordinary place.</p>
                                </div>
                                <div className="prompt-card">
                                    <h4>Topic 2: A Life-Changing Decision</h4>
                                    <p>Describe a moment when a character had to make a difficult choice.</p>
                                </div>
                                <div className="prompt-card">
                                    <h4>Topic 3: The Mysterious Stranger</h4>
                                    <p>Create a story about an encounter with someone who isn't what they seem.</p>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <Link to="/cwiczenia/pisanie" className="btn btn--primary">Więcej ćwiczeń</Link>
                                <Link to="/spolecznosc" className="btn btn--secondary">Podziel się pracą</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="writing-article__footer">
                        <div className="writing-article__tags">
                            <span className="writing-tag">#opowiadanie</span>
                            <span className="writing-tag">#shortstory</span>
                            <span className="writing-tag">#creativewriting</span>
                            <span className="writing-tag">#pasttenses</span>
                            <span className="writing-tag">#narrative</span>
                        </div>
                        <div className="writing-article__next">
                            <p><strong>Następny temat:</strong> <Link to="/pisanie/list-formalny">Jak pisać list formalny po angielsku?</Link></p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default StoryWriting;