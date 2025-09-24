import profilePhoto from '../../assets/foto d perfil hht 2022.jpeg'
import './About.css'

function About({ t }) {
  return (
    <section id="about" className="section section-white">
      <div className="section-container">
        <div className="about-content">
          <div className="about-text-container">
            <img 
              src={profilePhoto} 
              alt="Elias - Desarrollador Web" 
              className="profile-photo"
            />
          </div>
          <div>
            <h2 className="about-title">
              {t.about.title}
            </h2>
            <p className="about-text">
              {t.about.text1}
            </p>
            <p className="about-text">
              {t.about.text2}
            </p>
            <p className="about-text">
              {t.about.text3}
            </p>
            <div className="skills">
              <span className="skill-tag">
                React
              </span>
              <span className="skill-tag green">
                Vite
              </span>
              <span className="skill-tag yellow">
                JavaScript
              </span>
              <span className="skill-tag purple">
                CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About



