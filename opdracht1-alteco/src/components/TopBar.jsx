import '../assets/TopBar.css'

function TopBar() {

  return (
    <div className="contact-bar">
      <div className="contact-info">
        <a href="#">info@alteco.nl</a>
        <a href="#">+31 6 00 000 000</a>
      </div>

      <div className="contact-right">
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>

        <a href="#contact" className="quote-button">Get a quote</a>
      </div>
    </div>
  )
}

export default TopBar
