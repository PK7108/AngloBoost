import React from 'react';
import { Link } from 'react-router-dom';
import './WritingStyles.css';

const Essay = () => {
    return (
        <article className="writing-article">
            <div className="writing-article__header">
                <div className="container">
                    <nav className="writing-article__breadcrumb">
                        <Link to="/pisanie" className="writing-article__breadcrumb-link">Pisanie</Link>
                        <span className="writing-article__breadcrumb-separator">/</span>
                        <span className="writing-article__breadcrumb-current">Rozprawka</span>
                    </nav>
                    <h1 className="writing-article__title">Jak pisać rozprawki po angielsku? 🎯</h1>
                    <p className="writing-article__intro">Kompletny przewodnik po for and against oraz opinion essay - struktura, zwroty i techniki pisania</p>
                    <div className="writing-article__meta">
                        <span className="writing-article__reading-time">⏱️ Czas czytania: 8 minut</span>
                        <span className="writing-article__level">🎯 Poziom: B1-C1</span>
                        <span className="writing-article__words">📝 Słowa kluczowe: essay, for and against, opinion essay, argumentative writing</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="writing-article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="writing-article__section">
                        <div className="writing-tip-box">
                            <h3>📚 Czym jest rozprawka po angielsku?</h3>
                            <p><strong>Essay</strong> to formalna forma pisemna prezentująca argumenty na dany temat. W języku angielskim wyróżniamy głównie dwa typy: <strong>for and against essay</strong> (rozprawka za i przeciw) oraz <strong>opinion essay</strong> (rozprawka wyrażająca opinię).</p>
                        </div>

                        <h2>Rodzaje rozprawek 📊</h2>
                        <div className="writing-points-grid">
                            <div className="writing-point-card">
                                <h4>⚖️ For and Against Essay</h4>
                                <p>Obiektywna prezentacja argumentów za i przeciw bez wyrażania osobistej opinii w głównej części</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>💭 Opinion Essay</h4>
                                <p>Prezentacja i obrona własnego stanowiska z użyciem argumentów i przykładów</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>🎯 Główne różnice</h4>
                                <p>For and against - obiektywny bilans; Opinion essay - subiektywna argumentacja</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja struktury */}
                    <section className="writing-article__section">
                        <h2>Struktura rozprawki 🏗️</h2>

                        <div className="letter-structure">
                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">1</span>
                                    <h3>Wstęp (Introduction)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Zainteresowanie czytelnika i przedstawienie tematu</h4>
                                    <ul>
                                        <li>✅ Hook - zaciekawienie czytelnika</li>
                                        <li>✅ Background information - kontekst tematu</li>
                                        <li>✅ Thesis statement - główna teza/stanowisko</li>
                                        <li>✅ Outline - zapowiedź struktury (opcjonalnie)</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład (For and Against):</strong><br/>
                                        "In recent years, the debate about social media's impact has intensified. While some argue it connects people, others claim it causes isolation. This essay will examine both perspectives before reaching a conclusion."<br/><br/>
                                        <strong>Przykład (Opinion Essay):</strong><br/>
                                        "Social media has revolutionized communication, but at what cost? In my view, despite its benefits, social media does more harm than good to genuine human connections."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">2</span>
                                    <h3>Główna część (Body Paragraphs)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Prezentacja argumentów</h4>
                                    <ul>
                                        <li>✅ For and against: 2-3 akapity - argumenty za, potem przeciw</li>
                                        <li>✅ Opinion essay: 2-3 akapity - argumenty wspierające twoją opinię</li>
                                        <li>✅ Każdy akapit: topic sentence → argument → przykład → explanation</li>
                                        <li>✅ Używaj linking words do spójności</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład struktury akapitu:</strong><br/>
                                        "Firstly, social media enables instant global communication. For instance, platforms like Facebook allow families separated by distance to maintain close relationships. This demonstrates how technology can bridge geographical gaps effectively."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">3</span>
                                    <h3>Zakończenie (Conclusion)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Podsumowanie i sformułowanie wniosków</h4>
                                    <ul>
                                        <li>✅ Restate thesis - powtórzenie tezy w nowych słowach</li>
                                        <li>✅ Summarize main points - podsumowanie kluczowych argumentów</li>
                                        <li>✅ Final thought - końcowa refleksja lub rekomendacja</li>
                                        <li>✅ Never introduce new arguments - nigdy nie wprowadzaj nowych argumentów</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład (For and Against):</strong><br/>
                                        "In conclusion, while social media offers unprecedented connectivity, it also presents significant challenges to mental health. Ultimately, balanced usage appears to be the most reasonable approach."<br/><br/>
                                        <strong>Przykład (Opinion Essay):</strong><br/>
                                        "To sum up, the evidence clearly shows that social media's negative impacts outweigh its benefits. Therefore, individuals should prioritize face-to-face interactions over digital connections."
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja różnic między typami rozprawek */}
                    <section className="writing-article__section">
                        <h2>For and Against vs Opinion Essay ⚖️</h2>

                        <div className="comparison-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Element</th>
                                    <th>For and Against Essay</th>
                                    <th>Opinion Essay</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><strong>Cel</strong></td>
                                    <td>Obiektywna prezentacja obu stron</td>
                                    <td>Przekonanie do własnego stanowiska</td>
                                </tr>
                                <tr>
                                    <td><strong>Struktura głównej części</strong></td>
                                    <td>Akapit z argumentami ZA + akapit z argumentami PRZECIW</td>
                                    <td>2-3 akapity z argumentami wspierającymi opinię</td>
                                </tr>
                                <tr>
                                    <td><strong>Ton</strong></td>
                                    <td>Neutralny, bezosobowy</td>
                                    <td>Subiektywny, osobisty</td>
                                </tr>
                                <tr>
                                    <td><strong>Zakończenie</strong></td>
                                    <td>Zbalansowane podsumowanie lub lekka preferencja</td>
                                    <td>Stanowcze potwierdzenie własnej opinii</td>
                                </tr>
                                <tr>
                                    <td><strong>Język</strong></td>
                                    <td>On the one hand... on the other hand...</td>
                                    <td>In my view... I firmly believe...</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Sekcja zwrotów */}
                    <section className="writing-article__section">
                        <h2>Przydatne zwroty do rozprawek 💬</h2>

                        <div className="phrases-sections">
                            <div className="phrases-category">
                                <h3>📝 Wstęp</h3>
                                <div className="phrases-grid">
                                    <div className="phrase-item">
                                        <span className="phrase-english">Nowadays, it is widely debated whether...</span>
                                        <span className="phrase-polish">Obecnie powszechnie dyskutuje się czy...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">There has been much discussion about...</span>
                                        <span className="phrase-polish">Było wiele dyskusji na temat...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">This essay will examine both sides of the argument</span>
                                        <span className="phrase-polish">Niniejsza rozprawka zbada obie strony argumentu</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">In my view, the most important aspect is...</span>
                                        <span className="phrase-polish">Moim zdaniem, najważniejszym aspektem jest...</span>
                                    </div>
                                </div>
                            </div>

                            <div className="phrases-category">
                                <h3>🔄 Prezentacja argumentów</h3>
                                <div className="phrases-grid">
                                    <div className="phrase-item">
                                        <span className="phrase-english">The main argument in favour is...</span>
                                        <span className="phrase-polish">Głównym argumentem za jest...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">It is often claimed that...</span>
                                        <span className="phrase-polish">Często twierdzi się, że...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Another point to consider is...</span>
                                        <span className="phrase-polish">Kolejną kwestią do rozważenia jest...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Furthermore, it should be noted that...</span>
                                        <span className="phrase-polish">Ponadto należy zauważyć, że...</span>
                                    </div>
                                </div>
                            </div>

                            <div className="phrases-category">
                                <h3>⚖️ Przeciwstawianie argumentów</h3>
                                <div className="phrases-grid">
                                    <div className="phrase-item">
                                        <span className="phrase-english">On the one hand... on the other hand...</span>
                                        <span className="phrase-polish">Z jednej strony... z drugiej strony...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">While it is true that..., it is also important to consider...</span>
                                        <span className="phrase-polish">Chociaż prawdą jest, że..., ważne jest też rozważyć...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Despite these arguments, there is evidence that...</span>
                                        <span className="phrase-polish">Pomimo tych argumentów, istnieją dowody, że...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">However, critics argue that...</span>
                                        <span className="phrase-polish">Jednakże krytycy twierdzą, że...</span>
                                    </div>
                                </div>
                            </div>

                            <div className="phrases-category">
                                <h3>🏁 Zakończenie</h3>
                                <div className="phrases-grid">
                                    <div className="phrase-item">
                                        <span className="phrase-english">In conclusion, the evidence suggests that...</span>
                                        <span className="phrase-polish">Podsumowując, dowody sugerują, że...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">To sum up, it is clear that...</span>
                                        <span className="phrase-polish">Reasumując, jest jasne, że...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">All things considered, I believe that...</span>
                                        <span className="phrase-polish">Biorąc wszystko pod uwagę, wierzę, że...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Ultimately, the most reasonable approach seems to be...</span>
                                        <span className="phrase-polish">Ostatecznie, najbardziej rozsądnym podejściem wydaje się...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Przykładowa rozprawka */}
                    <section className="writing-article__section">
                        <h2>Przykładowa rozprawka for and against ✨</h2>

                        <div className="sample-letter">
                            <div className="letter-header">
                                <h3>Topic: "Should school uniforms be mandatory?"</h3>
                                <div className="letter-stats">
                                    <span className="stat">Słowa: 320</span>
                                    <span className="stat">Poziom: B2</span>
                                    <span className="stat">Typ: For and Against</span>
                                </div>
                            </div>

                            <div className="letter-content">
                                <div className="letter-body">
                                    <div className="paragraph">
                                        <p>
                                            <strong>The debate about school uniforms has been ongoing for decades, with strong arguments on both sides.</strong> While some believe uniforms promote equality and discipline, others argue they limit personal expression. This essay will examine both perspectives before reaching a balanced conclusion.
                                        </p>
                                        <p className="analysis">
                                            <strong>Analiza:</strong> Wstęp z hook, przedstawienie obu stron i zapowiedź struktury.
                                        </p>
                                    </div>

                                    <div className="paragraph">
                                        <p>
                                            <strong>On the one hand, supporters of school uniforms highlight several benefits.</strong> Firstly, uniforms create a sense of equality among students, as everyone dresses the same regardless of economic background. This can reduce bullying based on clothing brands or styles. Secondly, uniforms eliminate morning decisions about what to wear, saving time and reducing stress. Moreover, they promote school spirit and identity, fostering a sense of belonging.
                                        </p>
                                        <p className="analysis">
                                            <strong>Analiza:</strong> Akapit z argumentami ZA - topic sentence, trzy argumenty z rozwinięciem.
                                        </p>
                                    </div>

                                    <div className="paragraph">
                                        <p>
                                            <strong>On the other hand, opponents raise valid concerns about personal freedom.</strong> Uniforms restrict students' ability to express their individuality through clothing, which is particularly important during formative years. Additionally, uniforms can be expensive for families, especially when they need to be replaced frequently. Furthermore, critics argue that preparing students for the real world should include allowing them to make personal choices about their appearance.
                                        </p>
                                        <p className="analysis">
                                            <strong>Analiza:</strong> Akapit z argumentami PRZECIW - topic sentence, trzy kontrargumenty.
                                        </p>
                                    </div>

                                    <div className="paragraph">
                                        <p>
                                            <strong>In conclusion, both perspectives offer compelling arguments.</strong> While uniforms undoubtedly promote equality and simplify daily routines, they do limit personal expression. Perhaps the ideal solution would be a compromise, such as having specific uniform days or allowing more flexibility within the dress code. Ultimately, the decision should consider the specific needs and values of each school community.
                                        </p>
                                        <p className="analysis">
                                            <strong>Analiza:</strong> Zakończenie z podsumowaniem obu stron, propozycją kompromisu i końcową refleksją.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja planowania rozprawki */}
                    <section className="writing-article__section">
                        <h2>Jak planować rozprawkę? 📝</h2>

                        <div className="writing-techniques">
                            <div className="technique-card">
                                <h4>1. Analiza tematu</h4>
                                <p>Przeczytaj temat 2-3 razy i zaznacz kluczowe słowa. Określ czego dokładnie dotyczy pytanie.</p>
                                <div className="technique-examples">
                                    <div className="example">
                                        <strong>Temat:</strong> "Technology has made our lives better. Do you agree?"<br/>
                                        <strong>Kluczowe słowa:</strong> technology, lives better, agree
                                    </div>
                                </div>
                            </div>

                            <div className="technique-card">
                                <h4>2. Burza mózgów</h4>
                                <p>Zapisz wszystkie pomysły - zarówno za jak i przeciw (for and against) lub argumenty wspierające twoją opinię (opinion essay).</p>
                                <div className="technique-examples">
                                    <div className="example">
                                        <strong>For:</strong> better communication, access to information, medical advances<br/>
                                        <strong>Against:</strong> privacy concerns, addiction, job displacement
                                    </div>
                                </div>
                            </div>

                            <div className="technique-card">
                                <h4>3. Selekcja i porządkowanie</h4>
                                <p>Wybierz 2-3 najsilniejsze argumenty z każdej strony i uporządkuj je od najważniejszego do najmniej ważnego.</p>
                                <div className="technique-examples">
                                    <div className="example">
                                        1. Medical technology saves lives<br/>
                                        2. Global communication<br/>
                                        3. Access to education
                                    </div>
                                </div>
                            </div>

                            <div className="technique-card">
                                <h4>4. Plan akapitów</h4>
                                <p>Stwórz szczegółowy plan każdego akapitu z topic sentence i przykładami.</p>
                                <div className="technique-examples">
                                    <div className="example">
                                        <strong>Body 1:</strong> Medical advances → life expectancy increased → examples: MRI, vaccines
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja typowych błędów */}
                    <section className="writing-article__section">
                        <h2>Typowe błędy i jak ich unikać 🚫</h2>

                        <div className="mistakes-guide">
                            <div className="mistake-card">
                                <h4>❌ Zbyt nieformalny język</h4>
                                <div className="mistake-examples">
                                    <div className="wrong-example">
                                        "I think tech is awesome and has changed everything for the better."
                                    </div>
                                    <div className="correct-example">
                                        "Technology has undoubtedly transformed modern society in numerous positive ways."
                                    </div>
                                </div>
                                <p><strong>Rozwiązanie:</strong> Używaj formalnego języka, unikaj skrótów i potocyzmów.</p>
                            </div>

                            <div className="mistake-card">
                                <h4>❌ Brak spójności między akapitami</h4>
                                <div className="mistake-examples">
                                    <div className="wrong-example">
                                        Akapit 1: O technologii. Akapit 2: O edukacji. (bez połączenia)
                                    </div>
                                    <div className="correct-example">
                                        Use: "Furthermore," "However," "In addition to," "On the contrary"
                                    </div>
                                </div>
                                <p><strong>Rozwiązanie:</strong> Używaj linking words i zapewnij logiczne przejścia.</p>
                            </div>

                            <div className="mistake-card">
                                <h4>❌ Nowe argumenty w zakończeniu</h4>
                                <div className="mistake-examples">
                                    <div className="wrong-example">
                                        "In conclusion... and also we should consider environmental impact." (nowy argument)
                                    </div>
                                    <div className="correct-example">
                                        "In conclusion, the arguments presented demonstrate that..."
                                    </div>
                                </div>
                                <p><strong>Rozwiązanie:</strong> Zakończenie tylko podsumowuje to, co już zostało przedstawione.</p>
                            </div>

                            <div className="mistake-card">
                                <h4>❌ Nieodpowiednia struktura dla typu rozprawki</h4>
                                <div className="mistake-examples">
                                    <div className="wrong-example">
                                        For and against essay z wyrażaniem osobistej opinii w głównej części
                                    </div>
                                    <div className="correct-example">
                                        For and against: obiektywny bilans; Opinion essay: wyraźne stanowisko
                                    </div>
                                </div>
                                <p><strong>Rozwiązanie:</strong> Zawsze sprawdzaj jaki typ rozprawki jest wymagany.</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja ćwiczeń */}
                    <section className="writing-article__section">
                        <h2>Ćwiczenia praktyczne 🏋️</h2>

                        <div className="writing-exercises">
                            <div className="exercise-card">
                                <h4>Ćwiczenie 1: Identyfikacja typu rozprawki</h4>
                                <p><strong>Zadanie:</strong> Określ czy poniższe tematy wymagają for and against czy opinion essay:</p>
                                <div className="transformation-exercise">
                                    <div className="transformation-item">
                                        <span className="original">"Discuss the advantages and disadvantages of remote work."</span>
                                        <span className="hint">→ For and Against Essay</span>
                                    </div>
                                    <div className="transformation-item">
                                        <span className="original">"To what extent do you agree that money brings happiness?"</span>
                                        <span className="hint">→ Opinion Essay</span>
                                    </div>
                                    <div className="transformation-item">
                                        <span className="original">"Analyze the arguments for and against banning plastic."</span>
                                        <span className="hint">→ For and Against Essay</span>
                                    </div>
                                    <div className="transformation-item">
                                        <span className="original">"What is your view on compulsory voting?"</span>
                                        <span className="hint">→ Opinion Essay</span>
                                    </div>
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>Ćwiczenie 2: Tworzenie argumentów</h4>
                                <p><strong>Zadanie:</strong> Dla tematu "Should zoos be banned?" stwórz po 3 argumenty za i przeciw:</p>
                                <div className="exercise-requirements">
                                    <strong>Arguments FOR banning:</strong> Animal rights, natural behavior, conservation alternatives<br/>
                                    <strong>Arguments AGAINST banning:</strong> Education, species protection, research opportunities
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>Ćwiczenie 3: Poprawa zakończenia</h4>
                                <p><strong>Zadanie:</strong> Popraw poniższe słabe zakończenie:</p>
                                <div className="original-data">
                                    "So that's why I think social media is bad. Also, it uses a lot of electricity and there are new privacy features coming soon."
                                </div>
                                <div className="exercise-hint">
                                    <strong>Wskazówka:</strong> Unikaj nowych argumentów, używaj formalnego języka, podsumuj główne punkty.
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="writing-article__section">
                        <div className="writing-action-box">
                            <h3>🎯 Czas na praktykę!</h3>
                            <p>Wybierz jeden z poniższych tematów i napisz rozprawkę. Pamiętaj o odpowiedniej strukturze i formalnym języku!</p>
                            <div className="writing-scenarios">
                                <div className="scenario-card">
                                    <h4>For and Against Topic</h4>
                                    <p>"Discuss the advantages and disadvantages of artificial intelligence in education." (250-300 words)</p>
                                </div>
                                <div className="scenario-card">
                                    <h4>Opinion Essay Topic</h4>
                                    <p>"To what extent do you agree that climate change is the most serious threat facing humanity today?" (250-300 words)</p>
                                </div>
                                <div className="scenario-card">
                                    <h4>Mixed Topic</h4>
                                    <p>"Some people believe that space exploration is a waste of resources. What is your view?" (250-300 words)</p>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <Link to="/cwiczenia/rozprawki" className="btn btn--primary">Więcej ćwiczeń</Link>
                                <Link to="/spolecznosc" className="btn btn--secondary">Podziel się pracą</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="writing-article__footer">
                        <div className="writing-article__tags">
                            <span className="writing-tag">#rozprawka</span>
                            <span className="writing-tag">#essay</span>
                            <span className="writing-tag">#forandagainst</span>
                            <span className="writing-tag">#opinionessay</span>
                            <span className="writing-tag">#argumentativewriting</span>
                        </div>
                        <div className="writing-article__next">
                            <p><strong>Następny temat:</strong> <Link to="/writing/opowiadanie">Jak pisać opowiadania po angielsku?</Link></p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default Essay;