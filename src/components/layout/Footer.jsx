import { BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { CONTACT_EMAIL, CONTACT_PHONE, COMPANY_NAME } from "../../config/constants";
import '../../assets/styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-grid">
          {/* Columna 1: Branding */}
          <div className="footer-column branding">
            <h3 className="footer-logo">{COMPANY_NAME}</h3>
            <p className="footer-description">
              Transformamos procesos empresariales mediante automatización con inteligencia artificial,
              integraciones estratégicas y desarrollo de software a medida.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/musuq-technologies" className="social-link" aria-label="LinkedIn"><BsLinkedin /></a>
              <a href="#" className="social-link" aria-label="Instagram"><BsInstagram /></a>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div className="footer-column">
            <h4 className="column-title">Navegación</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto Directo */}
          <div className="footer-column">
            <h4 className="column-title">Contacto</h4>
            <div className="footer-contact-info">
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact-item">
                <MdEmail className="contact-icon" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <a href={`https://wa.me/51998438698`} className="contact-item">
                <BsWhatsapp className="contact-icon" />
                <span>{CONTACT_PHONE}</span>
              </a>
              <div className="contact-item">
                <MdLocationOn className="contact-icon" />
                <span>Lima, Perú</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {COMPANY_NAME}. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <a href="/privacidad" target="_blank" rel="noopener noreferrer">Privacidad</a>
            <span className="separator">|</span>
            <a href="/terminos" target="_blank" rel="noopener noreferrer">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;