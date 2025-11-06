import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Literature.css';

const Literature = () => {
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
            amazonLink: 'https://www.amazon.pl/Alchemist-Fable-About-Following-Dream/dp/0722532938/ref=sr_1_1?__mk_pl_PL=ÅMÅŽÕÑ&crid=158HYZZJMXSZW&dib=eyJ2IjoiMSJ9.v9EhUN20Bs_E15ZL7QnAthXhN0mmJYCW726dF6Fh8-yi84Pc1MBWn1JC-DuCCHifQ_v3uyMI53oD2ndcnbR26Ai7_YjI5vMeTIQZNF5Y2yXGC_QDmHTw2chZ297CnWUTjpGhhXQuAsLFtaV5unQ8-vrIOWAnmlwjt2uTQP21e1ZJa9V3miophbZpGhNJGbEafmb0MdSH02e-ftPQh_yRRCkH_RQM595KIBbrvc1jZz5aaDFtdwnNChetuFuLZizA3Mgtek0LBw9ip88EHC9pPGbCmtV0v9uDfhsz4u2aPo0.NnxS9xBQMQXCe853-aPozKLlbyIva7JAIJV9ZBjoheY&dib_tag=se&keywords=The+Alchemist&qid=1762026257&sprefix=the+alchemist%2Caps%2C155&sr=8-1',
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
            amazonLink: 'https://www.amazon.pl/NINETEEN-EIGHTY-FOUR-dystopian-classic-reimagined/dp/0141036141/ref=sr_1_4?adgrpid=119419987842&dib=eyJ2IjoiMSJ9.jKehBp6mYrte4MFxIClfBk9Nwd0rAjAW13Kyo2Z9-jWYdNoMNxRJC5vxPnwRwNQfMt1ChKsMszTejxR_pTxe0D5advZT6mWVg99U5HcNRi0iC-1FcnX2Fsrux4bmOjzQDEEfqUTiunwiDBaEoxCBPmDtvPLJofF9XkPwmEP7uMwiGPoH8cr1TdEtfb8R0IWXbwyzk3878olgB9YBCT0Pv68ttwCzJA38OC8-RnOq7O93c3DwAr3KLQsY-xUsAxfv8M8H7NnjXcZxJUsaXxkIxETY6JEshrZ_wg-ZmIv7A2Q.9zbzAqO5PyNRP67wB9gfgO3wjGVVzjkMhDzmLCCAvk0&dib_tag=se&hvadid=602519479671&hvdev=c&hvlocphy=1011475&hvnetw=g&hvqmt=b&hvrand=12852601181073306583&hvtargid=kwd-23713490&hydadcr=24659_2293492&keywords=1984+by+george+orwell&mcid=e938af84a5f13619917ba14dc4fa33a6&qid=1762026133&sr=8-4',
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
            amazonLink: 'https://www.amazon.pl/Harry-Potter-philosophers-stone-Rowling/dp/1408855658/ref=sr_1_1?__mk_pl_PL=ÅMÅŽÕÑ&crid=38A3DIEFFYH3L&dib=eyJ2IjoiMSJ9.HhBPxSMP_TbUZVX2bgMG1-6j1TL08EeLUZsCe0l-ZF314J1lkpRQL6yvAA9atHL8WYD7RNO0wXRne50FoBENKm1v3HVUeVJblGPQwFGma9d6vbKt2kKX-Yh8xzYDAxoFUTXFmjmbjXsqau2R9a5XSohNbOhjgmvslGNr2nYlT6iteRMuWm8_zX9DMCcCRrrXQczZUVgc3ViLtkY5OKwkI7ZvYlPaqttEWJC83Wr4pLwhEcCCN9YMR5bwRHNVM4pVop23RlrxBEky8n4wgNF59nbbH5706RaaAPIhIO9FhWY.BcnuqnqGdJSk5dcJpWi3gfVmW2hSJTSVcXrWDP6tpp0&dib_tag=se&keywords=Harry+Potter+and+the+Philosopher%27s+Stone+🐉+J.K.+Rowling&qid=1762026299&sprefix=harry+potter+and+the+philosopher%27s+stone+j.k.+rowling%2Caps%2C166&sr=8-1',
            cover: '⚡',
            tags: ['fantasy', 'magic', 'young-adult']
        },
        {
            id: 4,
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            description: 'Poruszająca opowieść o rasizmie i niesprawiedliwości widzianej oczami dziecka',
            level: 'B2',
            genre: 'classic',
            pages: 320,
            year: 1960,
            rating: 5,
            features: ['Amerykańska klasyka', 'Historyczny kontekst', 'Rozwój słownictwa'],
            difficulty: 'medium',
            amazonLink: 'https://www.amazon.pl/Kill-Mockingbird-bestselling-Pulitzer-Prize-winning/dp/0099419785/ref=sr_1_1?__mk_pl_PL=ÅMÅŽÕÑ&crid=3JPOND3N8VX64&dib=eyJ2IjoiMSJ9.bj0lO2ySRgy5NPUZVU27WA27EDPCx0j4Ic3r7lBHV9IX8ZX-AXnAB6VGg0Qcn-836qVME7nQtD6UeMDDtJA7VXUdKPqgnyC4Met8ZQi3q8ueDb4Nu6JX55IMfrG0eHkyVuET-PeicSZMr6Na55y9qXdWoBPxcpBYtMHZVYtyePRel6CiUecTpkRONmNq9Tv_SRp17Bh08vZzlFGESqCjOWRET4UVlFnaImGIa3s_XQNKvHx80mwTAutCt2zhH_ThfIIbwe-FaVeHgp1IdGszuBqyEqOeET9K_l8v7mzqfCs.B-NCuu9lRnctcbZ886hdqPa07G1PaMpZ4ZKI2lsto_E&dib_tag=se&keywords=To+Kill+a+Mockingbird&qid=1762026331&sprefix=to+kill+a+mockingbird%2Caps%2C145&sr=8-1',
            cover: '📗',
            tags: ['classic', 'social-issues', 'american']
        },
        {
            id: 5,
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            description: 'Krytyka amerykańskiego marzenia w opowieści o bogactwie, miłości i iluzji',
            level: 'C1',
            genre: 'classic',
            pages: 110,
            year: 1925,
            rating: 4,
            features: ['Poetycki język', 'Historyczny kontekst', 'Krótka forma'],
            difficulty: 'hard',
            amazonLink: 'https://www.amazon.pl/Great-Gatsby-Classic-1925-Novel/dp/B09QP698F3/ref=sr_1_1?__mk_pl_PL=ÅMÅŽÕÑ&crid=2SS34DXLR1T49&dib=eyJ2IjoiMSJ9.fx35-c_0n3Ecio11HOYJzVhZOPdX2tMizfbrAeqfFnyhWPFrpsjqEopIMrxBEFFvKTSEIZMbdc6NJC-31FsEHkWtGoQCSqW8uYlr1dF83YosnrM8ZIPd0qpy1pIEMBC60RoCfEmpN8dpzZGsfOkLQOFajfObug_lSkDmtJXqUfX54vREEax8qtOA8iFhu705YGCIgJ22ewBnuU1D4A9gk0lTBikK_ZNWzFMhN9pDrNC_WMDWrWZqDc3lW9Hn45u4IR62kFehlVx6bY1iOEk746qnzx0BAy3-m9YoCjhol5c.KL308GEQCpVC9yFaMYWuae_KxWzbg8uy9mezoRDKhmM&dib_tag=se&keywords=The+Great+Gatsby&qid=1762026406&sprefix=the+great+gatsby%2Caps%2C155&sr=8-1',
            cover: '🎩',
            tags: ['classic', 'romance', 'american-dream']
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
            amazonLink: 'https://www.amazon.pl/Hobbit-Classic-Bestselling-Fantasy-Novel/dp/0261103342/ref=sr_1_2?__mk_pl_PL=ÅMÅŽÕÑ&crid=1NZ5QIG0WV4XM&dib=eyJ2IjoiMSJ9.QgkMDdIciBjHgyyA_e8FN0a0OHZ9muyKUNpLHPDKVC01xdLWoQwFRvYZTACBf-vHjqiFhAKcYbZwXsG5732xBXziMJxTuxrLvpT6EA6SzLy1Mmyd2soQ7KC7iflDuSsUuXI7mNPmyGOtcMt-VA3WMyuqLUQkZLwugLh_fY0JvkrfB6O5xzS-f5cy-XJDW_BBiT5jF2-yTowlTRwk3Lk3eon-DAPcGcQl2NNOiEYO9jIFP7kCLxP7rE2ErBPX797T8e9R4trJqRI9H5DtuIl0M6m_xjF74lz2GcJgJJ3CWxU.nLnHFMNkyS5J9QzFf0QM0aHZ8ymZ0hCV97muHNdOemA&dib_tag=se&keywords=The+Hobbit&qid=1762026458&sprefix=the+hobbit%2Caps%2C193&sr=8-2',
            cover: '💍',
            tags: ['fantasy', 'adventure', 'middle-earth']
        },
        {
            id: 7,
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            description: 'Romans i satyra społeczna w Anglii na początku XIX wieku',
            level: 'C1',
            genre: 'romance',
            pages: 448,
            year: 1813,
            rating: 4,
            features: ['Historyczny język', 'Skomplikowane zdania', 'Kultowy romans'],
            difficulty: 'hard',
            amazonLink: 'https://www.amazon.pl/Pride-Prejudice-Jane-Austen/dp/0141439513/ref=sr_1_1?__mk_pl_PL=ÅMÅŽÕÑ&crid=N0JHUD16QGN9&dib=eyJ2IjoiMSJ9.NbgJ0Mtf0sRt5pV_URcUqH1Kg4Tb1ptuGRGuc4KPB3pLfLOLO73IxUr2qoouYJyScqMy81iGTqVBmbz4PbRVv5ZSRFgn3Yl4ltU6lKtCUBqEzLh0b7Htr0xpZXGgo3sJTd1tocI4jm2ZPUO-xlGjj0Q0AOAglg16nwU62KsfI_VFUOscf1YziEtSs8HZBRXv77L8TB6nvRfbSrtygrKyV83C1aA7tbk4omIcUwS66AsEBKlNe1C-3oQ7EdZIXRakq0MJD4tbVknI_ts5u9I1SKfYHekYt3UgSId6PZEiKIw.DsZvV0Ge_D4VLjfi2ZdpIv7k_bRyjXI_IpaJiBB794A&dib_tag=se&keywords=Pride+and+Prejudice&qid=1762026490&sprefix=pride+and+prejudice%2Caps%2C173&sr=8-1',
            cover: '🌹',
            tags: ['romance', 'classic', 'british']
        },
        {
            id: 8,
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
            amazonLink: 'https://www.amazon.pl/Little-Prince-Pocket-Classics-Heartwarming/dp/9386538229/ref=sr_1_3?__mk_pl_PL=ÅMÅŽÕÑ&crid=20NJ0VI3O9NED&dib=eyJ2IjoiMSJ9.H4Rhb_GL0OtsvRqerG64LLfBgNXkJauBJN0KLIzdqiZt1lNI6ST6jsy9_aduQdtO8Z-qQIDRCG_j-CTZJic2VrDfJy3sqPpHBO8mIKO6AazIASSazFXI_7e_nFmtPSv2pcJpZyp30YpMilvDkpHwtlENYS0dHdS8sV5wKA-pqzZT7rxEA0gZgnBA9fprhGKrQjWh9G7064M5uXV5Ipg3IhRAi1gR2fb8lwlceHHCWo0ES8SmfA5fSfKSVZR2umUcTBAEKDURj9tIm53CBi9JBYdWmp0p15jrdJyRV3xtED0.Q1arrfGY6vpJO2gtc3FBMZRoX6vOZOa9GBiPE71mi5w&dib_tag=se&keywords=The+Little+Prince&qid=1762026523&sprefix=the+little+prince%2Caps%2C162&sr=8-3',
            cover: '👑',
            tags: ['philosophy', 'children', 'french']
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