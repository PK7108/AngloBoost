import React from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import '../../styles/topic-cards.css'
import '../../styles/vocabulary.css'

const sections = [
    { id: 'najpopularniejsze', label: 'Najpopularniejsze' },
    { id: 'zyciowe-madrosci', label: 'Życiowe mądrości' },
    { id: 'praca-biznes', label: 'Praca i biznes' },
    { id: 'przyjazn-milosc', label: 'Przyjaźń i miłość' },
    { id: 'angielskie-brytyjskie', label: 'Angielskie i brytyjskie' },
    { id: 'amerykanskie', label: 'Amerykańskie' },
]

const PROVERBS = {
    'najpopularniejsze': [
        ['Actions speak louder than words', 'Czyny mówią głośniej niż słowa'],
        ['Better late than never', 'Lepiej późno niż wcale'],
        ['Don\'t judge a book by its cover', 'Nie sądź książki po okładce'],
        ['When in Rome, do as the Romans do', 'Kiedy wejdziesz między wrony, musisz krakać jak i one'],
        ['The early bird catches the worm', 'Kto rano wstaje, temu Pan Bóg daje'],
        ['Every cloud has a silver lining', 'Gdy pada deszcz, musi kiedyś wyjść słońce'],
        ['Two wrongs don\'t make a right', 'Zło złem zwalczać nie można'],
        ['When the going gets tough, the tough get going', 'Prawdziwi wojownicy walczą w najcięższych bitwach'],
        ['Hope for the best, but prepare for the worst', 'Miej nadzieję na najlepsze, ale przygotuj się na najgorsze'],
        ['Birds of a feather flock together', 'Ciągnie swój do swego'],
    ],
    'zyciowe-madrosci': [
        ['A stitch in time saves nine', 'Czego Jaś się nie nauczy, tego Jan nie będzie umiał'],
        ['Absence makes the heart grow fonder', 'Niewidzialne przedmioty/osoby bardziej się ceni'],
        ['All that glitters is not gold', 'Nie wszystko złoto, co się świeci'],
        ['Don\'t count your chickens before they hatch', 'Nie chwal dnia przed zachodem słońca'],
        ['The grass is always greener on the other side', 'Wszędzie dobrze, gdzie nas nie ma'],
        ['You can\'t have your cake and eat it too', 'Nie można zjeść ciastka i nadal je mieć'],
        ['A rolling stone gathers no moss', 'Kamień toczący się mchem nie obrasta'],
        ['Fortune favors the bold', 'Śmiałym szczęście sprzyja'],
        ['Good things come to those who wait', 'Cierpliwość popłaca'],
        ['It\'s no use crying over spilt milk', 'Co się stało, to się nie odstanie'],
        ['Look before you leap', 'Zastanów się, zanim zrobisz'],
        ['Practice makes perfect', 'Ćwiczenie czyni mistrza'],
        ['The pen is mightier than the sword', 'Słowo jest silniejsze niż miecz'],
        ['Where there\'s a will, there\'s a way', 'Dla chcącego nic trudnego'],
        ['You reap what you sow', 'Jak sobie pościelesz, tak się wyśpisz'],
    ],
    'praca-biznes': [
        ['Time is money', 'Czas to pieniądz'],
        ['Don\'t put all your eggs in one basket', 'Nie wkładaj wszystkich jajek do jednego koszyka'],
        ['The customer is always right', 'Klient ma zawsze rację'],
        ['A chain is only as strong as its weakest link', 'Moc łańcucha zależy od jego najsłabszego ogniwa'],
        ['If you want something done right, do it yourself', 'Jeśli chcesz coś zrobić dobrze, zrób to sam'],
        ['Many hands make light work', 'Gdzie raków nie brak, tam i praca lekka'],
        ['Strike while the iron is hot', 'Kuj żelazo, póki gorące'],
        ['You have to spend money to make money', 'Trzeba wydać pieniądze, żeby zarobić pieniądze'],
        ['Rome wasn\'t built in a day', 'Rzym nie został zbudowany w jeden dzień'],
        ['Quality over quantity', 'Lepsza jakość niż ilość'],
        ['Think outside the box', 'Myśl nieszablonowo'],
        ['First come, first served', 'Kto pierwszy, ten lepszy'],
        ['Opportunity never knocks twice at any man\'s door', 'Okazja nie trzykroć kołacze'],
        ['A bird in the hand is worth two in the bush', 'Lepszy wróbel w garści niż gołąb na dachu'],
        ['Don\'t bite the hand that feeds you', 'Nie gryź ręki, która cię karmi'],
    ],
    'przyjazn-milosc': [
        ['Love is blind', 'Miłość jest ślepa'],
        ['Absence makes the heart grow fonder', 'Rozłąka serca zbliża'],
        ['All is fair in love and war', 'W miłości i na wojnie wszystkie chwyty dozwolone'],
        ['Beauty is in the eye of the beholder', 'O gustach się nie dyskutuje'],
        ['Friendship is love without wings', 'Przyjaźń to miłość bez skrzydeł'],
        ['The way to a man\'s heart is through his stomach', 'Przez żołądek do serca'],
        ['Blood is thicker than water', 'Krew nie woda'],
        ['A friend in need is a friend indeed', 'Prawdziwych przyjaciół poznaje się w biedzie'],
        ['Love will find a way', 'Gdzie diabeł nie może, tam babę pośle'],
        ['Out of sight, out of mind', 'Co z oczu, to z serca'],
        ['Familiarity breeds contempt', 'Zbytnia poufałość rodzi pogardę'],
        ['Hearts will never be practical until they are made unbreakable', 'Serce nie służy do myślenia'],
        ['The course of true love never did run smooth', 'Droga prawdziwej miłości nigdy nie jest gładka'],
        ['To love and be loved is to feel the sun from both sides', 'Kochać i być kochanym to czuć słońce z obu stron'],
        ['A hug is a perfect gift - one size fits all', 'Uścisk to idealny prezent - jeden rozmiar dla wszystkich'],
    ],
    'angielskie-brytyjskie': [
        ['Keep calm and carry on', 'Zachowaj spokój i działaj dalej'],
        ['It\'s not cricket', 'To nie fair (nie po koleżeńsku)'],
        ['Bob\'s your uncle', 'I już, proste jak drut'],
        ['Don\'t get your knickers in a twist', 'Nie denerwuj się bez powodu'],
        ['It\'s raining cats and dogs', 'Leje jak z cebra'],
        ['The proof of the pudding is in the eating', 'Prawda wychodzi w próbie'],
        ['A storm in a teacup', 'Burza w szklance wody'],
        ['As right as rain', 'W idealnym porządku'],
        ['Bite the bullet', 'Wziąć byka za rogi'],
        ['Break a leg', 'Połamania nóg (powodzenia)'],
        ['Cost an arm and a leg', 'Kosztować fortunę'],
        ['Every dog has its day', 'Każdy ma swój dobry dzień'],
        ['Hit the nail on the head', 'Trafić w sedno'],
        ['Kill two birds with one stone', 'Upiec dwie pieczenie na jednym ogniu'],
        ['Once in a blue moon', 'Raz na ruski rok'],
    ],
    'amerykanskie': [
        ['The American dream', 'Amerykański sen'],
        ['Go the extra mile', 'Zrobić coś ekstra'],
        ['Pull yourself up by your bootstraps', 'Podnieś się sam'],
        ['The ball is in your court', 'Piłka po twojej stronie'],
        ['Bite off more than you can chew', 'Wziąć na siebie za dużo'],
        ['Burn the midnight oil', 'Pracować do późna w nocy'],
        ['Cut to the chase', 'Przejść do sedna'],
        ['Get out of hand', 'Wymknąć się spod kontroli'],
        ['Go down in flames', 'Polec z hukiem'],
        ['Hit the road', 'Ruszać w drogę'],
        ['In a New York minute', 'Bardzo szybko'],
        ['It takes two to tango', 'Do tanga trzeba dwojga'],
        ['On the same page', 'Rozumieć się wzajemnie'],
        ['The whole nine yards', 'Wszystko co możliwe'],
        ['Think outside the box', 'Myśleć nieszablonowo'],
    ],
}

