// src/App.tsx

import React, { useState, useEffect } from 'react';

// FORMA MODERNA DE IMPORTAR LIBRERÍAS
import Swiper from 'swiper';
import 'swiper/css'; // Estilos base de Swiper
import 'swiper/css/pagination'; // Estilos para las "bolitas" de navegación

import AOS from 'aos';
import 'aos/dist/aos.css';

// TUS OTROS IMPORTS
import './App.css';
import miAvatar from './assets/avatar.png';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
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
    // Tu código de Swiper y AOS se queda igual
    new Swiper('.tools-slider', { /* ... */ });
    new Swiper('.skills-slider', { /* ... */ });
    AOS.init({ /* ... */ });
  }, []);

  return (
    <div className="portfolio-container">
      {/* ... tu video de fondo ... */}

      <nav className="navbar">
        <div className="navbar-container">
          <a href="#" className="navbar-logo">SOFÍA GUZMÁN</a>
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
              <h3>👋 Hola! Soy Sofi,</h3>
              <p>
                 Estudiante de Ingeniería Informática con foco en análisis de datos 📊 y gestión SAP 💻.
              </p>
              <p>
                 Apasionada por transformar datos en decisiones claras y efectivas 🎯, combino habilidades técnicas (MySQL, Power BI, Python, JavaScript) con una fuerte capacidad para planificar, comunicar y colaborar en equipo 🤝.
              </p>
              <p>
                Me motiva aportar soluciones creativas a desafíos reales 💡, buscando siempre generar un impacto tangible y duradero. 
              </p>
              <p>
                Más que transmitir información, aspiro a conectar y dejar una huella significativa en cada proyecto ✨.
              </p>
            </div>
          </div>
        </section>

        <section id="proyectos" data-aos="fade-up">
          <h2>Proyectos</h2>
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
          <h2>Habilidades y Herramientas</h2>

          {/* --- INICIO DEL CARRUSEL --- */}
          <div className="swiper">
            <div className="swiper-wrapper">

              {/* --- Habilidades Técnicas --- */}
                <div className="swiper-slide habilidad-card">Power BI</div>
                <div className="swiper-slide habilidad-card">SQL</div>
                <div className="swiper-slide habilidad-card">Python</div>
                <div className="swiper-slide habilidad-card">Tableau</div>
                <div className="swiper-slide habilidad-card">Databricks</div>
                <div className="swiper-slide habilidad-card">DAX</div>
                <div className="swiper-slide habilidad-card">Pandas</div>
                <div className="swiper-slide habilidad-card">Excel</div>
                <div className="swiper-slide habilidad-card">Notion</div>

                {/* --- Habilidades Blandas --- */}
                <div className="swiper-slide habilidad-card">Trabajo en Equipo</div>
                <div className="swiper-slide habilidad-card">Liderazgo</div>
                <div className="swiper-slide habilidad-card">Planificación</div>
                <div className="swiper-slide habilidad-card">Comunicación</div>


            </div>
            {/* Bolitas de paginación */}
            <div className="swiper-pagination"></div>
          </div>
          {/* --- FIN DEL CARRUSEL --- */}
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
          <h2>Contacto</h2>
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

