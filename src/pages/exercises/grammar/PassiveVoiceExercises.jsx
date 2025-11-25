import React, { useMemo, useState, useEffect } from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import { useLanguage } from '../../../context/LanguageContext.jsx'
import useDocumentMeta from '../../../useDocumentMeta'
import '../../../styles/topic-cards.css'
import { useExerciseScores } from '../useExerciseScores'

const sections = [
    { id: 'simple', label: 'Czasy Simple' },
    { id: 'continuous', label: 'Czasy Continuous' },
    { id: 'perfect', label: 'Czasy Perfect' },
    { id: 'modals', label: 'Czasowniki modalne' },
    { id: 'uzycie-wyjatki', label: 'Użycie i wyjątki' },
]

// Boksy odpowiadające zagadnieniom w stronie biernej
const TOPICS = {
    simple: [
        { id: 'passive-simple-forms', title: 'Formy w czasach Simple 🎯', excerpt: 'Podstawowe konstrukcje strony biernej w Present, Past i Future Simple.' },
        { id: 'passive-simple-practice-15', title: 'Simple - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi czasami Simple.' },
        { id: 'passive-simple-advanced-12', title: 'Simple - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z złożonymi zdaniami.' },
    ],
    continuous: [
        { id: 'passive-cont-forms', title: 'Formy w Continuous 🔄', excerpt: 'Czynności w toku w stronie biernej - Present i Past Continuous.' },
        { id: 'passive-cont-practice-15', title: 'Continuous - Praktyka 📚', excerpt: '15 pytań praktycznych z czasami Continuous.' },
        { id: 'passive-cont-advanced-12', title: 'Continuous - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań w kontekstach formalnych.' },
    ],
    perfect: [
        { id: 'passive-perfect-forms', title: 'Formy w Perfect ✅', excerpt: 'Czynności zakończone związkami z teraźniejszością.' },
        { id: 'passive-perfect-practice-15', title: 'Perfect - Praktyka 📚', excerpt: '15 pytań praktycznych z czasami Perfect.' },
        { id: 'passive-perfect-advanced-12', title: 'Perfect - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z Future Perfect.' },
    ],
    modals: [
        { id: 'passive-modals', title: 'Czasowniki modalne 🔧', excerpt: 'Modal + be + V3 - możliwość, obowiązek, pozwolenie.' },
        { id: 'passive-modals-practice-15', title: 'Modalne - Praktyka 📚', excerpt: '15 pytań praktycznych z czasownikami modalnymi.' },
        { id: 'passive-modals-advanced-12', title: 'Modalne - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z Perfect Modal Passive.' },
    ],
    'uzycie-wyjatki': [
        { id: 'passive-usage-exceptions', title: 'Użycie i wyjątki ⚠️', excerpt: 'Kiedy używać strony biernej, typowe błędy, czasowniki bez form biernych.' },
        { id: 'passive-exceptions-practice-15', title: 'Wyjątki - Praktyka 📚', excerpt: '15 pytań praktycznych z wyjątkami.' },
        { id: 'passive-exceptions-advanced-12', title: 'Wyjątki - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań w kontekstach akademickich.' },
    ],
}

