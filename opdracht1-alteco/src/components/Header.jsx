import '../assets/Header.css'

function Header() {

  return (
    <header className="header">
      <div className="top-row">
        <a href="/" className="logo">Roodwerk</a>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#services">Services</a>
          <a href="#pages">Pages</a>
          <a href="#shop">Shop</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact us</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
