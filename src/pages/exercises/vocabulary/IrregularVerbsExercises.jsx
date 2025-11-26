import React, { useMemo, useState, useEffect } from 'react'
import { useLanguage } from '../../../context/LanguageContext.jsx'
import useDocumentMeta from '../../../useDocumentMeta'
import '../../../styles/topic-cards.css'
import { useExerciseScores } from '../useExerciseScores'

const QUIZZES = {
    'podstawowe': [
        { id: 'iv1', question: 'be → ?', options: ['was/were, been', 'beed, been', 'was, were'], correct: 0 },
        { id: 'iv2', question: 'go → ?', options: ['went, gone', 'goed, gone', 'went, went'], correct: 0 },
        { id: 'iv3', question: 'see → ?', options: ['saw, seen', 'seed, seen', 'saw, saw'], correct: 0 },
        { id: 'iv4', question: 'take → ?', options: ['took, taken', 'taked, taken', 'took, took'], correct: 0 },
        { id: 'iv5', question: 'come → ?', options: ['came, come', 'comed, come', 'came, came'], correct: 0 },
        { id: 'iv6', question: 'do → ?', options: ['did, done', 'doed, done', 'did, did'], correct: 0 },
        { id: 'iv7', question: 'have → ?', options: ['had, had', 'haved, had', 'had, have'], correct: 0 },
        { id: 'iv8', question: 'make → ?', options: ['made, made', 'maked, made', 'maked, maked'], correct: 0 },
        { id: 'iv9', question: 'say → ?', options: ['said, said', 'sayed, said', 'say, say'], correct: 0 },
        { id: 'iv10', question: 'get → ?', options: ['got, got/gotten', 'getted, gotten', 'got, get'], correct: 0 },
        { id: 'iv11', question: 'know → ?', options: ['knew, known', 'knowed, known', 'knew, knew'], correct: 0 },
        { id: 'iv12', question: 'think → ?', options: ['thought, thought', 'thinked, thought', 'thought, think'], correct: 0 },
        { id: 'iv13', question: 'find → ?', options: ['found, found', 'finded, found', 'found, find'], correct: 0 },
        { id: 'iv14', question: 'give → ?', options: ['gave, given', 'gived, given', 'gave, gave'], correct: 0 },
        { id: 'iv15', question: 'tell → ?', options: ['told, told', 'telled, told', 'told, tell'], correct: 0 },
    ],

    'srednie': [
        { id: 'iv16', question: 'begin → ?', options: ['began, begun', 'begun, began', 'begined, begun'], correct: 0 },
        { id: 'iv17', question: 'drink → ?', options: ['drank, drunk', 'drunk, drank', 'drinked, drunk'], correct: 0 },
        { id: 'iv18', question: 'swim → ?', options: ['swam, swum', 'swum, swam', 'swimmed, swum'], correct: 0 },
        { id: 'iv19', question: 'sing → ?', options: ['sang, sung', 'sung, sang', 'singed, sung'], correct: 0 },
        { id: 'iv20', question: 'write → ?', options: ['wrote, written', 'writed, written', 'wrote, wrote'], correct: 0 },
        { id: 'iv21', question: 'drive → ?', options: ['drove, driven', 'drived, driven', 'drove, drove'], correct: 0 },
        { id: 'iv22', question: 'break → ?', options: ['broke, broken', 'breaked, broken', 'broke, broke'], correct: 0 },
        { id: 'iv23', question: 'choose → ?', options: ['chose, chosen', 'choosed, chosen', 'chose, chose'], correct: 0 },
        { id: 'iv24', question: 'speak → ?', options: ['spoke, spoken', 'speaked, spoken', 'spoke, spoke'], correct: 0 },
        { id: 'iv25', question: 'wake → ?', options: ['woke, woken', 'waked, woken', 'woke, woke'], correct: 0 },
        { id: 'iv26', question: 'forget → ?', options: ['forgot, forgotten', 'forgetted, forgotten', 'forgot, forgot'], correct: 0 },
        { id: 'iv27', question: 'hide → ?', options: ['hid, hidden', 'hided, hidden', 'hid, hid'], correct: 0 },
        { id: 'iv28', question: 'ride → ?', options: ['rode, ridden', 'rided, ridden', 'rode, rode'], correct: 0 },
        { id: 'iv29', question: 'rise → ?', options: ['rose, risen', 'rised, risen', 'rose, rose'], correct: 0 },
        { id: 'iv30', question: 'wear → ?', options: ['wore, worn', 'weared, worn', 'wore, wore'], correct: 0 },
    ],

    'trudne': [
        { id: 'iv31', question: 'bring → ?', options: ['brought, brought', 'bringed, brought', 'brang, brung'], correct: 0 },
        { id: 'iv32', question: 'buy → ?', options: ['bought, bought', 'buyed, bought', 'bought, buy'], correct: 0 },
        { id: 'iv33', question: 'catch → ?', options: ['caught, caught', 'catched, caught', 'caught, catch'], correct: 0 },
        { id: 'iv34', question: 'teach → ?', options: ['taught, taught', 'teached, taught', 'taught, teach'], correct: 0 },
        { id: 'iv35', question: 'fight → ?', options: ['fought, fought', 'fighted, fought', 'fought, fight'], correct: 0 },
        { id: 'iv36', question: 'seek → ?', options: ['sought, sought', 'seeked, sought', 'sought, seek'], correct: 0 },
        { id: 'iv37', question: 'think → ?', options: ['thought, thought', 'thinked, thought', 'thought, think'], correct: 0 },
        { id: 'iv38', question: 'bend → ?', options: ['bent, bent', 'bended, bent', 'bent, bend'], correct: 0 },
        { id: 'iv39', question: 'lend → ?', options: ['lent, lent', 'lended, lent', 'lent, lend'], correct: 0 },
        { id: 'iv40', question: 'send → ?', options: ['sent, sent', 'sended, sent', 'sent, send'], correct: 0 },
        { id: 'iv41', question: 'spend → ?', options: ['spent, spent', 'spended, spent', 'spent, spend'], correct: 0 },
        { id: 'iv42', question: 'build → ?', options: ['built, built', 'builded, built', 'built, build'], correct: 0 },
        { id: 'iv43', question: 'deal → ?', options: ['dealt, dealt', 'dealed, dealt', 'dealt, deal'], correct: 0 },
        { id: 'iv44', question: 'mean → ?', options: ['meant, meant', 'meaned, meant', 'meant, mean'], correct: 0 },
        { id: 'iv45', question: 'leave → ?', options: ['left, left', 'leaved, left', 'left, leave'], correct: 0 },
    ],

    'mieszane': [
        { id: 'iv46', question: 'fly → ?', options: ['flew, flown', 'flied, flown', 'flew, flew'], correct: 0 },
        { id: 'iv47', question: 'grow → ?', options: ['grew, grown', 'growed, grown', 'grew, grew'], correct: 0 },
        { id: 'iv48', question: 'throw → ?', options: ['threw, thrown', 'throwed, thrown', 'threw, threw'], correct: 0 },
        { id: 'iv49', question: 'blow → ?', options: ['blew, blown', 'blowed, blown', 'blew, blew'], correct: 0 },
        { id: 'iv50', question: 'draw → ?', options: ['drew, drawn', 'drawed, drawn', 'drew, drew'], correct: 0 },
        { id: 'iv51', question: 'fall → ?', options: ['fell, fallen', 'falled, fallen', 'fell, fell'], correct: 0 },
        { id: 'iv52', question: 'eat → ?', options: ['ate, eaten', 'eated, eaten', 'ate, ate'], correct: 0 },
        { id: 'iv53', question: 'shake → ?', options: ['shook, shaken', 'shaked, shaken', 'shook, shook'], correct: 0 },
        { id: 'iv54', question: 'take → ?', options: ['took, taken', 'taked, taken', 'took, took'], correct: 0 },
        { id: 'iv55', question: 'mistake → ?', options: ['mistook, mistaken', 'mistaked, mistaken', 'mistook, mistook'], correct: 0 },
        { id: 'iv56', question: 'understand → ?', options: ['understood, understood', 'understanded, understood', 'understood, understand'], correct: 0 },
        { id: 'iv57', question: 'stand → ?', options: ['stood, stood', 'standed, stood', 'stood, stand'], correct: 0 },
        { id: 'iv58', question: 'lie (kłamać) → ?', options: ['lied, lied', 'lay, lain', 'laid, laid'], correct: 0 },
        { id: 'iv59', question: 'lie (leżeć) → ?', options: ['lay, lain', 'lied, lied', 'laid, laid'], correct: 0 },
        { id: 'iv60', question: 'lay (kłaść) → ?', options: ['laid, laid', 'lay, lain', 'lied, lied'], correct: 0 },
        { id: 'iv61', question: 'pay → ?', options: ['paid, paid', 'payed, paid', 'paid, pay'], correct: 0 },
        { id: 'iv62', question: 'say → ?', options: ['said, said', 'sayed, said', 'say, say'], correct: 0 },
        { id: 'iv63', question: 'sell → ?', options: ['sold, sold', 'selled, sold', 'sold, sell'], correct: 0 },
        { id: 'iv64', question: 'tell → ?', options: ['told, told', 'telled, told', 'told, tell'], correct: 0 },
    ]
}

