import React, { useMemo, useState, useEffect } from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import '../../../styles/topic-cards.css'
import { useExerciseScores } from '../useExerciseScores'

const sections = [
    { id: 'spotkania-prezentacje', label: 'Spotkania i prezentacje' },
    { id: 'korespondencja', label: 'Korespondencja biznesowa' },
    { id: 'negocjacje', label: 'Negocjacje' },
    { id: 'finanse-ekonomia', label: 'Finanse i ekonomia' },
    { id: 'marketing-sprzedaz', label: 'Marketing i sprzedaż' },
    { id: 'zarzadzanie', label: 'Zarządzanie' },
]

const QUIZZES = {
    // Spotkania i prezentacje - Podstawowe
    'spotkania-podstawowe': [
        { id: 'sp1', question: 'To kick off =', options: ['Rozpocząć spotkanie', 'Zakończyć spotkanie', 'Przerwać spotkanie'], correct: 0 },
        { id: 'sp2', question: 'Action items =', options: ['Lista uczestników', 'Zadania do wykonania', 'Agenda spotkania'], correct: 1 },
        { id: 'sp3', question: 'Bottom line =', options: ['Podsumowanie', 'Najważniejsza kwestia', 'Wstęp'], correct: 1 },
        { id: 'sp4', question: 'Brainstorming =', options: ['Analiza danych', 'Burza mózgów', 'Prezentacja'], correct: 1 },
        { id: 'sp5', question: 'Follow up =', options: ['Zaprosić', 'Kontynuować sprawę', 'Anulować'], correct: 1 },
        { id: 'sp6', question: 'Key takeaways =', options: ['Kluczowe daty', 'Główni uczestnicy', 'Kluczowe wnioski'], correct: 2 },
        { id: 'sp7', question: 'On the same page =', options: ['W tym samym pokoju', 'Rozumieć się wzajemnie', 'Mieć różne zdania'], correct: 1 },
        { id: 'sp8', question: 'Out of the box =', options: ['Tradycyjny', 'Nieszablonowy', 'Skomplikowany'], correct: 1 },
        { id: 'sp9', question: 'Stakeholder =', options: ['Kierownik', 'Interesariusz', 'Dostawca'], correct: 1 },
        { id: 'sp10', question: 'Wrap up =', options: ['Rozpocząć', 'Zakończyć', 'Kontynuować'], correct: 1 },
        { id: 'sp11', question: 'Agenda =', options: ['Protokół', 'Plan spotkania', 'Lista obecności'], correct: 1 },
        { id: 'sp12', question: 'Deadline =', options: ['Początek projektu', 'Ostateczny termin', 'Harmonogram'], correct: 1 },
    ],

    // Spotkania i prezentacje - Zaawansowane
    'spotkania-zaawansowane': [
        { id: 'sz1', question: 'Touch base =', options: ['Omówić szczegóły', 'Skontaktować się', 'Zakończyć współpracę'], correct: 1 },
        { id: 'sz2', question: 'Win-win situation =', options: ['Konflikt interesów', 'Sytuacja korzystna dla wszystkich', 'Kompromis'], correct: 1 },
        { id: 'sz3', question: 'Moving forward =', options: ['Wracając do', 'W przyszłości', 'Obecnie'], correct: 1 },
        { id: 'sz4', question: 'To put on the table =', options: ['Ukryć temat', 'Przedstawić do dyskusji', 'Odłożyć na później'], correct: 1 },
        { id: 'sz5', question: 'Action plan =', options: ['Plan strategiczny', 'Plan działania', 'Plan awaryjny'], correct: 1 },
        { id: 'sz6', question: 'To circle back =', options: ['Zakończyć temat', 'Wrócić do tematu', 'Zmienić temat'], correct: 1 },
        { id: 'sz7', question: 'Parking lot =', options: ['Miejsce spotkania', 'Tematy do omówienia później', 'Lista priorytetów'], correct: 1 },
        { id: 'sz8', question: 'Elevator pitch =', options: ['Długa prezentacja', 'Krótkie przedstawienie pomysłu', 'Raport pisemny'], correct: 1 },
        { id: 'sz9', question: 'Next steps =', options: ['Podsumowanie', 'Kolejne działania', 'Wnioski'], correct: 1 },
        { id: 'sz10', question: 'To drill down =', options: ['Omówić powierzchownie', 'Przeanalizować szczegółowo', 'Przyspieszyć'], correct: 1 },
    ],

    // Korespondencja biznesowa - Podstawowe
    'korespondencja-podstawowe': [
        { id: 'kp1', question: 'ASAP =', options: ['As Soon As Possible', 'Always Send A Post', 'After Saturday And Party'], correct: 0 },
        { id: 'kp2', question: 'FYI =', options: ['For Your Interest', 'For Your Information', 'From Your Inspector'], correct: 1 },
        { id: 'kp3', question: 'CC =', options: ['Carbon Copy', 'Client Contact', 'Corporate Communication'], correct: 0 },
        { id: 'kp4', question: 'BCC =', options: ['Business Carbon Copy', 'Blind Carbon Copy', 'Basic Client Contact'], correct: 1 },
        { id: 'kp5', question: 'Enclosed please find =', options: ['W załączeniu znajduje się', 'Proszę o odpowiedź', 'Z poważaniem'], correct: 0 },
        { id: 'kp6', question: 'I look forward to hearing from you =', options: ['Proszę o natychmiastową odpowiedź', 'Z niecierpliwością czekam na odpowiedź', 'Dziękuję za zrozumienie'], correct: 1 },
        { id: 'kp7', question: 'Please find attached =', options: ['Proszę o kontakt', 'W załączniku znajduje się', 'Proszę o informację'], correct: 1 },
        { id: 'kp8', question: 'Regarding =', options: ['W odpowiedzi na', 'W nawiązaniu do', 'Z powodu'], correct: 1 },
        { id: 'kp9', question: 'R.S.V.P. =', options: ['Please respond', 'Thank you', 'Best regards'], correct: 0 },
        { id: 'kp10', question: 'To whom it may concern =', options: ['Szanowny Panie', 'Do wszystkich zainteresowanych', 'Drogi Kliencie'], correct: 1 },
    ],

    // Korespondencja biznesowa - Zaawansowane
    'korespondencja-zaawansowane': [
        { id: 'kz1', question: 'Upon receipt =', options: ['Przed otrzymaniem', 'Po otrzymaniu', 'Podczas otrzymywania'], correct: 1 },
        { id: 'kz2', question: 'We hereby inform =', options: ['Uprzejmie informujemy', 'Niniejszym informujemy', 'Chcielibyśmy poinformować'], correct: 1 },
        { id: 'kz3', question: 'Your faithfully =', options: ['Z poważaniem (gdy znamy imię)', 'Z poważaniem (w listach formalnych)', 'Z wyrazami szacunku'], correct: 1 },
        { id: 'kz4', question: 'Your sincerely =', options: ['Z poważaniem (gdy znamy imię)', 'Z poważaniem (w listach formalnych)', 'Pozdrawiam serdecznie'], correct: 0 },
        { id: 'kz5', question: 'Follow-up email =', options: ['Email powitalny', 'Email przypominający', 'Email pożegnalny'], correct: 1 },
        { id: 'kz6', question: 'In reference to =', options: ['W związku z', 'W odpowiedzi na', 'W nawiązaniu do'], correct: 2 },
        { id: 'kz7', question: 'Should you have any questions =', options: ['Jeśli masz pytania', 'Proszę nie pytać', 'Odpowiadając na pytania'], correct: 0 },
        { id: 'kz8', question: 'At your earliest convenience =', options: ['Kiedy będziesz miał czas', 'Jak najszybciej', 'Kiedy tylko możesz'], correct: 2 },
        { id: 'kz9', question: 'Please be advised =', options: ['Proszę pamiętać', 'Uprzejmie informujemy', 'Chcielibyśmy zwrócić uwagę'], correct: 1 },
        { id: 'kz10', question: 'We acknowledge receipt =', options: ['Potwierdzamy otrzymanie', 'Dziękujemy za przesłanie', 'Prosimy o przesłanie'], correct: 0 },
    ],

    // Negocjacje - Podstawowe
    'negocjacje-podstawowe': [
        { id: 'np1', question: 'Bargaining power =', options: ['Siła przetargowa', 'Umowa handlowa', 'Strategia negocjacyjna'], correct: 0 },
        { id: 'np2', question: 'Common ground =', options: ['Sporny temat', 'Wspólny grunt', 'Ostateczna oferta'], correct: 1 },
        { id: 'np3', question: 'Counteroffer =', options: ['Oferta wstępna', 'Kontroferta', 'Oferta specjalna'], correct: 1 },
        { id: 'np4', question: 'Deal breaker =', options: ['Czynnik sukcesu', 'Czynnik uniemożliwiający umowę', 'Element umowy'], correct: 1 },
        { id: 'np5', question: 'Leverage =', options: ['Ograniczenie', 'Dźwignia, przewaga', 'Ryzyko'], correct: 1 },
        { id: 'np6', question: 'Meeting halfway =', options: ['Pójście na kompromis', 'Stanowcze negocjowanie', 'Odrzucenie oferty'], correct: 0 },
        { id: 'np7', question: 'Mutually beneficial =', options: ['Korzystny dla jednej strony', 'Wzajemnie korzystny', 'Neutralny'], correct: 1 },
        { id: 'np8', question: 'Negotiating table =', options: ['Stół konferencyjny', 'Stół negocjacyjny', 'Biuro'], correct: 1 },
        { id: 'np9', question: 'Walk away =', options: ['Zawrzeć umowę', 'Odejść od negocjacji', 'Przedłużyć negocjacje'], correct: 1 },
        { id: 'np10', question: 'Win-win =', options: ['Wygrana-przegrana', 'Wygrana-wygrana', 'Kompromis'], correct: 1 },
    ],

    // Negocjacje - Zaawansowane
    'negocjacje-zaawansowane': [
        { id: 'nz1', question: 'BATNA =', options: ['Best Alternative To a Negotiated Agreement', 'Business And Trade Negotiation Agreement', 'Basic Agreement Terms and Negotiation Act'], correct: 0 },
        { id: 'nz2', question: 'ZOPA =', options: ['Zone Of Possible Agreement', 'Zero Option Partnership Agreement', 'Zone Of Price Arrangement'], correct: 0 },
        { id: 'nz3', question: 'Anchor point =', options: ['Punkt końcowy', 'Punkt wyjścia w negocjacjach', 'Punkt sporny'], correct: 1 },
        { id: 'nz4', question: 'Concession =', options: ['Żądanie', 'Ustępstwo', 'Warunek'], correct: 1 },
        { id: 'nz5', question: 'Deadlock =', options: ['Porozumienie', 'Martwy punkt', 'Postęp'], correct: 1 },
        { id: 'nz6', question: 'Hardball =', options: ['Łagodne podejście', 'Twarde negocjacje', 'Nieformalne rozmowy'], correct: 1 },
        { id: 'nz7', question: 'Leverage point =', options: ['Punkt słabości', 'Punkt przewagi', 'Punkt neutralny'], correct: 1 },
        { id: 'nz8', question: 'Non-negotiable =', options: ['Do negocjacji', 'Nienegocjowalny', 'Opcjonalny'], correct: 1 },
        { id: 'nz9', question: 'Sticking point =', options: ['Punkt porozumienia', 'Punkt sporny', 'Punkt wyjścia'], correct: 1 },
        { id: 'nz10', question: 'Walk-away point =', options: ['Punkt rozpoczęcia', 'Punkt bez powrotu', 'Punkt kompromisu'], correct: 1 },
    ],

    // Finanse i ekonomia - Podstawowe
    'finanse-podstawowe': [
        { id: 'fp1', question: 'Assets =', options: ['Zobowiązania', 'Aktywa', 'Koszty'], correct: 1 },
        { id: 'fp2', question: 'Balance sheet =', options: ['Rachunek zysków i strat', 'Bilans', 'Cash flow'], correct: 1 },
        { id: 'fp3', question: 'Cash flow =', options: ['Przepływ gotówki', 'Zysk netto', 'Kapitał'], correct: 0 },
        { id: 'fp4', question: 'Dividend =', options: ['Pożyczka', 'Dywidenda', 'Inwestycja'], correct: 1 },
        { id: 'fp5', question: 'Equity =', options: ['Dług', 'Kapitał własny', 'Aktywa'], correct: 1 },
        { id: 'fp6', question: 'Gross profit =', options: ['Zysk netto', 'Zysk brutto', 'Przychód'], correct: 1 },
        { id: 'fp7', question: 'IPO =', options: ['International Payment Order', 'Initial Public Offering', 'Investment Portfolio Option'], correct: 1 },
        { id: 'fp8', question: 'Liability =', options: ['Aktywo', 'Zobowiązanie', 'Kapitał'], correct: 1 },
        { id: 'fp9', question: 'Net income =', options: ['Przychód brutto', 'Dochód netto', 'Koszty operacyjne'], correct: 1 },
        { id: 'fp10', question: 'ROI =', options: ['Return On Investment', 'Risk Of Investment', 'Rate Of Interest'], correct: 0 },
    ],

    // Finanse i ekonomia - Zaawansowane
    'finanse-zaawansowane': [
        { id: 'fz1', question: 'Fiscal year =', options: ['Rok kalendarzowy', 'Rok podatkowy', 'Rok obrotowy'], correct: 1 },
        { id: 'fz2', question: 'Overhead =', options: ['Koszty bezpośrednie', 'Koszty ogólne', 'Koszty zmienne'], correct: 1 },
        { id: 'fz3', question: 'Quarterly report =', options: ['Raport miesięczny', 'Raport kwartalny', 'Raport roczny'], correct: 1 },
        { id: 'fz4', question: 'Startup =', options: ['Firma dojrzała', 'Firma rozpoczynająca działalność', 'Firma bankrutująca'], correct: 1 },
        { id: 'fz5', question: 'Venture capital =', options: ['Kapitał wysokiego ryzyka', 'Kapitał bezpieczny', 'Kapitał państwowy'], correct: 0 },
        { id: 'fz6', question: 'EBITDA =', options: ['Earnings Before Interest, Taxes, Depreciation and Amortization', 'European Business Investment and Trade Development Agreement', 'Economic Balance Including Taxes and Depreciation Analysis'], correct: 0 },
        { id: 'fz7', question: 'Liquidity =', options: ['Wypłacalność', 'Płynność', 'Rentowność'], correct: 1 },
        { id: 'fz8', question: 'Amortization =', options: ['Inwestycja', 'Amortyzacja', 'Leasing'], correct: 1 },
        { id: 'fz9', question: 'Break-even point =', options: ['Punkt zwrotny', 'Punkt rentowności', 'Punkt krytyczny'], correct: 1 },
        { id: 'fz10', question: 'Cash cow =', options: ['Firma przynosząca stałe zyski', 'Firma rozwijająca się', 'Firma inwestycyjna'], correct: 0 },
    ],

    // Marketing i sprzedaż - Podstawowe
    'marketing-podstawowe': [
        { id: 'mp1', question: 'B2B =', options: ['Business to Business', 'Business to Customer', 'Brand to Brand'], correct: 0 },
        { id: 'mp2', question: 'B2C =', options: ['Business to Customer', 'Business to Company', 'Brand to Consumer'], correct: 0 },
        { id: 'mp3', question: 'Brand awareness =', options: ['Lojalność klientów', 'Świadomość marki', 'Wartość marki'], correct: 1 },
        { id: 'mp4', question: 'CRM =', options: ['Customer Relationship Management', 'Corporate Revenue Management', 'Client Response Monitoring'], correct: 0 },
        { id: 'mp5', question: 'CTA =', options: ['Call To Action', 'Customer Target Audience', 'Corporate Technical Analysis'], correct: 0 },
        { id: 'mp6', question: 'KPI =', options: ['Key Performance Indicator', 'Key Profit Index', 'Knowledge Performance Indicator'], correct: 0 },
        { id: 'mp7', question: 'Lead generation =', options: ['Generowanie leadów', 'Analiza rynku', 'Badanie satysfakcji'], correct: 0 },
        { id: 'mp8', question: 'Market share =', options: ['Wielkość rynku', 'Udział w rynku', 'Wartość rynku'], correct: 1 },
        { id: 'mp9', question: 'Sales funnel =', options: ['Strategia sprzedaży', 'Lejek sprzedażowy', 'Plan marketingowy'], correct: 1 },
        { id: 'mp10', question: 'Target audience =', options: ['Konkurencja', 'Grupa docelowa', 'Dostawcy'], correct: 1 },
    ],

    // Marketing i sprzedaż - Zaawansowane
    'marketing-zaawansowane': [
        { id: 'mz1', question: 'Unique selling proposition =', options: ['Unikalna propozycja sprzedaży', 'Universal Sales Plan', 'United Sales Program'], correct: 0 },
        { id: 'mz2', question: 'Upselling =', options: ['Sprzedaż dodatkowa', 'Sprzedaż podstawowa', 'Sprzedaż grupowa'], correct: 0 },
        { id: 'mz3', question: 'Value proposition =', options: ['Propozycja wartości', 'Wartość rynkowa', 'Plan wartości'], correct: 0 },
        { id: 'mz4', question: 'Word of mouth =', options: ['Marketing internetowy', 'Marketing szeptany', 'Marketing bezpośredni'], correct: 1 },
        { id: 'mz5', question: 'Content marketing =', options: ['Marketing treści', 'Marketing produktowy', 'Marketing wizualny'], correct: 0 },
        { id: 'mz6', question: 'Inbound marketing =', options: ['Marketing wychodzący', 'Marketing przychodzący', 'Marketing tradycyjny'], correct: 1 },
        { id: 'mz7', question: 'SEO =', options: ['Search Engine Optimization', 'Sales Efficiency Operation', 'Strategic Economic Overview'], correct: 0 },
        { id: 'mz8', question: 'Conversion rate =', options: ['Wskaźnik konwersji', 'Wskaźnik kosztów', 'Wskaźnik wzrostu'], correct: 0 },
        { id: 'mz9', question: 'Customer retention =', options: ['Pozyskiwanie klientów', 'Utrzymanie klientów', 'Analiza klientów'], correct: 1 },
        { id: 'mz10', question: 'Brand equity =', options: ['Wartość marki', 'Świadomość marki', 'Wizerunek marki'], correct: 0 },
    ],

    // Zarządzanie - Podstawowe
    'zarzadzanie-podstawowe': [
        { id: 'zp1', question: 'Benchmarking =', options: ['Ustalanie celów', 'Porównywanie z konkurencją', 'Szkolenie pracowników'], correct: 1 },
        { id: 'zp2', question: 'Core competency =', options: ['Podstawowy obowiązek', 'Kluczowa kompetencja', 'Główny problem'], correct: 1 },
        { id: 'zp3', question: 'Downsizing =', options: ['Rozwój firmy', 'Redukcja zatrudnienia', 'Restrukturyzacja'], correct: 1 },
        { id: 'zp4', question: 'Empowerment =', options: ['Kontrola', 'Upodmiotowienie pracowników', 'Nadzór'], correct: 1 },
        { id: 'zp5', question: 'Mentoring =', options: ['Szkolenie', 'Mentorowanie', 'Doradztwo'], correct: 1 },
        { id: 'zp6', question: 'Outsourcing =', options: ['Zlecanie na zewnątrz', 'Rozwijanie wewnętrznie', 'Kontrolowanie jakości'], correct: 0 },
        { id: 'zp7', question: 'Performance review =', options: ['Rekrutacja', 'Ocena okresowa', 'Planowanie kariery'], correct: 1 },
        { id: 'zp8', question: 'Strategic planning =', options: ['Planowanie operacyjne', 'Planowanie strategiczne', 'Planowanie finansowe'], correct: 1 },
        { id: 'zp9', question: 'SWOT analysis =', options: ['Analiza finansowa', 'Analiza SWOT', 'Analiza rynku'], correct: 1 },
        { id: 'zp10', question: 'Team building =', options: ['Rekrutacja zespołu', 'Budowanie zespołu', 'Szkolenie zespołu'], correct: 1 },
    ],

    // Zarządzanie - Zaawansowane
    'zarzadzanie-zaawansowane': [
        { id: 'zz1', question: 'Succession planning =', options: ['Planowanie sukcesji', 'Planowanie rozwoju', 'Planowanie awansów'], correct: 0 },
        { id: 'zz2', question: 'Thought leadership =', options: ['Przywództwo zespołowe', 'Przywództwo intelektualne', 'Przywództwo operacyjne'], correct: 1 },
        { id: 'zz3', question: 'Turnover rate =', options: ['Wskaźnik wzrostu', 'Wskaźnik rotacji', 'Wskaźnik efektywności'], correct: 1 },
        { id: 'zz4', question: 'Work-life balance =', options: ['Równowaga praca-życie', 'Harmonogram pracy', 'Plan rozwoju'], correct: 0 },
        { id: 'zz5', question: 'Change management =', options: ['Zarządzanie zmianą', 'Zarządzanie projektem', 'Zarządzanie ryzykiem'], correct: 0 },
        { id: 'zz6', question: 'Cross-functional team =', options: ['Zespół specjalistów', 'Zespół międzyfunkcjonalny', 'Zespół kierowniczy'], correct: 1 },
        { id: 'zz7', question: 'Key stakeholder =', options: ['Kluczowy dostawca', 'Kluczowy interesariusz', 'Kluczowy konkurent'], correct: 1 },
        { id: 'zz8', question: 'Performance metrics =', options: ['Wskaźniki efektywności', 'Cele strategiczne', 'Standardy jakości'], correct: 0 },
        { id: 'zz9', question: 'Resource allocation =', options: ['Pozyskiwanie zasobów', 'Alokacja zasobów', 'Oszczędzanie zasobów'], correct: 1 },
        { id: 'zz10', question: 'Strategic alignment =', options: ['Strategia konkurencji', 'Spójność strategiczna', 'Plan strategiczny'], correct: 1 },
    ],
}

