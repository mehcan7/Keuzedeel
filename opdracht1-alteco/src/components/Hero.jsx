import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../assets/Hero.css'
import heroPhoto1 from '../assets/hero.jpg'
import heroPhoto2 from '../assets/hero-2.jpg'
import heroPhoto3 from '../assets/hero-3.jpg'

const heroPhotos = [heroPhoto1, heroPhoto2, heroPhoto3]

function Hero() {
  const [photoIndex, setPhotoIndex] = useState(0)

  // Geen input, zet de index één terug en springt bij de eerste foto terug naar de laatste
  function showPreviousPhoto() {
    setPhotoIndex((photoIndex - 1 + heroPhotos.length) % heroPhotos.length)
  }

  // Geen input, zet de index één verder en springt bij de laatste foto terug naar de eerste
  function showNextPhoto() {
    setPhotoIndex((photoIndex + 1) % heroPhotos.length)
  }

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroPhotos[photoIndex]})` }}>
      <button type="button" className="hero-arrow hero-arrow-left" onClick={showPreviousPhoto} aria-label="Previous photo">
        <FaChevronLeft />
      </button>

      <div className="container hero-content">
        <h1>
          <span className="highlight">Business YOUR SATISFACTION</span>
        </h1>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

        <div className="hero-buttons">
          <a href="#services" className="btn btn-outline">Login</a>
          <a href="#contact" className="btn btn-outline">Register</a>
        </div>
      </div>

      <button type="button" className="hero-arrow hero-arrow-right" onClick={showNextPhoto} aria-label="Next photo">
        <FaChevronRight />
      </button>
    </section>
  )
}

export default Hero
