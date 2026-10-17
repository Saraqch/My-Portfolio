export default function Skills({ skills, labels }) {
  return (
    <section id="habilidades" className="section">
      <div className="section__head reveal">
        <p className="eyebrow">02</p>
        <h2>{labels.sectionSkills}</h2>
      </div>
      <div className="skills">
        {skills.map((s) => (
          <div key={s.group} className="skills__group reveal">
            <h3>{s.group}</h3>
            <ul className="tags tags--lg">
              {s.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
