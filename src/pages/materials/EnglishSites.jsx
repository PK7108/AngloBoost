import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import useDocumentMeta from '../../useDocumentMeta';
// import './ArticleStyles.css';
import './ResourceSites.css';

function getMetaTitle(lang) {
    const baseTitle = lang === 'pl'
        ? 'Pomocne strony do nauki angielskiego - Najlepsze zasoby online'
        : 'Helpful English Learning Websites - Best Online Resources'

    return `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang) {
    const baseDescription = {
        pl: 'Kolekcja najlepszych stron, aplikacji i platform do nauki angielskiego. Słownictwo, gramatyka, słuchanie, mówienie - kompleksowe zasoby na wszystkich poziomach.',
        en: 'Collection of the best websites, apps and platforms for learning English. Vocabulary, grammar, listening, speaking - comprehensive resources for all levels.'
    }

    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang) {
    return lang === 'pl'
        ? 'https://angloboost.pl/pl/materialy/pomocne-strony'
        : 'https://angloboost.pl/en/materials/helpful-websites'
}

const EnglishSites = () => {
    const { lang } = useLanguage()

    useDocumentMeta({
        title: getMetaTitle(lang),
        description: getMetaDescription(lang),
        canonical: getCanonicalUrl(lang),
        og: {
            title: getMetaTitle(lang),
            description: getMetaDescription(lang),
            image: 'https://angloboost.pl/websites-social.png',
            url: window.location.href
        }
    })

    // Stan dla filtrów i sortowania
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedLevel, setSelectedLevel] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Tablica z pomocnymi stronami
// Tablica z pomocnymi stronami
    const helpfulSites = [
        {
            id: 1,
            title: 'AnkiDroid',
            url: 'https://apps.ankiweb.net',
            description: 'Zaawansowana aplikacja do nauki z fiszkami wykorzystująca system powtórek spacjowanych - niezwykle efektywna do zapamiętywania słownictwa',
            category: 'vocabulary',
            level: 'A1-C2',
            price: 'free',
            features: ['Powtórki spacjowane', 'Fiszki multimedialne', 'Własne talie', 'Synchronizacja między urządzeniami', 'Statystyki nauki'],
            rating: 5,
            language: 'multilingual'
        },
        {
            id: 2,
            title: 'British Council - LearnEnglish',
            url: 'https://learnenglish.britishcouncil.org',
            description: 'Oficjalna strona British Council z darmowymi kursami, grami, podcastami i ćwiczeniami na wszystkich poziomach',
            category: 'comprehensive',
            level: 'A1-C2',
            price: 'free',
            features: ['Kursy online', 'Ćwiczenia gramatyczne', 'Materiały audio', 'Testy poziomujące'],
            rating: 5,
            language: 'english'
        },
        {
            id: 3,
            title: 'BBC Learning English',
            url: 'https://www.bbc.co.uk/learningenglish',
            description: 'Bogata kolekcja materiałów video, audio i artykułów do nauki współczesnego angielskiego',
            category: 'media',
            level: 'A2-C2',
            price: 'free',
            features: ['Programy video', 'Podcasty', 'Newsy po angielsku', 'Ćwiczenia'],
            rating: 5,
            language: 'english'
        },
        {
            id: 4,
            title: 'Duolingo',
            url: 'https://www.duolingo.com',
            description: 'Popularna aplikacja do nauki języków przez gamifikację, idealna dla początkujących',
            category: 'apps',
            level: 'A1-B2',
            price: 'freemium',
            features: ['Gamifikacja', 'Codzienne cele', 'Aplikacja mobilna', 'Społeczność'],
            rating: 4,
            language: 'polish'
        },
        {
            id: 5,
            title: 'Memrise',
            url: 'https://www.memrise.com',
            description: 'Platforma do nauki słownictwa z wykorzystaniem memów i powtórek spacjowanych',
            category: 'vocabulary',
            level: 'A1-C1',
            price: 'freemium',
            features: ['Fiszki z memami', 'Powtórki spacjowane', 'Wideo z native speakerami', 'Kursy społeczności'],
            rating: 4,
            language: 'polish'
        },
        {
            id: 6,
            title: 'Grammarly',
            url: 'https://www.grammarly.com',
            description: 'Zaawansowany korektor tekstu pomagający pisać poprawnie i naturalnie po angielsku',
            category: 'writing',
            level: 'B1-C2',
            price: 'freemium',
            features: ['Korekta gramatyki', 'Sugestie stylistyczne', 'Sprawdzanie plagiatów', 'Integracja z przeglądarką'],
            rating: 5,
            language: 'english'
        },
        {
            id: 7,
            title: 'Quizlet',
            url: 'https://quizlet.com',
            description: 'Platforma do tworzenia fiszek i interaktywnych quizów do nauki słownictwa',
            category: 'vocabulary',
            level: 'A1-C2',
            price: 'freemium',
            features: ['Fiszki online', 'Gry edukacyjne', 'Tryb nauki', 'Gotowe zestawy'],
            rating: 4,
            language: 'polish'
        },
        {
            id: 8,
            title: 'LingQ',
            url: 'https://www.lingq.com',
            description: 'Platforma do nauki przez czytanie i słuchanie autentycznych materiałów',
            category: 'reading',
            level: 'A2-C2',
            price: 'premium',
            features: ['Czytanie z tłumaczeniem', 'Słuchanie', 'Śledzenie postępów', 'Biblioteka materiałów'],
            rating: 4,
            language: 'english'
        },
        {
            id: 9,
            title: 'SpeakingPal',
            url: 'https://www.speakingpal.com',
            description: 'Aplikacja do ćwiczenia wymowy i mówienia przez interaktywne dialogi',
            category: 'speaking',
            level: 'A1-B2',
            price: 'freemium',
            features: ['Rozpoznawanie mowy', 'Dialogi interaktywne', 'Natychmiastowa informacja zwrotna', 'Ćwiczenia wymowy'],
            rating: 3,
            language: 'english'
        },
        {
            id: 10,
            title: 'Lang-8',
            url: 'https://lang-8.com',
            description: 'Społeczność, w której native speakerzy poprawiają Twoje teksty w zamian za poprawianie ich tekstów w Twoim języku',
            category: 'writing',
            level: 'A2-C2',
            price: 'free',
            features: ['Korekta od native speakerów', 'Wymiana językowa', 'Społeczność', 'Różne poziomy'],
            rating: 4,
            language: 'multilingual'
        },
        {
            id: 11,
            title: 'Elllo',
            url: 'https://www.elllo.org',
            description: 'Bogata kolekcja nagrań audio z native speakerami z całego świata z ćwiczeniami',
            category: 'listening',
            level: 'A2-C1',
            price: 'free',
            features: ['Nagrania audio', 'Różne akcenty', 'Transkrypcje', 'Quizy'],
            rating: 4,
            language: 'english'
        },
        {
            id: 12,
            title: 'Cambridge Dictionary',
            url: 'https://dictionary.cambridge.org',
            description: 'Rzetelny słownik angielskiego z przykładami użycia i wymową',
            category: 'dictionary',
            level: 'A1-C2',
            price: 'free',
            features: ['Definicje', 'Przykłady zdań', 'Wymowa brytyjska/amerykańska', 'Tłumaczenia'],
            rating: 5,
            language: 'multilingual'
        },
        {
            id: 13,
            title: 'HelloTalk',
            url: 'https://www.hellotalk.com',
            description: 'Aplikacja do wymiany językowej z native speakerami z całego świata',
            category: 'speaking',
            level: 'A2-C2',
            price: 'freemium',
            features: ['Czat z native speakerami', 'Korekta wiadomości', 'Połączenia głosowe', 'Społeczność międzynarodowa'],
            rating: 4,
            language: 'multilingual'
        },
        {
            id: 14,
            title: 'Lingoda',
            url: 'https://www.lingoda.com',
            description: 'Platforma z lekcjami online z certyfikowanymi nauczycielami',
            category: 'comprehensive',
            level: 'A1-C2',
            price: 'premium',
            features: ['Lekcje z nauczycielami', 'Certyfikaty', 'Grupy lub zajęcia indywidualne', 'Strukturalny program'],
            rating: 4,
            language: 'english'
        },
        {
            id: 15,
            title: 'WordReference',
            url: 'https://www.wordreference.com',
            description: 'Zaawansowany słownik z forami dyskusyjnymi i kontekstowymi tłumaczeniami',
            category: 'dictionary',
            level: 'A2-C2',
            price: 'free',
            features: ['Słownik kontekstowy', 'Fora dyskusyjne', 'Koniugacje czasowników', 'Wiele języków'],
            rating: 5,
            language: 'multilingual'
        },
        {
            id: 16,
            title: 'FluentU',
            url: 'https://www.fluentu.com',
            description: 'Nauka przez autentyczne filmy z interaktywnymi napisami',
            category: 'media',
            level: 'A2-C2',
            price: 'premium',
            features: ['Filmy z napisami', 'Interaktywne fiszki', 'Śledzenie postępów', 'Różne kategorie filmów'],
            rating: 4,
            language: 'english'
        }
    ];

    // Kategorie dostępne do filtrowania
    const categories = [
        { value: 'all', label: 'Wszystkie kategorie' },
        { value: 'comprehensive', label: 'Kompleksowe platformy' },
        { value: 'vocabulary', label: 'Słownictwo' },
        { value: 'grammar', label: 'Gramatyka' },
        { value: 'listening', label: 'Słuchanie' },
        { value: 'speaking', label: 'Mówienie' },
        { value: 'reading', label: 'Czytanie' },
        { value: 'writing', label: 'Pisanie' },
        { value: 'dictionary', label: 'Słowniki' },
        { value: 'media', label: 'Media i newsy' },
        { value: 'apps', label: 'Aplikacje' }
    ];

    // Poziomy dostępne do filtrowania
    const levels = ['all', 'A1-A2', 'A2-B1', 'B1-B2', 'B2-C1', 'C1-C2'];

    // Filtrowanie stron
    const filteredSites = helpfulSites.filter(site => {
        const matchesCategory = selectedCategory === 'all' || site.category === selectedCategory;
        const matchesLevel = selectedLevel === 'all' || site.level.includes(selectedLevel);
        const matchesSearch = site.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            site.description.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesLevel && matchesSearch;
    });

    // Funkcja do uzyskania koloru dla poziomu
    const getLevelColor = (level) => {
        const colors = {
            'A1-A2': '#4CAF50',
            'A2-B1': '#8BC34A',
            'B1-B2': '#FFC107',
            'B2-C1': '#FF9800',
            'C1-C2': '#F44336'
        };
        return colors[level] || '#9E9E9E';
    };

    // Funkcja do renderowania gwiazdek
    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    // Funkcja do uzyskania ikony języka
    const getLanguageIcon = (language) => {
        const icons = {
            'english': '🇬🇧',
            'polish': '🇵🇱',
            'multilingual': '🌍'
        };
        return icons[language] || '🌐';
    };

    // Funkcja do uzyskania ikony ceny
    const getPriceIcon = (price) => {
        const icons = {
            'free': '🆓',
            'freemium': '💰',
            'premium': '💎'
        };
        return icons[price] || '💵';
    };

    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/materialy" className="article__breadcrumb-link">Materiały</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Pomocne Strony</span>
                    </nav>
                    <h1 className="article__title">Pomocne strony internetowe do nauki angielskiego 🌐</h1>
                    <p className="article__intro">Kolekcja najlepszych stron, aplikacji i platform do nauki angielskiego na wszystkich poziomach zaawansowania</p>
                    <div className="article__meta">
                        <span className="article__reading-time">📚 Zasoby: {helpfulSites.length} stron</span>
                        <span className="article__level">🎯 Poziomy: A1-C2</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>🎯 Jak efektywnie korzystać z tych stron?</h3>
                            <p>Wybierz 2-3 strony odpowiadające Twoim celom i poziomowi. Systematyczność jest kluczowa - lepiej regularnie używać kilku narzędzi niż przeskakiwać między dziesiątkami.</p>
                        </div>

                        {/* Filtry i wyszukiwanie */}
                        <div className="site-filters">
                            <div className="filter-row">
                                <div className="filter-group">
                                    <label htmlFor="search-site">Wyszukaj stronę:</label>
                                    <input
                                        type="text"
                                        id="search-site"
                                        placeholder="Wpisz nazwę lub opis..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="filter-search"
                                    />
                                </div>

                                <div className="filter-group">
                                    <label htmlFor="category-filter">Kategoria:</label>
                                    <select
                                        id="category-filter"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="filter-select"
                                    >
                                        {categories.map(cat => (
                                            <option key={cat.value} value={cat.value}>
                                                {cat.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="filter-group">
                                    <label htmlFor="level-filter">Poziom:</label>
                                    <select
                                        id="level-filter"
                                        value={selectedLevel}
                                        onChange={(e) => setSelectedLevel(e.target.value)}
                                        className="filter-select"
                                    >
                                        <option value="all">Wszystkie poziomy</option>
                                        {levels.filter(level => level !== 'all').map(level => (
                                            <option key={level} value={level}>
                                                {level}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="filter-stats">
                                Znaleziono: <strong>{filteredSites.length}</strong> stron
                                {selectedCategory !== 'all' && ` w kategorii "${categories.find(c => c.value === selectedCategory)?.label}"`}
                                {selectedLevel !== 'all' && ` dla poziomu ${selectedLevel}`}
                            </div>
                        </div>
                    </section>

                    {/* Sekcja z siatką stron */}
                    <section className="article__section">
                        <h2>Kolekcja pomocnych stron 📚</h2>

                        <div className="sites-grid">
                            {filteredSites.map(site => (
                                <div key={site.id} className="site-card">
                                    <div className="site-card__header">
                                        <div className="site-card__meta">
                                            <span
                                                className="site-card__level"
                                                style={{ backgroundColor: getLevelColor(site.level.split('-')[0] + '-' + site.level.split('-')[1]) }}
                                            >
                                                {site.level}
                                            </span>
                                            <span className="site-card__price">
                                                {getPriceIcon(site.price)} {site.price === 'free' ? 'Darmowa' : site.price === 'freemium' ? 'Freemium' : 'Płatna'}
                                            </span>
                                            <span className="site-card__language">
                                                {getLanguageIcon(site.language)}
                                            </span>
                                        </div>
                                        <h3 className="site-card__title">
                                            {site.title}
                                        </h3>
                                    </div>

                                    <div className="site-card__content">
                                        <p className="site-card__description">
                                            {site.description}
                                        </p>

                                        <div className="site-card__features">
                                            <h4>Główne funkcje:</h4>
                                            <ul>
                                                {site.features.map((feature, index) => (
                                                    <li key={index}>✓ {feature}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="site-card__rating">
                                            <span className="site-card__stars">
                                                {renderStars(site.rating)}
                                            </span>
                                            <span className="site-card__rating-text">
                                                ({site.rating}/5)
                                            </span>
                                        </div>
                                    </div>

                                    <div className="site-card__footer">
                                        <a
                                            href={site.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn--primary btn--small"
                                        >
                                            🌐 Odwiedź stronę
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredSites.length === 0 && (
                            <div className="no-results">
                                <h3>😔 Nie znaleziono stron</h3>
                                <p>Spróbuj zmienić kryteria wyszukiwania lub wybierz inną kategorię/poziom.</p>
                            </div>
                        )}
                    </section>

                    {/* Sekcja z rekomendacjami */}
                    <section className="article__section">
                        <h2>Rekomendacje na start 🎯</h2>

                        <div className="recommendations">
                            <div className="recommendation-category">
                                <h3>🚀 Dla początkujących (A1-A2)</h3>
                                <div className="recommendation-list">
                                    <div className="recommendation-item">
                                        <strong>Duolingo</strong> - idealny start przez zabawę
                                    </div>
                                    <div className="recommendation-item">
                                        <strong>British Council</strong> - strukturalne kursy od podstaw
                                    </div>
                                    <div className="recommendation-item">
                                        <strong>Ang.pl</strong> - gramatyka po polsku
                                    </div>
                                </div>
                            </div>

                            <div className="recommendation-category">
                                <h3>📈 Dla średniozaawansowanych (B1-B2)</h3>
                                <div className="recommendation-list">
                                    <div className="recommendation-item">
                                        <strong>BBC Learning English</strong> - autentyczne materiały
                                    </div>
                                    <div className="recommendation-item">
                                        <strong>Memrise</strong> - rozbudowa słownictwa
                                    </div>
                                    <div className="recommendation-item">
                                        <strong>Elllo</strong> - słuchanie różnych akcentów
                                    </div>
                                </div>
                            </div>

                            <div className="recommendation-category">
                                <h3>🎯 Dla zaawansowanych (C1-C2)</h3>
                                <div className="recommendation-list">
                                    <div className="recommendation-item">
                                        <strong>Grammarly</strong> - doskonalenie pisania
                                    </div>
                                    <div className="recommendation-item">
                                        <strong>LingQ</strong> - zaawansowane czytanie
                                    </div>
                                    <div className="recommendation-item">
                                        <strong>Lang-8</strong> - korekta od native speakerów
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja z poradami */}
                    <section className="article__section">
                        <h2>Jak efektywnie korzystać z tych zasobów? 💡</h2>

                        <div className="tips-grid">
                            <div className="tip-card">
                                <h4>🎯 Określ cele</h4>
                                <p>Wybierz strony odpowiadające Twoim celom: konwersacje, gramatyka, słownictwo czy biznesowy angielski.</p>
                            </div>

                            <div className="tip-card">
                                <h4>📅 Stwórz harmonogram</h4>
                                <p>Przeznacz konkretne dni na różne umiejętności: poniedziałek - słuchanie, wtorek - gramatyka itd.</p>
                            </div>

                            <div className="tip-card">
                                <h4>🔄 Łącz różne metody</h4>
                                <p>Używaj aplikacji mobilnej do słówek + strony do gramatyki + podcastów do słuchania.</p>
                            </div>

                            <div className="tip-card">
                                <h4>📊 Śledź postępy</h4>
                                <p>Regularnie sprawdzaj swoje postępy w aplikacjach i testuj się co kilka tygodni.</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🎯 Znasz inne wartościowe strony?</h3>
                            <p>Chcesz podzielić się sprawdzonymi zasobami do nauki angielskiego? Dodaj je do naszej kolekcji!</p>
                            <div className="action-buttons">
                                <Link to="/kontakt" className="btn btn--primary">Zaproponuj stronę</Link>
                                <Link to="/materialy" className="btn btn--secondary">Wszystkie materiały</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#strony</span>
                            <span className="tag">#aplikacje</span>
                            <span className="tag">#naukaangielskiego</span>
                            <span className="tag">#zasoby</span>
                            <span className="tag">#platformy</span>
                        </div>
                        <div className="article__update">
                            <p><strong>Ostatnia aktualizacja:</strong> Grudzień 2024 | Kolekcja regularnie uzupełniana</p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default EnglishSites;