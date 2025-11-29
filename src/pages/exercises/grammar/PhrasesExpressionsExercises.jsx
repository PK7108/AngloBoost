import React, { useMemo, useState, useEffect } from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import { useLanguage } from '../../../context/LanguageContext.jsx'
import useDocumentMeta from '../../../useDocumentMeta'
import '../../../styles/topic-cards.css'
import { useExerciseScores } from '../useExerciseScores'

const sections = [
    { id: 'had-sth-done', label: 'Had sth done' },
    { id: 'indirect-questions', label: 'Pytania pośrednie' },
    { id: 'unreal-past', label: 'Unreal Past' },
    { id: 'cleft-sentences', label: 'Cleft Sentences' },
    { id: 'participle-clauses', label: 'Zdania imiesłowowe' },
    { id: 'so-vs-such', label: 'So vs Such' },
    { id: 'inversion', label: 'Inwersja' },
    { id: 'inne-wyrażenia', label: 'Inne wyrażenia' },
]

// Boksy odpowiadające zagadnieniom w gramatyce
const TOPICS = {
    'had-sth-done': [
        { id: 'had-sth-done-basics', title: 'Konstrukcja i użycie 🛠️', excerpt: 'Podstawowe ćwiczenia z konstrukcją have/get something done.' },
        { id: 'had-sth-done-practice-15', title: 'Had sth done - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi czasami.' },
        { id: 'had-sth-done-advanced-12', title: 'Had sth done - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowanymi konstrukcjami.' },
    ],
    'indirect-questions': [
        { id: 'indirect-questions-form', title: 'Forma i szyk zdania 🗣️', excerpt: 'Podstawowe ćwiczenia z pytaniami pośrednimi.' },
        { id: 'indirect-questions-practice-15', title: 'Pytania pośrednie - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi wyrażeniami.' },
        { id: 'indirect-questions-advanced-12', title: 'Pytania pośrednie - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z formalnymi zwrotami.' },
    ],
    'unreal-past': [
        { id: 'unreal-past-wishes', title: 'Wishes i If only 🙏', excerpt: 'Podstawowe ćwiczenia z wyrażaniem życzeń i żalów.' },
        { id: 'unreal-past-practice-15', title: 'Unreal Past - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi konstrukcjami.' },
        { id: 'unreal-past-advanced-12', title: 'Unreal Past - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań w kontekstach biznesowych.' },
    ],
    'cleft-sentences': [
        { id: 'cleft-it-what', title: 'It-/What-cleft 🎯', excerpt: 'Podstawowe ćwiczenia z podkreślaniem elementów zdania.' },
        { id: 'cleft-sentences-practice-15', title: 'Cleft Sentences - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi kontekstami.' },
        { id: 'cleft-sentences-advanced-12', title: 'Cleft Sentences - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań w kontekstach formalnych.' },
    ],
    'participle-clauses': [
        { id: 'participle-reduction', title: 'Zdania imiesłowowe 📝', excerpt: 'Podstawowe ćwiczenia ze zdaniami imiesłowowymi.' },
        { id: 'participle-clauses-practice-15', title: 'Zdania imiesłowowe - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi sytuacjami.' },
        { id: 'participle-clauses-advanced-12', title: 'Zdania imiesłowowe - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z perfect participle.' },
    ],
    'so-vs-such': [
        { id: 'so-such-basics', title: 'So vs Such - podstawy 🎯', excerpt: 'Podstawowe ćwiczenia z różnicami między SO i SUCH.' },
        { id: 'so-such-practice-15', title: 'So vs Such - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi kontekstami.' },
        { id: 'so-such-advanced-12', title: 'So vs Such - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowanymi konstrukcjami.' },
    ],
    'inversion': [
        { id: 'inversion-negative', title: 'Inwersja szyku 🔄', excerpt: 'Podstawowe ćwiczenia z inwersją po wyrażeniach negatywnych.' },
        { id: 'inversion-practice-15', title: 'Inwersja - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi typami inwersji.' },
        { id: 'inversion-advanced-12', title: 'Inwersja - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań w kontekstach biznesowych.' },
    ],
    'inne-wyrażenia': [
        { id: 'misc-expressions', title: 'Inne przydatne konstrukcje 🎯', excerpt: 'Podstawowe ćwiczenia: so/such, be supposed to, would rather, used to.' },
        { id: 'misc-expressions-practice-15', title: 'Inne wyrażenia - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi konstrukcjami.' },
        { id: 'misc-expressions-advanced-12', title: 'Inne wyrażenia - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań w kontekstach formalnych.' },
    ],
}

