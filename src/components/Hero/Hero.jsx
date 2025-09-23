import './Hero.css'

function Hero({ t }) {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {t.hero.title} <span className="hero-name">{t.hero.name}</span>
          </h1>
          <p className="hero-subtitle">
            {t.hero.subtitle}
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              {t.hero.projectsBtn}
            </a>
            <a href="#contact" className="btn-secondary">
              {t.hero.contactBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

