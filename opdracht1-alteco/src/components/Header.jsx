import '../assets/Header.css'

function Header() {

  return (
    <header className="header">
      <div className="container top-row">
        <a href="/" className="logo">Alteco</a>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="quote-button">Get a quote</a>
      </div>
    </header>
  )
}

export default Header
