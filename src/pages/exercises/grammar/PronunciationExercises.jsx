import React, { useMemo, useState, useEffect } from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import '../../../styles/topic-cards.css'
import { useExerciseScores } from '../useExerciseScores'

const sections = [
    { id: 'alfabet', label: 'Alfabet' },
    { id: 'gloski-nieme', label: 'Głoski nieme' },
    { id: 'koncowki-wyrazow', label: 'Końcówki wyrazów' },
]

// Te same boksy co w gramatyce
const TOPICS = {
    alfabet: [
        { id: 'alfabet-nazwy-liter', title: 'Nazwy liter A–Z', excerpt: 'Nazwy i wymowa liter w BrE/AmE.' },
        { id: 'problematic-vowels', title: 'Problematyczne samogłoski', excerpt: 'Ćwiczenia z trudnymi samogłoskami dla Polaków.' },
        { id: 'problematic-consonants', title: 'Problematyczne spółgłoski', excerpt: 'Ćwiczenia z th, r, w i innymi spółgłoskami.' },
    ],
    'gloski-nieme': [
        { id: 'silent-letters-basic', title: 'Silent letters - podstawy', excerpt: 'Podstawowe ćwiczenia z niemymi literami.' },
        { id: 'silent-letters-advanced', title: 'Silent letters - zaawansowane', excerpt: 'Zaawansowane przypadki niemych liter.' },
    ],
    'koncowki-wyrazow': [
        { id: 'common-endings', title: 'Końcówki wyrazów', excerpt: 'Kompleksowe ćwiczenia z końcówkami.' },
        { id: 'plural-s-es', title: 'Końcówki -s/-es', excerpt: 'Wymowa /s/, /z/, /ɪz/ — kiedy i dlaczego.' },
        { id: 'ending-ed', title: 'Końcówka -ed', excerpt: 'Wymowa /t/, /d/, /ɪd/ po różnych głoskach.' },
    ],
}

