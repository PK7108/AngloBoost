import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import './navbar.user.css'

function PolandFlag() {
  // Simple PL flag
  return (
    <svg viewBox="0 0 640 480" width="22" height="22" aria-hidden="true">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#fff" d="M0 0h640v240H0z"/>
        <path fill="#dc143c" d="M0 240h640v240H0z"/>
      </g>
    </svg>
  )
}

function UKFlag() {
  // Simplified Union Jack
  return (
    <svg viewBox="0 0 60 30" width="22" height="22" aria-hidden="true">
      <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
      <clipPath id="t"><path d="M30,15 h30 v15 z v-30 z h-30 z M0,0 h30 v15 z v15 z h-30 z"/></clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  )
}

export default function Navbar() {
  const { user, logout } = useAuth()
  const { lang, toggle, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (!menuRef.current) return
      if (!menuRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="logo" aria-label={t('aria.home', 'Strona główna AngloBoost')}>
          <span className="logo__flag">UK</span>
          <span className="logo__text">AngloBoost</span>
        </Link>
        <nav aria-label={lang === 'pl' ? 'Główna nawigacja' : 'Main navigation'}>
          <ul className="menu">
            <li><NavLink to="/gramatyka">{t('nav.grammar', 'Gramatyka')}</NavLink></li>
            <li><NavLink to="/slownictwo">{t('nav.vocabulary', 'Słownictwo')}</NavLink></li>
            <li><NavLink to="/cwiczenia">{t('nav.exercises', 'Ćwiczenia')}</NavLink></li>
            <li><NavLink to="/artykuly">{t('nav.articles', 'Artykuły')}</NavLink></li>
            <li><NavLink to="/writing">{t('nav.writing', 'Writing')}</NavLink></li>
            <li><NavLink to="/materialy">{t('nav.materials', 'Materiały')}</NavLink></li>
          </ul>
        </nav>

        <button
          className="nav__toggle"
          aria-label={t('aria.openMenu', 'Otwórz menu')}
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen ? 'true' : 'false'}
          onClick={() => setMobileOpen(v => !v)}
          title="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/>
          </svg>
        </button>

        <div className="nav__lang">
          <button
            className="lang-btn"
            onClick={toggle}
            aria-label={lang === 'pl' ? t('aria.langToEn') : t('aria.langToPl')}
            title={lang === 'pl' ? t('aria.langToEn') : t('aria.langToPl')}
          >
            {lang === 'pl' ? <PolandFlag/> : <UKFlag/>}
          </button>
        </div>

        <div className="nav__cta" ref={menuRef}>
          {user ? (
            <>
              <button
                className="avatar-btn"
                aria-haspopup="menu"
                aria-expanded={open ? 'true' : 'false'}
                onClick={() => setOpen((v) => !v)}
                title={user.email || (lang === 'pl' ? 'Konto' : 'Account')}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"/>
                </svg>
              </button>
              <div className={`user-menu ${open ? 'is-open' : ''}`} role="menu">
                <Link className="user-menu__item" to="/konto" onClick={() => setOpen(false)}>{t('user.menu.accountSettings', 'Ustawienia konta')}</Link>
                <Link className="user-menu__item" to="/advices" onClick={() => setOpen(false)}>{t('user.menu.supportUs', 'Wesprzyj nas!')}</Link>
                {/*<Link className="user-menu__item premium-link" to="/premium" onClick={() => setOpen(false)}>*/}
                {/*  <span className="premium-star">⭐</span>*/}
                {/*  {t('user.menu.premium', 'Wersja premium')}*/}
                {/*</Link>*/}
                <button className="user-menu__item" onClick={logout}>{t('nav.logout', 'Wyloguj się')}</button>
              </div>
            </>
          ) : (
            <Link className="btn btn--outline" to="/logowanie">{t('nav.login', 'Zaloguj się')}</Link>
          )}
        </div>

        <div id="mobile-menu" className={`mobile-menu ${mobileOpen ? 'is-open' : ''}`}>
          <div className="mobile-menu__lang">
            <button
              className="lang-btn lang-btn--mobile"
              onClick={toggle}
              aria-label={lang === 'pl' ? t('aria.langToEn') : t('aria.langToPl')}
              title={lang === 'pl' ? t('aria.langToEn') : t('aria.langToPl')}
            >
              {lang === 'pl' ? <PolandFlag/> : <UKFlag/>}
            </button>
          </div>
          <ul className="mobile-menu__list">
            <li><NavLink to="/gramatyka" onClick={() => setMobileOpen(false)}>{t('nav.grammar', 'Gramatyka')}</NavLink></li>
            <li><NavLink to="/slownictwo" onClick={() => setMobileOpen(false)}>{t('nav.vocabulary', 'Słownictwo')}</NavLink></li>
            <li><NavLink to="/cwiczenia" onClick={() => setMobileOpen(false)}>{t('nav.exercises', 'Ćwiczenia')}</NavLink></li>
            <li><NavLink to="/artykuly" onClick={() => setMobileOpen(false)}>{t('nav.articles', 'Artykuły')}</NavLink></li>
            <li><NavLink to="/writing" onClick={() => setMobileOpen(false)}>{t('nav.writing', 'Writing')}</NavLink></li>
            <li><NavLink to="/materialy" onClick={() => setMobileOpen(false)}>{t('nav.materials', 'Materiały')}</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
