import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleStyles.css';

const CertificatesWorth = () => {
    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/artykuly" className="article__breadcrumb-link">Artykuły</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Certyfikaty językowe</span>
                    </nav>
                    <h1 className="article__title">Certyfikaty językowe: Czy warto? 🎓</h1>
                    <p className="article__intro">Kompleksowa analiza plusów i minusów popularnych egzaminów językowych</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 7 minut</span>
                        <span className="article__level">🎯 Dla: Planujących rozwój kariery i edukacji</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>💎 Certyfikat vs Umiejętności</h3>
                            <p>Pamiętaj: <strong>certyfikat potwierdza wiedzę, ale nie zastąpi prawdziwych umiejętności komunikacyjnych.</strong> Obie te rzeczy są ważne!</p>
                        </div>

                        <h2>Kiedy certyfikat jest naprawdę potrzebny?</h2>
                        <div className="scenario-cards">
                            <div className="scenario-card scenario-card--essential">
                                <h4>🎓 Studia za granicą</h4>
                                <p>Większość uczelni wymaga oficjalnego potwierdzenia poziomu języka</p>
                                <div className="scenario-level">Wymagane: zwykle B2/C1</div>
                            </div>

                            <div className="scenario-card scenario-card--essential">
                                <h4>💼 Praca w korporacji</h4>
                                <p>Menedżerowie rekrutacyjni często wolą obiektywne potwierdzenie umiejętności</p>
                                <div className="scenario-level">Wymagane: zwykle B1/B2+</div>
                            </div>

                            <div className="scenario-card scenario-card--useful">
                                <h4>🌍 Migracja zawodowa</h4>
                                <p>Niezbędny w procesach imigracyjnych wielu krajów</p>
                                <div className="scenario-level">Wymagane: A2/B1+</div>
                            </div>

                            <div className="scenario-card scenario-card--optional">
                                <h4>📈 Rozwój osobisty</h4>
                                <p>Dodatkowa motywacja i mierzalny cel nauki</p>
                                <div className="scenario-level">Opcjonalne</div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja plusów i minusów */}
                    <section className="article__section">
                        <h2>Plusy i minusy certyfikatów ⚖️</h2>

                        <div className="pros-cons">
                            <div className="pros-cons__column">
                                <div className="pros-cons__header pros-cons__header--pro">
                                    <h3>✅ Zalety</h3>
                                </div>
                                <div className="pros-cons__list">
                                    <div className="pros-cons__item pros-cons__item--pro">
                                        <h4>🎯 Obiektywny dowód</h4>
                                        <p>Certyfikat to niezaprzeczalny dokument potwierdzający Twój poziom</p>
                                    </div>
                                    <div className="pros-cons__item pros-cons__item--pro">
                                        <h4>💼 Wymóg formalny</h4>
                                        <p>Niezbędny przy aplikacjach na studia, do pracy lub w procesach imigracyjnych</p>
                                    </div>
                                    <div className="pros-cons__item pros-cons__item--pro">
                                        <h4>🚀 Motywacja do nauki</h4>
                                        <p>Konkretny termin egzaminu mobilizuje do systematycznej pracy</p>
                                    </div>
                                    <div className="pros-cons__item pros-cons__item--pro">
                                        <h4>📊 Strukturyzacja wiedzy</h4>
                                        <p>Przygotowanie do egzaminu wymaga uporządkowania całej wiedzy</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pros-cons__column">
                                <div className="pros-cons__header pros-cons__header--con">
                                    <h3>❌ Wady</h3>
                                </div>
                                <div className="pros-cons__list">
                                    <div className="pros-cons__item pros-cons__item--con">
                                        <h4>💰 Koszt</h4>
                                        <p>Egzaminy są drogie - od 300 do nawet 1000 zł</p>
                                    </div>
                                    <div className="pros-cons__item pros-cons__item--con">
                                        <h4>⏰ Ograniczony zakres</h4>
                                        <p>Testują konkretne umiejętności, nie zawsze odzwierciedlają prawdziwą biegłość</p>
                                    </div>
                                    <div className="pros-cons__item pros-cons__item--con">
                                        <h4>📅 Ważność</h4>
                                        <p>Większość certyfikatów ma ograniczony okres ważności (2 lata)</p>
                                    </div>
                                    <div className="pros-cons__item pros-cons__item--con">
                                        <h4>😰 Stres</h4>
                                        <p>Egzaminy mogą być stresujące, co wpływa na wyniki</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja popularnych certyfikatów */}
                    <section className="article__section">
                        <h2>Popularne certyfikaty angielskiego 🌍</h2>

                        <div className="certificate-comparison">
                            <div className="certificate-card">
                                <div className="certificate-card__header">
                                    <h3>IELTS</h3>
                                    <span className="certificate-card__type">Academic/General</span>
                                </div>
                                <div className="certificate-card__details">
                                    <div className="cert-detail">
                                        <span className="cert-detail__label">Koszt:</span>
                                        <span className="cert-detail__value">~900 zł</span>
                                    </div>
                                    <div className="cert-detail">
                                        <span className="cert-detail__label">Ważność:</span>
                                        <span className="cert-detail__value">2 lata</span>
                                    </div>
                                    <div className="cert-detail">
                                        <span className="cert-detail__label">Główne zastosowanie:</span>
                                        <span className="cert-detail__value">Studia, imigracja</span>
                                    </div>
                                    <div className="cert-detail">
                                        <span className="cert-detail__label">Popularność:</span>
                                        <span className="cert-detail__value">Globalna</span>
                                    </div>
                                </div>
                                <div className="certificate-card__pros-cons">
                                    <div className="pro">✅ Uznawany na całym świecie</div>
                                    <div className="con">❌ Droższy od alternatyw</div>
                                </div>
                            </div>

                            <div className="certificate-card">
                                <div className="certificate-card__header">
                                    <h3>TOEFL</h3>
                                    <span className="certificate-card__type">Internet-based</span>
                                </div>
                                <div className="certificate-card__details">
                                    <div className="cert-detail">
                                        <span className="cert-detail__label">Koszt:</span>
                                        <span className="cert-detail__value">~800 zł</span>
                                    </div>
                                    <div className="cert-detail">
                                        <span className="cert-detail__label">Ważność:</span>
                                        <span className="cert-detail__value">2 lata</span>
                                    </div>
                                    <div className="cert-detail">
                                        <span className="cert-detail__label">Główne zastosowanie:</span>
                                        <span className="cert-detail__value">Studia w USA</span>
                                    </div>
                                    <div className="cert-detail">
                                        <span className="cert-detail__label">Popularność:</span>
                                        <span className="cert-detail__value">Głównie USA</span>
                                    </div>
                                </div>
                                <div className="certificate-card__pros-cons">
                                    <div className="pro">✅ Skupia się na angielskim akademickim</div>
                                    <div className="con">❌ Mniej popularny w Europie</div>
                                </div>
                            </div>

                            <div className="certificate-card">
                                <div className="certificate-card__header">
                                    <h3>Cambridge</h3>
                                    <span className="certificate-card__type">FCE/CAE/CPE</span>
                                </div>
                                <div className="certificate-card__details">
                                    <div className="cert-detail">
                                        <span className="cert-detail__label">Koszt:</span>
                                        <span className="cert-detail__value">~700-900 zł</span>
                                    </div>
                                    <div className="cert-detail">
                                        <span className="cert-detail__label">Ważność:</span>
                                        <span className="cert-detail__value">Bezterminowo</span>
                                    </div>
                                    <div className="cert-detail">
                                        <span className="cert-detail__label">Główne zastosowanie:</span>
                                        <span className="cert-detail__value">Praca, edukacja</span>
                                    </div>
                                    <div className="cert-detail">
                                        <span className="cert-detail__label">Popularność:</span>
                                        <span className="cert-detail__value">Europa, Brytyjski</span>
                                    </div>
                                </div>
                                <div className="certificate-card__pros-cons">
                                    <div className="pro">✅ Ważny bezterminowo</div>
                                    <div className="con">❌ Trudniejszy do zdania</div>
                                </div>
                            </div>

                            <div className="certificate-card">
                                <div className="certificate-card__header">
                                    <h3>TOEIC</h3>
                                    <span className="certificate-card__type">Business</span>
                                </div>
                                <div className="certificate-card__details">
                                    <div className="cert-detail">
                                        <span className="cert-detail__label">Koszt:</span>
                                        <span className="cert-detail__value">~400 zł</span>
                                    </div>
                                    <div className="cert-detail">
                                        <span className="cert-detail__label">Ważność:</span>
                                        <span className="cert-detail__value">2 lata</span>
                                    </div>
                                    <div className="cert-detail">
                                        <span className="cert-detail__label">Główne zastosowanie:</span>
                                        <span className="cert-detail__value">Środowisko biznesowe</span>
                                    </div>
                                    <div className="cert-detail">
                                        <span className="cert-detail__label">Popularność:</span>
                                        <span className="cert-detail__value">Korporacje</span>
                                    </div>
                                </div>
                                <div className="certificate-card__pros-cons">
                                    <div className="pro">✅ Skupia się na języku biznesowym</div>
                                    <div className="con">❌ Mniej uniwersalny</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja kosztów i przygotowania */}
                    <section className="article__section">
                        <h2>Koszty i przygotowanie 💰</h2>

                        <div className="cost-breakdown">
                            <div className="cost-item">
                                <h4>Koszt samego egzaminu</h4>
                                <div className="cost-amount">300-1000 zł</div>
                                <p>W zależności od rodzaju certyfikatu</p>
                            </div>

                            <div className="cost-item">
                                <h4>Materiały do nauki</h4>
                                <div className="cost-amount">100-300 zł</div>
                                <p>Podręczniki, testy próbne, kursy</p>
                            </div>

                            <div className="cost-item">
                                <h4>Kurs przygotowawczy</h4>
                                <div className="cost-amount">500-2000 zł</div>
                                <p>Opcjonalnie, w zależności od potrzeb</p>
                            </div>

                            <div className="cost-item cost-item--total">
                                <h4>Łączny koszt</h4>
                                <div className="cost-amount">900-3300 zł</div>
                                <p>Przygotuj się finansowo!</p>
                            </div>
                        </div>

                        <div className="preparation-timeline">
                            <h4>🕐 Typowy czas przygotowania</h4>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h5>Poziom A2 → B1</h5>
                                        <p>3-6 miesięcy regularnej nauki</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h5>Poziom B1 → B2</h5>
                                        <p>6-9 miesięcy intensywnej pracy</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h5>Poziom B2 → C1</h5>
                                        <p>9-12 miesięcy zaawansowanej nauki</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja decyzji */}
                    <section className="article__section">
                        <h2>Kiedy NIE warto robić certyfikatu? 🤔</h2>

                        <div className="warning-cards">
                            <div className="warning-card">
                                <h4>📊 Jeśli potrzebujesz tylko do CV</h4>
                                <p>W wielu branżach wystarczy wpisać poziom w CV i udowodnić go podczas rozmowy</p>
                            </div>

                            <div className="warning-card">
                                <h4>💸 Gdy budżet jest ograniczony</h4>
                                <p>Te same pieniądze możesz przeznaczyć na kurs lub materiały do nauki</p>
                            </div>

                            <div className="warning-card">
                                <h4>🎯 Gdy nie masz konkretnego celu</h4>
                                <p>Certyfikat bez planu wykorzystania to tylko papier</p>
                            </div>

                            <div className="warning-card">
                                <h4>⏰ Gdy nie jesteś gotowy</h4>
                                <p>Nie zdawaj "na próbę" - to strata pieniędzy i demotywujące</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja alternatyw */}
                    <section className="article__section">
                        <h2>Alternatywy dla certyfikatów 🔄</h2>

                        <div className="alternative-cards">
                            <div className="alternative-card">
                                <h4>🎯 Praktyka w pracy</h4>
                                <p>Doświadczenie zawodowe z użyciem angielskiego to najlepszy dowód umiejętności</p>
                            </div>

                            <div className="alternative-card">
                                <h4>💼 Projekty międzynarodowe</h4>
                                <p>Udział w projektach z anglojęzycznymi partnerami pokazuje realne umiejętności</p>
                            </div>

                            <div className="alternative-card">
                                <h4>📝 Portfolio językowe</h4>
                                <p>Zbiór Twoich prac, tłumaczeń, projektów wykonanych w języku obcym</p>
                            </div>

                            <div className="alternative-card">
                                <h4>🎥 Nagrania wideo</h4>
                                <p>Krótkie prezentacje lub rozmowy po angielsku jako dowód umiejętności</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja podsumowania */}
                    <section className="article__section">
                        <div className="decision-matrix">
                            <h3>📋 Matryca decyzyjna</h3>
                            <div className="matrix-grid">
                                <div className="matrix-cell">
                                    <h4>✅ Zrób certyfikat jeśli:</h4>
                                    <ul>
                                        <li>Planujesz studia za granicą</li>
                                        <li>Aplikujesz do międzynarodowej firmy</li>
                                        <li>Przygotowujesz się do imigracji</li>
                                        <li>Potrzebujesz mocnej motywacji</li>
                                    </ul>
                                </div>
                                <div className="matrix-cell">
                                    <h4>❌ Odłóż certyfikat jeśli:</h4>
                                    <ul>
                                        <li>Masz ograniczony budżet</li>
                                        <li>Nie masz konkretnego celu</li>
                                        <li>Twoja praca nie wymaga dokumentu</li>
                                        <li>Jesteś na zbyt niskim poziomie</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="final-verdict">
                            <h3>🎯 Werdykt końcowy</h3>
                            <p><strong>Certyfikat językowy to inwestycja</strong> - opłaca się tylko wtedy, gdy masz konkretny plan jego wykorzystania.
                                Jeśli nie spełniasz żadnego z powyższych warunków, lepiej zainwestować czas i pieniądze w praktyczną naukę języka.</p>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🎯 Sprawdź swój poziom za darmo!</h3>
                            <p>Zanim zainwestujesz w certyfikat, sprawdź swój aktualny poziom językowy naszym testem poziomującym</p>
                            <div className="action-buttons">
                                <Link to="/test-poziomujacy" className="btn btn--primary">Test poziomujący</Link>
                                <Link to="/cwiczenia" className="btn btn--secondary">Ćwiczenia przygotowawcze</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#certyfikaty</span>
                            <span className="tag">#egzaminyjezykowe</span>
                            <span className="tag">#ielts</span>
                            <span className="tag">#toefl</span>
                            <span className="tag">#cambridge</span>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default CertificatesWorth;