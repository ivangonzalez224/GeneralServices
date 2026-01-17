import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import { GrContact, GrProjects, GrClose } from "react-icons/gr";
import { TbInfoSquareRounded, TbHome } from "react-icons/tb";
import '../../assets/styles/NavBar.css';
import myLogo from '../../assets/images/iconNavDest.png';

const Navbar = ({ sections }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id.slice(0, -1));
        }
      });
    });

    sections.forEach((section) => {
      if (section.current !== undefined) {
        observer.observe(section.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);
  return (
    <nav>
      <ul id="nav_name">
        <li className="nav_left">
          <a href="#inicio"><img className="logoTop" src={myLogo}></img></a>
        </li>
      </ul>
      <ul id="nav_cartoon">
        <li className="nav_left">
          <a href="#inicio"><img className="logoTop" src={myLogo}></img></a>
        </li>
      </ul>
      <ul id="nav-rigth">
        <li>
          <a href="#inicio"><TbHome/></a>
        </li>
        <li>
          <a href="#servicios"><GrProjects/></a>
        </li>
        <li>
          <a href="#contacto"><GrContact/></a>
        </li>
        <li>
          <a href="#info"><TbInfoSquareRounded/></a>
        </li>
      </ul>
      <div className="nav-mobile">
        <button className="hamburger-btn" onClick={toggleDropdown}>
          {dropdownOpen ? <VscChromeClose /> : <RxHamburgerMenu />}
        </button>
        {dropdownOpen && (
          <ul className="dropdown-menu">
            <li>
              <a href="#inicio"><TbHome/>Inicio</a>
            </li>
            <li>
              <a href="#servicios"><GrProjects/>Servicios</a>
            </li>
            <li>
              <a href="#contacto"><GrContact/>Contacto</a>
            </li>
            <li>
              <a href="#info"><TbInfoSquareRounded/>Info</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object),
};

export default Navbar;
