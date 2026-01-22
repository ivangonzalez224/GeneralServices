import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { COMPANY_NAME, CONTACT_EMAIL } from "../config/constants";

const PrivacyPolicy = () => {
  // Asegura que la página cargue desde arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="legal-page-container" style={{ padding: '120px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <span className="section-tag">LEGAL</span>
        <h1 className="section-title" style={{ textAlign: 'left', fontSize: '2.5rem' }}>Política de Privacidad</h1>
        <p className="info-description" style={{ marginBottom: '40px' }}>Última actualización: Enero 2026</p>

        <div className="legal-content" style={{ color: '#475569', lineHeight: '1.8' }}>
          <section style={{ marginBottom: '32px' }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '12px' }}>1. Información que Recopilamos</h3>
            <p>
              En <strong>{COMPANY_NAME}</strong>, recopilamos información personal necesaria para la prestación de nuestros servicios de desarrollo de software y sistemas GPS, tales como: nombre, correo electrónico, número de teléfono y datos de geolocalización vinculados a los dispositivos de monitoreo contratados.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '12px' }}>2. Uso de los Datos</h3>
            <p>Los datos recopilados se utilizan exclusivamente para:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Proveer y gestionar los servicios de monitoreo y automatización.</li>
              <li>Brindar soporte técnico especializado.</li>
              <li>Enviar actualizaciones críticas de seguridad y funcionalidad de software.</li>
              <li>Mejorar la experiencia de usuario en nuestras plataformas IoT.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '12px' }}>3. Protección de la Información</h3>
            <p>
              Implementamos protocolos de cifrado SSL y medidas de seguridad electrónica de nivel empresarial para proteger sus datos contra acceso no autorizado, alteración o divulgación. No vendemos ni compartimos su información personal con terceros con fines comerciales.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '12px' }}>4. Sus Derechos</h3>
            <p>
              Usted tiene derecho a acceder, rectificar o solicitar la eliminación de sus datos personales de nuestros servidores en cualquier momento enviando una solicitud a <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#2563eb', fontWeight: '600' }}>{CONTACT_EMAIL}</a>.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;