import './Landing.css';
export default function Landing() {

  return (
    <div className="landing-container">
      <div className="column">
        {/* Contenido de la primera columna */}
        <header>
          <h1>Carlos Nicolás Palencia Llauradó</h1>
          <p>Estudiante de ASIX | Desarrollador en Formación</p>
        </header>
        <section className="summary">
          <p>Hola, soy Carlos, un estudiante de Administración de Sistemas Informáticos en Red con actual residencia en Palma de Mallorca. Actualmente, estoy cursando mi segundo año y me apasiona el mundo de la informática y el desarrollo de software.</p><br/>
          <p>En mi búsqueda constante de conocimientos y habilidades en el ámbito de la informática, he participado activamente en proyectos académicos que han ampliado mi comprensión sobre los sistemas informáticos en red. Mi enfoque no se limita solo a la teoría, sino que también busco aplicar lo aprendido en entornos prácticos.</p>
        </section>

      </div>
      <div className="column">
        {/* Contenido de la segunda columna */}
        <section className="skills">
          <h2>Aptitudes profesionales</h2>
          <h3>Lenguajes de programación:</h3>
          <ul>
            <li>HTML/CSS</li>
            <li>PHP</li>
            <li>JavaScript</li>
          </ul>
          <h3>Otros conocimientos técnicos:</h3>
          <ul>
            <li>React.js</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>
        </section>

        <section className="education">
          <h2>Educación</h2>
          <p>Estudiante de Administración de Sistemas Informáticos en Red</p>
          <p>Técnico Superior en Desarrollo de Aplicaciones Web</p>
          <p>Técnico en Sistemas Microinformáticos y Redes</p>
        </section>

      </div>
      <div className="column">
        {/* Contenido de la tercera columna */}
        <section className="module">
          <h2>Módulos realizados</h2>
          <ul>
            <li>Implantación de sistemas operativos</li>
            <li>Planificación y administración de redes</li>
            <li>Fundamentos de hardware</li>
            <li>Gestión de bases de datos</li>
            <li>Lenguajes de marcas y sistemas de gestión de información</li>
            <li>Administración de sistemas operativos</li>
            <li>Servicios de red e Internet</li>
            <li>Implantación de aplicaciones web</li>
            <li>Administración de sistemas gestores de bases de datos</li>
            <li>Seguridad y alta disponibilidad</li>
            <li>Proyecto de administración de sistemas informáticos en red</li>
            <li>Formación y orientación laboral</li>
            <li>Empresa e iniciativa emprendedora</li>
            <li>Formación en centros de trabajo</li>
          </ul>
        </section>
      </div>

    </div>
  )
}