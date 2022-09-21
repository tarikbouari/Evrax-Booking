import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => (
  <header className="styles.container-fluid">
    <nav className="nav-bar container">
      <span><Link to="/"> Evrax</Link></span>
      <ul className="nav-list">
        <li><NavLink to="/"> Home</NavLink></li>
        <li><NavLink to="/"> About us</NavLink></li>
        <li><NavLink to="/"> Contact</NavLink></li>
      </ul>
    </nav>
    <div className="banner" />
  </header>
);
export default Nav;
