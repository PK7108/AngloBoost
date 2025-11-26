import React, { useMemo, useState, useEffect } from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import { useLanguage } from '../../../context/LanguageContext.jsx'
import useDocumentMeta from '../../../useDocumentMeta'
import '../../../styles/topic-cards.css'
import { useExerciseScores } from '../useExerciseScores'

const sections = [
    { id: 'pieniądze', label: 'Pieniądze' },
    { id: 'zwierzęta', label: 'Zwierzęta' },
    { id: 'najpopularniejsze', label: 'Najpopularniejsze' },
    { id: 'części-ciała', label: 'Części ciała' },
    { id: 'jedzenie', label: 'Jedzenie' },
    { id: 'praca-biznes', label: 'Praca i biznes' },
]

// DWA BLOKI zamiast trzech
const TOPICS = {
    'pieniądze': [
        { id: 'pieniadze-praktyka', title: 'Idiomy o pieniądzach - Praktyka 📚', excerpt: '15 pytań praktycznych z idiomami finansowymi.' },
        { id: 'pieniadze-zaawansowane', title: 'Idiomy o pieniądzach - Zaawansowane 🚀', excerpt: '12 trudniejszych pytań z zaawansowanymi idiomami.' },
    ],
    'zwierzęta': [
        { id: 'zwierzeta-praktyka', title: 'Idiomy o zwierzętach - Praktyka 📚', excerpt: '18 pytań praktycznych z idiomami zwierzęcymi.' },
        { id: 'zwierzeta-zaawansowane', title: 'Idiomy o zwierzętach - Zaawansowane 🚀', excerpt: '15 trudniejszych pytań z zaawansowanymi idiomami.' },
    ],
    'najpopularniejsze': [
        { id: 'popularne-praktyka', title: 'Popularne idiomy - Praktyka 📚', excerpt: '20 pytań praktycznych z najczęstszymi idiomami.' },
        { id: 'popularne-zaawansowane', title: 'Popularne idiomy - Zaawansowane 🚀', excerpt: '18 trudniejszych pytań z zaawansowanymi idiomami.' },
    ],
    'części-ciała': [
        { id: 'cialo-praktyka', title: 'Idiomy z częściami ciała - Praktyka 📚', excerpt: '20 pytań praktycznych z idiomami anatomicznymi.' },
        { id: 'cialo-zaawansowane', title: 'Idiomy z częściami ciała - Zaawansowane 🚀', excerpt: '15 trudniejszych pytań z zaawansowanymi idiomami.' },
    ],
    'jedzenie': [
        { id: 'jedzenie-praktyka', title: 'Idiomy o jedzeniu - Praktyka 📚', excerpt: '20 pytań praktycznych z idiomami kulinarnymi.' },
        { id: 'jedzenie-zaawansowane', title: 'Idiomy o jedzeniu - Zaawansowane 🚀', excerpt: '15 trudniejszych pytań z zaawansowanymi idiomami.' },
    ],
    'praca-biznes': [
        { id: 'praca-praktyka', title: 'Idiomy o pracy - Praktyka 📚', excerpt: '20 pytań praktycznych z idiomami biznesowymi.' },
        { id: 'praca-zaawansowane', title: 'Idiomy o pracy - Zaawansowane 🚀', excerpt: '15 trudniejszych pytań z zaawansowanymi idiomami.' },
    ],
}

