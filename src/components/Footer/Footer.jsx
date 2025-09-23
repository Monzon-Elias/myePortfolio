import './Footer.css'

function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{t.footer.text}</p>
      </div>
    </footer>
  )
}

export default Footer
