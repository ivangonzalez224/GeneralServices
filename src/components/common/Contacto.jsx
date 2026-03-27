import React, { useState } from "react";
import { CONTACT_EMAIL, CONTACT_PHONE, COMPANY_NAME } from "../../config/constants";
import "../../assets/styles/Contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Validación de email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validar formulario
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Simular envío (integrar API en producción)
    setTimeout(() => {
      console.log("Datos enviados:", formData);
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="contacto" id="contacto">
      <div className="contacto-wrapper">
        {/* Encabezado */}
        <div className="contacto-header">
          <span className="section-tag">CONTACTO</span>
          <h2 className="section-title">Ponte en Contacto Hoy</h2>
          <p className="section-subtitle">
            Nos gustaría saber de ti. Envíanos un mensaje y nos pondremos en contacto pronto.
          </p>
        </div>

        <div className="contacto-container">
          {/* Información de Contacto */}
          <div className="contacto-info">
            <div className="info-card">
              <div className="info-header">
                <div className="info-icon-wrapper">
                  <span className="info-icon">✉</span>
                </div>
                <h3>Correo Electrónico</h3>
              </div>
              <a href={`mailto:${CONTACT_EMAIL}`} className="info-link">
                {CONTACT_EMAIL}
              </a>
              <p className="info-description">
                Responderemos a tu email dentro de 24 horas
              </p>
            </div>

            <div className="info-card">
              <div className="info-header">
                <div className="info-icon-wrapper">
                  <span className="info-icon">📱</span>
                </div>
                <h3>WhatsApp</h3>
              </div>
              <a
                href={`https://wa.me/51998438698`}
                target="_blank"
                rel="noreferrer"
                className="info-link"
              >
                {CONTACT_PHONE}
              </a>
              <p className="info-description">
                Contacto directo y disponibilidad inmediata
              </p>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="contacto-form" noValidate>
            {submitted && (
              <div className="form-message success" role="alert">
                <span className="success-icon">✓</span>
                <div>
                  <p className="message-title">¡Mensaje enviado correctamente!</p>
                  <p className="message-text">
                    Nos pondremos en contacto pronto.
                  </p>
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Juan García"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && (
                <span id="name-error" className="error-message">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@empresa.com"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && (
                <span id="email-error" className="error-message">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                placeholder="Cuéntanos tu proyecto, necesidades o consulta..."
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={errors.message ? "input-error" : ""}
              />
              {errors.message && (
                <span id="message-error" className="error-message">
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Mensaje
                  <span className="btn-icon">→</span>
                </>
              )}
            </button>

            <p className="form-note">
              Los 3 campos son obligatorios
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
