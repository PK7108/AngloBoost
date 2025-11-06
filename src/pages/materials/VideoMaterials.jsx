import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './ArticleStyles.css';
import './VideoMaterials.css';

const VideoMaterials = () => {
    // Stan dla filtrów i sortowania
    const [selectedLevel, setSelectedLevel] = useState('all');
    const [sortBy, setSortBy] = useState('title');

    // Tablica z materiałami video
    const videoMaterials = [
        {
            id: 1,
            title: 'LEARN ENGLISH FAST | Basic Vocabulary A1 | Comprehensible input',
            channel: 'EnglishSponge',
            youtubeId: '0SeZFnmLvW4',
            level: 'A1-A2',
            duration: '7:29',
            category: 'grammar',
            views: '14K',
            uploadDate: '2025-02-14'
        },
        {
            id: 2,
            title: 'Q&A With Benji English Comprehensible Input',
            channel: 'Learn English With Benji',
            youtubeId: 's8h_JBgGVng',
            level: 'B1-B2',
            duration: '9:16',
            category: 'study plan',
            views: '1.8K',
            uploadDate: '2022-09-26'
        },
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