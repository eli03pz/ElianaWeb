import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Navbar
          nav_home: "Home",
          nav_about: "About",
          nav_portfolio: "Portfolio",
          nav_contact: "Contact",
          // Hero
          hero_label: "Portfolio",
          hero_tagline:
            "Crafting digital experiences with code and creativity.",
          hero_view_work: "View Work",
          hero_contact: "Contact Me",
          hero_badge: "Software Engineer in progress ✨",
          // About
          about_title: "About Me",
          about_badge: "Developer Life",
          about_h3_pre: "I'm a",
          about_h3_italic: "Software Engineering Student",
          about_subtitle: "...and a web developer in my free time.",
          about_description:
            "Passionate about building intuitive and dynamic user experiences. I bridge the gap between engineering logic and creative design to solve real-world problems. Currently exploring new technologies and building projects that matter.",
          // Projects
          projects_label: "Portfolio",
          projects_title: "Featured Projects",
          p1_desc:
            "Development of the digital presence for Magnus Audit, an auditing and financial services firm. The project involved creating their official website, implementing an optimized structure to enhance online visibility and strengthen client communication through modern web tools.",
          p2_desc:
            "Disaccort specializes in the installation of a wide variety of curtains and window treatments, offering elegant and functional solutions for any space. We designed their website to showcase their expertise and commitment to quality, building trust and assuring clients they are working with true industry professionals.",
          view_project: "View Live Project",
          // Footer
          footer_contact_title: "Contact Information",
          footer_contact_desc:
            "I am available for professional inquiries, collaborations, or any questions regarding my projects. Feel free to reach out via email.",
          footer_send_email: "Send Email",
          footer_role: "Software Engineer Student at EPN",
          footer_rights: "© 2026 Eliana Pinargote. All rights reserved.",
        },
      },
      es: {
        translation: {
          // Navbar
          nav_home: "Principal",
          nav_about: "Sobre mí",
          nav_portfolio: "Portafolio",
          nav_contact: "Contacto",
          // Hero
          hero_label: "Portafolio",
          hero_tagline:
            "Creando experiencias digitales con código y creatividad.",
          hero_view_work: "Ver trabajo",
          hero_contact: "Contáctame",
          hero_badge: "Ingeniera de Software en formación ✨",
          // About
          about_title: "Sobre Mí",
          about_badge: "Vida de Desarrolladora",
          about_h3_pre: "Soy",
          about_h3_italic: "Estudiante de Ingeniería de Software",
          about_subtitle: "...y desarrolladora web en mi tiempo libre.",
          about_description:
            "Apasionada por construir experiencias de usuario intuitivas y dinámicas. Conecto la lógica de la ingeniería con el diseño creativo para resolver problemas del mundo real. Actualmente explorando nuevas tecnologías y construyendo proyectos que importan.",
          // Projects
          projects_label: "Portafolio",
          projects_title: "Proyectos Destacados",
          p1_desc:
            "Desarrollo de la presencia digital para Magnus Audit, una firma de auditoría y servicios financieros. El proyecto consistió en crear su sitio web oficial, implementando una estructura optimizada para mejorar la visibilidad en línea y fortalecer la comunicación con los clientes.",
          p2_desc:
            "Disaccort se especializa en la instalación de una gran variedad de cortinas, ofreciendo soluciones elegantes y funcionales. Diseñamos su sitio web para mostrar su experiencia y compromiso con la calidad, generando confianza en sus clientes profesionales.",
          view_project: "Ver proyecto en vivo",
          // Footer
          footer_contact_title: "Información de Contacto",
          footer_contact_desc:
            "Estoy disponible para consultas profesionales, colaboraciones o cualquier pregunta sobre mis proyectos. No dudes en contactarme por correo electrónico.",
          footer_send_email: "Enviar Correo",
          footer_role: "Estudiante de Ingeniería de Software en la EPN",
          footer_rights:
            "© 2026 Eliana Pinargote. Todos los derechos reservados.",
        },
      },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
