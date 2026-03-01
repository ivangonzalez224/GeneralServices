import { useRef } from 'react';
import Headline from '../components/common/Headline';
import Servicios from '../components/common/Servicios';
import Servicios from '../components/common/Diagnostico';
import Contacto from '../components/common/Contacto';
import Layout from '../components/layout/Layout';

const Inicio = () => {
  const headRef = useRef();
  const serviciosRef = useRef();
  const contactoRef = useRef();
  const sections = [headRef, serviciosRef, contactoRef];

  return (
    <Layout sections={sections}>
      <div className="main_home">
        <section ref={headRef} id="inicio">  
          <Headline />
        </section>
        <section ref={serviciosRef} id="servicios">
          <Servicios />
        </section>
        <section ref={serviciosRef} id="diagnostico">
          <Diagnostico />
        </section>
        <section ref={contactoRef} id="contacto">
          <Contacto />
        </section>
      </div>
    </Layout>
  );
};

export default Inicio;
