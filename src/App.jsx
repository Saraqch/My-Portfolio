import content from './data/es.js'
import useReveal from './hooks/useReveal.js'
import Navbar from './components/Navbar.jsx'
import Ticker from './components/Ticker.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Timeline from './components/Timeline.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  useReveal()

  return (
    <>
      <Ticker items={content.ticker} />
      <Navbar nav={content.nav} labels={content.labels} />
      <main>
        <Hero hero={content.hero} contact={content.contact} labels={content.labels} />
        <Projects projects={content.projects} labels={content.labels} />
        <Skills skills={content.skills} labels={content.labels} />
        <Timeline experience={content.experience} education={content.education} labels={content.labels} />
        <Contact contact={content.contact} labels={content.labels} />
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} {content.hero.name}</span>
        <span>{content.labels.footer}</span>
      </footer>
    </>
  )
}
