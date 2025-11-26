import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import useDocumentMeta from '../../useDocumentMeta';
import './WritingStyles.css';

function getMetaTitle(lang) {
    const baseTitle = lang === 'pl'
        ? 'Jak pisać formalne listy po angielsku? Kompletny przewodnik'
        : 'How to Write Formal Letters in English? Complete Guide'

    return `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang) {
    const baseDescription = {
        pl: 'Kompletny przewodnik po pisaniu formalnych listów po angielsku. Naucz się profesjonalnej korespondencji biznesowej i oficjalnej. Struktura, zwroty, przykłady i szablony.',
        en: 'Complete guide to writing formal letters in English. Learn professional business and official correspondence. Structure, phrases, examples and templates.'
    }

    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang) {
    return lang === 'pl'
        ? 'https://angloboost.pl/pl/pisanie/jak-pisac-formalne-listy'
        : 'https://angloboost.pl/en/writing/how-to-write-formal-letters'
}

const FormalLetter = () => {
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
        <article className="writing-article">
            <div className="writing-article__header">
                <div className="container">
                    <nav className="writing-article__breadcrumb">
                        <Link to="/pisanie" className="writing-article__breadcrumb-link">Pisanie</Link>
                        <span className="writing-article__breadcrumb-separator">/</span>
                        <span className="writing-article__breadcrumb-current">List formalny</span>
                    </nav>
                    <h1 className="writing-article__title">Jak pisać formalne listy po angielsku? 📝</h1>
                    <p className="writing-article__intro">Kompletny przewodnik po profesjonalnej korespondencji biznesowej i oficjalnej w języku angielskim</p>
                    <div className="writing-article__meta">
                        <span className="writing-article__reading-time">⏱️ Czas czytania: 10 minut</span>
                        <span className="writing-article__level">🎯 Poziom: B1-C2</span>
                        <span className="writing-article__words">📝 Słowa kluczowe: formal letter, business correspondence, professional writing</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="writing-article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="writing-article__section">
                        <div className="writing-tip-box">
                            <h3>💼 Czym jest list formalny po angielsku?</h3>
                            <p><strong>Formal letter</strong> to oficjalna forma pisemna używana w komunikacji biznesowej, urzędowej i akademickiej. Charakteryzuje się ściśle określoną strukturą, formalnym językiem i konkretnymi zwrotami grzecznościowymi.</p>
                        </div>

                        <h2>Kiedy piszemy listy formalne?</h2>
                        <div className="writing-points-grid">
                            <div className="writing-point-card">
                                <h4>🏢 Biznes</h4>
                                <p>Aplikacje o pracę, reklamacje, zapytania ofertowe, współpraca</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>🎓 Edukacja</h4>
                                <p>Podania na studia, prośby o informację, motywacje do programów</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>🏛️ Urzędy</h4>
                                <p>Wnioski, zażalenia, prośby o dokumenty, korespondencja oficjalna</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja struktury */}
                    <section className="writing-article__section">
                        <h2>Struktura listu formalnego 🏗️</h2>

                        <div className="letter-structure">
                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">1</span>
                                    <h3>Nagłówek (Header)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Dane nadawcy i adresata</h4>
                                    <ul>
                                        <li>✅ Twój adres (bez imienia)</li>
                                        <li>✅ Data w formacie: 15 May 2024</li>
                                        <li>✅ Adres odbiorcy z pełnym imieniem i nazwiskiem</li>
                                        <li>✅ Tytuł: Mr, Mrs, Ms, Dr lub nazwa firmy</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        123 Main Street<br/>
                                        Warsaw, 00-001<br/>
                                        Poland<br/>
                                        15 May 2024<br/><br/>
                                        Mr. John Smith<br/>
                                        Hiring Manager<br/>
                                        ABC Company<br/>
                                        456 Business Ave<br/>
                                        London, W1 2XY<br/>
                                        United Kingdom
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">2</span>
                                    <h3>Powitanie (Salutation)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Formalne rozpoczęcie listu</h4>
                                    <ul>
                                        <li>✅ Dear Mr./Mrs./Ms. [Nazwisko]</li>
                                        <li>✅ Dear Sir/Madam (gdy nie znamy nazwiska)</li>
                                        <li>✅ To Whom It May Concern (bardzo formalnie)</li>
                                        <li>✅ Unikaj: Hello, Hi, Hey</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "Dear Mr. Smith,"<br/>
                                        "Dear Sir/Madam,"<br/>
                                        "To Whom It May Concern,"
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">3</span>
                                    <h3>Treść (Body)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Główna część listu</h4>
                                    <ul>
                                        <li>✅ Akapit 1: Cel listu i wprowadzenie</li>
                                        <li>✅ Akapit 2: Szczegóły i argumenty</li>
                                        <li>✅ Akapit 3: Podsumowanie i oczekiwania</li>
                                        <li>✅ Utrzymuj każdy akapit skupiony na jednym temacie</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "I am writing to apply for the position of..."<br/>
                                        "Furthermore, I would like to highlight..."<br/>
                                        "I look forward to hearing from you..."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">4</span>
                                    <h3>Zakończenie (Closing)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Formalne zakończenie listu</h4>
                                    <ul>
                                        <li>✅ Yours sincerely (gdy znamy nazwisko)</li>
                                        <li>✅ Yours faithfully (gdy nie znamy nazwiska)</li>
                                        <li>✅ Best regards (mniej formalnie)</li>
                                        <li>✅ Podpis i wydrukowane imię i nazwisko</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "Yours sincerely,"<br/>
                                        [podpis]<br/>
                                        "Anna Kowalska"
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja zwrotów formalnych */}
                    <section className="writing-article__section">
                        <h2>Kluczowe zwroty formalne 📋</h2>

                        <div className="phrases-sections">
                            <div className="phrases-category">
                                <h3>🎯 Rozpoczęcie listu</h3>
                                <div className="phrases-grid">
                                    <div className="phrase-item">
                                        <span className="phrase-english">I am writing to apply for...</span>
                                        <span className="phrase-polish">Piszę, aby aplikować na...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">I would like to inquire about...</span>
                                        <span className="phrase-polish">Chciałbym zapytać o...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">With reference to your advertisement...</span>
                                        <span className="phrase-polish">W nawiązaniu do Pana/Pani ogłoszenia...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">I am writing to express my concern regarding...</span>
                                        <span className="phrase-polish">Piszę, aby wyrazić moje zaniepokojenie dotyczące...</span>
                                    </div>
                                </div>
                            </div>

                            <div className="phrases-category">
                                <h3>💼 Przekazywanie informacji</h3>
                                <div className="phrases-grid">
                                    <div className="phrase-item">
                                        <span className="phrase-english">I would like to draw your attention to...</span>
                                        <span className="phrase-polish">Chciałbym zwrócić Pana/Pani uwagę na...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Please find enclosed...</span>
                                        <span className="phrase-polish">W załączeniu przesyłam...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">I am pleased to inform you that...</span>
                                        <span className="phrase-polish">Mam przyjemność poinformować, że...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">We regret to inform you that...</span>
                                        <span className="phrase-polish">Z przykrością informujemy, że...</span>
                                    </div>
                                </div>
                            </div>

                            <div className="phrases-category">
                                <h3>🤝 Prośby i propozycje</h3>
                                <div className="phrases-grid">
                                    <div className="phrase-item">
                                        <span className="phrase-english">I would be grateful if you could...</span>
                                        <span className="phrase-polish">Byłbym wdzięczny, gdyby mógł Pan/mogła Pani...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Could you please send me...</span>
                                        <span className="phrase-polish">Czy mógłby Pan/mogłaby Pani przesłać mi...</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">I would appreciate your prompt response.</span>
                                        <span className="phrase-polish">Będę wdzięczny za szybką odpowiedź.</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">We would like to suggest that...</span>
                                        <span className="phrase-polish">Chcielibyśmy zasugerować, że...</span>
                                    </div>
                                </div>
                            </div>

                            <div className="phrases-category">
                                <h3>📨 Zakończenie listu</h3>
                                <div className="phrases-grid">
                                    <div className="phrase-item">
                                        <span className="phrase-english">I look forward to hearing from you.</span>
                                        <span className="phrase-polish">Z niecierpliwością czekam na odpowiedź.</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Thank you for your consideration.</span>
                                        <span className="phrase-polish">Dziękuję za rozważenie mojej prośby.</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">Please do not hesitate to contact me if you require further information.</span>
                                        <span className="phrase-polish">Proszę nie wahać się skontaktować, jeśli potrzebuje Pan/Pani dodatkowych informacji.</span>
                                    </div>
                                    <div className="phrase-item">
                                        <span className="phrase-english">I await your reply with interest.</span>
                                        <span className="phrase-polish">Z zainteresowaniem oczekuję na Pana/Pani odpowiedź.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Przykładowy list formalny */}
                    <section className="writing-article__section">
                        <h2>Przykładowy list formalny ✨</h2>

                        <div className="sample-letter">
                            <div className="letter-header">
                                <h3>List aplikacyjny (Job Application Letter)</h3>
                                <div className="letter-stats">
                                    <span className="stat">Słowa: 250</span>
                                    <span className="stat">Poziom: B2</span>
                                    <span className="stat">Typ: Aplikacja o pracę</span>
                                </div>
                            </div>

                            <div className="letter-content">
                                <div className="letter-address">
                                    <div className="sender-address">
                                        123 Main Street<br/>
                                        Warsaw, 00-001<br/>
                                        Poland<br/>
                                        15 May 2024
                                    </div>
                                    <div className="receiver-address">
                                        Mr. John Smith<br/>
                                        Hiring Manager<br/>
                                        Tech Solutions Ltd.<br/>
                                        456 Business Avenue<br/>
                                        London, W1 2XY<br/>
                                        United Kingdom
                                    </div>
                                </div>

                                <div className="letter-body">
                                    <div className="salutation">
                                        Dear Mr. Smith,
                                    </div>

                                    <div className="paragraph">
                                        <p>
                                            <strong>I am writing to apply for the Marketing Manager position</strong> advertised on LinkedIn on 10 May 2024. With over five years of experience in digital marketing and a proven track record of successful campaign management, I believe I possess the skills and qualifications necessary for this role.
                                        </p>
                                        <p className="analysis">
                                            <strong>Analiza:</strong> Bezpośrednie określenie celu listu i źródła informacji. Prezentacja doświadczenia.
                                        </p>
                                    </div>

                                    <div className="paragraph">
                                        <p>
                                            <strong>In my current position at Digital Innovations,</strong> I have successfully managed marketing budgets exceeding €100,000 and increased social media engagement by 150% over the past year. My expertise includes SEO optimization, content strategy development, and data-driven campaign analysis. I have enclosed my CV for your review, which provides further details about my professional background.
                                        </p>
                                        <p className="analysis">
                                            <strong>Analiza:</strong> Konkretne osiągnięcia z liczbami. Wzmianka o załączniku (CV).
                                        </p>
                                    </div>

                                    <div className="paragraph">
                                        <p>
                                            <strong>I am particularly drawn to Tech Solutions Ltd.</strong> because of your innovative approach to technology marketing and your reputation for employee development. I am confident that my experience in developing comprehensive marketing strategies would contribute significantly to your team's success.
                                        </p>
                                        <p className="analysis">
                                            <strong>Analiza:</strong> Pokazanie znajomości firmy i dopasowania. Wyrażenie entuzjazmu.
                                        </p>
                                    </div>

                                    <div className="paragraph">
                                        <p>
                                            <strong>I would welcome the opportunity to discuss</strong> how my skills and experience align with your needs in an interview. Thank you for considering my application. I look forward to hearing from you.
                                        </p>
                                        <p className="analysis">
                                            <strong>Analiza:</strong> Prośba o interview i standardowe zakończenie z podziękowaniem.
                                        </p>
                                    </div>

                                    <div className="closing">
                                        Yours sincerely,<br/>
                                        <div className="signature">
                                            [Podpis]<br/>
                                            Anna Nowak
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja typów listów formalnych */}
                    <section className="writing-article__section">
                        <h2>Rodzaje listów formalnych 📬</h2>

                        <div className="letter-types">
                            <div className="type-card">
                                <div className="type-header">
                                    <h4>📄 Aplikacja o pracę</h4>
                                    <span className="type-difficulty">Poziom: B1+</span>
                                </div>
                                <div className="type-content">
                                    <p><strong>Cel:</strong> Przedstawienie kwalifikacji i doświadczenia</p>
                                    <div className="type-features">
                                        <h5>Kluczowe elementy:</h5>
                                        <ul>
                                            <li>Odwołanie do ogłoszenia</li>
                                            <li>Prezentacja doświadczenia</li>
                                            <li>Dopasowanie do stanowiska</li>
                                            <li>Prośba o interview</li>
                                        </ul>
                                    </div>
                                    <div className="type-tips">
                                        <h5>Wskazówki:</h5>
                                        <p>Używaj action verbs: managed, developed, implemented, increased</p>
                                    </div>
                                </div>
                            </div>

                            <div className="type-card">
                                <div className="type-header">
                                    <h4>📝 List motywacyjny</h4>
                                    <span className="type-difficulty">Poziom: B2+</span>
                                </div>
                                <div className="type-content">
                                    <p><strong>Cel:</strong> Przekonanie o pasji i dopasowaniu</p>
                                    <div className="type-features">
                                        <h5>Kluczowe elementy:</h5>
                                        <ul>
                                            <li>Wyrażenie entuzjazmu</li>
                                            <li>Opis pasji i celów</li>
                                            <li>Dopasowanie do kultury firmy</li>
                                            <li>Długoterminowe plany</li>
                                        </ul>
                                    </div>
                                    <div className="type-tips">
                                        <h5>Wskazówki:</h5>
                                        <p>Pokazuj pasję, ale zachowaj profesjonalizm</p>
                                    </div>
                                </div>
                            </div>

                            <div className="type-card">
                                <div className="type-header">
                                    <h4>⚖️ Reklamacja</h4>
                                    <span className="type-difficulty">Poziom: B1+</span>
                                </div>
                                <div className="type-content">
                                    <p><strong>Cel:</strong> Rozwiązanie problemu z produktem/usługą</p>
                                    <div className="type-features">
                                        <h5>Kluczowe elementy:</h5>
                                        <ul>
                                            <li>Opis problemu</li>
                                            <li>Numery zamówień/faktur</li>
                                            <li>Oczekiwane rozwiązanie</li>
                                            <li>Termin odpowiedzi</li>
                                        </ul>
                                    </div>
                                    <div className="type-tips">
                                        <h5>Wskazówki:</h5>
                                        <p>Bądź stanowczy, ale uprzejmy. Podawaj konkretne daty i numery</p>
                                    </div>
                                </div>
                            </div>

                            <div className="type-card">
                                <div className="type-header">
                                    <h4>🏫 Podanie akademickie</h4>
                                    <span className="type-difficulty">Poziom: B2+</span>
                                </div>
                                <div className="type-content">
                                    <p><strong>Cel:</strong> Aplikacja na studia lub program</p>
                                    <div className="type-features">
                                        <h5>Kluczowe elementy:</h5>
                                        <ul>
                                            <li>Wyrażenie zainteresowania programem</li>
                                            <li>Prezentacja osiągnięć akademickich</li>
                                            <li>Cele edukacyjne i zawodowe</li>
                                            <li>Dopasowanie do instytucji</li>
                                        </ul>
                                    </div>
                                    <div className="type-tips">
                                        <h5>Wskazówki:</h5>
                                        <p>Badaj program i odwołuj się do konkretnych kursów lub profesorów</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja błędów do unikania */}
                    <section className="writing-article__section">
                        <h2>Częste błędy i jak ich unikać 🚫</h2>

                        <div className="mistakes-guide">
                            <div className="mistake-card">
                                <h4>❌ Zbyt nieformalny język</h4>
                                <div className="mistake-examples">
                                    <div className="wrong-example">
                                        <strong>Niepoprawnie:</strong> "Hey there! I wanna apply for the job..."
                                    </div>
                                    <div className="correct-example">
                                        <strong>Poprawnie:</strong> "Dear Hiring Manager, I am writing to apply for the position..."
                                    </div>
                                </div>
                                <p><strong>Rozwiązanie:</strong> Używaj pełnych form czasowników i formalnych zwrotów</p>
                            </div>

                            <div className="mistake-card">
                                <h4>❌ Brak struktury akapitowej</h4>
                                <div className="mistake-examples">
                                    <div className="wrong-example">
                                        <strong>Niepoprawnie:</strong> Jeden długi akapit bez podziału
                                    </div>
                                    <div className="correct-example">
                                        <strong>Poprawnie:</strong> 3-4 akapity z jasnym celem każdego
                                    </div>
                                </div>
                                <p><strong>Rozwiązanie:</strong> Planuj list w akapitach: cel → szczegóły → podsumowanie</p>
                            </div>

                            <div className="mistake-card">
                                <h4>❌ Nieprawidłowe zakończenie</h4>
                                <div className="mistake-examples">
                                    <div className="wrong-example">
                                        <strong>Niepoprawnie:</strong> "Best wishes," lub "Cheers,"
                                    </div>
                                    <div className="correct-example">
                                        <strong>Poprawnie:</strong> "Yours sincerely," (gdy znamy nazwisko) lub "Yours faithfully," (gdy nie znamy)
                                    </div>
                                </div>
                                <p><strong>Rozwiązanie:</strong> Zapamiętaj zasadę: sincerely z nazwiskiem, faithfully bez nazwiska</p>
                            </div>

                            <div className="mistake-card">
                                <h4>❌ Zbyt długie zdania</h4>
                                <div className="mistake-examples">
                                    <div className="wrong-example">
                                        <strong>Niepoprawnie:</strong> "I am writing this letter to apply for the position that was advertised on your website and I believe that my qualifications match your requirements perfectly because I have extensive experience in this field."
                                    </div>
                                    <div className="correct-example">
                                        <strong>Poprawnie:</strong> "I am writing to apply for the position advertised on your website. My qualifications match your requirements, as I have extensive experience in this field."
                                    </div>
                                </div>
                                <p><strong>Rozwiązanie:</strong> Dziel złożone zdania na prostsze, używaj kropek</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja ćwiczeń */}
                    <section className="writing-article__section">
                        <h2>Ćwiczenia praktyczne 🏋️</h2>

                        <div className="writing-exercises">
                            <div className="exercise-card">
                                <h4>Ćwiczenie 1: Transformacja języka</h4>
                                <p><strong>Zadanie:</strong> Przekształć poniższe nieformalne zdania na formalne:</p>
                                <div className="transformation-exercise">
                                    <div className="transformation-item">
                                        <span className="original">"I want to apply for the job."</span>
                                        <span className="hint">→ Użyj "I am writing to..."</span>
                                    </div>
                                    <div className="transformation-item">
                                        <span className="original">"Can you send me the info?"</span>
                                        <span className="hint">→ Użyj "I would be grateful if..."</span>
                                    </div>
                                    <div className="transformation-item">
                                        <span className="original">"Thanks for your help!"</span>
                                        <span className="hint">→ Użyj "Thank you for your assistance."</span>
                                    </div>
                                    <div className="transformation-item">
                                        <span className="original">"I need an answer ASAP."</span>
                                        <span className="hint">→ Użyj "I would appreciate your prompt response."</span>
                                    </div>
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>Ćwiczenie 2: Układanie adresu</h4>
                                <p><strong>Zadanie:</strong> Ułóż poprawny nagłówek listu z podanych elementów:</p>
                                <div className="address-exercise">
                                    <div className="address-elements">
                                        <span>Poland</span>
                                        <span>15 May 2024</span>
                                        <span>Warsaw, 00-001</span>
                                        <span>123 Main Street</span>
                                        <span>Anna Kowalska</span>
                                    </div>
                                    <div className="exercise-hint">
                                        <strong>Podpowiedź:</strong> Pamiętaj o kolejności: adres nadawcy → data → adres odbiorcy
                                    </div>
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>Ćwiczenie 3: Napisz fragment listu</h4>
                                <p><strong>Zadanie:</strong> Napisz pierwszy akapit listu aplikacyjnego na stanowisko Sales Manager w firmie Global Solutions:</p>
                                <div className="writing-prompt">
                                    <p>Wymagania:</p>
                                    <ul>
                                        <li>Określ cel listu</li>
                                        <li>Wskaż źródło informacji o stanowisku</li>
                                        <li>Wspomnij krótko o swoim doświadczeniu</li>
                                        <li>Użyj minimum 3 formalnych zwrotów</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja szablonów */}
                    <section className="writing-article__section">
                        <h2>Gotowe szablony 📄</h2>

                        <div className="templates-section">
                            <div className="template-card">
                                <h4>📧 Szablon aplikacji o pracę</h4>
                                <div className="template-content">
                                    <div className="template-line">[Your Address]</div>
                                    <div className="template-line">[City, Postcode]</div>
                                    <div className="template-line">[Country]</div>
                                    <div className="template-line">[Date]</div>
                                    <br/>
                                    <div className="template-line">[Hiring Manager's Name]</div>
                                    <div className="template-line">[Company Name]</div>
                                    <div className="template-line">[Company Address]</div>
                                    <br/>
                                    <div className="template-line">Dear [Mr./Ms. Last Name],</div>
                                    <br/>
                                    <div className="template-line">I am writing to apply for the [Position Name] position advertised on [Platform] on [Date]. With my [Number] years of experience in [Field] and my proven ability to [Key Achievement], I am confident that I possess the skills necessary to excel in this role.</div>
                                    <br/>
                                    <div className="template-line">In my current position at [Current Company], I have successfully [Key Responsibility] which resulted in [Quantifiable Result]. My expertise includes [Skill 1], [Skill 2], and [Skill 3].</div>
                                    <br/>
                                    <div className="template-line">I am particularly impressed by [Company Name]'s [Something Specific About Company] and believe that my background in [Relevant Experience] would allow me to contribute significantly to your team.</div>
                                    <br/>
                                    <div className="template-line">I have enclosed my CV for your review and would welcome the opportunity to discuss how my skills and experience align with your needs. Thank you for your time and consideration.</div>
                                    <br/>
                                    <div className="template-line">Yours sincerely,</div>
                                    <div className="template-line">[Your Signature]</div>
                                    <div className="template-line">[Your Printed Name]</div>
                                </div>
                            </div>

                            <div className="template-card">
                                <h4>📝 Szablon reklamacji</h4>
                                <div className="template-content">
                                    <div className="template-line">Dear [Customer Service Manager],</div>
                                    <br/>
                                    <div className="template-line">I am writing to express my dissatisfaction with [Product/Service] that I purchased on [Date] (Order No: [Number]).</div>
                                    <br/>
                                    <div className="template-line">Unfortunately, I have encountered the following problem: [Describe Problem Clearly]. This issue has caused [Explain Impact].</div>
                                    <br/>
                                    <div className="template-line">I would appreciate it if you could [Desired Solution - refund, replacement, repair]. I have attached copies of the relevant documents for your reference.</div>
                                    <br/>
                                    <div className="template-line">I look forward to your response and a resolution to this matter within [Reasonable Timeframe]. Please contact me at [Your Phone/Email] if you require further information.</div>
                                    <br/>
                                    <div className="template-line">Yours faithfully,</div>
                                    <div className="template-line">[Your Name]</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="writing-article__section">
                        <div className="writing-action-box">
                            <h3>🎯 Czas na praktykę!</h3>
                            <p>Wybierz jeden z poniższych scenariuszy i napisz kompletny list formalny. Pamiętaj o strukturze, formalnym języku i poprawnych zwrotach!</p>
                            <div className="writing-scenarios">
                                <div className="scenario-card">
                                    <h4>Scenariusz 1: Aplikacja o pracę</h4>
                                    <p>Apply for Marketing Specialist at Innovation Tech. Required: 2+ years experience, digital marketing skills.</p>
                                </div>
                                <div className="scenario-card">
                                    <h4>Scenariusz 2: Reklamacja</h4>
                                    <p>Complain about defective laptop purchased online. Order date: 1 May 2024, Order No: LT-789123.</p>
                                </div>
                                <div className="scenario-card">
                                    <h4>Scenariusz 3: Zapytanie ofertowe</h4>
                                    <p>Request information about software training courses for your company's employees (15 people).</p>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <Link to="/cwiczenia/pisanie-formalne" className="btn btn--primary">Więcej ćwiczeń</Link>
                                <Link to="/spolecznosc" className="btn btn--secondary">Sprawdź z innymi</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="writing-article__footer">
                        <div className="writing-article__tags">
                            <span className="writing-tag">#listformalny</span>
                            <span className="writing-tag">#formalletter</span>
                            <span className="writing-tag">#businessenglish</span>
                            <span className="writing-tag">#professionalwriting</span>
                            <span className="writing-tag">#korespondencja</span>
                        </div>
                        <div className="writing-article__next">
                            <p><strong>Następny temat:</strong> <Link to="/writing/list-nieformalny">Jak pisać listy nieformalne po angielsku?</Link></p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default FormalLetter;