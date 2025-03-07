import React from "react";
import "../../assets/styles/Servicios.css"; // Si tienes un archivo de estilos

const Servicios = () => {
  const serviciosList = [
    { title: "Desarrollo de Software", description: "Aplicaciones móviles, web y sistemas empresariales." },
    { title: "Sistemas GPS", description: "Monitoreo en tiempo real con dispositivos de rastreo." },
    { title: "IoT y Automatización", description: "Control y monitoreo de sensores, luces y más." },
  ];

  return (
    <div className="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="servicios-container">
        {serviciosList.map((servicio, index) => (
          <div key={index} className="servicio-card">
            <h3>{servicio.title}</h3>
            <p>{servicio.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;