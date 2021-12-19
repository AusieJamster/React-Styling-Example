import React from 'react'

import './css/Newsletter.css'

function NewsletterStylesheets(props: {}) {
  const [email, setEmail] = React.useState('')
  const emailPartsCount = countEmailParts(email)
  return (
    <section className="newsletter">
      <div className="newsletter__spectrum" aria-hidden>
        {Array.from(Array(5)).map((_, i) => (
          <div
            className={`newsletter__bar ${
              i + 1 <= emailPartsCount && 'newsletter__bar--active'
            }`}
            key={i}
          ></div>
        ))}
      </div>
      <header className="newsletter__header">
        <h2>CSS Stylesheet</h2>
      </header>
      <input
        className="newsletter__email"
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <button
        className={`newsletter__submit ${
          emailPartsCount >= 5 ? 'newsletter__submit--active' : ''
        }`}
        disabled={emailPartsCount < 5}
      >
        Sign up
      </button>
    </section>
  )
}

export default NewsletterStylesheets

function countEmailParts(email: string) {
  if (/@.+\..{2,}$/.test(email)) {
    return 5
  } else if (/@.+\..?$/.test(email)) {
    return 4
  } else if (/@.+$/.test(email)) {
    return 3
  } else if (/@/.test(email)) {
    return 2
  } else if (/.+/.test(email)) {
    return 1
  } else {
    return 0
  }
}