const QUIZZES = {
    // Pieniądze - Praktyka
    'pieniadze-praktyka': [
        { id: 'm1', question: 'cost an arm and a leg =', options: ['tanie jak barszcz', 'kosztować fortunę', 'zarobić majątek'], correct: 1 },
        { id: 'm2', question: 'tighten your belt =', options: ['zaciskać pasa', 'zbić fortunę', 'oszukać kogoś'], correct: 0 },
        { id: 'm3', question: 'cash cow =', options: ['strata', 'dojna krowa', 'fałszywy trop'], correct: 1 },
        { id: 'm4', question: 'break the bank =', options: ['zarobić pieniądze', 'zrujnować budżet', 'otworzyć konto'], correct: 1 },
        { id: 'm5', question: 'born with a silver spoon in mouth =', options: ['urodzony w bogatej rodzinie', 'mieć talent do biznesu', 'być skąpym'], correct: 0 },
        { id: 'm6', question: 'make ends meet =', options: ['zarabiać dużo', 'wiązać koniec z końcem', 'inwestować pieniądze'], correct: 1 },
        { id: 'm7', question: 'money doesn\'t grow on trees =', options: ['pieniądze rosną szybko', 'pieniądze nie rosną na drzewach', 'pieniądze to nie wszystko'], correct: 1 },
        { id: 'm8', question: 'pay through the nose =', options: ['zapłacić mało', 'zapłacić horrendalną cenę', 'nie zapłacić wcale'], correct: 1 },
        { id: 'm9', question: 'save for a rainy day =', options: ['wydać wszystkie pieniądze', 'oszczędzać na czarną godzinę', 'pożyczyć pieniądze'], correct: 1 },
        { id: 'm10', question: 'flat broke =', options: ['być bogatym', 'być kompletnie bez grosza', 'mieć długi'], correct: 1 },
        { id: 'm11', question: 'rolling in money =', options: ['tracić pieniądze', 'pływać w pieniądzach', 'pożyczać pieniądze'], correct: 1 },
        { id: 'm12', question: 'pinch pennies =', options: ['wydawać bez umiaru', 'być skąpym', 'inwestować mądrze'], correct: 1 },
        { id: 'm13', question: 'worth its weight in gold =', options: ['bezwartościowe', 'warte swojej wagi w złocie', 'tanie'], correct: 1 },
        { id: 'm14', question: 'bring home the bacon =', options: ['kupować jedzenie', 'zarabiać na utrzymanie rodziny', 'gotować obiad'], correct: 1 },
        { id: 'm15', question: 'hit the jackpot =', options: ['przegrać pieniądze', 'trafić szóstkę w totka', 'zaoszczędzić'], correct: 1 },
    ],

    // Pieniądze - Zaawansowane
    'pieniadze-zaawansowane': [
        { id: 'ma1', question: 'feel the pinch =', options: ['czuć się bogatym', 'odczuwać brak pieniędzy', 'być zadowolonym'], correct: 1 },
        { id: 'ma2', question: 'money talks =', options: ['pieniądze milczą', 'pieniądze rządzą', 'pieniądze szczęścia nie dają'], correct: 1 },
        { id: 'ma3', question: 'nest egg =', options: ['zepsute jajko', 'oszczędności na przyszłość', 'stracona szansa'], correct: 1 },
        { id: 'ma4', question: 'on the house =', options: ['za darmo', 'w domu', 'drogie'], correct: 0 },
        { id: 'ma5', question: 'pour money down the drain =', options: ['oszczędzać', 'marnować pieniądze', 'inwestować mądrze'], correct: 1 },
        { id: 'ma6', question: 'rake in the money =', options: ['tracić pieniądze', 'zarabiać duże pieniądze', 'pożyczać'], correct: 1 },
        { id: 'ma7', question: 'see the color of someone\'s money =', options: ['ufać komuś', 'zobaczyć czy ktoś ma pieniądze', 'być podejrzliwym'], correct: 1 },
        { id: 'ma8', question: 'strapped for cash =', options: ['bogaty', 'mieć dużo gotówki', 'mieć mało pieniędzy'], correct: 2 },
        { id: 'ma9', question: 'throw money at something =', options: ['rozwiązać problem pieniędzmi', 'oszczędzać', 'ignorować'], correct: 0 },
        { id: 'ma10', question: 'time is money =', options: ['czas to pieniądz', 'pieniądze są ważniejsze', 'nie ma pośpiechu'], correct: 0 },
        { id: 'ma11', question: 'burn a hole in your pocket =', options: ['oszczędzać', 'chcieć szybko wydać pieniądze', 'stracić portfel'], correct: 1 },
        { id: 'ma12', question: 'live beyond your means =', options: ['żyć oszczędnie', 'wydawać więcej niż się zarabia', 'być bogatym'], correct: 1 },
    ],

    // Zwierzęta - Praktyka
    'zwierzeta-praktyka': [
        { id: 'a1', question: 'let the cat out of the bag =', options: ['zmarnować szansę', 'zdradzić sekret', 'podjąć ryzyko'], correct: 1 },
        { id: 'a2', question: 'wild goose chase =', options: ['daremny trud', 'skok na głęboką wodę', 'zmiana planów'], correct: 0 },
        { id: 'a3', question: 'the lion\'s share =', options: ['mała część', 'sprawiedliwy podział', 'lwia część'], correct: 2 },
        { id: 'a4', question: 'busy as a bee =', options: ['leniwy', 'zajęty jak pszczoła', 'wolny'], correct: 1 },
        { id: 'a5', question: 'sly as a fox =', options: ['głupi', 'chytry jak lis', 'odważny'], correct: 1 },
        { id: 'a6', question: 'stubborn as a mule =', options: ['elastyczny', 'uparty jak osioł', 'miły'], correct: 1 },
        { id: 'a7', question: 'like a fish out of water =', options: ['czuć się świetnie', 'jak ryba bez wody', 'być w swoim żywiole'], correct: 1 },
        { id: 'a8', question: 'kill two birds with one stone =', options: ['upiec dwie pieczenie na jednym ogniu', 'stracić czas', 'zrobić błąd'], correct: 0 },
        { id: 'a9', question: 'when pigs fly =', options: ['wkrótce', 'gdy świnie latają', 'często'], correct: 1 },
        { id: 'a10', question: 'elephant in the room =', options: ['mały problem', 'oczywisty problem', 'nieważna sprawa'], correct: 1 },
        { id: 'a11', question: 'black sheep of the family =', options: ['ulubieniec', 'czarna owca w rodzinie', 'najmłodszy'], correct: 1 },
        { id: 'a12', question: 'hold your horses =', options: ['przyspieszyć', 'zwolnić, poczekać', 'iść dalej'], correct: 1 },
        { id: 'a13', question: 'raining cats and dogs =', options: ['słabo pada', 'lać jak z cebra', 'być sucho'], correct: 1 },
        { id: 'a14', question: 'early bird catches the worm =', options: ['kto późno przychodzi', 'kto rano wstaje, temu Pan Bóg daje', 'lepiej późno niż wcale'], correct: 1 },
        { id: 'a15', question: 'wolf in sheep\'s clothing =', options: ['prawdziwy przyjaciel', 'wilk w owczej skórze', 'uczciwy człowiek'], correct: 1 },
        { id: 'a16', question: 'crocodile tears =', options: ['prawdziwy smutek', 'krokodyle łzy', 'radość'], correct: 1 },
        { id: 'a17', question: 'like a bull in a china shop =', options: ['delikatny', 'jak słoń w składzie porcelany', 'ostrożny'], correct: 1 },
        { id: 'a18', question: 'a dark horse =', options: ['przegrany', 'czarny koń', 'faworyt'], correct: 1 },
    ],

    // Zwierzęta - Zaawansowane
    'zwierzeta-zaawansowane': [
        { id: 'aa1', question: 'bird-brain =', options: ['mądry człowiek', 'głupek', 'ptasi móżdżek'], correct: 2 },
        { id: 'aa2', question: 'eager beaver =', options: ['leniwiec', 'bardzo pracowita osoba', 'nieśmiały'], correct: 1 },
        { id: 'aa3', question: 'loan shark =', options: ['pożyczkodawca', 'lichwiarz', 'bankier'], correct: 1 },
        { id: 'aa4', question: 'monkey business =', options: ['poważne sprawy', 'głupie lub nieuczciwe zachowanie', 'zabawa'], correct: 1 },
        { id: 'aa5', question: 'night owl =', options: ['ranny ptaszek', 'sowa', 'senny'], correct: 1 },
        { id: 'aa6', question: 'rat race =', options: ['spokojne życie', 'wyścig szczurów', 'zabawa'], correct: 1 },
        { id: 'aa7', question: 'smell a rat =', options: ['być podejrzliwym', 'czuć zapach', 'ufać'], correct: 0 },
        { id: 'aa8', question: 'straight from the horse\'s mouth =', options: ['z drugiej ręki', 'bezpośrednio od źródła', 'plotka'], correct: 1 },
        { id: 'aa9', question: 'until the cows come home =', options: ['krótko', 'bardzo długo', 'nigdy'], correct: 1 },
        { id: 'aa10', question: 'white elephant =', options: ['cenna rzecz', 'kosztowny i nieużyteczny przedmiot', 'prezent'], correct: 1 },
        { id: 'aa11', question: 'bird of a feather flock together =', options: ['przeciwieństwa się przyciągają', 'swój do swego ciągnie', 'obcy sobie'], correct: 1 },
        { id: 'aa12', question: 'canary in a coal mine =', options: ['ostrzeżenie', 'bezpieczeństwo', 'zagrożenie'], correct: 0 },
        { id: 'aa13', question: 'dog days of summer =', options: ['chłodne dni', 'najgorętsze dni lata', 'deszczowe dni'], correct: 1 },
        { id: 'aa14', question: 'fish or cut bait =', options: ['zdecydować się', 'czekać', 'uciekać'], correct: 0 },
        { id: 'aa15', question: 'grease the wheels =', options: ['utrudniać', 'ułatwiać', 'niszczyć'], correct: 1 },
    ],

    // Najpopularniejsze - Praktyka
    'popularne-praktyka': [
        { id: 'p1', question: 'once in a blue moon =', options: ['czasami', 'bardzo rzadko', 'zawsze'], correct: 1 },
        { id: 'p2', question: 'piece of cake =', options: ['łatwizna', 'coś trudnego', 'coś nowego'], correct: 0 },
        { id: 'p3', question: 'under the weather =', options: ['w znakomitej formie', 'kiepsko się czuć', 'bez humoru'], correct: 1 },
        { id: 'p4', question: 'bite the bullet =', options: ['uciekać', 'wziąć byka za rogi', 'odwlekać'], correct: 1 },
        { id: 'p5', question: 'break a leg =', options: ['połamania nóg', 'uważaj', 'szybkiego powrotu do zdrowia'], correct: 0 },
        { id: 'p6', question: 'cut corners =', options: ['robić dokładnie', 'iść na skróty', 'być uczciwym'], correct: 1 },
        { id: 'p7', question: 'get out of hand =', options: ['być pod kontrolą', 'wymknąć się spod kontroli', 'pomóc'], correct: 1 },
        { id: 'p8', question: 'go the extra mile =', options: ['zrobić minimum', 'zrobić coś ekstra', 'odpuścić'], correct: 1 },
        { id: 'p9', question: 'hang in there =', options: ['poddaj się', 'trzymaj się', 'odpocznij'], correct: 1 },
        { id: 'p10', question: 'it\'s not rocket science =', options: ['to bardzo trudne', 'to nie jest fizyka kwantowa', 'to skomplikowane'], correct: 1 },
        { id: 'p11', question: 'miss the boat =', options: ['zdążyć', 'spóźnić się', 'przyjść wcześnie'], correct: 1 },
        { id: 'p12', question: 'on cloud nine =', options: ['smutny', 'w siódmym niebie', 'zły'], correct: 1 },
        { id: 'p13', question: 'pull someone\'s leg =', options: ['pomóc komuś', 'robić kogoś w balona', 'wspierać kogoś'], correct: 1 },
        { id: 'p14', question: 'speak of the devil =', options: ['mówić dobrze', 'o wilku mowa', 'kłamać'], correct: 1 },
        { id: 'p15', question: 'the last straw =', options: ['pierwszy krok', 'ostatnia kropla', 'początek końca'], correct: 1 },
        { id: 'p16', question: 'through thick and thin =', options: ['tylko w dobrych czasach', 'na dobre i na złe', 'czasami'], correct: 1 },
        { id: 'p17', question: 'time flies =', options: ['czas stoi', 'czas leci', 'czas się dłuży'], correct: 1 },
        { id: 'p18', question: 'when hell freezes over =', options: ['wkrótce', 'gdy morze zamarznie', 'nigdy'], correct: 1 },
        { id: 'p19', question: 'your guess is as good as mine =', options: ['wiem na pewno', 'sam nie wiem', 'mogę się domyślić'], correct: 1 },
        { id: 'p20', question: 'hit the nail on the head =', options: ['minąć cel', 'trafić w sedno', 'pomylić się'], correct: 1 },
    ],

    // Najpopularniejsze - Zaawansowane
    'popularne-zaawansowane': [
        { id: 'pa1', question: 'a blessing in disguise =', options: ['oczywiste nieszczęście', 'pośrednie błogosławieństwo', 'ukryta korzyść'], correct: 2 },
        { id: 'pa2', question: 'beat around the bush =', options: ['mówić bezpośrednio', 'owijać w bawełnę', 'atakować'], correct: 1 },
        { id: 'pa3', question: 'burn your bridges =', options: ['budować mosty', 'palć za sobą mosty', 'naprawiać relacje'], correct: 1 },
        { id: 'pa4', question: 'caught between two stools =', options: ['mieć dwie opcje', 'siedzieć między dwoma krzesłami', 'być zdecydowanym'], correct: 1 },
        { id: 'pa5', question: 'cut to the chase =', options: ['przejść do sedna', 'uciekać', 'przedłużać'], correct: 0 },
        { id: 'pa6', question: 'devil\'s advocate =', options: ['adwokat diabła', 'obrońca', 'prokurator'], correct: 0 },
        { id: 'pa7', question: 'every cloud has a silver lining =', options: ['w każdej chmurze jest srebro', 'każde nieszczęście ma dobre strony', 'chmury przynoszą deszcz'], correct: 1 },
        { id: 'pa8', question: 'fit as a fiddle =', options: ['chory', 'w doskonałej formie', 'zmęczony'], correct: 1 },
        { id: 'pa9', question: 'get a taste of your own medicine =', options: ['dostać lekarstwo', 'doznać tego samego co się robi', 'wyzdrowieć'], correct: 1 },
        { id: 'pa10', question: 'give the benefit of the doubt =', options: ['być podejrzliwym', 'dać komuś kredyt zaufania', 'oskarżać'], correct: 1 },
        { id: 'pa11', question: 'jump on the bandwagon =', options: ['przyłączyć się do mody', 'walczyć z systemem', 'być oryginalnym'], correct: 0 },
        { id: 'pa12', question: 'make a long story short =', options: ['opowiedzieć długą historię', 'mówiąc krótko', 'skomplikować'], correct: 1 },
        { id: 'pa13', question: 'no pain, no gain =', options: ['bez bólu nie ma zysku', 'łatwo przyszło, łatwo poszło', 'lepiej zapobiegać'], correct: 0 },
        { id: 'pa14', question: 'off the record =', options: ['oficjalnie', 'nieoficjalnie', 'publicznie'], correct: 1 },
        { id: 'pa15', question: 'play it by ear =', options: ['planować dokładnie', 'improwizować', 'słuchać muzyki'], correct: 1 },
        { id: 'pa16', question: 'see eye to eye =', options: ['zgadzać się', 'spierać się', 'ignorować'], correct: 0 },
        { id: 'pa17', question: 'the best of both worlds =', options: ['najgorsze z obu światów', 'korzyści z dwóch opcji', 'kompromis'], correct: 1 },
        { id: 'pa18', question: 'up in the air =', options: ['pewne', 'niepewne', 'zakazane'], correct: 1 },
    ],

    // Części ciała - Praktyka
    'cialo-praktyka': [
        { id: 'b1', question: 'keep an eye on =', options: ['ruszać się', 'mieć oko na', 'patrzeć na zegar'], correct: 1 },
        { id: 'b2', question: 'get cold feet =', options: ['zniechęcić się', 'dostać pietra', 'przesadzić'], correct: 1 },
        { id: 'b3', question: 'learn by heart =', options: ['uczyć się na pamięć', 'uczyć się powoli', 'czytać po cichu'], correct: 0 },
        { id: 'b4', question: 'lend a hand =', options: ['prosić o pomoc', 'pomóc', 'odmówić pomocy'], correct: 1 },
        { id: 'b5', question: 'have a gut feeling =', options: ['być głodnym', 'mieć przeczucie', 'być chorym'], correct: 1 },
        { id: 'b6', question: 'head over heels =', options: ['być smutnym', 'po uszy zakochany', 'być zmęczonym'], correct: 1 },
        { id: 'b7', question: 'keep your fingers crossed =', options: ['być pesymistą', 'trzymać kciuki', 'być obojętnym'], correct: 1 },
        { id: 'b8', question: 'turn a blind eye =', options: ['być czujnym', 'przymknąć oko', 'krytykować'], correct: 1 },
        { id: 'b9', question: 'put your foot in your mouth =', options: ['zachować się mądrze', 'wsadzić kij w mrowisko', 'milczeć'], correct: 1 },
        { id: 'b10', question: 'have a big mouth =', options: ['być dyskretnym', 'mieć wielką gębę', 'być cichym'], correct: 1 },
        { id: 'b11', question: 'skin of your teeth =', options: ['z łatwością', 'o włos', 'z dużym zapasem'], correct: 1 },
        { id: 'b12', question: 'stick your neck out =', options: ['być ostrożnym', 'wystawić się', 'chronić się'], correct: 1 },
        { id: 'b13', question: 'give someone the cold shoulder =', options: ['przyjąć ciepło', 'potraktować ozięble', 'pomóc'], correct: 1 },
        { id: 'b14', question: 'have butterflies in your stomach =', options: ['być głodnym', 'mieć motyle w brzuchu', 'być spokojnym'], correct: 1 },
        { id: 'b15', question: 'keep your chin up =', options: ['poddawać się', 'głowa do góry', 'być smutnym'], correct: 1 },
        { id: 'b16', question: 'all ears =', options: ['głuchy', 'cały w słuch zamieniony', 'niezainteresowany'], correct: 1 },
        { id: 'b17', question: 'pain in the neck =', options: ['przyjemność', 'strasznie wkurzający', 'pomocny'], correct: 1 },
        { id: 'b18', question: 'cost an arm and a leg =', options: ['być tanim', 'kosztować fortunę', 'być darmowym'], correct: 1 },
        { id: 'b19', question: 'pull someone\'s leg =', options: ['pomagać komuś', 'żartować sobie z kogoś', 'ranić kogoś'], correct: 1 },
        { id: 'b20', question: 'break a leg =', options: ['życzyć powodzenia', 'życzyć pecha', 'krytykować'], correct: 0 },
    ],

    // Części ciała - Zaawansowane
    'cialo-zaawansowane': [
        { id: 'ba1', question: 'at your fingertips =', options: ['daleko', 'pod ręką', 'ukryte'], correct: 1 },
        { id: 'ba2', question: 'by the skin of your teeth =', options: ['z łatwością', 'o włos', 'z zapasem'], correct: 1 },
        { id: 'ba3', question: 'catch someone\'s eye =', options: ['ignorować kogoś', 'zwrócić na siebie uwagę', 'krytykować'], correct: 1 },
        { id: 'ba4', question: 'cross your fingers =', options: ['być przeciwko', 'trzymać kciuki', 'być obojętnym'], correct: 1 },
        { id: 'ba5', question: 'eye for an eye =', options: ['wybaczenie', 'wet za wet', 'kompromis'], correct: 1 },
        { id: 'ba6', question: 'get it off your chest =', options: ['ukrywać uczucia', 'wygadać się', 'zapomnieć'], correct: 1 },
        { id: 'ba7', question: 'have your head in the clouds =', options: ['być realistą', 'bujać w obłokach', 'być skupionym'], correct: 1 },
        { id: 'ba8', question: 'keep your nose clean =', options: ['wtrącać się', 'trzymać się z dala od kłopotów', 'być ciekawskim'], correct: 1 },
        { id: 'ba9', question: 'lose your head =', options: ['zachować spokój', 'stracić głowę', 'myśleć logicznie'], correct: 1 },
        { id: 'ba10', question: 'my hands are tied =', options: ['mam wolną rękę', 'jestem bezsilny', 'mogę pomóc'], correct: 1 },
        { id: 'ba11', question: 'play it by ear =', options: ['planować wszystko', 'improwizować', 'słuchać muzyki'], correct: 1 },
        { id: 'ba12', question: 'pull your socks up =', options: ['zrelaksować się', 'wziąć się w garść', 'odpocząć'], correct: 1 },
        { id: 'ba13', question: 'see eye to eye =', options: ['spierać się', 'zgadzać się', 'ignorować'], correct: 1 },
        { id: 'ba14', question: 'twist someone\'s arm =', options: ['namówić kogoś', 'pomóc komuś', 'zranić kogoś'], correct: 0 },
        { id: 'ba15', question: 'win hands down =', options: ['przegrać', 'wygrać łatwo', 'walczyć'], correct: 1 },
    ],

    // Jedzenie - Praktyka
    'jedzenie-praktyka': [
        { id: 'f1', question: 'piece of cake =', options: ['coś trudnego', 'bułka z masłem', 'niesmaczne'], correct: 1 },
        { id: 'f2', question: 'spill the beans =', options: ['ukrywać prawdę', 'wysypać wszystko', 'gotować'], correct: 1 },
        { id: 'f3', question: 'the apple of my eye =', options: ['coś niechcianego', 'oczko w głowie', 'problem'], correct: 1 },
        { id: 'f4', question: 'big cheese =', options: ['mało ważna osoba', 'wielka szycha', 'pomocnik'], correct: 1 },
        { id: 'f5', question: 'bread and butter =', options: ['luksus', 'podstawa utrzymania', 'dodatek'], correct: 1 },
        { id: 'f6', question: 'bring home the bacon =', options: ['kupować jedzenie', 'zarabiać na chleb', 'gotować obiad'], correct: 1 },
        { id: 'f7', question: 'cool as a cucumber =', options: ['nerwowy', 'spokojny jak żółw', 'podekscytowany'], correct: 1 },
        { id: 'f8', question: 'cup of tea =', options: ['coś nieprzyjemnego', 'czyjś gust', 'obojętne'], correct: 1 },
        { id: 'f9', question: 'egg on your face =', options: ['być dumnym', 'być w głupiej sytuacji', 'być mądrym'], correct: 1 },
        { id: 'f10', question: 'food for thought =', options: ['głupie pomysły', 'poważna sprawa do przemyślenia', 'bzdura'], correct: 1 },
        { id: 'f11', question: 'full of beans =', options: ['zmęczony', 'pełen energii', 'głodny'], correct: 1 },
        { id: 'f12', question: 'go bananas =', options: ['uspokoić się', 'oszaleć', 'zamilknąć'], correct: 1 },
        { id: 'f13', question: 'hard nut to crack =', options: ['łatwe zadanie', 'twardy orzech do zgryzienia', 'prosty problem'], correct: 1 },
        { id: 'f14', question: 'hot potato =', options: ['łatwy temat', 'drażliwy temat', 'nudna sprawa'], correct: 1 },
        { id: 'f15', question: 'in a nutshell =', options: ['szczegółowo', 'w skrócie', 'długo'], correct: 1 },
        { id: 'f16', question: 'like two peas in a pod =', options: ['całkiem różni', 'jak dwie krople wody', 'obcy sobie'], correct: 1 },
        { id: 'f17', question: 'salt of the earth =', options: ['zły człowiek', 'sol ziemi', 'bezużyteczny'], correct: 1 },
        { id: 'f18', question: 'sell like hot cakes =', options: ['nie sprzedawać się', 'rozchodzić się jak świeże bułeczki', 'być przecenionym'], correct: 1 },
        { id: 'f19', question: 'take with a grain of salt =', options: ['wierzyć bezgranicznie', 'traktować z rezerwą', 'akceptować całkowicie'], correct: 1 },
        { id: 'f20', question: 'walking on eggshells =', options: ['czuć się swobodnie', 'chodzić jak po jajkach', 'być pewnym siebie'], correct: 1 },
    ],

    // Jedzenie - Zaawansowane
    'jedzenie-zaawansowane': [
        { id: 'fa1', question: 'apple of discord =', options: ['symbol zgody', 'jądro niezgody', 'prezent'], correct: 1 },
        { id: 'fa2', question: 'bad egg =', options: ['zepsute jajko', 'nieuczciwa osoba', 'dobry człowiek'], correct: 1 },
        { id: 'fa3', question: 'bite the hand that feeds you =', options: ['być wdzięcznym', 'kąsać rękę, która karmi', 'pomagać'], correct: 1 },
        { id: 'fa4', question: 'butter someone up =', options: ['krytykować kogoś', 'pochlebiać komuś', 'ignorować kogoś'], correct: 1 },
        { id: 'fa5', question: 'chew the fat =', options: ['ćwiczyć', 'pogadać', 'jeść'], correct: 1 },
        { id: 'fa6', question: 'cry over spilt milk =', options: ['cieszyć się', 'płakać nad rozlanym mlekiem', 'naprawiać'], correct: 1 },
        { id: 'fa7', question: 'easy as pie =', options: ['trudne', 'łatwe jak bułka z masłem', 'skomplikowane'], correct: 1 },
        { id: 'fa8', question: 'finger in the pie =', options: ['być niezainteresowanym', 'mieć w tym palce', 'pomagać'], correct: 1 },
        { id: 'fa9', question: 'hard cheese =', options: ['łatwe życie', 'pech', 'szczęście'], correct: 1 },
        { id: 'fa10', question: 'in a pickle =', options: ['w trudnej sytuacji', 'w łatwej sytuacji', 'w bezpieczeństwie'], correct: 0 },
        { id: 'fa11', question: 'lay an egg =', options: ['odnieść sukces', 'ponieść porażkę', 'zrobić jajecznicę'], correct: 1 },
        { id: 'fa12', question: 'nutty as a fruitcake =', options: ['normalny', 'szalony', 'smutny'], correct: 1 },
        { id: 'fa13', question: 'out to lunch =', options: ['skupiony', 'nieobecny duchem', 'głodny'], correct: 1 },
        { id: 'fa14', question: 'peaches and cream =', options: ['problemy', 'idealna sytuacja', 'chaos'], correct: 1 },
        { id: 'fa15', question: 'use your noodle =', options: ['myśleć', 'jeść', 'odpoczywać'], correct: 0 },
    ],

    // Praca i biznes - Praktyka
    'praca-praktyka': [
        { id: 'w1', question: 'think outside the box =', options: ['myśleć schematycznie', 'myśleć nieszablonowo', 'nie myśleć wcale'], correct: 1 },
        { id: 'w2', question: 'ballpark figure =', options: ['dokładna kwota', 'przybliżona kwota', 'minimalna cena'], correct: 1 },
        { id: 'w3', question: 'get the ball rolling =', options: ['zatrzymać projekt', 'zapoczątkować coś', 'zakończyć dyskusję'], correct: 1 },
        { id: 'w4', question: 'back to the drawing board =', options: ['kontynuować', 'wrócić do punktu wyjścia', 'świętować sukces'], correct: 1 },
        { id: 'w5', question: 'cutting corners =', options: ['robić dokładnie', 'iść na skróty', 'być uczciwym'], correct: 1 },
        { id: 'w6', question: 'learn the ropes =', options: ['nauczyć się podstaw', 'być ekspertem', 'zapomnieć wszystko'], correct: 0 },
        { id: 'w7', question: 'on the same page =', options: ['mieć różne zdania', 'rozumieć się wzajemnie', 'być w konflikcie'], correct: 1 },
        { id: 'w8', question: 'raise the bar =', options: ['obniżyć standardy', 'podnieść poprzeczkę', 'pozostać przy starym'], correct: 1 },
        { id: 'w9', question: 'touch base =', options: ['unikać kontaktu', 'skontaktować się', 'zapomnieć o kimś'], correct: 1 },
        { id: 'w10', question: 'win-win situation =', options: ['sytuacja przegrana', 'sytuacja, w której wszyscy wygrywają', 'kompromis'], correct: 1 },
        { id: 'w11', question: 'blue-collar worker =', options: ['pracownik umysłowy', 'robotnik fizyczny', 'dyrektor'], correct: 1 },
        { id: 'w12', question: 'white-collar worker =', options: ['robotnik', 'pracownik umysłowy', 'bezrobotny'], correct: 1 },
        { id: 'w13', question: 'golden handshake =', options: ['kara', 'odszkodowanie za odejście z pracy', 'premia'], correct: 1 },
        { id: 'w14', question: 'climb the corporate ladder =', options: ['stracić pracę', 'awansować w firmie', 'zmienić zawód'], correct: 1 },
        { id: 'w15', question: 'glass ceiling =', options: ['przejrzysta struktura', 'niewidzialna bariera awansu', 'awans'], correct: 1 },
        { id: 'w16', question: 'burn the midnight oil =', options: ['wcześnie kończyć', 'pracować do późna w nocy', 'odpoczywać'], correct: 1 },
        { id: 'w17', question: 'call it a day =', options: ['zacząć pracę', 'zakończyć pracę na dziś', 'pracować w weekend'], correct: 1 },
        { id: 'w18', question: 'get down to business =', options: ['odwlekać', 'przejść do rzeczy', 'żartować'], correct: 1 },
        { id: 'w19', question: 'in the pipeline =', options: ['zakończone', 'w przygotowaniu', 'porzucone'], correct: 1 },
        { id: 'w20', question: 'put all your eggs in one basket =', options: ['dywersyfikować', 'postawić wszystko na jedną kartę', 'być ostrożnym'], correct: 1 },
    ],

    // Praca i biznes - Zaawansowane
    'praca-zaawansowane': [
        { id: 'wa1', question: 'ahead of the curve =', options: ['w tyle', 'na czele', 'średniak'], correct: 1 },
        { id: 'wa2', question: 'boil the ocean =', options: ['robić coś prostego', 'próbować niemożliwego', 'gotować wodę'], correct: 1 },
        { id: 'wa3', question: 'circle the wagons =', options: ['atakować', 'zjednoczyć się przeciw zagrożeniu', 'uciekać'], correct: 1 },
        { id: 'wa4', question: 'dot the i\'s and cross the t\'s =', options: ['być niedbałym', 'dopracować szczegóły', 'ignorować'], correct: 1 },
        { id: 'wa5', question: 'elephant in the room =', options: ['mały problem', 'oczywisty nieporuszany problem', 'radość'], correct: 1 },
        { id: 'wa6', question: 'get the show on the road =', options: ['zakończyć', 'zacząć działanie', 'opóźniać'], correct: 1 },
        { id: 'wa7', question: 'in the driver\'s seat =', options: ['pod kontrolą', 'poza kontrolą', 'pasażer'], correct: 0 },
        { id: 'wa8', question: 'low-hanging fruit =', options: ['trudne cele', 'łatwe do osiągnięcia cele', 'niemożliwe'], correct: 1 },
        { id: 'wa9', question: 'move the goalposts =', options: ['utrzymać zasady', 'zmienić warunki', 'grać fair'], correct: 1 },
        { id: 'wa10', question: 'on the back burner =', options: ['priorytet', 'odłożone na później', 'gotowe'], correct: 1 },
        { id: 'wa11', question: 'paradigm shift =', options: ['drobna zmiana', 'fundamentalna zmiana', 'brak zmiany'], correct: 1 },
        { id: 'wa12', question: 'run it up the flagpole =', options: ['zataić', 'przedstawić pomysł', 'krytykować'], correct: 1 },
        { id: 'wa13', question: 'sweeten the deal =', options: ['pogorszyć ofertę', 'ulepszyć ofertę', 'odrzucić'], correct: 1 },
        { id: 'wa14', question: 'think on your feet =', options: ['planować zawczasu', 'improwizować', 'zwlekać'], correct: 1 },
        { id: 'wa15', question: 'value proposition =', options: ['obietnica wartości', 'koszt', 'problem'], correct: 0 },
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
                    TOPICS['pieniądze']?.find(t => t.id === topicId)?.title ||
                    TOPICS['zwierzęta']?.find(t => t.id === topicId)?.title ||
                    TOPICS['najpopularniejsze']?.find(t => t.id === topicId)?.title ||
                    TOPICS['części-ciała']?.find(t => t.id === topicId)?.title ||
                    TOPICS['jedzenie']?.find(t => t.id === topicId)?.title ||
                    TOPICS['praca-biznes']?.find(t => t.id === topicId)?.title
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

export default function IdiomsExercises() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const { lang } = useLanguage()
    const active = section ?? 'pieniądze'
    const topicId = searchParams.get('topic')
    const basePath = `/cwiczenia/slownictwo/idiomy/${active}`

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
                    <h2>Ćwiczenia: Idiomy</h2>
                    <p className="muted">Sprawdź rozumienie popularnych idiomów angielskich</p>
                </header>

                <nav className="subnav" aria-label="Podstrony ćwiczeń: Idiomy">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/cwiczenia/slownictwo/idiomy/${s.id}`}
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
                                <h3>Ćwicz idiomy angielskie! 🎯</h3>
                                <p>Wybierz poziom trudności, aby sprawdzić swoją znajomość popularnych idiomów angielskich.</p>
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
                                        TOPICS['pieniądze']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['zwierzęta']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['najpopularniejsze']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['części-ciała']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['jedzenie']?.find(t => t.id === topicId)?.title ||
                                        TOPICS['praca-biznes']?.find(t => t.id === topicId)?.title
                                    }</h3>
                                    <p className="muted">{
                                        TOPICS['pieniądze']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['zwierzęta']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['najpopularniejsze']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['części-ciała']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['jedzenie']?.find(t => t.id === topicId)?.excerpt ||
                                        TOPICS['praca-biznes']?.find(t => t.id === topicId)?.excerpt
                                    }</p>
                                </div>
                            </div>

                            <Quiz topicId={topicId} />

                            <div className="exercise-tips">
                                <h4>💡 Wskazówki do nauki idiomów</h4>
                                <div className="tips-grid">
                                    <div className="tip">
                                        <h5>Ucz się w kontekście</h5>
                                        <p>Łącz idiomy z konkretnymi sytuacjami i zdaniami</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Twórz skojarzenia</h5>
                                        <p>Łącz idiomy z obrazami lub historiami dla lepszego zapamiętania</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Używaj w praktyce</h5>
                                        <p>Staraj się używać nowych idiomów w rozmowie lub pisaniu</p>
                                    </div>
                                    <div className="tip">
                                        <h5>Grupuj tematycznie</h5>
                                        <p>Ucz się idiomów w grupach tematycznych dla lepszego skojarzenia</p>
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
        ? 'Ćwiczenia: Idiomy angielskie - popularne wyrażenia i zwroty'
        : 'Exercises: English Idioms - popular expressions and phrases'

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
        return `${sectionTitle} — Idiomy — Ćwiczenia — AngloBoost`
    }

    // Domyślne (strona główna idiomów)
    return lang === 'pl'
        ? `${baseTitle} — AngloBoost`
        : `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang, section, topicId) {
    const baseDescription = {
        pl: 'Interaktywne ćwiczenia z angielskich idiomów. Testy i quizy z popularnymi wyrażeniami idiomatycznymi pogrupowanymi tematycznie.',
        en: 'Interactive English idioms exercises. Tests and quizzes with popular idiomatic expressions grouped by topics.'
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
            ? `Ćwiczenia z idiomów angielskich: ${sectionTitle}. Interaktywne quizy i testy z popularnymi wyrażeniami idiomatycznymi.`
            : `English idioms exercises: ${sectionTitle}. Interactive quizzes and tests with popular idiomatic expressions.`
    }

    // Domyślne (strona główna idiomów)
    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang, section = null, topicId = null) {
    const baseUrl = lang === 'pl'
        ? 'https://angloboost.pl/pl/cwiczenia/slownictwo/idiomy'
        : 'https://angloboost.pl/en/exercises/vocabulary/idioms'

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
        'pieniądze': 'Money Idioms',
        'zwierzęta': 'Animal Idioms',
        'najpopularniejsze': 'Most Popular Idioms',
        'części-ciała': 'Body Parts Idioms',
        'jedzenie': 'Food Idioms',
        'praca-biznes': 'Work and Business Idioms'
    }
    return englishTitles[sectionId] || 'English Idioms'
}

