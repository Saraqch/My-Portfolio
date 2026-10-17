export default function Contact({ contact, labels }) {
  const base = import.meta.env.BASE_URL
  return (
    <section id="contacto" className="section">
      <div className="contact reveal">
        <p className="eyebrow">04</p>
        <h2>{contact.title}</h2>
        <p>{contact.text}</p>
        <a className="contact__email" href={`mailto:${contact.email}`}>{contact.email}</a>
        <div className="hero__actions">
          <a className="btn btn--primary" href={`mailto:${contact.email}`}>{labels.email}</a>
          <a className="btn" href={`${base}${contact.cv}`} download>{labels.downloadCv}</a>
          <a className="btn" href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
          {contact.linkedin && (
            <a className="btn" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
        </div>
      </div>
    </section>
  )
}
