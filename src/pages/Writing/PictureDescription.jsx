import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import useDocumentMeta from '../../useDocumentMeta';
import './WritingStyles.css';

function getMetaTitle(lang) {
    const baseTitle = lang === 'pl'
        ? 'Jak opisywać obrazki po angielsku? Kompletny przewodnik'
        : 'How to Describe Pictures in English? Complete Guide'

    return `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang) {
    const baseDescription = {
        pl: 'Kompletny przewodnik po opisywaniu obrazków po angielsku. Naucz się tworzyć szczegółowe opisy obrazków, fotografii i ilustracji. Struktura, słownictwo, przykłady i techniki.',
        en: 'Complete guide to describing pictures in English. Learn how to create detailed descriptions of images, photos and illustrations. Structure, vocabulary, examples and techniques.'
    }

    return baseDescription[lang] || baseDescription.pl
}

function getCanonicalUrl(lang) {
    return lang === 'pl'
        ? 'https://angloboost.pl/pl/pisanie/jak-opisywac-obrazki'
        : 'https://angloboost.pl/en/writing/how-to-describe-pictures'
}

const PictureDescription = () => {
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
        <article className="writing-article">
            <div className="writing-article__header">
                <div className="container">
                    <nav className="writing-article__breadcrumb">
                        <Link to="/pisanie" className="writing-article__breadcrumb-link">Pisanie</Link>
                        <span className="writing-article__breadcrumb-separator">/</span>
                        <span className="writing-article__breadcrumb-current">Opis obrazka</span>
                    </nav>
                    <h1 className="writing-article__title">Jak opisywać obrazki po angielsku? 🖼️</h1>
                    <p className="writing-article__intro">Kompletny przewodnik po tworzeniu szczegółowych i poprawnych opisów obrazków, fotografii i ilustracji w języku angielskim</p>
                    <div className="writing-article__meta">
                        <span className="writing-article__reading-time">⏱️ Czas czytania: 7 minut</span>
                        <span className="writing-article__level">🎯 Poziom: A2-B2</span>
                        <span className="writing-article__words">📝 Słowa kluczowe: picture description, image analysis, visual description</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="writing-article__content">
                    {/* Sekcja wprowadzenia */}
                    <section className="writing-article__section">
                        <div className="writing-tip-box">
                            <h3>🖼️ Czym jest opis obrazka po angielsku?</h3>
                            <p><strong>Picture description</strong> to umiejętność szczegółowego opisywania tego, co widzimy na obrazku, fotografii lub ilustracji. Jest to ważna umiejętność w nauce języka, która rozwija słownictwo, umiejętność obserwacji i zdolność do organizowania myśli.</p>
                        </div>

                        <h2>Kiedy opisujemy obrazki?</h2>
                        <div className="writing-points-grid">
                            <div className="writing-point-card">
                                <h4>🎓 Egzaminy językowe</h4>
                                <p>Część ustna egzaminów (FCE, CAE, matura) - opis zdjęć</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>💼 Prezentacje</h4>
                                <p>Opisywanie wykresów, diagramów, slajdów w pracy</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>📱 Media społecznościowe</h4>
                                <p>Opisywanie zdjęć na Instagramie, Facebooku</p>
                            </div>
                            <div className="writing-point-card">
                                <h4>🎨 Sztuka i kultura</h4>
                                <p>Analiza dzieł sztuki, fotografii, ilustracji</p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja struktury opisu */}
                    <section className="writing-article__section">
                        <h2>Struktura opisu obrazka 🏗️</h2>

                        <div className="picture-structure">
                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">1</span>
                                    <h3>Wprowadzenie (Introduction)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Ogólny przegląd</h4>
                                    <ul>
                                        <li>✅ Co przedstawia obrazek?</li>
                                        <li>✅ Gdzie została zrobiona fotografia?</li>
                                        <li>✅ Jaki jest ogólny nastrój/sceneria?</li>
                                        <li>✅ Kiedy mogła zostać zrobiona (pora dnia, roku)?</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "This photograph shows a beautiful mountain landscape during sunset. The picture appears to have been taken in summer, as the trees are green and the sky is clear."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">2</span>
                                    <h3>Plan pierwszy (Foreground)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>To, co najbliżej obserwatora</h4>
                                    <ul>
                                        <li>✅ Główne obiekty/ postacie</li>
                                        <li>✅ Ich wygląd, pozycja, działania</li>
                                        <li>✅ Kolory, kształty, tekstury</li>
                                        <li>✅ Szczegóły, które przyciągają uwagę</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "In the foreground, we can see a young couple sitting on a blanket. The woman is wearing a red dress and laughing, while the man is pointing towards the mountains."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">3</span>
                                    <h3>Plan środkowy (Middle ground)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Środek obrazka</h4>
                                    <ul>
                                        <li>✅ Elementy pomiędzy pierwszym a tłem</li>
                                        <li>✅ Kontekst i otoczenie</li>
                                        <li>✅ Relacje między elementami</li>
                                        <li>✅ Akcje i interakcje</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "Behind them, there's a small lake with crystal clear water. A few ducks are swimming peacefully in the lake, creating gentle ripples on the surface."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">4</span>
                                    <h3>Tło (Background)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Najdalsze elementy</h4>
                                    <ul>
                                        <li>✅ Góry, niebo, budynki w oddali</li>
                                        <li>✅ Pogoda, oświetlenie</li>
                                        <li>✅ Atmosfera i nastrój</li>
                                        <li>✅ Elementy krajobrazu</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "In the background, majestic snow-capped mountains rise against the sky. The sun is setting, painting the clouds in shades of orange and pink."
                                    </div>
                                </div>
                            </div>

                            <div className="structure-element">
                                <div className="element-header">
                                    <span className="element-number">5</span>
                                    <h3>Interpretacja (Interpretation)</h3>
                                </div>
                                <div className="element-content">
                                    <h4>Znaczenie i odczucia</h4>
                                    <ul>
                                        <li>✅ Co obrazek może przedstawiać?</li>
                                        <li>✅ Jaki nastrój tworzy?</li>
                                        <li>✅ Co autor chciał przekazać?</li>
                                        <li>✅ Twoje osobiste odczucia</li>
                                    </ul>
                                    <div className="element-example">
                                        <strong>Przykład:</strong><br/>
                                        "The overall atmosphere of the picture is peaceful and romantic. It seems to capture a perfect moment of happiness and connection with nature. The photographer probably wanted to show the beauty of simple moments in life."
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja słownictwa */}
                    <section className="writing-article__section">
                        <h2>Słownictwo do opisu obrazka 📝</h2>

                        <div className="picture-vocabulary">
                            <div className="vocab-category">
                                <h3>📍 Lokalizacja i pozycja</h3>
                                <div className="vocab-grid">
                                    <div className="vocab-item">
                                        <span className="vocab-word">in the foreground/background</span>
                                        <span className="vocab-translation">na pierwszym planie/tle</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">on the left/right side</span>
                                        <span className="vocab-translation">po lewej/prawej stronie</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">in the top/bottom corner</span>
                                        <span className="vocab-translation">w górnym/dolnym rogu</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">in the center/middle</span>
                                        <span className="vocab-translation">w centrum/pośrodku</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">next to, beside</span>
                                        <span className="vocab-translation">obok</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">behind, in front of</span>
                                        <span className="vocab-translation">za, przed</span>
                                    </div>
                                </div>
                            </div>

                            <div className="vocab-category">
                                <h3>👤 Opis osób</h3>
                                <div className="vocab-grid">
                                    <div className="vocab-item">
                                        <span className="vocab-word">appears to be...</span>
                                        <span className="vocab-translation">wydaje się być...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">looks happy/tired</span>
                                        <span className="vocab-translation">wygląda na szczęśliwego/zmęczonego</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">is wearing...</span>
                                        <span className="vocab-translation">ma na sobie...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">seems to be...</span>
                                        <span className="vocab-translation">zdaje się...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">is probably...</span>
                                        <span className="vocab-translation">prawdopodobnie...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">might be...</span>
                                        <span className="vocab-translation">może być...</span>
                                    </div>
                                </div>
                            </div>

                            <div className="vocab-category">
                                <h3>🎨 Kolory i wygląd</h3>
                                <div className="vocab-grid">
                                    <div className="vocab-item">
                                        <span className="vocab-word">bright/dark</span>
                                        <span className="vocab-translation">jasny/ciemny</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">vivid/pale</span>
                                        <span className="vocab-translation">żywotny/blady</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">contrasting colors</span>
                                        <span className="vocab-translation">kontrastujące kolory</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">shades of blue/green</span>
                                        <span className="vocab-translation">odcienie niebieskiego/zielonego</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">lighting is...</span>
                                        <span className="vocab-translation">oświetlenie jest...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">the atmosphere is...</span>
                                        <span className="vocab-translation">atmosfera jest...</span>
                                    </div>
                                </div>
                            </div>

                            <div className="vocab-category">
                                <h3>⚡ Akcje i czynności</h3>
                                <div className="vocab-grid">
                                    <div className="vocab-item">
                                        <span className="vocab-word">is walking/running</span>
                                        <span className="vocab-translation">idzie/biegnie</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">seems to be talking</span>
                                        <span className="vocab-translation">zdaje się rozmawiać</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">is looking at...</span>
                                        <span className="vocab-translation">patrzy na...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">appears to be thinking</span>
                                        <span className="vocab-translation">wydaje się myśleć</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">might be waiting for...</span>
                                        <span className="vocab-translation">może czekać na...</span>
                                    </div>
                                    <div className="vocab-item">
                                        <span className="vocab-word">is holding/carrying</span>
                                        <span className="vocab-translation">trzyma/nosi</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja czasów gramatycznych */}
                    <section className="writing-article__section">
                        <h2>Czasy gramatyczne w opisie obrazka ⏳</h2>

                        <div className="grammar-tenses">
                            <div className="tense-card">
                                <div className="tense-header">
                                    <h3>Present Continuous</h3>
                                    <span className="tense-usage">Główne czynności</span>
                                </div>
                                <div className="tense-content">
                                    <p><strong>Użycie:</strong> Do opisywania tego, co się dzieje na obrazku</p>
                                    <div className="tense-examples">
                                        <div className="example-pair">
                                            <span className="example">"The man is walking his dog."</span>
                                            <span className="translation">Mężczyzna spaceruje z psem.</span>
                                        </div>
                                        <div className="example-pair">
                                            <span className="example">"They are having a picnic."</span>
                                            <span className="translation">Oni mają piknik.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tense-card">
                                <div className="tense-header">
                                    <h3>Present Simple</h3>
                                    <span className="tense-usage">Stałe elementy</span>
                                </div>
                                <div className="tense-content">
                                    <p><strong>Użycie:</strong> Do opisywania tego, co jest na obrazku</p>
                                    <div className="tense-examples">
                                        <div className="example-pair">
                                            <span className="example">"There is a house in the background."</span>
                                            <span className="translation">W tle jest dom.</span>
                                        </div>
                                        <div className="example-pair">
                                            <span className="example">"The sky looks beautiful."</span>
                                            <span className="translation">Niebo wygląda pięknie.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tense-card">
                                <div className="tense-header">
                                    <h3>Modal Verbs</h3>
                                    <span className="tense-usage">Przypuszczenia</span>
                                </div>
                                <div className="tense-content">
                                    <p><strong>Użycie:</strong> Gdy nie jesteśmy pewni, co się dzieje</p>
                                    <div className="tense-examples">
                                        <div className="example-pair">
                                            <span className="example">"They might be tourists."</span>
                                            <span className="translation">Oni mogą być turystami.</span>
                                        </div>
                                        <div className="example-pair">
                                            <span className="example">"It could be summer."</span>
                                            <span className="translation">To może być lato.</span>
                                        </div>
                                        <div className="example-pair">
                                            <span className="example">"She seems to be happy."</span>
                                            <span className="translation">Ona wydaje się szczęśliwa.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Przykładowe opisy */}
                    <section className="writing-article__section">
                        <h2>Przykładowe opisy obrazków ✨</h2>

                        <div className="picture-examples">
                            <div className="picture-example">
                                <div className="picture-header">
                                    <h3>🏙️ Opis miejskiego krajobrazu</h3>
                                    <div className="picture-meta">
                                        <span className="type">Cityscape</span>
                                        <span className="time">Evening</span>
                                        <span className="mood">Dynamic</span>
                                    </div>
                                </div>

                                <div className="picture-content">
                                    <div className="picture-visual">
                                        <div className="picture-visual">
                                            <div className="image-placeholder">
                                                <img
                                                    src="../../public/UrbanArea.png"
                                                    alt="Ulica w nowoczesnym mieście wieczorem"
                                                    className="w-full h-auto rounded-2xl shadow-lg"
                                                />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="picture-description">
                                        <div className="description-paragraph">
                                            <p><strong>This photograph captures a bustling city street at night.</strong> The picture appears to have been taken in a modern metropolitan area, possibly in a city like New York or Tokyo. The overall atmosphere is vibrant and energetic.</p>
                                            <p className="analysis">
                                                <strong>Analiza:</strong> Ogólne wprowadzenie z określeniem miejsca i nastroju.
                                            </p>
                                        </div>

                                        <div className="description-paragraph">
                                            <p><strong>In the foreground,</strong> we can see crowded sidewalks filled with people. Most of them are wearing winter coats, suggesting the photo was taken during cold weather. Some people are walking quickly while others are waiting to cross the street.</p>
                                            <p className="analysis">
                                                <strong>Analiza:</strong> Opis pierwszego planu z detalami i przypuszczeniami.
                                            </p>
                                        </div>

                                        <div className="description-paragraph">
                                            <p><strong>The middle ground is dominated</strong> by traffic - cars and buses are moving along the wet street, their headlights creating beautiful light trails. Numerous skyscrapers line both sides of the street, their windows illuminated against the dark sky.</p>
                                            <p className="analysis">
                                                <strong>Analiza:</strong> Plan środkowy z opisem ruchu i architektury.
                                            </p>
                                        </div>

                                        <div className="description-paragraph">
                                            <p><strong>In the background,</strong> we can see more tall buildings reaching into the night sky. The buildings are decorated with colorful neon signs and advertisements, creating a spectacular display of urban lighting.</p>
                                            <p className="analysis">
                                                <strong>Analiza:</strong> Tło z opisem najdalszych elementów.
                                            </p>
                                        </div>

                                        <div className="description-paragraph">
                                            <p><strong>The overall impression</strong> is one of modern urban life - fast-paced, colorful, and never sleeping. The photographer likely wanted to capture the energy and beauty of city life after dark.</p>
                                            <p className="analysis">
                                                <strong>Analiza:</strong> Interpretacja i podsumowanie ogólnego wrażenia.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="picture-example">
                                <div className="picture-header">
                                    <h3>🌅 Opis krajobrazu naturalnego</h3>
                                    <div className="picture-meta">
                                        <span className="type">Nature</span>
                                        <span className="time">Sunrise</span>
                                        <span className="mood">Peaceful</span>
                                    </div>
                                </div>

                                <div className="picture-content">
                                    <div className="picture-visual">
                                        <div className="image-placeholder">
                                            <img
                                                src="../../public/LakePhoto.png"
                                                alt="Jezioro o wschodzie słońca"
                                                className="w-full h-auto rounded-2xl shadow-lg"
                                            />
                                        </div>
                                    </div>

                                    <div className="picture-description">
                                        <div className="description-paragraph">
                                            <p><strong>This stunning photograph shows a tranquil lake at sunrise.</strong> The scene appears completely untouched by human activity, creating a sense of pure natural beauty. The soft morning light gives the picture a magical quality.</p>
                                        </div>

                                        <div className="description-paragraph">
                                            <p><strong>In the foreground,</strong> crystal clear water gently laps against the rocky shore. The surface of the water is so still that it acts like a perfect mirror, reflecting the surrounding landscape. A few water lilies float peacefully near the edge.</p>
                                        </div>

                                        <div className="description-paragraph">
                                            <p><strong>The middle ground features</strong> the expansive lake stretching towards distant hills. The water transitions from dark blue near the shore to golden hues where the sunrise touches its surface. Mist rises from the water, adding to the mystical atmosphere.</p>
                                        </div>

                                        <div className="description-paragraph">
                                            <p><strong>In the background,</strong> forested hills rise against the sky, which is painted in beautiful shades of orange, pink, and purple. The sun is just beginning to appear over the horizon, casting a warm golden glow across the entire scene.</p>
                                        </div>

                                        <div className="description-paragraph">
                                            <p><strong>The photograph creates</strong> a feeling of complete peace and serenity. It seems to invite the viewer to pause and appreciate the quiet beauty of nature. The photographer has skillfully captured a moment of perfect harmony between light, water, and landscape.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja wskazówek praktycznych */}
                    <section className="writing-article__section">
                        <h2>Wskazówki praktyczne 🎯</h2>

                        <div className="practical-tips">
                            <div className="tip-category">
                                <h3>👀 Techniki obserwacji</h3>
                                <div className="tip-list">
                                    <div className="tip-item">
                                        <h4>✅ Zaczynaj od ogółu do szczegółu</h4>
                                        <p>Najpierw ogólny widok, potem poszczególne elementy</p>
                                    </div>
                                    <div className="tip-item">
                                        <h4>✅ Używaj logicznej kolejności</h4>
                                        <p>Przód → środek → tył lub lewo → prawo</p>
                                    </div>
                                    <div className="tip-item">
                                        <h4>✅ Zwracaj uwagę na relacje</h4>
                                        <p>Jak elementy są ze sobą powiązane przestrzennie</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tip-category">
                                <h3>💭 Jak wnioskować</h3>
                                <div className="tip-list">
                                    <div className="tip-item">
                                        <h4>✅ Obserwuj szczegóły</h4>
                                        <p>Ubrania, pogoda, aktywności pomagają w przypuszczeniach</p>
                                    </div>
                                    <div className="tip-item">
                                        <h4>✅ Używaj czasowników modalnych</h4>
                                        <p>"might be", "could be", "seems to be" gdy nie jesteś pewny</p>
                                    </div>
                                    <div className="tip-item">
                                        <h4>✅ Zwracaj uwagę na emocje</h4>
                                        <p>Wyrazy twarzy, język ciała, ogólna atmosfera</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tip-category">
                                <h3>🗣️ Dla egzaminów ustnych</h3>
                                <div className="tip-list">
                                    <div className="tip-item">
                                        <h4>✅ Mów płynnie i pewnie</h4>
                                        <p>Nawet jeśli robisz błędy, mów dalej</p>
                                    </div>
                                    <div className="tip-item">
                                        <h4>✅ Używaj bogatego słownictwa</h4>
                                        <p>Unikaj powtarzania tych samych słów</p>
                                    </div>
                                    <div className="tip-item">
                                        <h4>✅ Zarządzaj czasem</h4>
                                        <p>1-2 minuty na opis, reszta na interpretację</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja ćwiczeń */}
                    <section className="writing-article__section">
                        <h2>Ćwiczenia praktyczne 🏋️</h2>

                        <div className="writing-exercises">
                            <div className="exercise-card">
                                <h4>Ćwiczenie 1: Opisz pozycje</h4>
                                <p><strong>Zadanie:</strong> Opisz gdzie znajdują się elementy na podstawie opisu:</p>
                                <div className="position-exercise">
                                    <div className="exercise-scenario">
                                        "Na obrazku jest stół. Na stole stoi wazon z kwiatami. Obok wazonu leży książka. Za stołem wisi obraz. Przed stołem siedzi kobieta."
                                    </div>
                                    <div className="exercise-requirements">
                                        <strong>Wymagania:</strong> Użyj przynajmniej 5 różnych wyrażeń określających pozycję.
                                    </div>
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>Ćwiczenie 2: Stwórz opis</h4>
                                <p><strong>Zadanie:</strong> Opisz poniższą scenę używając podanej struktury:</p>
                                <div className="description-exercise">
                                    <div className="scene-description">
                                        <strong>Scena:</strong> Plaża w słoneczny dzień. Dzieci budują zamek z piasku. Rodzice leżą na ręcznikach. W oddali widać statki.
                                    </div>
                                    <div className="structure-guide">
                                        <strong>Struktura:</strong><br/>
                                        1. Wprowadzenie (co, gdzie, kiedy)<br/>
                                        2. Pierwszy plan (główne postacie)<br/>
                                        3. Plan środkowy (otoczenie)<br/>
                                        4. Tło (elementy w oddali)<br/>
                                        5. Interpretacja (nastrój, znaczenie)
                                    </div>
                                </div>
                            </div>

                            <div className="exercise-card">
                                <h4>Ćwiczenie 3: Opisz swoje zdjęcie</h4>
                                <p><strong>Zadanie:</strong> Wybierz swoje zdjęcie i opisz je szczegółowo:</p>
                                <div className="personal-picture-exercise">
                                    <div className="picture-options">
                                        <div className="option">
                                            <strong>Opcja 1:</strong> Zdjęcie z wakacji
                                        </div>
                                        <div className="option">
                                            <strong>Opcja 2:</strong> Zdjęcie rodzinne
                                        </div>
                                        <div className="option">
                                            <strong>Opcja 3:</strong> Zdjęcie ulubionego miejsca
                                        </div>
                                    </div>
                                    <div className="vocabulary-reminder">
                                        <strong>Pamiętaj o:</strong> Lokalizacji, kolorach, czynnościach, przypuszczeniach, nastroju
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja szablonów */}
                    <section className="writing-article__section">
                        <h2>Gotowe szablony opisów 📄</h2>

                        <div className="description-templates">
                            <div className="template-card">
                                <h4>🏙️ Szablon opisu miejskiego</h4>
                                <div className="template-content">
                                    <div className="template-section">
                                        <strong>Introduction:</strong><br/>
                                        "This photograph shows [place] during [time of day]. The picture appears to have been taken in [season] because [reason]. The overall atmosphere is [adjective]."
                                    </div>

                                    <div className="template-section">
                                        <strong>Foreground:</strong><br/>
                                        "In the foreground, we can see [main subjects]. They are [actions/descriptions]. To the left/right, there is [additional elements]."
                                    </div>

                                    <div className="template-section">
                                        <strong>Middle ground:</strong><br/>
                                        "The middle ground is dominated by [main features]. There are [activities happening]. The [colors/lighting] create [effect]."
                                    </div>

                                    <div className="template-section">
                                        <strong>Background:</strong><br/>
                                        "In the background, we can see [distant elements]. The [sky/weather] adds to the [mood]. [Architecture/nature] frames the scene."
                                    </div>

                                    <div className="template-section">
                                        <strong>Interpretation:</strong><br/>
                                        "The overall impression is one of [feeling]. The photographer probably wanted to show [purpose]. The picture makes me feel [personal reaction]."
                                    </div>
                                </div>
                            </div>

                            <div className="template-card">
                                <h4>🌳 Szablon opisu natury</h4>
                                <div className="template-content">
                                    <div className="template-section">
                                        <strong>Introduction:</strong><br/>
                                        "This beautiful image captures [natural scene] at [time]. The scene appears completely [adjective] and creates a sense of [feeling]."
                                    </div>

                                    <div className="template-section">
                                        <strong>Foreground:</strong><br/>
                                        "In the foreground, [close elements] create [effect]. The [textures/colors] are particularly striking. We can observe [details]."
                                    </div>

                                    <div className="template-section">
                                        <strong>Middle ground:</strong><br/>
                                        "The middle ground features [main natural elements]. The [light/weather conditions] enhance the beauty. [Movement/ stillness] characterizes this area."
                                    </div>

                                    <div className="template-section">
                                        <strong>Background:</strong><br/>
                                        "In the background, [distant landscape] rises against the sky. The [colors of sky/nature] create a beautiful contrast. The [horizon/mountains] complete the composition."
                                    </div>

                                    <div className="template-section">
                                        <strong>Interpretation:</strong><br/>
                                        "The photograph evokes feelings of [emotions]. It seems to celebrate [aspect of nature]. The composition successfully conveys [message]."
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja call-to-action */}
                    <section className="writing-article__section">
                        <div className="writing-action-box picture">
                            <h3>🎯 Czas na praktykę!</h3>
                            <p>Wybierz jeden z poniższych scenariuszy i stwórz szczegółowy opis obrazka. Pamiętaj o strukturze, bogatym słownictwie i logicznej kolejności!</p>
                            <div className="writing-scenarios">
                                <div className="scenario-card">
                                    <h4>Scenariusz 1: Opis rodzinnego zdjęcia</h4>
                                    <p>Opisz zdjęcie rodzinnego spotkania. Zwróć uwagę na relacje między osobami, ich aktywności i ogólną atmosferę.</p>
                                </div>
                                <div className="scenario-card">
                                    <h4>Scenariusz 2: Opis miejskiej ulicy</h4>
                                    <p>Opisz ruchliwą ulicę w mieście. Uwzględnij architekturę, transport, ludzi i ogólny charakter miejsca.</p>
                                </div>
                                <div className="scenario-card">
                                    <h4>Scenariusz 3: Opis krajobrazu</h4>
                                    <p>Opisz naturalny krajobraz (góry, jezioro, las). Skup się na kolorach, świetle, porze roku i nastroju.</p>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <Link to="/cwiczenia/opis-obrazkow" className="btn btn--primary">Więcej ćwiczeń</Link>
                                <Link to="/spolecznosc" className="btn btn--secondary">Podziel się opisem</Link>
                            </div>
                        </div>
                    </section>

                    {/* Stopka artykułu */}
                    <footer className="writing-article__footer">
                        <div className="writing-article__tags">
                            <span className="writing-tag">#opisobrazka</span>
                            <span className="writing-tag">#picturedescription</span>
                            <span className="writing-tag">#imagedescription</span>
                            <span className="writing-tag">#visualdescription</span>
                            <span className="writing-tag">#egzaminy</span>
                        </div>
                        <div className="writing-article__next">
                            <p><strong>Następny temat:</strong> <Link to="/writing/rozprawka">Jak pisać rozprawki po angielsku?</Link></p>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default PictureDescription;