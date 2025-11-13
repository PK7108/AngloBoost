import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import AdminNavbar from './components/AdminNavbar.jsx'

import Home from './pages/Home.jsx'
import Grammar from './pages/Grammar.jsx'
import Vocabulary from './pages/Vocabulary.jsx'
import Articles from './pages/Articles.jsx'
import Exercises from './pages/Exercises.jsx'
import Materials from './pages/Materials.jsx'
import Forum from './pages/Writing.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import PlacementTest from './pages/PlacementTest.jsx'
import PlacementTestResult from './pages/PlacementTestResult.jsx'
import AccountSettings from './pages/account/AccountSettings.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import ResetPassword from './pages/ResetPassword.jsx'

import GoogleTranslateProvider from './/GoogleTranslateProvider'
import './styles/translate.css' // jeśli masz osobny plik CSS

// Artykuły – detale
import HowToLearn from './pages/articles/HowToLearn.jsx'
import CEFR from './pages/articles/CEFR.jsx'
import CertificatesWorth from './pages/articles/CertificatesWorth.jsx'

// Gramatyka – szczegóły
import Pronunciation from './pages/grammar/Pronunciation.jsx'
import PartsOfSpeech from './pages/grammar/PartsOfSpeech.jsx'
import Tenses from './pages/grammar/Tenses.jsx'
import PhrasesExpressions from './pages/grammar/PhrasesExpressions.jsx'
import ReportedSpeech from './pages/grammar/ReportedSpeech.jsx'
import PassiveVoice from './pages/grammar/PassiveVoice.jsx'
import Conditionals from './pages/grammar/Conditionals.jsx'

// Ćwiczenia – gramatyka – szczegóły
import PronunciationExercises from './pages/exercises/grammar/PronunciationExercises.jsx'
import PartsOfSpeechExercises from './pages/exercises/grammar/PartsOfSpeechExercises.jsx'
import TensesExercises from './pages/exercises/grammar/TensesExercises.jsx'
import PhrasesExpressionsExercises from './pages/exercises/grammar/PhrasesExpressionsExercises.jsx'
import ReportedSpeechExercises from './pages/exercises/grammar/ReportedSpeechExercises.jsx'
import PassiveVoiceExercises from './pages/exercises/grammar/PassiveVoiceExercises.jsx'
import ConditionalsExercises from './pages/exercises/grammar/ConditionalsExercises.jsx'

// Słownictwo – szczegóły
import ThematicDictionary from './pages/vocabulary/ThematicDictionary.jsx'
import Idioms from './pages/vocabulary/Idioms.jsx'
import IrregularVerbs from './pages/vocabulary/IrregularVerbs.jsx'
import Slang from './pages/vocabulary/Slang.jsx'
import Proverbs from './pages/vocabulary/Proverbs.jsx'
import BusinessEnglish from './pages/vocabulary/BusinessEnglish.jsx'