// Komponent do wyświetlania wyjaśnień i przykładów
function ProverbExplanation({ proverb }) {
    const explanations = {
        // Najpopularniejsze
        'Actions speak louder than words': 'Ludzie częściej oceniają nas po tym, co robimy, a nie po tym, co mówimy.',
        'Better late than never': 'Lepiej coś zrobić późno, niż wcale tego nie zrobić.',
        'Don\'t judge a book by its cover': 'Nie należy oceniać ludzi lub rzeczy po wyglądzie zewnętrznym.',
        'When in Rome, do as the Romans do': 'Należy dostosować się do zwyczajów miejsca, w którym się przebywa.',
        'The early bird catches the worm': 'Osoby, które wcześnie zaczynają działanie, mają większe szanse na sukces.',
        'Every cloud has a silver lining': 'Nawet w najgorszych sytuacjach można znaleźć coś pozytywnego.',
        'Two wrongs don\'t make a right': 'Odpowiadanie złem na zło nie jest właściwym rozwiązaniem.',
        'When the going gets tough, the tough get going': 'Silni ludzie działają aktywniej w trudnych sytuacjach.',
        'Hope for the best, but prepare for the worst': 'Należy być optymistą, ale też realistą.',
        'Birds of a feather flock together': 'Ludzie o podobnych cechach lub zainteresowaniach trzymają się razem.',

        // Życiowe mądrości
        'A stitch in time saves nine': 'Lepiej zapobiegać problemom, niż je potem naprawiać.',
        'Absence makes the heart grow fonder': 'Rozłąka sprawia, że bardziej doceniamy bliskich.',
        'All that glitters is not gold': 'Nie wszystko, co wygląda atrakcyjnie, jest wartościowe.',
        'Don\'t count your chickens before they hatch': 'Nie należy zakładać sukcesu zanim się go osiągnie.',
        'The grass is always greener on the other side': 'Zazwyczaj wydaje nam się, że inni mają lepiej.',
        'You can\'t have your cake and eat it too': 'Nie można korzystać z dwóch sprzecznych korzyści jednocześnie.',
        'A rolling stone gathers no moss': 'Osoba ciągle zmieniająca zajęcia nie zdobędzie doświadczenia.',
        'Fortune favors the bold': 'Szczęście sprzyja odważnym.',
        'Good things come to those who wait': 'Cierpliwość jest nagradzana.',
        'It\'s no use crying over spilt milk': 'Nie warto rozpaczać nad tym, czego nie można zmienić.',
        'Look before you leap': 'Należy dokładnie przemyśleć decyzję przed jej podjęciem.',
        'Practice makes perfect': 'Systematyczne ćwiczenie prowadzi do doskonałości.',
        'The pen is mightier than the sword': 'Słowa i idee mają większą siłę niż przemoc.',
        'Where there\'s a will, there\'s a way': 'Determinacja pomaga pokonać przeszkody.',
        'You reap what you sow': 'Efekty naszych działań zależą od włożonego wysiłku.',

        // Praca i biznes
        'Time is money': 'Czas ma wartość ekonomiczną - nie należy go marnować.',
        'Don\'t put all your eggs in one basket': 'Należy dywersyfikować ryzyko.',
        'The customer is always right': 'Zadowolenie klienta jest najważniejsze w biznesie.',
        'A chain is only as strong as its weakest link': 'Słaby element osłabia cały system.',
        'If you want something done right, do it yourself': 'Czasem lepiej polegać na sobie niż na innych.',
        'Many hands make light work': 'Współpraca ułatwia pracę.',
        'Strike while the iron is hot': 'Należy wykorzystywać sprzyjające okazje.',
        'You have to spend money to make money': 'Inwestycje są konieczne do osiągnięcia zysków.',
        'Rome wasn\'t built in a day': 'Wielkie osiągnięcia wymagają czasu.',
        'Quality over quantity': 'Lepsza jest mniejsza ilość dobrej jakości.',
        'Think outside the box': 'Należy szukać kreatywnych rozwiązań.',
        'First come, first served': 'Zasada kolejności przyznawania korzyści.',
        'Opportunity never knocks twice at any man\'s door': 'Niektóre szanse pojawiają się tylko raz.',
        'A bird in the hand is worth two in the bush': 'Lepsze jest to, co się już ma.',
        'Don\'t bite the hand that feeds you': 'Nie należy szkodzić tym, od których się zależy.',

        // Przyjaźń i miłość
        'Love is blind': 'Zakochani nie widzą wad ukochanej osoby.',
        'All is fair in love and war': 'W sprawach miłosnych i wojennych wszystkie metody są dozwolone.',
        'Beauty is in the eye of the beholder': 'Piękno jest subiektywne.',
        'Friendship is love without wings': 'Przyjaźń to trwała forma miłości.',
        'The way to a man\'s heart is through his stomach': 'Dobra kuchnia pomaga zdobyć serce.',
        'Blood is thicker than water': 'Więzi rodzinne są silniejsze niż inne.',
        'A friend in need is a friend indeed': 'Prawdziwi przyjaciele pomagają w potrzebie.',
        'Love will find a way': 'Miłość pokonuje przeszkody.',
        'Out of sight, out of mind': 'O osobach nieobecnych łatwo się zapomina.',
        'Familiarity breeds contempt': 'Nadmierna bliskość może prowadzić do braku szacunku.',
        'Hearts will never be practical until they are made unbreakable': 'Miłość nie podlega logice.',
        'The course of true love never did run smooth': 'Prawdziwa miłość napotyka trudności.',
        'To love and be loved is to feel the sun from both sides': 'Miłość daje pełnię szczęścia.',
        'A hug is a perfect gift - one size fits all': 'Uścisk ma uniwersalną wartość.',

        // Angielskie i brytyjskie
        'Keep calm and carry on': 'Wezwanie do zachowania spokoju w trudnych sytuacjach.',
        'It\'s not cricket': 'Krytyka nieuczciwego zachowania.',
        'Bob\'s your uncle': 'Wyrażenie oznaczające, że coś jest proste do osiągnięcia.',
        'Don\'t get your knickers in a twist': 'Radzenie, by nie denerwować się drobiazgami.',
        'It\'s raining cats and dogs': 'Mówi się, gdy bardzo mocno pada deszcz.',
        'The proof of the pudding is in the eating': 'Rzeczy trzeba sprawdzić w praktyce.',
        'A storm in a teacup': 'Przesadna reakcja na drobny problem.',
        'As right as rain': 'Wszystko w idealnym porządku.',
        'Bite the bullet': 'Zmierzyć się z trudną sytuacją.',
        'Break a leg': 'Życzenie powodzenia.',
        'Cost an arm and a leg': 'Bardzo drogi.',
        'Every dog has its day': 'Każdy ma szansę na sukces.',
        'Hit the nail on the head': 'Trafnie określić sedno sprawy.',
        'Kill two birds with one stone': 'Osiągnąć dwa cele jednym działaniem.',
        'Once in a blue moon': 'Bardzo rzadko.',

        // Amerykańskie
        'The American dream': 'Wiara w możliwość osiągnięcia sukcesu przez ciężką pracę.',
        'Go the extra mile': 'Zrobić więcej niż wymagano.',
        'Pull yourself up by your bootstraps': 'Samodzielnie poprawić swoją sytuację.',
        'The ball is in your court': 'Kolej na twoją decyzję.',
        'Bite off more than you can chew': 'Wziąć na siebie zbyt wiele obowiązków.',
        'Burn the midnight oil': 'Pracować do późna w nocy.',
        'Cut to the chase': 'Przejść do najważniejszej kwestii.',
        'Get out of hand': 'Sytuacja wymyka się spod kontroli.',
        'Go down in flames': 'Ponieść spektakularną porażkę.',
        'Hit the road': 'Wyruszyć w podróż.',
        'In a New York minute': 'Bardzo szybko.',
        'It takes two to tango': 'Obie strony są odpowiedzialne za sytuację.',
        'On the same page': 'W pełni się rozumieć.',
        'The whole nine yards': 'Wszystko, całość.',
        'Put your money where your mouth is': 'Dotrzymywać obietnic/stawka za słowami',
    }

    return (
        <div className="proverb-explanation">
            <p>{explanations[proverb] || `Wyjaśnienie: "${proverb}" oznacza...`}</p>
        </div>
    )
}