const QUIZZES = {
    'alfabet-nazwy-liter': [
        {
            id: 'a1',
            question: 'Jak brzmi nazwa litery A w alfabecie?',
            options: ['/eɪ/', '/ɑː/', '/æ/'],
            correct: 0,
        },
        {
            id: 'a2',
            question: 'W brytyjskim angielskim litera Z to…',
            options: ['zee', 'zed', 'zedee'],
            correct: 1,
        },
        {
            id: 'a3',
            question: 'Która para litera → wymowa jest poprawna?',
            options: ['H → /heɪtʃ/', 'Q → /kjuː/', 'W → /ˈdʌbəljuː/'],
            correct: 1,
        },
        {
            id: 'a4',
            question: 'Jak wymawiamy literę C?',
            options: ['/keɪ/', '/siː/', '/tʃiː/'],
            correct: 1,
        },
        {
            id: 'a5',
            question: 'Która litera ma wymowę /dʒiː/?',
            options: ['J', 'G', 'D'],
            correct: 1,
        },
        {
            id: 'a6',
            question: 'Jak brzmi nazwa litery I?',
            options: ['/iː/', '/aɪ/', '/ɪ/'],
            correct: 1,
        },
        {
            id: 'a7',
            question: 'Która litera ma najdłuższą nazwę?',
            options: ['W → /ˈdʌbljuː/', 'X → /ɛks/', 'Y → /waɪ/'],
            correct: 0,
        },
        {
            id: 'a8',
            question: 'Różnica w wymowie Z między BrE a AmE to:',
            options: ['BrE: /ziː/, AmE: /zed/', 'BrE: /zed/, AmE: /ziː/', 'BrE: /zɛd/, AmE: /ziː/'],
            correct: 1,
        },
        {
            id: 'a9',
            question: 'Litera z wymową /eɪtʃ/ to:',
            options: ['A', 'H', 'K'],
            correct: 1,
        },
        {
            id: 'a10',
            question: 'Która litera NIE ma w nazwie samogłoski /iː/?',
            options: ['B', 'C', 'W'],
            correct: 2,
        },
    ],
    'problematic-vowels': [
        {
            id: 'v1',
            question: 'Które słowo zawiera dźwięk /æ/?',
            options: ['bed', 'cat', 'bird'],
            correct: 1,
        },
        {
            id: 'v2',
            question: 'Różnica między ship a sheep to:',
            options: ['/ɪ/ vs /iː/', '/iː/ vs /ɪ/', '/ɛ/ vs /æ/'],
            correct: 0,
        },
        {
            id: 'v3',
            question: 'Które słowo zawiera dźwięk /ʌ/?',
            options: ['cup', 'cap', 'cop'],
            correct: 0,
        },
        {
            id: 'v4',
            question: 'Dźwięk /ɜː/ występuje w:',
            options: ['work', 'walk', 'week'],
            correct: 0,
        },
        {
            id: 'v5',
            question: 'Która para ilustruje kontrast /ʊ/ vs /uː/?',
            options: ['book - food', 'bit - beat', 'cat - cut'],
            correct: 0,
        },
        {
            id: 'v6',
            question: 'Słowo z dźwiękiem /ɛ/ to:',
            options: ['bad', 'bed', 'bird'],
            correct: 1,
        },
        {
            id: 'v7',
            question: 'Które słowo ma samogłoskę /ɪ/?',
            options: ['seat', 'sit', 'set'],
            correct: 1,
        },
        {
            id: 'v8',
            question: 'Dźwięk /iː/ występuje w:',
            options: ['ship', 'sheep', 'shop'],
            correct: 1,
        },
        {
            id: 'v9',
            question: 'Które słowo zawiera /ʊ/?',
            options: ['boot', 'book', 'boat'],
            correct: 1,
        },
        {
            id: 'v10',
            question: 'Różnica między bad a bed to:',
            options: ['/æ/ vs /ɛ/', '/ɛ/ vs /æ/', '/ʌ/ vs /ɛ/'],
            correct: 0,
        },
        {
            id: 'v11',
            question: 'Słowo z dźwiękiem /ɔː/ to:',
            options: ['thought', 'that', 'thumb'],
            correct: 0,
        },
        {
            id: 'v12',
            question: 'Które słowo ma samogłoskę /aɪ/?',
            options: ['night', 'not', 'nut'],
            correct: 0,
        },
        {
            id: 'v13',
            question: 'Dźwięk /əʊ/ występuje w:',
            options: ['no', 'now', 'new'],
            correct: 0,
        },
        {
            id: 'v14',
            question: 'Która para ma te same samogłoski?',
            options: ['cat - hat', 'sit - seat', 'book - boot'],
            correct: 0,
        },
        {
            id: 'v15',
            question: 'Słowo z dźwiękiem /eɪ/ to:',
            options: ['make', 'muck', 'mock'],
            correct: 0,
        },
    ],
    'problematic-consonants': [
        {
            id: 'c1',
            question: 'Które słowo zawiera dźwięk /θ/?',
            options: ['this', 'think', 'that'],
            correct: 1,
        },
        {
            id: 'c2',
            question: 'Różnica między /w/ a /v/ ilustrowana jest przez:',
            options: ['west - vest', 'vine - wine', 'obydwie pary'],
            correct: 2,
        },
        {
            id: 'c3',
            question: 'Dźwięk /ð/ występuje w:',
            options: ['thing', 'this', 'thumb'],
            correct: 1,
        },
        {
            id: 'c4',
            question: 'Które słowo zawiera /ŋ/?',
            options: ['sin', 'sing', 'sign'],
            correct: 1,
        },
        {
            id: 'c5',
            question: 'Angielskie /r/ różni się od polskiego tym, że:',
            options: ['jest drżące', 'nie jest drżące', 'jest zawsze dźwięczne'],
            correct: 1,
        },
        {
            id: 'c6',
            question: 'Które słowo zawiera /dʒ/?',
            options: ['church', 'judge', 'cheese'],
            correct: 1,
        },
        {
            id: 'c7',
            question: 'Dźwięk /tʃ/ występuje w:',
            options: ['job', 'church', 'bridge'],
            correct: 1,
        },
        {
            id: 'c8',
            question: 'Które słowo ma przydechowe /h/?',
            options: ['hour', 'honest', 'house'],
            correct: 2,
        },
        {
            id: 'c9',
            question: 'Różnica między ship a chip to:',
            options: ['/ʃ/ vs /tʃ/', '/s/ vs /tʃ/', '/ʃ/ vs /s/'],
                correct: 0,
},
{
    id: 'c10',
        question: 'Które słowo zawiera oba dźwięki: /θ/ i /ð/?',
    options: ['mother', 'father', 'writhe'],
    correct: 2,
},
],
'silent-letters-basic': [
    {
        id: 's1',
        question: 'W którym wyrazie litera jest niema?',
        options: ['write (w)', 'river (v)', 'gift (f)'],
        correct: 0,
    },
    {
        id: 's2',
        question: 'Jak wymawiasz "knock"?',
        options: ['/knɒk/', '/nɒk/', '/kəˈnɒk/'],
        correct: 1,
    },
    {
        id: 's3',
        question: 'W którym słowie kombinacja "gh" jest niema?',
        options: ['ghost', 'laugh', 'ghana'],
        correct: 1,
    },
    {
        id: 's4',
        question: 'Które słowo ma nieme B?',
        options: ['lamb', 'bomb', 'obydwa'],
        correct: 2,
    },
    {
        id: 's5',
        question: 'W którym słowie W jest nieme?',
        options: ['write', 'water', 'window'],
        correct: 0,
    },
    {
        id: 's6',
        question: 'Które słowo ma nieme K?',
        options: ['know', 'kite', 'kitten'],
        correct: 0,
    },
    {
        id: 's7',
        question: 'W "debt" niema litera to:',
        options: ['b', 'd', 't'],
        correct: 0,
    },
    {
        id: 's8',
        question: 'Które słowo NIE ma niemych liter?',
        options: ['knight', 'night', 'know'],
        correct: 1,
    },
    {
        id: 's9',
        question: 'W "could" niema litera to:',
        options: ['c', 'l', 'd'],
        correct: 1,
    },
    {
        id: 's10',
        question: 'Które słowo ma nieme GH?',
        options: ['night', 'ghost', 'ghetto'],
        correct: 0,
    },
],
    'silent-letters-advanced': [
    {
        id: 'sa1',
        question: 'W którym słowie L jest nieme?',
        options: ['walk', 'lake', 'lamp'],
        correct: 0,
    },
    {
        id: 'sa2',
        question: 'Które słowo ma nieme P?',
        options: ['psychology', 'paper', 'pencil'],
        correct: 0,
    },
    {
        id: 'sa3',
        question: 'W "island" niema litera to:',
        options: ['i', 's', 'd'],
        correct: 1,
    },
    {
        id: 'sa4',
        question: 'Które słowo ma nieme H?',
        options: ['hour', 'house', 'horse'],
        correct: 0,
    },
    {
        id: 'sa5',
        question: 'W "castle" niema litera to:',
        options: ['c', 't', 'e'],
        correct: 1,
    },
    {
        id: 'sa6',
        question: 'Które słowo ma nieme G?',
        options: ['sign', 'game', 'gift'],
        correct: 0,
    },
    {
        id: 'sa7',
        question: 'W "Wednesday" niema litera to:',
        options: ['d', 'e', 's'],
        correct: 0,
    },
    {
        id: 'sa8',
        question: 'Które słowo ma nieme N?',
        options: ['autumn', 'number', 'night'],
        correct: 0,
    },
    {
        id: 'sa9',
        question: 'W "foreign" nieme litery to:',
        options: ['g', 'e', 'i'],
        correct: 0,
    },
    {
        id: 'sa10',
        question: 'Które słowo ma nieme U?',
        options: ['guess', 'ugly', 'unit'],
        correct: 0,
    },
    {
        id: 'sa11',
        question: 'W "receipt" niema litera to:',
        options: ['p', 't', 'e'],
        correct: 0,
    },
    {
        id: 'sa12',
        question: 'Które słowo ma nieme T?',
        options: ['listen', 'table', 'time'],
        correct: 0,
    },
    {
        id: 'sa13',
        question: 'W "handsome" niema litera to:',
        options: ['d', 's', 'e'],
        correct: 0,
    },
    {
        id: 'sa14',
        question: 'Które słowo ma nieme D?',
        options: ['bridge', 'dog', 'door'],
        correct: 0,
    },
    {
        id: 'sa15',
        question: 'W "Christmas" niema litera to:',
        options: ['t', 's', 'm'],
        correct: 0,
    },
],
    'common-endings': [
    {
        id: 'ce1',
        question: 'Jak wymawiasz -s w "cats"?',
        options: ['/s/', '/z/', '/ɪz/'],
        correct: 0,
    },
    {
        id: 'ce2',
        question: 'Jak wymawiasz -ed w "wanted"?',
        options: ['/t/', '/d/', '/ɪd/'],
        correct: 2,
    },
    {
        id: 'ce3',
        question: 'Jak wymawiasz -s w "watches"?',
        options: ['/s/', '/z/', '/ɪz/'],
        correct: 2,
    },
    {
        id: 'ce4',
        question: 'Końcówka -ate w "create" wymawiana jest:',
        options: ['/eɪt/', '/ət/', '/æt/'],
        correct: 0,
    },
    {
        id: 'ce5',
        question: 'Końcówka -ile w brytyjskim angielskim w "mobile" to:',
        options: ['/aɪl/', '/əl/', '/iːl/'],
        correct: 0,
    },
    {
        id: 'ce6',
        question: 'Końcówka -ough w "though" wymawiana jest:',
        options: ['/əʊ/', '/ɔː/', '/aʊ/'],
        correct: 0,
    },
    {
        id: 'ce7',
        question: 'Końcówka -ious w "serious" to:',
        options: ['/i.əs/', '/aɪ.əs/', '/jʊs/'],
        correct: 0,
    },
    {
        id: 'ce8',
        question: 'Końcówka -ation w "information" to:',
        options: ['/ˈeɪ.ʃən/', '/ˈæ.ʃən/', '/ˈə.ʃən/'],
        correct: 0,
    },
    {
        id: 'ce9',
        question: 'Końcówka -ary w "dictionary" to:',
        options: ['/ə.ri/', '/ær.i/', '/eɪ.ri/'],
        correct: 0,
    },
    {
        id: 'ce10',
        question: 'Końcówka -ese w "Chinese" to:',
        options: ['/iːz/', '/iːs/', '/eɪz/'],
        correct: 0,
    },
],
    'plural-s-es': [
    {
        id: 'ps1',
        question: 'Jak wymawiasz -s w "dogs"?',
        options: ['/s/', '/z/', '/ɪz/'],
        correct: 1,
    },
    {
        id: 'ps2',
        question: 'Końcówka -s po bezdźwięcznej spółgłosce wymawiana jest jako:',
        options: ['/s/', '/z/', '/ɪz/'],
        correct: 0,
    },
    {
        id: 'ps3',
        question: 'Które słowo ma końcówkę /ɪz/?',
        options: ['buses', 'cats', 'boys'],
        correct: 0,
    },
    {
        id: 'ps4',
        question: 'Jak wymawiasz -s w "days"?',
        options: ['/s/', '/z/', '/ɪz/'],
        correct: 1,
    },
    {
        id: 'ps5',
        question: 'Końcówka /ɪz/ występuje po dźwiękach:',
        options: ['s, z, ʃ, ʒ, tʃ, dʒ', 'p, t, k, f, θ', 'b, d, g, v, ð, m, n, ŋ, l, r'],
        correct: 0,
    },
    {
        id: 'ps6',
        question: 'Jak wymawiasz -s w "watches"?',
        options: ['/s/', '/z/', '/ɪz/'],
        correct: 2,
    },
    {
        id: 'ps7',
        question: 'Które słowo ma końcówkę /s/?',
        options: ['books', 'bags', 'boxes'],
        correct: 0,
    },
    {
        id: 'ps8',
        question: 'Jak wymawiasz -s w "roses"?',
        options: ['/s/', '/z/', '/ɪz/'],
        correct: 2,
    },
    {
        id: 'ps9',
        question: 'Końcówka /z/ występuje po:',
        options: ['bezdźwięcznych spółgłoskach', 'dźwięcznych spółgłoskach i samogłoskach', 's, z, ʃ, ʒ, tʃ, dʒ'],
        correct: 1,
    },
    {
        id: 'ps10',
        question: 'Jak wymawiasz -s w "glasses"?',
        options: ['/s/', '/z/', '/ɪz/'],
        correct: 2,
    },
],
    'ending-ed': [
    {
        id: 'ed1',
        question: 'Jak wymawiasz -ed w "watched"?',
        options: ['/t/', '/d/', '/ɪd/'],
        correct: 0,
    },
    {
        id: 'ed2',
        question: 'Końcówka -ed po dźwięcznych spółgłoskach wymawiana jest jako:',
        options: ['/t/', '/d/', '/ɪd/'],
        correct: 1,
    },
    {
        id: 'ed3',
        question: 'Które słowo ma końcówkę /ɪd/?',
        options: ['wanted', 'played', 'worked'],
        correct: 0,
    },
    {
        id: 'ed4',
        question: 'Jak wymawiasz -ed w "loved"?',
        options: ['/t/', '/d/', '/ɪd/'],
        correct: 1,
    },
    {
        id: 'ed5',
        question: 'Końcówka /ɪd/ występuje po:',
        options: ['t i d', 'wszystkich bezdźwięcznych', 'wszystkich dźwięcznych'],
        correct: 0,
    },
    {
        id: 'ed6',
        question: 'Jak wymawiasz -ed w "decided"?',
        options: ['/t/', '/d/', '/ɪd/'],
        correct: 2,
    },
    {
        id: 'ed7',
        question: 'Które słowo ma końcówkę /t/?',
        options: ['kissed', 'opened', 'needed'],
        correct: 0,
    },
    {
        id: 'ed8',
        question: 'Jak wymawiasz -ed w "stopped"?',
        options: ['/t/', '/d/', '/ɪd/'],
        correct: 0,
    },
    {
        id: 'ed9',
        question: 'Końcówka /t/ występuje po:',
        options: ['bezdźwięcznych spółgłoskach', 'dźwięcznych spółgłoskach', 't i d'],
        correct: 0,
    },
    {
        id: 'ed10',
        question: 'Jak wymawiasz -ed w "started"?',
        options: ['/t/', '/d/', '/ɪd/'],
        correct: 2,
    },
],
}

