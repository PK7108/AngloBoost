import React, { useMemo, useState, useEffect } from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import { useLanguage } from '../../../context/LanguageContext.jsx'
import useDocumentMeta from '../../../useDocumentMeta'
import '../../../styles/topic-cards.css'
import { useExerciseScores } from '../useExerciseScores'

const sections = [
    { id: 'najpopularniejsze', label: 'Najpopularniejsze' },
    { id: 'zyciowe-madrosci', label: 'Życiowe mądrości' },
    { id: 'praca-biznes', label: 'Praca i biznes' },
    { id: 'przyjazn-milosc', label: 'Przyjaźń i miłość' },
    { id: 'angielskie-brytyjskie', label: 'Angielskie i brytyjskie' },
    { id: 'amerykanskie', label: 'Amerykańskie' },
]

// DWA BLOKI zamiast trzech
const TOPICS = {
    'najpopularniejsze': [
        { id: 'najpopularniejsze-praktyka', title: 'Popularne przysłowia - Praktyka 📚', excerpt: '20 pytań praktycznych z najczęstszymi przysłowiami.' },
        { id: 'najpopularniejsze-zaawansowane', title: 'Popularne przysłowia - Zaawansowane 🚀', excerpt: '18 trudniejszych pytań z zaawansowanymi przysłowiami.' },
    ],
    'zyciowe-madrosci': [
        { id: 'madrosci-praktyka', title: 'Życiowe mądrości - Praktyka 📚', excerpt: '20 pytań praktycznych z mądrościami życiowymi.' },
        { id: 'madrosci-zaawansowane', title: 'Życiowe mądrości - Zaawansowane 🚀', excerpt: '15 trudniejszych pytań z filozoficznymi przysłowiami.' },
    ],
    'praca-biznes': [
        { id: 'praca-praktyka', title: 'Przysłowia o pracy - Praktyka 📚', excerpt: '20 pytań praktycznych z przysłowiami biznesowymi.' },
        { id: 'praca-zaawansowane', title: 'Przysłowia o pracy - Zaawansowane 🚀', excerpt: '15 trudniejszych pytań z zaawansowanymi przysłowiami.' },
    ],
    'przyjazn-milosc': [
        { id: 'relacje-praktyka', title: 'Przyjaźń i miłość - Praktyka 📚', excerpt: '20 pytań praktycznych z przysłowiami o relacjach.' },
        { id: 'relacje-zaawansowane', title: 'Przyjaźń i miłość - Zaawansowane 🚀', excerpt: '15 trudniejszych pytań z emocjonalnymi przysłowiami.' },
    ],
    'angielskie-brytyjskie': [
        { id: 'brytyjskie-praktyka', title: 'Angielskie przysłowia - Praktyka 📚', excerpt: '20 pytań praktycznych z typowo brytyjskimi przysłowiami.' },
        { id: 'brytyjskie-zaawansowane', title: 'Angielskie przysłowia - Zaawansowane 🚀', excerpt: '15 trudniejszych pytań z kulturowymi przysłowiami.' },
    ],
    'amerykanskie': [
        { id: 'amerykanskie-praktyka', title: 'Amerykańskie przysłowia - Praktyka 📚', excerpt: '20 pytań praktycznych z amerykańskimi przysłowiami.' },
        { id: 'amerykanskie-zaawansowane', title: 'Amerykańskie przysłowia - Zaawansowane 🚀', excerpt: '15 trudniejszych pytań z zaawansowanymi przysłowiami.' },
    ],
}

