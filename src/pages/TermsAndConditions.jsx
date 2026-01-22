import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { COMPANY_NAME, CONTACT_EMAIL } from "../config/constants";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="legal-page-container" style={{ padding: '120px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <span className="section-tag">LEGAL</span>
        <h1 className="section-title" style={{ textAlign: 'left', fontSize: '2.5rem' }}>Términos y Condiciones</h1>
        <p className="info-description" style={{ marginBottom: '40px' }}>Última actualización: Enero 2026</p>

        <div className="legal-content" style={{ color: '#475569', lineHeight: '1.8' }}>
          
          <section style={{ marginBottom: '32px' }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '12px' }}>1. Aceptación de Términos</h3>
            <p>
              Al acceder y utilizar los servicios de <strong>{COMPANY_NAME}</strong>, usted acepta cumplir con estos términos y condiciones. Nuestros servicios incluyen el desarrollo de software, la venta e instalación de componentes electrónicos y sistemas de monitoreo por GPS.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '12px' }}>2. Propiedad Intelectual</h3>
            <p>
              Todo el software desarrollado, códigos fuente, diseños electrónicos y marcas comerciales son propiedad exclusiva de <strong>{COMPANY_NAME}</strong>, a menos que se especifique lo contrario en un contrato particular. Queda prohibida la reproducción o ingeniería inversa sin autorización expresa.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '12px' }}>3. Uso de Sistemas GPS y Monitoreo</h3>
            <p>
              El usuario es responsable del uso legal de los sistemas de monitoreo. <strong>{COMPANY_NAME}</strong> no se hace responsable por el mal uso de la tecnología para fines que vulneren la privacidad de terceros o incumplan las leyes locales vigentes.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '12px' }}>4. Garantía de Hardware</h3>
            <p>
              Los componentes electrónicos y dispositivos GPS cuentan con una garantía limitada por defectos de fábrica. La garantía queda anulada si los equipos presentan daños por manipulación externa no autorizada o condiciones eléctricas inadecuadas.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '12px' }}>5. Limitación de Responsabilidad</h3>
            <p>
              <strong>{COMPANY_NAME}</strong> trabaja para garantizar la máxima disponibilidad de sus plataformas, sin embargo, no se hace responsable por interrupciones debidas a fallas en redes de telecomunicaciones o servicios de terceros ajenos a nuestra infraestructura.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '12px' }}>6. Contacto</h3>
            <p>
              Para cualquier consulta sobre estos términos, puede contactarnos a través de <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#2563eb', fontWeight: '600' }}>{CONTACT_EMAIL}</a>.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;