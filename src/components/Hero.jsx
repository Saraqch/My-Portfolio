import { useEffect, useState } from 'react'
import PhotoSlot from './PhotoSlot.jsx'

function Counter({ value, suffix }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    let frame
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / 1200, 1)
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value])
  return <>{n}{suffix}</>
}

export default function Hero({ hero, contact, labels }) {
  const base = import.meta.env.BASE_URL
  return (
    <section id="inicio" className="hero">
      <div className="hero__text">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 className="hero__name">{hero.name}</h1>
        <p className="hero__bio">{hero.bio}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href={`mailto:${contact.email}`}>{labels.email}</a>
          <a className="btn" href={`${base}${contact.cv}`} download>{labels.downloadCv}</a>
          <a className="btn" href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
          {contact.linkedin && (
            <a className="btn" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
        </div>
        <ul className="stats">
          {hero.stats.map((s) => (
            <li key={s.label}>
              <strong><Counter value={s.value} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <PhotoSlot
        src={hero.photo}
        alt={hero.name}
        label={labels.photoSoon}
        className="hero__photo"
      />
    </section>
  )
}