const QUIZZES = {
    // Najpopularniejsze - Praktyka
    'najpopularniejsze-praktyka': [
        { id: 'np1', question: 'Actions speak louder than words =', options: ['Czyny mówią głośniej niż słowa', 'Słowa są ważniejsze od czynów', 'Mówić a robić to dwie różne rzeczy'], correct: 0 },
        { id: 'np2', question: 'Better late than never =', options: ['Lepiej wcale niż późno', 'Lepiej późno niż wcale', 'Czas to pieniądz'], correct: 1 },
        { id: 'np3', question: 'Don\'t judge a book by its cover =', options: ['Nie oceniaj książki po okładce', 'Książki trzeba czytać', 'Okładka jest najważniejsza'], correct: 0 },
        { id: 'np4', question: 'When in Rome, do as the Romans do =', options: ['W Rzymie zachowuj się jak Rzymianie', 'Rzymianie są dziwni', 'Nie podróżuj do Rzymu'], correct: 0 },
        { id: 'np5', question: 'The early bird catches the worm =', options: ['Ptak śpioch nie złapie robaka', 'Kto rano wstaje, temu Pan Bóg daje', 'Robaki są niebezpieczne'], correct: 1 },
        { id: 'np6', question: 'Every cloud has a silver lining =', options: ['Każda chmura ma srebrne podbicie', 'Każde nieszczęście ma dobre strony', 'Chmury przynoszą deszcz'], correct: 1 },
        { id: 'np7', question: 'Two wrongs don\'t make a right =', options: ['Dwa zła tworzą dobro', 'Zło złem zwalczać nie można', 'Wszystko jest względne'], correct: 1 },
        { id: 'np8', question: 'When the going gets tough, the tough get going =', options: ['Kiedy jest trudno, silni działają', 'Trudne sytuacje paraliżują', 'Lepiej unikać trudności'], correct: 0 },
        { id: 'np9', question: 'Hope for the best, but prepare for the worst =', options: ['Miej nadzieję na najlepsze, ale przygotuj się na najgorsze', 'Tylko optymizm się liczy', 'Nie martw się na zapas'], correct: 0 },
        { id: 'np10', question: 'Birds of a feather flock together =', options: ['Ptaki różnych piór razem fruwają', 'Ciągnie swój do swego', 'Różnorodność jest dobra'], correct: 1 },
        { id: 'np11', question: 'A picture is worth a thousand words =', options: ['Obraz jest wart tysiąca słów', 'Słowa są ważniejsze od obrazów', 'Obrazy kłamią'], correct: 0 },
        { id: 'np12', question: 'Don\'t put all your eggs in one basket =', options: ['Nie wkładaj wszystkich jajek do jednego koszyka', 'Jajka trzeba chronić', 'Różnorodność jest kluczowa'], correct: 0 },
        { id: 'np13', question: 'Honesty is the best policy =', options: ['Uczciwość to najlepsza polityka', 'Kłamstwo ma krótkie nogi', 'Czasem trzeba skłamać'], correct: 0 },
        { id: 'np14', question: 'Practice makes perfect =', options: ['Praktyka czyni mistrza', 'Talent jest ważniejszy', 'Nie każdy może być mistrzem'], correct: 0 },
        { id: 'np15', question: 'Where there\'s smoke, there\'s fire =', options: ['Gdzie dym, tam ogień', 'Nie wszystko złoto co się świeci', 'Dym może mylić'], correct: 0 },
        { id: 'np16', question: 'You can\'t make an omelette without breaking eggs =', options: ['Nie można zrobić omletu bez rozbicia jajek', 'Jajka są delikatne', 'Czasem trzeba coś poświęcić'], correct: 0 },
        { id: 'np17', question: 'The proof of the pudding is in the eating =', options: ['Prawda wychodzi w próbie', 'Pudding trzeba jeść na ciepło', 'Nie oceniaj po wyglądzie'], correct: 0 },
        { id: 'np18', question: 'A stitch in time saves nine =', options: ['Lepiej zapobiegać niż leczyć', 'Czego Jaś się nie nauczy...', 'Szybka reakcja oszczędza pracy'], correct: 2 },
        { id: 'np19', question: 'All good things must come to an end =', options: ['Wszystko co dobre szybko się kończy', 'Dobre rzeczy trwają wiecznie', 'Nic nie trwa wiecznie'], correct: 2 },
        { id: 'np20', question: 'The pen is mightier than the sword =', options: ['Słowo jest silniejsze od miecza', 'Miecz jest skuteczniejszy', 'Pióro i miecz to to samo'], correct: 0 },
    ],

    // Najpopularniejsze - Zaawansowane
    'najpopularniejsze-zaawansowane': [
        { id: 'nz1', question: 'A rolling stone gathers no moss =', options: ['Kamień toczący się mchem nie obrasta', 'Ruch to zdrowie', 'Stałość ma wartość'], correct: 0 },
        { id: 'nz2', question: 'Beggars can\'t be choosers =', options: ['Żebrak nie może być wybredny', 'Biedni mają ograniczone możliwości', 'Wszyscy powinni mieć wybór'], correct: 0 },
        { id: 'nz3', question: 'Curiosity killed the cat =', options: ['Ciekawość to pierwszy stopień do piekła', 'Ciekawość może być niebezpieczna', 'Koty są ciekawskie'], correct: 1 },
        { id: 'nz4', question: 'Fools rush in where angels fear to tread =', options: ['Głupcy wchodzą tam, gdzie aniołowie się boją', 'Odwaga popłaca', 'Aniołowie są ostrożni'], correct: 0 },
        { id: 'nz5', question: 'Great minds think alike =', options: ['Wielkie umysły myślą podobnie', 'Mądrzy ludzie się różnią', 'Myślenie jest subiektywne'], correct: 0 },
        { id: 'nz6', question: 'If it ain\'t broke, don\'t fix it =', options: ['Jeśli coś nie jest zepsute, nie naprawiaj tego', 'Lepiej zapobiegać', 'Wszystko można ulepszyć'], correct: 0 },
        { id: 'nz7', question: 'It takes two to tango =', options: ['Do tanga trzeba dwojga', 'Taniec to współpraca', 'Jeden może tańczyć'], correct: 0 },
        { id: 'nz8', question: 'Let sleeping dogs lie =', options: ['Nie wywołuj wilka z lasu', 'Psy powinny spać', 'Lepiej nie poruszać starych spraw'], correct: 2 },
        { id: 'nz9', question: 'Necessity is the mother of invention =', options: ['Potrzeba matką wynalazków', 'Głód jest najlepszym kucharzem', 'Konieczność zmusza do działania'], correct: 0 },
        { id: 'nz10', question: 'One man\'s trash is another man\'s treasure =', options: ['Co dla jednego śmieciem, dla drugiego skarbem', 'Wartość jest względna', 'Nie wszystko ma wartość'], correct: 0 },
        { id: 'nz11', question: 'The squeaky wheel gets the grease =', options: ['Piszczące koło dostaje smar', 'Kto głośno krzyczy, ten dostaje uwagę', 'Cierpliwość popłaca'], correct: 1 },
        { id: 'nz12', question: 'There\'s no place like home =', options: ['Wszędzie dobrze, ale w domu najlepiej', 'Dom to bezpieczna przystań', 'Podróże kształcą'], correct: 0 },
        { id: 'nz13', question: 'You can lead a horse to water, but you can\'t make it drink =', options: ['Możesz zaprowadzić konia do wodopoju, ale nie możesz zmusić go do picia', 'Konie są uparte', 'Wszystko ma swoje granice'], correct: 0 },
        { id: 'nz14', question: 'A watched pot never boils =', options: ['Garnka pilnowany nigdy nie wrze', 'Czas dłuży się, gdy czekamy', 'Cierpliwość jest cnotą'], correct: 1 },
        { id: 'nz15', question: 'The enemy of my enemy is my friend =', options: ['Wróg mojego wroga jest moim przyjacielem', 'Wszyscy wrogowie są źli', 'Przyjaźń jest skomplikowana'], correct: 0 },
        { id: 'nz16', question: 'A chain is only as strong as its weakest link =', options: ['Łańcuch jest tak mocny jak jego najsłabsze ogniwo', 'Słabości mogą zniszczyć całość', 'Wszystkie ogniwa są ważne'], correct: 0 },
        { id: 'nz17', question: 'The apple doesn\'t fall far from the tree =', options: ['Jabłko nie pada daleko od jabłoni', 'Dzieci są podobne do rodziców', 'Natura się dziedziczy'], correct: 1 },
        { id: 'nz18', question: 'You catch more flies with honey than with vinegar =', options: ['Więcej much złapiesz miodem niż octem', 'Uprzejmość popłaca', 'Agresja nie działa'], correct: 0 },
    ],

    // Życiowe mądrości - Praktyka
    'madrosci-praktyka': [
        { id: 'mp1', question: 'A stitch in time saves nine =', options: ['Lepiej zapobiegać niż leczyć', 'Czego Jaś się nie nauczy...', 'Szybka reakcja oszczędza pracy'], correct: 2 },
        { id: 'mp2', question: 'Absence makes the heart grow fonder =', options: ['Rozłąka serca zbliża', 'Niewidzialne przedmioty bardziej się ceni', 'Dystans pomaga'], correct: 0 },
        { id: 'mp3', question: 'All that glitters is not gold =', options: ['Nie wszystko złoto, co się świeci', 'Błyskotki mogą mylić', 'Wygląd może zwodzić'], correct: 0 },
        { id: 'mp4', question: 'Don\'t count your chickens before they hatch =', options: ['Nie chwal dnia przed zachodem słońca', 'Nie licz kurczaków przed wykluciem', 'Nie zakładaj sukcesu z góry'], correct: 1 },
        { id: 'mp5', question: 'The grass is always greener on the other side =', options: ['Wszędzie dobrze, gdzie nas nie ma', 'Trawa jest zawsze zieleńsza po drugiej stronie', 'Zazdrość jest powszechna'], correct: 1 },
        { id: 'mp6', question: 'You can\'t have your cake and eat it too =', options: ['Nie można zjeść ciastka i nadal je mieć', 'Nie można mieć wszystkiego', 'Trzeba wybierać'], correct: 0 },
        { id: 'mp7', question: 'A rolling stone gathers no moss =', options: ['Kamień toczący się mchem nie obrasta', 'Ruch to życie', 'Stałość daje korzyści'], correct: 0 },
        { id: 'mp8', question: 'Fortune favors the bold =', options: ['Śmiałym szczęście sprzyja', 'Odwaga popłaca', 'Ryzyko się opłaca'], correct: 0 },
        { id: 'mp9', question: 'Good things come to those who wait =', options: ['Cierpliwość popłaca', 'Dobre rzeczy przychodzą do cierpliwych', 'Warto czekać'], correct: 1 },
        { id: 'mp10', question: 'It\'s no use crying over spilt milk =', options: ['Co się stało, to się nie odstanie', 'Nie płacz nad rozlanym mlekiem', 'Nie warto żałować przeszłości'], correct: 1 },
        { id: 'mp11', question: 'Look before you leap =', options: ['Zastanów się, zanim zrobisz', 'Patrz przed skokiem', 'Ostrożność jest ważna'], correct: 0 },
        { id: 'mp12', question: 'Practice makes perfect =', options: ['Ćwiczenie czyni mistrza', 'Praktyka doskonali', 'Talent trzeba rozwijać'], correct: 0 },
        { id: 'mp13', question: 'The pen is mightier than the sword =', options: ['Słowo jest silniejsze od miecza', 'Pióro ma większą moc', 'Idee zwyciężają przemoc'], correct: 0 },
        { id: 'mp14', question: 'Where there\'s a will, there\'s a way =', options: ['Dla chcącego nic trudnego', 'Gdzie jest wola, tam jest sposób', 'Determinacja pokonuje przeszkody'], correct: 0 },
        { id: 'mp15', question: 'You reap what you sow =', options: ['Jak sobie pościelesz, tak się wyśpisz', 'Zbierasz to, co posiałeś', 'Efekty zależą od wysiłku'], correct: 1 },
        { id: 'mp16', question: 'A bird in the hand is worth two in the bush =', options: ['Lepszy wróbel w garści niż gołąb na dachu', 'Pewne jest lepsze niż możliwe', 'Realizm popłaca'], correct: 0 },
        { id: 'mp17', question: 'Don\'t bite the hand that feeds you =', options: ['Nie gryź ręki, która cię karmi', 'Wdzięczność jest ważna', 'Nie szkodź dobroczyńcom'], correct: 0 },
        { id: 'mp18', question: 'If the shoe fits, wear it =', options: ['Jeśli but pasuje, noś go', 'Jeśli coś do ciebie pasuje, zaakceptuj to', 'Prawda czasem boli'], correct: 2 },
        { id: 'mp19', question: 'Let bygones be bygones =', options: ['Co było, a nie jest, nie pisze się w rejestr', 'Przeszłość niech zostanie przeszłością', 'Wybaczenie jest ważne'], correct: 1 },
        { id: 'mp20', question: 'The best things in life are free =', options: ['Najlepsze rzeczy w życiu są darmowe', 'Pieniądze nie dają szczęścia', 'Proste przyjemności są najcenniejsze'], correct: 0 },
    ],

    'madrosci-zaawansowane': [
        { id: 'mz1', question: 'A leopard cannot change its spots =', options: ['Człowiek nie zmienia swojej natury', 'Lampart nie zmienia cętek', 'Charakter jest stały'], correct: 0 },
        { id: 'mz2', question: 'Still waters run deep =', options: ['Cicha woda brzegi rwie', 'Spokojni ludzie mają głębię', 'Pozory mylą'], correct: 1 },
        { id: 'mz3', question: 'The road to hell is paved with good intentions =', options: ['Dobrymi chęciami piekło jest wybrukowane', 'Intencje nie zawsze wystarczają', 'Działanie jest ważniejsze od zamiarów'], correct: 0 },
        { id: 'mz4', question: 'You can\'t teach an old dog new tricks =', options: ['Starego psa nowych sztuczek nie nauczysz', 'Starsi ludzie nie chcą się zmieniać', 'Nawyki są trudne do zmiany'], correct: 0 },
        { id: 'mz5', question: 'The pot calling the kettle black =', options: ['Garnek nazywający czajnik czarnym', 'Krytykować innych za własne wady', 'Hipokryzja jest powszechna'], correct: 1 },
        { id: 'mz6', question: 'A wolf in sheep\'s clothing =', options: ['Wilk w owczej skórze', 'Niebezpieczeństwo pod maską niewinności', 'Pozory mylą'], correct: 0 },
        { id: 'mz7', question: 'Blood is thicker than water =', options: ['Krew nie woda', 'Rodzina jest najważniejsza', 'Więzi krwi są silne'], correct: 0 },
        { id: 'mz8', question: 'Don\'t cast pearls before swine =', options: ['Nie rzucaj pereł przed wieprze', 'Nie dawaj wartościowych rzeczy tym, którzy ich nie docenią', 'Marnotrawstwo jest głupotą'], correct: 1 },
        { id: 'mz9', question: 'The devil is in the details =', options: ['Diabeł tkwi w szczegółach', 'Szczegóły są ważne', 'Małe rzeczy mogą zepsuć całość'], correct: 0 },
        { id: 'mz10', question: 'A friend to all is a friend to none =', options: ['Przyjaciel wszystkich nie jest przyjacielem nikogo', 'Nie można wszystkim dogodzić', 'Lojalność ma granice'], correct: 0 },
        { id: 'mz11', question: 'He who laughs last, laughs longest =', options: ['Kto się śmieje ostatni, ten się śmieje najlepiej', 'Ostateczny sukces jest najsłodszy', 'Nie śmiej się zbyt wcześnie'], correct: 0 },
        { id: 'mz12', question: 'A penny for your thoughts =', options: ['Grosz za twoje myśli', 'Co myślisz?', 'Chcę wiedzieć, co masz w głowie'], correct: 1 },
        { id: 'mz13', question: 'The cure is worse than the disease =', options: ['Lek jest gorszy od choroby', 'Niektóre rozwiązania szkodzą bardziej niż problem', 'Lepiej nie leczyć niż źle leczyć'], correct: 1 },
        { id: 'mz14', question: 'You can\'t have it both ways =', options: ['Nie możesz mieć wszystkiego', 'Trzeba wybierać', 'Nie da się pogodzić sprzeczności'], correct: 2 },
        { id: 'mz15', question: 'A rising tide lifts all boats =', options: ['Pływ podnosi wszystkie łodzie', 'Dobrobyt pomaga wszystkim', 'Wzrost gospodarczy korzysta dla każdego'], correct: 0 },
    ],

    // Praca i biznes - Praktyka
    'praca-praktyka': [
        { id: 'pp1', question: 'Time is money =', options: ['Czas to pieniądz', 'Pieniądze są ważne', 'Czas ma wartość'], correct: 0 },
        { id: 'pp2', question: 'Don\'t put all your eggs in one basket =', options: ['Nie wkładaj wszystkich jajek do jednego koszyka', 'Dywersyfikuj ryzyko', 'Rozkładaj inwestycje'], correct: 0 },
        { id: 'pp3', question: 'The customer is always right =', options: ['Klient ma zawsze rację', 'Zadowolenie klienta jest priorytetem', 'Usługi muszą być doskonałe'], correct: 0 },
        { id: 'pp4', question: 'A chain is only as strong as its weakest link =', options: ['Łańcuch jest tak mocny jak jego najsłabsze ogniwo', 'Słabości osłabiają całość', 'Wszystkie elementy muszą być sprawne'], correct: 0 },
        { id: 'pp5', question: 'If you want something done right, do it yourself =', options: ['Jeśli chcesz coś zrobić dobrze, zrób to sam', 'Samodzielność popłaca', 'Nie ufaj innym'], correct: 0 },
        { id: 'pp6', question: 'Many hands make light work =', options: ['Gdzie raków nie brak, tam i praca lekka', 'Współpraca ułatwia pracę', 'Im więcej ludzi, tym łatwiej'], correct: 1 },
        { id: 'pp7', question: 'Strike while the iron is hot =', options: ['Kuj żelazo, póki gorące', 'Wykorzystuj sprzyjające okazje', 'Działaj w odpowiednim momencie'], correct: 0 },
        { id: 'pp8', question: 'You have to spend money to make money =', options: ['Trzeba wydać pieniądze, żeby zarobić pieniądze', 'Inwestycje są konieczne', 'Bez ryzyka nie ma zysku'], correct: 0 },
        { id: 'pp9', question: 'Rome wasn\'t built in a day =', options: ['Rzym nie został zbudowany w jeden dzień', 'Wielkie rzeczy wymagają czasu', 'Cierpliwość w biznesie'], correct: 0 },
        { id: 'pp10', question: 'Quality over quantity =', options: ['Lepsza jakość niż ilość', 'Jakość jest ważniejsza od ilości', 'Mniej a lepiej'], correct: 0 },
        { id: 'pp11', question: 'Think outside the box =', options: ['Myśl nieszablonowo', 'Wychodź poza schematy', 'Kreatywność w biznesie'], correct: 0 },
        { id: 'pp12', question: 'First come, first served =', options: ['Kto pierwszy, ten lepszy', 'Pierwszeństwo ma ten, kto przyjdzie pierwszy', 'Kolejność ma znaczenie'], correct: 0 },
        { id: 'pp13', question: 'Opportunity never knocks twice at any man\'s door =', options: ['Okazja nie trzykroć kołacze', 'Szansa przychodzi tylko raz', 'Wykorzystuj okazje'], correct: 1 },
        { id: 'pp14', question: 'A bird in the hand is worth two in the bush =', options: ['Lepszy wróbel w garści niż gołąb na dachu', 'Pewny zysk lepszy niż możliwy', 'Realizm w biznesie'], correct: 0 },
        { id: 'pp15', question: 'Don\'t bite the hand that feeds you =', options: ['Nie gryź ręki, która cię karmi', 'Nie szkodź pracodawcy', 'Wdzięczność w pracy'], correct: 0 },
        { id: 'pp16', question: 'The early bird catches the worm =', options: ['Kto rano wstaje, temu Pan Bóg daje', 'Punktualność popłaca', 'Szybkość działania się opłaca'], correct: 0 },
        { id: 'pp17', question: 'Work smarter, not harder =', options: ['Pracuj mądrzej, nie ciężej', 'Efektywność jest ważna', 'Inteligentna praca'], correct: 0 },
        { id: 'pp18', question: 'Keep your eye on the ball =', options: ['Miej oko na piłkę', 'Skup się na celu', 'Nie trać z oczu priorytetów'], correct: 2 },
        { id: 'pp19', question: 'Put your money where your mouth is =', options: ['Postaw swoje pieniądze za swoje słowa', 'Dotrzymuj obietnic', 'Bądź konsekwentny'], correct: 1 },
        { id: 'pp20', question: 'The bottom line =', options: ['Ostateczny wynik', 'Najważniejsza kwestia', 'Finansowy rezultat'], correct: 0 },
    ],

    // Praca i biznes - Zaawansowane
    'praca-zaawansowane': [
        { id: 'pz1', question: 'Ahead of the curve =', options: ['Na czele zmian', 'Wyprzedzać trendy', 'Być innowacyjnym'], correct: 0 },
        { id: 'pz2', question: 'Boil the ocean =', options: ['Próbować niemożliwego', 'Marnować zasoby', 'Być nierealistycznym'], correct: 0 },
        { id: 'pz3', question: 'Circle the wagons =', options: ['Zjednoczyć się przeciw zagrożeniu', 'Bronić pozycji', 'Działać defensywnie'], correct: 0 },
        { id: 'pz4', question: 'Dot the i\'s and cross the t\'s =', options: ['Dopracować szczegóły', 'Być dokładnym', 'Skończyć pracę'], correct: 0 },
        { id: 'pz5', question: 'Elephant in the room =', options: ['Oczywisty nieporuszany problem', 'Duży problem', 'Niewygodna prawda'], correct: 0 },
        { id: 'pz6', question: 'Get the show on the road =', options: ['Zacząć działanie', 'Ruszyć z projektem', 'Wdrożyć plan'], correct: 0 },
        { id: 'pz7', question: 'In the driver\'s seat =', options: ['Kontrolować sytuację', 'Być szefem', 'Mieć władzę'], correct: 0 },
        { id: 'pz8', question: 'Low-hanging fruit =', options: ['Łatwe do osiągnięcia cele', 'Proste zadania', 'Szybkie zwycięstwa'], correct: 0 },
        { id: 'pz9', question: 'Move the goalposts =', options: ['Zmienić warunki', 'Podnosić poprzeczkę', 'Zmieniać zasady'], correct: 0 },
        { id: 'pz10', question: 'On the back burner =', options: ['Odłożone na później', 'Niski priorytet', 'Czekające zadanie'], correct: 0 },
        { id: 'pz11', question: 'Paradigm shift =', options: ['Fundamentalna zmiana', 'Nowe podejście', 'Rewolucja w myśleniu'], correct: 0 },
        { id: 'pz12', question: 'Run it up the flagpole =', options: ['Przedstawić pomysł', 'Przetestować koncepcję', 'Zbadać reakcję'], correct: 0 },
        { id: 'pz13', question: 'Sweeten the deal =', options: ['Ulepszyć ofertę', 'Dodać korzyści', 'Zwiększyć atrakcyjność'], correct: 0 },
        { id: 'pz14', question: 'Think on your feet =', options: ['Improwizować', 'Szybko myśleć', 'Działać w biegu'], correct: 0 },
        { id: 'pz15', question: 'Value proposition =', options: ['Oferowana wartość', 'Korzyści dla klienta', 'Przewaga konkurencyjna'], correct: 0 },
    ],

    // Przyjaźń i miłość - Praktyka
    'relacje-praktyka': [
        { id: 'rp1', question: 'Love is blind =', options: ['Miłość jest ślepa', 'Zakochani nie widzą wad', 'Uczucie zaślepia'], correct: 0 },
        { id: 'rp2', question: 'Absence makes the heart grow fonder =', options: ['Rozłąka serca zbliża', 'Niewidzialne bardziej się ceni', 'Dystans wzmacnia uczucie'], correct: 0 },
        { id: 'rp3', question: 'All is fair in love and war =', options: ['W miłości i na wojnie wszystkie chwyty dozwolone', 'Brak zasad w uczuciach', 'Wszystko dla miłości'], correct: 0 },
        { id: 'rp4', question: 'Beauty is in the eye of the beholder =', options: ['O gustach się nie dyskutuje', 'Piękno jest subiektywne', 'Każdy ma swój typ'], correct: 1 },
        { id: 'rp5', question: 'Friendship is love without wings =', options: ['Przyjaźń to miłość bez skrzydeł', 'Przyjaźń jest trwała', 'Miłość i przyjaźń są podobne'], correct: 0 },
        { id: 'rp6', question: 'The way to a man\'s heart is through his stomach =', options: ['Przez żołądek do serca', 'Jedzenie zdobywa serca', 'Kuchnia to miłość'], correct: 0 },
        { id: 'rp7', question: 'Blood is thicker than water =', options: ['Krew nie woda', 'Rodzina najważniejsza', 'Więzi krwi są silne'], correct: 0 },
        { id: 'rp8', question: 'A friend in need is a friend indeed =', options: ['Prawdziwych przyjaciół poznaje się w biedzie', 'Przyjaciel w potrzebie', 'Wierność w trudnych czasach'], correct: 0 },
        { id: 'rp9', question: 'Love will find a way =', options: ['Gdzie diabeł nie może, tam babę pośle', 'Miłość pokonuje przeszkody', 'Uczucie znajdzie rozwiązanie'], correct: 1 },
        { id: 'rp10', question: 'Out of sight, out of mind =', options: ['Co z oczu, to z serca', 'Zapominamy o nieobecnych', 'Dystans osłabia więzi'], correct: 0 },
        { id: 'rp11', question: 'Familiarity breeds contempt =', options: ['Zbytnia poufałość rodzi pogardę', 'Nadmiar bliskości szkodzi', 'Rutyna niszczy uczucie'], correct: 0 },
        { id: 'rp12', question: 'Hearts will never be practical until they are made unbreakable =', options: ['Serce nie służy do myślenia', 'Uczucia nie są logiczne', 'Miłość nie podlega rozumowi'], correct: 2 },
        { id: 'rp13', question: 'The course of true love never did run smooth =', options: ['Droga prawdziwej miłości nigdy nie jest gładka', 'Miłość ma przeszkody', 'Prawdziwe uczucie wymaga walki'], correct: 0 },
        { id: 'rp14', question: 'To love and be loved is to feel the sun from both sides =', options: ['Kochać i być kochanym to czuć słońce z obu stron', 'Miłość daje pełnię szczęścia', 'Wzajemność jest piękna'], correct: 0 },
        { id: 'rp15', question: 'A hug is a perfect gift - one size fits all =', options: ['Uścisk to idealny prezent - jeden rozmiar dla wszystkich', 'Przytulanie jest uniwersalne', 'Uścisk leczy'], correct: 0 },
        { id: 'rp16', question: 'Love me, love my dog =', options: ['Jeśli kochasz mnie, kochaj i mojego psa', 'Akceptacja całej osoby', 'Miłość bezwarunkowa'], correct: 1 },
        { id: 'rp17', question: 'The heart wants what it wants =', options: ['Serce chce tego, czego chce', 'Uczucia są niekontrolowane', 'Nie wybieramy, kogo kochamy'], correct: 0 },
        { id: 'rp18', question: 'A happy wife means a happy life =', options: ['Szczęśliwa żona to szczęśliwe życie', 'Zadowolona partnerka to spokój', 'Harmonia w związku'], correct: 0 },
        { id: 'rp19', question: 'Friends are the family we choose for ourselves =', options: ['Przyjaciele to rodzina, którą wybieramy', 'Przyjaźń to świadomy wybór', 'Krewni z wyboru'], correct: 0 },
        { id: 'rp20', question: 'Home is where the heart is =', options: ['Dom jest tam, gdzie serce', 'Prawdziwy dom to uczucia', 'Miejsce, gdzie kochamy'], correct: 0 },
    ],

    // Przyjaźń i miłość - Zaawansowane
    'relacje-zaawansowane': [
        { id: 'rz1', question: 'Love me, love my dog =', options: ['Jeśli kochasz mnie, kochaj i mojego psa', 'Akceptuj mnie takim, jakim jestem', 'Miłość wymaga poświęceń'], correct: 0 },
        { id: 'rz2', question: 'The heart wants what it wants =', options: ['Serce nie sługa', 'Uczucia są irracjonalne', 'Nie wybieramy, kogo kochamy'], correct: 2 },
        { id: 'rz3', question: 'A happy wife means a happy life =', options: ['Szczęśliwa żona to szczęśliwe życie', 'Związek to kompromis', 'Harmonia w domu'], correct: 0 },
        { id: 'rz4', question: 'Friends are the family we choose for ourselves =', options: ['Przyjaciele to wybrana rodzina', 'Krewni z wyboru', 'Przyjaźń to świadomy wybór'], correct: 0 },
        { id: 'rz5', question: 'Home is where the heart is =', options: ['Dom jest tam, gdzie serce', 'Prawdziwy dom to uczucia', 'Miejsce, gdzie kochamy'], correct: 0 },
        { id: 'rz6', question: 'A broken friendship is like a broken mirror =', options: ['Zepsutą przyjaźń trudno naprawić', 'Przyjaźń jak lustro - raz stłuczone, zawsze pokazuje rysy', 'Zaufanie raz złamane trudno odbudować'], correct: 1 },
        { id: 'rz7', question: 'The language of friendship is not words but meanings =', options: ['Przyjaźń mówi czynami, nie słowami', 'Prawdziwa przyjaźń nie potrzebuje słów', 'Znaczenia są ważniejsze niż słowa'], correct: 0 },
        { id: 'rz8', question: 'Love is not about possession, it\'s about appreciation =', options: ['Miłość to nie posiadanie, ale docenianie', 'Prawdziwa miłość jest bezinteresowna', 'Wolność w miłości'], correct: 0 },
        { id: 'rz9', question: 'A true friend is the greatest of all blessings =', options: ['Prawdziwy przyjaciel to największe błogosławieństwo', 'Przyjaźń jest skarbem', 'Wierny przyjaciel jest bezcenny'], correct: 0 },
        { id: 'rz10', question: 'The course of true love never did run smooth =', options: ['Droga prawdziwej miłości nigdy nie jest usłana różami', 'Miłość zawsze ma przeszkody', 'Prawdziwe uczucie wymaga walki'], correct: 0 },
        { id: 'rz11', question: 'To love and be loved is to feel the sun from both sides =', options: ['Kochać i być kochanym to czuć słońce z obu stron', 'Wzajemna miłość daje pełnię szczęścia', 'Miłość ogrzewa obie strony'], correct: 0 },
        { id: 'rz12', question: 'Friendship doubles your joys and divides your sorrows =', options: ['Przyjaźń podwaja radości i dzieli smutki', 'Z przyjacielem wszystko jest łatwiejsze', 'Dzielenie uczuć z przyjacielem'], correct: 0 },
        { id: 'rz13', question: 'Love is composed of a single soul inhabiting two bodies =', options: ['Miłość to jedna dusza w dwóch ciałach', 'Głęboka więź duchowa', 'Jedność w miłości'], correct: 0 },
        { id: 'rz14', question: 'The greatest love is often the most difficult to see =', options: ['Największa miłość jest często najtrudniejsza do dostrzeżenia', 'Prawdziwa miłość bywa niewidoczna', 'Miłość w codzienności'], correct: 0 },
        { id: 'rz15', question: 'A friend is someone who knows all about you and still loves you =', options: ['Przyjaciel to ktoś, kto zna cię całego i wciąż cię kocha', 'Prawdziwa akceptacja', 'Miłość pomimo wad'], correct: 0 },
    ],

    // Angielskie i brytyjskie - Praktyka
    'brytyjskie-praktyka': [
        { id: 'bp1', question: 'Keep calm and carry on =', options: ['Zachowaj spokój i działaj dalej', 'Nie panikuj', 'Kontynuuj pomimo trudności'], correct: 0 },
        { id: 'bp2', question: 'It\'s not cricket =', options: ['To nie fair', 'To nie w porządku', 'To nieuczciwe'], correct: 0 },
        { id: 'bp3', question: 'Bob\'s your uncle =', options: ['I już, gotowe', 'Proste jak drut', 'Bez problemu'], correct: 0 },
        { id: 'bp4', question: 'Don\'t get your knickers in a twist =', options: ['Nie denerwuj się bez powodu', 'Nie histeryzuj', 'Zachowaj spokój'], correct: 0 },
        { id: 'bp5', question: 'It\'s raining cats and dogs =', options: ['Leje jak z cebra', 'Mocno pada', 'Ulewa'], correct: 0 },
        { id: 'bp6', question: 'The proof of the pudding is in the eating =', options: ['Prawda wychodzi w próbie', 'Trzeba spróbować, żeby wiedzieć', 'Praktyka weryfikuje teorię'], correct: 0 },
        { id: 'bp7', question: 'A storm in a teacup =', options: ['Burza w szklance wody', 'Przesadna reakcja', 'Mały problem wyolbrzymiony'], correct: 0 },
        { id: 'bp8', question: 'As right as rain =', options: ['W idealnym porządku', 'Wszystko w porządku', 'Doskonale'], correct: 0 },
        { id: 'bp9', question: 'Bite the bullet =', options: ['Wziąć byka za rogi', 'Zmierzyć się z trudnościami', 'Przełknąć gorzką pigułkę'], correct: 0 },
        { id: 'bp10', question: 'Break a leg =', options: ['Połamania nóg', 'Powodzenia', 'Trzymam kciuki'], correct: 0 },
        { id: 'bp11', question: 'Cost an arm and a leg =', options: ['Kosztować fortunę', 'Bardzo drogi', 'Kosztowny'], correct: 0 },
        { id: 'bp12', question: 'Every dog has its day =', options: ['Każdy ma swój dobry dzień', 'Każdemu się poszczęści', 'Szansa dla każdego'], correct: 0 },
        { id: 'bp13', question: 'Hit the nail on the head =', options: ['Trafić w sedno', 'Mówić dokładnie to, co trzeba', 'Precyzyjnie określić'], correct: 0 },
        { id: 'bp14', question: 'Kill two birds with one stone =', options: ['Upiec dwie pieczenie na jednym ogniu', 'Zrobić dwie rzeczy naraz', 'Efektywne działanie'], correct: 0 },
        { id: 'bp15', question: 'Once in a blue moon =', options: ['Raz na ruski rok', 'Bardzo rzadko', 'Prawie nigdy'], correct: 0 },
        { id: 'bp16', question: 'A piece of cake =', options: ['Bardzo łatwe', 'Bułka z masłem', 'Proste zadanie'], correct: 0 },
        { id: 'bp17', question: 'The best of both worlds =', options: ['Połączenie zalet obu światów', 'Idealne rozwiązanie', 'Korzyści z dwóch opcji'], correct: 0 },
        { id: 'bp18', question: 'Speak of the devil =', options: ['O wilku mowa', 'Akurat mówiliśmy', 'Trafne pojawienie się'], correct: 0 },
        { id: 'bp19', question: 'See eye to eye =', options: ['Zgadzać się całkowicie', 'Mieć te same poglądy', 'Rozumieć się doskonale'], correct: 0 },
        { id: 'bp20', question: 'When pigs fly =', options: ['Jak rak świśnie', 'Nigdy', 'To się nie wydarzy'], correct: 0 },
    ],

    // Angielskie i brytyjskie - Zaawansowane
    'brytyjskie-zaawansowane': [
        { id: 'bz1', question: 'Beat around the bush =', options: ['Owijać w bawełnę', 'Mówić nie wprost', 'Unikać sedna sprawy'], correct: 0 },
        { id: 'bz2', question: 'Best thing since sliced bread =', options: ['Najlepsza rzecz od czasu krojenia chleba', 'Rewolucyjny wynalazek', 'Wspaniała innowacja'], correct: 0 },
        { id: 'bz3', question: 'Bite off more than you can chew =', options: ['Wziąć na siebie za dużo', 'Przesadzić z ambicjami', 'Nie docenić trudności'], correct: 0 },
        { id: 'bz4', question: 'Cut corners =', options: ['Iść na skróty', 'Oszczędzać kosztem jakości', 'Robić byle jak'], correct: 0 },
        { id: 'bz5', question: 'Devil\'s advocate =', options: ['Adwokat diabła', 'Osoba celowo sprzeciwiająca się', 'Burzyciel zgody'], correct: 0 },
        { id: 'bz6', question: 'Feel under the weather =', options: ['Źle się czuć', 'Być chorym', 'Nie mieć siły'], correct: 0 },
        { id: 'bz7', question: 'Give the benefit of the doubt =', options: ['Dać kredyt zaufania', 'Załóżmy dobrą wolę', 'Nie osądzać pochopnie'], correct: 0 },
        { id: 'bz8', question: 'Hear it on the grapevine =', options: ['Usłyszeć plotki', 'Dowiedzieć się nieoficjalnie', 'Krążą pogłoski'], correct: 0 },
        { id: 'bz9', question: 'Hit the sack =', options: ['Iść spać', 'Położyć się do łóżka', 'Zakończyć dzień'], correct: 0 },
        { id: 'bz10', question: 'It takes two to tango =', options: ['Do tanga trzeba dwojga', 'Obie strony są winne', 'Wspólna odpowiedzialność'], correct: 0 },
        { id: 'bz11', question: 'Make a long story short =', options: ['Skracając długą historię', 'Mówiąc krótko', 'W skrócie'], correct: 0 },
        { id: 'bz12', question: 'On cloud nine =', options: ['W siódmym niebie', 'Bardzo szczęśliwy', 'Euforia'], correct: 0 },
        { id: 'bz13', question: 'Pull someone\'s leg =', options: ['Żartować sobie z kogoś', 'Droczyć się', 'Zartować'], correct: 0 },
        { id: 'bz14', question: 'Speak of the devil =', options: ['O wilku mowa', 'Akurat mówiliśmy', 'Trafne pojawienie się'], correct: 0 },
        { id: 'bz15', question: 'Your guess is as good as mine =', options: ['Tak samo nie wiem jak ty', 'Równie dobrze mogę zgadywać', 'Nie mam pojęcia'], correct: 0 },
    ],

    // Amerykańskie - Praktyka
    'amerykanskie-praktyka': [
        { id: 'ap1', question: 'The American dream =', options: ['Amerykański sen', 'Marzenie o sukcesie', 'Wiara w możliwości'], correct: 0 },
        { id: 'ap2', question: 'Go the extra mile =', options: ['Zrobić coś ekstra', 'Wysilić się ponad normę', 'Zrobić więcej niż trzeba'], correct: 0 },
        { id: 'ap3', question: 'Pull yourself up by your bootstraps =', options: ['Podnieś się sam', 'Samodzielnie popraw swoją sytuację', 'Działaj na własną rękę'], correct: 0 },
        { id: 'ap4', question: 'The ball is in your court =', options: ['Piłka po twojej stronie', 'Teraz twoja kolej', 'Od ciebie zależy decyzja'], correct: 0 },
        { id: 'ap5', question: 'Bite off more than you can chew =', options: ['Wziąć na siebie za dużo', 'Przesadzić z zobowiązaniami', 'Nie docenić trudności'], correct: 0 },
        { id: 'ap6', question: 'Burn the midnight oil =', options: ['Pracować do późna w nocy', 'Palić północną oliwę', 'Ciężko pracować nocą'], correct: 0 },
        { id: 'ap7', question: 'Cut to the chase =', options: ['Przejść do sedna', 'Mówić konkretnie', 'Ominąć wstępy'], correct: 0 },
        { id: 'ap8', question: 'Get out of hand =', options: ['Wymknąć się spod kontroli', 'Stać się niekontrolowanym', 'Wyjść poza ramy'], correct: 0 },
        { id: 'ap9', question: 'Go down in flames =', options: ['Polec z hukiem', 'Spektakularna porażka', 'Klęska'], correct: 0 },
        { id: 'ap10', question: 'Hit the road =', options: ['Ruszać w drogę', 'Wyruszyć', 'Zacząć podróż'], correct: 0 },
        { id: 'ap11', question: 'In a New York minute =', options: ['Bardzo szybko', 'W mgnieniu oka', 'Natychmiast'], correct: 0 },
        { id: 'ap12', question: 'It takes two to tango =', options: ['Do tanga trzeba dwojga', 'Obie strony są odpowiedzialne', 'Wspólna wina'], correct: 0 },
        { id: 'ap13', question: 'On the same page =', options: ['Rozumieć się wzajemnie', 'Mieć te same cele', 'Być zgodnym'], correct: 0 },
        { id: 'ap14', question: 'The whole nine yards =', options: ['Wszystko co możliwe', 'Cały pakiet', 'Komplet'], correct: 0 },
        { id: 'ap15', question: 'Think outside the box =', options: ['Myśleć nieszablonowo', 'Wychodzić poza schematy', 'Kreatywne myślenie'], correct: 0 },
        { id: 'ap16', question: 'Put your money where your mouth is =', options: ['Dotrzymywać obietnic', 'Postawić pieniądze za słowa', 'Udowodnić czynami'], correct: 0 },
        { id: 'ap17', question: 'Play hardball =', options: ['Grać twardo', 'Być nieustępliwym', 'Stosować twarde metody'], correct: 0 },
        { id: 'ap18', question: 'The buck stops here =', options: ['Ostateczna odpowiedzialność tutaj', 'Koniec przerzucania winy', 'Tu zapadają decyzje'], correct: 0 },
        { id: 'ap19', question: 'Up the creek without a paddle =', options: ['W tarapatach', 'W trudnej sytuacji bez wyjścia', 'W kłopotach'], correct: 0 },
        { id: 'ap20', question: 'When the chips are down =', options: ['W decydującym momencie', 'Gdy sytuacja jest krytyczna', 'W trudnych czasach'], correct: 0 },
    ],

    // Amerykańskie - Zaawansowane
    'amerykanskie-zaawansowane': [
        { id: 'az1', question: 'Bend over backwards =', options: ['Starać się bardzo mocno', 'Wykonywać nadludzkie wysiłki', 'Być niezwykle pomocnym'], correct: 0 },
        { id: 'az2', question: 'Blow off steam =', options: ['Odreagować stres', 'Wyrzucić z siebie emocje', 'Zrelaksować się'], correct: 0 },
        { id: 'az3', question: 'Break the ice =', options: ['Przełamać lody', 'Rozluźnić atmosferę', 'Zapoczątkować rozmowę'], correct: 0 },
        { id: 'az4', question: 'Cut someone some slack =', options: ['Dać komuś trochę luzu', 'Być wyrozumiałym', 'Nie być zbyt surowym'], correct: 0 },
        { id: 'az5', question: 'Get your act together =', options: ['Wziąć się w garść', 'Zorganizować się', 'Poprawić swoje zachowanie'], correct: 0 },
        { id: 'az6', question: 'Go back to the drawing board =', options: ['Wrócić do punktu wyjścia', 'Zacząć od nowa', 'Przemyśleć strategię'], correct: 0 },
        { id: 'az7', question: 'Hang in there =', options: ['Trzymaj się', 'Nie poddawaj się', 'Wytrwaj'], correct: 0 },
        { id: 'az8', question: 'Hit the ground running =', options: ['Zacząć działać od razu', 'Być produktywnym od początku', 'Mieć dobry start'], correct: 0 },
        { id: 'az9', question: 'In the heat of the moment =', options: ['W przypływie emocji', 'Pod wpływem chwili', 'W emocjonalnym uniesieniu'], correct: 0 },
        { id: 'az10', question: 'Jump on the bandwagon =', options: ['Przyłączyć się do trendu', 'Iść za tłumem', 'Wskoczyć na popularny temat'], correct: 0 },
        { id: 'az11', question: 'Miss the boat =', options: ['Spóźnić się na okazję', 'Stracić szansę', 'Nie zdążyć'], correct: 0 },
        { id: 'az12', question: 'On the ball =', options: ['Być czujnym', 'Działać sprawnie', 'Być kompetentnym'], correct: 0 },
        { id: 'az13', question: 'Pull out all the stops =', options: ['Zrobić wszystko co możliwe', 'Wykorzystać wszystkie środki', 'Nie oszczędzać sił'], correct: 0 },
        { id: 'az14', question: 'The last straw =', options: ['Ostatnia kropla', 'Ostateczny powód', 'Granica cierpliwości'], correct: 0 },
        { id: 'az15', question: 'Wrap your head around something =', options: ['Zrozumieć coś trudnego', 'Ogarnąć umysłem', 'Pojąć skomplikowaną kwestię'], correct: 0 },
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
                    TOPICS['najpopularniejsze']?.find(t => t.id === topicId)?.title ||
                    TOPICS['zyciowe-madrosci']?.find(t => t.id === topicId)?.title ||
                    TOPICS['praca-biznes']?.find(t => t.id === topicId)?.title ||
                    TOPICS['przyjazn-milosc']?.find(t => t.id === topicId)?.title ||
                    TOPICS['angielskie-brytyjskie']?.find(t => t.id === topicId)?.title ||
                    TOPICS['amerykanskie']?.find(t => t.id === topicId)?.title
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

export default function ProverbsExercises() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const { lang } = useLanguage()
    const active = section ?? 'najpopularniejsze'
    const topicId = searchParams.get('topic')
    const basePath = `/cwiczenia/slownictwo/przyslowia/${active}`

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
                    <h2>Ćwiczenia: Przysłowia angielskie</h2>
                    <p className="muted">Sprawdź znajomość popularnych przysłów angielskich z tłumaczeniami</p>
                </header>

                <nav className="subnav" aria-label="Podstrony ćwiczeń: Przysłowia">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/cwiczenia/slownictwo/przyslowia/${s.id}`}
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
                                <h3>Ćwicz przysłowia angielskie! 🎯</h3>
                                <p>Wybierz kategorię i poziom trudności, aby sprawdzić swoją znajomość angielskich przysłów z tłumaczeniami na polski.</p>
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
                                        TOPICS['najpopularniejsze']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['zyciowe-madrosci']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['praca-biznes']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['przyjazn-milosc']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['angielskie-brytyjskie']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['amerykanskie']?.find(t => t.id === topicId)?.title
                                    }</h3>
                                    <p className="muted">{
                                        TOPICS['najpopularniejsze']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['zyciowe-madrosci']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['praca-biznes']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['przyjazn-milosc']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['angielskie-brytyjskie']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['amerykanskie']?.find(t => t.id === topicId)?.excerpt
                                    }</p>
                                </div>
                            </div>

                            <Quiz topicId={topicId} />

                            <div className="exercise-tips">
                                <h4>💡 Wskazówki do nauki przysłów</h4>
                                <div className="tips-grid">
                                    <div className="tip">
                                        <h5>Ucz się w kontekście</h5>
                                        <p>Łącz przysłowia z konkretnymi sytuacjami życiowymi</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Zapamiętuj historie</h5>
                                        <p>Wiele przysłów ma ciekawą historię pochodzenia</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Używaj w rozmowach</h5>
                                        <p>Staraj się używać przysłów w naturalnych konwersacjach</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Grupuj tematycznie</h5>
                                        <p>Ucz się przysłów w grupach tematycznych dla lepszego skojarzenia</p>
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
        ? 'Ćwiczenia: Przysłowia angielskie - popularne powiedzenia i mądrości'
        : 'Exercises: English Proverbs - popular sayings and wisdom'

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
        return `${sectionTitle} — Przysłowia — Ćwiczenia — AngloBoost`
    }

    // Domyślne (strona główna przysłów)
    return lang === 'pl'
        ? `${baseTitle} — AngloBoost`
        : `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang, section, topicId) {
    const baseDescription = {
        pl: 'Interaktywne ćwiczenia z angielskich przysłów. Testy i quizy z popularnymi powiedzeniami i mądrościami życiowymi pogrupowanymi tematycznie.',
        en: 'Interactive English proverbs exercises. Tests and quizzes with popular sayings and life wisdom grouped by topics.'
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
            ? `Ćwiczenia z przysłów angielskich: ${sectionTitle}. Interaktywne quizy i testy z popularnymi powiedzeniami i mądrościami życiowymi.`
            : `English proverbs exercises: ${sectionTitle}. Interactive quizzes and tests with popular sayings and life wisdom.`
    }

    // Domyślne (strona główna przysłów)
    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang, section = null, topicId = null) {
    const baseUrl = lang === 'pl'
        ? 'https://angloboost.pl/pl/cwiczenia/slownictwo/przyslowia'
        : 'https://angloboost.pl/en/exercises/vocabulary/proverbs'

    if (topicId) {
        return `${baseUrl}/${section}?topic=${topicId}`
    }

    if (section) {
        return `${baseUrl}/${section}`
    }

    return baseUrl
}

function getEnglishSectionTitle(sectionId) {
    const englishTitles = {
        'najpopularniejsze': 'Most Popular Proverbs',
        'zyciowe-madrosci': 'Life Wisdom Proverbs',
        'praca-biznes': 'Work and Business Proverbs',
        'przyjazn-milosc': 'Friendship and Love Proverbs',
        'angielskie-brytyjskie': 'English and British Proverbs',
        'amerykanskie': 'American Proverbs'
    }
    return englishTitles[sectionId] || 'English Proverbs'
}

function getEnglishTopicTitle(topicId) {
    const englishTitles = {
        'najpopularniejsze-praktyka': 'Popular Proverbs - Practice 📚',
        'najpopularniejsze-zaawansowane': 'Popular Proverbs - Advanced 🚀',
        'madrosci-praktyka': 'Life Wisdom Proverbs - Practice 📚',
        'madrosci-zaawansowane': 'Life Wisdom Proverbs - Advanced 🚀',
        'praca-praktyka': 'Work Proverbs - Practice 📚',
        'praca-zaawansowane': 'Work Proverbs - Advanced 🚀',
        'relacje-praktyka': 'Friendship and Love Proverbs - Practice 📚',
        'relacje-zaawansowane': 'Friendship and Love Proverbs - Advanced 🚀',
        'brytyjskie-praktyka': 'English Proverbs - Practice 📚',
        'brytyjskie-zaawansowane': 'English Proverbs - Advanced 🚀',
        'amerykanskie-praktyka': 'American Proverbs - Practice 📚',
        'amerykanskie-zaawansowane': 'American Proverbs - Advanced 🚀'
    }
    return englishTitles[topicId] || 'English Proverbs Exercises'
}

function getEnglishTopicExcerpt(topicId) {
    const englishExcerpts = {
        'najpopularniejsze-praktyka': '20 practical questions with the most common proverbs.',
        'najpopularniejsze-zaawansowane': '18 more difficult questions with advanced proverbs.',
        'madrosci-praktyka': '20 practical questions with life wisdom proverbs.',
        'madrosci-zaawansowane': '15 more difficult questions with philosophical proverbs.',
        'praca-praktyka': '20 practical questions with business proverbs.',
        'praca-zaawansowane': '15 more difficult questions with advanced proverbs.',
        'relacje-praktyka': '20 practical questions with relationship proverbs.',
        'relacje-zaawansowane': '15 more difficult questions with emotional proverbs.',
        'brytyjskie-praktyka': '20 practical questions with typically British proverbs.',
        'brytyjskie-zaawansowane': '15 more difficult questions with cultural proverbs.',
        'amerykanskie-praktyka': '20 practical questions with American proverbs.',
        'amerykanskie-zaawansowane': '15 more difficult questions with advanced proverbs.'
    }
    return englishExcerpts[topicId] || 'English proverbs exercises with examples.'
}