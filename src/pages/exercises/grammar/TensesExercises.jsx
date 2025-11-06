import React, { useMemo, useState, useEffect } from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import '../../../styles/topic-cards.css'
import { useExerciseScores } from '../useExerciseScores'

const sections = [
    { id: 'present', label: 'Czasy Teraźniejsze' },
    { id: 'past', label: 'Czasy Przeszłe' },
    { id: 'future', label: 'Czasy Przyszłe' },
]

// Boksy odpowiadające zagadnieniom w gramatyce
const TOPICS = {
    present: [
        { id: 'present-simple', title: 'Present Simple 🎯', excerpt: 'Ćwiczenia z czasu teraźniejszego prostego.' },
        { id: 'present-continuous', title: 'Present Continuous ⏳', excerpt: 'Ćwiczenia z czasu teraźniejszego ciągłego.' },
        { id: 'present-perfect-simple', title: 'Present Perfect Simple ✅', excerpt: 'Ćwiczenia z czasu przeszło-teraźniejszego.' },
        { id: 'present-perfect-continuous', title: 'Present Perfect Continuous 🔄', excerpt: 'Ćwiczenia z czasu przeszło-teraźniejszego ciągłego.' },
    ],
    past: [
        { id: 'past-simple', title: 'Past Simple ⏪', excerpt: 'Ćwiczenia z czasu przeszłego prostego.' },
        { id: 'past-continuous', title: 'Past Continuous 🔄', excerpt: 'Ćwiczenia z czasu przeszłego ciągłego.' },
        { id: 'past-perfect-simple', title: 'Past Perfect Simple ✅', excerpt: 'Ćwiczenia z czasu zaprzeszłego.' },
        { id: 'past-perfect-continuous', title: 'Past Perfect Continuous 🔄', excerpt: 'Ćwiczenia z czasu zaprzeszłego ciągłego.' },
    ],
    future: [
        { id: 'future-simple', title: 'Future Simple 🚀', excerpt: 'Ćwiczenia z czasu przyszłego prostego.' },
        { id: 'future-continuous', title: 'Future Continuous ⏳', excerpt: 'Ćwiczenia z czasu przyszłego ciągłego.' },
        { id: 'future-perfect-simple', title: 'Future Perfect Simple ✅', excerpt: 'Ćwiczenia z czasu przyszłego dokonanego.' },
        { id: 'future-perfect-continuous', title: 'Future Perfect Continuous 🔄', excerpt: 'Ćwiczenia z czasu przyszłego dokonanego ciągłego.' },
        { id: 'other-future-forms', title: 'Inne formy przyszłe 🎯', excerpt: 'Be going to, Present Continuous dla przyszłości.' },
    ],
}

