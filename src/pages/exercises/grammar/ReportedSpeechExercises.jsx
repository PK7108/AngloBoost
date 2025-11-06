import React, { useMemo, useState, useEffect } from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import '../../../styles/topic-cards.css'
import { useExerciseScores } from '../useExerciseScores'

const sections = [
    { id: 'present', label: 'W czasie teraźniejszym' },
    { id: 'past', label: 'W czasie przeszłym' },
    { id: 'pytania-rozkazy', label: 'Pytania i rozkazy' },
    { id: 'czasowniki-modalne', label: 'Czasowniki modalne' },
    { id: 'wyjatki-specjalne', label: 'Wyjątki i przypadki specjalne' },
]

// Boksy odpowiadające zagadnieniom w gramatyce
const TOPICS = {
    present: [
        { id: 'reported-present', title: 'Mowa zależna – teraźniejszość 🕒', excerpt: 'Podstawowe ćwiczenia bez backshiftu.' },
        { id: 'reported-present-practice-15', title: 'Mowa teraźniejsza - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi czasownikami.' },
        { id: 'reported-present-advanced-12', title: 'Mowa teraźniejsza - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z złożonymi zdaniami.' },
    ],
    past: [
        { id: 'reported-past-backshift', title: 'Backshifting - cofnięcie czasów ⏪', excerpt: 'Podstawowe ćwiczenia z backshifting.' },
        { id: 'past-perfect-exceptions', title: 'Past Perfect - przypadki specjalne 🔄', excerpt: 'Ćwiczenia z wyjątkami od backshift.' },
        { id: 'reported-past-practice-15', title: 'Mowa przeszła - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi czasami.' },
        { id: 'reported-past-advanced-12', title: 'Mowa przeszła - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z złożonymi konstrukcjami.' },
    ],
    'pytania-rozkazy': [
        { id: 'reported-questions', title: 'Pytania w mowie zależnej ❓', excerpt: 'Podstawowe ćwiczenia z pytaniami.' },
        { id: 'reported-questions-practice-15', title: 'Pytania - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi typami pytań.' },
        { id: 'reported-commands-practice-15', title: 'Rozkazy i prośby - Praktyka 📚', excerpt: '15 pytań z rozkazami i prośbami.' },
        { id: 'reported-questions-advanced-12', title: 'Pytania - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z formalnymi zwrotami.' },
    ],
    'czasowniki-modalne': [
        { id: 'reported-modals', title: 'Czasowniki modalne w mowie zależnej 🔧', excerpt: 'Podstawowe ćwiczenia z modalnymi.' },
        { id: 'reported-modals-practice-15', title: 'Czasowniki modalne - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi modalnymi.' },
        { id: 'reported-modals-advanced-12', title: 'Czasowniki modalne - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z perfect modal.' },
    ],
    'wyjatki-specjalne': [
        { id: 'reported-exceptions', title: 'Wyjątki i przypadki specjalne ⚠️', excerpt: 'Podstawowe ćwiczenia z wyjątkami.' },
        { id: 'reported-exceptions-practice-15', title: 'Wyjątki - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi wyjątkami.' },
        { id: 'reported-exceptions-advanced-12', title: 'Wyjątki - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań w kontekstach naukowych.' },
    ],
}

