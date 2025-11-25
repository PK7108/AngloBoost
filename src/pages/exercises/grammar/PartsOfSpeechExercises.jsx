import React, { useMemo, useState, useEffect } from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import { useLanguage } from '../../../context/LanguageContext.jsx'
import useDocumentMeta from '../../../useDocumentMeta'
import '../../../styles/topic-cards.css'
import { useExerciseScores } from '../useExerciseScores'

const sections = [
    { id: 'przedimki', label: 'Przedimki' },
    { id: 'rzeczowniki', label: 'Rzeczowniki' },
    { id: 'czasowniki', label: 'Czasowniki' },
    { id: 'przymiotniki', label: 'Przymiotniki' },
    { id: 'przyslowki', label: 'Przysłówki' },
    { id: 'zaimki', label: 'Zaimki' },
    { id: 'spojniki', label: 'Spójniki' },
    { id: 'liczebniki', label: 'Liczebniki' },
    { id: 'przyimki', label: 'Przyimki' },
]

// Boksy odpowiadające zagadnieniom w gramatyce
const TOPICS = {
    przedimki: [
        { id: 'przedimki-nieokreslone', title: 'A czy AN?', excerpt: 'Ćwiczenia z przedimkami nieokreślonymi.' },
        { id: 'przedimek-okreslony', title: 'Przedimek THE', excerpt: 'Ćwiczenia z przedimkiem określonym.' },
        { id: 'przedimek-zerowy', title: 'Brak przedimka', excerpt: 'Kiedy nie używać żadnego przedimka.' },
    ],
    rzeczowniki: [
        { id: 'rodzaje-rzeczownikow', title: 'Rodzaje rzeczowników', excerpt: 'Policzalne, niepoliczalne, własne, pospolite.' },
        { id: 'liczba-mnoga', title: 'Liczba mnoga', excerpt: 'Tworzenie liczby mnogiej - regularne i nieregularne.' },
        { id: 'dzierzawczosc', title: 'Dzierżawczość', excerpt: "Saxon genitive ('s) i konstrukcja z 'of'." },
    ],
    czasowniki: [
        { id: 'rodzaje-czasownikow', title: 'Rodzaje czasowników', excerpt: 'Statyczne, dynamiczne, posiłkowe, modalne.' },
        { id: 'czasowniki-posilkowe', title: 'Czasowniki posiłkowe', excerpt: 'Do/does/did, have/has/had, be.' },
        { id: 'czasowniki-modalne', title: 'Czasowniki modalne', excerpt: 'Can, could, may, might, must, should.' },
    ],
    przymiotniki: [
        { id: 'stopniowanie-przymiotnikow', title: 'Stopniowanie przymiotników', excerpt: 'Stopień wyższy i najwyższy.' },
        { id: 'kolejnosc-przymiotnikow', title: 'Kolejność przymiotników', excerpt: 'OSAShCOMP - magiczny akronim.' },
    ],
    przyslowki: [
        { id: 'rodzaje-przyslowkow', title: 'Rodzaje przysłówków', excerpt: 'Sposobu, miejsca, czasu, częstotliwości.' },
        { id: 'umiejscowienie-przyslowkow', title: 'Umiejscowienie przysłówków', excerpt: 'Pozycja przysłówków w zdaniu.' },
    ],
    zaimki: [
        { id: 'zaimki-osobowe-dzierzawcze', title: 'Zaimki osobowe i dzierżawcze', excerpt: 'I/me/my/mine - kompletny przewodnik.' },
        { id: 'zaimki-wskazujace-wzgledne', title: 'Zaimki wskazujące i względne', excerpt: 'This/that i who/which/that.' },
    ],
    spojniki: [
        { id: 'spojniki-podstawowe', title: 'Spójniki podstawowe', excerpt: 'And, but, or, so, because.' },
        { id: 'spojniki-zlozone', title: 'Spójniki złożone', excerpt: 'Either/or, neither/nor, both/and.' },
    ],
    liczebniki: [
        { id: 'liczebniki-glowne-porzadkowe', title: 'Liczebniki główne i porządkowe', excerpt: 'One/first, two/second.' },
        { id: 'daty-ulamki-liczby', title: 'Daty, ułamki, liczby', excerpt: 'Czytanie dat, ułamków i dużych liczb.' },
    ],
    przyimki: [
        { id: 'przyimki-miejsca-czasu', title: 'Przyimki miejsca i czasu', excerpt: 'In/on/at - kompletny przewodnik.' },
        { id: 'przyimki-ruchu', title: 'Przyimki ruchu', excerpt: 'Into, out of, through, across.' },
    ],
}

