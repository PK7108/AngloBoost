import React from 'react'
import '../styles/static-pages.css'

export default function Privacy() {
    return (
        <main className="static-page">
            <section className="static-page__hero">
                <h1>Polityka prywatności</h1>
                <p>Jak przetwarzamy Twoje dane i dbamy o prywatność.</p>
            </section>

            <section className="static-page__content container">
                <div className="card">
                    <h2>1. Administrator danych</h2>
                    <p>
                        Administratorem danych jest zespół AngloBoost. W sprawach dotyczących ochrony danych skontaktuj się:
                        <a href="mailto:privacy@angloboost.pl"> privacy@angloboost.pl</a>.
                    </p>
                </div>

                <div className="card">
                    <h2>2. Zakres i cel przetwarzania danych</h2>
                    <ul className="list">
                        <li><strong>Dane konta</strong> (nazwa użytkownika, adres e-mail, hash hasła) - służą do logowania, personalizacji treści i zarządzania kontem</li>
                        <li><strong>Dane profilowe</strong> (poziom zaawansowania, preferencje nauki) - umożliwiają dostosowanie materiałów edukacyjnych</li>
                        <li><strong>Dane dotyczące aktywności</strong> (postępy w nauce, ukończone lekcje, wyniki ćwiczeń) - pomagają w śledzeniu postępów i rekomendacji treści</li>
                        <li><strong>Dane techniczne</strong> (adres IP, typ przeglądarki, urządzenie) - wykorzystywane w celach analitycznych i bezpieczeństwa</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>3. Podstawa prawna przetwarzania</h2>
                    <ul className="list">
                        <li><strong>Wykonanie umowy</strong> (art. 6 ust. 1 lit. b RODO) - niezbędne do świadczenia usług edukacyjnych</li>
                        <li><strong>Zgoda</strong> (art. 6 ust. 1 lit. a RODO) - w przypadku newslettera i marketingu bezpośredniego</li>
                        <li><strong>Prawnie uzasadniony interes</strong> (art. 6 ust. 1 lit. f RODO) - analityka serwisu, zapewnienie bezpieczeństwa</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>4. Pliki cookie i technologie śledzenia</h2>
                    <p>
                        Używamy następujących rodzajów plików cookie:
                    </p>
                    <ul className="list">
                        <li><strong>Niezbędne</strong> - umożliwiają podstawowe funkcjonowanie platformy</li>
                        <li><strong>Funkcjonalne</strong> - zapamiętują preferencje użytkownika i ustawienia</li>
                        <li><strong>Analityczne</strong> - zbierają anonimowe informacje o korzystaniu z serwisu</li>
                        <li><strong>Performance</strong> - optymalizują działanie platformy</li>
                    </ul>
                    <p>
                        Możesz zarządzać plikami cookie w ustawieniach swojej przeglądarki. Wyłączenie niektórych plików może wpłynąć na funkcjonalność serwisu.
                    </p>
                </div>

                <div className="card">
                    <h2>5. Przechowywanie i bezpieczeństwo danych</h2>
                    <ul className="list">
                        <li>Dane przechowujemy przez czas korzystania z konta, chyba że użytkownik je usunie</li>
                        <li>Po usunięciu konta dane są usuwane w ciągu 30 dni, z wyjątkiem danych wymaganych prawnie</li>
                        <li>Stosujemy odpowiednie środki techniczne i organizacyjne chroniące dane przed nieuprawnionym dostępem</li>
                        <li>Dane są szyfrowane podczas przesyłania (SSL) i przechowywania</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>6. Udostępnianie danych</h2>
                    <p>
                        Twoje dane mogą być udostępniane:
                    </p>
                    <ul className="list">
                        <li><strong>Dostawcom usług</strong> - hostingu, analityki, obsługi płatności (jeśli będą w przyszłości)</li>
                        <li><strong>Podmiotom prawnie uprawnionym</strong> - na żądanie organów ścigania</li>
                        <li><strong>Partnerom biznesowym</strong> - wyłącznie w formie zagregowanych danych statystycznych</li>
                    </ul>
                    <p>
                        Nie sprzedajemy ani nie wynajmujemy Twoich danych osobowych stronom trzecim.
                    </p>
                </div>

                <div className="card">
                    <h2>7. Twoje prawa</h2>
                    <ul className="list">
                        <li><strong>Dostęp do danych</strong> - prawo do uzyskania informacji jakie dane przetwarzamy</li>
                        <li><strong>Sprostowanie</strong> - prawo do poprawienia nieprawidłowych danych</li>
                        <li><strong>Usunięcie</strong> - prawo do usunięcia danych ("prawo do bycia zapomnianym")</li>
                        <li><strong>Ograniczenie przetwarzania</strong> - prawo do ograniczenia sposobu przetwarzania danych</li>
                        <li><strong>Przenoszenie danych</strong> - prawo do otrzymania danych w formacie strukturalnym</li>
                        <li><strong>Sprzeciw</strong> - prawo do sprzeciwu wobec przetwarzania w celach marketingowych</li>
                        <li><strong>Wniesienie skargi</strong> - prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych</li>
                    </ul>
                    <p>
                        Aby skorzystać z powyższych praw, skontaktuj się z nami: <a href="mailto:privacy@angloboost.pl">privacy@angloboost.pl</a>
                    </p>
                </div>

                <div className="card">
                    <h2>8. Dane dzieci</h2>
                    <p>
                        Serwis jest przeznaczony dla użytkowników powyżej 16 roku życia. W przypadku użytkowników młodszych wymagana jest zgoda rodzica lub opiekuna prawnego.
                        Jeśli masz wiedzę, że dziecko poniżej 16 roku życia korzysta z naszego serwisu bez zgody rodzica, prosimy o kontakt.
                    </p>
                </div>

                <div className="card">
                    <h2>9. Międzynarodowe przekazywanie danych</h2>
                    <p>
                        Twoje dane mogą być przetwarzane poza Europejskim Obszarem Gospodarczym wyłącznie w oparciu o odpowiednie zabezpieczenia prawne,
                        takie decyzje adekwatności Komisji Europejskiej lub standardowe klauzule umowne.
                    </p>
                </div>

                <div className="card">
                    <h2>10. Zmiany polityki prywatności</h2>
                    <p>
                        Polityka może ulegać zmianom wraz z rozwojem serwisu. O wszystkich istotnych zmianach poinformujemy Cię poprzez e-mail
                        lub widoczną wiadomość na stronie. Aktualna wersja będzie zawsze dostępna na tej stronie z datą ostatniej modyfikacji.
                    </p>
                    <p>
                        <strong>Ostatnia aktualizacja:</strong> {new Date().toLocaleDateString('pl-PL')}
                    </p>
                </div>

                <div className="card">
                    <h2>11. Kontakt</h2>
                    <p>
                        W sprawach związanych z ochroną danych osobowych, realizacją praw lub pytań dotyczących prywatności, skontaktuj się z nami:
                    </p>
                    <ul className="list">
                        <li>E-mail: <a href="mailto:privacy@angloboost.pl">kontakt@angloboost.pl</a></li>
                        {/*<li>Poczta tradycyjna: [Adres siedziby firmy]</li>*/}
                    </ul>
                </div>
            </section>
        </main>
    )
}