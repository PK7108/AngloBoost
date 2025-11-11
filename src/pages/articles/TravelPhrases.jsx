import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleStyles.css';

const TravelPhrases = () => {
    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/artykuly" className="article__breadcrumb-link">Artykuły</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Angielski w podróży</span>
                    </nav>
                    <h1 className="article__title">Angielski w podróży – praktyczne zwroty ✈️</h1>
                    <p className="article__intro">Lotnisko, hotel, restauracja, transport - opanuj kluczowe wyrażenia, które sprawią, że poczujesz się pewnie w każdej podróżniczej sytuacji</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 12 minut</span>
                        <span className="article__level">🎯 Dla: Poziom A1-B2</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>🌍 Dlaczego angielski to paszport do świata?</h3>
                            <p><strong>Angielski jest językiem globalnej komunikacji podróżniczej.</strong> Nawet w krajach nieanglojęzycznych, personel lotnisk, hoteli i restauracji zazwyczaj posługuje się angielskim. Znajomość kluczowych zwrotów to Twoja polisa ubezpieczeniowa na udaną podróż.</p>
                        </div>

                        <div className="scenario-cards">
                            <div className="scenario-card scenario-card--essential">
                                <h4>🛫 Lotnisko</h4>
                                <p>Check-in, bezpieczeństwo, boarding, odprawa celna</p>
                                <div className="scenario-level">Must-know</div>
                            </div>
                            <div className="scenario-card scenario-card--essential">
                                <h4>🏨 Hotel</h4>
                                <p>Rezerwacja, zameldowanie, obsługa pokoju, problemy</p>
                                <div className="scenario-level">Must-know</div>
                            </div>
                            <div className="scenario-card scenario-card--useful">
                                <h4>🍽️ Restauracja</h4>
                                <p>Rezerwacja, zamawianie, specjalne diety, rachunek</p>
                                <div className="scenario-level">Very useful</div>
                            </div>
                            <div className="scenario-card scenario-card--useful">
                                <h4>🚕 Transport</h4>
                                <p>Taksówki, transport publiczny, wynajem samochodu</p>
                                <div className="scenario-level">Very useful</div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja lotniska */}
                    <section className="article__section">
                        <h2>Lotnisko - od check-in do boardingu 🛫</h2>

                        <div className="preparation-timeline">
                            <h4>🗓️ Proces na lotnisku krok po kroku</h4>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-marker">1</div>
                                    <div className="timeline-content">
                                        <h5>Check-in</h5>
                                        <p>Rejestracja bagażu i odbiór karty pokładowej</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-marker">2</div>
                                    <div className="timeline-content">
                                        <h5>Security Check</h5>
                                        <p>Kontrola bezpieczeństwa i bagażu podręcznego</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-marker">3</div>
                                    <div className="timeline-content">
                                        <h5>Passport Control</h5>
                                        <p>Kontrola paszportowa</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-marker">4</div>
                                    <div className="timeline-content">
                                        <h5>Boarding</h5>
                                        <p>Wejście na pokład samolotu</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="certificate-comparison">
                            <div className="certificate-card">
                                <div className="certificate-card__header">
                                    <h3>Check-in Desk</h3>
                                    <div className="certificate-card__type">Rejestracja</div>
                                </div>
                                <div className="certificate-card__details">
                                    <div className="cert-detail">
                                        <div className="cert-detail__label">Twoje zwroty:</div>
                                        <div className="cert-detail__value">
                                            "Hello, I'd like to check in for flight AB123 to London."<br/>
                                            "I have one suitcase to check in."<br/>
                                            "Could I have an aisle/window seat, please?"<br/>
                                            "Is the flight on time?"
                                        </div>
                                    </div>
                                    <div className="cert-detail">
                                        <div className="cert-detail__label">Pytania personelu:</div>
                                        <div className="cert-detail__value">
                                            "May I see your passport, please?"<br/>
                                            "How many bags are you checking in?"<br/>
                                            "Did you pack your bags yourself?"<br/>
                                            "Are there any dangerous items in your luggage?"
                                        </div>
                                    </div>
                                </div>
                                <div className="certificate-card__pros-cons">
                                    <div className="pro">✅ Proste, standardowe pytania</div>
                                    <div className="con">❌ Szybkie tempo, hałas</div>
                                </div>
                            </div>

                            <div className="certificate-card">
                                <div className="certificate-card__header">
                                    <h3>Security Check</h3>
                                    <div className="certificate-card__type">Bezpieczeństwo</div>
                                </div>
                                <div className="certificate-card__details">
                                    <div className="cert-detail">
                                        <div className="cert-detail__label">Instrukcje:</div>
                                        <div className="cert-detail__value">
                                            "Please place your liquids in a clear plastic bag."<br/>
                                            "Laptops and tablets must be taken out of your bag."<br/>
                                            "Please remove your shoes and belt."<br/>
                                            "Empty your pockets into the tray."
                                        </div>
                                    </div>
                                    <div className="cert-detail">
                                        <div className="cert-detail__label">Twoje pytania:</div>
                                        <div className="cert-detail__value">
                                            "Should I take my laptop out?"<br/>
                                            "Do I need to remove my shoes?"<br/>
                                            "Is this bag too big?"<br/>
                                            "Where should I put my jacket?"
                                        </div>
                                    </div>
                                </div>
                                <div className="certificate-card__pros-cons">
                                    <div className="pro">✅ Powtarzalne procedury</div>
                                    <div className="con">❌ Stresująca sytuacja</div>
                                </div>
                            </div>
                        </div>

                        <div className="warning-cards">
                            <div className="warning-card">
                                <h4>⚠️ Ważne na lotnisku</h4>
                                <p><strong>Liquids rule:</strong> Płyny do 100ml w przezroczystej torbie</p>
                                <p><strong>Electronics:</strong> Laptopy i tablety osobno na taśmie</p>
                                <p><strong>Documents:</strong> Miej paszport i bilet pod ręką</p>
                                <p><strong>Time:</strong> Bądź na lotnisku 3h przed międzynarodowym lotem</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja hotelu */}
                    <section className="article__section">
                        <h2>Hotel - od recepcji do check-out 🏨</h2>

                        <div className="cost-breakdown">
                            <div className="cost-item">
                                <h4>📞 Rezerwacja</h4>
                                <div className="cost-amount">Phone/Online</div>
                                <p>Przed przyjazdem</p>
                            </div>
                            <div className="cost-item">
                                <h4>🏃 Check-in</h4>
                                <div className="cost-amount">Reception</div>
                                <p>Po przyjeździe</p>
                            </div>
                            <div className="cost-item">
                                <h4>🛎️ Pobyt</h4>
                                <div className="cost-amount">Service</div>
                                <p>Podczas pobytu</p>
                            </div>
                            <div className="cost-item cost-item--total">
                                <h4>🚪 Check-out</h4>
                                <div className="cost-amount">Departure</div>
                                <p>Przed wyjazdem</p>
                            </div>
                        </div>

                        <div className="reading-methods">
                            <div className="method-card">
                                <div className="method-card__header">
                                    <h3>Check-in Conversation</h3>
                                    <div className="method-difficulty">A2</div>
                                </div>
                                <div className="method-card__content">
                                    <p><strong>Typowy dialog przy recepcji:</strong></p>
                                    <div className="example-box">
                                        <p><strong>You:</strong> "Hello, I have a reservation under the name Kowalski."</p>
                                        <p><strong>Receptionist:</strong> "Welcome, Mr. Kowalski. Let me check... Yes, we have you for three nights. Could I see your passport, please?"</p>
                                        <p><strong>You:</strong> "Here you are. Could I have a room away from the elevator?"</p>
                                        <p><strong>Receptionist:</strong> "Certainly. Room 405. Breakfast is from 7 to 10 AM. Here's your key."</p>
                                        <p><strong>You:</strong> "Thank you. What's the WiFi password?"</p>
                                    </div>
                                    <div className="method-tips">
                                        <h5>💡 Przydatne zwroty:</h5>
                                        <p>"Is it possible to have a late check-out?"<br/>
                                            "Could I get an extra pillow?"<br/>
                                            "What time is checkout?"<br/>
                                            "Where is the gym/pool?"</p>
                                    </div>
                                </div>
                            </div>

                            <div className="method-card">
                                <div className="method-card__header">
                                    <h3>Hotel Services</h3>
                                    <div className="method-difficulty">A2+</div>
                                </div>
                                <div className="method-card__content">
                                    <p><strong>Usługi hotelowe i problemy:</strong></p>
                                    <ul>
                                        <li><strong>Housekeeping:</strong> "Could you clean my room, please?"</li>
                                        <li><strong>Maintenance:</strong> "The air conditioning isn't working in my room."</li>
                                        <li><strong>Restaurant:</strong> "Is breakfast included in the price?"</li>
                                        <li><strong>Reception:</strong> "Could you call me a taxi, please?"</li>
                                        <li><strong>Complaints:</strong> "I'm sorry, but the room is quite noisy."</li>
                                    </ul>
                                    <div className="method-tips">
                                        <h5>🚨 W sytuacjach problemowych:</h5>
                                        <p>"There seems to be a problem with..."<br/>
                                            "I'm afraid that..."<br/>
                                            "Could you help me with..."<br/>
                                            "I'd like to speak with the manager."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja restauracji */}
                    <section className="article__section">
                        <h2>Restauracja - od rezerwacji do rachunku 🍽️</h2>

                        <div className="alternative-cards">
                            <div className="alternative-card">
                                <h4>📞 Rezerwacja</h4>
                                <p>"I'd like to make a reservation for two people at 7 PM."<br/>
                                    "Do you have a table by the window?"<br/>
                                    "We're celebrating a special occasion."</p>
                            </div>
                            <div className="alternative-card">
                                <h4>👋 Przy wejściu</h4>
                                <p>"Hello, we have a reservation under Smith."<br/>
                                    "Table for two, please."<br/>
                                    "Could we have a non-smoking table?"</p>
                            </div>
                            <div className="alternative-card">
                                <h4>📖 Zamawianie</h4>
                                <p>"Could we see the menu, please?"<br/>
                                    "What do you recommend?"<br/>
                                    "I'll have the chicken curry."</p>
                            </div>
                            <div className="alternative-card">
                                <h4>💰 Rachunek</h4>
                                <p>"Could we have the bill, please?"<br/>
                                    "Do you accept credit cards?"<br/>
                                    "Is service included?"</p>
                            </div>
                        </div>

                        <div className="decision-matrix">
                            <div className="matrix-grid">
                                <div className="matrix-cell">
                                    <h4>🍴 Zamawianie jedzenia</h4>
                                    <ul>
                                        <li>"Could I see the wine list, please?"</li>
                                        <li>"What's today's special?"</li>
                                        <li>"I'd like my steak medium-rare."</li>
                                        <li>"Could I have the dressing on the side?"</li>
                                        <li>"Is this dish very spicy?"</li>
                                    </ul>
                                </div>
                                <div className="matrix-cell">
                                    <h4>🚫 Specjalne potrzeby</h4>
                                    <ul>
                                        <li>"I'm allergic to nuts."</li>
                                        <li>"I'm vegetarian/vegan."</li>
                                        <li>"I can't eat gluten."</li>
                                        <li>"Does this contain dairy?"</li>
                                        <li>"I'm on a low-sodium diet."</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="final-verdict">
                            <h3>🍷 Kultura restauracyjna</h3>
                            <p>W krajach anglojęzycznych napiwki (tips) wynoszą zwykle 15-20% rachunku. Service charge może być już doliczony - zawsze sprawdź rachunek. "Could we have the bill?" jest bardziej uprzejme niż "Check, please!"</p>
                        </div>
                    </section>

                    {/* Sekcja transportu */}
                    <section className="article__section">
                        <h2>Transport - poruszanie się po mieście 🚕</h2>

                        <div className="age-comparison">
                            <div className="age-group">
                                <div className="age-group__header">
                                    <h3>🚕 Taxi</h3>
                                    <div className="age-label">Taksówki</div>
                                </div>
                                <div className="age-group__content">
                                    <div className="advantages">
                                        <h4>Zwroty:</h4>
                                        <ul>
                                            <li>"Could you take me to this address, please?"</li>
                                            <li>"How much will it cost to the airport?"</li>
                                            <li>"Could you turn on the meter, please?"</li>
                                            <li>"I'm in a hurry, please."</li>
                                        </ul>
                                    </div>
                                    <div className="challenges">
                                        <h4>Pytania kierowcy:</h4>
                                        <ul>
                                            <li>"Which route would you prefer?"</li>
                                            <li>"Would you like the air conditioning on?"</li>
                                            <li>"Cash or card?"</li>
                                        </ul>
                                    </div>
                                    <div className="success-rate">
                                        <div className="rate-circle">
                                            <div className="rate-value">A1</div>
                                            <div className="rate-label">Level</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="age-group">
                                <div className="age-group__header">
                                    <h3>🚆 Public Transport</h3>
                                    <div className="age-label">Transport publiczny</div>
                                </div>
                                <div className="age-group__content">
                                    <div className="advantages">
                                        <h4>Zwroty:</h4>
                                        <ul>
                                            <li>"Which line goes to the city center?"</li>
                                            <li>"I'd like a day ticket, please."</li>
                                            <li>"Does this bus go to the museum?"</li>
                                            <li>"How often do the trains run?"</li>
                                        </ul>
                                    </div>
                                    <div className="challenges">
                                        <h4>Pytania do obsługi:</h4>
                                        <ul>
                                            <li>"Where can I buy a ticket?"</li>
                                            <li>"Is this seat taken?"</li>
                                            <li>"Which stop is for the castle?"</li>
                                        </ul>
                                    </div>
                                    <div className="success-rate">
                                        <div className="rate-circle">
                                            <div className="rate-value">A2</div>
                                            <div className="rate-label">Level</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="age-group">
                                <div className="age-group__header">
                                    <h3>🚗 Car Rental</h3>
                                    <div className="age-label">Wynajem samochodu</div>
                                </div>
                                <div className="age-group__content">
                                    <div className="advantages">
                                        <h4>Zwroty:</h4>
                                        <ul>
                                            <li>"I'd like to rent a car for three days."</li>
                                            <li>"What's the daily rate?"</li>
                                            <li>"Does it include insurance?"</li>
                                            <li>"I'd like full coverage, please."</li>
                                        </ul>
                                    </div>
                                    <div className="challenges">
                                        <h4>Warunki:</h4>
                                        <ul>
                                            <li>"I need an automatic transmission."</li>
                                            <li>"What's the mileage limit?"</li>
                                            <li>"Where should I return the car?"</li>
                                        </ul>
                                    </div>
                                    <div className="success-rate">
                                        <div className="rate-circle">
                                            <div className="rate-value">B1</div>
                                            <div className="rate-label">Level</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja awaryjna */}
                    <section className="article__section">
                        <h2>Sytuacje awaryjne - ważne zwroty 🆘</h2>

                        <div className="problem-cards">
                            <div className="problem-card">
                                <h4>🏥 Zdrowie</h4>
                                <p>"I need a doctor."<br/>
                                    "It's an emergency!"<br/>
                                    "I have travel insurance."<br/>
                                    "Where is the nearest pharmacy?"</p>
                                <div className="problem-stat">
                                    <span className="stat-number">112</span>
                                    <span className="stat-label">numer alarmowy EU</span>
                                </div>
                            </div>
                            <div className="problem-card">
                                <h4>👮 Bezpieczeństwo</h4>
                                <p>"Help!"<br/>
                                    "Call the police!"<br/>
                                    "My wallet was stolen."<br/>
                                    "I'm lost."</p>
                                <div className="problem-stat">
                                    <span className="stat-number">911</span>
                                    <span className="stat-label">USA/Kanada</span>
                                </div>
                            </div>
                            <div className="problem-card">
                                <h4>💼 Dokumenty</h4>
                                <p>"I lost my passport."<br/>
                                    "My credit card was stolen."<br/>
                                    "I need to contact my embassy."<br/>
                                    "Can you help me?"</p>
                                <div className="problem-stat">
                                    <span className="stat-number">999</span>
                                    <span className="stat-label">Wielka Brytania</span>
                                </div>
                            </div>
                        </div>

                        <div className="success-story">
                            <div className="success-story__quote">"</div>
                            <div className="success-story__content">
                                <h4>🌍 Prawdziwa historia</h4>
                                <p>"Podczas podróży po Włoszech zgubiłam paszport. Dzięki znajomości angielskiego szybko znalazłam ambasadę, wytłumaczyłam sytuację i dostałam dokumenty tymczasowe. Angielski uratował moją podróż!"</p>
                                <div className="success-story__progress">
                                    <div className="progress-item"><span>Czas:</span> 2 godziny</div>
                                    <div className="progress-item"><span>Koszt:</span> 0 EUR</div>
                                    <div className="progress-item"><span>Stres:</span> Zmniejszony o 80%</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja przygotowania */}
                    <section className="article__section">
                        <h2>Przygotowanie do podróży - checklista ✅</h2>

                        <div className="confidence-building">
                            <h4>📋 7 dni przed podróżą</h4>
                            <div className="confidence-steps">
                                <div className="confidence-step">
                                    <div className="step-number">1</div>
                                    <div className="step-content">
                                        <h5>Zwroty lotniskowe</h5>
                                        <p>Naucz się 10 kluczowych zwrotów</p>
                                    </div>
                                </div>
                                <div className="confidence-step">
                                    <div className="step-number">2</div>
                                    <div className="step-content">
                                        <h5>Dialog hotelowy</h5>
                                        <p>Przećwicz check-in conversation</p>
                                    </div>
                                </div>
                                <div className="confidence-step">
                                    <div className="step-number">3</div>
                                    <div className="step-content">
                                        <h5>Menu restauracyjne</h5>
                                        <p>Poznaj słownictwo żywieniowe</p>
                                    </div>
                                </div>
                                <div className="confidence-step">
                                    <div className="step-number">4</div>
                                    <div className="step-content">
                                        <h5>Zwroty awaryjne</h5>
                                        <p>Zapamiętaj numery alarmowe</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="daily-habits">
                            <div className="habit-card">
                                <h4>🛫 Na lotnisku</h4>
                                <ul>
                                    <li>Paszport i bilet w łatwo dostępnym miejscu</li>
                                    <li>Przygotuj płyny w przezroczystej torbie</li>
                                    <li>Miej przygotowane zwroty po angielsku</li>
                                    <li>Sprawdź gate i czas boardingu</li>
                                </ul>
                            </div>
                            <div className="habit-card">
                                <h4>🏨 W hotelu</h4>
                                <ul>
                                    <li>Potwierdź rezerwację przed przyjazdem</li>
                                    <li>Przygotuj paszport do check-in</li>
                                    <li>Zapytaj o WiFi i śniadanie</li>
                                    <li>Zapisz numer recepcji</li>
                                </ul>
                            </div>
                            <div className="habit-card">
                                <h4>🍽️ W restauracji</h4>
                                <ul>
                                    <li>Naucz się pytać o składniki</li>
                                    <li>Przećwicz zamawianie</li>
                                    <li>Poznaj lokalne zwyczaje napiwkowe</li>
                                    <li>Przygotuj się na pytania kelnera</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja zasobów */}
                    <section className="article__section">
                        <h2>Dodatkowe zasoby i aplikacje 🎒</h2>

                        <div className="progress-tracker">
                            <h4>📊 Twój postęp w nauce</h4>
                            <div className="tracker-grid">
                                <div className="tracker-item">
                                    <div className="tracker-label">Lotnisko</div>
                                    <div className="tracker-bar">
                                        <div className="tracker-fill" style={{width: '85%'}}></div>
                                    </div>
                                </div>
                                <div className="tracker-item">
                                    <div className="tracker-label">Hotel</div>
                                    <div className="tracker-bar">
                                        <div className="tracker-fill" style={{width: '70%'}}></div>
                                    </div>
                                </div>
                                <div className="tracker-item">
                                    <div className="tracker-label">Restauracja</div>
                                    <div className="tracker-bar">
                                        <div className="tracker-fill" style={{width: '60%'}}></div>
                                    </div>
                                </div>
                                <div className="tracker-item">
                                    <div className="tracker-label">Transport</div>
                                    <div className="tracker-bar">
                                        <div className="tracker-fill" style={{width: '75%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="action-box">
                            <h3>✈️ Gotowy na podróż?</h3>
                            <p>Wybierz jedną sekcję z tego artykułu i opanuj ją w ciągu najbliższych 3 dni. Pamiętaj - nawet podstawowa znajomość tych zwrotów znacząco zwiększy Twój komfort podróżowania!</p>
                            <div className="action-buttons">
                                <Link to="/cwiczenia/slownictwo" className="btn btn--primary">Ćwiczenia Słownictwa</Link>
                                <Link to="/slownictwo/slownik-tematyczny/podróże" className="btn btn--secondary">Słownictwo Podróżne</Link>
                                <Link to="/materialy" className="btn btn--outline">Dodatkowe Materiały</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#podróże</span>
                            <span className="tag">#lotnisko</span>
                            <span className="tag">#hotel</span>
                            <span className="tag">#restauracja</span>
                            <span className="tag">#transport</span>
                            <span className="tag">#zwroty</span>
                            <span className="tag">#turystyka</span>
                            <span className="tag">#angielskipodróżniczy</span>
                        </div>

                        {/* UKRYTA SEKCJA SEO */}
                        <div style={{display: 'none'}} aria-hidden="true">
                            <p>Angielski w podróży, praktyczne zwroty angielskie, lotnisko po angielsku, hotel po angielsku, restauracja po angielsku, zwroty podróżne angielski, angielski dla turystów, komunikacja w podróży, dialogi po angielsku w podróży, słownictwo podróżne angielski, sytuacje turystyczne po angielsku</p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default TravelPhrases;