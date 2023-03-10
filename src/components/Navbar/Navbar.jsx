import { useState } from 'react'

import './navbar.css'
import logo from '../../assets/logo.svg'
import NavbarSm from './NavbarSm'

const Navbar = () => {
  const [trigger, setTrigger] = useState(false)

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img
          src={logo}
          alt='logo'
        />
      </div>

      <div className='navbar__menu'>
        <ul>
          <li className='active'>
            <a href='#home'>HOME</a>
          </li>
          <li>
            <a href='#about'>ABOUT</a>
          </li>
          <li>
            <a href='#pricing'>PRICING</a>
          </li>
          <li>
            <a href='#contact'>CONTACT</a>
          </li>
        </ul>
      </div>

      <NavbarSm
        trigger={trigger}
        setTrigger={setTrigger}
      />
    </div>
  )
}

export default Navbar
