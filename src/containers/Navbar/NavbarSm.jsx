import './navbar-sm.css'
import hamburger from '../../assets/hamburger.svg'
import close from '../../assets/close.svg'
import logo from '../../assets/logo.svg'

const NavbarSm = ({ trigger, setTrigger }) => (
  <div className='nav__sm'>
    <img
      src={hamburger}
      alt='hamburger menu'
      className='nav__sm-icon'
      onClick={() => setTrigger(true)}
    />

    {trigger && (
      <div className='nav__sm-overlay'>
        <img
          src={close}
          alt='close menu'
          className='nav__sm-close'
          onClick={() => setTrigger(false)}
        />

        <ul className='nav__sm-menu'>
          <li>
            <img
              src={logo}
              alt='logo'
            />
          </li>

          <li>
            <a
              href='#home'
              onClick={() => setTrigger(false)}
            >
              HOME
            </a>
          </li>

          <li>
            <a
              href='#about'
              onClick={() => setTrigger(false)}
            >
              ABOUT
            </a>
          </li>

          <li>
            <a
              href='#pricing'
              onClick={() => setTrigger(false)}
            >
              PRICING
            </a>
          </li>

          <li>
            <a
              href='#contact'
              onClick={() => setTrigger(false)}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    )}
  </div>
)

export default NavbarSm
