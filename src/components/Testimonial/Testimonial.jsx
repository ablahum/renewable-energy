import './testimonial.css';
import people1 from '../../assets/people1.svg';
import arrow from '../../assets/arrow.svg';

const Testimonial = () => (
  <div className="testimonial section container">
    <div className="title">
      <h2>Apa yang mereka katakan?</h2>
    </div>

    <div className="testimonial__content">
      <div className="arrow">
        <img
          src={arrow}
          alt="arrow"
        />
      </div>

      <div>
        <img
          src={people1}
          alt="house"
        />
      </div>

      <div className="testimonial__words">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sociis consectetur eu egestas at tellus vulputate. Amet massa interdum id neque ac. Natoque euismod accumsan tincidunt proin ullamcorper diam fringilla rhoncus massa. Arcu
          cursus mauris turpis lorem mattis lorem aliquam. Malesuada et turpis nunc, enim tellus eros.
        </p>

        <h3>Sarah Olivia</h3>

        <p>Founder of The Equals</p>
      </div>
      <div className="arrow">
        <img
          src={arrow}
          alt="arrow"
        />
      </div>
    </div>
  </div>
);

export default Testimonial;
