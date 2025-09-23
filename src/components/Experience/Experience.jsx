import './Experience.css'

function Experience({ t }) {
  return (
    <section id="experience" className="section">
      <div className="section-container">
        <h2 className="section-title">
          {t.experience.title}
        </h2>
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-date">{t.experience.dates.jul2025Present}</div>
            <div className="experience-content">
              <h3 className="experience-title">{t.experience.lauener.title}</h3>
              <h4 className="experience-company">{t.experience.lauener.company}</h4>
              <ul className="experience-details">
                {t.experience.lauener.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">{t.experience.dates.oct2024Present}</div>
            <div className="experience-content">
              <h3 className="experience-title">{t.experience.mnm.title}</h3>
              <h4 className="experience-company">{t.experience.mnm.company}</h4>
              <ul className="experience-details">
                {t.experience.mnm.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">{t.experience.dates.jan2024Jun2024}</div>
            <div className="experience-content">
              <h3 className="experience-title">{t.experience.shelfology.title}</h3>
              <h4 className="experience-company">{t.experience.shelfology.company}</h4>
              <ul className="experience-details">
                {t.experience.shelfology.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-date">{t.experience.dates.jan2023Nov2023}</div>
            <div className="experience-content">
              <h3 className="experience-title">{t.experience.markKohler.title}</h3>
              <h4 className="experience-company">{t.experience.markKohler.company}</h4>
              <ul className="experience-details">
                {t.experience.markKohler.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
