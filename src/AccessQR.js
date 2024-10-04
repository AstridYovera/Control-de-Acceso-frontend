import React from 'react';
import './AccessQR.css'; // Asegúrate de crear este archivo CSS para los estilos
import qrImage from './img/qr.jpg'; // Asegúrate de tener la imagen correcta para cada sección
import aqr_1 from './img/aqr_1.jpg';
import aqr_2 from './img/aqr_2.jpg';
import descargar from './img/descargar.png';

const AccessQR = () => {
  return (
    <div className="access-qr">

      {/* Sección 1: ¿Qué es el AccessQR? */}
      <section className="section">
        <h2>¿Qué es el AccessQR?</h2>
        <p>
        AccessQR es una innovadora solución que permite el registro y control de acceso a 
        instituciones mediante el uso de códigos QR. Facilita el proceso de identificación 
        de usuarios internos de CIBERTEC, mejorando la seguridad y la eficiencia en el ingreso. 
        A través de esta herramienta, tanto estudiantes, docentes, como trabajadores pueden generar 
        y escanear su código QR desde dispositivos móviles, permitiendo un control ágil y automatizado 
        de entradas y salidas. Además, es adaptable para el registro temporal de visitantes externos, 
        garantizando una gestión segura y organizada del acceso a las instalaciones.
        Esta tecnología no solo optimiza el proceso de control de acceso, sino que también minimiza 
        errores humanos, mejora la experiencia del usuario, y proporciona un registro claro y detallado 
        de las personas que ingresan y salen de la institución.
        </p>
        <center>
        <img src={aqr_1} alt="¿Qué es el AccessQR?" className="section-aqr_1" width={300}/>
        <img src={aqr_2} alt="¿Qué es el AccessQR?" className="section-aqr_2" width={302}/>
        </center>
      </section>

      {/* Sección 2: ¿Dónde descargarlo? */}
      <section className="section">
        <h2>¿Dónde descargarlo?</h2>
        <p>
        Puedes descargar AccessQR directamente desde nuestra página oficial, donde encontrarás los enlaces 
        para su instalación. Está disponible tanto en la Google Play Store para dispositivos Android, 
        como en la App Store para dispositivos iOS, garantizando que todos los usuarios tengan acceso a 
        esta herramienta innovadora, sin importar el tipo de dispositivo que utilicen. Además, proporcionamos
         instrucciones detalladas para facilitar el proceso de descarga e instalación, asegurando que puedas 
         empezar a utilizar AccessQR en cuestión de minutos.
        </p>
        <center>
        <img src={descargar} alt="¿Dónde descargarlo?" className="section-descargar" width={200} />
        </center>
      </section>

      {/* Sección 3: ¿Para qué sirve? */}
      <section className="section">
        <h2>¿Para qué sirve?</h2>
        <p>
        AccessQR sirve para simplificar y optimizar los procesos de registro de acceso en CIBERTEC. 
        Con un simple escaneo del código QR, los usuarios internos, como estudiantes, docentes y trabajadores,
         pueden registrar su ingreso y salida de manera rápida y eficiente. Esto no solo mejora la experiencia 
         del usuario, evitando largas esperas, sino que también contribuye a aumentar la seguridad del lugar, 
         al garantizar un control preciso y automatizado de quién entra y sale de las instalaciones.
         Además, AccessQR facilita el pre-registro de visitantes externos, quienes también pueden generar un 
         código QR temporal, agilizando su acceso y asegurando un registro adecuado.
        </p>
        <img src={qrImage} alt="¿Para qué sirve?" className="section-image" />
      </section>

      {/* Sección 4: ¿Cuál es su historia? */}
      <section className="section">
        <h2>¿Cuál es su historia?</h2>
        <p>La historia de AccessQR comienza con la necesidad de modernizar los procesos de registro y 
          control de acceso en instituciones como CIBERTEC. Tradicionalmente, los sistemas de acceso se
           basaban en registros manuales, lo que generaba demoras, errores y falta de seguridad. Ante estos 
           desafíos, un equipo de expertos en tecnología y educación decidió desarrollar una solución más ágil y eficiente.
           Así nació AccessQR, un proyecto que fue creado para transformar la forma en que se gestionan los accesos. 
           Desde sus inicios, ha evolucionado rápidamente para convertirse en una herramienta esencial, integrando 
           el uso de códigos QR para facilitar el ingreso de usuarios internos y externos. A lo largo del tiempo, 
           AccessQR ha demostrado ser una solución confiable y escalable, permitiendo a las instituciones gestionar 
           el flujo de personas de manera más segura, rápida y organizada.
           Hoy en día, AccessQR continúa mejorando con nuevas funcionalidades y adaptándose a las necesidades de sus 
           usuarios, siendo un pilar en la modernización de los sistemas de control de acceso.
        </p>
        <img src={qrImage} alt="¿Cuál es su historia?" className="section-image" />
      </section>
    </div>
  );
};

export default AccessQR;
