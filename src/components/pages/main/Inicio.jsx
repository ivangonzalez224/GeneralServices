import { useRef } from 'react';
import Headline from '../../head/Headline';
import Servicios from '../../servicios/Servicios';
import Contacto from '../../contacto/Contacto';
import NavBar from '../../navbar';
//import '../../../assets/styles/NavBar.css';

const Inicio = () => {
  const headRef =  useRef();
  const serviciosRef =  useRef();
  const contactoRef =  useRef();
  const sections = [headRef, serviciosRef, contactoRef];

  return (
    <div className="main_home">
      <NavBar sections={sections} />
      <section ref={headRef} id="inicior">  
        <Headline />
      </section>
      <section ref={serviciosRef} id="serviciosr">
        <Servicios />
      </section>
      <section ref={contactoRef} id="contactor">
        <Contacto/>
      </section>
    </div>
  )
};

export default Inicio;