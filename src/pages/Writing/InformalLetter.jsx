import React from 'react';
import { Link } from 'react-router-dom';
import './WritingStyles.css';

const InformalLetter = () => {
    return (
        <article className="writing-article">
            <div className="writing-article__header">
                <div className="container">
                    <nav className="writing-article__breadcrumb">
                        <Link to="/pisanie" className="writing-article__breadcrumb-link">Pisanie</Link>
                        <span className="writing-article__breadcrumb-separator">/</span>
                        <span className="writing-article__breadcrumb-current">List nieformalny</span>
                    </nav>
                    <h1 className="writing-article__title">Jak pisać nieformalne listy po angielsku? 💌</h1>
                    <p className="writing-article__intro">Kompletny przewodnik po swobodnej korespondencji z przyjaciółmi i rodziną w języku angielskim</p>
                    <div className="writing-article__meta">
                        <span className="writing-article__reading-time">⏱️ Czas czytania: 7 minut</span>
                        <span className="writing-article__level">🎯 Poziom: A2-B2</span>
                        <span className="writing-article__words">📝 Słowa kluczowe: informal letter, friendly letter, personal writing</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="writing-article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="writing-article__section">
                        <div className="writing-tip-box">
                            <h3>👋 Czym jest list nieformalny po angielsku?</h3>
                            <p><strong>Informal letter</strong> to swobodna forma pisemna używana w komunikacji z przyjaciółmi, rodziną i znajomymi. Charakteryzuje się luźną strukturą, potocznym językiem i przyjaznym tonem.</p>
                        </div>

                        <h2>Kiedy piszemy listy nieformalne?</h2>
                        <div className="writing-points-grid">
                            <div className="writing-point-card">
                                <h4>👨‍👩‍👧‍👦 Rodzina i przyjaciele</h4>
                                <p>Opowiadanie o wydarzeniach, dzielenie się wiadomościami, podtrzymywanie kontaktów</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>🎉 Okazje specjalne</h4>
                                <p>Życzenia urodzinowe, świąteczne, gratulacje, zaproszenia</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>📝 Korespondencja osobista</h4>
                                <p>Dzielenie się doświadczeniami, opowiadanie o podróżach, wspomnienia</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja struktury */}
                    <section className="writing-article__section">
                        <h2>Struktura listu nieformalnego 🏗️</h2>

                        <div className="letter-structure">
                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">1</span>
                                    <h3>Nagłówek (Heading)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Adres i data</h4>
                                    <ul>
                                        <li>✅ Twój adres (opcjonalnie)</li>
                                        <li>✅ Data w formacie: 15th May 2024 lub May 15, 2024</li>
                                        <li>✅ Można pominąć adres odbiorcy</li>
                                        <li>✅ Luźniejszy format niż w liście formalnym</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        123 Sunny Street<br/>
                                        Warsaw<br/>
                                        15th May 2024<br/>
                                        <em>lub po prostu:</em><br/>
                                        May 15, 2024
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">2</span>
                                    <h3>Powitanie (Greeting)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Przyjazne rozpoczęcie</h4>
                                    <ul>
                                        <li>✅ Dear [Imię],</li>
                                        <li>✅ Hi [Imię],</li>
                                        <li>✅ Hello [Imię],</li>
                                        <li>✅ Hey [Imię], (bardzo nieformalnie)</li>
                                        <li>✅ Można dodać "My dear..." dla bliskich osób</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "Dear Anna,"<br/>
                                        "Hi Tom!"<br/>
                                        "Hello my dear friend,"<br/>
                                        "Hey Mike,"
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">3</span>
                                    <h3>Wstęp (Opening)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Rozpoczęcie rozmowy</h4>
                                    <ul>
                                        <li>✅ Zapytaj jak się ma osoba</li>
                                        <li>✅ Odnieś się do poprzedniego kontaktu</li>
                                        <li>✅ Wyjaśnij dlaczego piszesz</li>
                                        <li>✅ Utrzymaj przyjazny, swobodny ton</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "How are you? I hope you're doing well!"<br/>
                                        "Thanks for your last letter - it was great to hear from you!"<br/>
                                        "I'm writing to tell you about my recent trip to..."<br/>
                                        "You won't believe what happened yesterday!"
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">4</span>
                                    <h3>Główna część (Body)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Treść listu</h4>
                                    <ul>
                                        <li>✅ Podziel na akapity tematyczne</li>
                                        <li>✅ Używaj potocznego języka</li>
                                        <li>✅ Zadawaj pytania do odbiorcy</li>
                                        <li>✅ Dziel się emocjami i opiniami</li>
                                        <li>✅ Możesz używać skrótów i idiomów</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "Anyway, I've got so much to tell you!"<br/>
                                        "By the way, did I mention that..."<br/>
                                        "OMG, you should have seen it!"<br/>
                                        "I'm so excited about..."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">5</span>
                                    <h3>Zakończenie (Closing)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Pożegnanie i podpis</h4>
                                    <ul>
                                        <li>✅ Zaproś do odpowiedzi</li>
                                        <li>✅ Wyraź chęć spotkania</li>
                                        <li>✅ Pożegnaj się ciepło</li>
                                        <li>✅ Podpisz się imieniem</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "Well, that's all for now."<br/>
                                        "I can't wait to hear from you!"<br/>
                                        "Write back soon!"<br/>
                                        "Best wishes,"<br/>
                                        "Love,"<br/>
                                        "Take care,"<br/>
                                        "[Twoje imię]"
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja różnic formalne vs nieformalne */}
                    <section className="writing-article__section">
                        <h2>Różnice: Formalny vs Nieformalny ⚖️</h2>

                        <div className="comparison-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Element</th>
                                    <th>List Formalny</th>
                                    <th>List Nieformalny</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><strong>Powitanie</strong></td>
                                    <td>Dear Mr. Smith,</td>
                                    <td>Hi John! / Dear Anna,</td>
                                </tr>
                                <tr>
                                    <td><strong>Język</strong></td>
                                    <td>I am writing to inform you...</td>
                                    <td>I'm writing to tell you...</td>
                                </tr>
                                <tr>
                                    <td><strong>Skróty</strong></td>
                                    <td>Unikaj: I'm, don't, can't</td>
                                    <td>Używaj: I'm, don't, it's</td>
                                </tr>
                                <tr>
                                    <td><strong>Zakończenie</strong></td>
                                    <td>Yours sincerely,</td>
                                    <td>Best wishes, / Love,</td>
                                </tr>
                                <tr>
                                    <td><strong>Podpis</strong></td>
                                    <td>Imię i nazwisko</td>
                                    <td>Tylko imię</td>
                                </tr>
                                <tr>
                                    <td><strong>Struktura</strong></td>
                                    <td>Ścisła, sztywna</td>
                                    <td>Luźna, swobodna</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Sekcja zwrotów nieformalnych */}
                    <section className="writing-article__section">
                        <h2>Przydatne zwroty nieformalne 💬</h2>

                        <div className="phrases-sections">
                            <div className="phrases-category">
                                <h3>👋 Rozpoczęcie listu</h3>
                                <div className="phrases-grid">
                                    <div className="phrase-item">
                                        <span className="phrase-english">How are you? / How's it going?</span>
                                        <span className="phrase-polish">Jak się masz? / Co słychać?</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Long time no see!</span>
                                        <span className="phrase-polish">Dawno się nie widzieliśmy!</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">I hope this letter finds you well.</span>
                                        <span className="phrase-polish">Mam nadzieję, że ten list zastanie Cię w dobrym zdrowiu.</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Thanks for your last letter/email.</span>
                                        <span className="phrase-polish">Dzięki za ostatni list/email.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="phrases-category">
                                <h3>📢 Dzielenie się wiadomościami</h3>
                                <div className="phrases-grid">
                                    <div className="phrase-item">
                                        <span className="phrase-english">You'll never guess what happened!</span>
                                        <span className="phrase-polish">Nie zgadniesz co się stało!</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">I've got some exciting news!</span>
                                        <span className="phrase-polish">Mam ekscytujące wiadomości!</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">By the way,...</span>
                                        <span className="phrase-polish">A tak przy okazji,...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Anyway, back to what I was saying...</span>
                                        <span className="phrase-polish">Wracając do tego, co mówiłem...</span>
                                    </div>
                                </div>
                            </div>

                            <div className="phrases-category">
                                <h3>❓ Zadawanie pytań</h3>
                                <div className="phrases-grid">
                                    <div className="phrase-item">
                                        <span className="phrase-english">What have you been up to?</span>
                                        <span className="phrase-polish">Co u Ciebie słychać?</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">How's your family?</span>
                                        <span className="phrase-polish">Jak się miewa Twoja rodzina?</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">What do you think about...?</span>
                                        <span className="phrase-polish">Co myślisz o...?</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Have you been to... lately?</span>
                                        <span className="phrase-polish">Czy byłeś ostatnio w...?</span>
                                    </div>
                                </div>
                            </div>

                            <div className="phrases-category">
                                <h3>👋 Zakończenie listu</h3>
                                <div className="phrases-grid">
                                    <div className="phrase-item">
                                        <span className="phrase-english">Well, I'd better go now.</span>
                                        <span className="phrase-polish">Cóż, chyba już pójdę.</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">I can't wait to hear from you!</span>
                                        <span className="phrase-polish">Nie mogę się doczekać Twojej odpowiedzi!</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Give my love to your family.</span>
                                        <span className="phrase-polish">Pozdrów ode mnie rodzinę.</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Hope to see you soon!</span>
                                        <span className="phrase-polish">Mam nadzieję, że wkrótce się zobaczymy!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Przykładowy list nieformalny */}
                    <section className="writing-article__section">
                        <h2>Przykładowy list nieformalny ✨</h2>

                        <div className="sample-letter informal">
                            <div className="letter-header">
                                <h3>List do przyjaciela za granicą</h3>
                                <div className="letter-stats">
                                    <span className="stat">Słowa: 280</span>
                                    <span className="stat">Poziom: B1</span>
                                    <span className="stat">Ton: Przyjazny, swobodny</span>
                                </div>
                            </div>

                            <div className="letter-content">
                                <div className="letter-address informal">
                                    <div className="sender-address">
                                        123 Sunny Street<br/>
                                        Warsaw<br/>
                                        May 15, 2024
                                    </div>
                                </div>

                                <div className="letter-body">
                                    <div className="salutation informal">
                                        Dear Tom,
                                    </div>

                                    <div className="paragraph">
                                        <p>
                                            <strong>How are you? I hope you're doing well!</strong> I'm sorry I haven't written for so long, but I've been really busy with work and studies. Thanks for your last email - it was great to hear all your news from London!
                                        </p>
                                        <p className="analysis">
                                            <strong>Analiza:</strong> Przyjazne rozpoczęcie, przeprosiny za opóźnienie, odniesienie do poprzedniego kontaktu.
                                        </p>
                                    </div>

                                    <div className="paragraph">
                                        <p>
                                            <strong>You won't believe what happened last week!</strong> I finally got promoted at work! I'm now the team leader of our marketing department. I'm so excited but also a bit nervous about the new responsibilities. The best part is that I'll be traveling to London for a conference in July - maybe we could meet up?
                                        </p>
                                        <p className="analysis">
                                            <strong>Analiza:</strong> Dzielenie się ważną wiadomością, wyrażanie emocji, propozycja spotkania.
                                        </p>
                                    </div>

                                    <div className="paragraph">
                                        <p>
                                            <strong>Anyway, how have you been?</strong> How's your new job going? You mentioned in your last email that you were working on some interesting projects. I'd love to hear more about them! And how's Sarah? Please give her my best wishes.
                                        </p>
                                        <p className="analysis">
                                            <strong>Analiza:</strong> Zadawanie pytań do odbiorcy, okazywanie zainteresowania jego życiem.
                                        </p>
                                    </div>

                                    <div className="paragraph">
                                        <p>
                                            <strong>Well, I should probably finish here</strong> as I need to get ready for work. I really hope we can meet in July! Let me know if you're free around the 15th.
                                        </p>
                                        <p className="analysis">
                                            <strong>Analiza:</strong> Naturalne zakończenie, powtórzenie propozycji spotkania, konkretna data.
                                        </p>
                                    </div>

                                    <div className="closing informal">
                                        Hope to see you soon!<br/>
                                        Best wishes,<br/>
                                        <div className="signature">
                                            Mike
                                        </div>
                                    </div>

                                    <div className="postscript">
                                        <strong>P.S.</strong> I almost forgot - I saw Peter last weekend and he says hello!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja skrótów i potocyzmów */}
                    <section className="writing-article__section">
                        <h2>Skróty i wyrażenia potoczne 🔥</h2>

                        <div className="informal-expressions">
                            <div className="expressions-category">
                                <h3>💬 Popularne skróty</h3>
                                <div className="expressions-grid">
                                    <div className="expression-item">
                                        <span className="expression-short">I'm / You're / He's</span>
                                        <span className="expression-full">I am / You are / He is</span>
                                    </div>
                                    <div className="expression-item">
                                        <span className="expression-short">don't / can't / won't</span>
                                        <span className="expression-full">do not / cannot / will not</span>
                                    </div>
                                    <div className="expression-item">
                                        <span className="expression-short">gonna</span>
                                        <span className="expression-full">going to</span>
                                    </div>
                                    <div className="expression-item">
                                        <span className="expression-short">wanna</span>
                                        <span className="expression-full">want to</span>
                                    </div>
                                    <div className="expression-item">
                                        <span className="expression-short">gotta</span>
                                        <span className="expression-full">got to</span>
                                    </div>
                                    <div className="expression-item">
                                        <span className="expression-short">kinda</span>
                                        <span className="expression-full">kind of</span>
                                    </div>
                                </div>
                            </div>

                            <div className="expressions-category">
                                <h3>🎯 Przydatne idiomy</h3>
                                <div className="expressions-grid">
                                    <div className="expression-item">
                                        <span className="expression-idiom">Break a leg!</span>
                                        <span className="expression-meaning">Powodzenia! (przed występem)</span>
                                    </div>
                                    <div className="expression-item">
                                        <span className="expression-idiom">Hit the books</span>
                                        <span className="expression-meaning">Uczyć się intensywnie</span>
                                    </div>
                                    <div className="expression-item">
                                        <span className="expression-idiom">On cloud nine</span>
                                        <span className="expression-meaning">Bardzo szczęśliwy</span>
                                    </div>
                                    <div className="expression-item">
                                        <span className="expression-idiom">Piece of cake</span>
                                        <span className="expression-meaning">Bardzo łatwe</span>
                                    </div>
                                    <div className="expression-item">
                                        <span className="expression-idiom">Cost an arm and a leg</span>
                                        <span className="expression-meaning">Kosztować fortunę</span>
                                    </div>
                                    <div className="expression-item">
                                        <span className="expression-idiom">When pigs fly</span>
                                        <span className="expression-meaning">Nigdy (sarkazm)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="expressions-category">
                                <h3>💻 Współczesne skróty (dla SMS/email)</h3>
                                <div className="expressions-grid">
                                    <div className="expression-item">
                                        <span className="expression-digital">BTW</span>
                                        <span className="expression-meaning">By the way</span>
                                    </div>
                                    <div className="expression-item">
                                        <span className="expression-digital">OMG</span>
                                        <span className="expression-meaning">Oh my God</span>
                                    </div>
                                    <div className="expression-item">
                                        <span className="expression-digital">LOL</span>
                                        <span className="expression-meaning">Laughing out loud</span>
                                    </div>
                                    <div className="expression-item">
                                        <span className="expression-digital">FYI</span>
                                        <span className="expression-meaning">For your information</span>
                                    </div>
                                    <div className="expression-item">
                                        <span className="expression-digital">IMO</span>
                                        <span className="expression-meaning">In my opinion</span>
                                    </div>
                                    <div className="expression-item">
                                        <span className="expression-digital">TTYL</span>
                                        <span className="expression-meaning">Talk to you later</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja typów listów nieformalnych */}
                    <section className="writing-article__section">
                        <h2>Rodzaje listów nieformalnych 📬</h2>

                        <div className="letter-types informal">
                            <div className="type-card">
                                <div className="type-header">
                                    <h4>👋 List do przyjaciela</h4>
                                    <span className="type-difficulty">Poziom: A2+</span>
                                </div>
                                <div className="type-content">
                                    <p><strong>Cel:</strong> Podtrzymanie kontaktu, dzielenie się wiadomościami</p>
                                    <div className="type-features">
                                        <h5>Kluczowe elementy:</h5>
                                        <ul>
                                            <li>Przyjazne powitanie</li>
                                            <li>Pytania o życie przyjaciela</li>
                                            <li>Opowiadanie o swoim życiu</li>
                                            <li>Propozycja spotkania/kontaktu</li>
                                        </ul>
                                    </div>
                                    <div className="type-tips">
                                        <h5>Wskazówki:</h5>
                                        <p>Używaj wewnętrznych żartów i wspomnień, które znacie tylko wy</p>
                                    </div>
                                </div>
                            </div>

                            <div className="type-card">
                                <div className="type-header">
                                    <h4>🎂 List z życzeniami</h4>
                                    <span className="type-difficulty">Poziom: A2+</span>
                                </div>
                                <div className="type-content">
                                    <p><strong>Cel:</strong> Złożenie życzeń urodzinowych, świątecznych</p>
                                    <div className="type-features">
                                        <h5>Kluczowe elementy:</h5>
                                        <ul>
                                            <li>Ciepłe życzenia</li>
                                            <li>Wspomnienia związane z osobą</li>
                                            <li>Wyrażenie nadziei na przyszłość</li>
                                            <li>Propozycja świętowania</li>
                                        </ul>
                                    </div>
                                    <div className="type-tips">
                                        <h5>Wskazówki:</h5>
                                        <p>Bądź szczery i osobisty, unikaj szablonowych życzeń</p>
                                    </div>
                                </div>
                            </div>

                            <div className="type-card">
                                <div className="type-header">
                                    <h4>🎉 List z zaproszeniem</h4>
                                    <span className="type-difficulty">Poziom: B1+</span>
                                </div>
                                <div className="type-content">
                                    <p><strong>Cel:</strong> Zaproszenie na imprezę, wesele, spotkanie</p>
                                    <div className="type-features">
                                        <h5>Kluczowe elementy:</h5>
                                        <ul>
                                            <li>Opis okazji</li>
                                            <li>Data, godzina, miejsce</li>
                                            <li>Informacje praktyczne</li>
                                            <li>Prośba o potwierdzenie</li>
                                        </ul>
                                    </div>
                                    <div className="type-tips">
                                        <h5>Wskazówki:</h5>
                                        <p>Podaj wszystkie niezbędne informacje, ale zachowaj przyjazny ton</p>
                                    </div>
                                </div>
                            </div>

                            <div className="type-card">
                                <div className="type-header">
                                    <h4>📖 List z podróży</h4>
                                    <span className="type-difficulty">Poziom: B1+</span>
                                </div>
                                <div className="type-content">
                                    <p><strong>Cel:</strong> Opisanie wrażeń z podróży</p>
                                    <div className="type-features">
                                        <h5>Kluczowe elementy:</h5>
                                        <ul>
                                            <li>Opis miejsca</li>
                                            <li>Wrażenia i emocje</li>
                                            <li>Ciekawe wydarzenia</li>
                                            <li>Plany na resztę podróży</li>
                                        </ul>
                                    </div>
                                    <div className="type-tips">
                                        <h5>Wskazówki:</h5>
                                        <p>Używaj opisowych przymiotników i opowiadaj anegdoty</p>
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
                                <h4>Ćwiczenie 1: Formalne → Nieformalne</h4>
                                <p><strong>Zadanie:</strong> Przekształć poniższe formalne zdania na nieformalne:</p>
                                <div className="transformation-exercise">
                                    <div className="transformation-item">
                                        <span className="original">"I am writing to inform you that I have received your letter."</span>
                                        <span className="hint">→ Użyj "I got your letter..."</span>
                                    </div>
                                    <div className="transformation-item">
                                        <span className="original">"I would be grateful if you could send me the information."</span>
                                        <span className="hint">→ Użyj "Could you send me..."</span>
                                    </div>
                                    <div className="transformation-item">
                                        <span className="original">"I look forward to hearing from you."</span>
                                        <span className="hint">→ Użyj "Can't wait to hear from you!"</span>
                                    </div>
                                    <div className="transformation-item">
                                        <span className="original">"Yours sincerely,"</span>
                                        <span className="hint">→ Użyj "Best wishes," lub "Love,"</span>
                                    </div>
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>Ćwiczenie 2: Dokończ list</h4>
                                <p><strong>Zadanie:</strong> Dokończ poniższy list do przyjaciela:</p>
                                <div className="letter-completion">
                                    <div className="letter-start">
                                        Hi Sarah,<br/><br/>
                                        How are you? I hope everything's going well in London!<br/><br/>
                                        I'm writing to tell you about my amazing vacation in Spain...
                                    </div>
                                    <div className="exercise-requirements">
                                        <strong>Wymagania:</strong> Opisz 2-3 ciekawe wydarzenia z wakacji, zadaj 2 pytania do Sarah, zakończ naturalnie.
                                    </div>
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>Ćwiczenie 3: Napisz życzenia</h4>
                                <p><strong>Zadanie:</strong> Napisz krótkie życzenia urodzinowe dla:</p>
                                <div className="scenarios-exercise">
                                    <div className="scenario">
                                        <strong>a) Najlepszego przyjaciela</strong><br/>
                                        (swobodnie, z żartami)
                                    </div>
                                    <div className="scenario">
                                        <strong>b) Dalszej kuzynki</strong><br/>
                                        (ciepło, ale z zachowaniem dystansu)
                                    </div>
                                    <div className="scenario">
                                        <strong>c) Znajomego z pracy</strong><br/>
                                        (przyjaźnie, ale profesjonalnie)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="writing-article__section">
                        <div className="writing-action-box informal">
                            <h3>🎯 Czas na praktykę!</h3>
                            <p>Wybierz jeden z poniższych scenariuszy i napisz autentyczny list nieformalny. Pamiętaj o swobodnym tonie i osobistym podejściu!</p>
                            <div className="writing-scenarios">
                                <div className="scenario-card">
                                    <h4>Scenariusz 1: List do przyjaciela</h4>
                                    <p>Napisz do przyjaciela, który niedawno przeprowadził się do innego kraju. Opowiedz o tym, co słychać u Ciebie i zapytaj o jego nowe życie.</p>
                                </div>
                                <div className="scenario-card">
                                    <h4>Scenariusz 2: Życzenia świąteczne</h4>
                                    <p>Napisz życzenia bożonarodzeniowe do rodziny. Wspomnij o planach na święta i zaproś do wspólnego spotkania.</p>
                                </div>
                                <div className="scenario-card">
                                    <h4>Scenariusz 3: List z podróży</h4>
                                    <p>Opisz swoją ostatnią podróż do ciekawego miejsca. Podziel się wrażeniami i zabawnymi sytuacjami z wyjazdu.</p>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <Link to="/cwiczenia/pisanie-nieformalne" className="btn btn--primary">Więcej ćwiczeń</Link>
                                <Link to="/spolecznosc" className="btn btn--secondary">Podziel się listem</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="writing-article__footer">
                        <div className="writing-article__tags">
                            <span className="writing-tag">#listnieformalny</span>
                            <span className="writing-tag">#informalletter</span>
                            <span className="writing-tag">#friendlyletter</span>
                            <span className="writing-tag">#personalwriting</span>
                            <span className="writing-tag">#korespondencja</span>
                        </div>
                        <div className="writing-article__next">
                            <p><strong>Następny temat:</strong> <Link to="/writing/email">Jak pisać emaile po angielsku?</Link></p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default InformalLetter;