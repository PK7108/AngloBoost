import React from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext.jsx'
import useDocumentMeta from '../../useDocumentMeta'
import '../../styles/topic-cards.css'
import '../../styles/vocabulary.css'

const sections = [
    { id: 'spotkania-prezentacje', label: 'Spotkania i prezentacje' },
    { id: 'korespondencja', label: 'Korespondencja biznesowa' },
    { id: 'negocjacje', label: 'Negocjacje' },
    { id: 'finanse-ekonomia', label: 'Finanse i ekonomia' },
    { id: 'marketing-sprzedaz', label: 'Marketing i sprzedaż' },
    { id: 'zarzadzanie', label: 'Zarządzanie' },
]

const BUSINESS_ENGLISH = {
    'spotkania-prezentacje': [
        ['To kick off', 'Rozpocząć (spotkanie, projekt)'],
        ['Action items', 'Zadania do wykonania'],
        ['Bottom line', 'Najważniejsza kwestia, sedno sprawy'],
        ['Brainstorming', 'Burza mózgów'],
        ['Follow up', 'Kontynuować, śledzić sprawę'],
        ['Key takeaways', 'Kluczowe wnioski'],
        ['Moving forward', 'W przyszłości, idąc naprzód'],
        ['On the same page', 'Rozumieć się wzajemnie'],
        ['Out of the box', 'Nieszablonowy, kreatywny'],
        ['Stakeholder', 'Interesariusz, osoba zainteresowana'],
        ['Touch base', 'Skontaktować się, omówić'],
        ['Win-win situation', 'Sytuacja korzystna dla wszystkich'],
        ['Wrap up', 'Zakończyć, podsumować'],
        ['Agenda', 'Plan spotkania'],
        ['Deadline', 'Ostateczny termin'],
    ],
    'korespondencja': [
        ['ASAP', 'As Soon As Possible - jak najszybciej'],
        ['CC', 'Carbon Copy - kopia do wiadomości'],
        ['BCC', 'Blind Carbon Copy - ukryta kopia'],
        ['Enclosed please find', 'W załączeniu znajduje się'],
        ['FYI', 'For Your Information - dla twojej wiadomości'],
        ['I look forward to hearing from you', 'Z niecierpliwością czekam na odpowiedź'],
        ['Please find attached', 'W załączniku znajduje się'],
        ['Regarding', 'W nawiązaniu do, odnośnie'],
        ['R.S.V.P.', 'Proszę o odpowiedź (z francuskiego)'],
        ['To whom it may concern', 'Do wszystkich zainteresowanych'],
        ['Upon receipt', 'Po otrzymaniu'],
        ['We hereby inform', 'Niniejszym informujemy'],
        ['Your faithfully', 'Z poważaniem (w listach formalnych)'],
        ['Your sincerely', 'Z poważaniem (gdy znamy imię)'],
        ['Follow-up email', 'Email przypominający'],
    ],
    'negocjacje': [
        ['Bargaining power', 'Siła przetargowa'],
        ['Common ground', 'Wspólny grunt, porozumienie'],
        ['Counteroffer', 'Kontroferta'],
        ['Deal breaker', 'Czynnik uniemożliwiający zawarcie umowy'],
        ['Leverage', 'Dźwignia, przewaga'],
        ['Meeting halfway', 'Pójście na kompromis'],
        ['Mutually beneficial', 'Wzajemnie korzystny'],
        ['Negotiating table', 'Stół negocjacyjny'],
        ['Terms and conditions', 'Warunki i postanowienia'],
        ['Walk away', 'Odejść od negocjacji'],
        ['Win-win', 'Wygrana-wygrana'],
        ['Bottom line', 'Minimalne warunki'],
        ['BATNA', 'Best Alternative To a Negotiated Agreement - najlepsza alternatywa'],
        ['ZOPA', 'Zone Of Possible Agreement - strefa możliwego porozumienia'],
        ['Anchor point', 'Punkt wyjścia w negocjacjach'],
    ],
    'finanse-ekonomia': [
        ['Assets', 'Aktywa'],
        ['Balance sheet', 'Bilans'],
        ['Cash flow', 'Przepływ gotówki'],
        ['Dividend', 'Dywidenda'],
        ['Equity', 'Kapitał własny'],
        ['Fiscal year', 'Rok podatkowy'],
        ['Gross profit', 'Zysk brutto'],
        ['IPO', 'Initial Public Offering - pierwsza oferta publiczna'],
        ['Liability', 'Zobowiązanie'],
        ['Net income', 'Dochód netto'],
        ['Overhead', 'Koszty ogólne'],
        ['Quarterly report', 'Raport kwartalny'],
        ['ROI', 'Return On Investment - zwrot z inwestycji'],
        ['Startup', 'Firma rozpoczynająca działalność'],
        ['Venture capital', 'Kapitał wysokiego ryzyka'],
    ],
    'marketing-sprzedaz': [
        ['B2B', 'Business to Business - biznes dla biznesu'],
        ['B2C', 'Business to Consumer - biznes dla klienta'],
        ['Brand awareness', 'Świadomość marki'],
        ['CRM', 'Customer Relationship Management - zarządzanie relacjami z klientami'],
        ['CTA', 'Call To Action - wezwanie do działania'],
        ['KPI', 'Key Performance Indicator - kluczowy wskaźnik efektywności'],
        ['Lead generation', 'Generowanie leadów'],
        ['Market share', 'Udział w rynku'],
        ['ROI', 'Return On Investment - zwrot z inwestycji'],
        ['Sales funnel', 'Lejek sprzedażowy'],
        ['Target audience', 'Grupa docelowa'],
        ['Unique selling proposition', 'Unikalna propozycja sprzedaży'],
        ['Upselling', 'Sprzedaż dodatkowa'],
        ['Value proposition', 'Propozycja wartości'],
        ['Word of mouth', 'Marketing szeptany'],
    ],
    'zarzadzanie': [
        ['Benchmarking', 'Porównywanie z konkurencją'],
        ['Core competency', 'Kluczowa kompetencja'],
        ['Downsizing', 'Redukcja zatrudnienia'],
        ['Empowerment', 'Upodmiotowienie pracowników'],
        ['KPI', 'Key Performance Indicator - kluczowy wskaźnik efektywności'],
        ['Mentoring', 'Mentorowanie'],
        ['Outsourcing', 'Zlecanie na zewnątrz'],
        ['Performance review', 'Ocena okresowa'],
        ['Strategic planning', 'Planowanie strategiczne'],
        ['Succession planning', 'Planowanie sukcesji'],
        ['SWOT analysis', 'Analiza SWOT'],
        ['Team building', 'Budowanie zespołu'],
        ['Thought leadership', 'Przywództwo intelektualne'],
        ['Turnover rate', 'Wskaźnik rotacji'],
        ['Work-life balance', 'Równowaga praca-życie'],
    ],
}

