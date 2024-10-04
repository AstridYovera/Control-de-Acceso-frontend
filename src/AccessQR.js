import React from 'react';
import './AccessQR.css'; // Asegúrate de crear este archivo CSS para los estilos
import qrImage from './img/qr.jpg'; // Asegúrate de tener la imagen correcta para cada sección

const AccessQR = () => {
  return (
    <div className="access-qr">

      {/* Sección 1: ¿Qué es el AccessQR? */}
      <section className="section">
        <h2>¿Qué es el AccessQR?</h2>
        <p>
          AccessQR es una innovadora solución que permite el registro y control de acceso a
          instituciones mediante el uso de códigos QR. Facilita el proceso de identificación
          de visitantes, mejorando la seguridad y la eficiencia en el ingreso.
        </p>
        <img src={qrImage} alt="¿Qué es el AccessQR?" className="section-image" />
      </section>

      {/* Sección 2: ¿Dónde descargarlo? */}
      <section className="section">
        <h2>¿Dónde descargarlo?</h2>
        <p>
          Puedes descargar AccessQR desde nuestra página oficial. Está disponible para
          dispositivos Android e iOS, garantizando que todos los usuarios tengan acceso
          a esta herramienta innovadora.
        </p>
        <img src={qrImage} alt="¿Dónde descargarlo?" className="section-image" />
      </section>

      {/* Sección 3: ¿Para qué sirve? */}
      <section className="section">
        <h2>¿Para qué sirve?</h2>
        <p>
          AccessQR sirve para simplificar y optimizar los procesos de registro. Con un simple
          escaneo del código QR, los usuarios pueden registrarse de manera rápida, lo que
          mejora la experiencia del visitante y aumenta la seguridad del lugar.
        </p>
        <img src={qrImage} alt="¿Para qué sirve?" className="section-image" />
      </section>

      {/* Sección 4: ¿Cuál es su historia? */}
      <section className="section">
        <h2>¿Cuál es su historia?</h2>
        <p>
          La historia de AccessQR comienza con la necesidad de modernizar los procesos de
          registro en instituciones. Desarrollado por un equipo de expertos en tecnología y
          educación, AccessQR ha evolucionado para convertirse en una herramienta esencial
          en la gestión de accesos.
        </p>
        <img src={qrImage} alt="¿Cuál es su historia?" className="section-image" />
      </section>
    </div>
  );
};

export default AccessQR;
