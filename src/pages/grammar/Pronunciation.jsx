import React from 'react'
import { NavLink, useParams, useSearchParams, Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext.jsx'
import useDocumentMeta from '../../useDocumentMeta'
import '../../styles/topic-cards.css'

const sections = [
    { id: 'alfabet', label: 'Alfabet' },
    { id: 'gloski-nieme', label: 'Głoski nieme' },
    { id: 'koncowki-wyrazow', label: 'Końcówki wyrazów' },
    { id: 'rozne-wymowy', label: 'Różnice BrE/AmE' },
]

// Zestaw tematów (boksy) dla każdej podzakładki
const TOPICS = {
    alfabet: [
        {
            id: 'alfabet-nazwy-liter',
            title: 'Nazwy liter A–Z',
            excerpt: 'Poznaj nazwy liter i ich wymowę w British i American English.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Alfabet angielski — nazwy liter</h3>
                        <p className="muted">Znajomość nazw liter pomaga w literowaniu i rozumieniu pisowni przez telefon.</p>
                        <div className="alphabet-grid">
                            {[
                                ['A', '/eɪ/'], ['B', '/biː/'], ['C', '/siː/'], ['D', '/diː/'], ['E', '/iː/'], ['F', '/ɛf/'], ['G', '/dʒiː/'],
                                ['H', '/eɪtʃ/'], ['I', '/aɪ/'], ['J', '/dʒeɪ/'], ['K', '/keɪ/'], ['L', '/ɛl/'], ['M', '/ɛm/'], ['N', '/ɛn/'],
                                ['O', '/əʊ/'], ['P', '/piː/'], ['Q', '/kjuː/'], ['R', '/ɑː/'], ['S', '/ɛs/'], ['T', '/tiː/'], ['U', '/juː/'],
                                ['V', '/viː/'], ['W', '/ˈdʌbljuː/'], ['X', '/ɛks/'], ['Y', '/waɪ/'], ['Z', '/zed/ (BrE) /ziː/ (AmE)'],
                            ].map(([l, p]) => (
                                <div key={l} className="alphabet-cell"><strong>{l}</strong><span>{p}</span></div>
                            ))}
                        </div>
                    </section>
                    <section className="card">
                        <h4>Wskazówka</h4>
                        <p>W brytyjskim angielskim zwykle mówi się <em>zed</em> (Z), a w amerykańskim <em>zee</em>.</p>
                    </section>
                </>
            ),
        },
        {
            id: 'problematic-consonants',
            title: 'Problematyczne spółgłoski',
            excerpt: 'Spółgłoski angielskie, które różnią się od polskich - th, r, w, i inne.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Trudne spółgłoski dla Polaków</h3>
                        <p className="muted">Niektóre angielskie spółgłoski nie występują w języku polskim i wymagają specjalnej uwagi.</p>

                        <div className="homophones-grid">
                            <div className="homophone-group">
                                <h4>/θ/ i /ð/ - dźwięki "th"</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/θ/</strong> - bezdźwięczne th: <em>think</em> /θɪŋk/, <em>thing</em> /θɪŋ/, <em>birthday</em> /ˈbɜːθ.deɪ/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/ð/</strong> - dźwięczne th: <em>this</em> /ðɪs/, <em>that</em> /ðæt/, <em>mother</em> /ˈmʌð.ər/
                                        </div>
                                    </div>
                                </div>
                                <div className="pronunciation-tip">
                                    <strong>Wskazówka:</strong> Umieść język między zębami. Dla /θ/ - tylko powietrze, dla /ð/ - dodaj głos.
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>/r/ - miękkie "r"</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/r/</strong> - angielskie r nie jest drżące jak polskie: <em>red</em> /red/, <em>car</em> /kɑːr/, <em>rain</em> /reɪn/
                                        </div>
                                    </div>
                                </div>
                                <div className="pronunciation-tip">
                                    <strong>Wskazówka:</strong> Unikaj wibracji języka. Koniuszek języka unosi się lekko do tyłu.
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>/w/ vs /v/</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/w/</strong> - zaokrąglone u/j: <em>water</em> /ˈwɔː.tər/, <em>week</em> /wiːk/, <em>what</em> /wɒt/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/v/</strong> - polskie w: <em>very</em> /ˈver.i/, <em>love</em> /lʌv/, <em>have</em> /hæv/
                                        </div>
                                    </div>
                                </div>
                                <div className="pronunciation-tip">
                                    <strong>Wskazówka:</strong> Dla /w/ zaokrągl usta jak do polskiego "ł", dla /v/ - górne zęby dotykają dolnej wargi.
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>/ŋ/ - "ng" na końcu</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/ŋ/</strong> - jak w <em>sing</em> /sɪŋ/, <em>long</em> /lɒŋ/, <em>thinking</em> /ˈθɪŋ.kɪŋ/
                                        </div>
                                    </div>
                                </div>
                                <div className="pronunciation-tip">
                                    <strong>Wskazówka:</strong> Tylna część języka dotyka podniebienia miękkiego. Unikaj dodawania /g/ na końcu!
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>/dʒ/ i /tʃ/</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/dʒ/</strong> - dźwięczne dż: <em>job</em> /dʒɒb/, <em>bridge</em> /brɪdʒ/, <em>age</em> /eɪdʒ/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/tʃ/</strong> - bezdźwięczne cz: <em>church</em> /tʃɜːtʃ/, <em>watch</em> /wɒtʃ/, <em>cheese</em> /tʃiːz/
                                        </div>
                                    </div>
                                </div>
                                <div className="pronunciation-tip">
                                    <strong>Wskazówka:</strong> Angielskie wersje są bardziej "miękkie" niż polskie odpowiedniki.
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>/h/ - przydechowe "h"</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/h/</strong> - mocniejsze niż polskie h: <em>house</em> /haʊs/, <em>hello</em> /həˈləʊ/, <em>ahead</em> /əˈhed/
                                        </div>
                                    </div>
                                </div>
                                <div className="pronunciation-tip">
                                    <strong>Wskazówka:</strong> Więcej powietrza niż w polskim "h". Słyszalny przydech.
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>/ʃ/ vs /s/ - "sh" vs "s"</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/ʃ/</strong> - głoska "sz": <em>ship</em> /ʃɪp/, <em>nation</em> /ˈneɪ.ʃən/, <em>sugar</em> /ˈʃʊɡ.ər/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/s/</strong> - głoska "s": <em>sip</em> /sɪp/, <em>face</em> /feɪs/, <em>city</em> /ˈsɪt.i/
                                        </div>
                                    </div>
                                </div>
                                <div className="pronunciation-tip">
                                    <strong>Wskazówka:</strong> Dla /ʃ/ zaokrągl usta, dla /s/ - rozciągnij je w uśmiechu.
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>Ćwiczenia praktyczne - minimalne pary</h4>
                        <div className="homophone-examples">
                            <div className="example">
                                <p><em>think</em> /θɪŋk/ - myśleć vs <em>sink</em> /sɪŋk/ - zlewozmywak</p>
                                <p className="muted">(Różnica między /θ/ a /s/ zmienia znaczenie)</p>
                            </div>
                            <div className="example">
                                <p><em>west</em> /west/ - zachód vs <em>vest</em> /vest/ - kamizelka</p>
                                <p className="muted">(Różnica między /w/ a /v/ zmienia znaczenie)</p>
                            </div>
                            <div className="example">
                                <p><em>ship</em> /ʃɪp/ - statek vs <em>chip</em> /tʃɪp/ - chips</p>
                                <p className="muted">(Różnica między /ʃ/ a /tʃ/ zmienia znaczenie)</p>
                            </div>
                            <div className="example">
                                <p><em>right</em> /raɪt/ - prawy vs <em>light</em> /laɪt/ - światło</p>
                                <p className="muted">(Różnica między /r/ a /l/ zmienia znaczenie)</p>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>Wskazówki dotyczące spółgłosek</h4>
                        <ul className="list">
                            <li><strong>Nagrywaj się i porównuj</strong> - nagraj swoją wymowę i porównaj z native speakerem</li>
                            <li><strong>Ćwicz przed lustrem</strong> - obserwuj ułożenie ust i języka</li>
                            <li><strong>Używaj minimalnych par</strong> - ćwicz pary słów różniące się tylko jedną głoską</li>
                            <li><strong>Najczęstsze błędy</strong> to pomylenie /θ/ z /s/, /ð/ z /d/, /w/ z /v/</li>
                            <li><strong>Zwracaj uwagę na kontekst</strong> - niektóre spółgłoski występują tylko w określonych pozycjach</li>
                        </ul>
                    </section>

                    <style jsx>{`
                .pronunciation-tip {
                    margin-top: 1rem;
                    padding: 1rem;
                    background: #f0f9ff;
                    border-radius: 8px;
                    border-left: 4px solid #0ea5e9;
                    font-size: 0.95em;
                    margin-bottom: 10px;
                }

                .pronunciation-tip strong {
                    color: #0369a1;
                }

                /* Zachowujemy oryginalne style z homofonów i dodajemy tylko wskazówki */
            `}</style>
                </>
            ),
        },
        {
            id: 'problematic-consonants',
            title: 'Problematyczne spółgłoski',
            excerpt: 'Spółgłoski angielskie, które różnią się od polskich - th, r, w, i inne.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Trudne spółgłoski dla Polaków</h3>
                        <p className="muted">Niektóre angielskie spółgłoski nie występują w języku polskim.</p>

                        <div className="pronunciation-grid">
                            <div className="pronunciation-group">
                                <h4>/θ/ i /ð/ - dźwięki "th"</h4>
                                <p><strong>/θ/</strong> - bezdźwięczne th: <em>think</em> /θɪŋk/, <em>thing</em> /θɪŋ/, <em>birthday</em> /ˈbɜːθ.deɪ/</p>
                                <p><strong>/ð/</strong> - dźwięczne th: <em>this</em> /ðɪs/, <em>that</em> /ðæt/, <em>mother</em> /ˈmʌð.ər/</p>
                            </div>

                            <div className="pronunciation-group">
                                <h4>/r/ - miękkie "r"</h4>
                                <p><strong>/r/</strong> - angielskie r nie jest drżące jak polskie: <em>red</em> /red/, <em>car</em> /kɑːr/, <em>rain</em> /reɪn/</p>
                            </div>

                            <div className="pronunciation-group">
                                <h4>/w/ vs /v/</h4>
                                <p><strong>/w/</strong> - zaokrąglone u/j: <em>water</em> /ˈwɔː.tər/, <em>week</em> /wiːk/, <em>what</em> /wɒt/</p>
                                <p><strong>/v/</strong> - polskie w: <em>very</em> /ˈver.i/, <em>love</em> /lʌv/, <em>have</em> /hæv/</p>
                            </div>

                            <div className="pronunciation-group">
                                <h4>/ŋ/ - "ng" na końcu</h4>
                                <p><strong>/ŋ/</strong> - jak w <em>sing</em> /sɪŋ/, <em>long</em> /lɒŋ/, <em>thinking</em> /ˈθɪŋ.kɪŋ/</p>
                            </div>

                            <div className="pronunciation-group">
                                <h4>/dʒ/ i /tʃ/</h4>
                                <p><strong>/dʒ/</strong> - dźwięczne dż: <em>job</em> /dʒɒb/, <em>bridge</em> /brɪdʒ/, <em>age</em> /eɪdʒ/</p>
                                <p><strong>/tʃ/</strong> - bezdźwięczne cz: <em>church</em> /tʃɜːtʃ/, <em>watch</em> /wɒtʃ/, <em>cheese</em> /tʃiːz/</p>
                            </div>

                            <div className="pronunciation-group">
                                <h4>/h/ - przydechowe "h"</h4>
                                <p><strong>/h/</strong> - mocniejsze niż polskie h: <em>house</em> /haʊs/, <em>hello</em> /həˈləʊ/, <em>ahead</em> /əˈhed/</p>
                            </div>
                        </div>
                    </section>
                </>
            ),
        },
    ],
    'gloski-nieme': [
        {
            id: 'silent-letters-basic',
            title: 'Silent letters - podstawy',
            excerpt: 'Kiedy w angielskim nie wymawiamy liter: k, w, gh, b i inne.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Silent letters — kiedy nie wymawiamy liter</h3>
                        <p className="muted">W wielu wyrazach angielskich niektóre litery są nieme. Poniżej najczęstsze wzorce:</p>

                        <div className="homophones-grid">
                            <div className="homophone-group">
                                <h4><strong>B</strong> - nieme w różnych pozycjach</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            po <strong>m</strong> na końcu: <em>lamb</em> /læm/, <em>climb</em> /klaɪm/, <em>comb</em> /kəʊm/
                                        </div>
                                        <div className="homophone-item">
                                            przed <strong>t</strong>: <em>debt</em> /det/, <em>doubt</em> /daʊt/, <em>subtle</em> /ˈsʌt.l̩/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4><strong>K</strong> - przed N</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            na początku przed <strong>n</strong>: <em>know</em> /nəʊ/, <em>knee</em> /niː/, <em>knife</em> /naɪf/
                                        </div>
                                        <div className="homophone-item">
                                            <em>knock</em> /nɒk/, <em>knight</em> /naɪt/, <em>knowledge</em> /ˈnɒl.ɪdʒ/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4><strong>W</strong> - przed R</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            przed <strong>r</strong>: <em>write</em> /raɪt/, <em>wrong</em> /rɒŋ/, <em>wrap</em> /ræp/
                                        </div>
                                        <div className="homophone-item">
                                            <em>wrist</em> /rɪst/, <em>wreck</em> /rek/, <em>answer</em> /ˈɑːn.sər/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4><strong>GH</strong> - w różnych pozycjach</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            po samogłosce: <em>night</em> /naɪt/, <em>thought</em> /θɔːt/, <em>through</em> /θruː/
                                        </div>
                                        <div className="homophone-item">
                                            na początku: <em>ghost</em> /ɡəʊst/ (wymawiane)
                                        </div>
                                        <div className="homophone-item">
                                            w <em>though</em> /ðəʊ/, <em>although</em> /ɔːlˈðəʊ/
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>Najczęstsze wzorce niemych liter</h4>
                        <div className="homophone-examples">
                            <div className="example">
                                <p><strong>KN-</strong> na początku: <em>knee, know, knife</em> - "k" zawsze nieme</p>
                                <p className="muted">(Wszystkie słowa zaczynające się od "kn" mają nieme "k")</p>
                            </div>
                            <div className="example">
                                <p><strong>-MB</strong> na końcu: <em>lamb, comb, thumb</em> - "b" zawsze nieme</p>
                                <p className="muted">(Po "m" na końcu wyrazu "b" jest nieme)</p>
                            </div>
                            <div className="example">
                                <p><strong>WR-</strong> na początku: <em>write, wrong, wrap</em> - "w" zawsze nieme</p>
                                <p className="muted">(Wszystkie słowa zaczynające się od "wr" mają nieme "w")</p>
                            </div>
                        </div>
                    </section>
                </>
            ),
        },
        {
            id: 'silent-letters-advanced',
            title: 'Silent letters - zaawansowane',
            excerpt: 'Mniej oczywiste nieme litery: L, P, H, T, D, G, N i inne.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Zaawansowane przypadki niemych liter</h3>
                        <p className="muted">Dodatkowe wzorce z niemymi literami, które warto znać.</p>

                        <div className="homophones-grid">
                            <div className="homophone-group">
                                <h4><strong>L</strong> - przed spółgłoskami</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            przed <strong>k</strong>, <strong>f</strong>, <strong>m</strong>: <em>walk</em> /wɔːk/, <em>half</em> /hɑːf/, <em>calm</em> /kɑːm/
                                        </div>
                                        <div className="homophone-item">
                                            <em>could</em> /kʊd/, <em>should</em> /ʃʊd/, <em>would</em> /wʊd/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4><strong>P</strong> - przed S i T</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            przed <strong>s</strong>: <em>psychology</em> /saɪˈkɒl.ə.dʒi/, <em>psalm</em> /sɑːm/
                                        </div>
                                        <div className="homophone-item">
                                            przed <strong>t</strong>: <em>receipt</em> /rɪˈsiːt/, <em>pterodactyl</em> /ˌter.əˈdæk.tɪl/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4><strong>H</strong> - na początku i w środku</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            po <strong>r</strong>, <strong>g</strong>, <strong>e</strong>: <em>rhythm</em> /ˈrɪð.əm/, <em>ghost</em> /ɡəʊst/
                                        </div>
                                        <div className="homophone-item">
                                            w <em>hour</em> /aʊər/, <em>honest</em> /ˈɒn.ɪst/, <em>vehicle</em> /ˈviː.ɪ.kəl/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4><strong>T</strong> - w różnych pozycjach</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            w <em>often</em> /ˈɒf.ən/ (opcjonalnie), <em>castle</em> /ˈkɑː.səl/
                                        </div>
                                        <div className="homophone-item">
                                            <em>listen</em> /ˈlɪs.ən/, <em>whistle</em> /ˈwɪs.əl/, <em>Christmas</em> /ˈkrɪs.məs/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4><strong>D</strong> - przed G</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            przed <strong>g</strong>: <em>bridge</em> /brɪdʒ/, <em>judge</em> /dʒʌdʒ/
                                        </div>
                                        <div className="homophone-item">
                                            w <em>handsome</em> /ˈhæn.səm/, <em>Wednesday</em> /ˈwenz.deɪ/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4><strong>G</strong> - przed N</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            przed <strong>n</strong>: <em>sign</em> /saɪn/, <em>design</em> /dɪˈzaɪn/, <em>foreign</em> /ˈfɒr.ən/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4><strong>N</strong> - po M</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            po <strong>m</strong> na końcu: <em>autumn</em> /ˈɔː.təm/, <em>column</em> /ˈkɒl.əm/, <em>hymn</em> /hɪm/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4><strong>U</strong> - po G</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            po <strong>g</strong> przed samogłoską: <em>guess</em> /ɡes/, <em>guest</em> /ɡest/, <em>guide</em> /ɡaɪd/
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>Wyjaśnienia i wyjątki</h4>
                        <div className="homophone-examples">
                            <div className="example">
                                <p><strong>Often</strong> może być wymawiane z "t" (/ˈɒf.tən/) lub bez (/ˈɒf.ən/) - obie formy są poprawne</p>
                                <p className="muted">(Wymowa z "t" jest uważana za bardziej formalną)</p>
                            </div>
                            <div className="example">
                                <p><strong>GH</strong> czasem jest wymawiane jako /f/: <em>laugh</em> /lɑːf/, <em>enough</em> /ɪˈnʌf/</p>
                                <p className="muted">(To wyjątek od reguły o niemym "gh")</p>
                            </div>
                            <div className="example">
                                <p><strong>WH</strong> w amerykańskim angielskim: <em>what</em> /wʌt/, ale w niektórych akcentach brytyjskich: /hwɒt/</p>
                                <p className="muted">(Różnice między wersjami języka)</p>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>Wskazówki do zapamiętania</h4>
                        <ul className="list">
                            <li><strong>Grupy liter</strong> - zapamiętaj całe grupy jak KN-, WR-, -MB</li>
                            <li><strong>Pozycja w wyrazie</strong> - wiele liter jest niemych tylko w określonych pozycjach</li>
                            <li><strong>Wyrazy pokrewne</strong> - często pomagają zrozumieć wymowę: <em>sign</em> → <em>signal</em></li>
                            <li><strong>Nagrywaj się</strong> - ćwicz wymowę słów z niemymi literami</li>
                            <li><strong>Najtrudniejsze</strong> to często: <em>Wednesday, foreign, island, sword</em></li>
                        </ul>
                    </section>
                </>
            ),
        },
        {
            id: 'homofony',
            title: 'Homofony',
            excerpt: 'Słowa, które brzmią tak samo, ale mają różną pisownię i znaczenie.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Homofony - słowa brzmiące tak samo</h3>
                        <p className="muted">Homofony to pary lub grupy słów, które wymawiamy identycznie, ale piszemy inaczej i mają różne znaczenia.</p>

                        <div className="homophones-grid">
                            <div className="homophone-group">
                                <h4>Najczęstsze homofony</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>their</strong> /ðeər/ - ich (przymiotnik dzierżawczy)
                                        </div>
                                        <div className="homophone-item">
                                            <strong>there</strong> /ðeər/ - tam
                                        </div>
                                        <div className="homophone-item">
                                            <strong>they're</strong> /ðeər/ - skrót od "they are"
                                        </div>
                                    </div>
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>your</strong> /jɔːr/ - twój
                                        </div>
                                        <div className="homophone-item">
                                            <strong>you're</strong> /jɔːr/ - skrót od "you are"
                                        </div>
                                    </div>
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>its</strong> /ɪts/ - jego (przymiotnik dzierżawczy)
                                        </div>
                                        <div className="homophone-item">
                                            <strong>it's</strong> /ɪts/ - skrót od "it is" lub "it has"
                                        </div>
                                    </div>
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>to</strong> /tuː/ - do (przyimek)
                                        </div>
                                        <div className="homophone-item">
                                            <strong>too</strong> /tuː/ - też, zbyt
                                        </div>
                                        <div className="homophone-item">
                                            <strong>two</strong> /tuː/ - dwa
                                        </div>
                                    </div>
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>here</strong> /hɪər/ - tutaj
                                        </div>
                                        <div className="homophone-item">
                                            <strong>hear</strong> /hɪər/ - słyszeć
                                        </div>
                                    </div>
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>see</strong> /siː/ - widzieć
                                        </div>
                                        <div className="homophone-item">
                                            <strong>sea</strong> /siː/ - morze
                                        </div>
                                    </div>
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>son</strong> /sʌn/ - syn
                                        </div>
                                        <div className="homophone-item">
                                            <strong>sun</strong> /sʌn/ - słońce
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>Homofony z niemymi literami</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>knight</strong> /naɪt/ - rycerz
                                        </div>
                                        <div className="homophone-item">
                                            <strong>night</strong> /naɪt/ - noc
                                        </div>
                                    </div>
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>write</strong> /raɪt/ - pisać
                                        </div>
                                        <div className="homophone-item">
                                            <strong>right</strong> /raɪt/ - prawy, prawidłowy
                                        </div>
                                        <div className="homophone-item">
                                            <strong>rite</strong> /raɪt/ - rytuał
                                        </div>
                                    </div>
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>know</strong> /nəʊ/ - wiedzieć
                                        </div>
                                        <div className="homophone-item">
                                            <strong>no</strong> /nəʊ/ - nie
                                        </div>
                                    </div>
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>whole</strong> /həʊl/ - cały
                                        </div>
                                        <div className="homophone-item">
                                            <strong>hole</strong> /həʊl/ - dziura
                                        </div>
                                    </div>
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>peace</strong> /piːs/ - pokój
                                        </div>
                                        <div className="homophone-item">
                                            <strong>piece</strong> /piːs/ - kawałek
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>Homofony z różnymi wzorcami wymowy</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>flower</strong> /ˈflaʊər/ - kwiat
                                        </div>
                                        <div className="homophone-item">
                                            <strong>flour</strong> /ˈflaʊər/ - mąka
                                        </div>
                                    </div>
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>meat</strong> /miːt/ - mięso
                                        </div>
                                        <div className="homophone-item">
                                            <strong>meet</strong> /miːt/ - spotykać
                                        </div>
                                        <div className="homophone-item">
                                            <strong>mete</strong> /miːt/ - wymierzać (rzadkie)
                                        </div>
                                    </div>
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>break</strong> /breɪk/ - łamać
                                        </div>
                                        <div className="homophone-item">
                                            <strong>brake</strong> /breɪk/ - hamulec
                                        </div>
                                    </div>
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>cell</strong> /sel/ - komórka, cela
                                        </div>
                                        <div className="homophone-item">
                                            <strong>sell</strong> /sel/ - sprzedawać
                                        </div>
                                    </div>
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>wait</strong> /weɪt/ - czekać
                                        </div>
                                        <div className="homophone-item">
                                            <strong>weight</strong> /weɪt/ - waga
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>Homofony w zdaniach</h4>
                                <div className="homophone-examples">
                                    <div className="example">
                                        <p><em>Their</em> house is over <em>there</em>, and <em>they're</em> waiting for us.</p>
                                        <p className="muted">(Ich dom jest tam i oni na nas czekają.)</p>
                                    </div>
                                    <div className="example">
                                        <p>I can <em>see</em> the <em>sea</em> from my window.</p>
                                        <p className="muted">(Widzę morze z mojego okna.)</p>
                                    </div>
                                    <div className="example">
                                        <p>The <em>knight</em> fought bravely all <em>night</em>.</p>
                                        <p className="muted">(Rycerz walczył dzielnie całą noc.)</p>
                                    </div>
                                    <div className="example">
                                        <p>Please <em>write</em> the answer on the <em>right</em> side.</p>
                                        <p className="muted">(Proszę napisz odpowiedź po prawej stronie.)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>Wskazówki dotyczące homofonów</h4>
                        <ul className="list">
                            <li><strong>Zapamiętuj znaczenie przez kontekst</strong> - homofony rzadko są używane zamiennie</li>
                            <li><strong>Zwracaj uwagę na pisownię</strong> - szczególnie w pisemnej komunikacji</li>
                            <li><strong>Ćwicz w zdaniach</strong> - używaj homofonów w pełnych zdaniach, aby lepiej je zapamiętać</li>
                            <li><strong>Najczęstsze błędy</strong> to pomylenie "their/there/they're", "your/you're", "its/it's"</li>
                        </ul>
                    </section>

                    <style jsx>{`
                .homophones-grid {
                    display: grid;
                    gap: 2rem;
                    margin-top: 1.5rem;
                }

                .homophone-group {
                    padding: 1.5rem;
                    background: #f8fafc;
                    border-radius: 12px;
                    border: 1px solid #e5e7eb;
                }

                .homophone-group h4 {
                    margin-bottom: 1rem;
                    color: #374151;
                    font-size: 1.2em;
                    font-weight: 600;
                    padding-bottom: 0.5rem;
                    border-bottom: 2px solid #e5e7eb;
                }

                .homophone-pairs {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .homophone-pair {
                    display: grid;
                    gap: 0.75rem;
                    padding: 1rem;
                    background: white;
                    border-radius: 8px;
                    border: 1px solid #e5e7eb;
                }

                .homophone-item {
                    padding: 0.75rem;
                    background: #f9fafb;
                    border-radius: 6px;
                    border-left: 4px solid #3b82f6;
                }

                .homophone-item strong {
                    color: #1e40af;
                    font-weight: 600;
                }

                .homophone-examples {
                    display: grid;
                    gap: 1rem;
                }

                .example {
                    padding: 1.25rem;
                    background: white;
                    border-radius: 8px;
                    border: 1px solid #e5e7eb;
                    border-left: 4px solid #10b981;
                }

                .example p:first-child {
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                }

                .example em {
                    color: #dc2626;
                    font-style: normal;
                    font-weight: 600;
                }

                @media (max-width: 768px) {
                    .homophone-group {
                        padding: 1rem;
                    }

                    .homophone-pair {
                        padding: 0.75rem;
                    }

                    .homophone-item {
                        padding: 0.5rem;
                    }

                    .example {
                        padding: 1rem;
                    }
                }
            `}</style>
                </>
            ),
        },
    ],
    'koncowki-wyrazow': [
        {
            id: 'common-endings',
            title: 'Końcówki wyrazów',
            excerpt: 'Kompleksowy przewodnik po wymowie angielskich końcówek.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Wymowa angielskich końcówek</h3>
                        <p className="muted">Różne końcówki mają charakterystyczne wzorce wymowy.</p>

                        <div className="homophones-grid">
                            <div className="homophone-group">
                                <h4>-s/-es (liczba mnoga, 3 os. l. poj.)</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/s/</strong> po bezdźwięcznych: <em>cats</em> /kæts/, <em>books</em> /bʊks/, <em>stops</em> /stɒps/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/z/</strong> po dźwięcznych i samogłoskach: <em>dogs</em> /dɒɡz/, <em>days</em> /deɪz/, <em>loves</em> /lʌvz/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/ɪz/</strong> po s, z, ʃ, ʒ, tʃ, dʒ: <em>buses</em> /ˈbʌs.ɪz/, <em>watches</em> /ˈwɒtʃ.ɪz/, <em>roses</em> /ˈrəʊ.zɪz/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>-ed (czas przeszły, imiesłów)</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/t/</strong> po bezdźwięcznych: <em>watched</em> /wɒtʃt/, <em>kissed</em> /kɪst/, <em>laughed</em> /lɑːft/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/d/</strong> po dźwięcznych: <em>played</em> /pleɪd/, <em>opened</em> /ˈəʊ.pənd/, <em>loved</em> /lʌvd/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/ɪd/</strong> po t, d: <em>wanted</em> /ˈwɒn.tɪd/, <em>decided</em> /dɪˈsaɪ.dɪd/, <em>needed</em> /ˈniː.dɪd/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>-ate</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/eɪt/</strong> w czasownikach: <em>create</em> /kriˈeɪt/, <em>celebrate</em> /ˈsel.ɪ.breɪt/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/ət/</strong> w przymiotnikach/rzeczownikach: <em>accurate</em> /ˈæk.jə.rət/, <em>chocolate</em> /ˈtʃɒk.lət/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>-ile</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/aɪl/</strong> w brytyjskim: <em>mobile</em> /ˈməʊ.baɪl/, <em>fertile</em> /ˈfɜː.taɪl/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/əl/</strong> w amerykańskim: <em>mobile</em> /ˈmoʊ.bəl/, <em>fertile</em> /ˈfɜːr.t̬əl/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>-ough/-ought</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/ɔːt/</strong>: <em>thought</em> /θɔːt/, <em>bought</em> /bɔːt/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/əʊ/</strong>: <em>though</em> /ðəʊ/, <em>dough</em> /dəʊ/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/aʊ/</strong>: <em>plough</em> /plaʊ/, <em>bough</em> /baʊ/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/uː/</strong>: <em>through</em> /θruː/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/ɒf/</strong>: <em>cough</em> /kɒf/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/ʌf/</strong>: <em>enough</em> /ɪˈnʌf/, <em>tough</em> /tʌf/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>-ious/-cious</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/i.əs/</strong>: <em>serious</em> /ˈsɪə.ri.əs/, <em>various</em> /ˈveə.ri.əs/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/ʃəs/</strong>: <em>conscious</em> /ˈkɒn.ʃəs/, <em>precious</em> /ˈpreʃ.əs/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>-ation/-ition</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/ˈeɪ.ʃən/</strong>: <em>information</em> /ˌɪn.fəˈmeɪ.ʃən/, <em>education</em> /ˌed.jʊˈkeɪ.ʃən/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/ˈɪ.ʃən/</strong>: <em>condition</em> /kənˈdɪʃ.ən/, <em>addition</em> /əˈdɪʃ.ən/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>-ary/-ery/-ory</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/ə.ri/</strong>: <em>dictionary</em> /ˈdɪk.ʃən.ər.i/, <em>mystery</em> /ˈmɪs.tər.i/
                                        </div>
                                        <div className="homophone-item">
                                            <strong>/ɔː.ri/</strong> w amerykańskim: <em>territory</em> /ˈter.ə.tɔːr.i/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>-ical</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/ɪ.kəl/</strong>: <em>musical</em> /ˈmjuː.zɪ.kəl/, <em>chemical</em> /ˈkem.ɪ.kəl/
                                        </div>
                                        <div className="homophone-item">
                                            <em>political</em> /pəˈlɪt.ɪ.kəl/, <em>critical</em> /ˈkrɪt.ɪ.kəl/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>-ese</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/iːz/</strong>: <em>Chinese</em> /ˌtʃaɪˈniːz/, <em>Japanese</em> /ˌdʒæp.əˈniːz/
                                        </div>
                                        <div className="homophone-item">
                                            <em>Portuguese</em> /ˌpɔː.tʃʊˈɡiːz/, <em>Vietnamese</em> /ˌvjet.nəˈmiːz/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>-gist</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/dʒɪst/</strong>: <em>biologist</em> /baɪˈɒl.ə.dʒɪst/, <em>psychologist</em> /saɪˈkɒl.ə.dʒɪst/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>-worthy</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/wɜː.ði/</strong>: <em>trustworthy</em> /ˈtrʌst.wɜː.ði/, <em>noteworthy</em> /ˈnəʊt.wɜː.ði/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>-acious</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/eɪ.ʃəs/</strong>: <em>voracious</em> /vəˈreɪ.ʃəs/, <em>audacious</em> /ɔːˈdeɪ.ʃəs/
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="homophone-group">
                                <h4>-arious</h4>
                                <div className="homophone-pairs">
                                    <div className="homophone-pair">
                                        <div className="homophone-item">
                                            <strong>/eə.ri.əs/</strong>: <em>various</em> /ˈveə.ri.əs/, <em>precarious</em> /prɪˈkeə.ri.əs/
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>Najważniejsze zasady końcówek</h4>
                        <div className="homophone-examples">
                            <div className="example">
                                <p><strong>-s/-es</strong> - wymowa zależy od ostatniej głoski wyrazu: /s/, /z/ lub /ɪz/</p>
                                <p className="muted">(Zapamiętaj: po bezdźwięcznych /s/, po dźwięcznych /z/, po syczących /ɪz/)</p>
                            </div>
                            <div className="example">
                                <p><strong>-ed</strong> - podobna zasada: /t/ po bezdźwięcznych, /d/ po dźwięcznych, /ɪd/ po t/d</p>
                                <p className="muted">(Najłatwiej zapamiętać przez praktykę i słuchanie)</p>
                            </div>
                            <div className="example">
                                <p><strong>-ough</strong> - najbardziej nieprzewidywalna końcówka w angielskim - 6 różnych wymów!</p>
                                <p className="muted">(Należy uczyć się każdego słowa osobno)</p>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>Wskazówki do nauki końcówek</h4>
                        <ul className="list">
                            <li><strong>Grupuj podobne</strong> - ucz się końcówek w grupach o podobnej wymowie</li>
                            <li><strong>Zwracaj uwagę na akcent</strong> - wiele końcówek zmienia pozycję akcentu</li>
                            <li><strong>Różnice BrE/AmE</strong> - pamiętaj o różnych wymowach w wersjach języka</li>
                            <li><strong>Ćwicz z nagraniami</strong> - słuchaj i powtarzaj za native speakerami</li>
                            <li><strong>Najtrudniejsze</strong> to: -ough, -ate, różnice między BrE i AmE</li>
                        </ul>
                    </section>
                </>
            ),
        },
    ],
    'rozne-wymowy': [
        {
            id: 'bre-ame-differences',
            title: 'Różnice wymowy brytyjski vs amerykański',
            excerpt: 'Kluczowe różnice w wymowie między British English a American English.',
            content: () => (
                <>
                    <section className="card">
                        <h3>Główne różnice wymowy BrE vs AmE</h3>
                        <p className="muted">Poniższe zestawienie pokazuje najważniejsze różnice w wymowie między angielskim brytyjskim a amerykańskim.</p>

                        <div className="pronunciation-grid">
                            <div className="pronunciation-group">
                                <h4>Samogłoska /ɑː/ vs /æ/</h4>
                                <p><strong>BrE:</strong> /ɑː/ - <em>bath</em> /bɑːθ/, <em>path</em> /pɑːθ/, <em>dance</em> /dɑːns/</p>
                                <p><strong>AmE:</strong> /æ/ - <em>bath</em> /bæθ/, <em>path</em> /pæθ/, <em>dance</em> /dæns/</p>
                            </div>

                            <div className="pronunciation-group">
                                <h4>Samogłoska /ɒ/ vs /ɑː/</h4>
                                <p><strong>BrE:</strong> /ɒ/ - <em>hot</em> /hɒt/, <em>stop</em> /stɒp/, <em>clock</em> /klɒk/</p>
                                <p><strong>AmE:</strong> /ɑː/ - <em>hot</em> /hɑːt/, <em>stop</em> /stɑːp/, <em>clock</em> /klɑːk/</p>
                            </div>

                            <div className="pronunciation-group">
                                <h4>Samogłoska /ɜː/ vs /ɜːr/</h4>
                                <p><strong>BrE:</strong> /ɜː/ - <em>bird</em> /bɜːd/, <em>work</em> /wɜːk/, <em>learn</em> /lɜːn/</p>
                                <p><strong>AmE:</strong> /ɜːr/ - <em>bird</em> /bɜːrd/, <em>work</em> /wɜːrk/, <em>learn</em> /lɜːrn/</p>
                            </div>

                            <div className="pronunciation-group">
                                <h4>Spółgłoska /r/ (rotyczne R)</h4>
                                <p><strong>BrE:</strong> R wymawiane tylko przed samogłoską: <em>car</em> /kɑː/, <em>hard</em> /hɑːd/</p>
                                <p><strong>AmE:</strong> R wymawiane zawsze: <em>car</em> /kɑːr/, <em>hard</em> /hɑːrd/</p>
                            </div>

                            <div className="pronunciation-group">
                                <h4>Samogłoska /j/ w dyftongach</h4>
                                <p><strong>BrE:</strong> z /j/ - <em>new</em> /njuː/, <em>tune</em> /tjuːn/, <em>duke</em> /djuːk/</p>
                                <p><strong>AmE:</strong> bez /j/ - <em>new</em> /nuː/, <em>tune</em> /tuːn/, <em>duke</em> /duːk/</p>
                            </div>

                            <div className="pronunciation-group">
                                <h4>Końcówka -ile</h4>
                                <p><strong>BrE:</strong> /aɪl/ - <em>mobile</em> /ˈməʊbaɪl/, <em>fertile</em> /ˈfɜːtaɪl/</p>
                                <p><strong>AmE:</strong> /əl/ - <em>mobile</em> /ˈmoʊbəl/, <em>fertile</em> /ˈfɜːrtəl/</p>
                            </div>

                            <div className="pronunciation-group">
                                <h4>Samogłoska /əʊ/ vs /oʊ/</h4>
                                <p><strong>BrE:</strong> /əʊ/ - <em>go</em> /ɡəʊ/, <em>home</em> /həʊm/, <em>boat</em> /bəʊt/</p>
                                <p><strong>AmE:</strong> /oʊ/ - <em>go</em> /ɡoʊ/, <em>home</em> /hoʊm/, <em>boat</em> /boʊt/</p>
                            </div>

                            <div className="pronunciation-group">
                                <h4>Spółgłoska /t/ w środku wyrazu</h4>
                                <p><strong>BrE:</strong> wyraźne /t/ - <em>water</em> /ˈwɔːtə/, <em>better</em> /ˈbetə/</p>
                                <p><strong>AmE:</strong> /d/ (flap T) - <em>water</em> /ˈwɔːdər/, <em>better</em> /ˈbedər/</p>
                            </div>

                            <div className="pronunciation-group">
                                <h4>Końcówka -ary/-ery</h4>
                                <p><strong>BrE:</strong> /əri/ - <em>dictionary</em> /ˈdɪkʃənəri/</p>
                                <p><strong>AmE:</strong> /eri/ - <em>dictionary</em> /ˈdɪkʃəneri/</p>
                            </div>

                            <div className="pronunciation-group">
                                <h4>Pojedyncze słowa - różne wymowy</h4>
                                <div className="word-comparison">
                                    <div className="word-pair">
                                        <span><strong>tomato</strong></span>
                                        <span>BrE: /təˈmɑːtəʊ/</span>
                                        <span>AmE: /təˈmeɪtoʊ/</span>
                                    </div>
                                    <div className="word-pair">
                                        <span><strong>schedule</strong></span>
                                        <span>BrE: /ˈʃedjuːl/</span>
                                        <span>AmE: /ˈskedʒuːl/</span>
                                    </div>
                                    <div className="word-pair">
                                        <span><strong>leisure</strong></span>
                                        <span>BrE: /ˈleʒə/</span>
                                        <span>AmE: /ˈliːʒər/</span>
                                    </div>
                                    <div className="word-pair">
                                        <span><strong>vitamin</strong></span>
                                        <span>BrE: /ˈvɪtəmɪn/</span>
                                        <span>AmE: /ˈvaɪtəmɪn/</span>
                                    </div>
                                    <div className="word-pair">
                                        <span><strong>garage</strong></span>
                                        <span>BrE: /ˈɡærɑːʒ/</span>
                                        <span>AmE: /ɡəˈrɑːʒ/</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="card">
                        <h4>Podsumowanie</h4>
                        <p>Różnice w wymowie między BrE i AmE są systematyczne i przewidywalne. Znajomość tych wzorców pomaga w lepszym zrozumieniu różnych akcentów angielskiego.</p>
                    </section>
                </>
            ),
        },
    ],
}

