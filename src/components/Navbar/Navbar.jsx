import './navbar.css';
import logo from '../../assets/logo.svg';
import hamburger from '../../assets/hamburger.svg';

const Navbar = () => (
  <div className="navbar container">
    <div className="navbar__logo">
      <img
        src={logo}
        alt="logo"
      />
    </div>

    <div className="navbar__menu">
      <ul>
        <li className="active">
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#pricing">PRICING</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>

    <div className="navbar__menu-res">
      <div className="res__menu-icon">
        <img
          src={hamburger}
          alt="hamburger menu"
        />
      </div>

      <ul className="res__menu">
        <li className="active">
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#pricing">PRICING</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
