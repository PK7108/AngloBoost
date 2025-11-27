import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import useDocumentMeta from '../../useDocumentMeta';
import './ArticleStyles.css';

function getMetaTitle(lang) {
    const baseTitle = lang === 'pl'
        ? 'Daty w języku angielskim - Wymowa i zapis lat, dni i miesięcy'
        : 'Dates in English - Pronunciation and Writing of Years, Days and Months'

    return `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang) {
    const baseDescription = {
        pl: 'Kompletny przewodnik po wymowie i zapisie dat po angielsku. Naucz się poprawnie wymawiać lata, dni i miesiące. Różnice między angielskim brytyjskim a amerykańskim.',
        en: 'Complete guide to pronunciation and writing of dates in English. Learn how to correctly pronounce years, days and months. Differences between British and American English.'
    }

    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang) {
    return lang === 'pl'
        ? 'https://angloboost.pl/pl/artykuly/daty-w-angielskim-wymowa-zapis'
        : 'https://angloboost.pl/en/articles/dates-in-english-pronunciation-writing'
}

const DatesInEnglish = () => {
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
                        <span className="article__breadcrumb-current">Daty po angielsku</span>
                    </nav>
                    <h1 className="article__title">Daty w języku angielskim: Wymowa i zapis 📅</h1>
                    <p className="article__intro">Kompletny przewodnik po wymowie i zapisie dat - uwaga na pułapki wymowy!</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 7 minut</span>
                        <span className="article__level">🎯 Dla: Wszystkich poziomów</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box tip-box--warning">
                            <h3>🎯 Najtrudniejsze: Wymowa dat i lat!</h3>
                            <p><strong>Wymowa lat to prawdziwa pułapka!</strong> Różne okresy historyczne mają różne zasady wymowy, a niektóre lata wymawiamy zupełnie inaczej niż byśmy się spodziewali.</p>
                        </div>

                        <h2>Kluczowe zasady wymowy</h2>
                        <div className="points-grid">
                            <div className="point-card">
                                <h4>🔊 Liczebniki porządkowe</h4>
                                <p><strong>Końcówki -th, -st, -nd, -rd</strong> często się nie wymawia lub łączy z następnym słowem</p>
                            </div>
                            <div className="point-card">
                                <h4>📅 Wymowa lat</h4>
                                <p>Lata dzielimy na dwie części! 1999 = "nineteen ninety-nine", ale 2005 = "two thousand five"</p>
                            </div>
                            <div className="point-card">
                                <h4>🇬🇧 vs 🇺🇸 Różnice</h4>
                                <p>Brytyjczycy używają "the" i "of", Amerykanie pomijają - zupełnie inna melodyka!</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja wymowy lat */}
                    <section className="article__section">
                        <h2>Wymowa lat - najtrudniejsze! 🎯</h2>

                        <div className="years-pronunciation">
                            <div className="year-category">
                                <h3>1. Lata do 1999 - podział na dwie części</h3>
                                <div className="years-grid">
                                    <div className="year-example">
                                        <div className="year">2 rok</div>
                                        <div className="pronunciation">"two" /tuː/</div>
                                        <div className="example">"in the year two"</div>
                                    </div>
                                    <div className="year-example">
                                        <div className="year">38 rok</div>
                                        <div className="pronunciation">"thirty-eight" /ˈθɜːti eɪt/</div>
                                        <div className="example">"in thirty-eight AD"</div>
                                    </div>
                                    <div className="year-example">
                                        <div className="year">999 rok</div>
                                        <div className="pronunciation">"nine ninety-nine" /naɪn ˈnaɪnti naɪn/</div>
                                        <div className="example">"in nine ninety-nine"</div>
                                    </div>
                                    <div className="year-example">
                                        <div className="year">1492 rok</div>
                                        <div className="pronunciation">"fourteen ninety-two" /ˌfɔːrˈtiːn ˈnaɪnti tuː/</div>
                                        <div className="example">"Columbus in fourteen ninety-two"</div>
                                    </div>
                                    <div className="year-example">
                                        <div className="year">1999 rok</div>
                                        <div className="pronunciation">"nineteen ninety-nine" /ˌnaɪnˈtiːn ˈnaɪnti naɪn/</div>
                                        <div className="example">"the end of nineteen ninety-nine"</div>
                                    </div>
                                </div>
                            </div>

                            <div className="year-category">
                                <h3>2. Lata 2000-2009 - wyjątkowa wymowa</h3>
                                <div className="years-grid">
                                    <div className="year-example">
                                        <div className="year">2000 rok</div>
                                        <div className="pronunciation">"two thousand" /tuː ˈθaʊzənd/</div>
                                        <div className="example">"the year two thousand"</div>
                                    </div>
                                    <div className="year-example">
                                        <div className="year">2001 rok</div>
                                        <div className="pronunciation">"two thousand and one" /tuː ˈθaʊzənd ənd wʌn/</div>
                                        <div className="tip">🇬🇧 Brytyjczycy dodają "and"</div>
                                    </div>
                                    <div className="year-example">
                                        <div className="year">2005 rok</div>
                                        <div className="pronunciation">"two thousand and five" /tuː ˈθaʊzənd ənd faɪv/</div>
                                        <div className="tip">🇺🇸 Amerykanie: "two thousand five"</div>
                                    </div>
                                    <div className="year-example">
                                        <div className="year">2009 rok</div>
                                        <div className="pronunciation">"two thousand and nine" /tuː ˈθaʊzənd ənd naɪn/</div>
                                        <div className="example">"the crisis of two thousand and nine"</div>
                                    </div>
                                </div>
                            </div>

                            <div className="year-category">
                                <h3>3. Lata 2010+ - powrót do podziału</h3>
                                <div className="years-grid">
                                    <div className="year-example">
                                        <div className="year">2010 rok</div>
                                        <div className="pronunciation">"twenty ten" /ˈtwenti ten/</div>
                                        <div className="example">"since twenty ten"</div>
                                    </div>
                                    <div className="year-example">
                                        <div className="year">2024 rok</div>
                                        <div className="pronunciation">"twenty twenty-four" /ˈtwenti ˈtwenti fɔːr/</div>
                                        <div className="example">"in twenty twenty-four"</div>
                                    </div>
                                    <div className="year-example">
                                        <div className="year">2025 rok</div>
                                        <div className="pronunciation">"twenty twenty-five" /ˈtwenti ˈtwenti faɪv/</div>
                                        <div className="example">"planned for twenty twenty-five"</div>
                                    </div>
                                </div>
                            </div>

                            <div className="year-category">
                                <h3>4. Specjalne przypadki i pułapki</h3>
                                <div className="years-grid">
                                    <div className="year-example year-example--tricky">
                                        <div className="year">1000 rok</div>
                                        <div className="pronunciation">"one thousand" /wʌn ˈθaʊzənd/</div>
                                        <div className="example">"the year one thousand"</div>
                                        <div className="warning">🚫 NIE: "ten hundred"!</div>
                                    </div>
                                    <div className="year-example year-example--tricky">
                                        <div className="year">1029 rok</div>
                                        <div className="pronunciation">"ten twenty-nine" /ten ˈtwenti naɪn/</div>
                                        <div className="example">"in ten twenty-nine"</div>
                                    </div>
                                    <div className="year-example year-example--tricky">
                                        <div className="year">1200 rok</div>
                                        <div className="pronunciation">"twelve hundred" /twelv ˈhʌndrəd/</div>
                                        <div className="example">"around twelve hundred"</div>
                                        <div className="tip">💡 Lata 1100-1900 często jako "hundred"</div>
                                    </div>
                                    <div className="year-example year-example--tricky">
                                        <div className="year">1900 rok</div>
                                        <div className="pronunciation">"nineteen hundred" /ˌnaɪnˈtiːn ˈhʌndrəd/</div>
                                        <div className="example">"at the turn of nineteen hundred"</div>
                                    </div>
                                    <div className="year-example year-example--tricky">
                                        <div className="year">1905 rok</div>
                                        <div className="pronunciation">"nineteen oh-five" /ˌnaɪnˈtiːn əʊ faɪv/</div>
                                        <div className="tip">💡 "0" w środku = "oh" /əʊ/</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Zestawienie zasad */}
                        <div className="rules-summary">
                            <h3>📋 Podsumowanie zasad wymowy lat</h3>
                            <div className="rules-grid">
                                <div className="rule-item">
                                    <h4>1. Lata do 1999</h4>
                                    <p><strong>Dzielimy na dwie części</strong><br/>
                                        1492 = fourteen ninety-two<br/>
                                        1776 = seventeen seventy-six</p>
                                </div>
                                <div className="rule-item">
                                    <h4>2. Lata 2000-2009</h4>
                                    <p><strong>"Two thousand" + cyfra</strong><br/>
                                        2001 = two thousand (and) one<br/>
                                        🇬🇧 z "and", 🇺🇸 bez "and"</p>
                                </div>
                                <div className="rule-item">
                                    <h4>3. Lata 2010+</h4>
                                    <p><strong>Powrót do podziału</strong><br/>
                                        2015 = twenty fifteen<br/>
                                        2024 = twenty twenty-four</p>
                                </div>
                                <div className="rule-item">
                                    <h4>4. Okrągłe lata</h4>
                                    <p><strong>Często z "hundred"</strong><br/>
                                        1200 = twelve hundred<br/>
                                        1900 = nineteen hundred</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja wymowy dni */}
                    <section className="article__section">
                        <h2>Wymowa dni miesiąca 🗓️</h2>

                        <div className="pronunciation-overview">
                            <div className="pronunciation-card pronunciation-card--british">
                                <div className="pronunciation-card__header">
                                    <h3>🇬🇧 Wymowa brytyjska</h3>
                                    <span className="pronunciation-card__subtitle">"the [dzień] of [month]"</span>
                                </div>
                                <div className="pronunciation-card__content">
                                    <div className="pronunciation-example">
                                        <div className="written-form">25th December 2023</div>
                                        <div className="spoken-form">"the twenty-fifth of December twenty twenty-three"</div>
                                        <div className="phonetic">/ðə ˈtwenti fɪfθ əv dɪˈsembə ˈtwenti ˈtwenti θriː/</div>
                                        <div className="quick-tip">🎧 W mowie: "the twenny-fif-thə December"</div>
                                    </div>
                                </div>
                            </div>

                            <div className="pronunciation-card pronunciation-card--american">
                                <div className="pronunciation-card__header">
                                    <h3>🇺🇸 Wymowa amerykańska</h3>
                                    <span className="pronunciation-card__subtitle">"[month] [dzień]"</span>
                                </div>
                                <div className="pronunciation-card__content">
                                    <div className="pronunciation-example">
                                        <div className="written-form">December 25, 2023</div>
                                        <div className="spoken-form">"December twenty-fifth twenty twenty-three"</div>
                                        <div className="phonetic">/dɪˈsembər ˈtwenti fɪfθ ˈtwenti ˈtwenti θriː/</div>
                                        <div className="quick-tip">🎧 W mowie: "December twenny-fifth"</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja dialogów z latami */}
                    <section className="article__section">
                        <h2>Lata w rozmowach - praktyka 🗣️</h2>

                        <div className="conversation-examples">
                            <div className="conversation">
                                <h4>📞 Rozmowa o historii</h4>
                                <div className="dialogue">
                                    <div className="dialogue-line">
                                        <strong>A:</strong> "When was the Battle of Grunwald?"<br/>
                                        <em>"Kiedy była bitwa pod Grunwaldem?"</em>
                                    </div>
                                    <div className="dialogue-line">
                                        <strong>B:</strong> "In fourteen ten"<br/>
                                        <em>Wymowa: "in four-teen ten" (1410)</em>
                                    </div>
                                </div>
                            </div>

                            <div className="conversation">
                                <h4>💼 W biznesie</h4>
                                <div className="dialogue">
                                    <div className="dialogue-line">
                                        <strong>A:</strong> "When did the company start?"<br/>
                                        <em>"Kiedy firma się rozpoczęła?"</em>
                                    </div>
                                    <div className="dialogue-line">
                                        <strong>B:</strong> "Back in nineteen ninety-nine"<br/>
                                        <em>Wymowa: "back in nine-teen nine-ty nine" (1999)</em>
                                    </div>
                                </div>
                            </div>

                            <div className="conversation">
                                <h4>🎓 Na studiach</h4>
                                <div className="dialogue">
                                    <div className="dialogue-line">
                                        <strong>A:</strong> "I was born in two thousand and five"<br/>
                                        <em>Wymowa: "two thou-sand and five" (2005)</em>
                                    </div>
                                    <div className="dialogue-line">
                                        <strong>B:</strong> "Oh, so you're from the twenty-tens generation!"<br/>
                                        <em>Wymowa: "twen-ty teens" (lata 2010-2019)</em>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja najczęstszych błędów */}
                    <section className="article__section">
                        <h2>Najczęstsze błędy w wymowie lat ❌</h2>

                        <div className="common-mistakes">
                            <div className="mistake-item">
                                <div className="mistake">❌ "Two thousand nine" (dla 2009)</div>
                                <div className="correction">✅ <strong>Brytyjski:</strong> "two thousand and nine"<br/>
                                    ✅ <strong>Amerykański:</strong> "two thousand nine"</div>
                            </div>
                            <div className="mistake-item">
                                <div className="mistake">❌ "Twenty zero five" (dla 2005)</div>
                                <div className="correction">✅ "Two thousand and five"<br/>
                                    <em>Dopiero od 2010 mówimy "twenty..."</em></div>
                            </div>
                            <div className="mistake-item">
                                <div className="mistake">❌ "One thousand nine hundred ninety-nine" (dla 1999)</div>
                                <div className="correction">✅ "Nineteen ninety-nine"<br/>
                                    <em>Tylko w bardzo formalnych kontekstach</em></div>
                            </div>
                            <div className="mistake-item">
                                <div className="mistake">❌ "Twenty twenty four" (bez łącznika)</div>
                                <div className="correction">✅ "Twenty twenty-four"<br/>
                                    <em>Wymawiamy z lekką przerwą między częściami</em></div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja ćwiczeń wymowy */}
                    <section className="article__section">
                        <h2>Ćwicz wymowę lat! 🗣️</h2>

                        <div className="pronunciation-exercises">
                            <div className="exercise-card">
                                <h4>🎯 Ćwiczenie 1: Przełomowe daty historyczne</h4>
                                <div className="exercise-content">
                                    <p><strong>1066</strong> - ten sixty-six (bitwa pod Hastings)</p>
                                    <p><strong>1776</strong> - seventeen seventy-six (Deklaracja Niepodległości USA)</p>
                                    <p><strong>1914</strong> - nineteen fourteen (początek I wojny światowej)</p>
                                    <p><strong>1989</strong> - nineteen eighty-nine (upadek muru berlińskiego)</p>
                                    <div className="tip">💡 Powtarzaj na głos każdego dnia!</div>
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>🎯 Ćwiczenie 2: Twoje ważne daty</h4>
                                <div className="exercise-content">
                                    <p>Wymów na głos:</p>
                                    <ul>
                                        <li>Rok twoich urodzin: __________</li>
                                        <li>Rok ukończenia szkoły: __________</li>
                                        <li>Obecny rok: __________</li>
                                        <li>Rok ważnego wydarzenia: __________</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🎯 Opanuj wymowę dat i lat!</h3>
                            <p>Pobierz nasze specjalne nagrania z wymową lat od native speakerów i pozbądź się wątpliwości!</p>
                            <div className="action-buttons">
                                <Link to="/cwiczenia/wymowa-lat" className="btn btn--primary">Ćwiczenia wymowy lat</Link>
                                <Link to="/nagrania/lata" className="btn btn--secondary">Nagrania audio</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#wymowa</span>
                            <span className="tag">#daty</span>
                            <span className="tag">#lata</span>
                            <span className="tag">#brytyjskivsamerykanski</span>
                            <span className="tag">#naukaangielskiego</span>
                        </div>
                        <div className="article__update">
                            <p><strong>Ostatnia aktualizacja:</strong> Grudzień 2024</p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default DatesInEnglish;