import React from 'react'
import '../styles/static-pages.css'

export default function Terms() {
    return (
        <main className="static-page">
            <section className="static-page__hero">
                <h1>Regulamin</h1>
                <p>Warunki korzystania z platformy AngloBoost.</p>
            </section>

            <section className="static-page__content container">
                <div className="card">
                    <h2>1. Postanowienia ogólne</h2>
                    <p>
                        Niniejszy regulamin określa zasady korzystania z darmowej platformy edukacyjnej AngloBoost dostępnej pod adresem angloboost.pl.
                        Korzystając z serwisu, akceptujesz poniższe postanowienia w całości.
                    </p>
                    <p>
                        Właścicielem i operatorem platformy jest AngloBoost. Serwis ma charakter edukacyjny i oferuje bezpłatne materiały do nauki języka angielskiego.
                    </p>
                </div>

                <div className="card">
                    <h2>2. Warunki korzystania z serwisu</h2>
                    <ul className="list">
                        <li>Serwis jest przeznaczony dla użytkowników powyżej 16 roku życia</li>
                        <li>Korzystanie z podstawowych funkcji serwisu jest bezpłatne</li>
                        <li>Użytkownik zobowiązuje się do korzystania z serwisu zgodnie z prawem i zasadami współżycia społecznego</li>
                        <li>Zabronione jest wykorzystywanie serwisu do celów komercyjnych bez zgody administratora</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>3. Rejestracja i konto użytkownika</h2>
                    <ul className="list">
                        <li><strong>Rejestracja</strong> - wymaga podania adresu e-mail, nazwy użytkownika i hasła</li>
                        <li><strong>Dane konta</strong> - muszą być prawdziwe i aktualne</li>
                        <li><strong>Bezpieczeństwo</strong> - użytkownik odpowiada za zachowanie poufności danych logowania</li>
                        <li><strong>Jedno konto</strong> - zabronione jest posiadanie wielu kont przez jednego użytkownika</li>
                        <li><strong>Dezaktywacja</strong> - użytkownik może w każdej chwili usunąć swoje konto w ustawieniach profilu</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>4. Zasady korzystania z treści</h2>
                    <ul className="list">
                        <li>Użytkownik otrzymuje nieograniczony dostęp do materiałów edukacyjnych w celach osobistych</li>
                        <li>Zabronione jest pobieranie i masowe kopiowanie treści bez zgody administratora</li>
                        <li>Dozwolone jest udostępnianie pojedynczych materiałów w celach edukacyjnych z podaniem źródła</li>
                        <li>Treści generowane przez użytkowników (notatki, postępy) pozostają ich własnością</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>5. Prawa autorskie i własność intelektualna</h2>
                    <p>
                        Wszystkie materiały edukacyjne (lekcje, ćwiczenia, artykuły, grafiki) publikowane w serwisie są własnością AngloBoost
                        lub są wykorzystywane na podstawie odpowiednich licencji i podlegają ochronie prawnej.
                    </p>
                    <ul className="list">
                        <li>Zabronione jest kopiowanie, modyfikowanie i rozpowszechnianie treści bez zgody autorów</li>
                        <li>Użytkownicy mogą korzystać z materiałów wyłącznie w celach osobistej nauki</li>
                        <li>Nazwa "AngloBoost" i logo są znakami zastrzeżonymi</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>6. Obowiązki użytkownika</h2>
                    <p>Użytkownik zobowiązuje się do:</p>
                    <ul className="list">
                        <li>Korzystania z serwisu w sposób niezakłócający jego funkcjonowania</li>
                        <li>Niepodejmowania prób naruszenia zabezpieczeń serwisu</li>
                        <li>Niekorzystania z automatycznych systemów do pobierania treści</li>
                        <li>Nieumieszczania treści niezgodnych z prawem lub naruszających dobre obyczaje</li>
                        <li>Poszanowania praw innych użytkowników</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>7. Ograniczenie odpowiedzialności</h2>
                    <ul className="list">
                        <li>Administrator nie gwarantuje nieprzerwanego dostępu do serwisu</li>
                        <li>Serwis może okresowo być niedostępny z powodu prac technicznych</li>
                        <li>Administrator nie ponosi odpowiedzialności za skutki wykorzystania materiałów edukacyjnych</li>
                        <li>Użytkownik korzysta z serwisu na własną odpowiedzialność</li>
                        <li>Administrator nie odpowiada za treści stron trzecich linkowanych z serwisu</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>8. Naruszenie regulaminu</h2>
                    <p>
                        W przypadku naruszenia postanowień regulaminu, administrator zastrzega sobie prawo do:
                    </p>
                    <ul className="list">
                        <li>Usunięcia treści naruszających regulamin</li>
                        <li>Tymczasowego lub stałego zablokowania konta użytkownika</li>
                        <li>Zablokowania dostępu do określonych funkcji serwisu</li>
                        <li>Prawnych działań w przypadku poważnych naruszeń</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>9. Dane osobowe i prywatność</h2>
                    <p>
                        Zasady przetwarzania danych osobowych użytkowników określa
                        <a href="/polityka-prywatnosci"> Polityka prywatności</a>, która stanowi integralną część regulaminu.
                    </p>
                    <ul className="list">
                        <li>Administrator przetwarza dane zgodnie z obowiązującymi przepisami RODO</li>
                        <li>Użytkownik ma prawo wglądu, poprawiania i usunięcia swoich danych</li>
                        <li>Dane są przetwarzane w celach świadczenia usług edukacyjnych i analityki</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>10. Zmiany regulaminu</h2>
                    <p>
                        Zastrzegamy sobie prawo do wprowadzania zmian w regulaminie. O istotnych zmianach użytkownicy zostaną
                        powiadomieni poprzez e-mail lub komunikat w serwisie. Kontynuowanie korzystania z serwisu po wprowadzeniu
                        zmian oznacza ich akceptację.
                    </p>
                    <p>
                        Aktualna wersja regulaminu jest zawsze dostępna na tej stronie.
                    </p>
                </div>

                <div className="card">
                    <h2>11. Postanowienia końcowe</h2>
                    <ul className="list">
                        <li>Regulamin wchodzi w życie z dniem publikacji na stronie</li>
                        <li>W sprawach nieuregulowanych niniejszym regulaminem mają zastosowanie przepisy prawa polskiego</li>
                        <li>Wszelkie spory będą rozstrzygane przez sąd właściwy dla siedziby administratora</li>
                        <li>Poszczególne postanowienia regulaminu są niezależne - nieważność jednego nie wpływa na ważność pozostałych</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>12. Kontakt</h2>
                    <p>
                        W razie pytań dotyczących regulaminu lub zgłoszenia naruszeń, skontaktuj się z nami:
                    </p>
                    <ul className="list">
                        <li>E-mail: <a href="mailto:kontakt@angloboost.pl">kontakt@angloboost.pl</a></li>
                    </ul>
                    <p>
                        <strong>Data ostatniej aktualizacji:</strong> {new Date().toLocaleDateString('pl-PL')}
                    </p>
                </div>
            </section>
        </main>
    )
}