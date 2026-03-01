import React, { useState } from "react";
import "../../assets/styles/Diagnostico.css";

const Diagnostico = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    whatsapp: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://veganicapp.com/wp-json/musuq/v1/lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setSubmitted(true);
      setFormData({
        nombre: "",
        empresa: "",
        whatsapp: "",
        mensaje: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Hubo un problema al enviar el formulario. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="diagnostico" className="diagnostico-section">
      <div className="diagnostico-container">
        <div className="diagnostico-content">
          <span className="section-tag">
            DIAGNÓSTICO ESTRATÉGICO GRATUITO
          </span>

          <h2>
            Descubre Cómo <span className="text-gradient">Automatizar y Escalar</span> tu Empresa
          </h2>

          <p className="diagnostico-description">
            Analizamos tus procesos actuales y detectamos oportunidades de automatización con Inteligencia Artificial para ayudarte a vender más y optimizar tu operación.
          </p>

          <ul className="diagnostico-benefits">
            <li>✔ Analizamos tu proceso comercial actual</li>
            <li>✔ Identificamos pérdidas de clientes</li>
            <li>✔ Proponemos un plan de automatización personalizado</li>
          </ul>
        </div>

        <div className="diagnostico-form-wrapper">
          <form className="diagnostico-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="form-message success">
                ✓ Diagnóstico solicitado correctamente. Te contactaremos pronto.
              </div>
            )}

            {error && (
              <div className="form-message error">
                {error}
              </div>
            )}

            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={formData.nombre}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              value={formData.empresa}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
            />

            <textarea
              name="mensaje"
              placeholder="¿Qué proceso deseas automatizar o mejorar?"
              rows="4"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Enviando..." : "Solicitar Diagnóstico Gratuito →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Diagnostico;