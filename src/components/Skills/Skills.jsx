import './Skills.css'

function Skills({ t }) {
  return (
    <section id="skills" className="section section-white">
      <div className="section-container">
        <h2 className="section-title">
          {t.skills.title}
        </h2>
        <div className="skills-grid">
          <div className="skills-category">
            <h3 className="skills-category-title">{t.skills.frontend}</h3>
            <div className="skills-list">
              <span className="skill-item">React</span>
              <span className="skill-item">Next.js</span>
              <span className="skill-item">JavaScript</span>
              <span className="skill-item">TypeScript</span>
              <span className="skill-item">HTML/CSS</span>
              <span className="skill-item">SCSS</span>
              <span className="skill-item">Tailwind</span>
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="skills-category-title">{t.skills.backend}</h3>
            <div className="skills-list">
              <span className="skill-item">Node.js</span>
              <span className="skill-item">PHP</span>
              <span className="skill-item">MongoDB</span>
              <span className="skill-item">SQL</span>
              <span className="skill-item">GraphQL</span>
              <span className="skill-item">RESTful APIs</span>
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="skills-category-title">{t.skills.cms}</h3>
            <div className="skills-list">
              <span className="skill-item">WordPress</span>
              <span className="skill-item">Elementor Pro</span>
              <span className="skill-item">ACF</span>
              <span className="skill-item">Shopify</span>
              <span className="skill-item">Bigcommerce</span>
              <span className="skill-item">AWS S3</span>
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="skills-category-title">{t.skills.methodologies}</h3>
            <div className="skills-list">
              <span className="skill-item">Agile/Scrum</span>
              <span className="skill-item">Git/GitHub</span>
              <span className="skill-item">SEO</span>
              <span className="skill-item">A/B Testing</span>
              <span className="skill-item">Responsive Design</span>
              <span className="skill-item">Quality Assurance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills















