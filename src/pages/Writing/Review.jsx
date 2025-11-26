import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import useDocumentMeta from '../../useDocumentMeta';
import './WritingStyles.css';

function getMetaTitle(lang) {
    const baseTitle = lang === 'pl'
        ? 'Jak pisać recenzje po angielsku? Kompletny przewodnik'
        : 'How to Write Reviews in English? Complete Guide'

    return `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang) {
    const baseDescription = {
        pl: 'Kompletny przewodnik po pisaniu recenzji po angielsku. Naucz się tworzyć profesjonalne recenzje produktów, filmów, książek i usług. Struktura, słownictwo, przykłady i wskazówki.',
        en: 'Complete guide to writing reviews in English. Learn how to create professional reviews of products, movies, books and services. Structure, vocabulary, examples and tips.'
    }

    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang) {
    return lang === 'pl'
        ? 'https://angloboost.pl/pl/pisanie/jak-pisac-recenzje'
        : 'https://angloboost.pl/en/writing/how-to-write-reviews'
}

const Review = () => {
    const { lang } = useLanguage()

    useDocumentMeta({
        title: getMetaTitle(lang),
        description: getMetaDescription(lang),
        canonical: getCanonicalUrl(lang),
        og: {
            title: getMetaTitle(lang),
            description: getMetaDescription(lang),
            image: 'https://angloboost.pl/UK-social.png',
            url: window.location.href
        }
    })

    return (
        <article className="writing-article">
            <div className="writing-article__header">
                <div className="container">
                    <nav className="writing-article__breadcrumb">
                        <Link to="/pisanie" className="writing-article__breadcrumb-link">Pisanie</Link>
                        <span className="writing-article__breadcrumb-separator">/</span>
                        <span className="writing-article__breadcrumb-current">Recenzja</span>
                    </nav>
                    <h1 className="writing-article__title">Jak pisać recenzje po angielsku? ⭐</h1>
                    <p className="writing-article__intro">Kompletny przewodnik po tworzeniu profesjonalnych recenzji produktów, filmów, książek i usług w języku angielskim</p>
                    <div className="writing-article__meta">
                        <span className="writing-article__reading-time">⏱️ Czas czytania: 8 minut</span>
                        <span className="writing-article__level">🎯 Poziom: B1-C1</span>
                        <span className="writing-article__words">📝 Słowa kluczowe: review, opinion, evaluation, critique</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="writing-article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="writing-article__section">
                        <div className="writing-tip-box">
                            <h3>📝 Czym jest recenzja po angielsku?</h3>
                            <p><strong>Review</strong> to forma pisemna, w której wyrażasz opinię na temat produktu, usługi, filmu, książki lub miejsca. Dobra recenzja powinna być obiektywna, dobrze uzasadniona i pomocna dla innych czytelników.</p>
                        </div>

                        <h2>Rodzaje recenzji</h2>
                        <div className="writing-points-grid">
                            <div className="writing-point-card">
                                <h4>🎬 Film i seriale</h4>
                                <p>Analiza fabuły, gry aktorskiej, reżyserii, efektów specjalnych</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>📚 Książki</h4>
                                <p>Ocena stylu autora, rozwoju postaci, struktury narracji</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>🛍️ Produkty</h4>
                                <p>Recenzje techniczne, jakość wykonania, funkcjonalność</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>🏨 Miejsca i usługi</h4>
                                <p>Hotele, restauracje, atrakcje turystyczne - doświadczenia klienta</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja struktury recenzji */}
                    <section className="writing-article__section">
                        <h2>Struktura recenzji 🏗️</h2>

                        <div className="review-structure">
                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">1</span>
                                    <h3>Wprowadzenie (Introduction)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Przedstawienie tematu</h4>
                                    <ul>
                                        <li>✅ Podstawowe informacje o recenzowanym obiekcie</li>
                                        <li>✅ Kontekst - dlaczego to recenzujesz</li>
                                        <li>✅ Pierwsze ogólne wrażenie</li>
                                        <li>✅ Teza - główna opinia</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład (film):</strong><br/>
                                        "Christopher Nolan's latest sci-fi epic 'Interstellar' takes viewers on an extraordinary journey through space and time. Having been a fan of Nolan's previous work, I was eager to see how he would tackle the complex themes of love, time, and human survival."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">2</span>
                                    <h3>Opis (Description)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Obiektywny opis bez spoilerów</h4>
                                    <ul>
                                        <li>✅ Podstawowe informacje (autor, reżyser, producent)</li>
                                        <li>✅ Gatunek i styl</li>
                                        <li>✅ Główne elementy fabuły (bez szczegółów)</li>
                                        <li>✅ Kontekst powstania (jeśli istotny)</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład (książka):</strong><br/>
                                        "The novel follows the journey of a young wizard discovering his magical heritage while battling dark forces that threaten both the magical and human worlds. Rowling's writing combines elements of fantasy, mystery, and coming-of-age storytelling."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">3</span>
                                    <h3>Analiza (Analysis)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Szczegółowa ocena</h4>
                                    <ul>
                                        <li>✅ Mocne strony - co się podobało i dlaczego</li>
                                        <li>✅ Słabe strony - konstruktywna krytyka</li>
                                        <li>✅ Porównania z podobnymi dziełami</li>
                                        <li>✅ Ocena poszczególnych elementów</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład (produkt):</strong><br/>
                                        "The camera's image stabilization is exceptional, producing blur-free photos even in low light. However, the battery life falls short of competitors, requiring frequent recharging during intensive use."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">4</span>
                                    <h3>Ocena (Evaluation)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Podsumowanie i rekomendacja</h4>
                                    <ul>
                                        <li>✅ Końcowa ocena ogólna</li>
                                        <li>✅ Dla kogo jest odpowiednie</li>
                                        <li>✅ Czy warto kupić/obejrzeć/przeczytać</li>
                                        <li>✅ Ostateczna rekomendacja</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład (restauracja):</strong><br/>
                                        "While the service could be improved, the exceptional food quality and romantic atmosphere make this restaurant perfect for special occasions. I would highly recommend it for couples seeking a memorable dining experience."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">5</span>
                                    <h3>Zakończenie (Conclusion)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Ostateczne podsumowanie</h4>
                                    <ul>
                                        <li>✅ Powtórzenie głównej tezy</li>
                                        <li>✅ Ostateczna ocena (gwiazdki, punkty)</li>
                                        <li>✅ Zachęta lub ostrzeżenie</li>
                                        <li>✅ Perspektywy na przyszłość</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład (film):</strong><br/>
                                        "In conclusion, while 'Interstellar' has some pacing issues in its second act, it remains a visually stunning and thought-provoking masterpiece that pushes the boundaries of science fiction cinema. 4.5/5 stars"
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja słownictwa recenzenckiego */}
                    <section className="writing-article__section">
                        <h2>Słownictwo recenzenckie 📝</h2>

                        <div className="review-vocabulary">
                            <div className="vocab-category">
                                <h3>👍 Mocne strony</h3>
                                <div className="vocab-grid">
                                    <div className="vocab-item">
                                        <span className="vocab-word">outstanding</span>
                                        <span className="vocab-translation">wybitny</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">compelling</span>
                                        <span className="vocab-translation">fascynujący</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">innovative</span>
                                        <span className="vocab-translation">innowacyjny</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">captivating</span>
                                        <span className="vocab-translation">urzekający</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">flawless</span>
                                        <span className="vocab-translation">bez zarzutu</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">groundbreaking</span>
                                        <span className="vocab-translation">przełomowy</span>
                                    </div>
                                </div>
                            </div>

                            <div className="vocab-category">
                                <h3>👎 Słabe strony</h3>
                                <div className="vocab-grid">
                                    <div className="vocab-item">
                                        <span className="vocab-word">disappointing</span>
                                        <span className="vocab-translation">rozczarowujący</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">flawed</span>
                                        <span className="vocab-translation">wadliwy</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">predictable</span>
                                        <span className="vocab-translation">przewidywalny</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">underwhelming</span>
                                        <span className="vocab-translation">niespecjalny</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">mediocre</span>
                                        <span className="vocab-translation">przeciętny</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">lackluster</span>
                                        <span className="vocab-translation">mało efektowny</span>
                                    </div>
                                </div>
                            </div>

                            <div className="vocab-category">
                                <h3>🎭 Opisy ogólne</h3>
                                <div className="vocab-grid">
                                    <div className="vocab-item">
                                        <span className="vocab-word">plot</span>
                                        <span className="vocab-translation">fabuła</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">character development</span>
                                        <span className="vocab-translation">rozwój postaci</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">pacing</span>
                                        <span className="vocab-translation">tempo narracji</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">cinematography</span>
                                        <span className="vocab-translation">kinematografia</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">user-friendly</span>
                                        <span className="vocab-translation">przyjazny użytkownikowi</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">durable</span>
                                        <span className="vocab-translation">trwały</span>
                                    </div>
                                </div>
                            </div>

                            <div className="vocab-category">
                                <h3>⭐ Wyrażenia oceniające</h3>
                                <div className="vocab-grid">
                                    <div className="vocab-item">
                                        <span className="vocab-word">lives up to the hype</span>
                                        <span className="vocab-translation">spełnia oczekiwania</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">falls short of expectations</span>
                                        <span className="vocab-translation">nie spełnia oczekiwań</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">worth the investment</span>
                                        <span className="vocab-translation">wart inwestycji</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">overpriced</span>
                                        <span className="vocab-translation">przereklamowany</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">highly recommended</span>
                                        <span className="vocab-translation">gorąco polecany</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">proceed with caution</span>
                                        <span className="vocab-translation">ostrożnie polecany</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja systemów oceniania */}
                    <section className="writing-article__section">
                        <h2>Systemy oceniania ⭐</h2>

                        <div className="rating-systems">
                            <div className="rating-system">
                                <h3>🎯 System gwiazdkowy</h3>
                                <div className="rating-scale">
                                    <div className="rating-item">
                                        <span className="stars">⭐️⭐️⭐️⭐️⭐️</span>
                                        <span className="rating-desc"><strong>5/5</strong> - Outstanding, perfect</span>
                                    </div>
                                    <div className="rating-item">
                                        <span className="stars">⭐️⭐️⭐️⭐️</span>
                                        <span className="rating-desc"><strong>4/5</strong> - Very good, highly recommended</span>
                                    </div>
                                    <div className="rating-item">
                                        <span className="stars">⭐️⭐️⭐️</span>
                                        <span className="rating-desc"><strong>3/5</strong> - Average, decent but flawed</span>
                                    </div>
                                    <div className="rating-item">
                                        <span className="stars">⭐️⭐️</span>
                                        <span className="rating-desc"><strong>2/5</strong> - Poor, significant issues</span>
                                    </div>
                                    <div className="rating-item">
                                        <span className="stars">⭐️</span>
                                        <span className="rating-desc"><strong>1/5</strong> - Terrible, avoid</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rating-system">
                                <h3>📊 System procentowy</h3>
                                <div className="rating-scale">
                                    <div className="rating-item">
                                        <span className="score">90-100%</span>
                                        <span className="rating-desc"><strong>Excellent</strong> - Must-have/watch/read</span>
                                    </div>
                                    <div className="rating-item">
                                        <span className="score">80-89%</span>
                                        <span className="rating-desc"><strong>Very Good</strong> - Highly recommended</span>
                                    </div>
                                    <div className="rating-item">
                                        <span className="score">70-79%</span>
                                        <span className="rating-desc"><strong>Good</strong> - Worthwhile with minor flaws</span>
                                    </div>
                                    <div className="rating-item">
                                        <span className="score">60-69%</span>
                                        <span className="rating-desc"><strong>Average</strong> - Decent but forgettable</span>
                                    </div>
                                    <div className="rating-item">
                                        <span className="score">Below 60%</span>
                                        <span className="rating-desc"><strong>Poor</strong> - Not recommended</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rating-system">
                                <h3>👍 System rekomendacji</h3>
                                <div className="recommendation-scale">
                                    <div className="recommendation-item positive">
                                        <span className="rec-label">Strongly Recommend</span>
                                        <span className="rec-desc">Essential experience, must-try</span>
                                    </div>
                                    <div className="recommendation-item positive">
                                        <span className="rec-label">Recommend</span>
                                        <span className="rec-desc">Worth your time/money</span>
                                    </div>
                                    <div className="recommendation-item neutral">
                                        <span className="rec-label">Neutral</span>
                                        <span className="rec-desc">Some good elements, but flawed</span>
                                    </div>
                                    <div className="recommendation-item negative">
                                        <span className="rec-label">Not Recommended</span>
                                        <span className="rec-desc">Significant issues, avoid</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Przykładowe recenzje */}
                    <section className="writing-article__section">
                        <h2>Przykładowe recenzje ✨</h2>

                        <div className="review-examples">
                            <div className="review-example">
                                <div className="review-header">
                                    <h3>📚 Recenzja książki</h3>
                                    <div className="review-meta">
                                        <span className="rating">⭐️⭐️⭐️⭐️½</span>
                                        <span className="genre">Fantasy Fiction</span>
                                        <span className="length">450 słów</span>
                                    </div>
                                </div>

                                <div className="review-content">
                                    <div className="review-title">
                                        <h4>"The Midnight Library" by Matt Haig - A Thought-Provoking Journey Through Regret and Possibility</h4>
                                    </div>

                                    <div className="review-body">
                                        <div className="review-paragraph">
                                            <p><strong>Matt Haig's "The Midnight Library" presents a unique exploration of life's infinite possibilities through the lens of magical realism.</strong> The novel follows Nora Seed, a woman stuck in a cycle of regret and disappointment, who finds herself in a mysterious library between life and death where every book represents a different version of her life.</p>
                                            <p className="analysis">
                                                <strong>Analiza:</strong> Wprowadzenie przedstawia główną koncepcję książki i jej tematykę.
                                            </p>
                                        </div>

                                        <div className="review-paragraph">
                                            <p><strong>Haig's writing shines in his ability to balance profound philosophical questions with accessible storytelling.</strong> The concept of the midnight library serves as a brilliant metaphor for the paths not taken in life. Nora's journey through various versions of herself - from rock star to glaciologist, from married mother to lonely academic - raises compelling questions about choice, regret, and what truly constitutes a "good" life.</p>
                                            <p className="analysis">
                                                <strong>Analiza:</strong> Analiza stylu autora i głównej metafory książki.
                                            </p>
                                        </div>

                                        <div className="review-paragraph">
                                            <p><strong>Where the novel occasionally stumbles is in its pacing.</strong> Some of Nora's alternative lives feel rushed, while others overstay their welcome. The secondary characters, while serving their purpose in highlighting different aspects of Nora's potential, sometimes lack depth beyond their symbolic roles.</p>
                                            <p className="analysis">
                                                <strong>Analiza:</strong> Konstruktywna krytyka - wskazanie słabszych elementów.
                                            </p>
                                        </div>

                                        <div className="review-paragraph">
                                            <p><strong>Despite these minor flaws, "The Midnight Library" delivers a powerful emotional impact.</strong> Haig's exploration of mental health is handled with sensitivity and insight. The conclusion, while somewhat predictable, provides a satisfying and hopeful resolution to Nora's existential crisis.</p>
                                            <p className="analysis">
                                                <strong>Analiza:</strong> Podkreślenie mocnych stron pomimo zauważonych wad.
                                            </p>
                                        </div>

                                        <div className="review-conclusion">
                                            <p><strong>Verdict:</strong> "The Midnight Library" is a beautifully crafted novel that will resonate with anyone who has ever wondered "what if." While not without its imperfections, it offers a moving exploration of regret, choice, and the infinite possibilities of life. <strong>4.5/5 stars - Highly recommended for readers who enjoy thought-provoking fiction with heart.</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="review-example">
                                <div className="review-header">
                                    <h3>🎧 Recenzja produktu</h3>
                                    <div className="review-meta">
                                        <span className="rating">⭐️⭐️⭐️⭐️</span>
                                        <span className="genre">Electronics</span>
                                        <span className="length">380 słów</span>
                                    </div>
                                </div>

                                <div className="review-content">
                                    <div className="review-title">
                                        <h4>SoundMax Pro Wireless Headphones - Great Sound with Room for Improvement</h4>
                                    </div>

                                    <div className="review-body">
                                        <div className="review-paragraph">
                                            <p><strong>After two weeks of daily use, the SoundMax Pro headphones deliver impressive audio quality but struggle with comfort during extended sessions.</strong> Priced at $199, they compete in the crowded mid-range wireless headphone market.</p>
                                        </div>

                                        <div className="pros-cons">
                                            <div className="pros">
                                                <h5>✅ Pros:</h5>
                                                <ul>
                                                    <li><strong>Exceptional sound quality</strong> with rich bass and clear highs</li>
                                                    <li><strong>Excellent battery life</strong> - 30 hours on single charge</li>
                                                    <li><strong>Quick charging</strong> - 15 minutes for 5 hours of playback</li>
                                                    <li><strong>Stable Bluetooth connection</strong> with minimal dropouts</li>
                                                </ul>
                                            </div>
                                            <div className="cons">
                                                <h5>❌ Cons:</h5>
                                                <ul>
                                                    <li><strong>Uncomfortable for long wear</strong> - ear cups become warm</li>
                                                    <li><strong>Bulky design</strong> not ideal for travel</li>
                                                    <li><strong>Basic carrying case</strong> with no charging functionality</li>
                                                    <li><strong>Noise cancellation could be better</strong> compared to competitors</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="review-paragraph">
                                            <p><strong>The audio performance is where these headphones truly shine.</strong> The 40mm drivers produce crisp, detailed sound across all frequencies. Bass is punchy without being overwhelming, mids are clear for vocals, and highs are sharp but not piercing. For music lovers, these deliver excellent value in terms of pure sound quality.</p>
                                        </div>

                                        <div className="review-paragraph">
                                            <p><strong>Comfort is the main area needing improvement.</strong> While the headphones feel premium initially, the ear cups don't breathe well, causing discomfort during sessions longer than two hours. The clamping force is also slightly too strong for all-day wear.</p>
                                        </div>

                                        <div className="review-conclusion">
                                            <p><strong>Final Thoughts:</strong> If you prioritize sound quality above all else and don't plan on wearing them for extended periods, the SoundMax Pro headphones are an excellent choice. However, if comfort for long listening sessions is crucial, you might want to consider alternatives. <strong>4/5 stars - Great for audiophiles, less ideal for all-day use.</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja wskazówek dla różnych typów recenzji */}
                    <section className="writing-article__section">
                        <h2>Wskazówki dla różnych typów recenzji 🎯</h2>

                        <div className="review-tips">
                            <div className="tip-category">
                                <h3>🎬 Filmy i seriale</h3>
                                <div className="tip-list">
                                    <div className="tip-item">
                                        <h4>✅ Unikaj spoilerów</h4>
                                        <p>Opisuj ogólny zarys fabuły bez ujawniania kluczowych zwrotów akcji i zakończenia.</p>
                                    </div>
                                    <div className="tip-item">
                                        <h4>✅ Oceń różne elementy</h4>
                                        <p>Reżyseria, scenariusz, gra aktorska, zdjęcia, muzyka, efekty specjalne.</p>
                                    </div>
                                    <div className="tip-item">
                                        <h4>✅ Uwzględnij kontekst</h4>
                                        <p>Czy film spełnia oczekiwania wobec gatunku? Jak wypada na tle innych dzieł reżysera?</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tip-category">
                                <h3>📚 Książki</h3>
                                <div className="tip-list">
                                    <div className="tip-item">
                                        <h4>✅ Analizuj styl pisarski</h4>
                                        <p>Język, tempo narracji, rozwój postaci, struktura rozdziałów.</p>
                                    </div>
                                    <div className="tip-item">
                                        <h4>✅ Porównuj z podobnymi książkami</h4>
                                        <p>Jak wypada na tle innych autorów w tym gatunku?</p>
                                    </div>
                                    <div className="tip-item">
                                        <h4>✅ Określ grupę docelową</h4>
                                        <p>Dla kogo książka będzie najbardziej odpowiednia?</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tip-category">
                                <h3>🛒 Produkty</h3>
                                <div className="tip-list">
                                    <div className="tip-item">
                                        <h4>✅ Bądź konkretny</h4>
                                        <p>Podawaj konkretne dane: czas działania baterii, wymiary, waga, materiały.</p>
                                    </div>
                                    <div className="tip-item">
                                        <h4>✅ Testuj w różnych warunkach</h4>
                                        <p>Opisz działanie produktu w różnych sytuacjach użytkowania.</p>
                                    </div>
                                    <div className="tip-item">
                                        <h4>✅ Uwzględnij stosunek jakości do ceny</h4>
                                        <p>Czy produkt jest wart swojej ceny w porównaniu z konkurencją?</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tip-category">
                                <h3>🏨 Usługi i miejsca</h3>
                                <div className="tip-list">
                                    <div className="tip-item">
                                        <h4>✅ Opisz swoje doświadczenie</h4>
                                        <p>Atmosfera, obsługa, czystość, lokalizacja, wartość.</p>
                                    </div>
                                    <div className="tip-item">
                                        <h4>✅ Bądź obiektywny</h4>
                                        <p>Oddziel swoje subiektywne preferencje od obiektywnej oceny.</p>
                                    </div>
                                    <div className="tip-item">
                                        <h4>✅ Podaj kontekst wizyty</h4>
                                        <p>Czy była to podróż służbowa, romantyczny weekend, rodzinne wakacje?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja ćwiczeń */}
                    <section className="writing-article__section">
                        <h2>Ćwiczenia praktyczne 🏋️</h2>

                        <div className="writing-exercises">
                            <div className="exercise-card">
                                <h4>Ćwiczenie 1: Napisz wstęp recenzji</h4>
                                <p><strong>Zadanie:</strong> Napisz wprowadzenie do recenzji ostatniego filmu, który obejrzałeś:</p>
                                <div className="exercise-requirements">
                                    <ul>
                                        <li>Przedstaw podstawowe informacje o filmie</li>
                                        <li>Wyraź swoje pierwsze wrażenie</li>
                                        <li>Sformułuj główną tezę recenzji</li>
                                        <li>Użyj 3-4 słów z podanego słownictwa</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>Ćwiczenie 2: Przekształć opinię</h4>
                                <p><strong>Zadanie:</strong> Przekształć poniższe subiektywne opinie na obiektywną analizę:</p>
                                <div className="transformation-exercise">
                                    <div className="transformation-item">
                                        <span className="original">"I hated the main character because he was annoying."</span>
                                        <span className="hint">→ Opisz konkretne zachowania postaci i ich wpływ na narrację</span>
                                    </div>
                                    <div className="transformation-item">
                                        <span className="original">"This restaurant is the best ever!"</span>
                                        <span className="hint">→ Wymień konkretne elementy, które składają się na pozytywne doświadczenie</span>
                                    </div>
                                    <div className="transformation-item">
                                        <span className="original">"The product is useless."</span>
                                        <span className="hint">→ Opisz konkretne funkcje, które nie działają zgodnie z oczekiwaniami</span>
                                    </div>
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>Ćwiczenie 3: Napisz pełną recenzję</h4>
                                <p><strong>Zadanie:</strong> Wybierz produkt/usługę/dzieło i napisz kompletną recenzję:</p>
                                <div className="review-scenarios">
                                    <div className="scenario">
                                        <strong>Opcja 1:</strong> Recenzja aplikacji na telefon, której używasz regularnie
                                    </div>
                                    <div className="scenario">
                                        <strong>Opcja 2:</strong> Recenzja ostatniej książki, którą przeczytałeś
                                    </div>
                                    <div className="scenario">
                                        <strong>Opcja 3:</strong> Recenzja restauracji lub kawiarni, którą ostatnio odwiedziłeś
                                    </div>
                                </div>
                                <div className="structure-reminder">
                                    <strong>Pamiętaj o strukturze:</strong> Wprowadzenie → Opis → Analiza (mocne/słabe strony) → Ocena → Zakończenie
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="writing-article__section">
                        <div className="writing-action-box review">
                            <h3>🎯 Czas na praktykę!</h3>
                            <p>Wybierz jeden z poniższych scenariuszy i napisz profesjonalną recenzję. Pamiętaj o obiektywizmie, konstruktywnej krytyce i użyteczności dla czytelników!</p>
                            <div className="writing-scenarios">
                                <div className="scenario-card">
                                    <h4>Scenariusz 1: Recenzja technologiczna</h4>
                                    <p>Napisz recenzję smartfona lub laptopa, z którego korzystasz. Oceń wydajność, funkcje, design i stosunek jakości do ceny.</p>
                                </div>
                                <div className="scenario-card">
                                    <h4>Scenariusz 2: Recenzja kulturalna</h4>
                                    <p>Oceń film, serial lub książkę, która ostatnio zrobiła na Tobie wrażenie. Przeanalizuj artystyczne wartości i wykonanie.</p>
                                </div>
                                <div className="scenario-card">
                                    <h4>Scenariusz 3: Recenzja usługi</h4>
                                    <p>Napisz recenzję platformy streamingowej, usługi dostawczej lub aplikacji. Oceń funkcjonalność i doświadczenie użytkownika.</p>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <Link to="/cwiczenia/pisanie-recenzji" className="btn btn--primary">Więcej ćwiczeń</Link>
                                <Link to="/spolecznosc" className="btn btn--secondary">Opublikuj recenzję</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="writing-article__footer">
                        <div className="writing-article__tags">
                            <span className="writing-tag">#recenzja</span>
                            <span className="writing-tag">#review</span>
                            <span className="writing-tag">#opinion</span>
                            <span className="writing-tag">#evaluation</span>
                            <span className="writing-tag">#krytyka</span>
                        </div>
                        <div className="writing-article__next">
                            <p><strong>Następny temat:</strong> <Link to="/writing/raport">Jak pisać raporty po angielsku?</Link></p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default Review;