function TopicCard({ topic, basePath, score }) {
    const getScoreColor = (percent) => {
        if (percent >= 90) return '#059669' // zielony
        if (percent >= 70) return '#d97706' // pomarańczowy
        if (percent >= 50) return '#dc2626' // czerwony
        return '#6b7280' // szary
    }

    const getScoreLabel = (percent) => {
        if (percent >= 90) return 'Doskonale!'
        if (percent >= 70) return 'Dobrze'
        if (percent >= 50) return 'Wymaga poprawy'
        return 'Słabo'
    }

    return (
        <Link to={`${basePath}?topic=${topic.id}`} className="topic-card" role="listitem">
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
        // reset when topic changes
        setAnswers({})
        setChecked(false)
    }, [topicId])

    const correctCount = questions.reduce((acc, q) => acc + ((answers[q.id] ?? -1) === q.correct ? 1 : 0), 0)
    const scorePercent = Math.round((correctCount/questions.length)*100)

    const handleCheckAnswers = () => {
        setChecked(true)
        // Zapisz wynik gdy użytkownik sprawdzi odpowiedzi
        if (Object.keys(answers).length === questions.length) {
            saveScore(topicId, scorePercent)
        }
    }

    return (
        <div className="exercise">
            <div className="exercise__info">
                <h3>Ćwiczenia: {TOPICS.alfabet.find(t => t.id === topicId)?.title ||
                    TOPICS['gloski-nieme'].find(t => t.id === topicId)?.title ||
                    TOPICS['koncowki-wyrazow'].find(t => t.id === topicId)?.title}</h3>
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

export default function PronunciationExercises() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const active = section ?? 'alfabet'
    const topicId = searchParams.get('topic')
    const basePath = `/cwiczenia/gramatyka/wymowa/${active}`

    return (
        <main className="topic-layout">
            <div className="container">
                <header className="topic-header">
                    <h2>Ćwiczenia: Wymowa</h2>
                    <p className="muted">Utrwalaj wymowę liter, głosek niemych i końcówek wyrazów.</p>
                </header>

                <nav className="subnav" aria-label="Podstrony ćwiczeń: Wymowa">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/cwiczenia/gramatyka/wymowa/${s.id}`}
                            className={({ isActive }) => `subnav__item${isActive ? ' subnav__item--active' : ''}`}
                        >
                            <span className="subnav__title">{s.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <article className="topic-content">
                    {!topicId ? (
                        <>
                            <p className="muted">Wybierz temat, aby rozpocząć ćwiczenia.</p>
                            <TopicsGrid basePath={basePath} active={active} />
                        </>
                    ) : (
                        <>
                            <div className="topic-detail__back">
                                <Link to={basePath} className="btn-link">← Wróć do listy tematów</Link>
                            </div>
                            <Quiz topicId={topicId} />
                        </>
                    )}
                </article>
            </div>
        </main>
    )
}