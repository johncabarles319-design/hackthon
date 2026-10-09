import { useEffect, useMemo, useRef, useState } from 'react'
import { getCountdown } from './lib/countdown.js'
import { validateRegistration } from './lib/registration.js'

const tracks = [
  { id: 'ai', code: 'A', name: 'AI for everyone', prompt: 'Make an everyday service easier to understand, access, or trust with responsible AI.', signal: '#5a32e5', readableSignal: '#4b26ca', stats: ['12 teams', '2 mentors', 'Human-first'] },
  { id: 'climate', code: 'C', name: 'Climate systems', prompt: 'Turn local environmental data into a practical tool for neighborhoods and small businesses.', signal: '#86a70b', readableSignal: '#4d6200', stats: ['09 teams', '3 datasets', 'Place-based'] },
  { id: 'fintech', code: 'F', name: 'Inclusive fintech', prompt: 'Design a safer path to saving, payments, or credit for people traditional tools leave out.', signal: '#e14d38', readableSignal: '#a72d20', stats: ['08 teams', '2 partners', 'Trust-led'] },
  { id: 'open', code: 'O', name: 'Open innovation', prompt: 'Bring a sharp problem from your community and build the smallest version that proves the idea.', signal: '#171522', readableSignal: '#171522', stats: ['Open brief', 'Any stack', 'Wild card'] },
]

const stages = [
  { id: 'form', date: 'Day 01 · 09:00', title: 'Form', detail: 'Choose the problem, trade assumptions for evidence, and assemble a balanced four-person crew.' },
  { id: 'build', date: 'Day 01 · 13:00', title: 'Build', detail: 'Work in short proof loops. Mentors pressure-test the riskiest part before the interface gets polished.' },
  { id: 'demo', date: 'Day 03 · 14:00', title: 'Demo', detail: 'Show a working journey in five minutes: the need, the proof, the product, and the next honest question.' },
  { id: 'launch', date: 'Day 03 · 17:00', title: 'Launch', detail: 'Selected teams receive a six-week studio sprint to turn the prototype into a durable pilot.' },
]

const builds = [
  { track: 'Climate systems', name: 'Tide/Time', result: 'A barangay-scale flood window that turns sensor feeds into clear action cards.', team: 'Team Amihan · 4 makers', color: 'violet' },
  { track: 'Inclusive fintech', name: 'Sari Ledger', result: 'A voice-first cashbook for micro-retailers who work faster than forms.', team: 'Team Tingi · 3 makers', color: 'coral' },
  { track: 'AI for everyone', name: 'ClearCare', result: 'A clinic handoff tool that translates instructions without losing medical meaning.', team: 'Team Lunas · 5 makers', color: 'lime' },
]

const candidates = [
  { initials: 'AM', name: 'Ari Mendoza', role: 'Product designer', skills: ['Research', 'Prototyping', 'Systems'], status: 'Looking for climate builders' },
  { initials: 'KS', name: 'Kai Santos', role: 'ML engineer', skills: ['Python', 'NLP', 'Responsible AI'], status: 'Looking for a product lead' },
  { initials: 'JB', name: 'Jules Bautista', role: 'Community strategist', skills: ['Fieldwork', 'Story', 'Partnerships'], status: 'Bringing a local brief' },
  { initials: 'RL', name: 'Rin Lim', role: 'Frontend developer', skills: ['React', 'Motion', 'Accessibility'], status: 'Ready to prototype' },
]

function nextEventDate() {
  const now = new Date()
  const eventHasPassed = now.getMonth() > 9 || (now.getMonth() === 9 && now.getDate() > 24)
  return new Date(eventHasPassed ? now.getFullYear() + 1 : now.getFullYear(), 9, 24, 9).getTime()
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
}

function MarkIcon() {
  return <svg viewBox="0 0 42 42" aria-hidden="true"><path d="M7 21C7 11.8 11.8 7 21 7s14 4.8 14 14-4.8 14-14 14S7 30.2 7 21Z" /><path d="M2 21h38M21 2v38" /></svg>
}

