import React from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import '../../styles/topic-cards.css'
import '../../styles/vocabulary.css'

const sections = [
    { id: 'podstawowe-slowa', label: 'Podstawowe słowa' },
    { id: 'skroty', label: 'Skróty internetowe' },
    { id: 'zwroty-i-wyrazenia', label: 'Zwroty i wyrażenia' },
    { id: 'młodzieżowy', label: 'Slang młodzieżowy' },
    { id: 'brytyjski', label: 'Slang brytyjski' },
    { id: 'amerykanski', label: 'Slang amerykański' },
]

const SLANG = {
    'podstawowe-slowa': [
        ['cool', 'fajne/super'],
        ['dude', 'gość/typ'],
        ['chill', 'wypoczywać/spokojnie'],
        ['hang out', 'spędzać czas'],
        ['awesome', 'niesamowite'],
        ['sick', 'super/chory (w pozytywnym znaczeniu)'],
        ['lit', 'super/ekscytujące'],
        ['vibe', 'atmosfera/nastrój'],
        ['salty', 'wkurzony/poirytowany'],
        ['ghost', 'ignorować kogoś/zniknąć bez słowa'],
        ['flex', 'pochwalić się/pokazać'],
        ['basic', 'zwyczajny/bez wyrazu'],
        ['savage', 'bezlitosny/ostry'],
        ['thirsty', 'zdesperowany'],
        ['woke', 'świadomy społecznie'],
        ['ship', 'kibicować parze (z relationship)'],
        ['stan', 'być wielkim fanem'],
        ['sus', 'podejrzany'],
        ['bet', 'jasne/pewnie'],
        ['cap', 'kłamstwo'],
        ['no cap', 'bez kitu/prawda'],
        ['drip', 'styl/odpowiedni ubiór'],
        ['GOAT', 'najlepszy wszech czasów'],
        ['slay', 'zabić (w pozytywnym znaczeniu)'],
        ['main character', 'główny bohater'],
    ],
    'skroty': [
        ['OMG', 'Oh My God - o mój Boże'],
        ['BTW', 'By The Way - tak przy okazji'],
        ['IDK', 'I Don\'t Know - nie wiem'],
        ['FYI', 'For Your Information - dla twojej wiadomości'],
        ['LOL', 'Laughing Out Loud - śmieję się głośno'],
        ['BRB', 'Be Right Back - zaraz wracam'],
        ['AFK', 'Away From Keyboard - z dala od klawiatury'],
        ['IMO', 'In My Opinion - moim zdaniem'],
        ['IMHO', 'In My Humble Opinion - moim skromnym zdaniem'],
        ['TL;DR', 'Too Long; Didn\'t Read - za długie; nie czytałem'],
        ['DM', 'Direct Message - wiadomość prywatna'],
        ['IRL', 'In Real Life - w prawdziwym życiu'],
        ['AMA', 'Ask Me Anything - zapytaj mnie o cokolwiek'],
        ['TBA', 'To Be Announced - będzie ogłoszone'],
        ['TBD', 'To Be Determined - do ustalenia'],
        ['ETA', 'Estimated Time of Arrival - przewidywany czas przybycia'],
        ['FOMO', 'Fear Of Missing Out - lęk przed tym, że coś nas omija'],
        ['YOLO', 'You Only Live Once - żyje się tylko raz'],
        ['FWIW', 'For What It\'s Worth - jeśli to coś znaczy'],
        ['IIRC', 'If I Recall Correctly - jeśli dobrze pamiętam'],
        ['SMH', 'Shaking My Head - kręcę głową (ze zdziwienia)'],
        ['TFW', 'That Feeling When - to uczucie kiedy'],
        ['NGL', 'Not Gonna Lie - nie będę kłamać'],
        ['FR', 'For Real - na serio'],
        ['ISTG', 'I Swear To God - przysięgam na Boga'],
    ],
    'zwroty-i-wyrazenia': [
        ['no worries', 'nie ma problemu'],
        ['my bad', 'moja wina'],
        ['on point', 'idealny/w punkt'],
        ['hit me up', 'odezwij się'],
        ['lowkey', 'nieoficjalnie/bez rozgłosu'],
        ['highkey', 'bardzo/otwarcie'],
        ['throw shade', 'rzucać cienie/krytykować'],
        ['spill the tea', 'opowiedzieć plotki'],
        ['gucci', 'w porządku/dobrze'],
        ['say less', 'mów mniej (już rozumiem)'],
        ['periodt', 'kropka (dla podkreślenia)'],
        ['and I oop', 'o kurczę (reakcja na gafę)'],
        ['it\'s giving', 'to daje (atmosferę czegoś)'],
        ['let him cook', 'daj mu działać'],
        ['rizz', 'umiejętność flirtowania/charyzma'],
        ['pick me', 'osoba desperacko szukająca uwagi'],
        ['touch grass', 'wyjdź na zewnątrz (oderwij się od internetu)'],
        ['main character energy', 'energia głównego bohatera'],
        ['gatekeep', 'strzec dostępu (do czegoś)'],
        ['gaslight', 'manipulować czyjąś percepcją'],
    ],
    'młodzieżowy': [
        ['slay', 'zabić (w pozytywnym znaczeniu)'],
        ['periodt', 'kropka (dla podkreślenia)'],
        ['sheesh', 'wow (wyrażenie zachwytu lub zdziwienia)'],
        ['bussin', 'niesamowicie dobre'],
        ['main character', 'główny bohater'],
        ['cheugy', 'niemodny/staromodny'],
        ['based', 'autentyczny/miać rację'],
        ['pog', 'super (z gamingowej kultury)'],
        ['poggers', 'bardzo super'],
        ['yeet', 'rzucić z siłą'],
        ['skrrt', 'odjechać (dźwięk opon)'],
        ['finna', 'zamierzać (going to)'],
        ['bop', 'dobra piosenka'],
        ['banger', 'hit/znakomita piosenka'],
        ['GOAT', 'Greatest Of All Time - najlepszy wszech czasów'],
        ['stan', 'być wielkim fanem'],
        ['simp', 'osoba zbyt oddana komuś'],
        ['clout', 'sława/uwaga w mediach'],
        ['clout chaser', 'osoba goniąca za sławą'],
        ['ratio', 'więcej komentarzy niż polubień (porażka w mediach)'],
    ],
    'brytyjski': [
        ['bloke', 'facet/gość'],
        ['mate', 'kumpel'],
        ['cheers', 'dzięki/na zdrowie'],
        ['bloody', 'cholerny (wzmacniacz)'],
        ['chuffed', 'bardzo zadowolony'],
        ['gutted', 'zrozpaczony'],
        ['knackered', 'zmęczony'],
        ['dodgy', 'podejrzany'],
        ['skint', 'bez pieniędzy'],
        ['fancy', 'mieć ochotę/podobać się'],
        ['brilliant', 'wspaniały'],
        ['proper', 'prawdziwy/odpowiedni'],
        ['loo', 'toaleta'],
        ['quid', 'funt (pieniądz)'],
        ['bollocks', 'bzdury'],
        ['cuppa', 'filiżanka herbaty'],
        ['bants', 'żarty (banter)'],
        ['minging', 'obrzydliwy'],
        ['gobsmacked', 'zdumiony'],
        ['chav', 'osoba z niższej klasy społecznej'],
    ],
    'amerykanski': [
        ['buck', 'dolar'],
        ['dope', 'super'],
        ['hella', 'bardzo (w Kalifornii)'],
        ['jawn', 'rzecz/coś (w Filadelfii)'],
        ['hella', 'bardzo (w Kalifornii)'],
        ['wicked', 'super (w Bostonie)'],
        ['hella', 'bardzo (w Kalifornii)'],
        ['bodega', 'mały sklep spożywczy'],
        ['bougie', 'burżuazyjny/ekskluzywny'],
        ['deadass', 'na serio'],
        ['extra', 'przesadny'],
        ['fire', 'niesamowity'],
        ['grip', 'dużo czegoś'],
        ['janky', 'kiepskiej jakości'],
        ['kick it', 'spędzać czas'],
        ['legit', 'prawdziwy'],
        ['mad', 'bardzo'],
        ['plug', 'źródło (zwłaszcza towaru)'],
        ['shook', 'zszokowany'],
        ['tight', 'super/bliski'],
    ],
}