const QUIZZES = {
    'reported-present': [
        {
            id: 'rp1',
            question: 'She says: "I am busy." → She says (that) she ___ busy.',
            options: ['was', 'is', 'will be'],
            correct: 1,
        },
        {
            id: 'rp2',
            question: 'W mowie zależnej „now” zwykle zmienia się na:',
            options: ['then', 'that time', 'today'],
            correct: 0,
        },
        {
            id: 'rp3',
            question: 'Do you know where ___?',
            options: ['is he', 'he is', 'does he'],
            correct: 1,
        },
        {
            id: 'rp4',
            question: 'He says: "I work here." → He says (that) he ___ here.',
            options: ['worked', 'works', 'is working'],
            correct: 1,
        },
        {
            id: 'rp5',
            question: 'She says: "We are coming." → She says (that) they ___ coming.',
            options: ['were', 'are', 'have been'],
            correct: 1,
        },
        {
            id: 'rp6',
            question: 'Zmiana "today" w mowie zależnej:',
            options: ['that day', 'yesterday', 'tomorrow'],
            correct: 0,
        },
        {
            id: 'rp7',
            question: 'He says: "I have finished." → He says (that) he ___.',
            options: ['had finished', 'has finished', 'finished'],
            correct: 1,
        },
        {
            id: 'rp8',
            question: 'Could you tell me what time ___?',
            options: ['does the shop open', 'the shop opens', 'opens the shop'],
            correct: 1,
        },
        {
            id: 'rp9',
            question: 'She says: "I will call you." → She says (that) she ___ call me.',
            options: ['would', 'will', 'should'],
            correct: 1,
        },
        {
            id: 'rp10',
            question: 'Zmiana "this" na "that" dotyczy:',
            options: ['zaimków wskazujących', 'czasów', 'szyku zdania'],
            correct: 0,
        },
    ],

    'reported-present-practice-15': [
        {
            id: 'rpp1',
            question: 'John says: "I like pizza." → John says (that) ___ pizza.',
            options: ['he likes', 'he liked', 'he like'],
            correct: 0,
        },
        {
            id: 'rpp2',
            question: 'She says: "We are studying." → She says (that) ___ studying.',
            options: ['they are', 'we are', 'they were'],
            correct: 0,
        },
        {
            id: 'rpp3',
            question: 'They say: "We have completed the project." → They say (that) ___ completed the project.',
            options: ['they have', 'they had', 'we have'],
            correct: 0,
        },
        {
            id: 'rpp4',
            question: 'He says: "I can help you tomorrow." → He says (that) ___ help me tomorrow.',
            options: ['he can', 'he could', 'I can'],
            correct: 0,
        },
        {
            id: 'rpp5',
            question: 'Mary says: "I will be there at 5." → Mary says (that) ___ there at 5.',
            options: ['she will be', 'she would be', 'I will be'],
            correct: 0,
        },
        {
            id: 'rpp6',
            question: 'The teacher says: "The exam is next week." → The teacher says (that) the exam ___.',
            options: ['was next week', 'is next week', 'will be next week'],
            correct: 1,
        },
        {
            id: 'rpp7',
            question: 'He says: "I don\'t understand this question." → He says (that) ___ that question.',
            options: ['he doesn\'t understand', 'he didn\'t understand', 'I don\'t understand'],
            correct: 0,
        },
        {
            id: 'rpp8',
            question: 'She says: "My parents are visiting me." → She says (that) ___ parents ___ visiting ___.',
            options: ['her...are...her', 'my...are...me', 'their...are...them'],
            correct: 0,
        },
        {
            id: 'rpp9',
            question: 'They say: "We have been waiting for hours." → They say (that) ___ for hours.',
            options: ['they have been waiting', 'they had been waiting', 'we have been waiting'],
            correct: 0,
        },
        {
            id: 'rpp10',
            question: 'He says: "I need to finish this today." → He says (that) ___ to finish that ___.',
            options: ['he needs...today', 'he needed...that day', 'he needs...that day'],
            correct: 2,
        },
        {
            id: 'rpp11',
            question: 'She says: "I am meeting them here." → She says (that) ___ meeting them ___.',
            options: ['she is...there', 'she was...here', 'I am...there'],
            correct: 0,
        },
        {
            id: 'rpp12',
            question: 'The boss says: "You should work harder." → The boss says (that) ___ should work harder.',
            options: ['I', 'you', 'he'],
            correct: 0,
        },
        {
            id: 'rpp13',
            question: 'He says: "I have never been to Paris." → He says (that) ___ never been to Paris.',
            options: ['he has', 'he had', 'I have'],
            correct: 0,
        },
        {
            id: 'rpp14',
            question: 'She says: "We are going to the cinema tonight." → She says (that) ___ going to the cinema ___.',
            options: ['they are...tonight', 'they are...that night', 'we are...tonight'],
            correct: 1,
        },
        {
            id: 'rpp15',
            question: 'They say: "This is our final decision." → They say (that) ___ their final decision.',
            options: ['this is', 'that is', 'it is'],
            correct: 1,
        },
    ],

    'reported-present-advanced-12': [
        {
            id: 'rpa1',
            question: 'The CEO states: "Our company is expanding into new markets this quarter." → The CEO states (that) ___ company ___ into new markets ___.',
            options: ['their...is expanding...this quarter', 'their...is expanding...that quarter', 'our...is expanding...this quarter'],
            correct: 1,
        },
        {
            id: 'rpa2',
            question: 'She explains: "I have been working on this project since January." → She explains (that) ___ on that project since January.',
            options: ['she has been working', 'she had been working', 'I have been working'],
            correct: 0,
        },
        {
            id: 'rpa3',
            question: 'The director announces: "We will be implementing these changes immediately." → The director announces (that) ___ those changes immediately.',
            options: ['they will be implementing', 'they would be implementing', 'we will be implementing'],
            correct: 0,
        },
        {
            id: 'rpa4',
            question: 'He claims: "I have already completed all the required documentation." → He claims (that) ___ already ___ all the required documentation.',
            options: ['he has...completed', 'he had...completed', 'I have...completed'],
            correct: 0,
        },
        {
            id: 'rpa5',
            question: 'The manager confirms: "The meeting is scheduled for next Monday here." → The manager confirms (that) the meeting ___ for the following Monday ___.',
            options: ['was scheduled...here', 'is scheduled...there', 'will be scheduled...there'],
            correct: 1,
        },
        {
            id: 'rpa6',
            question: 'She insists: "I am not responsible for these errors." → She insists (that) ___ responsible for ___ errors.',
            options: ['she is not...those', 'I am not...these', 'she was not...those'],
            correct: 0,
        },
        {
            id: 'rpa7',
            question: 'The expert testifies: "These findings are consistent with our previous research." → The expert testifies (that) ___ findings ___ consistent with ___ previous research.',
            options: ['these...are...our', 'those...are...their', 'these...were...our'],
            correct: 1,
        },
        {
            id: 'rpa8',
            question: 'He admits: "I may have overlooked some important details in this report." → He admits (that) ___ some important details in that report.',
            options: ['he may have overlooked', 'he might have overlooked', 'I may have overlooked'],
            correct: 0,
        },
        {
            id: 'rpa9',
            question: 'The spokesperson declares: "We stand by our decision despite these criticisms." → The spokesperson declares (that) ___ by ___ decision despite ___ criticisms.',
            options: ['they stand...their...those', 'we stand...our...these', 'they stood...their...those'],
            correct: 0,
        },
        {
            id: 'rpa10',
            question: 'She reveals: "I have been considering this opportunity for several weeks now." → She reveals (that) ___ that opportunity for several weeks ___.',
            options: ['she has been considering...then', 'she had been considering...now', 'I have been considering...then'],
            correct: 0,
        },
        {
            id: 'rpa11',
            question: 'The chairman asserts: "Our position on this matter remains unchanged." → The chairman asserts (that) ___ position on ___ matter remains unchanged.',
            options: ['their...that', 'our...this', 'their...this'],
            correct: 0,
        },
        {
            id: 'rpa12',
            question: 'He confirms: "The board will review these proposals at our next meeting." → He confirms (that) the board ___ at ___ next meeting.',
            options: ['will review those proposals...their', 'would review these proposals...our', 'will review these proposals...their'],
            correct: 0,
        },
    ],

    'reported-past-backshift': [
        {
            id: 'rs1',
            question: 'He said: "I like it." → He said (that) he ___ it.',
            options: ['likes', 'liked', 'had liked'],
            correct: 1,
        },
        {
            id: 'rs2',
            question: 'She said: "I have finished." → She said she ___ finished.',
            options: ['has', 'had', 'have'],
            correct: 1,
        },
        {
            id: 'rs3',
            question: '"We will call." → They said they ___ call.',
            options: ['would', 'will', 'should'],
            correct: 0,
        },
        {
            id: 'rs4',
            question: 'He said: "I am working." → He said (that) he ___.',
            options: ['is working', 'was working', 'had been working'],
            correct: 1,
        },
        {
            id: 'rs5',
            question: 'She said: "I can help you." → She said (that) she ___ help me.',
            options: ['can', 'could', 'would'],
            correct: 1,
        },
        {
            id: 'rs6',
            question: 'They said: "We have been waiting." → They said (that) they ___.',
            options: ['have been waiting', 'had been waiting', 'were waiting'],
            correct: 1,
        },
        {
            id: 'rs7',
            question: 'Backshift: Present Simple →',
            options: ['Past Simple', 'Past Perfect', 'Present Perfect'],
            correct: 0,
        },
        {
            id: 'rs8',
            question: 'He said: "I will come tomorrow." → He said (that) he ___ the next day.',
            options: ['will come', 'would come', 'comes'],
            correct: 1,
        },
        {
            id: 'rs9',
            question: 'She said: "I was sleeping." → She said (that) she ___.',
            options: ['was sleeping', 'had been sleeping', 'is sleeping'],
            correct: 1,
        },
        {
            id: 'rs10',
            question: 'Backshift obowiązuje gdy czasownik wprowadzający jest w:',
            options: ['czasie przeszłym', 'czasie teraźniejszym', 'czasie przyszłym'],
            correct: 0,
        },
    ],

        'past-perfect-exceptions': [
            {
                id: 'ppe1',
                question: 'Kiedy NIE zmieniamy Past Simple na Past Perfect w mowie zależnej?',
                options: ['Gdy kolejność zdarzeń jest jasna z kontekstu', 'Zawsze zmieniamy', 'Tylko w zdaniach przeczących'],
                correct: 0,
            },
            {
                id: 'ppe2',
                question: 'He said: "I was born in 1990." → He said (that) he ___ in 1990.',
                options: ['had been born', 'was born', 'has been born'],
                correct: 1,
            },
            {
                id: 'ppe3',
                question: 'She said: "When I was young, I played football every day." → She said (that) when she was young, she ___ football every day.',
                options: ['had played', 'played', 'was playing'],
                correct: 1,
            },
            {
                id: 'ppe4',
                question: 'Które zdanie jest POPRAWNE jako wyjątek od backshift?',
                options: ['He said that the Earth revolves around the sun.', 'He said that the Earth revolved around the sun.', 'He said that the Earth had revolved around the sun.'],
                correct: 0,
            },
            {
                id: 'ppe5',
                question: 'They said: "We finished work and then went home." → They said (that) they ___ work and then ___ home.',
                options: ['had finished...went', 'finished...went', 'finished...had gone'],
                correct: 1,
            },
            {
                id: 'ppe6',
                question: 'W którym przypadku NIE stosujemy Past Perfect?',
                options: ['Gdy mówimy o konkretnych datach z przeszłości', 'Gdy opisujemy czynność wcześniejszą', 'Gdy używamy czasu Past Perfect Continuous'],
                correct: 0,
            },
            {
                id: 'ppe7',
                question: 'He said: "I lived in London for five years." (ale już nie mieszka) → He said (that) he ___ in London for five years.',
                options: ['had lived', 'lived', 'has lived'],
                correct: 1,
            },
            {
                id: 'ppe8',
                question: 'She said: "I had already eaten when they arrived." → She said (that) she ___ already ___ when they arrived.',
                options: ['had...eaten', 'has...eaten', 'ate'],
                correct: 0,
            },
            {
                id: 'ppe9',
                question: 'Które zdanie przedstawia wyjątek od reguły backshift?',
                options: ['He said he works here. (nadal tu pracuje)', 'He said he worked here. (już nie pracuje)', 'He said he had worked here.'],
                correct: 0,
            },
            {
                id: 'ppe10',
                question: 'They said: "We used to go to the beach every summer." → They said (that) they ___ to go to the beach every summer.',
                options: ['used', 'had used', 'were used'],
                correct: 0,
            },
        ],

        'reported-past-practice-15': [
            {
                id: 'rpp1',
                question: 'He said: "I am working now." → He said (that) he ___.',
                options: ['was working then', 'is working now', 'had been working'],
                correct: 0,
            },
            {
                id: 'rpp2',
                question: 'She said: "We have completed the project." → She said (that) they ___.',
                options: ['have completed the project', 'had completed the project', 'completed the project'],
                correct: 1,
            },
            {
                id: 'rpp3',
                question: 'They said: "We will call you tomorrow." → They said (that) they ___ me ___.',
                options: ['would call...the next day', 'will call...tomorrow', 'called...the day before'],
                correct: 0,
            },
            {
                id: 'rpp4',
                question: 'He said: "I can help you today." → He said (that) he ___ me ___.',
                options: ['can help...today', 'could help...that day', 'helped...that day'],
                correct: 1,
            },
            {
                id: 'rpp5',
                question: 'She said: "I was sleeping when you called." → She said (that) she ___ when I ___.',
                options: ['had been sleeping...called', 'was sleeping...had called', 'slept...called'],
                correct: 0,
            },
            {
                id: 'rpp6',
                question: 'They said: "We have been waiting for hours." → They said (that) they ___ for hours.',
                options: ['have been waiting', 'had been waiting', 'were waiting'],
                correct: 1,
            },
            {
                id: 'rpp7',
                question: 'He said: "I bought this car last year." → He said (that) he ___ that car ___.',
                options: ['bought...last year', 'had bought...the year before', 'bought...the year before'],
                correct: 1,
            },
            {
                id: 'rpp8',
                question: 'She said: "I may come later." → She said (that) she ___ later.',
                options: ['may come', 'might come', 'came'],
                correct: 1,
            },
            {
                id: 'rpp9',
                question: 'They said: "We are meeting here tomorrow." → They said (that) they ___ there ___.',
                options: ['were meeting...the next day', 'are meeting...tomorrow', 'met...the day before'],
                correct: 0,
            },
            {
                id: 'rpp10',
                question: 'He said: "I must finish this today." → He said (that) he ___ that ___.',
                options: ['must finish...today', 'had to finish...that day', 'must finished...that day'],
                correct: 1,
            },
            {
                id: 'rpp11',
                question: 'She said: "I had already left when he arrived." → She said (that) she ___ already ___ when he arrived.',
                options: ['had...left', 'has...left', 'left'],
                correct: 0,
            },
            {
                id: 'rpp12',
                question: 'They said: "We could help you yesterday." → They said (that) they ___ me ___.',
                options: ['could help...yesterday', 'could have helped...the day before', 'can help...that day'],
                correct: 1,
            },
            {
                id: 'rpp13',
                question: 'He said: "I shall return next week." → He said (that) he ___ ___.',
                options: ['shall return...next week', 'should return...the next week', 'would return...the following week'],
                correct: 2,
            },
            {
                id: 'rpp14',
                question: 'She said: "We were playing tennis at 5 PM." → She said (that) they ___ tennis at 5 PM.',
                options: ['were playing', 'had been playing', 'played'],
                correct: 0,
            },
            {
                id: 'rpp15',
                question: 'They said: "This is our final decision." → They said (that) ___ their final decision.',
                options: ['this was', 'that was', 'it is'],
                correct: 1,
            },
        ],

        'reported-past-advanced-12': [
            {
                id: 'rpa1',
                question: 'The CEO announced: "Our company has been developing this technology since 2020." → The CEO announced (that) ___ company ___ that technology since 2020.',
                options: ['their...had been developing', 'our...has been developing', 'their...has been developing'],
                correct: 0,
            },
            {
                id: 'rpa2',
                question: 'She confessed: "I had never seen such a beautiful sunset before that day." → She confessed (that) ___ such a beautiful sunset before that day.',
                options: ['she had never seen', 'she never saw', 'I had never seen'],
                correct: 0,
            },
            {
                id: 'rpa3',
                question: 'The director explained: "We will have completed the renovations by next month." → The director explained (that) ___ the renovations by the following month.',
                options: ['they would have completed', 'they will have completed', 'we would have completed'],
                correct: 0,
            },
            {
                id: 'rpa4',
                question: 'He admitted: "I was considering resigning when the new opportunity arose." → He admitted (that) ___ resigning when the new opportunity ___.',
                options: ['he had been considering...arose', 'he was considering...had arisen', 'I was considering...arose'],
                correct: 1,
            },
            {
                id: 'rpa5',
                question: 'The manager revealed: "The team had been working on the prototype for months before the presentation." → The manager revealed (that) the team ___ on the prototype for months before the presentation.',
                options: ['had been working', 'has been working', 'was working'],
                correct: 0,
            },
            {
                id: 'rpa6',
                question: 'She stated: "By the time you arrive, we will have finished all preparations." → She stated (that) by the time I arrived, ___ all preparations.',
                options: ['they would have finished', 'we will have finished', 'they will have finished'],
                correct: 0,
            },
            {
                id: 'rpa7',
                question: 'The expert testified: "The research had yielded significant results long before the publication." → The expert testified (that) the research ___ significant results long before the publication.',
                options: ['had yielded', 'has yielded', 'yielded'],
                correct: 0,
            },
            {
                id: 'rpa8',
                question: 'He claimed: "I would have accepted the offer if the conditions had been better." → He claimed (that) ___ the offer if the conditions ___.',
                options: ['he would have accepted...had been better', 'he would accept...were better', 'I would have accepted...had been better'],
                correct: 0,
            },
            {
                id: 'rpa9',
                question: 'The spokesperson declared: "We had already implemented the changes when the audit took place." → The spokesperson declared (that) ___ the changes when the audit ___.',
                options: ['they had already implemented...took place', 'we had already implemented...had taken place', 'they have already implemented...took place'],
                correct: 0,
            },
            {
                id: 'rpa10',
                question: 'She recalled: "I had been hoping for a promotion for years before it finally happened." → She recalled (that) ___ for a promotion for years before it finally happened.',
                options: ['she had been hoping', 'she has been hoping', 'I had been hoping'],
                correct: 0,
            },
            {
                id: 'rpa11',
                question: 'The chairman asserted: "The board would have approved the budget if the numbers had been clearer." → The chairman asserted (that) the board ___ the budget if the numbers ___.',
                options: ['would have approved...had been clearer', 'will approve...are clearer', 'would approve...were clearer'],
                correct: 0,
            },
            {
                id: 'rpa12',
                question: 'He confirmed: "The system had been functioning perfectly until the power outage occurred." → He confirmed (that) the system ___ perfectly until the power outage ___.',
                options: ['had been functioning...occurred', 'has been functioning...had occurred', 'was functioning...occurred'],
                correct: 0,
            },
        ],

        'reported-questions': [
            {
                id: 'rq1',
                question: 'She asked: "Are you coming?" → She asked ___.',
                options: ['if I was coming', 'was I coming', 'if I am coming'],
                correct: 0,
            },
            {
                id: 'rq2',
                question: 'He asked: "Where do you live?" → He asked ___.',
                options: ['where I lived', 'where did I live', 'where do I live'],
                correct: 0,
            },
            {
                id: 'rq3',
                question: 'They asked: "What time will you arrive?" → They asked ___.',
                options: ['what time I would arrive', 'what time will I arrive', 'what time would I arrive'],
                correct: 0,
            },
            {
                id: 'rq4',
                question: 'She asked: "Have you finished your work?" → She asked ___.',
                options: ['if I had finished my work', 'have I finished my work', 'if I finished my work'],
                correct: 0,
            },
            {
                id: 'rq5',
                question: 'He asked: "Why are you crying?" → He asked ___.',
                options: ['why I was crying', 'why was I crying', 'why I am crying'],
                correct: 0,
            },
            {
                id: 'rq6',
                question: 'Które zdanie jest poprawne?',
                options: ['She asked where the station was.', 'She asked where was the station.', 'She asked where is the station.'],
                correct: 0,
            },
            {
                id: 'rq7',
                question: 'They asked: "Can you help us?" → They asked ___.',
                options: ['if I could help them', 'could I help them', 'if I can help them'],
                correct: 0,
            },
            {
                id: 'rq8',
                question: 'She asked: "How long have you been waiting?" → She asked ___.',
                options: ['how long I had been waiting', 'how long have I been waiting', 'how long had I been waiting'],
                correct: 0,
            },
            {
                id: 'rq9',
                question: 'He asked: "Did you see that movie?" → He asked ___.',
                options: ['if I had seen that movie', 'did I see that movie', 'if I saw that movie'],
                correct: 0,
            },
            {
                id: 'rq10',
                question: 'W pytaniach w mowie zależnej używamy:',
                options: ['szyku zdania twierdzącego', 'szyku zdania pytającego', 'inwersji'],
                correct: 0,
            },
        ],

        'reported-questions-practice-15': [
            {
                id: 'rqp1',
                question: 'She asked: "Do you like coffee?" → She asked ___.',
                options: ['if I liked coffee', 'did I like coffee', 'do I like coffee'],
                correct: 0,
            },
            {
                id: 'rqp2',
                question: 'He asked: "Where are you going?" → He asked ___.',
                options: ['where I was going', 'where was I going', 'where am I going'],
                correct: 0,
            },
            {
                id: 'rqp3',
                question: 'They asked: "When will the meeting start?" → They asked ___.',
                options: ['when the meeting would start', 'when would the meeting start', 'when will the meeting start'],
                correct: 0,
            },
            {
                id: 'rqp4',
                question: 'She asked: "Have you visited Paris?" → She asked ___.',
                options: ['if I had visited Paris', 'have I visited Paris', 'if I visited Paris'],
                correct: 0,
            },
            {
                id: 'rqp5',
                question: 'He asked: "Why did you leave early?" → He asked ___.',
                options: ['why I had left early', 'why did I leave early', 'why I left early'],
                correct: 0,
            },
            {
                id: 'rqp6',
                question: 'They asked: "What were you doing at 8 PM?" → They asked ___.',
                options: ['what I had been doing at 8 PM', 'what I was doing at 8 PM', 'what was I doing at 8 PM'],
                correct: 1,
            },
            {
                id: 'rqp7',
                question: 'She asked: "Can you speak French?" → She asked ___.',
                options: ['if I could speak French', 'can I speak French', 'could I speak French'],
                correct: 0,
            },
            {
                id: 'rqp8',
                question: 'He asked: "How much does it cost?" → He asked ___.',
                options: ['how much it cost', 'how much did it cost', 'how much it costs'],
                correct: 0,
            },
            {
                id: 'rqp9',
                question: 'They asked: "Who is your favorite author?" → They asked ___.',
                options: ['who my favorite author was', 'who was my favorite author', 'who is my favorite author'],
                correct: 0,
            },
            {
                id: 'rqp10',
                question: 'She asked: "Are you feeling better?" → She asked ___.',
                options: ['if I was feeling better', 'was I feeling better', 'if I am feeling better'],
                correct: 0,
            },
            {
                id: 'rqp11',
                question: 'He asked: "Where have you been?" → He asked ___.',
                options: ['where I had been', 'where have I been', 'where had I been'],
                correct: 0,
            },
            {
                id: 'rqp12',
                question: 'They asked: "Will you be attending the conference?" → They asked ___.',
                options: ['if I would be attending the conference', 'will I be attending the conference', 'would I be attending the conference'],
                correct: 0,
            },
            {
                id: 'rqp13',
                question: 'She asked: "What time does the train arrive?" → She asked ___.',
                options: ['what time the train arrived', 'what time did the train arrive', 'what time the train arrives'],
                correct: 0,
            },
            {
                id: 'rqp14',
                question: 'He asked: "Have you finished the report yet?" → He asked ___.',
                options: ['if I had finished the report yet', 'have I finished the report yet', 'if I finished the report yet'],
                correct: 0,
            },
            {
                id: 'rqp15',
                question: 'They asked: "Why weren\'t you at the meeting?" → They asked ___.',
                options: ['why I hadn\'t been at the meeting', 'why wasn\'t I at the meeting', 'why I wasn\'t at the meeting'],
                correct: 0,
            },
        ],

        'reported-commands-practice-15': [
            {
                id: 'rc1',
                question: 'He said: "Close the door." → He told me ___.',
                options: ['to close the door', 'close the door', 'that I close the door'],
                correct: 0,
            },
            {
                id: 'rc2',
                question: 'She said: "Please don\'t be late." → She asked me ___.',
                options: ['not to be late', 'to not be late', 'don\'t be late'],
                correct: 0,
            },
            {
                id: 'rc3',
                question: 'They said: "Stop making noise!" → They told us ___.',
                options: ['to stop making noise', 'stop making noise', 'that we stop making noise'],
                correct: 0,
            },
            {
                id: 'rc4',
                question: 'He said: "Could you open the window, please?" → He asked me ___.',
                options: ['to open the window', 'if I could open the window', 'open the window'],
                correct: 0,
            },
            {
                id: 'rc5',
                question: 'She said: "Don\'t forget to call me." → She reminded me ___.',
                options: ['not to forget to call her', 'to not forget to call her', 'don\'t forget to call me'],
                correct: 0,
            },
            {
                id: 'rc6',
                question: 'The teacher said: "Do your homework." → The teacher told the students ___.',
                options: ['to do their homework', 'do your homework', 'that they do their homework'],
                correct: 0,
            },
            {
                id: 'rc7',
                question: 'He said: "Please help me with this." → He begged me ___.',
                options: ['to help him with that', 'help me with this', 'that I help him with that'],
                correct: 0,
            },
            {
                id: 'rc8',
                question: 'She said: "Never give up!" → She encouraged me ___.',
                options: ['never to give up', 'to never give up', 'never give up'],
                correct: 0,
            },
            {
                id: 'rc9',
                question: 'They said: "Let\'s go to the cinema." → They suggested ___.',
                options: ['going to the cinema', 'to go to the cinema', 'that we go to the cinema'],
                correct: 0,
            },
            {
                id: 'rc10',
                question: 'He said: "You should see a doctor." → He advised me ___.',
                options: ['to see a doctor', 'that I should see a doctor', 'see a doctor'],
                correct: 0,
            },
            {
                id: 'rc11',
                question: 'She said: "Don\'t touch that!" → She warned me ___.',
                options: ['not to touch that', 'to not touch that', 'don\'t touch that'],
                correct: 0,
            },
            {
                id: 'rc12',
                question: 'They said: "Please wait here." → They instructed us ___.',
                options: ['to wait there', 'wait here', 'that we wait there'],
                correct: 0,
            },
            {
                id: 'rc13',
                question: 'He said: "You must finish this today." → He ordered me ___.',
                options: ['to finish that that day', 'finish this today', 'that I must finish that that day'],
                correct: 0,
            },
            {
                id: 'rc14',
                question: 'She said: "Could you possibly lend me some money?" → She politely asked me ___.',
                options: ['to lend her some money', 'if I could possibly lend her some money', 'lend me some money'],
                correct: 0,
            },
            {
                id: 'rc15',
                question: 'They said: "Let me help you with that." → They offered ___.',
                options: ['to help me with that', 'that they help me with that', 'help me with that'],
                correct: 0,
            },
        ],

        'reported-questions-advanced-12': [
            {
                id: 'rqa1',
                question: 'The interviewer inquired: "To what extent has this research influenced current practices in your field?" → The interviewer inquired ___.',
                options: ['to what extent that research had influenced current practices in their field', 'to what extent has this research influenced current practices in your field', 'to what extent this research had influenced current practices in their field'],
                correct: 0,
            },
            {
                id: 'rqa2',
                question: 'The committee asked: "What measures would you implement should such a situation arise in the future?" → The committee asked ___.',
                options: ['what measures I would implement should such a situation arise in the future', 'what measures would I implement should such a situation arise in the future', 'what measures I will implement if such a situation arises in the future'],
                correct: 0,
            },
            {
                id: 'rqa3',
                question: 'She wondered: "Had the team considered all possible contingencies before proceeding with the implementation?" → She wondered ___.',
                options: ['whether the team had considered all possible contingencies before proceeding with the implementation', 'had the team considered all possible contingencies before proceeding with the implementation', 'if the team considered all possible contingencies before proceeding with the implementation'],
                correct: 0,
            },
            {
                id: 'rqa4',
                question: 'He questioned: "Under what circumstances would such an approach be deemed acceptable by the regulatory bodies?" → He questioned ___.',
                options: ['under what circumstances such an approach would be deemed acceptable by the regulatory bodies', 'under what circumstances would such an approach be deemed acceptable by the regulatory bodies', 'under what circumstances such an approach will be deemed acceptable by the regulatory bodies'],
                correct: 0,
            },
            {
                id: 'rqa5',
                question: 'They inquired: "To whom should the report be submitted once the final revisions have been completed?" → They inquired ___.',
                options: ['to whom the report should be submitted once the final revisions had been completed', 'to whom should the report be submitted once the final revisions have been completed', 'to whom the report should be submitted once the final revisions have been completed'],
                correct: 0,
            },
            {
                id: 'rqa6',
                question: 'The auditor asked: "Had the financial discrepancies been identified during the previous quarter\'s review?" → The auditor asked ___.',
                options: ['whether the financial discrepancies had been identified during the previous quarter\'s review', 'had the financial discrepancies been identified during the previous quarter\'s review', 'if the financial discrepancies were identified during the previous quarter\'s review'],
                correct: 0,
            },
            {
                id: 'rqa7',
                question: 'She questioned: "What rationale underlay the decision to proceed despite the evident risks?" → She questioned ___.',
                options: ['what rationale had underlain the decision to proceed despite the evident risks', 'what rationale underlay the decision to proceed despite the evident risks', 'what rationale underlies the decision to proceed despite the evident risks'],
                correct: 0,
            },
            {
                id: 'rqa8',
                question: 'He wondered: "How might the outcomes have differed had alternative methodologies been employed?" → He wondered ___.',
                options: ['how the outcomes might have differed had alternative methodologies been employed', 'how might the outcomes have differed had alternative methodologies been employed', 'how the outcomes might differ if alternative methodologies were employed'],
                correct: 0,
            },
            {
                id: 'rqa9',
                question: 'They inquired: "To what degree were external factors taken into consideration during the planning phase?" → They inquired ___.',
                options: ['to what degree external factors had been taken into consideration during the planning phase', 'to what degree were external factors taken into consideration during the planning phase', 'to what degree external factors were taken into consideration during the planning phase'],
                correct: 0,
            },
            {
                id: 'rqa10',
                question: 'The panel asked: "What assurances can be provided regarding the long-term sustainability of these initiatives?" → The panel asked ___.',
                options: ['what assurances could be provided regarding the long-term sustainability of those initiatives', 'what assurances can be provided regarding the long-term sustainability of these initiatives', 'what assurances could be provided regarding the long-term sustainability of these initiatives'],
                correct: 0,
            },
            {
                id: 'rqa11',
                question: 'She questioned: "Had there been any prior indications that such complications might arise during the execution phase?" → She questioned ___.',
                options: ['whether there had been any prior indications that such complications might arise during the execution phase', 'had there been any prior indications that such complications might arise during the execution phase', 'if there were any prior indications that such complications might arise during the execution phase'],
                correct: 0,
            },
            {
                id: 'rqa12',
                question: 'He inquired: "Under which specific provisions of the agreement would such actions be considered permissible?" → He inquired ___.',
                options: ['under which specific provisions of the agreement such actions would be considered permissible', 'under which specific provisions of the agreement would such actions be considered permissible', 'under which specific provisions of the agreement such actions will be considered permissible'],
                correct: 0,
            },
        ],

        'reported-modals': [
            {
                id: 'rm1',
                question: 'She said: "I can help you." → She said (that) she ___ help me.',
                options: ['can', 'could', 'would'],
                correct: 1,
            },
            {
                id: 'rm2',
                question: 'He said: "I will call you." → He said (that) he ___ call me.',
                options: ['will', 'would', 'should'],
                correct: 1,
            },
            {
                id: 'rm3',
                question: 'They said: "We may be late." → They said (that) they ___ be late.',
                options: ['may', 'might', 'could'],
                correct: 1,
            },
            {
                id: 'rm4',
                question: 'She said: "I must finish this." → She said (that) she ___ finish that.',
                options: ['must', 'had to', 'has to'],
                correct: 1,
            },
            {
                id: 'rm5',
                question: 'He said: "You should rest." → He said (that) I ___ rest.',
                options: ['should', 'shall', 'would'],
                correct: 0,
            },
            {
                id: 'rm6',
                question: 'Który czasownik modalny NIE zmienia się w mowie zależnej?',
                options: ['could', 'might', 'will'],
                correct: 0,
            },
            {
                id: 'rm7',
                question: 'She said: "I shall return." → She said (that) she ___.',
                options: ['should return', 'would return', 'shall return'],
                correct: 1,
            },
            {
                id: 'rm8',
                question: 'He said: "I ought to help." → He said (that) he ___ help.',
                options: ['ought to', 'should', 'had to'],
                correct: 0,
            },
            {
                id: 'rm9',
                question: 'They said: "We need to leave." → They said (that) they ___ to leave.',
                options: ['needed', 'need', 'had needed'],
                correct: 0,
            },
            {
                id: 'rm10',
                question: 'Czasownik "must" w znaczeniu "wnioskowanie":',
                options: ['nie zmienia się', 'zmienia się na "had to"', 'zmienia się na "would have to"'],
                correct: 0,
            },
        ],

        'reported-modals-practice-15': [
            {
                id: 'rmp1',
                question: 'She said: "I can speak three languages." → She said (that) she ___ three languages.',
                options: ['could speak', 'can speak', 'speaks'],
                correct: 0,
            },
            {
                id: 'rmp2',
                question: 'He said: "We will arrive at 8 PM." → He said (that) they ___ at 8 PM.',
                options: ['would arrive', 'will arrive', 'arrived'],
                correct: 0,
            },
            {
                id: 'rmp3',
                question: 'They said: "You may use my computer." → They said (that) I ___ their computer.',
                options: ['might use', 'may use', 'could use'],
                correct: 0,
            },
            {
                id: 'rmp4',
                question: 'She said: "I must finish this report today." → She said (that) she ___ that report that day.',
                options: ['had to finish', 'must finish', 'has to finish'],
                correct: 0,
            },
            {
                id: 'rmp5',
                question: 'He said: "You should see a doctor." → He said (that) I ___ a doctor.',
                options: ['should see', 'shall see', 'would see'],
                correct: 0,
            },
            {
                id: 'rmp6',
                question: 'They said: "We could help you tomorrow." → They said (that) they ___ me the next day.',
                options: ['could help', 'can help', 'helped'],
                correct: 0,
            },
            {
                id: 'rmp7',
                question: 'She said: "I would like some coffee." → She said (that) she ___ some coffee.',
                options: ['would like', 'will like', 'liked'],
                correct: 0,
            },
            {
                id: 'rmp8',
                question: 'He said: "You must be tired." (wnioskowanie) → He said (that) I ___ tired.',
                options: ['must be', 'had to be', 'should be'],
                correct: 0,
            },
            {
                id: 'rmp9',
                question: 'They said: "We need to buy groceries." → They said (that) they ___ to buy groceries.',
                options: ['needed', 'need', 'had needed'],
                correct: 0,
            },
            {
                id: 'rmp10',
                question: 'She said: "I shall consider your proposal." → She said (that) she ___ my proposal.',
                options: ['would consider', 'should consider', 'shall consider'],
                correct: 0,
            },
            {
                id: 'rmp11',
                question: 'He said: "You ought to apologize." → He said (that) I ___.',
                options: ['ought to apologize', 'should apologize', 'had to apologize'],
                correct: 0,
            },
            {
                id: 'rmp12',
                question: 'They said: "We might visit Paris." → They said (that) they ___ Paris.',
                options: ['might visit', 'may visit', 'visited'],
                correct: 0,
            },
            {
                id: 'rmp13',
                question: 'She said: "I can\'t attend the meeting." → She said (that) she ___ the meeting.',
                options: ['couldn\'t attend', 'can\'t attend', 'didn\'t attend'],
                correct: 0,
            },
            {
                id: 'rmp14',
                question: 'He said: "We won\'t be able to come." → He said (that) they ___ able to come.',
                options: ['wouldn\'t be', 'won\'t be', 'weren\'t'],
                correct: 0,
            },
            {
                id: 'rmp15',
                question: 'They said: "You mustn\'t tell anyone." → They said (that) I ___ anyone.',
                options: ['mustn\'t tell', 'shouldn\'t tell', 'couldn\'t tell'],
                correct: 0,
            },
        ],

        'reported-modals-advanced-12': [
            {
                id: 'rma1',
                question: 'The CEO stated: "We must have overlooked some crucial details in the initial assessment." → The CEO stated (that) they ___ some crucial details in the initial assessment.',
                options: ['must have overlooked', 'had to have overlooked', 'should have overlooked'],
                correct: 0,
            },
            {
                id: 'rma2',
                question: 'She admitted: "I should have consulted the team before making such a significant decision." → She admitted (that) she ___ the team before making such a significant decision.',
                options: ['should have consulted', 'ought to have consulted', 'must have consulted'],
                correct: 0,
            },
            {
                id: 'rma3',
                question: 'The director explained: "The project would have been completed on time had the funding been approved earlier." → The director explained (that) the project ___ on time had the funding been approved earlier.',
                options: ['would have been completed', 'will have been completed', 'should have been completed'],
                correct: 0,
            },
            {
                id: 'rma4',
                question: 'He confessed: "I could have prevented the incident if I had been more vigilant." → He confessed (that) he ___ the incident if he had been more vigilant.',
                options: ['could have prevented', 'can have prevented', 'might prevent'],
                correct: 0,
            },
            {
                id: 'rma5',
                question: 'The expert testified: "The results might have been different under controlled laboratory conditions." → The expert testified (that) the results ___ under controlled laboratory conditions.',
                options: ['might have been different', 'may have been different', 'could be different'],
                correct: 0,
            },
            {
                id: 'rma6',
                question: 'She revealed: "I would have accepted the position had the terms been more favorable." → She revealed (that) she ___ the position had the terms been more favorable.',
                options: ['would have accepted', 'will have accepted', 'should have accepted'],
                correct: 0,
            },
            {
                id: 'rma7',
                question: 'The manager acknowledged: "We ought to have implemented stricter security measures from the outset." → The manager acknowledged (that) they ___ stricter security measures from the outset.',
                options: ['ought to have implemented', 'should have implemented', 'must have implemented'],
                correct: 0,
            },
            {
                id: 'rma8',
                question: 'He speculated: "The system must have been compromised during the maintenance window." → He speculated (that) the system ___ during the maintenance window.',
                options: ['must have been compromised', 'had to have been compromised', 'should have been compromised'],
                correct: 0,
            },
            {
                id: 'rma9',
                question: 'The analyst concluded: "The market could not have responded positively to such ambiguous signals." → The analyst concluded (that) the market ___ positively to such ambiguous signals.',
                options: ['could not have responded', 'cannot have responded', 'would not respond'],
                correct: 0,
            },
            {
                id: 'rma10',
                question: 'She contended: "I would not have undertaken such a risky venture without proper due diligence." → She contended (that) she ___ such a risky venture without proper due diligence.',
                options: ['would not have undertaken', 'will not have undertaken', 'should not have undertaken'],
                correct: 0,
            },
            {
                id: 'rma11',
                question: 'The consultant advised: "You should have diversified your investment portfolio much earlier." → The consultant advised (that) I ___ my investment portfolio much earlier.',
                options: ['should have diversified', 'ought to have diversified', 'must have diversified'],
                correct: 0,
            },
            {
                id: 'rma12',
                question: 'He maintained: "We might have achieved better results with more sophisticated analytical tools." → He maintained (that) they ___ better results with more sophisticated analytical tools.',
                options: ['might have achieved', 'may have achieved', 'could achieve'],
                correct: 0,
            },
        ],

        'reported-exceptions': [
            {
                id: 're1',
                question: 'Kiedy NIE stosujemy backshift w mowie zależnej?',
                options: ['Gdy mówimy o faktach naucznych', 'Zawsze stosujemy backshift', 'Tylko w zdaniach pytających'],
                correct: 0,
            },
            {
                id: 're2',
                question: 'He said: "The sun rises in the east." → He said (that) the sun ___ in the east.',
                options: ['rises', 'rose', 'had risen'],
                correct: 0,
            },
            {
                id: 're3',
                question: 'She said: "I work in a bank." (nadal pracuje) → She said (that) she ___ in a bank.',
                options: ['works', 'worked', 'had worked'],
                correct: 0,
            },
            {
                id: 're4',
                question: 'Które zdanie jest POPRAWNE jako wyjątek?',
                options: ['He said that water boils at 100°C.', 'He said that water boiled at 100°C.', 'He said that water had boiled at 100°C.'],
                correct: 0,
            },
            {
                id: 're5',
                question: 'They said: "We used to live in London." → They said (that) they ___ in London.',
                options: ['used to live', 'had used to live', 'were used to live'],
                correct: 0,
            },
            {
                id: 're6',
                question: 'W zdaniach warunkowych typu 2 i 3:',
                options: ['nie zmieniamy formy czasowników', 'zawsze stosujemy backshift', 'tylko zmieniamy czasy'],
                correct: 0,
            },
            {
                id: 're7',
                question: 'She said: "If I had money, I would travel." → She said (that) if she ___ money, she ___ travel.',
                options: ['had...would', 'had had...would have', 'has...will'],
                correct: 0,
            },
            {
                id: 're8',
                question: 'He said: "You had better hurry." → He said (that) I ___.',
                options: ['had better hurry', 'should hurry', 'would better hurry'],
                correct: 0,
            },
            {
                id: 're9',
                question: 'Czasownik "ought to" w mowie zależnej:',
                options: ['nie zmienia się', 'zmienia się na "should"', 'zmienia się na "had to"'],
                correct: 0,
            },
            {
                id: 're10',
                question: 'Kiedy mówimy o sytuacjach nadal aktualnych:',
                options: ['możemy nie stosować backshift', 'zawsze stosujemy backshift', 'stosujemy tylko Present Perfect'],
                correct: 0,
            },
        ],

        'reported-exceptions-practice-15': [
            {
                id: 'rep1',
                question: 'He said: "Paris is the capital of France." → He said (that) Paris ___ the capital of France.',
                options: ['is', 'was', 'had been'],
                correct: 0,
            },
            {
                id: 'rep2',
                question: 'She said: "I love chocolate." (nadal lubi) → She said (that) she ___ chocolate.',
                options: ['loves', 'loved', 'had loved'],
                correct: 0,
            },
            {
                id: 'rep3',
                question: 'They said: "The Earth revolves around the sun." → They said (that) the Earth ___ around the sun.',
                options: ['revolves', 'revolved', 'had revolved'],
                correct: 0,
            },
            {
                id: 'rep4',
                question: 'He said: "Water freezes at 0°C." → He said (that) water ___ at 0°C.',
                options: ['freezes', 'froze', 'had frozen'],
                correct: 0,
            },
            {
                id: 'rep5',
                question: 'She said: "I used to play the piano." → She said (that) she ___ the piano.',
                options: ['used to play', 'had used to play', 'was used to playing'],
                correct: 0,
            },
            {
                id: 'rep6',
                question: 'They said: "If we had time, we would visit you." → They said (that) if they ___ time, they ___ visit me.',
                options: ['had...would', 'had had...would have', 'have...will'],
                correct: 0,
            },
            {
                id: 'rep7',
                question: 'He said: "You ought to see a doctor." → He said (that) I ___ a doctor.',
                options: ['ought to see', 'should see', 'had to see'],
                correct: 0,
            },
            {
                id: 'rep8',
                question: 'She said: "I wish I had studied more." → She said (that) she wished she ___ more.',
                options: ['had studied', 'studied', 'has studied'],
                correct: 0,
            },
            {
                id: 'rep9',
                question: 'They said: "We live in Berlin." (nadal mieszkają) → They said (that) they ___ in Berlin.',
                options: ['live', 'lived', 'had lived'],
                correct: 0,
            },
            {
                id: 'rep10',
                question: 'He said: "The company is doing well this year." (sytuacja aktualna) → He said (that) the company ___ well that year.',
                options: ['was doing', 'is doing', 'had been doing'],
                correct: 0,
            },
            {
                id: 'rep11',
                question: 'She said: "If I were you, I would accept the offer." → She said (that) if she ___ me, she ___ the offer.',
                options: ['were...would accept', 'had been...would have accepted', 'was...will accept'],
                correct: 0,
            },
            {
                id: 'rep12',
                question: 'They said: "We had better leave early." → They said (that) they ___ early.',
                options: ['had better leave', 'should leave', 'would better leave'],
                correct: 0,
            },
            {
                id: 'rep13',
                question: 'He said: "Humans need oxygen to survive." → He said (that) humans ___ oxygen to survive.',
                options: ['need', 'needed', 'had needed'],
                correct: 0,
            },
            {
                id: 'rep14',
                question: 'She said: "I work from home." (nadal pracuje zdalnie) → She said (that) she ___ from home.',
                options: ['works', 'worked', 'had worked'],
                correct: 0,
            },
            {
                id: 'rep15',
                question: 'They said: "If it rains, we will cancel the picnic." → They said (that) if it ___, they ___ the picnic.',
                options: ['rained...would cancel', 'rains...will cancel', 'had rained...would have canceled'],
                correct: 0,
            },
        ],

        'reported-exceptions-advanced-12': [
            {
                id: 'rea1',
                question: 'The scientist stated: "Quantum particles can exist in multiple states simultaneously until observed." → The scientist stated (that) quantum particles ___ in multiple states simultaneously until observed.',
                options: ['can exist', 'could exist', 'existed'],
                correct: 0,
            },
            {
                id: 'rea2',
                question: 'She explained: "If I were in charge, I would implement comprehensive reforms across all departments." → She explained (that) if she ___ in charge, she ___ comprehensive reforms across all departments.',
                options: ['were...would implement', 'had been...would have implemented', 'was...will implement'],
                correct: 0,
            },
            {
                id: 'rea3',
                question: 'The historian noted: "The Roman Empire used to span most of Europe and parts of Africa and Asia." → The historian noted (that) the Roman Empire ___ most of Europe and parts of Africa and Asia.',
                options: ['used to span', 'had used to span', 'was spanning'],
                correct: 0,
            },
            {
                id: 'rea4',
                question: 'He asserted: "The laws of thermodynamics govern all energy transformations in the universe." → He asserted (that) the laws of thermodynamics ___ all energy transformations in the universe.',
                options: ['govern', 'governed', 'had governed'],
                correct: 0,
            },
            {
                id: 'rea5',
                question: 'The economist argued: "If governments printed unlimited money, hyperinflation would inevitably occur." → The economist argued (that) if governments ___ unlimited money, hyperinflation ___ inevitably occur.',
                options: ['printed...would', 'had printed...would have', 'print...will'],
                correct: 0,
            },
            {
                id: 'rea6',
                question: 'She maintained: "I work as a research scientist at the institute." (nadal pracuje) → She maintained (that) she ___ as a research scientist at the institute.',
                options: ['works', 'worked', 'had worked'],
                correct: 0,
            },
            {
                id: 'rea7',
                question: 'The philosopher contended: "Human beings ought to strive for moral perfection regardless of circumstances." → The philosopher contended (that) human beings ___ for moral perfection regardless of circumstances.',
                options: ['ought to strive', 'should strive', 'must strive'],
                correct: 0,
            },
            {
                id: 'rea8',
                question: 'He observed: "If the experiment had been conducted under ideal conditions, the results might have been different." → He observed (that) if the experiment ___ under ideal conditions, the results ___ different.',
                options: ['had been conducted...might have been', 'was conducted...might be', 'has been conducted...may have been'],
                correct: 0,
            },
            {
                id: 'rea9',
                question: 'The biologist explained: "Photosynthesis converts light energy into chemical energy in plants." → The biologist explained (that) photosynthesis ___ light energy into chemical energy in plants.',
                options: ['converts', 'converted', 'had converted'],
                correct: 0,
            },
            {
                id: 'rea10',
                question: 'She remarked: "I wish I had pursued additional qualifications earlier in my career." → She remarked (that) she wished she ___ additional qualifications earlier in her career.',
                options: ['had pursued', 'pursued', 'has pursued'],
                correct: 0,
            },
            {
                id: 'rea11',
                question: 'The researcher stated: "The speed of light in vacuum remains constant regardless of the observer\'s motion." → The researcher stated (that) the speed of light in vacuum ___ constant regardless of the observer\'s motion.',
                options: ['remains', 'remained', 'had remained'],
                correct: 0,
            },
            {
                id: 'rea12',
                question: 'He concluded: "If the hypothesis were correct, we would observe these specific phenomena in the data." → He concluded (that) if the hypothesis ___ correct, we ___ those specific phenomena in the data.',
                options: ['were...would observe', 'had been...would have observed', 'is...will observe'],
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
        return TOPICS.present.find(t => t.id === topicId)?.title ||
            TOPICS.past.find(t => t.id === topicId)?.title ||
            TOPICS['pytania-rozkazy'].find(t => t.id === topicId)?.title ||
            TOPICS['czasowniki-modalne'].find(t => t.id === topicId)?.title ||
            TOPICS['wyjatki-specjalne'].find(t => t.id === topicId)?.title
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

export default function ReportedSpeechExercises() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const active = section ?? 'present'
    const topicId = searchParams.get('topic')
    const basePath = `/cwiczenia/gramatyka/mowa-zależna/${active}`

    return (
        <main className="topic-layout">
            <div className="container">
                <header className="topic-header">
                    <h2>Ćwiczenia: Mowa zależna</h2>
                    <p className="muted">Utrwalaj zasady przekształcania mowy niezależnej na zależną</p>
                </header>

                <nav className="subnav" aria-label="Podstrony ćwiczeń: Mowa zależna">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/cwiczenia/gramatyka/mowa-zależna/${s.id}`}
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