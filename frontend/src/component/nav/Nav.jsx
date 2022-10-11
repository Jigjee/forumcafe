import React, { useState } from "react";
import logo from "../../asset/forumlogo1.jpeg";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import "./nav.css";

const Nav = () => {
  // const [activeNav, setActiveNav] = useState("");
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav>
        <a className="logo" href="#">
          <img src={logo} alt="" />
          <h4>Forum Cafe</h4>
        </a>
        <div className="nav-link">
          <ul className={click ? "menu active" : "menu"}>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#">Home</a>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#menu">Menu</a>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#activity">Activity</a>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#teams">Team</a>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? <RiCloseFill /> : <FaBars />}
      </div>
    </>
  );
};

export default Nav;