// Komponent do wyświetlania przykładowych zdań
function ExampleSentence({ word }) {
    const examples = {
        // Podstawowe słowa
        'cool': 'That new movie is really cool!',
        'dude': 'Hey dude, what\'s up?',
        'chill': 'Let\'s just chill at home tonight.',
        'hang out': 'Do you want to hang out this weekend?',
        'awesome': 'Your presentation was awesome!',
        'sick': 'That trick was sick!',
        'lit': 'The party last night was lit!',
        'vibe': 'I love the vibe in this café.',
        'salty': 'He got salty when I beat him at the game.',
        'ghost': 'She ghosted me after our first date.',
        'flex': 'He always flexes his new car on Instagram.',
        'basic': 'Her taste in music is so basic.',
        'savage': 'That comeback was savage!',
        'thirsty': 'He\'s so thirsty for attention.',
        'woke': 'She\'s really woke about social issues.',
        'ship': 'I totally ship those two characters.',
        'stan': 'I stan Beyoncé, she\'s the queen!',
        'sus': 'His story sounds sus to me.',
        'bet': 'You\'re coming? Bet!',
        'cap': 'That\'s cap, he never said that.',
        'no cap': 'I\'m telling the truth, no cap.',
        'drip': 'Check out his drip - those shoes are fire!',
        'GOAT': 'Michael Jordan is the GOAT of basketball.',
        'slay': 'You slayed that presentation!',
        'main character': 'She has such main character energy.',

        // Skróty
        'OMG': 'OMG, I can\'t believe you\'re here!',
        'BTW': 'BTW, did you finish that report?',
        'IDK': 'IDK what to wear to the party.',
        'FYI': 'FYI, the meeting is at 3 PM.',
        'LOL': 'LOL, that meme is hilarious!',
        'BRB': 'BRB, need to grab some water.',
        'AFK': 'I\'ll be AFK for about 30 minutes.',
        'IMO': 'IMO, the first movie was better.',
        'IMHO': 'IMHO, you should take the job.',
        'TL;DR': 'TL;DR: The project was successful.',
        'DM': 'Send me a DM with the details.',
        'IRL': 'He\'s much funnier IRL.',
        'AMA': 'I\'m doing an AMA on Reddit tomorrow.',
        'TBA': 'The venue is still TBA.',
        'TBD': 'The exact time is TBD.',
        'ETA': 'What\'s your ETA?',
        'FOMO': 'I have serious FOMO about missing the concert.',
        'YOLO': 'I\'m buying the tickets - YOLO!',
        'FWIW': 'FWIW, I think you made the right choice.',
        'IIRC': 'IIRC, the store closes at 9 PM.',
        'SMH': 'SMH, I can\'t believe he did that.',
        'TFW': 'TFW you finally finish a big project.',
        'NGL': 'NGL, that was pretty impressive.',
        'FR': 'FR, I thought you were joking.',
        'ISTG': 'ISTG, if you\'re late one more time...',

        // Zwroty i wyrażenia
        'no worries': 'No worries, I can help you with that.',
        'my bad': 'My bad, I forgot to send the email.',
        'on point': 'Your outfit is on point today!',
        'hit me up': 'Hit me up when you\'re free.',
        'lowkey': 'I\'m lowkey excited about the trip.',
        'highkey': 'I highkey love this song.',
        'throw shade': 'Did you see her throw shade at him?',
        'spill the tea': 'Come on, spill the tea about what happened!',
        'gucci': 'Everything is gucci, don\'t worry.',
        'say less': 'You need help? Say less, I\'m there.',
        'periodt': 'She\'s the best singer, periodt!',
        'and I oop': 'And I oop - almost said the wrong name!',
        'it\'s giving': 'This outfit is giving vintage vibes.',
        'let him cook': 'He has a great idea - let him cook!',
        'rizz': 'He has so much rizz with everyone.',
        'pick me': 'She\'s such a pick me, always seeking validation.',
        'touch grass': 'You\'ve been online all day - go touch grass.',
        'main character energy': 'She walked in with main character energy.',
        'gatekeep': 'Don\'t gatekeep that amazing restaurant!',
        'gaslight': 'He tried to gaslight me into thinking I was wrong.',

        // Młodzieżowy
        'sheesh': 'Sheesh, that car is expensive!',
        'bussin': 'This pizza is bussin!',
        'cheugy': 'Those jeans are so cheugy.',
        'based': 'That\'s a based opinion.',
        'pog': 'That goal was pog!',
        'poggers': 'Poggers! We won the game!',
        'yeet': 'He yeeted the ball across the field.',
        'skrrt': 'I have to go - skrrt!',
        'finna': 'I\'m finna go to the store.',
        'bop': 'This new song is such a bop!',
        'banger': 'Every track on that album is a banger.',
        'simp': 'Stop being a simp for her.',
        'clout': 'He\'s only doing it for clout.',
        'clout chaser': 'She\'s such a clout chaser.',
        'ratio': 'His tweet got ratioed immediately.',

        // Brytyjski
        'bloke': 'He\'s a nice bloke.',
        'mate': 'Alright mate, how are you?',
        'cheers': 'Cheers for helping me out!',
        'bloody': 'That\'s bloody brilliant!',
        'chuffed': 'I\'m chuffed with my exam results.',
        'gutted': 'I\'m gutted that we lost.',
        'knackered': 'I\'m absolutely knackered after work.',
        'dodgy': 'That looks a bit dodgy to me.',
        'skint': 'I can\'t go out, I\'m skint.',
        'fancy': 'Do you fancy going to the cinema?',
        'brilliant': 'That\'s a brilliant idea!',
        'proper': 'That was a proper good meal.',
        'loo': 'Where\'s the loo?',
        'quid': 'It cost me twenty quid.',
        'bollocks': 'That\'s complete bollocks!',
        'cuppa': 'Would you like a cuppa?',
        'bants': 'We were just having some bants.',
        'minging': 'This weather is minging.',
        'gobsmacked': 'I was gobsmacked when I heard the news.',
        'chav': 'He dresses like a proper chav.',

        // Amerykański
        'buck': 'It costs five bucks.',
        'dope': 'That artwork is dope!',
        'hella': 'This line is hella long.',
        'jawn': 'Pass me that jawn over there.',
        'wicked': 'That trick was wicked cool!',
        'bodega': 'I\'m going to the bodega for snacks.',
        'bougie': 'That restaurant is too bougie for me.',
        'deadass': 'I deadass thought you were joking.',
        'extra': 'She\'s being extra about the decorations.',
        'fire': 'Your new shoes are fire!',
        'grip': 'I have a grip of homework to do.',
        'janky': 'This computer is so janky.',
        'kick it': 'Let\'s kick it at my place.',
        'legit': 'Is this website legit?',
        'mad': 'There were mad people at the concert.',
        'plug': 'I got a plug for concert tickets.',
        'shook': 'I was shook when I saw the results.',
        'tight': 'We\'ve been tight since high school.',
    }

    return (
        <div className="example-sentence">
            {examples[word] || `Example: "Let me use '${word}' in a sentence."`}
        </div>
    )
}

