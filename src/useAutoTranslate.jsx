// src/hooks/useAutoTranslate.jsx
import { useEffect } from 'react'
import { useLanguage } from './context/LanguageContext'

export function useAutoTranslate(excludeSelectors = []) {
    const { lang } = useLanguage()

    useEffect(() => {
        // Ustaw atrybut lang dla całej strony
        document.documentElement.lang = lang

        // Upewnij się, że widget jest załadowany (i ustaw język)
        addGoogleTranslateWidget(lang)

        if (lang === 'pl') {
            // Powrót do oryginalnego języka strony (bez tłumaczenia)
            clearGoogleTranslation()

            // Usuń ograniczenia tłumaczenia
            document.querySelectorAll('[translate="no"]').forEach(el => {
                el.removeAttribute('translate')
            })
            document.querySelectorAll('.notranslate').forEach(el => {
                el.classList.remove('notranslate')
            })
            return
        }

        // Dla angielskiego - oznacz wybrane elementy jako "nie tłumacz"
        const excludeElements = excludeSelectors.flatMap(selector =>
            Array.from(document.querySelectorAll(selector))
        )

        excludeElements.forEach(el => {
            el.setAttribute('translate', 'no')
            el.classList.add('notranslate')
        })

        // Dodatkowo: w tabelach wyszukaj kolumny "Znaczenie"/"znaczenie polskie" i wyłącz ich tłumaczenie
        markMeaningColumnsNotTranslatable()

        // Wymuś tłumaczenie na EN po załadowaniu widżetu
        applyGoogleTranslateLanguage('en')
    }, [lang, excludeSelectors])
}

// --- Google Translate helpers ---

function ensureGoogleHidingStyles() {
    // Wstrzykujemy globalne style z !important, aby ukryć wszelkie UI Google Translate
    if (document.getElementById('gt-hide-styles')) return
    const style = document.createElement('style')
    style.id = 'gt-hide-styles'
    style.type = 'text/css'
    style.textContent = `
/* Ukryj baner i nadpisz przesunięcie body */
.goog-te-banner-frame.skiptranslate { display: none !important; }
.goog-te-banner-frame { display: none !important; }
body { top: 0 !important; }
/* Ukryj gadżet/dropdown i logo */
#google_translate_element { display: none !important; }
.goog-te-gadget { display: none !important; }
.goog-te-gadget-simple { display: none !important; }
.goog-te-combo { display: none !important; }
.goog-logo-link { display: none !important; }
.goog-te-gadget-icon { display: none !important; }
/* Ukryj dodatkowe okna/menu/podpowiedzi */
.goog-tooltip { display: none !important; }
.goog-te-balloon-frame { display: none !important; }
.goog-te-menu-frame { visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; }
/* Zdarza się, że Google dodaje overlay o tych klasach */
.VIpgJd-ZVi9od-aZ2wEe-wOHMyf,
.VIpgJd-ZVi9od-ORHb-OEVmcd,
.VIpgJd-ZVi9od-l4eHX-hSRGPd { display: none !important; visibility: hidden !important; }
/* Resetuj style wrappera skiptranslate */
.skiptranslate { display: contents !important; }
`
    document.head.appendChild(style)
}

function hideGoogleBanner() {
    ensureGoogleHidingStyles()
    // Schowaj baner i zresetuj przesunięcie body (jeśli było zastosowane)
    const googleBannerFrame = document.querySelector('.goog-te-banner-frame')
    if (googleBannerFrame) {
        googleBannerFrame.style.display = 'none'
    }
    const body = document.querySelector('body')
    if (body) {
        body.style.top = '0px'
    }
    // Ukryj ewentualny wrapper skiptranslate
    const skipWrappers = document.querySelectorAll('.skiptranslate')
    skipWrappers.forEach((el) => {
        el.style.display = 'contents'
        el.style.visibility = 'hidden'
    })
}

function setGoogleTranslateCookie(targetLang) {
    // Wartość cookie w formacie /język_strony/docelowy
    const googTrans = `/pl/${targetLang}`
    const domain = window.location.hostname

    // Ustaw kilka wariantów cookie dla pewności
    document.cookie = `googtrans=${googTrans};path=/;`
    document.cookie = `googtrans=${googTrans};domain=${domain};path=/;`
    if (!domain.startsWith('.')) {
        document.cookie = `googtrans=${googTrans};domain=.${domain};path=/;`
    }
}

function triggerGoogleTranslateCombo(targetLang) {
    const select = document.querySelector('.goog-te-combo')
    if (select) {
        select.value = targetLang
        select.dispatchEvent(new Event('change'))
        return true
    }
    return false
}

