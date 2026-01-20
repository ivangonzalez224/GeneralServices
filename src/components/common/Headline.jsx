import React from "react";
import "../../assets/styles/Headline.css";
// Sugerencia: Una imagen que combine un dashboard de software con un dispositivo electrónico/GPS
import heroImage from "../../assets/images/tech-background.png"; 

const Headline = () => {
  return (
    <section className="headline" id="inicio">
      <div className="headline-wrapper">
        <div className="headline-container">
          {/* Columna de Texto */}
          <div className="headline-text">
            <span className="section-tag">LIDERANDO LA ERA DIGITAL</span>
            <h1>
              Soluciones Inteligentes en <span className="text-gradient">Hardware & Software</span>
            </h1>
            <p className="headline-description">
              Impulsamos tu empresa con sistemas de monitoreo GPS, desarrollo de software a medida y soluciones IoT de alta precisión.
            </p>
            <div className="headline-actions">
              <a href="#servicios" className="submit-btn">
                Explorar Soluciones <span className="btn-icon">→</span>
              </a>
              <a href="#contacto" className="btn-secondary">
                Hablemos de tu proyecto
              </a>
            </div>
          </div>

          {/* Columna de Imagen/Visual */}
          <div className="headline-visual">
            <div className="visual-wrapper">
              <img src={heroImage} alt="Innovación Tecnológica IoT y Software" className="main-hero-img" />
              {/* Elemento decorativo que flota para dar profundidad */}
              <div className="floating-card">
                <span className="card-icon">📡</span>
                <div>
                  <p className="card-label">Sistemas GPS</p>
                  <p className="card-status">Monitoreo en Tiempo Real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decoración de fondo coherente con Contacto.css */}
      <div className="headline-blob"></div>
    </section>
  );
};

export default Headline;