const TOPICS = Object.fromEntries(
    sections.map(s => ([
        s.id,
        [
            {
                id: `${s.id}-list`,
                title: `Slang: ${s.label}`,
                excerpt: `Zestaw ${SLANG[s.id].length} popularnych słów i wyrażeń slangowych`,
                content: () => (
                    <section className="card">
                        <h3>{`Slang — ${s.label}`}</h3>
                        <p className="muted">Każde wyrażenie zawiera przykład użycia w zdaniu</p>
                        <table className="vocab-table">
                            <thead>
                            <tr>
                                <th>Wyrażenie</th>
                                <th>Znaczenie</th>
                                <th>Przykład użycia</th>
                            </tr>
                            </thead>
                            <tbody>
                            {(SLANG[s.id] ?? []).map(([word, meaning]) => (
                                <tr key={word} className="slang-row">
                                    <td className="slang-word"><strong>{word}</strong></td>
                                    <td className="slang-meaning">{meaning}</td>
                                    <td className="slang-example">
                                        <ExampleSentence word={word} />
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
                    <span className="topic-card__cta">Zobacz slang →</span>
                </Link>
            ))}
        </div>
    )
}

function TopicDetail({ topic, onBack }) {
    return (
        <div className="topic-detail">
            <div className="topic-detail__back">
                <Link to={onBack} className="btn-link">← Wróć do listy slangu</Link>
            </div>
            {topic.content()}
        </div>
    )
}

export default function Slang() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const active = section ?? 'podstawowe-slowa'
    const topicId = searchParams.get('topic')
    const topics = TOPICS[active] ?? []
    const selected = topics.find(t => t.id === topicId)
    const basePath = `/slownictwo/slang/${active}`

    return (
        <main className="topic-layout">
            <div className="container">
                <header className="topic-header">
                    <h2>Slang angielski - kompletny przewodnik</h2>
                    <p className="muted">Ponad 150 popularnych słów, skrótów i wyrażeń slangowych z przykładami</p>
                </header>

                <nav className="subnav" aria-label="Podstrony: Slang">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/slownictwo/slang/${s.id}`}
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
                                <h3>Dlaczego warto znać slang angielski?</h3>
                                <p>Slang to nieodłączna część codziennej komunikacji. Znajomość popularnych wyrażeń slangowych pomoże Ci:</p>
                                <ul>
                                    <li>Zrozumieć filmy, seriale i muzykę po angielsku</li>
                                    <li>Czuć się swobodniej w rozmowach z native speakerami</li>
                                    <li>Brzmieć bardziej naturalnie po angielsku</li>
                                    <li>Zrozumieć memy i treści w mediach społecznościowych</li>
                                </ul>
                                <p><strong>Każde wyrażenie zawiera teraz przykładowe zdanie pokazujące jego praktyczne użycie!</strong></p>
                            </div>
                            <p className="muted">Wybierz kategorię, aby zobaczyć zestaw wyrażeń slangowych z przykładami użycia.</p>
                            <TopicsGrid basePath={basePath} active={active} />
                        </>
                    )}
                </article>
            </div>
        </main>
    )
}