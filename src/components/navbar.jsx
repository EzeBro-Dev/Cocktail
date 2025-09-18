import '../styles/navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h1>
          Cocktail <span>DB</span>
        </h1>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" end>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/training" end>
              Training
            </NavLink>
          </li>
        </ul>
        <div className='menubar'>
          <GiHamburgerMenu className='menu'/>
        </div>
      </div>
    </>
  )
}

export default Navbar