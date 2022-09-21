import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => (
  <header className="styles.container-fluid">
    <nav className="nav-bar container">
      <span><Link to="/"> Evrax</Link></span>
      <ul className="nav-list">
        <li><NavLink to="/"> Home</NavLink></li>
        <li><NavLink to="About"> About us</NavLink></li>
        <li><NavLink to="Contact"> Contact</NavLink></li>
      </ul>
    </nav>
    <div className="banner">
      <div className='banner-text'>
      <h1> Discover a beautiful Place with us</h1>
       <p> Non officia ullamco sit in adipisicing ullamco mollit anim nisi dolor.  ullamco sit in adipisicing ullamco mollit anim nisi dolor</p>
      </div>
       
    </div>
  </header>
);
export default Nav;
