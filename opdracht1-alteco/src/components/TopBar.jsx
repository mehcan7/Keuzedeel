import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import '../assets/TopBar.css'

function TopBar() {

  return (
    <div className="contact-bar">
      <div className="contact-info">
        <a href="#"><FaEnvelope /> info@alteco.nl</a>
        <a href="#"><FaPhoneAlt /> +31 6 00 000 000</a>
      </div>

      <div className="contact-right">
        <div className="social-links">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>

        <a href="#contact" className="quote-button">Get a quote »</a>
      </div>
    </div>
  )
}

export default TopBar
