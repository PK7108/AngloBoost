import React from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext.jsx'
import useDocumentMeta from '../../useDocumentMeta'
import '../../styles/topic-cards.css'
import '../../styles/vocabulary.css'

const sections = [
    { id: 'pieniądze', label: 'Pieniądze' },
    { id: 'zwierzęta', label: 'Zwierzęta' },
    { id: 'najpopularniejsze', label: 'Najpopularniejsze' },
    { id: 'części-ciała', label: 'Części ciała' },
    { id: 'jedzenie', label: 'Jedzenie' },
    { id: 'praca-biznes', label: 'Praca i biznes' },
]

const IDIOMS = {
    'pieniądze': [
        ['cost an arm and a leg', 'kosztować fortunę'],
        ['break the bank', 'kosztować majątek / zrujnować budżet'],
        ['cash cow', 'dojna krowa (źródło stałego zysku)'],
        ['tighten your belt', 'zaciskać pasa'],
        ['born with a silver spoon in mouth', 'urodzony w bogatej rodzinie'],
        ['make ends meet', 'wiązać koniec z końcem'],
        ['money doesn\'t grow on trees', 'pieniądze nie rosną na drzewach'],
        ['pay through the nose', 'zapłacić horrendalną cenę'],
        ['save for a rainy day', 'oszczędzać na czarną godzinę'],
        ['flat broke', 'być kompletnie bez grosza'],
        ['rolling in money', 'pływać w pieniądzach'],
        ['pinch pennies', 'być skąpym, oszczędzać każdy grosz'],
        ['worth its weight in gold', 'warte swojej wagi w złocie'],
        ['bring home the bacon', 'zarabiać na utrzymanie rodziny'],
        ['hit the jackpot', 'trafić szóstkę w totka'],
    ],
    'zwierzęta': [
        ['let the cat out of the bag', 'wygadać się (zdradzić sekret)'],
        ['a dark horse', 'czarny koń (niespodziewany zwycięzca)'],
        ['wild goose chase', 'daremny trud, pogoń za czymś nieosiągalnym'],
        ['the lion\'s share', 'lwia część'],
        ['busy as a bee', 'zajęty jak pszczoła'],
        ['sly as a fox', 'chytry jak lis'],
        ['stubborn as a mule', 'uparty jak osioł'],
        ['like a fish out of water', 'jak ryba bez wody'],
        ['kill two birds with one stone', 'upiec dwie pieczenie na jednym ogniu'],
        ['when pigs fly', 'gdy świnie latają (nigdy)'],
        ['elephant in the room', 'oczywisty problem, o którym nikt nie mówi'],
        ['black sheep of the family', 'czarna owca w rodzinie'],
        ['hold your horses', 'zwolnić, poczekać chwilę'],
        ['raining cats and dogs', 'lać jak z cebra'],
        ['early bird catches the worm', 'kto rano wstaje, temu Pan Bóg daje'],
        ['wolf in sheep\'s clothing', 'wilk w owczej skórze'],
        ['crocodile tears', 'krokodyle łzy'],
        ['like a bull in a china shop', 'jak słoń w składzie porcelany'],
    ],
    'najpopularniejsze': [
        ['hit the nail on the head', 'trafić w sedno'],
        ['once in a blue moon', 'raz na ruski rok'],
        ['piece of cake', 'bułka z masłem (coś łatwego)'],
        ['under the weather', 'kiepsko się czuć'],
        ['bite the bullet', 'wziąć byka za rogi'],
        ['break a leg', 'połamania nóg (życzenie powodzenia)'],
        ['cut corners', 'iść na skróty (robić coś byle jak)'],
        ['get out of hand', 'wymknąć się spod kontroli'],
        ['go the extra mile', 'zrobić coś ekstra'],
        ['hang in there', 'trzymaj się'],
        ['it\'s not rocket science', 'to nie jest fizyka kwantowa'],
        ['miss the boat', 'spóźnić się (stracić okazję)'],
        ['on cloud nine', 'w siódmym niebie'],
        ['pull someone\'s leg', 'robić kogoś w balona'],
        ['speak of the devil', 'o wilku mowa'],
        ['the last straw', 'ostatnia kropla, która przelała czarę goryczy'],
        ['through thick and thin', 'na dobre i na złe'],
        ['time flies', 'czas leci'],
        ['when hell freezes over', 'gdy morze zamarznie'],
        ['your guess is as good as mine', 'sam nie wiem'],
    ],
    'części-ciała': [
        ['keep an eye on', 'mieć oko na'],
        ['get cold feet', 'dostać pietra'],
        ['learn by heart', 'uczyć się na pamięć'],
        ['lend a hand', 'pomóc (dać pomocną dłoń)'],
        ['pull someone\'s leg', 'żartować sobie z kogoś'],
        ['cost an arm and a leg', 'kosztować fortune'],
        ['have a gut feeling', 'mieć przeczucie'],
        ['break a leg', 'połamania nóg (powodzenia)'],
        ['head over heels', 'po uszy zakochany'],
        ['keep your fingers crossed', 'trzymać kciuki'],
        ['turn a blind eye', 'przymknąć oko'],
        ['put your foot in your mouth', 'wsadzić kij w mrowisko'],
        ['have a big mouth', 'mieć wielką gębę'],
        ['skin of your teeth', 'o włos'],
        ['stick your neck out', 'wystawić się'],
        ['give someone the cold shoulder', 'potraktować kogoś ozięble'],
        ['have butterflies in your stomach', 'mieć motyle w brzuchu'],
        ['keep your chin up', 'głowa do góry'],
        ['all ears', 'cały w słuch zamieniony'],
        ['pain in the neck', 'strasznie wkurzający'],
    ],
    'jedzenie': [
        ['piece of cake', 'bułka z masłem'],
        ['spill the beans', 'wysypać wszystko'],
        ['the apple of my eye', 'oczko w głowie'],
        ['big cheese', 'wielka szycha'],
        ['bread and butter', 'podstawa utrzymania'],
        ['bring home the bacon', 'zarabiać na chleb'],
        ['cool as a cucumber', 'spokojny jak żółw'],
        ['cup of tea', 'czyjś gust'],
        ['egg on your face', 'być w głupiej sytuacji'],
        ['food for thought', 'poważna sprawa do przemyślenia'],
        ['full of beans', 'pełen energii'],
        ['go bananas', 'oszaleć'],
        ['hard nut to crack', 'twardy orzech do zgryzienia'],
        ['hot potato', 'drażliwy temat'],
        ['in a nutshell', 'w skrócie'],
        ['like two peas in a pod', 'jak dwie krople wody'],
        ['salt of the earth', 'sol ziemi'],
        ['sell like hot cakes', 'rozchodzić się jak świeże bułeczki'],
        ['take with a grain of salt', 'traktować z rezerwą'],
        ['walking on eggshells', 'chodzić jak po jajkach'],
    ],
    'praca-biznes': [
        ['think outside the box', 'myśleć nieszablonowo'],
        ['ballpark figure', 'przybliżona kwota'],
        ['get the ball rolling', 'zapoczątkować coś'],
        ['back to the drawing board', 'wrócić do punktu wyjścia'],
        ['cutting corners', 'iść na skróty'],
        ['learn the ropes', 'nauczyć się podstaw'],
        ['on the same page', 'rozumieć się wzajemnie'],
        ['raise the bar', 'podnieść poprzeczkę'],
        ['touch base', 'skontaktować się'],
        ['win-win situation', 'sytuacja, w której wszyscy wygrywają'],
        ['blue-collar worker', 'robotnik fizyczny'],
        ['white-collar worker', 'pracownik umysłowy'],
        ['golden handshake', 'odszkodowanie za odejście z pracy'],
        ['climb the corporate ladder', 'awansować w firmie'],
        ['glass ceiling', 'niewidzialna bariera awansu'],
        ['burn the midnight oil', 'pracować do późna w nocy'],
        ['call it a day', 'zakończyć pracę na dziś'],
        ['get down to business', 'przejść do rzeczy'],
        ['in the pipeline', 'w przygotowaniu'],
        ['put all your eggs in one basket', 'postawić wszystko na jedną kartę'],
    ],
}

