import './Education.css'

function Education({ t }) {
  return (
    <section id="education" className="section">
      <div className="section-container">
        <h2 className="section-title">
          {t.education.title}
        </h2>
        <div className="education-timeline">
          <div className="education-item">
            <div className="education-date">{t.education.master.date}</div>
            <div className="education-content">
              <h3 className="education-title">{t.education.master.title}</h3>
              <h4 className="education-institution">{t.education.master.institution}</h4>
              <p className="education-description">
                {t.education.master.description}
              </p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-date">{t.education.bachelor.date}</div>
            <div className="education-content">
              <h3 className="education-title">{t.education.bachelor.title}</h3>
              <h4 className="education-institution">{t.education.bachelor.institution}</h4>
              <p className="education-description">
                {t.education.bachelor.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
