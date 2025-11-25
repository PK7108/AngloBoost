import React, { useMemo, useState, useEffect } from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import { useLanguage } from '../../../context/LanguageContext.jsx'
import useDocumentMeta from '../../../useDocumentMeta'
import '../../../styles/topic-cards.css'
import { useExerciseScores } from '../useExerciseScores'

const sections = [
    { id: 'zero', label: 'Zerowy' },
    { id: 'first', label: 'Pierwszy' },
    { id: 'second', label: 'Drugi' },
    { id: 'third', label: 'Trzeci' },
    { id: 'mixed', label: 'Mieszane' },
]

// Boksy odpowiadające zagadnieniom w okresach warunkowych
const TOPICS = {
    zero: [
        { id: 'zero-form', title: 'Zero Conditional - Podstawy 🎯', excerpt: 'If + Present, Present - fakty naukowe i ogólne prawdy.' },
        { id: 'zero-practice-15', title: 'Zero - Praktyka 📚', excerpt: '15 pytań praktycznych z zerowym okresem warunkowym.' },
        { id: 'zero-advanced-12', title: 'Zero - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z modalnymi i wariacjami.' },
    ],
    first: [
        { id: 'first-form', title: 'First Conditional - Podstawy 🎯', excerpt: 'If + Present, will - rzeczy możliwe w przyszłości.' },
        { id: 'first-practice-15', title: 'First - Praktyka 📚', excerpt: '15 pytań praktycznych z pierwszym okresem warunkowym.' },
        { id: 'first-advanced-12', title: 'First - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z alternatywnymi formami.' },
    ],
    second: [
        { id: 'second-form', title: 'Second Conditional - Podstawy 🎯', excerpt: 'If + Past, would - hipotetyczne sytuacje.' },
        { id: 'second-practice-15', title: 'Second - Praktyka 📚', excerpt: '15 pytań praktycznych z drugim okresem warunkowym.' },
        { id: 'second-advanced-12', title: 'Second - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z "were" i modalnymi.' },
    ],
    third: [
        { id: 'third-form', title: 'Third Conditional - Podstawy 🎯', excerpt: 'If + Past Perfect, would have - żal i hipotetyczna przeszłość.' },
        { id: 'third-practice-15', title: 'Third - Praktyka 📚', excerpt: '15 pytań praktycznych z trzecim okresem warunkowym.' },
        { id: 'third-advanced-12', title: 'Third - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z could/might/should have.' },
    ],
    mixed: [
        { id: 'mixed-form', title: 'Mixed Conditionals - Podstawy 🎯', excerpt: 'Połączenie różnych czasów w okresach warunkowych.' },
        { id: 'mixed-practice-15', title: 'Mixed - Praktyka 📚', excerpt: '15 pytań praktycznych z mieszanymi okresami.' },
        { id: 'mixed-advanced-12', title: 'Mixed - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z rzadkimi kombinacjami.' },
    ],
}