const TOPICS = {
    'spotkania-prezentacje': [
        { id: 'spotkania-podstawowe', title: 'Spotkania - Podstawowe 📚', excerpt: '12 podstawowych zwrotów używanych w spotkaniach biznesowych' },
        { id: 'spotkania-zaawansowane', title: 'Spotkania - Zaawansowane 🚀', excerpt: '10 zaawansowanych wyrażeń do profesjonalnych prezentacji' },
    ],
    'korespondencja': [
        { id: 'korespondencja-podstawowe', title: 'Korespondencja - Podstawowe 📚', excerpt: '10 podstawowych zwrotów do pisania emaili biznesowych' },
        { id: 'korespondencja-zaawansowane', title: 'Korespondencja - Zaawansowane 🚀', excerpt: '10 zaawansowanych wyrażeń do formalnej korespondencji' },
    ],
    'negocjacje': [
        { id: 'negocjacje-podstawowe', title: 'Negocjacje - Podstawowe 📚', excerpt: '10 podstawowych terminów negocjacyjnych' },
        { id: 'negocjacje-zaawansowane', title: 'Negocjacje - Zaawansowane 🚀', excerpt: '10 zaawansowanych strategii negocjacyjnych' },
    ],
    'finanse-ekonomia': [
        { id: 'finanse-podstawowe', title: 'Finanse - Podstawowe 📚', excerpt: '10 podstawowych pojęć finansowych' },
        { id: 'finanse-zaawansowane', title: 'Finanse - Zaawansowane 🚀', excerpt: '10 zaawansowanych terminów ekonomicznych' },
    ],
    'marketing-sprzedaz': [
        { id: 'marketing-podstawowe', title: 'Marketing - Podstawowe 📚', excerpt: '10 podstawowych pojęć marketingowych' },
        { id: 'marketing-zaawansowane', title: 'Marketing - Zaawansowane 🚀', excerpt: '10 zaawansowanych strategii marketingowych' },
    ],
    'zarzadzanie': [
        { id: 'zarzadzanie-podstawowe', title: 'Zarządzanie - Podstawowe 📚', excerpt: '10 podstawowych terminów zarządczych' },
        { id: 'zarzadzanie-zaawansowane', title: 'Zarządzanie - Zaawansowane 🚀', excerpt: '10 zaawansowanych koncepcji zarządzania' },
    ],
}

