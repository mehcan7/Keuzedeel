import { FaWrench, FaGift } from 'react-icons/fa'
import { FaGlassWater, FaHouse } from 'react-icons/fa6'
import '../assets/Services.css'

function Services() {

  return (
    <section className="services">
      <div className="services-heading">
        <p className="eyebrow">Elaborated code and creative design</p>
        <h2>Our services</h2>
        <div className="divider">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className="services-intro">Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>

      <div className="service-list">
        <div className="service-item">
          <div className="service-circle">
            <FaGlassWater />
          </div>
          <p className="service-label">Our expertise</p>
          <h3>Marketing Agency</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>

        <div className="service-item">
          <div className="service-circle">
            <FaWrench />
          </div>
          <p className="service-label">Our expertise</p>
          <h3>Building Services</h3>
          <p>Non numquam eius modi tempora incidu nt ut labore et dolore magnam aliquam.</p>
        </div>

        <div className="service-item">
          <div className="service-circle">
            <FaGift />
          </div>
          <p className="service-label">Our expertise</p>
          <h3>Online Education</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>

        <div className="service-item">
          <div className="service-circle">
            <FaHouse />
          </div>
          <p className="service-label">Our expertise</p>
          <h3>Fashion Design</h3>
          <p>Non numquam eius modi tempora incidu nt ut labore et dolore magnam aliquam.</p>
        </div>
      </div>
    </section>
  )
}

export default Services
