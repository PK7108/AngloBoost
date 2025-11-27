import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import useDocumentMeta from '../../useDocumentMeta';
import './ArticleStyles.css';

function getMetaTitle(lang) {
    const baseTitle = lang === 'pl'
        ? 'Idiomy angielskie, które musisz znać - Kompletny przewodnik'
        : 'English Idioms You Must Know - Complete Guide'

    return `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang) {
    const baseDescription = {
        pl: 'Kompletny przewodnik po angielskich idiomach. Poznaj najważniejsze zwroty, które pojawiają się w rozmowach, filmach i książkach. Naucz się używać ich jak native speaker.',
        en: 'Complete guide to English idioms. Learn the most important phrases that appear in conversations, movies and books. Learn to use them like a native speaker.'
    }

    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang) {
    return lang === 'pl'
        ? 'https://angloboost.pl/pl/artykuly/idiomy-angielskie'
        : 'https://angloboost.pl/en/articles/english-idioms'
}

const EnglishIdioms = () => {
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
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/artykuly" className="article__breadcrumb-link">Artykuły</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Idiomy angielskie</span>
                    </nav>
                    <h1 className="article__title">Idiomy angielskie, które musisz znać 🎯</h1>
                    <p className="article__intro">Popularne zwroty, które często pojawiają się w rozmowach, filmach i książkach - opanuj je, by brzmieć jak native speaker</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 8 minut</span>
                        <span className="article__level">🎯 Dla: Poziom B1-C2</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>💡 Czym są idiomy?</h3>
                            <p><strong>Idiomy to stałe związki wyrazowe, których znaczenie nie wynika z poszczególnych słów.</strong> Na przykład "break a leg" nie oznacza "złamać nogę", tylko "powodzenia". Opanowanie idiomów jest kluczowe dla naturalnej komunikacji.</p>
                        </div>

                        <h2>Dlaczego warto uczyć się idiomów?</h2>
                        <div className="points-grid">
                            <div className="point-card">
                                <h4>🗣️ Naturalna komunikacja</h4>
                                <p>Idiomy są powszechnie używane w codziennych rozmowach przez native speakerów</p>
                            </div>
                            <div className="point-card">
                                <h4>🎬 Zrozumienie mediów</h4>
                                <p>Pojawiają się w filmach, serialach, piosenkach i książkach</p>
                            </div>
                            <div className="point-card">
                                <h4>📝 Egzaminy językowe</h4>
                                <p>Wymagane na wyższych poziomach zaawansowania (B2+)</p>
                            </div>
                        </div>

                        <div className="tip-box tip-box--important">
                            <h3>📚 Chcesz poznać więcej idiomów?</h3>
                            <p>Odwiedź naszą <Link to="/slownictwo/idiomy" className="article__breadcrumb-link">sekcję idiomów w słownictwie</Link>, gdzie znajdziesz setki pogrupowanych tematycznie wyrażeń z przykładami i ćwiczeniami!</p>
                        </div>
                    </section>

                    {/* Sekcja podstawowych idiomów */}
                    <section className="article__section">
                        <h2>Podstawowe idiomy codzienne 📝</h2>

                        <div className="cefr-overview">
                            <div className="cefr-level cefr-level--basic">
                                <div className="cefr-level__header">
                                    <h3>Idiomy rozmowowe</h3>
                                    <span className="cefr-level__subtitle">Używane na co dzień</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item"><strong>Break a leg</strong> - Powodzenia!</div>
                                    <div className="cefr-item"><strong>Piece of cake</strong> - Bułka z masłem</div>
                                    <div className="cefr-item"><strong>Hit the books</strong> - Uczyć się intensywnie</div>
                                    <div className="cefr-item"><strong>When pigs fly</strong> - Gdy świnie latają</div>
                                    <div className="cefr-item"><strong>Bite the bullet</strong> - Wziąć byka za rogi</div>
                                    <div className="cefr-item"><strong>Cost an arm and a leg</strong> - Kosztować majątek</div>
                                </div>
                                <div className="tool-recommendation">
                                    <strong>Przykład użycia:</strong> "This exam will be a piece of cake for you!"
                                </div>
                            </div>

                            <div className="cefr-level cefr-level--independent">
                                <div className="cefr-level__header">
                                    <h3>Idiomy biznesowe</h3>
                                    <span className="cefr-level__subtitle">W pracy i biznesie</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item"><strong>Think outside the box</strong> - Myśleć nieszablonowo</div>
                                    <div className="cefr-item"><strong>Ballpark figure</strong> - Przybliżona kwota</div>
                                    <div className="cefr-item"><strong>Back to the drawing board</strong> - Wracać do punktu wyjścia</div>
                                    <div className="cefr-item"><strong>Cut corners</strong> - Iść na skróty</div>
                                    <div className="cefr-item"><strong>Get the ball rolling</strong> - Zapoczątkować coś</div>
                                    <div className="cefr-item"><strong>On the same page</strong> - Mieć to samo zdanie</div>
                                </div>
                                <div className="tool-recommendation">
                                    <strong>Przykład użycia:</strong> "We need to think outside the box to solve this problem."
                                </div>
                            </div>

                            <div className="cefr-level cefr-level--proficient">
                                <div className="cefr-level__header">
                                    <h3>Idiomy emocjonalne</h3>
                                    <span className="cefr-level__subtitle">Wyrażające uczucia</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item"><strong>On cloud nine</strong> - W siódmym niebie</div>
                                    <div className="cefr-item"><strong>Down in the dumps</strong> - Przygnębiony</div>
                                    <div className="cefr-item"><strong>Bite your tongue</strong> - Ugryźć się w język</div>
                                    <div className="cefr-item"><strong>Butterflies in your stomach</strong> - Motyle w brzuchu</div>
                                    <div className="cefr-item"><strong>Over the moon</strong> - Niezmiernie szczęśliwy</div>
                                    <div className="cefr-item"><strong>At the end of your rope</strong> - Na skraju wytrzymałości</div>
                                </div>
                                <div className="tool-recommendation">
                                    <strong>Przykład użycia:</strong> "She was on cloud nine after getting the job."
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja dodatkowych idiomów */}
                    <section className="article__section">
                        <h2>Więcej przydatnych idiomów 🔥</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>🏠 Idiomy domowe i rodzinne</h4>
                                <ul>
                                    <li><strong>Home sweet home</strong> - Wszędzie dobrze, ale w domu najlepiej</li>
                                    <li><strong>Make yourself at home</strong> - Czuj się jak u siebie</li>
                                    <li><strong>Wear the pants</strong> - Nosić spodnie (decydować w rodzinie)</li>
                                    <li><strong>Black sheep of the family</strong> - Czarna owca w rodzinie</li>
                                    <li><strong>Like two peas in a pod</strong> - Jak dwie krople wody</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>💰 Idiomy z pieniędzmi</h4>
                                <ul>
                                    <li><strong>Break the bank</strong> - Zrujnować się finansowo</li>
                                    <li><strong>Born with a silver spoon</strong> - Urodzić się w bogatej rodzinie</li>
                                    <li><strong>Money doesn't grow on trees</strong> - Pieniądze nie rosną na drzewach</li>
                                    <li><strong>Cash cow</strong> - Dobry interes, źródło dochodu</li>
                                    <li><strong>Penny pincher</strong> - Skąpiec</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>⏰ Idiomy z czasem</h4>
                                <ul>
                                    <li><strong>Once in a blue moon</strong> - Raz na ruski rok</li>
                                    <li><strong>Against the clock</strong> - W pośpiechu, na czas</li>
                                    <li><strong>Kill time</strong> - Zabijać czas</li>
                                    <li><strong>In the nick of time</strong> - W samą porę</li>
                                    <li><strong>Time flies</strong> - Czas szybko mija</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja zaawansowanych idiomów */}
                    <section className="article__section">
                        <h2>Zaawansowane idiomy literackie 📚</h2>

                        <div className="level-detail level-detail--b1">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">B2+</span>
                                <h3>Idiomy z literatury i kultury</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Warto znać w piśmie i mowie:</h4>
                                <ul className="skill-list">
                                    <li>✅ <strong>The ball is in your court</strong> - Teraz twoja kolej</li>
                                    <li>✅ <strong>Bite the bullet</strong> - Wziąć byka za rogi</li>
                                    <li>✅ <strong>Cost an arm and a leg</strong> - Kosztować majątek</li>
                                    <li>✅ <strong>Once in a blue moon</strong> - Raz na ruski rok</li>
                                    <li>✅ <strong>See eye to eye</strong> - Zgadzać się w 100%</li>
                                    <li>✅ <strong>Spill the beans</strong> - Wysypać wszystko</li>
                                    <li>✅ <strong>The last straw</strong> - Ostatnia kropla</li>
                                    <li>✅ <strong>Out of the blue</strong> - Jak grom z jasnego nieba</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Przykład w zdaniu:</strong> "This designer bag cost me an arm and a leg, but it was worth it."
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">20-25</span>
                                        <span className="stat-small__label">podstawowych idiomów</span>
                                    </div>
                                    <div className="stat-small">
                                        <span className="stat-small__value">+30%</span>
                                        <span className="stat-small__label">naturalności</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="level-detail level-detail--c1">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">C1+</span>
                                <h3>Wyrafinowane idiomy akademickie</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Dla zaawansowanych użytkowników:</h4>
                                <ul className="skill-list">
                                    <li>✅ <strong>A blessing in disguise</strong> - Przysługa w przebraniu nieszczęścia</li>
                                    <li>✅ <strong>Beat around the bush</strong> - Owijać w bawełnę</li>
                                    <li>✅ <strong>Cut to the chase</strong> - Przejść do sedna</li>
                                    <li>✅ <strong>The elephant in the room</strong> - Oczywisty problem, o którym się nie mówi</li>
                                    <li>✅ <strong>Through thick and thin</strong> - Na dobre i na złe</li>
                                    <li>✅ <strong>Read between the lines</strong> - Czytać między wierszami</li>
                                    <li>✅ <strong>A dime a dozen</strong> - Powszechny, nic szczególnego</li>
                                    <li>✅ <strong>Burn the midnight oil</strong> - Pracować do późna w nocy</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Przykład w zdaniu:</strong> "We've been friends through thick and thin for over twenty years."
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">30-40</span>
                                        <span className="stat-small__label">zaawansowanych idiomów</span>
                                    </div>
                                    <div className="stat-small">
                                        <span className="stat-small__value">+50%</span>
                                        <span className="stat-small__label">płynności</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja nauki i praktyki */}
                    <section className="article__section">
                        <h2>Jak skutecznie uczyć się idiomów? 🎓</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>📖 Nauka w kontekście</h4>
                                <ul>
                                    <li>Ucz się całych zdań z idiomami, nie pojedynczych słów</li>
                                    <li>Czytaj artykuły i książki, gdzie pojawiają się idiomy</li>
                                    <li>Oglądaj filmy i seriale z napisami angielskimi</li>
                                    <li><strong>Przykład:</strong> Zamiast uczyć się "break a leg", zapamiętaj "Break a leg on your performance tonight!"</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🗂️ Grupowanie tematyczne</h4>
                                <ul>
                                    <li>Grupuj idiomy według tematów (praca, emocje, codzienne życie)</li>
                                    <li>Twórz mapy myśli z powiązanymi idiomami</li>
                                    <li>Ucz się przeciwieństw (np. "on cloud nine" vs "down in the dumps")</li>
                                    <li><strong>Przykład:</strong> Grupa "emocje": on cloud nine, down in the dumps, over the moon</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🎭 Praktyka w mówieniu</h4>
                                <ul>
                                    <li>Używaj idiomów w codziennych rozmowach</li>
                                    <li>Nagrywaj się mówiąc zdania z idiomami</li>
                                    <li>Ćwicz z partnerem językowym lub nauczycielem</li>
                                    <li><strong>Przykład:</strong> "I was over the moon when I passed my driving test!"</li>
                                </ul>
                            </div>
                        </div>

                        <div className="comparison-table">
                            <h4>Plan nauki idiomów - 4 tygodnie</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th>Tydzień</th>
                                    <th>Temat</th>
                                    <th>Liczba idiomów</th>
                                    <th>Ćwiczenia</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Idiomy codzienne</td>
                                    <td>10</td>
                                    <td>Fiszki, zdania przykładowe</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Idiomy biznesowe</td>
                                    <td>10</td>
                                    <td>Dialogi, case studies</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Idiomy emocjonalne</td>
                                    <td>10</td>
                                    <td>Opowiadania, opisy sytuacji</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Idiomy literackie</td>
                                    <td>10</td>
                                    <td>Czytanie, analiza tekstów</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Sekcja częstych błędów */}
                    <section className="article__section">
                        <h2>Częste błędy i jak ich unikać ⚠️</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>❌ Dosłowne tłumaczenie</h4>
                                <ul>
                                    <li><strong>Błąd:</strong> Tłumaczenie idiomów słowo w słowo</li>
                                    <li><strong>Poprawnie:</strong> Uczenie się znaczenia całego zwrotu</li>
                                    <li><strong>Przykład:</strong> "It's raining cats and dogs" nie oznacza, że padają koty i psy</li>
                                    <li><strong>Znaczenie:</strong> Mocno pada</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>❌ Nieprawidłowe użycie</h4>
                                <ul>
                                    <li><strong>Błąd:</strong> Mieszanie struktur gramatycznych</li>
                                    <li><strong>Poprawnie:</strong> Uczenie się całych gotowych fraz</li>
                                    <li><strong>Przykład:</strong> "I'm on cloud nine" (nie: "I'm in cloud nine")</li>
                                    <li><strong>Zapamiętaj:</strong> Idiomy mają stałą formę</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>❌ Nieodpowiedni kontekst</h4>
                                <ul>
                                    <li><strong>Błąd:</strong> Używanie idiomów w formalnych sytuacjach</li>
                                    <li><strong>Poprawnie:</strong> Dopasowanie do sytuacji i odbiorcy</li>
                                    <li><strong>Przykład:</strong> "Break a leg" w oficjalnej prezentacji</li>
                                    <li><strong>Lepiej:</strong> "I wish you the best of luck"</li>
                                </ul>
                            </div>
                        </div>

                        <div className="tip-box tip-box--important">
                            <h3>💡 Złota zasada</h3>
                            <p><strong>Ucz się idiomów w kontekście i używaj ich ostrożnie.</strong> Zawsze sprawdzaj, czy dany idiom pasuje do sytuacji i czy na pewno go rozumiesz. Lepiej użyć prostszego, ale poprawnego wyrażenia niż błędnie zastosować idiom.</p>
                        </div>
                    </section>

                    {/* Sekcja zasobów */}
                    <section className="article__section">
                        <h2>Najlepsze źródła do nauki idiomów 📚</h2>

                        <div className="comparison-table">
                            <h4>Polecane materiały</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th>Typ materiału</th>
                                    <th>Przykłady</th>
                                    <th>Poziom</th>
                                    <th>Korzyści</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>📖 Książki</td>
                                    <td>"English Idioms in Use" (Cambridge)</td>
                                    <td>B1-C2</td>
                                    <td>Strukturalna nauka z ćwiczeniami</td>
                                </tr>
                                <tr>
                                    <td>🎬 Filmy i seriale</td>
                                    <td>Friends, The Office, Modern Family</td>
                                    <td>B1+</td>
                                    <td>Naturalny język w kontekście</td>
                                </tr>
                                <tr>
                                    <td>📱 Aplikacje</td>
                                    <td>Quizlet, Memrise, Idioms App</td>
                                    <td>A2-C1</td>
                                    <td>Nauka przez powtórki i gry</td>
                                </tr>
                                <tr>
                                    <td>🎧 Podcasty</td>
                                    <td>BBC Learning English, All Ears English</td>
                                    <td>B1-C2</td>
                                    <td>Słuchanie i powtarzanie</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="action-box">
                            <h3>📝 Ćwiczenie praktyczne</h3>
                            <p>Ułóż 3 zdania używając poznanych dzisiaj idiomów. Postaraj się, aby były to zdania, które mogłyby paść w prawdziwej rozmowie.</p>
                            <div className="action-buttons">
                                <Link to="/cwiczenia/slownictwo/idiomy" className="btn btn--primary">Zrób ćwiczenia</Link>
                                <Link to="/slownictwo/idiomy" className="btn btn--secondary">Więcej idiomów</Link>
                                <Link to="/test-idiomy" className="btn btn--outline">Sprawdź wiedzę</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#idiomy</span>
                            <span className="tag">#zwroty</span>
                            <span className="tag">#angielski</span>
                            <span className="tag">#slownictwo</span>
                            <span className="tag">#komunikacja</span>
                            <span className="tag">#native</span>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default EnglishIdioms;