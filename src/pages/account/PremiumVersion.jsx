import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Premium.css';

const Premium = () => {
    const [selectedPlan, setSelectedPlan] = useState('yearly');

    const features = [
        {
            icon: '🚫',
            title: 'Zero reklam',
            description: 'Całkowite usunięcie reklam z całej platformy - skup się tylko na nauce',
            free: 'Reklamy wspierające platformę',
            premium: 'Brak reklam - czyste środowisko'
        },
        {
            icon: '💡',
            title: 'Szczegółowe wyjaśnienia',
            description: 'Dokładne omówienie błędów w ćwiczeniach z przykładami i alternatywnymi rozwiązaniami',
            free: 'Podstawowy feedback',
            premium: 'Szczegółowe analizy błędów'
        },
        {
            icon: '📚',
            title: 'Materiały premium',
            description: 'Ekskluzywne lekcje video, arkusze PDF do druku i specjalne zestawy ćwiczeń',
            free: 'Podstawowe materiały',
            premium: 'Rozszerzone zasoby premium'
        },
        {
            icon: '🎯',
            title: 'Spersonalizowane plany nauki',
            description: 'Indywidualny plan nauki dopasowany do Twoich celów i postępów',
            free: 'Standardowe ścieżki',
            premium: 'Personalizowane plany'
        },
        {
            icon: '📊',
            title: 'Zaawansowane statystyki',
            description: 'Szczegółowe raporty postępów, analiza słabych punktów i rekomendacje',
            free: 'Podstawowe statystyki',
            premium: 'Zaawansowane analizy'
        },
        {
            icon: '🎧',
            title: 'Native speaker audio',
            description: 'Dodatkowe nagrania native speakerów w różnych akcentach i kontekstach',
            free: 'Podstawowe nagrania',
            premium: 'Rozszerzone nagrania native'
        },
        {
            icon: '⚡',
            title: 'Tryb offline',
            description: 'Pobieraj materiały i ćwicz bez połączenia z internetem',
            free: 'Tylko online',
            premium: 'Dostęp offline'
        },
        {
            icon: '👥',
            title: 'Wsparcie premium',
            description: 'Szybsze odpowiedzi od zespołu wsparcia i priorytetowa pomoc',
            free: 'Standardowe wsparcie',
            premium: 'Priorytetowe wsparcie'
        }
    ];

    const plans = [
        {
            name: 'Miesięczny',
            price: '29',
            period: 'miesiąc',
            yearlyEquivalent: '348 zł rocznie',
            popular: false,
            features: [
                'Pełny dostęp do wszystkich funkcji premium',
                'Możliwość rezygnacji w każdej chwili',
                'Brak zobowiązań długoterminowych'
            ]
        },
        {
            name: 'Roczny',
            price: '249',
            period: 'rok',
            yearlyEquivalent: '20,75 zł miesięcznie',
            popular: true,
            features: [
                'Oszczędność 99 zł w porównaniu do miesięcznego',
                'Pełny dostęp do wszystkich funkcji premium',
                'Najlepsza oferta długoterminowa'
            ]
        }
    ];

    const testimonials = [
        {
            name: 'Anna K.',
            role: 'Studentka',
            content: 'Premium kompletnie zmieniło moje podejście do nauki. Szczegółowe wyjaśnienia błędów są bezcenne!',
            rating: 5
        },
        {
            name: 'Tomasz W.',
            role: 'Profesjonalista',
            content: 'Materiały biznesowe i brak reklam pozwalają mi efektywnie uczyć się w pracy.',
            rating: 5
        },
        {
            name: 'Magdalena P.',
            role: 'Nauczycielka',
            content: 'Używam materiałów premium na zajęciach dodatkowych. Jakość jest niesamowita.',
            rating: 4
        }
    ];

    const faqs = [
        {
            question: 'Czy mogę anulować subskrypcję w każdej chwili?',
            answer: 'Tak, możesz anulować subskrypcję premium w dowolnym momencie. Dostęp do funkcji premium wygaśnie na koniec okresu rozliczeniowego.'
        },
        {
            question: 'Czy materiały premium są regularnie aktualizowane?',
            answer: 'Tak, co miesiąc dodajemy nowe materiały premium, ćwiczenia i lekcje video dla naszych użytkowników.'
        },
        {
            question: 'Czy mogę korzystać z premium na wielu urządzeniach?',
            answer: 'Tak, premium działa na wszystkich Twoich urządzeniach - komputerze, tablecie i telefonie.'
        },
        {
            question: 'Jakie metody płatności akceptujecie?',
            answer: 'Akceptujemy karty płatnicze, PayPal, BLIK oraz przelewy tradycyjne.'
        }
    ];

    return (
        <article className="premium-article">
            <div className="premium-hero">
                <div className="container">
                    <h1 className="premium-hero__title">AngloBoost <span className="premium-badge">Premium</span></h1>
                    <p className="premium-hero__subtitle">
                        Weź swoją naukę angielskiego na wyższy poziom. Usuń ograniczenia i osiągaj lepsze rezultaty szybciej.
                    </p>
                    <div className="premium-hero__stats">
                        <div className="stat">
                            <span className="stat__number">3x</span>
                            <span className="stat__label">szybsze postępy</span>
                        </div>
                        <div className="stat">
                            <span className="stat__number">100%</span>
                            <span className="stat__label">skupienia na nauce</span>
                        </div>
                        <div className="stat">
                            <span className="stat__number">500+</span>
                            <span className="stat__label">materiałów premium</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="premium-content">
                    {/* Sekcja porównania */}
                    <section className="comparison-section">
                        <h2>Porównaj wersje</h2>
                        <p className="section-intro">Zobacz jak Premium przyspiesza Twoją naukę</p>

                        <div className="comparison-grid">
                            {features.map((feature, index) => (
                                <div key={index} className="feature-comparison">
                                    <div className="feature-header">
                                        <span className="feature-icon">{feature.icon}</span>
                                        <h3>{feature.title}</h3>
                                    </div>
                                    <p className="feature-description">{feature.description}</p>
                                    <div className="comparison-row">
                                        <div className="version free-version">
                                            <span className="version-label">Darmowa</span>
                                            <span className="version-desc">{feature.free}</span>
                                        </div>
                                        <div className="version premium-version">
                                            <span className="version-label">Premium</span>
                                            <span className="version-desc">{feature.premium}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Sekcja cen */}
                    <section className="pricing-section">
                        <h2>Wybierz plan Premium</h2>
                        <p className="section-intro">Inwestycja w siebie, która się zwraca</p>

                        {/*<div className="plan-switcher">*/}
                        {/*    <button*/}
                        {/*        className={`switch-btn ${selectedPlan === 'monthly' ? 'active' : ''}`}*/}
                        {/*        onClick={() => setSelectedPlan('monthly')}*/}
                        {/*    >*/}
                        {/*        Płatność miesięczna*/}
                        {/*    </button>*/}
                        {/*    <button*/}
                        {/*        className={`switch-btn ${selectedPlan === 'yearly' ? 'active' : ''}`}*/}
                        {/*        onClick={() => setSelectedPlan('yearly')}*/}
                        {/*    >*/}
                        {/*        Płatność roczna <span className="save-badge">OSZCZĘDŹ 33%</span>*/}
                        {/*    </button>*/}
                        {/*</div>*/}

                        <div className="pricing-grid">
                            {plans.map((plan, index) => (
                                <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                                    {plan.popular && <div className="popular-badge">NAJPOPULARNIEJSZE</div>}
                                    <div className="plan-header">
                                        <h3>{plan.name}</h3>
                                        <div className="plan-price">
                                            <span className="price-amount">{plan.price} zł</span>
                                            <span className="price-period">/{plan.period}</span>
                                        </div>
                                        <p className="price-equivalent">{plan.yearlyEquivalent}</p>
                                    </div>
                                    <ul className="plan-features">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx}>✓ {feature}</li>
                                        ))}
                                    </ul>
                                    <button className="btn btn--premium">
                                        Wybieram {plan.name.toLowerCase()}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="price-guarantee">
                            <span className="guarantee-icon">🔒</span>
                            <p><strong>Gwarancja zwrotu pieniędzy:</strong> Masz 14 dni na przetestowanie Premium. Jeśli nie będziesz zadowolony, zwrócimy Ci pieniądze.</p>
                        </div>
                    </section>

                    {/* Sekcja opinii */}
                    <section className="testimonials-section">
                        <h2>Co mówią nasi użytkownicy Premium</h2>
                        <div className="testimonials-grid">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="testimonial-card">
                                    <div className="testimonial-rating">
                                        {'★'.repeat(testimonial.rating)}
                                        {'☆'.repeat(5 - testimonial.rating)}
                                    </div>
                                    <p className="testimonial-content">"{testimonial.content}"</p>
                                    <div className="testimonial-author">
                                        <strong>{testimonial.name}</strong>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Sekcja FAQ */}
                    <section className="faq-section">
                        <h2>Często zadawane pytania</h2>
                        <div className="faq-grid">
                            {faqs.map((faq, index) => (
                                <div key={index} className="faq-item">
                                    <h4>{faq.question}</h4>
                                    <p>{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Sekcja CTA */}
                    <section className="final-cta">
                        <div className="cta-content">
                            <h2>Gotów na przełom w nauce angielskiego?</h2>
                            <p>Dołącz do tysięcy zadowolonych użytkowników AngloBoost Premium i osiągaj lepsze rezultaty w krótszym czasie.</p>
                            <div className="cta-buttons">
                                <button className="btn btn--premium-large">
                                    Rozpocznij premium już teraz
                                </button>
                                <Link to="/materialy" className="btn btn--outline">
                                    Najpierw sprawdź darmowe materiały
                                </Link>
                            </div>
                            <p className="cta-note">
                                ⚡ <strong>Specjalna oferta:</strong> Pierwsze 7 dni za darmo dla nowych użytkowników
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </article>
    );
};

export default Premium;