// Ćwiczenia – słownictwo – szczegóły
import ThematicVocabularyExercises from './pages/exercises/vocabulary/ThematicVocabularyExercises.jsx'
import IdiomsExercises from './pages/exercises/vocabulary/IdiomsExercises.jsx'
import IrregularVerbsExercises from './pages/exercises/vocabulary/IrregularVerbsExercises.jsx'
import SlangExercises from './pages/exercises/vocabulary/SlangExercises.jsx'
import ProverbsExercises from './pages/exercises/vocabulary/ProverbsExercises.jsx'
import BusinessEnglishExercises from './pages/exercises/vocabulary/BusinessEnglishExercises.jsx'
import BecomingFluent from "./pages/articles/HowBecomeFluent.jsx";
import PolishSchoolsLevel from "./pages/articles/PolishSchoolsLevel.jsx";
import ReadingEnglishBooks from "./pages/articles/ReadingEnglishBooks.jsx";
import BestAgeToLearn from "./pages/articles/BestAgeToLearn.jsx";
import PhoneticAlphabet from "./pages/articles/PhoneticAlphabet.jsx";
import SoVsSuch from "./pages/articles/SoVsSuch.jsx";
import DatesInEnglish from "./pages/articles/DatesInEnglish.jsx";
import TimeInEnglish from "./pages/articles/TimeInEnglish.jsx";
import EnglishFromZero from "./pages/articles/EnglishFromZero.jsx";
import VideoMaterials from "./pages/materials/VideoMaterials.jsx";
import EnglishSites from "./pages/materials/EnglishSites.jsx";
import EnglishServers from "./pages/materials/EnglishServers.jsx";
import Literature from "./pages/materials/Literature.jsx";
import Writing from "./pages/Writing.jsx";
import Story from "./pages/Writing/Story.jsx";
import FormalLetter from "./pages/Writing/FormalLetter.jsx";
import InformalLetter from "./pages/Writing/InformalLetter.jsx";
import Email from "./pages/Writing/Email.jsx";
import Review from "./pages/Writing/Review.jsx";
import Essey from "./pages/Writing/Essay.jsx";
import PictureDescription from "./pages/Writing/PictureDescription.jsx";
import Report from "./pages/Writing/Report.jsx";
import Article from "./pages/Writing/Article.jsx";
import PremiumVersion from "./pages/account/PremiumVersion.jsx";
import UserAdvices from "./pages/account/UserAdvices.jsx";
import AdminPanel from "./pages/admin/AdminPanel.jsx";
import UsersAdmin from "./pages/admin/UsersAdmin.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import Contact from "./pages/Contact.jsx";

import VocabularyStrategies from './pages/articles/VocabularyStrategies.jsx'   // Jak skutecznie uczyć się słownictwa
import IdiomsMustKnow from './pages/articles/IdiomsMustKnow.jsx'               // Idiomy angielskie, które musisz znać
import CommonMistakes from './pages/articles/CommonMistakes.jsx'               // Najczęstsze błędy Polaków w angielskim
import BusinessAtWork from './pages/articles/BusinessAtWork.jsx'               // Angielski w pracy i biznesie
import ListeningNative from './pages/articles/ListeningNative.jsx'            // Jak słuchać i rozumieć native speakerów
import ReadingOriginal from './pages/articles/ReadingOriginal.jsx'            // Czytanie literatury w oryginale
import MoviesSeries from './pages/articles/MoviesSeries.jsx'                  // Uczenie przez filmy i seriale
import TravelPhrases from './pages/articles/TravelPhrases.jsx'                // Angielski w podróży – praktyczne zwroty
import WritingEnglish from './pages/articles/WritingEnglish.jsx'              // Jak pisać w języku angielskim
import BestApps from './pages/articles/BestApps.jsx'                          // Najlepsze aplikacje i narzędzia

