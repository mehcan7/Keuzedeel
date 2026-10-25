import { GiHorseHead, GiBearHead } from 'react-icons/gi'
import '../assets/Offers.css'
import offersPhoto from '../assets/offers.jpg'

function Offers() {

  return (
    <section className="offers">
      <div className="offers-photo">
        <img src={offersPhoto} alt="Two colleagues" />
      </div>

      <div className="offers-text">
        <p className="eyebrow">elaborated code and creative design</p>
        <h2>What we offer</h2>

        <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec tellus a odio tincidunt auctor.</blockquote>

        <div className="offer-list">
          <div className="offer-item">
            <GiHorseHead className="offer-icon" />
            <h3>Clean Modern Code</h3>
            <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna.</p>
            <a href="#">Read more &rarr;</a>
          </div>

          <div className="offer-item">
            <GiBearHead className="offer-icon" />
            <h3>Design To Brag About</h3>
            <p>Quisque lobortis nisl ut sem vehicula, at fermentum neque tempor.</p>
            <a href="#">Read more &rarr;</a>
          </div>
        </div>

        <a href="#services" className="offers-button">View all offers &rarr;</a>
      </div>
    </section>
  )
}

export default Offers
