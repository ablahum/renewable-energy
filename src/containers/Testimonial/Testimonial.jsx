import './testimonial.css'
import people1 from '../../assets/people1.svg'
import arrow from '../../assets/arrow.svg'

const datas = [
  {
    id: 1,
    name: 'Sarah Olivia',
    image: people1,
    as: 'Founder of The Equals',
    words:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sociis consectetur eu egestas at tellus vulputate. Amet massa interdum id neque ac. Natoque euismod accumsan tincidunt proin ullamcorper diam fringilla rhoncus massa. Arcu cursus mauris turpis lorem mattis lorem aliquam. Malesuada et turpis nunc, enim tellus eros.',
  },
]

const Testimonial = () => (
  <div className='testimonial section container'>
    <div className='title'>
      <h2>Apa yang mereka katakan?</h2>
    </div>

    <div className='testimonial__content'>
      <div className='arrow left'>
        <img
          src={arrow}
          alt='arrow'
        />
      </div>

      {datas.map((data) => (
        <div
          className='testimonial__people'
          key={data.id}
        >
          <div className='testimonial__img'>
            <img
              src={data.image}
              alt='people'
            />
          </div>

          <div className='testimonial__words'>
            <p>{data.words}</p>

            <h3 className='testimonial__name'>{data.name}</h3>

            <p>{data.as}</p>
          </div>
        </div>
      ))}

      <div className='arrow right'>
        <img
          src={arrow}
          alt='arrow'
        />
      </div>
    </div>
  </div>
)

export default Testimonial
