import './partner.css';
import telkom from '../../assets/telkom.svg';
import telu from '../../assets/tel-u.svg';
import uin from '../../assets/uin.svg';

const Partner = () => (
  <div className="partner section">
    <div className="title">
      <h2>Partner Kami</h2>
    </div>

    <div className="partner__content">
      <img
        src={telkom}
        alt="telkom logo"
      />

      <img
        src={telu}
        alt="tel-u logo"
      />

      <img
        src={uin}
        alt="uin logo"
      />
    </div>
  </div>
);

export default Partner;
