import { useState, useEffect } from 'react'
import { es } from './translations/es.js'
import { en } from './translations/en.js'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a saved preference or prefers dark mode
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const [isEnglish, setIsEnglish] = useState(() => {
    // Check if user has a saved language preference
    const saved = localStorage.getItem('language')
    return saved ? JSON.parse(saved) : false // false = Spanish, true = English
  })

  useEffect(() => {
    // Save preferences to localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    localStorage.setItem('language', JSON.stringify(isEnglish))
  }, [isDarkMode, isEnglish])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
  }

  const t = isEnglish ? en : es

  return (
    <div className={`app ${isDarkMode ? 'dark' : ''}`}>
      <Header 
        t={t}
        isEnglish={isEnglish}
        isDarkMode={isDarkMode}
        toggleLanguage={toggleLanguage}
        toggleDarkMode={toggleDarkMode}
      />
      <Hero t={t} />
      <About t={t} />
      <Experience t={t} />
      <Education t={t} />
      <Skills t={t} />
      <Projects t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  )
}

export default App