function TopicCard({ topic, basePath, score }) {
    const getScoreColor = (percent) => {
        if (percent >= 90) return '#059669'
        if (percent >= 70) return '#d97706'
        if (percent >= 50) return '#dc2626'
        return '#6b7280'
    }

    const getScoreLabel = (percent) => {
        if (percent >= 90) return 'Doskonale!'
        if (percent >= 70) return 'Dobrze'
        if (percent >= 50) return 'Wymaga poprawy'
        return 'Słabo'
    }

    return (
        <Link key={topic.id} to={`${basePath}?topic=${topic.id}`} className="topic-card" role="listitem">
            <div className="topic-card__header">
                <h4 className="topic-card__title">{topic.title}</h4>
                {score && (
                    <div className="score-badge">
                        <div className="score-badge__main">
                            <span
                                className="score-badge__percent"
                                style={{ color: getScoreColor(score.percent) }}
                            >
                                {score.percent}%
                            </span>
                            <span className="score-badge__label">
                                {getScoreLabel(score.percent)}
                            </span>
                        </div>
                        <div className="score-badge__progress">
                            <div
                                className="score-badge__progress-fill"
                                style={{
                                    width: `${score.percent}%`,
                                    backgroundColor: getScoreColor(score.percent)
                                }}
                            ></div>
                        </div>
                    </div>
                )}
            </div>
            <p className="topic-card__excerpt">{topic.excerpt}</p>
            <span className="topic-card__cta">
                {score ? 'Kontynuuj ćwiczenia →' : 'Rozpocznij ćwiczenia →'}
            </span>
        </Link>
    )
}

