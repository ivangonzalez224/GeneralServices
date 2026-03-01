import React from "react";
import "../../assets/styles/Diagnostico.css";

const Diagnostico = () => {
  return (
    <section id="diagnostico" className="diagnostico-section">
      <div className="container diagnostico-container">
        
        <div className="diagnostico-content">
          <span className="section-tag">
            DIAGNÓSTICO ESTRATÉGICO GRATUITO
          </span>

          <h2>
            Descubre Cómo <span className="text-gradient">Automatizar y Escalar</span> tu Empresa
          </h2>

          <p className="diagnostico-description">
            Analizamos tus procesos actuales y detectamos oportunidades de automatización con Inteligencia Artificial para ayudarte a vender más, reducir costos y optimizar tu operación.
          </p>

          <ul className="diagnostico-benefits">
            <li>✔ Analizamos tu proceso comercial actual</li>
            <li>✔ Identificamos pérdidas de clientes y cuellos de botella</li>
            <li>✔ Proponemos un plan de automatización personalizado</li>
          </ul>
        </div>

        <div className="diagnostico-form-wrapper">
          <form className="diagnostico-form">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              required
            />

            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              required
            />

            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp"
              required
            />

            <textarea
              name="automatizacion"
              placeholder="¿Qué proceso deseas automatizar o mejorar?"
              rows="4"
              required
            />

            <button type="submit" className="submit-btn">
              Solicitar Diagnóstico Gratuito →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Diagnostico;