const QUIZZES = {
    'had-sth-done-basics': [
        {
            id: 'h1',
            question: 'Wybierz poprawną opcję: I ___ my hair cut yesterday.',
            options: ['had', 'have', 'got have'],
            correct: 0,
        },
        {
            id: 'h2',
            question: 'Poprawne zdanie: She is ___ her phone repaired tomorrow.',
            options: ['having', 'get', 'got'],
            correct: 0,
        },
        {
            id: 'h3',
            question: 'Znaczenie konstrukcji "have something done" to:',
            options: ['zrobiłem to sam', 'ktoś zrobił to dla mnie', 'cofnąłem czas'],
            correct: 1,
        },
        {
            id: 'h4',
            question: 'Wybierz poprawne zdanie:',
            options: ['I had my car service every year.', 'I have my car serviced every year.', 'I get my car service every year.'],
            correct: 1,
        },
        {
            id: 'h5',
            question: 'Różnica między "have" a "get" w tej konstrukcji:',
            options: ['have - formalne, get - nieformalne', 'have - przeszłość, get - teraźniejszość', 'nie ma różnicy'],
            correct: 0,
        },
        {
            id: 'h6',
            question: 'Wybierz poprawne zdanie w Past Simple:',
            options: ['They had their house painted last month.', 'They have their house painted last month.', 'They got their house paint last month.'],
            correct: 0,
        },
        {
            id: 'h7',
            question: 'Które zdanie opisuje usługę profesjonalną?',
            options: ['I had my suit cleaned.', 'I cleaned my suit.', 'I will clean my suit.'],
            correct: 0,
        },
        {
            id: 'h8',
            question: 'Wybierz poprawne zdanie w Future Simple:',
            options: ['We will have the roof repaired.', 'We have the roof will repaired.', 'We will get the roof repair.'],
            correct: 0,
        },
        {
            id: 'h9',
            question: 'Różnica między "I cut my hair" a "I had my hair cut":',
            options: ['pierwsze: samodzielnie, drugie: ktoś dla mnie', 'pierwsze: przeszłość, drugie: teraźniejszość', 'nie ma różnicy'],
            correct: 0,
        },
        {
            id: 'h10',
            question: 'Wybierz poprawne zdanie:',
            options: ['He got his computer fixed last week.', 'He had his computer fix last week.', 'He get his computer fixed last week.'],
            correct: 0,
        },
    ],
    'had-sth-done-practice-15': [
        {
            id: 'hp1',
            question: 'Wybierz poprawną opcję: I need to ___ my eyes tested.',
            options: ['have', 'get', 'both are correct'],
            correct: 2,
        },
        {
            id: 'hp2',
            question: 'She ___ her passport renewed last month.',
            options: ['had', 'got', 'both are correct'],
            correct: 2,
        },
        {
            id: 'hp3',
            question: 'We\'re ___ the house painted next week.',
            options: ['having', 'getting', 'both are correct'],
            correct: 2,
        },
        {
            id: 'hp4',
            question: 'He ___ his car serviced every six months.',
            options: ['has', 'gets', 'both are correct'],
            correct: 2,
        },
        {
            id: 'hp5',
            question: 'They ___ their wedding photos taken by a professional.',
            options: ['had', 'got', 'both are correct'],
            correct: 2,
        },
        {
            id: 'hp6',
            question: 'I ___ my computer fixed yesterday.',
            options: ['had', 'got', 'both are correct'],
            correct: 2,
        },
        {
            id: 'hp7',
            question: 'You should ___ your blood pressure checked.',
            options: ['have', 'get', 'both are correct'],
            correct: 2,
        },
        {
            id: 'hp8',
            question: 'She ___ her hair done for the party.',
            options: ['is having', 'is getting', 'both are correct'],
            correct: 2,
        },
        {
            id: 'hp9',
            question: 'We ___ the documents translated into English.',
            options: ['had', 'got', 'both are correct'],
            correct: 2,
        },
        {
            id: 'hp10',
            question: 'He ___ his suit cleaned before the interview.',
            options: ['had', 'got', 'both are correct'],
            correct: 2,
        },
        {
            id: 'hp11',
            question: 'They ___ their garden landscaped last summer.',
            options: ['had', 'got', 'both are correct'],
            correct: 2,
        },
        {
            id: 'hp12',
            question: 'I need to ___ my watch repaired.',
            options: ['have', 'get', 'both are correct'],
            correct: 2,
        },
        {
            id: 'hp13',
            question: 'She ___ her nails done every Friday.',
            options: ['has', 'gets', 'both are correct'],
            correct: 2,
        },
        {
            id: 'hp14',
            question: 'We\'re ___ the roof repaired after the storm.',
            options: ['having', 'getting', 'both are correct'],
            correct: 2,
        },
        {
            id: 'hp15',
            question: 'He ___ his teeth checked every year.',
            options: ['has', 'gets', 'both are correct'],
            correct: 2,
        },
    ],

    'had-sth-done-advanced-12': [
        {
            id: 'ha1',
            question: 'By tomorrow, I ___ my thesis proofread.',
            options: ['will have had', 'will have', 'will get'],
            correct: 0,
        },
        {
            id: 'ha2',
            question: 'She ___ her jewelry appraised before she sold it.',
            options: ['had had', 'had', 'got had'],
            correct: 0,
        },
        {
            id: 'ha3',
            question: 'If I ___ the chance, I would have had my portrait painted.',
            options: ['had had', 'have had', 'would have'],
            correct: 0,
        },
        {
            id: 'ha4',
            question: 'He ___ his will drawn up by a lawyer for years.',
            options: ['has been having', 'has had', 'has been getting'],
            correct: 1,
        },
        {
            id: 'ha5',
            question: '___ your house valued before putting it on the market?',
            options: ['Have you had', 'Did you have', 'Had you had'],
            correct: 0,
        },
        {
            id: 'ha6',
            question: 'I wish I ___ my qualifications recognized abroad.',
            options: ['had had', 'have had', 'would have'],
            correct: 0,
        },
        {
            id: 'ha7',
            question: 'By the time he retires, he ___ all his properties managed professionally.',
            options: ['will have had', 'will have', 'will be having'],
            correct: 0,
        },
        {
            id: 'ha8',
            question: 'She ___ her research paper peer-reviewed before publication.',
            options: ['had to have', 'had have', 'had had to have'],
            correct: 0,
        },
        {
            id: 'ha9',
            question: 'If you ___ your car serviced regularly, it wouldn\'t have broken down.',
            options: ['had had', 'have had', 'would have had'],
            correct: 0,
        },
        {
            id: 'ha10',
            question: 'They ___ their business audited annually since 2010.',
            options: ['have been having', 'have had', 'had had'],
            correct: 1,
        },
        {
            id: 'ha11',
            question: '___ you ever ___ your antiques professionally valued?',
            options: ['Have...had', 'Did...have', 'Had...had'],
            correct: 0,
        },
        {
            id: 'ha12',
            question: 'I\'d rather ___ my taxes prepared by an accountant.',
            options: ['have', 'to have', 'having'],
            correct: 0,
        },
    ],
    'indirect-questions-form': [
        {
            id: 'iq1',
            question: 'Wybierz poprawne: Do you know where ___?',
            options: ['does she live', 'she lives', 'she does live'],
            correct: 1,
        },
        {
            id: 'iq2',
            question: 'W zdaniach pośrednich używamy:',
            options: ['inwersji', 'szyku oznajmującego', 'operatora do/does/did'],
            correct: 1,
        },
        {
            id: 'iq3',
            question: 'Wybierz poprawne: Could you tell me ___ the time?',
            options: ['what is', 'what time is it', 'what time it is'],
            correct: 2,
        },
        {
            id: 'iq4',
            question: 'Przekształć na pytanie pośrednie: "Where is the station?"',
            options: ['Could you tell me where is the station?', 'Could you tell me where the station is?', 'Could you tell me where does the station?'],
            correct: 1,
        },
        {
            id: 'iq5',
            question: 'Wybierz poprawne zdanie:',
            options: ['I wonder if he is coming.', 'I wonder is he coming.', 'I wonder if is he coming.'],
            correct: 0,
        },
        {
            id: 'iq6',
            question: 'Które wyrażenie wprowadza pytanie pośrednie?',
            options: ['Could you tell me...', 'Where is...', 'Do you...'],
            correct: 0,
        },
        {
            id: 'iq7',
            question: 'Wybierz poprawne: Do you know ___?',
            options: ['when will they arrive', 'when they will arrive', 'when they arrive will'],
            correct: 1,
        },
        {
            id: 'iq8',
            question: 'Przekształć: "What time does the shop open?"',
            options: ['Can you tell me what time the shop opens?', 'Can you tell me what time does the shop open?', 'Can you tell me what time the shop does open?'],
            correct: 0,
        },
        {
            id: 'iq9',
            question: 'Kiedy używamy pytań pośrednich?',
            options: ['w sytuacjach formalnych', 'tylko w piśmie', 'tylko z przyjaciółmi'],
            correct: 0,
        },
        {
            id: 'iq10',
            question: 'Wybierz poprawne zdanie:',
            options: ['I\'d like to know how much it costs.', 'I\'d like to know how much does it cost.', 'I\'d like to know how much cost it.'],
            correct: 0,
        },
    ],

    'indirect-questions-practice-15': [
        {
            id: 'iqp1',
            question: 'Do you know what time ___?',
            options: ['does the meeting start', 'the meeting starts', 'starts the meeting'],
            correct: 1,
        },
        {
            id: 'iqp2',
            question: 'Could you tell me where ___?',
            options: ['is the nearest bank', 'the nearest bank is', 'the nearest bank'],
            correct: 1,
        },
        {
            id: 'iqp3',
            question: 'I wonder when ___ back.',
            options: ['will she be', 'she will be', 'she be will'],
            correct: 1,
        },
        {
            id: 'iqp4',
            question: 'Do you have any idea how much ___?',
            options: ['does it cost', 'it costs', 'costs it'],
            correct: 1,
        },
        {
            id: 'iqp5',
            question: 'Can you remember what ___?',
            options: ['did he say', 'he said', 'said he'],
            correct: 1,
        },
        {
            id: 'iqp6',
            question: 'I\'d like to know why ___ late.',
            options: ['is he', 'he is', 'he'],
            correct: 1,
        },
        {
            id: 'iqp7',
            question: 'Do you know how long ___ here?',
            options: ['has she been working', 'she has been working', 'she has working'],
            correct: 1,
        },
        {
            id: 'iqp8',
            question: 'Could you tell me which platform ___ from?',
            options: ['does the train leave', 'the train leaves', 'leaves the train'],
            correct: 1,
        },
        {
            id: 'iqp9',
            question: 'I wonder what ___ for dinner.',
            options: ['are we having', 'we are having', 'we having'],
            correct: 1,
        },
        {
            id: 'iqp10',
            question: 'Do you know who ___ with?',
            options: ['is she going', 'she is going', 'she going'],
            correct: 1,
        },
        {
            id: 'iqp11',
            question: 'Can you tell me how many people ___ to the party?',
            options: ['are coming', 'coming are', 'come are'],
            correct: 0,
        },
        {
            id: 'iqp12',
            question: 'I\'d like to know whose book ___.',
            options: ['this is', 'is this', 'this'],
            correct: 0,
        },
        {
            id: 'iqp13',
            question: 'Do you remember where ___ my keys?',
            options: ['did I put', 'I put', 'I did put'],
            correct: 1,
        },
        {
            id: 'iqp14',
            question: 'Could you explain how ___ this machine?',
            options: ['does work', 'works', 'it works'],
            correct: 2,
        },
        {
            id: 'iqp15',
            question: 'I wonder whether ___ coming or not.',
            options: ['is he', 'he is', 'he'],
            correct: 1,
        },
    ],

    'indirect-questions-advanced-12': [
        {
            id: 'iqa1',
            question: 'Would you mind telling me how long ___ waiting?',
            options: ['you have been', 'have you been', 'you been'],
            correct: 0,
        },
        {
            id: 'iqa2',
            question: 'I was wondering if ___ join us for dinner.',
            options: ['you would like to', 'would you like to', 'you like to'],
            correct: 0,
        },
        {
            id: 'iqa3',
            question: 'Could you possibly let me know when ___ decided?',
            options: ['you have', 'have you', 'you'],
            correct: 0,
        },
        {
            id: 'iqa4',
            question: 'I\'d be grateful if you could tell me what ___ about.',
            options: ['the meeting was', 'was the meeting', 'the meeting'],
            correct: 0,
        },
        {
            id: 'iqa5',
            question: 'Do you happen to know why ___ chosen for the position?',
            options: ['was he', 'he was', 'he'],
            correct: 1,
        },
        {
            id: 'iqa6',
            question: 'I wonder whether ___ informed about the changes.',
            options: ['has everyone been', 'everyone has been', 'everyone been'],
            correct: 1,
        },
        {
            id: 'iqa7',
            question: 'Could you clarify how many applicants ___ so far?',
            options: ['have been interviewed', 'have interviewed', 'interviewed'],
            correct: 0,
        },
        {
            id: 'iqa8',
            question: 'I\'d like to know what measures ___ to address the issue.',
            options: ['are being taken', 'being taken are', 'taken are being'],
            correct: 0,
        },
        {
            id: 'iqa9',
            question: 'Would you mind explaining how this decision ___?',
            options: ['was reached', 'reached was', 'did reach'],
            correct: 0,
        },
        {
            id: 'iqa10',
            question: 'I was curious about when the project ___ completed.',
            options: ['is expected to be', 'expected to be is', 'to be expected is'],
            correct: 0,
        },
        {
            id: 'iqa11',
            question: 'Could you tell me whose responsibility it ___?',
            options: ['is', 'was', 'were'],
            correct: 0,
        },
        {
            id: 'iqa12',
            question: 'I wonder what would happen if ___ to proceed.',
            options: ['we were', 'were we', 'we'],
            correct: 0,
        },
    ],

    'unreal-past-wishes': [
        {
            id: 'u1',
            question: 'I wish I ___ more time.',
            options: ['have', 'had', 'would have'],
            correct: 1,
        },
        {
            id: 'u2',
            question: 'If only I ___ harder.',
            options: ['studied', 'had studied', 'would study'],
            correct: 1,
        },
        {
            id: 'u3',
            question: 'It\'s time we ___ now.',
            options: ['leave', 'left', 'had left'],
            correct: 1,
        },
        {
            id: 'u4',
            question: 'I wish it ___ raining.',
            options: ['would stop', 'stopped', 'had stopped'],
            correct: 0,
        },
        {
            id: 'u5',
            question: 'Różnica między "I wish I knew" a "I wish I had known":',
            options: ['pierwsze: teraźniejszość, drugie: przeszłość', 'pierwsze: przeszłość, drugie: teraźniejszość', 'nie ma różnicy'],
            correct: 0,
        },
        {
            id: 'u6',
            question: 'Wybierz poprawne zdanie:',
            options: ['I wish I spoke French.', 'I wish I speak French.', 'I wish I speaking French.'],
            correct: 0,
        },
        {
            id: 'u7',
            question: '"If only" wyraża:',
            options: ['silniejsze emocje niż "I wish"', 'słabsze emocje niż "I wish"', 'te same emocje co "I wish"'],
            correct: 0,
        },
        {
            id: 'u8',
            question: 'Wybierz poprawne: I would rather you ___ here.',
            options: ['didn\'t smoke', 'don\'t smoke', 'not smoke'],
            correct: 0,
        },
        {
            id: 'u9',
            question: 'Które zdanie wyraża żal dotyczący przeszłości?',
            options: ['I wish I had gone to the party.', 'I wish I go to the party.', 'I wish I would go to the party.'],
            correct: 0,
        },
        {
            id: 'u10',
            question: 'Wybierz poprawne: It\'s high time you ___ a job.',
            options: ['found', 'find', 'had found'],
            correct: 0,
        },
    ],

    'unreal-past-practice-15': [
        {
            id: 'up1',
            question: 'I wish I ___ more time for my hobbies.',
            options: ['had', 'have', 'would have'],
            correct: 0,
        },
        {
            id: 'up2',
            question: 'If only I ___ how to play the piano.',
            options: ['knew', 'know', 'would know'],
            correct: 0,
        },
        {
            id: 'up3',
            question: 'It\'s time we ___ a decision.',
            options: ['made', 'make', 'would make'],
            correct: 0,
        },
        {
            id: 'up4',
            question: 'I wish you ___ interrupting me.',
            options: ['would stop', 'stopped', 'had stopped'],
            correct: 0,
        },
        {
            id: 'up5',
            question: 'If only it ___ raining.',
            options: ['would stop', 'stopped', 'had stopped'],
            correct: 0,
        },
        {
            id: 'up6',
            question: 'I\'d rather you ___ here.',
            options: ['didn\'t smoke', 'don\'t smoke', 'wouldn\'t smoke'],
            correct: 0,
        },
        {
            id: 'up7',
            question: 'It\'s high time you ___ a job.',
            options: ['found', 'find', 'would find'],
            correct: 0,
        },
        {
            id: 'up8',
            question: 'I wish I ___ to university.',
            options: ['had gone', 'went', 'would go'],
            correct: 0,
        },
        {
            id: 'up9',
            question: 'If only I ___ his advice.',
            options: ['had taken', 'took', 'would take'],
            correct: 0,
        },
        {
            id: 'up10',
            question: 'I\'d rather we ___ by train.',
            options: ['went', 'go', 'would go'],
            correct: 0,
        },
        {
            id: 'up11',
            question: 'I wish I ___ better at languages.',
            options: ['were', 'am', 'would be'],
            correct: 0,
        },
        {
            id: 'up12',
            question: 'If only she ___ the truth.',
            options: ['had told', 'told', 'would tell'],
            correct: 0,
        },
        {
            id: 'up13',
            question: 'It\'s time he ___ responsible.',
            options: ['became', 'becomes', 'would become'],
            correct: 0,
        },
        {
            id: 'up14',
            question: 'I wish they ___ more carefully.',
            options: ['would drive', 'drove', 'had driven'],
            correct: 0,
        },
        {
            id: 'up15',
            question: 'I\'d rather you ___ me the truth.',
            options: ['told', 'tell', 'would tell'],
            correct: 0,
        },
    ],

    'unreal-past-advanced-12': [
        {
            id: 'ua1',
            question: 'I wish I ___ about the merger before it was announced.',
            options: ['had been told', 'was told', 'would be told'],
            correct: 0,
        },
        {
            id: 'ua2',
            question: 'If only the company ___ more attention to market trends.',
            options: ['had paid', 'paid', 'would pay'],
            correct: 0,
        },
        {
            id: 'ua3',
            question: 'It\'s high time the management ___ to the employees\' concerns.',
            options: ['listened', 'had listened', 'would listen'],
            correct: 0,
        },
        {
            id: 'ua4',
            question: 'I wish the board ___ more transparent about its decisions.',
            options: ['would be', 'were', 'had been'],
            correct: 0,
        },
        {
            id: 'ua5',
            question: 'If only we ___ the contract reviewed by a lawyer.',
            options: ['had had', 'had', 'would have'],
            correct: 0,
        },
        {
            id: 'ua6',
            question: 'I\'d rather the company ___ in sustainable practices.',
            options: ['invested', 'invest', 'would invest'],
            correct: 0,
        },
        {
            id: 'ua7',
            question: 'It\'s time the government ___ action on climate change.',
            options: ['took', 'had taken', 'would take'],
            correct: 0,
        },
        {
            id: 'ua8',
            question: 'I wish the team ___ more time to complete the project.',
            options: ['had been given', 'was given', 'would be given'],
            correct: 0,
        },
        {
            id: 'ua9',
            question: 'If only the regulations ___ more strictly enforced.',
            options: ['were', 'had been', 'would be'],
            correct: 0,
        },
        {
            id: 'ua10',
            question: 'I\'d rather the committee ___ its decision until next month.',
            options: ['postponed', 'postpone', 'would postpone'],
            correct: 0,
        },
        {
            id: 'ua11',
            question: 'It\'s high time such practices ___ outlawed.',
            options: ['were', 'had been', 'would be'],
            correct: 0,
        },
        {
            id: 'ua12',
            question: 'I wish the report ___ more comprehensive data.',
            options: ['had included', 'included', 'would include'],
            correct: 0,
        },
    ],

    'cleft-it-what': [
        {
            id: 'c1',
            question: '___ John who called me.',
            options: ['It was', 'There was', 'What was'],
            correct: 0,
        },
        {
            id: 'c2',
            question: '___ I need is a break.',
            options: ['That', 'What', 'Which'],
            correct: 1,
        },
        {
            id: 'c3',
            question: 'Cleft sentences służą do:',
            options: ['podkreślenia elementu', 'zastąpienia podmiotu', 'zmiany strony'],
            correct: 0,
        },
        {
            id: 'c4',
            question: 'Przekształć na it-cleft: "Mary won the competition."',
            options: ['It was Mary who won the competition.', 'What Mary won was the competition.', 'It was the competition that Mary won.'],
            correct: 0,
        },
        {
            id: 'c5',
            question: 'Wybierz poprawne what-cleft zdanie:',
            options: ['What I want is a coffee.', 'What I want it is a coffee.', 'What I want that is a coffee.'],
            correct: 0,
        },
        {
            id: 'c6',
            question: 'Które zdanie podkreśla czas?',
            options: ['It was yesterday that I saw him.', 'What I saw yesterday was him.', 'It was him that I saw yesterday.'],
            correct: 0,
        },
        {
            id: 'c7',
            question: 'Wybierz poprawne zdanie:',
            options: ['What happened was that I lost my keys.', 'What happened it was that I lost my keys.', 'What happened that I lost my keys.'],
            correct: 0,
        },
        {
            id: 'c8',
            question: 'Różnica między it-cleft a what-cleft:',
            options: ['it-cleft: konkretny element, what-cleft: akcja/stan', 'it-cleft: akcja/stan, what-cleft: konkretny element', 'nie ma różnicy'],
            correct: 0,
        },
        {
            id: 'c9',
            question: 'Wybierz poprawne: ___ made me happy was your call.',
            options: ['What', 'It', 'That'],
            correct: 0,
        },
        {
            id: 'c10',
            question: 'Które zdanie jest poprawne?',
            options: ['It\'s not money that I need.', 'It\'s not money what I need.', 'It\'s not money which I need.'],
            correct: 0,
        },
    ],

    'cleft-sentences-practice-15': [
        {
            id: 'cp1',
            question: '___ John who broke the window.',
            options: ['It was', 'There was', 'What was'],
            correct: 0,
        },
        {
            id: 'cp2',
            question: '___ I need is a good rest.',
            options: ['What', 'That', 'Which'],
            correct: 0,
        },
        {
            id: 'cp3',
            question: '___ yesterday that I met her.',
            options: ['It was', 'There was', 'What was'],
            correct: 0,
        },
        {
            id: 'cp4',
            question: '___ surprised me was his reaction.',
            options: ['What', 'That', 'Which'],
            correct: 0,
        },
        {
            id: 'cp5',
            question: '___ in Paris that they got married.',
            options: ['It was', 'There was', 'What was'],
            correct: 0,
        },
        {
            id: 'cp6',
            question: '___ I want to visit is Japan.',
            options: ['What', 'That', 'Which'],
            correct: 0,
        },
        {
            id: 'cp7',
            question: '___ my brother who told me the news.',
            options: ['It was', 'There was', 'What was'],
            correct: 0,
        },
        {
            id: 'cp8',
            question: '___ caused the problem was poor communication.',
            options: ['What', 'That', 'Which'],
            correct: 0,
        },
        {
            id: 'cp9',
            question: '___ at this restaurant that we always eat.',
            options: ['It\'s', 'There\'s', 'What\'s'],
            correct: 0,
        },
        {
            id: 'cp10',
            question: '___ I don\'t understand is why he left.',
            options: ['What', 'That', 'Which'],
            correct: 0,
        },
        {
            id: 'cp11',
            question: '___ the manager who made the decision.',
            options: ['It was', 'There was', 'What was'],
            correct: 0,
        },
        {
            id: 'cp12',
            question: '___ I appreciate most is your honesty.',
            options: ['What', 'That', 'Which'],
            correct: 0,
        },
        {
            id: 'cp13',
            question: '___ because of the rain that we canceled.',
            options: ['It was', 'There was', 'What was'],
            correct: 0,
        },
        {
            id: 'cp14',
            question: '___ happened was completely unexpected.',
            options: ['What', 'That', 'Which'],
            correct: 0,
        },
        {
            id: 'cp15',
            question: '___ my friend who helped me move.',
            options: ['It was', 'There was', 'What was'],
            correct: 0,
        },
    ],

    'cleft-sentences-advanced-12': [
        {
            id: 'ca1',
            question: '___ the CEO herself who announced the merger.',
            options: ['It was', 'There was', 'What was'],
            correct: 0,
        },
        {
            id: 'ca2',
            question: '___ the committee failed to consider was the environmental impact.',
            options: ['What', 'That', 'Which'],
            correct: 0,
        },
        {
            id: 'ca3',
            question: '___ not until the audit that the discrepancies were discovered.',
            options: ['It was', 'There was', 'What was'],
            correct: 0,
        },
        {
            id: 'ca4',
            question: '___ makes this case particularly interesting is the legal precedent.',
            options: ['What', 'That', 'Which'],
            correct: 0,
        },
        {
            id: 'ca5',
            question: '___ the implementation phase where most problems occurred.',
            options: ['It was during', 'There was during', 'What was during'],
            correct: 0,
        },
        {
            id: 'ca6',
            question: '___ the board should have done was consult the stakeholders.',
            options: ['What', 'That', 'Which'],
            correct: 0,
        },
        {
            id: 'ca7',
            question: '___ his lack of experience that concerned the investors.',
            options: ['It was', 'There was', 'What was'],
            correct: 0,
        },
        {
            id: 'ca8',
            question: '___ distinguishes this approach is its innovative methodology.',
            options: ['What', 'That', 'Which'],
            correct: 0,
        },
        {
            id: 'ca9',
            question: '___ the regulatory framework that needs reforming.',
            options: ['It is', 'There is', 'What is'],
            correct: 0,
        },
        {
            id: 'ca10',
            question: '___ the researchers discovered challenged conventional wisdom.',
            options: ['What', 'That', 'Which'],
            correct: 0,
        },
        {
            id: 'ca11',
            question: '___ the third quarter when performance improved significantly.',
            options: ['It was in', 'There was in', 'What was in'],
            correct: 0,
        },
        {
            id: 'ca12',
            question: '___ the proposal lacks is concrete implementation strategies.',
            options: ['What', 'That', 'Which'],
            correct: 0,
        },
    ],

    'participle-reduction': [
        {
            id: 'p1',
            question: '___ tired, she went to bed.',
            options: ['Feeling', 'Felt', 'Having feel'],
            correct: 0,
        },
        {
            id: 'p2',
            question: '___ the report, he left.',
            options: ['Finishing', 'Having finished', 'Finished'],
            correct: 1,
        },
        {
            id: 'p3',
            question: 'Seen from the hill, the town ___ tiny.',
            options: ['looks', 'looked', 'is looking'],
            correct: 1,
        },
        {
            id: 'p4',
            question: '___ by the news, she called her family.',
            options: ['Shocking', 'Shocked', 'Having shocked'],
            correct: 1,
        },
        {
            id: 'p5',
            question: 'Różnica między "Feeling tired" a "Having felt tired":',
            options: ['pierwsze: równoczesność, drugie: wcześniejszość', 'pierwsze: wcześniejszość, drugie: równoczesność', 'nie ma różnicy'],
            correct: 0,
        },
        {
            id: 'p6',
            question: 'Wybierz poprawne zdanie:',
            options: ['Walking in the park, I saw a friend.', 'Walking in the park, a friend was seen.', 'Walking in the park, there was a friend.'],
            correct: 0,
        },
        {
            id: 'p7',
            question: 'Które zdanie ma znaczenie pasywne?',
            options: ['Written in 1920, the book is still popular.', 'Writing the book, he spent years researching.', 'Having written the book, he felt relieved.'],
            correct: 0,
        },
        {
            id: 'p8',
            question: 'Wybierz poprawne: ___ his work, he went home.',
            options: ['Finishing', 'Having finished', 'Finished'],
            correct: 1,
        },
        {
            id: 'p9',
            question: 'Zdania imiesłowowe są głównie używane w:',
            options: ['języku pisanym', 'mowie potocznej', 'języku formalnym mówionym'],
            correct: 0,
        },
        {
            id: 'p10',
            question: 'Wybierz poprawne zdanie:',
            options: ['Heated to 100°C, water boils.', 'Heating to 100°C, water boils.', 'Heat to 100°C, water boils.'],
            correct: 0,
        },
    ],

    'participle-clauses-practice-15': [
        {
            id: 'pcp1',
            question: '___ the news, she immediately called her family.',
            options: ['Hearing', 'Heard', 'Having heard'],
            correct: 0,
        },
        {
            id: 'pcp2',
            question: '___ from the mountain, the valley looked beautiful.',
            options: ['Seeing', 'Seen', 'Having seen'],
            correct: 1,
        },
        {
            id: 'pcp3',
            question: '___ his work, he went home.',
            options: ['Finishing', 'Finished', 'Having finished'],
            correct: 2,
        },
        {
            id: 'pcp4',
            question: '___ by the performance, the audience applauded loudly.',
            options: ['Impressing', 'Impressed', 'Having impressed'],
            correct: 1,
        },
        {
            id: 'pcp5',
            question: '___ along the street, I met an old friend.',
            options: ['Walking', 'Walked', 'Having walked'],
            correct: 0,
        },
        {
            id: 'pcp6',
            question: '___ in hot water, the tea tastes better.',
            options: ['Making', 'Made', 'Having made'],
            correct: 1,
        },
        {
            id: 'pcp7',
            question: '___ the instructions carefully, she started the experiment.',
            options: ['Reading', 'Read', 'Having read'],
            correct: 2,
        },
        {
            id: 'pcp8',
            question: '___ by the news, he couldn\'t speak.',
            options: ['Shocking', 'Shocked', 'Having shocked'],
            correct: 1,
        },
        {
            id: 'pcp9',
            question: '___ tired, I decided to go to bed early.',
            options: ['Feeling', 'Felt', 'Having felt'],
            correct: 0,
        },
        {
            id: 'pcp10',
            question: '___ in 1999, the company has grown significantly.',
            options: ['Establishing', 'Established', 'Having established'],
            correct: 1,
        },
        {
            id: 'pcp11',
            question: '___ the door, he entered the room.',
            options: ['Opening', 'Opened', 'Having opened'],
            correct: 0,
        },
        {
            id: 'pcp12',
            question: '___ by his dedication, the teacher praised him.',
            options: ['Touching', 'Touched', 'Having touched'],
            correct: 1,
        },
        {
            id: 'pcp13',
            question: '___ all the preparations, they began the journey.',
            options: ['Completing', 'Completed', 'Having completed'],
            correct: 2,
        },
        {
            id: 'pcp14',
            question: '___ in the sun, the ice cream melted quickly.',
            options: ['Leaving', 'Left', 'Having left'],
            correct: 1,
        },
        {
            id: 'pcp15',
            question: '___ the map, we found our way easily.',
            options: ['Following', 'Followed', 'Having followed'],
            correct: 0,
        },
    ],

    'participle-clauses-advanced-12': [
        {
            id: 'pca1',
            question: '___ sufficient funding, the project would have been completed on time.',
            options: ['Having been allocated', 'Allocating', 'Allocated'],
            correct: 0,
        },
        {
            id: 'pca2',
            question: '___ by the committee, the proposal was sent for further review.',
            options: ['Not having been approved', 'Not approving', 'Not approved'],
            correct: 0,
        },
        {
            id: 'pca3',
            question: '___ all the necessary documents, the application was submitted.',
            options: ['Having gathered', 'Gathering', 'Gathered'],
            correct: 0,
        },
        {
            id: 'pca4',
            question: '___ to meet the deadline, the team worked overtime.',
            options: ['Needing', 'Needed', 'Having needed'],
            correct: 0,
        },
        {
            id: 'pca5',
            question: '___ the market research, the company launched the new product.',
            options: ['Having conducted', 'Conducting', 'Conducted'],
            correct: 0,
        },
        {
            id: 'pca6',
            question: '___ by previous failures, they approached the problem differently.',
            options: ['Having been discouraged', 'Discouraging', 'Discouraged'],
            correct: 0,
        },
        {
            id: 'pca7',
            question: '___ the legal requirements, the contract was deemed valid.',
            options: ['Meeting', 'Met', 'Having met'],
            correct: 2,
        },
        {
            id: 'pca8',
            question: '___ adequate training, the employees struggled with the new software.',
            options: ['Not having received', 'Not receiving', 'Not received'],
            correct: 0,
        },
        {
            id: 'pca9',
            question: '___ the risk assessment, the board approved the investment.',
            options: ['Having completed', 'Completing', 'Completed'],
            correct: 0,
        },
        {
            id: 'pca10',
            question: '___ in multiple languages, the manual reached a wider audience.',
            options: ['Having been written', 'Writing', 'Written'],
            correct: 0,
        },
        {
            id: 'pca11',
            question: '___ the economic indicators, analysts predicted growth.',
            options: ['Having analyzed', 'Analyzing', 'Analyzed'],
            correct: 0,
        },
        {
            id: 'pca12',
            question: '___ to international standards, the product gained global recognition.',
            options: ['Conforming', 'Conformed', 'Having conformed'],
            correct: 1,
        },
    ],

    'so-such-basics': [
        {
            id: 'ss1',
            question: 'Wybierz poprawną opcję: It was ___ beautiful music.',
            options: ['so', 'such', 'such a'],
            correct: 1,
        },
        {
            id: 'ss2',
            question: 'Wybierz poprawną opcję: She is ___ intelligent person.',
            options: ['so', 'such', 'such an'],
            correct: 2,
        },
        {
            id: 'ss3',
            question: 'Wybierz poprawną opcję: I have ___ many things to do.',
            options: ['so', 'such', 'such a'],
            correct: 0,
        },
        {
            id: 'ss4',
            question: 'Wybierz poprawną opcję: The test was ___ difficult.',
            options: ['so', 'such', 'such a'],
            correct: 0,
        },
        {
            id: 'ss5',
            question: 'Różnica między SO a SUCH:',
            options: ['SO + przymiotnik, SUCH + rzeczownik', 'SO + rzeczownik, SUCH + przymiotnik', 'nie ma różnicy'],
            correct: 0,
        },
        {
            id: 'ss6',
            question: 'Wybierz poprawne zdanie:',
            options: ['It was such a great movie.', 'It was so great movie.', 'It was such great movie.'],
            correct: 0,
        },
        {
            id: 'ss7',
            question: 'Wybierz poprawne zdanie:',
            options: ['She is so talented.', 'She is such talented.', 'She is such a talented.'],
            correct: 0,
        },
        {
            id: 'ss8',
            question: 'Które zdanie jest poprawne?',
            options: ['They are such nice people.', 'They are so nice people.', 'They are so nice persons.'],
            correct: 0,
        },
        {
            id: 'ss9',
            question: 'Wybierz poprawne zdanie:',
            options: ['It was so cold that we stayed home.', 'It was such cold that we stayed home.', 'It was such a cold that we stayed home.'],
            correct: 0,
        },
        {
            id: 'ss10',
            question: 'Wybierz poprawne zdanie:',
            options: ['What a such beautiful day!', 'What so beautiful day!', 'What a beautiful day!'],
            correct: 2,
        },
    ],

    // DODANE ĆWICZENIA SO VS SUCH - praktyka 15 pytań
    'so-such-practice-15': [
        {
            id: 'ssp1',
            question: 'It was ___ interesting book that I read it twice.',
            options: ['so', 'such an', 'such'],
            correct: 1,
        },
        {
            id: 'ssp2',
            question: 'The weather was ___ beautiful that we went for a walk.',
            options: ['so', 'such', 'such a'],
            correct: 0,
        },
        {
            id: 'ssp3',
            question: 'He has ___ amazing talent for music.',
            options: ['so', 'such', 'such an'],
            correct: 1,
        },
        {
            id: 'ssp4',
            question: 'There were ___ many people at the concert.',
            options: ['so', 'such', 'such a'],
            correct: 0,
        },
        {
            id: 'ssp5',
            question: 'It was ___ good food that we asked for seconds.',
            options: ['so', 'such', 'such a'],
            correct: 1,
        },
        {
            id: 'ssp6',
            question: 'She speaks ___ quickly that I can\'t understand her.',
            options: ['so', 'such', 'such a'],
            correct: 0,
        },
        {
            id: 'ssp7',
            question: 'It was ___ long journey that we were exhausted.',
            options: ['so', 'such a', 'such'],
            correct: 1,
        },
        {
            id: 'ssp8',
            question: 'I have ___ little time that I can\'t help you.',
            options: ['so', 'such', 'such a'],
            correct: 0,
        },
        {
            id: 'ssp9',
            question: 'They are ___ friendly people.',
            options: ['so', 'such', 'such a'],
            correct: 1,
        },
        {
            id: 'ssp10',
            question: 'The movie was ___ boring that I fell asleep.',
            options: ['so', 'such', 'such a'],
            correct: 0,
        },
        {
            id: 'ssp11',
            question: 'It was ___ expensive car that I couldn\'t afford it.',
            options: ['so', 'such an', 'such'],
            correct: 1,
        },
        {
            id: 'ssp12',
            question: 'He works ___ hard that he never has free time.',
            options: ['so', 'such', 'such a'],
            correct: 0,
        },
        {
            id: 'ssp13',
            question: 'We had ___ wonderful time at the party.',
            options: ['so', 'such a', 'such'],
            correct: 1,
        },
        {
            id: 'ssp14',
            question: 'There was ___ much traffic that we were late.',
            options: ['so', 'such', 'such a'],
            correct: 0,
        },
        {
            id: 'ssp15',
            question: 'It\'s ___ beautiful day today!',
            options: ['so', 'such a', 'such'],
            correct: 1,
        },
    ],

    // DODANE ĆWICZENIA SO VS SUCH - zaawansowane 12 pytań
    'so-such-advanced-12': [
        {
            id: 'ssa1',
            question: '___ was his dedication to the project that he worked day and night.',
            options: ['So great', 'Such great', 'How great'],
            correct: 0,
        },
        {
            id: 'ssa2',
            question: 'The proposal was ___ comprehensive that it covered every possible scenario.',
            options: ['so', 'such a', 'such'],
            correct: 0,
        },
        {
            id: 'ssa3',
            question: '___ complex were the regulations that specialized consultants were required.',
            options: ['So', 'Such', 'How'],
            correct: 0,
        },
        {
            id: 'ssa4',
            question: 'The company faced ___ significant challenges that restructuring became necessary.',
            options: ['so', 'such', 'such a'],
            correct: 1,
        },
        {
            id: 'ssa5',
            question: '___ rapid was the technological advancement that existing systems became obsolete.',
            options: ['So', 'Such', 'How'],
            correct: 0,
        },
        {
            id: 'ssa6',
            question: 'The financial report contained ___ detailed analysis that it took days to review.',
            options: ['so', 'such', 'such a'],
            correct: 1,
        },
        {
            id: 'ssa7',
            question: '___ overwhelming was the response that production capacity had to be doubled.',
            options: ['So', 'Such', 'How'],
            correct: 0,
        },
        {
            id: 'ssa8',
            question: 'The legal framework presented ___ complex requirements that expert guidance was essential.',
            options: ['so', 'such', 'such a'],
            correct: 1,
        },
        {
            id: 'ssa9',
            question: '___ substantial were the investment returns that shareholders were delighted.',
            options: ['So', 'Such', 'How'],
            correct: 0,
        },
        {
            id: 'ssa10',
            question: 'The market research provided ___ valuable insights that strategy was completely revised.',
            options: ['so', 'such', 'such a'],
            correct: 1,
        },
        {
            id: 'ssa11',
            question: '___ intricate was the negotiation process that it lasted for months.',
            options: ['So', 'Such', 'How'],
            correct: 0,
        },
        {
            id: 'ssa12',
            question: 'The organizational structure required ___ fundamental changes that a complete overhaul was implemented.',
            options: ['so', 'such', 'such a'],
            correct: 1,
        },
    ],

    'inversion-negative': [
        {
            id: 'i1',
            question: '___ have I seen such a view.',
            options: ['Never', 'Hardly not', 'Seldom not'],
            correct: 0,
        },
        {
            id: 'i2',
            question: 'Should you ___ help, call me.',
            options: ['need', 'needed', 'to need'],
            correct: 0,
        },
        {
            id: 'i3',
            question: 'So ___ was the news that…',
            options: ['amazing', 'an amazing', 'amazingly'],
            correct: 0,
        },
        {
            id: 'i4',
            question: '___ had I left when the phone rang.',
            options: ['Hardly', 'No sooner', 'Rarely'],
            correct: 0,
        },
        {
            id: 'i5',
            question: 'Wybierz poprawne zdanie z inwersją:',
            options: ['Never have I been so happy.', 'Never I have been so happy.', 'Never have been I so happy.'],
            correct: 0,
        },
        {
            id: 'i6',
            question: 'Które wyrażenie wymaga inwersji na początku zdania?',
            options: ['Never', 'Sometimes', 'Often'],
            correct: 0,
        },
        {
            id: 'i7',
            question: 'Wybierz poprawne: ___ did I know what would happen.',
            options: ['Little', 'Few', 'Small'],
            correct: 0,
        },
        {
            id: 'i8',
            question: 'Przekształć na inwersję: "I had never seen such a beautiful place."',
            options: ['Never had I seen such a beautiful place.', 'Never I had seen such a beautiful place.', 'Never have I seen such a beautiful place.'],
            correct: 0,
        },
        {
            id: 'i9',
            question: 'Wybierz poprawne zdanie warunkowe z inwersją:',
            options: ['Were I you, I would accept.', 'If I were you, I would accept.', 'Was I you, I would accept.'],
            correct: 0,
        },
        {
            id: 'i10',
            question: 'Które zdanie ma poprawną inwersję?',
            options: ['Not only did he finish early, but he also...', 'Not only he finished early, but he also...', 'Not only finished he early, but he also...'],
            correct: 0,
        },
    ],

    'inversion-practice-15': [
        {
            id: 'invp1',
            question: '___ have I seen such a beautiful sunset.',
            options: ['Never', 'Rarely', 'Sometimes'],
            correct: 0,
        },
        {
            id: 'invp2',
            question: '___ had I arrived when the phone rang.',
            options: ['Hardly', 'No sooner', 'Scarcely'],
            correct: 0,
        },
        {
            id: 'invp3',
            question: '___ you need any help, please let me know.',
            options: ['Should', 'If', 'Unless'],
            correct: 0,
        },
        {
            id: 'invp4',
            question: '___ did I realize my mistake.',
            options: ['Only then', 'Then only', 'Only when'],
            correct: 0,
        },
        {
            id: 'invp5',
            question: '___ had she left than he arrived.',
            options: ['No sooner', 'Hardly', 'Scarcely'],
            correct: 0,
        },
        {
            id: 'invp6',
            question: '___ I you, I would accept the offer.',
            options: ['Were', 'If', 'Should'],
            correct: 0,
        },
        {
            id: 'invp7',
            question: '___ does he complain about his job.',
            options: ['Seldom', 'Often', 'Sometimes'],
            correct: 0,
        },
        {
            id: 'invp8',
            question: '___ had I known the truth, I would have acted differently.',
            options: ['Had', 'If', 'Should'],
            correct: 0,
        },
        {
            id: 'invp9',
            question: '___ beautiful was the music that everyone cried.',
            options: ['So', 'Such', 'How'],
            correct: 0,
        },
        {
            id: 'invp10',
            question: '___ comes the bus!',
            options: ['Here', 'There', 'Where'],
            correct: 0,
        },
        {
            id: 'invp11',
            question: '___ did he finish the project, but he also exceeded expectations.',
            options: ['Not only', 'Only not', 'Not just'],
            correct: 0,
        },
        {
            id: 'invp12',
            question: '___ did I understand the complexity of the problem.',
            options: ['Only then', 'Then only', 'Only when'],
            correct: 0,
        },
        {
            id: 'invp13',
            question: '___ had the meeting started when the fire alarm went off.',
            options: ['Hardly', 'No sooner', 'Scarcely'],
            correct: 0,
        },
        {
            id: 'invp14',
            question: '___ I realized what had happened.',
            options: ['Only then', 'Then only', 'Only when'],
            correct: 0,
        },
        {
            id: 'invp15',
            question: '___ had he spoken these words than everyone fell silent.',
            options: ['No sooner', 'Hardly', 'Scarcely'],
            correct: 0,
        },
    ],

    'inversion-advanced-12': [
        {
            id: 'inva1',
            question: '___ had the company announced its profits than the stock price soared.',
            options: ['No sooner', 'Hardly', 'Scarcely'],
            correct: 0,
        },
        {
            id: 'inva2',
            question: '___ the board taken decisive action earlier, the crisis might have been averted.',
            options: ['Had', 'If', 'Should'],
            correct: 0,
        },
        {
            id: 'inva3',
            question: '___ to such an extent were the losses that restructuring became inevitable.',
            options: ['So', 'Such', 'How'],
            correct: 0,
        },
        {
            id: 'inva4',
            question: '___ did the management recognize the need for change.',
            options: ['Only after extensive consultation', 'After only extensive consultation', 'Only extensive consultation after'],
            correct: 0,
        },
        {
            id: 'inva5',
            question: '___ the CEO herself attended the meeting that the issue was resolved.',
            options: ['Not until', 'Until not', 'Only when'],
            correct: 0,
        },
        {
            id: 'inva6',
            question: '___ been the market volatility that investors became cautious.',
            options: ['So great had', 'Such great had', 'How great had'],
            correct: 0,
        },
        {
            id: 'inva7',
            question: '___ the company implement the new strategy than results improved.',
            options: ['No sooner did', 'Hardly did', 'Scarcely did'],
            correct: 0,
        },
        {
            id: 'inva8',
            question: '___ the regulatory requirements been more clearly defined would compliance have been easier.',
            options: ['Had', 'If', 'Should'],
            correct: 0,
        },
        {
            id: 'inva9',
            question: '___ was the impact of the innovation that it transformed the industry.',
            options: ['So profound', 'Such profound', 'How profound'],
            correct: 0,
        },
        {
            id: 'inva10',
            question: '___ the committee reached a consensus on the matter.',
            options: ['Rarely had', 'Rarely', 'Had rarely'],
            correct: 0,
        },
        {
            id: 'inva11',
            question: '___ the merger completed than synergies began to materialize.',
            options: ['No sooner was', 'Hardly was', 'Scarcely was'],
            correct: 0,
        },
        {
            id: 'inva12',
            question: '___ the company diversify its portfolio would risk have been minimized.',
            options: ['Had', 'If', 'Should'],
            correct: 0,
        },
    ],

    'misc-expressions': [
        {
            id: 'm1',
            question: 'It was ___ great film.',
            options: ['so', 'such a', 'such'],
            correct: 1,
        },
        {
            id: 'm2',
            question: 'You\'re ___ to wear a helmet.',
            options: ['supposed', 'suppose', 'supposing'],
            correct: 0,
        },
        {
            id: 'm3',
            question: 'I ___ live here, but not anymore.',
            options: ['am used to', 'used to', 'get used to'],
            correct: 1,
        },
        {
            id: 'm4',
            question: 'Wybierz poprawne: It\'s ___ cold today.',
            options: ['so', 'such', 'such a'],
            correct: 0,
        },
        {
            id: 'm5',
            question: 'Różnica między "so" a "such":',
            options: ['so + przymiotnik, such + rzeczownik', 'so + rzeczownik, such + przymiotnik', 'nie ma różnicy'],
            correct: 0,
        },
        {
            id: 'm6',
            question: 'Wybierz poprawne: I would rather ___ home.',
            options: ['stay', 'to stay', 'staying'],
            correct: 0,
        },
        {
            id: 'm7',
            question: '"Be supposed to" wyraża:',
            options: ['obowiązki i oczekiwania', 'przyzwyczajenia', 'preferencje'],
            correct: 0,
        },
        {
            id: 'm8',
            question: 'Wybierz poprawne: I prefer tea ___ coffee.',
            options: ['to', 'than', 'from'],
            correct: 0,
        },
        {
            id: 'm9',
            question: 'Różnica między "used to" a "be used to":',
            options: ['used to: przeszłe przyzwyczajenia, be used to: obecne przyzwyczajenie', 'used to: obecne przyzwyczajenie, be used to: przeszłe przyzwyczajenia', 'nie ma różnicy'],
            correct: 0,
        },
        {
            id: 'm10',
            question: 'Wybierz poprawne: She is used ___ early.',
            options: ['to waking up', 'to wake up', 'waking up'],
            correct: 0,
        },
    ],

    'misc-expressions-practice-15': [
        {
            id: 'mep1',
            question: 'It was ___ interesting book that I read it twice.',
            options: ['so', 'such an', 'such'],
            correct: 1,
        },
        {
            id: 'mep2',
            question: 'You\'re ___ to arrive on time for meetings.',
            options: ['supposed', 'suppose', 'supposing'],
            correct: 0,
        },
        {
            id: 'mep3',
            question: 'I ___ play tennis when I was younger.',
            options: ['used to', 'am used to', 'get used to'],
            correct: 0,
        },
        {
            id: 'mep4',
            question: 'The movie was ___ boring that I fell asleep.',
            options: ['so', 'such', 'such a'],
            correct: 0,
        },
        {
            id: 'mep5',
            question: 'I\'m ___ the cold weather now.',
            options: ['used to', 'use to', 'get used to'],
            correct: 0,
        },
        {
            id: 'mep6',
            question: 'She ___ living in big cities.',
            options: ['is used to', 'used to', 'gets used to'],
            correct: 0,
        },
        {
            id: 'mep7',
            question: 'It was ___ beautiful day that we went to the beach.',
            options: ['so', 'such a', 'such'],
            correct: 1,
        },
        {
            id: 'mep8',
            question: 'The train is ___ to arrive at 8 PM.',
            options: ['supposed', 'suppose', 'supposing'],
            correct: 0,
        },
        {
            id: 'mep9',
            question: 'I ___ wake up early when I worked in that job.',
            options: ['used to', 'am used to', 'get used to'],
            correct: 0,
        },
        {
            id: 'mep10',
            question: 'He\'s ___ speaking in public.',
            options: ['used to', 'use to', 'get used to'],
            correct: 0,
        },
        {
            id: 'mep11',
            question: 'The food was ___ delicious that we asked for the recipe.',
            options: ['so', 'such', 'such a'],
            correct: 0,
        },
        {
            id: 'mep12',
            question: 'We\'re ___ working on weekends.',
            options: ['not supposed to', 'not suppose to', 'not supposing to'],
            correct: 0,
        },
        {
            id: 'mep13',
            question: 'It took me months to ___ the new system.',
            options: ['get used to', 'used to', 'am used to'],
            correct: 0,
        },
        {
            id: 'mep14',
            question: 'She was ___ talented musician that she won many awards.',
            options: ['so', 'such a', 'such'],
            correct: 1,
        },
        {
            id: 'mep15',
            question: 'I ___ like coffee, but now I love it.',
            options: ['didn\'t use to', 'wasn\'t used to', 'didn\'t used to'],
            correct: 0,
        },
    ],

    'misc-expressions-advanced-12': [
        {
            id: 'mea1',
            question: 'The financial report was ___ comprehensive that it took three days to analyze.',
            options: ['so', 'such a', 'such'],
            correct: 0,
        },
        {
            id: 'mea2',
            question: 'The CEO is ___ have arrived by now; the meeting was scheduled to start an hour ago.',
            options: ['supposed to', 'suppose to', 'supposing to'],
            correct: 0,
        },
        {
            id: 'mea3',
            question: 'The company ___ operate in a highly regulated environment.',
            options: ['is used to', 'used to', 'gets used to'],
            correct: 0,
        },
        {
            id: 'mea4',
            question: '___ was the complexity of the legal framework that specialized consultants were hired.',
            options: ['So great', 'Such great', 'How great'],
            correct: 0,
        },
        {
            id: 'mea5',
            question: 'The board members ___ making difficult decisions under pressure.',
            options: ['are used to', 'used to', 'get used to'],
            correct: 0,
        },
        {
            id: 'mea6',
            question: 'The merger created ___ significant synergies that shareholder value increased dramatically.',
            options: ['so', 'such', 'such a'],
            correct: 1,
        },
        {
            id: 'mea7',
            question: 'The new regulations are ___ be implemented by the end of the quarter.',
            options: ['supposed to', 'suppose to', 'supposing to'],
            correct: 0,
        },
        {
            id: 'mea8',
            question: 'The organization ___ relying on traditional methods, but digital transformation became essential.',
            options: ['used to', 'is used to', 'gets used to'],
            correct: 0,
        },
        {
            id: 'mea9',
            question: '___ rapid was the technological advancement that existing infrastructure became obsolete.',
            options: ['So', 'Such', 'How'],
            correct: 0,
        },
        {
            id: 'mea10',
            question: 'The management team ___ working with international partners.',
            options: ['is used to', 'used to', 'gets used to'],
            correct: 0,
        },
        {
            id: 'mea11',
            question: 'The market response was ___ overwhelming that production had to be increased.',
            options: ['so', 'such an', 'such'],
            correct: 0,
        },
        {
            id: 'mea12',
            question: 'The compliance department ___ dealing with complex regulatory requirements.',
            options: ['is used to', 'used to', 'gets used to'],
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
        return TOPICS['had-sth-done'].find(t => t.id === topicId)?.title ||
            TOPICS['indirect-questions'].find(t => t.id === topicId)?.title ||
            TOPICS['unreal-past'].find(t => t.id === topicId)?.title ||
            TOPICS['cleft-sentences'].find(t => t.id === topicId)?.title ||
            TOPICS['participle-clauses'].find(t => t.id === topicId)?.title ||
            TOPICS['inversion'].find(t => t.id === topicId)?.title ||
            TOPICS['inne-wyrażenia'].find(t => t.id === topicId)?.title
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

export default function PhrasesExpressionsExercises() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const { lang } = useLanguage()
    const active = section ?? 'had-sth-done'
    const topicId = searchParams.get('topic')
    const basePath = `/cwiczenia/gramatyka/wyrażenia-i-zwroty/${active}`

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
                    <h2>Ćwiczenia: Wyrażenia i zwroty</h2>
                    <p className="muted">Utrwalaj zaawansowane konstrukcje i praktyczne wyrażenia</p>
                </header>

                <nav className="subnav" aria-label="Podstrony ćwiczeń: Wyrażenia i zwroty">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/cwiczenia/gramatyka/wyrażenia-i-zwroty/${s.id}`}
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

function getMetaTitle(lang, activeSection, topicId) {
    const sectionTitles = {
        pl: {
            'had-sth-done': 'Ćwiczenia: Had something done - konstrukcja',
            'indirect-questions': 'Ćwiczenia: Pytania pośrednie angielskie',
            'unreal-past': 'Ćwiczenia: Unreal Past - wyrażanie żalów',
            'cleft-sentences': 'Ćwiczenia: Cleft Sentences - podkreślanie',
            'participle-clauses': 'Ćwiczenia: Zdania imiesłowowe angielskie',
            'inversion': 'Ćwiczenia: Inwersja szyku angielska',
            'inne-wyrażenia': 'Ćwiczenia: Inne wyrażenia angielskie'
        },
        en: {
            'had-sth-done': 'Exercises: Had something done construction',
            'indirect-questions': 'Exercises: English Indirect Questions',
            'unreal-past': 'Exercises: Unreal Past - expressing regrets',
            'cleft-sentences': 'Exercises: Cleft Sentences - emphasis',
            'participle-clauses': 'Exercises: English Participle Clauses',
            'inversion': 'Exercises: English Inversion',
            'inne-wyrażenia': 'Exercises: Other English Expressions'
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
            'had-sth-done': 'Interaktywne ćwiczenia z konstrukcją have/get something done. Testy online z różnymi czasami i kontekstami.',
            'indirect-questions': 'Ćwiczenia z pytań pośrednich angielskich. Praktyczne testy z szykiem zdania i formalnymi zwrotami.',
            'unreal-past': 'Interaktywne ćwiczenia z unreal past: wishes, if only, would rather. Testy z wyrażaniem żalów i życzeń.',
            'cleft-sentences': 'Ćwiczenia z cleft sentences: it-cleft i what-cleft. Testy online z podkreślaniem elementów zdania.',
            'participle-clauses': 'Interaktywne ćwiczenia ze zdań imiesłowowych angielskich. Testy z perfect participle i redukcją zdań.',
            'inversion': 'Ćwiczenia z inwersji szyku angielskiej. Testy online z wyrażeniami negatywnymi i warunkami.',
            'inne-wyrażenia': 'Interaktywne ćwiczenia z różnych wyrażeń: so/such, be supposed to, would rather, used to. Testy praktyczne.'
        },
        en: {
            'had-sth-done': 'Interactive exercises with have/get something done construction. Online tests with different tenses and contexts.',
            'indirect-questions': 'English indirect questions exercises. Practical tests with word order and formal expressions.',
            'unreal-past': 'Interactive exercises with unreal past: wishes, if only, would rather. Tests for expressing regrets and wishes.',
            'cleft-sentences': 'Exercises with cleft sentences: it-cleft and what-cleft. Online tests for emphasizing sentence elements.',
            'participle-clauses': 'Interactive exercises with English participle clauses. Tests with perfect participle and sentence reduction.',
            'inversion': 'Exercises with English inversion. Online tests with negative expressions and conditionals.',
            'inne-wyrażenia': 'Interactive exercises with various expressions: so/such, be supposed to, would rather, used to. Practical tests.'
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
        ? `https://angloboost.pl/pl/cwiczenia/gramatyka/wyrażenia-i-zwroty/${activeSection}`
        : `https://angloboost.pl/en/exercises/grammar/phrases-expressions/${activeSection}`

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
        'had-sth-done-basics': 'Had sth done - Basics',
        'had-sth-done-practice-15': 'Had sth done - Practice',
        'had-sth-done-advanced-12': 'Had sth done - Advanced',
        'indirect-questions-form': 'Indirect Questions - Form',
        'indirect-questions-practice-15': 'Indirect Questions - Practice',
        'indirect-questions-advanced-12': 'Indirect Questions - Advanced',
        'unreal-past-wishes': 'Unreal Past - Wishes',
        'unreal-past-practice-15': 'Unreal Past - Practice',
        'unreal-past-advanced-12': 'Unreal Past - Advanced',
        'cleft-it-what': 'Cleft Sentences - It/What',
        'cleft-sentences-practice-15': 'Cleft Sentences - Practice',
        'cleft-sentences-advanced-12': 'Cleft Sentences - Advanced',
        'participle-reduction': 'Participle Clauses',
        'participle-clauses-practice-15': 'Participle Clauses - Practice',
        'participle-clauses-advanced-12': 'Participle Clauses - Advanced',
        'inversion-negative': 'Inversion - Negative',
        'inversion-practice-15': 'Inversion - Practice',
        'inversion-advanced-12': 'Inversion - Advanced',
        'misc-expressions': 'Other Expressions',
        'misc-expressions-practice-15': 'Other Expressions - Practice',
        'misc-expressions-advanced-12': 'Other Expressions - Advanced'
    }
    return englishTitles[topicId] || 'English Phrases and Expressions'
}

function getEnglishTopicExcerpt(topicId) {
    const englishExcerpts = {
        'had-sth-done-basics': 'Basic exercises with have/get something done construction.',
        'had-sth-done-practice-15': '15 practice questions with different tenses.',
        'had-sth-done-advanced-12': '12 more difficult questions with advanced constructions.',
        'indirect-questions-form': 'Basic exercises with indirect questions.',
        'indirect-questions-practice-15': '15 practice questions with different expressions.',
        'indirect-questions-advanced-12': '12 more difficult questions with formal phrases.',
        'unreal-past-wishes': 'Basic exercises with expressing wishes and regrets.',
        'unreal-past-practice-15': '15 practice questions with different constructions.',
        'unreal-past-advanced-12': '12 more difficult questions in business contexts.',
        'cleft-it-what': 'Basic exercises with emphasizing sentence elements.',
        'cleft-sentences-practice-15': '15 practice questions with different contexts.',
        'cleft-sentences-advanced-12': '12 more difficult questions in formal contexts.',
        'participle-reduction': 'Basic exercises with participle clauses.',
        'participle-clauses-practice-15': '15 practice questions with different situations.',
        'participle-clauses-advanced-12': '12 more difficult questions with perfect participle.',
        'inversion-negative': 'Basic exercises with inversion after negative expressions.',
        'inversion-practice-15': '15 practice questions with different types of inversion.',
        'inversion-advanced-12': '12 more difficult questions in business contexts.',
        'misc-expressions': 'Basic exercises: so/such, be supposed to, would rather, used to.',
        'misc-expressions-practice-15': '15 practice questions with different constructions.',
        'misc-expressions-advanced-12': '12 more difficult questions in formal contexts.'
    }
    return englishExcerpts[topicId] || 'English phrases and expressions exercises.'
}