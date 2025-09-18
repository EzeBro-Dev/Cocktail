import '../styles/navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router';
import { useState } from 'react';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="navbar">
        <h1>
          Cocktail <span>DB</span>
        </h1>
        <ul className="nav-links">
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
        <div className="menubar" onClick={toggleSidebar}>
          <GiHamburgerMenu className="menu" />
        </div>
      </div>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <NavLink to="/" end onClick={toggleSidebar}>
          Home
        </NavLink>
        <NavLink to="/about" end onClick={toggleSidebar}>
          About
        </NavLink>
        <NavLink to="/training" end onClick={toggleSidebar}>
          Training
        </NavLink>
      </div>

      {
        sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>
      }
    </>
  );
};

export default Navbar;