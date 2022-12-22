import './pricing.css';

const datas = [
  {
    id: 1,
    title: 'SINGLE',
    price: 50,
  },
  {
    id: 2,
    title: 'DOUBLE',
    price: 75,
  },
  {
    id: 3,
    title: 'TRIPLE',
    price: 100,
  },
];

const Card = ({ title, price }) => (
  <div className="card">
    <div className="card__title">
      <h3>{title}</h3>
    </div>

    <div className="card__price">
      <p>Rp</p>

      <h3>{price}</h3>

      <p>juta</p>
    </div>

    <p>termasuk PPN</p>

    <div className="card__lists">
      <ul>
        <li>asd</li>
        <li>asd</li>
        <li>asd</li>
      </ul>
    </div>
  </div>
);

const Pricing = () => (
  <div className="pricing section container">
    <div className="title">
      <h2>Pricing</h2>
    </div>

    <div className="pricing__content">
      {datas.map((data) => (
        <Card
          id={data.id}
          title={data.title}
          price={data.price}
        />
      ))}
    </div>
  </div>
);
export default Pricing;