const TOPICS = Object.fromEntries(
    sections.map(s => ([
        s.id,
        [
            {
                id: `${s.id}-list`,
                title: `Przysłowia: ${s.label}`,
                excerpt: `Zestaw ${PROVERBS[s.id].length} popularnych przysłów angielskich`,
                content: () => (
                    <section className="card">
                        <h3>{`Przysłowia — ${s.label}`}</h3>
                        <p className="muted">Każde przysłowie zawiera wyjaśnienie znaczenia i kontekstu użycia</p>
                        <table className="vocab-table">
                            <thead>
                            <tr>
                                <th>Przysłowie angielskie</th>
                                <th>Tłumaczenie polskie</th>
                                <th>Wyjaśnienie</th>
                            </tr>
                            </thead>
                            <tbody>
                            {(PROVERBS[s.id] ?? []).map(([en, pl]) => (
                                <tr key={en} className="proverb-row">
                                    <td className="proverb-en"><strong>"{en}"</strong></td>
                                    <td className="proverb-pl">{pl}</td>
                                    <td className="proverb-explanation">
                                        <ProverbExplanation proverb={en} />
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </section>
                ),
            }
        ]
    ]))
)

function TopicsGrid({ basePath, active }) {
    const topics = TOPICS[active] ?? []
    return (
        <div className="topic-grid" role="list">
            {topics.map(t => (
                <Link key={t.id} to={`${basePath}?topic=${t.id}`} className="topic-card" role="listitem">
                    <h4 className="topic-card__title">{t.title}</h4>
                    <p className="topic-card__excerpt">{t.excerpt}</p>
                    <span className="topic-card__cta">Zobacz przysłowia →</span>
                </Link>
            ))}
        </div>
    )
}

function TopicDetail({ topic, onBack }) {
    return (
        <div className="topic-detail">
            <div className="topic-detail__back">
                <Link to={onBack} className="btn-link">← Wróć do listy przysłów</Link>
            </div>
            {topic.content()}
        </div>
    )
}

export default function Proverbs() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const active = section ?? 'najpopularniejsze'
    const topicId = searchParams.get('topic')
    const topics = TOPICS[active] ?? []
    const selected = topics.find(t => t.id === topicId)
    const basePath = `/slownictwo/przyslowia/${active}`

    return (
        <main className="topic-layout">
            <div className="container">
                <header className="topic-header">
                    <h2>Przysłowia angielskie - kompletny przewodnik</h2>
                    <p className="muted">Ponad 80 popularnych przysłów angielskich z tłumaczeniami i wyjaśnieniami</p>
                </header>

                <nav className="subnav" aria-label="Podstrony: Przysłowia">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/slownictwo/przyslowia/${s.id}`}
                            className={({ isActive }) => `subnav__item${isActive ? ' subnav__item--active' : ''}`}
                        >
                            <span className="subnav__title">{s.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <article className="topic-content">
                    {selected ? (
                        <TopicDetail topic={selected} onBack={basePath} />
                    ) : (
                        <>
                            <div className="welcome-message">
                                <h3>Dlaczego warto znać przysłowia angielskie?</h3>
                                <p>Przysłowia to nieodłączna część kultury i języka. Znajomość popularnych przysłów pomoże Ci:</p>
                                <ul>
                                    <li>Lepiej zrozumieć angielską literaturę i media</li>
                                    <li>Wzbogacić swoje wypowiedzi o głębsze znaczenie</li>
                                    <li>Zrozumieć sposób myślenia i wartości anglojęzycznych kultur</li>
                                    <li>Brzmieć bardziej naturalnie i elokwentnie po angielsku</li>
                                </ul>
                                <p><strong>Każde przysłowie zawiera szczegółowe wyjaśnienie znaczenia i kontekstu użycia!</strong></p>
                            </div>
                            <p className="muted">Wybierz kategorię, aby zobaczyć zestaw przysłów z wyjaśnieniami.</p>
                            <TopicsGrid basePath={basePath} active={active} />
                        </>
                    )}
                </article>
            </div>
        </main>
    )
}