// Komponent do wyświetlania przykładowych zdań
function ExampleSentence({ term }) {
    const examples = {
        // Spotkania i prezentacje
        'To kick off': 'Let me kick off the meeting with a quick overview of our progress.',
        'Action items': 'Our main action items from today\'s meeting are to complete the report and contact the client.',
        'Main objective': 'Our main objective is to increase sales by 15% this quarter.',
        'Brainstorming': 'We need a brainstorming session to generate new ideas for the marketing campaign.',
        'Follow up': 'I will follow up with the client next week to discuss their requirements.',
        'Key takeaways': 'The key takeaways from the conference were the importance of digital transformation and customer experience.',
        'Moving forward': 'Moving forward, we should focus on improving our online presence.',
        'On the same page': 'Let\'s make sure we\'re all on the same page about the project timeline.',
        'Out of the box': 'We need some out-of-the-box thinking to solve this problem.',
        'Stakeholder': 'We need to consider all stakeholders when making this decision.',
        'Touch base': 'Can we touch base tomorrow to discuss the project status?',
        'Win-win situation': 'The partnership created a win-win situation for both companies.',
        'Wrap up': 'Let\'s wrap up the meeting and schedule our next session.',
        'Agenda': 'Please review the agenda before the meeting.',
        'Deadline': 'We have a tight deadline to meet for this project.',

        // Korespondencja
        'ASAP': 'Please send me the report ASAP.',
        'CC': 'I\'ll CC you on the email to the client.',
        'BCC': 'Use BCC when sending to multiple recipients to protect privacy.',
        'Enclosed please find': 'Enclosed please find the documents you requested.',
        'FYI': 'FYI, the meeting has been rescheduled to 3 PM.',
        'I look forward to hearing from you': 'Thank you for your consideration. I look forward to hearing from you.',
        'Please find attached': 'Please find attached the quarterly report.',
        'Regarding': 'Regarding your inquiry, we can confirm delivery for next week.',
        'R.S.V.P.': 'Please R.S.V.P. by Friday so we can finalize the arrangements.',
        'To whom it may concern': 'To whom it may concern, I am writing to request information about your services.',
        'Upon receipt': 'Upon receipt of your payment, we will process your order.',
        'We hereby inform': 'We hereby inform you that your application has been approved.',
        'Your faithfully': 'Your faithfully, John Smith',
        'Your sincerely': 'Your sincerely, Maria Johnson',
        'Follow-up email': 'I sent a follow-up email to the client yesterday.',

        // Negocjacje
        'Bargaining power': 'Our strong market position gives us significant bargaining power.',
        'Common ground': 'We found common ground on the main terms of the agreement.',
        'Counteroffer': 'The client made a counteroffer that we need to consider.',
        'Deal breaker': 'The payment terms could be a deal breaker for this contract.',
        'Leverage': 'We have leverage in these negotiations due to our unique technology.',
        'Meeting halfway': 'We need to meet halfway to reach an agreement.',
        'Mutually beneficial': 'We\'re looking for a mutually beneficial partnership.',
        'Negotiating table': 'Both parties returned to the negotiating table with new proposals.',
        'Terms and conditions': 'Please review the terms and conditions carefully before signing.',
        'Walk away': 'We\'re prepared to walk away if the terms aren\'t favorable.',
        'Win-win': 'Our goal is to create a win-win scenario for everyone involved.',
        'Bottom line': 'Our bottom line is 20% profit margin on this deal.',
        'BATNA': 'Before negotiations, always determine your BATNA.',
        'ZOPA': 'We need to identify the ZOPA to find acceptable terms.',
        'Anchor point': 'Let\'s establish an anchor point for our price discussions.',

        // Finanse i ekonomia
        'Assets': 'The company\'s assets have increased by 25% this year.',
        'Balance sheet': 'The balance sheet shows a healthy financial position.',
        'Cash flow': 'We need to improve our cash flow to fund expansion.',
        'Dividend': 'The board declared a dividend of $2 per share.',
        'Equity': 'We raised additional equity to finance the acquisition.',
        'Fiscal year': 'Our fiscal year ends on December 31st.',
        'Gross profit': 'Gross profit margins have improved this quarter.',
        'IPO': 'The company is planning an IPO next year.',
        'Liability': 'Current liabilities include accounts payable and short-term debt.',
        'Net income': 'Net income increased by 15% compared to last year.',
        'Overhead': 'We need to reduce overhead costs to improve profitability.',
        'Quarterly report': 'The quarterly report will be released next week.',
        'ROI': 'We expect a strong ROI from this investment.',
        'Startup': 'The startup secured $5 million in funding.',
        'Venture capital': 'We\'re seeking venture capital to scale our operations.',

        // Marketing i sprzedaż
        'B2B': 'Our company specializes in B2B software solutions.',
        'B2C': 'The new campaign targets B2C customers directly.',
        'Brand awareness': 'Our main goal is to increase brand awareness in the European market.',
        'CRM': 'We implemented a new CRM system to manage customer relationships.',
        'CTA': 'The website needs a clear CTA to guide visitors.',
        'KPI': 'We track several KPIs to measure marketing performance.',
        'Lead generation': 'Our lead generation efforts have been very successful.',
        'Market share': 'We aim to increase our market share by 5% this year.',
        'Sales funnel': 'We analyzed the sales funnel to identify bottlenecks.',
        'Target audience': 'The campaign is designed for our primary target audience.',
        'Unique selling proposition': 'Our unique selling proposition is 24/7 customer support.',
        'Upselling': 'The sales team focuses on upselling to existing customers.',
        'Value proposition': 'Our value proposition must be clear and compelling.',
        'Word of mouth': 'Word of mouth has been our most effective marketing channel.',

        // Zarządzanie
        'Benchmarking': 'We use benchmarking to compare our performance with industry leaders.',
        'Core competency': 'Innovation is our core competency.',
        'Downsizing': 'The company is considering downsizing to reduce costs.',
        'Empowerment': 'Employee empowerment leads to higher job satisfaction.',
        'Mentoring': 'The mentoring program has helped develop new leaders.',
        'Outsourcing': 'We\'re outsourcing IT support to reduce expenses.',
        'Performance review': 'Annual performance reviews are scheduled for next month.',
        'Strategic planning': 'The strategic planning session will take place next quarter.',
        'Succession planning': 'Succession planning ensures continuity in leadership.',
        'SWOT analysis': 'We conducted a SWOT analysis to assess our position.',
        'Team building': 'Team building activities improved collaboration.',
        'Thought leadership': 'Our CEO is recognized as a thought leader in the industry.',
        'Turnover rate': 'The turnover rate has decreased since we improved benefits.',
        'Work-life balance': 'We promote work-life balance through flexible scheduling.',
    }

    return (
        <div className="example-sentence">
            {examples[term] || `Example: "We need to use '${term}' in our business strategy."`}
        </div>
    )
}

