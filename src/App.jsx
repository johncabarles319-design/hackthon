import { useEffect, useMemo, useRef, useState } from 'react'
import { getCountdown } from './lib/countdown.js'

function nextEventDate() {
  const now = new Date()
  const year = now.getMonth() > 9 || (now.getMonth() === 9 && now.getDate() > 24)
    ? now.getFullYear() + 1
    : now.getFullYear()
  return new Date(year, 9, 24, 9).getTime()
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  )
}

export default function App() {
  const eventDate = useMemo(nextEventDate, [])
  const [now, setNow] = useState(Date.now())
  const [menuOpen, setMenuOpen] = useState(false)
  const dialogRef = useRef(null)
  const countdown = getCountdown(eventDate, now)

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1_000)
    return () => window.clearInterval(timer)
  }, [])

  const openRegistration = () => dialogRef.current?.showModal()

  return (
    <div className="site-shell">
      <header className="masthead">
        <a className="brand" href="#top" aria-label="Hackthon home">
          H<span>●</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span className="sr-only">Toggle navigation</span>
        </button>
        <nav id="site-navigation" className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#tracks" onClick={() => setMenuOpen(false)}>Tracks</a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>Journey</a>
          <a href="#builds" onClick={() => setMenuOpen(false)}>Builds</a>
          <a href="#teams" onClick={() => setMenuOpen(false)}>Teams</a>
        </nav>
        <button className="nav-action" type="button" onClick={openRegistration}>
          Join the build <ArrowIcon />
        </button>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="event-line"><span /> Manila · October 24–26</p>
            <h1>Build what’s <em>next.</em></h1>
            <p className="hero-intro">
              Three days to turn a sharp question into something people can use.
              Pick a challenge, meet your crew, and ship the first version.
            </p>
            <div className="hero-actions">
              <button className="button button-primary" type="button" onClick={openRegistration}>
                Join the build <ArrowIcon />
              </button>
              <a className="text-link" href="#tracks">Explore the tracks <ArrowIcon /></a>
            </div>

            <div className="countdown" aria-label="Time until Hackthon begins" aria-live="polite">
              {countdown.complete ? (
                <strong>Hackthon is live</strong>
              ) : (
                Object.entries(countdown).filter(([key]) => key !== 'complete').map(([unit, value]) => (
                  <div className="countdown-cell" key={unit}>
                    <strong>{String(value).padStart(2, '0')}</strong>
                    <span>{unit}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="reactor-stage" aria-label="Abstract idea reactor illustration">
            <div className="reactor-grid" />
            <div className="reactor-orbit orbit-one" />
            <div className="reactor-orbit orbit-two" />
            <div className="reactor-plane plane-one" />
            <div className="reactor-plane plane-two" />
            <div className="reactor-plane plane-three" />
            <div className="reactor-core"><span /></div>
            <div className="reactor-label label-input">01 / CHALLENGE</div>
            <div className="reactor-label label-output">03 / PROTOTYPE</div>
          </div>
        </section>
      </main>

      <dialog ref={dialogRef} className="registration-dialog" onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current.close()
      }}>
        <button className="dialog-close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Close registration dialog">×</button>
        <p className="dialog-mark">Hackthon / early access</p>
        <h2>Save your place in the build.</h2>
        <p>Registration opens soon. The complete interest form arrives with the next prototype stage.</p>
        <button className="button button-primary" type="button" onClick={() => dialogRef.current?.close()}>Got it</button>
      </dialog>
    </div>
  )
}
