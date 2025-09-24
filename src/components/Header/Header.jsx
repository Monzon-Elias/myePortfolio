import uruguay_banner from '../../assets/uruguay banner.png'
import usa_banner from '../../assets/usa_banner-removebg.png'
import './Header.css'

function Header({ t, isEnglish, isDarkMode, toggleLanguage, toggleDarkMode }) {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-content">
          <div className="logo">
            Elias Portfolio
          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link">{t.nav.about}</a>
            <a href="#experience" className="nav-link">{t.nav.experience}</a>
            <a href="#education" className="nav-link">{t.nav.education}</a>
            <a href="#skills" className="nav-link">{t.nav.skills}</a>
            <a href="#projects" className="nav-link">{t.nav.projects}</a>
            <a href="#contact" className="nav-link">{t.nav.contact}</a>
            <button 
              onClick={toggleLanguage}
              className="language-toggle"
              aria-label={isEnglish ? 'Cambiar a español' : 'Switch to English'}
            >
              <img 
                src={isEnglish ? uruguay_banner : usa_banner} 
                alt={isEnglish ? 'Bandera de Uruguay' : 'Bandera de Estados Unidos'}
                className="flag-icon"
              />
            </button>
            <button 
              onClick={toggleDarkMode}
              className="dark-mode-toggle"
              aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

