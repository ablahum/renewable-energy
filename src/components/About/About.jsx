import './about.css';
import about from '../../assets/about.svg';

const About = () => (
  <div className="about section container">
    <div className="title">
      <h2>
        Apa itu <i>Solar Panel</i>?
      </h2>
    </div>

    <div className="about__content">
      <div>
        <img
          src={about}
          alt="house"
        />
      </div>

      <div>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, quis in volutpat quam mi sagittis augue fringilla justo. Quam sit consectetur enim facilisis nulla.</h3>
      </div>
    </div>
  </div>
);

export default About;