const QUIZZES = {
    'zero-form': [
        {
            id: 'zf1',
            question: 'If you heat water to 100°C, it ___ .',
            options: ['boils', 'will boil', 'boiled'],
            correct: 0,
        },
        {
            id: 'zf2',
            question: 'Zero Conditional buduje się jako:',
            options: ['If + Past, would', 'If + Present, Present', 'If + Present, will'],
            correct: 1,
        },
        {
            id: 'zf3',
            question: 'Użycie Zero Conditional to:',
            options: ['hipotezy', 'ogólne prawdy', 'przeszłe żale'],
            correct: 1,
        },
        {
            id: 'zf4',
            question: 'If you mix blue and yellow, you ___ green.',
            options: ['get', 'will get', 'got'],
            correct: 0,
        },
        {
            id: 'zf5',
            question: 'Które zdanie jest poprawne?',
            options: ['If I have time, I go to the gym.', 'If I have time, I will go to the gym.', 'If I had time, I would go to the gym.'],
            correct: 0,
        },
        {
            id: 'zf6',
            question: 'Zero Conditional opisuje:',
            options: ['sytuacje 100% pewne', 'mało prawdopodobne zdarzenia', 'przeszłe możliwości'],
            correct: 0,
        },
        {
            id: 'zf7',
            question: 'If people don\'t eat, they ___ hungry.',
            options: ['get', 'will get', 'would get'],
            correct: 0,
        },
        {
            id: 'zf8',
            question: 'Które słowo można użyć zamiast "if" w Zero Conditional?',
            options: ['when', 'unless', 'whether'],
            correct: 0,
        },
        {
            id: 'zf9',
            question: 'If the weather ___ nice, we usually go for a walk.',
            options: ['is', 'will be', 'was'],
            correct: 0,
        },
        {
            id: 'zf10',
            question: 'Zero Conditional najczęściej używany jest w:',
            options: ['instrukcjach i podręcznikach', 'opowiadaniach', 'listach miłosnych'],
            correct: 0,
        },
    ],

    'zero-practice-15': [
        {
            id: 'zp1',
            question: 'If you ___ plants, they die.',
            options: ["don't water", "didn't water", "won't water"],
            correct: 0,
        },
        {
            id: 'zp2',
            question: 'If you press this button, the light ___ on.',
            options: ['turns', 'will turn', 'turned'],
            correct: 0,
        },
        {
            id: 'zp3',
            question: 'When you ___ ice, it melts.',
            options: ['heat', 'heated', 'will heat'],
            correct: 0,
        },
        {
            id: 'zp4',
            question: 'If people ___ regularly, they stay healthy.',
            options: ['exercise', 'exercised', 'will exercise'],
            correct: 0,
        },
        {
            id: 'zp5',
            question: 'If babies ___ hungry, they cry.',
            options: ['are', 'were', 'will be'],
            correct: 0,
        },
        {
            id: 'zp6',
            question: 'When the sun ___ , it gets dark.',
            options: ['sets', 'set', 'will set'],
            correct: 0,
        },
        {
            id: 'zp7',
            question: 'If you ___ too much coffee, you can\'t sleep.',
            options: ['drink', 'drank', 'will drink'],
            correct: 0,
        },
        {
            id: 'zp8',
            question: 'When it ___ heavily, the streets flood.',
            options: ['rains', 'rained', 'will rain'],
            correct: 0,
        },
        {
            id: 'zp9',
            question: 'If you ___ late, you miss the bus.',
            options: ['wake up', 'woke up', 'will wake up'],
            correct: 0,
        },
        {
            id: 'zp10',
            question: 'When the temperature ___ below zero, water freezes.',
            options: ['falls', 'fell', 'will fall'],
            correct: 0,
        },
        {
            id: 'zp11',
            question: 'If you ___ a magnet near metal, it attracts it.',
            options: ['hold', 'held', 'will hold'],
            correct: 0,
        },
        {
            id: 'zp12',
            question: 'When you ___ sugar in water, it dissolves.',
            options: ['put', 'putted', 'will put'],
            correct: 0,
        },
        {
            id: 'zp13',
            question: 'If people ___ enough sleep, they feel tired.',
            options: ["don't get", "didn't get", "won't get"],
            correct: 0,
        },
        {
            id: 'zp14',
            question: 'When you ___ the switch, the machine starts.',
            options: ['turn on', 'turned on', 'will turn on'],
            correct: 0,
        },
        {
            id: 'zp15',
            question: 'If you ___ to another country, you need a passport.',
            options: ['travel', 'travelled', 'will travel'],
            correct: 0,
        },
    ],

    'zero-advanced-12': [
        {
            id: 'za1',
            question: 'If the chemical reaction ___ properly, the desired compound ___ formed.',
            options: ['occurs...is', 'occurred...was', 'will occur...will be'],
            correct: 0,
        },
        {
            id: 'za2',
            question: 'When atmospheric pressure ___ significantly, weather patterns ___ dramatically.',
            options: ['changes...shift', 'changed...shifted', 'will change...will shift'],
            correct: 0,
        },
        {
            id: 'za3',
            question: 'If the experimental conditions ___ constant, the results ___ reproducible.',
            options: ['remain...are', 'remained...were', 'will remain...will be'],
            correct: 0,
        },
        {
            id: 'za4',
            question: 'When gravitational forces ___ balanced, celestial bodies ___ in stable orbits.',
            options: ['are...remain', 'were...remained', 'will be...will remain'],
            correct: 0,
        },
        {
            id: 'za5',
            question: 'If the data ___ consistent with the hypothesis, further investigation ___ warranted.',
            options: ['are...is', 'were...was', 'will be...will be'],
            correct: 0,
        },
        {
            id: 'za6',
            question: 'When economic indicators ___ positive trends, investor confidence typically ___ .',
            options: ['show...increases', 'showed...increased', 'will show...will increase'],
            correct: 0,
        },
        {
            id: 'za7',
            question: 'If the security protocol ___ properly implemented, unauthorized access ___ prevented.',
            options: ['is...is', 'was...was', 'will be...will be'],
            correct: 0,
        },
        {
            id: 'za8',
            question: 'When quantum particles ___ observed, their wave function ___ .',
            options: ['are...collapses', 'were...collapsed', 'will be...will collapse'],
            correct: 0,
        },
        {
            id: 'za9',
            question: 'If the algorithm ___ optimized, computational efficiency significantly ___ .',
            options: ['is...improves', 'was...improved', 'will be...will improve'],
            correct: 0,
        },
        {
            id: 'za10',
            question: 'When neurotransmitter levels ___ balanced, cognitive functions ___ optimally.',
            options: ['are...operate', 'were...operated', 'will be...will operate'],
            correct: 0,
        },
        {
            id: 'za11',
            question: 'If the diplomatic channels ___ open, international conflicts often ___ resolved peacefully.',
            options: ['remain...are', 'remained...were', 'will remain...will be'],
            correct: 0,
        },
        {
            id: 'za12',
            question: 'When genetic mutations ___ specific sequences, phenotypic expressions ___ accordingly.',
            options: ['affect...change', 'affected...changed', 'will affect...will change'],
            correct: 0,
        },
    ],

    'first-form': [
        {
            id: 'ff1',
            question: 'If it rains, we ___ at home.',
            options: ['stay', 'will stay', 'stayed'],
            correct: 1,
        },
        {
            id: 'ff2',
            question: 'First Conditional: If + Present, ___',
            options: ['would + base', 'will + base', 'had + V3'],
            correct: 1,
        },
        {
            id: 'ff3',
            question: 'Użycie First Conditional to:',
            options: ['mało prawdopodobne', 'nierealne', 'realne/przewidywane'],
            correct: 2,
        },
        {
            id: 'ff4',
            question: 'If I see Sarah, I ___ her your message.',
            options: ['give', 'will give', 'would give'],
            correct: 1,
        },
        {
            id: 'ff5',
            question: 'Które zdanie jest poprawne?',
            options: ['If I will have time, I call you.', 'If I have time, I will call you.', 'If I had time, I will call you.'],
            correct: 1,
        },
        {
            id: 'ff6',
            question: 'First Conditional często wyraża:',
            options: ['obietnice i ostrzeżenia', 'żale z przeszłości', 'fakty naukowe'],
            correct: 0,
        },
        {
            id: 'ff7',
            question: 'If you don\'t hurry, you ___ the train.',
            options: ['miss', 'will miss', 'would miss'],
            correct: 1,
        },
        {
            id: 'ff8',
            question: 'W części z "if" w First Conditional:',
            options: ['nie używamy "will"', 'musimy użyć "will"', 'możemy użyć "would"'],
            correct: 0,
        },
        {
            id: 'ff9',
            question: 'If she ___ the exam, she will be very happy.',
            options: ['passes', 'will pass', 'passed'],
            correct: 0,
        },
        {
            id: 'ff10',
            question: 'First Conditional opisuje wydarzenia:',
            options: ['prawdopodobne w przyszłości', 'niemożliwe', 'które zawsze się zdarzają'],
            correct: 0,
        },
    ],

    'first-practice-15': [
        {
            id: 'fp1',
            question: 'If I ___ enough money, I will buy a new car.',
            options: ['have', 'had', 'will have'],
            correct: 0,
        },
        {
            id: 'fp2',
            question: 'If you ___ me, I will help you with your homework.',
            options: ['ask', 'asked', 'will ask'],
            correct: 0,
        },
        {
            id: 'fp3',
            question: 'We will go to the beach if the weather ___ nice.',
            options: ['is', 'was', 'will be'],
            correct: 0,
        },
        {
            id: 'fp4',
            question: 'If he ___ late again, he will lose his job.',
            options: ['is', 'was', 'will be'],
            correct: 0,
        },
        {
            id: 'fp5',
            question: 'I will tell you the secret if you ___ not tell anyone.',
            options: ['do', 'did', 'will'],
            correct: 0,
        },
        {
            id: 'fp6',
            question: 'If they ___ the project on time, they will get a bonus.',
            options: ['finish', 'finished', 'will finish'],
            correct: 0,
        },
        {
            id: 'fp7',
            question: 'She will be disappointed if you ___ to her party.',
            options: ["don't come", "didn't come", "won't come"],
            correct: 0,
        },
        {
            id: 'fp8',
            question: 'If we ___ now, we will catch the last bus.',
            options: ['leave', 'left', 'will leave'],
            correct: 0,
        },
        {
            id: 'fp9',
            question: 'You will improve your English if you ___ regularly.',
            options: ['practice', 'practiced', 'will practice'],
            correct: 0,
        },
        {
            id: 'fp10',
            question: 'If I ___ my passport, I won\'t be able to travel.',
            options: ['lose', 'lost', 'will lose'],
            correct: 0,
        },
        {
            id: 'fp11',
            question: 'They will visit us if they ___ time next weekend.',
            options: ['have', 'had', 'will have'],
            correct: 0,
        },
        {
            id: 'fp12',
            question: 'If you ___ careful, you will have an accident.',
            options: ["aren't", "weren't", "won't be"],
            correct: 0,
        },
        {
            id: 'fp13',
            question: 'I will make dinner if you ___ the groceries.',
            options: ['buy', 'bought', 'will buy'],
            correct: 0,
        },
        {
            id: 'fp14',
            question: 'If the company ___ its targets, the employees will get a raise.',
            options: ['meets', 'met', 'will meet'],
            correct: 0,
        },
        {
            id: 'fp15',
            question: 'We will have a picnic if it ___ tomorrow.',
            options: ["doesn't rain", "didn't rain", "won't rain"],
            correct: 0,
        },
    ],

    'first-advanced-12': [
        {
            id: 'fa1',
            question: 'Provided that the funding ___ approved, the research team ___ commence the clinical trials next month.',
            options: ['is...will', 'was...would', 'will be...will'],
            correct: 0,
        },
        {
            id: 'fa2',
            question: 'Unless significant progress ___ made in the negotiations, the partnership agreement ___ finalized.',
            options: ['is...will not be', 'was...would not be', 'will be...will not be'],
            correct: 0,
        },
        {
            id: 'fa3',
            question: 'Should the experimental results ___ conclusive, we ___ proceed with the publication.',
            options: ['be...will', 'were...would', 'will be...will'],
            correct: 0,
        },
        {
            id: 'fa4',
            question: 'On condition that all safety protocols ___ strictly followed, the operation ___ as scheduled.',
            options: ['are...will proceed', 'were...would proceed', 'will be...will proceed'],
            correct: 0,
        },
        {
            id: 'fa5',
            question: 'If the market analysis ___ favorable indicators, the board ___ the expansion proposal.',
            options: ['shows...will approve', 'showed...would approve', 'will show...will approve'],
            correct: 0,
        },
        {
            id: 'fa6',
            question: 'Assuming the technical specifications ___ met, the prototype ___ into production.',
            options: ['are...will go', 'were...would go', 'will be...will go'],
            correct: 0,
        },
        {
            id: 'fa7',
            question: 'In the event that the cybersecurity measures ___ compromised, immediate action ___ taken.',
            options: ['are...will be', 'were...would be', 'will be...will be'],
            correct: 0,
        },
        {
            id: 'fa8',
            question: 'If the diplomatic efforts ___ successful, the trade sanctions ___ lifted.',
            options: ['are...will be', 'were...would be', 'will be...will be'],
            correct: 0,
        },
        {
            id: 'fa9',
            question: 'Provided the environmental impact assessment ___ satisfactory, the construction ___ granted permission.',
            options: ['is...will be', 'was...would be', 'will be...will be'],
            correct: 0,
        },
        {
            id: 'fa10',
            question: 'Should the patient\'s condition ___ , the medical team ___ alternative treatment options.',
            options: ['deteriorate...will consider', 'deteriorated...would consider', 'will deteriorate...will consider'],
            correct: 0,
        },
        {
            id: 'fa11',
            question: 'If the algorithm\'s performance metrics ___ the established benchmarks, further optimization ___ necessary.',
            options: ['exceed...will not be', 'exceeded...would not be', 'will exceed...will not be'],
            correct: 0,
        },
        {
            id: 'fa12',
            question: 'Unless the contractual obligations ___ fulfilled, legal proceedings ___ initiated.',
            options: ['are...will be', 'were...would be', 'will be...will be'],
            correct: 0,
        },
    ],

    'second-form': [
        {
            id: 'sf1',
            question: 'If I ___ you, I would apologise.',
            options: ['am', 'were', 'was'],
            correct: 1,
        },
        {
            id: 'sf2',
            question: 'Second Conditional dotyczy:',
            options: ['ogólnych prawd', 'hipotetycznych teraz/przyszłość', 'przeszłości'],
            correct: 1,
        },
        {
            id: 'sf3',
            question: 'Struktura: If + Past, ___',
            options: ['would + base', 'will + base', 'would have + V3'],
            correct: 0,
        },
        {
            id: 'sf4',
            question: 'If I had more time, I ___ Japanese.',
            options: ['learn', 'will learn', 'would learn'],
            correct: 2,
        },
        {
            id: 'sf5',
            question: 'Które zdanie jest poprawne?',
            options: ['If I would be rich, I travel the world.', 'If I were rich, I would travel the world.', 'If I was rich, I will travel the world.'],
            correct: 1,
        },
        {
            id: 'sf6',
            question: 'Second Conditional opisuje sytuacje:',
            options: ['nierealne lub mało prawdopodobne', 'pewne w przyszłości', 'które zawsze się zdarzają'],
            correct: 0,
        },
        {
            id: 'sf7',
            question: 'If she ___ here, she would know what to do.',
            options: ['is', 'were', 'will be'],
            correct: 1,
        },
        {
            id: 'sf8',
            question: 'W mowie potocznej często słyszy się "was" zamiast "were", ale:',
            options: ['"were" jest bardziej poprawne', '"was" jest zawsze lepsze', 'obie formy są równie poprawne'],
            correct: 0,
        },
        {
            id: 'sf9',
            question: 'If I ___ how to swim, I would go to the beach more often.',
            options: ['knew', 'know', 'will know'],
            correct: 0,
        },
        {
            id: 'sf10',
            question: 'Second Conditional często używany jest do:',
            options: ['radzenia (If I were you...)', 'opisywania faktów', 'mówienia o przeszłości'],
            correct: 0,
        },
    ],

    'second-practice-15': [
        {
            id: 'sp1',
            question: 'If I ___ more money, I would buy a house.',
            options: ['have', 'had', 'will have'],
            correct: 1,
        },
        {
            id: 'sp2',
            question: 'She would travel more if she ___ afraid of flying.',
            options: ["wasn't", "isn't", "won't be"],
            correct: 0,
        },
        {
            id: 'sp3',
            question: 'If we ___ in London, we could go to the theatre every week.',
            options: ['lived', 'live', 'will live'],
            correct: 0,
        },
        {
            id: 'sp4',
            question: 'I would help you if I ___ how.',
            options: ['knew', 'know', 'will know'],
            correct: 0,
        },
        {
            id: 'sp5',
            question: 'If he ___ more careful, he wouldn\'t make so many mistakes.',
            options: ['were', 'is', 'will be'],
            correct: 0,
        },
        {
            id: 'sp6',
            question: 'They would be happier if they ___ more free time.',
            options: ['had', 'have', 'will have'],
            correct: 0,
        },
        {
            id: 'sp7',
            question: 'If I ___ you, I would take that job offer.',
            options: ['were', 'am', 'will be'],
            correct: 0,
        },
        {
            id: 'sp8',
            question: 'We could go hiking if the weather ___ better.',
            options: ['were', 'is', 'will be'],
            correct: 0,
        },
        {
            id: 'sp9',
            question: 'If she ___ French, she would apply for the job in Paris.',
            options: ['spoke', 'speaks', 'will speak'],
            correct: 0,
        },
        {
            id: 'sp10',
            question: 'I would buy that car if it ___ so expensive.',
            options: ["weren't", "isn't", "won't be"],
            correct: 0,
        },
        {
            id: 'sp11',
            question: 'If they ___ about the problem, they could help us.',
            options: ['knew', 'know', 'will know'],
            correct: 0,
        },
        {
            id: 'sp12',
            question: 'He would be more successful if he ___ harder.',
            options: ['worked', 'works', 'will work'],
            correct: 0,
        },
        {
            id: 'sp13',
            question: 'If I ___ the answer, I would tell you.',
            options: ['knew', 'know', 'will know'],
            correct: 0,
        },
        {
            id: 'sp14',
            question: 'We would visit you more often if you ___ closer.',
            options: ['lived', 'live', 'will live'],
            correct: 0,
        },
        {
            id: 'sp15',
            question: 'If she ___ how to drive, she wouldn\'t need to take the bus.',
            options: ['knew', 'knows', 'will know'],
            correct: 0,
        },
    ],

    'second-advanced-12': [
        {
            id: 'sa1',
            question: 'If the scientific community ___ greater funding for basic research, groundbreaking discoveries ___ more frequently.',
            options: ['had...would occur', 'has...will occur', 'will have...will occur'],
            correct: 0,
        },
        {
            id: 'sa2',
            question: 'Were the international sanctions ___ , the economic situation in the region ___ significantly different.',
            options: ['lifted...would be', 'lifted...will be', 'lift...would be'],
            correct: 0,
        },
        {
            id: 'sa3',
            question: 'If quantum computing technology ___ more advanced, we ___ currently intractable problems.',
            options: ['were...could solve', 'is...can solve', 'will be...will solve'],
            correct: 0,
        },
        {
            id: 'sa4',
            question: 'Should the theoretical framework ___ validated experimentally, it ___ a paradigm shift in the field.',
            options: ['be...would represent', 'is...will represent', 'will be...will represent'],
            correct: 0,
        },
        {
            id: 'sa5',
            question: 'If global cooperation on climate change ___ more robust, the environmental crisis ___ more effectively addressed.',
            options: ['were...could be', 'is...can be', 'will be...will be'],
            correct: 0,
        },
        {
            id: 'sa6',
            question: 'Were the archaeological evidence ___ conclusive, our understanding of ancient civilizations ___ substantially revised.',
            options: ['more...would be', 'more...will be', 'most...would be'],
            correct: 0,
        },
        {
            id: 'sa7',
            question: 'If artificial intelligence systems ___ true consciousness, ethical considerations ___ exponentially more complex.',
            options: ['possessed...would become', 'possess...will become', 'will possess...will become'],
            correct: 0,
        },
        {
            id: 'sa8',
            question: 'Should interstellar travel ___ feasible within our lifetime, humanity\'s perspective ___ fundamentally transformed.',
            options: ['become...would be', 'become...will be', 'becomes...will be'],
            correct: 0,
        },
        {
            id: 'sa9',
            question: 'If the genetic engineering protocols ___ more precise, therapeutic applications ___ significantly safer.',
            options: ['were...would be', 'are...will be', 'will be...will be'],
            correct: 0,
        },
        {
            id: 'sa10',
            question: 'Were economic inequalities ___ systematically, social stability ___ greatly enhanced.',
            options: ['addressed...would be', 'addressed...will be', 'address...would be'],
            correct: 0,
        },
        {
            id: 'sa11',
            question: 'If neurological research ___ unlimited resources, degenerative diseases ___ potentially curable.',
            options: ['had...might become', 'has...may become', 'will have...will become'],
            correct: 0,
        },
        {
            id: 'sa12',
            question: 'Should renewable energy infrastructure ___ universally implemented, carbon emissions ___ drastically reduced.',
            options: ['be...would be', 'be...will be', 'is...will be'],
            correct: 0,
        },
    ],

    'third-form': [
        {
            id: 'tf1',
            question: 'If I ___ harder, I would have passed.',
            options: ['study', 'studied', 'had studied'],
            correct: 2,
        },
        {
            id: 'tf2',
            question: 'Struktura Third Conditional:',
            options: ['If + Past, would', 'If + Past Perfect, would have + V3', 'If + Present, will'],
            correct: 1,
        },
        {
            id: 'tf3',
            question: 'Użycie Third Conditional dotyczy:',
            options: ['żalu o przeszłość', 'teraźniejszych hipotez', 'prawd ogólnych'],
            correct: 0,
        },
        {
            id: 'tf4',
            question: 'If we ___ earlier, we would have caught the train.',
            options: ['left', 'had left', 'would leave'],
            correct: 1,
        },
        {
            id: 'tf5',
            question: 'Które zdanie jest poprawne?',
            options: ['If I had known, I would have helped.', 'If I knew, I would have helped.', 'If I would have known, I helped.'],
            correct: 0,
        },
        {
            id: 'tf6',
            question: 'Third Conditional opisuje sytuacje:',
            options: ['które się nie wydarzyły w przeszłości', 'które na pewno się zdarzą', 'hipotetyczne w teraźniejszości'],
            correct: 0,
        },
        {
            id: 'tf7',
            question: 'If she ___ about the meeting, she would have attended.',
            options: ['knew', 'had known', 'would know'],
            correct: 1,
        },
        {
            id: 'tf8',
            question: 'Częsty błąd w Third Conditional to:',
            options: ['używanie "would" w części z "if"', 'używanie Past Perfect', 'pomijanie "have"'],
            correct: 0,
        },
        {
            id: 'tf9',
            question: 'If they ___ us, we would have waited for them.',
            options: ['called', 'had called', 'would call'],
            correct: 1,
        },
        {
            id: 'tf10',
            question: 'Third Conditional często wyraża:',
            options: ['krytykę i żal', 'obietnice', 'instrukcje'],
            correct: 0,
        },
    ],

    'third-practice-15': [
        {
            id: 'tp1',
            question: 'If I ___ about the traffic, I would have left earlier.',
            options: ['knew', 'had known', 'would know'],
            correct: 1,
        },
        {
            id: 'tp2',
            question: 'She would have passed the exam if she ___ more.',
            options: ['studied', 'had studied', 'would study'],
            correct: 1,
        },
        {
            id: 'tp3',
            question: 'If we ___ the warning, we wouldn\'t have gotten lost.',
            options: ['heard', 'had heard', 'would hear'],
            correct: 1,
        },
        {
            id: 'tp4',
            question: 'They would have won the game if they ___ better.',
            options: ['played', 'had played', 'would play'],
            correct: 1,
        },
        {
            id: 'tp5',
            question: 'If I ___ his number, I would have called him.',
            options: ['had', 'had had', 'would have'],
            correct: 1,
        },
        {
            id: 'tp6',
            question: 'He wouldn\'t have crashed if he ___ more carefully.',
            options: ['drove', 'had driven', 'would drive'],
            correct: 1,
        },
        {
            id: 'tp7',
            question: 'If you ___ me, I could have helped you.',
            options: ['asked', 'had asked', 'would ask'],
            correct: 1,
        },
        {
            id: 'tp8',
            question: 'We would have bought the house if it ___ so expensive.',
            options: ["wasn't", "hadn't been", "wouldn't be"],
            correct: 1,
        },
        {
            id: 'tp9',
            question: 'If she ___ to the party, she would have met John.',
            options: ['went', 'had gone', 'would go'],
            correct: 1,
        },
        {
            id: 'tp10',
            question: 'I would have taken the job if they ___ me a better salary.',
            options: ['offered', 'had offered', 'would offer'],
            correct: 1,
        },
        {
            id: 'tp11',
            question: 'If the weather ___ better, we would have gone to the beach.',
            options: ['was', 'had been', 'would be'],
            correct: 1,
        },
        {
            id: 'tp12',
            question: 'He would have been promoted if he ___ more responsibility.',
            options: ['took', 'had taken', 'would take'],
            correct: 1,
        },
        {
            id: 'tp13',
            question: 'If I ___ the instructions, I wouldn\'t have made that mistake.',
            options: ['read', 'had read', 'would read'],
            correct: 1,
        },
        {
            id: 'tp14',
            question: 'They would have arrived on time if their flight ___ delayed.',
            options: ["wasn't", "hadn't been", "wouldn't be"],
            correct: 1,
        },
        {
            id: 'tp15',
            question: 'If you ___ me the truth, I would have understood.',
            options: ['told', 'had told', 'would tell'],
            correct: 1,
        },
    ],

    'third-advanced-12': [
        {
            id: 'ta1',
            question: 'Had the research team ___ access to the supercomputing facilities, they ___ the complex simulations in half the time.',
            options: ['had...could have completed', 'have...could complete', 'had had...could have completed'],
            correct: 2,
        },
        {
            id: 'ta2',
            question: 'If the clinical trial protocols ___ more rigorously enforced, the adverse effects ___ promptly identified and addressed.',
            options: ['had been...would have been', 'were...would be', 'will be...will be'],
            correct: 0,
        },
        {
            id: 'ta3',
            question: 'Should the archaeological team ___ the ancient manuscript earlier, our historical timeline ___ substantially revised.',
            options: ['discovered...might have been', 'discover...might be', 'had discovered...might have been'],
            correct: 2,
        },
        {
            id: 'ta4',
            question: 'If the cybersecurity measures ___ properly implemented from the outset, the data breach ___ entirely prevented.',
            options: ['had been...could have been', 'were...could be', 'will be...will be'],
            correct: 0,
        },
        {
            id: 'ta5',
            question: 'Had the diplomatic envoys ___ more flexible in their negotiations, the peace treaty ___ successfully brokered.',
            options: ['been...might have been', 'be...might be', 'had been...might have been'],
            correct: 2,
        },
        {
            id: 'ta6',
            question: 'If the experimental methodology ___ peer-reviewed prior to publication, several methodological flaws ___ identified.',
            options: ['had been...would have been', 'was...would be', 'will be...will be'],
            correct: 0,
        },
        {
            id: 'ta7',
            question: 'Should the environmental impact assessment ___ conducted more thoroughly, the ecological consequences ___ accurately predicted.',
            options: ['been...could have been', 'be...could be', 'have been...could have been'],
            correct: 2,
        },
        {
            id: 'ta8',
            question: 'If the quantum encryption algorithms ___ deployed earlier, the sensitive communications ___ adequately protected.',
            options: ['had been...would have been', 'were...would be', 'will be...will be'],
            correct: 0,
        },
        {
            id: 'ta9',
            question: 'Had the financial regulators ___ more proactive in their oversight, the market manipulation ___ detected sooner.',
            options: ['been...might have been', 'be...might be', 'had been...might have been'],
            correct: 2,
        },
        {
            id: 'ta10',
            question: 'If the neural network training data ___ more diverse, the algorithmic bias ___ significantly reduced.',
            options: ['had been...could have been', 'was...could be', 'will be...will be'],
            correct: 0,
        },
        {
            id: 'ta11',
            question: 'Should the international space station ___ different orbital parameters, certain astronomical observations ___ more feasible.',
            options: ['had...might have been', 'have...might be', 'had had...might have been'],
            correct: 2,
        },
        {
            id: 'ta12',
            question: 'If the genomic sequencing technology ___ available a decade earlier, numerous genetic disorders ___ identified and treated.',
            options: ['had been...could have been', 'was...could be', 'will be...will be'],
            correct: 0,
        },
    ],

    'mixed-form': [
        {
            id: 'mf1',
            question: 'If I had taken the job, I ___ richer now.',
            options: ['am', 'would be', 'would have been'],
            correct: 1,
        },
        {
            id: 'mf2',
            question: 'If I ___ taller, I would have become a pilot.',
            options: ['am', 'were', 'had been'],
            correct: 1,
        },
        {
            id: 'mf3',
            question: 'Mixed conditionals łączą:',
            options: ['czas teraźniejszy z przeszłością', 'dwa Present', 'tylko przyszłość'],
            correct: 0,
        },
        {
            id: 'mf4',
            question: 'If you had saved money, you ___ in debt now.',
            options: ["aren't", "wouldn't be", "wouldn't have been"],
            correct: 1,
        },
        {
            id: 'mf5',
            question: 'Które zdanie jest mixed conditional?',
            options: ['If I had studied, I would be a doctor now.', 'If I study, I will be a doctor.', 'If I studied, I would be a doctor.'],
            correct: 0,
        },
        {
            id: 'mf6',
            question: 'Mixed conditionals opisują:',
            options: ['przeszłe decyzje wpływające na teraźniejszość', 'tylko przeszłość', 'tylko teraźniejszość'],
            correct: 0,
        },
        {
            id: 'mf7',
            question: 'If she ___ more organized, she wouldn\'t have missed the deadline.',
            options: ['is', 'were', 'had been'],
            correct: 1,
        },
        {
            id: 'mf8',
            question: 'W mixed conditionals często łączymy:',
            options: ['Past Perfect z would + base', 'Present z would have', 'Past z will'],
            correct: 0,
        },
        {
            id: 'mf9',
            question: 'If I ___ you, I wouldn\'t have said that.',
            options: ['am', 'were', 'had been'],
            correct: 1,
        },
        {
            id: 'mf10',
            question: 'Mixed conditionals są używane gdy:',
            options: ['czas warunku i skutku są różne', 'obie części są w tym samym czasie', 'mówimy tylko o przyszłości'],
            correct: 0,
        },
    ],

    'mixed-practice-15': [
        {
            id: 'mp1',
            question: 'If I ___ medicine, I would be a doctor now.',
            options: ['had studied', 'studied', 'study'],
            correct: 0,
        },
        {
            id: 'mp2',
            question: 'If she ___ more confident, she would have taken that opportunity.',
            options: ['were', 'is', 'had been'],
            correct: 0,
        },
        {
            id: 'mp3',
            question: 'You wouldn\'t be so tired if you ___ to bed earlier last night.',
            options: ['went', 'had gone', 'would go'],
            correct: 1,
        },
        {
            id: 'mp4',
            question: 'If I ___ how important this was, I would be more careful now.',
            options: ['knew', 'had known', 'would know'],
            correct: 1,
        },
        {
            id: 'mp5',
            question: 'He would speak better French if he ___ in Paris longer.',
            options: ['lived', 'had lived', 'would live'],
            correct: 1,
        },
        {
            id: 'mp6',
            question: 'If they ___ the house, they wouldn\'t be homeless now.',
            options: ["hadn't sold", "didn't sell", "wouldn't sell"],
            correct: 0,
        },
        {
            id: 'mp7',
            question: 'I would have that job now if I ___ the interview better.',
            options: ['prepared', 'had prepared', 'would prepare'],
            correct: 1,
        },
        {
            id: 'mp8',
            question: 'If she ___ more adventurous, she would have traveled the world.',
            options: ['were', 'is', 'had been'],
            correct: 0,
        },
        {
            id: 'mp9',
            question: 'We would be in Rome now if our flight ___ cancelled.',
            options: ["wasn't", "hadn't been", "wouldn't be"],
            correct: 1,
        },
        {
            id: 'mp10',
            question: 'If I ___ you were waiting, I would have hurried.',
            options: ['knew', 'had known', 'would know'],
            correct: 1,
        },
        {
            id: 'mp11',
            question: 'He would be healthier now if he ___ smoking years ago.',
            options: ['stopped', 'had stopped', 'would stop'],
            correct: 1,
        },
        {
            id: 'mp12',
            question: 'If I ___ more time, I would have finished the project by now.',
            options: ['have', 'had', 'had had'],
            correct: 2,
        },
        {
            id: 'mp13',
            question: 'She would understand the lesson if she ___ to the lecture.',
            options: ['listened', 'had listened', 'would listen'],
            correct: 1,
        },
        {
            id: 'mp14',
            question: 'If we ___ that investment, we would be millionaires today.',
            options: ['made', 'had made', 'would make'],
            correct: 1,
        },
        {
            id: 'mp15',
            question: 'I would be married now if I ___ that mistake.',
            options: ["didn't make", "hadn't made", "wouldn't make"],
            correct: 1,
        },
    ],

    'mixed-advanced-12': [
        {
            id: 'ma1',
            question: 'Had the scientific community ___ the research findings earlier, current medical practices ___ significantly different.',
            options: ['adopted...would be', 'adopt...will be', 'had adopted...would be'],
            correct: 0,
        },
        {
            id: 'ma2',
            question: 'If the international space regulations ___ more comprehensive from the beginning, the current orbital debris problem ___ so severe.',
            options: ['had been...would not be', 'were...would not be', 'will be...will not be'],
            correct: 0,
        },
        {
            id: 'ma3',
            question: 'Were quantum encryption standards ___ universally implemented when first developed, today\'s cybersecurity landscape ___ fundamentally more secure.',
            options: ['been...would be', 'be...will be', 'have been...would be'],
            correct: 0,
        },
        {
            id: 'ma4',
            question: 'If climate change mitigation strategies ___ aggressively pursued two decades ago, the current environmental crisis ___ more manageable proportions.',
            options: ['had been...would have', 'were...would have', 'will be...will have'],
            correct: 0,
        },
        {
            id: 'ma5',
            question: 'Had artificial intelligence ethics frameworks ___ established during the technology\'s infancy, present-day AI governance challenges ___ considerably less complex.',
            options: ['been...would be', 'be...will be', 'have been...would be'],
            correct: 0,
        },
        {
            id: 'ma6',
            question: 'If genomic editing technologies ___ more thoroughly regulated upon their inception, contemporary bioethical debates ___ markedly different.',
            options: ['had been...would be', 'were...would be', 'will be...will be'],
            correct: 0,
        },
        {
            id: 'ma7',
            question: 'Should renewable energy infrastructure ___ prioritized during the early stages of industrialization, the current global energy portfolio ___ predominantly sustainable.',
            options: ['been...would be', 'be...will be', 'have been...would be'],
            correct: 0,
        },
        {
            id: 'ma8',
            question: 'If international diplomatic channels ___ maintained more consistently throughout the previous administration, current geopolitical relations ___ substantially improved.',
            options: ['had been...would be', 'were...would be', 'will be...will be'],
            correct: 0,
        },
        {
            id: 'ma9',
            question: 'Had neurological research ___ adequate funding during its critical developmental phase, modern therapeutic approaches to neurodegenerative diseases ___ more advanced.',
            options: ['received...would be', 'receive...will be', 'had received...would be'],
            correct: 0,
        },
        {
            id: 'ma10',
            question: 'If digital privacy legislation ___ enacted when internet usage became widespread, current data protection standards ___ significantly higher.',
            options: ['had been...would be', 'were...would be', 'will be...will be'],
            correct: 0,
        },
        {
            id: 'ma11',
            question: 'Should sustainable agricultural practices ___ adopted during the Green Revolution, contemporary food production systems ___ more environmentally compatible.',
            options: ['been...would be', 'be...will be', 'have been...would be'],
            correct: 0,
        },
        {
            id: 'ma12',
            question: 'If space exploration technologies ___ developed more rapidly in the late 20th century, humanity\'s current presence in space ___ considerably more extensive.',
            options: ['had been...would be', 'were...would be', 'will be...will be'],
            correct: 0,
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

    const getTopicTitle = () => {
        return TOPICS.zero.find(t => t.id === topicId)?.title ||
            TOPICS.first.find(t => t.id === topicId)?.title ||
            TOPICS.second.find(t => t.id === topicId)?.title ||
            TOPICS.third.find(t => t.id === topicId)?.title ||
            TOPICS.mixed.find(t => t.id === topicId)?.title
    }

    return (
        <div className="exercise">
            <div className="exercise__info">
                <h3>Ćwiczenia: {getTopicTitle()}</h3>
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

export default function ConditionalsExercises() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const { lang } = useLanguage()
    const active = section ?? 'zero'
    const topicId = searchParams.get('topic')
    const basePath = `/cwiczenia/gramatyka/okresy-warunkowe/${active}`

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
                    <h2>Ćwiczenia: Okresy warunkowe</h2>
                    <p className="muted">Utrwalaj zasady Zero, First, Second, Third i Mixed Conditionals</p>
                </header>

                <nav className="subnav" aria-label="Podstrony ćwiczeń: Okresy warunkowe">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/cwiczenia/gramatyka/okresy-warunkowe/${s.id}`}
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
            <style jsx>{`
        .welcome-message {
          margin-bottom: 2rem;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
          margin: 1.5rem 0;
        }
        
        .feature {
          padding: 1.5rem;
          background: var(--color-background-secondary);
          border-radius: 12px;
          border-left: 4px solid var(--color-primary);
          transition: transform 0.3s ease;
        }
        
        .feature:hover {
          transform: translateY(-2px);
        }
        
        .feature h4 {
          margin: 0 0 0.5rem 0;
          color: var(--color-text);
          font-size: 1.1rem;
        }
        
        .feature p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--color-text-light);
          line-height: 1.4;
        }
        
        .topic-detail__header {
          display: flex;
          justify-content: between;
          align-items: flex-start;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .topic-detail__info {
          flex: 1;
        }
        
        .topic-detail__info h3 {
          margin: 0 0 0.5rem 0;
          color: var(--color-text);
        }
        
        .exercise-tips {
          margin-top: 2rem;
          padding: 1.5rem;
          background: var(--color-background-secondary);
          border-radius: 12px;
        }
        
        .tips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .tip {
          padding: 1rem;
          background: var(--color-background);
          border-radius: 8px;
          border-left: 3px solid var(--color-primary);
        }
        
        .tip h5 {
          margin: 0 0 0.5rem 0;
          color: var(--color-primary);
          font-size: 1rem;
        }
        
        .tip p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--color-text-light);
          line-height: 1.4;
        }
        
        .additional-resources {
          margin-top: 3rem;
        }
        
        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .resource {
          padding: 1.5rem;
          background: var(--color-background-secondary);
          border-radius: 8px;
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .resource:hover {
          transform: translateY(-2px);
        }
        
        .resource h5 {
          margin: 0 0 0.5rem 0;
          color: var(--color-text);
          font-size: 1rem;
        }
        
        .resource p {
          margin: 0;
          font-size: 0.85rem;
          color: var(--color-text-light);
          line-height: 1.4;
        }
        
        @media (max-width: 768px) {
          .topic-detail__header {
            flex-direction: column;
            gap: 1rem;
          }
          
          .features-grid,
          .tips-grid {
            grid-template-columns: 1fr;
          }
          
          .resource {
            padding: 1rem;
          }
        }
      `}</style>
        </main>
    )
}

function getMetaTitle(lang, activeSection, topicId) {
    const sectionTitles = {
        pl: {
            zero: 'Ćwiczenia: Zerowy okres warunkowy',
            first: 'Ćwiczenia: Pierwszy okres warunkowy',
            second: 'Ćwiczenia: Drugi okres warunkowy',
            third: 'Ćwiczenia: Trzeci okres warunkowy',
            mixed: 'Ćwiczenia: Mieszane okresy warunkowe'
        },
        en: {
            zero: 'Exercises: Zero Conditional',
            first: 'Exercises: First Conditional',
            second: 'Exercises: Second Conditional',
            third: 'Exercises: Third Conditional',
            mixed: 'Exercises: Mixed Conditionals'
        }
    }

    if (topicId) {
        const topic = findTopicById(topicId)
        const topicTitle = lang === 'pl' ? topic?.title : getEnglishTopicTitle(topicId)
        return `${topicTitle} — Ćwiczenia — AngloBoost`
    }

    const baseTitle = sectionTitles[lang]?.[activeSection] || sectionTitles.pl[activeSection]
    return lang === 'pl'
        ? `${baseTitle} — AngloBoost`
        : `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang, activeSection, topicId) {
    const sectionDescriptions = {
        pl: {
            zero: 'Interaktywne ćwiczenia z zerowego okresu warunkowego. If + Present, Present - fakty naukowe i ogólne prawdy.',
            first: 'Ćwiczenia z pierwszego okresu warunkowego. If + Present, will - rzeczy możliwe w przyszłości.',
            second: 'Interaktywne ćwiczenia z drugiego okresu warunkowego. If + Past, would - hipotetyczne sytuacje.',
            third: 'Ćwiczenia z trzeciego okresu warunkowego. If + Past Perfect, would have - żal i hipotetyczna przeszłość.',
            mixed: 'Interaktywne ćwiczenia z mieszanych okresów warunkowych. Połączenie różnych czasów w okresach warunkowych.'
        },
        en: {
            zero: 'Interactive zero conditional exercises. If + Present, Present - scientific facts and general truths.',
            first: 'First conditional exercises. If + Present, will - possible future events.',
            second: 'Interactive second conditional exercises. If + Past, would - hypothetical situations.',
            third: 'Third conditional exercises. If + Past Perfect, would have - regret and hypothetical past.',
            mixed: 'Interactive mixed conditionals exercises. Combination of different tenses in conditional sentences.'
        }
    }

    if (topicId) {
        const topic = findTopicById(topicId)
        return lang === 'pl'
            ? `${topic?.excerpt} Interaktywne ćwiczenia i testy online z natychmiastową weryfikacją odpowiedzi.`
            : `${getEnglishTopicExcerpt(topicId)} Interactive exercises and online tests with instant answer verification.`
    }

    return sectionDescriptions[lang]?.[activeSection] || sectionDescriptions.pl[activeSection]
}

function getCanonicalUrl(lang, activeSection, topicId) {
    const baseUrl = lang === 'pl'
        ? `https://angloboost.pl/pl/cwiczenia/gramatyka/okresy-warunkowe/${activeSection}`
        : `https://angloboost.pl/en/exercises/grammar/conditionals/${activeSection}`

    if (topicId) {
        return `${baseUrl}?topic=${topicId}`
    }

    return baseUrl
}

function findTopicById(topicId) {
    for (const section of Object.values(TOPICS)) {
        const topic = section.find(t => t.id === topicId)
        if (topic) return topic
    }
    return null
}

function getEnglishTopicTitle(topicId) {
    const englishTitles = {
        'zero-form': 'Zero Conditional - Basics - Exercises',
        'zero-practice-15': 'Zero Conditional - Practice - Exercises',
        'zero-advanced-12': 'Zero Conditional - Advanced - Exercises',
        'first-form': 'First Conditional - Basics - Exercises',
        'first-practice-15': 'First Conditional - Practice - Exercises',
        'first-advanced-12': 'First Conditional - Advanced - Exercises',
        'second-form': 'Second Conditional - Basics - Exercises',
        'second-practice-15': 'Second Conditional - Practice - Exercises',
        'second-advanced-12': 'Second Conditional - Advanced - Exercises',
        'third-form': 'Third Conditional - Basics - Exercises',
        'third-practice-15': 'Third Conditional - Practice - Exercises',
        'third-advanced-12': 'Third Conditional - Advanced - Exercises',
        'mixed-form': 'Mixed Conditionals - Basics - Exercises',
        'mixed-practice-15': 'Mixed Conditionals - Practice - Exercises',
        'mixed-advanced-12': 'Mixed Conditionals - Advanced - Exercises'
    }
    return englishTitles[topicId] || 'Conditionals Exercises'
}

function getEnglishTopicExcerpt(topicId) {
    const englishExcerpts = {
        'zero-form': 'If + Present, Present - scientific facts and general truths in conditional sentences.',
        'zero-practice-15': '15 practice questions with zero conditional - general truths and scientific facts.',
        'zero-advanced-12': '12 more difficult questions with modals and variations in zero conditional.',
        'first-form': 'If + Present, will - possible and likely future events in conditional sentences.',
        'first-practice-15': '15 practice questions with first conditional - possible future situations.',
        'first-advanced-12': '12 more difficult questions with alternative forms in first conditional.',
        'second-form': 'If + Past, would - hypothetical and unreal situations in conditional sentences.',
        'second-practice-15': '15 practice questions with second conditional - hypothetical situations.',
        'second-advanced-12': '12 more difficult questions with "were" and modals in second conditional.',
        'third-form': 'If + Past Perfect, would have - regret and hypothetical past situations.',
        'third-practice-15': '15 practice questions with third conditional - past hypothetical situations.',
        'third-advanced-12': '12 more difficult questions with could/might/should have in third conditional.',
        'mixed-form': 'Combination of different tenses in conditional sentences - mixed time references.',
        'mixed-practice-15': '15 practice questions with mixed conditionals - different time combinations.',
        'mixed-advanced-12': '12 more difficult questions with rare combinations in mixed conditionals.'
    }
    return englishExcerpts[topicId] || 'Conditionals exercises with examples and explanations.'
}