function TopicsGrid({ basePath, active }) {
    const topics = TOPICS[active] ?? []
    return (
        <div className="topic-grid" role="list">
            {topics.map(t => (
                <Link key={t.id} to={`${basePath}?topic=${t.id}`} className="topic-card" role="listitem">
                    <h4 className="topic-card__title">{t.title}</h4>
                    <p className="topic-card__excerpt">{t.excerpt}</p>
                    <span className="topic-card__cta">Zobacz szczegóły →</span>
                </Link>
            ))}
        </div>
    )
}

function TopicDetail({ topic, onBack }) {
    return (
        <div className="topic-detail">
            <div className="topic-detail__back">
                <Link to={onBack} className="btn-link">← Wróć do listy</Link>
            </div>
            {topic.content()}
        </div>
    )
}

export default function Pronunciation() {
    const { section } = useParams()
    const [searchParams] = useSearchParams()
    const { lang } = useLanguage()
    const active = section ?? 'alfabet'
    const topicId = searchParams.get('topic')
    const topics = TOPICS[active] ?? []
    const selected = topics.find(t => t.id === topicId)

    const basePath = `/gramatyka/wymowa/${active}`

    useDocumentMeta({
        title: getMetaTitle(lang, active, selected),
        description: getMetaDescription(lang, active, selected),
        canonical: getCanonicalUrl(lang, active, selected),
        og: {
            title: getMetaTitle(lang, active, selected),
            description: getMetaDescription(lang, active, selected),
            image: 'https://angloboost.pl/UK-social.png',
            url: window.location.href
        }
    })

    return (
        <main className="topic-layout">
            <div className="container">
                <header className="topic-header">
                    <h2>Pronunciation</h2>
                    <p className="muted">Wymowa — podstawy i najważniejsze zasady</p>
                </header>

                <nav className="subnav" aria-label="Podstrony: Wymowa">
                    {sections.map(s => (
                        <NavLink
                            key={s.id}
                            to={`/gramatyka/wymowa/${s.id}`}
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
                            <p className="muted">Wybierz temat, aby przejść do szczegółowego opisu.</p>
                            <TopicsGrid basePath={basePath} active={active} />
                        </>
                    )}
                </article>
            </div>
        </main>
    )
}

function getMetaTitle(lang, activeSection, selectedTopic) {
    const sectionTitles = {
        pl: {
            alfabet: 'Alfabet angielski - wymowa liter',
            'gloski-nieme': 'Głoski nieme w angielskim',
            'koncowki-wyrazow': 'Końcówki wyrazów - wymowa',
            'rozne-wymowy': 'Różnice wymowy brytyjski vs amerykański'
        },
        en: {
            alfabet: 'English Alphabet - Letter Pronunciation',
            'gloski-nieme': 'Silent Letters in English',
            'koncowki-wyrazow': 'Word Endings - Pronunciation',
            'rozne-wymowy': 'British vs American Pronunciation Differences'
        }
    }

    if (selectedTopic) {
        const topicTitle = lang === 'pl' ? selectedTopic.title : getEnglishTopicTitle(selectedTopic.id)
        return `${topicTitle} — AngloBoost`
    }

    const baseTitle = sectionTitles[lang]?.[activeSection] || sectionTitles.pl[activeSection]
    return lang === 'pl'
        ? `${baseTitle} — AngloBoost`
        : `${baseTitle} — AngloBoost`
}

function getMetaDescription(lang, activeSection, selectedTopic) {
    const sectionDescriptions = {
        pl: {
            alfabet: 'Nauka alfabetu angielskiego: nazwy liter, wymowa, różnice BrE/AmE. Kompleksowy przewodnik z przykładami.',
            'gloski-nieme': 'Głoski nieme w języku angielskim: kiedy nie wymawiamy liter k, w, b, gh. Zasady i przykłady.',
            'koncowki-wyrazow': 'Wymowa angielskich końcówek: -s, -ed, -ate, -ough. Zasady wymowy z przykładami.',
            'rozne-wymowy': 'Różnice w wymowie między British English a American English. Samogłoski, spółgłoski, akcent.'
        },
        en: {
            alfabet: 'Learn English alphabet: letter names, pronunciation, BrE/AmE differences. Comprehensive guide with examples.',
            'gloski-nieme': 'Silent letters in English: when not to pronounce k, w, b, gh. Rules and examples.',
            'koncowki-wyrazow': 'Pronunciation of English word endings: -s, -ed, -ate, -ough. Rules with examples.',
            'rozne-wymowy': 'Pronunciation differences between British and American English. Vowels, consonants, accent.'
        }
    }

    if (selectedTopic) {
        return lang === 'pl'
            ? `${selectedTopic.excerpt} Szczegółowe wyjaśnienia i przykłady.`
            : `${getEnglishTopicExcerpt(selectedTopic.id)} Detailed explanations and examples.`
    }

    return sectionDescriptions[lang]?.[activeSection] || sectionDescriptions.pl[activeSection]
}

function getCanonicalUrl(lang, activeSection, selectedTopic) {
    const baseUrl = lang === 'pl'
        ? `https://angloboost.pl/pl/gramatyka/wymowa/${activeSection}`
        : `https://angloboost.pl/en/grammar/pronunciation/${activeSection}`

    if (selectedTopic) {
        return `${baseUrl}?topic=${selectedTopic.id}`
    }

    return baseUrl
}

function getEnglishTopicTitle(topicId) {
    const englishTitles = {
        'alfabet-nazwy-liter': 'Alphabet Letter Names',
        'problematic-consonants': 'Problematic Consonants',
        'silent-letters-basic': 'Silent Letters - Basics',
        'silent-letters-advanced': 'Silent Letters - Advanced',
        'homofony': 'Homophones',
        'common-endings': 'Word Endings',
        'bre-ame-differences': 'BrE vs AmE Pronunciation'
    }
    return englishTitles[topicId] || 'English Pronunciation'
}

function getEnglishTopicExcerpt(topicId) {
    const englishExcerpts = {
        'alfabet-nazwy-liter': 'Learn letter names and pronunciation in British and American English.',
        'problematic-consonants': 'English consonants that differ from Polish - th, r, w, and others.',
        'silent-letters-basic': 'When not to pronounce letters in English: k, w, gh, b and others.',
        'silent-letters-advanced': 'Less obvious silent letters: L, P, H, T, D, G, N and others.',
        'homofony': 'Words that sound the same but have different spelling and meaning.',
        'common-endings': 'Comprehensive guide to pronunciation of English word endings.',
        'bre-ame-differences': 'Key pronunciation differences between British English and American English.'
    }
    return englishExcerpts[topicId] || 'English pronunciation guide with examples.'
}