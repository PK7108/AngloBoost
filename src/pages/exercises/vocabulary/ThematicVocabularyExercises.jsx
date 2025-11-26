import React, { useMemo, useState, useEffect } from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import { useLanguage } from '../../../context/LanguageContext.jsx'
import useDocumentMeta from '../../../useDocumentMeta'
import '../../../styles/topic-cards.css'
import { useExerciseScores } from '../useExerciseScores'

const sections = [
    { id: 'podstawowe-zwroty', label: 'Podstawowe zwroty' },
    { id: 'clothes', label: 'Clothes' },
    { id: 'appearance', label: 'Appearance' },
    { id: 'emotions', label: 'Emotions' },
    { id: 'house', label: 'House' },
    { id: 'home-furnishings', label: 'Home furnishings' },
    { id: 'school', label: 'School' },
    { id: 'school-life', label: 'School life' },
    { id: 'professions', label: 'Professions' },
    { id: 'podstawowe-czasowniki', label: 'Podstawowe czasowniki' },
    { id: 'phrasal-verbs', label: 'Phrasal verbs' },
    { id: 'podstawowe-przymiotniki', label: 'Podstawowe przymiotniki' },
    { id: 'at-work', label: 'At work' },
    { id: 'life-family', label: 'Life & family' },
    { id: 'everyday-life', label: 'Everyday life' },
    { id: 'podstawowe-przysłówki', label: 'Podstawowe przysłówki' },
    { id: 'free-time', label: 'Free time' },
    { id: 'horticulture', label: 'Horticulture' },
    { id: 'entertainment', label: 'Entertainment' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'arond-food', label: 'Around food' },
    { id: 'stores', label: 'Stores' },
    { id: 'shopping', label: 'Shopping' },
    { id: 'economics', label: 'Economics' },
    { id: 'transport', label: 'Transport' },
    { id: 'at-the-airport', label: 'At the airport' },
    { id: 'at-the-train-station', label: 'At the train station' },
    { id: 'in-the-taxi', label: 'In the taxi' },
    { id: 'asking-for-direction', label: 'Asking for direction' },
    { id: 'journey', label: 'Journey' },
    { id: 'motorization', label: 'Motorization' },
    { id: 'art', label: 'Art' },
    { id: 'public-media', label: 'Public media' },
    { id: 'sport', label: 'Sport' },
    { id: 'around-sport', label: 'Around sport' },
    { id: 'disease', label: 'Disease' },
    { id: 'collocations', label: 'Collocations' },
    { id: 'body-parts', label: 'Body parts' },
    { id: 'in-the-hospital', label: 'In the hospital' },
    { id: 'information-technologies', label: 'Information technologies' },
    { id: 'natural-science', label: 'Natural science' },
    { id: 'mathematics', label: 'Mathematics' },
    { id: 'chemistry', label: 'Chemistry' },
    { id: 'geography', label: 'Geography' },
    { id: 'weather', label: 'Weather' },
    { id: 'plants', label: 'Plants' },
    { id: 'animals', label: 'Animals' },
    { id: 'mammals', label: 'Mammals' },
    { id: 'state-and-society', label: 'State and society' },
    { id: 'misfortunes', label: 'Misfortunes' },
    { id: 'offenses', label: 'Offenses' },
    { id: 'problems-and-conflicts', label: 'Problems and conflicts' },
]

// Boksy odpowiadające kategoriom słownictwa
const TOPICS = {
    'podstawowe-zwroty': [
        { id: 'basic-phrases-beginners', title: 'Podstawowe zwroty - Początkujący 🎯', excerpt: 'Najważniejsze wyrażenia na start - powitania, pożegnania, podziękowania.' },
        { id: 'basic-phrases-practice-15', title: 'Podstawowe zwroty - Praktyka 📚', excerpt: '15 pytań praktycznych z codziennymi wyrażeniami.' },
        { id: 'basic-phrases-advanced-12', title: 'Podstawowe zwroty - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z formalnymi zwrotami.' },
    ],
    'clothes': [
        { id: 'clothes-beginners', title: 'Ubrania - Początkujący 🎯', excerpt: 'Podstawowe słownictwo dotyczące odzieży i akcesoriów.' },
        { id: 'clothes-practice-15', title: 'Ubrania - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi elementami garderoby.' },
        { id: 'clothes-advanced-12', title: 'Ubrania - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z materiałami i stylami.' },
    ],
    'emotions': [
        { id: 'emotions-beginners', title: 'Emocje - Początkujący 🎯', excerpt: 'Podstawowe uczucia i stany emocjonalne.' },
        { id: 'emotions-practice-15', title: 'Emocje - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi emocjami.' },
        { id: 'emotions-advanced-12', title: 'Emocje - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z złożonymi stanami.' },
    ],
    'podstawowe-czasowniki': [
        { id: 'basic-verbs-beginners', title: 'Czasowniki - Początkujący 🎯', excerpt: 'Najważniejsze czasowniki codziennego użytku.' },
        { id: 'basic-verbs-practice-15', title: 'Czasowniki - Praktyka 📚', excerpt: '15 pytań praktycznych z podstawowymi czasownikami.' },
        { id: 'basic-verbs-advanced-12', title: 'Czasowniki - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z czasownikami złożonymi.' },
    ],
    'phrasal-verbs': [
        { id: 'phrasal-verbs-beginners', title: 'Czasowniki frazowe - Początkujący 🎯', excerpt: 'Podstawowe phrasal verbs i ich znaczenia.' },
        { id: 'phrasal-verbs-practice-15', title: 'Czasowniki frazowe - Praktyka 📚', excerpt: '15 pytań praktycznych z popularnymi phrasal verbs.' },
        { id: 'phrasal-verbs-advanced-12', title: 'Czasowniki frazowe - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z wieloznacznymi phrasal verbs.' },
    ],
    'food': [
        { id: 'food-beginners', title: 'Jedzenie - Początkujący 🎯', excerpt: 'Podstawowe słownictwo związane z jedzeniem i piciem.' },
        { id: 'food-practice-15', title: 'Jedzenie - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi produktami spożywczymi.' },
        { id: 'food-advanced-12', title: 'Jedzenie - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z terminologią kulinarną.' },
    ],
    'house': [
        { id: 'house-beginners', title: 'Dom - Początkujący 🎯', excerpt: 'Podstawowe słownictwo dotyczące domu i mieszkania.' },
        { id: 'house-practice-15', title: 'Dom - Praktyka 📚', excerpt: '15 pytań praktycznych z pomieszczeniami i meblami.' },
        { id: 'house-advanced-12', title: 'Dom - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z wyposażeniem i remontem.' },
    ],
    'work': [
        { id: 'work-beginners', title: 'Praca - Początkujący 🎯', excerpt: 'Podstawowe słownictwo związane z pracą i karierą.' },
        { id: 'work-practice-15', title: 'Praca - Praktyka 📚', excerpt: '15 pytań praktycznych z zawodami i obowiązkami.' },
        { id: 'work-advanced-12', title: 'Praca - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z terminologią biznesową.' },
    ],
    'travel': [
        { id: 'travel-beginners', title: 'Podróże - Początkujący 🎯', excerpt: 'Podstawowe słownictwo podróżnicze i turystyczne.' },
        { id: 'travel-practice-15', title: 'Podróże - Praktyka 📚', excerpt: '15 pytań praktycznych z transportem i zakwaterowaniem.' },
        { id: 'travel-advanced-12', title: 'Podróże - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowaną terminologią.' },
    ],
    'health': [
        { id: 'health-beginners', title: 'Zdrowie - Początkujący 🎯', excerpt: 'Podstawowe słownictwo medyczne i zdrowotne.' },
        { id: 'health-practice-15', title: 'Zdrowie - Praktyka 📚', excerpt: '15 pytań praktycznych z chorobami i leczeniem.' },
        { id: 'health-advanced-12', title: 'Zdrowie - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z terminologią medyczną.' },
    ],
    'appearance': [
        { id: 'appearance-beginners', title: 'Wygląd - Początkujący 🎯', excerpt: 'Podstawowe słownictwo dotyczące wyglądu zewnętrznego.' },
        { id: 'appearance-practice-15', title: 'Wygląd - Praktyka 📚', excerpt: '15 pytań praktycznych z opisem wyglądu.' },
        { id: 'appearance-advanced-12', title: 'Wygląd - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z cechami charakterystycznymi.' },
    ],

    'home-furnishings': [
        { id: 'furnishings-beginners', title: 'Wyposażenie domu - Początkujący 🎯', excerpt: 'Podstawowe meble i elementy wyposażenia wnętrz.' },
        { id: 'furnishings-practice-15', title: 'Wyposażenie - Praktyka 📚', excerpt: '15 pytań praktycznych z meblami i dekoracjami.' },
        { id: 'furnishings-advanced-12', title: 'Wyposażenie - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z terminologią designerską.' },
    ],

    'school': [
        { id: 'school-beginners', title: 'Szkoła - Początkujący 🎯', excerpt: 'Podstawowe słownictwo związane ze szkołą i edukacją.' },
        { id: 'school-practice-15', title: 'Szkoła - Praktyka 📚', excerpt: '15 pytań praktycznych z przedmiotami i pomieszczeniami.' },
        { id: 'school-advanced-12', title: 'Szkoła - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z systemem edukacji.' },
    ],

    'school-life': [
        { id: 'school-life-beginners', title: 'Życie szkolne - Początkujący 🎯', excerpt: 'Codzienne aktywności i obowiązki szkolne.' },
        { id: 'school-life-practice-15', title: 'Życie szkolne - Praktyka 📚', excerpt: '15 pytań praktycznych z rutyną szkolną.' },
        { id: 'school-life-advanced-12', title: 'Życie szkolne - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z aktywnościami pozalekcyjnymi.' },
    ],

    'professions': [
        { id: 'professions-beginners', title: 'Zawody - Początkujący 🎯', excerpt: 'Podstawowe nazwy zawodów i specjalizacji.' },
        { id: 'professions-practice-15', title: 'Zawody - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi profesjami.' },
        { id: 'professions-advanced-12', title: 'Zawody - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z wyspecjalizowanymi zawodami.' },
    ],

    'podstawowe-przymiotniki': [
        { id: 'adjectives-beginners', title: 'Przymiotniki - Początkujący 🎯', excerpt: 'Podstawowe przymiotniki opisujące ludzi i przedmioty.' },
        { id: 'adjectives-practice-15', title: 'Przymiotniki - Praktyka 📚', excerpt: '15 pytań praktycznych z opisami cech.' },
        { id: 'adjectives-advanced-12', title: 'Przymiotniki - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowanymi przymiotnikami.' },
    ],

    'at-work': [
        { id: 'work-beginners', title: 'W pracy - Początkujący 🎯', excerpt: 'Podstawowe słownictwo biurowe i zawodowe.' },
        { id: 'work-practice-15', title: 'W pracy - Praktyka 📚', excerpt: '15 pytań praktycznych z sytuacjami zawodowymi.' },
        { id: 'work-advanced-12', title: 'W pracy - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z terminologią biznesową.' },
    ],

    'life-family': [
        { id: 'family-beginners', title: 'Życie i rodzina - Początkujący 🎯', excerpt: 'Podstawowe słownictwo rodzinne i relacyjne.' },
        { id: 'family-practice-15', title: 'Rodzina - Praktyka 📚', excerpt: '15 pytań praktycznych z członkami rodziny.' },
        { id: 'family-advanced-12', title: 'Rodzina - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z pokrewieństwem.' },
    ],

    'everyday-life': [
        { id: 'everyday-beginners', title: 'Codzienne życie - Początkujący 🎯', excerpt: 'Rutyna dnia codziennego i czynności.' },
        { id: 'everyday-practice-15', title: 'Codzienne życie - Praktyka 📚', excerpt: '15 pytań praktycznych z aktywnościami dnia.' },
        { id: 'everyday-advanced-12', title: 'Codzienne życie - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowaną rutyną.' },
    ],

    'podstawowe-przysłówki': [
        { id: 'adverbs-beginners', title: 'Przysłówki - Początkujący 🎯', excerpt: 'Podstawowe przysłówki czasu, miejsca i sposobu.' },
        { id: 'adverbs-practice-15', title: 'Przysłówki - Praktyka 📚', excerpt: '15 pytań praktycznych z użyciem przysłówków.' },
        { id: 'adverbs-advanced-12', title: 'Przysłówki - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowanymi przysłówkami.' },
    ],

    'free-time': [
        { id: 'free-time-beginners', title: 'Czas wolny - Początkujący 🎯', excerpt: 'Podstawowe hobby i aktywności rekreacyjne.' },
        { id: 'free-time-practice-15', title: 'Czas wolny - Praktyka 📚', excerpt: '15 pytań praktycznych z rozrywką.' },
        { id: 'free-time-advanced-12', title: 'Czas wolny - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowanymi hobby.' },
    ],

    'horticulture': [
        { id: 'horticulture-beginners', title: 'Ogrodnictwo - Początkujący 🎯', excerpt: 'Podstawowe słownictwo ogrodnicze.' },
        { id: 'horticulture-practice-15', title: 'Ogrodnictwo - Praktyka 📚', excerpt: '15 pytań praktycznych z roślinami i narzędziami.' },
        { id: 'horticulture-advanced-12', title: 'Ogrodnictwo - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowanym ogrodnictwem.' },
    ],

    'entertainment': [
        { id: 'entertainment-beginners', title: 'Rozrywka - Początkujący 🎯', excerpt: 'Podstawowe formy rozrywki i kultury.' },
        { id: 'entertainment-practice-15', title: 'Rozrywka - Praktyka 📚', excerpt: '15 pytań praktycznych z mediami i sztuką.' },
        { id: 'entertainment-advanced-12', title: 'Rozrywka - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z przemysłem rozrywkowym.' },
    ],

    'nutrition': [
        { id: 'nutrition-beginners', title: 'Odżywianie - Początkujący 🎯', excerpt: 'Podstawowe słownictwo żywieniowe.' },
        { id: 'nutrition-practice-15', title: 'Odżywianie - Praktyka 📚', excerpt: '15 pytań praktycznych z dietą i zdrowym odżywianiem.' },
        { id: 'nutrition-advanced-12', title: 'Odżywianie - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowaną dietetyką.' },
    ],

    'arond-food': [
        { id: 'food-around-beginners', title: 'Wokół jedzenia - Początkujący 🎯', excerpt: 'Słownictwo związane z przygotowywaniem i serwowaniem jedzenia.' },
        { id: 'food-around-practice-15', title: 'Wokół jedzenia - Praktyka 📚', excerpt: '15 pytań praktycznych z kuchnią i gastronomią.' },
        { id: 'food-around-advanced-12', title: 'Wokół jedzenia - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z terminologią kulinarną.' },
    ],

    'stores': [
        { id: 'stores-beginners', title: 'Sklepy - Początkujący 🎯', excerpt: 'Podstawowe typy sklepów i punktów usługowych.' },
        { id: 'stores-practice-15', title: 'Sklepy - Praktyka 📚', excerpt: '15 pytań praktycznych z handlem detalicznym.' },
        { id: 'stores-advanced-12', title: 'Sklepy - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z różnymi formami handlu.' },
    ],

    'shopping': [
        { id: 'shopping-beginners', title: 'Zakupy - Początkujący 🎯', excerpt: 'Podstawowe słownictwo zakupowe.' },
        { id: 'shopping-practice-15', title: 'Zakupy - Praktyka 📚', excerpt: '15 pytań praktycznych z sytuacjami zakupowymi.' },
        { id: 'shopping-advanced-12', title: 'Zakupy - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowanymi zakupami.' },
    ],

    'economics': [
        { id: 'economics-beginners', title: 'Ekonomia - Początkujący 🎯', excerpt: 'Podstawowe pojęcia ekonomiczne.' },
        { id: 'economics-practice-15', title: 'Ekonomia - Praktyka 📚', excerpt: '15 pytań praktycznych z finansami i gospodarką.' },
        { id: 'economics-advanced-12', title: 'Ekonomia - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowaną ekonomią.' },
    ],

    'transport': [
        { id: 'transport-beginners', title: 'Transport - Początkujący 🎯', excerpt: 'Podstawowe środki transportu.' },
        { id: 'transport-practice-15', title: 'Transport - Praktyka 📚', excerpt: '15 pytań praktycznych z podróżowaniem.' },
        { id: 'transport-advanced-12', title: 'Transport - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z logistyką.' },
    ],

    'at-the-airport': [
        { id: 'airport-beginners', title: 'Na lotnisku - Początkujący 🎯', excerpt: 'Słownictwo lotniskowe i procedury.' },
        { id: 'airport-practice-15', title: 'Lotnisko - Praktyka 📚', excerpt: '15 pytań praktycznych z podróżą lotniczą.' },
        { id: 'airport-advanced-12', title: 'Lotnisko - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowanymi procedurami.' },
    ],

    'at-the-train-station': [
        { id: 'station-beginners', title: 'Na dworcu - Początkujący 🎯', excerpt: 'Słownictwo kolejowe i dworcowe.' },
        { id: 'station-practice-15', title: 'Dworzec - Praktyka 📚', excerpt: '15 pytań praktycznych z podróżą kolejową.' },
        { id: 'station-advanced-12', title: 'Dworzec - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z rozkładem jazdy.' },
    ],

    'in-the-taxi': [
        { id: 'taxi-beginners', title: 'W taksówce - Początkujący 🎯', excerpt: 'Podstawowe zwroty taksówkowe.' },
        { id: 'taxi-practice-15', title: 'Taksówka - Praktyka 📚', excerpt: '15 pytań praktycznych z podróżą taksówką.' },
        { id: 'taxi-advanced-12', title: 'Taksówka - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowanymi sytuacjami.' },
    ],

    'asking-for-direction': [
        { id: 'directions-beginners', title: 'Pytanie o drogę - Początkujący 🎯', excerpt: 'Podstawowe zwroty nawigacyjne.' },
        { id: 'directions-practice-15', title: 'Kierunki - Praktyka 📚', excerpt: '15 pytań praktycznych z udzielaniem wskazówek.' },
        { id: 'directions-advanced-12', title: 'Kierunki - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowaną nawigacją.' },
    ],

    'journey': [
        { id: 'journey-beginners', title: 'Podróż - Początkujący 🎯', excerpt: 'Podstawowe słownictwo podróżnicze.' },
        { id: 'journey-practice-15', title: 'Podróż - Praktyka 📚', excerpt: '15 pytań praktycznych z wyjazdami.' },
        { id: 'journey-advanced-12', title: 'Podróż - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowanymi podróżami.' },
    ],

    'motorization': [
        { id: 'motorization-beginners', title: 'Motoryzacja - Początkujący 🎯', excerpt: 'Podstawowe części samochodu i naprawy.' },
        { id: 'motorization-practice-15', title: 'Motoryzacja - Praktyka 📚', excerpt: '15 pytań praktycznych z mechaniką.' },
        { id: 'motorization-advanced-12', title: 'Motoryzacja - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowaną mechaniką.' },
    ],

    'art': [
        { id: 'art-beginners', title: 'Sztuka - Początkujący 🎯', excerpt: 'Podstawowe pojęcia artystyczne.' },
        { id: 'art-practice-15', title: 'Sztuka - Praktyka 📚', excerpt: '15 pytań praktycznych z różnymi formami sztuki.' },
        { id: 'art-advanced-12', title: 'Sztuka - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowaną terminologią.' },
    ],

    'public-media': [
        { id: 'media-beginners', title: 'Media - Początkujący 🎯', excerpt: 'Podstawowe środki masowego przekazu.' },
        { id: 'media-practice-15', title: 'Media - Praktyka 📚', excerpt: '15 pytań praktycznych z telewizją i prasą.' },
        { id: 'media-advanced-12', title: 'Media - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z dziennikarstwem.' },
    ],

    'sport': [
        { id: 'sport-beginners', title: 'Sport - Początkujący 🎯', excerpt: 'Podstawowe dyscypliny sportowe.' },
        { id: 'sport-practice-15', title: 'Sport - Praktyka 📚', excerpt: '15 pytań praktycznych z aktywnościami sportowymi.' },
        { id: 'sport-advanced-12', title: 'Sport - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowanym sportem.' },
    ],

    'around-sport': [
        { id: 'sport-around-beginners', title: 'Wokół sportu - Początkujący 🎯', excerpt: 'Słownictwo związane z wydarzeniami sportowymi.' },
        { id: 'sport-around-practice-15', title: 'Wokół sportu - Praktyka 📚', excerpt: '15 pytań praktycznych z kibicowaniem.' },
        { id: 'sport-around-advanced-12', title: 'Wokół sportu - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z organizacją imprez.' },
    ],

    'disease': [
        { id: 'disease-beginners', title: 'Choroby - Początkujący 🎯', excerpt: 'Podstawowe nazwy chorób i dolegliwości.' },
        { id: 'disease-practice-15', title: 'Choroby - Praktyka 📚', excerpt: '15 pytań praktycznych z objawami.' },
        { id: 'disease-advanced-12', title: 'Choroby - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowanymi schorzeniami.' },
    ],

    'collocations': [
        { id: 'collocations-beginners', title: 'Kolokacje - Początkujący 🎯', excerpt: 'Podstawowe połączenia wyrazowe.' },
        { id: 'collocations-practice-15', title: 'Kolokacje - Praktyka 📚', excerpt: '15 pytań praktycznych z częstymi połączeniami.' },
        { id: 'collocations-advanced-12', title: 'Kolokacje - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowanymi kolokacjami.' },
    ],

    'body-parts': [
        { id: 'body-beginners', title: 'Części ciała - Początkujący 🎯', excerpt: 'Podstawowe części ludzkiego ciała.' },
        { id: 'body-practice-15', title: 'Ciało - Praktyka 📚', excerpt: '15 pytań praktycznych z anatomią.' },
        { id: 'body-advanced-12', title: 'Ciało - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowaną anatomią.' },
    ],

    'in-the-hospital': [
        { id: 'hospital-beginners', title: 'W szpitalu - Początkujący 🎯', excerpt: 'Podstawowe słownictwo szpitalne.' },
        { id: 'hospital-practice-15', title: 'Szpital - Praktyka 📚', excerpt: '15 pytań praktycznych z leczeniem.' },
        { id: 'hospital-advanced-12', title: 'Szpital - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z procedurami medycznymi.' },
    ],

    'information-technologies': [
        { id: 'it-beginners', title: 'Technologie informacyjne - Początkujący 🎯', excerpt: 'Podstawowe pojęcia komputerowe.' },
        { id: 'it-practice-15', title: 'IT - Praktyka 📚', excerpt: '15 pytań praktycznych z technologią.' },
        { id: 'it-advanced-12', title: 'IT - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowanym IT.' },
    ],

    'natural-science': [
        { id: 'science-beginners', title: 'Nauki przyrodnicze - Początkujący 🎯', excerpt: 'Podstawowe pojęcia przyrodnicze.' },
        { id: 'science-practice-15', title: 'Przyroda - Praktyka 📚', excerpt: '15 pytań praktycznych z naukami ścisłymi.' },
        { id: 'science-advanced-12', title: 'Przyroda - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowaną nauką.' },
    ],

    'mathematics': [
        { id: 'math-beginners', title: 'Matematyka - Początkujący 🎯', excerpt: 'Podstawowe pojęcia matematyczne.' },
        { id: 'math-practice-15', title: 'Matematyka - Praktyka 📚', excerpt: '15 pytań praktycznych z obliczeniami.' },
        { id: 'math-advanced-12', title: 'Matematyka - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowaną matematyką.' },
    ],

    'chemistry': [
        { id: 'chemistry-beginners', title: 'Chemia - Początkujący 🎯', excerpt: 'Podstawowe pojęcia chemiczne.' },
        { id: 'chemistry-practice-15', title: 'Chemia - Praktyka 📚', excerpt: '15 pytań praktycznych z pierwiastkami.' },
        { id: 'chemistry-advanced-12', title: 'Chemia - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowaną chemią.' },
    ],

    'geography': [
        { id: 'geography-beginners', title: 'Geografia - Początkujący 🎯', excerpt: 'Podstawowe pojęcia geograficzne.' },
        { id: 'geography-practice-15', title: 'Geografia - Praktyka 📚', excerpt: '15 pytań praktycznych z mapą świata.' },
        { id: 'geography-advanced-12', title: 'Geografia - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowaną geografią.' },
    ],

    'weather': [
        { id: 'weather-beginners', title: 'Pogoda - Początkujący 🎯', excerpt: 'Podstawowe zjawiska atmosferyczne.' },
        { id: 'weather-practice-15', title: 'Pogoda - Praktyka 📚', excerpt: '15 pytań praktycznych z prognozą.' },
        { id: 'weather-advanced-12', title: 'Pogoda - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowaną meteorologią.' },
    ],

    'plants': [
        { id: 'plants-beginners', title: 'Rośliny - Początkujący 🎯', excerpt: 'Podstawowe gatunki roślin.' },
        { id: 'plants-practice-15', title: 'Rośliny - Praktyka 📚', excerpt: '15 pytań praktycznych z botaniką.' },
        { id: 'plants-advanced-12', title: 'Rośliny - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowaną botaniką.' },
    ],

    'animals': [
        { id: 'animals-beginners', title: 'Zwierzęta - Początkujący 🎯', excerpt: 'Podstawowe gatunki zwierząt.' },
        { id: 'animals-practice-15', title: 'Zwierzęta - Praktyka 📚', excerpt: '15 pytań praktycznych z zoologią.' },
        { id: 'animals-advanced-12', title: 'Zwierzęta - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowaną zoologią.' },
    ],

    'mammals': [
        { id: 'mammals-beginners', title: 'Ssaki - Początkujący 🎯', excerpt: 'Podstawowe gatunki ssaków.' },
        { id: 'mammals-practice-15', title: 'Ssaki - Praktyka 📚', excerpt: '15 pytań praktycznych z charakterystyką ssaków.' },
        { id: 'mammals-advanced-12', title: 'Ssaki - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowaną teriologią.' },
    ],

    'state-and-society': [
        { id: 'society-beginners', title: 'Państwo i społeczeństwo - Początkujący 🎯', excerpt: 'Podstawowe pojęcia społeczno-polityczne.' },
        { id: 'society-practice-15', title: 'Społeczeństwo - Praktyka 📚', excerpt: '15 pytań praktycznych z instytucjami.' },
        { id: 'society-advanced-12', title: 'Społeczeństwo - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowaną socjologią.' },
    ],

    'misfortunes': [
        { id: 'misfortunes-beginners', title: 'Nieszczęścia - Początkujący 🎯', excerpt: 'Podstawowe sytuacje kryzysowe.' },
        { id: 'misfortunes-practice-15', title: 'Nieszczęścia - Praktyka 📚', excerpt: '15 pytań praktycznych z wypadkami.' },
        { id: 'misfortunes-advanced-12', title: 'Nieszczęścia - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z katastrofami.' },
    ],

    'offenses': [
        { id: 'offenses-beginners', title: 'Wykroczenia - Początkujący 🎯', excerpt: 'Podstawowe przestępstwa i wykroczenia.' },
        { id: 'offenses-practice-15', title: 'Wykroczenia - Praktyka 📚', excerpt: '15 pytań praktycznych z prawem.' },
        { id: 'offenses-advanced-12', title: 'Wykroczenia - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z kryminologią.' },
    ],

    'problems-and-conflicts': [
        { id: 'conflicts-beginners', title: 'Problemy i konflikty - Początkujący 🎯', excerpt: 'Podstawowe sytuacje konfliktowe.' },
        { id: 'conflicts-practice-15', title: 'Konflikty - Praktyka 📚', excerpt: '15 pytań praktycznych z rozwiązywaniem problemów.' },
        { id: 'conflicts-advanced-12', title: 'Konflikty - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z mediacją.' },
    ],
}

