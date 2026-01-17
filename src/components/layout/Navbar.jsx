import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import { NAV_LINKS, LOGO_ALT } from '../../config/navigation';
import '../../assets/styles/NavBar.css';
import myLogo from '../../assets/images/iconNavDest.png';

/**
 * Navbar Component
 * Barra de navegación responsive con soporte para móvil y escritorio
 * 
 * @param {Object} props - Props del componente
 * @param {Array<Object>} props.sections - Array de referencias a secciones para el observer
 * @returns {JSX.Element} Navbar component
 */
const Navbar = ({ sections }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('inicio');

  /**
   * Toggle del dropdown menu en móvil
   */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  /**
   * Cierra el dropdown cuando se hace click en un link
   */
  const handleNavClick = () => {
    setDropdownOpen(false);
  };

  /**
   * Observer para detectar la sección activa al hacer scroll
   */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, {
      threshold: 0.5,
    });

    sections.forEach((section) => {
      if (section?.current) {
        observer.observe(section.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  /**
   * Renderiza un link de navegación
   */
  const renderNavLink = (link, isMobile = false) => {
    const Icon = link.icon;
    const isActive = activeLink === link.id;
    
    return (
      <li key={link.id}>
        <a 
          href={link.href}
          className={isActive ? 'active' : ''}
          onClick={isMobile ? handleNavClick : undefined}
          aria-label={link.label}
        >
          <Icon aria-hidden="true" />
          {isMobile && <span>{link.label}</span>}
        </a>
      </li>
    );
  };

  return (
    <nav>
      {/* Logo - Visible en desktop y móvil */}
      <a href="#inicio" className="nav-logo">
        <img 
          className="logoTop" 
          src={myLogo} 
          alt={LOGO_ALT}
        />
      </a>

      {/* Navigation Links - Desktop */}
      <ul id="nav-desktop" className="nav-links">
        {NAV_LINKS.filter(link => link.id !== 'contacto').map((link) => renderNavLink(link, false))}
        {NAV_LINKS.filter(link => link.id === 'contacto').map((link) => renderNavLink(link, false))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="nav-mobile">
        <button 
          className="hamburger-btn" 
          onClick={toggleDropdown}
          aria-label="Toggle navigation menu"
          aria-expanded={dropdownOpen}
        >
          {dropdownOpen ? <VscChromeClose /> : <RxHamburgerMenu />}
        </button>

        {/* Mobile Dropdown Menu */}
        {dropdownOpen && (
          <ul className="dropdown-menu">
            {NAV_LINKS.map((link) => renderNavLink(link, true))}
          </ul>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    current: PropTypes.oneOfType([
      PropTypes.instanceOf(HTMLElement),
      PropTypes.object,
    ]),
  })),
};

Navbar.defaultProps = {
  sections: [],
};

export default Navbar;
