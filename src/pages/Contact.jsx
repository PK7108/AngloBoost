import React from 'react'
import '../styles/static-pages.css'

export default function Contact() {
  return (
    <main className="static-page">
      <section className="static-page__hero">
        <h1>Kontakt</h1>
        <p>Masz pytania, sugestie lub chcesz współpracować? Napisz do nas.</p>
      </section>

      <section className="static-page__content container">
        <div className="card">
          <h2>Dane kontaktowe</h2>
          <p>
            E-mail: <a href="mailto:kontakt@angloboost.pl">kontakt@angloboost.pl</a>
          </p>
          <p>
            W sprawach prywatności: <a href="mailto:privacy@angloboost.pl">privacy@angloboost.pl</a>
          </p>
        </div>

        {/*<div className="card">*/}
        {/*  <h2>Napisz wiadomość</h2>*/}
        {/*  <form className="form" onSubmit={(e) => e.preventDefault()}>*/}
        {/*    <div className="form-group">*/}
        {/*      <label htmlFor="name">Imię</label>*/}
        {/*      <input id="name" type="text" name="name" placeholder="Twoje imię" required />*/}
        {/*    </div>*/}
        {/*    <div className="form-group">*/}
        {/*      <label htmlFor="email">E-mail</label>*/}
        {/*      <input id="email" type="email" name="email" placeholder="twoj@email.com" required />*/}
        {/*    </div>*/}
        {/*    <div className="form-group">*/}
        {/*      <label htmlFor="message">Wiadomość</label>*/}
        {/*      <textarea id="message" name="message" placeholder="W czym możemy pomóc?" required />*/}
        {/*    </div>*/}
        {/*    <button type="submit" className="btn btn--primary">Wyślij</button>*/}
        {/*  </form>*/}
        {/*</div>*/}
      </section>
    </main>
  )
}
