import React, { useMemo, useState, useEffect } from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import { useLanguage } from '../../../context/LanguageContext.jsx'
import useDocumentMeta from '../../../useDocumentMeta'
import '../../../styles/topic-cards.css'
import { useExerciseScores } from '../useExerciseScores'

const sections = [
    { id: 'podstawowe-slowa', label: 'Podstawowe słowa' },
    { id: 'skroty', label: 'Skróty internetowe' },
    { id: 'zwroty-i-wyrazenia', label: 'Zwroty i wyrażenia' },
    { id: 'mlodziezowy', label: 'Slang młodzieżowy' },
    { id: 'brytyjski', label: 'Slang brytyjski' },
    { id: 'amerykanski', label: 'Slang amerykański' },
]

const QUIZZES = {
    // Podstawowe słowa - Część 1
    'podstawowe-czesc-1': [
        { id: 'ps1', question: 'cool =', options: ['super/fajne', 'zimny', 'głupi'], correct: 0 },
        { id: 'ps2', question: 'dude =', options: ['dzieciak', 'gość/typ', 'kumpelka'], correct: 1 },
        { id: 'ps3', question: 'chill =', options: ['zimno', 'wypoczywać/spokojnie', 'nudny'], correct: 1 },
        { id: 'ps4', question: 'hang out =', options: ['wychodzić', 'spędzać czas', 'pracować'], correct: 1 },
        { id: 'ps5', question: 'awesome =', options: ['straszny', 'niesamowite', 'dziwny'], correct: 1 },
        { id: 'ps6', question: 'sick =', options: ['chory', 'super (pozytywne)', 'brzydki'], correct: 1 },
        { id: 'ps7', question: 'lit =', options: ['zapalony', 'super/ekscytujące', 'ciemny'], correct: 1 },
        { id: 'ps8', question: 'vibe =', options: ['wibracja', 'atmosfera/nastrój', 'dźwięk'], correct: 1 },
        { id: 'ps9', question: 'salty =', options: ['słony', 'wkurzony/poirytowany', 'szczęśliwy'], correct: 1 },
        { id: 'ps10', question: 'ghost =', options: ['duch', 'ignorować/zniknąć', 'straszyć'], correct: 1 },
        { id: 'ps11', question: 'flex =', options: ['zginać', 'pochwalić się', 'ćwiczyć'], correct: 1 },
        { id: 'ps12', question: 'basic =', options: ['podstawowy', 'zwyczajny/bez wyrazu', 'skomplikowany'], correct: 1 },
    ],

    // Podstawowe słowa - Część 2
    'podstawowe-czesc-2': [
        { id: 'ps13', question: 'savage =', options: ['dziki', 'bezlitosny/ostry', 'głośny'], correct: 1 },
        { id: 'ps14', question: 'thirsty =', options: ['spragniony', 'zdesperowany', 'głodny'], correct: 1 },
        { id: 'ps15', question: 'woke =', options: ['obudzony', 'świadomy społecznie', 'zmęczony'], correct: 1 },
        { id: 'ps16', question: 'ship =', options: ['statek', 'kibicować parze', 'wysyłać'], correct: 1 },
        { id: 'ps17', question: 'stan =', options: ['stan (USA)', 'być wielkim fanem', 'stać'], correct: 1 },
        { id: 'ps18', question: 'sus =', options: ['podejrzany', 'pewny', 'smutny'], correct: 0 },
        { id: 'ps19', question: 'bet =', options: ['zakład', 'jasne/pewnie', 'przegrać'], correct: 1 },
        { id: 'ps20', question: 'cap =', options: ['czapka', 'kłamstwo', 'limit'], correct: 1 },
        { id: 'ps21', question: 'no cap =', options: ['bez czapki', 'bez kitu/prawda', 'bez limitu'], correct: 1 },
        { id: 'ps22', question: 'drip =', options: ['kapać', 'styl/odpowiedni ubiór', 'woda'], correct: 1 },
        { id: 'ps23', question: 'GOAT =', options: ['koza', 'najlepszy wszech czasów', 'głupi'], correct: 1 },
        { id: 'ps24', question: 'slay =', options: ['zabić', 'zabić (pozytywne)', 'spać'], correct: 1 },
    ],

    // Skróty internetowe - Część 1
    'skroty-czesc-1': [
        { id: 'sk1', question: 'OMG =', options: ['Oh My God', 'Old Man Group', 'Official Music Guide'], correct: 0 },
        { id: 'sk2', question: 'BTW =', options: ['Better Than Yesterday', 'By The Way', 'Back To Work'], correct: 1 },
        { id: 'sk3', question: 'IDK =', options: ['I Don\'t Know', 'I Do Know', 'International Development Kit'], correct: 0 },
        { id: 'sk4', question: 'FYI =', options: ['For Your Information', 'Find Your Item', 'Free Youth Initiative'], correct: 0 },
        { id: 'sk5', question: 'LOL =', options: ['Lots Of Love', 'Laughing Out Loud', 'League Of Legends'], correct: 1 },
        { id: 'sk6', question: 'BRB =', options: ['Be Right Back', 'Big Red Button', 'Best Restaurant Business'], correct: 0 },
        { id: 'sk7', question: 'AFK =', options: ['Away From Keyboard', 'Always For Kids', 'American Football Kit'], correct: 0 },
        { id: 'sk8', question: 'IMO =', options: ['In My Opinion', 'International Music Office', 'I Must Order'], correct: 0 },
        { id: 'sk9', question: 'IMHO =', options: ['In My Humble Opinion', 'I Miss Home Office', 'International Music Hall'], correct: 0 },
        { id: 'sk10', question: 'TL;DR =', options: ['Too Long; Didn\'t Read', 'True Love; Dear Reader', 'Team Leader; Department Rules'], correct: 0 },
    ],

    // Skróty internetowe - Część 2
    'skroty-czesc-2': [
        { id: 'sk11', question: 'DM =', options: ['Direct Message', 'Daily Mail', 'Department Manager'], correct: 0 },
        { id: 'sk12', question: 'IRL =', options: ['In Real Life', 'International Radio League', 'I Really Like'], correct: 0 },
        { id: 'sk13', question: 'AMA =', options: ['Ask Me Anything', 'American Music Awards', 'Always Moving Ahead'], correct: 0 },
        { id: 'sk14', question: 'FOMO =', options: ['Fear Of Missing Out', 'Friends Of Modern Art', 'Free Online Music Office'], correct: 0 },
        { id: 'sk15', question: 'YOLO =', options: ['You Only Live Once', 'Young Online Organization', 'Your Own Life Option'], correct: 0 },
        { id: 'sk16', question: 'SMH =', options: ['Shaking My Head', 'Saturday Morning Hockey', 'Social Media Hub'], correct: 0 },
        { id: 'sk17', question: 'NGL =', options: ['Not Gonna Lie', 'New Game Level', 'National Gaming League'], correct: 0 },
        { id: 'sk18', question: 'FR =', options: ['For Real', 'Free Ride', 'Fast Response'], correct: 0 },
        { id: 'sk19', question: 'ISTG =', options: ['I Swear To God', 'International Sports Team Group', 'I Still Think Good'], correct: 0 },
        { id: 'sk20', question: 'TFW =', options: ['That Feeling When', 'Thanks For Waiting', 'True Friends Worldwide'], correct: 0 },
    ],

    // Zwroty i wyrażenia - Część 1
    'zwroty-czesc-1': [
        { id: 'zw1', question: 'no worries =', options: ['nie ma problemu', 'nie martw się', 'bez obaw'], correct: 0 },
        { id: 'zw2', question: 'my bad =', options: ['mój zły', 'moja wina', 'mój błąd'], correct: 1 },
        { id: 'zw3', question: 'on point =', options: ['na punkcie', 'idealny/w punkt', 'ostry'], correct: 1 },
        { id: 'zw4', question: 'hit me up =', options: ['uderz mnie', 'odezwij się', 'przyjdź do mnie'], correct: 1 },
        { id: 'zw5', question: 'lowkey =', options: ['niski klucz', 'nieoficjalnie/bez rozgłosu', 'cichy'], correct: 1 },
        { id: 'zw6', question: 'highkey =', options: ['wysoki klucz', 'bardzo/otwarcie', 'głośny'], correct: 1 },
        { id: 'zw7', question: 'throw shade =', options: ['rzucać cień', 'krytykować/obrażań', 'chronić'], correct: 1 },
        { id: 'zw8', question: 'spill the tea =', options: ['rozlać herbatę', 'opowiedzieć plotki', 'zepsuć zabawę'], correct: 1 },
        { id: 'zw9', question: 'gucci =', options: ['marka odzieżowa', 'w porządku/dobrze', 'drogi'], correct: 1 },
        { id: 'zw10', question: 'say less =', options: ['mów mniej', 'już rozumiem', 'cicho'], correct: 1 },
    ],

    // Zwroty i wyrażenia - Część 2
    'zwroty-czesc-2': [
        { id: 'zw11', question: 'periodt =', options: ['kropka (podkreślenie)', 'okres czasu', 'przecinek'], correct: 0 },
        { id: 'zw12', question: 'and I oop =', options: ['o kurczę (reakcja)', 'i ja też', 'i stop'], correct: 0 },
        { id: 'zw13', question: 'it\'s giving =', options: ['to daje (atmosferę)', 'to oddaje', 'to pokazuje'], correct: 0 },
        { id: 'zw14', question: 'let him cook =', options: ['daj mu gotować', 'daj mu działać', 'nie przeszkadzaj'], correct: 1 },
        { id: 'zw15', question: 'rizz =', options: ['ryż', 'umiejętność flirtowania', 'szybkość'], correct: 1 },
        { id: 'zw16', question: 'pick me =', options: ['wybierz mnie', 'osoba szukająca uwagi', 'pomóż mi'], correct: 1 },
        { id: 'zw17', question: 'touch grass =', options: ['dotknij trawy', 'wyjdź na zewnątrz', 'bądź realistą'], correct: 1 },
        { id: 'zw18', question: 'main character energy =', options: ['energia głównego bohatera', 'główna postać', 'siła charakteru'], correct: 0 },
        { id: 'zw19', question: 'gatekeep =', options: ['trzymać bramę', 'strzec dostępu', 'chronić'], correct: 1 },
        { id: 'zw20', question: 'gaslight =', options: ['gazowe światło', 'manipulować percepcją', 'oswietlać'], correct: 1 },
    ],

    // Slang młodzieżowy - Część 1
    'mlodziezowy-czesc-1': [
        { id: 'mz1', question: 'sheesh =', options: ['wow (zachwyt)', 'cisza', 'szybko'], correct: 0 },
        { id: 'mz2', question: 'bussin =', options: ['autobus', 'niesamowicie dobre', 'pracujący'], correct: 1 },
        { id: 'mz3', question: 'cheugy =', options: ['niemodny/staromodny', 'modny', 'dziwny'], correct: 0 },
        { id: 'mz4', question: 'based =', options: ['oparty na', 'autentyczny/mieć rację', 'podstawowy'], correct: 1 },
        { id: 'mz5', question: 'pog =', options: ['super (z gier)', 'program', 'pies'], correct: 0 },
        { id: 'mz6', question: 'poggers =', options: ['bardzo super', 'gracze', 'programiści'], correct: 0 },
        { id: 'mz7', question: 'yeet =', options: ['tak', 'rzucić z siłą', 'krzyczeć'], correct: 1 },
        { id: 'mz8', question: 'skrrt =', options: ['odjechać (dźwięk)', 'szybko', 'hamować'], correct: 0 },
        { id: 'mz9', question: 'finna =', options: ['fin (ryba)', 'zamierzać', 'kończyć'], correct: 1 },
        { id: 'mz10', question: 'bop =', options: ['uderzenie', 'dobra piosenka', 'taniec'], correct: 1 },
    ],

    // Slang młodzieżowy - Część 2
    'mlodziezowy-czesc-2': [
        { id: 'mz11', question: 'banger =', options: ['kiełbasa', 'hit/znakomita piosenka', 'głośny'], correct: 1 },
        { id: 'mz12', question: 'simp =', options: ['prosty', 'osoba zbyt oddana', 'głupi'], correct: 1 },
        { id: 'mz13', question: 'clout =', options: ['wpływ', 'sława/uwaga', 'chmura'], correct: 1 },
        { id: 'mz14', question: 'clout chaser =', options: ['gonienie chmur', 'osoba goniąca za sławą', 'łowca wpływów'], correct: 1 },
        { id: 'mz15', question: 'ratio =', options: ['proporcja', 'więcej komentarzy niż polubień', 'stosunek'], correct: 1 },
        { id: 'mz16', question: 'main character =', options: ['główny bohater', 'ważna osoba', 'centralna postać'], correct: 0 },
        { id: 'mz17', question: 'stan =', options: ['być fanem', 'stan (USA)', 'stać'], correct: 0 },
        { id: 'mz18', question: 'GOAT =', options: ['koza', 'najlepszy wszech czasów', 'wielki'], correct: 1 },
        { id: 'mz19', question: 'slay =', options: ['zabić (pozytywne)', 'zabić', 'pokonać'], correct: 0 },
        { id: 'mz20', question: 'drip =', options: ['kapać', 'styl/ubiór', 'woda'], correct: 1 },
    ],

    // Slang brytyjski - Część 1
    'brytyjski-czesc-1': [
        { id: 'br1', question: 'bloke =', options: ['blok', 'facet/gość', 'kumpel'], correct: 1 },
        { id: 'br2', question: 'mate =', options: ['partner', 'kumpel', 'znajomy'], correct: 1 },
        { id: 'br3', question: 'cheers =', options: ['oklaski', 'dzięki/na zdrowie', 'powitanie'], correct: 1 },
        { id: 'br4', question: 'bloody =', options: ['krwawy', 'cholerny (wzmacniacz)', 'straszny'], correct: 1 },
        { id: 'br5', question: 'chuffed =', options: ['zdmuchnięty', 'bardzo zadowolony', 'zmęczony'], correct: 1 },
        { id: 'br6', question: 'gutted =', options: ['wypatroszony', 'zrozpaczony', 'głodny'], correct: 1 },
        { id: 'br7', question: 'knackered =', options: ['zniszczony', 'zmęczony', 'stary'], correct: 1 },
        { id: 'br8', question: 'dodgy =', options: ['zwinny', 'podejrzany', 'niebezpieczny'], correct: 1 },
        { id: 'br9', question: 'skint =', options: ['skóra', 'bez pieniędzy', 'chudy'], correct: 1 },
        { id: 'br10', question: 'fancy =', options: ['fantazyjny', 'mieć ochotę', 'modny'], correct: 1 },
    ],

    // Slang brytyjski - Część 2
    'brytyjski-czesc-2': [
        { id: 'br11', question: 'brilliant =', options: ['błyszczący', 'wspaniały', 'mądry'], correct: 1 },
        { id: 'br12', question: 'proper =', options: ['właściwy', 'prawdziwy/odpowiedni', 'dokładny'], correct: 1 },
        { id: 'br13', question: 'loo =', options: ['pętla', 'toaleta', 'pokój'], correct: 1 },
        { id: 'br14', question: 'quid =', options: ['coś', 'funt (pieniądz)', 'pieniądze'], correct: 1 },
        { id: 'br15', question: 'bollocks =', options: ['jądra', 'bzdury', 'głupoty'], correct: 1 },
        { id: 'br16', question: 'cuppa =', options: ['kubek', 'filiżanka herbaty', 'napój'], correct: 1 },
        { id: 'br17', question: 'bants =', options: ['żarty', 'zabawa', 'rozmowa'], correct: 0 },
        { id: 'br18', question: 'minging =', options: ['śpiewający', 'obrzydliwy', 'brzydki'], correct: 1 },
        { id: 'br19', question: 'gobsmacked =', options: ['zdumiony', 'uderzony', 'zaskoczony'], correct: 0 },
        { id: 'br20', question: 'chav =', options: ['chłopak', 'osoba z niższej klasy', 'ulicznik'], correct: 1 },
    ],

    // Slang amerykański - Część 1
    'amerykanski-czesc-1': [
        { id: 'am1', question: 'buck =', options: ['jeleń', 'dolar', 'mocny'], correct: 1 },
        { id: 'am2', question: 'dope =', options: ['narkotyk', 'super', 'głupi'], correct: 1 },
        { id: 'am3', question: 'hella =', options: ['piekło', 'bardzo (Kalifornia)', 'strasznie'], correct: 1 },
        { id: 'am4', question: 'jawn =', options: ['rzecz/coś (Filadelfia)', 'wiadomo', 'otwarty'], correct: 0 },
        { id: 'am5', question: 'wicked =', options: ['zły', 'super (Boston)', 'niebezpieczny'], correct: 1 },
        { id: 'am6', question: 'bodega =', options: ['sklep spożywczy', 'kawiarnia', 'bar'], correct: 0 },
        { id: 'am7', question: 'bougie =', options: ['świeca', 'burżuazyjny/ekskluzywny', 'piękny'], correct: 1 },
        { id: 'am8', question: 'deadass =', options: ['martwy osioł', 'na serio', 'poważny'], correct: 1 },
        { id: 'am9', question: 'extra =', options: ['dodatkowy', 'przesadny', 'więcej'], correct: 1 },
        { id: 'am10', question: 'fire =', options: ['ogień', 'niesamowity', 'gorący'], correct: 1 },
    ],

    // Slang amerykański - Część 2
    'amerykanski-czesc-2': [
        { id: 'am11', question: 'grip =', options: ['uchwyt', 'dużo czegoś', 'trzymać'], correct: 1 },
        { id: 'am12', question: 'janky =', options: ['kiepskiej jakości', 'dziwaczny', 'stary'], correct: 0 },
        { id: 'am13', question: 'kick it =', options: ['kopnąć to', 'spędzać czas', 'odpoczywać'], correct: 1 },
        { id: 'am14', question: 'legit =', options: ['legalny', 'prawdziwy', 'uczciwy'], correct: 1 },
        { id: 'am15', question: 'mad =', options: ['szalony', 'bardzo', 'zły'], correct: 1 },
        { id: 'am16', question: 'plug =', options: ['wtyczka', 'źródło (towaru)', 'połączenie'], correct: 1 },
        { id: 'am17', question: 'shook =', options: ['wstrząśnięty', 'zszokowany', 'przestraszony'], correct: 1 },
        { id: 'am18', question: 'tight =', options: ['ciasny', 'super/bliski', 'mocny'], correct: 1 },
        { id: 'am19', question: 'main character =', options: ['główny bohater', 'ważna osoba', 'centralna postać'], correct: 0 },
        { id: 'am20', question: 'GOAT =', options: ['koza', 'najlepszy wszech czasów', 'wielki'], correct: 1 },
    ],
}

