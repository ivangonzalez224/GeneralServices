import React from "react";
import softwareIcon from "../../assets/images/software-icon.png";
import automationIcon from "../../assets/images/iot-service.png"; // puedes reemplazar luego
import integrationIcon from "../../assets/images/gps_img.png"; // temporal hasta cambiar ícono
import "../../assets/styles/Servicios.css";

const Servicios = () => {
  const serviciosList = [
    {
      title: "Automatización de Ventas con IA",
      description:
        "Bots inteligentes, asistentes automatizados y sistemas que capturan, califican y convierten clientes 24/7.",
      image: automationIcon,
    },
    {
      title: "Desarrollo de Aplicaciones Empresariales",
      description:
        "Apps web y móviles diseñadas para optimizar procesos internos, aumentar productividad y escalar operaciones.",
      image: softwareIcon,
    },
    {
      title: "Integraciones y Sistemas Inteligentes",
      description:
        "Conectamos CRM, WhatsApp, APIs y plataformas para crear ecosistemas digitales eficientes y automatizados.",
      image: integrationIcon,
    },
  ];

  return (
    <div className="servicios" id="servicios">
      <h2>Nuestras Soluciones</h2>
      <div className="servicios-container">
        {serviciosList.map((servicio, index) => (
          <div key={index} className="servicio-card">
            <img src={servicio.image} alt={servicio.title} />
            <h3>{servicio.title}</h3>
            <p>{servicio.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;