function TopicsGrid({ basePath, active }) {
    const topics = TOPICS[active] ?? []
    const { getScore } = useExerciseScores()

    return (
        <div className="topic-grid" role="list">
            {topics.map(t => (
                <TopicCard
                    key={t.id}
                    topic={t}
                    basePath={basePath}
                    score={getScore(t.id)}
                />
            ))}
        </div>
    )
}

function Quiz({ topicId }) {
    const questions = useMemo(() => QUIZZES[topicId] ?? [], [topicId])
    const [answers, setAnswers] = useState({})
    const [checked, setChecked] = useState(false)
    const { saveScore } = useExerciseScores()

    useEffect(() => {
        setAnswers({})
        setChecked(false)
    }, [topicId])

    const correctCount = questions.reduce((acc, q) => acc + ((answers[q.id] ?? -1) === q.correct ? 1 : 0), 0)
    const scorePercent = Math.round((correctCount/questions.length)*100)

    const handleCheckAnswers = () => {
        setChecked(true)
        if (Object.keys(answers).length === questions.length) {
            saveScore(topicId, scorePercent)
        }
    }

    return (
        <div className="exercise">
            <div className="exercise__info">
                <h3>Ćwiczenia: {
                    TOPICS['spotkania-prezentacje']?.find(t => t.id === topicId)?.title ||
                    TOPICS['korespondencja']?.find(t => t.id === topicId)?.title ||
                    TOPICS['negocjacje']?.find(t => t.id === topicId)?.title ||
                    TOPICS['finanse-ekonomia']?.find(t => t.id === topicId)?.title ||
                    TOPICS['marketing-sprzedaz']?.find(t => t.id === topicId)?.title ||
                    TOPICS['zarzadzanie']?.find(t => t.id === topicId)?.title
                }</h3>
                <p>Liczba pytań: {questions.length}</p>
            </div>

            {questions.map((q, idx) => {
                const selected = answers[q.id]
                const isCorrect = selected === q.correct
                return (
                    <div key={q.id} className={`exercise__q${checked ? (isCorrect ? ' is-correct' : ' is-wrong') : ''}`}>
                        <div className="exercise__qhead">
                            <span className="badge">{idx + 1}</span>
                            <h4>{q.question}</h4>
                        </div>
                        <div className="exercise__options">
                            {q.options.map((opt, i) => {
                                const selectedThis = selected === i
                                const showState = checked
                                const stateClass =
                                    showState && i === q.correct
                                        ? ' option--correct'
                                        : showState && selectedThis && i !== q.correct
                                            ? ' option--wrong'
                                            : selectedThis
                                                ? ' option--selected'
                                                : ''
                                return (
                                    <button
                                        type="button"
                                        key={i}
                                        className={`option${stateClass}`}
                                        onClick={() => !checked && setAnswers((a) => ({ ...a, [q.id]: i }))}
                                        aria-pressed={selectedThis}
                                    >
                                        {opt}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                )
            })}

            <div className="exercise__actions">
                {!checked ? (
                    <button
                        className="btn btn--primary"
                        onClick={handleCheckAnswers}
                        disabled={Object.keys(answers).length !== questions.length}
                    >
                        Sprawdź odpowiedzi
                    </button>
                ) : (
                    <button className="btn" onClick={() => { setAnswers({}); setChecked(false) }}>
                        Rozpocznij od nowa
                    </button>
                )}
                {checked && (
                    <div className="exercise__result">
                        <strong>Wynik: {correctCount}/{questions.length}</strong>
                        <span> ({scorePercent}%)</span>
                        <div className="exercise__result-saved">
                            {scorePercent > 0 && "✓ Wynik zapisany"}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default function BusinessEnglishExercises() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const active = section ?? 'spotkania-prezentacje'
    const topicId = searchParams.get('topic')
    const basePath = `/cwiczenia/slownictwo/business-english/${active}`

    return (
        <main className="topic-layout">
            <div className="container">
                <header className="topic-header">
                    <h2>Ćwiczenia: Business English</h2>
                    <p className="muted">Profesjonalne zwroty biznesowe - ćwicz według kategorii</p>
                </header>

                <nav className="subnav" aria-label="Podstrony ćwiczeń: Business English">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/cwiczenia/slownictwo/business-english/${s.id}`}
                            className={({ isActive }) => `subnav__item${isActive ? ' subnav__item--active' : ''}`}
                        >
                            <span className="subnav__title">{s.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <article className="topic-content">
                    {!topicId ? (
                        <>
                            <div className="welcome-message">
                                <h3>Ćwicz Business English! 🎯</h3>
                                <p>Wybierz kategorię i poziom trudności, aby sprawdzić znajomość profesjonalnych zwrotów biznesowych.</p>
                                <div className="tips-grid">
                                    <div className="tip">
                                        <h5>Spotkania i prezentacje</h5>
                                        <p>Zwroty przydatne podczas spotkań biznesowych i prezentacji</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Korespondencja biznesowa</h5>
                                        <p>Profesjonalne wyrażenia do pisania emaili i listów</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Negocjacje</h5>
                                        <p>Terminologia niezbędna w negocjacjach handlowych</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Finanse i ekonomia</h5>
                                        <p>Pojęcia z zakresu finansów i ekonomii biznesowej</p>
                                    </div>
                                </div>
                            </div>

                            <TopicsGrid basePath={basePath} active={active} />
                        </>
                    ) : (
                        <>
                            <div className="topic-detail__header">
                                <div className="topic-detail__back">
                                    <Link to={basePath} className="btn-link">← Wróć do listy ćwiczeń</Link>
                                </div>
                                <div className="topic-detail__info">
                                    <h3>{
                                        TOPICS['spotkania-prezentacje']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['korespondencja']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['negocjacje']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['finanse-ekonomia']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['marketing-sprzedaz']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['zarzadzanie']?.find(t => t.id === topicId)?.title
                                    }</h3>
                                    <p className="muted">{
                                        TOPICS['spotkania-prezentacje']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['korespondencja']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['negocjacje']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['finanse-ekonomia']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['marketing-sprzedaz']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['zarzadzanie']?.find(t => t.id === topicId)?.excerpt
                                    }</p>
                                </div>
                            </div>

                            <Quiz topicId={topicId} />

                            <div className="exercise-tips">
                                <h4>💡 Wskazówki do nauki Business English</h4>
                                <div className="tips-grid">
                                    <div className="tip">
                                        <h5>Używaj w kontekście</h5>
                                        <p>Twórz własne zdania z nowymi zwrotami biznesowymi</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Czytaj biznesowe materiały</h5>
                                        <p>Artykuły, raporty i case studies pomogą zrozumieć kontekst</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Oglądaj prezentacje</h5>
                                        <p>Konferencje TED i webinary biznesowe to dobre źródło</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Ćwicz w pracy</h5>
                                        <p>Staraj się używać nowych zwrotów w codziennej komunikacji</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </article>
            </div>
        </main>
    )
}