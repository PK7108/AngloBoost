// exercise-interactions-optimized.js
export function initializeGrammarExercises() {

    const exerciseContainers = document.querySelectorAll('.practice-exercise');

    if (exerciseContainers.length === 0) {
        return;
    }

    console.log(`📚 Znaleziono ${exerciseContainers.length} kontenerów ćwiczeń`);

    exerciseContainers.forEach((container, index) => {
        if (container.dataset.initialized !== 'true') {
            initializeExercise(container);
        }
    });
}

function initializeExercise(exerciseContainer) {
    exerciseContainer.dataset.initialized = 'true';

    const checkButton = exerciseContainer.querySelector('.check-answers');
    const resetButton = exerciseContainer.querySelector('.reset-exercise');
    const resultDisplay = exerciseContainer.querySelector('.exercise-result');

    if (!checkButton) {
        return;
    }

    // Definiujemy poprawne odpowiedzi - NIE WIDOCZNE DLA USERA
    const correctAnswers = detectCorrectAnswers(exerciseContainer);
    let selectedAnswers = {};

    // Upewnij się, że każdy element ma miejsce na feedback
    const items = exerciseContainer.querySelectorAll('.exercise-item');
    items.forEach(item => {
        if (!item.querySelector('.exercise-feedback')) {
            const fb = document.createElement('div');
            fb.className = 'exercise-feedback';
            fb.style.display = 'none';
            const p = document.createElement('p');
            p.className = 'explanation';
            fb.appendChild(p);
            item.appendChild(fb);
        }
    });

    console.log(`✅ Poprawne odpowiedzi:`, correctAnswers);

    // Obsługa zaznaczania opcji
    exerciseContainer.addEventListener('change', function(e) {
        if (e.target.type === 'radio') {
            const questionId = e.target.name;
            selectedAnswers[questionId] = e.target.value;

            // Aktualizacja wizualnej selekcji
            updateOptionSelection(exerciseContainer, questionId);
            updateCheckButtonState();
        }
    });

    // Sprawdź odpowiedzi
    checkButton.addEventListener('click', function() {
        const score = checkAnswers(exerciseContainer, selectedAnswers, correctAnswers);
        showResult(score, Object.keys(correctAnswers).length, resultDisplay);

        checkButton.style.display = 'none';
        if (resetButton) resetButton.style.display = 'inline-block';
    });

    // Reset ćwiczenia
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            resetExercise(exerciseContainer, selectedAnswers, checkButton, resetButton, resultDisplay);
        });
    }

    updateCheckButtonState();

    function updateOptionSelection(container, questionId) {
        const options = container.querySelectorAll(`input[name="${questionId}"]`);
        options.forEach(opt => {
            const parent = opt.parentElement;
            parent.classList.toggle('selected', opt.checked);
        });
    }

    function checkAnswers(container, selectedAnswers, correctAnswers) {
        let score = 0;

        Object.keys(correctAnswers).forEach(questionId => {
            const userAnswer = selectedAnswers[questionId];
            const correctAnswer = correctAnswers[questionId];
            const options = container.querySelectorAll(`input[name="${questionId}"]`);

            // Zaznacz poprawne i niepoprawne odpowiedzi
            options.forEach(opt => {
                const parent = opt.parentElement;
                if (opt.value === correctAnswer) {
                    parent.classList.add('correct-answer');
                } else if (opt.value === userAnswer && userAnswer !== correctAnswer) {
                    parent.classList.add('wrong-answer');
                }
            });

            // Pokaż feedback
            const feedback = container.querySelector(`input[name="${questionId}"]`)?.closest('.exercise-item')?.querySelector('.exercise-feedback');
            if (feedback) {
                feedback.style.display = 'block';
                const explanation = feedback.querySelector('.explanation');

                if (userAnswer === correctAnswer) {
                    explanation.className = 'explanation correct';
                    explanation.textContent = getMixedConditionalsFeedback(questionId, true);
                    score++;
                } else {
                    explanation.className = 'explanation incorrect';
                    explanation.textContent = getMixedConditionalsFeedback(questionId, false, correctAnswer);
                }
            }
        });

        return score;
    }

    function getMixedConditionalsFeedback(questionId, isCorrect, correctAnswer = '') {
        const correctFeedbacks = {
            // Mixed combinations comprehensive
            'mixed1': '✅ Doskonale! Past Perfect w warunku + would w wyniku dla teraźniejszości',
            'mixed2': '✅ Poprawnie! Obecna cecha (were careful) → przeszły skutek (wouldn\'t have spent)',
            'mixed3': '✅ Świetnie! "might" wyraża możliwość, nie pewność wyniku',
            'mixed4': '✅ Dobrze! Poprawiona forma: Past Perfect zamiast "would have" w warunku',
            'mixed5': '✅ Doskonale! "were" dla hipotetycznej teraźniejszości + "would have applied" dla przeszłości',

            // Mixed form comprehensive
            'mixed_form1': '✅ Doskonale! Past Perfect (had studied) → would have (obecny skutek)',
            'mixed_form2': '✅ Poprawnie! Past Simple (were) → would have asked (przeszła akcja)',
            'mixed_form3': '✅ Świetnie! Past Perfect przeczący (hadn\'t moved) → would have przeczący',
            'mixed_form4': '✅ Dobrze! Obecna preferencja (liked) → przeszła możliwość (would have prepared)',
            'mixed_form5': '✅ Doskonale! Przeszła inwestycja → obecny status finansowy',

            // Third conditional comprehensive
            'third1': '✅ Doskonale! If + Past Perfect, would have + past participle',
            'third2': '✅ Poprawnie! Hipotetyczna sytuacja w przeszłości',
            'third3': '✅ Świetnie! Przeczenie w Past Perfect → przeczenie w would have',
            'third4': '✅ Dobrze! "could have" wyraża utracone możliwości',
            'third5': '✅ Doskonale! Wyrażanie żalu dotyczącego przeszłych decyzji',
            'third6': '✅ Bardzo dobrze! Spekulacje historyczne - co by było gdyby...',
            'third7': '✅ Świetnie! Krytyka przeszłych działań + could have dla możliwości',
            'third8': '✅ Poprawnie! Refleksje nad alternatywnymi scenariuszami',

            // Second conditional comprehensive - SEKCJA 1
            'second1': '✅ Doskonale! Past Simple po "if", "would" w wyniku',
            'second2': '✅ Poprawnie! "could" wyraża możliwość w hipotetycznej sytuacji',
            'second3': '✅ Świetnie! "were" dla wszystkich osób w Second Conditional',
            'second4': '✅ Dobrze! Przeczenie w Past Simple + "would"',
            'second5': '✅ Doskonale! Hipotetyczna wiedza → hipotetyczna reakcja',
            'second6': '✅ Bardzo dobrze! Hipotetyczne warunki → hipotetyczne działania',

            // Second practice comprehensive - SEKCJA 2
            'second_prac1': '✅ Doskonale! First: realna możliwość | Second: sytuacja hipotetyczna',
            'second_prac2': '✅ Poprawnie! First: prawdopodobne | Second: mało prawdopodobne',
            'second_prac3': '✅ Świetnie! Past Continuous dla czynności w toku',
            'second_prac4': '✅ Dobrze! "were" dla wszystkich osób + "would"',
            'second_prac5': '✅ Doskonale! "could" wyraża hipotetyczną możliwość',
            'second_prac6': '✅ Bardzo dobrze! Nierealne marzenia wymagają Second Conditional',

            'first1': '✅ Doskonale! Present Simple po "if", "will" w wyniku',
            'first2': '✅ Poprawnie! Realna możliwość w przyszłości',
            'first3': '✅ Świetnie! Ostrzeżenie o przyszłych konsekwencjach',
            'first4': '✅ Dobrze! Plan na wypadek konkretnej sytuacji',
            'first5': '✅ Doskonale! Przyszła możliwość zależna od warunku',
            'first6': '✅ Bardzo dobrze! Warunkowa obietnica pomocy',

            // First alternatives comprehensive - SEKCJA 2
            'first_alt1': '✅ Doskonale! "might" wyraża możliwość',
            'first_alt2': '✅ Poprawnie! Tryb rozkazujący dla instrukcji',
            'first_alt3': '✅ Świetnie! "going to" dla planów i zamiarów',
            'first_alt4': '✅ Dobrze! "can" dla oferty pomocy',
            'first_alt5': '✅ Doskonale! "must" dla obowiązku',
            'first_alt6': '✅ Bardzo dobrze! "should" dla rady',

            // Zero conditional comprehensive - SEKCJA 1
            'zero1': '✅ Doskonale! Present Simple dla faktów naukowych',
            'zero2': '✅ Poprawnie! Present Simple w obu częściach - ogólna prawda',
            'zero3': '✅ Świetnie! Opis standardowej procedury',
            'zero4': '✅ Dobrze! Fakt biologiczny wymaga Present Simple',
            'zero5': '✅ Doskonale! Fakt naukowy - zawsze prawdziwe',
            'zero6': '✅ Bardzo dobrze! Zjawisko fizyczne - Present Simple',

            // Zero variations comprehensive - SEKCJA 2
            'zero_var1': '✅ Doskonale! Present Simple + "should" - poprawna konstrukcja',
            'zero_var2': '✅ Poprawnie! Gdy "if" na początku, używamy przecinka',
            'zero_var3': '✅ Świetnie! Present Simple + tryb rozkazujący dla instrukcji',
            'zero_var4': '✅ Dobrze! Present Continuous opisuje czynność w trakcie',
            'zero_var5': '✅ Doskonale! "can" wyraża możliwość w Zero Conditional',
            'zero_var6': '✅ Bardzo dobrze! "must" wyraża obowiązek',

            'passive_simple1': '✅ Doskonale! Present Simple Passive dla regularnych czynności',
            'passive_simple2': '✅ Poprawnie! Past Simple Passive dla wydarzeń historycznych',
            'passive_simple3': '✅ Świetnie! Future Simple Passive dla planowanych działań',
            'passive_simple4': '✅ Dobrze! Present Simple Passive dla faktów ogólnych',
            'passive_simple5': '✅ Doskonale! Present Simple Passive dla codziennych rutyn',
            'passive_simple6': '✅ Bardzo dobrze! Future Simple Passive dla przyszłych planów',

            // Passive Continuous forms comprehensive
            'passive_cont1': '✅ Doskonale! Present Continuous Passive - czynność w trakcie teraz',
            'passive_cont2': '✅ Poprawnie! Past Continuous Passive - czynność w trakcie w przeszłości',
            'passive_cont3': '✅ Świetnie! Perfect Continuous Passive nie istnieje - używamy Present Perfect',
            'passive_cont4': '✅ Dobrze! Future Continuous Passive nie istnieje - używamy Future Simple',
            'passive_cont5': '✅ Doskonale! Present Continuous dla czynności właśnie trwających',
            'passive_cont6': '✅ Bardzo dobrze! Past Continuous dla tła w przeszłości',

            // Passive Perfect forms comprehensive
            'passive_perfect1': '✅ Doskonale! Present Perfect Passive - rezultat wpływa na teraźniejszość',
            'passive_perfect2': '✅ Poprawnie! Past Perfect Passive - wcześniejsza przeszłość',
            'passive_perfect3': '✅ Świetnie! Future Perfect Passive - ukończenie przed przyszłym momentem',
            'passive_perfect4': '✅ Dobrze! Present Perfect Passive - doświadczenie do teraz',
            'passive_perfect5': '✅ Doskonale! Past Perfect - czynność przed innym momentem przeszłym',
            'passive_perfect6': '✅ Bardzo dobrze! Future Perfect - prognoza ukończenia',

            // Passive Usage and exceptions comprehensive
            'passive_usage1': '✅ Doskonale! "have" w znaczeniu posiadać nie tworzy strony biernej',
            'passive_usage2': '✅ Poprawnie! Strona bierna jest bardziej formalna i obiektywna',
            'passive_usage3': '✅ Świetnie! Czasowniki emocji rzadko używane w stronie biernej',
            'passive_usage4': '✅ Dobrze! W mowie potocznej strona czynna jest bardziej naturalna',
            'passive_usage5': '✅ Doskonale! "resemble" nie tworzy strony biernej',
            'passive_usage6': '✅ Bardzo dobrze! Strona bierna jest obiektywna w raportach naukowych',

            // Modal verbs passive comprehensive - NOWA SEKCJA
            'modal_passive1': '✅ Doskonale! Modal + be + past participle - poprawna konstrukcja',
            'modal_passive2': '✅ Poprawnie! "must be completed" wyraża obowiązek',
            'modal_passive3': '✅ Świetnie! "can be seen" wyraża możliwość',
            'modal_passive4': '✅ Dobrze! "should be considered" daje radę',
            'modal_passive5': '✅ Doskonale! "might be delayed" wyraża niepewność',
            'modal_passive6': '✅ Bardzo dobrze! "ought to be done" wyraża zalecenie',

            'present1': '✅ Doskonale! Brak backshiftu - zachowujemy Present Continuous',
            'present2': '✅ Poprawnie! Zmiana zaimków i określeń czasu',
            'present3': '✅ Świetnie! Present Perfect pozostaje bez zmian + zmiany miejsca',
            'present4': '✅ Dobrze! Zmiana zaimka "you" na "I" i czasu',

            // Backshift section
            'backshift1': '✅ Doskonale! Present Continuous → Past Continuous + zmiana określeń czasu',
            'backshift2': '✅ Poprawnie! Present Perfect → Past Perfect',
            'backshift3': '✅ Świetnie! Future Simple → Conditional + zmiana czasu',
            'backshift4': '✅ Dobrze! Past Simple → Past Perfect + zmiana czasu',

            // Past Perfect exceptions
            'pastperfect1': '✅ Doskonale! OKREŚLENIE CZASU - data jest konkretna i niezmienna',
            'pastperfect2': '✅ Poprawnie! KOLEJNOŚĆ JASNA - "then" wskazuje kolejność zdarzeń',
            'pastperfect3': '✅ Świetnie! WCZEŚNIEJSZA PRZESZŁOŚĆ - "already" wskazuje na czynność wcześniejszą',
            'pastperfect4': '✅ Dobrze! NAWYKI PRZESZŁE - mówimy o przeszłych rutynach',

            // Questions section
            'questions1': '✅ Doskonale! PYTANIE YES/NO - if/whether + szyk twierdzący + backshift',
            'questions2': '✅ Poprawnie! PYTANIE WH- - zaimek pytający + szyk twierdzący + backshift',
            'questions3': '✅ Świetnie! ROZKAZ - tell + dopełnienie + to + bezokolicznik',
            'questions4': '✅ Dobrze! PROŚBA PRZECZĄCA - ask + dopełnienie + not + to + bezokolicznik',

            // Modal verbs
            'modals1': '✅ Doskonale! CAN → COULD - standardowa zmiana czasownika modalnego',
            'modals2': '✅ Poprawnie! MUST → HAD TO - gdy mówimy o obowiązku w przeszłości',
            'modals3': '✅ Świetnie! WOULD - bez zmian w wyrażeniach grzecznościowych',
            'modals4': '✅ Dobrze! SHOULD - bez zmian (tak samo jak might, ought to)',

            // Exceptions
            'exceptions1': '✅ Doskonale! FAKT UNIWERSALNY - zawsze prawdziwy, brak backshiftu',
            'exceptions2': '✅ Poprawnie! SYTUACJA NADAL AKTUALNA - brak backshiftu',
            'exceptions3': '✅ Świetnie! ZDANIE WARUNKOWE TYPU 2 - bez zmian czasów',
            'exceptions4': '✅ Dobrze! USED TO - bez zmian (tak samo jak ought to, had better)',

            'q1': '✅ Doskonale! Present Continuous Passive dla czynności w trakcie',
            'q2': '✅ Poprawnie! Past Simple w znaczeniu pasywnym - coś nieprzyjemnego się przydarzyło',
            'q3': '✅ Świetnie! Present Simple dla regularnych czynności',
            'q4': '✅ Dobrze! Future Simple dla przyszłych planów',

            'adv1': '✅ Doskonale! Future Perfect - czynność ukończona przed przyszłym momentem',
            'adv2': '✅ Poprawnie! Past Perfect Continuous - długotrwała czynność w przeszłości',
            'adv3': '✅ Świetnie! Future Continuous - czynność w trakcie w przyszłości',
            'adv4': '✅ Dobrze! Future Perfect Continuous - podkreślenie czasu trwania',

            'iq1': '✅ Doskonale! Brak inwersji i operatora "does" w pytaniach pośrednich',
            'iq2': '✅ Poprawnie! "if" dla pytań tak/nie w mowie zależnej',
            'iq3': '✅ Świetnie! Brak operatora "did" - Past Simple bez pomocy',
            'iq4': '✅ Dobrze! Zachowanie szyku zdania twierdzącego',

            'up1': '✅ Doskonale! Past Simple dla życzeń dotyczących teraźniejszości',
            'up2': '✅ Poprawnie! Past Perfect dla żalu dotyczącego przeszłości',
            'up3': '✅ Świetnie! "would" dla skarg dotyczących innych osób',
            'up4': '✅ Dobrze! Past Simple po "It\'s time"',

            'cs1': '✅ Doskonale! It-cleft do podkreślenia osoby',
            'cs2': '✅ Poprawnie! What-cleft do podkreślenia potrzeby',
            'cs3': '✅ Świetnie! It-cleft do podkreślenia przyczyny',
            'cs4': '✅ Dobrze! All-cleft dla podkreślenia wyłączności',

            'pc1': '✅ Doskonale! Present participle z przeczeniem dla przyczyny',
            'pc2': '✅ Poprawnie! Perfect participle dla czynności wcześniejszej',
            'pc3': '✅ Świetnie! Past participle dla znaczenia pasywnego',
            'pc4': '✅ Dobrze! Present participle dla czynności równoczesnej',

            'inv1': '✅ Doskonale! Inwersja z "never" - operator przed podmiotem',
            'inv2': '✅ Poprawnie! Inwersja warunkowa - pomijamy "if"',
            'inv3': '✅ Świetnie! "Not only" wymaga inwersji i operatora',
            'inv4': '✅ Dobrze! Inwersja ze "so...that"',

            'misc1': '✅ Doskonale! "used to" dla przeszłych przyzwyczajeń',
            'misc2': '✅ Poprawnie! "such a/an" z przymiotnikiem i rzeczownikiem',
            'misc3': '✅ Świetnie! "would rather" z Past Simple dla innych osób',
            'misc4': '✅ Dobrze! "be supposed to" dla planów i oczekiwań',

            // Future Simple
            'future_simple1': '✅ Doskonale! Przewidywanie: will + bezokolicznik',
            'future_simple2': '✅ Poprawnie! Przeczenie: won\'t + bezokolicznik',
            'future_simple3': '✅ Świetnie! Pytanie: Will + podmiot + bezokolicznik',
            'future_simple4': '✅ Dobrze! Przysłówki jak "probably" stoją między "will" a czasownikiem głównym',
            'future_simple5': '✅ Doskonale! Obietnica: will + bezokolicznik',
            'future_simple6': '✅ Bardzo dobrze! Oferta pomocy w 1 os. l.poj. i mnogiej: Shall I/we...',
            'future_simple7': '✅ Świetnie! Pierwszy tryb warunkowy: if + Present Simple, will + bezokolicznik',

            // Future Continuous
            'future_continuous1': '✅ Doskonale! Czynność w toku w określonym momencie: will be + V-ing',
            'future_continuous2': '✅ Poprawnie! Zaplanowana czynność w danym momencie: will be + V-ing',
            'future_continuous3': '✅ Świetnie! Czynność w toku w danym momencie: will be + V-ing',
            'future_continuous4': '✅ Dobrze! Pytanie: Will + podmiot + be + V-ing',
            'future_continuous5': '✅ Doskonale! Przeczenie: won\'t be + V-ing',
            'future_continuous6': '✅ Bardzo dobrze! Pytanie o czynność w danym momencie: will be + V-ing',

            // Future Perfect Simple
            'future_perfect1': '✅ Doskonale! Czynność zakończona przed przyszłym momentem: will have + V3',
            'future_perfect2': '✅ Poprawnie! Czynność zakończona przed inną przyszłą czynnością: will have + V3',
            'future_perfect3': '✅ Świetnie! Przeczenie: won\'t have + V3',
            'future_perfect4': '✅ Dobrze! Pytanie: Will + podmiot + have + V3',
            'future_perfect5': '✅ Doskonale! Doświadczenie do danego momentu: will have + V3',
            'future_perfect6': '✅ Bardzo dobrze! Osiągnięcie do określonego momentu: will have + V3',

            // Future Perfect Continuous
            'future_perfect_cont1': '✅ Doskonale! Podkreślenie czasu trwania: will have been + V-ing',
            'future_perfect_cont2': '✅ Poprawnie! Długotrwała czynność do przyszłego momentu: will have been + V-ing',
            'future_perfect_cont3': '✅ Świetnie! Czasownik "be" w Future Perfect Continuous: will have been + V-ing',
            'future_perfect_cont4': '✅ Dobrze! Podkreślenie czasu trwania czynności: will have been + V-ing',
            'future_perfect_cont5': '✅ Doskonale! Pytanie o czas trwania: will have been + V-ing',
            'future_perfect_cont6': '✅ Bardzo dobrze! Przeczenie: won\'t have been + V-ing',

            // Inne formy przyszłe
            'other_future1': '✅ Doskonale! Przewidywanie na podstawie oznak: be going to',
            'other_future2': '✅ Poprawnie! Zamiar: be going to',
            'other_future3': '✅ Świetnie! Rozkład jazdy: Present Simple',
            'other_future4': '✅ Dobrze! Ustalone plany: Present Continuous',
            'other_future5': '✅ Doskonale! Przewidywanie bez oznak: will',
            'other_future6': '✅ Bardzo dobrze! Harmonogram wydarzeń: Present Simple',

            // Present Simple
            'simple_present1': '✅ Doskonale! 3 os. l.poj. wymaga końcówki -s: works',
            'simple_present2': '✅ Poprawnie! They = forma mnoga, więc używamy "don\'t"',
            'simple_present3': '✅ Świetnie! Your brother = 3 os. l.poj., więc "Does" + bezokolicznik',
            'simple_present4': '✅ Dobrze! -y po spółgłosce → -ies: studies',
            'simple_present5': '✅ Doskonale! Rozkład jazdy + 3 os. l.poj.: leaves',
            'simple_present6': '✅ Bardzo dobrze! Fakt naukowy + 3 os. l.poj.: boils',
            'simple_present7': '✅ Świetnie! I = have (wyjątek: have zamiast haves)',
            'simple_present8': '✅ Poprawnie! He = does (wyjątek: do → does)',

            // Present Continuous
            'continuous_present1': '✅ Doskonale! Czynność teraz: am/is/are + V-ing',
            'continuous_present2': '✅ Poprawnie! Przeczenie: am not/isn\'t/aren\'t + V-ing',
            'continuous_present3': '✅ Świetnie! Pytanie: Are + you + V-ing?',
            'continuous_present4': '✅ Dobrze! Tymczasowa sytuacja: is studying',
            'continuous_present5': '✅ Doskonale! Ustalone plany na przyszłość: am meeting',
            'continuous_present6': '✅ Bardzo dobrze! Denerwujące nawyki: is always + V-ing',
            'continuous_present7': '✅ Świetnie! Zmiany i trendy: is growing',

            // Present Perfect Simple
            'perfect_present1': '✅ Doskonale! I = have + V3',
            'perfect_present2': '✅ Poprawnie! She = has + V3',
            'perfect_present3': '✅ Świetnie! You = Have + V3 (doświadczenie)',
            'perfect_present4': '✅ Dobrze! They = have + V3, "just" między have/has a V3',
            'perfect_present5': '✅ Doskonale! Okres czasu do teraz: has lived',
            'perfect_present6': '✅ Bardzo dobrze! I = haven\'t + V3, "yet" na końcu zdania',
            'perfect_present7': '✅ Świetnie! She = Has + V3',

            // Present Perfect Continuous
            'perfect_continuous_present1': '✅ Doskonale! Podkreślenie czasu trwania: have been + V-ing',
            'perfect_continuous_present2': '✅ Poprawnie! Ciągła czynność od momentu w przeszłości: has been working',
            'perfect_continuous_present3': '✅ Świetnie! Określenie czasu trwania: have been waiting',
            'perfect_continuous_present4': '✅ Dobrze! Wyjaśnienie obecnego stanu: has been running',
            'perfect_continuous_present5': '✅ Doskonale! Pytanie o czas trwania: have been learning',
            'perfect_continuous_present6': '✅ Bardzo dobrze! Czynność trwająca przez cały okres: has been raining',
            'perfect_continuous_present7': '✅ Świetnie! Przeczenie: haven\'t been + V-ing',

            // Past Simple
            'simple_past1': '✅ Doskonale! go → went (czasownik nieregularny)',
            'simple_past2': '✅ Poprawnie! Przeczenie: didn\'t + bezokolicznik',
            'simple_past3': '✅ Świetnie! Pytanie: Did + podmiot + bezokolicznik',
            'simple_past4': '✅ Dobrze! buy → bought (czasownik nieregularny)',
            'simple_past5': '✅ Doskonale! study → studied (czasownik regularny)',
            'simple_past6': '✅ Bardzo dobrze! write → wrote (czasownik nieregularny)',
            'simple_past7': '✅ Świetnie! Pytanie z "where": Where + did + podmiot + bezokolicznik',
            'simple_past8': '✅ Poprawnie! have → had (czasownik nieregularny)',

            // Past Continuous
            'continuous_past1': '✅ Doskonale! Czynność w toku w przeszłości: was/were + V-ing',
            'continuous_past2': '✅ Poprawnie! Przeczenie: wasn\'t/weren\'t + V-ing',
            'continuous_past3': '✅ Świetnie! Pytanie: was/were + podmiot + V-ing',
            'continuous_past4': '✅ Dobrze! Dwie równoczesne czynności: while + Past Continuous',
            'continuous_past5': '✅ Doskonale! Tło dla innych wydarzeń: was driving',
            'continuous_past6': '✅ Bardzo dobrze! Opisy sytuacji: was/were + V-ing',
            'continuous_past7': '✅ Świetnie! Denerwujące nawyki w przeszłości: was always + V-ing',

            // Past Perfect Simple
            'perfect_past1': '✅ Doskonale! Wcześniejsza przeszłość: had + V3',
            'perfect_past2': '✅ Poprawnie! Przeczenie: hadn\'t + V3',
            'perfect_past3': '✅ Świetnie! Pytanie: Had + podmiot + V3',
            'perfect_past4': '✅ Dobrze! Mowa zależna: had + V3',
            'perfect_past5': '✅ Doskonale! Czynność przed określonym momentem: had + V3',
            'perfect_past6': '✅ Bardzo dobrze! Wyjaśnienie przyczyny: hadn\'t + V3',
            'perfect_past7': '✅ Świetnie! Kolejność zdarzeń: after + had + V3',

            // Past Perfect Continuous
            'perfect_continuous_past1': '✅ Doskonale! Podkreślenie czasu trwania: had been + V-ing',
            'perfect_continuous_past2': '✅ Poprawnie! Długotrwała czynność przed przeszłym momentem: had been working',
            'perfect_continuous_past3': '✅ Świetnie! Wyjaśnienie przyczyny stanu: had been + V-ing',
            'perfect_continuous_past4': '✅ Dobrze! Pytanie o czas trwania: had been waiting',
            'perfect_continuous_past5': '✅ Doskonale! Tymczasowa sytuacja przed przeszłym momentem: had been living',
            'perfect_continuous_past6': '✅ Bardzo dobrze! Czynność prowadząca do punktu kulminacyjnego: had been raining',
            'perfect_continuous_past7': '✅ Świetnie! Przeczenie: hadn\'t been + V-ing',

            // DODANE FEEDBACKI DLA SO VS SUCH - podstawowe
            'ss1': '✅ Doskonale! "such" z rzeczownikiem "music" (niepoliczalny)',
            'ss2': '✅ Poprawnie! "such an" z przymiotnikiem i rzeczownikiem policzalnym',
            'ss3': '✅ Świetnie! "so many" z rzeczownikami policzalnymi w liczbie mnogiej',
            'ss4': '✅ Dobrze! "so" z przymiotnikiem "difficult" (bez rzeczownika)',

// DODANE FEEDBACKI DLA SO VS SUCH - zaawansowane
            'ssadv1': '✅ Doskonale! "such... that" z rzeczownikiem "problem"',
            'ssadv2': '✅ Poprawnie! "so... as to" w prośbach formalnych',
            'ssadv3': '✅ Świetnie! "such as" do podawania przykładów',
            'ssadv4': '✅ Dobrze! "so... that" z przymiotnikiem "loud"',
        };

        // DODATKOWE FEEDBACKI KATEGORII dla części mowy (PartsOfSpeech)
        const categoryCorrect = {
            a_an: '✅ Świetnie! A przed brzmieniem spółgłoskowym, AN przed samogłoskowym (liczy się wymowa).',
            the: '✅ Dobrze! The używamy przy unikatach, instrumentach, superlativach i wcześniej wspomnianych rzeczach.',
            zero: '✅ Poprawnie! Brak przedimka z niepoliczalnymi, liczbą mnogą i nazwami własnymi w ujęciu ogólnym.',
            noun: '✅ Brawo! Rozpoznano właściwą kategoryzację rzeczownika.',
            plural: '✅ Świetnie! Prawidłowa forma liczby mnogiej.',
            possessive: '✅ Dobrze! Właściwe użycie dopełniacza saksońskiego lub konstrukcji of.',
            verb_type: '✅ Doskonale! Poprawnie odróżniono czasownik statyczny/dynamiczny.',
            auxiliary: '✅ Świetnie! Trafne użycie czasownika posiłkowego.',
            modal: '✅ Dobrze! Poprawny wybór czasownika modalnego.',
            semi: '✅ Świetnie! Prawidłowe użycie form semi-modalnych.',
            comp: '✅ Dobrze! Właściwa forma stopnia wyższego.',
            order: '✅ Świetnie! Poprawna kolejność OSAShCOMP.',
            adverb: '✅ Dobrze! Właściwy rodzaj przysłówka.',
            position: '✅ Świetnie! Prawidłowe miejsce przysłówka w zdaniu.',
            pronoun: '✅ Dobrze! Trafny wybór zaimka osobowego.',
            demonstrative: '✅ Świetnie! Poprawny zaimek wskazujący względem odległości/liczby.',
            relative: '✅ Dobrze! Poprawny zaimek względny do kontekstu.',
            reflexive: '✅ Świetnie! Właściwe użycie zaimka zwrotnego.',
            conj: '✅ Dobrze! Trafny spójnik.',
            corr: '✅ Świetnie! Poprawna para spójników korelacyjnych.',
            num: '✅ Dobrze! Właściwa forma liczebnika.',
            sent: '✅ Świetnie! Prawidłowa forma liczebnika w zdaniu.',
            spell: '✅ Dobrze! Poprawna pisownia liczebnika.',
            date: '✅ Świetnie! Właściwy zapis/odczyt daty lub godziny.',
            prep: '✅ Dobrze! Trafny przyimek miejsca/czasu.',
            move: '✅ Świetnie! Trafny przyimek ruchu/kierunku.',
        };

        const categoryIncorrect = {
            a_an: '❌ Pamiętaj: A przed brzmieniem spółgłoskowym, AN przed samogłoskowym (np. a university / an hour).',
            the: '❌ Pamiętaj: The dla unikatów, superlativów, instrumentów i rzeczy wspomnianych wcześniej.',
            zero: '❌ Pamiętaj: Brak przedimka dla niepoliczalnych, liczby mnogiej ogólnej i nazw własnych.',
            noun: '❌ Pomyśl: Czy ten rzeczownik jest policzalny, niepoliczalny czy zależy od kontekstu?',
            plural: '❌ Pamiętaj o zasadach liczby mnogiej (es po s/sh/ch/x/z; y→ies po spółgłosce; -f/-fe→-ves; wyjątki).',
            possessive: '❌ Pamiętaj: \'s dla żywych/czasu, of dla rzeczy i pojęć; zwróć uwagę na liczbę mnogą.',
            verb_type: '❌ Pamiętaj: Stative zwykle nie w Continuous; dynamic mogą mieć -ing.',
            auxiliary: '❌ Pamiętaj o poprawnym operatorze (do/does/did, be, have) i szyku.',
            modal: '❌ Wybierz modal zgodny z sensem: obowiązek (must/have to), rada (should), możliwość (can/might).',
            semi: '❌ Zwróć uwagę na różnice used to/would oraz need/dare jako zwykłe vs modalne.',
            comp: '❌ Pamiętaj: krótkie → -er; długie → more; nieregularne: better/worse.',
            order: '❌ Kolejność: Opinion → Size → Age → Shape → Color → Origin → Material → Purpose.',
            adverb: '❌ Sprawdź typ przysłówka: sposobu/miejsca/czasu/częstotliwości.',
            position: '❌ Pamiętaj: częstotliwości przed głównym czasownikiem, po "be"; sposobu po dopełnieniu.',
            pronoun: '❌ Pamiętaj: Podmiot (I/you/he...) vs dopełnienie (me/you/him...).',
            demonstrative: '❌ Pamiętaj: this/these blisko, that/those daleko; liczba musi się zgadzać.',
            relative: '❌ Pamiętaj: who/whom dla osób, which dla rzeczy, that uniwersalne (bez przecinków), whose = przynależność.',
            reflexive: '❌ Pamiętaj: myself/yourself itd. gdy podmiot = dopełnienie; nie nadużywaj przy codziennych czynnościach.',
            conj: '❌ Wybierz spójnik oddający relację: and/but/or/so/because.',
            corr: '❌ Pamiętaj o poprawnych parach: either...or, neither...nor, both...and, not only...but also.',
            num: '❌ Pamiętaj o różnicy cardinal vs ordinal (first, second...).',
            sent: '❌ W zdaniach używamy form porządkowych dla kolejności (np. fifth floor).',
            spell: '❌ Sprawdź wyjątki: fifth, twelfth, ninth, twentieth, thirtieth...',
            date: '❌ Pamiętaj o przyimkach: on (data/dzień), in (miesiąc/rok), at (godzina); format BrE vs AmE.',
            prep: '❌ Pamiętaj: in (wnętrze/okres), on (powierzchnia/dzień), at (punkt/godzina).',
            move: '❌ Pamiętaj różnice: into/out of (do/z wnętrza), through (przez środek), across (na drugą stronę).',
        };

        // Jeśli nie znaleziono dedykowanego wpisu, użyj fallbacku kategorii na podstawie prefiksu id
        const categoryPrefix = Object.keys(categoryCorrect).find(prefix => questionId.startsWith(prefix));
        if (categoryPrefix) {
            return isCorrect ? (categoryCorrect[categoryPrefix]) : (categoryIncorrect[categoryPrefix]);
        }

        const incorrectFeedbacks = {
            // Mixed combinations comprehensive
            'mixed1': '❌ Pamiętaj: If + Past Perfect, would + base form dla teraźniejszości',
            'mixed2': '❌ Poprawnie: If + Past Simple (were), would have + past participle',
            'mixed3': '❌ Powinno być: If + Past Perfect, might + base form',
            'mixed4': '❌ W Mixed Conditionals nie używamy "would" w części warunkowej',
            'mixed5': '❌ Poprawna forma: "were" dla hipotetycznej sytuacji + "would have" dla przeszłej akcji',

            // Mixed form comprehensive
            'mixed_form1': '❌ Pamiętaj: Przeszła decyzja (Past Perfect) → obecny skutek (would)',
            'mixed_form2': '❌ Poprawnie: Obecna cecha (Past Simple) → przeszła akcja (would have)',
            'mixed_form3': '❌ Powinno być: If + hadn\'t + past participle, wouldn\'t have + past participle',
            'mixed_form4': '❌ Obecne preferencje (Past Simple) wpływają na przeszłe możliwości (would have)',
            'mixed_form5': '❌ Poprawna forma: If + Past Perfect, would + base form dla teraźniejszości',

            // Third conditional comprehensive
            'third1': '❌ Pamiętaj: W Third Conditional używamy Past Perfect po "if"',
            'third2': '❌ Poprawnie: If + had + past participle, would have + past participle',
            'third3': '❌ Powinno być: hadn\'t + past participle w warunku, wouldn\'t have w wyniku',
            'third4': '❌ "could have" wyraża możliwości, które nie zostały zrealizowane',
            'third5': '❌ Third Conditional idealnie nadaje się do wyrażania żalu',
            'third6': '❌ Do spekulacji historycznych używamy Third Conditional',
            'third7': '❌ Krytykując przeszłe działania, używamy could have + past participle',
            'third8': '❌ Refleksje nad przeszłością wymagają Past Perfect w warunku',

            'second1': '❌ Pamiętaj: If + Past Simple, would + bezokolicznik',
            'second2': '❌ Poprawnie: If + Past Simple, could + bezokolicznik',
            'second3': '❌ Powinno być: "were" dla wszystkich osób w języku formalnym',
            'second4': '❌ Przeczenie: didn\'t + bezokolicznik, wouldn\'t + bezokolicznik',
            'second5': '❌ Hipotetyczna sytuacja wymaga Second Conditional',
            'second6': '❌ Warunki nierealne w teraźniejszości używają Second Conditional',

            // Second practice comprehensive - SEKCJA 2
            'second_prac1': '❌ Różnica: First Conditional = realne, Second = hipotetyczne',
            'second_prac2': '❌ Second Conditional opisuje mało prawdopodobne sytuacje',
            'second_prac3': '❌ Past Continuous podkreśla czynność w toku',
            'second_prac4': '❌ W języku formalnym zawsze używamy "were"',
            'second_prac5': '❌ "could" wyraża możliwości w hipotetycznych sytuacjach',
            'second_prac6': '❌ Nierealne marzenia zawsze używają Second Conditional',

            'first1': '❌ Pamiętaj: If + Present Simple, will + bezokolicznik',
            'first2': '❌ Poprawnie: If + Present Simple, will + bezokolicznik',
            'first3': '❌ Powinno być: don\'t hurry (Present Simple), will miss (will)',
            'first4': '❌ First Conditional: If + Present Simple, will + bezokolicznik',
            'first5': '❌ Nie używamy "will" po "if" w First Conditional',
            'first6': '❌ Warunkowe obietnice używają Present Simple + will',

            // First alternatives comprehensive - SEKCJA 2
            'first_alt1': '❌ Pamiętaj: "might" wyraża możliwość, nie używamy "will" po "if"',
            'first_alt2': '❌ Poprawnie: Tryb rozkazujący dla bezpośrednich instrukcji',
            'first_alt3': '❌ "going to" wyraża plany, nie używamy "will" po "if"',
            'first_alt4': '❌ "can" wyraża możliwość pomocy',
            'first_alt5': '❌ "must" wyraża obowiązek, Present Simple po "if"',
            'first_alt6': '❌ "should" daje radę, Present Simple w warunku',

            'zero1': '❌ Pamiętaj: W Zero Conditional używamy Present Simple',
            'zero2': '❌ Poprawnie: If + Present Simple, Present Simple',
            'zero3': '❌ Powinno być: Present Simple w obu częściach zdania',
            'zero4': '❌ Zero Conditional opisuje ogólne prawdy, nie przyszłe zdarzenia',
            'zero5': '❌ Fakt naukowy zawsze używa Present Simple',
            'zero6': '❌ Zjawiska fizyczne wymagają Present Simple',

            // Zero variations comprehensive - SEKCJA 2
            'zero_var1': '❌ Pamiętaj: W Zero Conditional nie używamy "will" po "if"',
            'zero_var2': '❌ Poprawnie: Przecinek tylko gdy "if" na początku zdania',
            'zero_var3': '❌ Tryb rozkazujący wymaga Present Simple w warunku',
            'zero_var4': '❌ Present Continuous opisuje trwające czynności',
            'zero_var5': '❌ "can" + bezokolicznik, Present Simple w warunku',
            'zero_var6': '❌ "must" + bezokolicznik, bez "will" w warunku',

            // Passive Simple forms
            'passive_simple1': '❌ Pamiętaj: Present Simple Passive dla regularnych czynności',
            'passive_simple2': '❌ Poprawnie: Past Simple Passive dla wydarzeń historycznych',
            'passive_simple3': '❌ Powinno być: Future Simple Passive dla planowanych działań',
            'passive_simple4': '❌ Present Simple Passive używamy dla faktów ogólnych',
            'passive_simple5': '❌ Codzienne rutyny wymagają Present Simple Passive',
            'passive_simple6': '❌ Przyszłe plany używają Future Simple Passive',

            // Passive Continuous forms
            'passive_cont1': '❌ Pamiętaj: Present Continuous Passive dla czynności w trakcie',
            'passive_cont2': '❌ Poprawnie: Past Continuous Passive dla przeszłych czynności w toku',
            'passive_cont3': '❌ Perfect Continuous Passive nie istnieje - używamy Present Perfect',
            'passive_cont4': '❌ Future Continuous Passive nie istnieje - używamy Future Simple',
            'passive_cont5': '❌ Present Continuous podkreśla czynność właśnie trwającą',
            'passive_cont6': '❌ Past Continuous opisuje tło w narracjach przeszłych',

            // Passive Perfect forms
            'passive_perfect1': '❌ Pamiętaj: Present Perfect Passive podkreśla rezultat',
            'passive_perfect2': '❌ Poprawnie: Past Perfect Passive dla wcześniejszej przeszłości',
            'passive_perfect3': '❌ Future Perfect Passive dla ukończenia przed przyszłym momentem',
            'passive_perfect4': '❌ Present Perfect Passive wyraża doświadczenie do teraz',
            'passive_perfect5': '❌ Past Perfect pokazuje kolejność zdarzeń w przeszłości',
            'passive_perfect6': '❌ Future Perfect używamy do prognoz ukończenia',

            // Passive Usage and exceptions
            'passive_usage1': '❌ "have" w znaczeniu posiadać nie tworzy strony biernej',
            'passive_usage2': '❌ Strona bierna jest bardziej formalna i obiektywna',
            'passive_usage3': '❌ Czasowniki emocji rzadko używane w stronie biernej',
            'passive_usage4': '❌ W mowie potocznej strona czynna jest bardziej naturalna',
            'passive_usage5': '❌ "resemble" nie tworzy strony biernej',
            'passive_usage6': '❌ Strona bierna jest obiektywna w raportach naukowych',

            // Modal verbs passive - NOWA SEKCJA
            'modal_passive1': '❌ Pamiętaj: Modal + be + past participle to poprawna konstrukcja',
            'modal_passive2': '❌ "must be" wyraża obowiązek w stronie biernej',
            'modal_passive3': '❌ "can be" wyraża możliwość w stronie biernej',
            'modal_passive4': '❌ "should be" daje radę w stronie biernej',
            'modal_passive5': '❌ "might be" wyraża niepewność w stronie biernej',
            'modal_passive6': '❌ "ought to be" wyraża zalecenie w stronie biernej',

            //reported speech
            'present1': '❌ Pamiętaj: Brak backshiftu gdy czasownik wprowadzający w Present',
            'present2': '❌ Poprawnie: Zmiana zaimków (we→they, our→their) i czasu (tomorrow→the next day)',
            'present3': '❌ Powinno być: Present Perfect pozostaje + here→there, this→that',
            'present4': '❌ Zaimki i czasy muszą być dostosowane do kontekstu',

            // Backshift section
            'backshift1': '❌ Pamiętaj: Present Continuous → Past Continuous + now→then',
            'backshift2': '❌ Poprawnie: Present Perfect → Past Perfect',
            'backshift3': '❌ Powinno być: will → would + tomorrow→the next day',
            'backshift4': '❌ Past Simple → Past Perfect + last week→the week before',

            // Past Perfect exceptions
            'pastperfect1': '❌ OKREŚLENIA CZASU - daty konkretne nie wymagają Past Perfect',
            'pastperfect2': '❌ KOLEJNOŚĆ JASNA - gdy "then" wskazuje kolejność, nie zmieniamy czasów',
            'pastperfect3': '❌ WCZEŚNIEJSZA PRZESZŁOŚĆ - "already" wymaga Past Perfect',
            'pastperfect4': '❌ NAWYKI PRZESZŁE - rutyny i zwyczaje nie wymagają Past Perfect',

            // Questions section
            'questions1': '❌ Pamiętaj: Pytania Yes/No wymagają "if/whether" + szyk twierdzący',
            'questions2': '❌ Poprawnie: Wh- questions zachowują zaimek pytający + szyk twierdzący',
            'questions3': '❌ Rozkazy: tell/ask + dopełnienie + to + bezokolicznik',
            'questions4': '❌ Prośby przeczące: ask + dopełnienie + not + to + bezokolicznik',

            // Modal verbs
            'modals1': '❌ Pamiętaj: can → could w mowie zależnej z czasem przeszłym',
            'modals2': '❌ Poprawnie: must → had to dla obowiązków w przeszłości',
            'modals3': '❌ would pozostaje bez zmian w wyrażeniach grzecznościowych',
            'modals4': '❌ should, might, ought to pozostają bez zmian',

            // Exceptions
            'exceptions1': '❌ FAKTY UNIWERSALNE - zawsze używamy Present Simple',
            'exceptions2': '❌ SYTUACJE AKTUALNE - brak backshiftu gdy sytuacja się nie zmieniła',
            'exceptions3': '❌ ZDANIA WARUNKOWE 2 i 3 - nie zmieniamy form czasowników',
            'exceptions4': '❌ USED TO, OUGHT TO, HAD BETTER - bez zmian w mowie zależnej',

            // HAD STH DONE - podstawowe
            'q1': '❌ Pamiętaj: "have something done" = ktoś wykonuje dla nas usługę',
            'q2': '❌ Poprawnie: "had something stolen" = coś nieprzyjemnego się przydarzyło',
            'q3': '❌ Powinno być: Present Simple dla regularnych czynności z usługami',
            'q4': '❌ Future Simple "will have" dla planowanych usług w przyszłości',

            // HAD STH DONE - zaawansowane
            'adv1': '❌ Future Perfect "will have had" dla ukończenia przed przyszłym momentem',
            'adv2': '❌ Past Perfect Continuous podkreśla długotrwałość czynności w przeszłości',
            'adv3': '❌ Future Continuous dla czynności w trakcie w określonym momencie przyszłości',
            'adv4': '❌ Future Perfect Continuous podkreśla czas trwania do przyszłego momentu',

            // INDIRECT QUESTIONS
            'iq1': '❌ Pamiętaj: brak inwersji w pytaniach pośrednich - szyk zdania twierdzącego',
            'iq2': '❌ Poprawnie: pytania tak/nie wymagają "if" lub "whether"',
            'iq3': '❌ Brak operatora "did" w pytaniach pośrednich - używamy czasu Past Simple',
            'iq4': '❌ Zachowujemy szyk zdania twierdzącego - podmiot przed czasownikiem',

            // UNREAL PAST - wishes
            'up1': '❌ Pamiętaj: "wish" + Past Simple dla nierealnych życzeń teraźniejszych',
            'up2': '❌ Poprawnie: "if only" + Past Perfect dla żalu dotyczącego przeszłości',
            'up3': '❌ "would" używamy dla skarg i życzeń zmiany dotyczących innych osób',
            'up4': '❌ Po "It\'s time" używamy Past Simple, nie Present Simple',

            // CLEFT SENTENCES
            'cs1': '❌ Pamiętaj: It-cleft służy do podkreślenia osoby wykonującej czynność',
            'cs2': '❌ Poprawnie: What-cleft podkreśla potrzeby i pragnienia',
            'cs3': '❌ It-cleft z "that" dla podkreślenia przyczyny (rzeczy, nie osób)',
            'cs4': '❌ All-cleft "All I want" podkreśla, że coś jest jedyną rzeczą',

            // PARTICIPLE CLAUSES
            'pc1': '❌ Pamiętaj: "not knowing" = ponieważ nie wiedział',
            'pc2': '❌ Poprawnie: "having finished" = po skończeniu (czynność wcześniejsza)',
            'pc3': '❌ Past participle "written" dla znaczenia pasywnego - książka została napisana',
            'pc4': '❌ Present participle "walking" dla czynności równoczesnej - ja szedłem i widziałem',

            // INVERSION
            'inv1': '❌ Pamiętaj: "Never" na początku zdania wymaga inwersji - operator przed podmiotem',
            'inv2': '❌ Poprawnie: Inwersja warunkowa - pomijamy "if", "had" przed podmiotem',
            'inv3': '❌ "Not only" wymaga inwersji i operatora "did"',
            'inv4': '❌ Inwersja ze "so...that" - operator "was" przed podmiotem "the music"',

            // INNE WYRAŻENIA
            'misc1': '❌ Pamiętaj: "used to" dla przeszłych przyzwyczajeń, które już nie istnieją',
            'misc2': '❌ Poprawnie: "such a/an" + przymiotnik + rzeczownik policzalny',
            'misc3': '❌ "would rather" z Past Simple gdy mówimy o preferencjach dotyczących innych osób',
            'misc4': '❌ "be supposed to" wyraża obowiązki, plany i społeczne oczekiwania',

            'future_simple1': '❌ Pamiętaj: Przewidywanie wymaga "will" + bezokolicznik',
            'future_simple2': '❌ Poprawnie: won\'t + bezokolicznik dla przeczenia',
            'future_simple3': '❌ Powinno być: Will + podmiot + bezokolicznik',
            'future_simple4': '❌ Przysłówki stoją między "will" a czasownikiem głównym',
            'future_simple5': '❌ Obietnice używają "will" + bezokolicznik',
            'future_simple6': '❌ Oferty pomocy w 1 os. używają "Shall I/we"',
            'future_simple7': '❌ W First Conditional nie używamy "will" po "if"',

            // Future Continuous
            'future_continuous1': '❌ Pamiętaj: Future Continuous = will be + V-ing',
            'future_continuous2': '❌ Poprawnie: will be + V-ing dla zaplanowanych czynności',
            'future_continuous3': '❌ Czynności w toku wymagają formy ciągłej',
            'future_continuous4': '❌ Pytania: Will + podmiot + be + V-ing',
            'future_continuous5': '❌ Przeczenie: won\'t be + V-ing',
            'future_continuous6': '❌ Pytania o czynności w trakcie używają formy ciągłej',

            // Future Perfect Simple
            'future_perfect1': '❌ Pamiętaj: Future Perfect = will have + past participle',
            'future_perfect2': '❌ Poprawnie: Czynność przed inną przyszłą czynnością',
            'future_perfect3': '❌ Przeczenie: won\'t have + past participle',
            'future_perfect4': '❌ Pytania: Will + podmiot + have + past participle',
            'future_perfect5': '❌ Doświadczenia do momentu w przyszłości',
            'future_perfect6': '❌ Osiągnięcia wymagają Future Perfect',

            // Future Perfect Continuous
            'future_perfect_cont1': '❌ Pamiętaj: Future Perfect Continuous podkreśla czas trwania',
            'future_perfect_cont2': '❌ Poprawnie: will have been + V-ing dla długotrwałych czynności',
            'future_perfect_cont3': '❌ Czasownik "be" wymaga formy "been"',
            'future_perfect_cont4': '❌ Podkreślenie czasu trwania wymaga formy ciągłej',
            'future_perfect_cont5': '❌ Pytania o czas trwania używają Perfect Continuous',
            'future_perfect_cont6': '❌ Przeczenie: won\'t have been + V-ing',

            // Inne formy przyszłe
            'other_future1': '❌ Pamiętaj: Przewidywania z oznak używają "be going to"',
            'other_future2': '❌ Poprawnie! Zamiary i plany: be going to',
            'other_future3': '❌ Rozkłady i harmonogramy używają Present Simple',
            'other_future4': '❌ Ustalone plany używają Present Continuous',
            'other_future5': '❌ Przewidywania bez oznak używają "will"',
            'other_future6': '❌ Harmonogramy wydarzeń używają Present Simple',

            // DODANE FEEDBACKI NIEPOPRAWNE DLA SO VS SUCH - podstawowe
            'ss1': '❌ Pamiętaj: "such" używamy z rzeczownikami, "so" z przymiotnikami. Music jest niepoliczalne',
            'ss2': '❌ Poprawnie: "such a/an" + przymiotnik + rzeczownik policzalny',
            'ss3': '❌ Powinno być: "so many" z rzeczownikami policzalnymi w liczbie mnogiej',
            'ss4': '❌ "so" używamy z przymiotnikami bez rzeczownika',

            // DODANE FEEDBACKI NIEPOPRAWNE DLA SO VS SUCH - zaawansowane
            'ssadv1': '❌ Pamiętaj: "such... that" z rzeczownikami, "so... that" z przymiotnikami',
            'ssadv2': '❌ Poprawnie: "so... as to" w formalnych prośbach i celach',
            'ssadv3': '❌ "such as" służy do podawania przykładów, "so as" do celów',
            'ssadv4': '❌ "so... that" wymaga przymiotnika, nie rzeczownika',
        };

        if (isCorrect) {
            return correctFeedbacks[questionId] || '✅ Poprawna odpowiedź!';
        } else {
            return incorrectFeedbacks[questionId] || `❌ Poprawna odpowiedź to opcja ${String(correctAnswer).toUpperCase()}`;
        }
    }

    function showResult(score, total, resultDisplay) {
        const percentage = (score / total) * 100;
        let message = '';
        let resultClass = '';

        if (percentage === 100) {
            message = `🎉 Doskonale! ${score}/${total} - Gramatyka opanowana!`;
            resultClass = 'result-success';
        } else if (percentage >= 80) {
            message = `👍 Bardzo dobrze! ${score}/${total} - Świetnie radzisz sobie z trudniejszymi konstrukcjami!`;
            resultClass = 'result-success';
        } else if (percentage >= 60) {
            message = `😊 Nieźle! ${score}/${total} - Rozumiesz podstawy!`;
            resultClass = 'result-warning';
        } else {
            message = `📚 Warto powtórzyć! ${score}/${total} - Poćwicz więcej!`;
            resultClass = 'result-failure';
        }

        if (resultDisplay) {
            resultDisplay.innerHTML = `<span class="${resultClass}">${message}</span>`;
        }
    }

    function resetExercise(container, selectedAnswers, checkButton, resetButton, resultDisplay) {
        // Reset wszystkich stanów
        Object.keys(selectedAnswers).forEach(key => delete selectedAnswers[key]);

        container.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.checked = false;
        });

        container.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected', 'correct-answer', 'wrong-answer');
        });

        container.querySelectorAll('.exercise-feedback').forEach(feedback => {
            feedback.style.display = 'none';
        });

        checkButton.style.display = 'inline-block';
        if (resetButton) resetButton.style.display = 'none';
        if (resultDisplay) resultDisplay.innerHTML = '';

        updateCheckButtonState();
    }

    function updateCheckButtonState() {
        const totalQuestions = Object.keys(correctAnswers).length;
        const answeredQuestions = Object.keys(selectedAnswers).length;
        checkButton.disabled = answeredQuestions !== totalQuestions;

        if (checkButton.disabled) {
            checkButton.title = 'Odpowiedz na wszystkie pytania';
        } else {
            checkButton.title = 'Kliknij aby sprawdzić odpowiedzi';
        }
    }
}