const TOPICS = Object.fromEntries(
    sections.map(s => ([
        s.id,
        [
            {
                id: `${s.id}-set`,
                title: `Idiomy: ${s.label}`,
                excerpt: `Zestaw ${IDIOMS[s.id].length} popularnych idiomów z tłumaczeniami`,
                content: () => (
                    <section className="card">
                        <h3>{`Idiomy — ${s.label}`}</h3>
                        <p className="muted">Kliknij na idiom, aby zobaczyć przykładowe zdanie</p>
                        <table className="vocab-table">
                            <thead>
                            <tr>
                                <th>Idiom angielski</th>
                                <th>Znaczenie po polsku</th>
                                <th>Przykład użycia</th>
                            </tr>
                            </thead>
                            <tbody>
                            {(IDIOMS[s.id] ?? []).map(([en, pl]) => (
                                <tr key={en} className="idiom-row">
                                    <td className="idiom-en"><strong>{en}</strong></td>
                                    <td className="idiom-pl">{pl}</td>
                                    <td className="idiom-example">
                                        <ExampleSentence idiom={en} />
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

// Komponent do wyświetlania przykładowych zdań
function ExampleSentence({ idiom }) {
    const examples = {
        // Pieniądze
        'cost an arm and a leg': 'This new iPhone costs an arm and a leg!',
        'break the bank': 'Our vacation didn\'t break the bank because we found good deals.',
        'cash cow': 'The new product became a real cash cow for the company.',
        'tighten your belt': 'We need to tighten our belts until I find a new job.',
        'born with a silver spoon in mouth': 'He was born with a silver spoon in his mouth and never had to work.',
        'make ends meet': 'It\'s hard to make ends meet with such a low salary.',
        'money doesn\'t grow on trees': 'Don\'t spend so much - money doesn\'t grow on trees!',
        'pay through the nose': 'We paid through the nose for these concert tickets.',
        'save for a rainy day': 'My grandmother always told me to save for a rainy day.',
        'flat broke': 'After paying all the bills, I\'m flat broke until next week.',
        'rolling in money': 'Since he started his business, he\'s been rolling in money.',
        'pinch pennies': 'We have to pinch pennies if we want to buy a house.',
        'worth its weight in gold': 'Good employees are worth their weight in gold.',
        'bring home the bacon': 'Both parents work to bring home the bacon.',
        'hit the jackpot': 'She hit the jackpot with her new invention.',

        // Zwierzęta
        'let the cat out of the bag': 'I let the cat out of the bag about the surprise party.',
        'a dark horse': 'She was a dark horse in the competition and won unexpectedly.',
        'wild goose chase': 'Looking for that rare book was a wild goose chase.',
        'the lion\'s share': 'The CEO took the lion\'s share of the profits.',
        'busy as a bee': 'She\'s been as busy as a bee preparing for the wedding.',
        'sly as a fox': 'Be careful when negotiating with him - he\'s as sly as a fox.',
        'stubborn as a mule': 'My dad is as stubborn as a mule when he makes up his mind.',
        'like a fish out of water': 'I felt like a fish out of water at the formal dinner.',
        'kill two birds with one stone': 'By working from home, I kill two birds with one stone.',
        'when pigs fly': 'He\'ll clean his room when pigs fly!',
        'elephant in the room': 'The company\'s financial problems are the elephant in the room.',
        'black sheep of the family': 'He\'s always been the black sheep of the family.',
        'hold your horses': 'Hold your horses! We need to think about this first.',
        'raining cats and dogs': 'Take an umbrella - it\'s raining cats and dogs outside.',
        'early bird catches the worm': 'I always get to work early - the early bird catches the worm.',
        'wolf in sheep\'s clothing': 'Be careful - he might be a wolf in sheep\'s clothing.',
        'crocodile tears': 'She shed crocodile tears when she was caught.',
        'like a bull in a china shop': 'He entered the meeting like a bull in a china shop.',

        // Najpopularniejsze
        'hit the nail on the head': 'You hit the nail on the head with that analysis.',
        'once in a blue moon': 'I only see my old school friends once in a blue moon.',
        'piece of cake': 'The exam was a piece of cake for her.',
        'under the weather': 'I\'m feeling under the weather today, so I\'ll stay home.',
        'bite the bullet': 'I had to bite the bullet and tell him the truth.',
        'break a leg': 'Break a leg in your performance tonight!',
        'cut corners': 'They cut corners on safety to save money.',
        'get out of hand': 'The party got out of hand and the police came.',
        'go the extra mile': 'She always goes the extra mile for her customers.',
        'hang in there': 'Hang in there - things will get better soon.',
        'it\'s not rocket science': 'Just follow the instructions - it\'s not rocket science.',
        'miss the boat': 'If we don\'t decide now, we\'ll miss the boat.',
        'on cloud nine': 'She was on cloud nine after getting the promotion.',
        'pull someone\'s leg': 'I was just pulling your leg - of course I believe you!',
        'speak of the devil': 'Speak of the devil - we were just talking about you!',
        'the last straw': 'When he came late again, it was the last straw.',
        'through thick and thin': 'We\'ve been friends through thick and thin.',
        'time flies': 'Time flies when you\'re having fun!',
        'when hell freezes over': 'I\'ll forgive him when hell freezes over.',
        'your guess is as good as mine': 'Where is she? Your guess is as good as mine.',

        // Części ciała
        'keep an eye on': 'Can you keep an eye on my bag while I go to the restroom?',
        'get cold feet': 'He got cold feet right before the wedding.',
        'learn by heart': 'I need to learn this poem by heart for tomorrow.',
        'lend a hand': 'Could you lend a hand with these boxes?',
        'have a gut feeling': 'I have a gut feeling that something is wrong.',
        'head over heels': 'He fell head over heels in love with her.',
        'keep your fingers crossed': 'Keep your fingers crossed for my job interview!',
        'turn a blind eye': 'The teacher turned a blind eye to the cheating.',
        'put your foot in your mouth': 'I really put my foot in my mouth at the meeting.',
        'have a big mouth': 'Don\'t tell him anything - he has a big mouth.',
        'skin of your teeth': 'I passed the exam by the skin of my teeth.',
        'stick your neck out': 'I stuck my neck out to recommend you for the job.',
        'give someone the cold shoulder': 'She gave me the cold shoulder all day.',
        'have butterflies in your stomach': 'I always have butterflies before a presentation.',
        'keep your chin up': 'Keep your chin up - you\'ll find another job soon.',
        'all ears': 'Tell me what happened - I\'m all ears.',
        'pain in the neck': 'Filling out these forms is a real pain in the neck.',

        // Jedzenie
        'spill the beans': 'Come on, spill the beans about your new relationship!',
        'the apple of my eye': 'My youngest daughter is the apple of my eye.',
        'big cheese': 'He thinks he\'s the big cheese around here.',
        'bread and butter': 'Teaching is my bread and butter.',
        'cool as a cucumber': 'Even during the crisis, he remained as cool as a cucumber.',
        'cup of tea': 'Horror movies aren\'t really my cup of tea.',
        'egg on your face': 'He had egg on his face after his prediction was wrong.',
        'food for thought': 'Your presentation gave us plenty of food for thought.',
        'full of beans': 'The children are full of beans this morning.',
        'go bananas': 'The crowd went bananas when their team scored.',
        'hard nut to crack': 'This math problem is a hard nut to crack.',
        'hot potato': 'The new policy became a political hot potato.',
        'in a nutshell': 'In a nutshell, we need to increase our sales.',
        'like two peas in a pod': 'The twins are like two peas in a pod.',
        'salt of the earth': 'My grandparents were the salt of the earth.',
        'sell like hot cakes': 'The new smartphones are selling like hot cakes.',
        'take with a grain of salt': 'You should take his stories with a grain of salt.',
        'walking on eggshells': 'I feel like I\'m walking on eggshells around my new boss.',

        // Praca i biznes
        'think outside the box': 'We need to think outside the box to solve this problem.',
        'ballpark figure': 'Can you give me a ballpark figure for the project?',
        'get the ball rolling': 'Let\'s get the ball rolling with the first item on our agenda.',
        'back to the drawing board': 'The client rejected our proposal, so it\'s back to the drawing board.',
        'cutting corners': 'They were cutting corners on quality to meet deadlines.',
        'learn the ropes': 'It took me a month to learn the ropes at my new job.',
        'on the same page': 'Let\'s make sure we\'re all on the same page about this.',
        'raise the bar': 'The new manager really raised the bar for performance.',
        'touch base': 'We should touch base next week to discuss progress.',
        'win-win situation': 'The partnership created a win-win situation for both companies.',
        'blue-collar worker': 'Most blue-collar workers start early in the morning.',
        'white-collar worker': 'The office is full of white-collar workers.',
        'golden handshake': 'He received a golden handshake when he left the company.',
        'climb the corporate ladder': 'She\'s determined to climb the corporate ladder.',
        'glass ceiling': 'Many women face a glass ceiling in their careers.',
        'burn the midnight oil': 'We had to burn the midnight oil to finish the project.',
        'call it a day': 'It\'s getting late - let\'s call it a day.',
        'get down to business': 'Enough small talk - let\'s get down to business.',
        'in the pipeline': 'We have several new products in the pipeline.',
        'put all your eggs in one basket': 'Don\'t put all your eggs in one basket - diversify your investments.',
    }

    return (
        <div className="example-sentence">
            {examples[idiom] || `Example: "Let me think of a good example for '${idiom}'."`}
        </div>
    )
}

function TopicsGrid({ basePath, active }) {
    const topics = TOPICS[active] ?? []
    return (
        <div className="topic-grid" role="list">
            {topics.map(t => (
                <Link key={t.id} to={`${basePath}?topic=${t.id}`} className="topic-card" role="listitem">
                    <h4 className="topic-card__title">{t.title}</h4>
                    <p className="topic-card__excerpt">{t.excerpt}</p>
                    <span className="topic-card__cta">Zobacz idiomy →</span>
                </Link>
            ))}
        </div>
    )
}

function TopicDetail({ topic, onBack }) {
    return (
        <div className="topic-detail">
            <div className="topic-detail__back">
                <Link to={onBack} className="btn-link">← Wróć do listy idiomów</Link>
            </div>
            {topic.content()}
        </div>
    )
}

export default function Idioms() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const { lang } = useLanguage()
    const active = section ?? 'pieniądze'
    const topicId = searchParams.get('topic')
    const topics = TOPICS[active] ?? []
    const selected = topics.find(t => t.id === topicId)
    const basePath = `/slownictwo/idiomy/${active}`

    const getMetaTitle = () => {
        if (topicId) {
            return lang === 'pl'
                ? 'Popularne idiomy angielskie - szczegóły | AngloBoost'
                : 'Popular English Idioms - details | AngloBoost'
        }
        return lang === 'pl'
            ? 'Popularne idiomy angielskie | AngloBoost'
            : 'Popular English Idioms | AngloBoost'
    }

    const getMetaDescription = () => {
        if (topicId) {
            return lang === 'pl'
                ? 'Angielskie idiomy z tłumaczeniami i przykładami użycia'
                : 'English idioms with translations and usage examples'
        }
        return lang === 'pl'
            ? 'Ponad 100 najczęściej używanych idiomów angielskich z tłumaczeniami i przykładami'
            : 'Over 100 most used English idioms with translations and examples'
    }

    const getCanonicalUrl = () => {
        const base = lang === 'pl'
            ? `https://angloboost.pl/pl/slownictwo/idiomy/${active}`
            : `https://angloboost.pl/en/vocabulary/idioms/${active}`

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
                    <h2>Popularne idiomy angielskie</h2>
                    <p className="muted">Ponad 100 najczęściej używanych idiomów z tłumaczeniami i przykładami</p>
                </header>

                <nav className="subnav" aria-label="Podstrony: Idiomy">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/slownictwo/idiomy/${s.id}`}
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
                                <h3>Dlaczego warto uczyć się idiomów?</h3>
                                <p>Idiomy są nieodłączną częścią codziennego języka angielskiego. Znajomość popularnych wyrażeń idiomatycznych pomoże Ci:</p>
                                <ul>
                                    <li>Lepiej zrozumieć native speakerów</li>
                                    <li>Brzmieć bardziej naturalnie po angielsku</li>
                                    <li>Wzbogacić swoje słownictwo</li>
                                    <li>Zdać egzaminy językowe na wyższym poziomie</li>
                                </ul>
                            </div>
                            <p className="muted">Wybierz kategorię, aby zobaczyć zestaw idiomów z przykładami użycia.</p>
                            <TopicsGrid basePath={basePath} active={active} />
                        </>
                    )}
                </article>
            </div>
        </main>
    )
}