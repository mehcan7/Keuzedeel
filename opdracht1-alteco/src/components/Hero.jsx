import '../assets/Hero.css'

function Hero() {

  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>
          <span className="highlight">Renovation</span> done right, every time
        </h1>

        <p>We help homeowners and businesses renovate with quality craftsmanship and honest pricing.</p>

        <div className="hero-buttons">
          <a href="#services" className="btn btn-primary">Our Services</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
