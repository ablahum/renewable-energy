import './partner.css';
import telkom from '../../assets/telkom.svg';
import telu from '../../assets/tel-u.svg';
import uin from '../../assets/uin.svg';

const Partner = () => (
  <div className="partner section container">
    <div className="title">
      <h2>Partner Kami</h2>
    </div>

    <div className="partner__content">
      <img
        src={telkom}
        alt="telkom"
      />

      <img
        src={telu}
        alt="telu"
      />

      <img
        src={uin}
        alt="uin"
      />
    </div>
  </div>
);

export default Partner;
