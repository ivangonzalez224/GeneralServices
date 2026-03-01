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
            <span className="section-tag">AUTOMATIZACIÓN INTELIGENTE PARA EMPRESAS</span>
            <h1>
              Automatizamos <span className="text-gradient">Ventas y Procesos</span> con Inteligencia Artificial
            </h1>
            <p className="headline-description">
              Diseñamos sistemas de automatización con IA, aplicaciones empresariales e integraciones tecnológicas que optimizan procesos, capturan más clientes y aumentan la productividad de tu empresa.
            </p>
            <div className="headline-actions">
              <a href="#diagnostico" className="submit-btn">
                Solicitar Diagnóstico Gratuito <span className="btn-icon">→</span>
              </a>
              <a href="#servicios" className="btn-secondary">
                Agendar Consultoría Estratégica
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