const QUIZZES = {
    'present-simple': [
        {
            id: 'ps1',
            question: 'Wybierz poprawne zdanie:',
            options: ['She work in an office.', 'She works in an office.', 'She is work in an office.'],
            correct: 1,
        },
        {
            id: 'ps2',
            question: 'Które zdanie opisuje nawyk?',
            options: ['I am reading a book now.', 'I read books every day.', 'I have read this book.'],
            correct: 1,
        },
        {
            id: 'ps3',
            question: 'Wybierz poprawną formę dla "he":',
            options: ['He go to school.', 'He goes to school.', 'He is go to school.'],
            correct: 1,
        },
        {
            id: 'ps4',
            question: 'Które zdanie opisuje fakt naukowy?',
            options: ['Water boils at 100°C.', 'Water is boiling now.', 'Water has boiled.'],
            correct: 0,
        },
        {
            id: 'ps5',
            question: 'Wybierz poprawne przeczenie:',
            options: ['She doesn\'t like coffee.', 'She don\'t like coffee.', 'She not like coffee.'],
            correct: 0,
        },
        {
            id: 'ps6',
            question: 'Które zdanie jest poprawne?',
            options: ['The sun rise in the east.', 'The sun rises in the east.', 'The sun is rising in the east.'],
            correct: 1,
        },
        {
            id: 'ps7',
            question: 'Wybierz poprawne pytanie:',
            options: ['Do you speak English?', 'You speak English?', 'Are you speak English?'],
            correct: 0,
        },
        {
            id: 'ps8',
            question: 'Które zdanie opisuje rozkład jazdy?',
            options: ['The train leaves at 5 PM.', 'The train is leaving at 5 PM.', 'The train has left at 5 PM.'],
            correct: 0,
        },
        {
            id: 'ps9',
            question: 'Wybierz poprawną formę dla "they":',
            options: ['They plays football.', 'They play football.', 'They are play football.'],
            correct: 1,
        },
        {
            id: 'ps10',
            question: 'Które zdanie używa czasownika stanowego?',
            options: ['I know the answer.', 'I am knowing the answer.', 'I have known the answer.'],
            correct: 0,
        },
    ],
    'present-continuous': [
        {
            id: 'pc1',
            question: 'Wybierz poprawne zdanie:',
            options: ['I am writing an email now.', 'I write an email now.', 'I have written an email now.'],
            correct: 0,
        },
        {
            id: 'pc2',
            question: 'Które zdanie opisuje czynność w tej chwili?',
            options: ['She works in a bank.', 'She is working on a project.', 'She has worked here for years.'],
            correct: 1,
        },
        {
            id: 'pc3',
            question: 'Wybierz poprawną formę:',
            options: ['They are watching TV.', 'They watching TV.', 'They is watching TV.'],
            correct: 0,
        },
        {
            id: 'pc4',
            question: 'Które zdanie opisuje tymczasową sytuację?',
            options: ['I live in London.', 'I am living with my parents this month.', 'I have lived here since 2020.'],
            correct: 1,
        },
        {
            id: 'pc5',
            question: 'Wybierz poprawne przeczenie:',
            options: ['He isn\'t working today.', 'He not working today.', 'He doesn\'t working today.'],
            correct: 0,
        },
        {
            id: 'pc6',
            question: 'Które zdanie opisuje ustalony plan?',
            options: ['I meet my friends tomorrow.', 'I am meeting my friends tomorrow.', 'I have met my friends tomorrow.'],
            correct: 1,
        },
        {
            id: 'pc7',
            question: 'Wybierz poprawne pytanie:',
            options: ['Are you listening to me?', 'Do you listening to me?', 'You are listening to me?'],
            correct: 0,
        },
        {
            id: 'pc8',
            question: 'Które zdanie opisuje zmianę?',
            options: ['The weather gets warmer.', 'The weather is getting warmer.', 'The weather has got warmer.'],
            correct: 1,
        },
        {
            id: 'pc9',
            question: 'Wybierz poprawną formę -ing:',
            options: ['running', 'runing', 'runnning'],
            correct: 0,
        },
        {
            id: 'pc10',
            question: 'Które zdanie NIE powinno używać Present Continuous?',
            options: ['I am wanting a coffee.', 'I am drinking coffee.', 'I am making coffee.'],
            correct: 0,
        },
    ],
    'present-perfect-simple': [
        {
            id: 'pps1',
            question: 'Wybierz poprawne zdanie:',
            options: ['I have visited Paris three times.', 'I visit Paris three times.', 'I am visiting Paris three times.'],
            correct: 0,
        },
        {
            id: 'pps2',
            question: 'Które zdanie opisuje doświadczenie życiowe?',
            options: ['I saw that movie.', 'I have seen that movie.', 'I am seeing that movie.'],
            correct: 1,
        },
        {
            id: 'pps3',
            question: 'Wybierz poprawną formę:',
            options: ['She has finished her work.', 'She have finished her work.', 'She is finished her work.'],
            correct: 0,
        },
        {
            id: 'pps4',
            question: 'Które zdanie opisuje skutek w teraźniejszości?',
            options: ['I lost my keys.', 'I have lost my keys.', 'I was losing my keys.'],
            correct: 1,
        },
        {
            id: 'pps5',
            question: 'Wybierz poprawne zdanie z "just":',
            options: ['I have just finished.', 'I just have finished.', 'I am just finishing.'],
            correct: 0,
        },
        {
            id: 'pps6',
            question: 'Które zdanie używa "for" poprawnie?',
            options: ['I have lived here for 5 years.', 'I have lived here since 5 years.', 'I live here for 5 years.'],
            correct: 0,
        },
        {
            id: 'pps7',
            question: 'Wybierz poprawne zdanie z "yet":',
            options: ['I haven\'t finished yet.', 'I haven\'t finished already.', 'I didn\'t finish yet.'],
            correct: 0,
        },
        {
            id: 'pps8',
            question: 'Które zdanie używa "since" poprawnie?',
            options: ['I have worked here since 2020.', 'I have worked here for 2020.', 'I work here since 2020.'],
            correct: 0,
        },
        {
            id: 'pps9',
            question: 'Wybierz poprawne pytanie:',
            options: ['Have you ever been to Japan?', 'Did you ever been to Japan?', 'Are you ever been to Japan?'],
            correct: 0,
        },
        {
            id: 'pps10',
            question: 'Które zdanie opisuje niedawne wydarzenie?',
            options: ['I have recently started a new job.', 'I recently started a new job.', 'I am recently starting a new job.'],
            correct: 0,
        },
    ],
    'present-perfect-continuous': [
        {
            id: 'ppc1',
            question: 'Wybierz poprawne zdanie:',
            options: ['I have been studying for 2 hours.', 'I have studied for 2 hours.', 'I am studying for 2 hours.'],
            correct: 0,
        },
        {
            id: 'ppc2',
            question: 'Które zdanie podkreśla czas trwania?',
            options: ['She has written a book.', 'She has been writing a book all year.', 'She writes books.'],
            correct: 1,
        },
        {
            id: 'ppc3',
            question: 'Wybierz poprawną formę:',
            options: ['They have been waiting since morning.', 'They have waited since morning.', 'They are waiting since morning.'],
            correct: 0,
        },
        {
            id: 'ppc4',
            question: 'Które zdanie opisuje przyczynę stanu?',
            options: ['I am tired because I have been working.', 'I am tired because I worked.', 'I am tired because I work.'],
            correct: 0,
        },
        {
            id: 'ppc5',
            question: 'Wybierz poprawne przeczenie:',
            options: ['He hasn\'t been feeling well.', 'He hasn\'t felt well.', 'He isn\'t feeling well.'],
            correct: 0,
        },
        {
            id: 'ppc6',
            question: 'Które zdanie opisuje czynność niedawno zakończoną?',
            options: ['I have been running.', 'I have run.', 'I run.'],
            correct: 0,
        },
        {
            id: 'ppc7',
            question: 'Wybierz poprawne pytanie:',
            options: ['How long have you been learning English?', 'How long do you learn English?', 'How long are you learning English?'],
            correct: 0,
        },
        {
            id: 'ppc8',
            question: 'Które zdanie opisuje tymczasową sytuację?',
            options: ['I have been living here temporarily.', 'I live here.', 'I have lived here for years.'],
            correct: 0,
        },
        {
            id: 'ppc9',
            question: 'Różnica między "I have painted" a "I have been painting":',
            options: ['Pierwsze: rezultat, drugie: czas trwania', 'Pierwsze: czas trwania, drugie: rezultat', 'Nie ma różnicy'],
            correct: 0,
        },
        {
            id: 'ppc10',
            question: 'Wybierz poprawne zdanie:',
            options: ['It has been raining all day.', 'It has rained all day.', 'It is raining all day.'],
            correct: 0,
        },
    ],
    'past-simple': [
        {
            id: 'pas1',
            question: 'Wybierz poprawne zdanie:',
            options: ['I watched a movie yesterday.', 'I watch a movie yesterday.', 'I have watched a movie yesterday.'],
            correct: 0,
        },
        {
            id: 'pas2',
            question: 'Które zdanie opisuje zakończoną czynność?',
            options: ['I was working when she called.', 'I worked from 9 to 5.', 'I had worked before she arrived.'],
            correct: 1,
        },
        {
            id: 'pas3',
            question: 'Wybierz poprawną formę czasownika nieregularnego:',
            options: ['goed', 'went', 'gone'],
            correct: 1,
        },
        {
            id: 'pas4',
            question: 'Które zdanie używa "did" poprawnie?',
            options: ['Did you see the film?', 'Saw you the film?', 'Have you saw the film?'],
            correct: 0,
        },
        {
            id: 'pas5',
            question: 'Wybierz poprawne przeczenie:',
            options: ['I didn\'t go to school.', 'I didn\'t went to school.', 'I not went to school.'],
            correct: 0,
        },
        {
            id: 'pas6',
            question: 'Które zdanie opisuje kolejne czynności?',
            options: ['I woke up, had breakfast and went to work.', 'I was waking up when I had breakfast.', 'I have woken up and had breakfast.'],
            correct: 0,
        },
        {
            id: 'pas7',
            question: 'Wybierz poprawną formę dla czasownika regularnego:',
            options: ['playd', 'played', 'plaied'],
            correct: 1,
        },
        {
            id: 'pas8',
            question: 'Które zdanie używa określnika czasu?',
            options: ['I visited Paris last year.', 'I have visited Paris.', 'I am visiting Paris.'],
            correct: 0,
        },
        {
            id: 'pas9',
            question: 'Wybierz poprawne zdanie:',
            options: ['She didn\'t like the movie.', 'She didn\'t liked the movie.', 'She not liked the movie.'],
            correct: 0,
        },
        {
            id: 'pas10',
            question: 'Które zdanie jest opowieścią?',
            options: ['Once upon a time, there lived a king...', 'There lives a king...', 'There has lived a king...'],
            correct: 0,
        },
    ],
    'past-continuous': [
        {
            id: 'pac1',
            question: 'Wybierz poprawne zdanie:',
            options: ['I was watching TV when she called.', 'I watched TV when she called.', 'I had watched TV when she called.'],
            correct: 0,
        },
        {
            id: 'pac2',
            question: 'Które zdanie opisuje czynność w toku?',
            options: ['At 8 PM, I was cooking dinner.', 'At 8 PM, I cooked dinner.', 'At 8 PM, I have cooked dinner.'],
            correct: 0,
        },
        {
            id: 'pac3',
            question: 'Wybierz poprawną formę:',
            options: ['They were sleeping when I arrived.', 'They was sleeping when I arrived.', 'They slept when I arrived.'],
            correct: 0,
        },
        {
            id: 'pac4',
            question: 'Które zdanie opisuje tło dla wydarzenia?',
            options: ['While I was walking, I met a friend.', 'I walked and met a friend.', 'I have walked and met a friend.'],
            correct: 0,
        },
        {
            id: 'pac5',
            question: 'Wybierz poprawne przeczenie:',
            options: ['He wasn\'t working at that time.', 'He didn\'t working at that time.', 'He not working at that time.'],
            correct: 0,
        },
        {
            id: 'pac6',
            question: 'Które zdanie opisuje dwie równoczesne czynności?',
            options: ['While I was cooking, he was cleaning.', 'I cooked and he cleaned.', 'I have cooked and he cleaned.'],
            correct: 0,
        },
        {
            id: 'pac7',
            question: 'Wybierz poprawne pytanie:',
            options: ['What were you doing at 5 PM?', 'What did you do at 5 PM?', 'What you were doing at 5 PM?'],
            correct: 0,
        },
        {
            id: 'pac8',
            question: 'Które zdanie używa "when" poprawnie?',
            options: ['When I arrived, she was cooking.', 'When I was arriving, she cooked.', 'When I arrived, she cooked.'],
            correct: 0,
        },
        {
            id: 'pac9',
            question: 'Wybierz poprawne zdanie z "while":',
            options: ['While I was reading, he was watching TV.', 'While I read, he watched TV.', 'While I was reading, he watched TV.'],
            correct: 0,
        },
        {
            id: 'pac10',
            question: 'Które zdanie opisuje narzekanie na przeszłe nawyki?',
            options: ['He was always complaining.', 'He always complained.', 'He has always complained.'],
            correct: 0,
        },
    ],
    'past-perfect-simple': [
        {
            id: 'pps1',
            question: 'Wybierz poprawne zdanie:',
            options: ['When I arrived, she had already left.', 'When I arrived, she already left.', 'When I arrived, she was already leaving.'],
            correct: 0,
        },
        {
            id: 'pps2',
            question: 'Które zdanie opisuje wcześniejszą przeszłość?',
            options: ['He had finished before I called.', 'He finished before I called.', 'He was finishing before I called.'],
            correct: 0,
        },
        {
            id: 'pps3',
            question: 'Wybierz poprawną formę:',
            options: ['They had eaten when we arrived.', 'They have eaten when we arrived.', 'They ate when we had arrived.'],
            correct: 0,
        },
        {
            id: 'pps4',
            question: 'Które zdanie używa "by" poprawnie?',
            options: ['By 2020, I had graduated.', 'By 2020, I graduated.', 'By 2020, I have graduated.'],
            correct: 0,
        },
        {
            id: 'pps5',
            question: 'Wybierz poprawne przeczenie:',
            options: ['I hadn\'t seen that movie before.', 'I didn\'t see that movie before.', 'I haven\'t seen that movie before.'],
            correct: 0,
        },
        {
            id: 'pps6',
            question: 'Które zdanie jest mową zależną?',
            options: ['She said she had visited Paris.', 'She said she visited Paris.', 'She said she has visited Paris.'],
            correct: 0,
        },
        {
            id: 'pps7',
            question: 'Wybierz poprawne pytanie:',
            options: ['Had you finished when she called?', 'Did you finish when she had called?', 'Have you finished when she called?'],
            correct: 0,
        },
        {
            id: 'pps8',
            question: 'Które zdanie opisuje niespełnioną nadzieję?',
            options: ['I had hoped to see you.', 'I hoped to see you.', 'I have hoped to see you.'],
            correct: 0,
        },
        {
            id: 'pps9',
            question: 'Wybierz poprawne zdanie:',
            options: ['After I had finished, I went home.', 'After I finished, I had gone home.', 'After I have finished, I went home.'],
            correct: 0,
        },
        {
            id: 'pps10',
            question: 'Które zdanie pokazuje właściwą kolejność?',
            options: ['She had already eaten when I arrived.', 'She ate when I had already arrived.', 'She has eaten when I arrived.'],
            correct: 0,
        },
    ],
    'past-perfect-continuous': [
        {
            id: 'ppc1',
            question: 'Wybierz poprawne zdanie:',
            options: ['I had been waiting for an hour when the bus came.', 'I had waited for an hour when the bus came.', 'I was waiting for an hour when the bus came.'],
            correct: 0,
        },
        {
            id: 'ppc2',
            question: 'Które zdanie podkreśla czas trwania?',
            options: ['She had been working there for 5 years.', 'She had worked there for 5 years.', 'She worked there for 5 years.'],
            correct: 0,
        },
        {
            id: 'ppc3',
            question: 'Wybierz poprawną formę:',
            options: ['He had been studying all night.', 'He had studied all night.', 'He was studying all night.'],
            correct: 0,
        },
        {
            id: 'ppc4',
            question: 'Które zdanie opisuje przyczynę stanu?',
            options: ['He was tired because he had been working.', 'He was tired because he worked.', 'He was tired because he has worked.'],
            correct: 0,
        },
        {
            id: 'ppc5',
            question: 'Wybierz poprawne przeczenie:',
            options: ['I hadn\'t been waiting long.', 'I didn\'t wait long.', 'I haven\'t been waiting long.'],
            correct: 0,
        },
        {
            id: 'ppc6',
            question: 'Które zdanie opisuje tymczasową sytuację?',
            options: ['I had been living in London before moving.', 'I lived in London before moving.', 'I have lived in London before moving.'],
            correct: 0,
        },
        {
            id: 'ppc7',
            question: 'Wybierz poprawne pytanie:',
            options: ['How long had you been waiting?', 'How long did you wait?', 'How long have you been waiting?'],
            correct: 0,
        },
        {
            id: 'ppc8',
            question: 'Które zdanie używa "by" poprawnie?',
            options: ['By 5 PM, I had been working for 8 hours.', 'By 5 PM, I worked for 8 hours.', 'By 5 PM, I have worked for 8 hours.'],
            correct: 0,
        },
        {
            id: 'ppc9',
            question: 'Różnica między Past Perfect Simple a Continuous:',
            options: ['Simple: rezultat, Continuous: czas trwania', 'Simple: czas trwania, Continuous: rezultat', 'Nie ma różnicy'],
            correct: 0,
        },
        {
            id: 'ppc10',
            question: 'Wybierz poprawne zdanie:',
            options: ['Her eyes were red because she had been crying.', 'Her eyes were red because she cried.', 'Her eyes were red because she has cried.'],
            correct: 0,
        },
    ],
    'future-simple': [
        {
            id: 'fs1',
            question: 'Wybierz poprawne zdanie:',
            options: ['I will help you tomorrow.', 'I help you tomorrow.', 'I am helping you tomorrow.'],
            correct: 0,
        },
        {
            id: 'fs2',
            question: 'Które zdanie opisuje spontaniczną decyzję?',
            options: ['It\'s cold. I will close the window.', 'I close the window every day.', 'I am closing the window now.'],
            correct: 0,
        },
        {
            id: 'fs3',
            question: 'Wybierz poprawną formę:',
            options: ['She will probably be late.', 'She probably is late.', 'She probably will be late.'],
            correct: 0,
        },
        {
            id: 'fs4',
            question: 'Które zdanie to obietnica?',
            options: ['I will call you tomorrow.', 'I call you tomorrow.', 'I am calling you tomorrow.'],
            correct: 0,
        },
        {
            id: 'fs5',
            question: 'Wybierz poprawne przeczenie:',
            options: ['I won\'t tell anyone.', 'I don\'t tell anyone.', 'I am not telling anyone.'],
            correct: 0,
        },
        {
            id: 'fs6',
            question: 'Które zdanie to oferta pomocy?',
            options: ['Shall I help you?', 'Do I help you?', 'Am I helping you?'],
            correct: 0,
        },
        {
            id: 'fs7',
            question: 'Wybierz poprawne pytanie:',
            options: ['Will you be at the meeting?', 'Do you be at the meeting?', 'Are you be at the meeting?'],
            correct: 0,
        },
        {
            id: 'fs8',
            question: 'Które zdanie opisuje przewidywanie?',
            options: ['I think it will rain.', 'It rains.', 'It is raining.'],
            correct: 0,
        },
        {
            id: 'fs9',
            question: 'Wybierz poprawne zdanie z "shall":',
            options: ['Shall we go?', 'Will we go?', 'Do we go?'],
            correct: 0,
        },
        {
            id: 'fs10',
            question: 'Które zdanie NIE jest spontaniczną decyzją?',
            options: ['I will buy a car next year.', 'I\'ll get you a coffee.', 'I\'ll answer the phone.'],
            correct: 0,
        },
    ],
    'future-continuous': [
        {
            id: 'fc1',
            question: 'Wybierz poprawne zdanie:',
            options: ['This time tomorrow, I will be flying to Paris.', 'This time tomorrow, I fly to Paris.', 'This time tomorrow, I will fly to Paris.'],
            correct: 0,
        },
        {
            id: 'fc2',
            question: 'Które zdanie opisuje czynność w toku w przyszłości?',
            options: ['At 8 PM, we will be having dinner.', 'At 8 PM, we have dinner.', 'At 8 PM, we will have dinner.'],
            correct: 0,
        },
        {
            id: 'fc3',
            question: 'Wybierz poprawną formę:',
            options: ['They will be studying all weekend.', 'They will study all weekend.', 'They study all weekend.'],
            correct: 0,
        },
        {
            id: 'fc4',
            question: 'Które zdanie to grzeczne pytanie o plany?',
            options: ['Will you be using the car tomorrow?', 'Do you use the car tomorrow?', 'Will you use the car tomorrow?'],
            correct: 0,
        },
        {
            id: 'fc5',
            question: 'Wybierz poprawne przeczenie:',
            options: ['I won\'t be working at that time.', 'I don\'t work at that time.', 'I am not working at that time.'],
            correct: 0,
        },
        {
            id: 'fc6',
            question: 'Które zdanie opisuje zaplanowane wydarzenie?',
            options: ['Don\'t call at 6 - I will be working.', 'Don\'t call at 6 - I work.', 'Don\'t call at 6 - I will work.'],
            correct: 0,
        },
        {
            id: 'fc7',
            question: 'Wybierz poprawne pytanie:',
            options: ['What will you be doing at 5 PM?', 'What do you do at 5 PM?', 'What you will be doing at 5 PM?'],
            correct: 0,
        },
        {
            id: 'fc8',
            question: 'Które zdanie opisuje przyszłą czynność ciągłą?',
            options: ['I will be traveling all next week.', 'I will travel all next week.', 'I travel all next week.'],
            correct: 0,
        },
        {
            id: 'fc9',
            question: 'Wybierz poprawne zdanie:',
            options: ['She will be waiting for you.', 'She will wait for you.', 'She waits for you.'],
            correct: 0,
        },
        {
            id: 'fc10',
            question: 'Które zdanie NIE opisuje czynności w toku?',
            options: ['I will finish at 5 PM.', 'I will be working at 5 PM.', 'I will be studying at 5 PM.'],
            correct: 0,
        },
    ],
    'future-perfect-simple': [
        {
            id: 'fps1',
            question: 'Wybierz poprawne zdanie:',
            options: ['By 2025, I will have finished my studies.', 'By 2025, I finish my studies.', 'By 2025, I will finish my studies.'],
            correct: 0,
        },
        {
            id: 'fps2',
            question: 'Które zdanie opisuje czynność zakończoną przed przyszłym momentem?',
            options: ['She will have arrived by the time we get there.', 'She will arrive by the time we get there.', 'She arrives by the time we get there.'],
            correct: 0,
        },
        {
            id: 'fps3',
            question: 'Wybierz poprawną formę:',
            options: ['They will have completed the project by Friday.', 'They will complete the project by Friday.', 'They complete the project by Friday.'],
            correct: 0,
        },
        {
            id: 'fps4',
            question: 'Które zdanie używa "by" poprawnie?',
            options: ['By next year, I will have saved enough money.', 'By next year, I save enough money.', 'By next year, I will save enough money.'],
            correct: 0,
        },
        {
            id: 'fps5',
            question: 'Wybierz poprawne przeczenie:',
            options: ['I won\'t have finished by 6 PM.', 'I don\'t finish by 6 PM.', 'I am not finishing by 6 PM.'],
            correct: 0,
        },
        {
            id: 'fps6',
            question: 'Które zdanie opisuje doświadczenia do danego momentu?',
            options: ['By next year, I will have visited 10 countries.', 'By next year, I visit 10 countries.', 'By next year, I will visit 10 countries.'],
            correct: 0,
        },
        {
            id: 'fps7',
            question: 'Wybierz poprawne pytanie:',
            options: ['Will you have finished by tomorrow?', 'Do you finish by tomorrow?', 'Are you finishing by tomorrow?'],
            correct: 0,
        },
        {
            id: 'fps8',
            question: 'Które zdanie używa "by the time" poprawnie?',
            options: ['By the time you arrive, I will have left.', 'By the time you arrive, I leave.', 'By the time you arrive, I will leave.'],
            correct: 0,
        },
        {
            id: 'fps9',
            question: 'Wybierz poprawne zdanie:',
            options: ['We will have eaten before the movie starts.', 'We will eat before the movie will start.', 'We eat before the movie starts.'],
            correct: 0,
        },
        {
            id: 'fps10',
            question: 'Które zdanie NIE opisuje przyszłego dokonania?',
            options: ['I will be working at 5 PM.', 'I will have worked for 8 hours by 5 PM.', 'I will have finished by 5 PM.'],
            correct: 0,
        },
    ],
    'future-perfect-continuous': [
        {
            id: 'fpc1',
            question: 'Wybierz poprawne zdanie:',
            options: ['By next May, I will have been living here for 10 years.', 'By next May, I live here for 10 years.', 'By next May, I will live here for 10 years.'],
            correct: 0,
        },
        {
            id: 'fpc2',
            question: 'Które zdanie podkreśla czas trwania do przyszłego momentu?',
            options: ['In September, she will have been working here for 5 years.', 'In September, she works here for 5 years.', 'In September, she will work here for 5 years.'],
            correct: 0,
        },
        {
            id: 'fpc3',
            question: 'Wybierz poprawną formę:',
            options: ['By the end of the day, I will have been working for 12 hours.', 'By the end of the day, I work for 12 hours.', 'By the end of the day, I will work for 12 hours.'],
            correct: 0,
        },
        {
            id: 'fpc4',
            question: 'Które zdanie opisuje skutek długotrwałej czynności?',
            options: ['I will be tired because I will have been working all day.', 'I will be tired because I work all day.', 'I will be tired because I will work all day.'],
            correct: 0,
        },
        {
            id: 'fpc5',
            question: 'Wybierz poprawne przeczenie:',
            options: ['I won\'t have been working long by 5 PM.', 'I don\'t work long by 5 PM.', 'I am not working long by 5 PM.'],
            correct: 0,
        },
        {
            id: 'fpc6',
            question: 'Które zdanie używa "for" poprawnie?',
            options: ['I will have been studying for 3 hours by 6 PM.', 'I will have been studying since 3 hours by 6 PM.', 'I will study for 3 hours by 6 PM.'],
            correct: 0,
        },
        {
            id: 'fpc7',
            question: 'Wybierz poprawne pytanie:',
            options: ['How long will you have been waiting?', 'How long do you wait?', 'How long are you waiting?'],
            correct: 0,
        },
        {
            id: 'fpc8',
            question: 'Które zdanie opisuje ciągłą czynność do momentu w przyszłości?',
            options: ['By 2025, we will have been married for 10 years.', 'By 2025, we marry for 10 years.', 'By 2025, we will marry for 10 years.'],
            correct: 0,
        },
        {
            id: 'fpc9',
            question: 'Różnica między Future Perfect Simple a Continuous:',
            options: ['Simple: rezultat, Continuous: czas trwania', 'Simple: czas trwania, Continuous: rezultat', 'Nie ma różnicy'],
            correct: 0,
        },
        {
            id: 'fpc10',
            question: 'Wybierz poprawne zdanie:',
            options: ['They will have been traveling for a month by then.', 'They will travel for a month by then.', 'They travel for a month by then.'],
            correct: 0,
        },
    ],
    'other-future-forms': [
        {
            id: 'of1',
            question: 'Wybierz poprawne zdanie z "be going to":',
            options: ['I am going to study medicine.', 'I will study medicine.', 'I study medicine.'],
            correct: 0,
        },
        {
            id: 'of2',
            question: 'Które zdanie opisuje zamiar?',
            options: ['We are going to buy a new car.', 'We will buy a new car.', 'We buy a new car.'],
            correct: 0,
        },
        {
            id: 'of3',
            question: 'Wybierz zdanie z przewidywaniem na podstawie oznak:',
            options: ['Look at those clouds - it is going to rain.', 'I think it will rain.', 'It rains.'],
            correct: 0,
        },
        {
            id: 'of4',
            question: 'Które zdanie używa Present Continuous dla przyszłości?',
            options: ['I am meeting my friends tonight.', 'I meet my friends tonight.', 'I will meet my friends tonight.'],
            correct: 0,
        },
        {
            id: 'of5',
            question: 'Wybierz poprawne zdanie z Present Simple dla rozkładu:',
            options: ['The train leaves at 7 PM.', 'The train is leaving at 7 PM.', 'The train will leave at 7 PM.'],
            correct: 0,
        },
        {
            id: 'of6',
            question: 'Różnica między "will" a "be going to":',
            options: ['will: spontaniczne, be going to: plany', 'will: plany, be going to: spontaniczne', 'nie ma różnicy'],
            correct: 0,
        },
        {
            id: 'of7',
            question: 'Które zdanie opisuje ustalony plan?',
            options: ['We are getting married in June.', 'We will get married.', 'We get married.'],
            correct: 0,
        },
        {
            id: 'of8',
            question: 'Wybierz poprawne zdanie z harmonogramem:',
            options: ['The store opens at 9 AM tomorrow.', 'The store is opening at 9 AM tomorrow.', 'The store will open at 9 AM tomorrow.'],
            correct: 0,
        },
        {
            id: 'of9',
            question: 'Które zdanie NIE jest poprawną formą przyszłą?',
            options: ['I am wanting to go.', 'I am going to go.', 'I will go.'],
            correct: 0,
        },
        {
            id: 'of10',
            question: 'Wybierz zdanie z "shall" dla sugestii:',
            options: ['Shall we go to the cinema?', 'Will we go to the cinema?', 'Do we go to the cinema?'],
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
            TOPICS.future.find(t => t.id === topicId)?.title
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

export default function TensesExercises() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const active = section ?? 'present'
    const topicId = searchParams.get('topic')
    const basePath = `/cwiczenia/gramatyka/czasy-angielskie/${active}`

    return (
        <main className="topic-layout">
            <div className="container">
                <header className="topic-header">
                    <h2>Ćwiczenia: Czasy angielskie</h2>
                    <p className="muted">Utrwalaj znajomość czasów poprzez praktyczne ćwiczenia</p>
                </header>

                <nav className="subnav" aria-label="Podstrony ćwiczeń: Czasy angielskie">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/cwiczenia/gramatyka/czasy-angielskie/${s.id}`}
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