function applyGoogleTranslateLanguage(targetLang) {
    try {
        setGoogleTranslateCookie(targetLang)
        // Jeśli select jeszcze nie istnieje, spróbuj ponowić po krótkiej chwili
        if (!triggerGoogleTranslateCombo(targetLang)) {
            setTimeout(() => triggerGoogleTranslateCombo(targetLang), 300)
            setTimeout(() => triggerGoogleTranslateCombo(targetLang), 1000)
        }
    } catch {
        // Ignoruj błędy runtime
    }
    hideGoogleBanner()
}

function clearGoogleTranslation() {
    try {
        // Ustaw cookie na oryginał (pl -> pl)
        setGoogleTranslateCookie('pl')
        // Spróbuj przestawić również select
        triggerGoogleTranslateCombo('pl')
    } catch {
        // Ignoruj błędy runtime
    }
    hideGoogleBanner()
}

function markMeaningColumnsNotTranslatable() {
    try {
        const tables = Array.from(document.querySelectorAll('table'))
        tables.forEach((table) => {
            const indexes = findMeaningColumnIndexes(table)
            if (!indexes.length) return

            // Zabezpiecz nagłówki
            const headerRows = table.tHead ? Array.from(table.tHead.rows) : [table.querySelector('tr')].filter(Boolean)
            headerRows.forEach((row) => {
                if (!row) return
                indexes.forEach((i) => {
                    const cell = row.cells?.[i]
                    if (cell) {
                        cell.setAttribute('translate', 'no')
                        cell.classList.add('notranslate')
                        cell.setAttribute('data-no-translate', '')
                    }
                })
            })

            // Oznacz komórki wierszy ciała tabeli
            const bodyRows = table.tBodies && table.tBodies.length
                ? Array.from(table.tBodies).flatMap((tb) => Array.from(tb.rows))
                : Array.from(table.querySelectorAll('tr'))
            bodyRows.forEach((row) => {
                indexes.forEach((i) => {
                    const cell = row.cells?.[i]
                    if (cell) {
                        cell.setAttribute('translate', 'no')
                        cell.classList.add('notranslate')
                        cell.setAttribute('data-no-translate', '')
                    }
                })
            })
        })
    } catch {
        // Ignoruj błędy runtime
    }
}

function findMeaningColumnIndexes(table) {
    const headerRow = table.tHead ? table.tHead.rows[0] : table.querySelector('tr')
    if (!headerRow) return []
    const cells = Array.from(headerRow.cells?.length ? headerRow.cells : headerRow.querySelectorAll('th,td'))
    const indexes = []
    cells.forEach((cell, idx) => {
        const txt = (cell.textContent || '').trim().toLowerCase()
        // wykryj "znaczenie" lub "znaczenie polskie"
        if (txt.includes('znaczenie')) {
            indexes.push(idx)
        }
    })
    return indexes
}

function addGoogleTranslateWidget(targetLang) {
    // Zawsze upewnij się, że style ukrywające UI są już wstrzyknięte,
    // zanim cokolwiek załaduje Google, aby nie było migotania.
    ensureGoogleHidingStyles()

    // Jeśli już jest - od razu spróbuj zastosować język i wyjdź
    if (window.google?.translate?.TranslateElement) {
        if (targetLang) applyGoogleTranslateLanguage(targetLang)
        return
    }

    // Zapewnij istnienie ukrytego kontenera
    let container = document.getElementById('google_translate_element')
    if (!container) {
        container = document.createElement('div')
        container.id = 'google_translate_element'
        container.style.display = 'none'
        document.body.appendChild(container)
    }

    const initWidget = () => {
        if (!window.google?.translate?.TranslateElement) return

        new window.google.translate.TranslateElement({
            pageLanguage: 'pl',
            includedLanguages: 'pl,en',
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false
        }, 'google_translate_element')

        hideGoogleBanner()

        // Po inicjalizacji zastosuj żądany język
        if (targetLang) applyGoogleTranslateLanguage(targetLang)
    }

    // Jeżeli API jeszcze nie jest załadowane, doładuj je z callbackiem
    if (!window.google?.translate) {
        if (!window.googleTranslateElementInit) {
            window.googleTranslateElementInit = initWidget
        }
        if (!document.querySelector('script[src*="translate_a/element.js"]')) {
            const script = document.createElement('script')
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
            document.head.appendChild(script)
        }
    } else {
        initWidget()
    }
}