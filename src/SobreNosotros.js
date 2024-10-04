import React from 'react';
import './SobreNosotros.css'; 
import sedeNorte from './img/sede_norte.jpg';
import user from './img/user.png';

const SobreNosotros = () => {
  return (
    <div className="sobre-nosotros" id="sobre-nosotros">

      {/* Sección 1: CIBERTEC */}
      <section className="institucion">
        <h2>CIBERTEC: Transformación Educativa</h2>
        <p>
          CIBERTEC es una institución de educación superior que se dedica a la
          formación de profesionales en áreas tecnológicas y empresariales. Desde
          su fundación, ha estado comprometida con la innovación y el desarrollo
          de competencias que preparan a sus estudiantes para enfrentar los
          desafíos del mundo laboral. Con una amplia variedad de programas
          académicos y cursos de especialización, CIBERTEC se destaca por su
          enfoque práctico, permitiendo a los alumnos adquirir experiencia en
          entornos reales. La institución también cuenta con un equipo de docentes
          altamente calificados y recursos tecnológicos de vanguardia que facilitan
          un aprendizaje efectivo y enriquecedor.
        </p>
        <p>
          Además de su oferta académica, CIBERTEC fomenta un ambiente de
          aprendizaje inclusivo, donde se valoran la creatividad y el pensamiento
          crítico. Los estudiantes tienen la oportunidad de participar en
          proyectos colaborativos y actividades extracurriculares que
          complementan su formación. A través de alianzas estratégicas con
          empresas del sector, los egresados de CIBERTEC están bien preparados
          para ingresar al mercado laboral y contribuir al desarrollo
          tecnológico del país.
        </p>
        <img src={sedeNorte} alt="CIBERTEC" className="cibertec-image" />
      </section>

      {/* Sección 2: Creadores del Proyecto */}
      <section className="creadores">
        <div className="container">
          <div className="column">
            <h2>Nuestro Equipo: Un Viaje Colaborativo</h2>
            <p>
              Este proyecto es el resultado del esfuerzo y la dedicación de un equipo de cinco programadores
              apasionados por la tecnología y la educación. Cada uno de nosotros aporta una experiencia única
              y habilidades complementarias que han sido fundamentales para el desarrollo de esta aplicación.
            </p>

            <h2>Nuestro Compromiso</h2>
            <p>
              Desde el inicio de este proyecto, nos comprometimos a crear una herramienta que no solo sea funcional,
              sino que también ofrezca una experiencia de usuario excepcional. Creemos en el poder de la tecnología
              para transformar la educación y mejorar la calidad de vida de las personas. Nuestra misión es facilitar
              el acceso a la información y optimizar los procesos de registro en CIBERTEC.
            </p>

            <h2>Proceso Creativo</h2>
            <p>
              El desarrollo de esta aplicación ha sido un viaje colaborativo en el que hemos enfrentado desafíos y celebrado
              logros. Cada reunión, cada brainstorming y cada línea de código ha sido una oportunidad para aprender y crecer
              como profesionales. Nuestra filosofía se basa en la colaboración y el respeto por las ideas de cada uno, lo que
              ha fomentado un ambiente de trabajo positivo y productivo.
            </p>

            <h2>Impacto en la Comunidad</h2>
            <p>
              Con este proyecto, buscamos no solo mejorar los procesos de registro en CIBERTEC, sino también inspirar a otros
              a aprovechar la tecnología para resolver problemas en sus propias comunidades. Creemos que, al proporcionar
              herramientas efectivas y accesibles, podemos contribuir al desarrollo personal y profesional de los estudiantes
              y visitantes de la institución.
            </p>

            <ul className="team-list">
              <li className="team-member">
                <img src={user} alt="Astrid Jahaira Yovera Tinoco" className="team-image" />
                <strong>Astrid Jahaira Yovera Tinoco</strong>: Especialista en frontend, encargado de
                diseñar una interfaz amigable y accesible para los usuarios. Su
                creatividad y atención al detalle han sido claves para crear una
                experiencia visual atractiva.
              </li>
              <li className="team-member">
                <img src={user} alt="Lionel Erix Orihuela Cabrera" className="team-image" />
                <strong>Lionel Erix Orihuela Cabrera</strong>: Desarrollador backend con un enfoque en
                la lógica del negocio. Se ha asegurado de que la integración con la
                base de datos sea fluida y eficiente, permitiendo un manejo óptimo
                de la información.
              </li>
              <li className="team-member">
                <img src={user} alt="Luis Enrique Huaranga Huaman" className="team-image" />
                <strong>Luis Enrique Huaranga Huaman</strong>: Experto en experiencia de usuario (UX),
                se ha enfocado en optimizar el flujo de navegación y garantizar que
                los visitantes tengan una experiencia intuitiva y satisfactoria.
              </li>
              <li className="team-member">
                <img src={user} alt="Fernando Enrique Manrique Solano" className="team-image" />
                <strong>Fernando Enrique Manrique Solano</strong>: Encargado de la seguridad y pruebas del
                sistema, ha trabajado arduamente para asegurar que la aplicación sea
                segura y confiable, protegiendo la información de nuestros usuarios.
              </li>
              <li className="team-member">
                <img src={user} alt="Marco Antonio Ñañez Viera" className="team-image" />
                <strong>Marco Antonio Ñañez Viera</strong>: Líder del proyecto y coordinador, ha
                gestionado el trabajo en equipo y la comunicación, asegurando que
                todos los aspectos del proyecto se alineen con nuestros objetivos.
              </li>
            </ul>
          </div> {/* Este div faltaba cerrarse */}
        </div>
      </section> {/* Este div también fue corregido para cerrar adecuadamente */}

    </div>
  );
};

export default SobreNosotros;