function detectCorrectAnswers(container) {
    const answers = {};

    // Sprawdzamy różne typy pytań z różnymi poprawnymi odpowiedziami
    const answerPatterns = {
        // Mixed combinations comprehensive
        'mixed1': 'b',
        'mixed2': 'c',
        'mixed3': 'a',
        'mixed4': 'b',
        'mixed5': 'a',

        // Mixed form comprehensive
        'mixed_form1': 'c',
        'mixed_form2': 'b',
        'mixed_form3': 'a',
        'mixed_form4': 'c',
        'mixed_form5': 'b',

        // Third conditional comprehensive
        'third1': 'b',
        'third2': 'c',
        'third3': 'a',
        'third4': 'a',
        'third5': 'c',
        'third6': 'b',
        'third7': 'a',
        'third8': 'b',

        // Second conditional comprehensive - SEKCJA 1
        'second1': 'c',
        'second2': 'a',
        'second3': 'c',
        'second4': 'a',
        'second5': 'b',
        'second6': 'c',

        // Second practice comprehensive - SEKCJA 2
        'second_prac1': 'c',
        'second_prac2': 'a',
        'second_prac3': 'c',
        'second_prac4': 'a',
        'second_prac5': 'b',
        'second_prac6': 'c',

        // First conditional comprehensive - SEKCJA 1
        'first1': 'b',
        'first2': 'c',
        'first3': 'b',
        'first4': 'c',
        'first5': 'b',
        'first6': 'c',

        // First alternatives comprehensive - SEKCJA 2
        'first_alt1': 'b',
        'first_alt2': 'c',
        'first_alt3': 'b',
        'first_alt4': 'c',
        'first_alt5': 'b',
        'first_alt6': 'c',

        'zero1': 'b',
        'zero2': 'c',
        'zero3': 'b',
        'zero4': 'c',
        'zero5': 'b',
        'zero6': 'c',

        // Zero variations comprehensive - SEKCJA 2
        'zero_var1': 'b',
        'zero_var2': 'c',
        'zero_var3': 'b',
        'zero_var4': 'c',
        'zero_var5': 'b',
        'zero_var6': 'c',

        'passive_simple1': 'b',  // "The offices are cleaned every evening." - Present Simple Passive
        'passive_simple2': 'c',  // "Hamlet was written by Shakespeare in 1600." - Past Simple Passive
        'passive_simple3': 'b',  // "The package will be delivered tomorrow." - Future Simple Passive
        'passive_simple4': 'c',  // "English is spoken all over the world." - Present Simple Passive
        'passive_simple5': 'b',  // "Delicious meals are prepared every day." - Present Simple Passive
        'passive_simple6': 'c',  // "A new hospital will be built next year." - Future Simple Passive

        // PASSIVE CONTINUOUS - poprawione
        'passive_cont1': 'a',  // "is being built" - Present Continuous Passive
        'passive_cont2': 'a',  // "was being prepared" - Past Continuous Passive
        'passive_cont3': 'b',  // "has been updated" - Present Perfect Passive (zamiast nieistniejącego Perfect Continuous)
        'passive_cont4': 'b',  // "will be opened" - Future Simple Passive (zamiast nieistniejącego Future Continuous)
        'passive_cont5': 'a',  // "are being cleaned" - Present Continuous Passive
        'passive_cont6': 'a',  // "was being serviced" - Past Continuous Passive

        // PASSIVE PERFECT - poprawione
        'passive_perfect1': 'c',  // "have been found" - Present Perfect Passive
        'passive_perfect2': 'b',  // "had been completed" - Past Perfect Passive
        'passive_perfect3': 'c',  // "will have been implemented" - Future Perfect Passive
        'passive_perfect4': 'b',  // "has been installed" - Present Perfect Passive
        'passive_perfect5': 'c',  // "had been finished" - Past Perfect Passive
        'passive_perfect6': 'b',  // "will have been adopted" - Future Perfect Passive

        // PASSIVE USAGE - poprawione
        'passive_usage1': 'b',  // "My brother has a car." - POPRAWNE (have nie tworzy strony biernej)
        'passive_usage2': 'a',  // "It is recommended that all applications be submitted online." - POPRAWNE (bardziej formalne)
        'passive_usage3': 'b',  // "Chocolate is liked by most children." - NIEPOPRAWNE (czasowniki emocji rzadko w stronie biernej)
        'passive_usage4': 'a',  // "I made a mistake in the calculations." - POPRAWNE (bardziej naturalne)
        'passive_usage5': 'b',  // "She is resembled by her mother." - NIEPOPRAWNE (resemble nie tworzy strony biernej)
        'passive_usage6': 'a',  // "The experiment was conducted carefully." - POPRAWNE (obiektywne w raportach)

        // MODAL PASSIVE - poprawione
        'modal_passive1': 'a',  // "must be submitted" - poprawna konstrukcja modal + be + V3
        'modal_passive2': 'b',  // "must be followed" - wyraża obowiązek w stronie biernej
        'modal_passive3': 'a',  // "can be seen" - wyraża możliwość w stronie biernej
        'modal_passive4': 'b',  // "should be discussed" - daje radę w stronie biernej
        'modal_passive5': 'c',  // "might be delayed" - wyraża niepewność w stronie biernej
        'modal_passive6': 'a',  // "ought to be done" - wyraża zalecenie w stronie biernej

        //reported speech

        'present1': 'a',
        'present2': 'a',
        'present3': 'a',
        'present4': 'a',

        // Backshift section - różne odpowiedzi
        'backshift1': 'a',
        'backshift2': 'a',
        'backshift3': 'a',
        'backshift4': 'a',

        // Past Perfect exceptions - różne odpowiedzi
        'pastperfect1': 'a',
        'pastperfect2': 'a',
        'pastperfect3': 'b',
        'pastperfect4': 'a',

        // Questions section - różne odpowiedzi
        'questions1': 'a',
        'questions2': 'a',
        'questions3': 'a',
        'questions4': 'a',

        // Modal verbs - różne odpowiedzi
        'modals1': 'a',
        'modals2': 'a',
        'modals3': 'a',
        'modals4': 'a',

        // Exceptions - różne odpowiedzi
        'exceptions1': 'a',
        'exceptions2': 'a',
        'exceptions3': 'a',
        'exceptions4': 'a',

        'q1': 'a',  // They are having their house painted.
        'q2': 'b',  // I had my bicycle stolen yesterday.
        'q3': 'b',  // I have my car serviced every six months.
        'q4': 'c',  // I will have the package delivered tomorrow.

        // HAD STH DONE - zaawansowane
        'adv1': 'a',  // will have had the new office built
        'adv2': 'a',  // had been having his car repaired
        'adv3': 'a',  // will be having my dissertation defended
        'adv4': 'a',  // will have been having their house renovated

        // INDIRECT QUESTIONS
        'iq1': 'b',  // Could you tell me what time the bank opens?
        'iq2': 'b',  // Do you know if there is a pharmacy near here?
        'iq3': 'b',  // I wonder where you put the keys.
        'iq4': 'b',  // Could you tell me how long you have been waiting?

        // UNREAL PAST - wishes
        'up1': 'b',  // knew
        'up2': 'c',  // had studied
        'up3': 'c',  // would stop
        'up4': 'b',  // made

        // CLEFT SENTENCES
        'cs1': 'a',  // It was Sarah who broke the window, not Tom.
        'cs2': 'b',  // What I really need is some rest.
        'cs3': 'a',  // It was the bad weather that caused the cancellation.
        'cs4': 'c',  // All I want is your honesty.

        // PARTICIPLE CLAUSES
        'pc1': 'a',  // Not knowing the answer, he remained silent.
        'pc2': 'a',  // Having finished her degree, she started looking for a job.
        'pc3': 'b',  // Written in the 18th century, the book is very valuable.
        'pc4': 'b',  // Walking through the park, I saw a beautiful bird.

        // INVERSION
        'inv1': 'b',  // Never have I been so embarrassed in my life.
        'inv2': 'b',  // Had I known about the traffic, I would have left earlier.
        'inv3': 'b',  // Not only did she finish the project but also wrote a detailed report.
        'inv4': 'b',  // So beautiful was the music that everyone cried.

        // INNE WYRAŻENIA
        'misc1': 'a',  // used to
        'misc2': 'c',  // such an
        'misc3': 'a',  // would rather
        'misc4': 'a',  // is supposed to

        // Future Simple
        'future_simple1': 'a',
        'future_simple2': 'a',
        'future_simple3': 'a',
        'future_simple4': 'b',
        'future_simple5': 'b',
        'future_simple6': 'b',
        'future_simple7': 'b',

        // Future Continuous
        'future_continuous1': 'b',
        'future_continuous2': 'b',
        'future_continuous3': 'b',
        'future_continuous4': 'b',
        'future_continuous5': 'b',
        'future_continuous6': 'b',

        // Future Perfect Simple
        'future_perfect1': 'b',
        'future_perfect2': 'b',
        'future_perfect3': 'b',
        'future_perfect4': 'b',
        'future_perfect5': 'b',
        'future_perfect6': 'b',

        // Future Perfect Continuous
        'future_perfect_cont1': 'c',
        'future_perfect_cont2': 'c',
        'future_perfect_cont3': 'b',
        'future_perfect_cont4': 'c',
        'future_perfect_cont5': 'c',
        'future_perfect_cont6': 'c',

        // Inne formy przyszłe
        'other_future1': 'b',
        'other_future2': 'b',
        'other_future3': 'c',
        'other_future4': 'b',
        'other_future5': 'a',
        'other_future6': 'c',

        // Present Simple
        'simple_present1': 'b',
        'simple_present2': 'b',
        'simple_present3': 'c',
        'simple_present4': 'b',
        'simple_present5': 'b',
        'simple_present6': 'b',
        'simple_present7': 'a',
        'simple_present8': 'b',

        // Present Continuous
        'continuous_present1': 'a',
        'continuous_present2': 'a',
        'continuous_present3': 'b',
        'continuous_present4': 'b',
        'continuous_present5': 'b',
        'continuous_present6': 'b',
        'continuous_present7': 'b',

        // Present Perfect Simple
        'perfect_present1': 'a',
        'perfect_present2': 'b',
        'perfect_present3': 'a',
        'perfect_present4': 'b',
        'perfect_present5': 'a',
        'perfect_present6': 'a',
        'perfect_present7': 'a',

        // Present Perfect Continuous
        'perfect_continuous_present1': 'a',
        'perfect_continuous_present2': 'b',
        'perfect_continuous_present3': 'b',
        'perfect_continuous_present4': 'b',
        'perfect_continuous_present5': 'b',
        'perfect_continuous_present6': 'b',
        'perfect_continuous_present7': 'a',

        // Past Simple
        'simple_past1': 'b',
        'simple_past2': 'a',
        'simple_past3': 'a',
        'simple_past4': 'b',
        'simple_past5': 'b',
        'simple_past6': 'b',
        'simple_past7': 'a',
        'simple_past8': 'b',

        // Past Continuous
        'continuous_past1': 'a',
        'continuous_past2': 'b',
        'continuous_past3': 'a',
        'continuous_past4': 'b',
        'continuous_past5': 'b',
        'continuous_past6': 'b',
        'continuous_past7': 'b',

        // Past Perfect Simple
        'perfect_past1': 'b',
        'perfect_past2': 'b',
        'perfect_past3': 'a',
        'perfect_past4': 'b',
        'perfect_past5': 'b',
        'perfect_past6': 'b',
        'perfect_past7': 'b',

        // Past Perfect Continuous
        'perfect_continuous_past1': 'b',
        'perfect_continuous_past2': 'b',
        'perfect_continuous_past3': 'b',
        'perfect_continuous_past4': 'b',
        'perfect_continuous_past5': 'c',
        'perfect_continuous_past6': 'c',
        'perfect_continuous_past7': 'a',

        // SO VS SUCH - podstawowe
        'ss1': 'b',  // such beautiful music
        'ss2': 'c',  // such an intelligent person
        'ss3': 'a',  // so many things
        'ss4': 'a',  // so difficult

// SO VS SUCH - zaawansowane
        'ssadv1': 'b',  // such... that
        'ssadv2': 'a',  // so... as
        'ssadv3': 'b',  // such as
        'ssadv4': 'a',  // so... that
    };

    // UZUPEŁNIENIE: odpowiedzi dla wszystkich ćwiczeń z PartsOfSpeech.jsx
    // Przed iteracją wzorców uzupełniamy answerPatterns wartościami dla części mowy
    Object.assign(answerPatterns, {
        // Przedimki A/AN
        'a_an1': 'a', // a uniform
        'a_an2': 'b', // an honest
        'a_an3': 'a', // a university
        'a_an4': 'a', // a unique
        'a_an5': 'b', // an elephant

        // Przedimek THE
        'the1': 'c', // play the piano
        'the2': 'c', // the sun / the east
        'the3': 'c', // the only / the answer
        'the4': 'c', // the cinema
        'the5': 'b', // the best / the class

        // Przedimek zerowy
        'zero1': 'd',
        'zero2': 'd',
        'zero3': 'd',
        'zero4': 'd',
        'zero5': 'd',

        // Rzeczowniki C/U/B
        'noun1': 'b', 'noun2': 'b', 'noun3': 'c', 'noun4': 'c',
        'noun5': 'c', 'noun6': 'c', 'noun7': 'c', 'noun8': 'b',

        // Liczba mnoga
        'plural1': 'b', 'plural2': 'b', 'plural3': 'b', 'plural4': 'c',
        'plural5': 'b', 'plural6': 'b', 'plural7': 'b', 'plural8': 'b',

        // Dzierżawczość ('s vs of) - UWAGA: inny zestaw 'possessive' w zaimkach dalej
        'possessive1': 'b', 'possessive2': 'b', 'possessive3': 'b',
        'possessive4': 'c', 'possessive5': 'a', 'possessive6': 'a',
        'possessive7': 'a', 'possessive8': 'a',

        // Rodzaje czasowników S/D
        'verb_type1': 'a','verb_type2': 'b','verb_type3': 'a','verb_type4': 'b',
        'verb_type5': 'a','verb_type6': 'b','verb_type7': 'a','verb_type8': 'b',

        // Czasowniki posiłkowe
        'auxiliary1': 'b','auxiliary2': 'a','auxiliary3': 'c','auxiliary4': 'b',
        'auxiliary5': 'c','auxiliary6': 'c','auxiliary7': 'b','auxiliary8': 'd',

        // Czasowniki modalne
        'modal1': 'c','modal2': 'c','modal3': 'b','modal4': 'c',
        'modal5': 'b','modal6': 'c','modal7': 'a','modal8': 'c',

        // Semi-modalne
        'semi1': 'c','semi2': 'a','semi3': 'c','semi4': 'b',
        'semi5': 'b','semi6': 'a','semi7': 'c','semi8': 'c',

        // Stopniowanie
        'comp1': 'b','comp2': 'b','comp3': 'b','comp4': 'b','comp5': 'a',

        // Kolejność przymiotników
        'order1': 'b','order2': 'b','order3': 'b','order4': 'b','order5': 'b',

        // Rodzaje przysłówków
        'adverb1': 'a','adverb2': 'b','adverb3': 'a','adverb4': 'a','adverb5': 'a',

        // Umiejscowienie przysłówków
        'position1': 'b','position2': 'b','position3': 'a','position4': 'b','position5': 'b',

        // Zaimki osobowe
        'pronoun1': 'a','pronoun2': 'b','pronoun3': 'a','pronoun4': 'b','pronoun5': 'a',

        // Zaimki wskazujące
        'demonstrative1': 'c','demonstrative2': 'a','demonstrative3': 'c','demonstrative4': 'b','demonstrative5': 'a',

        // Zaimki względne
        'relative1': 'b','relative2': 'b','relative3': 'c','relative4': 'a',
        'relative5': 'b','relative6': 'b','relative7': 'b','relative8': 'c',

        // Zaimki zwrotne
        'reflexive1': 'b','reflexive2': 'b','reflexive3': 'b','reflexive4': 'b','reflexive5': 'a',

        // Spójniki podstawowe
        'conj1': 'a','conj2': 'b','conj3': 'b','conj4': 'c','conj5': 'a','conj6': 'a',

        // Spójniki złożone
        'corr1': 'a','corr2': 'c','corr3': 'a','corr4': 'a','corr5': 'c','corr6': 'a',

        // Liczebniki – wybór
        'num1': 'b','num2': 'a','num3': 'c','num4': 'b','num5': 'b','num6': 'b','num7': 'b','num8': 'a',

        // Liczebniki – zdania
        'sent1': 'b','sent2': 'a','sent3': 'b','sent4': 'b','sent5': 'a','sent6': 'b','sent7': 'b','sent8': 'a',

        // Liczebniki – pisownia
        'spell1': 'b','spell2': 'b','spell3': 'b','spell4': 'b','spell5': 'c','spell6': 'a','spell7': 'a','spell8': 'a',

        // Daty i godziny
        'date1': 'a','date2': 'b','date3': 'c','date4': 'b','date5': 'b','date6': 'c','date7': 'c','date8': 'b',

        // Przyimki miejsca/czasu
        'prep1': 'a','prep2': 'b','prep3': 'c','prep4': 'b','prep5': 'a','prep6': 'a','prep7': 'c','prep8': 'a',

        // Przyimki ruchu
        'move1': 'a','move2': 'b','move3': 'b','move4': 'b','move5': 'a','move6': 'b','move7': 'a','move8': 'a',
    });

    Object.keys(answerPatterns).forEach(key => {
        if (container.querySelector(`input[name="${key}"]`)) {
            answers[key] = answerPatterns[key];
        }
    });

    // SPECJALNY PRZYPADek: nazwy 'possessive' występują w dwóch różnych działach.
    // Rozpoznajemy po tytule ćwiczenia, aby przypisać właściwe odpowiedzi.
    const titleText = (container.querySelector('.exercise-question h5')?.textContent || '').toLowerCase();

    // Jeśli to ćwiczenie o ZAIMKACH dzierżawczych, nadpisujemy odpowiedzi possessive1..5
    if (titleText.includes('zaimek dzierżawczy')) {
        const pronPoss = ['b','b','b','a','b'];
        ['1','2','3','4','5'].forEach((n, idx) => {
            if (container.querySelector(`input[name="possessive${n}"]`)) {
                answers[`possessive${n}`] = pronPoss[idx];
            }
        });
    }

    // Jeśli nie znaleziono specyficznych pytań, sprawdź standardowe
    if (Object.keys(answers).length === 0) {
        const questions = container.querySelectorAll('.exercise-item');
        questions.forEach((question, index) => {
            const firstInput = question.querySelector('input[type="radio"]');
            const qName = (firstInput && firstInput.name) ? firstInput.name : (`q${index+1}`);

            // Dla standardowych pytań ustawiamy różne poprawne odpowiedzi
            const defaultAnswers = ['b', 'c', 'a', 'b', 'c', 'a'];
            answers[qName] = defaultAnswers[index] || 'b';
        });
    }

    console.log('🔍 Wykryte poprawne odpowiedzi:', answers);
    return answers;
}

// Automatyczna inicjalizacja dla zwykłych stron HTML
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        // Małe opóźnienie, aby React miał czas na renderowanie
        setTimeout(() => {
            initializeGrammarExercises();
        }, 100);
    });
}

export default initializeGrammarExercises;