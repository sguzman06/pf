// src/App.tsx

import { useState, useEffect } from 'react';


import AOS from 'aos';
import 'aos/dist/aos.css';

// TUS OTROS IMPORTS
import './App.css';
import miAvatar from './assets/avatar.png';

// Añade IoLocationSharp, FaGraduationCap, y FaCode a la lista
import { FaLinkedin, FaGithub, FaEnvelope, FaGraduationCap, FaCode, FaTasks, FaRecordVinyl  } from 'react-icons/fa';

// Icon from Ionicons 5
import { IoLocationSharp, IoCodeSlash, IoMail } from 'react-icons/io5';


//import miVideo from './assets/videos/fondo1.mp4';


function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    AOS.init({
    duration: 1000,
    once: true,
  });
}, []);

  return (
    <div className="portfolio-container">
      {/* ... tu video de fondo ... */}

      <nav className="navbar">
        <div className="navbar-container">
          <a href="#" className="navbar-logo">Mi Portfolio</a>
          <div className="navbar-links">
            <a href="#experiencia">Experiencia</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#contacto">Contacto</a>

            {/* --- NUEVO BOTÓN DE CAMBIO DE TEMA --- */}
            <button onClick={toggleTheme} className="theme-toggle-button">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </nav>

{/* --- FIN DEL BLOQUE 1 --- */}
      <main>
        <section id="sobre-mi" data-aos="fade-up">
          <div className="sobre-mi-layout">
            <div className="sobre-mi-imagen">
              <img src={miAvatar} alt="Avatar de Sofía Guzmán" className="sobre-mi-imagen" />
            </div>
            <div className="sobre-mi-texto">
              <h2> Sobre Mí</h2>
              <ul className="sobre-mi-lista">
                <li>
                  <FaGraduationCap className="lista-icono" />
                  Estudiante de Ingeniería Informática en UBA
                </li>
                <li>
                  <FaCode className="lista-icono" />
                  Enfoque en Análisis de Datos y Gestión SAP
                </li>
                <li>
                  <IoLocationSharp className="lista-icono" />
                  Buenos Aires, Argentina
                </li>
              </ul>
              <p>
                Apasionada por transformar datos en decisiones, buscando siempre generar un impacto tangible y duradero en cada proyecto.
              </p>
</div>
          </div>
        </section>

        <section id="proyectos" data-aos="fade-up">
          <h2><FaTasks /> Proyectos Destacados</h2>
          <div className="proyectos-grid">
            <div className="proyecto-card">
              <div className="card-preview"></div>
              <h3>Nombre del Proyecto Uno</h3>
              <p>Tecnologías: React, TypeScript, CSS</p>
              <a href="#" className="boton-repo">Ver Repositorio</a>
            </div>
            <div className="proyecto-card">
              <div className="card-preview"></div>
              <h3>Nombre del Proyecto Dos</h3>
              <p>Tecnologías: Node.js, Express</p>
              <a href="#" className="boton-repo">Ver Repositorio</a>
            </div>
          </div>
        </section>

   <section id="habilidades" data-aos="fade-up">
    <h2><IoCodeSlash /> Habilidades y Herramientas</h2>
      <div className="habilidades-grid">

    {/* --- Bloque 1: Análisis de Datos --- */}
    <div className="habilidad-bloque">
      <h3>Análisis de Datos</h3>
      <ul>
        <li>SQL</li>
        <li>Python</li>
        <li>Pandas</li>
        <li>Matplotlib</li>
      </ul>
    </div>

    {/* --- Bloque 2: Visualización --- */}
    <div className="habilidad-bloque">
      <h3>Visualización</h3>
      <ul>
        <li>Power BI</li>
        <li>Excel</li>
        <li>Dashboards</li>
        <li>DAX</li>
      </ul>
    </div>

    {/* --- Bloque 3: Programación --- */}
    <div className="habilidad-bloque">
      <h3>Programación</h3>
      <ul>
        <li>Python</li>
        <li>SQL</li>
      </ul>
    </div>

    {/* --- Bloque 4: Herramientas --- */}
    <div className="habilidad-bloque">
      <h3>Herramientas</h3>
      <ul>
        <li>Notion</li>
        <li>Git & GitHub</li>
        <li>Scrum</li>
        <li>Jira</li>
      </ul>
    </div>

  </div>
</section>

<section id="experiencia" data-aos="fade-up">
  <h2>Experiencia Profesional</h2>
  <div className="experiencia-item">
    <h4>Pasantía en Data Analytics</h4>
    <p className="experiencia-info">Artech - Fundación Pescar | 2025 - Actualidad</p>
    <p>Formación profesional intensiva (200hs) en tecnologías como SQL Server, Power BI, Python y Databricks. Desarrollo de proyecto en equipo bajo metodologías ágiles (Scrum) y control de versiones.</p>
  </div>
  <div className="experiencia-item">
    <h4>Barista y Atención al Público</h4>
    <p className="experiencia-info">D’eli Café | 2023</p>
    <p>Gestión de múltiples tareas en un entorno dinámico. Utilicé Excel para el control de stock, fortaleciendo mi orientación al cliente, la gestión bajo presión y la atención al detalle.</p>
  </div>
</section>

        <section id="contacto" data-aos="fade-up">
          <section id="contacto" data-aos="fade-up">
                    <h2>Envíame un Mensaje</h2>
                    <form 
                      name="contact" 
                      method="POST" 
                      data-netlify="true" 
                      className="contact-form"
                    >
                      <input type="hidden" name="form-name" value="contact" />

                      <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea id="message" name="message" rows={5} required></textarea>
                      </div>

                      <button type="submit" className="boton-form">Enviar</button>
                    </form>
                  </section>
          <h2><IoMail /> Envíame un Mensaje</h2>
          <section id="contacto">
              <div className="contacto-links">
                <a href="https://www.linkedin.com/in/sguzman06/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/sguzman06" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="sguzman.0601@gmail.com">
                  <FaEnvelope />
    </a>
  </div>
</section>
        </section >
      </main>

      <footer className="portfolio-footer">
        <p>&copy; 2025 Sofía Guzmán. Hecho con ❤️ y mucho ☕. </p>
      </footer>
    </div>
  )
}

export default App;

