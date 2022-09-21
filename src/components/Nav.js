import React from "react";
import { Link, Navlink } from "react-router-dom";


const Nav = () => {
    return(
        <header className="styles.container-fluid">
            <nav className="nav-bar container">
        <a> Evrax</a>
        <ul className="nav-list">
          <li><Navlink to="/"> Home</Navlink></li>
          <li><Navlink to="/"> About us</Navlink></li>
          <li><Navlink to="/"> Contact</Navlink></li>
        </ul>
      </nav>
      <div class="banner"></div>
        </header>
    )
}
 export default Nav;