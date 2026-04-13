import './Projects.css'

function Projects({ t }) {
  return (
    <section id="projects" className="section">
      <div className="section-container">
        <h2 className="section-title">
          {t.projects.title}
        </h2>
        <div className="projects-grid">
          {/* Shelfology Project */}
          <div className="project-card">
            <div className="project-image shelfology">
              <img
                src="/shelfology-thumbnail.webp"
                alt="Shelfology website preview"
                className="project-image-photo"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">
                {t.projects.shelfology.title}
              </h3>
              <p className="project-description">
                {t.projects.shelfology.description}
              </p>
              <div className="project-tech">
                <span className="tech-tag">
                  Bigcommerce
                </span>
                <span className="tech-tag green">
                  CRM & Shipping
                </span>
                <span className="tech-tag yellow">
                  Shopify Migration
                </span>
              </div>
              <div className="project-links">
                <a href="https://shelfology.com/" target="_blank" rel="noopener noreferrer" className="project-link">
                  {t.projects.shelfology.viewProject}
                </a>
                <a href="#" className="project-link secondary shelfology-code-link">
                  {t.projects.shelfology.code}
                </a>
              </div>
            </div>
          </div>

          {/* Hard Hat Training Project */}
          <div className="project-card">
            <div className="project-image hardhat">
              <img
                src="/hht-thumbnail.webp"
                alt="Hard Hat Training website preview"
                className="project-image-photo"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">
                {t.projects.hardhat.title}
              </h3>
              <p className="project-description">
                {t.projects.hardhat.description}
              </p>
              <div className="project-tech">
                <span className="tech-tag">
                  Web Maintenance
                </span>
                <span className="tech-tag green">
                  SEO
                </span>
                <span className="tech-tag yellow">
                  Performance
                </span>
              </div>
              <div className="project-links">
                <a href="https://www.hardhattraining.com/" target="_blank" rel="noopener noreferrer" className="project-link">
                  {t.projects.hardhat.viewProject}
                </a>
                <a href="#" className="project-link secondary hardhat-code-link">
                  {t.projects.hardhat.code}
                </a>
              </div>
            </div>
          </div>

          {/* Tax Advisor Network Project */}
          <div className="project-card">
            <div className="project-image taxadvisor">
              <img
                src="/TAN-thumbnail.webp"
                alt="Tax Advisor Network website preview"
                className="project-image-photo"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">
                {t.projects.taxAdvisor.title}
              </h3>
              <p className="project-description">
                {t.projects.taxAdvisor.description}
              </p>
              <div className="project-tech">
                <span className="tech-tag">
                  WordPress
                </span>
                <span className="tech-tag green">
                  Elementor Pro
                </span>
                <span className="tech-tag purple">
                  ACF
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

          {/* Beti Jai Catering Project */}
          <div className="project-card">
            <div className="project-image betijai">
              <img
                src="/betihai-thumbnail.webp"
                alt="Beti Jai Catering website preview"
                className="project-image-photo"
              />
            </div>
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

          {/* My Personnel Project */}
          <div className="project-card">
            <div className="project-image personnel">
              <img
                src="/myPersonnel-thumbnail.webp"
                alt="My Personnel website preview"
                className="project-image-photo"
              />
            </div>
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
                <a href="https://mypersonnel.org" target="_blank" rel="noopener noreferrer" className="project-link">
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
            <div className="project-image youtube">
              <img
                src="/youtube-clone-thumbnail.webp"
                alt="YouTube Clone app preview"
                className="project-image-photo"
              />
            </div>
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

          {/* USU Online — Homepage Redesign */}
          <div className="project-card">
            <div className="project-image usu-online">
              <img
                src="/usu-homepage-thumbnail.webp"
                alt="USU Online website preview"
                className="project-image-photo"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">
                {t.projects.usuOnline.title}
              </h3>
              <p className="project-description">
                {t.projects.usuOnline.description}
              </p>
              <div className="project-tech">
                <span className="tech-tag">
                  HTML
                </span>
                <span className="tech-tag green">
                  CSS
                </span>
                <span className="tech-tag yellow">
                  JavaScript
                </span>
              </div>
              <div className="project-links">
                <a href="https://monzon-elias.github.io/USU-Online-Web-Manager-Task/" target="_blank" rel="noopener noreferrer" className="project-link">
                  {t.projects.usuOnline.viewProject}
                </a>
                <a href="https://github.com/Monzon-Elias/USU-Online-Web-Manager-Task" target="_blank" rel="noopener noreferrer" className="project-link secondary">
                  {t.projects.usuOnline.code}
                </a>
              </div>
            </div>
          </div>

          {/* USU ADVS — Homepage redesign */}
          <div className="project-card">
            <div className="project-image advs-usu">
              <img
                src="/veterinary-usu-thumbnail.webp"
                alt="USU Animal, Dairy & Veterinary Sciences website preview"
                className="project-image-photo"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">
                {t.projects.advsRedesign.title}
              </h3>
              <p className="project-description">
                {t.projects.advsRedesign.description}
              </p>
              <div className="project-tech">
                <span className="tech-tag">
                  HTML
                </span>
                <span className="tech-tag green">
                  CSS
                </span>
                <span className="tech-tag yellow">
                  JavaScript
                </span>
              </div>
              <div className="project-links">
                <a href="https://monzon-elias.github.io/Animal-Dairy-and-Veterinary-Sciences/" target="_blank" rel="noopener noreferrer" className="project-link">
                  {t.projects.advsRedesign.viewProject}
                </a>
                <a href="https://github.com/Monzon-Elias/Animal-Dairy-and-Veterinary-Sciences" target="_blank" rel="noopener noreferrer" className="project-link secondary">
                  {t.projects.advsRedesign.code}
                </a>
              </div>
            </div>
          </div>

          {/* Budget App Project */}
          <div className="project-card">
            <div className="project-image budget">
              <img
                src="/budget-app-thumbnail.webp"
                alt="Budget App website preview"
                className="project-image-photo"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">
                {t.projects.budgetApp.title}
              </h3>
              <p className="project-description">
                {t.projects.budgetApp.description}
              </p>
              <div className="project-tech">
                <span className="tech-tag">
                  React
                </span>
                <span className="tech-tag green">
                  Node.js
                </span>
                <span className="tech-tag yellow">
                  Express
                </span>
              </div>
              <div className="project-links">
                <a href="https://budgetsite.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                  {t.projects.budgetApp.viewProject}
                </a>
                <a href="https://github.com/Monzon-Elias/BudgetApp" target="_blank" rel="noopener noreferrer" className="project-link secondary">
                  {t.projects.budgetApp.code}
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