const QUIZZES = {
    'passive-simple-forms': [
        {
            id: 'psf1',
            question: 'The letters ___ every morning. (deliver)',
            options: ['are delivered', 'deliver', 'delivered'],
            correct: 0,
        },
        {
            id: 'psf2',
            question: 'This house ___ in 1990. (build)',
            options: ['was built', 'is built', 'has built'],
            correct: 0,
        },
        {
            id: 'psf3',
            question: 'The results ___ tomorrow. (announce)',
            options: ['will announce', 'will be announced', 'are announcing'],
            correct: 1,
        },
        {
            id: 'psf4',
            question: 'English ___ all over the world. (speak)',
            options: ['is spoken', 'speaks', 'spoken'],
            correct: 0,
        },
        {
            id: 'psf5',
            question: 'The window ___ yesterday. (break)',
            options: ['was broken', 'is broken', 'has broken'],
            correct: 0,
        },
        {
            id: 'psf6',
            question: 'The meeting ___ next Monday. (hold)',
            options: ['will hold', 'will be held', 'is holding'],
            correct: 1,
        },
        {
            id: 'psf7',
            question: 'Coffee ___ in Brazil. (grow)',
            options: ['grows', 'is grown', 'grew'],
            correct: 1,
        },
        {
            id: 'psf8',
            question: 'The car ___ every week. (wash)',
            options: ['is washed', 'washes', 'washed'],
            correct: 0,
        },
        {
            id: 'psf9',
            question: 'The book ___ by millions. (read)',
            options: ['is read', 'reads', 'read'],
            correct: 0,
        },
        {
            id: 'psf10',
            question: 'The decision ___ yesterday. (make)',
            options: ['was made', 'is made', 'made'],
            correct: 0,
        },
    ],

    'passive-simple-practice-15': [
        {
            id: 'psp1',
            question: 'The museum ___ at 6 PM every day. (close)',
            options: ['closes', 'is closed', 'was closed'],
            correct: 1,
        },
        {
            id: 'psp2',
            question: 'The new bridge ___ last month. (complete)',
            options: ['was completed', 'is completed', 'completed'],
            correct: 0,
        },
        {
            id: 'psp3',
            question: 'The package ___ tomorrow morning. (deliver)',
            options: ['will deliver', 'will be delivered', 'is delivering'],
            correct: 1,
        },
        {
            id: 'psp4',
            question: 'These computers ___ in China. (manufacture)',
            options: ['manufacture', 'are manufactured', 'manufactured'],
            correct: 1,
        },
        {
            id: 'psp5',
            question: 'The message ___ an hour ago. (send)',
            options: ['was sent', 'is sent', 'sent'],
            correct: 0,
        },
        {
            id: 'psp6',
            question: 'The concert ___ in the city park. (hold)',
            options: ['holds', 'is held', 'was hold'],
            correct: 1,
        },
        {
            id: 'psp7',
            question: 'The report ___ by the manager. (review)',
            options: ['will review', 'will be reviewed', 'is reviewing'],
            correct: 1,
        },
        {
            id: 'psp8',
            question: 'French ___ in many African countries. (speak)',
            options: ['speaks', 'is spoken', 'spoken'],
            correct: 1,
        },
        {
            id: 'psp9',
            question: 'The old building ___ last year. (demolish)',
            options: ['was demolished', 'is demolished', 'demolished'],
            correct: 0,
        },
        {
            id: 'psp10',
            question: 'Dinner ___ at 7 PM every evening. (serve)',
            options: ['serves', 'is served', 'served'],
            correct: 1,
        },
        {
            id: 'psp11',
            question: 'The contract ___ next week. (sign)',
            options: ['will sign', 'will be signed', 'is signing'],
            correct: 1,
        },
        {
            id: 'psp12',
            question: 'This song ___ by children all over the world. (love)',
            options: ['loves', 'is loved', 'loved'],
            correct: 1,
        },
        {
            id: 'psp13',
            question: 'The problem ___ immediately. (address)',
            options: ['addresses', 'is addressed', 'addressed'],
            correct: 1,
        },
        {
            id: 'psp14',
            question: 'The prize ___ to the best student. (award)',
            options: ['awards', 'is awarded', 'awarded'],
            correct: 1,
        },
        {
            id: 'psp15',
            question: 'The news ___ everyone in the office. (shock)',
            options: ['shocked', 'was shocked', 'were shocked'],
            correct: 1,
        },
    ],

    'passive-simple-advanced-12': [
        {
            id: 'psa1',
            question: 'The entire project ___ within the allocated budget and timeframe. (complete)',
            options: ['was completed', 'is completed', 'has been completed'],
            correct: 0,
        },
        {
            id: 'psa2',
            question: 'All necessary precautions ___ before proceeding with the experiment. (take)',
            options: ['were taken', 'are taken', 'have taken'],
            correct: 0,
        },
        {
            id: 'psa3',
            question: 'The annual financial report ___ to the board of directors next quarter. (present)',
            options: ['will present', 'will be presented', 'is presenting'],
            correct: 1,
        },
        {
            id: 'psa4',
            question: 'Traditional methods still ___ in many rural communities. (use)',
            options: ['use', 'are used', 'used'],
            correct: 1,
        },
        {
            id: 'psa5',
            question: 'The historical documents ___ in a specially designed climate-controlled room. (store)',
            options: ['store', 'are stored', 'stored'],
            correct: 1,
        },
        {
            id: 'psa6',
            question: 'The new regulations ___ across all departments starting next month. (implement)',
            options: ['will implement', 'will be implemented', 'are implementing'],
            correct: 1,
        },
        {
            id: 'psa7',
            question: 'Critical decisions ___ only after thorough consultation with all stakeholders. (make)',
            options: ['make', 'are made', 'made'],
            correct: 1,
        },
        {
            id: 'psa8',
            question: 'The ancient artifact ___ during the archaeological excavation last summer. (discover)',
            options: ['was discovered', 'is discovered', 'discovered'],
            correct: 0,
        },
        {
            id: 'psa9',
            question: 'Employee performance ___ through a comprehensive evaluation system. (assess)',
            options: ['assesses', 'is assessed', 'assessed'],
            correct: 1,
        },
        {
            id: 'psa10',
            question: 'The international conference ___ in a different country each year. (host)',
            options: ['hosts', 'is hosted', 'hosted'],
            correct: 1,
        },
        {
            id: 'psa11',
            question: 'All customer complaints ___ within 24 hours. (address)',
            options: ['address', 'are addressed', 'addressed'],
            correct: 1,
        },
        {
            id: 'psa12',
            question: 'The groundbreaking research ___ in several prestigious scientific journals. (publish)',
            options: ['published', 'was published', 'is published'],
            correct: 1,
        },
    ],

    'passive-cont-forms': [
        {
            id: 'pcf1',
            question: 'The road ___ right now. (repair)',
            options: ['is repaired', 'is being repaired', 'was repaired'],
            correct: 1,
        },
        {
            id: 'pcf2',
            question: 'The room ___ when we arrived. (clean)',
            options: ['was being cleaned', 'is being cleaned', 'has been cleaned'],
            correct: 0,
        },
        {
            id: 'pcf3',
            question: 'A new hospital ___ in our city. (build)',
            options: ['is built', 'is being built', 'was built'],
            correct: 1,
        },
        {
            id: 'pcf4',
            question: 'The documents ___ when the fire started. (check)',
            options: ['were checked', 'were being checked', 'had been checked'],
            correct: 1,
        },
        {
            id: 'pcf5',
            question: 'Dinner ___ at the moment. (prepare)',
            options: ['is prepared', 'is being prepared', 'was prepared'],
            correct: 1,
        },
        {
            id: 'pcf6',
            question: 'The car ___ when it started to rain. (wash)',
            options: ['was washed', 'was being washed', 'had been washed'],
            correct: 1,
        },
        {
            id: 'pcf7',
            question: 'Formuła dla Present Continuous Passive to:',
            options: ['be + V3', 'be being + V3', 'have been + V3'],
            correct: 1,
        },
        {
            id: 'pcf8',
            question: 'The problem ___ right now. (discuss)',
            options: ['is discussed', 'is being discussed', 'was discussed'],
            correct: 1,
        },
        {
            id: 'pcf9',
            question: 'The house ___ when they bought it. (renovate)',
            options: ['was renovated', 'was being renovated', 'had been renovated'],
            correct: 1,
        },
        {
            id: 'pcf10',
            question: 'Which tense doesn\'t exist in passive voice?',
            options: ['Future Continuous', 'Past Continuous', 'Present Continuous'],
            correct: 0,
        },
    ],

    'passive-cont-practice-15': [
        {
            id: 'pcp1',
            question: 'The bridge ___ since January. (construct)',
            options: ['is constructed', 'is being constructed', 'was constructed'],
            correct: 1,
        },
        {
            id: 'pcp2',
            question: 'The suspect ___ by the police right now. (question)',
            options: ['is questioned', 'is being questioned', 'was questioned'],
            correct: 1,
        },
        {
            id: 'pcp3',
            question: 'The software ___ when the power went out. (update)',
            options: ['was updated', 'was being updated', 'had been updated'],
            correct: 1,
        },
        {
            id: 'pcp4',
            question: 'New products ___ constantly. (develop)',
            options: ['develop', 'are developed', 'are being developed'],
            correct: 2,
        },
        {
            id: 'pcp5',
            question: 'The report ___ when the manager called. (prepare)',
            options: ['was prepared', 'was being prepared', 'had been prepared'],
            correct: 1,
        },
        {
            id: 'pcp6',
            question: 'The garden ___ at the moment. (water)',
            options: ['is watered', 'is being watered', 'was watered'],
            correct: 1,
        },
        {
            id: 'pcp7',
            question: 'The system ___ when the error occurred. (test)',
            options: ['was tested', 'was being tested', 'had been tested'],
            correct: 1,
        },
        {
            id: 'pcp8',
            question: 'Changes ___ to the website currently. (make)',
            options: ['make', 'are made', 'are being made'],
            correct: 2,
        },
        {
            id: 'pcp9',
            question: 'The patient ___ when the doctor arrived. (examine)',
            options: ['was examined', 'was being examined', 'had been examined'],
            correct: 1,
        },
        {
            id: 'pcp10',
            question: 'New employees ___ this week. (train)',
            options: ['train', 'are trained', 'are being trained'],
            correct: 2,
        },
        {
            id: 'pcp11',
            question: 'The building ___ when the storm hit. (paint)',
            options: ['was painted', 'was being painted', 'had been painted'],
            correct: 1,
        },
        {
            id: 'pcp12',
            question: 'The contract ___ at the moment. (negotiate)',
            options: ['is negotiated', 'is being negotiated', 'was negotiated'],
            correct: 1,
        },
        {
            id: 'pcp13',
            question: 'The data ___ when the system crashed. (analyze)',
            options: ['was analyzed', 'was being analyzed', 'had been analyzed'],
            correct: 1,
        },
        {
            id: 'pcp14',
            question: 'Improvements ___ to the process continuously. (make)',
            options: ['make', 'are made', 'are being made'],
            correct: 2,
        },
        {
            id: 'pcp15',
            question: 'The car ___ when the accident happened. (service)',
            options: ['was serviced', 'was being serviced', 'had been serviced'],
            correct: 1,
        },
    ],

    'passive-cont-advanced-12': [
        {
            id: 'pca1',
            question: 'Comprehensive safety protocols ___ throughout the manufacturing facility. (implement)',
            options: ['are implemented', 'are being implemented', 'were implemented'],
            correct: 1,
        },
        {
            id: 'pca2',
            question: 'The international trade agreement ___ when political tensions arose. (negotiate)',
            options: ['was negotiated', 'was being negotiated', 'had been negotiated'],
            correct: 1,
        },
        {
            id: 'pca3',
            question: 'Advanced AI algorithms ___ to optimize the company\'s operational efficiency. (develop)',
            options: ['develop', 'are developed', 'are being developed'],
            correct: 2,
        },
        {
            id: 'pca4',
            question: 'The archaeological site ___ when the rare artifact was discovered. (excavate)',
            options: ['was excavated', 'was being excavated', 'had been excavated'],
            correct: 1,
        },
        {
            id: 'pca5',
            question: 'Significant modifications ___ to the original design specifications. (make)',
            options: ['make', 'are made', 'are being made'],
            correct: 2,
        },
        {
            id: 'pca6',
            question: 'The confidential documents ___ when the security breach was detected. (transfer)',
            options: ['were transferred', 'were being transferred', 'had been transferred'],
            correct: 1,
        },
        {
            id: 'pca7',
            question: 'Sustainable energy solutions ___ across all corporate facilities. (integrate)',
            options: ['integrate', 'are integrated', 'are being integrated'],
            correct: 2,
        },
        {
            id: 'pca8',
            question: 'The patient\'s condition ___ when the specialist arrived. (monitor)',
            options: ['was monitored', 'was being monitored', 'had been monitored'],
            correct: 1,
        },
        {
            id: 'pca9',
            question: 'Global supply chains ___ to adapt to changing market conditions. (restructure)',
            options: ['restructure', 'are restructured', 'are being restructured'],
            correct: 2,
        },
        {
            id: 'pca10',
            question: 'The research methodology ___ when new evidence emerged. (refine)',
            options: ['was refined', 'was being refined', 'had been refined'],
            correct: 1,
        },
        {
            id: 'pca11',
            question: 'Digital transformation initiatives ___ throughout the organization. (implement)',
            options: ['implement', 'are implemented', 'are being implemented'],
            correct: 2,
        },
        {
            id: 'pca12',
            question: 'The emergency response plan ___ when the disaster struck. (activate)',
            options: ['was activated', 'was being activated', 'had been activated'],
            correct: 1,
        },
    ],

    'passive-perfect-forms': [
        {
            id: 'ppf1',
            question: 'The project ___ already. (complete)',
            options: ['has been completed', 'was completed', 'is being completed'],
            correct: 0,
        },
        {
            id: 'ppf2',
            question: 'By Friday, the work ___ . (finish)',
            options: ['will have done', 'will have been finished', 'will be finished'],
            correct: 1,
        },
        {
            id: 'ppf3',
            question: 'The money ___ before we noticed. (steal)',
            options: ['had been stolen', 'was stolen', 'has been stolen'],
            correct: 0,
        },
        {
            id: 'ppf4',
            question: 'Present Perfect Passive to:',
            options: ['had been + V3', 'has/have been + V3', 'will have been + V3'],
            correct: 1,
        },
        {
            id: 'ppf5',
            question: 'The decision ___ yet. (not/make)',
            options: ['hasn\'t been made', 'wasn\'t made', 'isn\'t made'],
            correct: 0,
        },
        {
            id: 'ppf6',
            question: 'By next year, the bridge ___ . (construct)',
            options: ['will have constructed', 'will have been constructed', 'will be constructed'],
            correct: 1,
        },
        {
            id: 'ppf7',
            question: 'The documents ___ before the meeting started. (print)',
            options: ['had been printed', 'were printed', 'have been printed'],
            correct: 0,
        },
        {
            id: 'ppf8',
            question: 'Future Perfect Passive to:',
            options: ['will be + V3', 'will have been + V3', 'would have been + V3'],
            correct: 1,
        },
        {
            id: 'ppf9',
            question: 'The problem ___ since last week. (investigate)',
            options: ['has been investigated', 'was investigated', 'is investigated'],
            correct: 0,
        },
        {
            id: 'ppf10',
            question: 'Past Perfect Passive to:',
            options: ['had been + V3', 'has been + V3', 'was being + V3'],
            correct: 0,
        },
    ],

    'passive-perfect-practice-15': [
        {
            id: 'ppp1',
            question: 'The report ___ by the time you arrive. (finish)',
            options: ['will finish', 'will be finished', 'will have been finished'],
            correct: 2,
        },
        {
            id: 'ppp2',
            question: 'All the tickets ___ before we got there. (sell)',
            options: ['had been sold', 'were sold', 'have been sold'],
            correct: 0,
        },
        {
            id: 'ppp3',
            question: 'The house ___ for three months. (paint)',
            options: ['has been painted', 'was painted', 'is painted'],
            correct: 0,
        },
        {
            id: 'ppp4',
            question: 'By 2030, renewable energy ___ worldwide. (adopt)',
            options: ['will adopt', 'will be adopted', 'will have been adopted'],
            correct: 2,
        },
        {
            id: 'ppp5',
            question: 'The message ___ before I could stop it. (send)',
            options: ['had been sent', 'was sent', 'has been sent'],
            correct: 0,
        },
        {
            id: 'ppp6',
            question: 'This book ___ into 20 languages. (translate)',
            options: ['has been translated', 'was translated', 'is translated'],
            correct: 0,
        },
        {
            id: 'ppp7',
            question: 'The preparations ___ by tomorrow morning. (complete)',
            options: ['will complete', 'will be completed', 'will have been completed'],
            correct: 2,
        },
        {
            id: 'ppp8',
            question: 'The mistake ___ until it was too late. (not/notice)',
            options: ['hadn\'t been noticed', 'wasn\'t noticed', 'hasn\'t been noticed'],
            correct: 0,
        },
        {
            id: 'ppp9',
            question: 'The system ___ since last update. (improve)',
            options: ['has been improved', 'was improved', 'is improved'],
            correct: 0,
        },
        {
            id: 'ppp10',
            question: 'By the end of the decade, the technology ___ globally. (implement)',
            options: ['will implement', 'will be implemented', 'will have been implemented'],
            correct: 2,
        },
        {
            id: 'ppp11',
            question: 'The evidence ___ before the trial began. (gather)',
            options: ['had been gathered', 'was gathered', 'has been gathered'],
            correct: 0,
        },
        {
            id: 'ppp12',
            question: 'The problem ___ for years. (ignore)',
            options: ['has been ignored', 'was ignored', 'is ignored'],
            correct: 0,
        },
        {
            id: 'ppp13',
            question: 'The project ___ by the deadline. (complete)',
            options: ['will complete', 'will be completed', 'will have been completed'],
            correct: 2,
        },
        {
            id: 'ppp14',
            question: 'The decision ___ before the meeting. (make)',
            options: ['had been made', 'was made', 'has been made'],
            correct: 0,
        },
        {
            id: 'ppp15',
            question: 'The software ___ multiple times this year. (update)',
            options: ['has been updated', 'was updated', 'is updated'],
            correct: 0,
        },
    ],

    'passive-perfect-advanced-12': [
        {
            id: 'ppa1',
            question: 'Significant progress ___ in cancer research over the past decade. (make)',
            options: ['has made', 'has been made', 'was made'],
            correct: 1,
        },
        {
            id: 'ppa2',
            question: 'By the time the audit begins, all financial records ___ . (review)',
            options: ['will review', 'will be reviewed', 'will have been reviewed'],
            correct: 2,
        },
        {
            id: 'ppa3',
            question: 'The theoretical framework ___ long before the experimental phase commenced. (establish)',
            options: ['had established', 'had been established', 'was established'],
            correct: 1,
        },
        {
            id: 'ppa4',
            question: 'Multiple clinical trials ___ since the drug\'s initial discovery. (conduct)',
            options: ['have conducted', 'have been conducted', 'were conducted'],
            correct: 1,
        },
        {
            id: 'ppa5',
            question: 'By 2050, autonomous vehicles ___ on most urban roads. (deploy)',
            options: ['will deploy', 'will be deployed', 'will have been deployed'],
            correct: 2,
        },
        {
            id: 'ppa6',
            question: 'The necessary approvals ___ before construction could proceed. (obtain)',
            options: ['had obtained', 'had been obtained', 'were obtained'],
            correct: 1,
        },
        {
            id: 'ppa7',
            question: 'Extensive market research ___ prior to the product launch. (complete)',
            options: ['had completed', 'had been completed', 'was completed'],
            correct: 1,
        },
        {
            id: 'ppa8',
            question: 'The organization\'s policies ___ several times this year. (revise)',
            options: ['have revised', 'have been revised', 'were revised'],
            correct: 1,
        },
        {
            id: 'ppa9',
            question: 'By the end of the fiscal year, all departmental objectives ___ . (achieve)',
            options: ['will achieve', 'will be achieved', 'will have been achieved'],
            correct: 2,
        },
        {
            id: 'ppa10',
            question: 'The initial hypothesis ___ before additional data became available. (formulate)',
            options: ['had formulated', 'had been formulated', 'was formulated'],
            correct: 1,
        },
        {
            id: 'ppa11',
            question: 'Considerable resources ___ into the development of sustainable technologies. (invest)',
            options: ['have invested', 'have been invested', 'were invested'],
            correct: 1,
        },
        {
            id: 'ppa12',
            question: 'The comprehensive safety assessment ___ before regulatory approval was granted. (perform)',
            options: ['had performed', 'had been performed', 'was performed'],
            correct: 1,
        },
    ],

    'passive-modals': [
        {
            id: 'pm1',
            question: 'The task ___ today. (must/complete)',
            options: ['must complete', 'must be completed', 'must been completed'],
            correct: 1,
        },
        {
            id: 'pm2',
            question: 'It ___ easily. (could/solve)',
            options: ['could be solved', 'could solved', 'could be solve'],
            correct: 0,
        },
        {
            id: 'pm3',
            question: 'The form ___ by Friday. (should/return)',
            options: ['should return', 'should be returned', 'should returned'],
            correct: 1,
        },
        {
            id: 'pm4',
            question: 'The meeting ___ . (might/postpone)',
            options: ['might postpone', 'might be postponed', 'might postponed'],
            correct: 1,
        },
        {
            id: 'pm5',
            question: 'The rules ___ strictly. (must/follow)',
            options: ['must follow', 'must be followed', 'must followed'],
            correct: 1,
        },
        {
            id: 'pm6',
            question: 'This ___ with care. (should/handle)',
            options: ['should handle', 'should be handled', 'should handled'],
            correct: 1,
        },
        {
            id: 'pm7',
            question: 'The problem ___ immediately. (ought to/address)',
            options: ['ought to address', 'ought to be addressed', 'ought to addressed'],
            correct: 1,
        },
        {
            id: 'pm8',
            question: 'The decision ___ soon. (will/announce)',
            options: ['will announce', 'will be announced', 'will announced'],
            correct: 1,
        },
        {
            id: 'pm9',
            question: 'The work ___ by professionals. (should/do)',
            options: ['should do', 'should be done', 'should done'],
            correct: 1,
        },
        {
            id: 'pm10',
            question: 'Modal Perfect Passive: It ___ avoided.',
            options: ['should be have been', 'should have been', 'should has been'],
            correct: 1,
        },
    ],

    'passive-modals-practice-15': [
        {
            id: 'pmp1',
            question: 'The application ___ by the end of the week. (must/submit)',
            options: ['must submit', 'must be submitted', 'must submitted'],
            correct: 1,
        },
        {
            id: 'pmp2',
            question: 'The issue ___ immediately. (should/resolve)',
            options: ['should resolve', 'should be resolved', 'should resolved'],
            correct: 1,
        },
        {
            id: 'pmp3',
            question: 'The package ___ by noon. (can/deliver)',
            options: ['can deliver', 'can be delivered', 'can delivered'],
            correct: 1,
        },
        {
            id: 'pmp4',
            question: 'The decision ___ carefully. (ought to/consider)',
            options: ['ought to consider', 'ought to be considered', 'ought to considered'],
            correct: 1,
        },
        {
            id: 'pmp5',
            question: 'The documents ___ by tomorrow. (have to/prepare)',
            options: ['have to prepare', 'have to be prepared', 'have to prepared'],
            correct: 1,
        },
        {
            id: 'pmp6',
            question: 'The matter ___ seriously. (should/take)',
            options: ['should take', 'should be taken', 'should taken'],
            correct: 1,
        },
        {
            id: 'pmp7',
            question: 'The results ___ soon. (will/publish)',
            options: ['will publish', 'will be published', 'will published'],
            correct: 1,
        },
        {
            id: 'pmp8',
            question: 'The problem ___ with proper tools. (can/fix)',
            options: ['can fix', 'can be fixed', 'can fixed'],
            correct: 1,
        },
        {
            id: 'pmp9',
            question: 'The meeting ___ until next week. (may/postpone)',
            options: ['may postpone', 'may be postponed', 'may postponed'],
            correct: 1,
        },
        {
            id: 'pmp10',
            question: 'The instructions ___ carefully. (must/follow)',
            options: ['must follow', 'must be followed', 'must followed'],
            correct: 1,
        },
        {
            id: 'pmp11',
            question: 'The work ___ by experienced professionals. (should/do)',
            options: ['should do', 'should be done', 'should done'],
            correct: 1,
        },
        {
            id: 'pmp12',
            question: 'The system ___ regularly. (ought to/update)',
            options: ['ought to update', 'ought to be updated', 'ought to updated'],
            correct: 1,
        },
        {
            id: 'pmp13',
            question: 'The information ___ confidentially. (must/treat)',
            options: ['must treat', 'must be treated', 'must treated'],
            correct: 1,
        },
        {
            id: 'pmp14',
            question: 'The proposal ___ by the committee. (will/review)',
            options: ['will review', 'will be reviewed', 'will reviewed'],
            correct: 1,
        },
        {
            id: 'pmp15',
            question: 'The situation ___ immediately. (has to/address)',
            options: ['has to address', 'has to be addressed', 'has to addressed'],
            correct: 1,
        },
    ],

    'passive-modals-advanced-12': [
        {
            id: 'pma1',
            question: 'The environmental impact assessment ___ before construction approval is granted. (must/complete)',
            options: ['must complete', 'must be completed', 'must have completed'],
            correct: 1,
        },
        {
            id: 'pma2',
            question: 'The experimental results ___ through rigorous statistical analysis. (should/validate)',
            options: ['should validate', 'should be validated', 'should have validated'],
            correct: 1,
        },
        {
            id: 'pma3',
            question: 'The security protocols ___ to prevent unauthorized access. (must/strengthen)',
            options: ['must strengthen', 'must be strengthened', 'must have strengthened'],
            correct: 1,
        },
        {
            id: 'pma4',
            question: 'The international standards ___ in all manufacturing processes. (ought to/incorporate)',
            options: ['ought to incorporate', 'ought to be incorporated', 'ought to have incorporated'],
            correct: 1,
        },
        {
            id: 'pma5',
            question: 'The research findings ___ in peer-reviewed journals. (will/publish)',
            options: ['will publish', 'will be published', 'will have published'],
            correct: 1,
        },
        {
            id: 'pma6',
            question: 'The emergency procedures ___ during the initial training session. (should/explain)',
            options: ['should explain', 'should be explained', 'should have explained'],
            correct: 1,
        },
        {
            id: 'pma7',
            question: 'The contractual obligations ___ by all parties involved. (must/fulfill)',
            options: ['must fulfill', 'must be fulfilled', 'must have fulfilled'],
            correct: 1,
        },
        {
            id: 'pma8',
            question: 'The technical specifications ___ before prototype development begins. (have to/finalize)',
            options: ['have to finalize', 'have to be finalized', 'have to have finalized'],
            correct: 1,
        },
        {
            id: 'pma9',
            question: 'The quality control measures ___ throughout the production cycle. (must/implement)',
            options: ['must implement', 'must be implemented', 'must have implemented'],
            correct: 1,
        },
        {
            id: 'pma10',
            question: 'The performance metrics ___ on a quarterly basis. (should/review)',
            options: ['should review', 'should be reviewed', 'should have reviewed'],
            correct: 1,
        },
        {
            id: 'pma11',
            question: 'The ethical guidelines ___ in all clinical trials. (must/adhere to)',
            options: ['must adhere to', 'must be adhered to', 'must have adhered to'],
            correct: 1,
        },
        {
            id: 'pma12',
            question: 'The strategic objectives ___ during the annual planning session. (will/discuss)',
            options: ['will discuss', 'will be discussed', 'will have discussed'],
            correct: 1,
        },
    ],

    'passive-usage-exceptions': [
        {
            id: 'pue1',
            question: 'Które zdanie jest poprawne?',
            options: ['I have a car.', 'A car is had by me.', 'Car is had by me.'],
            correct: 0,
        },
        {
            id: 'pue2',
            question: 'Który czasownik nie ma formy biernej?',
            options: ['build', 'resemble', 'deliver'],
            correct: 1,
        },
        {
            id: 'pue3',
            question: 'Które zdanie jest błędne?',
            options: ['The window was broken.', 'The window was broke.', 'The window has been broken.'],
            correct: 1,
        },
        {
            id: 'pue4',
            question: 'Które zdanie używa strony biernej poprawnie?',
            options: ['English is spoken here.', 'English speaks here.', 'English is spoke here.'],
            correct: 0,
        },
        {
            id: 'pue5',
            question: 'Który czasownik zazwyczaj nie tworzy strony biernej?',
            options: ['like', 'make', 'build'],
            correct: 0,
        },
        {
            id: 'pue6',
            question: 'Które zdanie jest poprawne?',
            options: ['She resembles her mother.', 'Her mother is resembled by her.', 'Her mother is resembled.'],
            correct: 0,
        },
        {
            id: 'pue7',
            question: 'Które zdanie zawiera typowy błąd?',
            options: ['The letter was written.', 'The letter was wrote.', 'The letter has been written.'],
            correct: 1,
        },
        {
            id: 'pue8',
            question: 'Który czasownik może tworzyć stronę bierną?',
            options: ['have (posiadać)', 'lack', 'construct'],
            correct: 2,
        },
        {
            id: 'pue9',
            question: 'Które zdanie jest naturalne?',
            options: ['I want a new phone.', 'A new phone is wanted by me.', 'New phone is wanted.'],
            correct: 0,
        },
        {
            id: 'pue10',
            question: 'Które zdanie używa strony biernej właściwie?',
            options: ['The decision was made yesterday.', 'The decision made yesterday.', 'The decision was make yesterday.'],
            correct: 0,
        },
    ],

    'passive-exceptions-practice-15': [
        {
            id: 'pep1',
            question: 'Które zdanie jest poprawne?',
            options: ['I lack experience.', 'Experience is lacked by me.', 'Experience lacks by me.'],
            correct: 0,
        },
        {
            id: 'pep2',
            question: 'Który czasownik nie tworzy strony biernej?',
            options: ['own', 'create', 'design'],
            correct: 0,
        },
        {
            id: 'pep3',
            question: 'Które zdanie jest błędne?',
            options: ['The building was constructed in 2000.', 'The building was build in 2000.', 'The building has been constructed.'],
            correct: 1,
        },
        {
            id: 'pep4',
            question: 'Które zdanie używa strony biernej właściwie?',
            options: ['The problem was solved quickly.', 'The problem solved quickly.', 'The problem was solve quickly.'],
            correct: 0,
        },
        {
            id: 'pep5',
            question: 'Który czasownik zazwyczaj nie ma formy biernej?',
            options: ['possess', 'manufacture', 'produce'],
            correct: 0,
        },
        {
            id: 'pep6',
            question: 'Które zdanie jest poprawne?',
            options: ['He has two brothers.', 'Two brothers are had by him.', 'Two brothers have by him.'],
            correct: 0,
        },
        {
            id: 'pep7',
            question: 'Które zdanie zawiera błąd w formie imiesłowu?',
            options: ['The message was sent.', 'The message was sended.', 'The message has been sent.'],
            correct: 1,
        },
        {
            id: 'pep8',
            question: 'Który czasownik może tworzyć stronę bierną?',
            options: ['belong to', 'develop', 'cost'],
            correct: 1,
        },
        {
            id: 'pep9',
            question: 'Które zdanie jest naturalne?',
            options: ['I need help.', 'Help is needed by me.', 'Help needs by me.'],
            correct: 0,
        },
        {
            id: 'pep10',
            question: 'Które zdanie używa strony biernej poprawnie?',
            options: ['The work will be finished soon.', 'The work will finished soon.', 'The work will be finish soon.'],
            correct: 0,
        },
        {
            id: 'pep11',
            question: 'Które zdanie jest poprawne?',
            options: ['She wants a promotion.', 'A promotion is wanted by her.', 'Promotion is wanted.'],
            correct: 0,
        },
        {
            id: 'pep12',
            question: 'Który czasownik nie tworzy strony biernej?',
            options: ['contain', 'build', 'make'],
            correct: 0,
        },
        {
            id: 'pep13',
            question: 'Które zdanie jest błędne?',
            options: ['The cake was eaten.', 'The cake was ate.', 'The cake has been eaten.'],
            correct: 1,
        },
        {
            id: 'pep14',
            question: 'Które zdanie używa strony biernej właściwie?',
            options: ['The decision has been made.', 'The decision has made.', 'The decision has been make.'],
            correct: 0,
        },
        {
            id: 'pep15',
            question: 'Który czasownik zazwyczaj nie ma formy biernej?',
            options: ['consist of', 'assemble', 'construct'],
            correct: 0,
        },
    ],

    'passive-exceptions-advanced-12': [
        {
            id: 'pea1',
            question: 'Które zdanie jest poprawne w kontekście akademickim?',
            options: ['The theory lacks empirical evidence.', 'Empirical evidence is lacked by the theory.', 'Empirical evidence lacks by the theory.'],
            correct: 0,
        },
        {
            id: 'pea2',
            question: 'Który czasownik naukowy nie tworzy typowo strony biernej?',
            options: ['comprise', 'synthesize', 'analyze'],
            correct: 0,
        },
        {
            id: 'pea3',
            question: 'Które zdanie zawiera poprawną formę bierną w kontekście technicznym?',
            options: ['The compound was synthesized in the laboratory.', 'The compound synthesized in the laboratory.', 'The compound was synthesize in the laboratory.'],
            correct: 0,
        },
        {
            id: 'pea4',
            question: 'Które zdanie jest właściwe w dokumentacji naukowej?',
            options: ['The sample contains three elements.', 'Three elements are contained by the sample.', 'Three elements contain in the sample.'],
            correct: 0,
        },
        {
            id: 'pea5',
            question: 'Który czasownik w kontekście matematycznym nie tworzy strony biernej?',
            options: ['equal', 'calculate', 'derive'],
            correct: 0,
        },
        {
            id: 'pea6',
            question: 'Które zdanie jest poprawne w opisie badań?',
            options: ['The data suggest a correlation.', 'A correlation is suggested by the data.', 'A correlation suggests by the data.'],
            correct: 0,
        },
        {
            id: 'pea7',
            question: 'Które zdanie zawiera błąd w formie biernej?',
            options: ['The hypothesis was tested rigorously.', 'The hypothesis was test rigorously.', 'The hypothesis has been tested.'],
            correct: 1,
        },
        {
            id: 'pea8',
            question: 'Który czasownik w ekonomii może tworzyć stronę bierną?',
            options: ['cost', 'generate', 'worth'],
            correct: 1,
        },
        {
            id: 'pea9',
            question: 'Które zdanie jest naturalne w publikacji naukowej?',
            options: ['The study involves multiple variables.', 'Multiple variables are involved by the study.', 'Multiple variables involve in the study.'],
            correct: 0,
        },
        {
            id: 'pea10',
            question: 'Które zdanie używa strony biernej poprawnie w kontekście prawnym?',
            options: ['The contract was executed properly.', 'The contract executed properly.', 'The contract was execute properly.'],
            correct: 0,
        },
        {
            id: 'pea11',
            question: 'Które zdanie jest poprawne w opisie technicznym?',
            options: ['The system comprises several modules.', 'Several modules are comprised by the system.', 'Several modules comprise the system.'],
            correct: 0,
        },
        {
            id: 'pea12',
            question: 'Który czasownik w lingwistyce nie tworzy strony biernej?',
            options: ['mean', 'parse', 'translate'],
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
        return TOPICS.simple.find(t => t.id === topicId)?.title ||
            TOPICS.continuous.find(t => t.id === topicId)?.title ||
            TOPICS.perfect.find(t => t.id === topicId)?.title ||
            TOPICS.modals.find(t => t.id === topicId)?.title ||
            TOPICS['uzycie-wyjatki'].find(t => t.id === topicId)?.title
    }

    const getTopicExcerpt = () => {
        return TOPICS.simple.find(t => t.id === topicId)?.excerpt ||
            TOPICS.continuous.find(t => t.id === topicId)?.excerpt ||
            TOPICS.perfect.find(t => t.id === topicId)?.excerpt ||
            TOPICS.modals.find(t => t.id === topicId)?.excerpt ||
            TOPICS['uzycie-wyjatki'].find(t => t.id === topicId)?.excerpt
    }

    return (
        <div className="exercise">
            <div className="exercise__info">
                <h3>Ćwiczenia: {getTopicTitle()}</h3>
                <p className="muted">{getTopicExcerpt()}</p>
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

export default function PassiveVoiceExercises() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const { lang } = useLanguage()
    const active = section ?? 'simple'
    const topicId = searchParams.get('topic')
    const basePath = `/cwiczenia/gramatyka/strona-bierna/${active}`

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
                    <h2>Ćwiczenia: Strona bierna</h2>
                    <p className="muted">Utrwalaj formy w Simple, Continuous, Perfect oraz z czasownikami modalnymi</p>
                </header>

                <nav className="subnav" aria-label="Podstrony ćwiczeń: Strona bierna">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/cwiczenia/gramatyka/strona-bierna/${s.id}`}
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
                                <h3>Przećwicz stronę bierną! 📝</h3>
                                <p>Wybierz kategorię ćwiczeń, aby utrwalić różne formy strony biernej.
                                    Od podstawowych konstrukcji w czasach Simple po zaawansowane użycie z czasownikami modalnymi.</p>

                                <div className="features-grid">
                                    <div className="feature">
                                        <h4>🎯 Czasy Simple</h4>
                                        <p>Present, Past i Future Simple Passive - podstawowe formy</p>
                                    </div>
                                    <div className="feature">
                                        <h4>🔄 Czasy Continuous</h4>
                                        <p>Czynności w toku w stronie biernej</p>
                                    </div>
                                    <div className="feature">
                                        <h4>✅ Czasy Perfect</h4>
                                        <p>Perfect Passive z naciskiem na rezultat</p>
                                    </div>
                                    <div className="feature">
                                        <h4>🔧 Czasowniki modalne</h4>
                                        <p>Wyrażanie możliwości, obowiązku i pozwolenia</p>
                                    </div>
                                    <div className="feature">
                                        <h4>⚠️ Wyjątki i użycie</h4>
                                        <p>Czasowniki bez form biernych i typowe błędy</p>
                                    </div>
                                </div>
                            </div>

                            <TopicsGrid basePath={basePath} active={active} />
                        </>
                    ) : (
                        <>
                            <div className="topic-detail__header">
                                <div className="topic-detail__back">
                                    <Link to={basePath} className="btn-link">← Wróć do listy tematów</Link>
                                </div>
                                <div className="topic-detail__info">
                                    <h3>{
                                        TOPICS.simple.find(t => t.id === topicId)?.title ||
                                        TOPICS.continuous.find(t => t.id === topicId)?.title ||
                                        TOPICS.perfect.find(t => t.id === topicId)?.title ||
                                        TOPICS.modals.find(t => t.id === topicId)?.title ||
                                        TOPICS['uzycie-wyjatki'].find(t => t.id === topicId)?.title
                                    }</h3>
                                    <p className="muted">{
                                        TOPICS.simple.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS.continuous.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS.perfect.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS.modals.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['uzycie-wyjatki'].find(t => t.id === topicId)?.excerpt
                                    }</p>
                                </div>
                            </div>

                            <Quiz topicId={topicId} />

                            <div className="exercise-tips">
                                <h4>💡 Wskazówki do ćwiczeń</h4>
                                <div className="tips-grid">
                                    <div className="tip">
                                        <h5>Zwracaj uwagę na formę czasownika "be"</h5>
                                        <p>Dopasuj ją do czasu gramatycznego: am/is/are dla Present, was/were dla Past, will be dla Future</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Pamiętaj o past participle</h5>
                                        <p>Upewnij się, że używasz trzeciej formy czasownika (V3)</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Sprawdź kolejność wyrazów</h5>
                                        <p>Podmiot + forma "be" + past participle + (by + wykonawca)</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </article>

                {/* Sekcja dodatkowych zasobów */}
                {!topicId && (
                    <section className="additional-resources">
                        <div className="card">
                            <h4>📚 Dodatkowe materiały</h4>
                            <div className="resources-grid">
                                <div className="resource">
                                    <h5>Lista czasowników nieregularnych</h5>
                                    <p>Przydatna przy tworzeniu past participle</p>
                                </div>
                                <div className="resource">
                                    <h5>Tabela czasów w stronie biernej</h5>
                                    <p>Porównanie wszystkich form</p>
                                </div>
                                <div className="resource">
                                    <h5>Typowe błędy</h5>
                                    <p>Czego unikać w stronie biernej</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>

            <style jsx>{`
        .welcome-message {
          margin-bottom: 2rem;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin: 1.5rem 0;
        }
        
        .feature {
          padding: 1rem;
          background: var(--color-background-secondary);
          border-radius: 8px;
          border-left: 4px solid var(--color-primary);
        }
        
        .feature h4 {
          margin: 0 0 0.5rem 0;
          color: var(--color-text);
        }
        
        .feature p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--color-text-light);
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
          border-radius: 8px;
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
          border-radius: 6px;
        }
        
        .tip h5 {
          margin: 0 0 0.5rem 0;
          color: var(--color-primary);
        }
        
        .tip p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--color-text-light);
        }
        
        .additional-resources {
          margin-top: 3rem;
        }
        
        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .resource {
          padding: 1rem;
          background: var(--color-background-secondary);
          border-radius: 6px;
          text-align: center;
        }
        
        .resource h5 {
          margin: 0 0 0.5rem 0;
          color: var(--color-text);
        }
        
        .resource p {
          margin: 0;
          font-size: 0.8rem;
          color: var(--color-text-light);
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
        }
      `}</style>
        </main>
    )
}

function getMetaTitle(lang, activeSection, topicId) {
    const sectionTitles = {
        pl: {
            simple: 'Ćwiczenia: Strona bierna w czasach Simple',
            continuous: 'Ćwiczenia: Strona bierna w czasach Continuous',
            perfect: 'Ćwiczenia: Strona bierna w czasach Perfect',
            modals: 'Ćwiczenia: Strona bierna z czasownikami modalnymi',
            'uzycie-wyjatki': 'Ćwiczenia: Użycie i wyjątki strony biernej'
        },
        en: {
            simple: 'Exercises: Passive Voice in Simple Tenses',
            continuous: 'Exercises: Passive Voice in Continuous Tenses',
            perfect: 'Exercises: Passive Voice in Perfect Tenses',
            modals: 'Exercises: Passive Voice with Modal Verbs',
            'uzycie-wyjatki': 'Exercises: Usage and Exceptions in Passive Voice'
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
            simple: 'Interaktywne ćwiczenia ze strony biernej w czasach Simple. Present, Past i Future Simple Passive z przykładami.',
            continuous: 'Ćwiczenia ze strony biernej w czasach Continuous. Present i Past Continuous Passive - czynności w toku.',
            perfect: 'Interaktywne ćwiczenia ze strony biernej w czasach Perfect. Present, Past i Future Perfect Passive.',
            modals: 'Ćwiczenia ze strony biernej z czasownikami modalnymi. Modal + be + past participle - możliwość, obowiązek.',
            'uzycie-wyjatki': 'Interaktywne ćwiczenia z użyciem i wyjątków strony biernej. Kiedy używać, typowe błędy, czasowniki bez form biernych.'
        },
        en: {
            simple: 'Interactive passive voice exercises in Simple tenses. Present, Past and Future Simple Passive with examples.',
            continuous: 'Passive voice exercises in Continuous tenses. Present and Past Continuous Passive - ongoing actions.',
            perfect: 'Interactive passive voice exercises in Perfect tenses. Present, Past and Future Perfect Passive.',
            modals: 'Passive voice exercises with modal verbs. Modal + be + past participle - possibility, obligation, permission.',
            'uzycie-wyjatki': 'Interactive exercises with passive voice usage and exceptions. When to use, common mistakes, verbs without passive forms.'
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
        ? `https://angloboost.pl/pl/cwiczenia/gramatyka/strona-bierna/${activeSection}`
        : `https://angloboost.pl/en/exercises/grammar/passive-voice/${activeSection}`

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
        'passive-simple-forms': 'Passive Voice - Simple Tenses - Exercises',
        'passive-simple-practice-15': 'Simple Passive - Practice - Exercises',
        'passive-simple-advanced-12': 'Simple Passive - Advanced - Exercises',
        'passive-cont-forms': 'Passive Voice - Continuous Tenses - Exercises',
        'passive-cont-practice-15': 'Continuous Passive - Practice - Exercises',
        'passive-cont-advanced-12': 'Continuous Passive - Advanced - Exercises',
        'passive-perfect-forms': 'Passive Voice - Perfect Tenses - Exercises',
        'passive-perfect-practice-15': 'Perfect Passive - Practice - Exercises',
        'passive-perfect-advanced-12': 'Perfect Passive - Advanced - Exercises',
        'passive-modals': 'Passive Voice with Modal Verbs - Exercises',
        'passive-modals-practice-15': 'Modal Passive - Practice - Exercises',
        'passive-modals-advanced-12': 'Modal Passive - Advanced - Exercises',
        'passive-usage-exceptions': 'Passive Voice Usage and Exceptions - Exercises',
        'passive-exceptions-practice-15': 'Passive Exceptions - Practice - Exercises',
        'passive-exceptions-advanced-12': 'Passive Exceptions - Advanced - Exercises'
    }
    return englishTitles[topicId] || 'Passive Voice Exercises'
}