const QUIZZES = {
    'przedimki-nieokreslone': [
        {
            id: 'a1',
            question: 'Wybierz poprawną opcję: ___ university',
            options: ['a', 'an', 'the'],
            correct: 0,
        },
        {
            id: 'a2',
            question: 'Które zdanie jest poprawne?',
            options: ['She is a honest person.', 'She is an honest person.', 'She is the honest person.'],
            correct: 1,
        },
        {
            id: 'a3',
            question: 'Wybierz poprawną opcję: I need ___ hour to finish.',
            options: ['a', 'an', 'the'],
            correct: 1,
        },
        {
            id: 'a4',
            question: 'Które zdanie zawiera błąd?',
            options: ['He is a European.', 'She is an university student.', 'It was an amazing experience.'],
            correct: 1,
        },
        {
            id: 'a5',
            question: 'Wybierz poprawną opcję: Can I have ___ apple?',
            options: ['a', 'an', 'the'],
            correct: 1,
        },
        {
            id: 'a6',
            question: 'Kiedy używamy "a" zamiast "an"?',
            options: ['Przed samogłoskami', 'Przed spółgłoskowym brzmieniem', 'Zawsze przed literą U'],
            correct: 1,
        },
        {
            id: 'a7',
            question: 'Wybierz poprawną opcję: She is ___ MBA graduate.',
            options: ['a', 'an', 'the'],
            correct: 1,
        },
        {
            id: 'a8',
            question: 'Które zdanie jest poprawne?',
            options: ['I saw a UFO last night.', 'I saw an UFO last night.', 'I saw the UFO last night.'],
            correct: 0,
        },
        {
            id: 'a9',
            question: 'Wybierz poprawną opcję: It was ___ one-time offer.',
            options: ['a', 'an', 'the'],
            correct: 0,
        },
        {
            id: 'a10',
            question: 'Kiedy NIE używamy przedimka nieokreślonego?',
            options: ['Przy pierwszej wzmiance', 'Z rzeczownikami niepoliczalnymi', 'Z nazwami zawodów'],
            correct: 1,
        },
    ],
    'przedimek-okreslony': [
        {
            id: 'the1',
            question: 'Wybierz poprawną opcję: ___ sun is very bright today.',
            options: ['A', 'An', 'The'],
            correct: 2,
        },
        {
            id: 'the2',
            question: 'Które zdanie wymaga użycia "the"?',
            options: ['She plays piano beautifully.', 'We visited United States last year.', 'I love music.'],
            correct: 1,
        },
        {
            id: 'the3',
            question: 'Wybierz poprawną opcję: This is ___ best movie I have ever seen.',
            options: ['a', 'an', 'the'],
            correct: 2,
        },
        {
            id: 'the4',
            question: 'Kiedy używamy przedimka "the"?',
            options: ['Z unikatowymi obiektami', 'Z ogólnymi pojęciami', 'Z posiłkami ogólnie'],
            correct: 0,
        },
        {
            id: 'the5',
            question: 'Wybierz poprawną opcję: She plays ___ guitar very well.',
            options: ['a', 'an', 'the'],
            correct: 2,
        },
        {
            id: 'the6',
            question: 'Które zdanie jest poprawne?',
            options: ['The life is beautiful.', 'I love the music.', 'We went to the cinema yesterday.'],
            correct: 2,
        },
        {
            id: 'the7',
            question: 'Wybierz poprawną opcję: He is ___ only person who knows the truth.',
            options: ['a', 'an', 'the'],
            correct: 2,
        },
        {
            id: 'the8',
            question: 'Które zdanie NIE wymaga "the"?',
            options: ['We visited the Louvre Museum.', 'She lives in the Netherlands.', 'They go to school every day.'],
            correct: 2,
        },
        {
            id: 'the9',
            question: 'Wybierz poprawną opcję: ___ rich should help ___ poor.',
            options: ['The, the', 'A, a', '- , -'],
            correct: 0,
        },
        {
            id: 'the10',
            question: 'Kiedy NIE używamy przedimka "the"?',
            options: ['Z nazwami krajów w liczbie mnogiej', 'Z superlatywami', 'Z nazwami posiłków ogólnie'],
            correct: 2,
        },
        {
            id: 'the11',
            question: 'Wybierz poprawną opcję: We sailed along ___ Nile River.',
            options: ['a', 'an', 'the'],
            correct: 2,
        },
        {
            id: 'the12',
            question: 'Które zdanie zawiera błąd?',
            options: ['The children are playing in the garden.', 'I love the chocolate.', 'She is the tallest in the class.'],
            correct: 1,
        },
        {
            id: 'the13',
            question: 'Wybierz poprawną opcję: He was ___ first to arrive.',
            options: ['a', 'an', 'the'],
            correct: 2,
        },
        {
            id: 'the14',
            question: 'Kiedy używamy "the" z nazwami geograficznymi?',
            options: ['Z nazwami pojedynczych jezior', 'Z nazwami pojedynczych gór', 'Z nazwami rzek i oceanów'],
            correct: 2,
        },
        {
            id: 'the15',
            question: 'Wybierz poprawną opcję: They live in ___ United Kingdom.',
            options: ['a', 'an', 'the'],
            correct: 2,
        },
    ],
    'przedimek-zerowy': [
        {
            id: 'zero1',
            question: 'Wybierz poprawną opcję: ___ water is essential for life.',
            options: ['A', 'The', '-'],
            correct: 2,
        },
        {
            id: 'zero2',
            question: 'Które zdanie jest poprawne?',
            options: ['The love is a beautiful feeling.', 'Love is a beautiful feeling.', 'A love is a beautiful feeling.'],
            correct: 1,
        },
        {
            id: 'zero3',
            question: 'Wybierz poprawną opcję: She studies at ___ university.',
            options: ['a', 'the', '-'],
            correct: 2,
        },
        {
            id: 'zero4',
            question: 'Kiedy NIE używamy przedimka?',
            options: ['Z rzeczownikami niepoliczalnymi ogólnie', 'Z rzeczownikami policzalnymi w liczbie pojedynczej', 'Przy pierwszej wzmiance'],
            correct: 0,
        },
        {
            id: 'zero5',
            question: 'Wybierz poprawną opcję: We have ___ breakfast at 8 am.',
            options: ['a', 'the', '-'],
            correct: 2,
        },
        {
            id: 'zero6',
            question: 'Które zdanie zawiera błąd?',
            options: ['The life is difficult sometimes.', 'Life is difficult sometimes.', 'I need some advice.'],
            correct: 0,
        },
        {
            id: 'zero7',
            question: 'Wybierz poprawną opcję: He went to ___ bed early.',
            options: ['a', 'the', '-'],
            correct: 2,
        },
        {
            id: 'zero8',
            question: 'Różnica między BrE a AmE: "She is in ___ hospital."',
            options: ['BrE: the, AmE: -', 'BrE: -, AmE: the', 'Zawsze używamy "the"'],
            correct: 1,
        },
        {
            id: 'zero9',
            question: 'Wybierz poprawną opcję: ___ computers have changed our lives.',
            options: ['A', 'The', '-'],
            correct: 2,
        },
        {
            id: 'zero10',
            question: 'Które zdanie wymaga przedimka zerowego?',
            options: ['I need ___ information about the course.', 'She is ___ doctor.', 'We saw ___ interesting movie.'],
            correct: 0,
        },
    ],
    'rodzaje-rzeczownikow': [
        {
            id: 'n1',
            question: 'Który rzeczownik jest niepoliczalny?',
            options: ['book', 'information', 'apple'],
            correct: 1,
        },
        {
            id: 'n2',
            question: 'Wybierz poprawne zdanie:',
            options: ['I have many furnitures.', 'I have much furniture.', 'I have many furniture.'],
            correct: 1,
        },
        {
            id: 'n3',
            question: 'Który rzeczownik jest policzalny?',
            options: ['water', 'advice', 'idea'],
            correct: 2,
        },
        {
            id: 'n4',
            question: 'Wybierz zdanie z błędem:',
            options: ['I need some information.', 'She gave me two advices.', 'We have a lot of homework.'],
            correct: 1,
        },
        {
            id: 'n5',
            question: 'Który rzeczownik jest zawsze w liczbie mnogiej?',
            options: ['news', 'trousers', 'music'],
            correct: 1,
        },
        {
            id: 'n6',
            question: 'Wybierz poprawne zdanie:',
            options: ['The news are interesting.', 'The news is interesting.', 'A news is interesting.'],
            correct: 1,
        },
        {
            id: 'n7',
            question: 'Który rzeczownik jest własny?',
            options: ['city', 'London', 'river'],
            correct: 1,
        },
        {
            id: 'n8',
            question: 'Wybierz zdanie z błędem:',
            options: ['I bought a new jeans.', 'I bought a new pair of jeans.', 'These jeans are too big.'],
            correct: 0,
        },
        {
            id: 'n9',
            question: 'Który rzeczownik może być zarówno policzalny jak i niepoliczalny?',
            options: ['hair', 'time', 'obydwa powyższe'],
            correct: 2,
        },
        {
            id: 'n10',
            question: 'Wybierz poprawne zdanie:',
            options: ['I have three luggages.', 'I have three pieces of luggage.', 'I have many luggages.'],
            correct: 1,
        },
    ],
    'liczba-mnoga': [
        {
            id: 'pl1',
            question: 'Poprawna liczba mnoga od "child":',
            options: ['childs', 'children', 'childes'],
            correct: 1,
        },
        {
            id: 'pl2',
            question: 'Wybierz poprawne zdanie:',
            options: ['There are many sheeps in the field.', 'There are many sheep in the field.', 'There are many sheepes in the field.'],
            correct: 1,
        },
        {
            id: 'pl3',
            question: 'Poprawna liczba mnoga od "knife":',
            options: ['knifes', 'knives', 'knive'],
            correct: 1,
        },
        {
            id: 'pl4',
            question: 'Które zdanie jest poprawne?',
            options: ['The criterias are strict.', 'The criteria are strict.', 'The criterion are strict.'],
            correct: 1,
        },
        {
            id: 'pl5',
            question: 'Poprawna liczba mnoga od "city":',
            options: ['citys', 'cities', 'cities'],
            correct: 2,
        },
        {
            id: 'pl6',
            question: 'Wybierz zdanie z błędem:',
            options: ['I have two brothers-in-law.', 'I saw three deer in the forest.', 'The womans are waiting outside.'],
            correct: 2,
        },
        {
            id: 'pl7',
            question: 'Poprawna liczba mnoga od "analysis":',
            options: ['analysises', 'analyses', 'analysises'],
            correct: 1,
        },
        {
            id: 'pl8',
            question: 'Które zdanie jest poprawne?',
            options: ['These data are incorrect.', 'This data are incorrect.', 'These datas are incorrect.'],
            correct: 0,
        },
        {
            id: 'pl9',
            question: 'Poprawna liczba mnoga od "potato":',
            options: ['potatos', 'potatoes', 'potatoe'],
            correct: 1,
        },
        {
            id: 'pl10',
            question: 'Wybierz zdanie z błędem:',
            options: ['The children are playing.', 'The people are happy.', 'The persons are waiting.'],
            correct: 2,
        },
    ],
    'dzierzawczosc': [
        {
            id: 'gen1',
            question: "Poprawna forma 'Saxon genitive' dla James:",
            options: ["James' book", "James's book", "obie formy są poprawne"],
            correct: 2,
        },
        {
            id: 'gen2',
            question: 'Wybierz poprawne zdanie:',
            options: ["This is John and Mary house.", "This is John's and Mary's house.", "This is John and Mary's house."],
            correct: 2,
        },
        {
            id: 'gen3',
            question: "Kiedy używamy 'Saxon genitive'?",
            options: ['Z osobami i zwierzętami', 'Z wszystkimi rzeczownikami', 'Tylko z rzeczownikami nieżywotnymi'],
            correct: 0,
        },
        {
            id: 'gen4',
            question: 'Wybierz zdanie z błędem:',
            options: ["the car's color", "the house's roof", "the table's leg"],
            correct: 2,
        },
        {
            id: 'gen5',
            question: "Poprawna forma dla 'a holiday of two weeks':",
            options: ["a two weeks' holiday", "a two week's holiday", "a two-weeks holiday"],
            correct: 0,
        },
        {
            id: 'gen6',
            question: 'Wybierz poprawne zdanie:',
            options: ["the children's toys", "the childrens' toys", "the childrens's toys"],
            correct: 0,
        },
        {
            id: 'gen7',
            question: "Kiedy używamy konstrukcji z 'of' zamiast 'Saxon genitive'?",
            options: ['Z częściami obiektów', 'Z osobami', 'Z wyrażeniami czasowymi'],
            correct: 0,
        },
        {
            id: 'gen8',
            question: 'Wybierz zdanie z błędem:',
            options: ["Yesterday's meeting was long.", "The meeting of yesterday was long.", "The meeting's yesterday was long."],
            correct: 2,
        },
        {
            id: 'gen9',
            question: "Poprawna forma dla 'the tail of the dog':",
            options: ["the dog's tail", "the dogs' tail", "the dog tail"],
            correct: 0,
        },
        {
            id: 'gen10',
            question: 'Wybierz poprawne zdanie:',
            options: ["My sister's husband's car", "My sister's husband car", "My sisters' husband's car"],
            correct: 0,
        },
    ],
    'rodzaje-czasownikow': [
        {
            id: 'v1',
            question: 'Który czasownik jest statyczny?',
            options: ['run', 'know', 'write'],
            correct: 1,
        },
        {
            id: 'v2',
            question: 'Wybierz poprawne zdanie:',
            options: ['I am loving this music.', 'I love this music.', 'I am love this music.'],
            correct: 1,
        },
        {
            id: 'v3',
            question: 'Który czasownik może być zarówno statyczny jak i dynamiczny?',
            options: ['have', 'see', 'obydwa powyższe'],
            correct: 2,
        },
        {
            id: 'v4',
            question: 'Wybierz zdanie z błędem:',
            options: ['I am having dinner now.', 'I have a car.', 'I am having a car.'],
            correct: 2,
        },
        {
            id: 'v5',
            question: 'Który czasownik jest zawsze dynamiczny?',
            options: ['run', 'believe', 'own'],
            correct: 0,
        },
        {
            id: 'v6',
            question: 'Wybierz poprawne zdanie:',
            options: ['I am thinking about you.', 'I think you are right.', 'Obydwa są poprawne'],
            correct: 2,
        },
        {
            id: 'v7',
            question: 'Które zdanie ilustruje różnicę między znaczeniem statycznym a dynamicznym?',
            options: ['I have a car vs I am having a car', 'I see a bird vs I am seeing a bird', 'I am seeing a bird vs I see a bird'],
            correct: 1,
        },
        {
            id: 'v8',
            question: 'Wybierz zdanie z błędem:',
            options: ['She is appearing in a new play.', 'This book is belonging to me.', 'They are building a house.'],
            correct: 1,
        },
        {
            id: 'v9',
            question: 'Który czasownik NIGDY nie występuje w czasach Continuous?',
            options: ['belong', 'understand', 'obydwa powyższe'],
            correct: 2,
        },
        {
            id: 'v10',
            question: 'Wybierz poprawne zdanie:',
            options: ['I am wanting to leave now.', 'I want to leave now.', 'I am want to leave now.'],
            correct: 1,
        },
    ],
    'czasowniki-posilkowe': [
        {
            id: 'aux1',
            question: 'Który czasownik posiłkowy używamy do tworzenia Present Perfect?',
            options: ['do', 'have', 'be'],
            correct: 1,
        },
        {
            id: 'aux2',
            question: 'Wybierz poprawne pytanie w Present Simple:',
            options: ['Do you like coffee?', 'Like you coffee?', 'You like coffee?'],
            correct: 0,
        },
        {
            id: 'aux3',
            question: 'Który czasownik posiłkowy używamy do tworzenia czasów Continuous?',
            options: ['do', 'have', 'be'],
            correct: 2,
        },
        {
            id: 'aux4',
            question: 'Wybierz poprawne przeczenie:',
            options: ['I not like apples.', 'I do not like apples.', 'I no like apples.'],
            correct: 1,
        },
        {
            id: 'aux5',
            question: 'Które zdanie używa czasownika posiłkowego do emfazy?',
            options: ['I do love this song!', 'I love this song!', 'I am loving this song!'],
            correct: 0,
        },
        {
            id: 'aux6',
            question: 'Wybierz zdanie z błędem:',
            options: ['She is working now.', 'She works now.', 'She does works now.'],
            correct: 2,
        },
        {
            id: 'aux7',
            question: 'Który czasownik posiłkowy używamy w stronie biernej?',
            options: ['do', 'have', 'be'],
            correct: 2,
        },
        {
            id: 'aux8',
            question: 'Wybierz poprawne zdanie w Past Perfect:',
            options: ['I had finished when she arrived.', 'I have finished when she arrived.', 'I finished when she had arrived.'],
            correct: 0,
        },
        {
            id: 'aux9',
            question: 'Które zdanie nie wymaga czasownika posiłkowego?',
            options: ['She is a doctor.', 'She works as a doctor.', 'She does work as a doctor.'],
            correct: 0,
        },
        {
            id: 'aux10',
            question: 'Wybierz zdanie z błędem:',
            options: ['Do you can swim?', 'Can you swim?', 'You can swim?'],
            correct: 0,
        },
    ],
    'czasowniki-modalne': [
        {
            id: 'mod1',
            question: 'Który czasownik modalny wyraża obowiązek?',
            options: ['can', 'must', 'may'],
            correct: 1,
        },
        {
            id: 'mod2',
            question: 'Wybierz poprawne zdanie:',
            options: ['I can to swim.', 'I can swim.', 'I can swimming.'],
            correct: 1,
        },
        {
            id: 'mod3',
            question: 'Który czasownik modalny wyraża pozwolenie (formalne)?',
            options: ['can', 'may', 'must'],
            correct: 1,
        },
        {
            id: 'mod4',
            question: 'Wybierz zdanie z błędem:',
            options: ['You should see a doctor.', 'You ought to see a doctor.', 'You should to see a doctor.'],
            correct: 2,
        },
        {
            id: 'mod5',
            question: 'Różnica między "must" a "have to":',
            options: ['must - obowiązek subiektywny, have to - obiektywny', 'must - obowiązek obiektywny, have to - subiektywny', 'nie ma różnicy'],
            correct: 0,
        },
        {
            id: 'mod6',
            question: 'Wybierz poprawne zdanie:',
            options: ['She might come later.', 'She mights come later.', 'She might to come later.'],
            correct: 0,
        },
        {
            id: 'mod7',
            question: 'Który czasownik modalny wyraża zdolność?',
            options: ['can', 'should', 'must'],
            correct: 0,
        },
        {
            id: 'mod8',
            question: 'Wybierz zdanie z błędem:',
            options: ['They could help us yesterday.', 'They can help us yesterday.', 'They were able to help us yesterday.'],
            correct: 1,
        },
        {
            id: 'mod9',
            question: 'Które zdanie wyraża zakaz?',
            options: ['You must not smoke here.', 'You do not must smoke here.', 'You should not smoke here.'],
            correct: 0,
        },
        {
            id: 'mod10',
            question: 'Wybierz poprawne zdanie:',
            options: ['Would you like some coffee?', 'Will you like some coffee?', 'Do you would like some coffee?'],
            correct: 0,
        },
    ],
    'stopniowanie-przymiotnikow': [
        {
            id: 'adj1',
            question: 'Stopień wyższy od "big":',
            options: ['bigger', 'more big', 'biger'],
            correct: 0,
        },
        {
            id: 'adj2',
            question: 'Stopień najwyższy od "good":',
            options: ['goodest', 'best', 'the best'],
            correct: 2,
        },
        {
            id: 'adj3',
            question: 'Wybierz poprawne zdanie:',
            options: ['This is more better than that.', 'This is better than that.', 'This is gooder than that.'],
            correct: 1,
        },
        {
            id: 'adj4',
            question: 'Stopień wyższy od "interesting":',
            options: ['interestinger', 'more interesting', 'interestingier'],
            correct: 1,
        },
        {
            id: 'adj5',
            question: 'Stopień najwyższy od "bad":',
            options: ['baddest', 'worst', 'the worst'],
            correct: 2,
        },
        {
            id: 'adj6',
            question: 'Wybierz zdanie z błędem:',
            options: ['She is the most beautiful girl in class.', 'She is the beautifullest girl in class.', 'She is more beautiful than her sister.'],
            correct: 1,
        },
        {
            id: 'adj7',
            question: 'Stopień wyższy od "far":',
            options: ['farrer', 'more far', 'further/farther'],
            correct: 2,
        },
        {
            id: 'adj8',
            question: 'Wybierz poprawne zdanie:',
            options: ['This is the most expensive car.', 'This is the expensivest car.', 'This is the most expensiver car.'],
            correct: 0,
        },
        {
            id: 'adj9',
            question: 'Stopień wyższy od "little" (ilość):',
            options: ['littler', 'less', 'least'],
            correct: 1,
        },
        {
            id: 'adj10',
            question: 'Wybierz zdanie z błędem:',
            options: ['He is the taller of the two.', 'He is the tallest in the family.', 'This is the most tallest building.'],
            correct: 2,
        },
    ],
    'kolejnosc-przymiotnikow': [
        {
            id: 'order1',
            question: 'Wybierz poprawną kolejność: a ___ car',
            options: ['red Italian sports', 'Italian red sports', 'sports red Italian'],
            correct: 0,
        },
        {
            id: 'order2',
            question: 'Które zdanie ma poprawną kolejność przymiotników?',
            options: ['a beautiful small wooden box', 'a wooden small beautiful box', 'a small wooden beautiful box'],
            correct: 0,
        },
        {
            id: 'order3',
            question: 'Akronim OSAShCOMP oznacza kolejność:',
            options: ['Opinion-Size-Age-Shape-Colour-Origin-Material-Purpose', 'Size-Opinion-Age-Shape-Colour-Origin-Material-Purpose', 'Opinion-Age-Size-Shape-Colour-Origin-Material-Purpose'],
            correct: 0,
        },
        {
            id: 'order4',
            question: 'Wybierz poprawną kolejność: ___ table',
            options: ['an old round wooden coffee', 'a wooden round old coffee', 'a coffee old round wooden'],
            correct: 0,
        },
        {
            id: 'order5',
            question: 'Które zdanie zawiera błąd w kolejności przymiotników?',
            options: ['She has long beautiful hair.', 'She has beautiful long hair.', 'She has big blue eyes.'],
            correct: 0,
        },
        {
            id: 'order6',
            question: 'Wybierz poprawną kolejność: ___ house',
            options: ['a big modern American', 'an American modern big', 'a modern big American'],
            correct: 0,
        },
        {
            id: 'order7',
            question: 'Który przymiotnik powinien być pierwszy według OSAShCOMP?',
            options: ['beautiful (opinion)', 'large (size)', 'ancient (age)'],
            correct: 0,
        },
        {
            id: 'order8',
            question: 'Wybierz zdanie z poprawną kolejnością:',
            options: ['I bought a leather black jacket.', 'I bought a black leather jacket.', 'I bought black a leather jacket.'],
            correct: 1,
        },
        {
            id: 'order9',
            question: 'Który element w OSAShCOMP oznacza przeznaczenie?',
            options: ['Purpose', 'Origin', 'Material'],
            correct: 0,
        },
        {
            id: 'order10',
            question: 'Wybierz poprawną kolejność: ___ bag',
            options: ['a French elegant leather', 'an elegant French leather', 'a leather French elegant'],
            correct: 1,
        },
    ],
    'rodzaje-przyslowkow': [
        {
            id: 'adv1',
            question: 'Przysłówki sposobu odpowiadają na pytanie:',
            options: ['Jak?', 'Gdzie?', 'Kiedy?'],
            correct: 0,
        },
        {
            id: 'adv2',
            question: 'Które słowo jest przysłówkiem?',
            options: ['quick', 'quickly', 'quickness'],
            correct: 1,
        },
        {
            id: 'adv3',
            question: 'Wybierz poprawne zdanie:',
            options: ['She sings beautiful.', 'She sings beautifully.', 'She sing beautifully.'],
            correct: 1,
        },
        {
            id: 'adv4',
            question: 'Które zdanie zawiera przysłówek częstotliwości?',
            options: ['I always eat breakfast.', 'I eat breakfast now.', 'I eat breakfast here.'],
            correct: 0,
        },
        {
            id: 'adv5',
            question: 'Przysłówki miejsca odpowiadają na pytanie:',
            options: ['Gdzie?', 'Kiedy?', 'Jak?'],
            correct: 0,
        },
        {
            id: 'adv6',
            question: 'Wybierz zdanie z błędem:',
            options: ['He works hardly.', 'He works hard.', 'He works quickly.'],
            correct: 0,
        },
        {
            id: 'adv7',
            question: 'Które słowo jest przysłówkiem czasu?',
            options: ['yesterday', 'here', 'well'],
            correct: 0,
        },
        {
            id: 'adv8',
            question: 'Wybierz poprawne zdanie:',
            options: ['I good speak English.', 'I speak English good.', 'I speak English well.'],
            correct: 2,
        },
        {
            id: 'adv9',
            question: 'Które zdanie zawiera przysłówek sposobu?',
            options: ['She runs fast.', 'She runs every day.', 'She runs in the park.'],
            correct: 0,
        },
        {
            id: 'adv10',
            question: 'Wybierz zdanie z błędem:',
            options: ['They speak English fluently.', 'They speak English fluent.', 'They speak English very well.'],
            correct: 1,
        },
    ],
    'umiejscowienie-przyslowkow': [
        {
            id: 'pos1',
            question: 'Gdzie zwykle umieszczamy przysłówki częstotliwości?',
            options: ['Przed głównym czasownikiem', 'Na końcu zdania', 'Na początku zdania'],
            correct: 0,
        },
        {
            id: 'pos2',
            question: 'Wybierz poprawne zdanie:',
            options: ['She often goes to the cinema.', 'She goes often to the cinema.', 'Often she goes to the cinema.'],
            correct: 0,
        },
        {
            id: 'pos3',
            question: 'Gdzie umieszczamy przysłówki sposobu?',
            options: ['Zwykle na końcu zdania', 'Zawsze na początku', 'Przed podmiotem'],
            correct: 0,
        },
        {
            id: 'pos4',
            question: 'Wybierz zdanie z błędem:',
            options: ['He speaks English perfectly.', 'He perfectly speaks English.', 'He speaks perfectly English.'],
            correct: 2,
        },
        {
            id: 'pos5',
            question: 'Gdzie umieszczamy przysłówki miejsca?',
            options: ['Zwykle na końcu zdania', 'Przed czasownikiem', 'Po podmiocie'],
            correct: 0,
        },
        {
            id: 'pos6',
            question: 'Wybierz poprawne zdanie:',
            options: ['The children are playing outside.', 'The children outside are playing.', 'Outside the children are playing.'],
            correct: 0,
        },
        {
            id: 'pos7',
            question: 'Gdzie umieszczamy przysłówki czasu?',
            options: ['Na początku lub końcu zdania', 'Zawsze po czasowniku', 'Tylko na początku'],
            correct: 0,
        },
        {
            id: 'pos8',
            question: 'Wybierz zdanie z błędem:',
            options: ['Yesterday I met my friend.', 'I met my friend yesterday.', 'I yesterday met my friend.'],
            correct: 2,
        },
        {
            id: 'pos9',
            question: 'Kolejność przysłówków w zdaniu:',
            options: ['Sposób - Miejsce - Czas', 'Czas - Miejsce - Sposób', 'Miejsce - Sposób - Czas'],
            correct: 0,
        },
        {
            id: 'pos10',
            question: 'Wybierz poprawne zdanie:',
            options: ['She sang beautifully at the concert last night.', 'She sang at the concert beautifully last night.', 'She beautifully sang at the concert last night.'],
            correct: 0,
        },
    ],
    'zaimki-osobowe-dzierzawcze': [
        {
            id: 'pro1',
            question: 'Zaimek dzierżawczy dla "I":',
            options: ['my', 'mine', 'me'],
            correct: 1,
        },
        {
            id: 'pro2',
            question: 'Wybierz poprawne zdanie:',
            options: ['This book is my.', 'This book is mine.', 'This is mine book.'],
            correct: 1,
        },
        {
            id: 'pro3',
            question: 'Zaimek osobowy w dopełnieniu dla "she":',
            options: ['she', 'her', 'hers'],
            correct: 1,
        },
        {
            id: 'pro4',
            question: 'Wybierz zdanie z błędem:',
            options: ['He gave the book to me.', 'He gave the book to I.', 'He gave me the book.'],
            correct: 1,
        },
        {
            id: 'pro5',
            question: 'Przymiotnik dzierżawczy dla "they":',
            options: ['their', 'theirs', 'them'],
            correct: 0,
        },
        {
            id: 'pro6',
            question: 'Wybierz poprawne zdanie:',
            options: ['This is their house.', 'This house is their.', 'This is they house.'],
            correct: 0,
        },
        {
            id: 'pro7',
            question: 'Zaimek osobowy w podmiocie dla "ja":',
            options: ['me', 'I', 'my'],
            correct: 1,
        },
        {
            id: 'pro8',
            question: 'Wybierz zdanie z błędem:',
            options: ['She and I are friends.', 'Me and her are friends.', 'We are friends.'],
            correct: 1,
        },
        {
            id: 'pro9',
            question: 'Zaimek dzierżawczy dla "you":',
            options: ['your', 'yours', 'you'],
            correct: 1,
        },
        {
            id: 'pro10',
            question: 'Wybierz poprawne zdanie:',
            options: ['Is this yours?', 'Is this your?', 'Is this you?'],
            correct: 0,
        },
    ],
    'zaimki-wskazujace-wzgledne': [
        {
            id: 'dem1',
            question: 'Zaimek wskazujący dla bliskich przedmiotów w liczbie mnogiej:',
            options: ['this', 'these', 'that'],
            correct: 1,
        },
        {
            id: 'dem2',
            question: 'Wybierz poprawne zdanie:',
            options: ['This are my friends.', 'These are my friends.', 'This is my friends.'],
            correct: 1,
        },
        {
            id: 'dem3',
            question: 'Zaimek względny dla osób:',
            options: ['who', 'which', 'that'],
            correct: 0,
        },
        {
            id: 'dem4',
            question: 'Wybierz zdanie z błędem:',
            options: ['The woman who lives here is nice.', 'The woman which lives here is nice.', 'The woman that lives here is nice.'],
            correct: 1,
        },
        {
            id: 'dem5',
            question: 'Zaimek wskazujący dla dalekich przedmiotów w liczbie pojedynczej:',
            options: ['this', 'that', 'these'],
            correct: 1,
        },
        {
            id: 'dem6',
            question: 'Wybierz poprawne zdanie:',
            options: ['That is the book which I recommended.', 'That is the book who I recommended.', 'That is the book what I recommended.'],
            correct: 0,
        },
        {
            id: 'dem7',
            question: 'Zaimek względny określający przynależność:',
            options: ['whose', 'who', 'which'],
            correct: 0,
        },
        {
            id: 'dem8',
            question: 'Wybierz zdanie z błędem:',
            options: ['This is the house whose roof is red.', 'This is the house who roof is red.', 'This is the house with the red roof.'],
            correct: 1,
        },
        {
            id: 'dem9',
            question: 'Zaimek względny dla miejsc:',
            options: ['where', 'when', 'which'],
            correct: 0,
        },
        {
            id: 'dem10',
            question: 'Wybierz poprawne zdanie:',
            options: ['This is the park where we met.', 'This is the park which we met.', 'This is the park that we met.'],
            correct: 0,
        },
    ],
    'spojniki-podstawowe': [
        {
            id: 'con1',
            question: 'Który spójnik wyraża kontrast?',
            options: ['and', 'but', 'or'],
            correct: 1,
        },
        {
            id: 'con2',
            question: 'Wybierz poprawne zdanie:',
            options: ['I like tea and coffee.', 'I like tea or coffee.', 'I like tea but coffee.'],
            correct: 0,
        },
        {
            id: 'con3',
            question: 'Który spójnik wyraża alternatywę?',
            options: ['and', 'but', 'or'],
            correct: 2,
        },
        {
            id: 'con4',
            question: 'Wybierz zdanie z błędem:',
            options: ['I was tired, so I went to bed.', 'I was tired, but I went to bed.', 'I was tired, because I went to bed.'],
            correct: 2,
        },
        {
            id: 'con5',
            question: 'Który spójnik wyraża przyczynę?',
            options: ['because', 'so', 'but'],
            correct: 0,
        },
        {
            id: 'con6',
            question: 'Wybierz poprawne zdanie:',
            options: ['I stayed home because it was raining.', 'I stayed home so it was raining.', 'I stayed home but it was raining.'],
            correct: 0,
        },
        {
            id: 'con7',
            question: 'Który spójnik wyraża konsekwencję?',
            options: ['because', 'so', 'and'],
            correct: 1,
        },
        {
            id: 'con8',
            question: 'Wybierz zdanie z błędem:',
            options: ['It was raining, so we stayed home.', 'It was raining, because we stayed home.', 'Because it was raining, we stayed home.'],
            correct: 1,
        },
        {
            id: 'con9',
            question: 'Różnica między "because" a "so":',
            options: ['because - przyczyna, so - konsekwencja', 'because - konsekwencja, so - przyczyna', 'nie ma różnicy'],
            correct: 0,
        },
        {
            id: 'con10',
            question: 'Wybierz poprawne zdanie:',
            options: ['I want to go, but I am busy.', 'I want to go, and I am busy.', 'I want to go, or I am busy.'],
            correct: 0,
        },
    ],
    'spojniki-zlozone': [
        {
            id: 'cor1',
            question: 'Poprawne zestawienie dla "albo... albo...":',
            options: ['either... or...', 'neither... nor...', 'both... and...'],
            correct: 0,
        },
        {
            id: 'cor2',
            question: 'Wybierz poprawne zdanie:',
            options: ['You can have either tea or coffee.', 'You can have neither tea or coffee.', 'You can have both tea or coffee.'],
            correct: 0,
        },
        {
            id: 'cor3',
            question: 'Poprawne zestawienie dla "ani... ani...":',
            options: ['either... or...', 'neither... nor...', 'both... and...'],
            correct: 1,
        },
        {
            id: 'cor4',
            question: 'Wybierz zdanie z błędem:',
            options: ['I like neither coffee nor tea.', 'I like neither coffee or tea.', 'I don\'t like either coffee or tea.'],
            correct: 1,
        },
        {
            id: 'cor5',
            question: 'Poprawne zestawienie dla "zarówno... jak i...":',
            options: ['either... or...', 'neither... nor...', 'both... and...'],
            correct: 2,
        },
        {
            id: 'cor6',
            question: 'Wybierz poprawne zdanie:',
            options: ['She speaks both English and French.', 'She speaks both English or French.', 'She speaks both English as French.'],
            correct: 0,
        },
        {
            id: 'cor7',
            question: 'Które zestawienie podkreśla drugą cechę?',
            options: ['not only... but also...', 'either... or...', 'neither... nor...'],
            correct: 0,
        },
        {
            id: 'cor8',
            question: 'Wybierz zdanie z błędem:',
            options: ['He not only sings but also dances.', 'He not only sings but dances also.', 'He not only sings but also dance.'],
            correct: 2,
        },
        {
            id: 'cor9',
            question: 'Które zestawienie wyklucza obie możliwości?',
            options: ['either... or...', 'neither... nor...', 'both... and...'],
            correct: 1,
        },
        {
            id: 'cor10',
            question: 'Wybierz poprawne zdanie:',
            options: ['Neither John nor Mary came to the party.', 'Neither John or Mary came to the party.', 'Either John nor Mary came to the party.'],
            correct: 0,
        },
    ],
    'liczebniki-glowne-porzadkowe': [
        {
            id: 'num1',
            question: 'Liczebnik porządkowy dla 3:',
            options: ['three', 'third', 'threeth'],
            correct: 1,
        },
        {
            id: 'num2',
            question: 'Wybierz poprawne zdanie:',
            options: ['This is my first visit.', 'This is my one visit.', 'This is my firstly visit.'],
            correct: 0,
        },
        {
            id: 'num3',
            question: 'Liczebnik główny dla 12:',
            options: ['twelveth', 'twelve', 'twelth'],
            correct: 1,
        },
        {
            id: 'num4',
            question: 'Wybierz zdanie z błędem:',
            options: ['She finished second in the race.', 'She finished two in the race.', 'She came in second place.'],
            correct: 1,
        },
        {
            id: 'num5',
            question: 'Liczebnik porządkowy dla 21:',
            options: ['twenty-oneth', 'twenty-first', 'twenty-one'],
            correct: 1,
        },
        {
            id: 'num6',
            question: 'Wybierz poprawne zdanie:',
            options: ['It\'s his twenty-first birthday.', 'It\'s his twenty-one birthday.', 'It\'s his twenty-oneth birthday.'],
            correct: 0,
        },
        {
            id: 'num7',
            question: 'Liczebnik główny dla 100:',
            options: ['hundred', 'hundredth', 'one hundred'],
            correct: 2,
        },
        {
            id: 'num8',
            question: 'Wybierz zdanie z błędem:',
            options: ['She lives on the fifth floor.', 'She lives on the five floor.', 'Her apartment is on floor five.'],
            correct: 1,
        },
        {
            id: 'num9',
            question: 'Liczebnik porządkowy dla 5:',
            options: ['fiveth', 'fifth', 'five'],
            correct: 1,
        },
        {
            id: 'num10',
            question: 'Wybierz poprawne zdanie:',
            options: ['Today is May fifth.', 'Today is May five.', 'Today is May fiveth.'],
            correct: 0,
        },
    ],
    'daty-ulamki-liczby': [
        {
            id: 'date1',
            question: 'Poprawna data w British English: "15 maja 2024"',
            options: ['May 15th, 2024', '15th May 2024', '15 May 2024th'],
            correct: 1,
        },
        {
            id: 'date2',
            question: 'Wybierz poprawne zdanie:',
            options: ['I was born on July 4th, 1990.', 'I was born in July 4th, 1990.', 'I was born at July 4th, 1990.'],
            correct: 0,
        },
        {
            id: 'date3',
            question: 'Ułamek 1/2 czytamy jako:',
            options: ['one second', 'a half', 'one two'],
            correct: 1,
        },
        {
            id: 'date4',
            question: 'Wybierz zdanie z błędem:',
            options: ['Three quarters of the students passed.', 'Three fourth of the students passed.', '75% of the students passed.'],
            correct: 1,
        },
        {
            id: 'date5',
            question: 'Liczba 3.14 czytamy jako:',
            options: ['three point fourteen', 'three point one four', 'three comma fourteen'],
            correct: 1,
        },
        {
            id: 'date6',
            question: 'Wybierz poprawne zdanie:',
            options: ['The meeting is on March 10th.', 'The meeting is in March 10th.', 'The meeting is at March 10th.'],
            correct: 0,
        },
        {
            id: 'date7',
            question: 'Ułamek 2/3 czytamy jako:',
            options: ['two third', 'two thirds', 'two three'],
            correct: 1,
        },
        {
            id: 'date8',
            question: 'Wybierz zdanie z błędem:',
            options: ['It costs twenty-five dollars.', 'It costs twenty five dollars.', 'It costs 25 dollars.'],
            correct: 1,
        },
        {
            id: 'date9',
            question: 'Różnica między BrE a AmE w zapisie dat:',
            options: ['BrE: dzień/miesiąc/rok, AmE: miesiąc/dzień/rok', 'BrE: miesiąc/dzień/rok, AmE: dzień/miesiąc/rok', 'nie ma różnicy'],
            correct: 0,
        },
        {
            id: 'date10',
            question: 'Wybierz poprawne zdanie:',
            options: ['We need two and a half liters.', 'We need two and half liters.', 'We need two and the half liter.'],
            correct: 0,
        },
    ],
    'przyimki-miejsca-czasu': [
        {
            id: 'prep1',
            question: 'Przyimek czasu dla dni tygodnia:',
            options: ['in', 'on', 'at'],
            correct: 1,
        },
        {
            id: 'prep2',
            question: 'Wybierz poprawne zdanie:',
            options: ['I work on Mondays.', 'I work in Mondays.', 'I work at Mondays.'],
            correct: 0,
        },
        {
            id: 'prep3',
            question: 'Przyimek miejsca dla pomieszczeń:',
            options: ['in', 'on', 'at'],
            correct: 0,
        },
        {
            id: 'prep4',
            question: 'Wybierz zdanie z błędem:',
            options: ['She is in the kitchen.', 'She is at the kitchen.', 'She is cooking in the kitchen.'],
            correct: 1,
        },
        {
            id: 'prep5',
            question: 'Przyimek czasu dla konkretnych godzin:',
            options: ['in', 'on', 'at'],
            correct: 2,
        },
        {
            id: 'prep6',
            question: 'Wybierz poprawne zdanie:',
            options: ['The meeting starts at 9 AM.', 'The meeting starts on 9 AM.', 'The meeting starts in 9 AM.'],
            correct: 0,
        },
        {
            id: 'prep7',
            question: 'Przyimek miejsca dla powierzchni:',
            options: ['in', 'on', 'at'],
            correct: 1,
        },
        {
            id: 'prep8',
            question: 'Wybierz zdanie z błędem:',
            options: ['The book is on the table.', 'The book is in the table.', 'There is a book on the table.'],
            correct: 1,
        },
        {
            id: 'prep9',
            question: 'Przyimek czasu dla miesięcy:',
            options: ['in', 'on', 'at'],
            correct: 0,
        },
        {
            id: 'prep10',
            question: 'Wybierz poprawne zdanie:',
            options: ['We go on holiday in August.', 'We go on holiday on August.', 'We go on holiday at August.'],
            correct: 0,
        },
    ],
    'przyimki-ruchu': [
        {
            id: 'mov1',
            question: 'Przyimek ruchu oznaczający "do środka":',
            options: ['into', 'out of', 'through'],
            correct: 0,
        },
        {
            id: 'mov2',
            question: 'Wybierz poprawne zdanie:',
            options: ['She walked into the room.', 'She walked in the room.', 'She walked at the room.'],
            correct: 0,
        },
        {
            id: 'mov3',
            question: 'Przyimek ruchu oznaczający "z wnętrza":',
            options: ['into', 'out of', 'across'],
            correct: 1,
        },
        {
            id: 'mov4',
            question: 'Wybierz zdanie z błędem:',
            options: ['He got out of the car.', 'He got out the car.', 'He exited the car.'],
            correct: 1,
        },
        {
            id: 'mov5',
            question: 'Przyimek ruchu oznaczający "przez środek":',
            options: ['across', 'through', 'over'],
            correct: 1,
        },
        {
            id: 'mov6',
            question: 'Wybierz poprawne zdanie:',
            options: ['We walked through the forest.', 'We walked across the forest.', 'We walked over the forest.'],
            correct: 0,
        },
        {
            id: 'mov7',
            question: 'Przyimek ruchu oznaczający "przez powierzchnię":',
            options: ['across', 'through', 'into'],
            correct: 0,
        },
        {
            id: 'mov8',
            question: 'Wybierz zdanie z błędem:',
            options: ['She swam across the river.', 'She swam through the river.', 'She crossed the river.'],
            correct: 1,
        },
        {
            id: 'mov9',
            question: 'Różnica między "across" a "through":',
            options: ['across - przez powierzchnię, through - przez środek', 'across - przez środek, through - przez powierzchnię', 'nie ma różnicy'],
            correct: 0,
        },
        {
            id: 'mov10',
            question: 'Wybierz poprawne zdanie:',
            options: ['The cat jumped onto the table.', 'The cat jumped into the table.', 'The cat jumped at the table.'],
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
        return TOPICS.przedimki.find(t => t.id === topicId)?.title ||
            TOPICS.rzeczowniki.find(t => t.id === topicId)?.title ||
            TOPICS.czasowniki.find(t => t.id === topicId)?.title ||
            TOPICS.przymiotniki.find(t => t.id === topicId)?.title ||
            TOPICS.przyslowki.find(t => t.id === topicId)?.title ||
            TOPICS.zaimki.find(t => t.id === topicId)?.title ||
            TOPICS.spojniki.find(t => t.id === topicId)?.title ||
            TOPICS.liczebniki.find(t => t.id === topicId)?.title ||
            TOPICS.przyimki.find(t => t.id === topicId)?.title
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

export default function PartsOfSpeechExercises() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const { lang } = useLanguage()
    const active = section ?? 'przedimki'
    const topicId = searchParams.get('topic')
    const basePath = `/cwiczenia/gramatyka/części-mowy/${active}`

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
                    <h2>Ćwiczenia: Części mowy</h2>
                    <p className="muted">Utrwalaj wiedzę o częściach mowy poprzez praktyczne ćwiczenia</p>
                </header>

                <nav className="subnav" aria-label="Podstrony ćwiczeń: Części mowy">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/cwiczenia/gramatyka/części-mowy/${s.id}`}
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
            przedimki: 'Ćwiczenia: Przedimki angielskie',
            rzeczowniki: 'Ćwiczenia: Rzeczowniki angielskie',
            czasowniki: 'Ćwiczenia: Czasowniki angielskie',
            przymiotniki: 'Ćwiczenia: Przymiotniki angielskie',
            przyslowki: 'Ćwiczenia: Przysłówki angielskie',
            zaimki: 'Ćwiczenia: Zaimki angielskie',
            spojniki: 'Ćwiczenia: Spójniki angielskie',
            liczebniki: 'Ćwiczenia: Liczebniki angielskie',
            przyimki: 'Ćwiczenia: Przyimki angielskie'
        },
        en: {
            przedimki: 'Exercises: English Articles',
            rzeczowniki: 'Exercises: English Nouns',
            czasowniki: 'Exercises: English Verbs',
            przymiotniki: 'Exercises: English Adjectives',
            przyslowki: 'Exercises: English Adverbs',
            zaimki: 'Exercises: English Pronouns',
            spojniki: 'Exercises: English Conjunctions',
            liczebniki: 'Exercises: English Numerals',
            przyimki: 'Exercises: English Prepositions'
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
            przedimki: 'Interaktywne ćwiczenia z przedimków angielskich. A, an, the i przedimek zerowy - kompletny przewodnik.',
            rzeczowniki: 'Ćwiczenia z rzeczowników angielskich. Rodzaje rzeczowników, liczba mnoga, dzierżawczość.',
            czasowniki: 'Interaktywne ćwiczenia z czasowników angielskich. Rodzaje czasowników, posiłkowe, modalne.',
            przymiotniki: 'Ćwiczenia z przymiotników angielskich. Stopniowanie, kolejność przymiotników w zdaniu.',
            przyslowki: 'Interaktywne ćwiczenia z przysłówków angielskich. Rodzaje przysłówków i ich pozycja w zdaniu.',
            zaimki: 'Ćwiczenia z zaimków angielskich. Osobowe, dzierżawcze, wskazujące, względne.',
            spojniki: 'Interaktywne ćwiczenia ze spójników angielskich. Podstawowe i złożone spójniki.',
            liczebniki: 'Ćwiczenia z liczebników angielskich. Główne, porządkowe, daty, ułamki.',
            przyimki: 'Interaktywne ćwiczenia z przyimków angielskich. Miejsca, czasu, ruchu.'
        },
        en: {
            przedimki: 'Interactive English articles exercises. A, an, the and zero article - complete guide.',
            rzeczowniki: 'English nouns exercises. Types of nouns, plural forms, possessive case.',
            czasowniki: 'Interactive English verbs exercises. Types of verbs, auxiliary verbs, modal verbs.',
            przymiotniki: 'English adjectives exercises. Comparative and superlative forms, adjective order.',
            przyslowki: 'Interactive English adverbs exercises. Types of adverbs and their position in sentences.',
            zaimki: 'English pronouns exercises. Personal, possessive, demonstrative, relative pronouns.',
            spojniki: 'Interactive English conjunctions exercises. Basic and compound conjunctions.',
            liczebniki: 'English numerals exercises. Cardinal and ordinal numbers, dates, fractions.',
            przyimki: 'Interactive English prepositions exercises. Prepositions of place, time, movement.'
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
        ? `https://angloboost.pl/pl/cwiczenia/gramatyka/części-mowy/${activeSection}`
        : `https://angloboost.pl/en/exercises/grammar/parts-of-speech/${activeSection}`

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
        'przedimki-nieokreslone': 'A or AN? - Exercises',
        'przedimek-okreslony': 'The Definite Article - Exercises',
        'przedimek-zerowy': 'Zero Article - Exercises',
        'rodzaje-rzeczownikow': 'Types of Nouns - Exercises',
        'liczba-mnoga': 'Plural Forms - Exercises',
        'dzierzawczosc': 'Possessive Case - Exercises',
        'rodzaje-czasownikow': 'Types of Verbs - Exercises',
        'czasowniki-posilkowe': 'Auxiliary Verbs - Exercises',
        'czasowniki-modalne': 'Modal Verbs - Exercises',
        'stopniowanie-przymiotnikow': 'Adjective Comparison - Exercises',
        'kolejnosc-przymiotnikow': 'Adjective Order - Exercises',
        'rodzaje-przyslowkow': 'Types of Adverbs - Exercises',
        'umiejscowienie-przyslowkow': 'Adverb Position - Exercises',
        'zaimki-osobowe-dzierzawcze': 'Personal and Possessive Pronouns - Exercises',
        'zaimki-wskazujace-wzgledne': 'Demonstrative and Relative Pronouns - Exercises',
        'spojniki-podstawowe': 'Basic Conjunctions - Exercises',
        'spojniki-zlozone': 'Compound Conjunctions - Exercises',
        'liczebniki-glowne-porzadkowe': 'Cardinal and Ordinal Numbers - Exercises',
        'daty-ulamki-liczby': 'Dates, Fractions, Numbers - Exercises',
        'przyimki-miejsca-czasu': 'Prepositions of Place and Time - Exercises',
        'przyimki-ruchu': 'Prepositions of Movement - Exercises'
    }
    return englishTitles[topicId] || 'Parts of Speech Exercises'
}

function getEnglishTopicExcerpt(topicId) {
    const englishExcerpts = {
        'przedimki-nieokreslone': 'Exercises with indefinite articles a and an in English.',
        'przedimek-okreslony': 'Exercises with the definite article the in English.',
        'przedimek-zerowy': 'Exercises with zero article - when not to use any article.',
        'rodzaje-rzeczownikow': 'Exercises with countable, uncountable, proper and common nouns.',
        'liczba-mnoga': 'Exercises with regular and irregular plural forms of nouns.',
        'dzierzawczosc': "Exercises with Saxon genitive ('s) and of construction.",
        'rodzaje-czasownikow': 'Exercises with stative, dynamic, auxiliary and modal verbs.',
        'czasowniki-posilkowe': 'Exercises with do/does/did, have/has/had, be auxiliary verbs.',
        'czasowniki-modalne': 'Exercises with can, could, may, might, must, should modal verbs.',
        'stopniowanie-przymiotnikow': 'Exercises with comparative and superlative forms of adjectives.',
        'kolejnosc-przymiotnikow': 'Exercises with OSAShCOMP - the magical acronym for adjective order.',
        'rodzaje-przyslowkow': 'Exercises with adverbs of manner, place, time and frequency.',
        'umiejscowienie-przyslowkow': 'Exercises with adverb position in English sentences.',
        'zaimki-osobowe-dzierzawcze': 'Exercises with I/me/my/mine - complete guide to personal and possessive pronouns.',
        'zaimki-wskazujace-wzgledne': 'Exercises with this/that and who/which/that pronouns.',
        'spojniki-podstawowe': 'Exercises with and, but, or, so, because basic conjunctions.',
        'spojniki-zlozone': 'Exercises with either/or, neither/nor, both/and compound conjunctions.',
        'liczebniki-glowne-porzadkowe': 'Exercises with one/first, two/second cardinal and ordinal numbers.',
        'daty-ulamki-liczby': 'Exercises with reading dates, fractions and large numbers.',
        'przyimki-miejsca-czasu': 'Exercises with in/on/at prepositions of place and time.',
        'przyimki-ruchu': 'Exercises with into, out of, through, across prepositions of movement.'
    }
    return englishExcerpts[topicId] || 'Parts of speech exercises with examples and explanations.'
}