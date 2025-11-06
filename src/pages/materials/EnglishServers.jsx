import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './ArticleStyles.css';
import './DiscordServers.css';

const EnglishServers = () => {
    // Stan dla filtrów i sortowania
    const [selectedLanguage, setSelectedLanguage] = useState('all');
    const [selectedFocus, setSelectedFocus] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Tablica z serwerami Discord
    const discordServers = [
        {
            id: 1,
            name: 'English Learning Community',
            inviteLink: 'https://discord.gg/english',
            description: 'Największa społeczność uczących się angielskiego na Discordzie z codziennymi konwersacjami i eventami',
            language: 'english',
            focus: 'comprehensive',
            members: '862K',
            online: '2.1K',
            activity: 'very-high',
            features: ['Daily conversations', 'Voice channels', 'Writing correction', 'Language partners', 'Weekly events'],
            level: 'A1-C2',
            rules: ['English only', 'Be respectful', 'No spam'],
            rating: 5
        },
        {
            id: 2,
            name: 'Polyglot Language Exchange',
            inviteLink: 'https://discord.gg/polyglot',
            description: 'Wielojęzyczna społeczność do wymiany językowej, idealna do praktyki konwersacji',
            language: 'multilingual',
            focus: 'conversation',
            members: '32K',
            online: '1.5K',
            activity: 'high',
            features: ['Language exchange', 'Cultural exchange', 'Game nights', 'Book club', 'Movie nights'],
            level: 'A2-C2',
            rules: ['Respect all languages', 'Help each other', 'No harassment'],
            rating: 4
        },
        {
            id: 3,
            name: 'Grammar Help Desk',
            inviteLink: 'https://discord.gg/grammar',
            description: 'Specjalistyczny serwer skupiony na gramatyce angielskiej z pomocą native speakerów',
            language: 'english',
            focus: 'grammar',
            members: '18K',
            online: '800',
            activity: 'medium',
            features: ['Grammar help', 'Writing correction', 'Q&A channels', 'Weekly lessons', 'Exercises'],
            level: 'A2-C1',
            rules: ['Stay on topic', 'Provide context', 'Be patient'],
            rating: 5
        },
        {
            id: 4,
            name: 'English for Gamers',
            inviteLink: 'https://discord.gg/eng4gamers',
            description: 'Połącz granie w gry z nauką angielskiego w przyjaznej atmosferze',
            language: 'english',
            focus: 'gaming',
            members: '25K',
            online: '1.2K',
            activity: 'high',
            features: ['Gaming sessions', 'Gaming vocabulary', 'Voice chats', 'Tournaments', 'Fun events'],
            level: 'A1-B2',
            rules: ['English in voice', 'Game etiquette', 'Have fun'],
            rating: 4
        },
        {
            id: 5,
            name: 'Business English Hub',
            inviteLink: 'https://discord.gg/bizenglish',
            description: 'Profesjonalna społeczność skupiona na angielskim biznesowym i zawodowym',
            language: 'english',
            focus: 'business',
            members: '12K',
            online: '450',
            activity: 'medium',
            features: ['Business vocabulary', 'Mock interviews', 'Professional writing', 'Networking', 'Case studies'],
            level: 'B1-C2',
            rules: ['Professional conduct', 'Constructive feedback', 'No spam'],
            rating: 4
        },
        {
            id: 6,
            name: 'IELTS Preparation',
            inviteLink: 'https://discord.gg/WVVDEaYv',
            description: 'Specjalistyczny serwer przygotowujący do egzaminu IELTS',
            language: 'english',
            focus: 'exams',
            members: '33K',
            online: '600',
            activity: 'medium',
            features: ['Exam preparation', 'Practice tests', 'Speaking partners', 'Writing evaluation', 'Study groups'],
            level: 'B1-C2',
            rules: ['Serious study only', 'Share resources', 'Help others'],
            rating: 5
        },
        {
            id: 7,
            name: 'Casual English Chat',
            inviteLink: 'https://discord.gg/casualeng',
            description: 'Luźna atmosfera do codziennych konwersacji bez presji',
            language: 'english',
            focus: 'casual',
            members: '28K',
            online: '900',
            activity: 'medium',
            features: ['Casual talks', 'Topic channels', 'Music sharing', 'Movie discussions', 'Fun activities'],
            level: 'A1-B2',
            rules: ['Be friendly', 'No politics', 'Respect privacy'],
            rating: 4
        },
        {
            id: 8,
            name: 'English Pronunciation Lab',
            inviteLink: 'https://discord.gg/pronunciation',
            description: 'Skup się na poprawie wymowy i akcentu z pomocą native speakerów',
            language: 'english',
            focus: 'pronunciation',
            members: '8K',
            online: '300',
            activity: 'low',
            features: ['Pronunciation practice', 'Accent reduction', 'Voice recordings', 'Phonetics help', 'Tongue twisters'],
            level: 'A2-C2',
            rules: ['Constructive feedback', 'Be supportive', 'Practice regularly'],
            rating: 4
        }
    ];

    // Języki dostępne do filtrowania
    const languages = [
        { value: 'all', label: 'Wszystkie języki' },
        { value: 'english', label: 'Tylko angielski' },
        { value: 'multilingual', label: 'Wielojęzyczne' }
    ];

    // Rodzaje skupienia
    const focuses = [
        { value: 'all', label: 'Wszystkie typy' },
        { value: 'comprehensive', label: 'Kompleksowe' },
        { value: 'conversation', label: 'Konwersacje' },
        { value: 'grammar', label: 'Gramatyka' },
        { value: 'gaming', label: 'Gry' },
        { value: 'business', label: 'Biznes' },
        { value: 'exams', label: 'Egzaminy' },
        { value: 'casual', label: 'Luźne rozmowy' },
        { value: 'pronunciation', label: 'Wymowa' }
    ];

    // Filtrowanie serwerów
    const filteredServers = discordServers.filter(server => {
        const matchesLanguage = selectedLanguage === 'all' || server.language === selectedLanguage;
        const matchesFocus = selectedFocus === 'all' || server.focus === selectedFocus;
        const matchesSearch = server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            server.description.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesLanguage && matchesFocus && matchesSearch;
    });

    // Funkcja do uzyskania koloru dla poziomu aktywności
    const getActivityColor = (activity) => {
        const colors = {
            'very-high': '#40c057',
            'high': '#82c91e',
            'medium': '#fab005',
            'low': '#fa5252'
        };
        return colors[activity] || '#868e96';
    };

    // Funkcja do uzyskania tekstu dla poziomu aktywności
    const getActivityText = (activity) => {
        const texts = {
            'very-high': 'Bardzo wysoka',
            'high': 'Wysoka',
            'medium': 'Średnia',
            'low': 'Niska'
        };
        return texts[activity] || 'Nieznana';
    };

    // Funkcja do renderowania gwiazdek
    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    // Funkcja do uzyskania ikony języka
    const getLanguageIcon = (language) => {
        const icons = {
            'english': '🇬🇧',
            'multilingual': '🌍'
        };
        return icons[language] || '💬';
    };

    // Funkcja do uzyskania ikony focusu
    const getFocusIcon = (focus) => {
        const icons = {
            'comprehensive': '🎯',
            'conversation': '💬',
            'grammar': '📝',
            'gaming': '🎮',
            'business': '💼',
            'exams': '📚',
            'casual': '☕',
            'pronunciation': '🎤'
        };
        return icons[focus] || '🌟';
    };

    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/materialy" className="article__breadcrumb-link">Materiały</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Serwery Discord</span>
                    </nav>
                    <h1 className="article__title">Popularne serwery Discord do nauki angielskiego 🎮</h1>
                    <p className="article__intro">Dołącz do społeczności uczących się angielskiego - praktykuj z native speakerami i innymi studentami w realnym czasie</p>
                    <div className="article__meta">
                        <span className="article__reading-time">👥 Serwery: {discordServers.length} społeczności</span>
                        <span className="article__level">🎯 Poziomy: A1-C2</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>🎯 Dlaczego warto dołączyć na Discord?</h3>
                            <p>Discord oferuje natychmiastową komunikację głosową i tekstową z uczącymi się z całego świata. To jak klub konwersacyjny dostępny 24/7!</p>
                        </div>

                        {/* Filtry i wyszukiwanie */}
                        <div className="server-filters">
                            <div className="filter-row">
                                <div className="filter-group">
                                    <label htmlFor="search-server">Wyszukaj serwer:</label>
                                    <input
                                        type="text"
                                        id="search-server"
                                        placeholder="Wpisz nazwę lub opis..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="filter-search"
                                    />
                                </div>

                                <div className="filter-group">
                                    <label htmlFor="language-filter">Język serwera:</label>
                                    <select
                                        id="language-filter"
                                        value={selectedLanguage}
                                        onChange={(e) => setSelectedLanguage(e.target.value)}
                                        className="filter-select"
                                    >
                                        {languages.map(lang => (
                                            <option key={lang.value} value={lang.value}>
                                                {lang.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="filter-group">
                                    <label htmlFor="focus-filter">Rodzaj serwera:</label>
                                    <select
                                        id="focus-filter"
                                        value={selectedFocus}
                                        onChange={(e) => setSelectedFocus(e.target.value)}
                                        className="filter-select"
                                    >
                                        {focuses.map(focus => (
                                            <option key={focus.value} value={focus.value}>
                                                {focus.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="filter-stats">
                                Znaleziono: <strong>{filteredServers.length}</strong> serwerów
                                {selectedLanguage !== 'all' && ` (${languages.find(l => l.value === selectedLanguage)?.label})`}
                                {selectedFocus !== 'all' && ` - ${focuses.find(f => f.value === selectedFocus)?.label}`}
                            </div>
                        </div>
                    </section>

                    {/* Sekcja z siatką serwerów */}
                    <section className="article__section">
                        <h2>Kolekcja serwerów Discord 🏘️</h2>

                        <div className="servers-grid">
                            {filteredServers.map(server => (
                                <div key={server.id} className="server-card">
                                    <div className="server-card__header">
                                        <div className="server-card__meta">
                                            <span className="server-card__language">
                                                {getLanguageIcon(server.language)} {server.language === 'english' ? 'English Only' : 'Multilingual'}
                                            </span>
                                            <span
                                                className="server-card__activity"
                                                style={{ backgroundColor: getActivityColor(server.activity) }}
                                            >
                                                {getActivityText(server.activity)}
                                            </span>
                                        </div>
                                        <h3 className="server-card__title">
                                            {server.name}
                                        </h3>
                                        <div className="server-card__focus">
                                            {getFocusIcon(server.focus)} {focuses.find(f => f.value === server.focus)?.label}
                                        </div>
                                    </div>

                                    <div className="server-card__content">
                                        <p className="server-card__description">
                                            {server.description}
                                        </p>

                                        <div className="server-card__stats">
                                            <div className="server-stat">
                                                <span className="server-stat__icon">👥</span>
                                                <div className="server-stat__info">
                                                    <span className="server-stat__value">{server.members}</span>
                                                    <span className="server-stat__label">członków</span>
                                                </div>
                                            </div>
                                            <div className="server-stat">
                                                <span className="server-stat__icon">🟢</span>
                                                <div className="server-stat__info">
                                                    <span className="server-stat__value">{server.online}</span>
                                                    <span className="server-stat__label">online</span>
                                                </div>
                                            </div>
                                            <div className="server-stat">
                                                <span className="server-stat__icon">📊</span>
                                                <div className="server-stat__info">
                                                    <span className="server-stat__value">{server.level}</span>
                                                    <span className="server-stat__label">poziom</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="server-card__features">
                                            <h4>Główne funkcje:</h4>
                                            <div className="features-list">
                                                {server.features.map((feature, index) => (
                                                    <span key={index} className="feature-tag">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="server-card__rules">
                                            <h5>📜 Główne zasady:</h5>
                                            <ul>
                                                {server.rules.map((rule, index) => (
                                                    <li key={index}>• {rule}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="server-card__rating">
                                            <span className="server-card__stars">
                                                {renderStars(server.rating)}
                                            </span>
                                            <span className="server-card__rating-text">
                                                ({server.rating}/5)
                                            </span>
                                        </div>
                                    </div>

                                    <div className="server-card__footer">
                                        <a
                                            href={server.inviteLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn--discord"
                                        >
                                            <span className="discord-icon">🎮</span>
                                            Dołącz na Discord
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredServers.length === 0 && (
                            <div className="no-results">
                                <h3>😔 Nie znaleziono serwerów</h3>
                                <p>Spróbuj zmienić kryteria wyszukiwania lub wybierz inną kategorię.</p>
                            </div>
                        )}
                    </section>

                    {/* Sekcja z poradami */}
                    <section className="article__section">
                        <h2>Jak efektywnie korzystać z Discord? 💡</h2>

                        <div className="tips-grid">
                            <div className="tip-card">
                                <h4>🎯 Wybierz odpowiedni serwer</h4>
                                <p>Dopasuj serwer do swojego poziomu i celów. Niektóre są bardziej formalne, inne luźne.</p>
                            </div>

                            <div className="tip-card">
                                <h4>🗣️ Zacznij od tekstu</h4>
                                <p>Na początku korzystaj z kanałów tekstowych, aby nabrać pewności siebie przed rozmowami głosowymi.</p>
                            </div>

                            <div className="tip-card">
                                <h4>👥 Bądź aktywny</h4>
                                <p>Regularnie uczestnicz w konwersacjach i eventach. Im więcej praktykujesz, tym szybciej się uczysz.</p>
                            </div>

                            <div className="tip-card">
                                <h4>📚 Korzystaj z różnych kanałów</h4>
                                <p>Wykorzystuj kanały do pisania, mówienia, gramatyki i słownictwa dla kompleksowej nauki.</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja z zasadami etykiety */}
                    <section className="article__section">
                        <h2>Zasady etykiety na Discord 🏷️</h2>

                        <div className="etiquette-rules">
                            <div className="etiquette-card">
                                <h4>👋 Przedstaw się</h4>
                                <p>Po dołączeniu do serwera, przedstaw się na odpowiednim kanale i napisz czego szukasz.</p>
                            </div>

                            <div className="etiquette-card">
                                <h4>📖 Przeczytaj zasady</h4>
                                <p>Zawsze czytaj zasady serwera przed rozpoczęciem aktywności. Każda społeczność ma swoje reguły.</p>
                            </div>

                            <div className="etiquette-card">
                                <h4>💬 Szanuj innych</h4>
                                <p>Bądź cierpliwy wobec innych uczących się i pomocny wobec tych na niższych poziomach.</p>
                            </div>

                            <div className="etiquette-card">
                                <h4>🔊 Kanały głosowe</h4>
                                <p>Przed dołączeniem do kanału głosowego, sprawdź co się dzieje i zapytaj czy możesz dołączyć.</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🚀 Dołącz do społeczności już dziś!</h3>
                            <p>Wybierz 1-2 serwery odpowiadające Twoim celom i zacznij praktykować z ludźmi z całego świata.</p>
                            <div className="action-buttons">
                                <a
                                    href="https://discord.com/download"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn--primary"
                                >
                                    Pobierz Discord
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
                            <span className="tag">#discord</span>
                            <span className="tag">#społeczność</span>
                            <span className="tag">#konwersacje</span>
                            <span className="tag">#naukaangielskiego</span>
                            <span className="tag">#języki</span>
                        </div>
                        <div className="article__update">
                            <p><strong>Ostatnia aktualizacja:</strong> Grudzień 2024 | Linki zaproszeń są regularnie weryfikowane</p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default EnglishServers;