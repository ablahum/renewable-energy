import './pricing.css'

const datas = [
  {
    id: 1,
    title: 'SINGLE',
    price: 50,
    desc: ['Ut sit quam faucibus et.', 'Auctor augue massa.', 'Porta sapien.'],
  },
  {
    id: 2,
    title: 'DOUBLE',
    price: 75,
    desc: ['Ut sit quam faucibus et.', 'Auctor augue massa.', 'Porta sapien.', 'Elementum sagittis in at.'],
  },
  {
    id: 3,
    title: 'TRIPLE',
    price: 100,
    desc: ['Ut sit quam faucibus et.', 'Auctor augue massa.', 'Porta sapien.', 'Elementum sagittis in at.', 'Sapien et arcu in.'],
  },
]

const Card = ({ title, price, desc }) => (
  <div className='card'>
    <div className='card__title'>
      <h3>{title}</h3>
    </div>

    <div className='card__price'>
      <p>Rp</p>

      <h4>{price}</h4>

      <p>juta</p>
    </div>

    <p>termasuk PPN</p>

    <div className='card__lists'>
      <ul>
        {desc.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
)

const Pricing = () => (
  <div
    className='pricing section container'
    id='pricing'
  >
    <div className='title'>
      <h2>Pricing</h2>
    </div>

    <div className='pricing__content'>
      {datas.map((data) => (
        <Card
          key={data.id}
          id={data.id}
          title={data.title}
          price={data.price}
          desc={data.desc}
        />
      ))}
    </div>
  </div>
)
export default Pricing