const QUIZZES = {
    'basic-phrases-beginners': [
        {
            id: 'bp1',
            question: 'thank you =',
            options: ['proszę', 'dzień dobry', 'dziękuję'],
            correct: 2,
        },
        {
            id: 'bp2',
            question: 'excuse me =',
            options: ['przepraszam (zaczepić)', 'cześć', 'żegnaj'],
            correct: 0,
        },
        {
            id: 'bp3',
            question: 'good morning =',
            options: ['dobry wieczór', 'dzień dobry', 'dobrej nocy'],
            correct: 1,
        },
        {
            id: 'bp4',
            question: 'How are you? =',
            options: ['Jak się masz?', 'Co słychać?', 'Kim jesteś?'],
            correct: 0,
        },
        {
            id: 'bp5',
            question: 'I\'m sorry =',
            options: ['Przykro mi', 'Dziękuję', 'Proszę'],
            correct: 0,
        },
        {
            id: 'bp6',
            question: 'You\'re welcome =',
            options: ['Proszę bardzo', 'Dziękuję', 'Przepraszam'],
            correct: 0,
        },
        {
            id: 'bp7',
            question: 'See you later =',
            options: ['Do widzenia', 'Do zobaczenia', 'Miłego dnia'],
            correct: 1,
        },
        {
            id: 'bp8',
            question: 'What\'s your name? =',
            options: ['Jak się nazywasz?', 'Skąd jesteś?', 'Ile masz lat?'],
            correct: 0,
        },
        {
            id: 'bp9',
            question: 'My name is... =',
            options: ['Nazywam się...', 'Mam na imię...', 'Jestem...'],
            correct: 0,
        },
        {
            id: 'bp10',
            question: 'Nice to meet you =',
            options: ['Miło cię poznać', 'Do zobaczenia', 'Dziękuję'],
            correct: 0,
        },
    ],

    'basic-phrases-practice-15': [
        {
            id: 'bpp1',
            question: 'Good evening =',
            options: ['Dzień dobry', 'Dobry wieczór', 'Dobranoc'],
            correct: 1,
        },
        {
            id: 'bpp2',
            question: 'How old are you? =',
            options: ['Jak się masz?', 'Ile masz lat?', 'Skąd jesteś?'],
            correct: 1,
        },
        {
            id: 'bpp3',
            question: 'Where are you from? =',
            options: ['Dokąd idziesz?', 'Skąd jesteś?', 'Gdzie mieszkasz?'],
            correct: 1,
        },
        {
            id: 'bpp4',
            question: 'I don\'t understand =',
            options: ['Nie wiem', 'Nie rozumiem', 'Nie pamiętam'],
            correct: 1,
        },
        {
            id: 'bpp5',
            question: 'Could you repeat that? =',
            options: ['Czy możesz pomóc?', 'Czy możesz powtórzyć?', 'Czy możesz mówić wolniej?'],
            correct: 1,
        },
        {
            id: 'bpp6',
            question: 'Have a nice day! =',
            options: ['Miłego dnia!', 'Do widzenia!', 'Powodzenia!'],
            correct: 0,
        },
        {
            id: 'bpp7',
            question: 'What time is it? =',
            options: ['Która godzina?', 'Ile czasu?', 'Jaki jest czas?'],
            correct: 0,
        },
        {
            id: 'bpp8',
            question: 'I\'m lost =',
            options: ['Zgubiłem się', 'Jestem zmęczony', 'Jestem głodny'],
            correct: 0,
        },
        {
            id: 'bpp9',
            question: 'How much does it cost? =',
            options: ['Ile to kosztuje?', 'Ile tego jest?', 'Jaki jest rozmiar?'],
            correct: 0,
        },
        {
            id: 'bpp10',
            question: 'Where is the bathroom? =',
            options: ['Gdzie jest łazienka?', 'Gdzie jest kuchnia?', 'Gdzie jest sypialnia?'],
            correct: 0,
        },
        {
            id: 'bpp11',
            question: 'I\'m hungry =',
            options: ['Jestem głodny', 'Jestem spragniony', 'Jestem zmęczony'],
            correct: 0,
        },
        {
            id: 'bpp12',
            question: 'Can you help me? =',
            options: ['Czy możesz mi pomóc?', 'Czy możesz poczekać?', 'Czy możesz przyjść?'],
            correct: 0,
        },
        {
            id: 'bpp13',
            question: 'What does this mean? =',
            options: ['Co to znaczy?', 'Co to jest?', 'Dlaczego?'],
            correct: 0,
        },
        {
            id: 'bpp14',
            question: 'I agree =',
            options: ['Zgadzam się', 'Nie zgadzam się', 'Nie wiem'],
            correct: 0,
        },
        {
            id: 'bpp15',
            question: 'That\'s great! =',
            options: ['To świetnie!', 'To straszne!', 'To smutne!'],
            correct: 0,
        },
    ],

    'basic-phrases-advanced-12': [
        {
            id: 'bpa1',
            question: 'I would be delighted to attend =',
            options: ['Byłbym zachwycony uczestnictwem', 'Muszę odmówić', 'Byłbym wdzięczny za pomoc'],
            correct: 0,
        },
        {
            id: 'bpa2',
            question: 'Could you elaborate on that point? =',
            options: ['Czy mógłbyś rozwinąć tę myśl?', 'Czy możesz powtórzyć?', 'Czy rozumiesz?'],
            correct: 0,
        },
        {
            id: 'bpa3',
            question: 'I\'m afraid I must decline =',
            options: ['Obawiam się, że muszę odmówić', 'Z przyjemnością przyjmę', 'Jestem niezdecydowany'],
            correct: 0,
        },
        {
            id: 'bpa4',
            question: 'Would you be so kind as to... =',
            options: ['Czy byłbyś tak uprzejmy...', 'Czy mógłbyś...', 'Czy chciałbyś...'],
            correct: 0,
        },
        {
            id: 'bpa5',
            question: 'I wholeheartedly agree =',
            options: ['Zgadzam się całym sercem', 'Częściowo się zgadzam', 'Stanowczo się nie zgadzam'],
            correct: 0,
        },
        {
            id: 'bpa6',
            question: 'That\'s beyond my comprehension =',
            options: ['To wykracza poza moje zrozumienie', 'To jest zrozumiałe', 'To jest skomplikowane'],
            correct: 0,
        },
        {
            id: 'bpa7',
            question: 'I\'m thoroughly impressed =',
            options: ['Jestem głęboko pod wrażeniem', 'Jestem rozczarowany', 'Jestem zaskoczony'],
            correct: 0,
        },
        {
            id: 'bpa8',
            question: 'Could we reschedule our appointment? =',
            options: ['Czy moglibyśmy przełożyć nasze spotkanie?', 'Czy możemy się spotkać?', 'Czy to dobry termin?'],
            correct: 0,
        },
        {
            id: 'bpa9',
            question: 'I\'m inclined to disagree =',
            options: ['Skłaniam się ku niezgadzaniu', 'Zgadzam się', 'Jestem neutralny'],
            correct: 0,
        },
        {
            id: 'bpa10',
            question: 'That\'s a rather peculiar suggestion =',
            options: ['To dość osobliwa propozycja', 'To wspaniały pomysł', 'To typowa sugestia'],
            correct: 0,
        },
        {
            id: 'bpa11',
            question: 'I\'m utterly fascinated by =',
            options: ['Jestem całkowicie zafascynowany', 'Jestem znudzony', 'Jestem zaintrygowany'],
            correct: 0,
        },
        {
            id: 'bpa12',
            question: 'Would you care for some refreshments? =',
            options: ['Czy życzyłbyś sobie coś do picia?', 'Czy jesteś głodny?', 'Czy chcesz usiąść?'],
            correct: 0,
        },
    ],

    'clothes-beginners': [
        {
            id: 'cl1',
            question: 'trousers =',
            options: ['koszula', 'spodnie', 'sukienka'],
            correct: 1,
        },
        {
            id: 'cl2',
            question: 'shoes =',
            options: ['buty', 'szalik', 'czapka'],
            correct: 0,
        },
        {
            id: 'cl3',
            question: 'dress =',
            options: ['sukienka', 'spódnica', 'kurtka'],
            correct: 0,
        },
        {
            id: 'cl4',
            question: 'shirt =',
            options: ['koszula', 'bluzka', 'sweter'],
            correct: 0,
        },
        {
            id: 'cl5',
            question: 'jacket =',
            options: ['kurtka', 'płaszcz', 'kamizelka'],
            correct: 0,
        },
        {
            id: 'cl6',
            question: 'hat =',
            options: ['czapka', 'kapelusz', 'beret'],
            correct: 0,
        },
        {
            id: 'cl7',
            question: 'socks =',
            options: ['skarpetki', 'rajstopy', 'pończochy'],
            correct: 0,
        },
        {
            id: 'cl8',
            question: 'coat =',
            options: ['płaszcz', 'kurtka', 'żakiet'],
            correct: 0,
        },
        {
            id: 'cl9',
            question: 'skirt =',
            options: ['spódnica', 'sukienka', 'spodnie'],
            correct: 0,
        },
        {
            id: 'cl10',
            question: 't-shirt =',
            options: ['koszulka', 'bluzka', 'sweter'],
            correct: 0,
        },
    ],

    'clothes-practice-15': [
        {
            id: 'clp1',
            question: 'sweater =',
            options: ['sweter', 'bluza', 'kamizelka'],
            correct: 0,
        },
        {
            id: 'clp2',
            question: 'jeans =',
            options: ['dżinsy', 'spodnie garniture', 'szorty'],
            correct: 0,
        },
        {
            id: 'clp3',
            question: 'blouse =',
            options: ['bluzka', 'koszula', 'sukienka'],
            correct: 0,
        },
        {
            id: 'clp4',
            question: 'scarf =',
            options: ['szalik', 'czapka', 'rękawiczki'],
            correct: 0,
        },
        {
            id: 'clp5',
            question: 'gloves =',
            options: ['rękawiczki', 'skarpetki', 'buty'],
            correct: 0,
        },
        {
            id: 'clp6',
            question: 'boots =',
            options: ['buty', 'kalosze', 'kozaki'],
            correct: 2,
        },
        {
            id: 'clp7',
            question: 'suit =',
            options: ['garnitur', 'kostium', 'kombinezon'],
            correct: 0,
        },
        {
            id: 'clp8',
            question: 'tie =',
            options: ['krawat', 'muszka', 'szalik'],
            correct: 0,
        },
        {
            id: 'clp9',
            question: 'belt =',
            options: ['pasek', 'szelki', 'łańcuszek'],
            correct: 0,
        },
        {
            id: 'clp10',
            question: 'underwear =',
            options: ['bielizna', 'piżama', 'kalesony'],
            correct: 0,
        },
        {
            id: 'clp11',
            question: 'pyjamas =',
            options: ['piżama', 'szlafrok', 'bielizna'],
            correct: 0,
        },
        {
            id: 'clp12',
            question: 'raincoat =',
            options: ['płaszcz przeciwdeszczowy', 'kurtka', 'płaszcz'],
            correct: 0,
        },
        {
            id: 'clp13',
            question: 'high heels =',
            options: ['buty na wysokim obcasie', 'klapki', 'tenisówki'],
            correct: 0,
        },
        {
            id: 'clp14',
            question: 'sandals =',
            options: ['sandały', 'klapki', 'kapcie'],
            correct: 0,
        },
        {
            id: 'clp15',
            question: 'uniform =',
            options: ['mundur', 'strój', 'kostium'],
            correct: 0,
        },
    ],

    'clothes-advanced-12': [
        {
            id: 'cla1',
            question: 'cardigan =',
            options: ['rozpinany sweter', 'kamizelka', 'bluza'],
            correct: 0,
        },
        {
            id: 'cla2',
            question: 'waistcoat =',
            options: ['kamizelka', 'żakiet', 'bluza'],
            correct: 0,
        },
        {
            id: 'cla3',
            question: 'tuxedo =',
            options: ['smoking', 'garnitur', 'mundur'],
            correct: 0,
        },
        {
            id: 'cla4',
            question: 'overalls =',
            options: ['kombinezon', 'spodnie', 'fartuch'],
            correct: 0,
        },
        {
            id: 'cla5',
            question: 'lingerie =',
            options: ['bielizna damska', 'piżama', 'szlafrok'],
            correct: 0,
        },
        {
            id: 'cla6',
            question: 'polo shirt =',
            options: ['koszulka polo', 't-shirt', 'koszula'],
            correct: 0,
        },
        {
            id: 'cla7',
            question: 'turtleneck =',
            options: ['sweter z golfem', 'bluzka', 'koszula'],
            correct: 0,
        },
        {
            id: 'cla8',
            question: 'leggings =',
            options: ['legginsy', 'spodnie', 'rajstopy'],
            correct: 0,
        },
        {
            id: 'cla9',
            question: 'blazer =',
            options: ['żakiet', 'marynarka', 'kurtka'],
            correct: 0,
        },
        {
            id: 'cla10',
            question: 'anorak =',
            options: ['kurtka przeciwdeszczowa', 'płaszcz', 'kurtka'],
            correct: 0,
        },
        {
            id: 'cla11',
            question: 'culottes =',
            options: ['spódnico-spodnie', 'spódnica', 'szorty'],
            correct: 0,
        },
        {
            id: 'cla12',
            question: 'pashmina =',
            options: ['szal', 'apaszka', 'chusta'],
            correct: 0,
        },
    ],

    'emotions-beginners': [
        {
            id: 'em1',
            question: 'angry =',
            options: ['zły', 'smutny', 'wesoły'],
            correct: 0,
        },
        {
            id: 'em2',
            question: 'anxious =',
            options: ['podekscytowany', 'niespokojny', 'znużony'],
            correct: 1,
        },
        {
            id: 'em3',
            question: 'happy =',
            options: ['nieszczęśliwy', 'szczęśliwy', 'zawstydzony'],
            correct: 1,
        },
        {
            id: 'em4',
            question: 'sad =',
            options: ['smutny', 'wesoły', 'zły'],
            correct: 0,
        },
        {
            id: 'em5',
            question: 'excited =',
            options: ['podekscytowany', 'przestraszony', 'zmartwiony'],
            correct: 0,
        },
        {
            id: 'em6',
            question: 'scared =',
            options: ['przestraszony', 'zdziwiony', 'zainteresowany'],
            correct: 0,
        },
        {
            id: 'em7',
            question: 'tired =',
            options: ['zmęczony', 'wypoczęty', 'energiczny'],
            correct: 0,
        },
        {
            id: 'em8',
            question: 'surprised =',
            options: ['zdziwiony', 'rozczarowany', 'zaskoczony'],
            correct: 0,
        },
        {
            id: 'em9',
            question: 'bored =',
            options: ['znudzony', 'zainteresowany', 'podekscytowany'],
            correct: 0,
        },
        {
            id: 'em10',
            question: 'proud =',
            options: ['dumny', 'zawstydzony', 'skromny'],
            correct: 0,
        },
    ],

    'emotions-practice-15': [
        {
            id: 'emp1',
            question: 'nervous =',
            options: ['nerwowy', 'spokojny', 'odprężony'],
            correct: 0,
        },
        {
            id: 'emp2',
            question: 'confident =',
            options: ['pewny siebie', 'nieśmiały', 'nerwowy'],
            correct: 0,
        },
        {
            id: 'emp3',
            question: 'disappointed =',
            options: ['rozczarowany', 'zadowolony', 'wściekły'],
            correct: 0,
        },
        {
            id: 'emp4',
            question: 'confused =',
            options: ['zdezorientowany', 'skupiony', 'zdeterminowany'],
            correct: 0,
        },
        {
            id: 'emp5',
            question: 'jealous =',
            options: ['zazdrosny', 'szczęśliwy', 'wdzięczny'],
            correct: 0,
        },
        {
            id: 'emp6',
            question: 'grateful =',
            options: ['wdzięczny', 'obrażony', 'obojętny'],
            correct: 0,
        },
        {
            id: 'emp7',
            question: 'frustrated =',
            options: ['sfrustrowany', 'zadowolony', 'entuzjastyczny'],
            correct: 0,
        },
        {
            id: 'emp8',
            question: 'embarrassed =',
            options: ['zawstydzony', 'dumny', 'pewny siebie'],
            correct: 0,
        },
        {
            id: 'emp9',
            question: 'curious =',
            options: ['ciekawy', 'obojętny', 'znudzony'],
            correct: 0,
        },
        {
            id: 'emp10',
            question: 'hopeful =',
            options: ['pełen nadziei', 'zdesperowany', 'pesymistyczny'],
            correct: 0,
        },
        {
            id: 'emp11',
            question: 'lonely =',
            options: ['samotny', 'towarzyski', 'niezależny'],
            correct: 0,
        },
        {
            id: 'emp12',
            question: 'guilty =',
            options: ['winny', 'niewinny', 'dumny'],
            correct: 0,
        },
        {
            id: 'emp13',
            question: 'ashamed =',
            options: ['zawstydzony', 'dumny', 'zadowolony'],
            correct: 0,
        },
        {
            id: 'emp14',
            question: 'relieved =',
            options: ['ulżony', 'zmartwiony', 'zaniepokojony'],
            correct: 0,
        },
        {
            id: 'emp15',
            question: 'enthusiastic =',
            options: ['entuzjastyczny', 'obojętny', 'pesymistyczny'],
            correct: 0,
        },
    ],

    'emotions-advanced-12': [
        {
            id: 'ema1',
            question: 'ecstatic =',
            options: ['ekstatyczny', 'zadowolony', 'smutny'],
            correct: 0,
        },
        {
            id: 'ema2',
            question: 'melancholic =',
            options: ['melancholijny', 'radosny', 'gniewny'],
            correct: 0,
        },
        {
            id: 'ema3',
            question: 'apprehensive =',
            options: ['obawiający się', 'pewny', 'zrelaksowany'],
            correct: 0,
        },
        {
            id: 'ema4',
            question: 'content =',
            options: ['zadowolony', 'nieszczęśliwy', 'obojętny'],
            correct: 0,
        },
        {
            id: 'ema5',
            question: 'indifferent =',
            options: ['obojętny', 'zaangażowany', 'entuzjastyczny'],
            correct: 0,
        },
        {
            id: 'ema6',
            question: 'overwhelmed =',
            options: ['przytłoczony', 'zrelaksowany', 'znudzony'],
            correct: 0,
        },
        {
            id: 'ema7',
            question: 'serene =',
            options: ['pogodny', 'niespokojny', 'podekscytowany'],
            correct: 0,
        },
        {
            id: 'ema8',
            question: 'jubilant =',
            options: ['rozradowany', 'smutny', 'zły'],
            correct: 0,
        },
        {
            id: 'ema9',
            question: 'despondent =',
            options: ['zgnębiony', 'szczęśliwy', 'zaskoczony'],
            correct: 0,
        },
        {
            id: 'ema10',
            question: 'exhilarated =',
            options: ['rozentuzjazmowany', 'zmęczony', 'zaniepokojony'],
            correct: 0,
        },
        {
            id: 'ema11',
            question: 'forlorn =',
            options: ['opuszczony', 'towarzyski', 'niezależny'],
            correct: 0,
        },
        {
            id: 'ema12',
            question: 'tranquil =',
            options: ['spokojny', 'niespokojny', 'energiczny'],
            correct: 0,
        },
    ],

    'basic-verbs-beginners': [
        {
            id: 'bv1',
            question: 'make =',
            options: ['robić (tworzyć)', 'iść', 'mieć'],
            correct: 0,
        },
        {
            id: 'bv2',
            question: 'go =',
            options: ['przychodzić', 'iść', 'iść spać'],
            correct: 1,
        },
        {
            id: 'bv3',
            question: 'do =',
            options: ['robić (czynność)', 'robić (tworzyć)', 'zrobić zdjęcie'],
            correct: 0,
        },
        {
            id: 'bv4',
            question: 'have =',
            options: ['mieć', 'być', 'robić'],
            correct: 0,
        },
        {
            id: 'bv5',
            question: 'be =',
            options: ['być', 'mieć', 'iść'],
            correct: 0,
        },
        {
            id: 'bv6',
            question: 'see =',
            options: ['widzieć', 'patrzeć', 'oglądać'],
            correct: 0,
        },
        {
            id: 'bv7',
            question: 'come =',
            options: ['przychodzić', 'iść', 'biegać'],
            correct: 0,
        },
        {
            id: 'bv8',
            question: 'know =',
            options: ['wiedzieć', 'myśleć', 'uczyć się'],
            correct: 0,
        },
        {
            id: 'bv9',
            question: 'think =',
            options: ['myśleć', 'wiedzieć', 'wierzyć'],
            correct: 0,
        },
        {
            id: 'bv10',
            question: 'want =',
            options: ['chcieć', 'potrzebować', 'musieć'],
            correct: 0,
        },
    ],

    'basic-verbs-practice-15': [
        {
            id: 'bvp1',
            question: 'say =',
            options: ['mówić', 'opowiadać', 'rozmawiać'],
            correct: 0,
        },
        {
            id: 'bvp2',
            question: 'get =',
            options: ['dostawać', 'dawać', 'brać'],
            correct: 0,
        },
        {
            id: 'bvp3',
            question: 'take =',
            options: ['brać', 'dawać', 'trzymać'],
            correct: 0,
        },
        {
            id: 'bvp4',
            question: 'give =',
            options: ['dawać', 'brać', 'otrzymywać'],
            correct: 0,
        },
        {
            id: 'bvp5',
            question: 'find =',
            options: ['znajdować', 'szukać', 'gubić'],
            correct: 0,
        },
        {
            id: 'bvp6',
            question: 'tell =',
            options: ['mówić (komuś)', 'mówić', 'opowiadać'],
            correct: 0,
        },
        {
            id: 'bvp7',
            question: 'work =',
            options: ['pracować', 'uczyć się', 'odpoczywać'],
            correct: 0,
        },
        {
            id: 'bvp8',
            question: 'call =',
            options: ['dzwonić', 'wołać', 'mówić'],
            correct: 0,
        },
        {
            id: 'bvp9',
            question: 'try =',
            options: ['próbować', 'testować', 'ćwiczyć'],
            correct: 0,
        },
        {
            id: 'bvp10',
            question: 'ask =',
            options: ['pytać', 'prosić', 'odpowiadać'],
            correct: 0,
        },
        {
            id: 'bvp11',
            question: 'need =',
            options: ['potrzebować', 'chcieć', 'musieć'],
            correct: 0,
        },
        {
            id: 'bvp12',
            question: 'feel =',
            options: ['czuć', 'myśleć', 'wiedzieć'],
            correct: 0,
        },
        {
            id: 'bvp13',
            question: 'become =',
            options: ['stawać się', 'być', 'mieć'],
            correct: 0,
        },
        {
            id: 'bvp14',
            question: 'leave =',
            options: ['opuszczać', 'przychodzić', 'zostawać'],
            correct: 0,
        },
        {
            id: 'bvp15',
            question: 'put =',
            options: ['kłaść', 'stawiać', 'umieszczać'],
            correct: 0,
        },
    ],

    'basic-verbs-advanced-12': [
        {
            id: 'bva1',
            question: 'achieve =',
            options: ['osiągać', 'próbować', 'rozpoczynać'],
            correct: 0,
        },
        {
            id: 'bva2',
            question: 'acquire =',
            options: ['nabywać', 'tracić', 'posiadać'],
            correct: 0,
        },
        {
            id: 'bva3',
            question: 'adapt =',
            options: ['przystosowywać', 'zmieniać', 'odrzucać'],
            correct: 0,
        },
        {
            id: 'bva4',
            question: 'anticipate =',
            options: ['przewidywać', 'pamiętać', 'zapominać'],
            correct: 0,
        },
        {
            id: 'bva5',
            question: 'appreciate =',
            options: ['doceniać', 'krytykować', 'ignorować'],
            correct: 0,
        },
        {
            id: 'bva6',
            question: 'assume =',
            options: ['zakładać', 'wiedzieć', 'dowiedzieć się'],
            correct: 0,
        },
        {
            id: 'bva7',
            question: 'commit =',
            options: ['zobowiązywać się', 'unikać', 'odmawiać'],
            correct: 0,
        },
        {
            id: 'bva8',
            question: 'comprehend =',
            options: ['pojmować', 'pytać', 'wątpić'],
            correct: 0,
        },
        {
            id: 'bva9',
            question: 'convey =',
            options: ['przekazywać', 'ukrywać', 'mówić'],
            correct: 0,
        },
        {
            id: 'bva10',
            question: 'dedicate =',
            options: ['poświęcać', 'ignorować', 'odkładać'],
            correct: 0,
        },
        {
            id: 'bva11',
            question: 'demonstrate =',
            options: ['demonstrować', 'ukrywać', 'opisywać'],
            correct: 0,
        },
        {
            id: 'bva12',
            question: 'devote =',
            options: ['poświęcać', 'odbierać', 'dzielić'],
            correct: 0,
        },
    ],

    'phrasal-verbs-beginners': [
        {
            id: 'pv1',
            question: 'look up =',
            options: ['wyłączyć', 'sprawdzić', 'oddać'],
            correct: 1,
        },
        {
            id: 'pv2',
            question: 'give up =',
            options: ['poddać się', 'zebrać', 'odebrać'],
            correct: 0,
        },
        {
            id: 'pv3',
            question: 'run out of =',
            options: ['odebrać', 'wyczerpać się', 'przełączyć'],
            correct: 1,
        },
        {
            id: 'pv4',
            question: 'turn on =',
            options: ['włączyć', 'wyłączyć', 'przełączyć'],
            correct: 0,
        },
        {
            id: 'pv5',
            question: 'turn off =',
            options: ['wyłączyć', 'włączyć', 'zwiększyć'],
            correct: 0,
        },
        {
            id: 'pv6',
            question: 'get up =',
            options: ['wstać', 'położyć się', 'usiąść'],
            correct: 0,
        },
        {
            id: 'pv7',
            question: 'wake up =',
            options: ['obudzić się', 'zasnąć', 'wstać'],
            correct: 0,
        },
        {
            id: 'pv8',
            question: 'look for =',
            options: ['szukać', 'patrzeć', 'znajdować'],
            correct: 0,
        },
        {
            id: 'pv9',
            question: 'put on =',
            options: ['założyć', 'zdjąć', 'przymierzyć'],
            correct: 0,
        },
        {
            id: 'pv10',
            question: 'take off =',
            options: ['zdjąć', 'założyć', 'przymierzyć'],
            correct: 0,
        },
    ],

    'phrasal-verbs-practice-15': [
        {
            id: 'pvp1',
            question: 'break down =',
            options: ['zepsuć się', 'naprawić', 'rozbijać'],
            correct: 0,
        },
        {
            id: 'pvp2',
            question: 'call off =',
            options: ['odwołać', 'zadzwonić', 'wezwać'],
            correct: 0,
        },
        {
            id: 'pvp3',
            question: 'carry on =',
            options: ['kontynuować', 'nieść', 'przenosić'],
            correct: 0,
        },
        {
            id: 'pvp4',
            question: 'find out =',
            options: ['dowiedzieć się', 'znaleźć', 'szukać'],
            correct: 0,
        },
        {
            id: 'pvp5',
            question: 'get along =',
            options: ['dogadywać się', 'iść', 'przyjeżdżać'],
            correct: 0,
        },
        {
            id: 'pvp6',
            question: 'give back =',
            options: ['oddać', 'dać', 'wziąć'],
            correct: 0,
        },
        {
            id: 'pvp7',
            question: 'go on =',
            options: ['kontynuować', 'iść', 'przychodzić'],
            correct: 0,
        },
        {
            id: 'pvp8',
            question: 'hold on =',
            options: ['poczekać', 'trzymać', 'wypuścić'],
            correct: 0,
        },
        {
            id: 'pvp9',
            question: 'look after =',
            options: ['opiekować się', 'szukać', 'patrzeć'],
            correct: 0,
        },
        {
            id: 'pvp10',
            question: 'make up =',
            options: ['wymyślić', 'zrobić', 'składać'],
            correct: 0,
        },
        {
            id: 'pvp11',
            question: 'pick up =',
            options: ['odebrać', 'wybrać', 'rzucić'],
            correct: 0,
        },
        {
            id: 'pvp12',
            question: 'put off =',
            options: ['odkładać', 'kłaść', 'umieszczać'],
            correct: 0,
        },
        {
            id: 'pvp13',
            question: 'set up =',
            options: ['ustanowić', 'ustawić', 'siedzieć'],
            correct: 0,
        },
        {
            id: 'pvp14',
            question: 'take after =',
            options: ['być podobnym', 'brać po', 'iść za'],
            correct: 0,
        },
        {
            id: 'pvp15',
            question: 'turn up =',
            options: ['pojawić się', 'włączyć', 'wyłączyć'],
            correct: 0,
        },
    ],

    'phrasal-verbs-advanced-12': [
        {
            id: 'pva1',
            question: 'account for =',
            options: ['tłumaczyć', 'liczyć', 'opowiadać'],
            correct: 0,
        },
        {
            id: 'pva2',
            question: 'back up =',
            options: ['wspierać', 'cofać', 'atakować'],
            correct: 0,
        },
        {
            id: 'pva3',
            question: 'brush up on =',
            options: ['odświeżyć', 'wymazać', 'malować'],
            correct: 0,
        },
        {
            id: 'pva4',
            question: 'come across =',
            options: ['natknąć się', 'przychodzić', 'przekraczać'],
            correct: 0,
        },
        {
            id: 'pva5',
            question: 'cut down on =',
            options: ['ograniczyć', 'ciąć', 'zmniejszać'],
            correct: 0,
        },
        {
            id: 'pva6',
            question: 'deal with =',
            options: ['radzić sobie', 'robić interesy', 'dzielić'],
            correct: 0,
        },
        {
            id: 'pva7',
            question: 'fall through =',
            options: ['nie powieść się', 'przepadać', 'spadać'],
            correct: 0,
        },
        {
            id: 'pva8',
            question: 'get over =',
            options: ['przejść przez', 'dostać', 'przekroczyć'],
            correct: 0,
        },
        {
            id: 'pva9',
            question: 'look into =',
            options: ['zbadać', 'patrzeć w', 'szukać'],
            correct: 0,
        },
        {
            id: 'pva10',
            question: 'make out =',
            options: ['rozróżnić', 'zrobić', 'wymyślić'],
            correct: 0,
        },
        {
            id: 'pva11',
            question: 'put up with =',
            options: ['tolerować', 'stawiać z', 'kłaść z'],
            correct: 0,
        },
        {
            id: 'pva12',
            question: 'run into =',
            options: ['spotkać przypadkiem', 'biec w', 'wpadać'],
            correct: 0,
        },
    ],

    // Dodatkowe kategorie - food, house, work, travel, health
    'food-beginners': [
        {
            id: 'fd1',
            question: 'apple =',
            options: ['jabłko', 'gruszka', 'pomarańcza'],
            correct: 0,
        },
        {
            id: 'fd2',
            question: 'bread =',
            options: ['chleb', 'bułka', 'ciasto'],
            correct: 0,
        },
        {
            id: 'fd3',
            question: 'cheese =',
            options: ['ser', 'masło', 'mleko'],
            correct: 0,
        },
        {
            id: 'fd4',
            question: 'chicken =',
            options: ['kurczak', 'wołowina', 'wieprzowina'],
            correct: 0,
        },
        {
            id: 'fd5',
            question: 'coffee =',
            options: ['kawa', 'herbata', 'sok'],
            correct: 0,
        },
        {
            id: 'fd6',
            question: 'egg =',
            options: ['jajko', 'jajecznica', 'omlet'],
            correct: 0,
        },
        {
            id: 'fd7',
            question: 'fish =',
            options: ['ryba', 'mięso', 'drób'],
            correct: 0,
        },
        {
            id: 'fd8',
            question: 'fruit =',
            options: ['owoc', 'warzywo', 'ziarno'],
            correct: 0,
        },
        {
            id: 'fd9',
            question: 'meat =',
            options: ['mięso', 'ryba', 'ser'],
            correct: 0,
        },
        {
            id: 'fd10',
            question: 'milk =',
            options: ['mleko', 'woda', 'sok'],
            correct: 0,
        },
    ],

    'house-beginners': [
        {
            id: 'hs1',
            question: 'bedroom =',
            options: ['sypialnia', 'łazienka', 'kuchnia'],
            correct: 0,
        },
        {
            id: 'hs2',
            question: 'kitchen =',
            options: ['kuchnia', 'jadalnia', 'salon'],
            correct: 0,
        },
        {
            id: 'hs3',
            question: 'bathroom =',
            options: ['łazienka', 'toaleta', 'przedpokój'],
            correct: 0,
        },
        {
            id: 'hs4',
            question: 'living room =',
            options: ['salon', 'sypialnia', 'gabinet'],
            correct: 0,
        },
        {
            id: 'hs5',
            question: 'table =',
            options: ['stół', 'krzesło', 'ławka'],
            correct: 0,
        },
        {
            id: 'hs6',
            question: 'chair =',
            options: ['krzesło', 'fotel', 'taboret'],
            correct: 0,
        },
        {
            id: 'hs7',
            question: 'bed =',
            options: ['łóżko', 'kanapa', 'materac'],
            correct: 0,
        },
        {
            id: 'hs8',
            question: 'window =',
            options: ['okno', 'drzwi', 'ściana'],
            correct: 0,
        },
        {
            id: 'hs9',
            question: 'door =',
            options: ['drzwi', 'okno', 'brama'],
            correct: 0,
        },
        {
            id: 'hs10',
            question: 'wall =',
            options: ['ściana', 'sufit', 'podłoga'],
            correct: 0,
        },
    ],

    'work-beginners': [
        {
            id: 'wk1',
            question: 'boss =',
            options: ['szef', 'pracownik', 'kolega'],
            correct: 0,
        },
        {
            id: 'wk2',
            question: 'colleague =',
            options: ['kolega z pracy', 'przyjaciel', 'znajomy'],
            correct: 0,
        },
        {
            id: 'wk3',
            question: 'meeting =',
            options: ['spotkanie', 'konferencja', 'rozmowa'],
            correct: 0,
        },
        {
            id: 'wk4',
            question: 'deadline =',
            options: ['termin', 'data', 'czas'],
            correct: 0,
        },
        {
            id: 'wk5',
            question: 'salary =',
            options: ['wynagrodzenie', 'premia', 'dochód'],
            correct: 0,
        },
        {
            id: 'wk6',
            question: 'office =',
            options: ['biuro', 'gabinet', 'pracownia'],
            correct: 0,
        },
        {
            id: 'wk7',
            question: 'computer =',
            options: ['komputer', 'laptop', 'tablet'],
            correct: 0,
        },
        {
            id: 'wk8',
            question: 'project =',
            options: ['projekt', 'zadanie', 'plan'],
            correct: 0,
        },
        {
            id: 'wk9',
            question: 'client =',
            options: ['klient', 'dostawca', 'partner'],
            correct: 0,
        },
        {
            id: 'wk10',
            question: 'employee =',
            options: ['pracownik', 'szef', 'właściciel'],
            correct: 0,
        },
    ],

    'travel-beginners': [
        {
            id: 'tr1',
            question: 'airport =',
            options: ['lotnisko', 'dworzec', 'port'],
            correct: 0,
        },
        {
            id: 'tr2',
            question: 'hotel =',
            options: ['hotel', 'hostel', 'motel'],
            correct: 0,
        },
        {
            id: 'tr3',
            question: 'passport =',
            options: ['paszport', 'dowód', 'wiza'],
            correct: 0,
        },
        {
            id: 'tr4',
            question: 'suitcase =',
            options: ['walizka', 'torba', 'plecak'],
            correct: 0,
        },
        {
            id: 'tr5',
            question: 'ticket =',
            options: ['bilet', 'kupon', 'voucher'],
            correct: 0,
        },
        {
            id: 'tr6',
            question: 'flight =',
            options: ['lot', 'podróż', 'wycieczka'],
            correct: 0,
        },
        {
            id: 'tr7',
            question: 'train =',
            options: ['pociąg', 'autobus', 'tramwaj'],
            correct: 0,
        },
        {
            id: 'tr8',
            question: 'bus =',
            options: ['autobus', 'tramwaj', 'metro'],
            correct: 0,
        },
        {
            id: 'tr9',
            question: 'map =',
            options: ['mapa', 'plan', 'schemat'],
            correct: 0,
        },
        {
            id: 'tr10',
            question: 'luggage =',
            options: ['bagaż', 'ładunek', 'przesyłka'],
            correct: 0,
        },
    ],

    'health-beginners': [
        {
            id: 'hl1',
            question: 'doctor =',
            options: ['lekarz', 'pielęgniarka', 'farmaceuta'],
            correct: 0,
        },
        {
            id: 'hl2',
            question: 'hospital =',
            options: ['szpital', 'przychodnia', 'apteka'],
            correct: 0,
        },
        {
            id: 'hl3',
            question: 'medicine =',
            options: ['lekarstwo', 'witamina', 'suplement'],
            correct: 0,
        },
        {
            id: 'hl4',
            question: 'pain =',
            options: ['ból', 'dyskomfort', 'zmęczenie'],
            correct: 0,
        },
        {
            id: 'hl5',
            question: 'fever =',
            options: ['gorączka', 'kaszel', 'katar'],
            correct: 0,
        },
        {
            id: 'hl6',
            question: 'headache =',
            options: ['ból głowy', 'ból gardła', 'ból brzucha'],
            correct: 0,
        },
        {
            id: 'hl7',
            question: 'cold =',
            options: ['przeziębienie', 'grypa', 'alergia'],
            correct: 0,
        },
        {
            id: 'hl8',
            question: 'appointment =',
            options: ['wizyta', 'spotkanie', 'konsultacja'],
            correct: 0,
        },
        {
            id: 'hl9',
            question: 'pharmacy =',
            options: ['apteka', 'szpital', 'przychodnia'],
            correct: 0,
        },
        {
            id: 'hl10',
            question: 'prescription =',
            options: ['recepta', 'skierowanie', 'zaświadczenie'],
            correct: 0,
        },
    ],
    'appearance-beginners': [
        { id: 'ap1', question: 'tall =', options: ['wysoki', 'niski', 'gruby'], correct: 0 },
        { id: 'ap2', question: 'short =', options: ['krótki', 'niski', 'wysoki'], correct: 1 },
        { id: 'ap3', question: 'slim =', options: ['szczupły', 'gruby', 'umięśniony'], correct: 0 },
        { id: 'ap4', question: 'blonde =', options: ['blond', 'brunet', 'rudy'], correct: 0 },
        { id: 'ap5', question: 'beard =', options: ['broda', 'wąsy', 'zarost'], correct: 0 },
        { id: 'ap6', question: 'curly =', options: ['kręcony', 'prosty', 'falowany'], correct: 0 },
        { id: 'ap7', question: 'bald =', options: ['łysy', 'włochaty', 'owłosiony'], correct: 0 },
        { id: 'ap8', question: 'freckles =', options: ['piegi', 'blizny', 'pryszcze'], correct: 0 },
        { id: 'ap9', question: 'glasses =', options: ['okulary', 'soczewki', 'lornetka'], correct: 0 },
        { id: 'ap10', question: 'attractive =', options: ['atrakcyjny', 'brzydki', 'przeciętny'], correct: 0 },
    ],

    'school-beginners': [
        { id: 'sc1', question: 'classroom =', options: ['klasa', 'korytarz', 'stołówka'], correct: 0 },
        { id: 'sc2', question: 'teacher =', options: ['nauczyciel', 'uczeń', 'dyrektor'], correct: 0 },
        { id: 'sc3', question: 'student =', options: ['uczeń', 'student', 'nauczyciel'], correct: 0 },
        { id: 'sc4', question: 'homework =', options: ['praca domowa', 'zadanie', 'projekt'], correct: 0 },
        { id: 'sc5', question: 'exam =', options: ['egzamin', 'test', 'sprawdzian'], correct: 0 },
        { id: 'sc6', question: 'blackboard =', options: ['tablica', 'zeszyt', 'podręcznik'], correct: 0 },
        { id: 'sc7', question: 'pencil =', options: ['ołówek', 'długopis', 'flamaster'], correct: 0 },
        { id: 'sc8', question: 'notebook =', options: ['zeszyt', 'książka', 'notatnik'], correct: 0 },
        { id: 'sc9', question: 'library =', options: ['biblioteka', 'czytelnia', 'księgarnia'], correct: 0 },
        { id: 'sc10', question: 'principal =', options: ['dyrektor', 'nauczyciel', 'woźny'], correct: 0 },
    ],

    'professions-beginners': [
        { id: 'pr1', question: 'doctor =', options: ['lekarz', 'pielęgniarka', 'farmaceuta'], correct: 0 },
        { id: 'pr2', question: 'engineer =', options: ['inżynier', 'technik', 'mechanik'], correct: 0 },
        { id: 'pr3', question: 'teacher =', options: ['nauczyciel', 'profesor', 'wykładowca'], correct: 0 },
        { id: 'pr4', question: 'chef =', options: ['szef kuchni', 'kucharz', 'kelner'], correct: 0 },
        { id: 'pr5', question: 'pilot =', options: ['pilot', 'stewardessa', 'nawigator'], correct: 0 },
        { id: 'pr6', question: 'lawyer =', options: ['prawnik', 'sędzia', 'adwokat'], correct: 0 },
        { id: 'pr7', question: 'accountant =', options: ['księgowy', 'bankier', 'ekonomista'], correct: 0 },
        { id: 'pr8', question: 'architect =', options: ['architekt', 'budowniczy', 'inżynier'], correct: 0 },
        { id: 'pr9', question: 'journalist =', options: ['dziennikarz', 'reporter', 'redaktor'], correct: 0 },
        { id: 'pr10', question: 'firefighter =', options: ['strażak', 'policjant', 'ratownik'], correct: 0 },
    ],

    'body-beginners': [
        { id: 'bd1', question: 'head =', options: ['głowa', 'szyja', 'ramię'], correct: 0 },
        { id: 'bd2', question: 'shoulder =', options: ['ramię', 'łokieć', 'nadgarstek'], correct: 0 },
        { id: 'bd3', question: 'elbow =', options: ['łokieć', 'kolano', 'kostka'], correct: 0 },
        { id: 'bd4', question: 'wrist =', options: ['nadgarstek', 'przedramię', 'dłoń'], correct: 0 },
        { id: 'bd5', question: 'chest =', options: ['klatka piersiowa', 'brzuch', 'plecy'], correct: 0 },
        { id: 'bd6', question: 'stomach =', options: ['brzuch', 'talja', 'biodro'], correct: 0 },
        { id: 'bd7', question: 'knee =', options: ['kolano', 'łydka', 'udo'], correct: 0 },
        { id: 'bd8', question: 'ankle =', options: ['kostka', 'stopa', 'pięta'], correct: 0 },
        { id: 'bd9', question: 'finger =', options: ['palec', 'kciuk', 'dłoń'], correct: 0 },
        { id: 'bd10', question: 'toe =', options: ['palec u nogi', 'stopa', 'pięta'], correct: 0 },
    ],

    // Dodaj kolejne quizy dla pozostałych sekcji w podobny sposób...
    'sport-beginners': [
        { id: 'sp1', question: 'football =', options: ['piłka nożna', 'koszykówka', 'siatkówka'], correct: 0 },
        { id: 'sp2', question: 'basketball =', options: ['koszykówka', 'siatkówka', 'piłka ręczna'], correct: 0 },
        { id: 'sp3', question: 'tennis =', options: ['tenis', 'badminton', 'squash'], correct: 0 },
        { id: 'sp4', question: 'swimming =', options: ['pływanie', 'nurkowanie', 'wioślarstwo'], correct: 0 },
        { id: 'sp5', question: 'cycling =', options: ['kolarstwo', 'bieganie', 'jazda konna'], correct: 0 },
        { id: 'sp6', question: 'athletics =', options: ['lekkoatletyka', 'gimnastyka', 'sporty walki'], correct: 0 },
        { id: 'sp7', question: 'gym =', options: ['siłownia', 'stadion', 'boisko'], correct: 0 },
        { id: 'sp8', question: 'coach =', options: ['trener', 'zawodnik', 'sędzia'], correct: 0 },
        { id: 'sp9', question: 'championship =', options: ['mistrzostwo', 'turniej', 'liga'], correct: 0 },
        { id: 'sp10', question: 'medal =', options: ['medal', 'puchar', 'trofeum'], correct: 0 },
    ],

    'it-beginners': [
        { id: 'it1', question: 'computer =', options: ['komputer', 'laptop', 'tablet'], correct: 0 },
        { id: 'it2', question: 'keyboard =', options: ['klawiatura', 'myszka', 'monitor'], correct: 0 },
        { id: 'it3', question: 'mouse =', options: ['myszka', 'touchpad', 'trackball'], correct: 0 },
        { id: 'it4', question: 'software =', options: ['oprogramowanie', 'sprzęt', 'system'], correct: 0 },
        { id: 'it5', question: 'hardware =', options: ['sprzęt', 'oprogramowanie', 'komponent'], correct: 0 },
        { id: 'it6', question: 'internet =', options: ['internet', 'sieć', 'WiFi'], correct: 0 },
        { id: 'it7', question: 'website =', options: ['strona internetowa', 'portal', 'aplikacja'], correct: 0 },
        { id: 'it8', question: 'password =', options: ['hasło', 'login', 'klucz'], correct: 0 },
        { id: 'it9', question: 'download =', options: ['pobierać', 'wysyłać', 'kopiować'], correct: 0 },
        { id: 'it10', question: 'upload =', options: ['wysyłać', 'pobierać', 'zapisywać'], correct: 0 },
    ],

    'science-beginners': [
        { id: 'sc1', question: 'experiment =', options: ['eksperyment', 'badanie', 'test'], correct: 0 },
        { id: 'sc2', question: 'research =', options: ['badania', 'eksperyment', 'analiza'], correct: 0 },
        { id: 'sc3', question: 'theory =', options: ['teoria', 'hipoteza', 'prawo'], correct: 0 },
        { id: 'sc4', question: 'laboratory =', options: ['laboratorium', 'pracownia', 'gabinet'], correct: 0 },
        { id: 'sc5', question: 'scientist =', options: ['naukowiec', 'badacz', 'ekspert'], correct: 0 },
        { id: 'sc6', question: 'discovery =', options: ['odkrycie', 'wynalazek', 'badanie'], correct: 0 },
        { id: 'sc7', question: 'data =', options: ['dane', 'informacje', 'wyniki'], correct: 0 },
        { id: 'sc8', question: 'analysis =', options: ['analiza', 'badanie', 'ocena'], correct: 0 },
        { id: 'sc9', question: 'hypothesis =', options: ['hipoteza', 'teoria', 'założenie'], correct: 0 },
        { id: 'sc10', question: 'evidence =', options: ['dowód', 'świadectwo', 'potwierdzenie'], correct: 0 },
    ],

    'math-beginners': [
        { id: 'ma1', question: 'addition =', options: ['dodawanie', 'odejmowanie', 'mnożenie'], correct: 0 },
        { id: 'ma2', question: 'subtraction =', options: ['odejmowanie', 'dodawanie', 'dzielenie'], correct: 0 },
        { id: 'ma3', question: 'multiplication =', options: ['mnożenie', 'dzielenie', 'potęgowanie'], correct: 0 },
        { id: 'ma4', question: 'division =', options: ['dzielenie', 'mnożenie', 'odejmowanie'], correct: 0 },
        { id: 'ma5', question: 'number =', options: ['liczba', 'cyfra', 'wartość'], correct: 0 },
        { id: 'ma6', question: 'equation =', options: ['równanie', 'formuła', 'wzór'], correct: 0 },
        { id: 'ma7', question: 'geometry =', options: ['geometria', 'algebra', 'arytmetyka'], correct: 0 },
        { id: 'ma8', question: 'algebra =', options: ['algebra', 'geometria', 'trygonometria'], correct: 0 },
        { id: 'ma9', question: 'fraction =', options: ['ułamek', 'liczba', 'procent'], correct: 0 },
        { id: 'ma10', question: 'percentage =', options: ['procent', 'ułamek', 'stosunek'], correct: 0 },
    ],

    'chemistry-beginners': [
        { id: 'ch1', question: 'atom =', options: ['atom', 'cząsteczka', 'jądro'], correct: 0 },
        { id: 'ch2', question: 'molecule =', options: ['cząsteczka', 'atom', 'związek'], correct: 0 },
        { id: 'ch3', question: 'element =', options: ['pierwiastek', 'związek', 'mieszanina'], correct: 0 },
        { id: 'ch4', question: 'compound =', options: ['związek chemiczny', 'pierwiastek', 'mieszanina'], correct: 0 },
        { id: 'ch5', question: 'reaction =', options: ['reakcja', 'proces', 'zmiana'], correct: 0 },
        { id: 'ch6', question: 'laboratory =', options: ['laboratorium', 'pracownia', 'hala'], correct: 0 },
        { id: 'ch7', question: 'chemical =', options: ['chemiczny', 'fizyczny', 'biologiczny'], correct: 0 },
        { id: 'ch8', question: 'acid =', options: ['kwas', 'zasada', 'sól'], correct: 0 },
        { id: 'ch9', question: 'base =', options: ['zasada', 'kwas', 'sól'], correct: 0 },
        { id: 'ch10', question: 'solution =', options: ['roztwór', 'mieszanina', 'związek'], correct: 0 },
    ],

    'geography-beginners': [
        { id: 'ge1', question: 'continent =', options: ['kontynent', 'kraj', 'region'], correct: 0 },
        { id: 'ge2', question: 'country =', options: ['kraj', 'państwo', 'naród'], correct: 0 },
        { id: 'ge3', question: 'city =', options: ['miasto', 'wieś', 'miasteczko'], correct: 0 },
        { id: 'ge4', question: 'river =', options: ['rzeka', 'strumień', 'jezioro'], correct: 0 },
        { id: 'ge5', question: 'mountain =', options: ['góra', 'wzgórze', 'pagórek'], correct: 0 },
        { id: 'ge6', question: 'ocean =', options: ['ocean', 'morze', 'jezioro'], correct: 0 },
        { id: 'ge7', question: 'lake =', options: ['jezioro', 'staw', 'rzeka'], correct: 0 },
        { id: 'ge8', question: 'island =', options: ['wyspa', 'półwysep', 'archipelag'], correct: 0 },
        { id: 'ge9', question: 'desert =', options: ['pustynia', 'step', 'sawanna'], correct: 0 },
        { id: 'ge10', question: 'forest =', options: ['las', 'gaj', 'park'], correct: 0 },
    ],

    'weather-beginners': [
        { id: 'we1', question: 'sunny =', options: ['słonecznie', 'deszczowo', 'pochmurno'], correct: 0 },
        { id: 'we2', question: 'rainy =', options: ['deszczowy', 'śnieżny', 'wietrzny'], correct: 0 },
        { id: 'we3', question: 'cloudy =', options: ['pochmurny', 'jasny', 'mglisty'], correct: 0 },
        { id: 'we4', question: 'windy =', options: ['wietrzny', 'bezwietrzny', 'burzowy'], correct: 0 },
        { id: 'we5', question: 'snowy =', options: ['śnieżny', 'deszczowy', 'lodowaty'], correct: 0 },
        { id: 'we6', question: 'storm =', options: ['burza', 'wichura', 'huragan'], correct: 0 },
        { id: 'we7', question: 'temperature =', options: ['temperatura', 'ciśnienie', 'wilgotność'], correct: 0 },
        { id: 'we8', question: 'forecast =', options: ['prognoza', 'raport', 'informacja'], correct: 0 },
        { id: 'we9', question: 'humidity =', options: ['wilgotność', 'temperatura', 'ciśnienie'], correct: 0 },
        { id: 'we10', question: 'climate =', options: ['klimat', 'pogoda', 'atmosfera'], correct: 0 },
    ],

    'plants-beginners': [
        { id: 'pl1', question: 'tree =', options: ['drzewo', 'krzew', 'roślina'], correct: 0 },
        { id: 'pl2', question: 'flower =', options: ['kwiat', 'liść', 'pąk'], correct: 0 },
        { id: 'pl3', question: 'leaf =', options: ['liść', 'gałąź', 'korzeń'], correct: 0 },
        { id: 'pl4', question: 'root =', options: ['korzeń', 'łodyga', 'liść'], correct: 0 },
        { id: 'pl5', question: 'stem =', options: ['łodyga', 'gałąź', 'korzeń'], correct: 0 },
        { id: 'pl6', question: 'seed =', options: ['nasiono', 'owoc', 'pąk'], correct: 0 },
        { id: 'pl7', question: 'fruit =', options: ['owoc', 'warzywo', 'nasiono'], correct: 0 },
        { id: 'pl8', question: 'vegetable =', options: ['warzywo', 'owoc', 'roślina'], correct: 0 },
        { id: 'pl9', question: 'plant =', options: ['roślina', 'drzewo', 'kwiat'], correct: 0 },
        { id: 'pl10', question: 'garden =', options: ['ogród', 'park', 'las'], correct: 0 },
    ],

    'animals-beginners': [
        { id: 'an1', question: 'dog =', options: ['pies', 'kot', 'koń'], correct: 0 },
        { id: 'an2', question: 'cat =', options: ['kot', 'pies', 'chomik'], correct: 0 },
        { id: 'an3', question: 'bird =', options: ['ptak', 'ryba', 'gad'], correct: 0 },
        { id: 'an4', question: 'fish =', options: ['ryba', 'ptak', 'ssak'], correct: 0 },
        { id: 'an5', question: 'horse =', options: ['koń', 'krowa', 'owca'], correct: 0 },
        { id: 'an6', question: 'cow =', options: ['krowa', 'koń', 'świnia'], correct: 0 },
        { id: 'an7', question: 'pig =', options: ['świnia', 'koza', 'owca'], correct: 0 },
        { id: 'an8', question: 'sheep =', options: ['owca', 'koza', 'krowa'], correct: 0 },
        { id: 'an9', question: 'chicken =', options: ['kurczak', 'kaczka', 'gęś'], correct: 0 },
        { id: 'an10', question: 'rabbit =', options: ['królik', 'zając', 'chomik'], correct: 0 },
    ],

    'mammals-beginners': [
        { id: 'mm1', question: 'lion =', options: ['lew', 'tygrys', 'lampart'], correct: 0 },
        { id: 'mm2', question: 'tiger =', options: ['tygrys', 'lew', 'jaguar'], correct: 0 },
        { id: 'mm3', question: 'elephant =', options: ['słoń', 'nosorożec', 'hipopotam'], correct: 0 },
        { id: 'mm4', question: 'bear =', options: ['niedźwiedź', 'wilk', 'lis'], correct: 0 },
        { id: 'mm5', question: 'wolf =', options: ['wilk', 'lis', 'szakal'], correct: 0 },
        { id: 'mm6', question: 'fox =', options: ['lis', 'wilk', 'kojot'], correct: 0 },
        { id: 'mm7', question: 'deer =', options: ['jeleń', 'sarna', 'łoś'], correct: 0 },
        { id: 'mm8', question: 'monkey =', options: ['małpa', 'goryl', 'szympans'], correct: 0 },
        { id: 'mm9', question: 'dolphin =', options: ['delfin', 'wieloryb', 'rekin'], correct: 0 },
        { id: 'mm10', question: 'whale =', options: ['wieloryb', 'delfin', 'foka'], correct: 0 },
    ],

    'society-beginners': [
        { id: 'so1', question: 'government =', options: ['rząd', 'parlament', 'administracja'], correct: 0 },
        { id: 'so2', question: 'law =', options: ['prawo', 'ustawa', 'regulamin'], correct: 0 },
        { id: 'so3', question: 'citizen =', options: ['obywatel', 'mieszkaniec', 'podatnik'], correct: 0 },
        { id: 'so4', question: 'election =', options: ['wybory', 'głosowanie', 'referendum'], correct: 0 },
        { id: 'so5', question: 'president =', options: ['prezydent', 'premier', 'minister'], correct: 0 },
        { id: 'so6', question: 'minister =', options: ['minister', 'sekretarz', 'dyrektor'], correct: 0 },
        { id: 'so7', question: 'parliament =', options: ['parlament', 'kongres', 'zgromadzenie'], correct: 0 },
        { id: 'so8', question: 'democracy =', options: ['demokracja', 'republika', 'monarchia'], correct: 0 },
        { id: 'so9', question: 'freedom =', options: ['wolność', 'niezależność', 'suwerenność'], correct: 0 },
        { id: 'so10', question: 'justice =', options: ['sprawiedliwość', 'prawo', 'równość'], correct: 0 },
    ],

    'misfortunes-beginners': [
        { id: 'mf1', question: 'accident =', options: ['wypadek', 'katastrofa', 'incydent'], correct: 0 },
        { id: 'mf2', question: 'disaster =', options: ['katastrofa', 'tragedia', 'klęska'], correct: 0 },
        { id: 'mf3', question: 'injury =', options: ['uraz', 'kontuzja', 'rana'], correct: 0 },
        { id: 'mf4', question: 'emergency =', options: ['nagły wypadek', 'kryzys', 'sytuacja'], correct: 0 },
        { id: 'mf5', question: 'crisis =', options: ['kryzys', 'problem', 'trudność'], correct: 0 },
        { id: 'mf6', question: 'problem =', options: ['problem', 'kłopot', 'trudność'], correct: 0 },
        { id: 'mf7', question: 'difficulty =', options: ['trudność', 'problem', 'przeszkoda'], correct: 0 },
        { id: 'mf8', question: 'trouble =', options: ['kłopot', 'problem', 'trudność'], correct: 0 },
        { id: 'mf9', question: 'mistake =', options: ['błąd', 'pomyłka', 'uchybienie'], correct: 0 },
        { id: 'mf10', question: 'failure =', options: ['porażka', 'niepowodzenie', 'klęska'], correct: 0 },
    ],

    'offenses-beginners': [
        { id: 'of1', question: 'theft =', options: ['kradzież', 'rabunek', 'włamanie'], correct: 0 },
        { id: 'of2', question: 'fraud =', options: ['oszustwo', 'kradzież', 'przekręt'], correct: 0 },
        { id: 'of3', question: 'assault =', options: ['napaść', 'atak', 'agresja'], correct: 0 },
        { id: 'of4', question: 'vandalism =', options: ['wandalizm', 'niszczenie', 'dewastacja'], correct: 0 },
        { id: 'of5', question: 'burglary =', options: ['włamanie', 'kradzież', 'rabunek'], correct: 0 },
        { id: 'of6', question: 'murder =', options: ['morderstwo', 'zabójstwo', 'zamach'], correct: 0 },
        { id: 'of7', question: 'robbery =', options: ['rabunek', 'kradzież', 'napad'], correct: 0 },
        { id: 'of8', question: 'crime =', options: ['przestępstwo', 'wykroczenie', 'przewinienie'], correct: 0 },
        { id: 'of9', question: 'criminal =', options: ['przestępca', 'kryminalista', 'przestępca'], correct: 0 },
        { id: 'of10', question: 'police =', options: ['policja', 'straż', 'żandarmeria'], correct: 0 },
    ],

    'conflicts-beginners': [
        { id: 'co1', question: 'argument =', options: ['kłótnia', 'spór', 'dyskusja'], correct: 0 },
        { id: 'co2', question: 'disagreement =', options: ['nieporozumienie', 'sprzeczka', 'konflikt'], correct: 0 },
        { id: 'co3', question: 'conflict =', options: ['konflikt', 'spór', 'sprzeczka'], correct: 0 },
        { id: 'co4', question: 'problem =', options: ['problem', 'kłopot', 'trudność'], correct: 0 },
        { id: 'co5', question: 'issue =', options: ['kwestia', 'problem', 'sprawa'], correct: 0 },
        { id: 'co6', question: 'challenge =', options: ['wyzwanie', 'trudność', 'problem'], correct: 0 },
        { id: 'co7', question: 'solution =', options: ['rozwiązanie', 'odpowiedź', 'sposób'], correct: 0 },
        { id: 'co8', question: 'compromise =', options: ['kompromis', 'ugoda', 'porozumienie'], correct: 0 },
        { id: 'co9', question: 'negotiation =', options: ['negocjacje', 'rozmowy', 'dyskusje'], correct: 0 },
        { id: 'co10', question: 'agreement =', options: ['porozumienie', 'umowa', 'zgoda'], correct: 0 },
    ],
    'it-practice-15': [
        { id: 'itp1', question: 'database =', options: ['baza danych', 'plik', 'archiwum'], correct: 0 },
        { id: 'itp2', question: 'server =', options: ['serwer', 'komputer', 'host'], correct: 0 },
        { id: 'itp3', question: 'network =', options: ['sieć', 'połączenie', 'system'], correct: 0 },
        { id: 'itp4', question: 'application =', options: ['aplikacja', 'program', 'oprogramowanie'], correct: 0 },
        { id: 'itp5', question: 'programming =', options: ['programowanie', 'kodowanie', 'tworzenie'], correct: 0 },
        { id: 'itp6', question: 'algorithm =', options: ['algorytm', 'schemat', 'proces'], correct: 0 },
        { id: 'itp7', question: 'data =', options: ['dane', 'informacje', 'rekordy'], correct: 0 },
        { id: 'itp8', question: 'cloud =', options: ['chmura', 'serwer', 'internet'], correct: 0 },
        { id: 'itp9', question: 'security =', options: ['bezpieczeństwo', 'ochrona', 'zabezpieczenie'], correct: 0 },
        { id: 'itp10', question: 'update =', options: ['aktualizacja', 'zmiana', 'poprawka'], correct: 0 },
        { id: 'itp11', question: 'bug =', options: ['błąd', 'usterka', 'problem'], correct: 0 },
        { id: 'itp12', question: 'virus =', options: ['wirus', 'zagrożenie', 'atak'], correct: 0 },
        { id: 'itp13', question: 'backup =', options: ['kopia zapasowa', 'zapas', 'archiwum'], correct: 0 },
        { id: 'itp14', question: 'interface =', options: ['interfejs', 'panel', 'ekran'], correct: 0 },
        { id: 'itp15', question: 'bandwidth =', options: ['przepustowość', 'prędkość', 'pojemność'], correct: 0 },
    ],

    'it-advanced-12': [
        { id: 'ita1', question: 'encryption =', options: ['szyfrowanie', 'kodowanie', 'zabezpieczenie'], correct: 0 },
        { id: 'ita2', question: 'firewall =', options: ['zapora sieciowa', 'ochrona', 'blokada'], correct: 0 },
        { id: 'ita3', question: 'blockchain =', options: ['łańcuch bloków', 'baza danych', 'system'], correct: 0 },
        { id: 'ita4', question: 'machine learning =', options: ['uczenie maszynowe', 'sztuczna inteligencja', 'analiza danych'], correct: 0 },
        { id: 'ita5', question: 'cybersecurity =', options: ['cyberbezpieczeństwo', 'ochrona danych', 'bezpieczeństwo IT'], correct: 0 },
        { id: 'ita6', question: 'virtualization =', options: ['wirtualizacja', 'symulacja', 'emulacja'], correct: 0 },
        { id: 'ita7', question: 'API =', options: ['interfejs programowania aplikacji', 'protokół', 'standard'], correct: 0 },
        { id: 'ita8', question: 'devops =', options: ['rozwój i operacje', 'programowanie', 'administracja'], correct: 0 },
        { id: 'ita9', question: 'microservices =', options: ['mikrousługi', 'małe aplikacje', 'moduły'], correct: 0 },
        { id: 'ita10', question: 'containerization =', options: ['konteneryzacja', 'pakowanie', 'izolacja'], correct: 0 },
        { id: 'ita11', question: 'quantum computing =', options: ['komputery kwantowe', 'superkomputery', 'zaawansowane obliczenia'], correct: 0 },
        { id: 'ita12', question: 'IoT =', options: ['Internet rzeczy', 'sieć urządzeń', 'połączone systemy'], correct: 0 },
    ],

    'science-practice-15': [
        { id: 'scp1', question: 'physics =', options: ['fizyka', 'chemia', 'biologia'], correct: 0 },
        { id: 'scp2', question: 'chemistry =', options: ['chemia', 'fizyka', 'biologia'], correct: 0 },
        { id: 'scp3', question: 'biology =', options: ['biologia', 'ekologia', 'zoologia'], correct: 0 },
        { id: 'scp4', question: 'astronomy =', options: ['astronomia', 'astrofizyka', 'kosmologia'], correct: 0 },
        { id: 'scp5', question: 'geology =', options: ['geologia', 'geografia', 'mineralogia'], correct: 0 },
        { id: 'scp6', question: 'ecology =', options: ['ekologia', 'biologia', 'środowisko'], correct: 0 },
        { id: 'scp7', question: 'method =', options: ['metoda', 'sposób', 'technika'], correct: 0 },
        { id: 'scp8', question: 'observation =', options: ['obserwacja', 'badanie', 'monitorowanie'], correct: 0 },
        { id: 'scp9', question: 'environment =', options: ['środowisko', 'otoczenie', 'przyroda'], correct: 0 },
        { id: 'scp10', question: 'climate =', options: ['klimat', 'pogoda', 'atmosfera'], correct: 0 },
        { id: 'scp11', question: 'organism =', options: ['organizm', 'istota', 'twór'], correct: 0 },
        { id: 'scp12', question: 'cell =', options: ['komórka', 'tkanka', 'organ'], correct: 0 },
        { id: 'scp13', question: 'evolution =', options: ['ewolucja', 'rozwój', 'zmiana'], correct: 0 },
        { id: 'scp14', question: 'genetics =', options: ['genetyka', 'dziedziczenie', 'biologia'], correct: 0 },
        { id: 'scp15', question: 'microscope =', options: ['mikroskop', 'lupa', 'teleskop'], correct: 0 },
    ],

    'science-advanced-12': [
        { id: 'sca1', question: 'quantum mechanics =', options: ['mechanika kwantowa', 'fizyka kwantowa', 'teoria kwantów'], correct: 0 },
        { id: 'sca2', question: 'relativity =', options: ['względność', 'relatywizm', 'teoria względności'], correct: 0 },
        { id: 'sca3', question: 'nanotechnology =', options: ['nanotechnologia', 'mikrotechnologia', 'technologia molekularna'], correct: 0 },
        { id: 'sca4', question: 'biotechnology =', options: ['biotechnologia', 'inżynieria genetyczna', 'technologia biologiczna'], correct: 0 },
        { id: 'sca5', question: 'astrophysics =', options: ['astrofizyka', 'astronomia', 'kosmologia'], correct: 0 },
        { id: 'sca6', question: 'paleontology =', options: ['paleontologia', 'archeologia', 'geologia'], correct: 0 },
        { id: 'sca7', question: 'meteorology =', options: ['meteorologia', 'klimatologia', 'pogodoznawstwo'], correct: 0 },
        { id: 'sca8', question: 'seismology =', options: ['sejsmologia', 'geofizyka', 'badanie trzęsień'], correct: 0 },
        { id: 'sca9', question: 'virology =', options: ['wirusologia', 'bakteriologia', 'mikrobiologia'], correct: 0 },
        { id: 'sca10', question: 'immunology =', options: ['immunologia', 'medycyna', 'ochrona zdrowia'], correct: 0 },
        { id: 'sca11', question: 'neuroscience =', options: ['neuronauka', 'neurobiologia', 'badanie mózgu'], correct: 0 },
        { id: 'sca12', question: 'bioinformatics =', options: ['bioinformatyka', 'biologia obliczeniowa', 'analiza danych biologicznych'], correct: 0 },
    ],

    'math-practice-15': [
        { id: 'map1', question: 'calculus =', options: ['rachunek różniczkowy', 'algebra', 'geometria'], correct: 0 },
        { id: 'map2', question: 'statistics =', options: ['statystyka', 'analiza', 'badania'], correct: 0 },
        { id: 'map3', question: 'probability =', options: ['prawdopodobieństwo', 'szansa', 'możliwość'], correct: 0 },
        { id: 'map4', question: 'graph =', options: ['wykres', 'diagram', 'schemat'], correct: 0 },
        { id: 'map5', question: 'angle =', options: ['kąt', 'stopień', 'skos'], correct: 0 },
        { id: 'map6', question: 'area =', options: ['powierzchnia', 'obszar', 'teren'], correct: 0 },
        { id: 'map7', question: 'volume =', options: ['objętość', 'pojemność', 'wielkość'], correct: 0 },
        { id: 'map8', question: 'sum =', options: ['suma', 'całość', 'wynik'], correct: 0 },
        { id: 'map9', question: 'difference =', options: ['różnica', 'odmienność', 'zmiana'], correct: 0 },
        { id: 'map10', question: 'product =', options: ['iloczyn', 'wynik', 'rezultat'], correct: 0 },
        { id: 'map11', question: 'quotient =', options: ['iloraz', 'wynik', 'stosunek'], correct: 0 },
        { id: 'map12', question: 'decimal =', options: ['dziesiętny', 'ułamkowy', 'procentowy'], correct: 0 },
        { id: 'map13', question: 'integer =', options: ['liczba całkowita', 'całkowita', 'pełna'], correct: 0 },
        { id: 'map14', question: 'variable =', options: ['zmienna', 'wartość', 'parametr'], correct: 0 },
        { id: 'map15', question: 'function =', options: ['funkcja', 'zależność', 'relacja'], correct: 0 },
    ],

    'math-advanced-12': [
        { id: 'maa1', question: 'differential equations =', options: ['równania różniczkowe', 'równania matematyczne', 'równania zmiennych'], correct: 0 },
        { id: 'maa2', question: 'linear algebra =', options: ['algebra liniowa', 'algebra', 'matematyka liniowa'], correct: 0 },
        { id: 'maa3', question: 'topology =', options: ['topologia', 'geometria', 'analiza'], correct: 0 },
        { id: 'maa4', question: 'number theory =', options: ['teoria liczb', 'matematyka liczb', 'arytmetyka'], correct: 0 },
        { id: 'maa5', question: 'complex analysis =', options: ['analiza zespolona', 'matematyka zespolona', 'analiza matematyczna'], correct: 0 },
        { id: 'maa6', question: 'set theory =', options: ['teoria mnogości', 'teoria zbiorów', 'matematyka zbiorów'], correct: 0 },
        { id: 'maa7', question: 'combinatorics =', options: ['kombinatoryka', 'matematyka kombinatoryczna', 'rachunek kombinatoryczny'], correct: 0 },
        { id: 'maa8', question: 'optimization =', options: ['optymalizacja', 'maksymalizacja', 'ulepszanie'], correct: 0 },
        { id: 'maa9', question: 'game theory =', options: ['teoria gier', 'matematyka gier', 'strategia matematyczna'], correct: 0 },
        { id: 'maa10', question: 'fractal =', options: ['fraktal', 'kształt matematyczny', 'struktura'], correct: 0 },
        { id: 'maa11', question: 'tensor =', options: ['tensor', 'wielkość matematyczna', 'obiekt matematyczny'], correct: 0 },
        { id: 'maa12', question: 'manifold =', options: ['rozmaitość', 'przestrzeń matematyczna', 'struktura geometryczna'], correct: 0 },
    ],

    'chemistry-practice-15': [
        { id: 'chp1', question: 'periodic table =', options: ['układ okresowy', 'tablica pierwiastków', 'system pierwiastków'], correct: 0 },
        { id: 'chp2', question: 'molecule =', options: ['cząsteczka', 'atom', 'związek'], correct: 0 },
        { id: 'chp3', question: 'bond =', options: ['wiązanie', 'połączenie', 'relacja'], correct: 0 },
        { id: 'chp4', question: 'reaction =', options: ['reakcja', 'proces', 'zmiana'], correct: 0 },
        { id: 'chp5', question: 'formula =', options: ['wzór', 'formuła', 'zapis'], correct: 0 },
        { id: 'chp6', question: 'mass =', options: ['masa', 'ciężar', 'wielkość'], correct: 0 },
        { id: 'chp7', question: 'density =', options: ['gęstość', 'koncentracja', 'zagęszczenie'], correct: 0 },
        { id: 'chp8', question: 'temperature =', options: ['temperatura', 'ciepło', 'gorąco'], correct: 0 },
        { id: 'chp9', question: 'pressure =', options: ['ciśnienie', 'nacisk', 'siła'], correct: 0 },
        { id: 'chp10', question: 'gas =', options: ['gaz', 'para', 'powietrze'], correct: 0 },
        { id: 'chp11', question: 'liquid =', options: ['ciecz', 'płyn', 'woda'], correct: 0 },
        { id: 'chp12', question: 'solid =', options: ['ciało stałe', 'stałe', 'twarde'], correct: 0 },
        { id: 'chp13', question: 'mixture =', options: ['mieszanina', 'kombinacja', 'połączenie'], correct: 0 },
        { id: 'chp14', question: 'compound =', options: ['związek chemiczny', 'substancja', 'materiał'], correct: 0 },
        { id: 'chp15', question: 'element =', options: ['pierwiastek', 'składnik', 'element'], correct: 0 },
    ],

    'chemistry-advanced-12': [
        { id: 'cha1', question: 'stoichiometry =', options: ['stechiometria', 'rachunek chemiczny', 'obliczenia chemiczne'], correct: 0 },
        { id: 'cha2', question: 'thermodynamics =', options: ['termodynamika', 'fizyka ciepła', 'nauka o energii'], correct: 0 },
        { id: 'cha3', question: 'quantum chemistry =', options: ['chemia kwantowa', 'fizyka chemiczna', 'chemia teoretyczna'], correct: 0 },
        { id: 'cha4', question: 'electrochemistry =', options: ['elektrochemia', 'chemia elektryczna', 'reakcje elektryczne'], correct: 0 },
        { id: 'cha5', question: 'organic chemistry =', options: ['chemia organiczna', 'chemia węglowa', 'chemia związków organicznych'], correct: 0 },
        { id: 'cha6', question: 'inorganic chemistry =', options: ['chemia nieorganiczna', 'chemia mineralna', 'chemia związków nieorganicznych'], correct: 0 },
        { id: 'cha7', question: 'analytical chemistry =', options: ['chemia analityczna', 'analiza chemiczna', 'badania chemiczne'], correct: 0 },
        { id: 'cha8', question: 'physical chemistry =', options: ['chemia fizyczna', 'fizykochemia', 'chemia teoretyczna'], correct: 0 },
        { id: 'cha9', question: 'biochemistry =', options: ['biochemia', 'chemia biologiczna', 'chemia organizmów'], correct: 0 },
        { id: 'cha10', question: 'polymer chemistry =', options: ['chemia polimerów', 'chemia tworzyw', 'chemia materiałów'], correct: 0 },
        { id: 'cha11', question: 'catalysis =', options: ['kataliza', 'przyspieszanie reakcji', 'aktywacja chemiczna'], correct: 0 },
        { id: 'cha12', question: 'spectroscopy =', options: ['spektroskopia', 'analiza widmowa', 'badanie widm'], correct: 0 },
    ],

    'geography-practice-15': [
        { id: 'gep1', question: 'capital =', options: ['stolica', 'główne miasto', 'centrum'], correct: 0 },
        { id: 'gep2', question: 'border =', options: ['granica', 'kraniec', 'brzeg'], correct: 0 },
        { id: 'gep3', question: 'coast =', options: ['wybrzeże', 'brzeg', 'plaża'], correct: 0 },
        { id: 'gep4', question: 'valley =', options: ['dolina', 'kotlina', 'obniżenie'], correct: 0 },
        { id: 'gep5', question: 'plateau =', options: ['płaskowyż', 'równina', 'wyżyna'], correct: 0 },
        { id: 'gep6', question: 'peninsula =', options: ['półwysep', 'cypel', 'przylądek'], correct: 0 },
        { id: 'gep7', question: 'archipelago =', options: ['archipelag', 'grupa wysp', 'wyspy'], correct: 0 },
        { id: 'gep8', question: 'globe =', options: ['glob', 'kula ziemska', 'ziemia'], correct: 0 },
        { id: 'gep9', question: 'map =', options: ['mapa', 'plan', 'schemat'], correct: 0 },
        { id: 'gep10', question: 'population =', options: ['populacja', 'ludność', 'mieszkańcy'], correct: 0 },
        { id: 'gep11', question: 'climate =', options: ['klimat', 'pogoda', 'atmosfera'], correct: 0 },
        { id: 'gep12', question: 'environment =', options: ['środowisko', 'przyroda', 'otoczenie'], correct: 0 },
        { id: 'gep13', question: 'resource =', options: ['zasób', 'bogactwo', 'surowiec'], correct: 0 },
        { id: 'gep14', question: 'agriculture =', options: ['rolnictwo', 'uprawa', 'hodowla'], correct: 0 },
        { id: 'gep15', question: 'industry =', options: ['przemysł', 'fabryka', 'produkcja'], correct: 0 },
    ],

    'geography-advanced-12': [
        { id: 'gea1', question: 'geopolitics =', options: ['geopolityka', 'polityka międzynarodowa', 'stosunki międzynarodowe'], correct: 0 },
        { id: 'gea2', question: 'demography =', options: ['demografia', 'badanie populacji', 'statystyka ludności'], correct: 0 },
        { id: 'gea3', question: 'cartography =', options: ['kartografia', 'tworzenie map', 'mapowanie'], correct: 0 },
        { id: 'gea4', question: 'topography =', options: ['topografia', 'ukształtowanie terenu', 'rzeźba terenu'], correct: 0 },
        { id: 'gea5', question: 'meteorology =', options: ['meteorologia', 'nauka o pogodzie', 'badanie atmosfery'], correct: 0 },
        { id: 'gea6', question: 'oceanography =', options: ['oceanografia', 'badanie oceanów', 'nauka o morzach'], correct: 0 },
        { id: 'gea7', question: 'seismology =', options: ['sejsmologia', 'badanie trzęsień ziemi', 'geofizyka'], correct: 0 },
        { id: 'gea8', question: 'volcanology =', options: ['wulkanologia', 'badanie wulkanów', 'nauka o wulkanach'], correct: 0 },
        { id: 'gea9', question: 'biogeography =', options: ['biogeografia', 'geografia biologiczna', 'rozmieszczenie organizmów'], correct: 0 },
        { id: 'gea10', question: 'urban geography =', options: ['geografia miejska', 'badanie miast', 'urbanistyka'], correct: 0 },
        { id: 'gea11', question: 'economic geography =', options: ['geografia ekonomiczna', 'geografia gospodarcza', 'rozmieszczenie gospodarki'], correct: 0 },
        { id: 'gea12', question: 'cultural geography =', options: ['geografia kulturowa', 'kulturoznawstwo geograficzne', 'badanie kultur'], correct: 0 },
    ],

    'weather-practice-15': [
        { id: 'wep1', question: 'forecast =', options: ['prognoza', 'przewidywanie', 'zapowiedź'], correct: 0 },
        { id: 'wep2', question: 'temperature =', options: ['temperatura', 'ciepłota', 'gorąco'], correct: 0 },
        { id: 'wep3', question: 'humidity =', options: ['wilgotność', 'mokro', 'para'], correct: 0 },
        { id: 'wep4', question: 'pressure =', options: ['ciśnienie', 'nacisk', 'siła'], correct: 0 },
        { id: 'wep5', question: 'wind =', options: ['wiatr', 'powiew', 'podmuch'], correct: 0 },
        { id: 'wep6', question: 'rain =', options: ['deszcz', 'opady', 'ulewa'], correct: 0 },
        { id: 'wep7', question: 'snow =', options: ['śnieg', 'opady śniegu', 'biały puch'], correct: 0 },
        { id: 'wep8', question: 'fog =', options: ['mgła', 'zamglenie', 'opary'], correct: 0 },
        { id: 'wep9', question: 'storm =', options: ['burza', 'wichura', 'nawałnica'], correct: 0 },
        { id: 'wep10', question: 'lightning =', options: ['błyskawica', 'piorun', 'wyładowanie'], correct: 0 },
        { id: 'wep11', question: 'thunder =', options: ['grzmot', 'huk', 'odgłos'], correct: 0 },
        { id: 'wep12', question: 'drought =', options: ['susza', 'brak deszczu', 'posucha'], correct: 0 },
        { id: 'wep13', question: 'flood =', options: ['powódź', 'zalanie', 'wylew'], correct: 0 },
        { id: 'wep14', question: 'hurricane =', options: ['huragan', 'tajfun', 'cyklon'], correct: 0 },
        { id: 'wep15', question: 'tornado =', options: ['tornado', 'trąba powietrzna', 'wichura'], correct: 0 },
    ],

    'weather-advanced-12': [
        { id: 'wea1', question: 'meteorology =', options: ['meteorologia', 'nauka o pogodzie', 'badanie atmosfery'], correct: 0 },
        { id: 'wea2', question: 'climatology =', options: ['klimatologia', 'nauka o klimacie', 'badanie klimatu'], correct: 0 },
        { id: 'wea3', question: 'atmospheric pressure =', options: ['ciśnienie atmosferyczne', 'nacisk powietrza', 'ciśnienie powietrza'], correct: 0 },
        { id: 'wea4', question: 'precipitation =', options: ['opady', 'deszcz', 'opady atmosferyczne'], correct: 0 },
        { id: 'wea5', question: 'evaporation =', options: ['parowanie', 'odparowywanie', 'wyparowywanie'], correct: 0 },
        { id: 'wea6', question: 'condensation =', options: ['kondensacja', 'skraplanie', 'zagęszczenie'], correct: 0 },
        { id: 'wea7', question: 'front =', options: ['front atmosferyczny', 'granica powietrza', 'strefa przejściowa'], correct: 0 },
        { id: 'wea8', question: 'isobar =', options: ['izobara', 'linia ciśnienia', 'krzywa ciśnienia'], correct: 0 },
        { id: 'wea9', question: 'cyclone =', options: ['cyklon', 'wir atmosferyczny', 'burza'], correct: 0 },
        { id: 'wea10', question: 'anticyclone =', options: ['antycyklon', 'wyż', 'wysokie ciśnienie'], correct: 0 },
        { id: 'wea11', question: 'monsoon =', options: ['monsun', 'pora deszczowa', 'wiatry sezonowe'], correct: 0 },
        { id: 'wea12', question: 'el niño =', options: ['el niño', 'oscylacja południowa', 'zjawisko klimatyczne'], correct: 0 },
    ],

    'plants-practice-15': [
        { id: 'plp1', question: 'photosynthesis =', options: ['fotosynteza', 'odżywianie roślin', 'proces roślinny'], correct: 0 },
        { id: 'plp2', question: 'chlorophyll =', options: ['chlorofil', 'zielony barwnik', 'pigment roślinny'], correct: 0 },
        { id: 'plp3', question: 'bark =', options: ['kora', 'skóra drzewa', 'powłoka'], correct: 0 },
        { id: 'plp4', question: 'branch =', options: ['gałąź', 'konar', 'odnoga'], correct: 0 },
        { id: 'plp5', question: 'root =', options: ['korzeń', 'podstawa', 'źródło'], correct: 0 },
        { id: 'plp6', question: 'stem =', options: ['łodyga', 'trzon', 'pęd'], correct: 0 },
        { id: 'plp7', question: 'leaf =', options: ['liść', 'listek', 'blaszka'], correct: 0 },
        { id: 'plp8', question: 'flower =', options: ['kwiat', 'kwiatek', 'rozkwit'], correct: 0 },
        { id: 'plp9', question: 'fruit =', options: ['owoc', 'plon', 'produkt'], correct: 0 },
        { id: 'plp10', question: 'seed =', options: ['nasiono', 'ziarno', 'zarodek'], correct: 0 },
        { id: 'plp11', question: 'soil =', options: ['gleba', 'ziemia', 'grunt'], correct: 0 },
        { id: 'plp12', question: 'fertilizer =', options: ['nawóz', 'odżywka', 'substancja odżywcza'], correct: 0 },
        { id: 'plp13', question: 'water =', options: ['woda', 'płyn', 'wilgoć'], correct: 0 },
        { id: 'plp14', question: 'sunlight =', options: ['światło słoneczne', 'słońce', 'promieniowanie'], correct: 0 },
        { id: 'plp15', question: 'oxygen =', options: ['tlen', 'powietrze', 'gaz'], correct: 0 },
    ],

    'plants-advanced-12': [
        { id: 'pla1', question: 'botany =', options: ['botanika', 'nauka o roślinach', 'biologia roślin'], correct: 0 },
        { id: 'pla2', question: 'taxonomy =', options: ['taksonomia', 'klasyfikacja', 'systematyka'], correct: 0 },
        { id: 'pla3', question: 'photosynthesis =', options: ['fotosynteza', 'proces roślinny', 'odżywianie'], correct: 0 },
        { id: 'pla4', question: 'respiration =', options: ['oddychanie', 'respiracja', 'wymiana gazowa'], correct: 0 },
        { id: 'pla5', question: 'transpiration =', options: ['transpiracja', 'parowanie', 'wydalanie wody'], correct: 0 },
        { id: 'pla6', question: 'pollination =', options: ['zapylanie', 'przenoszenie pyłku', 'rozmnażanie'], correct: 0 },
        { id: 'pla7', question: 'germination =', options: ['kiełkowanie', 'wzrost', 'rozpoczynanie wzrostu'], correct: 0 },
        { id: 'pla8', question: 'hybrid =', options: ['hybryda', 'mieszaniec', 'krzyżówka'], correct: 0 },
        { id: 'pla9', question: 'genetics =', options: ['genetyka', 'dziedziczenie', 'badanie genów'], correct: 0 },
        { id: 'pla10', question: 'ecology =', options: ['ekologia', 'nauka o środowisku', 'badanie ekosystemów'], correct: 0 },
        { id: 'pla11', question: 'biodiversity =', options: ['bioróżnorodność', 'różnorodność biologiczna', 'różnorodność życia'], correct: 0 },
        { id: 'pla12', question: 'conservation =', options: ['ochrona', 'zachowanie', 'konserwacja'], correct: 0 },
    ],

    'animals-practice-15': [
        { id: 'anp1', question: 'mammal =', options: ['ssak', 'zwierzę', 'istota'], correct: 0 },
        { id: 'anp2', question: 'bird =', options: ['ptak', 'skrzydlate', 'latające'], correct: 0 },
        { id: 'anp3', question: 'reptile =', options: ['gad', 'jaszczurka', 'wąż'], correct: 0 },
        { id: 'anp4', question: 'amphibian =', options: ['płaz', 'żaba', 'salamandra'], correct: 0 },
        { id: 'anp5', question: 'fish =', options: ['ryba', 'wodne', 'pływające'], correct: 0 },
        { id: 'anp6', question: 'insect =', options: ['owad', 'robak', 'insekt'], correct: 0 },
        { id: 'anp7', question: 'habitat =', options: ['siedlisko', 'środowisko', 'miejsce'], correct: 0 },
        { id: 'anp8', question: 'predator =', options: ['drapieżnik', 'łowca', 'myśliwy'], correct: 0 },
        { id: 'anp9', question: 'prey =', options: ['ofiara', 'zdobycz', 'pokarm'], correct: 0 },
        { id: 'anp10', question: 'migration =', options: ['migracja', 'wędrówka', 'przemieszczanie'], correct: 0 },
        { id: 'anp11', question: 'hibernation =', options: ['hibernacja', 'sen zimowy', 'odpoczynek'], correct: 0 },
        { id: 'anp12', question: 'extinction =', options: ['wymieranie', 'zniknięcie', 'zagłada'], correct: 0 },
        { id: 'anp13', question: 'endangered =', options: ['zagrożony', 'wymierający', 'rzadki'], correct: 0 },
        { id: 'anp14', question: 'species =', options: ['gatunek', 'rodzaj', 'typ'], correct: 0 },
        { id: 'anp15', question: 'evolution =', options: ['ewolucja', 'rozwój', 'zmiana'], correct: 0 },
    ],

    'animals-advanced-12': [
        { id: 'ana1', question: 'zoology =', options: ['zoologia', 'nauka o zwierzętach', 'badanie zwierząt'], correct: 0 },
        { id: 'ana2', question: 'entomology =', options: ['entomologia', 'nauka o owadach', 'badanie insektów'], correct: 0 },
        { id: 'ana3', question: 'ornithology =', options: ['ornitologia', 'nauka o ptakach', 'badanie ptaków'], correct: 0 },
        { id: 'ana4', question: 'ichthyology =', options: ['ichtiologia', 'nauka o rybach', 'badanie ryb'], correct: 0 },
        { id: 'ana5', question: 'herpetology =', options: ['herpetologia', 'nauka o gadach i płazach', 'badanie gadów'], correct: 0 },
        { id: 'ana6', question: 'mammalogy =', options: ['mammalogia', 'nauka o ssakach', 'badanie ssaków'], correct: 0 },
        { id: 'ana7', question: 'ethology =', options: ['etologia', 'nauka o zachowaniu', 'badanie zachowań'], correct: 0 },
        { id: 'ana8', question: 'ecology =', options: ['ekologia', 'nauka o środowisku', 'badanie ekosystemów'], correct: 0 },
        { id: 'ana9', question: 'taxonomy =', options: ['taksonomia', 'klasyfikacja', 'systematyka'], correct: 0 },
        { id: 'ana10', question: 'biodiversity =', options: ['bioróżnorodność', 'różnorodność biologiczna', 'różnorodność życia'], correct: 0 },
        { id: 'ana11', question: 'conservation =', options: ['ochrona', 'zachowanie', 'konserwacja'], correct: 0 },
        { id: 'ana12', question: 'paleontology =', options: ['paleontologia', 'nauka o skamieniałościach', 'badanie prehistorycznych organizmów'], correct: 0 },
    ],

    'mammals-practice-15': [
        { id: 'mmp1', question: 'primate =', options: ['prymat', 'małpa', 'naczelny'], correct: 0 },
        { id: 'mmp2', question: 'carnivore =', options: ['mięsożerca', 'drapieżnik', 'łowca'], correct: 0 },
        { id: 'mmp3', question: 'herbivore =', options: ['roślinożerca', 'wegetarianin', 'jedzący rośliny'], correct: 0 },
        { id: 'mmp4', question: 'omnivore =', options: ['wszystkożerca', 'jedzący wszystko', 'mieszany'], correct: 0 },
        { id: 'mmp5', question: 'marsupial =', options: ['torbacz', 'ssak workowy', 'kangur'], correct: 0 },
        { id: 'mmp6', question: 'placental =', options: ['łożyskowy', 'ssak łożyskowy', 'wyższy ssak'], correct: 0 },
        { id: 'mmp7', question: 'mammary gland =', options: ['gruczoł mlekowy', 'piersiowy', 'produkujący mleko'], correct: 0 },
        { id: 'mmp8', question: 'gestation =', options: ['ciąża', 'okres ciąży', 'rozwój płodowy'], correct: 0 },
        { id: 'mmp9', question: 'lactation =', options: ['laktacja', 'produkcja mleka', 'karmienie'], correct: 0 },
        { id: 'mmp10', question: 'hibernation =', options: ['hibernacja', 'sen zimowy', 'odpoczynek'], correct: 0 },
        { id: 'mmp11', question: 'migration =', options: ['migracja', 'wędrówka', 'przemieszczanie'], correct: 0 },
        { id: 'mmp12', question: 'territory =', options: ['terytorium', 'obszar', 'strefa'], correct: 0 },
        { id: 'mmp13', question: 'pack =', options: ['stado', 'grupa', 'zgraja'], correct: 0 },
        { id: 'mmp14', question: 'solitary =', options: ['samotny', 'pojedynczy', 'osobny'], correct: 0 },
        { id: 'mmp15', question: 'nocturnal =', options: ['nocny', 'aktywny w nocy', 'zmierzchowy'], correct: 0 },
    ],

    'mammals-advanced-12': [
        { id: 'mma1', question: 'theriology =', options: ['teriologia', 'nauka o ssakach', 'mammalogia'], correct: 0 },
        { id: 'mma2', question: 'primatology =', options: ['prymatologia', 'nauka o małpach', 'badanie naczelnych'], correct: 0 },
        { id: 'mma3', question: 'cetology =', options: ['cetologia', 'nauka o waleniach', 'badanie wielorybów'], correct: 0 },
        { id: 'mma4', question: 'chiropterology =', options: ['chiropterologia', 'nauka o nietoperzach', 'badanie nietoperzy'], correct: 0 },
        { id: 'mma5', question: 'evolution =', options: ['ewolucja', 'rozwój', 'zmiana'], correct: 0 },
        { id: 'mma6', question: 'speciation =', options: ['specjacja', 'powstawanie gatunków', 'różnicowanie'], correct: 0 },
        { id: 'mma7', question: 'adaptation =', options: ['adaptacja', 'przystosowanie', 'dostosowanie'], correct: 0 },
        { id: 'mma8', question: 'biodiversity =', options: ['bioróżnorodność', 'różnorodność biologiczna', 'różnorodność życia'], correct: 0 },
        { id: 'mma9', question: 'conservation =', options: ['ochrona', 'zachowanie', 'konserwacja'], correct: 0 },
        { id: 'mma10', question: 'endangered =', options: ['zagrożony', 'wymierający', 'rzadki'], correct: 0 },
        { id: 'mma11', question: 'extinct =', options: ['wymarły', 'zniknięty', 'nieistniejący'], correct: 0 },
        { id: 'mma12', question: 'paleontology =', options: ['paleontologia', 'nauka o skamieniałościach', 'badanie prehistorycznych organizmów'], correct: 0 },
    ],

    'society-practice-15': [
        { id: 'sop1', question: 'constitution =', options: ['konstytucja', 'ustawa zasadnicza', 'podstawa prawna'], correct: 0 },
        { id: 'sop2', question: 'policy =', options: ['polityka', 'strategia', 'działanie'], correct: 0 },
        { id: 'sop3', question: 'society =', options: ['społeczeństwo', 'społeczność', 'ludzie'], correct: 0 },
        { id: 'sop4', question: 'community =', options: ['społeczność', 'wspólnota', 'grupa'], correct: 0 },
        { id: 'sop5', question: 'culture =', options: ['kultura', 'cywilizacja', 'tradycja'], correct: 0 },
        { id: 'sop6', question: 'tradition =', options: ['tradycja', 'zwyczaj', 'obyczaj'], correct: 0 },
        { id: 'sop7', question: 'education =', options: ['edukacja', 'kształcenie', 'nauka'], correct: 0 },
        { id: 'sop8', question: 'healthcare =', options: ['opieka zdrowotna', 'służba zdrowia', 'medycyna'], correct: 0 },
        { id: 'sop9', question: 'infrastructure =', options: ['infrastruktura', 'zaplecze', 'baza'], correct: 0 },
        { id: 'sop10', question: 'economy =', options: ['gospodarka', 'ekonomia', 'system ekonomiczny'], correct: 0 },
        { id: 'sop11', question: 'development =', options: ['rozwój', 'postęp', 'wzrost'], correct: 0 },
        { id: 'sop12', question: 'welfare =', options: ['dobrobyt', 'opieka społeczna', 'zabezpieczenie'], correct: 0 },
        { id: 'sop13', question: 'equality =', options: ['równość', 'sprawiedliwość', 'równouprawnienie'], correct: 0 },
        { id: 'sop14', question: 'freedom =', options: ['wolność', 'niezależność', 'swoboda'], correct: 0 },
        { id: 'sop15', question: 'justice =', options: ['sprawiedliwość', 'prawo', 'słuszność'], correct: 0 },
    ],

    'society-advanced-12': [
        { id: 'soa1', question: 'political science =', options: ['nauki polityczne', 'politologia', 'badanie polityki'], correct: 0 },
        { id: 'soa2', question: 'sociology =', options: ['socjologia', 'nauka o społeczeństwie', 'badanie społeczne'], correct: 0 },
        { id: 'soa3', question: 'anthropology =', options: ['antropologia', 'nauka o człowieku', 'badanie ludzkości'], correct: 0 },
        { id: 'soa4', question: 'economics =', options: ['ekonomia', 'nauka ekonomiczna', 'gospodarka'], correct: 0 },
        { id: 'soa5', question: 'jurisprudence =', options: ['jurysprudencja', 'nauka o prawie', 'teoria prawa'], correct: 0 },
        { id: 'soa6', question: 'governance =', options: ['rządzenie', 'zarządzanie', 'administracja'], correct: 0 },
        { id: 'soa7', question: 'bureaucracy =', options: ['biurokracja', 'administracja', 'urzędnicy'], correct: 0 },
        { id: 'soa8', question: 'federalism =', options: ['federalizm', 'system federalny', 'związek państw'], correct: 0 },
        { id: 'soa9', question: 'sovereignty =', options: ['suwerenność', 'niezależność', 'samodzielność'], correct: 0 },
        { id: 'soa10', question: 'globalization =', options: ['globalizacja', 'unarodowienie', 'integracja światowa'], correct: 0 },
        { id: 'soa11', question: 'multiculturalism =', options: ['wielokulturowość', 'różnorodność kulturowa', 'multikulturalizm'], correct: 0 },
        { id: 'soa12', question: 'sustainability =', options: ['zrównoważony rozwój', 'trwałość', 'ekorozwój'], correct: 0 },
    ],

    'misfortunes-practice-15': [
        { id: 'mfp1', question: 'catastrophe =', options: ['katastrofa', 'tragedia', 'klęska'], correct: 0 },
        { id: 'mfp2', question: 'calamity =', options: ['nieszczęście', 'kataklizm', 'tragedia'], correct: 0 },
        { id: 'mfp3', question: 'mishap =', options: ['niefortunny wypadek', 'wpadka', 'potknięcie'], correct: 0 },
        { id: 'mfp4', question: 'setback =', options: ['niepowodzenie', 'oporóźnienie', 'trudność'], correct: 0 },
        { id: 'mfp5', question: 'hardship =', options: ['trudność', 'ciężka sytuacja', 'niedogodność'], correct: 0 },
        { id: 'mfp6', question: 'adversity =', options: ['przeciwność', 'trudna sytuacja', 'problem'], correct: 0 },
        { id: 'mfp7', question: 'misfortune =', options: ['nieszczęście', 'pech', 'zły los'], correct: 0 },
        { id: 'mfp8', question: 'tragedy =', options: ['tragedia', 'nieszczęście', 'katastrofa'], correct: 0 },
        { id: 'mfp9', question: 'casualty =', options: ['ofiara', 'poszkodowany', 'ranny'], correct: 0 },
        { id: 'mfp10', question: 'victim =', options: ['ofiara', 'poszkodowany', 'pokrzywdzony'], correct: 0 },
        { id: 'mfp11', question: 'damage =', options: ['szkoda', 'uszkodzenie', 'zniszczenie'], correct: 0 },
        { id: 'mfp12', question: 'loss =', options: ['strata', 'utrata', 'ubytek'], correct: 0 },
        { id: 'mfp13', question: 'risk =', options: ['ryzyko', 'niebezpieczeństwo', 'zagrożenie'], correct: 0 },
        { id: 'mfp14', question: 'danger =', options: ['niebezpieczeństwo', 'zagrożenie', 'ryzyko'], correct: 0 },
        { id: 'mfp15', question: 'hazard =', options: ['zagrożenie', 'niebezpieczeństwo', 'ryzyko'], correct: 0 },
    ],

    'misfortunes-advanced-12': [
        { id: 'mfa1', question: 'cataclysm =', options: ['kataklizm', 'przewrót', 'wstrząs'], correct: 0 },
        { id: 'mfa2', question: 'debacle =', options: ['klęska', 'porażka', 'katastrofa'], correct: 0 },
        { id: 'mfa3', question: 'fiasco =', options: ['fiasko', 'niepowodzenie', 'porażka'], correct: 0 },
        { id: 'mfa4', question: 'calamity =', options: ['nieszczęście', 'kataklizm', 'tragedia'], correct: 0 },
        { id: 'mfa5', question: 'tribulation =', options: ['utrapienie', 'ciężka próba', 'trudność'], correct: 0 },
        { id: 'mfa6', question: 'affliction =', options: ['utrapienie', 'cierpienie', 'niedola'], correct: 0 },
        { id: 'mfa7', question: 'ordeal =', options: ['ciężka próba', 'trudne doświadczenie', 'męka'], correct: 0 },
        { id: 'mfa8', question: 'plight =', options: ['trudna sytuacja', 'położenie', 'stan'], correct: 0 },
        { id: 'mfa9', question: 'predicament =', options: ['trudne położenie', 'kłopotliwa sytuacja', 'problem'], correct: 0 },
        { id: 'mfa10', question: 'quandary =', options: ['dylemat', 'rozterka', 'trudny wybór'], correct: 0 },
        { id: 'mfa11', question: 'dilemma =', options: ['dylemat', 'trudny wybór', 'rozterka'], correct: 0 },
        { id: 'mfa12', question: 'peril =', options: ['niebezpieczeństwo', 'zagrożenie', 'ryzyko'], correct: 0 },
    ],

    'offenses-practice-15': [
        { id: 'ofp1', question: 'crime =', options: ['przestępstwo', 'wykroczenie', 'przewinienie'], correct: 0 },
        { id: 'ofp2', question: 'offense =', options: ['wykroczenie', 'przestępstwo', 'przewinienie'], correct: 0 },
        { id: 'ofp3', question: 'violation =', options: ['naruszenie', 'złamanie', 'przekroczenie'], correct: 0 },
        { id: 'ofp4', question: 'illegal =', options: ['nielegalny', 'zakazany', 'bezprawny'], correct: 0 },
        { id: 'ofp5', question: 'criminal =', options: ['przestępczy', 'kryminalny', 'bezprawny'], correct: 0 },
        { id: 'ofp6', question: 'suspect =', options: ['podejrzany', 'oskarżony', 'obwiniony'], correct: 0 },
        { id: 'ofp7', question: 'evidence =', options: ['dowód', 'świadectwo', 'potwierdzenie'], correct: 0 },
        { id: 'ofp8', question: 'witness =', options: ['świadek', 'naoczny świadek', 'obserwator'], correct: 0 },
        { id: 'ofp9', question: 'arrest =', options: ['aresztowanie', 'zatrzymanie', 'pozbawienie wolności'], correct: 0 },
        { id: 'ofp10', question: 'trial =', options: ['proces', 'rozprawa', 'sąd'], correct: 0 },
        { id: 'ofp11', question: 'judge =', options: ['sędzia', 'rozjemca', 'arbiter'], correct: 0 },
        { id: 'ofp12', question: 'lawyer =', options: ['prawnik', 'adwokat', 'obrońca'], correct: 0 },
        { id: 'ofp13', question: 'verdict =', options: ['werdykt', 'wyrok', 'orzeczenie'], correct: 0 },
        { id: 'ofp14', question: 'sentence =', options: ['wyrok', 'kara', 'orzeczenie'], correct: 0 },
        { id: 'ofp15', question: 'punishment =', options: ['kara', 'wymiar sprawiedliwości', 'sankcja'], correct: 0 },
    ],

    'offenses-advanced-12': [
        { id: 'ofa1', question: 'criminology =', options: ['kryminologia', 'nauka o przestępczości', 'badanie przestępstw'], correct: 0 },
        { id: 'ofa2', question: 'forensics =', options: ['kryminalistyka', 'nauka śledcza', 'badanie dowodów'], correct: 0 },
        { id: 'ofa3', question: 'jurisprudence =', options: ['jurysprudencja', 'nauka o prawie', 'teoria prawa'], correct: 0 },
        { id: 'ofa4', question: 'litigation =', options: ['proces sądowy', 'spór prawny', 'rozprawa'], correct: 0 },
        { id: 'ofa5', question: 'prosecution =', options: ['oskarżenie', 'prokuratura', 'ściganie'], correct: 0 },
        { id: 'ofa6', question: 'defense =', options: ['obrona', 'bronienie', 'zabezpieczenie'], correct: 0 },
        { id: 'ofa7', question: 'testimony =', options: ['zeznanie', 'świadectwo', 'oświadczenie'], correct: 0 },
        { id: 'ofa8', question: 'alibi =', options: ['alibi', 'usprawiedliwienie', 'wytłumaczenie'], correct: 0 },
        { id: 'ofa9', question: 'misdemeanor =', options: ['wykroczenie', 'przewinienie', 'niewielkie przestępstwo'], correct: 0 },
        { id: 'ofa10', question: 'felony =', options: ['zbrodnia', 'poważne przestępstwo', 'przestępstwo'], correct: 0 },
        { id: 'ofa11', question: 'recidivism =', options: ['recydywa', 'powrót do przestępstwa', 'nawrót'], correct: 0 },
        { id: 'ofa12', question: 'rehabilitation =', options: ['resocjalizacja', 'odwyk', 'przywracanie do społeczeństwa'], correct: 0 },
    ],

    'conflicts-practice-15': [
        { id: 'cop1', question: 'dispute =', options: ['spór', 'konflikt', 'nieporozumienie'], correct: 0 },
        { id: 'cop2', question: 'quarrel =', options: ['sprzeczka', 'kłótnia', 'spór'], correct: 0 },
        { id: 'cop3', question: 'disagreement =', options: ['niezgoda', 'różnica zdań', 'sprzeczność'], correct: 0 },
        { id: 'cop4', question: 'tension =', options: ['napięcie', 'stres', 'niepokój'], correct: 0 },
        { id: 'cop5', question: 'hostility =', options: ['wrogość', 'nieprzyjaźń', 'antagonizm'], correct: 0 },
        { id: 'cop6', question: 'rivalry =', options: ['rywalizacja', 'współzawodnictwo', 'konkurencja'], correct: 0 },
        { id: 'cop7', question: 'competition =', options: ['konkurencja', 'współzawodnictwo', 'rywalizacja'], correct: 0 },
        { id: 'cop8', question: 'struggle =', options: ['walka', 'bój', 'wysiłek'], correct: 0 },
        { id: 'cop9', question: 'battle =', options: ['bitwa', 'walka', 'starcie'], correct: 0 },
        { id: 'cop10', question: 'fight =', options: ['walka', 'bójka', 'starcie'], correct: 0 },
        { id: 'cop11', question: 'resolution =', options: ['rozwiązanie', 'uchwała', 'postanowienie'], correct: 0 },
        { id: 'cop12', question: 'settlement =', options: ['porozumienie', 'ugoda', 'rozstrzygnięcie'], correct: 0 },
        { id: 'cop13', question: 'agreement =', options: ['porozumienie', 'zgoda', 'umowa'], correct: 0 },
        { id: 'cop14', question: 'compromise =', options: ['kompromis', 'ugoda', 'porozumienie'], correct: 0 },
        { id: 'cop15', question: 'reconciliation =', options: ['pojednanie', 'zgoda', 'przebaczenie'], correct: 0 },
    ],

    'conflicts-advanced-12': [
        { id: 'coa1', question: 'conflict resolution =', options: ['rozwiązywanie konfliktów', 'mediacja', 'pokojowe rozstrzyganie'], correct: 0 },
        { id: 'coa2', question: 'mediation =', options: ['mediacja', 'pośrednictwo', 'rozjemstwo'], correct: 0 },
        { id: 'coa3', question: 'arbitration =', options: ['arbitraż', 'rozjemstwo', 'sąd polubowny'], correct: 0 },
        { id: 'coa4', question: 'negotiation =', options: ['negocjacje', 'rozmowy', 'dyskusje'], correct: 0 },
        { id: 'coa5', question: 'diplomacy =', options: ['dyplomacja', 'sztuka rozmów', 'polityka zagraniczna'], correct: 0 },
        { id: 'coa6', question: 'reconciliation =', options: ['pojednanie', 'zgoda', 'przebaczenie'], correct: 0 },
        { id: 'coa7', question: 'détente =', options: ['odprężenie', 'poluzowanie', 'zmniejszenie napięcia'], correct: 0 },
        { id: 'coa8', question: 'impasse =', options: ['impas', 'martwy punkt', 'zastój'], correct: 0 },
        { id: 'coa9', question: 'stalemate =', options: ['pat', 'impas', 'zastój'], correct: 0 },
        { id: 'coa10', question: 'deadlock =', options: ['impas', 'martwy punkt', 'zastój'], correct: 0 },
        { id: 'coa11', question: 'escalation =', options: ['eskalacja', 'zaostrzenie', 'wzrost'], correct: 0 },
        { id: 'coa12', question: 'de-escalation =', options: ['deeskalacja', 'zmniejszenie napięcia', 'uspokojenie'], correct: 0 },
    ],
    // Sekcja appearance - praktyka i zaawansowane
    'appearance-practice-15': [
        { id: 'app1', question: 'height =', options: ['wzrost', 'waga', 'budowa'], correct: 0 },
        { id: 'app2', question: 'weight =', options: ['waga', 'wzrost', 'rozmiar'], correct: 0 },
        { id: 'app3', question: 'build =', options: ['budowa ciała', 'wygląd', 'postura'], correct: 0 },
        { id: 'app4', question: 'complexion =', options: ['cera', 'twarz', 'skóra'], correct: 0 },
        { id: 'app5', question: 'figure =', options: ['sylwetka', 'figura', 'kształt'], correct: 0 },
        { id: 'app6', question: 'muscular =', options: ['umięśniony', 'silny', 'wysportowany'], correct: 0 },
        { id: 'app7', question: 'slender =', options: ['smukły', 'szczupły', 'wysmukły'], correct: 0 },
        { id: 'app8', question: 'plump =', options: ['pulchny', 'okrągły', 'pyzaty'], correct: 0 },
        { id: 'app9', question: 'balding =', options: ['łysiejący', 'łysy', 'przerzedzony'], correct: 0 },
        { id: 'app10', question: 'tanned =', options: ['opalony', 'brązowy', 'ciemny'], correct: 0 },
        { id: 'app11', question: 'pale =', options: ['blady', 'jasny', 'biały'], correct: 0 },
        { id: 'app12', question: 'scar =', options: ['blizna', 'szrama', 'rana'], correct: 0 },
        { id: 'app13', question: 'tattoo =', options: ['tatuaż', 'znak', 'rysunek'], correct: 0 },
        { id: 'app14', question: 'piercing =', options: ['kolczyk', 'przekłucie', 'ozdoba'], correct: 0 },
        { id: 'app15', question: 'wrinkles =', options: ['zmarszczki', 'bruzdy', 'fałdy'], correct: 0 },
    ],

    'appearance-advanced-12': [
        { id: 'apa1', question: 'countenance =', options: ['wyraz twarzy', 'twarz', 'wygląd'], correct: 0 },
        { id: 'apa2', question: 'visage =', options: ['oblicze', 'twarz', 'wygląd'], correct: 0 },
        { id: 'apa3', question: 'physiognomy =', options: ['fizjonomia', 'rysy twarzy', 'wygląd'], correct: 0 },
        { id: 'apa4', question: 'demeanor =', options: ['usposobienie', 'zachowanie', 'postawa'], correct: 0 },
        { id: 'apa5', question: 'poise =', options: ['opanowanie', 'gracyjność', 'postawa'], correct: 0 },
        { id: 'apa6', question: 'stature =', options: ['postura', 'wzrost', 'pozycja'], correct: 0 },
        { id: 'apa7', question: 'comely =', options: ['uroczy', 'przystojny', 'atrakcyjny'], correct: 0 },
        { id: 'apa8', question: 'homely =', options: ['nieatrakcyjny', 'prosty', 'zwyczajny'], correct: 0 },
        { id: 'apa9', question: 'haggard =', options: ['wymizerowany', 'zmęczony', 'wychudzony'], correct: 0 },
        { id: 'apa10', question: 'gaunt =', options: ['wychudzony', 'chudy', 'kościsty'], correct: 0 },
        { id: 'apa11', question: 'cherubic =', options: ['anielski', 'dziecinny', 'słodki'], correct: 0 },
        { id: 'apa12', question: 'statuesque =', options: ['posągowy', 'dostojny', 'wyniosły'], correct: 0 },
    ],

// Sekcja home-furnishings - praktyka i zaawansowane
    'furnishings-practice-15': [
        { id: 'fup1', question: 'wardrobe =', options: ['szafa', 'garderoba', 'komoda'], correct: 0 },
        { id: 'fup2', question: 'cupboard =', options: ['szafka', 'kredens', 'szafa'], correct: 0 },
        { id: 'fup3', question: 'shelf =', options: ['półka', 'regał', 'schowek'], correct: 0 },
        { id: 'fup4', question: 'carpet =', options: ['dywan', 'chodnik', 'mata'], correct: 0 },
        { id: 'fup5', question: 'curtain =', options: ['zasłona', 'firanka', 'kotara'], correct: 0 },
        { id: 'fup6', question: 'lamp =', options: ['lampa', 'światło', 'kinkiet'], correct: 0 },
        { id: 'fup7', question: 'mirror =', options: ['lustro', 'zwierciadło', 'odblask'], correct: 0 },
        { id: 'fup8', question: 'painting =', options: ['obraz', 'malowidło', 'fresk'], correct: 0 },
        { id: 'fup9', question: 'vase =', options: ['wazon', 'dzban', 'pojemnik'], correct: 0 },
        { id: 'fup10', question: 'cushion =', options: ['poduszk', 'podkładka', 'jaś'], correct: 0 },
        { id: 'fup11', question: 'blanket =', options: ['koc', 'narzuta', 'kołdra'], correct: 0 },
        { id: 'fup12', question: 'pillow =', options: ['poduszka', 'jaś', 'wezgłowie'], correct: 0 },
        { id: 'fup13', question: 'mattress =', options: ['materac', 'łoże', 'posłanie'], correct: 0 },
        { id: 'fup14', question: 'cabinet =', options: ['gabinet', 'szafka', 'komoda'], correct: 0 },
        { id: 'fup15', question: 'bookcase =', options: ['biblioteczka', 'regał', 'szafka'], correct: 0 },
    ],

    'furnishings-advanced-12': [
        { id: 'fua1', question: 'armoire =', options: ['duża szafa', 'garderoba', 'komoda'], correct: 0 },
        { id: 'fua2', question: 'chiffonier =', options: ['komoda', 'szafka', 'kredens'], correct: 0 },
        { id: 'fua3', question: 'divan =', options: ['kanapa', 'sofa', 'leżanka'], correct: 0 },
        { id: 'fua4', question: 'chesterfield =', options: ['skórzana sofa', 'kanapa', 'fotel'], correct: 0 },
        { id: 'fua5', question: 'ottomans =', options: ['pufy', 'podnóżki', 'siedziska'], correct: 0 },
        { id: 'fua6', question: 'valance =', options: ['lambrek', 'firanka', 'zasłona'], correct: 0 },
        { id: 'fua7', question: 'drapes =', options: ['ciężkie zasłony', 'kotary', 'firany'], correct: 0 },
        { id: 'fua8', question: 'sconce =', options: ['kinkiet', 'świecznik', 'lampa'], correct: 0 },
        { id: 'fua9', question: 'chandelier =', options: ['żyrandol', 'kandelabr', 'lampa'], correct: 0 },
        { id: 'fua10', question: 'etagere =', options: ['regał', 'półka', 'witryna'], correct: 0 },
        { id: 'fua11', question: 'commode =', options: ['komoda', 'szafka', 'toaleta'], correct: 0 },
        { id: 'fua12', question: 'escritoire =', options: ['sekretarzyk', 'biurko', 'pulpit'], correct: 0 },
    ],

// Sekcja school - praktyka i zaawansowane
    'school-practice-15': [
        { id: 'scp1', question: 'principal =', options: ['dyrektor', 'nauczyciel', 'kierownik'], correct: 0 },
        { id: 'scp2', question: 'classroom =', options: ['klasa', 'sala', 'pracownia'], correct: 0 },
        { id: 'scp3', question: 'blackboard =', options: ['tablica', 'deska', 'ekran'], correct: 0 },
        { id: 'scp4', question: 'textbook =', options: ['podręcznik', 'książka', 'zeszyt'], correct: 0 },
        { id: 'scp5', question: 'notebook =', options: ['zeszyt', 'notatnik', 'książka'], correct: 0 },
        { id: 'scp6', question: 'homework =', options: ['praca domowa', 'zadanie', 'ćwiczenie'], correct: 0 },
        { id: 'scp7', question: 'test =', options: ['test', 'sprawdzian', 'egzamin'], correct: 0 },
        { id: 'scp8', question: 'exam =', options: ['egzamin', 'test', 'sprawdzian'], correct: 0 },
        { id: 'scp9', question: 'grade =', options: ['ocena', 'stopień', 'klasa'], correct: 0 },
        { id: 'scp10', question: 'subject =', options: ['przedmiot', 'temat', 'zagadnienie'], correct: 0 },
        { id: 'scp11', question: 'lesson =', options: ['lekcja', 'zajęcia', 'wykład'], correct: 0 },
        { id: 'scp12', question: 'break =', options: ['przerwa', 'odpoczynek', 'przestój'], correct: 0 },
        { id: 'scp13', question: 'timetable =', options: ['plan lekcji', 'harmonogram', 'rozklad'], correct: 0 },
        { id: 'scp14', question: 'locker =', options: ['szafka', 'schowek', 'skrytka'], correct: 0 },
        { id: 'scp15', question: 'playground =', options: ['boisko', 'plac zabaw', 'teren'], correct: 0 },
    ],

    'school-advanced-12': [
        { id: 'sca1', question: 'curriculum =', options: ['program nauczania', 'plan', 'system'], correct: 0 },
        { id: 'sca2', question: 'syllabus =', options: ['sylabus', 'program', 'plan'], correct: 0 },
        { id: 'sca3', question: 'pedagogy =', options: ['pedagogika', 'nauczanie', 'edukacja'], correct: 0 },
        { id: 'sca4', question: 'didactics =', options: ['dydaktyka', 'nauczanie', 'metodyka'], correct: 0 },
        { id: 'sca5', question: 'valedictorian =', options: ['najlepszy absolwent', 'przemawiający', 'laureat'], correct: 0 },
        { id: 'sca6', question: 'salutatorian =', options: ['drugi najlepszy absolwent', 'przywitalny', 'laureat'], correct: 0 },
        { id: 'sca7', question: 'extracurricular =', options: ['pozalekcyjny', 'dodatkowy', 'uzupełniający'], correct: 0 },
        { id: 'sca8', question: 'interdisciplinary =', options: ['międzyprzedmiotowy', 'interdyscyplinarny', 'łączony'], correct: 0 },
        { id: 'sca9', question: 'matriculation =', options: ['immatrykulacja', 'przyjęcie', 'zapis'], correct: 0 },
        { id: 'sca10', question: 'tenure =', options: ['staż', 'zatrudnienie', 'kadra'], correct: 0 },
        { id: 'sca11', question: 'plagiarism =', options: ['plagiat', 'oszustwo', 'kopiowanie'], correct: 0 },
        { id: 'sca12', question: 'accreditation =', options: ['akredytacja', 'zatwierdzenie', 'certyfikat'], correct: 0 },
    ],

// Sekcja school-life - wszystkie trzy poziomy
    'school-life-beginners': [
        { id: 'slb1', question: 'homework =', options: ['praca domowa', 'zadanie', 'ćwiczenie'], correct: 0 },
        { id: 'slb2', question: 'test =', options: ['test', 'sprawdzian', 'egzamin'], correct: 0 },
        { id: 'slb3', question: 'lesson =', options: ['lekcja', 'zajęcia', 'wykład'], correct: 0 },
        { id: 'slb4', question: 'break =', options: ['przerwa', 'odpoczynek', 'przestój'], correct: 0 },
        { id: 'slb5', question: 'friend =', options: ['przyjaciel', 'kolega', 'znajomy'], correct: 0 },
        { id: 'slb6', question: 'teacher =', options: ['nauczyciel', 'profesor', 'wykładowca'], correct: 0 },
        { id: 'slb7', question: 'student =', options: ['uczeń', 'student', 'uczestnik'], correct: 0 },
        { id: 'slb8', question: 'class =', options: ['klasa', 'grupa', 'rocznik'], correct: 0 },
        { id: 'slb9', question: 'book =', options: ['książka', 'podręcznik', 'zeszyt'], correct: 0 },
        { id: 'slb10', question: 'pen =', options: ['długopis', 'pióro', 'flamaster'], correct: 0 },
    ],

    'school-life-practice-15': [
        { id: 'slp1', question: 'assignment =', options: ['zadanie', 'przydział', 'praca'], correct: 0 },
        { id: 'slp2', question: 'project =', options: ['projekt', 'zadanie', 'praca'], correct: 0 },
        { id: 'slp3', question: 'presentation =', options: ['prezentacja', 'wystąpienie', 'pokaz'], correct: 0 },
        { id: 'slp4', question: 'research =', options: ['badanie', 'poszukiwanie', 'analiza'], correct: 0 },
        { id: 'slp5', question: 'essay =', options: ['esej', 'wypracowanie', 'artykuł'], correct: 0 },
        { id: 'slp6', question: 'deadline =', options: ['termin', 'ostateczny termin', 'limit'], correct: 0 },
        { id: 'slp7', question: 'timetable =', options: ['plan lekcji', 'harmonogram', 'rozklad'], correct: 0 },
        { id: 'slp8', question: 'cafeteria =', options: ['stołówka', 'kafeteria', 'bufet'], correct: 0 },
        { id: 'slp9', question: 'locker =', options: ['szafka', 'schowek', 'skrytka'], correct: 0 },
        { id: 'slp10', question: 'bullying =', options: ['znęcanie się', 'dokuczanie', 'przemoc'], correct: 0 },
        { id: 'slp11', question: 'detention =', options: ['kara', 'zatrzymanie', 'areszt'], correct: 0 },
        { id: 'slp12', question: 'truancy =', options: ['wagary', 'nieobecność', 'uchylanie'], correct: 0 },
        { id: 'slp13', question: 'graduation =', options: ['ukończenie szkoły', 'absolutorium', 'dyplom'], correct: 0 },
        { id: 'slp14', question: 'scholarship =', options: ['stypendium', 'stypendium naukowe', 'grant'], correct: 0 },
        { id: 'slp15', question: 'curriculum =', options: ['program nauczania', 'plan', 'system'], correct: 0 },
    ],

    'school-life-advanced-12': [
        { id: 'sla1', question: 'extracurricular =', options: ['pozalekcyjny', 'dodatkowy', 'uzupełniający'], correct: 0 },
        { id: 'sla2', question: 'pedagogy =', options: ['pedagogika', 'nauczanie', 'edukacja'], correct: 0 },
        { id: 'sla3', question: 'didactics =', options: ['dydaktyka', 'nauczanie', 'metodyka'], correct: 0 },
        { id: 'sla4', question: 'valedictorian =', options: ['najlepszy absolwent', 'przemawiający', 'laureat'], correct: 0 },
        { id: 'sla5', question: 'matriculation =', options: ['immatrykulacja', 'przyjęcie', 'zapis'], correct: 0 },
        { id: 'sla6', question: 'plagiarism =', options: ['plagiat', 'oszustwo', 'kopiowanie'], correct: 0 },
        { id: 'sla7', question: 'accreditation =', options: ['akredytacja', 'zatwierdzenie', 'certyfikat'], correct: 0 },
        { id: 'sla8', question: 'tenure =', options: ['staż', 'zatrudnienie', 'kadra'], correct: 0 },
        { id: 'sla9', question: 'syllabus =', options: ['sylabus', 'program', 'plan'], correct: 0 },
        { id: 'sla10', question: 'interdisciplinary =', options: ['międzyprzedmiotowy', 'interdyscyplinarny', 'łączony'], correct: 0 },
        { id: 'sla11', question: 'salutatorian =', options: ['drugi najlepszy absolwent', 'przywitalny', 'laureat'], correct: 0 },
        { id: 'sla12', question: 'pedagogue =', options: ['pedagog', 'nauczyciel', 'edukator'], correct: 0 },
    ],

// Sekcja professions - praktyka i zaawansowane
    'professions-practice-15': [
        { id: 'prp1', question: 'engineer =', options: ['inżynier', 'technik', 'mechanik'], correct: 0 },
        { id: 'prp2', question: 'accountant =', options: ['księgowy', 'rachmistrz', 'ekonomista'], correct: 0 },
        { id: 'prp3', question: 'architect =', options: ['architekt', 'budowniczy', 'projektant'], correct: 0 },
        { id: 'prp4', question: 'journalist =', options: ['dziennikarz', 'reporter', 'redaktor'], correct: 0 },
        { id: 'prp5', question: 'firefighter =', options: ['strażak', 'ratownik', 'pogotowie'], correct: 0 },
        { id: 'prp6', question: 'policeman =', options: ['policjant', 'funkcjonariusz', 'stróż'], correct: 0 },
        { id: 'prp7', question: 'nurse =', options: ['pielęgniarka', 'sanitariusz', 'opiekun'], correct: 0 },
        { id: 'prp8', question: 'waiter =', options: ['kelner', 'serwujący', 'obsługa'], correct: 0 },
        { id: 'prp9', question: 'chef =', options: ['szef kuchni', 'kucharz', 'gastronom'], correct: 0 },
        { id: 'prp10', question: 'driver =', options: ['kierowca', 'szofer', 'prowadzący'], correct: 0 },
        { id: 'prp11', question: 'farmer =', options: ['rolnik', 'farmer', 'gospodarz'], correct: 0 },
        { id: 'prp12', question: 'scientist =', options: ['naukowiec', 'badacz', 'uczony'], correct: 0 },
        { id: 'prp13', question: 'artist =', options: ['artysta', 'twórca', 'malarz'], correct: 0 },
        { id: 'prp14', question: 'musician =', options: ['muzyk', 'instrumentalista', 'artysta'], correct: 0 },
        { id: 'prp15', question: 'actor =', options: ['aktor', 'artysta', 'wykonawca'], correct: 0 },
    ],

    'professions-advanced-12': [
        { id: 'pra1', question: 'cardiologist =', options: ['kardiolog', 'lekarz serca', 'specjalista'], correct: 0 },
        { id: 'pra2', question: 'neurologist =', options: ['neurolog', 'lekarz nerwów', 'specjalista'], correct: 0 },
        { id: 'pra3', question: 'ophthalmologist =', options: ['okulista', 'lekarz oczu', 'specjalista'], correct: 0 },
        { id: 'pra4', question: 'archaeologist =', options: ['archeolog', 'badacz', 'naukowiec'], correct: 0 },
        { id: 'pra5', question: 'anthropologist =', options: ['antropolog', 'badacz', 'naukowiec'], correct: 0 },
        { id: 'pra6', question: 'astrophysicist =', options: ['astrofizyk', 'naukowiec', 'badacz'], correct: 0 },
        { id: 'pra7', question: 'biotechnologist =', options: ['biotechnolog', 'naukowiec', 'badacz'], correct: 0 },
        { id: 'pra8', question: 'criminologist =', options: ['kryminolog', 'badacz', 'naukowiec'], correct: 0 },
        { id: 'pra9', question: 'epidemiologist =', options: ['epidemiolog', 'lekarz', 'badacz'], correct: 0 },
        { id: 'pra10', question: 'meteorologist =', options: ['meteorolog', 'pogodynka', 'naukowiec'], correct: 0 },
        { id: 'pra11', question: 'philologist =', options: ['filolog', 'językoznawca', 'naukowiec'], correct: 0 },
        { id: 'pra12', question: 'seismologist =', options: ['sejsmolog', 'badacz', 'naukowiec'], correct: 0 },
    ],

// Sekcja podstawowe-przymiotniki - praktyka i zaawansowane
    'adjectives-practice-15': [
        { id: 'adjp1', question: 'beautiful =', options: ['piękny', 'ładny', 'atrakcyjny'], correct: 0 },
        { id: 'adjp2', question: 'ugly =', options: ['brzydki', 'nieładny', 'odrażający'], correct: 0 },
        { id: 'adjp3', question: 'big =', options: ['duży', 'wielki', 'ogromny'], correct: 0 },
        { id: 'adjp4', question: 'small =', options: ['mały', 'drobny', 'niewielki'], correct: 0 },
        { id: 'adjp5', question: 'fast =', options: ['szybki', 'prędki', 'błyskawiczny'], correct: 0 },
        { id: 'adjp6', question: 'slow =', options: ['wolny', 'powolny', 'ociężały'], correct: 0 },
        { id: 'adjp7', question: 'hot =', options: ['gorący', 'ciepły', 'parny'], correct: 0 },
        { id: 'adjp8', question: 'cold =', options: ['zimny', 'chłodny', 'mroźny'], correct: 0 },
        { id: 'adjp9', question: 'new =', options: ['nowy', 'świeży', 'najnowszy'], correct: 0 },
        { id: 'adjp10', question: 'old =', options: ['stary', 'dawny', 'zabytkowy'], correct: 0 },
        { id: 'adjp11', question: 'good =', options: ['dobry', 'pozytywny', 'wspaniały'], correct: 0 },
        { id: 'adjp12', question: 'bad =', options: ['zły', 'niedobry', 'kiepski'], correct: 0 },
        { id: 'adjp13', question: 'happy =', options: ['szczęśliwy', 'radosny', 'zadowolony'], correct: 0 },
        { id: 'adjp14', question: 'sad =', options: ['smutny', 'przygnębiony', 'nieszczęśliwy'], correct: 0 },
        { id: 'adjp15', question: 'rich =', options: ['bogaty', 'zamożny', 'majętny'], correct: 0 },
    ],

    'adjectives-advanced-12': [
        { id: 'adja1', question: 'meticulous =', options: ['skrupulatny', 'dokładny', 'staranny'], correct: 0 },
        { id: 'adja2', question: 'pragmatic =', options: ['pragmatyczny', 'praktyczny', 'realistyczny'], correct: 0 },
        { id: 'adja3', question: 'resilient =', options: ['odporny', 'wytrzymały', 'elastyczny'], correct: 0 },
        { id: 'adja4', question: 'voracious =', options: ['żarłoczny', 'chłonny', 'nienasycony'], correct: 0 },
        { id: 'adja5', question: 'ubiquitous =', options: ['wszechobecny', 'powszechny', 'wszędobylski'], correct: 0 },
        { id: 'adja6', question: 'ephemeral =', options: ['ulotny', 'krótkotrwały', 'przemijający'], correct: 0 },
        { id: 'adja7', question: 'prolific =', options: ['płodny', 'owocny', 'produktywny'], correct: 0 },
        { id: 'adja8', question: 'inscrutable =', options: ['nieprzenikniony', 'tajemniczy', 'zagadkowy'], correct: 0 },
        { id: 'adja9', question: 'magnanimous =', options: ['wielkoduszny', 'szlachetny', 'hojny'], correct: 0 },
        { id: 'adja10', question: 'pernicious =', options: ['zgubny', 'szkodliwy', 'niszczący'], correct: 0 },
        { id: 'adja11', question: 'sagacious =', options: ['przenikliwy', 'mądry', 'bystry'], correct: 0 },
        { id: 'adja12', question: 'voracious =', options: ['żarłoczny', 'chłonny', 'nienasycony'], correct: 0 },
    ],

// Sekcja at-work - praktyka i zaawansowane
    'work-practice-15': [
        { id: 'wrp1', question: 'meeting =', options: ['spotkanie', 'zebranie', 'konferencja'], correct: 0 },
        { id: 'wrp2', question: 'deadline =', options: ['termin', 'ostateczny termin', 'limit'], correct: 0 },
        { id: 'wrp3', question: 'salary =', options: ['wynagrodzenie', 'pensja', 'zapłata'], correct: 0 },
        { id: 'wrp4', question: 'colleague =', options: ['kolega z pracy', 'współpracownik', 'partner'], correct: 0 },
        { id: 'wrp5', question: 'boss =', options: ['szef', 'kierownik', 'przełożony'], correct: 0 },
        { id: 'wrp6', question: 'employee =', options: ['pracownik', 'zatrudniony', 'personel'], correct: 0 },
        { id: 'wrp7', question: 'employer =', options: ['pracodawca', 'zatrudniający', 'firma'], correct: 0 },
        { id: 'wrp8', question: 'office =', options: ['biuro', 'gabinet', 'pracownia'], correct: 0 },
        { id: 'wrp9', question: 'desk =', options: ['biurko', 'stół', 'pulpit'], correct: 0 },
        { id: 'wrp10', question: 'computer =', options: ['komputer', 'laptop', 'sprzęt'], correct: 0 },
        { id: 'wrp11', question: 'project =', options: ['projekt', 'zadanie', 'plan'], correct: 0 },
        { id: 'wrp12', question: 'task =', options: ['zadanie', 'czynność', 'obowiązek'], correct: 0 },
        { id: 'wrp13', question: 'promotion =', options: ['awans', 'promocja', 'podwyżka'], correct: 0 },
        { id: 'wrp14', question: 'interview =', options: ['rozmowa kwalifikacyjna', 'wywiad', 'spotkanie'], correct: 0 },
        { id: 'wrp15', question: 'resume =', options: ['życiorys', 'CV', 'podanie'], correct: 0 },
    ],

    'work-advanced-12': [
        { id: 'wra1', question: 'remuneration =', options: ['wynagrodzenie', 'zapłata', 'odpłatność'], correct: 0 },
        { id: 'wra2', question: 'subordinate =', options: ['podwładny', 'poddany', 'niższy rangą'], correct: 0 },
        { id: 'wra3', question: 'supervisor =', options: ['przełożony', 'kierownik', 'nadzorca'], correct: 0 },
        { id: 'wra4', question: 'entrepreneur =', options: ['przedsiębiorca', 'biznesmen', 'inwestor'], correct: 0 },
        { id: 'wra5', question: 'freelancer =', options: ['wolny strzelec', 'niezależny', 'kontraktor'], correct: 0 },
        { id: 'wra6', question: 'consultant =', options: ['konsultant', 'doradca', 'ekspert'], correct: 0 },
        { id: 'wra7', question: 'executive =', options: ['kierownik wykonawczy', 'dyrektor', 'zarząd'], correct: 0 },
        { id: 'wra8', question: 'subsidiary =', options: ['spółka zależna', 'filia', 'oddział'], correct: 0 },
        { id: 'wra9', question: 'merger =', options: ['fuzja', 'połączenie', 'integracja'], correct: 0 },
        { id: 'wra10', question: 'acquisition =', options: ['przejęcie', 'nabycie', 'zakup'], correct: 0 },
        { id: 'wra11', question: 'arbitration =', options: ['arbitraż', 'rozjemstwo', 'mediacja'], correct: 0 },
        { id: 'wra12', question: 'negotiation =', options: ['negocjacje', 'rozmowy', 'dyskusje'], correct: 0 },
    ],

// Sekcja life-family - praktyka i zaawansowane
    'family-practice-15': [
        { id: 'famp1', question: 'mother =', options: ['matka', 'mama', 'rodzic'], correct: 0 },
        { id: 'famp2', question: 'father =', options: ['ojciec', 'tata', 'rodzic'], correct: 0 },
        { id: 'famp3', question: 'sister =', options: ['siostra', 'siostrzyczka', 'krewna'], correct: 0 },
        { id: 'famp4', question: 'brother =', options: ['brat', 'braciszek', 'krewny'], correct: 0 },
        { id: 'famp5', question: 'daughter =', options: ['córka', 'córeczka', 'potomkini'], correct: 0 },
        { id: 'famp6', question: 'son =', options: ['syn', 'synek', 'potomek'], correct: 0 },
        { id: 'famp7', question: 'grandmother =', options: ['babcia', 'babka', 'przodkini'], correct: 0 },
        { id: 'famp8', question: 'grandfather =', options: ['dziadek', 'dziad', 'przodek'], correct: 0 },
        { id: 'famp9', question: 'aunt =', options: ['ciotka', 'ciocia', 'krewna'], correct: 0 },
        { id: 'famp10', question: 'uncle =', options: ['wujek', 'wuj', 'krewny'], correct: 0 },
        { id: 'famp11', question: 'cousin =', options: ['kuzyn', 'kuzynka', 'krewny'], correct: 0 },
        { id: 'famp12', question: 'niece =', options: ['siostrzenica', 'bratanica', 'krewna'], correct: 0 },
        { id: 'famp13', question: 'nephew =', options: ['siostrzeniec', 'bratanek', 'krewny'], correct: 0 },
        { id: 'famp14', question: 'parents =', options: ['rodzice', 'opiekunowie', 'przodkowie'], correct: 0 },
        { id: 'famp15', question: 'children =', options: ['dzieci', 'potomstwo', 'młodzież'], correct: 0 },
    ],

    'family-advanced-12': [
        { id: 'fama1', question: 'progeny =', options: ['potomstwo', 'dzieci', 'następcy'], correct: 0 },
        { id: 'fama2', question: 'ancestry =', options: ['pochodzenie', 'przodkowie', 'rodowód'], correct: 0 },
        { id: 'fama3', question: 'lineage =', options: ['ród', 'pokolenie', 'linia'], correct: 0 },
        { id: 'fama4', question: 'kin =', options: ['krewni', 'rodzina', 'pokrewieństwo'], correct: 0 },
        { id: 'fama5', question: 'consanguinity =', options: ['pokrewieństwo', 'więzy krwi', 'powinowactwo'], correct: 0 },
        { id: 'fama6', question: 'affinity =', options: ['powinowactwo', 'pokrewieństwo', 'związek'], correct: 0 },
        { id: 'fama7', question: 'matrilineal =', options: ['po kądzieli', 'matczyny', 'żeński'], correct: 0 },
        { id: 'fama8', question: 'patrilineal =', options: ['po mieczu', 'ojcowski', 'męski'], correct: 0 },
        { id: 'fama9', question: 'scion =', options: ['potomek', 'dziedzic', 'następca'], correct: 0 },
        { id: 'fama10', question: 'forebear =', options: ['przodek', 'przodkowie', 'poprzednicy'], correct: 0 },
        { id: 'fama11', question: 'posterity =', options: ['potomność', 'następcy', 'przyszłość'], correct: 0 },
        { id: 'fama12', question: 'filial =', options: ['synowski', 'córczany', 'potomny'], correct: 0 },
    ],

// Sekcja everyday-life - wszystkie trzy poziomy
    'everyday-beginners': [
        { id: 'evb1', question: 'morning =', options: ['rano', 'poranek', 'dzień'], correct: 0 },
        { id: 'evb2', question: 'afternoon =', options: ['popołudnie', 'południe', 'wieczór'], correct: 0 },
        { id: 'evb3', question: 'evening =', options: ['wieczór', 'zmierzch', 'noc'], correct: 0 },
        { id: 'evb4', question: 'night =', options: ['noc', 'wieczór', 'zmrok'], correct: 0 },
        { id: 'evb5', question: 'breakfast =', options: ['śniadanie', 'posiłek', 'jedzenie'], correct: 0 },
        { id: 'evb6', question: 'lunch =', options: ['obiad', 'lunch', 'posiłek'], correct: 0 },
        { id: 'evb7', question: 'dinner =', options: ['kolacja', 'obiad', 'posiłek'], correct: 0 },
        { id: 'evb8', question: 'work =', options: ['praca', 'zadanie', 'obowiązek'], correct: 0 },
        { id: 'evb9', question: 'home =', options: ['dom', 'mieszkanie', 'siedziba'], correct: 0 },
        { id: 'evb10', question: 'sleep =', options: ['sen', 'spanie', 'odpoczynek'], correct: 0 },
    ],

    'everyday-practice-15': [
        { id: 'evp1', question: 'routine =', options: ['rutyna', 'zwyczaj', 'harmonogram'], correct: 0 },
        { id: 'evp2', question: 'schedule =', options: ['harmonogram', 'plan', 'rozklad'], correct: 0 },
        { id: 'evp3', question: 'commute =', options: ['dojazd do pracy', 'podróż', 'przejazd'], correct: 0 },
        { id: 'evp4', question: 'errand =', options: ['sprawunek', 'zadanie', 'misja'], correct: 0 },
        { id: 'evp5', question: 'chore =', options: ['obowiązek domowy', 'zadanie', 'praca'], correct: 0 },
        { id: 'evp6', question: 'leisure =', options: ['wolny czas', 'odpoczynek', 'rozrywka'], correct: 0 },
        { id: 'evp7', question: 'hobby =', options: ['hobby', 'zainteresowanie', 'pasja'], correct: 0 },
        { id: 'evp8', question: 'exercise =', options: ['ćwiczenie', 'trening', 'gimnastyka'], correct: 0 },
        { id: 'evp9', question: 'shopping =', options: ['zakupy', 'kupowanie', 'zaopatrzenie'], correct: 0 },
        { id: 'evp10', question: 'cooking =', options: ['gotowanie', 'kuchnia', 'przygotowanie'], correct: 0 },
        { id: 'evp11', question: 'cleaning =', options: ['sprzątanie', 'czyszczenie', 'porządki'], correct: 0 },
        { id: 'evp12', question: 'laundry =', options: ['pranie', 'pralnia', 'bielizna'], correct: 0 },
        { id: 'evp13', question: 'grocery =', options: ['artykuły spożywcze', 'zakupy', 'żywność'], correct: 0 },
        { id: 'evp14', question: 'appointment =', options: ['wizyta', 'spotkanie', 'termin'], correct: 0 },
        { id: 'evp15', question: 'deadline =', options: ['termin', 'ostateczny termin', 'limit'], correct: 0 },
    ],

    'everyday-advanced-12': [
        { id: 'eva1', question: 'quotidian =', options: ['codzienny', 'powszedni', 'zwyczajny'], correct: 0 },
        { id: 'eva2', question: 'mundane =', options: ['przyziemny', 'zwyczajny', 'powszedni'], correct: 0 },
        { id: 'eva3', question: 'prosaic =', options: ['prozaiczny', 'zwyczajny', 'nudny'], correct: 0 },
        { id: 'eva4', question: 'banal =', options: ['banalny', 'pospolity', 'zwyczajny'], correct: 0 },
        { id: 'eva5', question: 'perfunctory =', options: ['pobieżny', 'powierzchowny', 'mechaniczny'], correct: 0 },
        { id: 'eva6', question: 'habituate =', options: ['przyzwyczaić', 'zaaklimatyzować', 'oswoić'], correct: 0 },
        { id: 'eva7', question: 'accustom =', options: ['przyzwyczaić', 'oswoić', 'zaadaptować'], correct: 0 },
        { id: 'eva8', question: 'domesticity =', options: ['życie domowe', 'rodzinnność', 'przytulność'], correct: 0 },
        { id: 'eva9', question: 'household =', options: ['gospodarstwo domowe', 'rodzina', 'domownicy'], correct: 0 },
        { id: 'eva10', question: 'suburban =', options: ['podmiejski', 'przedmieścia', 'miejski'], correct: 0 },
        { id: 'eva11', question: 'metropolitan =', options: ['miejski', 'metropolitalny', 'wielkomiejski'], correct: 0 },
        { id: 'eva12', question: 'urban =', options: ['miejski', 'miejski', 'cywilizowany'], correct: 0 },
    ],

// Sekcja podstawowe-przysłówki - wszystkie trzy poziomy
    'adverbs-beginners': [
        { id: 'advb1', question: 'quickly =', options: ['szybko', 'prędko', 'błyskawicznie'], correct: 0 },
        { id: 'advb2', question: 'slowly =', options: ['wolno', 'powoli', 'ociężale'], correct: 0 },
        { id: 'advb3', question: 'well =', options: ['dobrze', 'porządnie', 'sprawnie'], correct: 0 },
        { id: 'advb4', question: 'badly =', options: ['źle', 'niedobrze', 'kiepsko'], correct: 0 },
        { id: 'advb5', question: 'loudly =', options: ['głośno', 'hałaśliwie', 'doniośle'], correct: 0 },
        { id: 'advb6', question: 'quietly =', options: ['cicho', 'spokojnie', 'bezgłośnie'], correct: 0 },
        { id: 'advb7', question: 'happily =', options: ['szczęśliwie', 'radośnie', 'wesoło'], correct: 0 },
        { id: 'advb8', question: 'sadly =', options: ['smutno', 'nieszczęśliwie', 'żałośnie'], correct: 0 },
        { id: 'advb9', question: 'always =', options: ['zawsze', 'ciągle', 'nieustannie'], correct: 0 },
        { id: 'advb10', question: 'never =', options: ['nigdy', 'wcale', 'absolutnie'], correct: 0 },
    ],

    'adverbs-practice-15': [
        { id: 'advp1', question: 'usually =', options: ['zwykle', 'normalnie', 'przeważnie'], correct: 0 },
        { id: 'advp2', question: 'sometimes =', options: ['czasami', 'niekiedy', 'okazjonalnie'], correct: 0 },
        { id: 'advp3', question: 'often =', options: ['często', 'wielokrotnie', 'regularnie'], correct: 0 },
        { id: 'advp4', question: 'rarely =', options: ['rzadko', 'nieczęsto', 'sporadycznie'], correct: 0 },
        { id: 'advp5', question: 'immediately =', options: ['natychmiast', 'od razu', 'błyskawicznie'], correct: 0 },
        { id: 'advp6', question: 'soon =', options: ['wkrótce', 'niedługo', 'prędko'], correct: 0 },
        { id: 'advp7', question: 'later =', options: ['później', 'potem', 'następnie'], correct: 0 },
        { id: 'advp8', question: 'early =', options: ['wcześnie', 'rano', 'przedwcześnie'], correct: 0 },
        { id: 'advp9', question: 'late =', options: ['późno', 'po czasie', 'opóźniony'], correct: 0 },
        { id: 'advp10', question: 'here =', options: ['tutaj', 'tu', 'w tym miejscu'], correct: 0 },
        { id: 'advp11', question: 'there =', options: ['tam', 'w tamtym miejscu', 'tamże'], correct: 0 },
        { id: 'advp12', question: 'everywhere =', options: ['wszędzie', 'w każdym miejscu', 'całkowicie'], correct: 0 },
        { id: 'advp13', question: 'nowhere =', options: ['nigdzie', 'w żadnym miejscu', 'donikąd'], correct: 0 },
        { id: 'advp14', question: 'somewhere =', options: ['gdzieś', 'w jakimś miejscu', 'kiedyś'], correct: 0 },
        { id: 'advp15', question: 'anywhere =', options: ['gdziekolwiek', 'w dowolnym miejscu', 'bądź'], correct: 0 },
    ],

    'adverbs-advanced-12': [
        { id: 'adva1', question: 'consequently =', options: ['w konsekwencji', 'w związku z tym', 'dlatego'], correct: 0 },
        { id: 'adva2', question: 'accordingly =', options: ['odpowiednio', 'stosownie', 'w związku z tym'], correct: 0 },
        { id: 'adva3', question: 'furthermore =', options: ['ponadto', 'dodatkowo', 'co więcej'], correct: 0 },
        { id: 'adva4', question: 'moreover =', options: ['ponadto', 'co więcej', 'dodatkowo'], correct: 0 },
        { id: 'adva5', question: 'nevertheless =', options: ['niemniej jednak', 'mimo to', 'jednakże'], correct: 0 },
        { id: 'adva6', question: 'nonetheless =', options: ['niemniej', 'mimo wszystko', 'jednak'], correct: 0 },
        { id: 'adva7', question: 'hence =', options: ['stąd', 'dlatego', 'w związku z tym'], correct: 0 },
        { id: 'adva8', question: 'thus =', options: ['zatem', 'tak więc', 'w ten sposób'], correct: 0 },
        { id: 'adva9', question: 'thereby =', options: ['tym samym', 'w ten sposób', 'przez to'], correct: 0 },
        { id: 'adva10', question: 'wherein =', options: ['w którym', 'gdzie', 'w jakim'], correct: 0 },
        { id: 'adva11', question: 'whereby =', options: ['przez co', 'za pomocą którego', 'dzięki czemu'], correct: 0 },
        { id: 'adva12', question: 'heretofore =', options: ['dotychczas', 'do tej pory', 'przedtem'], correct: 0 },
    ],

    // Sekcja free-time - wszystkie trzy poziomy
    'free-time-beginners': [
        { id: 'ftb1', question: 'hobby =', options: ['hobby', 'zainteresowanie', 'pasja'], correct: 0 },
        { id: 'ftb2', question: 'sport =', options: ['sport', 'dyscyplina', 'aktywność'], correct: 0 },
        { id: 'ftb3', question: 'music =', options: ['muzyka', 'dźwięk', 'melodia'], correct: 0 },
        { id: 'ftb4', question: 'movie =', options: ['film', 'kino', 'obraz'], correct: 0 },
        { id: 'ftb5', question: 'book =', options: ['książka', 'lektura', 'powieść'], correct: 0 },
        { id: 'ftb6', question: 'game =', options: ['gra', 'zabawa', 'rozrywka'], correct: 0 },
        { id: 'ftb7', question: 'walk =', options: ['spacer', 'przechadzka', 'piesza wycieczka'], correct: 0 },
        { id: 'ftb8', question: 'dance =', options: ['taniec', 'pląs', 'rytm'], correct: 0 },
        { id: 'ftb9', question: 'sing =', options: ['śpiew', 'piosenka', 'melodia'], correct: 0 },
        { id: 'ftb10', question: 'paint =', options: ['malować', 'farbować', 'rysować'], correct: 0 },
    ],

    'free-time-practice-15': [
        { id: 'ftp1', question: 'leisure =', options: ['wolny czas', 'odpoczynek', 'rozrywka'], correct: 0 },
        { id: 'ftp2', question: 'recreation =', options: ['rekreacja', 'odpoczynek', 'rozrywka'], correct: 0 },
        { id: 'ftp3', question: 'entertainment =', options: ['rozrywka', 'zabawa', 'atrakcja'], correct: 0 },
        { id: 'ftp4', question: 'pastime =', options: ['sposób na spędzanie czasu', 'zabawa', 'rozrywka'], correct: 0 },
        { id: 'ftp5', question: 'amusement =', options: ['zabawa', 'rozrywka', 'przyjemność'], correct: 0 },
        { id: 'ftp6', question: 'relaxation =', options: ['relaks', 'odprężenie', 'wypoczynek'], correct: 0 },
        { id: 'ftp7', question: 'gardening =', options: ['ogrodnictwo', 'praca w ogrodzie', 'uprawa'], correct: 0 },
        { id: 'ftp8', question: 'photography =', options: ['fotografia', 'robienie zdjęć', 'fotografowanie'], correct: 0 },
        { id: 'ftp9', question: 'cooking =', options: ['gotowanie', 'kuchnia', 'przygotowanie'], correct: 0 },
        { id: 'ftp10', question: 'reading =', options: ['czytanie', 'lektura', 'przeczytanie'], correct: 0 },
        { id: 'ftp11', question: 'writing =', options: ['pisanie', 'tworzenie', 'autorstwo'], correct: 0 },
        { id: 'ftp12', question: 'drawing =', options: ['rysowanie', 'szkicowanie', 'kreślenie'], correct: 0 },
        { id: 'ftp13', question: 'cycling =', options: ['jazda na rowerze', 'kolarstwo', 'rowerowanie'], correct: 0 },
        { id: 'ftp14', question: 'hiking =', options: ['wędrówka', 'turystyka piesza', 'trekking'], correct: 0 },
        { id: 'ftp15', question: 'swimming =', options: ['pływanie', 'kąpiel', 'nurkowanie'], correct: 0 },
    ],

    'free-time-advanced-12': [
        { id: 'fta1', question: 'avocation =', options: ['zamiłowanie', 'hobby', 'pasja'], correct: 0 },
        { id: 'fta2', question: 'diversion =', options: ['rozrywka', 'diversja', 'odwrócenie uwagi'], correct: 0 },
        { id: 'fta3', question: 'sojourn =', options: ['pobyt', 'przebywanie', 'odwiedziny'], correct: 0 },
        { id: 'fta4', question: 'excursion =', options: ['wycieczka', 'wyprawa', 'podróż'], correct: 0 },
        { id: 'fta5', question: 'jaunt =', options: ['wycieczka', 'przejażdżka', 'wypad'], correct: 0 },
        { id: 'fta6', question: 'rendezvous =', options: ['spotkanie', 'randka', 'zebranie'], correct: 0 },
        { id: 'fta7', question: 'connoisseur =', options: ['znawca', 'koneser', 'ekspert'], correct: 0 },
        { id: 'fta8', question: 'aficionado =', options: ['entuzjasta', 'miłośnik', 'fan'], correct: 0 },
        { id: 'fta9', question: 'virtuoso =', options: ['wirtuoz', 'mistrz', 'ekspert'], correct: 0 },
        { id: 'fta10', question: 'dilettante =', options: ['dylettant', 'amator', 'laik'], correct: 0 },
        { id: 'fta11', question: 'repertoire =', options: ['repertuar', 'zasób', 'katalog'], correct: 0 },
        { id: 'fta12', question: 'ensemble =', options: ['zespół', 'grupa', 'kolektyw'], correct: 0 },
    ],

// Sekcja horticulture - wszystkie trzy poziomy
    'horticulture-beginners': [
        { id: 'hob1', question: 'garden =', options: ['ogród', 'sad', 'park'], correct: 0 },
        { id: 'hob2', question: 'plant =', options: ['roślina', 'sadzonka', 'kwiat'], correct: 0 },
        { id: 'hob3', question: 'flower =', options: ['kwiat', 'kwiatek', 'rozkwit'], correct: 0 },
        { id: 'hob4', question: 'tree =', options: ['drzewo', 'krzew', 'roślina'], correct: 0 },
        { id: 'hob5', question: 'grass =', options: ['trawa', 'murawa', 'darń'], correct: 0 },
        { id: 'hob6', question: 'soil =', options: ['gleba', 'ziemia', 'grunt'], correct: 0 },
        { id: 'hob7', question: 'water =', options: ['woda', 'podlewanie', 'nawadnianie'], correct: 0 },
        { id: 'hob8', question: 'seed =', options: ['nasiono', 'ziarno', 'zarodek'], correct: 0 },
        { id: 'hob9', question: 'leaf =', options: ['liść', 'listek', 'blaszka'], correct: 0 },
        { id: 'hob10', question: 'root =', options: ['korzeń', 'podstawa', 'źródło'], correct: 0 },
    ],

    'horticulture-practice-15': [
        { id: 'hop1', question: 'gardening =', options: ['ogrodnictwo', 'praca w ogrodzie', 'uprawa'], correct: 0 },
        { id: 'hop2', question: 'lawn =', options: ['trawnik', 'murawa', 'darń'], correct: 0 },
        { id: 'hop3', question: 'shrub =', options: ['krzew', 'krzak', 'krzewinka'], correct: 0 },
        { id: 'hop4', question: 'weed =', options: ['chwast', 'zielsko', 'roślina'], correct: 0 },
        { id: 'hop5', question: 'fertilizer =', options: ['nawóz', 'odżywka', 'substancja odżywcza'], correct: 0 },
        { id: 'hop6', question: 'compost =', options: ['kompost', 'nawóz', 'odpadki'], correct: 0 },
        { id: 'hop7', question: 'prune =', options: ['przycinać', 'obcinać', 'przycinać gałęzie'], correct: 0 },
        { id: 'hop8', question: 'harvest =', options: ['zbierać plony', 'żniwa', 'plon'], correct: 0 },
        { id: 'hop9', question: 'bloom =', options: ['kwitnąć', 'rozkwit', 'kwiat'], correct: 0 },
        { id: 'hop10', question: 'sprout =', options: ['kiełkować', 'wschodzić', 'pękać'], correct: 0 },
        { id: 'hop11', question: 'cultivate =', options: ['uprawiać', 'hodować', 'kultywować'], correct: 0 },
        { id: 'hop12', question: 'irrigate =', options: ['nawadniać', 'irygować', 'polewać'], correct: 0 },
        { id: 'hop13', question: 'greenhouse =', options: ['szklarnia', 'cieplarnia', 'oranzeria'], correct: 0 },
        { id: 'hop14', question: 'seedling =', options: ['sadzonka', 'kiełek', 'roślina'], correct: 0 },
        { id: 'hop15', question: 'perennial =', options: ['bylina', 'wieloletni', 'trwały'], correct: 0 },
    ],

    'horticulture-advanced-12': [
        { id: 'hoa1', question: 'arboriculture =', options: ['arborystyka', 'hodowla drzew', 'ogrodnictwo drzewne'], correct: 0 },
        { id: 'hoa2', question: 'floriculture =', options: ['kwiaciarstwo', 'hodowla kwiatów', 'florystyka'], correct: 0 },
        { id: 'hoa3', question: 'viticulture =', options: ['winiarstwo', 'uprawa winorośli', 'winogradnictwo'], correct: 0 },
        { id: 'hoa4', question: 'permaculture =', options: ['permakultura', 'trwała kultura', 'zrównoważona uprawa'], correct: 0 },
        { id: 'hoa5', question: 'xeriscaping =', options: ['ogrodnictwo suche', 'oszczędzanie wody', 'krajobraz suchy'], correct: 0 },
        { id: 'hoa6', question: 'espalier =', options: ['szpaler', 'pnącze', 'formowanie drzew'], correct: 0 },
        { id: 'hoa7', question: 'topiary =', options: ['strzyżone rośliny', 'topiar', 'formowanie krzewów'], correct: 0 },
        { id: 'hoa8', question: 'propagate =', options: ['rozmnażać', 'propagować', 'rozprzestrzeniać'], correct: 0 },
        { id: 'hoa9', question: 'germinate =', options: ['kiełkować', 'zaczynać rosnąć', 'wschodzić'], correct: 0 },
        { id: 'hoa10', question: 'photosynthesis =', options: ['fotosynteza', 'odżywianie roślin', 'proces roślinny'], correct: 0 },
        { id: 'hoa11', question: 'chlorophyll =', options: ['chlorofil', 'zielony barwnik', 'pigment roślinny'], correct: 0 },
        { id: 'hoa12', question: 'botany =', options: ['botanika', 'nauka o roślinach', 'biologia roślin'], correct: 0 },
    ],

// Sekcja entertainment - wszystkie trzy poziomy
    'entertainment-beginners': [
        { id: 'entb1', question: 'movie =', options: ['film', 'kino', 'obraz'], correct: 0 },
        { id: 'entb2', question: 'music =', options: ['muzyka', 'dźwięk', 'melodia'], correct: 0 },
        { id: 'entb3', question: 'theater =', options: ['teatr', 'scena', 'widownia'], correct: 0 },
        { id: 'entb4', question: 'concert =', options: ['koncert', 'występ', 'recital'], correct: 0 },
        { id: 'entb5', question: 'show =', options: ['show', 'program', 'widowisko'], correct: 0 },
        { id: 'entb6', question: 'game =', options: ['gra', 'zabawa', 'rozrywka'], correct: 0 },
        { id: 'entb7', question: 'dance =', options: ['taniec', 'pląs', 'rytm'], correct: 0 },
        { id: 'entb8', question: 'party =', options: ['impreza', 'przyjęcie', 'zabawa'], correct: 0 },
        { id: 'entb9', question: 'festival =', options: ['festiwal', 'święto', 'uroczystość'], correct: 0 },
        { id: 'entb10', question: 'performance =', options: ['występ', 'przedstawienie', 'pokaz'], correct: 0 },
    ],

    'entertainment-practice-15': [
        { id: 'entp1', question: 'amusement =', options: ['zabawa', 'rozrywka', 'przyjemność'], correct: 0 },
        { id: 'entp2', question: 'recreation =', options: ['rekreacja', 'odpoczynek', 'rozrywka'], correct: 0 },
        { id: 'entp3', question: 'leisure =', options: ['wolny czas', 'odpoczynek', 'rozrywka'], correct: 0 },
        { id: 'entp4', question: 'spectacle =', options: ['widowisko', 'spektakl', 'pokaz'], correct: 0 },
        { id: 'entp5', question: 'exhibition =', options: ['wystawa', 'ekspozycja', 'pokaz'], correct: 0 },
        { id: 'entp6', question: 'gallery =', options: ['galeria', 'sala wystaw', 'muzeum'], correct: 0 },
        { id: 'entp7', question: 'cinema =', options: ['kino', 'sala kinowa', 'film'], correct: 0 },
        { id: 'entp8', question: 'orchestra =', options: ['orkiestra', 'zespół', 'grupa muzyczna'], correct: 0 },
        { id: 'entp9', question: 'ballet =', options: ['balet', 'taniec klasyczny', 'choreografia'], correct: 0 },
        { id: 'entp10', question: 'opera =', options: ['opera', 'śpiewogra', 'teatr muzyczny'], correct: 0 },
        { id: 'entp11', question: 'comedy =', options: ['komedia', 'kabaret', 'humor'], correct: 0 },
        { id: 'entp12', question: 'drama =', options: ['dramat', 'sztuka', 'teatr'], correct: 0 },
        { id: 'entp13', question: 'circus =', options: ['cyrk', 'arena', 'widowisko'], correct: 0 },
        { id: 'entp14', question: 'carnival =', options: ['karnawał', 'zabawa', 'festyn'], correct: 0 },
        { id: 'entp15', question: 'parade =', options: ['parada', 'pochód', 'defilada'], correct: 0 },
    ],

    'entertainment-advanced-12': [
        { id: 'enta1', question: 'extravaganza =', options: ['ekstrawagancja', 'wystawność', 'przepych'], correct: 0 },
        { id: 'enta2', question: 'gala =', options: ['gala', 'uroczystość', 'święto'], correct: 0 },
        { id: 'enta3', question: 'soiree =', options: ['wieczór', 'przyjęcie', 'spotkanie'], correct: 0 },
        { id: 'enta4', question: 'rendezvous =', options: ['spotkanie', 'randka', 'zebranie'], correct: 0 },
        { id: 'enta5', question: 'matinee =', options: ['przedpołudniowy spektakl', 'poranek', 'przedstawienie'], correct: 0 },
        { id: 'enta6', question: 'vaudeville =', options: ['wodewil', 'rewia', 'teatr rozrywkowy'], correct: 0 },
        { id: 'enta7', question: 'pantomime =', options: ['pantomima', 'sztuka mimiczna', 'gestykulacja'], correct: 0 },
        { id: 'enta8', question: 'repertoire =', options: ['repertuar', 'zasób', 'katalog'], correct: 0 },
        { id: 'enta9', question: 'impresario =', options: ['impresario', 'organizator', 'menadżer'], correct: 0 },
        { id: 'enta10', question: 'virtuoso =', options: ['wirtuoz', 'mistrz', 'ekspert'], correct: 0 },
        { id: 'enta11', question: 'maestro =', options: ['maestro', 'mistrz', 'dyrygent'], correct: 0 },
        { id: 'enta12', question: 'premiere =', options: ['premiera', 'debiut', 'pierwszy występ'], correct: 0 },
    ],

// Sekcja nutrition - wszystkie trzy poziomy
    'nutrition-beginners': [
        { id: 'nutb1', question: 'food =', options: ['jedzenie', 'pożywienie', 'żywność'], correct: 0 },
        { id: 'nutb2', question: 'water =', options: ['woda', 'płyn', 'napój'], correct: 0 },
        { id: 'nutb3', question: 'fruit =', options: ['owoc', 'plon', 'produkt'], correct: 0 },
        { id: 'nutb4', question: 'vegetable =', options: ['warzywo', 'jarzyna', 'roślina'], correct: 0 },
        { id: 'nutb5', question: 'meat =', options: ['mięso', 'potrawa', 'pokarm'], correct: 0 },
        { id: 'nutb6', question: 'bread =', options: ['chleb', 'bułka', 'pieczywo'], correct: 0 },
        { id: 'nutb7', question: 'milk =', options: ['mleko', 'napój', 'płyn'], correct: 0 },
        { id: 'nutb8', question: 'egg =', options: ['jajko', 'jajecznica', 'omlet'], correct: 0 },
        { id: 'nutb9', question: 'rice =', options: ['ryż', 'ziarno', 'kasza'], correct: 0 },
        { id: 'nutb10', question: 'sugar =', options: ['cukier', 'słodycz', 'słodzik'], correct: 0 },
    ],

    'nutrition-practice-15': [
        { id: 'nutp1', question: 'diet =', options: ['dieta', 'odżywianie', 'jadłospis'], correct: 0 },
        { id: 'nutp2', question: 'nutrition =', options: ['odżywianie', 'żywienie', 'pożywienie'], correct: 0 },
        { id: 'nutp3', question: 'protein =', options: ['białko', 'protein', 'budulec'], correct: 0 },
        { id: 'nutp4', question: 'carbohydrate =', options: ['węglowodan', 'cukier', 'skrobia'], correct: 0 },
        { id: 'nutp5', question: 'vitamin =', options: ['witamina', 'składnik', 'suplement'], correct: 0 },
        { id: 'nutp6', question: 'mineral =', options: ['minerał', 'pierwiastek', 'składnik'], correct: 0 },
        { id: 'nutp7', question: 'calorie =', options: ['kaloria', 'energia', 'wartość'], correct: 0 },
        { id: 'nutp8', question: 'fiber =', options: ['błonnik', 'włókno', 'celuloza'], correct: 0 },
        { id: 'nutp9', question: 'fat =', options: ['tłuszcz', 'olej', 'smalec'], correct: 0 },
        { id: 'nutp10', question: 'healthy =', options: ['zdrowy', 'korzystny', 'pożyteczny'], correct: 0 },
        { id: 'nutp11', question: 'unhealthy =', options: ['niezdrowy', 'szkodliwy', 'zgubny'], correct: 0 },
        { id: 'nutp12', question: 'organic =', options: ['organiczny', 'ekologiczny', 'naturalny'], correct: 0 },
        { id: 'nutp13', question: 'processed =', options: ['przetworzony', 'przerobiony', 'przygotowany'], correct: 0 },
        { id: 'nutp14', question: 'fresh =', options: ['świeży', 'nowy', 'czysty'], correct: 0 },
        { id: 'nutp15', question: 'frozen =', options: ['mrożony', 'zamrożony', 'zamarznięty'], correct: 0 },
    ],

    'nutrition-advanced-12': [
        { id: 'nuta1', question: 'nutrient =', options: ['składnik odżywczy', 'pokarm', 'wartość'], correct: 0 },
        { id: 'nuta2', question: 'macronutrient =', options: ['makroskładnik', 'główny składnik', 'podstawa'], correct: 0 },
        { id: 'nuta3', question: 'micronutrient =', options: ['mikroskładnik', 'dodatek', 'suplement'], correct: 0 },
        { id: 'nuta4', question: 'antioxidant =', options: ['przeciwutleniacz', 'antyoksydant', 'ochrona'], correct: 0 },
        { id: 'nuta5', question: 'metabolism =', options: ['metabolizm', 'przemiana materii', 'przetwarzanie'], correct: 0 },
        { id: 'nuta6', question: 'digestion =', options: ['trawienie', 'przetrawianie', 'przyswajanie'], correct: 0 },
        { id: 'nuta7', question: 'malnutrition =', options: ['niedożywienie', 'złe odżywianie', 'brak'], correct: 0 },
        { id: 'nuta8', question: 'deficiency =', options: ['niedobór', 'brak', 'niedostatek'], correct: 0 },
        { id: 'nuta9', question: 'supplement =', options: ['suplement', 'dodatek', 'uzupełnienie'], correct: 0 },
        { id: 'nuta10', question: 'fortified =', options: ['wzbogacony', 'umocniony', 'wzmocniony'], correct: 0 },
        { id: 'nuta11', question: 'pasteurized =', options: ['pasteryzowany', 'odkażony', 'oczyszczony'], correct: 0 },
        { id: 'nuta12', question: 'homogenized =', options: ['homogenizowany', 'jednorodny', 'wymieszany'], correct: 0 },
    ],

// Sekcja around-food - wszystkie trzy poziomy
    'food-around-beginners': [
        { id: 'fab1', question: 'cook =', options: ['gotować', 'kucharz', 'przygotowywać'], correct: 0 },
        { id: 'fab2', question: 'kitchen =', options: ['kuchnia', 'pomieszczenie', 'gospodarstwo'], correct: 0 },
        { id: 'fab3', question: 'recipe =', options: ['przepis', 'receptura', 'sposób'], correct: 0 },
        { id: 'fab4', question: 'ingredient =', options: ['składnik', 'dodatek', 'element'], correct: 0 },
        { id: 'fab5', question: 'taste =', options: ['smak', 'posmak', 'doznanie'], correct: 0 },
        { id: 'fab6', question: 'flavor =', options: ['smak', 'aromat', 'zapach'], correct: 0 },
        { id: 'fab7', question: 'spice =', options: ['przyprawa', 'korzen', 'dodatek'], correct: 0 },
        { id: 'fab8', question: 'herb =', options: ['ziele', 'trawa', 'roślina'], correct: 0 },
        { id: 'fab9', question: 'salt =', options: ['sól', 'solenie', 'przyprawa'], correct: 0 },
        { id: 'fab10', question: 'pepper =', options: ['pieprz', 'przyprawa', 'ostrość'], correct: 0 },
    ],

    'food-around-practice-15': [
        { id: 'fap1', question: 'cuisine =', options: ['kuchnia', 'sztuka kulinarna', 'gotowanie'], correct: 0 },
        { id: 'fap2', question: 'gourmet =', options: ['smakosz', 'koneser', 'znawca'], correct: 0 },
        { id: 'fap3', question: 'culinary =', options: ['kulinarny', 'kuchenny', 'gastronomiczny'], correct: 0 },
        { id: 'fap4', question: 'appetizer =', options: ['przystawka', 'zakąska', 'przedposiłek'], correct: 0 },
        { id: 'fap5', question: 'entree =', options: ['danie główne', 'wprowadzenie', 'wejście'], correct: 0 },
        { id: 'fap6', question: 'dessert =', options: ['deser', 'słodycz', 'przekąska'], correct: 0 },
        { id: 'fap7', question: 'beverage =', options: ['napój', 'płyn', 'trunek'], correct: 0 },
        { id: 'fap8', question: 'utensil =', options: ['przybór kuchenny', 'narzędzie', 'sprzęt'], correct: 0 },
        { id: 'fap9', question: 'appliance =', options: ['urządzenie', 'sprzęt', 'aparat'], correct: 0 },
        { id: 'fap10', question: 'cutlery =', options: ['sztućce', 'noże', 'przybory'], correct: 0 },
        { id: 'fap11', question: 'crockery =', options: ['naczynia', 'ceramika', 'zastawa'], correct: 0 },
        { id: 'fap12', question: 'garnish =', options: ['przystroić', 'dekorować', 'doprawić'], correct: 0 },
        { id: 'fap13', question: 'marinate =', options: ['marynować', 'moczyć', 'przyprawiać'], correct: 0 },
        { id: 'fap14', question: 'simmer =', options: ['dusić', 'gotować na wolnym ogniu', 'parować'], correct: 0 },
        { id: 'fap15', question: 'bake =', options: ['piec', 'wypiekać', 'prażyć'], correct: 0 },
    ],

    'food-around-advanced-12': [
        { id: 'faa1', question: 'gastronomy =', options: ['gastronomia', 'sztuka kulinarna', 'kuchnia'], correct: 0 },
        { id: 'faa2', question: 'epicurean =', options: ['epikurejski', 'rozkosznisi', 'smakosz'], correct: 0 },
        { id: 'faa3', question: 'delectable =', options: ['przepyszny', 'rozkoszny', 'smaczny'], correct: 0 },
        { id: 'faa4', question: 'palatable =', options: ['smaczny', 'przyjemny', 'apetyczny'], correct: 0 },
        { id: 'faa5', question: 'savory =', options: ['pikantny', 'smaczny', 'aromatyczny'], correct: 0 },
        { id: 'faa6', question: 'umami =', options: ['umami', 'smak', 'aromat'], correct: 0 },
        { id: 'faa7', question: 'degustation =', options: ['degustacja', 'próbkowanie', 'kosztowanie'], correct: 0 },
        { id: 'faa8', question: 'sous-vide =', options: ['gotowanie w próżni', 'metoda', 'sposób'], correct: 0 },
        { id: 'faa9', question: 'confit =', options: ['konfitura', 'przetwór', 'danie'], correct: 0 },
        { id: 'faa10', question: 'reduction =', options: ['redukcja', 'zagęszczenie', 'skoncentrowanie'], correct: 0 },
        { id: 'faa11', question: 'emulsion =', options: ['emulsja', 'mieszanina', 'połączenie'], correct: 0 },
        { id: 'faa12', question: 'molecular gastronomy =', options: ['gastronomia molekularna', 'nowoczesna kuchnia', 'nauka kulinarna'], correct: 0 },
    ],

// Sekcja stores - wszystkie trzy poziomy
    'stores-beginners': [
        { id: 'stob1', question: 'shop =', options: ['sklep', 'zakupy', 'praca'], correct: 0 },
        { id: 'stob2', question: 'store =', options: ['sklep', 'magazyn', 'przechowalnia'], correct: 0 },
        { id: 'stob3', question: 'market =', options: ['rynek', 'targ', 'sklep'], correct: 0 },
        { id: 'stob4', question: 'mall =', options: ['centrum handlowe', 'galeria', 'pasaż'], correct: 0 },
        { id: 'stob5', question: 'price =', options: ['cena', 'koszt', 'wartość'], correct: 0 },
        { id: 'stob6', question: 'buy =', options: ['kupować', 'nabywać', 'zakupy'], correct: 0 },
        { id: 'stob7', question: 'sell =', options: ['sprzedawać', 'handlować', 'dostarczać'], correct: 0 },
        { id: 'stob8', question: 'money =', options: ['pieniądze', 'gotówka', 'kapitał'], correct: 0 },
        { id: 'stob9', question: 'cash =', options: ['gotówka', 'pieniądze', 'kasa'], correct: 0 },
        { id: 'stob10', question: 'card =', options: ['karta', 'dowód', 'znak'], correct: 0 },
    ],

    'stores-practice-15': [
        { id: 'stop1', question: 'grocery =', options: ['sklep spożywczy', 'artykuły spożywcze', 'zakupy'], correct: 0 },
        { id: 'stop2', question: 'boutique =', options: ['butik', 'sklep', 'salon'], correct: 0 },
        { id: 'stop3', question: 'department store =', options: ['dom towarowy', 'sklep wielobranżowy', 'centrum'], correct: 0 },
        { id: 'stop4', question: 'pharmacy =', options: ['apteka', 'lecznica', 'sklep'], correct: 0 },
        { id: 'stop5', question: 'bakery =', options: ['piekarnia', 'cukiernia', 'wypiek'], correct: 0 },
        { id: 'stop6', question: 'butcher =', options: ['rzeźnik', 'masarz', 'sklep mięsny'], correct: 0 },
        { id: 'stop7', question: 'florist =', options: ['kwiaciarnia', 'florysta', 'ogrodnik'], correct: 0 },
        { id: 'stop8', question: 'hardware store =', options: ['sklep z narzędziami', 'sklep metalowy', 'sprzęt'], correct: 0 },
        { id: 'stop9', question: 'bookstore =', options: ['księgarnia', 'sklep z książkami', 'biblioteka'], correct: 0 },
        { id: 'stop10', question: 'clothing store =', options: ['sklep odzieżowy', 'butik', 'odzież'], correct: 0 },
        { id: 'stop11', question: 'jewelry store =', options: ['sklep jubilerski', 'biżuteria', 'złotnictwo'], correct: 0 },
        { id: 'stop12', question: 'electronics store =', options: ['sklep elektroniczny', 'elektronika', 'sprzęt'], correct: 0 },
        { id: 'stop13', question: 'souvenir shop =', options: ['sklep z pamiątkami', 'pamiątki', 'suweniry'], correct: 0 },
        { id: 'stop14', question: 'convenience store =', options: ['sklep osiedlowy', 'convenience', 'mały sklep'], correct: 0 },
        { id: 'stop15', question: 'discount store =', options: ['sklep dyskontowy', 'dyskont', 'tani sklep'], correct: 0 },
    ],

    'stores-advanced-12': [
        { id: 'stoa1', question: 'emporium =', options: ['emporium', 'wielki sklep', 'centrum handlowe'], correct: 0 },
        { id: 'stoa2', question: 'bazaar =', options: ['bazar', 'targowisko', 'rynek'], correct: 0 },
        { id: 'stoa3', question: 'mercantile =', options: ['handlowy', 'kupiecki', 'merkantylny'], correct: 0 },
        { id: 'stoa4', question: 'commercial =', options: ['komercyjny', 'handlowy', 'reklamowy'], correct: 0 },
        { id: 'stoa5', question: 'retail =', options: ['detaliczny', 'sprzedaż detaliczna', 'handel'], correct: 0 },
        { id: 'stoa6', question: 'wholesale =', options: ['hurtowy', 'sprzedaż hurtowa', 'hurt'], correct: 0 },
        { id: 'stoa7', question: 'franchise =', options: ['franchising', 'koncesja', 'licencja'], correct: 0 },
        { id: 'stoa8', question: 'consignment =', options: ['przesyłka', 'depozyt', 'konsygnacja'], correct: 0 },
        { id: 'stoa9', question: 'inventory =', options: ['inwentarz', 'zapasy', 'spis'], correct: 0 },
        { id: 'stoa10', question: 'merchandise =', options: ['towar', 'produkty', 'asortyment'], correct: 0 },
        { id: 'stoa11', question: 'boutique =', options: ['butik', 'ekskluzywny sklep', 'salon'], correct: 0 },
        { id: 'stoa12', question: 'emporium =', options: ['emporium', 'wielki sklep', 'centrum handlowe'], correct: 0 },
    ],

// Sekcja shopping - wszystkie trzy poziomy
    'shopping-beginners': [
        { id: 'shob1', question: 'buy =', options: ['kupować', 'nabywać', 'zakupy'], correct: 0 },
        { id: 'shob2', question: 'sell =', options: ['sprzedawać', 'handlować', 'dostarczać'], correct: 0 },
        { id: 'shob3', question: 'price =', options: ['cena', 'koszt', 'wartość'], correct: 0 },
        { id: 'shob4', question: 'money =', options: ['pieniądze', 'gotówka', 'kapitał'], correct: 0 },
        { id: 'shob5', question: 'pay =', options: ['płacić', 'opłacać', 'wynagradzać'], correct: 0 },
        { id: 'shob6', question: 'cost =', options: ['kosztować', 'cena', 'wydatek'], correct: 0 },
        { id: 'shob7', question: 'cheap =', options: ['tani', 'niedrogi', 'oszczędny'], correct: 0 },
        { id: 'shob8', question: 'expensive =', options: ['drogi', 'kosztowny', 'cenny'], correct: 0 },
        { id: 'shob9', question: 'discount =', options: ['zniżka', 'rabat', 'obniżka'], correct: 0 },
        { id: 'shob10', question: 'receipt =', options: ['paragon', 'pokwitowanie', 'potwierdzenie'], correct: 0 },
    ],

    'shopping-practice-15': [
        { id: 'shop1', question: 'purchase =', options: ['zakup', 'nabytek', 'kupno'], correct: 0 },
        { id: 'shop2', question: 'sale =', options: ['wyprzedaż', 'sprzedaż', 'obniżka'], correct: 0 },
        { id: 'shop3', question: 'bargain =', options: ['okazja', 'targowanie się', 'umowa'], correct: 0 },
        { id: 'shop4', question: 'refund =', options: ['zwrot pieniędzy', 'rekompensata', 'odszkodowanie'], correct: 0 },
        { id: 'shop5', question: 'exchange =', options: ['wymiana', 'zamiana', 'giełda'], correct: 0 },
        { id: 'shop6', question: 'return =', options: ['zwrot', 'powrót', 'oddanie'], correct: 0 },
        { id: 'shop7', question: 'warranty =', options: ['gwarancja', 'zabezpieczenie', 'poręczenie'], correct: 0 },
        { id: 'shop8', question: 'delivery =', options: ['dostawa', 'dostarczenie', 'przesyłka'], correct: 0 },
        { id: 'shop9', question: 'order =', options: ['zamówienie', 'rozkaz', 'porządek'], correct: 0 },
        { id: 'shop10', question: 'customer =', options: ['klient', 'kupujący', 'gość'], correct: 0 },
        { id: 'shop11', question: 'cashier =', options: ['kasjer', 'kasjerka', 'kasa'], correct: 0 },
        { id: 'shop12', question: 'checkout =', options: ['kasa', 'wypisanie', 'sprawdzenie'], correct: 0 },
        { id: 'shop13', question: 'shopping cart =', options: ['wózek sklepowy', 'koszyk', 'wózek'], correct: 0 },
        { id: 'shop14', question: 'fitting room =', options: ['przymierzalnia', 'pokój', 'sala'], correct: 0 },
        { id: 'shop15', question: 'window shopping =', options: ['oglądanie wystaw', 'zakupy okienne', 'przeglądanie'], correct: 0 },
    ],

    'shopping-advanced-12': [
        { id: 'shoa1', question: 'acquisition =', options: ['nabycie', 'przejęcie', 'zakup'], correct: 0 },
        { id: 'shoa2', question: 'procurement =', options: ['zaopatrzenie', 'pozyskiwanie', 'nabywanie'], correct: 0 },
        { id: 'shoa3', question: 'consumption =', options: ['konsumpcja', 'spożycie', 'zużycie'], correct: 0 },
        { id: 'shoa4', question: 'consumerism =', options: ['konsumpcjonizm', 'konsumeryzm', 'spożycie'], correct: 0 },
        { id: 'shoa5', question: 'merchandising =', options: ['merchandising', 'handel', 'sprzedaż'], correct: 0 },
        { id: 'shoa6', question: 'marketing =', options: ['marketing', 'reklama', 'promocja'], correct: 0 },
        { id: 'shoa7', question: 'brand =', options: ['marka', 'znak', 'firma'], correct: 0 },
        { id: 'shoa8', question: 'franchise =', options: ['franchising', 'koncesja', 'licencja'], correct: 0 },
        { id: 'shoa9', question: 'consignment =', options: ['przesyłka', 'depozyt', 'konsygnacja'], correct: 0 },
        { id: 'shoa10', question: 'boutique =', options: ['butik', 'ekskluzywny sklep', 'salon'], correct: 0 },
        { id: 'shoa11', question: 'emporium =', options: ['emporium', 'wielki sklep', 'centrum handlowe'], correct: 0 },
        { id: 'shoa12', question: 'bazaar =', options: ['bazar', 'targowisko', 'rynek'], correct: 0 },
    ],
    // Sekcja economics - wszystkie trzy poziomy
    'economics-beginners': [
        { id: 'ecob1', question: 'money =', options: ['pieniądze', 'gotówka', 'kapitał'], correct: 0 },
        { id: 'ecob2', question: 'price =', options: ['cena', 'koszt', 'wartość'], correct: 0 },
        { id: 'ecob3', question: 'market =', options: ['rynek', 'targ', 'giełda'], correct: 0 },
        { id: 'ecob4', question: 'buy =', options: ['kupować', 'nabywać', 'zakupy'], correct: 0 },
        { id: 'ecob5', question: 'sell =', options: ['sprzedawać', 'handlować', 'dostarczać'], correct: 0 },
        { id: 'ecob6', question: 'bank =', options: ['bank', 'instytucja', 'skarbiec'], correct: 0 },
        { id: 'ecob7', question: 'loan =', options: ['pożyczka', 'kredyt', 'zastrzyk'], correct: 0 },
        { id: 'ecob8', question: 'debt =', options: ['dług', 'zobowiązanie', 'należność'], correct: 0 },
        { id: 'ecob9', question: 'profit =', options: ['zysk', 'korzyść', 'dochód'], correct: 0 },
        { id: 'ecob10', question: 'loss =', options: ['strata', 'utrata', 'porażka'], correct: 0 },
    ],

    'economics-practice-15': [
        { id: 'ecop1', question: 'economy =', options: ['gospodarka', 'ekonomia', 'oszczędność'], correct: 0 },
        { id: 'ecop2', question: 'inflation =', options: ['inflacja', 'wzrost cen', 'pompowanie'], correct: 0 },
        { id: 'ecop3', question: 'recession =', options: ['recesja', 'kryzys', 'spowolnienie'], correct: 0 },
        { id: 'ecop4', question: 'investment =', options: ['inwestycja', 'lokata', 'wkład'], correct: 0 },
        { id: 'ecop5', question: 'currency =', options: ['waluta', 'pieniądz', 'środek płatniczy'], correct: 0 },
        { id: 'ecop6', question: 'trade =', options: ['handel', 'wymiana', 'transakcja'], correct: 0 },
        { id: 'ecop7', question: 'supply =', options: ['podaż', 'dostawa', 'zaopatrzenie'], correct: 0 },
        { id: 'ecop8', question: 'demand =', options: ['popyt', 'zapotrzebowanie', 'żądanie'], correct: 0 },
        { id: 'ecop9', question: 'budget =', options: ['budżet', 'plan finansowy', 'środki'], correct: 0 },
        { id: 'ecop10', question: 'tax =', options: ['podatek', 'danina', 'opłata'], correct: 0 },
        { id: 'ecop11', question: 'salary =', options: ['wynagrodzenie', 'pensja', 'zapłata'], correct: 0 },
        { id: 'ecop12', question: 'unemployment =', options: ['bezrobocie', 'brak pracy', 'bezczynność'], correct: 0 },
        { id: 'ecop13', question: 'interest =', options: ['odsetki', 'zainteresowanie', 'interes'], correct: 0 },
        { id: 'ecop14', question: 'capital =', options: ['kapitał', 'majątek', 'bogactwo'], correct: 0 },
        { id: 'ecop15', question: 'wealth =', options: ['bogactwo', 'dostatek', 'majątek'], correct: 0 },
    ],

    'economics-advanced-12': [
        { id: 'ecoa1', question: 'macroeconomics =', options: ['makroekonomia', 'gospodarka ogólna', 'ekonomia'], correct: 0 },
        { id: 'ecoa2', question: 'microeconomics =', options: ['mikroekonomia', 'gospodarka szczegółowa', 'ekonomia'], correct: 0 },
        { id: 'ecoa3', question: 'monetary policy =', options: ['polityka monetarna', 'polityka pieniężna', 'zarządzanie pieniądzem'], correct: 0 },
        { id: 'ecoa4', question: 'fiscal policy =', options: ['polityka fiskalna', 'polityka budżetowa', 'polityka podatkowa'], correct: 0 },
        { id: 'ecoa5', question: 'gross domestic product =', options: ['produkt krajowy brutto', 'PKB', 'dochód narodowy'], correct: 0 },
        { id: 'ecoa6', question: 'monopoly =', options: ['monopol', 'wyłączność', 'panowanie'], correct: 0 },
        { id: 'ecoa7', question: 'oligopoly =', options: ['oligopol', 'kilka firm', 'kontrola'], correct: 0 },
        { id: 'ecoa8', question: 'protectionism =', options: ['protekcjonizm', 'ochrona', 'izolacja'], correct: 0 },
        { id: 'ecoa9', question: 'globalization =', options: ['globalizacja', 'unarodowienie', 'integracja światowa'], correct: 0 },
        { id: 'ecoa10', question: 'privatization =', options: ['prywatyzacja', 'uspółdzielczenie', 'przejęcie'], correct: 0 },
        { id: 'ecoa11', question: 'nationalization =', options: ['nacjonalizacja', 'upaństwowienie', 'przejęcie'], correct: 0 },
        { id: 'ecoa12', question: 'stagflation =', options: ['stagflacja', 'stagnacja z inflacją', 'kryzys'], correct: 0 },
    ],

// Sekcja transport - wszystkie trzy poziomy
    'transport-beginners': [
        { id: 'trb1', question: 'car =', options: ['samochód', 'auto', 'pojazd'], correct: 0 },
        { id: 'trb2', question: 'bus =', options: ['autobus', 'autokar', 'pojazd'], correct: 0 },
        { id: 'trb3', question: 'train =', options: ['pociąg', 'kolej', 'transport'], correct: 0 },
        { id: 'trb4', question: 'plane =', options: ['samolot', 'statek powietrzny', 'lot'], correct: 0 },
        { id: 'trb5', question: 'bicycle =', options: ['rower', 'jednoślad', 'pojazd'], correct: 0 },
        { id: 'trb6', question: 'ship =', options: ['statek', 'okręt', 'łodź'], correct: 0 },
        { id: 'trb7', question: 'road =', options: ['droga', 'szosa', 'jezdnia'], correct: 0 },
        { id: 'trb8', question: 'station =', options: ['stacja', 'dworzec', 'przystanek'], correct: 0 },
        { id: 'trb9', question: 'ticket =', options: ['bilet', 'kupon', 'voucher'], correct: 0 },
        { id: 'trb10', question: 'driver =', options: ['kierowca', 'szofer', 'prowadzący'], correct: 0 },
    ],

    'transport-practice-15': [
        { id: 'trp1', question: 'transportation =', options: ['transport', 'przewóz', 'komunikacja'], correct: 0 },
        { id: 'trp2', question: 'vehicle =', options: ['pojazd', 'środek transportu', 'auto'], correct: 0 },
        { id: 'trp3', question: 'commute =', options: ['dojazd do pracy', 'podróż', 'przejazd'], correct: 0 },
        { id: 'trp4', question: 'journey =', options: ['podróż', 'wyprawa', 'droga'], correct: 0 },
        { id: 'trp5', question: 'route =', options: ['trasa', 'droga', 'szlak'], correct: 0 },
        { id: 'trp6', question: 'schedule =', options: ['rozklad', 'harmonogram', 'plan'], correct: 0 },
        { id: 'trp7', question: 'departure =', options: ['odjazd', 'wylot', 'wyjście'], correct: 0 },
        { id: 'trp8', question: 'arrival =', options: ['przyjazd', 'przylot', 'przybycie'], correct: 0 },
        { id: 'trp9', question: 'luggage =', options: ['bagaż', 'ładunek', 'przesyłka'], correct: 0 },
        { id: 'trp10', question: 'passenger =', options: ['pasażer', 'podróżny', 'klient'], correct: 0 },
        { id: 'trp11', question: 'conductor =', options: ['konduktor', 'przewodnik', 'dyrygent'], correct: 0 },
        { id: 'trp12', question: 'platform =', options: ['peron', 'platforma', 'podium'], correct: 0 },
        { id: 'trp13', question: 'terminal =', options: ['terminal', 'dworzec', 'koniec'], correct: 0 },
        { id: 'trp14', question: 'freight =', options: ['ładunek', 'fracht', 'towar'], correct: 0 },
        { id: 'trp15', question: 'logistics =', options: ['logistyka', 'organizacja', 'planowanie'], correct: 0 },
    ],

    'transport-advanced-12': [
        { id: 'tra1', question: 'infrastructure =', options: ['infrastruktura', 'zaplecze', 'baza'], correct: 0 },
        { id: 'tra2', question: 'multimodal =', options: ['wielomodalny', 'różne środki', 'kombinowany'], correct: 0 },
        { id: 'tra3', question: 'intermodal =', options: ['intermodalny', 'międzyśrodkowy', 'kombinowany'], correct: 0 },
        { id: 'tra4', question: 'commuter =', options: ['dojeżdżający', 'pasażer', 'mieszkaniec'], correct: 0 },
        { id: 'tra5', question: 'locomotive =', options: ['lokomotywa', 'silnik', 'napęd'], correct: 0 },
        { id: 'tra6', question: 'aerodynamics =', options: ['aerodynamika', 'opływowość', 'dynamika'], correct: 0 },
        { id: 'tra7', question: 'navigation =', options: ['nawigacja', 'żegluga', 'sterowanie'], correct: 0 },
        { id: 'tra8', question: 'propulsion =', options: ['napęd', 'pęd', 'popychanie'], correct: 0 },
        { id: 'tra9', question: 'transshipment =', options: ['przeładunek', 'przesyłka', 'transport'], correct: 0 },
        { id: 'tra10', question: 'intercity =', options: ['międzymiastowy', 'dalekobieżny', 'krajowy'], correct: 0 },
        { id: 'tra11', question: 'metropolitan =', options: ['miejski', 'metropolitalny', 'wielkomiejski'], correct: 0 },
        { id: 'tra12', question: 'suburban =', options: ['podmiejski', 'przedmieścia', 'miejski'], correct: 0 },
    ],

// Sekcja at-the-airport - wszystkie trzy poziomy
    'airport-beginners': [
        { id: 'airb1', question: 'airport =', options: ['lotnisko', 'port lotniczy', 'lądowisko'], correct: 0 },
        { id: 'airb2', question: 'plane =', options: ['samolot', 'statek powietrzny', 'lot'], correct: 0 },
        { id: 'airb3', question: 'flight =', options: ['lot', 'podróż lotnicza', 'przelot'], correct: 0 },
        { id: 'airb4', question: 'passport =', options: ['paszport', 'dowód', 'dokument'], correct: 0 },
        { id: 'airb5', question: 'ticket =', options: ['bilet', 'kupon', 'voucher'], correct: 0 },
        { id: 'airb6', question: 'luggage =', options: ['bagaż', 'ładunek', 'przesyłka'], correct: 0 },
        { id: 'airb7', question: 'check-in =', options: ['odprawa', 'rejestracja', 'meldujący'], correct: 0 },
        { id: 'airb8', question: 'gate =', options: ['bramka', 'wyjście', 'furtka'], correct: 0 },
        { id: 'airb9', question: 'boarding =', options: ['wejście na pokład', 'wsiadanie', 'załoga'], correct: 0 },
        { id: 'airb10', question: 'security =', options: ['bezpieczeństwo', 'ochrona', 'zabezpieczenie'], correct: 0 },
    ],

    'airport-practice-15': [
        { id: 'airp1', question: 'terminal =', options: ['terminal', 'dworzec', 'koniec'], correct: 0 },
        { id: 'airp2', question: 'departures =', options: ['odloty', 'wyjazdy', 'wyloty'], correct: 0 },
        { id: 'airp3', question: 'arrivals =', options: ['przyloty', 'przyjazdy', 'przybycia'], correct: 0 },
        { id: 'airp4', question: 'customs =', options: ['cło', 'urząd celny', 'opłata'], correct: 0 },
        { id: 'airp5', question: 'immigration =', options: ['imigracja', 'przepływ ludności', 'przyjazd'], correct: 0 },
        { id: 'airp6', question: 'boarding pass =', options: ['karta pokładowa', 'bilet', 'przepustka'], correct: 0 },
        { id: 'airp7', question: 'carry-on =', options: ['bagaż podręczny', 'ręczny', 'przenośny'], correct: 0 },
        { id: 'airp8', question: 'check-in desk =', options: ['stanowisko odprawy', 'recepcja', 'biuro'], correct: 0 },
        { id: 'airp9', question: 'duty-free =', options: ['wolny od cła', 'bezcłowy', 'duty-free'], correct: 0 },
        { id: 'airp10', question: 'layover =', options: ['przesiadka', 'postój', 'przerwa'], correct: 0 },
        { id: 'airp11', question: 'runway =', options: ['pas startowy', 'droga startowa', 'tor'], correct: 0 },
        { id: 'airp12', question: 'tarmac =', options: ['płyta lotniska', 'asfalt', 'nawierzchnia'], correct: 0 },
        { id: 'airp13', question: 'air traffic control =', options: ['kontrola ruchu lotniczego', 'wieża', 'sterowanie'], correct: 0 },
        { id: 'airp14', question: 'jet lag =', options: ['zmęczenie podróżą', 'jet lag', 'dezorientacja'], correct: 0 },
        { id: 'airp15', question: 'visa =', options: ['wiza', 'zezwolenie', 'pozwolenie'], correct: 0 },
    ],

    'airport-advanced-12': [
        { id: 'aira1', question: 'concourse =', options: ['hala główna', 'konkurs', 'zgromadzenie'], correct: 0 },
        { id: 'aira2', question: 'aerodrome =', options: ['lotnisko', 'lądowisko', 'aerodrom'], correct: 0 },
        { id: 'aira3', question: 'airworthiness =', options: ['zdatność do lotu', 'sprawność', 'kondycja'], correct: 0 },
        { id: 'aira4', question: 'preclearance =', options: ['wstępna odprawa', 'przygotowanie', 'czyszczenie'], correct: 0 },
        { id: 'aira5', question: 'frequent flyer =', options: ['często latający', 'lojalny klient', 'pasażer'], correct: 0 },
        { id: 'aira6', question: 'red-eye flight =', options: ['nocny lot', 'czerwone oko', 'późny lot'], correct: 0 },
        { id: 'aira7', question: 'turbulence =', options: ['turbulencje', 'zawirowania', 'niestabilność'], correct: 0 },
        { id: 'aira8', question: 'aviophobia =', options: ['lęk przed lataniem', 'awiofobia', 'strach'], correct: 0 },
        { id: 'aira9', question: 'ground handling =', options: ['obsługa naziemna', 'handel', 'zarządzanie'], correct: 0 },
        { id: 'aira10', question: 'turnaround time =', options: ['czas postoju', 'przerwa', 'odwrócenie'], correct: 0 },
        { id: 'aira11', question: 'hub airport =', options: ['port węzłowy', 'centrum', 'ośrodek'], correct: 0 },
        { id: 'aira12', question: 'codeshare =', options: ['współdzielenie kodów', 'partnerstwo', 'umowa'], correct: 0 },
    ],

// Sekcja at-the-train-station - wszystkie trzy poziomy
    'station-beginners': [
        { id: 'stb1', question: 'train =', options: ['pociąg', 'kolej', 'transport'], correct: 0 },
        { id: 'stb2', question: 'station =', options: ['stacja', 'dworzec', 'przystanek'], correct: 0 },
        { id: 'stb3', question: 'platform =', options: ['peron', 'platforma', 'podium'], correct: 0 },
        { id: 'stb4', question: 'ticket =', options: ['bilet', 'kupon', 'voucher'], correct: 0 },
        { id: 'stb5', question: 'schedule =', options: ['rozklad', 'harmonogram', 'plan'], correct: 0 },
        { id: 'stb6', question: 'passenger =', options: ['pasażer', 'podróżny', 'klient'], correct: 0 },
        { id: 'stb7', question: 'conductor =', options: ['konduktor', 'przewodnik', 'dyrygent'], correct: 0 },
        { id: 'stb8', question: 'departure =', options: ['odjazd', 'wylot', 'wyjście'], correct: 0 },
        { id: 'stb9', question: 'arrival =', options: ['przyjazd', 'przylot', 'przybycie'], correct: 0 },
        { id: 'stb10', question: 'railway =', options: ['kolej', 'tor', 'linia'], correct: 0 },
    ],

    'station-practice-15': [
        { id: 'stp1', question: 'timetable =', options: ['rozklad jazdy', 'harmonogram', 'plan'], correct: 0 },
        { id: 'stp2', question: 'commuter train =', options: ['pociąg podmiejski', 'dojazdowy', 'lokalny'], correct: 0 },
        { id: 'stp3', question: 'express train =', options: ['pociąg ekspresowy', 'szybki', 'bezpośredni'], correct: 0 },
        { id: 'stp4', question: 'locomotive =', options: ['lokomotywa', 'silnik', 'napęd'], correct: 0 },
        { id: 'stp5', question: 'carriage =', options: ['wagon', 'powóz', 'przyczepa'], correct: 0 },
        { id: 'stp6', question: 'compartment =', options: ['przedział', 'pomieszczenie', 'dział'], correct: 0 },
        { id: 'stp7', question: 'buffet car =', options: ['wagon restauracyjny', 'bufet', 'bar'], correct: 0 },
        { id: 'stp8', question: 'sleeping car =', options: ['wagon sypialny', 'sypialnia', 'nocny'], correct: 0 },
        { id: 'stp9', question: 'rail track =', options: ['tor kolejowy', 'szyna', 'trasa'], correct: 0 },
        { id: 'stp10', question: 'level crossing =', options: ['przejazd kolejowy', 'skrzyżowanie', 'przejście'], correct: 0 },
        { id: 'stp11', question: 'signal =', options: ['sygnał', 'znak', 'sygnalizacja'], correct: 0 },
        { id: 'stp12', question: 'delay =', options: ['opóźnienie', 'zwłoka', 'spóźnienie'], correct: 0 },
        { id: 'stp13', question: 'cancellation =', options: ['odwołanie', 'anulowanie', 'zniesienie'], correct: 0 },
        { id: 'stp14', question: 'reservation =', options: ['rezerwacja', 'zastrzeżenie', 'bukowanie'], correct: 0 },
        { id: 'stp15', question: 'intercity =', options: ['międzymiastowy', 'dalekobieżny', 'krajowy'], correct: 0 },
    ],

    'station-advanced-12': [
        { id: 'sta1', question: 'terminus =', options: ['stacja końcowa', 'koniec', 'terminal'], correct: 0 },
        { id: 'sta2', question: 'marshalling yard =', options: ['stacja rozrządowa', 'sortownia', 'plac'], correct: 0 },
        { id: 'sta3', question: 'rolling stock =', options: ['tabor kolejowy', 'wagony', 'sprzęt'], correct: 0 },
        { id: 'sta4', question: 'catenary =', options: ['sieć trakcyjna', 'zawieszenie', 'linia'], correct: 0 },
        { id: 'sta5', question: 'points =', options: ['zwrotnica', 'punkty', 'kierunek'], correct: 0 },
        { id: 'sta6', question: 'turntable =', options: ['obrotnica', 'gramofon', 'platforma'], correct: 0 },
        { id: 'sta7', question: 'feeder line =', options: ['linia dojazdowa', 'zasilająca', 'dodatkowa'], correct: 0 },
        { id: 'sta8', question: 'embarkation =', options: ['zaokrętowanie', 'wejście', 'rozpoczęcie'], correct: 0 },
        { id: 'sta9', question: 'disembarkation =', options: ['wyokrętowanie', 'wyjście', 'zakończenie'], correct: 0 },
        { id: 'sta10', question: 'through train =', options: ['pociąg bezpośredni', 'przelotowy', 'przez'], correct: 0 },
        { id: 'sta11', question: 'shunting =', options: ['manewrowanie', 'przesuwanie', 'sterowanie'], correct: 0 },
        { id: 'sta12', question: 'railway siding =', options: ['bocznica kolejowa', 'odgałęzienie', 'tor boczny'], correct: 0 },
    ],

// Sekcja in-the-taxi - wszystkie trzy poziomy
    'taxi-beginners': [
        { id: 'taxb1', question: 'taxi =', options: ['taksówka', 'taxi', 'środek transportu'], correct: 0 },
        { id: 'taxb2', question: 'driver =', options: ['kierowca', 'szofer', 'prowadzący'], correct: 0 },
        { id: 'taxb3', question: 'passenger =', options: ['pasażer', 'podróżny', 'klient'], correct: 0 },
        { id: 'taxb4', question: 'fare =', options: ['opłata', 'cena przejazdu', 'koszt'], correct: 0 },
        { id: 'taxb5', question: 'meter =', options: ['taksometr', 'licznik', 'miernik'], correct: 0 },
        { id: 'taxb6', question: 'address =', options: ['adres', 'przemówienie', 'wystąpienie'], correct: 0 },
        { id: 'taxb7', question: 'destination =', options: ['cel podróży', 'przeznaczenie', 'miejsce'], correct: 0 },
        { id: 'taxb8', question: 'tip =', options: ['napiwek', 'wskazówka', 'końcówka'], correct: 0 },
        { id: 'taxb9', question: 'change =', options: ['reszta', 'zmiana', 'wymiana'], correct: 0 },
        { id: 'taxb10', question: 'route =', options: ['trasa', 'droga', 'szlak'], correct: 0 },
    ],

    'taxi-practice-15': [
        { id: 'taxp1', question: 'cab =', options: ['taksówka', 'kabina', 'pojazd'], correct: 0 },
        { id: 'taxp2', question: 'ride =', options: ['przejazd', 'jazda', 'przejażdżka'], correct: 0 },
        { id: 'taxp3', question: 'pick up =', options: ['zabrać', 'podnieść', 'odebrać'], correct: 0 },
        { id: 'taxp4', question: 'drop off =', options: ['wysadzić', 'upuścić', 'zostawić'], correct: 0 },
        { id: 'taxp5', question: 'flat rate =', options: ['stawka ryczałtowa', 'stała opłata', 'cena'], correct: 0 },
        { id: 'taxp6', question: 'surcharge =', options: ['dopłata', 'dodatkowa opłata', 'narzut'], correct: 0 },
        { id: 'taxp7', question: 'receipt =', options: ['paragon', 'pokwitowanie', 'potwierdzenie'], correct: 0 },
        { id: 'taxp8', question: 'rush hour =', options: ['godziny szczytu', 'pora natłoku', 'zator'], correct: 0 },
        { id: 'taxp9', question: 'traffic jam =', options: ['korek uliczny', 'zator', 'zatłoczenie'], correct: 0 },
        { id: 'taxp10', question: 'shortcut =', options: ['skrót', 'skrócona droga', 'uproszczenie'], correct: 0 },
        { id: 'taxp11', question: 'detour =', options: ['objazd', 'okrążenie', 'obejście'], correct: 0 },
        { id: 'taxp12', question: 'landmark =', options: ['punkt orientacyjny', 'zabytek', 'znak'], correct: 0 },
        { id: 'taxp13', question: 'intersection =', options: ['skrzyżowanie', 'przecięcie', 'skrzyżowanie dróg'], correct: 0 },
        { id: 'taxp14', question: 'roundabout =', options: ['rondo', 'okrążenie', 'karuzela'], correct: 0 },
        { id: 'taxp15', question: 'one-way street =', options: ['ulica jednokierunkowa', 'jednokierunkowa', 'droga'], correct: 0 },
    ],

    'taxi-advanced-12': [
        { id: 'taxa1', question: 'hackney carriage =', options: ['taksówka', 'powóz', 'pojazd'], correct: 0 },
        { id: 'taxa2', question: 'waybill =', options: ['list przewozowy', 'dokument', 'rachunek'], correct: 0 },
        { id: 'taxa3', question: 'dead mileage =', options: ['przejazd pusty', 'martwy przebieg', 'bez pasażerów'], correct: 0 },
        { id: 'taxa4', question: 'flag fall =', options: ['opłata początkowa', 'opłata podstawowa', 'start'], correct: 0 },
        { id: 'taxa5', question: 'for-hire vehicle =', options: ['pojazd do wynajęcia', 'taksówka', 'środek transportu'], correct: 0 },
        { id: 'taxa6', question: 'taxi stand =', options: ['postój taksówek', 'stojanka', 'miejsce'], correct: 0 },
        { id: 'taxa7', question: 'ride-hailing =', options: ['zamawianie przejazdów', 'aplikacja', 'transport'], correct: 0 },
        { id: 'taxa8', question: 'surge pricing =', options: ['dynamiczne ceny', 'podwyżka cen', 'szczyt'], correct: 0 },
        { id: 'taxa9', question: 'chauffeur =', options: ['szofer', 'kierowca', 'prowadzący'], correct: 0 },
        { id: 'taxa10', question: 'limousine =', options: ['limuzyna', 'długi samochód', 'pojazd'], correct: 0 },
        { id: 'taxa11', question: 'black cab =', options: ['czarna taksówka', 'taksówka', 'pojazd'], correct: 0 },
        { id: 'taxa12', question: 'taximeter =', options: ['taksometr', 'licznik', 'miernik'], correct: 0 },
    ],

// Sekcja asking-for-direction - wszystkie trzy poziomy
    'directions-beginners': [
        { id: 'dirb1', question: 'left =', options: ['lewo', 'pozostało', 'odeszło'], correct: 0 },
        { id: 'dirb2', question: 'right =', options: ['prawo', 'poprawnie', 'dobrze'], correct: 0 },
        { id: 'dirb3', question: 'straight =', options: ['prosto', 'bezpośrednio', 'szczerze'], correct: 0 },
        { id: 'dirb4', question: 'turn =', options: ['skręcić', 'obrócić', 'zmienić'], correct: 0 },
        { id: 'dirb5', question: 'street =', options: ['ulica', 'droga', 'jezdnia'], correct: 0 },
        { id: 'dirb6', question: 'corner =', options: ['róg', 'kąt', 'zakręt'], correct: 0 },
        { id: 'dirb7', question: 'map =', options: ['mapa', 'plan', 'schemat'], correct: 0 },
        { id: 'dirb8', question: 'distance =', options: ['odległość', 'dystans', 'odstęp'], correct: 0 },
        { id: 'dirb9', question: 'near =', options: ['blisko', 'w pobliżu', 'około'], correct: 0 },
        { id: 'dirb10', question: 'far =', options: ['daleko', 'odlegle', 'znacznie'], correct: 0 },
    ],

    'directions-practice-15': [
        { id: 'dirp1', question: 'direction =', options: ['kierunek', 'wskazówka', 'zarządzanie'], correct: 0 },
        { id: 'dirp2', question: 'location =', options: ['lokalizacja', 'miejsce', 'położenie'], correct: 0 },
        { id: 'dirp3', question: 'intersection =', options: ['skrzyżowanie', 'przecięcie', 'skrzyżowanie dróg'], correct: 0 },
        { id: 'dirp4', question: 'crosswalk =', options: ['przejście dla pieszych', 'zebra', 'przejście'], correct: 0 },
        { id: 'dirp5', question: 'traffic light =', options: ['sygnalizacja świetlna', 'światła', 'sygnał'], correct: 0 },
        { id: 'dirp6', question: 'roundabout =', options: ['rondo', 'okrążenie', 'karuzela'], correct: 0 },
        { id: 'dirp7', question: 'bridge =', options: ['most', 'pomost', 'łącznik'], correct: 0 },
        { id: 'dirp8', question: 'tunnel =', options: ['tunel', 'przejazd', 'przejście'], correct: 0 },
        { id: 'dirp9', question: 'highway =', options: ['autostrada', 'szosa', 'droga'], correct: 0 },
        { id: 'dirp10', question: 'boulevard =', options: ['bulwar', 'aleja', 'ulica'], correct: 0 },
        { id: 'dirp11', question: 'avenue =', options: ['aleja', 'avenue', 'ulica'], correct: 0 },
        { id: 'dirp12', question: 'block =', options: ['blok', 'kwartał', 'przeszkoda'], correct: 0 },
        { id: 'dirp13', question: 'landmark =', options: ['punkt orientacyjny', 'zabytek', 'znak'], correct: 0 },
        { id: 'dirp14', question: 'detour =', options: ['objazd', 'okrążenie', 'obejście'], correct: 0 },
        { id: 'dirp15', question: 'shortcut =', options: ['skrót', 'skrócona droga', 'uproszczenie'], correct: 0 },
    ],

    'directions-advanced-12': [
        { id: 'dira1', question: 'cardinal points =', options: ['punkty kardynalne', 'kierunki świata', 'strony'], correct: 0 },
        { id: 'dira2', question: 'topography =', options: ['topografia', 'ukształtowanie terenu', 'rzeźba terenu'], correct: 0 },
        { id: 'dira3', question: 'cartography =', options: ['kartografia', 'tworzenie map', 'mapowanie'], correct: 0 },
        { id: 'dira4', question: 'navigational aid =', options: ['pomoc nawigacyjna', 'wsparcie', 'urządzenie'], correct: 0 },
        { id: 'dira5', question: 'wayfinding =', options: ['nawigacja', 'znajdowanie drogi', 'orientacja'], correct: 0 },
        { id: 'dira6', question: 'bearing =', options: ['azymut', 'łożysko', 'kierunek'], correct: 0 },
        { id: 'dira7', question: 'orienteering =', options: ['bieg na orientację', 'orientacja', 'nawigacja'], correct: 0 },
        { id: 'dira8', question: 'GPS coordinates =', options: ['współrzędne GPS', 'położenie', 'dane'], correct: 0 },
        { id: 'dira9', question: 'cartesian coordinates =', options: ['współrzędne kartezjańskie', 'system', 'układ'], correct: 0 },
        { id: 'dira10', question: 'topological map =', options: ['mapa topologiczna', 'schemat', 'plan'], correct: 0 },
        { id: 'dira11', question: 'isoline =', options: ['izolinia', 'linia jednakowa', 'krzywa'], correct: 0 },
        { id: 'dira12', question: 'contour line =', options: ['linia konturowa', 'poziomicowa', 'kształt'], correct: 0 },
    ],

// Sekcja journey - wszystkie trzy poziomy
    'journey-beginners': [
        { id: 'jourb1', question: 'travel =', options: ['podróżować', 'przemieszczać się', 'jeździć'], correct: 0 },
        { id: 'jourb2', question: 'trip =', options: ['wycieczka', 'podróż', 'wyprawa'], correct: 0 },
        { id: 'jourb3', question: 'journey =', options: ['podróż', 'wyprawa', 'droga'], correct: 0 },
        { id: 'jourb4', question: 'destination =', options: ['cel podróży', 'przeznaczenie', 'miejsce'], correct: 0 },
        { id: 'jourb5', question: 'luggage =', options: ['bagaż', 'ładunek', 'przesyłka'], correct: 0 },
        { id: 'jourb6', question: 'passport =', options: ['paszport', 'dowód', 'dokument'], correct: 0 },
        { id: 'jourb7', question: 'ticket =', options: ['bilet', 'kupon', 'voucher'], correct: 0 },
        { id: 'jourb8', question: 'hotel =', options: ['hotel', 'hostel', 'motel'], correct: 0 },
        { id: 'jourb9', question: 'sightseeing =', options: ['zwiedzanie', 'oglądanie', 'podziwianie'], correct: 0 },
        { id: 'jourb10', question: 'adventure =', options: ['przygoda', 'przygodowość', 'ryzyko'], correct: 0 },
    ],

    'journey-practice-15': [
        { id: 'jourp1', question: 'itinerary =', options: ['plan podróży', 'tras', 'harmonogram'], correct: 0 },
        { id: 'jourp2', question: 'voyage =', options: ['rejs', 'podróż morska', 'wyprawa'], correct: 0 },
        { id: 'jourp3', question: 'expedition =', options: ['ekspedycja', 'wyprawa', 'misja'], correct: 0 },
        { id: 'jourp4', question: 'pilgrimage =', options: ['pielgrzymka', 'podróż duchowa', 'wędrówka'], correct: 0 },
        { id: 'jourp5', question: 'backpacking =', options: ['podróżowanie z plecakiem', 'turystyka', 'wędrówka'], correct: 0 },
        { id: 'jourp6', question: 'souvenir =', options: ['pamiątka', 'suwenir', 'prezent'], correct: 0 },
        { id: 'jourp7', question: 'guidebook =', options: ['przewodnik', 'książka', 'instrukcja'], correct: 0 },
        { id: 'jourp8', question: 'accommodation =', options: ['zakwaterowanie', 'nocleg', 'mieszkanie'], correct: 0 },
        { id: 'jourp9', question: 'boarding pass =', options: ['karta pokładowa', 'bilet', 'przepustka'], correct: 0 },
        { id: 'jourp10', question: 'layover =', options: ['przesiadka', 'postój', 'przerwa'], correct: 0 },
        { id: 'jourp11', question: 'jet lag =', options: ['zmęczenie podróżą', 'jet lag', 'dezorientacja'], correct: 0 },
        { id: 'jourp12', question: 'customs =', options: ['cło', 'urząd celny', 'opłata'], correct: 0 },
        { id: 'jourp13', question: 'visa =', options: ['wiza', 'zezwolenie', 'pozwolenie'], correct: 0 },
        { id: 'jourp14', question: 'currency exchange =', options: ['kantor', 'wymiana walut', 'transakcja'], correct: 0 },
        { id: 'jourp15', question: 'travel insurance =', options: ['ubezpieczenie podróżne', 'ochrona', 'zabezpieczenie'], correct: 0 },
    ],

    'journey-advanced-12': [
        { id: 'joura1', question: 'peregrination =', options: ['wędrówka', 'podróż', 'pielgrzymka'], correct: 0 },
        { id: 'joura2', question: 'sojourn =', options: ['pobyt', 'przebywanie', 'odwiedziny'], correct: 0 },
        { id: 'joura3', question: 'odyssey =', options: ['odyseja', 'długa podróż', 'przygoda'], correct: 0 },
        { id: 'joura4', question: 'itinerant =', options: ['wędrowny', 'podróżujący', 'mobilny'], correct: 0 },
        { id: 'joura5', question: 'nomadic =', options: ['koczowniczy', 'nomadyczny', 'wędrowny'], correct: 0 },
        { id: 'joura6', question: 'wayfarer =', options: ['wędrowiec', 'podróżnik', 'pielgrzym'], correct: 0 },
        { id: 'joura7', question: 'globetrotter =', options: ['globtroter', 'podróżnik', 'odkrywca'], correct: 0 },
        { id: 'joura8', question: 'caravan =', options: ['karawana', 'przyczepa', 'grupa'], correct: 0 },
        { id: 'joura9', question: 'transcontinental =', options: ['transkontynentalny', 'międzykontynentalny', 'daleki'], correct: 0 },
        { id: 'joura10', question: 'circumnavigation =', options: ['opłynięcie', 'żegluga dookoła', 'podróż'], correct: 0 },
        { id: 'joura11', question: 'excursion =', options: ['wycieczka', 'wyprawa', 'podróż'], correct: 0 },
        { id: 'joura12', question: 'jaunt =', options: ['wycieczka', 'przejażdżka', 'wypad'], correct: 0 },
    ],

// Sekcja motorization - wszystkie trzy poziomy
    'motorization-beginners': [
        { id: 'motb1', question: 'car =', options: ['samochód', 'auto', 'pojazd'], correct: 0 },
        { id: 'motb2', question: 'engine =', options: ['silnik', 'maszyna', 'napęd'], correct: 0 },
        { id: 'motb3', question: 'wheel =', options: ['koło', 'kierownica', 'okrąg'], correct: 0 },
        { id: 'motb4', question: 'brake =', options: ['hamulec', 'przerwa', 'zatrzymanie'], correct: 0 },
        { id: 'motb5', question: 'steering wheel =', options: ['kierownica', 'koło sterowe', 'ster'], correct: 0 },
        { id: 'motb6', question: 'gasoline =', options: ['benzyna', 'paliwo', 'gaz'], correct: 0 },
        { id: 'motb7', question: 'driver =', options: ['kierowca', 'szofer', 'prowadzący'], correct: 0 },
        { id: 'motb8', question: 'speed =', options: ['prędkość', 'szybkość', 'tempo'], correct: 0 },
        { id: 'motb9', question: 'road =', options: ['droga', 'szosa', 'jezdnia'], correct: 0 },
        { id: 'motb10', question: 'traffic =', options: ['ruch uliczny', 'handel', 'komunikacja'], correct: 0 },
    ],

    'motorization-practice-15': [
        { id: 'motp1', question: 'vehicle =', options: ['pojazd', 'środek transportu', 'auto'], correct: 0 },
        { id: 'motp2', question: 'automobile =', options: ['automobil', 'samochód', 'pojazd'], correct: 0 },
        { id: 'motp3', question: 'transmission =', options: ['skrzynia biegów', 'przekładnia', 'transmisja'], correct: 0 },
        { id: 'motp4', question: 'suspension =', options: ['zawieszenie', 'zawieszenie', 'zawieszenie'], correct: 0 },
        { id: 'motp5', question: 'exhaust =', options: ['wydech', 'wypust', 'zużycie'], correct: 0 },
        { id: 'motp6', question: 'headlights =', options: ['reflektory', 'światła', 'lampy'], correct: 0 },
        { id: 'motp7', question: 'windshield =', options: ['szyba przednia', 'wiatrochron', 'osłona'], correct: 0 },
        { id: 'motp8', question: 'bumper =', options: ['zderzak', 'bufor', 'amortyzator'], correct: 0 },
        { id: 'motp9', question: 'license plate =', options: ['tablica rejestracyjna', 'numer', 'znak'], correct: 0 },
        { id: 'motp10', question: 'insurance =', options: ['ubezpieczenie', 'zabezpieczenie', 'gwarancja'], correct: 0 },
        { id: 'motp11', question: 'registration =', options: ['rejestracja', 'wpis', 'zapis'], correct: 0 },
        { id: 'motp12', question: 'maintenance =', options: ['konserwacja', 'utrzymanie', 'obsługa'], correct: 0 },
        { id: 'motp13', question: 'mechanic =', options: ['mechanik', 'technik', 'specjalista'], correct: 0 },
        { id: 'motp14', question: 'garage =', options: ['garaż', 'warsztat', 'przechowalnia'], correct: 0 },
        { id: 'motp15', question: 'dealership =', options: ['salon samochodowy', 'diler', 'przedstawiciel'], correct: 0 },
    ],

    'motorization-advanced-12': [
        { id: 'mota1', question: 'chassis =', options: ['podwozie', 'rama', 'konstrukcja'], correct: 0 },
        { id: 'mota2', question: 'carburetor =', options: ['gaźnik', 'mieszalnik', 'urządzenie'], correct: 0 },
        { id: 'mota3', question: 'differential =', options: ['mechanizm różnicowy', 'różnicowy', 'różnica'], correct: 0 },
        { id: 'mota4', question: 'turbocharger =', options: ['turbosprężarka', 'doładowanie', 'sprężarka'], correct: 0 },
        { id: 'mota5', question: 'catalytic converter =', options: ['katalizator', 'przetwornik', 'konwerter'], correct: 0 },
        { id: 'mota6', question: 'ABS =', options: ['system ABS', 'hamowanie', 'zapobieganie'], correct: 0 },
        { id: 'mota7', question: 'ESP =', options: ['system ESP', 'stabilizacja', 'kontrola'], correct: 0 },
        { id: 'mota8', question: 'horsepower =', options: ['koń mechaniczny', 'moc', 'siła'], correct: 0 },
        { id: 'mota9', question: 'torque =', options: ['moment obrotowy', 'skręt', 'siła'], correct: 0 },
        { id: 'mota10', question: 'aerodynamics =', options: ['aerodynamika', 'opływowość', 'dynamika'], correct: 0 },
        { id: 'mota11', question: 'combustion =', options: ['spalanie', 'palenie', 'pożar'], correct: 0 },
        { id: 'mota12', question: 'hybrid =', options: ['hybrydowy', 'mieszany', 'kombinowany'], correct: 0 },
    ],

    'collocations-beginners': [
        {
            id: 'col1',
            question: 'make a decision =',
            options: ['podjąć decyzję', 'zrobić przerwę', 'udzielić rady'],
            correct: 0,
        },
        {
            id: 'col2',
            question: 'take a break =',
            options: ['zrobić przerwę', 'podjąć decyzję', 'dostać pracę'],
            correct: 0,
        },
        {
            id: 'col3',
            question: 'give advice =',
            options: ['udzielić rady', 'rzucić okiem', 'odrabiać lekcje'],
            correct: 0,
        },
        {
            id: 'col4',
            question: 'have a look =',
            options: ['rzucić okiem', 'poczynić postępy', 'wziąć odpowiedzialność'],
            correct: 0,
        },
        {
            id: 'col5',
            question: 'get a job =',
            options: ['dostać pracę', 'zrobić przerwę', 'jeść obiad'],
            correct: 0,
        },
        {
            id: 'col6',
            question: 'do homework =',
            options: ['odrabiać lekcje', 'popełnić błąd', 'robić notatki'],
            correct: 0,
        },
        {
            id: 'col7',
            question: 'make progress =',
            options: ['poczynić postępy', 'wyjaśnić problem', 'wygłosić prezentację'],
            correct: 0,
        },
        {
            id: 'col8',
            question: 'take responsibility =',
            options: ['wziąć odpowiedzialność', 'dać pozwolenie', 'bawić się'],
            correct: 0,
        },
        {
            id: 'col9',
            question: 'give permission =',
            options: ['dać pozwolenie', 'zarabiać pieniądze', 'wziąć prysznic'],
            correct: 0,
        },
        {
            id: 'col10',
            question: 'have dinner =',
            options: ['jeść obiad', 'mieć problem', 'zaprzyjaźnić się'],
            correct: 0,
        },
    ],

    'collocations-practice-15': [
        {
            id: 'colp1',
            question: 'make a mistake =',
            options: ['popełnić błąd', 'robić notatki', 'wygłosić mowę'],
            correct: 0,
        },
        {
            id: 'colp2',
            question: 'take notes =',
            options: ['robić notatki', 'wygłosić prezentację', 'bawić się'],
            correct: 0,
        },
        {
            id: 'colp3',
            question: 'give a presentation =',
            options: ['wygłosić prezentację', 'zarabiać pieniądze', 'wziąć prysznic'],
            correct: 0,
        },
        {
            id: 'colp4',
            question: 'have fun =',
            options: ['bawić się', 'mieć problem', 'zaryzykować'],
            correct: 0,
        },
        {
            id: 'colp5',
            question: 'make money =',
            options: ['zarabiać pieniądze', 'wziąć prysznic', 'wygłosić mowę'],
            correct: 0,
        },
        {
            id: 'colp6',
            question: 'take a shower =',
            options: ['wziąć prysznic', 'mieć na uwadze', 'złapać przeziębienie'],
            correct: 0,
        },
        {
            id: 'colp7',
            question: 'give a speech =',
            options: ['wygłosić mowę', 'ogłosić wiadomość', 'odłączyć'],
            correct: 0,
        },
        {
            id: 'colp8',
            question: 'have a problem =',
            options: ['mieć problem', 'zaprzyjaźnić się', 'zaryzykować'],
            correct: 0,
        },
        {
            id: 'colp9',
            question: 'make friends =',
            options: ['zaprzyjaźnić się', 'mieć na uwadze', 'złapać przeziębienie'],
            correct: 0,
        },
        {
            id: 'colp10',
            question: 'take a chance =',
            options: ['zaryzykować', 'ogłosić wiadomość', 'odłączyć'],
            correct: 0,
        },
        {
            id: 'colp11',
            question: 'keep in mind =',
            options: ['mieć na uwadze', 'zakończyć dzień pracy', 'złapać przeziębienie'],
            correct: 0,
        },
        {
            id: 'colp12',
            question: 'catch a cold =',
            options: ['złapać przeziębienie', 'ogłosić wiadomość', 'odłączyć'],
            correct: 0,
        },
        {
            id: 'colp13',
            question: 'break the news =',
            options: ['ogłosić wiadomość', 'odłączyć', 'zakończyć dzień pracy'],
            correct: 0,
        },
        {
            id: 'colp14',
            question: 'pull the plug =',
            options: ['odłączyć', 'zakończyć dzień pracy', 'złapać przeziębienie'],
            correct: 0,
        },
        {
            id: 'colp15',
            question: 'call it a day =',
            options: ['zakończyć dzień pracy', 'ogłosić wiadomość', 'odłączyć'],
            correct: 0,
        },
    ],

    'collocations-advanced-12': [
        {
            id: 'cola1',
            question: 'come to terms with =',
            options: ['pogodzić się z', 'wziąć pod uwagę', 'wywiązać się z'],
            correct: 0,
        },
        {
            id: 'cola2',
            question: 'take into account =',
            options: ['wziąć pod uwagę', 'wziąć udział', 'dojść do wniosku'],
            correct: 0,
        },
        {
            id: 'cola3',
            question: 'carry out =',
            options: ['przeprowadzić', 'przyjrzeć się', 'wziąć pod uwagę'],
            correct: 0,
        },
        {
            id: 'cola4',
            question: 'look into =',
            options: ['przyjrzeć się', 'dojść do wniosku', 'wziąć udział'],
            correct: 0,
        },
        {
            id: 'cola5',
            question: 'come to a conclusion =',
            options: ['dojść do wniosku', 'pogodzić się z', 'wywiązać się z'],
            correct: 0,
        },
        {
            id: 'cola6',
            question: 'take part in =',
            options: ['wziąć udział', 'przeprowadzić', 'przyjrzeć się'],
            correct: 0,
        },
        {
            id: 'cola7',
            question: 'live up to =',
            options: ['spełnić oczekiwania', 'radzić sobie z', 'stawić czoła'],
            correct: 0,
        },
        {
            id: 'cola8',
            question: 'cope with =',
            options: ['radzić sobie z', 'stawić czoła', 'liczyć na'],
            correct: 0,
        },
        {
            id: 'cola9',
            question: 'face up to =',
            options: ['stawić czoła', 'liczyć na', 'zdać sobie sprawę'],
            correct: 0,
        },
        {
            id: 'cola10',
            question: 'count on =',
            options: ['liczyć na', 'zdać sobie sprawę', 'wziąć pod uwagę'],
            correct: 0,
        },
        {
            id: 'cola11',
            question: 'come to realize =',
            options: ['zdać sobie sprawę', 'pogodzić się z', 'przeprowadzić'],
            correct: 0,
        },
        {
            id: 'cola12',
            question: 'fulfill obligations =',
            options: ['wywiązać się z obowiązków', 'spełnić oczekiwania', 'radzić sobie z'],
            correct: 0,
        },
    ],
    'hospital-beginners': [
        { id: 'hosp1', question: 'hospital =', options: ['szpital', 'przychodnia', 'apteka'], correct: 0 },
        { id: 'hosp2', question: 'doctor =', options: ['lekarz', 'pielęgniarka', 'farmaceuta'], correct: 0 },
        { id: 'hosp3', question: 'nurse =', options: ['pielęgniarka', 'lekarz', 'technik'], correct: 0 },
        { id: 'hosp4', question: 'patient =', options: ['pacjent', 'lekarz', 'gość'], correct: 0 },
        { id: 'hosp5', question: 'medicine =', options: ['lek', 'zastrzyk', 'badanie'], correct: 0 },
        { id: 'hosp6', question: 'appointment =', options: ['wizyta', 'badanie', 'operacja'], correct: 0 },
        { id: 'hosp7', question: 'prescription =', options: ['recepta', 'skierowanie', 'badanie'], correct: 0 },
        { id: 'hosp8', question: 'emergency =', options: ['nagły wypadek', 'badanie', 'wizyta'], correct: 0 },
        { id: 'hosp9', question: 'ward =', options: ['oddział', 'gabinet', 'poczekalnia'], correct: 0 },
        { id: 'hosp10', question: 'surgery =', options: ['operacja', 'badanie', 'zastrzyk'], correct: 0 },
    ],

    'hospital-practice-15': [
        { id: 'hospp1', question: 'emergency room =', options: ['izba przyjęć', 'oddział', 'przychodnia'], correct: 0 },
        { id: 'hospp2', question: 'intensive care =', options: ['oddział intensywnej terapii', 'izba przyjęć', 'przychodnia'], correct: 0 },
        { id: 'hospp3', question: 'operating room =', options: ['sala operacyjna', 'gabinet', 'poczekalnia'], correct: 0 },
        { id: 'hospp4', question: 'waiting room =', options: ['poczekalnia', 'gabinet', 'oddział'], correct: 0 },
        { id: 'hospp5', question: 'injection =', options: ['zastrzyk', 'tabletka', 'maść'], correct: 0 },
        { id: 'hospp6', question: 'bandage =', options: ['bandaż', 'gips', 'plaster'], correct: 0 },
        { id: 'hospp7', question: 'stethoscope =', options: ['stetoskop', 'termometr', 'ciśnieniomierz'], correct: 0 },
        { id: 'hospp8', question: 'thermometer =', options: ['termometr', 'stetoskop', 'waga'], correct: 0 },
        { id: 'hospp9', question: 'wheelchair =', options: ['wózek inwalidzki', 'łóżko', 'nosze'], correct: 0 },
        { id: 'hospp10', question: 'crutches =', options: ['kule', 'wózek', 'balkonik'], correct: 0 },
        { id: 'hospp11', question: 'diagnosis =', options: ['diagnoza', 'leczenie', 'badanie'], correct: 0 },
        { id: 'hospp12', question: 'treatment =', options: ['leczenie', 'badanie', 'diagnoza'], correct: 0 },
        { id: 'hospp13', question: 'recovery =', options: ['powrót do zdrowia', 'leczenie', 'badanie'], correct: 0 },
        { id: 'hospp14', question: 'discharge =', options: ['wypis', 'przyjęcie', 'badanie'], correct: 0 },
        { id: 'hospp15', question: 'ambulance =', options: ['karetka', 'helikopter', 'samochód'], correct: 0 },
    ],

    'hospital-advanced-12': [
        { id: 'hospa1', question: 'anesthesiology =', options: ['anestezjologia', 'chirurgia', 'kardiologia'], correct: 0 },
        { id: 'hospa2', question: 'cardiology =', options: ['kardiologia', 'neurologia', 'ortopedia'], correct: 0 },
        { id: 'hospa3', question: 'neurology =', options: ['neurologia', 'psychiatria', 'dermatologia'], correct: 0 },
        { id: 'hospa4', question: 'orthopedics =', options: ['ortopedia', 'chirurgia', 'okulistyka'], correct: 0 },
        { id: 'hospa5', question: 'pediatrics =', options: ['pediatria', 'geriatria', 'ginekologia'], correct: 0 },
        { id: 'hospa6', question: 'gynecology =', options: ['ginekologia', 'położnictwo', 'urologia'], correct: 0 },
        { id: 'hospa7', question: 'urology =', options: ['urologia', 'nefrologia', 'endokrynologia'], correct: 0 },
        { id: 'hospa8', question: 'dermatology =', options: ['dermatologia', 'wenerologia', 'alergologia'], correct: 0 },
        { id: 'hospa9', question: 'oncology =', options: ['onkologia', 'hematologia', 'immunologia'], correct: 0 },
        { id: 'hospa10', question: 'radiology =', options: ['radiologia', 'tomografia', 'USG'], correct: 0 },
        { id: 'hospa11', question: 'pathology =', options: ['patologia', 'histologia', 'cytologia'], correct: 0 },
        { id: 'hospa12', question: 'phlebotomy =', options: ['flebotomia', 'iniekcja', 'transfuzja'], correct: 0 },
    ],

    'body-practice-15': [
        { id: 'bdp1', question: 'forehead =', options: ['czoło', 'broda', 'skroń'], correct: 0 },
        { id: 'bdp2', question: 'eyebrow =', options: ['brew', 'rzęsa', 'powieka'], correct: 0 },
        { id: 'bdp3', question: 'eyelash =', options: ['rzęsa', 'brew', 'źrenica'], correct: 0 },
        { id: 'bdp4', question: 'pupil =', options: ['źrenica', 'tęczówka', 'gałka oczna'], correct: 0 },
        { id: 'bdp5', question: 'nostril =', options: ['nozdrze', 'podniebienie', 'gardło'], correct: 0 },
        { id: 'bdp6', question: 'chin =', options: ['broda', 'policzek', 'czoło'], correct: 0 },
        { id: 'bdp7', question: 'cheek =', options: ['policzek', 'skroń', 'żuchwa'], correct: 0 },
        { id: 'bdp8', question: 'jaw =', options: ['szczęka', 'gardło', 'szyja'], correct: 0 },
        { id: 'bdp9', question: 'throat =', options: ['gardło', 'krtań', 'przełyk'], correct: 0 },
        { id: 'bdp10', question: 'spine =', options: ['kręgosłup', 'żebro', 'miednica'], correct: 0 },
        { id: 'bdp11', question: 'rib =', options: ['żebro', 'mostek', 'obojczyk'], correct: 0 },
        { id: 'bdp12', question: 'hip =', options: ['biodro', 'udo', 'pośladki'], correct: 0 },
        { id: 'bdp13', question: 'thigh =', options: ['udo', 'łydka', 'kolano'], correct: 0 },
        { id: 'bdp14', question: 'calf =', options: ['łydka', 'udo', 'kostka'], correct: 0 },
        { id: 'bdp15', question: 'heel =', options: ['pięta', 'kostka', 'stopa'], correct: 0 },
    ],

    'body-advanced-12': [
        { id: 'bda1', question: 'temple =', options: ['skroń', 'czoło', 'potylica'], correct: 0 },
        { id: 'bda2', question: 'nape =', options: ['kark', 'szyja', 'gardło'], correct: 0 },
        { id: 'bda3', question: 'collarbone =', options: ['obojczyk', 'mostek', 'żebro'], correct: 0 },
        { id: 'bda4', question: 'sternum =', options: ['mostek', 'żebro', 'obojczyk'], correct: 0 },
        { id: 'bda5', question: 'scapula =', options: ['łopatka', 'kość ramienna', 'obojczyk'], correct: 0 },
        { id: 'bda6', question: 'pelvis =', options: ['miednica', 'kość krzyżowa', 'biodro'], correct: 0 },
        { id: 'bda7', question: 'femur =', options: ['kość udowa', 'piszczel', 'strzałka'], correct: 0 },
        { id: 'bda8', question: 'tibia =', options: ['piszczel', 'strzałka', 'kość udowa'], correct: 0 },
        { id: 'bda9', question: 'fibula =', options: ['strzałka', 'piszczel', 'kość udowa'], correct: 0 },
        { id: 'bda10', question: 'patella =', options: ['rzepka', 'kość piszczelowa', 'kość udowa'], correct: 0 },
        { id: 'bda11', question: 'phalanx =', options: ['paliczek', 'nadgarstek', 'śródręcze'], correct: 0 },
        { id: 'bda12', question: 'metacarpus =', options: ['śródręcze', 'nadgarstek', 'paliczek'], correct: 0 },
    ],

    'disease-beginners': [
        { id: 'dis1', question: 'fever =', options: ['gorączka', 'kaszel', 'katar'], correct: 0 },
        { id: 'dis2', question: 'headache =', options: ['ból głowy', 'ból gardła', 'ból brzucha'], correct: 0 },
        { id: 'dis3', question: 'cough =', options: ['kaszel', 'kichanie', 'katar'], correct: 0 },
        { id: 'dis4', question: 'cold =', options: ['przeziębienie', 'grypa', 'alergia'], correct: 0 },
        { id: 'dis5', question: 'flu =', options: ['grypa', 'przeziębienie', 'zapalenie'], correct: 0 },
        { id: 'dis6', question: 'pain =', options: ['ból', 'swędzenie', 'pieczenie'], correct: 0 },
        { id: 'dis7', question: 'symptom =', options: ['objaw', 'leczenie', 'diagnoza'], correct: 0 },
        { id: 'dis8', question: 'medicine =', options: ['lek', 'zastrzyk', 'badanie'], correct: 0 },
        { id: 'dis9', question: 'doctor =', options: ['lekarz', 'pielęgniarka', 'pacjent'], correct: 0 },
        { id: 'dis10', question: 'hospital =', options: ['szpital', 'przychodnia', 'apteka'], correct: 0 },
    ],

    'disease-practice-15': [
        { id: 'disp1', question: 'sore throat =', options: ['ból gardła', 'chrypka', 'kaszel'], correct: 0 },
        { id: 'disp2', question: 'runny nose =', options: ['katar', 'zatkany nos', 'kichanie'], correct: 0 },
        { id: 'disp3', question: 'sneeze =', options: ['kichanie', 'kaszel', 'katar'], correct: 0 },
        { id: 'disp4', question: 'rash =', options: ['wysypka', 'swędzenie', 'zaczerwienienie'], correct: 0 },
        { id: 'disp5', question: 'allergy =', options: ['alergia', 'infekcja', 'zapalenie'], correct: 0 },
        { id: 'disp6', question: 'infection =', options: ['infekcja', 'alergia', 'zatrucie'], correct: 0 },
        { id: 'disp7', question: 'virus =', options: ['wirus', 'bakteria', 'grzyb'], correct: 0 },
        { id: 'disp8', question: 'bacteria =', options: ['bakteria', 'wirus', 'pasożyt'], correct: 0 },
        { id: 'disp9', question: 'antibiotics =', options: ['antybiotyki', 'witaminy', 'leki przeciwbólowe'], correct: 0 },
        { id: 'disp10', question: 'vaccine =', options: ['szczepionka', 'suplement', 'lek'], correct: 0 },
        { id: 'disp11', question: 'inflammation =', options: ['zapalenie', 'obrzęk', 'zaczerwienienie'], correct: 0 },
        { id: 'disp12', question: 'diagnosis =', options: ['diagnoza', 'leczenie', 'badanie'], correct: 0 },
        { id: 'disp13', question: 'treatment =', options: ['leczenie', 'badanie', 'diagnoza'], correct: 0 },
        { id: 'disp14', question: 'recovery =', options: ['powrót do zdrowia', 'leczenie', 'rehabilitacja'], correct: 0 },
        { id: 'disp15', question: 'prevention =', options: ['zapobieganie', 'leczenie', 'diagnoza'], correct: 0 },
    ],

    'disease-advanced-12': [
        { id: 'disa1', question: 'epidemic =', options: ['epidemia', 'pandemia', 'endemia'], correct: 0 },
        { id: 'disa2', question: 'pandemic =', options: ['pandemia', 'epidemia', 'endemia'], correct: 0 },
        { id: 'disa3', question: 'chronic =', options: ['przewlekły', 'ostry', 'nawracający'], correct: 0 },
        { id: 'disa4', question: 'acute =', options: ['ostry', 'przewlekły', 'podostry'], correct: 0 },
        { id: 'disa5', question: 'contagious =', options: ['zaraźliwy', 'dziedziczny', 'alergiczny'], correct: 0 },
        { id: 'disa6', question: 'immune system =', options: ['system odpornościowy', 'układ krwionośny', 'układ nerwowy'], correct: 0 },
        { id: 'disa7', question: 'pathogen =', options: ['patogen', 'antygen', 'przeciwciało'], correct: 0 },
        { id: 'disa8', question: 'antibody =', options: ['przeciwciało', 'antygen', 'patogen'], correct: 0 },
        { id: 'disa9', question: 'immunity =', options: ['odporność', 'wrażliwość', 'podatność'], correct: 0 },
        { id: 'disa10', question: 'relapse =', options: ['nawrót', 'remisja', 'powikłanie'], correct: 0 },
        { id: 'disa11', question: 'remission =', options: ['remisja', 'nawrót', 'wyleczenie'], correct: 0 },
        { id: 'disa12', question: 'prognosis =', options: ['rokowanie', 'diagnoza', 'leczenie'], correct: 0 },
    ],

    // Ćwiczenia dla sekcji around-sport
    'sport-around-beginners': [
        { id: 'sar1', question: 'stadium =', options: ['stadion', 'boisko', 'hala'], correct: 0 },
        { id: 'sar2', question: 'team =', options: ['drużyna', 'zawodnik', 'trener'], correct: 0 },
        { id: 'sar3', question: 'coach =', options: ['trener', 'zawodnik', 'sędzia'], correct: 0 },
        { id: 'sar4', question: 'player =', options: ['zawodnik', 'kibic', 'trener'], correct: 0 },
        { id: 'sar5', question: 'fan =', options: ['kibic', 'zawodnik', 'trener'], correct: 0 },
        { id: 'sar6', question: 'match =', options: ['mecz', 'trening', 'turniej'], correct: 0 },
        { id: 'sar7', question: 'competition =', options: ['zawody', 'trening', 'mecz'], correct: 0 },
        { id: 'sar8', question: 'victory =', options: ['zwycięstwo', 'porażka', 'remis'], correct: 0 },
        { id: 'sar9', question: 'defeat =', options: ['porażka', 'zwycięstwo', 'remis'], correct: 0 },
        { id: 'sar10', question: 'score =', options: ['wynik', 'punkt', 'gol'], correct: 0 },
    ],

    'sport-around-practice-15': [
        { id: 'sarp1', question: 'referee =', options: ['sędzia', 'trener', 'zawodnik'], correct: 0 },
        { id: 'sarp2', question: 'championship =', options: ['mistrzostwo', 'turniej', 'liga'], correct: 0 },
        { id: 'sarp3', question: 'tournament =', options: ['turniej', 'mecz', 'trening'], correct: 0 },
        { id: 'sarp4', question: 'league =', options: ['liga', 'turniej', 'mistrzostwo'], correct: 0 },
        { id: 'sarp5', question: 'training =', options: ['trening', 'mecz', 'rozgrzewka'], correct: 0 },
        { id: 'sarp6', question: 'warm-up =', options: ['rozgrzewka', 'trening', 'mecz'], correct: 0 },
        { id: 'sarp7', question: 'trophy =', options: ['puchar', 'medal', 'nagroda'], correct: 0 },
        { id: 'sarp8', question: 'medal =', options: ['medal', 'puchar', 'dyplom'], correct: 0 },
        { id: 'sarp9', question: 'record =', options: ['rekord', 'wynik', 'rezultat'], correct: 0 },
        { id: 'sarp10', question: 'strategy =', options: ['strategia', 'taktika', 'plan'], correct: 0 },
        { id: 'sarp11', question: 'tactic =', options: ['taktyka', 'strategia', 'plan'], correct: 0 },
        { id: 'sarp12', question: 'fitness =', options: ['sprawność', 'siła', 'wytrzymałość'], correct: 0 },
        { id: 'sarp13', question: 'performance =', options: ['występ', 'wynik', 'rezultat'], correct: 0 },
        { id: 'sarp14', question: 'spectator =', options: ['widz', 'kibic', 'zawodnik'], correct: 0 },
        { id: 'sarp15', question: 'cheer =', options: ['kibicować', 'grać', 'trenować'], correct: 0 },
    ],

    'sport-around-advanced-12': [
        { id: 'sara1', question: 'endurance =', options: ['wytrzymałość', 'siła', 'szybkość'], correct: 0 },
        { id: 'sara2', question: 'agility =', options: ['zwinność', 'szybkość', 'siła'], correct: 0 },
        { id: 'sara3', question: 'flexibility =', options: ['elastyczność', 'gibkość', 'zwinność'], correct: 0 },
        { id: 'sara4', question: 'stamina =', options: ['kondycja', 'wytrzymałość', 'siła'], correct: 0 },
        { id: 'sara5', question: 'coordination =', options: ['koordynacja', 'równowaga', 'zwinność'], correct: 0 },
        { id: 'sara6', question: 'athleticism =', options: ['atletyzm', 'sprawność', 'kondycja'], correct: 0 },
        { id: 'sara7', question: 'professional =', options: ['zawodowiec', 'amator', 'trener'], correct: 0 },
        { id: 'sara8', question: 'amateur =', options: ['amator', 'zawodowiec', 'trener'], correct: 0 },
        { id: 'sara9', question: 'sponsorship =', options: ['sponsoring', 'finansowanie', 'wsparcie'], correct: 0 },
        { id: 'sara10', question: 'broadcasting =', options: ['transmisja', 'relacja', 'reportaż'], correct: 0 },
        { id: 'sara11', question: 'commentator =', options: ['komentator', 'reporter', 'spiker'], correct: 0 },
        { id: 'sara12', question: 'sportsmanship =', options: ['sportowa postawa', 'fair play', 'rywalizacja'], correct: 0 },
    ],

    'sport-practice-15': [
        { id: 'spp1', question: 'volleyball =', options: ['siatkówka', 'koszykówka', 'piłka nożna'], correct: 0 },
        { id: 'spp2', question: 'handball =', options: ['piłka ręczna', 'siatkówka', 'koszykówka'], correct: 0 },
        { id: 'spp3', question: 'hockey =', options: ['hokej', 'łyżwiarstwo', 'curling'], correct: 0 },
        { id: 'spp4', question: 'skiing =', options: ['narciarstwo', 'snowboard', 'łyżwiarstwo'], correct: 0 },
        { id: 'spp5', question: 'gymnastics =', options: ['gimnastyka', 'akrobatyka', 'joga'], correct: 0 },
        { id: 'spp6', question: 'boxing =', options: ['boks', 'zapasy', 'juda'], correct: 0 },
        { id: 'spp7', question: 'wrestling =', options: ['zapasy', 'boks', 'karate'], correct: 0 },
        { id: 'spp8', question: 'athletics =', options: ['lekkoatletyka', 'gimnastyka', 'pływanie'], correct: 0 },
        { id: 'spp9', question: 'marathon =', options: ['maraton', 'sprint', 'bieg'], correct: 0 },
        { id: 'spp10', question: 'sprint =', options: ['sprint', 'maraton', 'bieg'], correct: 0 },
        { id: 'spp11', question: 'diving =', options: ['nurkowanie', 'pływanie', 'skoki'], correct: 0 },
        { id: 'spp12', question: 'sailing =', options: ['żeglarstwo', 'wioślarstwo', 'kajakarstwo'], correct: 0 },
        { id: 'spp13', question: 'rowing =', options: ['wioślarstwo', 'żeglarstwo', 'kajakarstwo'], correct: 0 },
        { id: 'spp14', question: 'climbing =', options: ['wspinaczka', 'skakanie', 'bieganie'], correct: 0 },
        { id: 'spp15', question: 'surfing =', options: ['surfing', 'żeglarstwo', 'windsurfing'], correct: 0 },
    ],

    'sport-advanced-12': [
        { id: 'spa1', question: 'pentathlon =', options: ['pięciobój', 'dziesięciobój', 'trójbój'], correct: 0 },
        { id: 'spa2', question: 'decathlon =', options: ['dziesięciobój', 'pięciobój', 'trójbój'], correct: 0 },
        { id: 'spa3', question: 'triathlon =', options: ['trójbój', 'pięciobój', 'dziesięciobój'], correct: 0 },
        { id: 'spa4', question: 'paralympics =', options: ['paraolimpiada', 'olimpiada', 'mistrzostwa'], correct: 0 },
        { id: 'spa5', question: 'biathlon =', options: ['biathlon', 'triathlon', 'pentathlon'], correct: 0 },
        { id: 'spa6', question: 'heptathlon =', options: ['siedmiobój', 'pięciobój', 'dziesięciobój'], correct: 0 },
        { id: 'spa7', question: 'windsurfing =', options: ['windsurfing', 'surfing', 'kitesurfing'], correct: 0 },
        { id: 'spa8', question: 'kitesurfing =', options: ['kitesurfing', 'windsurfing', 'surfing'], correct: 0 },
        { id: 'spa9', question: 'snowboarding =', options: ['snowboard', 'narciarstwo', 'łyżwiarstwo'], correct: 0 },
        { id: 'spa10', question: 'fencing =', options: ['szermierka', 'boks', 'zapasy'], correct: 0 },
        { id: 'spa11', question: 'archery =', options: ['łucznictwo', 'strzelectwo', 'rzut oszczepem'], correct: 0 },
        { id: 'spa12', question: 'equestrian =', options: ['jeździectwo', 'wożenie', 'rajdy'], correct: 0 },
    ],

    'media-beginners': [
        { id: 'med1', question: 'newspaper =', options: ['gazeta', 'magazyn', 'książka'], correct: 0 },
        { id: 'med2', question: 'television =', options: ['telewizja', 'radio', 'internet'], correct: 0 },
        { id: 'med3', question: 'radio =', options: ['radio', 'telewizja', 'prasa'], correct: 0 },
        { id: 'med4', question: 'news =', options: ['wiadomości', 'rozrywka', 'sport'], correct: 0 },
        { id: 'med5', question: 'journalist =', options: ['dziennikarz', 'reporter', 'prezenter'], correct: 0 },
        { id: 'med6', question: 'reporter =', options: ['reporter', 'dziennikarz', 'korespondent'], correct: 0 },
        { id: 'med7', question: 'article =', options: ['artykuł', 'reportaż', 'wywiad'], correct: 0 },
        { id: 'med8', question: 'interview =', options: ['wywiad', 'artykuł', 'reportaż'], correct: 0 },
        { id: 'med9', question: 'channel =', options: ['kanał', 'stacja', 'program'], correct: 0 },
        { id: 'med10', question: 'program =', options: ['program', 'audycja', 'emisja'], correct: 0 },
    ],

    'media-practice-15': [
        { id: 'medp1', question: 'broadcast =', options: ['transmisja', 'emisja', 'audycja'], correct: 0 },
        { id: 'medp2', question: 'headline =', options: ['nagłówek', 'tytuł', 'podtytuł'], correct: 0 },
        { id: 'medp3', question: 'press =', options: ['prasa', 'media', 'dziennikarstwo'], correct: 0 },
        { id: 'medp4', question: 'media =', options: ['media', 'prasa', 'telewizja'], correct: 0 },
        { id: 'medp5', question: 'coverage =', options: ['relacja', 'reportaż', 'sprawozdanie'], correct: 0 },
        { id: 'medp6', question: 'editor =', options: ['redaktor', 'dziennikarz', 'korektor'], correct: 0 },
        { id: 'medp7', question: 'publisher =', options: ['wydawca', 'redaktor', 'drukarnia'], correct: 0 },
        { id: 'medp8', question: 'circulation =', options: ['nakład', 'sprzedaż', 'dystrybucja'], correct: 0 },
        { id: 'medp9', question: 'advertisement =', options: ['reklama', 'ogłoszenie', 'spot'], correct: 0 },
        { id: 'medp10', question: 'commercial =', options: ['reklama', 'program', 'audycja'], correct: 0 },
        { id: 'medp11', question: 'audience =', options: ['publiczność', 'widownia', 'słuchacze'], correct: 0 },
        { id: 'medp12', question: 'ratings =', options: ['oglądalność', 'popularność', 'wyniki'], correct: 0 },
        { id: 'medp13', question: 'live =', options: ['na żywo', 'nagrany', 'opóźniony'], correct: 0 },
        { id: 'medp14', question: 'breaking news =', options: ['najnowsze wiadomości', 'wiadomości', 'raport'], correct: 0 },
        { id: 'medp15', question: 'column =', options: ['kolumna', 'artykuł', 'rubryka'], correct: 0 },
    ],

    'media-advanced-12': [
        { id: 'meda1', question: 'broadcasting =', options: ['nadawanie', 'transmisja', 'emisja'], correct: 0 },
        { id: 'meda2', question: 'journalism =', options: ['dziennikarstwo', 'reportaż', 'publicystyka'], correct: 0 },
        { id: 'meda3', question: 'editorial =', options: ['artykuł wstępny', 'komentarz', 'felieton'], correct: 0 },
        { id: 'meda4', question: 'correspondent =', options: ['korespondent', 'reporter', 'dziennikarz'], correct: 0 },
        { id: 'meda5', question: 'anchor =', options: ['prezenter', 'spiker', 'gospodarz'], correct: 0 },
        { id: 'meda6', question: 'tabloid =', options: ['tabloid', 'brukowiec', 'gazeta'], correct: 0 },
        { id: 'meda7', question: 'broadsheet =', options: ['gazeta poważna', 'tabloid', 'magazyn'], correct: 0 },
        { id: 'meda8', question: 'censorship =', options: ['cenzura', 'kontrola', 'regulacja'], correct: 0 },
        { id: 'meda9', question: 'propaganda =', options: ['propaganda', 'agitacja', 'reklama'], correct: 0 },
        { id: 'meda10', question: 'sensationalism =', options: ['sensacjonalizm', 'dramatyzacja', 'przesada'], correct: 0 },
        { id: 'meda11', question: 'investigative =', options: ['śledczy', 'dochodzeniowy', 'badawczy'], correct: 0 },
        { id: 'meda12', question: 'freelance =', options: ['wolny strzelec', 'etatowy', 'kontraktowy'], correct: 0 },
    ],

    'art-beginners': [
        { id: 'art1', question: 'painting =', options: ['malarstwo', 'rysunek', 'grafika'], correct: 0 },
        { id: 'art2', question: 'drawing =', options: ['rysunek', 'malarstwo', 'szkic'], correct: 0 },
        { id: 'art3', question: 'sculpture =', options: ['rzeźba', 'płaskorzeźba', 'instalacja'], correct: 0 },
        { id: 'art4', question: 'artist =', options: ['artysta', 'malarz', 'rzeźbiarz'], correct: 0 },
        { id: 'art5', question: 'museum =', options: ['muzeum', 'galeria', 'wystawa'], correct: 0 },
        { id: 'art6', question: 'gallery =', options: ['galeria', 'muzeum', 'sala'], correct: 0 },
        { id: 'art7', question: 'exhibition =', options: ['wystawa', 'pokaz', 'prezentacja'], correct: 0 },
        { id: 'art8', question: 'brush =', options: ['pędzel', 'szpachla', 'dłuto'], correct: 0 },
        { id: 'art9', question: 'canvas =', options: ['płótno', 'papier', 'deska'], correct: 0 },
        { id: 'art10', question: 'color =', options: ['kolor', 'barwa', 'odcień'], correct: 0 },
    ],

    'art-practice-15': [
        { id: 'artp1', question: 'sketch =', options: ['szkic', 'rysunek', 'projekt'], correct: 0 },
        { id: 'artp2', question: 'portrait =', options: ['portret', 'pejzaż', 'martwa natura'], correct: 0 },
        { id: 'artp3', question: 'landscape =', options: ['pejzaż', 'portret', 'martwa natura'], correct: 0 },
        { id: 'artp4', question: 'still life =', options: ['martwa natura', 'pejzaż', 'portret'], correct: 0 },
        { id: 'artp5', question: 'abstract =', options: ['abstrakcyjny', 'realistyczny', 'impresjonistyczny'], correct: 0 },
        { id: 'artp6', question: 'realism =', options: ['realizm', 'abstrakcja', 'impresjonizm'], correct: 0 },
        { id: 'artp7', question: 'impressionism =', options: ['impresjonizm', 'ekspresjonizm', 'kubizm'], correct: 0 },
        { id: 'artp8', question: 'modern art =', options: ['sztuka nowoczesna', 'sztuka współczesna', 'sztuka klasyczna'], correct: 0 },
        { id: 'artp9', question: 'contemporary =', options: ['współczesny', 'nowoczesny', 'klasyczny'], correct: 0 },
        { id: 'artp10', question: 'masterpiece =', options: ['arcydzieło', 'dzieło', 'praca'], correct: 0 },
        { id: 'artp11', question: 'palette =', options: ['paleta', 'pędzel', 'sztaluga'], correct: 0 },
        { id: 'artp12', question: 'easel =', options: ['sztaluga', 'płótno', 'paleta'], correct: 0 },
        { id: 'artp13', question: 'frame =', options: ['rama', 'oprawa', 'obraz'], correct: 0 },
        { id: 'artp14', question: 'curator =', options: ['kurator', 'artysta', 'krytyk'], correct: 0 },
        { id: 'artp15', question: 'critic =', options: ['krytyk', 'kurator', 'artysta'], correct: 0 },
    ],

    'art-advanced-12': [
        { id: 'arta1', question: 'aesthetics =', options: ['estetyka', 'filozofia', 'teoria'], correct: 0 },
        { id: 'arta2', question: 'composition =', options: ['kompozycja', 'struktura', 'forma'], correct: 0 },
        { id: 'arta3', question: 'perspective =', options: ['perspektywa', 'proporcja', 'skala'], correct: 0 },
        { id: 'arta4', question: 'chiaroscuro =', options: ['chiaroscuro', 'sfumato', 'impast'], correct: 0 },
        { id: 'arta5', question: 'sfumato =', options: ['sfumato', 'chiaroscuro', 'impast'], correct: 0 },
        { id: 'arta6', question: 'impasto =', options: ['impast', 'laserunek', 'gwasz'], correct: 0 },
        { id: 'arta7', question: 'gouache =', options: ['gwasz', 'akwarela', 'tempera'], correct: 0 },
        { id: 'arta8', question: 'watercolor =', options: ['akwarela', 'gwasz', 'olej'], correct: 0 },
        { id: 'arta9', question: 'oil painting =', options: ['malarstwo olejne', 'akwarela', 'tempera'], correct: 0 },
        { id: 'arta10', question: 'fresco =', options: ['fresk', 'mozaika', 'witraz'], correct: 0 },
        { id: 'arta11', question: 'mosaic =', options: ['mozaika', 'fresk', 'witraz'], correct: 0 },
        { id: 'arta12', question: 'installation =', options: ['instalacja', 'asamblaż', 'kolaż'], correct: 0 },
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
        if (Object.keys(answers).length === questions.length) {
            saveScore(topicId, scorePercent)
        }
    }

    return (
        <div className="exercise">
            <div className="exercise__info">
                <h3>Ćwiczenia: {
                    TOPICS['podstawowe-zwroty']?.find(t => t.id === topicId)?.title ||
                    TOPICS.clothes?.find(t => t.id === topicId)?.title ||
                    TOPICS.emotions?.find(t => t.id === topicId)?.title ||
                    TOPICS['podstawowe-czasowniki']?.find(t => t.id === topicId)?.title ||
                    TOPICS['phrasal-verbs']?.find(t => t.id === topicId)?.title ||
                    TOPICS.food?.find(t => t.id === topicId)?.title ||
                    TOPICS.house?.find(t => t.id === topicId)?.title ||
                    TOPICS.work?.find(t => t.id === topicId)?.title ||
                    TOPICS.travel?.find(t => t.id === topicId)?.title ||
                    TOPICS.health?.find(t => t.id === topicId)?.title
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

export default function ThematicVocabularyExercises() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const { lang } = useLanguage()
    const active = section ?? 'podstawowe-zwroty'
    const topicId = searchParams.get('topic')
    const basePath = `/cwiczenia/slownictwo/slownik-tematyczny/${active}`

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
                    <h2>Ćwiczenia: Słownik tematyczny</h2>
                    <p className="muted">Rozbuduj swoje słownictwo w różnych kategoriach tematycznych</p>
                </header>

                <nav className="subnav" aria-label="Podstrony ćwiczeń: Słownik tematyczny">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/cwiczenia/slownictwo/slownik-tematyczny/${s.id}`}
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
                                <h3>Rozbuduj swoje słownictwo! 📚</h3>
                                <p>Wybierz kategorię tematyczną, aby poszerzyć swój zasób słów w języku angielskim.
                                    Od podstawowych zwrotów po zaawansowane słownictwo specjalistyczne.</p>
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
                                        TOPICS['podstawowe-zwroty']?.find(t => t.id === topicId)?.title ||
                                        TOPICS.clothes?.find(t => t.id === topicId)?.title ||
                                        TOPICS.emotions?.find(t => t.id === topicId)?.title ||
                                        TOPICS['podstawowe-czasowniki']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['phrasal-verbs']?.find(t => t.id === topicId)?.title ||
                                        TOPICS.food?.find(t => t.id === topicId)?.title ||
                                        TOPICS.house?.find(t => t.id === topicId)?.title ||
                                        TOPICS.work?.find(t => t.id === topicId)?.title ||
                                        TOPICS.travel?.find(t => t.id === topicId)?.title ||
                                        TOPICS.health?.find(t => t.id === topicId)?.title
                                    }</h3>
                                    <p className="muted">{
                                        TOPICS['podstawowe-zwroty']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS.clothes?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS.emotions?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['podstawowe-czasowniki']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['phrasal-verbs']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS.food?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS.house?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS.work?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS.travel?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS.health?.find(t => t.id === topicId)?.excerpt
                                    }</p>
                                </div>
                            </div>

                            <Quiz topicId={topicId} />

                            <div className="exercise-tips">
                                <h4>💡 Wskazówki do nauki słownictwa</h4>
                                <div className="tips-grid">
                                    <div className="tip">
                                        <h5>Ucz się w kontekście</h5>
                                        <p>Łącz nowe słowa z konkretnymi sytuacjami i zdaniami</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Używaj fiszek</h5>
                                        <p>Twórz fiszki z angielskim słowem z jednej strony i tłumaczeniem z drugiej</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Powtarzaj regularnie</h5>
                                        <p>Systematyczne powtórki są kluczowe dla zapamiętywania</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Grupuj tematycznie</h5>
                                        <p>Ucz się słówek w grupach tematycznych dla lepszego skojarzenia</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Używaj w praktyce</h5>
                                        <p>Staraj się używać nowych słów w rozmowie lub pisaniu</p>
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
                            <h4>📚 Strategie nauki słownictwa</h4>
                            <div className="resources-grid">
                                <div className="resource">
                                    <h5>Metoda spaced repetition</h5>
                                    <p>Powtarzaj materiał w coraz dłuższych odstępach czasu</p>
                                </div>
                                <div className="resource">
                                    <h5>Mapy myśli</h5>
                                    <p>Twórz wizualne reprezentacje powiązanych słówek</p>
                                </div>
                                <div className="resource">
                                    <h5>Kontekstowe uczenie</h5>
                                    <p>Czytaj i słuchaj autentycznych materiałów w języku angielskim</p>
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
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .resource {
          padding: 1.5rem;
          background: var(--color-background-secondary);
          border-radius: 8px;
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
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
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
            'podstawowe-zwroty': 'Ćwiczenia: Podstawowe zwroty angielskie',
            'clothes': 'Ćwiczenia: Słownictwo - Ubrania',
            'appearance': 'Ćwiczenia: Słownictwo - Wygląd',
            'emotions': 'Ćwiczenia: Słownictwo - Emocje',
            'house': 'Ćwiczenia: Słownictwo - Dom',
            'home-furnishings': 'Ćwiczenia: Słownictwo - Wyposażenie domu',
            'school': 'Ćwiczenia: Słownictwo - Szkoła',
            'school-life': 'Ćwiczenia: Słownictwo - Życie szkolne',
            'professions': 'Ćwiczenia: Słownictwo - Zawody',
            'podstawowe-czasowniki': 'Ćwiczenia: Podstawowe czasowniki',
            'phrasal-verbs': 'Ćwiczenia: Czasowniki frazowe',
            'podstawowe-przymiotniki': 'Ćwiczenia: Podstawowe przymiotniki',
            'at-work': 'Ćwiczenia: Słownictwo - W pracy',
            'life-family': 'Ćwiczenia: Słownictwo - Życie i rodzina',
            'everyday-life': 'Ćwiczenia: Słownictwo - Codzienne życie',
            'podstawowe-przysłówki': 'Ćwiczenia: Podstawowe przysłówki',
            'free-time': 'Ćwiczenia: Słownictwo - Czas wolny',
            'horticulture': 'Ćwiczenia: Słownictwo - Ogrodnictwo',
            'entertainment': 'Ćwiczenia: Słownictwo - Rozrywka',
            'nutrition': 'Ćwiczenia: Słownictwo - Odżywianie',
            'arond-food': 'Ćwiczenia: Słownictwo - Wokół jedzenia',
            'stores': 'Ćwiczenia: Słownictwo - Sklepy',
            'shopping': 'Ćwiczenia: Słownictwo - Zakupy',
            'economics': 'Ćwiczenia: Słownictwo - Ekonomia',
            'transport': 'Ćwiczenia: Słownictwo - Transport',
            'at-the-airport': 'Ćwiczenia: Słownictwo - Na lotnisku',
            'at-the-train-station': 'Ćwiczenia: Słownictwo - Na dworcu',
            'in-the-taxi': 'Ćwiczenia: Słownictwo - W taksówce',
            'asking-for-direction': 'Ćwiczenia: Słownictwo - Pytanie o drogę',
            'journey': 'Ćwiczenia: Słownictwo - Podróż',
            'motorization': 'Ćwiczenia: Słownictwo - Motoryzacja',
            'art': 'Ćwiczenia: Słownictwo - Sztuka',
            'public-media': 'Ćwiczenia: Słownictwo - Media',
            'sport': 'Ćwiczenia: Słownictwo - Sport',
            'around-sport': 'Ćwiczenia: Słownictwo - Wokół sportu',
            'disease': 'Ćwiczenia: Słownictwo - Choroby',
            'collocations': 'Ćwiczenia: Kolokacje angielskie',
            'body-parts': 'Ćwiczenia: Słownictwo - Części ciała',
            'in-the-hospital': 'Ćwiczenia: Słownictwo - W szpitalu',
            'information-technologies': 'Ćwiczenia: Słownictwo - Technologie informacyjne',
            'natural-science': 'Ćwiczenia: Słownictwo - Nauki przyrodnicze',
            'mathematics': 'Ćwiczenia: Słownictwo - Matematyka',
            'chemistry': 'Ćwiczenia: Słownictwo - Chemia',
            'geography': 'Ćwiczenia: Słownictwo - Geografia',
            'weather': 'Ćwiczenia: Słownictwo - Pogoda',
            'plants': 'Ćwiczenia: Słownictwo - Rośliny',
            'animals': 'Ćwiczenia: Słownictwo - Zwierzęta',
            'mammals': 'Ćwiczenia: Słownictwo - Ssaki',
            'state-and-society': 'Ćwiczenia: Słownictwo - Państwo i społeczeństwo',
            'misfortunes': 'Ćwiczenia: Słownictwo - Nieszczęścia',
            'offenses': 'Ćwiczenia: Słownictwo - Wykroczenia',
            'problems-and-conflicts': 'Ćwiczenia: Słownictwo - Problemy i konflikty'
        },
        en: {
            'podstawowe-zwroty': 'Exercises: Basic English Phrases',
            'clothes': 'Exercises: Vocabulary - Clothes',
            'appearance': 'Exercises: Vocabulary - Appearance',
            'emotions': 'Exercises: Vocabulary - Emotions',
            'house': 'Exercises: Vocabulary - House',
            'home-furnishings': 'Exercises: Vocabulary - Home Furnishings',
            'school': 'Exercises: Vocabulary - School',
            'school-life': 'Exercises: Vocabulary - School Life',
            'professions': 'Exercises: Vocabulary - Professions',
            'podstawowe-czasowniki': 'Exercises: Basic Verbs',
            'phrasal-verbs': 'Exercises: Phrasal Verbs',
            'podstawowe-przymiotniki': 'Exercises: Basic Adjectives',
            'at-work': 'Exercises: Vocabulary - At Work',
            'life-family': 'Exercises: Vocabulary - Life & Family',
            'everyday-life': 'Exercises: Vocabulary - Everyday Life',
            'podstawowe-przysłówki': 'Exercises: Basic Adverbs',
            'free-time': 'Exercises: Vocabulary - Free Time',
            'horticulture': 'Exercises: Vocabulary - Horticulture',
            'entertainment': 'Exercises: Vocabulary - Entertainment',
            'nutrition': 'Exercises: Vocabulary - Nutrition',
            'arond-food': 'Exercises: Vocabulary - Around Food',
            'stores': 'Exercises: Vocabulary - Stores',
            'shopping': 'Exercises: Vocabulary - Shopping',
            'economics': 'Exercises: Vocabulary - Economics',
            'transport': 'Exercises: Vocabulary - Transport',
            'at-the-airport': 'Exercises: Vocabulary - At the Airport',
            'at-the-train-station': 'Exercises: Vocabulary - At the Train Station',
            'in-the-taxi': 'Exercises: Vocabulary - In the Taxi',
            'asking-for-direction': 'Exercises: Vocabulary - Asking for Direction',
            'journey': 'Exercises: Vocabulary - Journey',
            'motorization': 'Exercises: Vocabulary - Motorization',
            'art': 'Exercises: Vocabulary - Art',
            'public-media': 'Exercises: Vocabulary - Public Media',
            'sport': 'Exercises: Vocabulary - Sport',
            'around-sport': 'Exercises: Vocabulary - Around Sport',
            'disease': 'Exercises: Vocabulary - Disease',
            'collocations': 'Exercises: English Collocations',
            'body-parts': 'Exercises: Vocabulary - Body Parts',
            'in-the-hospital': 'Exercises: Vocabulary - In the Hospital',
            'information-technologies': 'Exercises: Vocabulary - Information Technologies',
            'natural-science': 'Exercises: Vocabulary - Natural Science',
            'mathematics': 'Exercises: Vocabulary - Mathematics',
            'chemistry': 'Exercises: Vocabulary - Chemistry',
            'geography': 'Exercises: Vocabulary - Geography',
            'weather': 'Exercises: Vocabulary - Weather',
            'plants': 'Exercises: Vocabulary - Plants',
            'animals': 'Exercises: Vocabulary - Animals',
            'mammals': 'Exercises: Vocabulary - Mammals',
            'state-and-society': 'Exercises: Vocabulary - State and Society',
            'misfortunes': 'Exercises: Vocabulary - Misfortunes',
            'offenses': 'Exercises: Vocabulary - Offenses',
            'problems-and-conflicts': 'Exercises: Vocabulary - Problems and Conflicts'
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
            'podstawowe-zwroty': 'Interaktywne ćwiczenia z podstawowych zwrotów angielskich. Testy i quizy z powitań, pożegnań, podziękowań.',
            'clothes': 'Ćwiczenia ze słownictwa związanego z ubraniami. Testy online z nazwami ubrań, materiałów i stylów.',
            'appearance': 'Ćwiczenia ze słownictwa opisującego wygląd. Testy online z cechami fizycznymi i wyglądem zewnętrznym.',
            'emotions': 'Ćwiczenia ze słownictwa emocji i uczuć. Testy online z nazwami emocji i stanów psychicznych.',
            'house': 'Ćwiczenia ze słownictwa związanego z domem. Testy online z pomieszczeniami i elementami domu.',
            // ... (dodaj opisy dla pozostałych sekcji)
        },
        en: {
            'podstawowe-zwroty': 'Interactive exercises with basic English phrases. Tests and quizzes with greetings, farewells, thanks.',
            'clothes': 'Exercises with clothing vocabulary. Online tests with clothes names, materials and styles.',
            'appearance': 'Exercises with appearance description vocabulary. Online tests with physical features and external appearance.',
            'emotions': 'Exercises with emotions and feelings vocabulary. Online tests with emotion names and mental states.',
            'house': 'Exercises with house-related vocabulary. Online tests with rooms and house elements.',
            // ... (dodaj opisy dla pozostałych sekcji)
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
        ? `https://angloboost.pl/pl/cwiczenia/slownictwo/slownik-tematyczny/${activeSection}`
        : `https://angloboost.pl/en/exercises/vocabulary/thematic-vocabulary/${activeSection}`

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
        'basic-phrases-beginners': 'Basic Phrases - Beginners',
        'basic-phrases-practice-15': 'Basic Phrases - Practice',
        'basic-phrases-advanced-12': 'Basic Phrases - Advanced',
        'clothes-beginners': 'Clothes - Beginners',
        'clothes-practice-15': 'Clothes - Practice',
        'clothes-advanced-12': 'Clothes - Advanced',
        // ... (dodaj tłumaczenia dla wszystkich topicId)
    }
    return englishTitles[topicId] || 'English Vocabulary Exercises'
}

function getEnglishTopicExcerpt(topicId) {
    const englishExcerpts = {
        'basic-phrases-beginners': 'Most important expressions to start with - greetings, farewells, thanks.',
        'basic-phrases-practice-15': '15 practical questions with everyday expressions.',
        'basic-phrases-advanced-12': '12 more difficult questions with formal phrases.',
        'clothes-beginners': 'Basic vocabulary related to clothing and accessories.',
        'clothes-practice-15': '15 practical questions with various clothing items.',
        'clothes-advanced-12': '12 more difficult questions with materials and styles.',
        // ... (dodaj tłumaczenia dla wszystkich topicId)
    }
    return englishExcerpts[topicId] || 'English vocabulary exercises with examples.'
}