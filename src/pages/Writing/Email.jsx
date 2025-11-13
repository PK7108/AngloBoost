import React from 'react';
import { Link } from 'react-router-dom';
import './WritingStyles.css';

const Email = () => {
    return (
        <article className="writing-article">
            <div className="writing-article__header">
                <div className="container">
                    <nav className="writing-article__breadcrumb">
                        <Link to="/pisanie" className="writing-article__breadcrumb-link">Pisanie</Link>
                        <span className="writing-article__breadcrumb-separator">/</span>
                        <span className="writing-article__breadcrumb-current">Email</span>
                    </nav>
                    <h1 className="writing-article__title">Jak pisać emaile po angielsku? 📧</h1>
                    <p className="writing-article__intro">Kompletny przewodnik po skutecznej komunikacji emailowej w języku angielskim - od biznesu po kontakty prywatne</p>
                    <div className="writing-article__meta">
                        <span className="writing-article__reading-time">⏱️ Czas czytania: 9 minut</span>
                        <span className="writing-article__level">🎯 Poziom: A2-C2</span>
                        <span className="writing-article__words">📝 Słowa kluczowe: email writing, business communication, professional emails</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="writing-article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="writing-article__section">
                        <div className="writing-tip-box">
                            <h3>💻 Czym jest email po angielsku?</h3>
                            <p><strong>Email communication</strong> to podstawowa forma współczesnej komunikacji pisemnej, łącząca elementy listu formalnego i nieformalnego. W zależności od kontekstu może być bardzo formalna, półformalna lub całkowicie nieformalna.</p>
                        </div>

                        <h2>Rodzaje emaili w zależności od kontekstu</h2>
                        <div className="writing-points-grid">
                            <div className="writing-point-card">
                                <h4>🏢 Biznesowy</h4>
                                <p>Korespondencja z klientami, współpracownikami, przełożonymi - wymaga profesjonalizmu</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>🎓 Akademicki</h4>
                                <p>Kontakt z wykładowcami, administracją uczelni - formalny ale przyjazny ton</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>👥 Półformalny</h4>
                                <p>Korespondencja ze znajomymi z pracy, regularnymi klientami - równowaga między profesjonalizmem a swobodą</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>👋 Nieformalny</h4>
                                <p>Wiadomości do przyjaciół, rodziny - swobodny język, skróty, emotikony</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja struktury emaila */}
                    <section className="writing-article__section">
                        <h2>Struktura profesjonalnego emaila 🏗️</h2>

                        <div className="email-structure">
                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">1</span>
                                    <h3>Temat (Subject Line)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Najważniejszy element emaila</h4>
                                    <ul>
                                        <li>✅ Krótki i konkretny (5-8 słów)</li>
                                        <li>✅ Opisuje zawartość wiadomości</li>
                                        <li>✅ Zawiera kluczowe informacje</li>
                                        <li>✅ Przyciąga uwagę odbiorcy</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Dobre przykłady:</strong><br/>
                                        "Meeting Request: Project Alpha"<br/>
                                        "Question About Invoice #12345"<br/>
                                        "Follow-up: Marketing Strategy"<br/>
                                        <strong>Złe przykłady:</strong><br/>
                                        "Hi" ❌<br/>
                                        "Important!" ❌<br/>
                                        "Please read this" ❌
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">2</span>
                                    <h3>Powitanie (Salutation)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Dostosowane do relacji</h4>
                                    <ul>
                                        <li>✅ <strong>Formalne:</strong> Dear Mr./Ms. [Last Name],</li>
                                        <li>✅ <strong>Półformalne:</strong> Dear [First Name],</li>
                                        <li>✅ <strong>Nieformalne:</strong> Hi [First Name], / Hello [First Name],</li>
                                        <li>✅ <strong>Grupowe:</strong> Dear Team, / Hello everyone,</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykłady:</strong><br/>
                                        "Dear Dr. Smith," (bardzo formalnie)<br/>
                                        "Dear Sarah," (półformalnie)<br/>
                                        "Hi John!" (nieformalnie)<br/>
                                        "Hello Marketing Team," (grupowo)
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">3</span>
                                    <h3>Wstęp (Opening)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Przejrzyste rozpoczęcie</h4>
                                    <ul>
                                        <li>✅ Przedstaw się (jeśli pierwszy kontakt)</li>
                                        <li>✅ Określ cel wiadomości</li>
                                        <li>✅ Odnieś się do poprzedniego kontaktu</li>
                                        <li>✅ Bądź zwięzły i konkretny</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykłady:</strong><br/>
                                        "I hope this email finds you well."<br/>
                                        "I'm writing to follow up on our conversation..."<br/>
                                        "My name is [Name] and I'm [Position] at [Company]."<br/>
                                        "Thank you for your prompt response."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">4</span>
                                    <h3>Główna treść (Body)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Jasno i logicznie</h4>
                                    <ul>
                                        <li>✅ Podziel na krótkie akapity</li>
                                        <li>✅ Używaj punktów dla list</li>
                                        <li>✅ Jedna główna idea na akapit</li>
                                        <li>✅ Zachowaj odpowiedni ton</li>
                                        <li>✅ Maksymalnie 3-4 akapity</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Dobre praktyki:</strong><br/>
                                        • Krótkie zdania<br/>
                                        • Czytelne formatowanie<br/>
                                        • White space między akapitami<br/>
                                        • Pogrubienie kluczowych informacji
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">5</span>
                                    <h3>Zakończenie (Closing)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Profesjonalne zakończenie</h4>
                                    <ul>
                                        <li>✅ Podsumuj najważniejsze punkty</li>
                                        <li>✅ Określ oczekiwane działania</li>
                                        <li>✅ Wyraź gotowość do dalszej komunikacji</li>
                                        <li>✅ Podpisz się pełnym imieniem i nazwiskiem</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykłady zakończeń:</strong><br/>
                                        "Best regards,"<br/>
                                        "Sincerely,"<br/>
                                        "Kind regards,"<br/>
                                        "Thank you,"<br/>
                                        <strong>Podpis:</strong><br/>
                                        "John Smith"<br/>
                                        "Marketing Manager"
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja tonu i stylu */}
                    <section className="writing-article__section">
                        <h2>Dostosowanie tonu i stylu 🎭</h2>

                        <div className="tone-guide">
                            <div className="tone-level">
                                <div className="tone-header">
                                    <h3>📊 Formalny</h3>
                                    <span className="tone-context">Klienci, przełożeni, pierwszy kontakt</span>
                                </div>
                                <div className="tone-content">
                                    <div className="do-dont">
                                        <div className="do">
                                            <h4>✅ Rob</h4>
                                            <ul>
                                                <li>Używaj pełnych form czasowników</li>
                                                <li>Stosuj formalne zwroty grzecznościowe</li>
                                                <li>Unikaj skrótów i potocyzmów</li>
                                                <li>Bądź szczegółowy i precyzyjny</li>
                                            </ul>
                                        </div>
                                        <div className="dont">
                                            <h4>❌ Unikaj</h4>
                                            <ul>
                                                <li>Skrótów (I'm, don't, can't)</li>
                                                <li>Emotikon i nadmiernych wykrzykników</li>
                                                <li>Potocznego słownictwa</li>
                                                <li>Zbytniego skracania wiadomości</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tone-example">
                                        <strong>Przykład:</strong> "Dear Mr. Johnson, I am writing to inquire about the status of our recent order..."
                                    </div>
                                </div>
                            </div>

                            <div className="tone-level">
                                <div className="tone-header">
                                    <h3>⚖️ Półformalny</h3>
                                    <span className="tone-context">Współpracownicy, staży klienci</span>
                                </div>
                                <div className="tone-content">
                                    <div className="do-dont">
                                        <div className="do">
                                            <h4>✅ Rob</h4>
                                            <ul>
                                                <li>Używaj imion</li>
                                                <li>Możesz używać podstawowych skrótów</li>
                                                <li>Zachowaj profesjonalizm ale bądź przyjazny</li>
                                                <li>Stosuj standardowe zwroty grzecznościowe</li>
                                            </ul>
                                        </div>
                                        <div className="dont">
                                            <h4>❌ Unikaj</h4>
                                            <ul>
                                                <li>Nadmiernej swobody</li>
                                                <li>Wewnętrznych żartów</li>
                                                <li>Zbyt wielu emotikon</li>
                                                <li>Potocznego slangu</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tone-example">
                                        <strong>Przykład:</strong> "Hi Sarah, I'm following up on our project discussion. Could you please send me the updated files?"
                                    </div>
                                </div>
                            </div>

                            <div className="tone-level">
                                <div className="tone-header">
                                    <h3>😊 Nieformalny</h3>
                                    <span className="tone-context">Przyjaciele, bliscy współpracownicy</span>
                                </div>
                                <div className="tone-content">
                                    <div className="do-dont">
                                        <div className="do">
                                            <h4>✅ Rob</h4>
                                            <ul>
                                                <li>Używaj swobodnego języka</li>
                                                <li>Stosuj skróty i potocyzmy</li>
                                                <li>Możesz używać emotikon</li>
                                                <li>Bądź bezpośredni i naturalny</li>
                                            </ul>
                                        </div>
                                        <div className="dont">
                                            <h4>❌ Unikaj</h4>
                                            <ul>
                                                <li>Nadmiernej formalności</li>
                                                <li>Szablonowych zwrotów</li>
                                                <li>Zbytniej oficjalności</li>
                                                <li>Niepotrzebnych szczegółów</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tone-example">
                                        <strong>Przykład:</strong> "Hey Mike! 😊 Quick question - do you have those reports ready? No rush, just checking in!"
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja zwrotów emailowych */}
                    <section className="writing-article__section">
                        <h2>Kluczowe zwroty emailowe 📋</h2>

                        <div className="email-phrases">
                            <div className="phrases-category">
                                <h3>🎯 Rozpoczęcie emaila</h3>
                                <div className="phrases-grid">
                                    <div className="phrase-item">
                                        <span className="phrase-english">I am writing to inquire about...</span>
                                        <span className="phrase-polish">Piszę, aby zapytać o...</span>
                                        <span className="phrase-level">Formalne</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">I'm reaching out to discuss...</span>
                                        <span className="phrase-polish">Zwracam się, aby omówić...</span>
                                        <span className="phrase-level">Półformalne</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Quick question about...</span>
                                        <span className="phrase-polish">Szybkie pytanie dotyczące...</span>
                                        <span className="phrase-level">Nieformalne</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Following up on our conversation...</span>
                                        <span className="phrase-polish">W nawiązaniu do naszej rozmowy...</span>
                                        <span className="phrase-level">Uniwersalne</span>
                                    </div>
                                </div>
                            </div>

                            <div className="phrases-category">
                                <h3>💼 Przekazywanie informacji</h3>
                                <div className="phrases-grid">
                                    <div className="phrase-item">
                                        <span className="phrase-english">Please find attached...</span>
                                        <span className="phrase-polish">W załączniku znajdą Państwo...</span>
                                        <span className="phrase-level">Formalne</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">I've attached the document...</span>
                                        <span className="phrase-polish">Załączyłem dokument...</span>
                                        <span className="phrase-level">Półformalne</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Here's the file you asked for...</span>
                                        <span className="phrase-polish">Oto plik, o który prosiłeś...</span>
                                        <span className="phrase-level">Nieformalne</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">As we discussed...</span>
                                        <span className="phrase-polish">Jak omawialiśmy...</span>
                                        <span className="phrase-level">Uniwersalne</span>
                                    </div>
                                </div>
                            </div>

                            <div className="phrases-category">
                                <h3>🤝 Prośby i pytania</h3>
                                <div className="phrases-grid">
                                    <div className="phrase-item">
                                        <span className="phrase-english">Could you please provide...?</span>
                                        <span className="phrase-polish">Czy mogliby Państwo dostarczyć...?</span>
                                        <span className="phrase-level">Formalne</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Can you send me...?</span>
                                        <span className="phrase-polish">Czy możesz mi przesłać...?</span>
                                        <span className="phrase-level">Półformalne</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Can you get me...?</span>
                                        <span className="phrase-polish">Możesz mi dać...?</span>
                                        <span className="phrase-level">Nieformalne</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">I would appreciate your feedback on...</span>
                                        <span className="phrase-polish">Będę wdzięczny za opinię na temat...</span>
                                        <span className="phrase-level">Uniwersalne</span>
                                    </div>
                                </div>
                            </div>

                            <div className="phrases-category">
                                <h3>📨 Zakończenie emaila</h3>
                                <div className="phrases-grid">
                                    <div className="phrase-item">
                                        <span className="phrase-english">I look forward to hearing from you.</span>
                                        <span className="phrase-polish">Z niecierpliwością czekam na odpowiedź.</span>
                                        <span className="phrase-level">Formalne</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Looking forward to your reply.</span>
                                        <span className="phrase-polish">Czekam na Twoją odpowiedź.</span>
                                        <span className="phrase-level">Półformalne</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Talk soon!</span>
                                        <span className="phrase-polish">Do usłyszenia!</span>
                                        <span className="phrase-level">Nieformalne</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Please let me know if you have any questions.</span>
                                        <span className="phrase-polish">Daj znać, jeśli masz pytania.</span>
                                        <span className="phrase-level">Uniwersalne</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Przykładowe emaile */}
                    <section className="writing-article__section">
                        <h2>Przykładowe emaile ✨</h2>

                        <div className="email-examples">
                            <div className="email-example">
                                <div className="email-header">
                                    <h3>📊 Email biznesowy (formalny)</h3>
                                    <div className="email-stats">
                                        <span className="stat">Temat: Meeting Request - Q3 Strategy</span>
                                        <span className="stat">Ton: Formalny</span>
                                        <span className="stat">Cel: Umówienie spotkania</span>
                                    </div>
                                </div>

                                <div className="email-content">
                                    <div className="email-meta">
                                        <strong>To:</strong> Robert Johnson <br/>
                                        <strong>Subject:</strong> Meeting Request: Q3 Marketing Strategy Discussion
                                    </div>

                                    <div className="email-body">
                                        <p><strong>Dear Mr. Johnson,</strong></p>

                                        <p>I hope this email finds you well.</p>

                                        <p>I am writing to request a meeting to discuss our Q3 marketing strategy. As we approach the next quarter, I believe it would be beneficial to align on our objectives and planned initiatives.</p>

                                        <p>The main points I would like to cover include:</p>
                                        <ul>
                                            <li>Review of Q2 campaign performance</li>
                                            <li>Budget allocation for Q3</li>
                                            <li>New market opportunities</li>
                                            <li>Team resource planning</li>
                                        </ul>

                                        <p>Would you be available sometime next week? I am flexible on Tuesday or Wednesday afternoon. Please let me know what time works best for you.</p>

                                        <p>I have attached the preliminary Q2 report for your review.</p>

                                        <p>Looking forward to your response.</p>

                                        <p><strong>Best regards,</strong><br/>
                                            Sarah Williams<br/>
                                            Marketing Director<br/>
                                            Innovate Solutions Inc.</p>
                                    </div>

                                    <div className="email-analysis">
                                        <p><strong>Analiza:</strong> Profesjonalny ton, konkretny temat, jasna struktura, określone oczekiwania, załącznik wspomniany odpowiednio.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="email-example">
                                <div className="email-header">
                                    <h3>👥 Email półformalny</h3>
                                    <div className="email-stats">
                                        <span className="stat">Temat: Project Update & Next Steps</span>
                                        <span className="stat">Ton: Półformalny</span>
                                        <span className="stat">Cel: Aktualizacja projektu</span>
                                    </div>
                                </div>

                                <div className="email-content">
                                    <div className="email-meta">
                                        <strong>To:</strong> Marketing Team <br/>
                                        <strong>Subject:</strong> Project Alpha: Weekly Update & Next Steps
                                    </div>

                                    <div className="email-body">
                                        <p><strong>Hi team,</strong></p>

                                        <p>Great work everyone on pushing Project Alpha forward this week! Here's a quick update on our progress:</p>

                                        <p><strong>Completed this week:</strong><br/>
                                            • Finalized the campaign visuals<br/>
                                            • Developed social media content calendar<br/>
                                            • Conducted initial user testing</p>

                                        <p><strong>Next week's priorities:</strong><br/>
                                            • Launch social media campaigns<br/>
                                            • Monitor initial engagement metrics<br/>
                                            • Prepare performance report</p>

                                        <p>Mike - could you please share the testing results by Monday?<br/>
                                            Anna - let's schedule a brief check-in on Tuesday to review the launch plan.</p>

                                        <p>Thanks for your hard work! Let me know if you have any questions.</p>

                                        <p><strong>Best,</strong><br/>
                                            David Chen<br/>
                                            Project Manager</p>
                                    </div>

                                    <div className="email-analysis">
                                        <p><strong>Analiza:</strong> Przyjazny ale profesjonalny ton, lista osiągnięć i planów, konkretne prośby do członków zespołu, pozytywne wzmocnienie.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja najlepszych praktyk */}
                    <section className="writing-article__section">
                        <h2>Najlepsze praktyki pisania emaili 🏆</h2>

                        <div className="best-practices">
                            <div className="practice-card">
                                <div className="practice-icon">📱</div>
                                <h4>Dostosuj do urządzenia mobilnego</h4>
                                <p>Większość emaili jest czytana na telefonach. Używaj krótkich akapitów, prostego formatowania i wyraźnych call-to-action.</p>
                            </div>

                            <div className="practice-card">
                                <div className="practice-icon">⏰</div>
                                <h4>Szacuj czas odpowiedzi</h4>
                                <p>Odpowiadaj w ciągu 24 godzin w dni robocze. Jeśli potrzebujesz więcej czasu, wyślij krótką wiadomość z informacją o spodziewanym terminie odpowiedzi.</p>
                            </div>

                            <div className="practice-card">
                                <div className="practice-icon">👁️</div>
                                <h4>Proofread przed wysłaniem</h4>
                                <p>Zawsze sprawdzaj email pod kątem błędów ortograficznych i gramatycznych. Czytaj na głos, aby wychwycić niezręczne sformułowania.</p>
                            </div>

                            <div className="practice-card">
                                <div className="practice-icon">🎯</div>
                                <h4>Jasny call-to-action</h4>
                                <p>Określ wyraźnie, czego oczekujesz od odbiorcy. Używaj bezpośrednich zwrotów jak "Please review", "Let me know", "Confirm by Friday".</p>
                            </div>

                            <div className="practice-card">
                                <div className="practice-icon">📎</div>
                                <h4>Zarządzanie załącznikami</h4>
                                <p>Nazywaj pliki w sposób opisowy, kompresuj duże pliki, wspominaj o załącznikach w treści emaila, sprawdzaj czy załączniki się dodały.</p>
                            </div>

                            <div className="practice-card">
                                <div className="practice-icon">🔍</div>
                                <h4>Odpowiednie pola</h4>
                                <p>Używaj "To" dla głównych odbiorców, "CC" dla osób, które powinny widzieć wiadomość, "BCC" dla zachowania prywatności adresów.</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja częstych błędów */}
                    <section className="writing-article__section">
                        <h2>Częste błędy i jak ich unikać 🚫</h2>

                        <div className="email-mistakes">
                            <div className="mistake-card">
                                <h4>❌ Zbyt długie wiadomości</h4>
                                <div className="mistake-content">
                                    <p><strong>Problem:</strong> Emails that look like essays are often ignored or skimmed.</p>
                                    <div className="solution">
                                        <strong>Rozwiązanie:</strong> Stosuj zasadę "one screen rule" - jeśli email jest dłuższy niż ekran, podziel go lub rozważ inne medium.
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-card">
                                <h4>❌ Niejasny temat</h4>
                                <div className="mistake-content">
                                    <p><strong>Problem:</strong> Vague subject lines like "Hello" or "Update" reduce open rates.</p>
                                    <div className="solution">
                                        <strong>Rozwiązanie:</strong> Używaj konkretnych tematów: "Q3 Report Revision Required" zamiast "Important Document".
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-card">
                                <h4>❌ Nieodpowiedni ton</h4>
                                <div className="mistake-content">
                                    <p><strong>Problem:</strong> Using informal language in professional contexts or vice versa.</p>
                                    <div className="solution">
                                        <strong>Rozwiązanie:</strong> Dopasuj ton do relacji. W razie wątpliwości, bądź bardziej formalny.
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-card">
                                <h4>❌ Zapominanie o załącznikach</h4>
                                <div className="mistake-content">
                                    <p><strong>Problem:</strong> "Please find attached..." but no attachment included.</p>
                                    <div className="solution">
                                        <strong>Rozwiązanie:</strong> Dodawaj załączniki przed pisaniem emaila lub używaj przypomnień w swoim kliencie email.
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-card">
                                <h4>❌ Emocjonalne reakcje</h4>
                                <div className="mistake-content">
                                    <p><strong>Problem:</strong> Sending angry or frustrated emails that damage relationships.</p>
                                    <div className="solution">
                                        <strong>Rozwiązanie:</strong> Pisząc emocjonalną wiadomość, zapisz ją jako szkic i wróć do niej po godzinie przed wysłaniem.
                                    </div>
                                </div>
                            </div>

                            <div className="mistake-card">
                                <h4>❌ Nadmierne używanie "Reply All"</h4>
                                <div className="mistake-content">
                                    <p><strong>Problem:</strong> Cluttering inboxes of people who don't need the information.</p>
                                    <div className="solution">
                                        <strong>Rozwiązanie:</strong> Zastanów się, kto naprawdę potrzebuje tę informację przed użyciem "Reply All".
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
                                <h4>Ćwiczenie 1: Transformacja tonu</h4>
                                <p><strong>Zadanie:</strong> Przekształć poniższy nieformalny email na formalny:</p>
                                <div className="email-transformation">
                                    <div className="original-email">
                                        <strong>Original (nieformalny):</strong><br/>
                                        "Hey! Can u send me the report when u get a chance? Thx! 😊"
                                    </div>
                                    <div className="transformation-hint">
                                        <strong>Wskazówki:</strong> Użyj pełnych form czasowników, formalnego powitania i zakończenia, usuń emotikony.
                                    </div>
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>Ćwiczenie 2: Napisz temat emaila</h4>
                                <p><strong>Zadanie:</strong> Stwórz efektywne tematy emaili dla poniższych sytuacji:</p>
                                <div className="subject-exercise">
                                    <div className="scenario">
                                        <strong>Sytuacja:</strong> Prośba o spotkanie w sprawie budżetu na nowy projekt
                                    </div>
                                    <div className="scenario">
                                        <strong>Sytuacja:</strong> Przypomnienie o terminie składania wniosków urlopowych
                                    </div>
                                    <div className="scenario">
                                        <strong>Sytuacja:</strong> Zapytanie o status zamówienia numer #45678
                                    </div>
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>Ćwiczenie 3: Napisz krótki email</h4>
                                <p><strong>Zadanie:</strong> Napisz półformalny email do kolegi z pracy z prośbą o pomoc:</p>
                                <div className="email-prompt">
                                    <p><strong>Kontekst:</strong> Potrzebujesz pomocy z oprogramowanie Adobe Photoshop do przygotowania prezentacji. Twój kolega jest ekspertem w tym programie.</p>
                                    <div className="requirements">
                                        <strong>Wymagania:</strong> Przyjazny ton, konkretna prośba, propozycja terminu, podziękowanie.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja szablonów */}
                    <section className="writing-article__section">
                        <h2>Gotowe szablony emaili 📄</h2>

                        <div className="email-templates">
                            <div className="template-card">
                                <h4>📅 Szablon umawiania spotkania</h4>
                                <div className="template-content">
                                    <div className="template-line"><strong>Subject:</strong> Meeting Request: [Temat]</div>
                                    <br/>
                                    <div className="template-line">Dear [Imię/Nazwisko],</div>
                                    <br/>
                                    <div className="template-line">I hope this email finds you well.</div>
                                    <br/>
                                    <div className="template-line">I would like to schedule a meeting to discuss [temat spotkania]. I believe this discussion would be valuable for [powód spotkania].</div>
                                    <br/>
                                    <div className="template-line">Would you be available on [data 1] or [data 2]? I am flexible between [przedział godzinowy].</div>
                                    <br/>
                                    <div className="template-line">Please let me know what time works best for you. I have attached [dodatkowe materiały] for your review.</div>
                                    <br/>
                                    <div className="template-line">Looking forward to your response.</div>
                                    <br/>
                                    <div className="template-line">Best regards,<br/>[Twoje Imię i Nazwisko]<br/>[Twój Stanowisko]</div>
                                </div>
                            </div>

                            <div className="template-card">
                                <h4>❓ Szablon zapytania</h4>
                                <div className="template-content">
                                    <div className="template-line"><strong>Subject:</strong> Question Regarding [Temat]</div>
                                    <br/>
                                    <div className="template-line">Hello [Imię],</div>
                                    <br/>
                                    <div className="template-line">I'm writing to ask about [konkretne pytanie].</div>
                                    <br/>
                                    <div className="template-line">[Dodatkowy kontekst jeśli potrzebny]</div>
                                    <br/>
                                    <div className="template-line">Could you please provide more information about this? I would appreciate your insights.</div>
                                    <br/>
                                    <div className="template-line">Thank you for your help!</div>
                                    <br/>
                                    <div className="template-line">Best,<br/>[Twoje Imię]</div>
                                </div>
                            </div>

                            <div className="template-card">
                                <h4>🔄 Szablon follow-up</h4>
                                <div className="template-content">
                                    <div className="template-line"><strong>Subject:</strong> Follow-up: [Poprzedni temat]</div>
                                    <br/>
                                    <div className="template-line">Hi [Imię],</div>
                                    <br/>
                                    <div className="template-line">Just following up on our [rozmowa/email] from [data].</div>
                                    <br/>
                                    <div className="template-line">I wanted to check if you've had a chance to [akcja] yet?</div>
                                    <br/>
                                    <div className="template-line">Please let me know if you need any additional information from my side.</div>
                                    <br/>
                                    <div className="template-line">Looking forward to hearing from you.</div>
                                    <br/>
                                    <div className="template-line">Thanks,<br/>[Twoje Imię]</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="writing-article__section">
                        <div className="writing-action-box email">
                            <h3>🎯 Czas na praktykę!</h3>
                            <p>Wybierz jeden z poniższych scenariuszy i napisz kompletny email. Pamiętaj o odpowiednim tonie, jasnym temacie i profesjonalnej strukturze!</p>
                            <div className="writing-scenarios">
                                <div className="scenario-card">
                                    <h4>Scenariusz 1: Email do przełożonego</h4>
                                    <p>Napij prośbę o dodatkowe szkolenie. Uzasadnij korzyści dla firmy i zaproponuj konkretne rozwiązania.</p>
                                </div>
                                <div className="scenario-card">
                                    <h4>Scenariusz 2: Email do klienta</h4>
                                    <p>Odpowiedz na skargę klienta. Przeproś za problem, zaproponuj rozwiązanie i zapewnij o poprawie.</p>
                                </div>
                                <div className="scenario-card">
                                    <h4>Scenariusz 3: Email do zespołu</h4>
                                    <p>Poinformuj zespół o zmianach w procesie pracy. Wyjaśnij powody zmian i korzyści, zaproś do zadawania pytań.</p>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <Link to="/cwiczenia/pisanie-emaili" className="btn btn--primary">Więcej ćwiczeń</Link>
                                <Link to="/spolecznosc" className="btn btn--secondary">Sprawdź z ekspertem</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="writing-article__footer">
                        <div className="writing-article__tags">
                            <span className="writing-tag">#email</span>
                            <span className="writing-tag">#emailwriting</span>
                            <span className="writing-tag">#businesscommunication</span>
                            <span className="writing-tag">#professionalemails</span>
                            <span className="writing-tag">#korespondencja</span>
                        </div>
                        <div className="writing-article__next">
                            <p><strong>Następny temat:</strong> <Link to="/writing/recenzja">Jak pisać recenzje po angielsku?</Link></p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default Email;