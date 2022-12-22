import './header.css';
import header from '../../assets/header.svg';

const Header = () => (
  <div className="header container">
    <div className="header__left">
      <h1>
        Solusi Untuk <br />
        Keluarga Anda
      </h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis amet eu vulputate et eu. Elit pulvinar pulvinar feugiat neque morbi. Pretium at nam dui leo tortor morbi eget donec sit. Urna, sit amet lectus cum habitant.</p>

      <button type="button">PESAN SEKARANG</button>
    </div>

    <div className="header__right">
      <img
        src={header}
        alt="house"
      />
    </div>
  </div>
);

export default Header;
