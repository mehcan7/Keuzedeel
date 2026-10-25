import { useState, useEffect } from 'react'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'
import '../assets/Header.css'
import altecoLogo from '../assets/Alteco.png'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Luistert naar scrollen, geen input, zet isScrolled op true voorbij 50px zodat de header kleiner wordt
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Geen input, wisselt het mobiele menu tussen open en dicht
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={isScrolled ? 'header header-scrolled' : 'header'}>
      <div className="top-row">
        <a href="/" className="logo">
          <img src={altecoLogo} alt="Alteco" className="logo-image" />
        </a>

        <nav className={isMenuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#home" className="nav-active" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About us</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#pages" onClick={toggleMenu}>Pages</a>
          <a href="#shop" onClick={toggleMenu}>Shop</a>
          <a href="#blog" onClick={toggleMenu}>Blog</a>
          <a href="#contact" onClick={toggleMenu}>Contact us</a>
        </nav>

        <div className="header-buttons">
          <button type="button" className="search-button" aria-label="Search">
            <FaSearch />
          </button>

          <button type="button" className="burger-button" onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
