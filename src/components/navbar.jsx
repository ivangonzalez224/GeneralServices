import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import { GrContact, GrProjects } from "react-icons/gr";
import { TbInfoSquareRounded, TbHome } from "react-icons/tb";
import '../assets/styles/NavBar.css';
import myLogo from '../assets/images/iconRaw.png';

const NavBar = ({ sections }) => {
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
          <a href="#inicio">Musuq Technologies</a>
        </li>
      </ul>
      <ul id="nav_cartoon">
        <li className="nav_left">
          <a href="#inicio">Musuq Technologies</a>
        </li>
      </ul>
      <ul id="nav-rigth">
        <li>
          <a href="#inicio" onClick={() => setActiveLink('inicio')} className={activeLink === 'inicio' ? 'active' : ''}>Inicio</a>
        </li>
        <li>
          <a href="#inicio" onClick={() => setActiveLink('servicios')} className={activeLink === 'servicios' ? 'active' : ''}>Servicios</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setActiveLink('contacto')} className={activeLink === 'contacto' ? 'active' : ''}>Contacto</a>
        </li>
      </ul>
      <ul id="nav-ham">
        <li onClick={toggleDropdown}>
          <a><RxHamburgerMenu /></a>
        </li>
        
      </ul>
      <div className="dropdown-container" style={{ display: dropdownOpen ? 'flex' : 'none' }}>
        <ul className="dropdown-menu">
          <li id="dropdown-top">
            <img src={myLogoo}></img>
            <button onClick={toggleDropdown}><VscChromeClose /></button>
          </li>
          <li>
            <a href="#inicio" onClick={toggleDropdown}><TbHome className="drop-icon"/> Inicio</a>
          </li>
          <li>
            <a href="#servicios" onClick={toggleDropdown}><TbInfoSquareRounded className="drop-icon"/> Servicios</a>
          </li>
          <li>
            <a href="#contacto" onClick={toggleDropdown}><GrContact className="drop-icon"/> Contacto</a>
          </li>
          <li>
          </li>
        </ul>
      </div>  
    </nav>
  )
};

NavBar.propTypes = {
  sections: PropTypes.array,
};
export default NavBar;