import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <div className="logo logo--small">
            <span className="logo__flag">UK</span>
            <span className="logo__text">AngloBoost</span>
          </div>
          <p className="footer__about">
            {t('footer.about', 'Darmowa platforma do nauki angielskiego. Tworzona przez pasjonatów, dla społeczności.')}
          </p>
        </div>
        <div className="footer__col">
          <h3>{t('footer.links', 'Linki')}</h3>
          <ul>
            <li><Link to="/gramatyka">{t('footer.link.grammar', 'Gramatyka')}</Link></li>
            <li><Link to="/slownictwo">{t('footer.link.vocabulary', 'Słownictwo')}</Link></li>
            <li><Link to="/cwiczenia">{t('footer.link.exercises', 'Ćwiczenia')}</Link></li>
            <li><Link to="/artykuly">{t('footer.link.articles', 'Artykuły')}</Link></li>
              <li><Link to="/writing">{t('footer.link.writing', 'Pisanie')}</Link></li>
            <li><Link to="/materialy">{t('footer.link.materials', 'Materiały')}</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h3>{t('footer.info', 'Informacje')}</h3>
          <ul>
            <li><Link to="/regulamin">{t('footer.info.terms', 'Regulamin')}</Link></li>
            <li><Link to="/polityka-prywatnosci">{t('footer.info.privacy', 'Polityka prywatności')}</Link></li>
            <li><Link to="/kontakt">{t('footer.info.contact', 'Kontakt')}</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        © {new Date().getFullYear()} AngloBoost • {t('footer.made', 'Stworzone z ♥ w PL/UK')}
      </div>
    </footer>
  )
}
