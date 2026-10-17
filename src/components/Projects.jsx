import { useMemo, useState } from 'react'
import PhotoSlot from './PhotoSlot.jsx'

export default function Projects({ projects, labels }) {
  const [filter, setFilter] = useState('Todos')

  const tags = useMemo(() => {
    const count = {}
    projects.forEach((p) => p.tags.forEach((t) => (count[t] = (count[t] || 0) + 1)))
    // Solo las tecnologías que aparecen en más de un proyecto sirven como filtro.
    return ['Todos', ...Object.keys(count).filter((t) => count[t] > 1)]
  }, [projects])

  const visible = filter === 'Todos' ? projects : projects.filter((p) => p.tags.includes(filter))

  return (
    <section id="proyectos" className="section">
      <div className="section__head reveal">
        <p className="eyebrow">01</p>
        <h2>{labels.sectionProjects}</h2>
      </div>
      <div className="chips reveal" role="group" aria-label="Filtrar por tecnología">
        {tags.map((t) => (
          <button
            key={t}
            className={`chip ${filter === t ? 'is-active' : ''}`}
            onClick={() => setFilter(t)}
            aria-pressed={filter === t}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid">
        {visible.map((p) => (
          <article key={p.title} className={`card ${p.featured ? 'card--featured' : ''}`}>
            <PhotoSlot src={p.image} alt={p.title} label={labels.photoSoon} className="card__media" />
            <div className="card__body">
              <div className="card__meta">
                <span>{p.role}</span>
                <span>{p.year}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="tags">
                {p.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
              {p.link && (
                <a className="card__link" href={p.link} target="_blank" rel="noreferrer">
                  {labels.viewProject} →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