export default function App() {
  const eventDate = useMemo(nextEventDate, [])
  const [now, setNow] = useState(Date.now())
  const [menuOpen, setMenuOpen] = useState(false)
  const [trackIndex, setTrackIndex] = useState(0)
  const [stageIndex, setStageIndex] = useState(0)
  const [candidateIndex, setCandidateIndex] = useState(0)
  const [form, setForm] = useState({ name: '', email: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const dialogRef = useRef(null)
  const countdown = getCountdown(eventDate, now)
  const selectedTrack = tracks[trackIndex]
  const selectedStage = stages[stageIndex]
  const candidate = candidates[candidateIndex]

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1_000)
    return () => window.clearInterval(timer)
  }, [])

  const openRegistration = () => dialogRef.current?.showModal()
  const closeRegistration = () => {
    dialogRef.current?.close()
    window.setTimeout(() => {
      setForm({ name: '', email: '' })
      setErrors({})
      setSubmitted(false)
    }, 160)
  }
  const submitRegistration = (event) => {
    event.preventDefault()
    const nextErrors = validateRegistration(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSubmitted(true)
  }

  return (
    <div className="site-shell" style={{ '--signal': selectedTrack.signal, '--signal-readable': selectedTrack.readableSignal, '--lab-art': `url(${import.meta.env.BASE_URL}hackthon-lab.png)` }}>
      <header className="masthead">
        <a className="brand" href="#top" aria-label="Hackthon home">H<span>●</span></a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((open) => !open)}><span /><span /><span className="sr-only">Toggle navigation</span></button>
        <nav id="site-navigation" className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#tracks" onClick={() => setMenuOpen(false)}>Tracks</a><a href="#journey" onClick={() => setMenuOpen(false)}>Journey</a><a href="#builds" onClick={() => setMenuOpen(false)}>Builds</a><a href="#teams" onClick={() => setMenuOpen(false)}>Teams</a>
        </nav>
        <button className="nav-action" type="button" onClick={openRegistration}>Join the build <ArrowIcon /></button>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <h1>Build what’s <em>next.</em></h1>
            <p className="hero-intro">Three days to turn a sharp question into something people can use. Pick a challenge, meet your crew, and ship the first version.</p>
            <p className="event-line"><span /> Manila · October 24–26</p>
            <div className="hero-actions"><button className="button button-primary" type="button" onClick={openRegistration}>Join the build <ArrowIcon /></button><a className="text-link" href="#tracks">Explore the tracks <ArrowIcon /></a></div>
            <div className="countdown" aria-label="Time until Hackthon begins">
              {countdown.complete ? <strong className="countdown-live">Hackthon is live</strong> : Object.entries(countdown).filter(([key]) => key !== 'complete').map(([unit, value]) => <div className="countdown-cell" key={unit}><strong>{String(value).padStart(2, '0')}</strong><span>{unit}</span></div>)}
            </div>
          </div>
          <div className={`reactor-stage reactor-${selectedTrack.id}`} aria-label={`Abstract idea reactor tuned to ${selectedTrack.name}`}>
            <div className="reactor-grid" /><div className="reactor-orbit orbit-one" /><div className="reactor-orbit orbit-two" /><div className="reactor-plane plane-one" /><div className="reactor-plane plane-two" /><div className="reactor-plane plane-three" /><div className="reactor-core"><span /></div><div className="reactor-label label-input">01 / CHALLENGE</div><div className="reactor-label label-output">03 / PROTOTYPE</div>
          </div>
        </section>

        <section className="tracks-section section-shell" id="tracks">
          <div className="section-heading"><h2>Choose a problem worth your weekend.</h2><p>Four live briefs. Each starts specific enough to move and stays open enough to surprise us.</p></div>
          <div className="track-lab">
            <div className="track-list" role="list" aria-label="Challenge tracks">
              {tracks.map((track, index) => <button key={track.id} type="button" className="track-button" aria-pressed={trackIndex === index} onClick={() => setTrackIndex(index)}><span className="track-code">{track.code}</span><span>{track.name}</span><ArrowIcon /></button>)}
            </div>
            <div className="track-brief" aria-live="polite"><div className="track-orbit"><MarkIcon /></div><h3>{selectedTrack.name}</h3><p>{selectedTrack.prompt}</p><ul>{selectedTrack.stats.map((stat) => <li key={stat}>{stat}</li>)}</ul></div>
          </div>
        </section>

        <section className="build-word-section" aria-labelledby="build-word-title">
          <div className="section-shell build-word-shell">
            <div className="build-word-intro">
              <p>From brief to working proof</p>
              <h2 id="build-word-title">Make the idea impossible to ignore.</h2>
            </div>
            <div className="build-word" aria-hidden="true">BUILD</div>
            <div className="build-principles">
              <p><span>01</span><strong>Find the friction</strong>Start with a real moment that needs to work better.</p>
              <p><span>02</span><strong>Shape the proof</strong>Build only enough to test the riskiest belief.</p>
              <p><span>03</span><strong>Ship the signal</strong>Show what changed and what should happen next.</p>
            </div>
          </div>
        </section>

        <section className="journey-section" id="journey">
          <div className="section-shell">
            <div className="section-heading section-heading-inverse"><h2>Momentum has a shape.</h2><p>The weekend runs as four deliberate moves. Know what must be true before you advance.</p></div>
            <div className="timeline">
              <div className="timeline-rail" role="list" aria-label="Hackthon event journey">{stages.map((stage, index) => <button key={stage.id} type="button" aria-pressed={stageIndex === index} onClick={() => setStageIndex(index)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{stage.title}</strong></button>)}</div>
              <div className="stage-detail" aria-live="polite"><p>{selectedStage.date}</p><h3>Make {selectedStage.title.toLowerCase()} real.</h3><span>{selectedStage.detail}</span></div>
            </div>
          </div>
        </section>

        <section className="builds-section section-shell" id="builds">
          <div className="section-heading split-heading"><h2>The proof is a thing that works.</h2><p>Synthetic examples show the level of focus we want: one person, one friction point, one useful change.</p></div>
          <div className="build-grid">{builds.map((build, index) => <article className={`build-card build-${build.color}`} key={build.name}><div className="build-visual" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span><i /><i /><i /></div><div className="build-copy"><p>{build.track}</p><h3>{build.name}</h3><span>{build.result}</span><small>{build.team}</small></div></article>)}</div>
        </section>

        <section className="why-section" aria-labelledby="why-title">
          <div className="section-shell why-shell">
            <div className="why-heading"><p>Designed for momentum</p><h2 id="why-title">Why the weekend works.</h2></div>
            <div className="why-constellation">
              <article className="why-point why-point-one"><span>01</span><h3>A brief with edges</h3><p>Clear constraints turn broad ambition into a decision the team can make today.</p></article>
              <article className="why-point why-point-two"><span>02</span><h3>Different minds, one table</h3><p>Design, technology, and lived experience meet before a solution hardens.</p></article>
              <figure className="why-visual"><img src={`${import.meta.env.BASE_URL}hackthon-lab.png`} alt="An illustrated group of makers collaborating around a luminous prototype table" /><figcaption>Original Hackthon studio artwork</figcaption></figure>
              <article className="why-point why-point-three"><span>03</span><h3>Proof before polish</h3><p>Every loop asks one question and leaves the team with evidence, not decoration.</p></article>
              <article className="why-point why-point-four"><span>04</span><h3>A path after demo day</h3><p>The strongest prototypes leave with partners, a next test, and six weeks of support.</p></article>
            </div>
          </div>
        </section>

        <section className="teams-section section-shell" id="teams">
          <div className="team-intro"><h2>Find the missing perspective.</h2><p>Teams work better when skills overlap just enough and lived experience does not. Preview the kind of matches Hackthon will help make.</p><button className="button button-outline" type="button" onClick={() => setCandidateIndex((index) => (index + 1) % candidates.length)}>Preview another match <ArrowIcon /></button></div>
          <div className="candidate-panel" aria-live="polite"><div className="candidate-status"><span /> Available now</div><div className="candidate-person"><div className="avatar">{candidate.initials}</div><div><h3>{candidate.name}</h3><p>{candidate.role}</p></div></div><p className="candidate-intent">{candidate.status}</p><div className="skill-list">{candidate.skills.map((skill) => <span key={skill}>{skill}</span>)}</div><div className="candidate-progress"><span style={{ '--progress': (candidateIndex + 1) / candidates.length }} /></div><small>{candidateIndex + 1} of {candidates.length} example profiles</small></div>
        </section>

        <section className="closing-section"><div className="closing-mark"><MarkIcon /></div><h2>A weekend is enough to make the first true thing.</h2><button className="button button-light" type="button" onClick={openRegistration}>Join the build <ArrowIcon /></button></section>
      </main>

      <footer className="footer"><a className="brand footer-brand" href="#top" aria-label="Back to top">H<span>●</span></a><p>Hackthon · Manila · October 24–26</p><p>Prototype edition / demo content</p></footer>

      <dialog ref={dialogRef} className="registration-dialog" onClose={closeRegistration} onClick={(event) => { if (event.target === dialogRef.current) closeRegistration() }}>
        <button className="dialog-close" type="button" onClick={closeRegistration} aria-label="Close registration dialog">×</button>
        {submitted ? <div className="success-state" role="status"><div className="success-mark"><MarkIcon /></div><h2>You’re on the signal list.</h2><p>This prototype keeps your entry on this screen only. We’ll replace it with the real registration flow when the final features arrive.</p><button className="button button-primary" type="button" onClick={closeRegistration}>Return to the site</button></div> : (
          <form onSubmit={submitRegistration} noValidate>
            <h2>Save your place in the build.</h2><p>Leave a local demo entry. Nothing is transmitted or stored.</p>
            <label htmlFor="registration-name">Your name</label><input id="registration-name" name="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} autoComplete="name" />{errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
            <label htmlFor="registration-email">Email address</label><input id="registration-email" name="email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} autoComplete="email" />{errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
            <button className="button button-primary dialog-submit" type="submit">Record my interest <ArrowIcon /></button>
          </form>
        )}
      </dialog>
    </div>
  )
}
