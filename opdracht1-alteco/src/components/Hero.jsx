import '../assets/Hero.css'
import heroPhoto from '../assets/hero.jpg'

function Hero() {

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${heroPhoto})`
  }

  return (
    <section className="hero" style={heroStyle}>
      <div className="container hero-content">
        <h1>
          <span className="highlight">Business YOUR SATISFACTION</span>
        </h1>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt voluptatem ipsa ut ab, dicta, amet eum veniam, molestiae optio vero velit pariatur blanditiis maxime. Iure veniam doloremque nulla magni quis?</p>

        <div className="hero-buttons">
          <a href="#services" className="btn btn-outline">Login</a>
          <a href="#contact" className="btn btn-outline">Register</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
