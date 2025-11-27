import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import useDocumentMeta from '../../useDocumentMeta';
// import './ArticleStyles.css';
import './VideoMaterials.css';

function getMetaTitle(lang) {
    const baseTitle = lang === 'pl'
        ? 'Materiały video do nauki angielskiego - Najlepsze filmy YouTube'
        : 'Video Materials for Learning English - Best YouTube Videos'

    return `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang) {
    const baseDescription = {
        pl: 'Kolekcja najlepszych materiałów video do nauki angielskiego. Filmy na wszystkich poziomach, metody nauki, gramatyka, słownictwo i konwersacje.',
        en: 'Collection of the best video materials for learning English. Videos for all levels, learning methods, grammar, vocabulary and conversations.'
    }

    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang) {
    return lang === 'pl'
        ? 'https://angloboost.pl/pl/materialy/materialy-video'
        : 'https://angloboost.pl/en/materials/video-materials'
}

const VideoMaterials = () => {
    const { lang } = useLanguage()

    useDocumentMeta({
        title: getMetaTitle(lang),
        description: getMetaDescription(lang),
        canonical: getCanonicalUrl(lang),
        og: {
            title: getMetaTitle(lang),
            description: getMetaDescription(lang),
            image: 'https://angloboost.pl/video-social.png',
            url: window.location.href
        }
    })

    // Stan dla filtrów i sortowania
    const [selectedLevel, setSelectedLevel] = useState('all');
    const [sortBy, setSortBy] = useState('title');

    // Tablica z materiałami video
    const videoMaterials = [
        {
            id: 1,
            title: '7 tips for speaking better in any language',
            channel: 'Benny Lewis / English With Benny (polyglot resources)',
            youtubeId: 'vnnT3E6zKos',
            level: 'A2-B1',
            duration: '10:12',
            category: 'speaking',
            views: '1.2M',
            uploadDate: '2019-07-10',
            description:
                'Praktyczne, uniwersalne techniki poprawy płynności mówienia — dobre do codziennych ćwiczeń ustnych.'
        },
        {
            id: 2,
            title: 'How to Learn Any Language Faster (5 Powerful Methods)',
            channel: 'Language Learning Tips',
            youtubeId: 'acn1HaWbFAk',
            level: 'A2-B2',
            duration: '12:34',
            category: 'study methods',
            views: '850K',
            uploadDate: '2020-03-05',
            description:
                'Konkretny zestaw metod, które przyspieszają naukę (sposoby powtórek, immersion, shadowing i więcej).'
        },
        {
            id: 3,
            title: 'I ranked language learning methods to get you fluent FAST',
            channel: 'Matt vs. Languages',
            youtubeId: '0g6jP-KYArU',
            level: 'B1-B2',
            duration: '14:20',
            category: 'methods review',
            views: '470K',
            uploadDate: '2021-11-02',
            description:
                'Analiza i porównanie popularnych metod nauki — które naprawdę działają i w jakich sytuacjach je stosować.'
        },
        {
            id: 4,
            title: 'English study plan – 20-minute daily English learning routine',
            channel: 'Practical English',
            youtubeId: 'axYAW7PuSIM',
            level: 'A2-B1',
            duration: '9:05',
            category: 'study plan',
            views: '230K',
            uploadDate: '2022-06-18',
            description:
                'Krótka, wykonalna dzienna rutyna (20 minut) — idealna jeśli masz mało czasu, ale chcesz regularności.'
        },
        {
            id: 5,
            title: 'The secrets of learning a new language | Lýdia Machová | TED',
            channel: 'TED',
            youtubeId: 'o_XVt5rdpFY',
            level: 'B2-C1',
            duration: '16:47',
            category: 'motivation',
            views: '3.5M',
            uploadDate: '2018-03-27',
            description:
                'Motywujący wykład TED z praktycznymi wnioskami o tym, jak uczyć się skuteczniej i z większą motywacją.'
        },
        {
            id: 6,
            title: '5 Science-Enhanced Language Learning Techniques',
            channel: 'Language Learning Tips',
            youtubeId: 'nR3lDe7m6eU',
            level: 'A2-B1',
            duration: '11:03',
            category: 'learning science',
            views: '412K',
            uploadDate: '2021-05-14',
            description:
                'Naukowo potwierdzone techniki nauki języków — świetne dla tych, którzy chcą prowadzić skuteczną naukę.'
        },
        {
            id: 7,
            title: 'How to use Anki for beginners! (Anki tutorial for language learning)',
            channel: 'The AnKing',
            youtubeId: 'ixD9RWpFuk4',
            level: 'A1-A2',
            duration: '8:02',
            category: 'anki',
            views: '690K',
            uploadDate: '2020-09-22',
            description:
                'Wprowadzenie do Anki — idealne jeśli chcesz zacząć używać fiszek i powtórek w nauce języka.'
        },
        {
            id: 8,
            title: "The ONLY Anki tutorial you'll EVER need - Complete setup",
            channel: 'Refold Community',
            youtubeId: '6BJgxHC3Yuc',
            level: 'A2-B1',
            duration: '17:41',
            category: 'anki',
            views: '510K',
            uploadDate: '2021-04-12',
            description:
                'Szczegółowy przewodnik po Anki — od instalacji po dodatki i synchronizację mobilną.'
        },
        {
            id: 9,
            title: 'How To Use Anki To Remember New Vocabulary',
            channel: 'Gabriel Wyner / Fluent Forever',
            youtubeId: 'IdrXITfIPs0',
            level: 'A2-B2',
            duration: '7:30',
            category: 'anki',
            views: '260K',
            uploadDate: '2019-11-18',
            description:
                'Jak używać Anki, by skutecznie zapamiętywać nowe słowa — idealne dla rozwoju słownictwa.'
        },
        {
            id: 10,
            title: 'The SECRET to Learning Languages 10× FASTER | How to Use Anki',
            channel: 'Jouzu Juls',
            youtubeId: 'DcY2Svs3h8M',
            level: 'B1-B2',
            duration: '13:12',
            category: 'anki',
            views: '200K',
            uploadDate: '2022-02-09',
            description:
                'Na przykładzie japońskiego — metodologia i wykorzystanie Anki, które można zastosować do każdego języka.'
        },
        {
            id: 11,
            title: 'How to REALLY learn a language in 2024 (a linguist explains)',
            channel: 'languagejones',
            youtubeId: 'a2M-AFq5lxo',
            level: 'B2-C1',
            duration: '14:20',
            category: 'science',
            views: '98K',
            uploadDate: '2024-01-14',
            description:
                'Lingwista tłumaczy, co naprawdę działa przy nauce języka — z przykładami i badaniami naukowymi.'
        },
        {
            id: 12,
            title: 'Unique ways to learn languages (without textbooks)',
            channel: 'Lindie Botes',
            youtubeId: '7cCW8Dddvjc',
            level: 'A2-B1',
            duration: '10:07',
            category: 'creative learning',
            views: '420K',
            uploadDate: '2023-02-21',
            description:
                'Kreatywne podejścia do nauki — journaling, media, AI — dla tych, którzy chcą uczyć się nowocześnie.'
        },
        {
            id: 13,
            title: 'How Polyglots Actually Learn Languages with @SpeakingFluently',
            channel: 'Luca Lampariello',
            youtubeId: 'XmYfvK8s4tE',
            level: 'B1-B2',
            duration: '22:15',
            category: 'polyglot talk',
            views: '175K',
            uploadDate: '2021-09-19',
            description:
                'Rozmowa z poliglotą o tym, jakie strategie stosują osoby uczące się wielu języków — praktyczne i inspirujące.'
        },
        {
            id: 14,
            title: 'Ex-Professor Reveals Way to REALLY Learn Languages (according to science)',
            channel: 'Matt Brooks-Green',
            youtubeId: '9Olt2FO99SQ',
            level: 'B2-C1',
            duration: '25:04',
            category: 'science-based',
            views: '312K',
            uploadDate: '2023-11-22',
            description:
                'Były profesor pokazuje naukowe podstawy efektywnej nauki języka — świetne dla ambitnych uczniów.'
        }
    ];


    // Filtrowanie materiałów
    const filteredVideos = videoMaterials.filter(video => {
        if (selectedLevel === 'all') return true;
        return video.level === selectedLevel;
    });

    // Sortowanie materiałów
    const sortedVideos = [...filteredVideos].sort((a, b) => {
        switch (sortBy) {
            case 'title':
                return a.title.localeCompare(b.title);
            case 'level':
                return a.level.localeCompare(b.level);
            case 'views':
                return parseInt(b.views) - parseInt(a.views);
            case 'date':
                return new Date(b.uploadDate) - new Date(a.uploadDate);
            default:
                return 0;
        }
    });

    // Poziomy dostępne do filtrowania
    const levels = ['all', 'A1-A2', 'A2-B1', 'B1-B2', 'B2-C1', 'C1-C2'];

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

    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/materialy" className="article__breadcrumb-link">Materiały</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Materiały Video</span>
                    </nav>
                    <h1 className="article__title">Wartościowe materiały video do nauki angielskiego 🎬</h1>
                    <p className="article__intro">Kolekcja najlepszych filmów YouTube do nauki angielskiego na wszystkich poziomach zaawansowania</p>
                    <div className="article__meta">
                        <span className="article__reading-time">📹 Materiały: {videoMaterials.length} filmów</span>
                        <span className="article__level">🎯 Poziomy: A1-C2</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>🎯 Jak efektywnie uczyć się z video?</h3>
                            <p>Oglądaj z włączonymi napisami angielskimi, powtarzaj na głos zdania, rób notatki i regularnie wracaj do materiałów. Pamiętaj o aktywnej nauce!</p>
                        </div>

                        {/* Filtry i sortowanie */}
                        <div className="video-filters">
                            <div className="filter-group">
                                <label htmlFor="level-filter">Filtruj według poziomu:</label>
                                <select
                                    id="level-filter"
                                    value={selectedLevel}
                                    onChange={(e) => setSelectedLevel(e.target.value)}
                                    className="filter-select"
                                >
                                    {levels.map(level => (
                                        <option key={level} value={level}>
                                            {level === 'all' ? 'Wszystkie poziomy' : level}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="filter-group">
                                <label htmlFor="sort-filter">Sortuj według:</label>
                                <select
                                    id="sort-filter"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="filter-select"
                                >
                                    <option value="title">Tytuł A-Z</option>
                                    <option value="level">Poziom</option>
                                    <option value="views">Popularność</option>
                                    <option value="date">Data dodania</option>
                                </select>
                            </div>

                            <div className="filter-stats">
                                Znaleziono: <strong>{sortedVideos.length}</strong> materiałów
                                {selectedLevel !== 'all' && ` dla poziomu ${selectedLevel}`}
                            </div>
                        </div>
                    </section>

                    {/* Sekcja z materiałami video */}
                    <section className="article__section">
                        <h2>Kolekcja materiałów video 📹</h2>

                        <div className="videos-grid">
                            {sortedVideos.map(video => (
                                <div key={video.id} className="video-card">
                                    <a
                                        href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="video-card__link"
                                    >
                                        <div className="video-card__thumbnail">
                                            <img
                                                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                                                alt={video.title}
                                                className="video-card__image"
                                            />
                                            <div className="video-card__duration">
                                                {video.duration}
                                            </div>
                                            <div className="video-card__overlay">
                                                <span className="video-card__play-icon">▶</span>
                                            </div>
                                        </div>

                                        <div className="video-card__content">
                                            <div
                                                className="video-card__level"
                                                style={{ backgroundColor: getLevelColor(video.level) }}
                                            >
                                                {video.level}
                                            </div>

                                            <h3 className="video-card__title">
                                                {video.title}
                                            </h3>

                                            <p className="video-card__channel">
                                                {video.channel}
                                            </p>

                                            <div className="video-card__meta">
                                                <span className="video-card__views">
                                                    👁️ {video.views} wyświetleń
                                                </span>
                                                <span className="video-card__date">
                                                    📅 {new Date(video.uploadDate).toLocaleDateString('pl-PL')}
                                                </span>
                                            </div>

                                            <div className="video-card__category">
                                                Kategoria: <strong>{video.category}</strong>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>

                        {sortedVideos.length === 0 && (
                            <div className="no-results">
                                <h3>😔 Nie znaleziono materiałów</h3>
                                <p>Spróbuj zmienić kryteria filtrowania lub wybierz inny poziom zaawansowania.</p>
                            </div>
                        )}
                    </section>

                    {/* Sekcja z poradami */}
                    <section className="article__section">
                        <h2>Jak efektywnie korzystać z materiałów? 🎯</h2>

                        <div className="tips-grid">
                            <div className="tip-card">
                                <h4>🎧 Aktywne słuchanie</h4>
                                <p>Nie oglądaj pasywnie. Zatrzymuj video, powtarzaj zdania, rób notatki z nowego słownictwa.</p>
                            </div>

                            <div className="tip-card">
                                <h4>📝 Powtórki</h4>
                                <p>Wróc do tego samego materiału po tygodniu. Sprawdź, ile zapamiętałeś.</p>
                            </div>

                            <div className="tip-card">
                                <h4>🗣️ Mów na głos</h4>
                                <p>Powtarzaj za lektorem. Nagrywaj siebie i porównuj wymowę.</p>
                            </div>

                            <div className="tip-card">
                                <h4>🎯 Wybieraj odpowiedni poziom</h4>
                                <p>Materiał powinien być zrozumiały w 70-80%. Zbyt trudne video zniechęca.</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🎯 Masz swoje ulubione kanały?</h3>
                            <p>Chcesz dodać wartościowe materiały do naszej kolekcji? Skontaktuj się z nami!</p>
                            <div className="action-buttons">
                                <Link to="/kontakt" className="btn btn--primary">Zaproponuj materiał</Link>
                                <Link to="/materialy" className="btn btn--secondary">Wszystkie materiały</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#video</span>
                            <span className="tag">#youtube</span>
                            <span className="tag">#naukaangielskiego</span>
                            <span className="tag">#materialy</span>
                            <span className="tag">#poziomy</span>
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

export default VideoMaterials;