function getEnglishTopicTitle(topicId) {
    const englishTitles = {
        'pieniadze-praktyka': 'Money Idioms - Practice 📚',
        'pieniadze-zaawansowane': 'Money Idioms - Advanced 🚀',
        'zwierzeta-praktyka': 'Animal Idioms - Practice 📚',
        'zwierzeta-zaawansowane': 'Animal Idioms - Advanced 🚀',
        'popularne-praktyka': 'Popular Idioms - Practice 📚',
        'popularne-zaawansowane': 'Popular Idioms - Advanced 🚀',
        'cialo-praktyka': 'Body Parts Idioms - Practice 📚',
        'cialo-zaawansowane': 'Body Parts Idioms - Advanced 🚀',
        'jedzenie-praktyka': 'Food Idioms - Practice 📚',
        'jedzenie-zaawansowane': 'Food Idioms - Advanced 🚀',
        'praca-praktyka': 'Work Idioms - Practice 📚',
        'praca-zaawansowane': 'Work Idioms - Advanced 🚀'
    }
    return englishTitles[topicId] || 'English Idioms Exercises'
}

function getEnglishTopicExcerpt(topicId) {
    const englishExcerpts = {
        'pieniadze-praktyka': '15 practical questions with financial idioms.',
        'pieniadze-zaawansowane': '12 more difficult questions with advanced idioms.',
        'zwierzeta-praktyka': '18 practical questions with animal idioms.',
        'zwierzeta-zaawansowane': '15 more difficult questions with advanced idioms.',
        'popularne-praktyka': '20 practical questions with the most common idioms.',
        'popularne-zaawansowane': '18 more difficult questions with advanced idioms.',
        'cialo-praktyka': '20 practical questions with anatomical idioms.',
        'cialo-zaawansowane': '15 more difficult questions with advanced idioms.',
        'jedzenie-praktyka': '20 practical questions with culinary idioms.',
        'jedzenie-zaawansowane': '15 more difficult questions with advanced idioms.',
        'praca-praktyka': '20 practical questions with business idioms.',
        'praca-zaawansowane': '15 more difficult questions with advanced idioms.'
    }
    return englishExcerpts[topicId] || 'English idioms exercises with examples.'
}