function AppContent() {
    const location = useLocation()
    const { user } = useAuth()
    const isAdminPath = location.pathname.startsWith('/admin')
    const isAdminUser = user?.email === 'admin1927@gmail.com'

    // Scroll to top on route change (global behavior, also covers article "next" links)
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [location.pathname])

    return (
        <>
            <GoogleTranslateProvider>
          {isAdminPath && isAdminUser ? <AdminNavbar /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Navigate to="/admin/messages" replace />} />
          <Route path="/admin/messages" element={<AdminPanel />} />
          <Route path="/admin/users" element={<UsersAdmin />} />

          <Route path="/gramatyka" element={<Grammar />} />
          {/* Gramatyka -> Wymowa (redirect do pierwszej podstrony) */}
          <Route path="/gramatyka/wymowa" element={<Navigate to="/gramatyka/wymowa/alfabet" replace />} />
          <Route path="/gramatyka/wymowa/:section" element={<Pronunciation />} />

          {/* Gramatyka -> Wymowa */}
          <Route path="/gramatyka/wymowa" element={<Navigate to="/gramatyka/wymowa/alfabet" replace />} />
          <Route path="/gramatyka/wymowa/:section" element={<Pronunciation />} />
          {/* Gramatyka -> Części mowy */}
          <Route path="/gramatyka/części-mowy" element={<Navigate to="/gramatyka/części-mowy/przedimki" replace />} />
          <Route path="/gramatyka/części-mowy/:section" element={<PartsOfSpeech />} />
          {/* Gramatyka -> Czasy angielskie */}
          <Route path="/gramatyka/czasy-angielskie" element={<Navigate to="/gramatyka/czasy-angielskie/present" replace />} />
          <Route path="/gramatyka/czasy-angielskie/:section" element={<Tenses />} />

          {/* Gramatyka -> Wyrażenia i zwroty */}
          <Route path="/gramatyka/wyrażenia-i-zwroty" element={<Navigate to="/gramatyka/wyrażenia-i-zwroty/had-sth-done" replace />} />
          <Route path="/gramatyka/wyrażenia-i-zwroty/:section" element={<PhrasesExpressions />} />
          {/* Gramatyka -> Mowa zależna */}
          <Route path="/gramatyka/mowa-zależna" element={<Navigate to="/gramatyka/mowa-zależna/present" replace />} />
          <Route path="/gramatyka/mowa-zależna/:section" element={<ReportedSpeech />} />
          {/* Gramatyka -> Strona bierna */}
          <Route path="/gramatyka/strona-bierna" element={<Navigate to="/gramatyka/strona-bierna/simple" replace />} />
          <Route path="/gramatyka/strona-bierna/:section" element={<PassiveVoice />} />
          {/* Gramatyka -> Okresy warunkowe */}
          <Route path="/gramatyka/okresy-warunkowe" element={<Navigate to="/gramatyka/okresy-warunkowe/zero" replace />} />
          <Route path="/gramatyka/okresy-warunkowe/:section" element={<Conditionals />} />

          <Route path="/slownictwo" element={<Vocabulary />} />

          {/* Słownictwo -> Słownik tematyczny */}
          <Route path="/slownictwo/slownik-tematyczny" element={<Navigate to="/slownictwo/slownik-tematyczny/podstawowe-zwroty" replace />} />
          <Route path="/slownictwo/slownik-tematyczny/:section" element={<ThematicDictionary />} />
          {/* Słownictwo -> Idiomy */}
          <Route path="/slownictwo/idiomy" element={<Navigate to="/slownictwo/idiomy/pieniądze" replace />} />
          <Route path="/slownictwo/idiomy/:section" element={<Idioms />} />
          {/* Słownictwo -> Czasowniki nieregularne */}
          <Route path="/slownictwo/czasowniki-nieregularne" element={<IrregularVerbs />} />
          {/* Słownictwo -> Slang */}
          <Route path="/slownictwo/slang" element={<Navigate to="/slownictwo/slang/podstawowe-slowa" replace />} />
          <Route path="/slownictwo/slang/:section" element={<Slang />} />
            {/* Słownictwo -> Proverbs */}
            <Route path="/slownictwo/przyslowia" element={<Navigate to="/slownictwo/przyslowia/podstawowe-slowa" replace />} />
            <Route path="/slownictwo/przyslowia/:section" element={<Proverbs />} />
            {/* Słownictwo -> BusinessEnglish */}
            <Route path="/slownictwo/business-english" element={<Navigate to="/slownictwo/business-english/podstawowe-slowa" replace />} />
            <Route path="/slownictwo/business-english/:section" element={<BusinessEnglish />} />

          <Route path="/artykuly" element={<Articles />} />
          <Route path="/artykuly/jak-sie-uczyc-angielskiego" element={<HowToLearn />} />
          <Route path="/artykuly/poziomy-cefr" element={<CEFR />} />
          <Route path="/artykuly/certyfikaty-czy-warto" element={<CertificatesWorth />} />
          <Route path="/artykuly/plynna-mowa" element={<BecomingFluent />} />
          <Route path="/artykuly/angielski-szkola" element={<PolishSchoolsLevel />} />
          <Route path="/artykuly/czytanie-po-angielsku" element={<ReadingEnglishBooks />} />
          <Route path="/artykuly/najlepszy-wiek" element={<BestAgeToLearn />} />
          <Route path="/artykuly/alfabet-fonetyczny" element={<PhoneticAlphabet />} />
          <Route path="/artykuly/so-vs-such" element={<SoVsSuch />} />
          <Route path="/artykuly/daty-po-angielsku" element={<DatesInEnglish />} />
          <Route path="/artykuly/godziny-po-angielsku" element={<TimeInEnglish />} />
          <Route path="/artykuly/angielski-od-zera" element={<EnglishFromZero />} />

            <Route path="/artykuly/uczenie-sie-slownictwa" element={<VocabularyStrategies />} />
            <Route path="/artykuly/idiomy-angielskie" element={<IdiomsMustKnow />} />
            <Route path="/artykuly/najczestsze-bledy" element={<CommonMistakes />} />
            <Route path="/artykuly/angielski-w-pracy" element={<BusinessAtWork />} />
            <Route path="/artykuly/sluchanie-native-speaker" element={<ListeningNative />} />
            <Route path="/artykuly/czytanie-literatury" element={<ReadingOriginal />} />
            <Route path="/artykuly/angielski-przez-filmy" element={<MoviesSeries />} />
            <Route path="/artykuly/angielski-w-podrozy" element={<TravelPhrases />} />
            <Route path="/artykuly/pisanie-po-angielsku" element={<WritingEnglish />} />
            <Route path="/artykuly/aplikacje-nauka-angielskiego" element={<BestApps />} />

            {/*Materials*/}
            <Route path="/materialy/materialy-video" element={<VideoMaterials />} />
            <Route path="/materialy/portale-angielskie" element={<EnglishSites />} />
            <Route path="/materialy/serwery-jezykowe" element={<EnglishServers />} />
            <Route path="/materialy/literatura" element={<Literature />} />

            {/* Static pages */}
            <Route path="/regulamin" element={<Terms />} />
            <Route path="/polityka-prywatnosci" element={<Privacy />} />
            <Route path="/kontakt" element={<Contact />} />

            {/*Writing*/}
            <Route path="/writing/opowiadanie" element={<Story />} />
            <Route path="/writing/list-formalny" element={<FormalLetter />} />
            <Route path="/writing/list-nieformalny" element={<InformalLetter />} />
            <Route path="/writing/email" element={<Email />} />
            <Route path="/writing/recenzja" element={<Review />} />
            <Route path="/writing/raport" element={<Report />} />
            <Route path="/writing/rozprawka" element={<Essey />} />
            <Route path="/writing/artykul" element={<Article />} />
            <Route path="/writing/opis-obrazka" element={<PictureDescription />} />

          <Route path="/cwiczenia" element={<Exercises />} />
          {/* Ćwiczenia -> Gramatyka -> Wymowa */}
          <Route path="/cwiczenia/gramatyka/wymowa" element={<Navigate to="/cwiczenia/gramatyka/wymowa/alfabet" replace />} />
          <Route path="/cwiczenia/gramatyka/wymowa/:section" element={<PronunciationExercises />} />
          {/* Ćwiczenia -> Gramatyka -> Części mowy */}
          <Route path="/cwiczenia/gramatyka/części-mowy" element={<Navigate to="/cwiczenia/gramatyka/części-mowy/przedimki" replace />} />
          <Route path="/cwiczenia/gramatyka/części-mowy/:section" element={<PartsOfSpeechExercises />} />
          {/* Ćwiczenia -> Gramatyka -> Czasy angielskie */}
          <Route path="/cwiczenia/gramatyka/czasy-angielskie" element={<Navigate to="/cwiczenia/gramatyka/czasy-angielskie/present" replace />} />
          <Route path="/cwiczenia/gramatyka/czasy-angielskie/:section" element={<TensesExercises />} />

          {/* Ćwiczenia -> Słownictwo -> Słownik tematyczny */}
          <Route path="/cwiczenia/slownictwo/slownik-tematyczny" element={<Navigate to="/cwiczenia/slownictwo/slownik-tematyczny/podstawowe-zwroty" replace />} />
          <Route path="/cwiczenia/slownictwo/slownik-tematyczny/:section" element={<ThematicVocabularyExercises />} />
          {/* Ćwiczenia -> Słownictwo -> Idiomy */}
          <Route path="/cwiczenia/slownictwo/idiomy" element={<Navigate to="/cwiczenia/slownictwo/idiomy/pieniądze" replace />} />
          <Route path="/cwiczenia/slownictwo/idiomy/:section" element={<IdiomsExercises />} />
          {/* Ćwiczenia -> Słownictwo -> Czasowniki nieregularne */}
          <Route path="/cwiczenia/slownictwo/czasowniki-nieregularne" element={<IrregularVerbsExercises />} />
          {/* Ćwiczenia -> Słownictwo -> Slang */}
          <Route path="/cwiczenia/slownictwo/slang-(mowa-potoczna)" element={<Navigate to="/cwiczenia/slownictwo/slang-(mowa-potoczna)/podstawowe-slowa" replace />} />
          <Route path="/cwiczenia/slownictwo/slang-(mowa-potoczna)/:section" element={<SlangExercises />} />
            {/* Ćwiczenia -> Słownictwo -> Proverbs */}
            <Route path="/cwiczenia/slownictwo/przyslowia" element={<Navigate to="/cwiczenia/slownictwo/przyslowia/podstawowe-slowa" replace />} />
            <Route path="/cwiczenia/slownictwo/przyslowia/:section" element={<ProverbsExercises />} />
            {/* Ćwiczenia -> Słownictwo -> BusinessEnglish */}
            <Route path="/cwiczenia/slownictwo/business-english" element={<Navigate to="/cwiczenia/slownictwo/business-english/podstawowe-slowa" replace />} />
            <Route path="/cwiczenia/slownictwo/business-english/:section" element={<BusinessEnglishExercises />} />

          {/* Ćwiczenia -> Gramatyka -> Wyrażenia i zwroty */}
          <Route path="/cwiczenia/gramatyka/wyrażenia-i-zwroty" element={<Navigate to="/cwiczenia/gramatyka/wyrażenia-i-zwroty/had-sth-done" replace />} />
          <Route path="/cwiczenia/gramatyka/wyrażenia-i-zwroty/:section" element={<PhrasesExpressionsExercises />} />
          {/* Ćwiczenia -> Gramatyka -> Mowa zależna */}
          <Route path="/cwiczenia/gramatyka/mowa-zależna" element={<Navigate to="/cwiczenia/gramatyka/mowa-zależna/present" replace />} />
          <Route path="/cwiczenia/gramatyka/mowa-zależna/:section" element={<ReportedSpeechExercises />} />
          {/* Ćwiczenia -> Gramatyka -> Strona bierna */}
          <Route path="/cwiczenia/gramatyka/strona-bierna" element={<Navigate to="/cwiczenia/gramatyka/strona-bierna/simple" replace />} />
          <Route path="/cwiczenia/gramatyka/strona-bierna/:section" element={<PassiveVoiceExercises />} />
          {/* Ćwiczenia -> Gramatyka -> Okresy warunkowe */}
          <Route path="/cwiczenia/gramatyka/okresy-warunkowe" element={<Navigate to="/cwiczenia/gramatyka/okresy-warunkowe/zero" replace />} />
          <Route path="/cwiczenia/gramatyka/okresy-warunkowe/:section" element={<ConditionalsExercises />} />

          {/* Ćwiczenia -> Gramatyka -> Wymowa (redirect do pierwszej podstrony) */}
          <Route path="/cwiczenia/gramatyka/wymowa" element={<Navigate to="/cwiczenia/gramatyka/wymowa/alfabet" replace />} />
          <Route path="/cwiczenia/gramatyka/wymowa/:section" element={<PronunciationExercises />} />

          <Route path="/materialy" element={<Materials />} />
          <Route path="/writing" element={<Writing />} />

          <Route path="/logowanie" element={<Login />} />
          <Route path="/rejestracja" element={<Register />} />
          <Route path="/zapomniales-hasla" element={<ForgotPassword />} />
          <Route path="/ustaw-haslo" element={<ResetPassword />} />

          <Route path="/test-poziomujacy" element={<PlacementTest />} />
          <Route path="/test-poziomujacy/wynik" element={<PlacementTestResult />} />
          <Route path="/konto" element={<AccountSettings />} />
          <Route path="/premium" element={<PremiumVersion />} />
          <Route path="/advices" element={<UserAdvices />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
            </GoogleTranslateProvider>
</>
  )
}

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </AuthProvider>
    )
}