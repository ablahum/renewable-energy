import './about.css'
import about from '../../assets/about.svg'

const About = () => (
  <div
    className='section container'
    id='about'
  >
    <div className='title'>
      <h2>
        Apa itu <i>Solar Panel</i>?
      </h2>
    </div>

    <div className='about__content'>
      <div className='about__content-img'>
        <img
          src={about}
          alt='house'
        />
      </div>

      <div className='about__content-desc'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, quis in volutpat quam mi sagittis augue fringilla justo. Quam sit consectetur enim facilisis nulla.</p>
      </div>
    </div>
  </div>
)

export default About
