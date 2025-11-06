import React from 'react';
import { Link } from 'react-router-dom';
import './WritingStyles.css';

const Report = () => {
    return (
        <article className="writing-article">
            <div className="writing-article__header">
                <div className="container">
                    <nav className="writing-article__breadcrumb">
                        <Link to="/pisanie" className="writing-article__breadcrumb-link">Pisanie</Link>
                        <span className="writing-article__breadcrumb-separator">/</span>
                        <span className="writing-article__breadcrumb-current">Raport</span>
                    </nav>
                    <h1 className="writing-article__title">Jak pisać raporty po angielsku? 📊</h1>
                    <p className="writing-article__intro">Kompletny przewodnik po tworzeniu profesjonalnych raportów biznesowych, naukowych i technicznych w języku angielskim</p>
                    <div className="writing-article__meta">
                        <span className="writing-article__reading-time">⏱️ Czas czytania: 10 minut</span>
                        <span className="writing-article__level">🎯 Poziom: B2-C2</span>
                        <span className="writing-article__words">📝 Słowa kluczowe: report writing, business reports, executive summary, findings</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="writing-article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="writing-article__section">
                        <div className="writing-tip-box">
                            <h3>📈 Czym jest raport po angielsku?</h3>
                            <p><strong>Report</strong> to formalny dokument prezentujący informacje w sposób uporządkowany i obiektywny. Jego celem jest przekazanie faktów, analiz i rekomendacji w sposób przystępny dla określonej grupy odbiorców.</p>
                        </div>

                        <h2>Rodzaje raportów</h2>
                        <div className="writing-points-grid">
                            <div className="writing-point-card">
                                <h4>🏢 Biznesowy</h4>
                                <p>Raporty finansowe, analizy rynku, sprawozdania z projektów, due diligence</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>🔬 Naukowy</h4>
                                <p>Raporty badawcze, eksperymentalne, case studies, przeglądy literatury</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>⚙️ Techniczny</h4>
                                <p>Raporty projektowe, specyfikacje, analizy techniczne, dokumentacje</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>📋 Sprawozdawczy</h4>
                                <p>Miesięczne/kwartalne raporty, podsumowania spotkań, raporty postępu</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja struktury raportu */}
                    <section className="writing-article__section">
                        <h2>Struktura profesjonalnego raportu 🏗️</h2>

                        <div className="report-structure">
                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">1</span>
                                    <h3>Strona tytułowa (Title Page)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Podstawowe informacje</h4>
                                    <ul>
                                        <li>✅ Tytuł raportu</li>
                                        <li>✅ Imię i nazwisko autora/ów</li>
                                        <li>✅ Nazwa organizacji/departamentu</li>
                                        <li>✅ Data przygotowania</li>
                                        <li>✅ Odbiorca raportu</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "Quarterly Marketing Performance Report"<br/>
                                        "Prepared by: Marketing Analytics Team"<br/>
                                        "Date: March 31, 2024"<br/>
                                        "Prepared for: Board of Directors"
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">2</span>
                                    <h3>Streszczenie zarządcze (Executive Summary)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Najważniejsze informacje w pigułce</h4>
                                    <ul>
                                        <li>✅ Cel raportu</li>
                                        <li>✅ Kluczowe ustalenia</li>
                                        <li>✅ Główne wnioski</li>
                                        <li>✅ Rekomendacje</li>
                                        <li>✅ Maksymalnie 1 strona</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "This report analyzes Q1 2024 marketing performance. Key findings indicate a 15% increase in lead generation but a 5% decrease in conversion rates. We recommend reallocating budget to retargeting campaigns and improving landing page optimization."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">3</span>
                                    <h3>Spis treści (Table of Contents)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Nawigacja po raporcie</h4>
                                    <ul>
                                        <li>✅ Wszystkie sekcje z numerami stron</li>
                                        <li>✅ Hierarchia nagłówków</li>
                                        <li>✅ Lista tabel i wykresów</li>
                                        <li>✅ Załączniki</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "1. Introduction ................. 3<br/>
                                        2. Methodology ................. 5<br/>
                                        3. Findings .................... 7<br/>
                                        4. Analysis .................... 12<br/>
                                        5. Recommendations ............ 15"
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">4</span>
                                    <h3>Wprowadzenie (Introduction)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Kontekst i cel</h4>
                                    <ul>
                                        <li>✅ Tło i kontekst problemu</li>
                                        <li>✅ Cel raportu</li>
                                        <li>✅ Zakres i ograniczenia</li>
                                        <li>✅ Metodologia badania</li>
                                        <li>✅ Struktura raportu</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "This report examines the declining customer satisfaction rates observed in Q1 2024. The primary objective is to identify root causes and propose evidence-based solutions. Data was collected through customer surveys and support ticket analysis."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">5</span>
                                    <h3>Ustalenia (Findings)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Prezentacja danych</h4>
                                    <ul>
                                        <li>✅ Obiektywna prezentacja faktów</li>
                                        <li>✅ Dane uporządkowane logicznie</li>
                                        <li>✅ Tabele, wykresy, statystyki</li>
                                        <li>✅ Bez interpretacji i opinii</li>
                                        <li>✅ Odniesienia do załączników</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "Survey results indicate that 65% of customers reported waiting longer than 5 minutes for support. Technical issues accounted for 45% of all support tickets, representing a 20% increase compared to the previous quarter."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">6</span>
                                    <h3>Analiza (Analysis)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Interpretacja danych</h4>
                                    <ul>
                                        <li>✅ Wyjaśnienie znaczenia danych</li>
                                        <li>✅ Identyfikacja trendów i wzorców</li>
                                        <li>✅ Przyczyny i skutki</li>
                                        <li>✅ Porównania z benchmarkami</li>
                                        <li>✅ Wnioski cząstkowe</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "The correlation between response time and customer satisfaction scores suggests that reducing wait times should be prioritized. The increase in technical issues coincides with the recent software update, indicating potential compatibility problems."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">7</span>
                                    <h3>Rekomendacje (Recommendations)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Propozycje działań</h4>
                                    <ul>
                                        <li>✅ Konkretne, wykonalne propozycje</li>
                                        <li>✅ Uzasadnienie każdej rekomendacji</li>
                                        <li>✅ Priorytety i harmonogram</li>
                                        <li>✅ Oszacowanie kosztów i korzyści</li>
                                        <li>✅ Wskazanie odpowiedzialnych</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "1. Implement additional support staff training on new software features (Priority: High, Timeline: 2 weeks)<br/>
                                        2. Develop comprehensive troubleshooting documentation (Priority: Medium, Timeline: 4 weeks)"
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">8</span>
                                    <h3>Załączniki (Appendices)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Dodatkowe materiały</h4>
                                    <ul>
                                        <li>✅ Ankiety, kwestionariusze</li>
                                        <li>✅ Szczegółowe dane liczbowe</li>
                                        <li>✅ Dokumentacja techniczna</li>
                                        <li>✅ Pełne transkrypcje wywiadów</li>
                                        <li>✅ Materiały referencyjne</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "Appendix A: Customer Satisfaction Survey Questionnaire<br/>
                                        Appendix B: Detailed Response Time Data<br/>
                                        Appendix C: Support Ticket Classification System"
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja słownictwa raportowego */}
                    <section className="writing-article__section">
                        <h2>Słownictwo raportowe 📝</h2>

                        <div className="report-vocabulary">
                            <div className="vocab-category">
                                <h3>🎯 Cel i zakres</h3>
                                <div className="vocab-grid">
                                    <div className="vocab-item">
                                        <span className="vocab-word">The purpose of this report is to...</span>
                                        <span className="vocab-translation">Celem tego raportu jest...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">This report aims to...</span>
                                        <span className="vocab-translation">Niniejszy raport ma na celu...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">The scope of this report covers...</span>
                                        <span className="vocab-translation">Zakres raportu obejmuje...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">It is beyond the scope of this report to...</span>
                                        <span className="vocab-translation">Wykracza poza zakres tego raportu...</span>
                                    </div>
                                </div>
                            </div>

                            <div className="vocab-category">
                                <h3>📊 Prezentacja danych</h3>
                                <div className="vocab-grid">
                                    <div className="vocab-item">
                                        <span className="vocab-word">The data indicates that...</span>
                                        <span className="vocab-translation">Dane wskazują, że...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">As shown in Table 1...</span>
                                        <span className="vocab-translation">Jak pokazano w Tabeli 1...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">There was a significant increase in...</span>
                                        <span className="vocab-translation">Odnotowano znaczący wzrost...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">The majority of respondents reported...</span>
                                        <span className="vocab-translation">Większość respondentów zgłosiła...</span>
                                    </div>
                                </div>
                            </div>

                            <div className="vocab-category">
                                <h3>🔍 Analiza i wnioski</h3>
                                <div className="vocab-grid">
                                    <div className="vocab-item">
                                        <span className="vocab-word">This suggests that...</span>
                                        <span className="vocab-translation">Sugeruje to, że...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">It can be concluded that...</span>
                                        <span className="vocab-translation">Można wywnioskować, że...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">The findings reveal a correlation between...</span>
                                        <span className="vocab-translation">Ustalenia ujawniają korelację między...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">Several factors contribute to...</span>
                                        <span className="vocab-translation">Kilka czynników przyczynia się do...</span>
                                    </div>
                                </div>
                            </div>

                            <div className="vocab-category">
                                <h3>💡 Rekomendacje</h3>
                                <div className="vocab-grid">
                                    <div className="vocab-item">
                                        <span className="vocab-word">It is recommended that...</span>
                                        <span className="vocab-translation">Zaleca się, aby...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">We propose the following actions:</span>
                                        <span className="vocab-translation">Proponujemy następujące działania:</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">To address this issue, we suggest...</span>
                                        <span className="vocab-translation">Aby rozwiązać ten problem, sugerujemy...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">Implementation of these measures would...</span>
                                        <span className="vocab-translation">Wdrożenie tych środków spowodowałoby...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja stylu i tonu */}
                    <section className="writing-article__section">
                        <h2>Styl i ton raportu ✍️</h2>

                        <div className="report-style">
                            <div className="style-principle">
                                <div className="principle-header">
                                    <h3>🎯 Obiektywność</h3>
                                    <span className="principle-importance">Kluczowe</span>
                                </div>
                                <div className="principle-content">
                                    <div className="do-dont">
                                        <div className="do">
                                            <h4>✅ Rob</h4>
                                            <ul>
                                                <li>Używaj danych i faktów</li>
                                                <li>Prezentuj różne perspektywy</li>
                                                <li>Oddzielaj fakty od opinii</li>
                                                <li>Uzasadniaj wszystkie twierdzenia</li>
                                            </ul>
                                        </div>
                                        <div className="dont">
                                            <h4>❌ Unikaj</h4>
                                            <ul>
                                                <li>Emocjonalnego języka</li>
                                                <li>Nieuzasadnionych opinii</li>
                                                <li>Przesadnych stwierdzeń</li>
                                                <li>Subiektywnych ocen</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="principle-example">
                                        <strong>Przykład:</strong> "Sales decreased by 15%" zamiast "Sales were terrible"
                                    </div>
                                </div>
                            </div>

                            <div className="style-principle">
                                <div className="principle-header">
                                    <h3>📐 Precyzja</h3>
                                    <span className="principle-importance">Niezbędne</span>
                                </div>
                                <div className="principle-content">
                                    <div className="do-dont">
                                        <div className="do">
                                            <h4>✅ Rob</h4>
                                            <ul>
                                                <li>Używaj konkretnych liczb</li>
                                                <li>Podawaj dokładne daty</li>
                                                <li>Określaj źródła danych</li>
                                                <li>Używaj terminologii branżowej</li>
                                            </ul>
                                        </div>
                                        <div className="dont">
                                            <h4>❌ Unikaj</h4>
                                            <ul>
                                                <li>Ogólników i przybliżeń</li>
                                                <li>Nieprecyzyjnych określeń czasu</li>
                                                <li>Niesprawdzonych informacji</li>
                                                <li>Nadmiernego upraszczania</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="principle-example">
                                        <strong>Przykład:</strong> "72% of respondents" zamiast "most respondents"
                                    </div>
                                </div>
                            </div>

                            <div className="style-principle">
                                <div className="principle-header">
                                    <h3>🏛️ Formalność</h3>
                                    <span className="principle-importance">Wymagane</span>
                                </div>
                                <div className="principle-content">
                                    <div className="do-dont">
                                        <div className="do">
                                            <h4>✅ Rob</h4>
                                            <ul>
                                                <li>Używaj pełnych form czasowników</li>
                                                <li>Stosuj strukturę zdaniową</li>
                                                <li>Utrzymuj spójny ton</li>
                                                <li>Używaj profesjonalnego słownictwa</li>
                                            </ul>
                                        </div>
                                        <div className="dont">
                                            <h4>❌ Unikaj</h4>
                                            <ul>
                                                <li>Skrótów i potocyzmów</li>
                                                <li>Kolokwialnego języka</li>
                                                <li>Nadmiernych wykrzykników</li>
                                                <li>Emotikon i slangu</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="principle-example">
                                        <strong>Przykład:</strong> "The analysis indicates" zamiast "The analysis shows"
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Przykładowe fragmenty raportów */}
                    <section className="writing-article__section">
                        <h2>Przykładowe fragmenty raportów ✨</h2>

                        <div className="report-examples">
                            <div className="report-example">
                                <div className="report-header">
                                    <h3>📈 Fragment raportu biznesowego</h3>
                                    <div className="report-meta">
                                        <span className="type">Business Report</span>
                                        <span className="section">Executive Summary</span>
                                        <span className="audience">Board of Directors</span>
                                    </div>
                                </div>

                                <div className="report-content">
                                    <div className="report-section">
                                        <h4>Executive Summary: Q1 2024 Marketing Performance</h4>
                                        <div className="report-body">
                                            <p><strong>This report presents an analysis of marketing performance during the first quarter of 2024.</strong> The primary objective was to evaluate the effectiveness of our digital marketing campaigns and identify opportunities for optimization.</p>

                                            <p><strong>Key findings indicate mixed results across different channels.</strong> Social media advertising generated a 25% increase in website traffic, while email marketing conversion rates declined by 8%. The total marketing spend of $150,000 resulted in 2,500 qualified leads, representing a cost per lead of $60.</p>

                                            <p><strong>The analysis reveals several areas requiring attention.</strong> The decrease in email conversion rates correlates with changes in our email template design implemented in January. Additionally, our competitor analysis shows that key competitors have increased their social media advertising budgets by an average of 30%.</p>

                                            <p><strong>Based on these findings, we recommend:</strong></p>
                                            <ol>
                                                <li>Reallocating $20,000 from the email marketing budget to social media advertising</li>
                                                <li>Conducting A/B testing on email templates to improve conversion rates</li>
                                                <li>Increasing the social media advertising budget by 15% to maintain competitive positioning</li>
                                            </ol>

                                            <p><strong>Implementation of these recommendations is projected to increase lead generation by 18% while reducing cost per lead by 12% in Q2 2024.</strong></p>
                                        </div>
                                        <div className="report-analysis">
                                            <p><strong>Analiza:</strong> Struktura streszczenia zarządczego - cel, kluczowe ustalenia, analiza, rekomendacje, przewidywane efekty. Język precyzyjny, oparty na danych.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="report-example">
                                <div className="report-header">
                                    <h3>🔬 Fragment raportu naukowego</h3>
                                    <div className="report-meta">
                                        <span className="type">Research Report</span>
                                        <span className="section">Methodology</span>
                                        <span className="audience">Academic Committee</span>
                                    </div>
                                </div>

                                <div className="report-content">
                                    <div className="report-section">
                                        <h4>Research Methodology: Customer Satisfaction Study</h4>
                                        <div className="report-body">
                                            <p><strong>2.1 Research Design</strong><br/>
                                                This study employed a mixed-methods approach, combining quantitative survey data with qualitative interview analysis. The research was conducted between January 15 and February 28, 2024.</p>

                                            <p><strong>2.2 Data Collection</strong><br/>
                                                <strong>Survey:</strong> An online questionnaire was distributed to a random sample of 1,000 customers who made purchases in Q4 2023. The response rate was 42% (420 completed surveys). The survey consisted of 15 questions using a 5-point Likert scale.</p>

                                            <p><strong>Interviews:</strong> Semi-structured interviews were conducted with 25 customers selected through purposive sampling. Each interview lasted approximately 45 minutes and was recorded and transcribed for analysis.</p>

                                            <p><strong>2.3 Data Analysis</strong><br/>
                                                Quantitative data was analyzed using SPSS version 28. Descriptive statistics were calculated for all variables, and correlation analysis was performed to identify relationships between satisfaction scores and various factors.</p>

                                            <p>Qualitative data was analyzed using thematic analysis. Interview transcripts were coded independently by two researchers, with an inter-coder reliability of 0.89.</p>

                                            <p><strong>2.4 Ethical Considerations</strong><br/>
                                                All participants provided informed consent, and data was anonymized to protect confidentiality. The study protocol was approved by the Institutional Review Board (IRB-2024-015).</p>
                                        </div>
                                        <div className="report-analysis">
                                            <p><strong>Analiza:</strong> Szczegółowy opis metodologii z precyzyjnymi danymi liczbowymi. Użycie nagłówków i podnagłówków dla przejrzystości. Uwzględnienie aspektów etycznych.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja wizualizacji danych */}
                    <section className="writing-article__section">
                        <h2>Wizualizacja danych w raportach 📊</h2>

                        <div className="data-visualization">
                            <div className="viz-type">
                                <div className="viz-header">
                                    <h3>📈 Wykresy liniowe</h3>
                                    <span className="viz-best-for">Trendy w czasie</span>
                                </div>
                                <div className="viz-content">
                                    <p><strong>Zastosowanie:</strong> Pokazywanie zmian w czasie, trendów, progresji</p>
                                    <div className="viz-example">
                                        <div className="viz-placeholder">
                                            [Wykres liniowy: Sprzedaż kwartalna 2023-2024]
                                        </div>
                                        <div className="viz-caption">
                                            <strong>Przykład opisu:</strong> "Figure 1 illustrates quarterly sales performance from Q1 2023 to Q1 2024, showing consistent growth with a notable peak in Q4 2023."
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="viz-type">
                                <div className="viz-header">
                                    <h3>📊 Wykresy słupkowe</h3>
                                    <span className="viz-best-for">Porównania</span>
                                </div>
                                <div className="viz-content">
                                    <p><strong>Zastosowanie:</strong> Porównywanie kategorii, pokazywanie różnic</p>
                                    <div className="viz-example">
                                        <div className="viz-placeholder">
                                            [Wykres słupkowy: Wyniki różnych departamentów]
                                        </div>
                                        <div className="viz-caption">
                                            <strong>Przykład opisu:</strong> "As shown in Figure 2, the Marketing department achieved the highest performance metrics, exceeding targets by 15%."
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="viz-type">
                                <div className="viz-header">
                                    <h3>🥧 Wykresy kołowe</h3>
                                    <span className="viz-best-for">Proporcje</span>
                                </div>
                                <div className="viz-content">
                                    <p><strong>Zastosowanie:</strong> Pokazywanie udziałów procentowych, składu całości</p>
                                    <div className="viz-example">
                                        <div className="viz-placeholder">
                                            [Wykres kołowy: Struktura wydatków marketingowych]
                                        </div>
                                        <div className="viz-caption">
                                            <strong>Przykład opisu:</strong> "Figure 3 demonstrates that digital advertising accounts for 45% of the total marketing budget, representing the largest expenditure category."
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="viz-type">
                                <div className="viz-header">
                                    <h3>📋 Tabele</h3>
                                    <span className="viz-best-for">Dane szczegółowe</span>
                                </div>
                                <div className="viz-content">
                                    <p><strong>Zastosowanie:</strong> Prezentacja szczegółowych danych liczbowych</p>
                                    <div className="viz-example">
                                        <div className="table-placeholder">
                                            <strong>Table 1: Quarterly Performance Metrics</strong><br/>
                                            [Tabela z danymi liczbowymi]
                                        </div>
                                        <div className="viz-caption">
                                            <strong>Przykład opisu:</strong> "Table 1 provides detailed quarterly performance metrics, showing consistent improvement in customer satisfaction scores throughout 2023."
                                        </div>
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
                                <h4>Ćwiczenie 1: Napisz streszczenie zarządcze</h4>
                                <p><strong>Zadanie:</strong> Na podstawie poniższych danych napisz streszczenie zarządcze:</p>
                                <div className="exercise-data">
                                    <p><strong>Dane:</strong><br/>
                                        • Sprzedaż: wzrost o 12% w Q1<br/>
                                        • Koszty: wzrost o 8%<br/>
                                        • Satysfakcja klientów: spadek z 4.5 do 4.2/5<br/>
                                        • Główny problem: opóźnienia w dostawach<br/>
                                        • Rekomendacja: zmiana dostawcy</p>
                                </div>
                                <div className="exercise-requirements">
                                    <strong>Wymagania:</strong> Cel, kluczowe ustalenia, analiza, rekomendacje - maksymalnie 200 słów.
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>Ćwiczenie 2: Przekształć dane na raport</h4>
                                <p><strong>Zadanie:</strong> Przekształć poniższe informacje w formalny fragment raportu:</p>
                                <div className="transformation-exercise">
                                    <div className="original-data">
                                        <strong>Informacje:</strong><br/>
                                        "Ankieta: 200 pracowników<br/>
                                        65% zgłasza niskie morale<br/>
                                        Główne przyczyny: brak komunikacji, przeciążenie pracą<br/>
                                        Sugestie: lepsze spotkania, elastyczny czas pracy"
                                    </div>
                                    <div className="transformation-hint">
                                        <strong>Wskazówki:</strong> Użyj formalnego języka, precyzyjnych sformułowań, struktury nagłówków.
                                    </div>
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>Ćwiczenie 3: Stwórz strukturę raportu</h4>
                                <p><strong>Zadanie:</strong> Zaplanuj strukturę raportu na wybrany temat:</p>
                                <div className="report-scenarios">
                                    <div className="scenario">
                                        <strong>Temat 1:</strong> Analiza efektywności pracy zdalnej w Twojej firmie
                                    </div>
                                    <div className="scenario">
                                        <strong>Temat 2:</strong> Ocja wprowadzenia nowego produktu na rynek
                                    </div>
                                    <div className="scenario">
                                        <strong>Temat 3:</strong> Badanie satysfakcji klientów z obsługi posprzedażnej
                                    </div>
                                </div>
                                <div className="structure-requirements">
                                    <strong>Wymagania:</strong> Stwórz szczegółowy spis treści z co najmniej 8 sekcjami.
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja szablonów */}
                    <section className="writing-article__section">
                        <h2>Gotowe szablony raportów 📄</h2>

                        <div className="report-templates">
                            <div className="template-card">
                                <h4>📈 Szablon raportu biznesowego</h4>
                                <div className="template-content">
                                    <div className="template-section">
                                        <strong>[Nazwa Firmy]</strong><br/>
                                        <strong>[Tytuł Raportu]</strong><br/>
                                        <strong>Prepared by: [Imię i Nazwisko]</strong><br/>
                                        <strong>Date: [Data]</strong><br/>
                                        <strong>Prepared for: [Odbiorca]</strong>
                                    </div>

                                    <div className="template-section">
                                        <strong>Executive Summary</strong><br/>
                                        [1-2 akapity podsumowujące cel, kluczowe ustalenia i rekomendacje]
                                    </div>

                                    <div className="template-section">
                                        <strong>1. Introduction</strong><br/>
                                        1.1 Background<br/>
                                        1.2 Objectives<br/>
                                        1.3 Scope and Methodology
                                    </div>

                                    <div className="template-section">
                                        <strong>2. Findings</strong><br/>
                                        2.1 [Temat 1]<br/>
                                        2.2 [Temat 2]<br/>
                                        2.3 [Temat 3]
                                    </div>

                                    <div className="template-section">
                                        <strong>3. Analysis</strong><br/>
                                        3.1 [Analiza 1]<br/>
                                        3.2 [Analiza 2]<br/>
                                        3.3 [Analiza 3]
                                    </div>

                                    <div className="template-section">
                                        <strong>4. Recommendations</strong><br/>
                                        4.1 [Rekomendacja 1]<br/>
                                        4.2 [Rekomendacja 2]<br/>
                                        4.3 [Rekomendacja 3]
                                    </div>
                                </div>
                            </div>

                            <div className="template-card">
                                <h4>🔬 Szablon raportu badawczego</h4>
                                <div className="template-content">
                                    <div className="template-section">
                                        <strong>Abstract</strong><br/>
                                        [Streszczenie badawcze - 150-250 słów]
                                    </div>

                                    <div className="template-section">
                                        <strong>1. Introduction</strong><br/>
                                        1.1 Research Problem<br/>
                                        1.2 Literature Review<br/>
                                        1.3 Research Questions<br/>
                                        1.4 Hypotheses
                                    </div>

                                    <div className="template-section">
                                        <strong>2. Methodology</strong><br/>
                                        2.1 Research Design<br/>
                                        2.2 Participants<br/>
                                        2.3 Materials and Instruments<br/>
                                        2.4 Procedure<br/>
                                        2.5 Data Analysis
                                    </div>

                                    <div className="template-section">
                                        <strong>3. Results</strong><br/>
                                        3.1 [Wynik 1]<br/>
                                        3.2 [Wynik 2]<br/>
                                        3.3 [Wynik 3]
                                    </div>

                                    <div className="template-section">
                                        <strong>4. Discussion</strong><br/>
                                        4.1 Interpretation of Findings<br/>
                                        4.2 Theoretical Implications<br/>
                                        4.3 Limitations<br/>
                                        4.4 Future Research
                                    </div>

                                    <div className="template-section">
                                        <strong>5. Conclusion</strong><br/>
                                        [Podsumowanie i wnioski]
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="writing-article__section">
                        <div className="writing-action-box report">
                            <h3>🎯 Czas na praktykę!</h3>
                            <p>Wybierz jeden z poniższych scenariuszy i zaplanuj kompletny raport. Pamiętaj o strukturze, obiektywizmie i precyzyjnym języku!</p>
                            <div className="writing-scenarios">
                                <div className="scenario-card">
                                    <h4>Scenariusz 1: Raport biznesowy</h4>
                                    <p>Przygotuj raport analizujący efektywność ostatniej kampanii marketingowej. Uwzględnij dane, analizę ROI i rekomendacje na przyszłość.</p>
                                </div>
                                <div className="scenario-card">
                                    <h4>Scenariusz 2: Raport badawczy</h4>
                                    <p>Stwórz raport z badania satysfakcji pracowników. Zaprezentuj metodologię, wyniki i propozycje poprawy morale.</p>
                                </div>
                                <div className="scenario-card">
                                    <h4>Scenariusz 3: Raport projektowy</h4>
                                    <p>Napisz raport podsumowujący realizację projektu. Oceń osiągnięte cele, zidentyfikuj problemy i zaproponuj lepsze praktyki.</p>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <Link to="/cwiczenia/pisanie-raportow" className="btn btn--primary">Więcej ćwiczeń</Link>
                                <Link to="/spolecznosc" className="btn btn--secondary">Skonsultuj z ekspertem</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="writing-article__footer">
                        <div className="writing-article__tags">
                            <span className="writing-tag">#raport</span>
                            <span className="writing-tag">#report</span>
                            <span className="writing-tag">#businessreport</span>
                            <span className="writing-tag">#researchreport</span>
                            <span className="writing-tag">#sprawozdanie</span>
                        </div>
                        <div className="writing-article__next">
                            <p><strong>Następny temat:</strong> <Link to="/pisanie/opis-obrazka">Jak opisywać obrazki po angielsku?</Link></p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default Report;