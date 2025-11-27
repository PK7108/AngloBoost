import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import useDocumentMeta from '../../useDocumentMeta';
import './Literature.css';

function getMetaTitle(lang) {
    const baseTitle = lang === 'pl'
        ? 'Polecana literatura po angielsku - Książki na wszystkich poziomach'
        : 'Recommended English Literature - Books for All Levels'

    return `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang) {
    const baseDescription = {
        pl: 'Najlepsze książki do nauki angielskiego od A1 do C2. Klasyki, fantasy, literatura współczesna - opisy, poziomy trudności i linki do zakupu.',
        en: 'Best books for learning English from A1 to C2. Classics, fantasy, contemporary literature - descriptions, difficulty levels and purchase links.'
    }

    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang) {
    return lang === 'pl'
        ? 'https://angloboost.pl/pl/materialy/literatura'
        : 'https://angloboost.pl/en/materials/literature'
}

const Literature = () => {
    const { lang } = useLanguage()

    useDocumentMeta({
        title: getMetaTitle(lang),
        description: getMetaDescription(lang),
        canonical: getCanonicalUrl(lang),
        og: {
            title: getMetaTitle(lang),
            description: getMetaDescription(lang),
            image: 'https://angloboost.pl/literature-social.png',
            url: window.location.href
        }
    })

    // Stan dla filtrów i sortowania
    const [selectedLevel, setSelectedLevel] = useState('all');
    const [selectedGenre, setSelectedGenre] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Tablica z książkami
    const books = [
        {
            id: 1,
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            description: 'Inspirująca opowieść o podróży andaluzyjskiego pasterza w poszukiwaniu swojego osobistego przeznaczenia',
            level: 'B1',
            genre: 'fiction',
            pages: 224,
            year: 1988,
            rating: 5,
            features: ['Prosty język', 'Głębokie przesłanie', 'Krótkie rozdziały'],
            difficulty: 'easy',
            amazonLink: 'https://www.amazon.pl/Alchemist-Fable-About-Following-Dream/dp/0722532938/',
            cover: '📘',
            tags: ['inspirational', 'adventure', 'philosophy']
        },
        {
            id: 2,
            title: '1984',
            author: 'George Orwell',
            description: 'Powieść dystopijna o totalitarnym społeczeństwie, gdzie każdy aspekt życia jest kontrolowany',
            level: 'B2',
            genre: 'dystopian',
            pages: 328,
            year: 1949,
            rating: 5,
            features: ['Współczesna klasyka', 'Bogate słownictwo', 'Ważne tematy'],
            difficulty: 'medium',
            amazonLink: 'https://www.amazon.pl/NINETEEN-EIGHTY-FOUR-dystopian-classic-reimagined/dp/0141036141/',
            cover: '📕',
            tags: ['dystopian', 'political', 'classic']
        },
        {
            id: 3,
            title: 'Harry Potter and the Philosopher\'s Stone',
            author: 'J.K. Rowling',
            description: 'Pierwsza część serii o młodym czarodzieju rozpoczynającym naukę w Szkole Magii i Czarodziejstwa',
            level: 'A2',
            genre: 'fantasy',
            pages: 352,
            year: 1997,
            rating: 5,
            features: ['Wciągająca fabuła', 'Stopniowo trudniejszy język', 'Kultowa seria'],
            difficulty: 'easy',
            amazonLink: 'https://www.amazon.pl/Harry-Potter-philosophers-stone-Rowling/dp/1408855658/',
            cover: '⚡',
            tags: ['fantasy', 'magic', 'young-adult']
        },
        {
            id: 4,
            title: 'Quo Vadis',
            author: 'Henryk Sienkiewicz',
            description: 'Historyczna powieść o miłości rzymskiego patrycjusza do chrześcijanki w czasach Nerona',
            level: 'B2',
            genre: 'classic',
            pages: 589,
            year: 1896,
            rating: 5,
            features: ['Polska klasyka', 'Historyczne słownictwo', 'Nagroda Nobla'],
            difficulty: 'medium',
            amazonLink: 'https://www.amazon.pl/Quo-vadis-Henryk-Sienkiewicz/dp/8375178888/',
            cover: '🏛️',
            tags: ['polish-classic', 'historical', 'nobel']
        },
        {
            id: 5,
            title: 'The Little Prince',
            author: 'Antoine de Saint-Exupéry',
            description: 'Filozoficzna baśń o przyjaźni, miłości i odpowiedzialności',
            level: 'A2',
            genre: 'philosophy',
            pages: 144,
            year: 1943,
            rating: 5,
            features: ['Proste zdania', 'Głębokie przesłanie', 'Ilustracje'],
            difficulty: 'easy',
            amazonLink: 'https://www.amazon.pl/Little-Prince-Pocket-Classics-Heartwarming/dp/9386538229/',
            cover: '👑',
            tags: ['philosophy', 'children', 'french']
        },
        {
            id: 6,
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            description: 'Fantastyczna przygoda hobbita Bilbo Bagginsa w niebezpiecznej podróży do Samotnej Góry',
            level: 'B1',
            genre: 'fantasy',
            pages: 336,
            year: 1937,
            rating: 5,
            features: ['Epicka przygoda', 'Bogate opisy', 'Przyjazny język'],
            difficulty: 'medium',
            amazonLink: 'https://www.amazon.pl/Hobbit-Classic-Bestselling-Fantasy-Novel/dp/0261103342/',
            cover: '💍',
            tags: ['fantasy', 'adventure', 'middle-earth']
        },
        {
            id: 7,
            title: 'The Witcher: The Last Wish',
            author: 'Andrzej Sapkowski',
            description: 'Pierwszy zbiór opowiadań o wiedźminie Geralcie z Rivii w oryginalnej wersji językowej',
            level: 'B2',
            genre: 'fantasy',
            pages: 384,
            year: 1993,
            rating: 5,
            features: ['Polskie fantasy', 'Bogate słownictwo', 'Kultowa seria'],
            difficulty: 'medium',
            amazonLink: 'https://www.amazon.pl/Witcher-Last-Wish-Andrzej-Sapkowski/dp/1473211875/',
            cover: '⚔️',
            tags: ['polish-fantasy', 'witcher', 'slavic']
        },
        {
            id: 8,
            title: 'Animal Farm',
            author: 'George Orwell',
            description: 'Satyryczna opowieść o zwierzętach przejmujących władzę w gospodarstwie',
            level: 'B1',
            genre: 'dystopian',
            pages: 112,
            year: 1945,
            rating: 5,
            features: ['Krótka forma', 'Prosty język', 'Polityczna alegoria'],
            difficulty: 'easy',
            amazonLink: 'https://www.amazon.pl/Animal-Farm-George-Orwell/dp/0451526341/',
            cover: '🐷',
            tags: ['dystopian', 'political', 'satire']
        },
        {
            id: 9,
            title: 'The Secret Garden',
            author: 'Frances Hodgson Burnett',
            description: 'Urokliwa opowieść o przyjaźni i przemianie przez kontakt z naturą',
            level: 'A2',
            genre: 'fiction',
            pages: 331,
            year: 1911,
            rating: 4,
            features: ['Prosty język', 'Pozytywne przesłanie', 'Dla młodzieży'],
            difficulty: 'easy',
            amazonLink: 'https://www.amazon.pl/Secret-Garden-Frances-Hodgson-Burnett/dp/0099572958/',
            cover: '🌹',
            tags: ['children', 'nature', 'classic']
        },
        {
            id: 10,
            title: 'The Giver',
            author: 'Lois Lowry',
            description: 'Dystopijna powieść o chłopcu żyjącym w pozornie idealnym społeczeństwie',
            level: 'B1',
            genre: 'dystopian',
            pages: 240,
            year: 1993,
            rating: 5,
            features: ['Współczesny język', 'Młodzieżowa dystopia', 'Krótkie rozdziały'],
            difficulty: 'medium',
            amazonLink: 'https://www.amazon.pl/Giver-Lois-Lowry/dp/0544336267/',
            cover: '🎭',
            tags: ['dystopian', 'young-adult', 'sci-fi']
        },
        {
            id: 11,
            title: 'Charlotte\'s Web',
            author: 'E.B. White',
            description: 'Wzruszająca opowieść o przyjaźni między świnką Wilburem i pajączką Charlotte',
            level: 'A2',
            genre: 'fiction',
            pages: 192,
            year: 1952,
            rating: 5,
            features: ['Prosty język', 'Ciepła historia', 'Dla wszystkich grup wiekowych'],
            difficulty: 'easy',
            amazonLink: 'https://www.amazon.pl/Charlottes-Web-E-B-White/dp/0064400557/',
            cover: '🕸️',
            tags: ['children', 'friendship', 'classic']
        },
        {
            id: 12,
            title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
            author: 'C.S. Lewis',
            description: 'Magiczna przygoda czworga dzieci w krainie Narnii',
            level: 'A2',
            genre: 'fantasy',
            pages: 206,
            year: 1950,
            rating: 5,
            features: ['Fantastyczny świat', 'Prosty język', 'Chrześcijańska alegoria'],
            difficulty: 'easy',
            amazonLink: 'https://www.amazon.pl/Chronicles-Narnia-Lion-Witch-Wardrobe/dp/0064471047/',
            cover: '🦁',
            tags: ['fantasy', 'children', 'adventure']
        },
        {
            id: 13,
            title: 'The Old Man and the Sea',
            author: 'Ernest Hemingway',
            description: 'Poruszająca opowieść o starym kubańskim rybaku i jego walce z wielką rybą',
            level: 'B1',
            genre: 'classic',
            pages: 127,
            year: 1952,
            rating: 4,
            features: ['Krótka forma', 'Prosty styl', 'Nagroda Nobla'],
            difficulty: 'medium',
            amazonLink: 'https://www.amazon.pl/Old-Man-Sea-Ernest-Hemingway/dp/0684801221/',
            cover: '🎣',
            tags: ['classic', 'nobel', 'adventure']
        },
        {
            id: 14,
            title: 'The Very Hungry Caterpillar',
            author: 'Eric Carle',
            description: 'Uwielbiana przez dzieci książeczka o głodnej gąsienicy przemieniającej się w motyla',
            level: 'A1',
            genre: 'children',
            pages: 26,
            year: 1969,
            rating: 5,
            features: ['Bardzo proste zdania', 'Kolorowe ilustracje', 'Nauka dni tygodnia'],
            difficulty: 'very-easy',
            amazonLink: 'https://www.amazon.pl/Very-Hungry-Caterpillar-Eric-Carle/dp/0399226907/',
            cover: '🐛',
            tags: ['children', 'educational', 'picture-book']
        },
        {
            id: 15,
            title: 'Matilda',
            author: 'Roald Dahl',
            description: 'Historia niezwykle inteligentnej dziewczynki o nadprzyrodzonych zdolnościach',
            level: 'B1',
            genre: 'children',
            pages: 240,
            year: 1988,
            rating: 5,
            features: ['Humor', 'Wciągająca fabuła', 'Temat szkoły'],
            difficulty: 'easy',
            amazonLink: 'https://www.amazon.pl/Matilda-Roald-Dahl/dp/0142410373/',
            cover: '📚',
            tags: ['children', 'school', 'magic']
        },
        {
            id: 16,
            title: 'The Cat in the Hat',
            author: 'Dr. Seuss',
            description: 'Zabawne przygody Kota w Kapeluszu, który odwiedza dwójkę dzieci w deszczowy dzień',
            level: 'A1',
            genre: 'children',
            pages: 61,
            year: 1957,
            rating: 5,
            features: ['Rymowany tekst', 'Proste słownictwo', 'Kultowa pozycja'],
            difficulty: 'very-easy',
            amazonLink: 'https://www.amazon.pl/Cat-Hat-Dr-Seuss/dp/039480001X/',
            cover: '🎩',
            tags: ['children', 'rhymes', 'humor']
        },
        {
            id: 17,
            title: 'Wonder',
            author: 'R.J. Palacio',
            description: 'Wzruszająca historia chłopca z deformacją twarzy zaczynającego naukę w szkole',
            level: 'B1',
            genre: 'fiction',
            pages: 315,
            year: 2012,
            rating: 5,
            features: ['Współczesny język', 'Ważne tematy', 'Wielu narratorów'],
            difficulty: 'medium',
            amazonLink: 'https://www.amazon.pl/Wonder-R-J-Palacio/dp/0552565970/',
            cover: '👦',
            tags: ['contemporary', 'school', 'inspirational']
        },
        {
            id: 18,
            title: 'The Boy in the Striped Pyjamas',
            author: 'John Boyne',
            description: 'Poruszająca historia przyjaźni między synem nazistowskiego oficera i żydowskim chłopcem',
            level: 'B1',
            genre: 'historical',
            pages: 224,
            year: 2006,
            rating: 5,
            features: ['Prosty język', 'Historyczny kontekst', 'Wzruszająca fabuła'],
            difficulty: 'medium',
            amazonLink: 'https://www.amazon.pl/Boy-Striped-Pyjamas-John-Boyne/dp/1862303495/',
            cover: '👕',
            tags: ['historical', 'ww2', 'friendship']
        },
        {
            id: 19,
            title: 'The Curious Incident of the Dog in the Night-Time',
            author: 'Mark Haddon',
            description: 'Niezwykła opowieść o chłopcu z zespołem Aspergera prowadzącym śledztwo',
            level: 'B2',
            genre: 'mystery',
            pages: 272,
            year: 2003,
            rating: 4,
            features: ['Unikalna narracja', 'Współczesny język', 'Temat autyzmu'],
            difficulty: 'medium',
            amazonLink: 'https://www.amazon.pl/Curious-Incident-Dog-Night-Time/dp/0099598450/',
            cover: '🐕',
            tags: ['mystery', 'contemporary', 'autism']
        },
        {
            id: 20,
            title: 'The Picture of Dorian Gray',
            author: 'Oscar Wilde',
            description: 'Filozoficzna powieść o mężczyźnie, którego portret starzeje się zamiast niego',
            level: 'C1',
            genre: 'classic',
            pages: 254,
            year: 1890,
            rating: 5,
            features: ['Wyszukany język', 'Filozoficzne tematy', 'Wiktoriańska Anglia'],
            difficulty: 'hard',
            amazonLink: 'https://www.amazon.pl/Picture-Dorian-Gray-Oscar-Wilde/dp/0141439572/',
            cover: '🖼️',
            tags: ['classic', 'philosophy', 'gothic']
        }
    ];

    // Poziomy zaawansowania
    const levels = [
        { value: 'all', label: 'Wszystkie poziomy' },
        { value: 'A1', label: 'Początkujący A1' },
        { value: 'A2', label: 'Podstawowy A2' },
        { value: 'B1', label: 'Średni B1' },
        { value: 'B2', label: 'Wyższy średni B2' },
        { value: 'C1', label: 'Zaawansowany C1' },
        { value: 'C2', label: 'Biegły C2' }
    ];

    // Gatunki literackie
    const genres = [
        { value: 'all', label: 'Wszystkie gatunki' },
        { value: 'fiction', label: 'Literatura piękna' },
        { value: 'classic', label: 'Klasyka' },
        { value: 'fantasy', label: 'Fantasy' },
        { value: 'dystopian', label: 'Dystopia' },
        { value: 'romance', label: 'Romans' },
        { value: 'philosophy', label: 'Filozofia' }
    ];

    // Filtrowanie książek
    const filteredBooks = books.filter(book => {
        const matchesLevel = selectedLevel === 'all' || book.level === selectedLevel;
        const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;
        const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.description.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesLevel && matchesGenre && matchesSearch;
    });

    // Funkcja do uzyskania koloru dla poziomu trudności
    const getDifficultyColor = (difficulty) => {
        const colors = {
            'easy': '#40c057',
            'medium': '#fab005',
            'hard': '#fa5252'
        };
        return colors[difficulty] || '#868e96';
    };

    // Funkcja do uzyskania tekstu dla poziomu trudności
    const getDifficultyText = (difficulty) => {
        const texts = {
            'easy': 'Łatwa',
            'medium': 'Średnia',
            'hard': 'Trudna'
        };
        return texts[difficulty] || 'Nieznana';
    };

    // Funkcja do renderowania gwiazdek
    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    // Funkcja do uzyskania ikony poziomu
    const getLevelIcon = (level) => {
        const icons = {
            'A1': '🟢',
            'A2': '🟡',
            'B1': '🟠',
            'B2': '🔵',
            'C1': '🟣',
            'C2': '🟤'
        };
        return icons[level] || '📚';
    };

    // Funkcja do uzyskania ikony gatunku
    const getGenreIcon = (genre) => {
        const icons = {
            'fiction': '📖',
            'classic': '🏛️',
            'fantasy': '🐉',
            'dystopian': '🚫',
            'romance': '💕',
            'philosophy': '🧠'
        };
        return icons[genre] || '📚';
    };

    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/materialy" className="article__breadcrumb-link">Materiały</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Literatura</span>
                    </nav>
                    <h1 className="article__title">Polecana literatura po angielsku 📚</h1>
                    <p className="article__intro">Odkryj najlepsze książki do nauki angielskiego - od klasyków po współczesne bestsellery</p>
                    <div className="article__meta">
                        <span className="article__reading-time">📖 Książki: {books.length} pozycji</span>
                        <span className="article__level">🎯 Poziomy: A1-C2</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>🎯 Dlaczego warto czytać po angielsku?</h3>
                            <p>Czytanie w oryginale rozwija słownictwo, poprawia rozumienie tekstu i daje dostęp do kultury anglojęzycznej w jej autentycznej formie!</p>
                        </div>

                        {/* Filtry i wyszukiwanie */}
                        <div className="book-filters">
                            <div className="filter-row">
                                <div className="filter-group">
                                    <label htmlFor="search-book">Wyszukaj książkę:</label>
                                    <input
                                        type="text"
                                        id="search-book"
                                        placeholder="Wpisz tytuł, autora lub opis..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="filter-search"
                                    />
                                </div>

                                <div className="filter-group">
                                    <label htmlFor="level-filter">Poziom angielskiego:</label>
                                    <select
                                        id="level-filter"
                                        value={selectedLevel}
                                        onChange={(e) => setSelectedLevel(e.target.value)}
                                        className="filter-select"
                                    >
                                        {levels.map(level => (
                                            <option key={level.value} value={level.value}>
                                                {level.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="filter-group">
                                    <label htmlFor="genre-filter">Gatunek:</label>
                                    <select
                                        id="genre-filter"
                                        value={selectedGenre}
                                        onChange={(e) => setSelectedGenre(e.target.value)}
                                        className="filter-select"
                                    >
                                        {genres.map(genre => (
                                            <option key={genre.value} value={genre.value}>
                                                {genre.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="filter-stats">
                                Znaleziono: <strong>{filteredBooks.length}</strong> książek
                                {selectedLevel !== 'all' && ` (${levels.find(l => l.value === selectedLevel)?.label})`}
                                {selectedGenre !== 'all' && ` - ${genres.find(g => g.value === selectedGenre)?.label}`}
                            </div>
                        </div>
                    </section>

                    {/* Sekcja z siatką książek */}
                    <section className="article__section">
                        <h2>Kolekcja książek po angielsku 📖</h2>

                        <div className="books-grid">
                            {filteredBooks.map(book => (
                                <div key={book.id} className="book-card">
                                    <div className="book-card__header">
                                        <div className="book-card__cover">
                                            {book.cover}
                                        </div>
                                        <div className="book-card__meta">
                                            <span className="book-card__level">
                                                {getLevelIcon(book.level)} {book.level}
                                            </span>
                                            <span
                                                className="book-card__difficulty"
                                                style={{ backgroundColor: getDifficultyColor(book.difficulty) }}
                                            >
                                                {getDifficultyText(book.difficulty)}
                                            </span>
                                        </div>
                                        <h3 className="book-card__title">
                                            {book.title}
                                        </h3>
                                        <div className="book-card__author">
                                            {getGenreIcon(book.genre)} {book.author}
                                        </div>
                                    </div>

                                    <div className="book-card__content">
                                        <p className="book-card__description">
                                            {book.description}
                                        </p>

                                        <div className="book-card__stats">
                                            <div className="book-stat">
                                                <span className="book-stat__icon">📄</span>
                                                <div className="book-stat__info">
                                                    <span className="book-stat__value">{book.pages}</span>
                                                    <span className="book-stat__label">stron</span>
                                                </div>
                                            </div>
                                            <div className="book-stat">
                                                <span className="book-stat__icon">📅</span>
                                                <div className="book-stat__info">
                                                    <span className="book-stat__value">{book.year}</span>
                                                    <span className="book-stat__label">rok</span>
                                                </div>
                                            </div>
                                            <div className="book-stat">
                                                <span className="book-stat__icon">⚡</span>
                                                <div className="book-stat__info">
                                                    <span className="book-stat__value">{book.level}</span>
                                                    <span className="book-stat__label">poziom</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="book-card__features">
                                            <h4>Dlaczego warto przeczytać:</h4>
                                            <div className="features-list">
                                                {book.features.map((feature, index) => (
                                                    <span key={index} className="feature-tag">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="book-card__tags">
                                            <h5>🏷️ Tagi:</h5>
                                            <div className="tags-list">
                                                {book.tags.map((tag, index) => (
                                                    <span key={index} className="tag">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="book-card__rating">
                                            <span className="book-card__stars">
                                                {renderStars(book.rating)}
                                            </span>
                                            <span className="book-card__rating-text">
                                                ({book.rating}/5)
                                            </span>
                                        </div>
                                    </div>

                                    <div className="book-card__footer">
                                        <a
                                            href={book.amazonLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn--amazon"
                                        >
                                            <span className="amazon-icon">🛒</span>
                                            Kup na Amazon
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredBooks.length === 0 && (
                            <div className="no-results">
                                <h3>😔 Nie znaleziono książek</h3>
                                <p>Spróbuj zmienić kryteria wyszukiwania lub wybierz inną kategorię.</p>
                            </div>
                        )}
                    </section>

                    {/* Sekcja z poradami */}
                    <section className="article__section">
                        <h2>Jak efektywnie czytać po angielsku? 💡</h2>

                        <div className="tips-grid">
                            <div className="tip-card">
                                <h4>📖 Wybierz odpowiedni poziom</h4>
                                <p>Zacznij od książek na poziomie niższym niż twój aktualny. Powinieneś rozumieć 80-90% tekstu.</p>
                            </div>

                            <div className="tip-card">
                                <h4>🔍 Nie tłumacz każdego słowa</h4>
                                <p>Staraj się zrozumieć sens z kontekstu. Tłumacz tylko kluczowe słowa, które powtarzają się często.</p>
                            </div>

                            <div className="tip-card">
                                <h4>📝 Prowadź czytelniczy dziennik</h4>
                                <p>Zapisuj nowe słówka i wyrażenia w kontekście. Regularnie je powtarzaj.</p>
                            </div>

                            <div className="tip-card">
                                <h4>🎧 Słuchaj audiobooków</h4>
                                <p>Czytaj jednocześnie słuchając audiobooka. To poprawia wymowę i rozumienie ze słuchu.</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja z metodami czytania */}
                    <section className="article__section">
                        <h2>Metody efektywnego czytania 📚</h2>

                        <div className="methods-grid">
                            <div className="method-card">
                                <h4>🔍 Extensive Reading</h4>
                                <p>Czytanie dla przyjemności, bez skupiania się na każdym szczególe. Kluczowe dla budowania płynności.</p>
                            </div>

                            <div className="method-card">
                                <h4>📚 Intensive Reading</h4>
                                <p>Dokładna analiza tekstu, z uwzględnieniem gramatyki i słownictwa. Idealne do nauki nowych struktur.</p>
                            </div>

                            <div className="method-card">
                                <h4>⚡ Graded Readers</h4>
                                <p>Książki specjalnie przygotowane dla uczących się, z kontrolowanym słownictwem i uproszczoną gramatyką.</p>
                            </div>

                            <div className="method-card">
                                <h4>🎯 Authentic Materials</h4>
                                <p>Czytanie oryginalnych tekstów napisanych dla native speakerów. Wyzwanie dla zaawansowanych.</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🚀 Zacznij czytać po angielsku już dziś!</h3>
                            <p>Wybierz książkę odpowiadającą Twojemu poziomowi i zainteresowaniom. Regularne czytanie to najprzyjemniejszy sposób nauki!</p>
                            <div className="action-buttons">
                                <a
                                    href="https://amazon.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn--primary"
                                >
                                    Odwiedź Amazon
                                </a>
                                <Link to="/materialy" className="btn btn--secondary">
                                    Wszystkie materiały
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#literatura</span>
                            <span className="tag">#czytanie</span>
                            <span className="tag">#książki</span>
                            <span className="tag">#naukaangielskiego</span>
                            <span className="tag">#czytanieworyginale</span>
                        </div>
                        <div className="article__update">
                            <p><strong>Ostatnia aktualizacja:</strong> Grudzień 2024 | Linki są regularnie weryfikowane</p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default Literature;