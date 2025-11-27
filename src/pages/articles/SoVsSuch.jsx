import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import useDocumentMeta from '../../useDocumentMeta';
import './ArticleStyles.css';

function getMetaTitle(lang) {
    const baseTitle = lang === 'pl'
        ? 'So vs Such - Różnice, zasady użycia i ćwiczenia praktyczne'
        : 'So vs Such - Differences, Usage Rules and Practical Exercises'

    return `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang) {
    const baseDescription = {
        pl: 'Kompletny przewodnik po różnicach między So i Such. Poznaj proste zasady, praktyczne przykłady i ćwiczenia. Naucz się poprawnie używać tych konstrukcji w mowie i piśmie.',
        en: 'Complete guide to differences between So and Such. Learn simple rules, practical examples and exercises. Master correct usage of these constructions in speech and writing.'
    }

    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang) {
    return lang === 'pl'
        ? 'https://angloboost.pl/pl/artykuly/so-vs-such'
        : 'https://angloboost.pl/en/articles/so-vs-such'
}

const SoVsSuch = () => {
    const { lang } = useLanguage()

    useDocumentMeta({
        title: getMetaTitle(lang),
        description: getMetaDescription(lang),
        canonical: getCanonicalUrl(lang),
        og: {
            title: getMetaTitle(lang),
            description: getMetaDescription(lang),
            image: 'https://angloboost.pl/grammar-social.png',
            url: window.location.href
        }
    })

    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/artykuly" className="article__breadcrumb-link">Artykuły</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">So vs Such</span>
                    </nav>
                    <h1 className="article__title">So vs Such: Ostateczny przewodnik 🎯</h1>
                    <p className="article__intro">Proste zasady, które raz na zawsze rozwiążą problem z "so" i "such"</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 6 minut</span>
                        <span className="article__level">🎯 Dla: Poziom A2+</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>💡 Kluczowa różnica</h3>
                            <p><strong>"So" używamy z przymiotnikami i przysłówkami, a "such" z rzeczownikami.</strong> To najprostsza zasada, która rozwiązuje 90% problemów!</p>
                        </div>

                        <h2>Dlaczego mylimy "so" i "such"?</h2>
                        <div className="confusion-reasons">
                            <div className="confusion-card">
                                <h4>🔤 Podobne znaczenie</h4>
                                <p>Oba wyrażają intensywność i często tłumaczymy je tak samo: "tak"</p>
                            </div>
                            <div className="confusion-card">
                                <h4>📝 Podobne konstrukcje</h4>
                                <p>Oba mogą występować w zdaniach z "that"</p>
                            </div>
                            <div className="confusion-card">
                                <h4>🎯 Brak jasnej zasady</h4>
                                <p>W szkole często uczą się ich na pamięć bez zrozumienia</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja podstawowych zasad */}
                    <section className="article__section">
                        <h2>Podstawowe zasady w pigułce 💊</h2>

                        <div className="basic-rules">
                            <div className="rule-card rule-card--so">
                                <div className="rule-header">
                                    <h3>SO</h3>
                                    <span className="rule-subtitle">+ przymiotnik/przysłówek</span>
                                </div>
                                <div className="rule-content">
                                    <h4>Struktura:</h4>
                                    <div className="structure">
                                        <span className="structure-formula">SO + adjective/adverb</span>
                                    </div>
                                    <div className="examples">
                                        <h5>Przykłady:</h5>
                                        <div className="example-list">
                                            <div className="example-item">
                                                <span>She is <strong>so beautiful</strong>.</span>
                                                <span>Ona jest <strong>tak piękna</strong>.</span>
                                            </div>
                                            <div className="example-item">
                                                <span>He runs <strong>so quickly</strong>.</span>
                                                <span>On biegnie <strong>tak szybko</strong>.</span>
                                            </div>
                                            <div className="example-item">
                                                <span>This coffee is <strong>so hot</strong>.</span>
                                                <span>Ta kawa jest <strong>tak gorąca</strong>.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rule-card rule-card--such">
                                <div className="rule-header">
                                    <h3>SUCH</h3>
                                    <span className="rule-subtitle">+ rzeczownik</span>
                                </div>
                                <div className="rule-content">
                                    <h4>Struktura:</h4>
                                    <div className="structure">
                                        <span className="structure-formula">SUCH + (a/an) + adjective + noun</span>
                                    </div>
                                    <div className="examples">
                                        <h5>Przykłady:</h5>
                                        <div className="example-list">
                                            <div className="example-item">
                                                <span>She is <strong>such a beautiful woman</strong>.</span>
                                                <span>Ona jest <strong>tak piękną kobietą</strong>.</span>
                                            </div>
                                            <div className="example-item">
                                                <span>It was <strong>such a quick run</strong>.</span>
                                                <span>To był <strong>tak szybki bieg</strong>.</span>
                                            </div>
                                            <div className="example-item">
                                                <span>This is <strong>such hot coffee</strong>.</span>
                                                <span>To jest <strong>taka gorąca kawa</strong>.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja porównania bezpośredniego */}
                    <section className="article__section">
                        <h2>Porównanie bezpośrednie ⚖️</h2>

                        <div className="direct-comparison">
                            <div className="comparison-table">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Kontekst</th>
                                        <th>SO</th>
                                        <th>SUCH</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Przymiotnik samodzielnie</td>
                                        <td>✅ <strong>so nice</strong></td>
                                        <td>❌ such nice</td>
                                    </tr>
                                    <tr>
                                        <td>Przymiotnik + rzeczownik</td>
                                        <td>❌ so nice person</td>
                                        <td>✅ <strong>such a nice person</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Przysłówek</td>
                                        <td>✅ <strong>so quickly</strong></td>
                                        <td>❌ such quickly</td>
                                    </tr>
                                    <tr>
                                        <td>Rzeczownik z "a/an"</td>
                                        <td>❌ so a beautiful day</td>
                                        <td>✅ <strong>such a beautiful day</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Rzeczownik bez "a/an"</td>
                                        <td>❌ so beautiful weather</td>
                                        <td>✅ <strong>such beautiful weather</strong></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="quick-test">
                                <h4>🎯 Szybki test</h4>
                                <p>Uzupełnij zdania "so" lub "such":</p>
                                <div className="test-items">
                                    <div className="test-item">
                                        <span>This is <strong className="answer">such</strong> a big house.</span>
                                        <span className="hint">(big house = przymiotnik + rzeczownik)</span>
                                    </div>
                                    <div className="test-item">
                                        <span>Your dog is <strong className="answer">so</strong> friendly.</span>
                                        <span className="hint">(friendly = sam przymiotnik)</span>
                                    </div>
                                    <div className="test-item">
                                        <span>They were <strong className="answer">such</strong> kind people.</span>
                                        <span className="hint">(kind people = przymiotnik + rzeczownik)</span>
                                    </div>
                                    <div className="test-item">
                                        <span>She sings <strong className="answer">so</strong> beautifully.</span>
                                        <span className="hint">(beautifully = przysłówek)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja konstrukcji z "that" */}
                    <section className="article__section">
                        <h2>Konstrukcje z "that" 🔗</h2>

                        <div className="that-constructions">
                            <div className="construction-examples">
                                <div className="construction-card">
                                    <h4>SO + adjective + THAT</h4>
                                    <p>Wyraża tak duży stopień czegoś, że prowadzi do konkretnego skutku</p>
                                    <div className="example-block">
                                        <div className="english-example">
                                            "The movie was <strong>so boring that</strong> I fell asleep."
                                        </div>
                                        <div className="polish-translation">
                                            "Film był <strong>tak nudny, że</strong> zasnąłem."
                                        </div>
                                    </div>
                                    <div className="example-block">
                                        <div className="english-example">
                                            "He was <strong>so tired that</strong> he couldn't think clearly."
                                        </div>
                                        <div className="polish-translation">
                                            "Był <strong>tak zmęczony, że</strong> nie mógł jasno myśleć."
                                        </div>
                                    </div>
                                </div>

                                <div className="construction-card">
                                    <h4>SUCH + noun phrase + THAT</h4>
                                    <p>Wyraża taki rodzaj czegoś, że prowadzi do konkretnego skutku</p>
                                    <div className="example-block">
                                        <div className="english-example">
                                            "It was <strong>such a boring movie that</strong> I fell asleep."
                                        </div>
                                        <div className="polish-translation">
                                            "To był <strong>taki nudny film, że</strong> zasnąłem."
                                        </div>
                                    </div>
                                    <div className="example-block">
                                        <div className="english-example">
                                            "He had <strong>such a busy day that</strong> he was exhausted."
                                        </div>
                                        <div className="polish-translation">
                                            "Miał <strong>taki pracowity dzień, że</strong> był wyczerpany."
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="construction-tip">
                                <h4>💡 Ważna uwaga</h4>
                                <p><strong>"That" w tych konstrukcjach jest często pomijane w mówionym angielskim!</strong></p>
                                <div className="spoken-examples">
                                    <div className="spoken-item">
                                        <span>Formalnie:</span> "It was so cold <strong>that</strong> I wore a coat."
                                    </div>
                                    <div className="spoken-item">
                                        <span>Nieformalnie:</span> "It was so cold I wore a coat."
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja wyjątków i trudnych przypadków */}
                    <section className="article__section">
                        <h2>Wyjątki i trudne przypadki 🚨</h2>

                        <div className="exceptions">
                            <div className="exception-card">
                                <h4>🔤 "So" z rzeczownikami?</h4>
                                <p>Tak, ale tylko w określonych wyrażeniach:</p>
                                <div className="exception-examples">
                                    <div className="exception-item">
                                        <span><strong>so much</strong> + uncountable noun</span>
                                        <span>"so much time", "so much water"</span>
                                    </div>
                                    <div className="exception-item">
                                        <span><strong>so many</strong> + countable noun</span>
                                        <span>"so many books", "so many people"</span>
                                    </div>
                                    <div className="exception-item">
                                        <span><strong>so few</strong> + countable noun</span>
                                        <span>"so few opportunities"</span>
                                    </div>
                                    <div className="exception-item">
                                        <span><strong>so little</strong> + uncountable noun</span>
                                        <span>"so little money"</span>
                                    </div>
                                </div>
                            </div>

                            <div className="exception-card">
                                <h4>🎯 "Such" bez przymiotnika</h4>
                                <p>"Such" może występować samodzielnie z rzeczownikiem, ale wtedy znaczy "taki" w sensie "tego rodzaju":</p>
                                <div className="exception-examples">
                                    <div className="exception-item">
                                        <span>"I've never seen <strong>such weather</strong> before."</span>
                                        <span>"Nigdy wcześniej nie widziałem <strong>takiej pogody</strong>."</span>
                                    </div>
                                    <div className="exception-item">
                                        <span>"She's <strong>such a liar</strong>!"</span>
                                        <span>"Ona jest <strong>taką kłamczuchą</strong>!"</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja ćwiczeń praktycznych */}
                    <section className="article__section">
                        <h2>Ćwiczenia praktyczne 🏋️</h2>

                        <div className="practice-exercises">
                            <div className="exercise-card">
                                <h4>🎯 Ćwiczenie 1: Uzupełnij luki</h4>
                                <div className="gap-exercise">
                                    <div className="gap-item">
                    <span>This is <select className="answer-select">
                      <option value="">wybierz</option>
                      <option value="so">so</option>
                      <option value="such">such</option>
                    </select> delicious cake!</span>
                                        <span className="correct-answer">such (cake = rzeczownik)</span>
                                    </div>
                                    <div className="gap-item">
                    <span>The cake tastes <select className="answer-select">
                      <option value="">wybierz</option>
                      <option value="so">so</option>
                      <option value="such">such</option>
                    </select> delicious!</span>
                                        <span className="correct-answer">so (delicious = przymiotnik)</span>
                                    </div>
                                    <div className="gap-item">
                    <span>We have <select className="answer-select">
                      <option value="">wybierz</option>
                      <option value="so">so</option>
                      <option value="such">such</option>
                    </select> many things to do.</span>
                                        <span className="correct-answer">so (so many + rzeczownik)</span>
                                    </div>
                                    <div className="gap-item">
                    <span>It was <select className="answer-select">
                      <option value="">wybierz</option>
                      <option value="so">so</option>
                      <option value="such">such</option>
                    </select> a wonderful party.</span>
                                        <span className="correct-answer">such (wonderful party = przymiotnik + rzeczownik)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>🔄 Ćwiczenie 2: Przekształć zdania</h4>
                                <div className="transformation-exercise">
                                    <div className="transformation-item">
                                        <span>Original: The music is very loud.</span>
                                        <span>Transform: The music is <strong>so loud</strong>.</span>
                                    </div>
                                    <div className="transformation-item">
                                        <span>Original: It's a very big car.</span>
                                        <span>Transform: It's <strong>such a big car</strong>.</span>
                                    </div>
                                    <div className="transformation-item">
                                        <span>Original: She speaks very quickly.</span>
                                        <span>Transform: She speaks <strong>so quickly</strong>.</span>
                                    </div>
                                    <div className="transformation-item">
                                        <span>Original: They are very nice people.</span>
                                        <span>Transform: They are <strong>such nice people</strong>.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja typowych błędów */}
                    <section className="article__section">
                        <h2>Typowe błędy i jak ich unikać 🚫</h2>

                        <div className="common-mistakes">
                            <div className="mistake-card">
                                <h4>❌ "So a beautiful day"</h4>
                                <div className="correction">
                                    <span className="wrong">WRONG: ❌ so a beautiful day</span>
                                    <span className="correct">RIGHT: ✅ such a beautiful day</span>
                                </div>
                                <p><strong>Dlaczego to błąd?</strong> "So" nie może występować z "a/an" + rzeczownik</p>
                            </div>

                            <div className="mistake-card">
                                <h4>❌ "Such beautiful"</h4>
                                <div className="correction">
                                    <span className="wrong">WRONG: ❌ such beautiful</span>
                                    <span className="correct">RIGHT: ✅ so beautiful</span>
                                </div>
                                <p><strong>Dlaczego to błąd?</strong> "Such" zawsze wymaga rzeczownika</p>
                            </div>

                            <div className="mistake-card">
                                <h4>❌ "So nice people"</h4>
                                <div className="correction">
                                    <span className="wrong">WRONG: ❌ so nice people</span>
                                    <span className="correct">RIGHT: ✅ such nice people</span>
                                </div>
                                <p><strong>Dlaczego to błąd?</strong> "So" nie może występować z przymiotnikiem + rzeczownik</p>
                            </div>

                            <div className="mistake-card">
                                <h4>❌ "Such quickly"</h4>
                                <div className="correction">
                                    <span className="wrong">WRONG: ❌ such quickly</span>
                                    <span className="correct">RIGHT: ✅ so quickly</span>
                                </div>
                                <p><strong>Dlaczego to błąd?</strong> "Such" nie może występować z przysłówkami</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja podsumowania */}
                    <section className="article__section">
                        <div className="summary-cheatsheet">
                            <h3>🎯 Ściągawka na szybko</h3>

                            <div className="cheatsheet-grid">
                                <div className="cheatsheet-item">
                                    <h4>UŻYWAJ "SO" gdy:</h4>
                                    <ul>
                                        <li>✅ Sam przymiotnik: <strong>so nice</strong></li>
                                        <li>✅ Przysłówek: <strong>so quickly</strong></li>
                                        <li>✅ So much/many: <strong>so much time</strong></li>
                                        <li>✅ So few/little: <strong>so little money</strong></li>
                                    </ul>
                                </div>

                                <div className="cheatsheet-item">
                                    <h4>UŻYWAJ "SUCH" gdy:</h4>
                                    <ul>
                                        <li>✅ Przymiotnik + rzeczownik: <strong>such a nice person</strong></li>
                                        <li>✅ Rzeczownik z "a/an": <strong>such a day</strong></li>
                                        <li>✅ Rzeczownik bez "a/an": <strong>such weather</strong></li>
                                        <li>✅ Rzeczownik samodzielnie: <strong>such fun</strong></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="memory-trick">
                                <h4>🧠 Sztuczka pamięciowa</h4>
                                <p><strong>"SO" = Sam Odpowiada (za przymiotniki/przysłówki)</strong></p>
                                <p><strong>"SUCH" = Szuka Rzeczownika (Zawsze)</strong></p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🎯 Przetestuj swoją wiedzę!</h3>
                            <p>Teraz gdy znasz już zasady, czas je przećwiczyć w praktyce. Pamiętaj - praktyka czyni mistrza!</p>
                            <div className="action-buttons">
                                <Link to="/cwiczenia/gramatyka/so-such" className="btn btn--primary">Ćwiczenia So/Such</Link>
                                <Link to="/cwiczenia/gramatyka" className="btn btn--secondary">Inne ćwiczenia gramatyczne</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#gramatyka</span>
                            <span className="tag">#sovssuch</span>
                            <span className="tag">#angielski</span>
                            <span className="tag">#przymiotniki</span>
                            <span className="tag">#rzeczowniki</span>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default SoVsSuch;