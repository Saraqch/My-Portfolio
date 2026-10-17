function Column({ title, items }) {
  return (
    <div className="timeline reveal">
      <h3 className="timeline__title">{title}</h3>
      <ol>
        {items.map((item, i) => (
          <li key={item.title + item.date} className="timeline__item">
            <span className="timeline__num">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <p className="timeline__date">{item.date}</p>
              <h4>{item.title}</h4>
              <p className="timeline__place">{item.place}</p>
              {item.points && (
                <ul>
                  {item.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Timeline({ experience, education, labels }) {
  return (
    <section id="trayectoria" className="section">
      <div className="section__head reveal">
        <p className="eyebrow">03</p>
        <h2>{labels.sectionPath}</h2>
      </div>
      <div className="timelines">
        <Column title={labels.experience} items={experience} />
        <Column title={labels.education} items={education} />
      </div>
    </section>
  )
}
