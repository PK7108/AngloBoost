// src/components/GoogleTranslateProvider.jsx
import React from 'react'
import { useAutoTranslate } from './useAutoTranslate'

// Selektory elementów, które NIE powinny być tłumaczone
// Zawężone do tabel/sekcji słownictwa i ręcznych wyjątków.
const EXCLUDE_SELECTORS = [
    '.vocabulary-table',
    '.irregular-verbs-table',
    '.word-list',
    '.no-translate',       // legacy ręczny znacznik
    '[data-no-translate]'  // preferowany ręczny znacznik
]

export default function GoogleTranslateProvider({ children }) {
    useAutoTranslate(EXCLUDE_SELECTORS)

    return (
        <>
            {/* Ukryty widget Google Translate */}
            <div id="google_translate_element" style={{ display: 'none' }}></div>
            {children}
        </>
    )
}