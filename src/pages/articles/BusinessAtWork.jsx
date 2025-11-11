import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleStyles.css';

const BusinessAtWork = () => {
    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/artykuly" className="article__breadcrumb-link">Artykuły</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Angielski w pracy</span>
                    </nav>
                    <h1 className="article__title">Angielski w pracy i biznesie 💼</h1>
                    <p className="article__intro">E-maile, prezentacje, rozmowy telefoniczne i spotkania biznesowe - opanuj kluczowe umiejętności komunikacyjne w środowisku zawodowym</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 10 minut</span>
                        <span className="article__level">🎯 Dla: Poziom B1-C2</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>💡 Dlaczego angielski biznesowy jest ważny?</h3>
                            <p><strong>85% międzynarodowych firm używa angielskiego jako języka komunikacji.</strong> Opanowanie biznesowego angielskiego otwiera drzwi do globalnych możliwości zawodowych i rozwoju kariery.</p>
                        </div>

                        <h2>Kluczowe obszary komunikacji biznesowej</h2>
                        <div className="points-grid">
                            <div className="point-card">
                                <h4>📧 E-maile biznesowe</h4>
                                <p>Struktura, formalny język i profesjonalne zwroty</p>
                            </div>
                            <div className="point-card">
                                <h4>🎤 Prezentacje</h4>
                                <p>Przekonywanie, opowiadanie historii i angażowanie publiczności</p>
                            </div>
                            <div className="point-card">
                                <h4>📞 Rozmowy telefoniczne</h4>
                                <p>Komunikacja bez wizualnych wskazówek i potwierdzenia zrozumienia</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja emaili biznesowych */}
                    <section className="article__section">
                        <h2>E-maile biznesowe - profesjonalna komunikacja 📧</h2>

                        <div className="cefr-overview">
                            <div className="cefr-level cefr-level--basic">
                                <div className="cefr-level__header">
                                    <h3>Struktura emaila</h3>
                                    <span className="cefr-level__subtitle">Profesjonalny szablon</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item"><strong>Subject:</strong> Clear and concise</div>
                                    <div className="cefr-item"><strong>Salutation:</strong> Dear Mr./Ms. [Last Name]</div>
                                    <div className="cefr-item"><strong>Opening:</strong> Reference to previous contact</div>
                                    <div className="cefr-item"><strong>Body:</strong> Clear purpose and details</div>
                                    <div className="cefr-item"><strong>Closing:</strong> Call to action</div>
                                    <div className="cefr-item"><strong>Signature:</strong> Professional closing</div>
                                </div>
                                <div className="tool-recommendation">
                                    <strong>Przykład:</strong> "Dear Mr. Smith, I am writing to follow up on our meeting..."
                                </div>
                            </div>

                            <div className="cefr-level cefr-level--independent">
                                <div className="cefr-level__header">
                                    <h3>Kluczowe zwroty</h3>
                                    <span className="cefr-level__subtitle">Formalne wyrażenia</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item"><strong>I am writing to...</strong> - Piszę w celu...</div>
                                    <div className="cefr-item"><strong>Could you please...?</strong> - Czy mógłby Pan/Pani...</div>
                                    <div className="cefr-item"><strong>I would appreciate if...</strong> - Byłbym wdzięczny gdyby...</div>
                                    <div className="cefr-item"><strong>Please find attached...</strong> - W załączniku znajdzie Pan/Pani...</div>
                                    <div className="cefr-item"><strong>Looking forward to...</strong> - Z niecierpliwością czekam na...</div>
                                    <div className="cefr-item"><strong>Best regards</strong> - Z poważaniem</div>
                                </div>
                                <div className="tool-recommendation">
                                    <Link to="/writing/email" className="article__breadcrumb-link">Ćwicz pisanie emaili w naszej sekcji</Link>
                                </div>
                            </div>

                            <div className="cefr-level cefr-level--proficient">
                                <div className="cefr-level__header">
                                    <h3>Częste błędy</h3>
                                    <span className="cefr-level__subtitle">Czego unikać</span>
                                </div>
                                <div className="cefr-level__items">
                                    <div className="cefr-item"><strong>❌ Hi!</strong> (zbyt nieformalne)</div>
                                    <div className="cefr-item"><strong>❌ I want...</strong> (zamiast I would like)</div>
                                    <div className="cefr-item"><strong>❌ Send me...</strong> (zbyt bezpośrednie)</div>
                                    <div className="cefr-item"><strong>❌ Thanks</strong> (zamiast Thank you)</div>
                                    <div className="cefr-item"><strong>❌ No subject line</strong></div>
                                    <div className="cefr-item"><strong>❌ Overly long emails</strong></div>
                                </div>
                                <div className="tool-recommendation">
                                    <strong>Zapamiętaj:</strong> Professionalism and clarity are key
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja prezentacji */}
                    <section className="article__section">
                        <h2>Prezentacje biznesowe - jak skutecznie prezentować 🎤</h2>

                        <div className="level-detail level-detail--b1">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">Struktura</span>
                                <h3>Elementy dobrej prezentacji</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Kluczowe części prezentacji:</h4>
                                <ul className="skill-list">
                                    <li>✅ <strong>Introduction</strong> - Hook and agenda</li>
                                    <li>✅ <strong>Main points</strong> - 3-5 key messages</li>
                                    <li>✅ <strong>Examples/Data</strong> - Supporting evidence</li>
                                    <li>✅ <strong>Conclusion</strong> - Summary and call to action</li>
                                    <li>✅ <strong>Q&A</strong> - Engaging with audience</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Przykład rozpoczęcia:</strong><br/>
                                    "Good morning everyone. Thank you for joining me today. My presentation will cover three main areas: first, our current market position; second, the challenges we're facing; and finally, our proposed strategy for growth."
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">10-15</span>
                                        <span className="stat-small__label">slajdów max</span>
                                    </div>
                                    <div className="stat-small">
                                        <span className="stat-small__value">20-30</span>
                                        <span className="stat-small__label">minut prezentacji</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="level-detail level-detail--c1">
                            <div className="level-detail__header">
                                <span className="level-detail__badge">Język</span>
                                <h3>Zwroty prezentacyjne</h3>
                            </div>
                            <div className="level-detail__content">
                                <h4>Przydatne wyrażenia:</h4>
                                <ul className="skill-list">
                                    <li>✅ <strong>"I'd like to begin by..."</strong> - Chciałbym rozpocząć od...</li>
                                    <li>✅ <strong>"Moving on to..."</strong> - Przechodząc do...</li>
                                    <li>✅ <strong>"As you can see from this chart..."</strong> - Jak widać na tym wykresie...</li>
                                    <li>✅ <strong>"To sum up..."</strong> - Podsumowując...</li>
                                    <li>✅ <strong>"I'd be happy to answer any questions."</strong> - Chętnie odpowiem na pytania.</li>
                                </ul>
                                <div className="level-example">
                                    <strong>Przykład przejścia:</strong><br/>
                                    "Now that we've looked at the current situation, let's move on to discuss our future plans."
                                </div>
                                <div className="level-stats">
                                    <div className="stat-small">
                                        <span className="stat-small__value">70%</span>
                                        <span className="stat-small__label">non-verbal communication</span>
                                    </div>
                                    <div className="stat-small">
                                        <Link to="/slownictwo/business-english" className="article__breadcrumb-link">Business vocabulary</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja rozmów telefonicznych */}
                    <section className="article__section">
                        <h2>Rozmowy telefoniczne - profesjonalna komunikacja 📞</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>📞 Rozpoczęcie rozmowy</h4>
                                <ul>
                                    <li><strong>"Hello, this is [Your Name] from [Company]"</strong></li>
                                    <li><strong>"Good morning, may I speak with [Name]?"</strong></li>
                                    <li><strong>"I'm calling regarding..."</strong></li>
                                    <li><strong>"Thank you for taking my call."</strong></li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🔄 Podczas rozmowy</h4>
                                <ul>
                                    <li><strong>"Could you please repeat that?"</strong></li>
                                    <li><strong>"Let me make sure I understand correctly..."</strong></li>
                                    <li><strong>"Could you spell that for me?"</strong></li>
                                    <li><strong>"Just a moment, please."</strong></li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>✅ Zakończenie rozmowy</h4>
                                <ul>
                                    <li><strong>"Thank you for your time."</strong></li>
                                    <li><strong>"I'll follow up with an email."</strong></li>
                                    <li><strong>"Looking forward to hearing from you."</strong></li>
                                    <li><strong>"Have a great day."</strong></li>
                                </ul>
                            </div>
                        </div>

                        <div className="tip-box tip-box--important">
                            <h3>💡 Ważne wskazówki dla rozmów telefonicznych</h3>
                            <p><strong>Zawsze potwierdzaj zrozumienie i proś o powtórzenie, jeśli czegoś nie usłyszysz.</strong> W rozmowie telefonicznej nie masz wskazówek wizualnych, więc aktywne słuchanie jest kluczowe.</p>
                        </div>
                    </section>

                    {/* Sekcja spotkań biznesowych */}
                    <section className="article__section">
                        <h2>Spotkania biznesowe - efektywna współpraca 🤝</h2>

                        <div className="comparison-table">
                            <h4>Zwroty na spotkaniach biznesowych</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th>Sytuacja</th>
                                    <th>Przydatne zwroty</th>
                                    <th>Polskie znaczenie</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Przedstawianie pomysłu</td>
                                    <td>"I'd like to propose..."</td>
                                    <td>Chciałbym zaproponować...</td>
                                </tr>
                                <tr>
                                    <td>Wyrażanie zgody</td>
                                    <td>"I completely agree with..."</td>
                                    <td>Całkowicie się zgadzam z...</td>
                                </tr>
                                <tr>
                                    <td>Łagodna dezaprobata</td>
                                    <td>"I see your point, but..."</td>
                                    <td>Rozumiem Twój punkt widzenia, ale...</td>
                                </tr>
                                <tr>
                                    <td>Prośba o wyjaśnienie</td>
                                    <td>"Could you elaborate on that?"</td>
                                    <td>Czy mógłbyś to rozwinąć?</td>
                                </tr>
                                <tr>
                                    <td>Podsumowanie</td>
                                    <td>"So, to summarize..."</td>
                                    <td>Podsumowując...</td>
                                </tr>
                                <tr>
                                    <td>Przydzielanie zadań</td>
                                    <td>"Who will be responsible for...?"</td>
                                    <td>Kto będzie odpowiedzialny za...?</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Sekcja negocjacji */}
                    <section className="article__section">
                        <h2>Negocjacje biznesowe - sztuka kompromisu 💰</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>💬 Rozpoczęcie negocjacji</h4>
                                <ul>
                                    <li><strong>"We're looking for a win-win solution."</strong></li>
                                    <li><strong>"What are your main concerns?"</strong></li>
                                    <li><strong>"Let's find common ground."</strong></li>
                                    <li><strong>"I understand your position."</strong></li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🔄 Proponowanie i odpowiadanie</h4>
                                <ul>
                                    <li><strong>"We could offer..."</strong></li>
                                    <li><strong>"What if we...?"</strong></li>
                                    <li><strong>"That's a bit beyond our budget."</strong></li>
                                    <li><strong>"Let me check what we can do."</strong></li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>✅ Zakończenie negocjacji</h4>
                                <ul>
                                    <li><strong>"I think we have a deal."</strong></li>
                                    <li><strong>"Let's draft the agreement."</strong></li>
                                    <li><strong>"Looking forward to working together."</strong></li>
                                    <li><strong>"This has been very productive."</strong></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja small talk */}
                    <section className="article__section">
                        <h2>Small talk - budowanie relacji ☕</h2>

                        <div className="points-grid">
                            <div className="point-card">
                                <h4>🎯 Bezpieczne tematy</h4>
                                <p>Podróże, hobby, kultura, sport, neutralne aktualności</p>
                            </div>
                            <div className="point-card">
                                <h4>🚫 Tematy do unikania</h4>
                                <p>Polityka, religia, pieniądze, problemy osobiste</p>
                            </div>
                            <div className="point-card">
                                <h4>💡 Przydatne zwroty</h4>
                                <p>"How was your weekend?", "Have you been to...?", "What do you think about...?"</p>
                            </div>
                        </div>

                        <div className="comparison-table">
                            <h4>Przykładowe rozmowy small talk</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th>Sytuacja</th>
                                    <th>Pytanie</th>
                                    <th>Odpowiedź</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Przed spotkaniem</td>
                                    <td>"How was your weekend?"</td>
                                    <td>"It was great, thanks! I went hiking. How about you?"</td>
                                </tr>
                                <tr>
                                    <td>Przerwa kawowa</td>
                                    <td>"Have you seen any good movies lately?"</td>
                                    <td>"Yes, I saw [movie] recently. I'd recommend it!"</td>
                                </tr>
                                <tr>
                                    <td>Konferencja</td>
                                    <td>"Is this your first time in [city]?"</td>
                                    <td>"No, I've been here before, but it's been a while."</td>
                                </tr>
                                <tr>
                                    <td>Spotkanie networking</td>
                                    <td>"What brings you to this event?"</td>
                                    <td>"I'm interested in learning about [topic] and meeting people in the industry."</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Sekcja rozwoju umiejętności */}
                    <section className="article__section">
                        <h2>Jak rozwijać angielski biznesowy? 📈</h2>

                        <div className="comparison-table">
                            <h4>Plan rozwoju - 30 dni</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th>Tydzień</th>
                                    <th>Umiejętność</th>
                                    <th>Ćwiczenia</th>
                                    <th>Cel</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>E-maile biznesowe</td>
                                    <td>Pisanie 3 emaili dziennie</td>
                                    <td>Automatyczne używanie formalnych zwrotów</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Rozmowy telefoniczne</td>
                                    <td>Odtwarzanie scenek, nagrywanie się</td>
                                    <td>Płynność w komunikacji telefonicznej</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Prezentacje</td>
                                    <td>Przygotowanie 5-minutowej prezentacji</td>
                                    <td>Umiejętność prezentowania w języku angielskim</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Spotkania i negocjacje</td>
                                    <td>Uczestnictwo w spotkaniach, role-playing</td>
                                    <td>Aktywny udział w dyskusjach biznesowych</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Sekcja zasobów */}
                    <section className="article__section">
                        <h2>Zasoby do nauki angielskiego biznesowego 🛠️</h2>

                        <div className="application-cards">
                            <div className="application-card">
                                <h4>📚 Nasze materiały</h4>
                                <ul>
                                    <li><Link to="/slownictwo/business-english" className="article__breadcrumb-link">Słownictwo biznesowe</Link></li>
                                    <li><Link to="/writing/email" className="article__breadcrumb-link">Szablony emaili</Link></li>
                                    <li><Link to="/cwiczenia/slownictwo/business-english" className="article__breadcrumb-link">Ćwiczenia biznesowe</Link></li>
                                    <li><Link to="/materialy" className="article__breadcrumb-link">Dodatkowe materiały</Link></li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>🌐 Polecane strony</h4>
                                <ul>
                                    <li><strong>BBC Business English</strong> - Kursy i materiały</li>
                                    <li><strong>Business English Pod</strong> - Podcasty i lekcje</li>
                                    <li><strong>Harvard Business Review</strong> - Artykuły biznesowe</li>
                                    <li><strong>Wall Street Journal</strong> - Biznesowy język angielski</li>
                                </ul>
                            </div>

                            <div className="application-card">
                                <h4>📱 Aplikacje</h4>
                                <ul>
                                    <li><strong>Babbel Business English</strong></li>
                                    <li><strong>FluentU Business</strong></li>
                                    <li><strong>Business English Test</strong></li>
                                    <li><strong>English for Business</strong></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🚀 Rozwijaj swój angielski biznesowy już dziś!</h3>
                            <p>Wybierz jeden obszar z tego artykułu i ćwicz go przez najbliższy tydzień. Pamiętaj - regularna praktyka w autentycznych sytuacjach przynosi najlepsze efekty!</p>
                            <div className="action-buttons">
                                <Link to="/slownictwo/business-english" className="btn btn--primary">Słownictwo biznesowe</Link>
                                <Link to="/writing/email" className="btn btn--secondary">Ćwicz e-maile</Link>
                                <Link to="/cwiczenia/slownictwo/business-english" className="btn btn--outline">Test biznesowy</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#businessenglish</span>
                            <span className="tag">#angielskibiznesowy</span>
                            <span className="tag">#praca</span>
                            <span className="tag">#kariera</span>
                            <span className="tag">#emaile</span>
                            <span className="tag">#prezentacje</span>
                            <span className="tag">#rozmowytelefoniczne</span>
                            <span className="tag">#negocjacje</span>
                        </div>

                        {/* UKRYTA SEKCJA SEO - NIE WIDOCZNA DLA UŻYTKOWNIKÓW */}
                        <div style={{display: 'none'}} aria-hidden="true">
                            <p>Angielski w pracy i biznesie, business English, angielski biznesowy, e-maile po angielsku, prezentacje po angielsku, rozmowy telefoniczne po angielsku, spotkania biznesowe po angielsku, negocjacje po angielsku, słownictwo biznesowe angielski, zwroty biznesowe angielski, komunikacja w pracy po angielsku, angielski zawodowy, kariera międzynarodowa</p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default BusinessAtWork;