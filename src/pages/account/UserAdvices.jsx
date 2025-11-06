import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './UserAdvices.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

const UserAdvices = () => {
    const { user, token } = useAuth();

    const [activeTab, setActiveTab] = useState('submit');
    const [formData, setFormData] = useState({
        type: 'feature',
        title: '',
        description: ''
    });
    const [myFeedback, setMyFeedback] = useState([]);
    const [communityFeedback, setCommunityFeedback] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Stany dla wyszukiwania, filtrów i sortowania
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [sortBy, setSortBy] = useState('newest');

    const feedbackTypes = [
        { value: 'feature', label: 'Nowa funkcja', icon: '💡', description: 'Propozycja nowej funkcjonalności' },
        { value: 'bug', label: 'Znaleziony błąd', icon: '🐛', description: 'Zgłoś problem techniczny' },
        { value: 'improvement', label: 'Ulepszenie', icon: '⚡', description: 'Pomysł na ulepszenie istniejącej funkcji' },
        { value: 'content', label: 'Nowe treści', icon: '📚', description: 'Propozycja nowych materiałów' },
        { value: 'other', label: 'Inne', icon: '💬', description: 'Inne uwagi i pomysły' }
    ];

    const statusOptions = [
        { value: 'all', label: 'Wszystkie statusy' },
        { value: 'new', label: 'Nowy' },
        { value: 'reviewed', label: 'Przejrzany' },
        { value: 'planned', label: 'Planowany' },
        { value: 'in_progress', label: 'W realizacji' },
        { value: 'completed', label: 'Zrealizowany' },
        { value: 'rejected', label: 'Odrzucony' }
    ];

    const sortOptions = [
        { value: 'newest', label: 'Najnowsze' },
        { value: 'oldest', label: 'Najstarsze' },
        { value: 'most_likes', label: 'Najwięcej polubień' },
        { value: 'least_likes', label: 'Najmniej polubień' },
        { value: 'title_asc', label: 'Tytuł A-Z' },
        { value: 'title_desc', label: 'Tytuł Z-A' }
    ];

    useEffect(() => {
        if (user && activeTab === 'my') {
            fetchMyFeedback();
        }
        if (activeTab === 'community') {
            fetchCommunityFeedback();
        }
    }, [activeTab, user]);

    const fetchMyFeedback = async () => {
        try {
            const response = await fetch(`${API_URL}/api/feedback/my`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            if (data.ok) {
                setMyFeedback(data.feedback);
            }
        } catch (error) {
            console.error('Error fetching feedback:', error);
        }
    };

    const fetchCommunityFeedback = async () => {
        try {
            const response = await fetch(`${API_URL}/api/feedback/community`);
            const data = await response.json();
            if (data.ok) {
                setCommunityFeedback(data.feedback);
            }
        } catch (error) {
            console.error('Error fetching community feedback:', error);
        }
    };

    // Filtrowanie i sortowanie danych
    const getFilteredAndSortedData = (data) => {
        let filtered = data.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = selectedType === 'all' || item.type === selectedType;
            const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;

            return matchesSearch && matchesType && matchesStatus;
        });

        // Sortowanie
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return new Date(b.created_at) - new Date(a.created_at);
                case 'oldest':
                    return new Date(a.created_at) - new Date(b.created_at);
                case 'most_likes':
                    return b.upvote_count - a.upvote_count;
                case 'least_likes':
                    return a.upvote_count - b.upvote_count;
                case 'title_asc':
                    return a.title.localeCompare(b.title);
                case 'title_desc':
                    return b.title.localeCompare(a.title);
                default:
                    return new Date(b.created_at) - new Date(a.created_at);
            }
        });

        return filtered;
    };

    const filteredMyFeedback = getFilteredAndSortedData(myFeedback);
    const filteredCommunityFeedback = getFilteredAndSortedData(communityFeedback);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title.trim() || !formData.description.trim()) {
            setMessage('Proszę wypełnić wszystkie pola');
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/api/feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.ok) {
                setMessage('✅ Dziękujemy za Twój feedback! Twoja opinia pomaga nam rozwijać platformę.');
                setFormData({ type: 'feature', title: '', description: '' });
                setTimeout(() => setMessage(''), 5000);
                fetchMyFeedback();
            } else {
                setMessage('❌ ' + (data.error || 'Wystąpił błąd'));
            }
        } catch (error) {
            setMessage('❌ Błąd połączenia. Spróbuj ponownie.');
        } finally {
            setLoading(false);
        }
    };

    const handleUpvote = async (feedbackId) => {
        if (!user) {
            setMessage('🔒 Musisz być zalogowany, aby głosować');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/feedback/${feedbackId}/upvote`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            if (data.ok) {
                fetchCommunityFeedback(); // Refresh list
            }
        } catch (error) {
            console.error('Upvote error:', error);
        }
    };

    const getStatusBadge = (status) => {
        const statusConfig = {
            new: { label: 'Nowy', color: '#868e96' },
            reviewed: { label: 'Przejrzany', color: '#228be6' },
            planned: { label: 'Planowany', color: '#fab005' },
            in_progress: { label: 'W realizacji', color: '#fd7e14' },
            completed: { label: 'Zrealizowany', color: '#40c057' },
            rejected: { label: 'Odrzucony', color: '#fa5252' }
        };

        const config = statusConfig[status] || statusConfig.new;
        return (
            <span className="status-badge" style={{ backgroundColor: config.color }}>
                {config.label}
            </span>
        );
    };

    const getTypeIcon = (type) => {
        const typeMap = {
            feature: '💡',
            bug: '🐛',
            improvement: '⚡',
            content: '📚',
            other: '💬'
        };
        return typeMap[type] || '💬';
    };

    // Reset filtrów przy zmianie zakładki
    useEffect(() => {
        setSearchTerm('');
        setSelectedType('all');
        setSelectedStatus('all');
        setSortBy('newest');
    }, [activeTab]);

    return (
        <article className="advices-article">
            <div className="advices-hero">
                <div className="container">
                    {/*<nav className="article__breadcrumb">*/}
                    {/*    <Link to="/" className="article__breadcrumb-link">Strona główna</Link>*/}
                    {/*    <span className="article__breadcrumb-separator">/</span>*/}
                    {/*    <span className="article__breadcrumb-current">Pomysły i uwagi</span>*/}
                    {/*</nav>*/}
                    <h1 className="advices-hero__title">Pomóż nam budować AngloBoost! 🛠️</h1>
                    <p className="advices-hero__subtitle">
                        Twoje pomysły i uwagi są bezcenne. Razem stworzymy najlepszą platformę do nauki angielskiego.
                    </p>

                    <div className="rewards-banner">
                        <div className="reward-item">
                            <span className="reward-icon">⭐</span>
                            <span>Aktywni uczestnicy otrzymują <strong>darmowe premium</strong></span>
                        </div>
                        <div className="reward-item">
                            <span className="reward-icon">🏆</span>
                            <span>Najlepsze pomysły wdrażamy jako pierwsze</span>
                        </div>
                        <div className="reward-item">
                            <span className="reward-icon">👥</span>
                            <span>Wspólnie decydujemy o rozwoju platformy</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="advices-content">
                    {/* Tab Navigation */}
                    <div className="advices-tabs">
                        <button
                            className={`tab-btn ${activeTab === 'submit' ? 'active' : ''}`}
                            onClick={() => setActiveTab('submit')}
                        >
                            📝 Wyślij pomysł
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'my' ? 'active' : ''}`}
                            onClick={() => setActiveTab('my')}
                        >
                            📨 Moje zgłoszenia
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'community' ? 'active' : ''}`}
                            onClick={() => setActiveTab('community')}
                        >
                            👥 Pomysły społeczności
                        </button>
                    </div>

                    {/* Message Display */}
                    {message && (
                        <div className="message-banner">
                            {message}
                        </div>
                    )}

                    {/* Submit Tab */}
                    {activeTab === 'submit' && (
                        <div className="submit-tab">
                            <div className="form-container">
                                <h2>Wyślij swój pomysł lub uwagę</h2>

                                <form onSubmit={handleSubmit} className="feedback-form">
                                    <div className="form-group">
                                        <label>Typ zgłoszenia:</label>
                                        <div className="type-selector">
                                            {feedbackTypes.map(type => (
                                                <div
                                                    key={type.value}
                                                    className={`type-option ${formData.type === type.value ? 'selected' : ''}`}
                                                    onClick={() => setFormData(prev => ({...prev, type: type.value}))}
                                                >
                                                    <span className="type-icon">{type.icon}</span>
                                                    <div className="type-info">
                                                        <div className="type-label">{type.label}</div>
                                                        <div className="type-desc">{type.description}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="title">Tytuł *</label>
                                        <input
                                            type="text"
                                            id="title"
                                            placeholder="Krótki opis pomysłu..."
                                            value={formData.title}
                                            onChange={(e) => setFormData(prev => ({...prev, title: e.target.value}))}
                                            maxLength={100}
                                        />
                                        <div className="char-count">{formData.title.length}/100</div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="description">Szczegółowy opis *</label>
                                        <textarea
                                            id="description"
                                            placeholder="Opisz swój pomysł szczegółowo. Dlaczego to byłoby przydatne? Jak to powinno działać?"
                                            value={formData.description}
                                            onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
                                            rows={6}
                                            maxLength={1000}
                                        />
                                        <div className="char-count">{formData.description.length}/1000</div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn--primary submit-btn"
                                        disabled={loading || !formData.title.trim() || !formData.description.trim()}
                                    >
                                        {loading ? 'Wysyłanie...' : 'Wyślij pomysł 🚀'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* My Feedback Tab */}
                    {activeTab === 'my' && (
                        <div className="my-feedback-tab">
                            <div className="filters-section">
                                <h2>Moje zgłoszenia</h2>

                                <div className="filters-container">
                                    <div className="search-box">
                                        <input
                                            type="text"
                                            placeholder="Szukaj w tytułach i opisach..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="search-input"
                                        />
                                        <span className="search-icon">🔍</span>
                                    </div>

                                    <div className="filter-controls">
                                        <select
                                            value={selectedType}
                                            onChange={(e) => setSelectedType(e.target.value)}
                                            className="filter-select"
                                        >
                                            <option value="all">Wszystkie typy</option>
                                            {feedbackTypes.map(type => (
                                                <option key={type.value} value={type.value}>
                                                    {type.label}
                                                </option>
                                            ))}
                                        </select>

                                        <select
                                            value={selectedStatus}
                                            onChange={(e) => setSelectedStatus(e.target.value)}
                                            className="filter-select"
                                        >
                                            {statusOptions.map(status => (
                                                <option key={status.value} value={status.value}>
                                                    {status.label}
                                                </option>
                                            ))}
                                        </select>

                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="filter-select"
                                        >
                                            {sortOptions.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="results-info">
                                    Znaleziono {filteredMyFeedback.length} z {myFeedback.length} zgłoszeń
                                </div>
                            </div>

                            {myFeedback.length === 0 ? (
                                <div className="empty-state">
                                    <div className="empty-icon">📝</div>
                                    <h3>Jeszcze nie wysłałeś żadnych pomysłów</h3>
                                    <p>Podziel się swoją opinią - pomóż nam ulepszać platformę!</p>
                                    <button
                                        className="btn btn--primary"
                                        onClick={() => setActiveTab('submit')}
                                    >
                                        Wyślij pierwszy pomysł
                                    </button>
                                </div>
                            ) : filteredMyFeedback.length === 0 ? (
                                <div className="empty-state">
                                    <div className="empty-icon">🔍</div>
                                    <h3>Nie znaleziono zgłoszeń</h3>
                                    <p>Spróbuj zmienić kryteria wyszukiwania lub filtry</p>
                                    <button
                                        className="btn btn--secondary"
                                        onClick={() => {
                                            setSearchTerm('');
                                            setSelectedType('all');
                                            setSelectedStatus('all');
                                        }}
                                    >
                                        Wyczyść filtry
                                    </button>
                                </div>
                            ) : (
                                <div className="feedback-list">
                                    {filteredMyFeedback.map(item => (
                                        <div key={item.id} className="feedback-item">
                                            <div className="feedback-header">
                                                <span className="feedback-type">
                                                    {getTypeIcon(item.type)}
                                                </span>
                                                <h3>{item.title}</h3>
                                                {getStatusBadge(item.status)}
                                            </div>
                                            <p className="feedback-description">{item.description}</p>
                                            <div className="feedback-meta">
                                                <span>📅 {new Date(item.created_at).toLocaleDateString('pl-PL')}</span>
                                                <span>👍 {item.upvote_count} głosów</span>
                                                <span>💬 {item.comment_count} komentarzy</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Community Tab */}
                    {activeTab === 'community' && (
                        <div className="community-tab">
                            <div className="filters-section">
                                <h2>Pomysły społeczności</h2>
                                <p>Głosuj na pomysły, które chciałbyś zobaczyć na platformie!</p>

                                <div className="filters-container">
                                    <div className="search-box">
                                        <input
                                            type="text"
                                            placeholder="Szukaj w tytułach i opisach..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="search-input"
                                        />
                                        <span className="search-icon">🔍</span>
                                    </div>

                                    <div className="filter-controls">
                                        <select
                                            value={selectedType}
                                            onChange={(e) => setSelectedType(e.target.value)}
                                            className="filter-select"
                                        >
                                            <option value="all">Wszystkie typy</option>
                                            {feedbackTypes.map(type => (
                                                <option key={type.value} value={type.value}>
                                                    {type.label}
                                                </option>
                                            ))}
                                        </select>

                                        <select
                                            value={selectedStatus}
                                            onChange={(e) => setSelectedStatus(e.target.value)}
                                            className="filter-select"
                                        >
                                            {statusOptions.map(status => (
                                                <option key={status.value} value={status.value}>
                                                    {status.label}
                                                </option>
                                            ))}
                                        </select>

                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="filter-select"
                                        >
                                            {sortOptions.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="results-info">
                                    Znaleziono {filteredCommunityFeedback.length} z {communityFeedback.length} pomysłów
                                </div>
                            </div>

                            {communityFeedback.length === 0 ? (
                                <div className="empty-state">
                                    <div className="empty-icon">👥</div>
                                    <h3>Brak pomysłów do wyświetlenia</h3>
                                    <p>Bądź pierwszym, który podzieli się pomysłem!</p>
                                </div>
                            ) : filteredCommunityFeedback.length === 0 ? (
                                <div className="empty-state">
                                    <div className="empty-icon">🔍</div>
                                    <h3>Nie znaleziono pomysłów</h3>
                                    <p>Spróbuj zmienić kryteria wyszukiwania lub filtry</p>
                                    <button
                                        className="btn btn--secondary"
                                        onClick={() => {
                                            setSearchTerm('');
                                            setSelectedType('all');
                                            setSelectedStatus('all');
                                        }}
                                    >
                                        Wyczyść filtry
                                    </button>
                                </div>
                            ) : (
                                <div className="community-list">
                                    {filteredCommunityFeedback.map(item => (
                                        <div key={item.id} className="community-item">
                                            <div className="vote-section">
                                                <button
                                                    className="upvote-btn"
                                                    onClick={() => handleUpvote(item.id)}
                                                    title="Głosuj na ten pomysł"
                                                >
                                                    👍
                                                </button>
                                                <span className="upvote-count">{item.upvote_count}</span>
                                            </div>
                                            <div className="content-section">
                                                <div className="feedback-header">
                                                    <span className="feedback-type">
                                                        {getTypeIcon(item.type)}
                                                    </span>
                                                    <h3>{item.title}</h3>
                                                    {getStatusBadge(item.status)}
                                                </div>
                                                <p className="feedback-description">{item.description}</p>
                                                <div className="feedback-meta">
                                                    <span>👤 {item.user_name || 'Anonim'}</span>
                                                    <span>📅 {new Date(item.created_at).toLocaleDateString('pl-PL')}</span>
                                                    <span>💬 {item.comment_count} komentarzy</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
};

export default UserAdvices;