function getEnglishTopicExcerpt(topicId) {
    const englishExcerpts = {
        'passive-simple-forms': 'Basic passive voice constructions in Present, Past and Future Simple tenses.',
        'passive-simple-practice-15': '15 practice questions with different Simple tenses in passive voice.',
        'passive-simple-advanced-12': '12 more difficult questions with complex sentences in Simple passive.',
        'passive-cont-forms': 'Ongoing actions in passive voice - Present and Past Continuous passive.',
        'passive-cont-practice-15': '15 practice questions with Continuous tenses in passive voice.',
        'passive-cont-advanced-12': '12 more difficult questions in formal contexts with Continuous passive.',
        'passive-perfect-forms': 'Completed actions with present relevance in passive voice.',
        'passive-perfect-practice-15': '15 practice questions with Perfect tenses in passive voice.',
        'passive-perfect-advanced-12': '12 more difficult questions with Future Perfect passive.',
        'passive-modals': 'Modal + be + past participle - expressing possibility, obligation, permission.',
        'passive-modals-practice-15': '15 practice questions with modal verbs in passive voice.',
        'passive-modals-advanced-12': '12 more difficult questions with Perfect Modal Passive constructions.',
        'passive-usage-exceptions': 'When to use passive voice, common mistakes, verbs without passive forms.',
        'passive-exceptions-practice-15': '15 practice questions with exceptions in passive voice.',
        'passive-exceptions-advanced-12': '12 more difficult questions in academic contexts with passive voice exceptions.'
    }
    return englishExcerpts[topicId] || 'Passive voice exercises with examples and explanations.'
}