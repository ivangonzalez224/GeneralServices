import React from "react";
import "../../assets/styles/Headline.css";
import techBackground from "../../assets/images/tech-background.png";
const Headline = () => {
  return (
    <section className="headline">
      <div className="headline-overlay"></div>
      <div className="headline-content">
        <div className="headline-text">
          <h1>Innovación en Tecnología</h1>
          <p>Soluciones en software, GPS y automatización para tu empresa.</p>
          <a href="#servicios" className="btn-primary">Descubre más</a>
        </div>
      </div>
    </section>
  );
};

export default Headline;