const TOPICS = {
    'podstawowe-slowa': [
        { id: 'podstawowe-czesc-1', title: 'Podstawowe słowa - Część 1 📚', excerpt: '12 podstawowych słów slangowych z codziennego użycia' },
        { id: 'podstawowe-czesc-2', title: 'Podstawowe słowa - Część 2 🔥', excerpt: '12 kolejnych popularnych słów slangowych' },
    ],
    'skroty': [
        { id: 'skroty-czesc-1', title: 'Skróty internetowe - Część 1 📱', excerpt: '10 najpopularniejszych skrótów używanych online' },
        { id: 'skroty-czesc-2', title: 'Skróty internetowe - Część 2 💬', excerpt: '10 kolejnych przydatnych skrótów internetowych' },
    ],
    'zwroty-i-wyrazenia': [
        { id: 'zwroty-czesc-1', title: 'Zwroty i wyrażenia - Część 1 🗣️', excerpt: '10 popularnych zwrotów slangowych' },
        { id: 'zwroty-czesc-2', title: 'Zwroty i wyrażenia - Część 2 💫', excerpt: '10 kolejnych wyrażeń używanych w mowie potocznej' },
    ],
    'mlodziezowy': [
        { id: 'mlodziezowy-czesc-1', title: 'Slang młodzieżowy - Część 1 👦', excerpt: '10 popularnych słów wśród młodzieży' },
        { id: 'mlodziezowy-czesc-2', title: 'Slang młodzieżowy - Część 2 🎮', excerpt: '10 kolejnych młodzieżowych wyrażeń' },
    ],
    'brytyjski': [
        { id: 'brytyjski-czesc-1', title: 'Slang brytyjski - Część 1 🇬🇧', excerpt: '10 typowo brytyjskich wyrażeń slangowych' },
        { id: 'brytyjski-czesc-2', title: 'Slang brytyjski - Część 2 ☕', excerpt: '10 kolejnych brytyjskich słów potocznych' },
    ],
    'amerykanski': [
        { id: 'amerykanski-czesc-1', title: 'Slang amerykański - Część 1 🇺🇸', excerpt: '10 amerykańskich wyrażeń slangowych' },
        { id: 'amerykanski-czesc-2', title: 'Slang amerykański - Część 2 🏙️', excerpt: '10 kolejnych słów z amerykańskiego slangu' },
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
                    TOPICS['podstawowe-slowa']?.find(t => t.id === topicId)?.title ||
                    TOPICS['skroty']?.find(t => t.id === topicId)?.title ||
                    TOPICS['zwroty-i-wyrazenia']?.find(t => t.id === topicId)?.title ||
                    TOPICS['mlodziezowy']?.find(t => t.id === topicId)?.title ||
                    TOPICS['brytyjski']?.find(t => t.id === topicId)?.title ||
                    TOPICS['amerykanski']?.find(t => t.id === topicId)?.title
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

export default function SlangExercises() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const { lang } = useLanguage()
    const active = section ?? 'podstawowe-slowa'
    const topicId = searchParams.get('topic')
    const basePath = `/cwiczenia/slownictwo/slang-(mowa-potoczna)/${active}`

    useDocumentMeta({
        title: getMetaTitle(lang, active, topicId),
        description: getMetaDescription(lang, active, topicId),
        canonical: getCanonicalUrl(lang, active, topicId),
        og: {
            title: getMetaTitle(lang, active, topicId),
            description: getMetaDescription(lang, active, topicId),
            image: 'https://angloboost.pl/UK-social.png',
            url: window.location.href
        }
    })

    return (
        <main className="topic-layout">
            <div className="container">
                <header className="topic-header">
                    <h2>Ćwiczenia: Slang angielski</h2>
                    <p className="muted">Popularne słowa, skróty i wyrażenia slangowe - ćwicz według kategorii</p>
                </header>

                <nav className="subnav" aria-label="Podstrony ćwiczeń: Slang">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/cwiczenia/slownictwo/slang-(mowa-potoczna)/${s.id}`}
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
                                <h3>Ćwicz slang angielski! 🎯</h3>
                                <p>Wybierz kategorię i część ćwiczeń, aby sprawdzić znajomość popularnych słów i wyrażeń slangowych.</p>
                                <div className="tips-grid">
                                    <div className="tip">
                                        <h5>Podstawowe słowa</h5>
                                        <p>Najczęściej używane słowa slangowe w codziennej komunikacji</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Skróty internetowe</h5>
                                        <p>Skróty używane w mediach społecznościowych i czatach</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Zwroty i wyrażenia</h5>
                                        <p>Popularne powiedzenia i wyrażenia slangowe</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Slang młodzieżowy</h5>
                                        <p>Nowoczesne wyrażenia używane przez młodych ludzi</p>
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
                                        TOPICS['podstawowe-slowa']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['skroty']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['zwroty-i-wyrazenia']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['mlodziezowy']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['brytyjski']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['amerykanski']?.find(t => t.id === topicId)?.title
                                    }</h3>
                                    <p className="muted">{
                                        TOPICS['podstawowe-slowa']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['skroty']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['zwroty-i-wyrazenia']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['mlodziezowy']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['brytyjski']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['amerykanski']?.find(t => t.id === topicId)?.excerpt
                                    }</p>
                                </div>
                            </div>

                            <Quiz topicId={topicId} />

                            <div className="exercise-tips">
                                <h4>💡 Wskazówki do nauki slangu</h4>
                                <div className="tips-grid">
                                    <div className="tip">
                                        <h5>Oglądaj seriale i filmy</h5>
                                        <p>Współczesne produkcje to najlepsze źródło aktualnego slangu</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Słuchaj muzyki</h5>
                                        <p>Współczesna muzyka popularna pełna jest slangowych wyrażeń</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Obserwuj media społecznościowe</h5>
                                        <p>TikTok, Instagram i Twitter to kopalnia nowego slangu</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Używaj w kontekście</h5>
                                        <p>Staraj się używać nowych słów w odpowiednich sytuacjach</p>
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

function getMetaTitle(lang, section, topicId) {
    const baseTitle = lang === 'pl'
        ? 'Ćwiczenia: Slang angielski - popularne słowa i wyrażenia potoczne'
        : 'Exercises: English Slang - popular colloquial words and expressions'

    // Jeśli mamy wybrany konkretny temat
    if (topicId) {
        const topic = Object.values(TOPICS).flat().find(t => t.id === topicId)
        const topicTitle = lang === 'pl' ? topic?.title : getEnglishTopicTitle(topicId)
        return `${topicTitle} — Ćwiczenia — AngloBoost`
    }

    // Jeśli mamy wybraną sekcję
    if (section) {
        const sectionData = sections.find(s => s.id === section)
        const sectionTitle = lang === 'pl' ? sectionData?.label : getEnglishSectionTitle(section)
        return `${sectionTitle} — Slang — Ćwiczenia — AngloBoost`
    }

    // Domyślne (strona główna slangu)
    return lang === 'pl'
        ? `${baseTitle} — AngloBoost`
        : `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang, section, topicId) {
    const baseDescription = {
        pl: 'Interaktywne ćwiczenia z angielskiego slangu. Testy i quizy z popularnymi słowami potocznymi, skrótami internetowymi i wyrażeniami slangowymi pogrupowanymi tematycznie.',
        en: 'Interactive English slang exercises. Tests and quizzes with popular colloquial words, internet abbreviations and slang expressions grouped by topics.'
    }

    // Jeśli mamy wybrany konkretny temat
    if (topicId) {
        const topic = Object.values(TOPICS).flat().find(t => t.id === topicId)
        const topicExcerpt = lang === 'pl' ? topic?.excerpt : getEnglishTopicExcerpt(topicId)
        return lang === 'pl'
            ? `${topicExcerpt} Interaktywne ćwiczenia i testy online z natychmiastową weryfikacją odpowiedzi.`
            : `${topicExcerpt} Interactive exercises and online tests with instant answer verification.`
    }

    // Jeśli mamy wybraną sekcję
    if (section) {
        const sectionData = sections.find(s => s.id === section)
        const sectionTitle = lang === 'pl' ? sectionData?.label : getEnglishSectionTitle(section)
        return lang === 'pl'
            ? `Ćwiczenia z angielskiego slangu: ${sectionTitle}. Interaktywne quizy i testy z popularnymi słowami potocznymi i wyrażeniami slangowymi.`
            : `English slang exercises: ${sectionTitle}. Interactive quizzes and tests with popular colloquial words and slang expressions.`
    }

    // Domyślne (strona główna slangu)
    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang, section = null, topicId = null) {
    const baseUrl = lang === 'pl'
        ? 'https://angloboost.pl/pl/cwiczenia/slownictwo/slang-(mowa-potoczna)'
        : 'https://angloboost.pl/en/exercises/vocabulary/slang'

    if (topicId) {
        return `${baseUrl}/${section}?topic=${topicId}`
    }

    if (section) {
        return `${baseUrl}/${section}`
    }

    return baseUrl
}

// Funkcje pomocnicze dla tłumaczeń
function getEnglishSectionTitle(sectionId) {
    const englishTitles = {
        'podstawowe-slowa': 'Basic Slang Words',
        'skroty': 'Internet Abbreviations',
        'zwroty-i-wyrazenia': 'Phrases and Expressions',
        'mlodziezowy': 'Youth Slang',
        'brytyjski': 'British Slang',
        'amerykanski': 'American Slang'
    }
    return englishTitles[sectionId] || 'English Slang'
}

function getEnglishTopicTitle(topicId) {
    const englishTitles = {
        'podstawowe-czesc-1': 'Basic Slang Words - Part 1 📚',
        'podstawowe-czesc-2': 'Basic Slang Words - Part 2 🔥',
        'skroty-czesc-1': 'Internet Abbreviations - Part 1 📱',
        'skroty-czesc-2': 'Internet Abbreviations - Part 2 💬',
        'zwroty-czesc-1': 'Phrases and Expressions - Part 1 🗣️',
        'zwroty-czesc-2': 'Phrases and Expressions - Part 2 💫',
        'mlodziezowy-czesc-1': 'Youth Slang - Part 1 👦',
        'mlodziezowy-czesc-2': 'Youth Slang - Part 2 🎮',
        'brytyjski-czesc-1': 'British Slang - Part 1 🇬🇧',
        'brytyjski-czesc-2': 'British Slang - Part 2 ☕',
        'amerykanski-czesc-1': 'American Slang - Part 1 🇺🇸',
        'amerykanski-czesc-2': 'American Slang - Part 2 🏙️'
    }
    return englishTitles[topicId] || 'English Slang Exercises'
}

function getEnglishTopicExcerpt(topicId) {
    const englishExcerpts = {
        'podstawowe-czesc-1': '12 basic slang words for everyday use',
        'podstawowe-czesc-2': '12 more popular slang words',
        'skroty-czesc-1': '10 most popular abbreviations used online',
        'skroty-czesc-2': '10 more useful internet abbreviations',
        'zwroty-czesc-1': '10 popular slang phrases',
        'zwroty-czesc-2': '10 more colloquial expressions',
        'mlodziezowy-czesc-1': '10 popular words among youth',
        'mlodziezowy-czesc-2': '10 more youth expressions',
        'brytyjski-czesc-1': '10 typically British slang expressions',
        'brytyjski-czesc-2': '10 more British colloquial words',
        'amerykanski-czesc-1': '10 American slang expressions',
        'amerykanski-czesc-2': '10 more words from American slang'
    }
    return englishExcerpts[topicId] || 'English slang exercises with examples.'
}