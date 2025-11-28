import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import useDocumentMeta from '../../useDocumentMeta';
import './ArticleStyles.css';

function getMetaTitle(lang) {
    const baseTitle = lang === 'pl'
        ? 'Alfabet fonetyczny IPA - Kompletny przewodnik po wymowie angielskiej'
        : 'Phonetic Alphabet IPA - Complete Guide to English Pronunciation'

    return `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang) {
    const baseDescription = {
        pl: 'Kompletny przewodnik po międzynarodowym alfabecie fonetycznym IPA. Naucz się czytać transkrypcje fonetyczne, popraw wymowę i opanuj angielskie dźwięki jak native speaker.',
        en: 'Complete guide to the International Phonetic Alphabet IPA. Learn to read phonetic transcriptions, improve pronunciation and master English sounds like a native speaker.'
    }

    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang) {
    return lang === 'pl'
        ? 'https://angloboost.pl/pl/artykuly/alfabet-fonetyczny-ipa'
        : 'https://angloboost.pl/en/articles/phonetic-alphabet-ipa'
}

const PhoneticAlphabet = () => {
    const { lang } = useLanguage()

    useDocumentMeta({
        title: getMetaTitle(lang),
        description: getMetaDescription(lang),
        canonical: getCanonicalUrl(lang),
        og: {
            title: getMetaTitle(lang),
            description: getMetaDescription(lang),
            image: 'https://angloboost.pl/UK-social.png',
            url: window.location.href
        }
    })

    return (
        <article className="article">
            <div className="article__header">
                <div className="container">
                    <nav className="article__breadcrumb">
                        <Link to="/artykuly" className="article__breadcrumb-link">Artykuły</Link>
                        <span className="article__breadcrumb-separator">/</span>
                        <span className="article__breadcrumb-current">Alfabet fonetyczny</span>
                    </nav>
                    <h1 className="article__title">Alfabet fonetyczny IPA 🔤</h1>
                    <p className="article__intro">Kompletny przewodnik po międzynarodowym alfabecie fonetycznym - klucz do perfekcyjnej wymowy</p>
                    <div className="article__meta">
                        <span className="article__reading-time">⏱️ Czas czytania: 9 minut</span>
                        <span className="article__level">🎯 Dla: Każdego, kto chce poprawić wymowę</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="article__section">
                        <div className="tip-box">
                            <h3>🎯 Po co nam IPA?</h3>
                            <p><strong>Alfabet fonetyczny pokazuje dokładnie jak wymawiać każde słowo</strong>, bez względu na pisownię. To rozwiązanie problemu: "czytam tak, jak piszę, ale to źle brzmi!"</p>
                        </div>

                        <h2>Czym jest International Phonetic Alphabet (IPA)?</h2>
                        <div className="ipa-intro">
                            <div className="ipa-definition">
                                <h4>🌍 Definicja</h4>
                                <p>IPA to międzynarodowy system zapisu dźwięków mowy, stworzony przez Międzynarodowe Towarzystwo Fonetyczne. Każdy symbol reprezentuje JEDEN dźwięk.</p>
                            </div>
                            <div className="ipa-example">
                                <h4>📝 Przykład w działaniu</h4>
                                <div className="example-comparison">
                                    <div className="word-example">
                                        <span className="word">thought</span>
                                        <span className="transcription">/θɔːt/</span>
                                    </div>
                                    <div className="word-example">
                                        <span className="word">through</span>
                                        <span className="transcription">/θruː/</span>
                                    </div>
                                    <div className="word-example">
                                        <span className="word">tough</span>
                                        <span className="transcription">/tʌf/</span>
                                    </div>
                                </div>
                                <p className="example-note">Te same litery, zupełnie różna wymowa!</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja korzyści */}
                    <section className="article__section">
                        <h2>Dlaczego warto poznać IPA? 🎁</h2>

                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <h4>🎯 Niezależność od pisowni</h4>
                                <p>Nie musisz zgadywać wymowy na podstawie pisowni</p>
                                <div className="benefit-icon">📖</div>
                            </div>

                            <div className="benefit-card">
                                <h4>🔊 Precyzyjna wymowa</h4>
                                <p>Wiesz dokładnie jak wymówić każdy dźwięk</p>
                                <div className="benefit-icon">🎤</div>
                            </div>

                            <div className="benefit-card">
                                <h4>🌍 Uniwersalność</h4>
                                <p>Taki sam dla wszystkich języków i akcentów</p>
                                <div className="benefit-icon">🗺️</div>
                            </div>

                            <div className="benefit-card">
                                <h4>💾 Samodzielna nauka</h4>
                                <p>Możesz sprawdzić wymowę każdego słowa sam</p>
                                <div className="benefit-icon">📚</div>
                            </div>
                        </div>

                        <div className="use-cases">
                            <h4>🎯 Kto używa IPA?</h4>
                            <div className="user-groups">
                                <div className="user-group">
                                    <h5>👨‍🏫 Nauczyciele języków</h5>
                                    <p>Precyzyjne pokazywanie wymowy uczniom</p>
                                </div>
                                <div className="user-group">
                                    <h5>🎭 Aktorzy i lektorzy</h5>
                                    <p>Nauka obcych akcentów i dialektów</p>
                                </div>
                                <div className="user-group">
                                    <h5>🔊 Logopedzi</h5>
                                    <p>Diagnoza i korekta wad wymowy</p>
                                </div>
                                <div className="user-group">
                                    <h5>🌐 Tłumacze</h5>
                                    <p>Zachowanie oryginalnej wymowy nazw</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja samogłosek */}
                    <section className="article__section">
                        <h2>Samogłoski angielskie 🔊</h2>

                        <div className="vowels-section">
                            <div className="vowel-chart">
                                <h4>📊 Mapa samogłosek angielskich</h4>
                                <div className="vowel-diagram">
                                    <div className="vowel-row vowel-row--front">
                                        <div className="vowel-cell">
                                            <span className="vowel-symbol">iː</span>
                                            <span className="vowel-example">see</span>
                                        </div>
                                        <div className="vowel-cell">
                                            <span className="vowel-symbol">ɪ</span>
                                            <span className="vowel-example">sit</span>
                                        </div>
                                        <div className="vowel-cell">
                                            <span className="vowel-symbol">e</span>
                                            <span className="vowel-example">bed</span>
                                        </div>
                                        <div className="vowel-cell">
                                            <span className="vowel-symbol">æ</span>
                                            <span className="vowel-example">cat</span>
                                        </div>
                                    </div>

                                    <div className="vowel-row vowel-row--central">
                                        <div className="vowel-cell">
                                            <span className="vowel-symbol">ɜː</span>
                                            <span className="vowel-example">bird</span>
                                        </div>
                                        <div className="vowel-cell">
                                            <span className="vowel-symbol">ə</span>
                                            <span className="vowel-example">about</span>
                                        </div>
                                        <div className="vowel-cell">
                                            <span className="vowel-symbol">ʌ</span>
                                            <span className="vowel-example">cup</span>
                                        </div>
                                    </div>

                                    <div className="vowel-row vowel-row--back">
                                        <div className="vowel-cell">
                                            <span className="vowel-symbol">uː</span>
                                            <span className="vowel-example">too</span>
                                        </div>
                                        <div className="vowel-cell">
                                            <span className="vowel-symbol">ʊ</span>
                                            <span className="vowel-example">put</span>
                                        </div>
                                        <div className="vowel-cell">
                                            <span className="vowel-symbol">ɔː</span>
                                            <span className="vowel-example">saw</span>
                                        </div>
                                        <div className="vowel-cell">
                                            <span className="vowel-symbol">ɒ</span>
                                            <span className="vowel-example">hot</span>
                                        </div>
                                        <div className="vowel-cell">
                                            <span className="vowel-symbol">ɑː</span>
                                            <span className="vowel-example">car</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="vowel-details">
                                <h4>🎯 Kluczowe różnice dla Polaków</h4>
                                <div className="vowel-comparison">
                                    <div className="vowel-pair">
                                        <div className="vowel-item">
                                            <span className="vowel-symbol">ɪ</span>
                                            <span className="vowel-desc">Krótkie "i" jak w "sit"</span>
                                        </div>
                                        <div className="vowel-item">
                                            <span className="vowel-symbol">iː</span>
                                            <span className="vowel-desc">Długie "i" jak w "see"</span>
                                        </div>
                                    </div>
                                    <div className="vowel-pair">
                                        <div className="vowel-item">
                                            <span className="vowel-symbol">æ</span>
                                            <span className="vowel-desc">Szerokie "a" jak w "cat"</span>
                                        </div>
                                        <div className="vowel-item">
                                            <span className="vowel-symbol">ɑː</span>
                                            <span className="vowel-desc">Długie "a" jak w "car"</span>
                                        </div>
                                    </div>
                                    <div className="vowel-pair">
                                        <div className="vowel-item">
                                            <span className="vowel-symbol">ʊ</span>
                                            <span className="vowel-desc">Krótkie "u" jak w "put"</span>
                                        </div>
                                        <div className="vowel-item">
                                            <span className="vowel-symbol">uː</span>
                                            <span className="vowel-desc">Długie "u" jak w "too"</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja spółgłosek */}
                    <section className="article__section">
                        <h2>Spółgłoski angielskie 🗣️</h2>

                        <div className="consonants-grid">
                            <div className="consonant-category">
                                <h4>👄 Spółgłoski wargowe</h4>
                                <div className="consonant-list">
                                    <div className="consonant-item">
                                        <span className="consonant-symbol">p</span>
                                        <span className="consonant-example">pen</span>
                                    </div>
                                    <div className="consonant-item">
                                        <span className="consonant-symbol">b</span>
                                        <span className="consonant-example">bad</span>
                                    </div>
                                    <div className="consonant-item">
                                        <span className="consonant-symbol">m</span>
                                        <span className="consonant-example">man</span>
                                    </div>
                                    <div className="consonant-item">
                                        <span className="consonant-symbol">w</span>
                                        <span className="consonant-example">win</span>
                                    </div>
                                </div>
                            </div>

                            <div className="consonant-category">
                                <h4>👅 Spółgłoski językowe</h4>
                                <div className="consonant-list">
                                    <div className="consonant-item">
                                        <span className="consonant-symbol">t</span>
                                        <span className="consonant-example">tea</span>
                                    </div>
                                    <div className="consonant-item">
                                        <span className="consonant-symbol">d</span>
                                        <span className="consonant-example">did</span>
                                    </div>
                                    <div className="consonant-item">
                                        <span className="consonant-symbol">n</span>
                                        <span className="consonant-example">no</span>
                                    </div>
                                    <div className="consonant-item">
                                        <span className="consonant-symbol">l</span>
                                        <span className="consonant-example">leg</span>
                                    </div>
                                </div>
                            </div>

                            <div className="consonant-category">
                                <h4>🦷 Spółgłoski międzyzębowe</h4>
                                <div className="consonant-list">
                                    <div className="consonant-item">
                                        <span className="consonant-symbol">θ</span>
                                        <span className="consonant-example">think</span>
                                    </div>
                                    <div className="consonant-item">
                                        <span className="consonant-symbol">ð</span>
                                        <span className="consonant-example">this</span>
                                    </div>
                                </div>
                            </div>

                            <div className="consonant-category">
                                <h4>👃 Spółgłoski nosowe</h4>
                                <div className="consonant-list">
                                    <div className="consonant-item">
                                        <span className="consonant-symbol">m</span>
                                        <span className="consonant-example">man</span>
                                    </div>
                                    <div className="consonant-item">
                                        <span className="consonant-symbol">n</span>
                                        <span className="consonant-example">no</span>
                                    </div>
                                    <div className="consonant-item">
                                        <span className="consonant-symbol">ŋ</span>
                                        <span className="consonant-example">sing</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="consonant-challenges">
                            <h4>🎯 Wyzwania dla Polaków</h4>
                            <div className="challenge-list">
                                <div className="challenge-item">
                                    <h5>ð / θ - Dźwięki międzyzębowe</h5>
                                    <p>Wsuń język między zęby: "think" /θɪŋk/, "this" /ðɪs/</p>
                                </div>
                                <div className="challenge-item">
                                    <h5>r - Miękkie "r"</h5>
                                    <p>Nie drży jak polskie "r": "red" /red/</p>
                                </div>
                                <div className="challenge-item">
                                    <h5>h - Dźwięczne "h"</h5>
                                    <p>Delikatne, bez charknięcia: "house" /haʊs/</p>
                                </div>
                                <div className="challenge-item">
                                    <h5>w - Zaokrąglone "w"</h5>
                                    <p>Usta w dzióbek: "water" /ˈwɔːtər/</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja praktycznej nauki */}
                    <section className="article__section">
                        <h2>Jak uczyć się IPA? 📚</h2>

                        <div className="learning-methods">
                            <div className="method-card">
                                <div className="method-card__header">
                                    <h3>1. Grupuj dźwięki</h3>
                                    <span className="method-difficulty">Łatwe</span>
                                </div>
                                <div className="method-card__content">
                                    <p>Ucz się podobnych dźwięków razem</p>
                                    <div className="sound-group">
                                        <div className="sound-pair">
                                            <span>ʃ - ʒ</span>
                                            <span>"ship" - "measure"</span>
                                        </div>
                                        <div className="sound-pair">
                                            <span>tʃ - dʒ</span>
                                            <span>"church" - "judge"</span>
                                        </div>
                                        <div className="sound-pair">
                                            <span>θ - ð</span>
                                            <span>"think" - "this"</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="method-card">
                                <div className="method-card__header">
                                    <h3>2. Używaj transkrypcji</h3>
                                    <span className="method-difficulty">Średnie</span>
                                </div>
                                <div className="method-card__content">
                                    <p>Zapisuj słowa z transkrypcją fonetyczną</p>
                                    <div className="transcription-examples">
                                        <div className="transcription-item">
                                            <span>beautiful</span>
                                            <span>/ˈbjuːtɪfəl/</span>
                                        </div>
                                        <div className="transcription-item">
                                            <span>comfortable</span>
                                            <span>/ˈkʌmftəbəl/</span>
                                        </div>
                                        <div className="transcription-item">
                                            <span>restaurant</span>
                                            <span>/ˈrestərɒnt/</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="method-card">
                                <div className="method-card__header">
                                    <h3>3. Słuchaj i powtarzaj</h3>
                                    <span className="method-difficulty">Zaawansowane</span>
                                </div>
                                <div className="method-card__content">
                                    <p>Korzystaj z nagrań i naśladuj wymowę</p>
                                    <div className="resources-list">
                                        <div className="resource">
                                            <span>🔊 Forvo.com</span>
                                            <span>Nagrania native speakerów</span>
                                        </div>
                                        <div className="resource">
                                            <span>📱 Cambridge Dictionary</span>
                                            <span>Transkrypcja + audio</span>
                                        </div>
                                        <div className="resource">
                                            <span>🎧 YouGlish</span>
                                            <span>Słowa w kontekście z YouTube</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja praktycznych ćwiczeń */}
                    <section className="article__section">
                        <h2>Ćwiczenia praktyczne 🏋️</h2>

                        <div className="practice-exercises">
                            <div className="exercise-card">
                                <h4>🎯 Ćwiczenie 1: Minimal pairs</h4>
                                <p>Różnicuj podobnie brzmiące słowa:</p>
                                <div className="minimal-pairs">
                                    <div className="pair">
                                        <span>ship /ʃɪp/</span>
                                        <span>sheep /ʃiːp/</span>
                                    </div>
                                    <div className="pair">
                                        <span>bad /bæd/</span>
                                        <span>bed /bed/</span>
                                    </div>
                                    <div className="pair">
                                        <span>full /fʊl/</span>
                                        <span>fool /fuːl/</span>
                                    </div>
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>📝 Ćwiczenie 2: Transkrypcja</h4>
                                <p>Zapisz transkrypcję tych słów:</p>
                                <div className="transcription-challenge">
                                    <div className="challenge-word">
                                        <span>thought</span>
                                        <span className="answer">/θɔːt/</span>
                                    </div>
                                    <div className="challenge-word">
                                        <span>enough</span>
                                        <span className="answer">/ɪˈnʌf/</span>
                                    </div>
                                    <div className="challenge-word">
                                        <span>knowledge</span>
                                        <span className="answer">/ˈnɒlɪdʒ/</span>
                                    </div>
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>🔊 Ćwiczenie 3: Nagrywanie</h4>
                                <p>Nagraj się i porównaj z native speakerem:</p>
                                <div className="recording-examples">
                                    <div className="recording-item">
                                        <span>"The weather is wonderful"</span>
                                        <span>/ðə ˈweðər ɪz ˈwʌndəfəl/</span>
                                    </div>
                                    <div className="recording-item">
                                        <span>"I think she's thirty-three"</span>
                                        <span>/aɪ θɪŋk ʃiːz ˈθɜːti θriː/</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja narzędzi i zasobów */}
                    <section className="article__section">
                        <h2>Niezbędne narzędzia 🛠️</h2>

                        <div className="tools-resources">
                            <div className="tool-category">
                                <h4>📚 Słowniki online</h4>
                                <div className="tool-list">
                                    <div className="tool-item">
                                        <h5>Cambridge Dictionary</h5>
                                        <p>Transkrypcja brytyjska i amerykańska + audio</p>
                                    </div>
                                    <div className="tool-item">
                                        <h5>Oxford Learner's</h5>
                                        <p>Proste transkrypcje dla uczących się</p>
                                    </div>
                                    <div className="tool-item">
                                        <h5>Merriam-Webster</h5>
                                        <p>Transkrypcja amerykańska</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tool-category">
                                <h4>📱 Aplikacje</h4>
                                <div className="tool-list">
                                    <div className="tool-item">
                                        <h5>Sounds: Pronunciation App</h5>
                                        <p>Interaktywny przewodnik po IPA</p>
                                    </div>
                                    <div className="tool-item">
                                        <h5>English Pronunciation</h5>
                                        <p>Ćwiczenia z nagraniami</p>
                                    </div>
                                    <div className="tool-item">
                                        <h5>Elsa Speak</h5>
                                        <p>AI do korekty wymowy</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tool-category">
                                <h4>🌐 Strony edukacyjne</h4>
                                <div className="tool-list">
                                    <div className="tool-item">
                                        <h5>BBC Learning English</h5>
                                        <p>Darmowe lekcje wymowy</p>
                                    </div>
                                    <div className="tool-item">
                                        <h5>Rachel's English</h5>
                                        <p>Szczegółowe analizy wymowy</p>
                                    </div>
                                    <div className="tool-item">
                                        <h5>IPA Chart with Sounds</h5>
                                        <p>Interaktywna tabela IPA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja podsumowania */}
                    <section className="article__section">
                        <div className="ipa-conclusion">
                            <h3>🎯 Czy warto uczyć się IPA?</h3>

                            <div className="conclusion-balance">
                                <div className="pros-cons">
                                    <div className="pros">
                                        <h4>✅ Tak, jeśli:</h4>
                                        <ul>
                                            <li>Chcesz perfekcyjnej wymowy</li>
                                            <li>Uczysz się samodzielnie</li>
                                            <li>Masz problem z angielską pisownią</li>
                                            <li>Planujesz pracę z językiem</li>
                                        </ul>
                                    </div>
                                    <div className="cons">
                                        <h4>❌ Niekoniecznie, jeśli:</h4>
                                        <ul>
                                            <li>Jesteś początkujący</li>
                                            <li>Uczysz się tylko do komunikacji</li>
                                            <li>Masz dobrego nauczyciela</li>
                                            <li>Uczysz się "ze słuchu"</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="final-advice">
                                <h4>💡 Złota rada</h4>
                                <p><strong>Nie ucz się wszystkich symboli naraz!</strong> Zacznij od 5-10 najważniejszych dla Polaków (θ, ð, ɪ, æ, ʊ) i stopniowo dodawaj kolejne. IPA to narzędzie, a nie cel sam w sobie.</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="article__section">
                        <div className="action-box">
                            <h3>🎯 Zacznij od dziś!</h3>
                            <p>Wybierz 3 symbole IPA, które sprawiają Ci najwięcej trudności i ćwicz je przez 5 minut dziennie. Małe kroki prowadzą do wielkich zmian w wymowie!</p>
                            <div className="action-buttons">
                                <Link to="/cwiczenia/gramatyka/wymowa" className="btn btn--primary">Ćwiczenia wymowy</Link>
                                <Link to="/gramatyka/wymowa" className="btn btn--secondary">Poprawna wymowa</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="article__footer">
                        <div className="article__tags">
                            <span className="tag">#ipa</span>
                            <span className="tag">#alfabetfonetyczny</span>
                            <span className="tag">#wymowa</span>
                            <span className="tag">#fonetyka</span>
                            <span className="tag">#angielski</span>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default PhoneticAlphabet;