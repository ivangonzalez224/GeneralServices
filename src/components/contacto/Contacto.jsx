import React, { useState } from "react";
import "../../assets/styles/Contacto.css";
//import contactoImage from "../../assets/images/contacto-image.png";

const Contacto = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Mensaje enviado correctamente.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contacto">
      <h2>Contacto</h2>
      <div className="contacto-container">
        {/* Información de contacto */}
        <div className="contacto-info">
          <p>¿Tienes alguna pregunta o quieres trabajar con nosotros? ¡Contáctanos!</p>
          <p>Correo: <a href="mailto:contacto@musuqtech.com">contacto@musuqtech.com</a></p>
          <p>WhatsApp: +51 998438698</p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Tu mensaje" value={formData.message} onChange={handleChange} required />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;