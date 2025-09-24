import './Projects.css'

function Projects({ t }) {
  return (
    <section id="projects" className="section">
      <div className="section-container">
        <h2 className="section-title">
          {t.projects.title}
        </h2>
        <div className="projects-grid">
          {/* My Personnel Project */}
          <div className="project-card">
            <div className="project-image personnel"></div>
            <div className="project-content">
              <h3 className="project-title">
                {t.projects.personnel.title}
              </h3>
              <p className="project-description">
                {t.projects.personnel.description}
              </p>
              <div className="project-tech">
                <span className="tech-tag">
                  React
                </span>
                <span className="tech-tag green">
                  Node.js
                </span>
                <span className="tech-tag purple">
                  MongoDB
                </span>
              </div>
              <div className="project-links">
                <a href="https://my-personnel.vercel.app/login" target="_blank" rel="noopener noreferrer" className="project-link">
                  {t.projects.personnel.viewProject}
                </a>
                <a href="https://github.com/Monzon-Elias/myPersonnel" target="_blank" rel="noopener noreferrer" className="project-link secondary">
                  {t.projects.personnel.code}
                </a>
              </div>
            </div>
          </div>

          {/* YouTube Clone Project */}
          <div className="project-card">
            <div className="project-image youtube"></div>
            <div className="project-content">
              <h3 className="project-title">
                {t.projects.youtube.title}
              </h3>
              <p className="project-description">
                {t.projects.youtube.description}
              </p>
              <div className="project-tech">
                <span className="tech-tag">
                  React
                </span>
                <span className="tech-tag green">
                  Vite
                </span>
                <span className="tech-tag yellow">
                  CSS
                </span>
              </div>
              <div className="project-links">
                <a href="https://elios-youtube.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                  {t.projects.youtube.viewProject}
                </a>
                <a href="https://github.com/Monzon-Elias/Elias-Youtube" target="_blank" rel="noopener noreferrer" className="project-link secondary">
                  {t.projects.youtube.code}
                </a>
              </div>
            </div>
          </div>

          {/* Restaurant App Project */}
          <div className="project-card">
            <div className="project-image restaurant"></div>
            <div className="project-content">
              <h3 className="project-title">
                {t.projects.restaurant.title}
              </h3>
              <p className="project-description">
                {t.projects.restaurant.description}
              </p>
              <div className="project-tech">
                <span className="tech-tag">
                  React
                </span>
                <span className="tech-tag green">
                  Vite
                </span>
                <span className="tech-tag purple">
                  JavaScript
                </span>
              </div>
              <div className="project-links">
                <a href="https://react-restaurant-delta.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                  {t.projects.restaurant.viewProject}
                </a>
                <a href="https://github.com/Monzon-Elias/ReactRestaurant" target="_blank" rel="noopener noreferrer" className="project-link secondary">
                  {t.projects.restaurant.code}
                </a>
              </div>
            </div>
          </div>

          {/* Beti Jai Catering Project */}
          <div className="project-card">
            <div className="project-image betijai"></div>
            <div className="project-content">
              <h3 className="project-title">
                {t.projects.betijai.title}
              </h3>
              <p className="project-description">
                {t.projects.betijai.description}
              </p>
              <div className="project-tech">
                <span className="tech-tag">
                  WordPress
                </span>
                <span className="tech-tag green">
                  Elementor Pro
                </span>
                <span className="tech-tag yellow">
                  Web Design
                </span>
              </div>
              <div className="project-links">
                <a href="https://betijai.com.ar/" target="_blank" rel="noopener noreferrer" className="project-link">
                  {t.projects.betijai.viewProject}
                </a>
                <a href="#" className="project-link secondary betijai-code-link">
                  {t.projects.betijai.code}
                </a>
              </div>
            </div>
          </div>

          {/* Tax Advisor Network Project */}
          <div className="project-card">
            <div className="project-image taxadvisor"></div>
            <div className="project-content">
              <h3 className="project-title">
                {t.projects.taxAdvisor.title}
              </h3>
              <p className="project-description">
                {t.projects.taxAdvisor.description}
              </p>
              <div className="project-tech">
                <span className="tech-tag">
                  NextJS
                </span>
                <span className="tech-tag green">
                  MongoDB
                </span>
                <span className="tech-tag purple">
                  GraphQL
                </span>
              </div>
              <div className="project-links">
                <a href="https://taxadvisornetwork.markjkohler.com/" target="_blank" rel="noopener noreferrer" className="project-link">
                  {t.projects.taxAdvisor.viewProject}
                </a>
                <a href="#" className="project-link secondary taxadvisor-code-link">
                  {t.projects.taxAdvisor.code}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
