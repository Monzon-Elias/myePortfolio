import './Contact.css'

function Contact({ t }) {
  return (
    <section id="contact" className="section section-white">
      <div className="contact-content">
        <h2 className="section-title">
          {t.contact.title}
        </h2>
        <p className="contact-subtitle">
          {t.contact.subtitle}
        </p>
        <div className="contact-buttons">
          <a href="mailto:darioson@gmail.com" className="btn-primary">
            {t.contact.emailBtn}
          </a>
          <a 
            href="https://www.linkedin.com/in/elias-monzon/" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            {t.contact.linkedinBtn}
          </a>
          <a 
            href="https://github.com/Monzon-Elias" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            {t.contact.githubBtn}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

