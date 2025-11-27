import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import useDocumentMeta from '../../useDocumentMeta';
import './ArticleStyles.css';

function getMetaTitle(lang) {
    const baseTitle = lang === 'pl'
        ? 'Jak pisać po angielsku - E-maile, eseje, notatki i blogi'
        : 'How to Write in English - Emails, Essays, Notes and Blogs'

    return `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang) {
    const baseDescription = {
        pl: 'Kompletny przewodnik po pisaniu po angielsku. Naucz się pisać profesjonalne e-maile, eseje akademickie, skuteczne notatki i angażujące blogi.',
        en: 'Complete guide to writing in English. Learn to write professional emails, academic essays, effective notes and engaging blogs.'
    }

    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang) {
    return lang === 'pl'
        ? 'https://angloboost.pl/pl/artykuly/jak-pisac-po-angielsku'
        : 'https://angloboost.pl/en/articles/how-to-write-in-english'
}

const WritingEnglish = () => {
    const { lang } = useLanguage()

    useDocumentMeta({
        title: getMetaTitle(lang),
        description: getMetaDescription(lang),
        canonical: getCanonicalUrl(lang),
        og: {
            title: getMetaTitle(lang),
            description: getMetaDescription(lang),
            image: 'https://angloboost.pl/writing-social.png',
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
                        <span className="article__breadcrumb-current">Pisanie po angielsku</span>
                    </nav>
                    <h1 className="article__title">Jak pisać w języku angielskim ✍️</h1>
                    <p className="article__intro">E-maile, eseje, notatki, blogi - opanuj sztukę skutecznego pisania w różnych formatach i sytuacjach</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 11 minut</span>
                        <span className="article__level">🎯 Dla: Poziom A2-C2</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>💡 Dlaczego pisanie jest kluczową umiejętnością?</h3>
                            <p><strong>Pisanie to najczęściej używana forma komunikacji w środowisku akademickim i zawodowym.</strong> Dobre umiejętności pisarskie otwierają drzwi do kariery międzynarodowej, studiów za granicą i skutecznej komunikacji online.</p>
                        </div>

                        <div className="reality-check">
                            <div className="reality-item">
                                <h4>📈 Statystyki pisania</h4>
                                <ul>
                                    <li><strong>87%</strong> komunikacji biznesowej odbywa się na piśmie</li>
                                    <li><strong>65%</strong> firm odrzuca CV z błędami językowymi</li>
                                    <li><strong>3x</strong> szybciej rozwijasz słownictwo przez pisanie</li>
                                    <li><strong>50%</strong> oceny na egzaminach to zadania pisemne</li>
                                </ul>
                            </div>
                            <div className="reality-item">
                                <h4>🎯 Korzyści z dobrego pisania</h4>
                                <ul>
                                    <li>Lepsze oceny na studiach i egzaminach</li>
                                    <li>Większe szanse na awans zawodowy</li>
                                    <li>Skuteczniejsza komunikacja online</li>
                                    <li>Większa pewność siebie w kontaktach międzynarodowych</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja formatów pisania */}
                    <section className="article__section">
                        <h2>Formalne i nieformalne formaty pisania 📝</h2>

                        <div className="education-levels">
                            <div className="edu-level">
                                <div className="edu-level__header">
                                    <h3>📧 E-maile</h3>
                                    <div className="edu-level__years">Biznes & Codzienne</div>
                                </div>
                                <div className="edu-level__content">
                                    <div className="level-expectation">
                                        <h4>Struktura:</h4>
                                        <p>Subject → Salutation → Body → Closing → Signature</p>
                                        <div className="cefr-level-badge">A2-C2</div>
                                    </div>
                                    <div className="level-reality">
                                        <h4>Kluczowe elementy:</h4>
                                        <ul>
                                            <li>Jasny temat w subject line</li>
                                            <li>Odpowiedni stopień formalności</li>
                                            <li>Krótkie, zwięzłe akapity</li>
                                            <li>Professional closing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="edu-level">
                                <div className="edu-level__header">
                                    <h3>📄 Eseje akademickie</h3>
                                    <div className="edu-level__years">Formalne</div>
                                </div>
                                <div className="edu-level__content">
                                    <div className="level-expectation">
                                        <h4>Struktura:</h4>
                                        <p>Introduction → Body Paragraphs → Conclusion</p>
                                        <div className="cefr-level-badge">B1-C2</div>
                                    </div>
                                    <div className="level-reality">
                                        <h4>Kluczowe elementy:</h4>
                                        <ul>
                                            <li>Thesis statement w introduction</li>
                                            <li>Topic sentences w każdym akapicie</li>
                                            <li>Evidence i examples</li>
                                            <li>Logical flow of ideas</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="edu-level">
                                <div className="edu-level__header">
                                    <h3>📝 Notatki i blogi</h3>
                                    <div className="edu-level__years">Nieformalne</div>
                                </div>
                                <div className="edu-level__content">
                                    <div className="level-expectation">
                                        <h4>Struktura:</h4>
                                        <p>Flexible → Personal → Engaging</p>
                                        <div className="cefr-level-badge">A2-B2</div>
                                    </div>
                                    <div className="level-reality">
                                        <h4>Kluczowe elementy:</h4>
                                        <ul>
                                            <li>Personal voice i opinie</li>
                                            <li>Conversational tone</li>
                                            <li>Krótkie akapity</li>
                                            <li>Engaging openings</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja emaili */}
                    <section className="article__section">
                        <h2>E-maile - profesjonalna komunikacja 📧</h2>

                        <div className="system-problems">
                            <div className="problem-card">
                                <h4>❌ Typowe błędy w emailach</h4>
                                <p>Zbyt nieformalny język, brak struktury, błędy gramatyczne, niejasny cel wiadomości</p>
                                <div className="problem-stat">
                                    <span className="stat-number">73%</span>
                                    <span className="stat-label">firm odrzuca nieprofesjonalne emaile</span>
                                </div>
                            </div>
                            <div className="problem-card">
                                <h4>✅ Rozwiązania</h4>
                                <p>Używaj szablonów, sprawdzaj gramatykę, utrzymuj profesjonalny ton, bądź zwięzły</p>
                                <div className="problem-stat">
                                    <span className="stat-number">40%</span>
                                    <span className="stat-label">wyższa skuteczność komunikacji</span>
                                </div>
                            </div>
                        </div>

                        <div className="strategy-cards">
                            <div className="strategy-card">
                                <h4>🎯 Formalny email biznesowy</h4>
                                <div className="strategy-tips">
                                    <div className="tip">
                                        <strong>Subject:</strong> Clear and specific - "Meeting Request: Project Alpha Discussion"
                                    </div>
                                    <div className="tip">
                                        <strong>Salutation:</strong> "Dear Mr./Ms. [Last Name],"
                                    </div>
                                    <div className="tip">
                                        <strong>Opening:</strong> "I am writing to inquire about..." or "Thank you for..."
                                    </div>
                                    <div className="tip">
                                        <strong>Body:</strong> Short paragraphs, bullet points for clarity
                                    </div>
                                    <div className="tip">
                                        <strong>Closing:</strong> "I look forward to your response."
                                    </div>
                                    <div className="tip">
                                        <strong>Signature:</strong> "Best regards," + Full Name + Position
                                    </div>
                                </div>
                                <div className="strategy-benefit">
                                    💼 Zwiększa profesjonalizm i skuteczność komunikacji
                                </div>
                            </div>

                            <div className="strategy-card">
                                <h4>😊 Nieformalny email do znajomych</h4>
                                <div className="strategy-tips">
                                    <div className="tip">
                                        <strong>Subject:</strong> Casual - "Catching up" or "Quick question"
                                    </div>
                                    <div className="tip">
                                        <strong>Salutation:</strong> "Hi [First Name]," or "Hello there!"
                                    </div>
                                    <div className="tip">
                                        <strong>Opening:</strong> "Hope you're doing well!" or "How have you been?"
                                    </div>
                                    <div className="tip">
                                        <strong>Body:</strong> Conversational, can use contractions
                                    </div>
                                    <div className="tip">
                                        <strong>Closing:</strong> "Talk soon!" or "Looking forward to hearing from you!"
                                    </div>
                                    <div className="tip">
                                        <strong>Signature:</strong> "Cheers," or "Best," + First Name
                                    </div>
                                </div>
                                <div className="strategy-benefit">
                                    🤝 Buduje relacje i utrzymuje przyjazny ton
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja esejów */}
                    <section className="article__section">
                        <h2>Eseje akademickie - struktura i styl 📚</h2>

                        <div className="gap-filling">
                            <div className="gap-card">
                                <h4>🎓 Introduction Paragraph</h4>
                                <div className="solutions">
                                    <div className="solution-item">
                                        <h5>Hook (1-2 zdania)</h5>
                                        <p>Przyciąga uwagę czytelnika: "In today's digital age, the way we communicate has fundamentally transformed..."</p>
                                    </div>
                                    <div className="solution-item">
                                        <h5>Background (2-3 zdania)</h5>
                                        <p>Daje kontekst: "This shift has raised important questions about the impact of technology on interpersonal relationships..."</p>
                                    </div>
                                    <div className="solution-item">
                                        <h5>Thesis Statement (1 zdanie)</h5>
                                        <p>Główna teza: "This essay will argue that while digital communication offers unprecedented connectivity, it also presents significant challenges to meaningful human interaction."</p>
                                    </div>
                                </div>
                            </div>

                            <div className="gap-card">
                                <h4>📊 Body Paragraphs</h4>
                                <div className="solutions">
                                    <div className="solution-item">
                                        <h5>Topic Sentence</h5>
                                        <p>"One significant advantage of digital communication is its ability to connect people across geographical boundaries."</p>
                                    </div>
                                    <div className="solution-item">
                                        <h5>Evidence & Examples</h5>
                                        <p>"For instance, video conferencing platforms like Zoom have enabled families separated by oceans to maintain close relationships..."</p>
                                    </div>
                                    <div className="solution-item">
                                        <h5>Analysis</h5>
                                        <p>"This demonstrates how technology can enhance rather than replace traditional forms of communication when used intentionally."</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="weekly-plan">
                            <div className="plan-day">
                                <h4>Day 1: Research</h4>
                                <ul>
                                    <li>Zbierz materiały źródłowe</li>
                                    <li>Zrób notatki</li>
                                    <li>Stwórz outline</li>
                                </ul>
                            </div>
                            <div className="plan-day">
                                <h4>Day 2: Draft</h4>
                                <ul>
                                    <li>Napisz introduction</li>
                                    <li>Szkic body paragraphs</li>
                                    <li>Draft conclusion</li>
                                </ul>
                            </div>
                            <div className="plan-day">
                                <h4>Day 3: Revise</h4>
                                <ul>
                                    <li>Sprawdź strukturę</li>
                                    <li>Ulepsz transitions</li>
                                    <li>Dodaj evidence</li>
                                </ul>
                            </div>
                            <div className="plan-day plan-day--weekend">
                                <h4>Day 4: Polish</h4>
                                <ul>
                                    <li>Sprawdź gramatykę</li>
                                    <li>Formatowanie</li>
                                    <li>Final proofread</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja notatek i blogów */}
                    <section className="article__section">
                        <h2>Notatki i blogi - pisanie nieformalne 📱</h2>

                        <div className="time-investment">
                            <h4>⏰ Inwestycja czasowa w różne formaty</h4>
                            <div className="investment-breakdown">
                                <div className="investment-item">
                                    <div className="investment-label">Notatki osobiste</div>
                                    <div className="investment-bar">
                                        <div className="investment-fill" style={{width: '30%'}}></div>
                                    </div>
                                </div>
                                <div className="investment-item">
                                    <div className="investment-label">Posty na blogu</div>
                                    <div className="investment-bar">
                                        <div className="investment-fill" style={{width: '60%'}}></div>
                                    </div>
                                </div>
                                <div className="investment-item">
                                    <div className="investment-label">Eseje akademickie</div>
                                    <div className="investment-bar">
                                        <div className="investment-fill" style={{width: '85%'}}></div>
                                    </div>
                                </div>
                                <div className="investment-item">
                                    <div className="investment-label">Prace badawcze</div>
                                    <div className="investment-bar">
                                        <div className="investment-fill" style={{width: '100%'}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="investment-total">
                                <h5>🎯 Efektywne pisanie notatek:</h5>
                                <p>Używaj skrótów, symboli, kolorów i struktur wizualnych. Notatki mają być pomocą dla Ciebie, nie dziełem sztuki.</p>
                            </div>
                        </div>

                        <div className="parent-advice">
                            <div className="advice-card">
                                <h4>📝 Skuteczne notatki</h4>
                                <ul>
                                    <li>Używaj abbreviations: "info" zamiast "information"</li>
                                    <li>Stosuj bullet points zamiast pełnych zdań</li>
                                    <li>Twórz własne systemy skrótów</li>
                                    <li>Używaj kolorów do kategoryzacji</li>
                                    <li>Rysuj diagramy i mapy myśli</li>
                                </ul>
                            </div>
                            <div className="advice-card">
                                <h4>✍️ Pisanie blogów</h4>
                                <ul>
                                    <li>Pisz tak jak mówisz - conversational tone</li>
                                    <li>Używaj krótkich akapitów (2-3 zdania)</li>
                                    <li>Dodaj pytania retoryczne</li>
                                    <li>Stosuj podkreślenia i <strong>pogrubienia</strong></li>
                                    <li>Zakończ call-to-action</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja poprawy pisania */}
                    <section className="article__section">
                        <h2>Jak poprawić swoje pisanie? 🔧</h2>

                        <div className="success-journey">
                            <div className="journey-step">
                                <span>Etap 1: Podstawy</span>
                                Poprawa gramatyki i słownictwa
                            </div>
                            <div className="journey-step">
                                <span>Etap 2: Struktura</span>
                                Nauka organizacji tekstu
                            </div>
                            <div className="journey-step">
                                <span>Etap 3: Styl</span>
                                Rozwój własnego głosu
                            </div>
                            <div className="journey-step">
                                <span>Etap 4: Zaawansowane</span>
                                Perswazja i retoryka
                            </div>
                        </div>

                        <div className="advanced-techniques">
                            <div className="technique-card">
                                <h4>📚 Rozwijaj słownictwo</h4>
                                <p>Czytaj różne rodzaje tekstów i notuj ciekawe wyrażenia</p>
                                <div className="scenario-list">
                                    <div className="scenario">Artykuły naukowe</div>
                                    <div className="scenario">Blogi tematyczne</div>
                                    <div className="scenario">Literatura piękna</div>
                                    <div className="scenario">Gazety i magazyny</div>
                                </div>
                                <div className="idiom-examples">
                                    <div className="idiom">
                                        <span>Zamiast "very good":</span>
                                        <span>excellent, outstanding, remarkable</span>
                                    </div>
                                    <div className="idiom">
                                        <span>Zamiast "very bad":</span>
                                        <span>terrible, awful, disastrous</span>
                                    </div>
                                    <div className="idiom">
                                        <span>Zamiast "very important":</span>
                                        <span>crucial, essential, vital</span>
                                    </div>
                                </div>
                            </div>

                            <div className="technique-card">
                                <h4>🔄 Ćwicz regularnie</h4>
                                <p>Stwórz nawyk pisania - nawet krótkie sesje przynoszą efekty</p>
                                <div className="success-timeline">
                                    <div className="timeline-milestone">
                                        <span>Tydzień 1-2</span>
                                        Dziennik - 5 zdań dziennie
                                    </div>
                                    <div className="timeline-milestone">
                                        <span>Tydzień 3-4</span>
                                        Krótkie emaile i notatki
                                    </div>
                                    <div className="timeline-milestone">
                                        <span>Tydzień 5-6</span>
                                        Posty na blogu lub forum
                                    </div>
                                    <div className="timeline-milestone">
                                        <span>Tydzień 7-8</span>
                                        Krótkie eseje i raporty
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja narzędzi */}
                    <section className="article__section">
                        <h2>Niezbędne narzędzia do pisania 🛠️</h2>

                        <div className="cost-breakdown">
                            <div className="cost-item">
                                <h4>📱 Grammarly</h4>
                                <div className="cost-amount">Free/Paid</div>
                                <p>Korekta gramatyki i stylu</p>
                            </div>
                            <div className="cost-item">
                                <h4>🌐 Hemingway App</h4>
                                <div className="cost-amount">Free</div>
                                <p>Uproszczanie zdań</p>
                            </div>
                            <div className="cost-item">
                                <h4>📖 Thesaurus</h4>
                                <div className="cost-amount">Free</div>
                                <p>Synonimy i słownictwo</p>
                            </div>
                            <div className="cost-item cost-item--total">
                                <h4>🎯 Nasze zasoby</h4>
                                <div className="cost-amount">Free</div>
                                <p>Szablony i ćwiczenia</p>
                            </div>
                        </div>

                        <div className="action-box">
                            <h3>🚀 Zacznij pisać lepiej już dziś!</h3>
                            <p>Wybierz jeden format pisania i ćwicz go przez 10 minut dziennie. Pamiętaj - regularność jest kluczowa w rozwoju umiejętności pisarskich!</p>
                            <div className="action-buttons">
                                <Link to="/writing" className="btn btn--primary">Ćwiczenia Pisania</Link>
                                <Link to="/materialy/literatura" className="btn btn--secondary">Przykłady Tekstów</Link>
                                <Link to="/slownictwo" className="btn btn--outline">Słownictwo</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#pisanie</span>
                            <span className="tag">#email</span>
                            <span className="tag">#eseje</span>
                            <span className="tag">#notatki</span>
                            <span className="tag">#blogi</span>
                            <span className="tag">#writing</span>
                            <span className="tag">#kompozycja</span>
                            <span className="tag">#struktura</span>
                        </div>

                        {/* UKRYTA SEKCJA SEO */}
                        <div style={{display: 'none'}} aria-hidden="true">
                            <p>Jak pisać w języku angielskim, pisanie emaili po angielsku, eseje po angielsku, notatki po angielsku, blogi po angielsku, struktura eseju angielski, formalne emaile angielski, poprawa pisania po angielsku, nauka pisania angielski, zwroty do pisania, gramatyka angielska do pisania</p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default WritingEnglish;