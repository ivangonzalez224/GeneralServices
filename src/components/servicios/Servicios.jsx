import React from "react";
import softwareIcon from "../../assets/images/software-icon.png";
//import gpsIcon from "../../assets/images/gps-icon.png";
//import iotIcon from "../../assets/images/iot-icon.png";
import "../../assets/styles/Servicios.css";

const Servicios = () => {
  const serviciosList = [
    {
      title: "Desarrollo de Software",
      description: "Aplicaciones móviles, web y sistemas empresariales.",
      image: softwareIcon,
    },
    {
      title: "Sistemas GPS",
      description: "Monitoreo en tiempo real con dispositivos de rastreo.",
      image: 'gpsIcon',
    },
    {
      title: "IoT y Automatización",
      description: "Control y monitoreo de sensores, luces y más.",
      image: 'iotIcon',
    },
  ];

  return (
    <div className="servicios">
      <h2>Nuestros Servicios</h2>
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