const TOPICS = [
    { id: 'podstawowe', title: 'Czasowniki podstawowe 📚', excerpt: '15 najczęściej używanych czasowników nieregularnych' },
    { id: 'srednie', title: 'Czasowniki średniozaawansowane 🔥', excerpt: '15 czasowników z zmianami samogłosek' },
    { id: 'trudne', title: 'Czasowniki trudne 🚀', excerpt: '15 czasowników z nietypowymi formami' },
    { id: 'mieszane', title: 'Mieszane - wszystkie formy 💪', excerpt: '18 różnych czasowników do kompleksowego sprawdzenia' },
]

function TopicCard({ topic, onSelectTopic, score }) {
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
        <button
            onClick={() => onSelectTopic(topic.id)}
            className="topic-card"
            role="listitem"
        >
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
        </button>
    )
}

function TopicsGrid({ onSelectTopic }) {
    const { getScore } = useExerciseScores()

    return (
        <div className="topic-grid" role="list">
            {TOPICS.map(t => (
                <TopicCard
                    key={t.id}
                    topic={t}
                    onSelectTopic={onSelectTopic}
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
                <h3>Ćwiczenia: {TOPICS.find(t => t.id === topicId)?.title}</h3>
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

export default function IrregularVerbsExercises() {
    const [selectedTopic, setSelectedTopic] = useState(null)
    const { lang } = useLanguage()

    useDocumentMeta({
        title: getMetaTitle(lang, selectedTopic),
        description: getMetaDescription(lang, selectedTopic),
        canonical: getCanonicalUrl(lang, selectedTopic),
        og: {
            title: getMetaTitle(lang, selectedTopic),
            description: getMetaDescription(lang, selectedTopic),
            image: 'https://angloboost.pl/UK-social.png',
            url: window.location.href
        }
    })

    return (
        <main className="topic-layout">
            <div className="container">
                <header className="topic-header">
                    <h2>Ćwiczenia: Czasowniki nieregularne</h2>
                    <p className="muted">Formy Past Simple i Past Participle - ćwicz według poziomu trudności</p>
                </header>

                <article className="topic-content">
                    {!selectedTopic ? (
                        <>
                            <div className="welcome-message">
                                <h3>Ćwicz czasowniki nieregularne! 🎯</h3>
                                <p>Wybierz poziom trudności, aby sprawdzić znajomość form II i III czasowników nieregularnych.</p>
                                <div className="tips-grid">
                                    <div className="tip">
                                        <h5>Forma II (Past Simple)</h5>
                                        <p>Używana w zdaniach w czasie przeszłym prostym</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Forma III (Past Participle)</h5>
                                        <p>Używana w czasach Perfect i stronie biernej</p>
                                    </div>
                                </div>
                            </div>

                            <TopicsGrid onSelectTopic={setSelectedTopic} />
                        </>
                    ) : (
                        <>
                            <div className="topic-detail__header">
                                <div className="topic-detail__back">
                                    <button onClick={() => setSelectedTopic(null)} className="btn-link">← Wróć do wyboru ćwiczeń</button>
                                </div>
                                <div className="topic-detail__info">
                                    <h3>{TOPICS.find(t => t.id === selectedTopic)?.title}</h3>
                                    <p className="muted">{TOPICS.find(t => t.id === selectedTopic)?.excerpt}</p>
                                </div>
                            </div>

                            <Quiz topicId={selectedTopic} />

                            <div className="exercise-tips">
                                <h4>💡 Wskazówki do nauki</h4>
                                <div className="tips-grid">
                                    <div className="tip">
                                        <h5>Grupuj według wzorców</h5>
                                        <p>Ucz się czasowników w grupach o podobnych zmianach (np. sing-sang-sung, ring-rang-rung)</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Używaj w zdaniach</h5>
                                        <p>Twórz własne przykładowe zdania z czasownikami w różnych formach</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Powtarzaj regularnie</h5>
                                        <p>Krótkie, ale częste sesje nauki są bardziej efektywne niż długie maratony</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Nagrywaj się</h5>
                                        <p>Wymawiaj na głos formy czasowników dla lepszego zapamiętania</p>
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

function getMetaTitle(lang, selectedTopic) {
    const baseTitle = lang === 'pl'
        ? 'Ćwiczenia: Czasowniki nieregularne - Past Simple i Past Participle'
        : 'Exercises: Irregular Verbs - Past Simple and Past Participle'

    if (selectedTopic) {
        const topic = TOPICS.find(t => t.id === selectedTopic)
        const topicTitle = lang === 'pl' ? topic?.title : getEnglishTopicTitle(selectedTopic)
        return `${topicTitle} — Ćwiczenia — AngloBoost`
    }

    return lang === 'pl'
        ? `${baseTitle} — AngloBoost`
        : `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang, selectedTopic) {
    const baseDescription = {
        pl: 'Interaktywne ćwiczenia z czasowników nieregularnych. Testy i quizy z formami Past Simple i Past Participle według poziomów trudności.',
        en: 'Interactive irregular verbs exercises. Tests and quizzes with Past Simple and Past Participle forms by difficulty levels.'
    }

    if (selectedTopic) {
        const topic = TOPICS.find(t => t.id === selectedTopic)
        return lang === 'pl'
            ? `${topic?.excerpt} Interaktywne ćwiczenia i testy online z natychmiastową weryfikacją odpowiedzi.`
            : `${getEnglishTopicExcerpt(selectedTopic)} Interactive exercises and online tests with instant answer verification.`
    }

    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang, selectedTopic) {
    const baseUrl = lang === 'pl'
        ? 'https://angloboost.pl/pl/cwiczenia/gramatyka/czasowniki-nieregularne'
        : 'https://angloboost.pl/en/exercises/grammar/irregular-verbs'

    if (selectedTopic) {
        return `${baseUrl}?topic=${selectedTopic}`
    }

    return baseUrl
}

function getEnglishTopicTitle(topicId) {
    const englishTitles = {
        'podstawowe': 'Basic Irregular Verbs 📚',
        'srednie': 'Intermediate Irregular Verbs 🔥',
        'trudne': 'Advanced Irregular Verbs 🚀',
        'mieszane': 'Mixed Irregular Verbs 💪'
    }
    return englishTitles[topicId] || 'Irregular Verbs Exercises'
}

function getEnglishTopicExcerpt(topicId) {
    const englishExcerpts = {
        'podstawowe': '15 most commonly used irregular verbs',
        'srednie': '15 verbs with vowel changes',
        'trudne': '15 verbs with unusual forms',
        'mieszane': '18 different verbs for comprehensive testing'
    }
    return englishExcerpts[topicId] || 'English irregular verbs exercises with examples.'
}