const TOPICS = Object.fromEntries(
    sections.map(s => ([
        s.id,
        [
            {
                id: `${s.id}-list`,
                title: `Business English: ${s.label}`,
                excerpt: `Zestaw ${BUSINESS_ENGLISH[s.id].length} profesjonalnych zwrotów biznesowych`,
                content: () => (
                    <section className="card">
                        <h3>{`Business English — ${s.label}`}</h3>
                        <p className="muted">Każde wyrażenie zawiera przykład użycia w kontekście biznesowym</p>
                        <table className="vocab-table">
                            <thead>
                            <tr>
                                <th>Wyrażenie biznesowe</th>
                                <th>Znaczenie</th>
                                <th>Przykład użycia</th>
                            </tr>
                            </thead>
                            <tbody>
                            {(BUSINESS_ENGLISH[s.id] ?? []).map(([term, meaning]) => (
                                <tr key={term} className="business-row">
                                    <td className="business-term"><strong>{term}</strong></td>
                                    <td className="business-meaning">{meaning}</td>
                                    <td className="business-example">
                                        <ExampleSentence term={term} />
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </section>
                ),
            }
        ]
    ]))
)

function TopicsGrid({ basePath, active }) {
    const topics = TOPICS[active] ?? []
    return (
        <div className="topic-grid" role="list">
            {topics.map(t => (
                <Link key={t.id} to={`${basePath}?topic=${t.id}`} className="topic-card" role="listitem">
                    <h4 className="topic-card__title">{t.title}</h4>
                    <p className="topic-card__excerpt">{t.excerpt}</p>
                    <span className="topic-card__cta">Zobacz zwroty →</span>
                </Link>
            ))}
        </div>
    )
}

function TopicDetail({ topic, onBack }) {
    return (
        <div className="topic-detail">
            <div className="topic-detail__back">
                <Link to={onBack} className="btn-link">← Wróć do listy</Link>
            </div>
            {topic.content()}
        </div>
    )
}

export default function BusinessEnglish() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const { lang } = useLanguage()
    const active = section ?? 'spotkania-prezentacje'
    const topicId = searchParams.get('topic')
    const topics = TOPICS[active] ?? []
    const selected = topics.find(t => t.id === topicId)
    const basePath = `/slownictwo/business-english/${active}`

    const getMetaTitle = () => {
        if (topicId) {
            return lang === 'pl'
                ? 'Business English - szczegóły | AngloBoost'
                : 'Business English - details | AngloBoost'
        }
        return lang === 'pl'
            ? 'Business English - kompletny przewodnik | AngloBoost'
            : 'Business English - complete guide | AngloBoost'
    }

    const getMetaDescription = () => {
        if (topicId) {
            return lang === 'pl'
                ? 'Profesjonalne zwroty biznesowe z przykładami użycia'
                : 'Professional business phrases with usage examples'
        }
        return lang === 'pl'
            ? 'Ponad 90 profesjonalnych zwrotów biznesowych z przykładami użycia'
            : 'Over 90 professional business phrases with usage examples'
    }

    const getCanonicalUrl = () => {
        const base = lang === 'pl'
            ? `https://angloboost.pl/pl/slownictwo/business-english/${active}`
            : `https://angloboost.pl/en/vocabulary/business-english/${active}`

        return topicId ? `${base}?topic=${topicId}` : base
    }

    useDocumentMeta({
        title: getMetaTitle(),
        description: getMetaDescription(),
        canonical: getCanonicalUrl(),
        og: {
            title: getMetaTitle(),
            description: getMetaDescription(),
            image: 'https://angloboost.pl/UK-social.png',
            url: window.location.href
        }
    })

    return (
        <main className="topic-layout">
            <div className="container">
                <header className="topic-header">
                    <h2>Business English - kompletny przewodnik</h2>
                    <p className="muted">Ponad 90 profesjonalnych zwrotów biznesowych z przykładami użycia</p>
                </header>

                <nav className="subnav" aria-label="Podstrony: Business English">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/slownictwo/business-english/${s.id}`}
                            className={({ isActive }) => `subnav__item${isActive ? ' subnav__item--active' : ''}`}
                        >
                            <span className="subnav__title">{s.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <article className="topic-content">
                    {selected ? (
                        <TopicDetail topic={selected} onBack={basePath} />
                    ) : (
                        <>
                            <div className="welcome-message">
                                <h3>Dlaczego warto znać Business English?</h3>
                                <p>Profesjonalny język biznesowy jest kluczowy w międzynarodowym środowisku pracy. Znajomość tych zwrotów pomoże Ci:</p>
                                <ul>
                                    <li>Skutecznie komunikować się w środowisku biznesowym</li>
                                    <li>Prowadzić profesjonalne spotkania i prezentacje</li>
                                    <li>Pisać skuteczną korespondencję biznesową</li>
                                    <li>Prowadzić negocjacje i budować relacje z klientami</li>
                                    <li>Zrozumieć dokumenty finansowe i raporty</li>
                                </ul>
                                <p><strong>Każde wyrażenie zawiera praktyczny przykład użycia w kontekście biznesowym!</strong></p>
                            </div>
                            <p className="muted">Wybierz kategorię, aby zobaczyć zestaw profesjonalnych zwrotów biznesowych.</p>
                            <TopicsGrid basePath={basePath} active={active} />
                        </>
                    )}
                </article>
            </div>
        </main>
    )
}