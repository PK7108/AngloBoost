import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'lang'

// Simple external store for language without a Provider
const listeners = new Set()

function getStoredLang() {
  const v = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
  return v === 'en' || v === 'pl' ? v : 'pl'
}

function setStoredLang(lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang)
  } catch {}
}

function notify() {
  listeners.forEach((l) => l())
}

export function getLanguage() {
  return getStoredLang()
}

export function setLanguage(lang) {
  if (lang !== 'pl' && lang !== 'en') return
  setStoredLang(lang)
  notify()
}

export function toggleLanguage() {
  const next = getStoredLang() === 'pl' ? 'en' : 'pl'
  setLanguage(next)
}

// Translation dictionary for UI and navigation (content exceptions remain as-is where needed)
const translations = {
  pl: {
    'aria.home': 'Strona główna AngloBoost',
    'aria.openMenu': 'Otwórz menu',
    'aria.langToEn': 'Zmień język na angielski',
    'aria.langToPl': 'Change language to Polish',

    'nav.grammar': 'Gramatyka',
    'nav.vocabulary': 'Słownictwo',
    'nav.exercises': 'Ćwiczenia',
    'nav.articles': 'Artykuły',
    'nav.writing': 'Writing',
    'nav.materials': 'Materiały',
    'nav.login': 'Zaloguj się',
    'nav.logout': 'Wyloguj się',
    'user.menu.accountSettings': 'Ustawienia konta',
    'user.menu.supportUs': 'Wesprzyj nas!',
    'user.menu.premium': 'Wersja premium',

    'home.heroTitle': 'Nauka angielskiego za darmo',
    'home.heroLead1': 'AngloBoost to Twoje centrum nauki języka angielskiego: gramatyka, słownictwo,',
    'home.heroLead2': 'artykuły, praktyczne ćwiczenia, gotowe materiały i wspierająca społeczność na forum.',
    'home.heroLead3': 'Bez opłat, bez haczyków — ucz się skutecznie w rytmie dopasowanym do Ciebie.',
    'home.ctaPrimary': 'Zrób test poziomujący',
    'home.ctaGhost': 'Zobacz możliwości',
    'home.point1': 'Setki ćwiczeń interaktywnych',
    'home.point2': 'Wyjaśnienia gramatyczne po polsku',
    'home.point3': 'Fiszki i listy słówek z nagraniami',
    'home.point4': 'Materiały do druku i notatek',
    'home.sectionsTitle': 'Odkryj wszystkie możliwości',
    'home.sectionsIntro': 'Wybierz obszar, który Cię interesuje. Każda sekcja prowadzi do dedykowanych treści i narzędzi.',
    'home.tile.grammar': 'Gramatyka',
    'home.tile.vocabulary': 'Słownictwo',
    'home.tile.exercises': 'Ćwiczenia',
    'home.tile.articles': 'Artykuły',
    'home.tile.writing': 'Writing',
    'home.tile.materials': 'Materiały',
    'home.tile.placement': 'Test poziomujący',
    'home.tile.go': 'Przejdź →',
    'home.tile.grammar.desc': 'Jasne wyjaśnienia i przykłady z życia.',
    'home.tile.vocabulary.desc': 'Fiszki, listy tematyczne, wymowa.',
    'home.tile.exercises.desc': 'Interaktywne zadania z natychmiastowym feedbackiem.',
    'home.tile.articles.desc': 'Czytaj, ucz się i poszerzaj horyzonty.',
    'home.tile.writing.desc': 'Opisy wypowiedzi pisemnych.',
    'home.tile.materials.desc': 'Literatura, filmy i pomocne serwery.',
    'home.tile.placement.desc': 'Poznaj swój poziom i dobierz plan nauki.',
    'home.newsletter.title': 'Zapisz się na newsletter',
    'home.newsletter.copy1': 'Otrzymuj najlepsze wskazówki, nowe materiały i ćwiczenia prosto na maila.',
    'home.newsletter.copy2': 'Zero spamu, tylko konkret.',
    'home.newsletter.thanks': 'Dziękujemy za zapis! Sprawdź skrzynkę odbiorczą.',
    'home.newsletter.emailLabel': 'Adres e-mail',
    'home.newsletter.emailPlaceholder': 'Twój e-mail',
    'home.newsletter.submit': 'Zapisz mnie',

    'grammar.title': 'Gramatyka',
    'grammar.intro': 'Przejrzyste wyjaśnienia i przykłady. Wybierz dział:',
    'grammar.tile.open': 'Wejdź →',

    'articles.title': 'Artykuły',
    'articles.intro': 'Czytaj i poszerzaj horyzonty:',
    'articles.tile.read': 'Czytaj →',

    'writing.title': 'Pisanie',
    'writing.intro': 'Poznaj różne formy wypowiedzi pisemnych i doskonal swoje umiejętności:',
    'vocabulary.title': 'Słownictwo',
    'vocabulary.intro': 'Rozwijaj słownictwo praktycznie i skutecznie:',
    'exercises.title': 'Ćwiczenia',
    'exercises.intro.loggedIn': 'Jesteś zalogowany — Twoje wyniki będą zapisywane automatycznie.',
    'exercises.intro.loggedOut': 'Możesz rozwiązywać ćwiczenia bez logowania, ale wyniki nie będą zapisywane.',
    'exercises.grammar': 'Gramatyka',
    'exercises.vocabulary': 'Słownictwo',
    'exercises.grammar.desc': 'Zadania utrwalające zagadnienia gramatyczne.',
    'exercises.vocabulary.desc': 'Quizy i fiszki do powtórki słownictwa.',
    'exercises.start': 'Rozpocznij →',

      // W sekcji 'pl' dodaj:
      'materials.title': 'Materiały',
      'materials.intro': 'Zestaw sprawdzonych źródeł do nauki:',

      'login.title': 'Logowanie',
      'login.description': 'Zaloguj się, aby zapisywać swoje wyniki ćwiczeń.',
      'login.emailLabel': 'E-mail',
      'login.emailPlaceholder': 'E-mail',
      'login.passwordLabel': 'Hasło',
      'login.passwordPlaceholder': 'Hasło',
      'login.submit': 'Zaloguj',
      'login.loggingIn': 'Logowanie...',
      'login.createAccount': 'Utwórz konto',
      'login.forgotPassword': 'Zapomniałeś hasła?',
      'login.error': 'Logowanie nieudane',

      'register.title': 'Rejestracja',
      'register.description': 'Utwórz konto, by zapisywać postępy w ćwiczeniach.',
      'register.nameLabel': 'Imię',
      'register.namePlaceholder': 'Imię (opcjonalnie)',
      'register.emailLabel': 'E-mail',
      'register.emailPlaceholder': 'E-mail',
      'register.passwordLabel': 'Hasło',
      'register.passwordPlaceholder': 'Hasło',
      'register.submit': 'Zarejestruj',
      'register.creating': 'Tworzenie...',
      'register.haveAccount': 'Masz już konto?',
      'register.error': 'Rejestracja nieudana',

      'forgotPassword.title': 'Reset hasła',
      'forgotPassword.description': 'Podaj adres e-mail powiązany z Twoim kontem. Wyślemy do Ciebie wiadomość.',
      'forgotPassword.emailLabel': 'E-mail',
      'forgotPassword.emailPlaceholder': 'E-mail',
      'forgotPassword.submit': 'Wyślij link resetu',
      'forgotPassword.sending': 'Wysyłanie...',
      'forgotPassword.success': 'Jeśli konto istnieje, wysłaliśmy e-mail z instrukcjami na adres:',
      'forgotPassword.checkSpam': ' Sprawdź skrzynkę odbiorczą oraz folder spam.',
      'forgotPassword.error': 'Wystąpił błąd. Spróbuj ponownie później.',

      'footer.about': 'Darmowa platforma do nauki angielskiego. Tworzona przez pasjonatów, dla społeczności.',
    'footer.links': 'Linki',
    'footer.info': 'Informacje',
    'footer.link.grammar': 'Gramatyka',
    'footer.link.vocabulary': 'Słownictwo',
    'footer.link.exercises': 'Ćwiczenia',
    'footer.link.articles': 'Artykuły',
    'footer.link.writing': 'Pisanie',
    'footer.link.materials': 'Materiały',
    'footer.link.forum': 'Forum',
    'footer.info.terms': 'Regulamin',
    'footer.info.privacy': 'Polityka prywatności',
    'footer.info.contact': 'Kontakt',
    'footer.made': 'Stworzone z ♥ w PL/UK',
  },
  en: {
    'aria.home': 'AngloBoost homepage',
    'aria.openMenu': 'Open menu',
    'aria.langToEn': 'Change language to English',
    'aria.langToPl': 'Zmień język na polski',

    'nav.grammar': 'Grammar',
    'nav.vocabulary': 'Vocabulary',
    'nav.exercises': 'Exercises',
    'nav.articles': 'Articles',
    'nav.writing': 'Writing',
    'nav.materials': 'Materials',
    'nav.login': 'Log in',
    'nav.logout': 'Log out',
    'user.menu.accountSettings': 'Account settings',
    'user.menu.supportUs': 'Support us!',
    'user.menu.premium': 'Premium version',

    'home.heroTitle': 'Learn English for free',
    'home.heroLead1': 'AngloBoost is your hub for learning English: grammar, vocabulary,',
    'home.heroLead2': 'articles, practical exercises, ready-made materials and a supportive forum community.',
    'home.heroLead3': 'No fees, no catch — learn effectively at your own pace.',
    'home.ctaPrimary': 'Take the placement test',
    'home.ctaGhost': 'Explore features',
    'home.point1': 'Hundreds of interactive exercises',
    'home.point2': 'Clear grammar explanations in Polish',
    'home.point3': 'Flashcards and word lists with audio',
    'home.point4': 'Materials for printing and notes',
    'home.sectionsTitle': 'Discover everything we offer',
    'home.sectionsIntro': 'Pick a section you’re interested in. Each tile leads to dedicated content and tools.',
    'home.tile.grammar': 'Grammar',
    'home.tile.vocabulary': 'Vocabulary',
    'home.tile.exercises': 'Exercises',
    'home.tile.articles': 'Articles',
    'home.tile.writing': 'Writing',
    'home.tile.materials': 'Materials',
    'home.tile.placement': 'Placement test',
    'home.tile.go': 'Open →',
    'home.tile.grammar.desc': 'Clear explanations and real-life examples.',
    'home.tile.vocabulary.desc': 'Flashcards, thematic lists, pronunciation.',
    'home.tile.exercises.desc': 'Interactive tasks with instant feedback.',
    'home.tile.articles.desc': 'Read, learn and broaden your horizons.',
    'home.tile.writing.desc': 'Descriptions of writing tasks.',
    'home.tile.materials.desc': 'Books, films and helpful servers.',
    'home.tile.placement.desc': 'Find your level and tailor your study plan.',
    'home.newsletter.title': 'Subscribe to our newsletter',
    'home.newsletter.copy1': 'Get the best tips, new materials and exercises straight to your inbox.',
    'home.newsletter.copy2': 'No spam, just value.',
    'home.newsletter.thanks': 'Thanks for subscribing! Check your inbox.',
    'home.newsletter.emailLabel': 'Email address',
    'home.newsletter.emailPlaceholder': 'Your email',
    'home.newsletter.submit': 'Subscribe me',

    'grammar.title': 'Grammar',
    'grammar.intro': 'Clear explanations and examples. Choose a section:',
    'grammar.tile.open': 'Open →',

    'articles.title': 'Articles',
    'articles.intro': 'Read and broaden your horizons:',
    'articles.tile.read': 'Read →',

    'writing.title': 'Writing',
    'writing.intro': 'Explore different forms of writing and improve your skills:',
    'vocabulary.title': 'Vocabulary',
    'vocabulary.intro': 'Grow your vocabulary effectively and practically:',
    'exercises.title': 'Exercises',
    'exercises.intro.loggedIn': 'You are logged in — your results will be saved automatically.',
    'exercises.intro.loggedOut': 'You can practice without logging in, but your results will not be saved.',
    'exercises.grammar': 'Grammar',
    'exercises.vocabulary': 'Vocabulary',
    'exercises.grammar.desc': 'Tasks to consolidate grammar topics.',
    'exercises.vocabulary.desc': 'Quizzes and flashcards to review vocabulary.',
    'exercises.start': 'Start →',

      'materials.title': 'Materials',
      'materials.intro': 'A collection of verified learning sources:',

      'login.title': 'Log in',
      'login.description': 'Log in to save your exercise results.',
      'login.emailLabel': 'Email',
      'login.emailPlaceholder': 'Email',
      'login.passwordLabel': 'Password',
      'login.passwordPlaceholder': 'Password',
      'login.submit': 'Log in',
      'login.loggingIn': 'Logging in...',
      'login.createAccount': 'Create account',
      'login.forgotPassword': 'Forgot password?',
      'login.error': 'Login failed',

      'register.title': 'Register',
      'register.description': 'Create an account to save your exercise progress.',
      'register.nameLabel': 'Name',
      'register.namePlaceholder': 'Name (optional)',
      'register.emailLabel': 'Email',
      'register.emailPlaceholder': 'Email',
      'register.passwordLabel': 'Password',
      'register.passwordPlaceholder': 'Password',
      'register.submit': 'Register',
      'register.creating': 'Creating...',
      'register.haveAccount': 'Already have an account?',
      'register.error': 'Registration failed',

      'forgotPassword.title': 'Reset password',
      'forgotPassword.description': 'Enter the email address associated with your account. We will send you a message.',
      'forgotPassword.emailLabel': 'Email',
      'forgotPassword.emailPlaceholder': 'Email',
      'forgotPassword.submit': 'Send reset link',
      'forgotPassword.sending': 'Sending...',
      'forgotPassword.success': 'If an account exists, we sent an email with instructions to:',
      'forgotPassword.checkSpam': ' Check your inbox and spam folder.',
      'forgotPassword.error': 'An error occurred. Please try again later.',

    'footer.about': 'A free platform for learning English. Built by enthusiasts for the community.',
    'footer.links': 'Links',
    'footer.info': 'Information',
    'footer.link.grammar': 'Grammar',
    'footer.link.vocabulary': 'Vocabulary',
    'footer.link.exercises': 'Exercises',
    'footer.link.articles': 'Articles',
    'footer.link.writing': 'Writing',
    'footer.link.materials': 'Materials',
    'footer.link.forum': 'Forum',
    'footer.info.terms': 'Terms of service',
    'footer.info.privacy': 'Privacy policy',
    'footer.info.contact': 'Contact',
    'footer.made': 'Made with ♥ in PL/UK',
  }
}

function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return getStoredLang()
}

function getServerSnapshot() {
  return 'pl'
}

export function useLanguage() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const t = (key, fallback) => {
    const dict = translations[lang] || {}
    return (key in dict ? dict[key] : fallback) ?? key
  }
  return {
    lang,
    t,
    set: setLanguage,
    toggle: toggleLanguage,
  }
}
