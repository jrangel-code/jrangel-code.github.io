(function () {
  "use strict";

  /* ============================================================
     TRANSLATIONS
     ============================================================ */
  const translations = {
    es: {
      'nav-about':     'Sobnre mí',
      'nav-resume':    'Trayectoria',
      'nav-portfolio': 'Trabajos',
      'nav-services':  'Servicios',
      'nav-contact':   'Contacto',
      'hero-badge':    'Disponible para proyectos freelance',
      'hero-cta-1':    'Ver Portafolio ',
      'hero-cta-2':    'Contáctame',
      'hero-typed':    'Desarrollo Web,Integración de IA,Analista de Infraestructura TI,Diseño UI/UX',
      'about-label':   'Sobre mí',
      'about-title':   'Quién soy',
      'about-h3':      'Desarrollador Web & Analista Sr. de Infraestructura',
      'about-bio':     'Ingeniero Informático de la UCAB con experiencia en desarrollo web, administración de infraestructura tecnológica e integración de inteligencia artificial. Construyo soluciones digitales que combinan funcionalidad con buen diseño: desde aplicaciones web en Python y PHP hasta chatbots integrados en WhatsApp y Telegram. Actualmente me desempeño como Analista Sr. de Infraestructura, gestionando sistemas críticos y liderando proyectos de digitalización en entornos corporativos.',
      'info-birthday':        '5 Feb 1996',
      'info-city':            'Caracas, Venezuela',
      'info-available':       'Disponible',
      'info-label-birthday':  'Cumpleaños',
      'info-label-age':       'Edad',
      'info-label-city':      'Ciudad',
      'info-label-email':     'Correo',
      'info-label-wp':        'WhatsApp',
      'info-label-freelance': 'Freelance',
      'stat-1': 'Clientes Satisfechos',
      'stat-2': 'Proyectos Completados',
      'stat-3': 'Horas de Soporte',
      'stat-4': 'Equipos Colaborativos',
      'skills-label': 'Competencias',
      'skills-title': 'Skills',
      'skills-desc':  'Trabajo con Python y PHP en el backend, y HTML, CSS y JavaScript en el frontend. Tengo experiencia práctica con APIs de IA, Odoo ERP, SQL y herramientas de infraestructura TI.',
      'resume-label': 'Trayectoria',
      'resume-title': 'Experiencia & Educación',
      'resume-edu':   'Educación',
      'resume-exp':   'Experiencia Profesional',
      'portfolio-label': 'Trabajos',
      'portfolio-title': 'Portfolio',
      'portfolio-desc':  'Selección de aplicaciones web y plataformas digitales en las que he participado.',
      'services-label': 'Oferta',
      'services-title': 'Servicios',
      'services-desc':  'Soluciones tecnológicas orientadas a resolver problemas reales: desarrollo web, inteligencia artificial, infraestructura TI y diseño digital.',
      'svc-1-title': 'Desarrollo Web & Apps',
      'svc-1-desc':  'Sitios y aplicaciones web a medida: landing pages, portales corporativos y plataformas funcionales con buen diseño.',
      'svc-2-title': 'Integración de IA & Chatbots',
      'svc-2-desc':  'Chatbots inteligentes para WhatsApp, Telegram e Instagram usando Gemini API y otras herramientas de IA generativa.',
      'svc-3-title': 'Diseño UI/UX',
      'svc-3-desc':  'Diseño de interfaces centradas en el usuario: prototipos, wireframes y experiencias digitales intuitivas y atractivas.',
      'svc-4-title': 'Infraestructura TI',
      'svc-4-desc':  'Administración de servidores, redes, Active Directory y Microsoft 365. Soporte N2/N3 y gestión de sistemas críticos.',
      'svc-5-title': 'Automatización de Procesos',
      'svc-5-desc':  'Scripts Python, integración de APIs, automatización con ERP Odoo y flujos de trabajo que reducen tareas manuales.',
      'svc-6-title': 'Consultoría Tecnológica',
      'svc-6-desc':  'Asesoría en transformación digital, selección de herramientas, proyectos de IA y optimización de procesos de TI.',
      'testimonials-label': 'Referencias',
      'testimonials-title': 'Testimonios',
      'contact-label': 'Hablemos',
      'contact-title': '¿Trabajamos juntos?',
      'contact-desc':  'Disponible para proyectos freelance y nuevas oportunidades. Elige el canal que prefieras.',
      'footer-tagline': 'Construyendo soluciones digitales desde Caracas, Venezuela.',
      'footer-copy':    '© 2025 Jonathan Rangel · Todos los derechos reservados',
      // services.html — nav & tabs
      'page-services-title': 'Proyectos Digitales',
      'breadcrumb-home': 'Inicio',
      'tab-web':         'Desarrollo Web',
      'tab-ia':          'IA & Chatbots',
      'tab-diseno':      'Diseño UI/UX',
      'tab-infra':       'Infraestructura TI',
      'tab-auto':        'Automatización',
      'tab-consultoria': 'Consultoría',
      // tab: web
      'svc-web-h3':    'Desarrollo Web & Apps',
      'svc-web-p':     'Diseño y desarrollo sitios web y aplicaciones a medida que combinan funcionalidad robusta con una experiencia visual cuidada. Desde landing pages de alta conversión hasta portales corporativos y plataformas web complejas, cada proyecto está construido con tecnologías modernas, código limpio y enfoque en rendimiento.',
      'svc-web-f1-h5': 'Landing Pages & Corporativo',
      'svc-web-f1-p':  'Sitios rápidos, responsivos y optimizados para SEO que generan resultados reales.',
      'svc-web-f2-h5': 'E-Commerce',
      'svc-web-f2-p':  'Tiendas online funcionales con pasarelas de pago y gestión de inventario.',
      'svc-web-f3-h5': 'Plataformas Web a Medida',
      'svc-web-f3-p':  'Aplicaciones web con lógica de negocio específica en Python, PHP o JavaScript.',
      'svc-web-f4-h5': 'Diseño Responsivo',
      'svc-web-f4-p':  'Experiencia perfecta en móvil, tablet y escritorio en todos los navegadores.',
      // tab: ia
      'svc-ia-h3':    'Integración de IA & Chatbots',
      'svc-ia-p':     'Integro inteligencia artificial en canales de comunicación y flujos de trabajo empresariales. Desarrollo chatbots conversacionales para WhatsApp, Telegram e Instagram que entienden el contexto, automatizan respuestas y mejoran la experiencia del cliente, usando Gemini API, OpenAI y otras plataformas de IA generativa.',
      'svc-ia-f1-h5': 'Chatbots WhatsApp',
      'svc-ia-f1-p':  'Bots inteligentes con WhatsApp Business API para atención automática 24/7.',
      'svc-ia-f2-h5': 'Bots Telegram',
      'svc-ia-f2-p':  'Chatbots multi-propósito: atención, notificaciones, comandos y flujos automatizados.',
      'svc-ia-f3-h5': 'Gemini API / OpenAI',
      'svc-ia-f3-p':  'Integración de modelos de lenguaje para respuestas inteligentes y contextuales.',
      'svc-ia-f4-h5': 'Flujos Conversacionales',
      'svc-ia-f4-p':  'Diseño de árboles de decisión y flujos de conversación para cada caso de uso.',
      // tab: diseno
      'svc-diseno-h3':    'Diseño UI/UX',
      'svc-diseno-p':     'Creo interfaces digitales que se sienten intuitivas y se ven bien. El diseño UI/UX no es solo estética: es estructurar la información para que los usuarios lleguen a su objetivo sin fricción. Trabajo desde la fase de wireframes y prototipado hasta la entrega de diseños listos para desarrollo.',
      'svc-diseno-f1-h5': 'Wireframes & Prototipado',
      'svc-diseno-f1-p':  'Estructura visual de la interfaz antes de escribir una línea de código.',
      'svc-diseno-f2-h5': 'Diseño Visual',
      'svc-diseno-f2-p':  'Sistemas de diseño con tipografía, colores y componentes consistentes.',
      'svc-diseno-f3-h5': 'UX Research',
      'svc-diseno-f3-p':  'Análisis de flujos de usuario y puntos de fricción para mejorar la experiencia.',
      'svc-diseno-f4-h5': 'Diseño Responsivo',
      'svc-diseno-f4-p':  'Interfaces adaptadas para cualquier dispositivo con coherencia visual.',
      // tab: infra
      'svc-infra-h3':    'Infraestructura TI',
      'svc-infra-p':     'Administro y mantengo infraestructura tecnológica on-premise y en la nube para empresas que necesitan alta disponibilidad y operación continua. Desde la gestión de servidores y redes hasta la administración de Microsoft 365 y Active Directory, aseguro que los sistemas críticos funcionen sin interrupciones.',
      'svc-infra-f1-h5': 'Servidores & Virtualización',
      'svc-infra-f1-p':  'Configuración, mantenimiento y monitoreo de servidores físicos y virtuales.',
      'svc-infra-f2-h5': 'Microsoft 365 & Azure AD',
      'svc-infra-f2-p':  'Gestión de usuarios, licencias, SharePoint, Teams y políticas de seguridad.',
      'svc-infra-f3-h5': 'Redes & Conectividad',
      'svc-infra-f3-p':  'Configuración de redes LAN/WAN, switches, routers y VPN corporativas.',
      'svc-infra-f4-h5': 'Soporte N2/N3',
      'svc-infra-f4-p':  'Resolución de incidencias complejas con foco en SLA y continuidad operativa.',
      // tab: auto
      'svc-auto-h3':    'Automatización de Procesos',
      'svc-auto-p':     'Identifico tareas repetitivas y las convierto en flujos automáticos que ahorran tiempo y reducen errores. Trabajo con Python para scripts de automatización, integración de APIs, procesamiento de datos y conexión entre sistemas como ERP Odoo, plataformas web y herramientas empresariales.',
      'svc-auto-f1-h5': 'Scripts Python',
      'svc-auto-f1-p':  'Automatización de tareas: reportes, procesamiento de datos, notificaciones y más.',
      'svc-auto-f2-h5': 'Integración de APIs',
      'svc-auto-f2-p':  'Conexión entre sistemas heterogéneos mediante REST APIs y webhooks.',
      'svc-auto-f3-h5': 'ERP Odoo',
      'svc-auto-f3-p':  'Integración de módulos Odoo con portales web y automatización de flujos de negocio.',
      'svc-auto-f4-h5': 'Procesamiento de Datos',
      'svc-auto-f4-p':  'ETL, transformación de datos y generación de reportes automatizados en Excel.',
      // tab: consultoria
      'svc-cons-h3':    'Consultoría Tecnológica',
      'svc-cons-p':     'Ayudo a empresas y emprendedores a tomar mejores decisiones tecnológicas: qué herramienta adoptar, cómo estructurar su infraestructura digital, cómo incorporar IA en sus procesos o cómo diseñar una arquitectura de software escalable. Traducir el lenguaje técnico en decisiones de negocio concretas.',
      'svc-cons-f1-h5': 'Transformación Digital',
      'svc-cons-f1-p':  'Hoja de ruta tecnológica para modernizar procesos y herramientas empresariales.',
      'svc-cons-f2-h5': 'Selección de Herramientas',
      'svc-cons-f2-p':  'Evaluación y recomendación de software, SaaS, ERP y plataformas cloud.',
      'svc-cons-f3-h5': 'Auditoría TI',
      'svc-cons-f3-p':  'Revisión de sistemas, seguridad, backups y procedimientos de TI existentes.',
      'svc-cons-f4-h5': 'Proyectos de IA',
      'svc-cons-f4-p':  'Asesoría para incorporar inteligencia artificial de forma práctica y rentable.',
    },
    en: {
      'nav-about':     'About',
      'nav-resume':    'Career',
      'nav-portfolio': 'Works',
      'nav-services':  'Services',
      'nav-contact':   'Contact',
      'hero-badge':    'Available for freelance projects',
      'hero-cta-1':    'View Portfolio',
      'hero-cta-2':    'Contact Me',
      'hero-typed':    'Web Development,AI Integration,IT Infrastructure Analyst,UI/UX Design',
      'about-label':   'About Me',
      'about-title':   'Who I Am',
      'about-h3':      'Web Developer & Sr. Infrastructure Analyst',
      'about-bio':     'Computer Engineer from UCAB with experience in web development, IT infrastructure management, and artificial intelligence integration. I build digital solutions that combine functionality with great design: from web applications in Python and PHP to chatbots integrated in WhatsApp and Telegram. Currently working as Sr. Infrastructure Analyst, managing critical systems and leading digitalization projects in corporate environments.',
      'info-birthday':        'Feb 5, 1996',
      'info-city':            'Caracas, Venezuela',
      'info-available':       'Available',
      'info-label-birthday':  'Birthday',
      'info-label-age':       'Age',
      'info-label-city':      'City',
      'info-label-email':     'Email',
      'info-label-wp':        'WhatsApp',
      'info-label-freelance': 'Freelance',
      'stat-1': 'Happy Clients',
      'stat-2': 'Completed Projects',
      'stat-3': 'Support Hours',
      'stat-4': 'Collaborative Teams',
      'skills-label': 'Skills',
      'skills-title': 'Competencies',
      'skills-desc':  'I work with Python and PHP on the backend, and HTML, CSS and JavaScript on the frontend. I have hands-on experience with AI APIs, Odoo ERP, SQL and IT infrastructure tools.',
      'resume-label': 'Career',
      'resume-title': 'Experience & Education',
      'resume-edu':   'Education',
      'resume-exp':   'Professional Experience',
      'portfolio-label': 'Works',
      'portfolio-title': 'Portfolio',
      'portfolio-desc':  'A selection of web applications and digital platforms I have worked on.',
      'services-label': 'Offer',
      'services-title': 'Digital Projects',
      'services-desc':  'Technology solutions focused on solving real problems: web development, AI integration, IT infrastructure and digital design.',
      'svc-1-title': 'Web Development & Apps',
      'svc-1-desc':  'Custom websites and web applications: landing pages, corporate portals and functional platforms with great design.',
      'svc-2-title': 'AI Integration & Chatbots',
      'svc-2-desc':  'Smart chatbots for WhatsApp, Telegram and Instagram using Gemini API and other generative AI tools.',
      'svc-3-title': 'UI/UX Design',
      'svc-3-desc':  'User-centered interface design: prototypes, wireframes and intuitive, attractive digital experiences.',
      'svc-4-title': 'IT Infrastructure',
      'svc-4-desc':  'Server and network administration, Active Directory and Microsoft 365. N2/N3 support and critical systems management.',
      'svc-5-title': 'Process Automation',
      'svc-5-desc':  'Python scripts, API integrations, Odoo ERP automation and workflows that reduce manual tasks.',
      'svc-6-title': 'Technology Consulting',
      'svc-6-desc':  'Advice on digital transformation, tool selection, AI projects and IT process optimization.',
      'testimonials-label': 'References',
      'testimonials-title': 'Testimonials',
      'contact-label': "Let's Talk",
      'contact-title': 'Shall We Work Together?',
      'contact-desc':  'Available for freelance projects and new opportunities. Choose your preferred channel.',
      'footer-tagline': 'Building digital solutions from Caracas, Venezuela.',
      'footer-copy':    '© 2025 Jonathan Rangel · All rights reserved',
      // services.html — nav & tabs
      'page-services-title': 'Digital Projects',
      'breadcrumb-home': 'Home',
      'tab-web':         'Web Development',
      'tab-ia':          'AI & Chatbots',
      'tab-diseno':      'UI/UX Design',
      'tab-infra':       'IT Infrastructure',
      'tab-auto':        'Automation',
      'tab-consultoria': 'Consulting',
      // tab: web
      'svc-web-h3':    'Web Development & Apps',
      'svc-web-p':     'I design and develop custom websites and applications that combine robust functionality with a polished visual experience. From high-conversion landing pages to corporate portals and complex web platforms, every project is built with modern technologies, clean code and a focus on performance.',
      'svc-web-f1-h5': 'Landing Pages & Corporate',
      'svc-web-f1-p':  'Fast, responsive, SEO-optimized sites that deliver real results.',
      'svc-web-f2-h5': 'E-Commerce',
      'svc-web-f2-p':  'Functional online stores with payment gateways and inventory management.',
      'svc-web-f3-h5': 'Custom Web Platforms',
      'svc-web-f3-p':  'Web applications with specific business logic in Python, PHP or JavaScript.',
      'svc-web-f4-h5': 'Responsive Design',
      'svc-web-f4-p':  'Perfect experience on mobile, tablet and desktop across all browsers.',
      // tab: ia
      'svc-ia-h3':    'AI & Chatbot Integration',
      'svc-ia-p':     'I integrate artificial intelligence into communication channels and enterprise workflows. I develop conversational chatbots for WhatsApp, Telegram and Instagram that understand context, automate responses and improve customer experience, using Gemini API, OpenAI and other generative AI platforms.',
      'svc-ia-f1-h5': 'WhatsApp Chatbots',
      'svc-ia-f1-p':  'Intelligent bots with WhatsApp Business API for automatic 24/7 support.',
      'svc-ia-f2-h5': 'Telegram Bots',
      'svc-ia-f2-p':  'Multi-purpose chatbots: support, notifications, commands and automated flows.',
      'svc-ia-f3-h5': 'Gemini API / OpenAI',
      'svc-ia-f3-p':  'Language model integration for intelligent, context-aware responses.',
      'svc-ia-f4-h5': 'Conversational Flows',
      'svc-ia-f4-p':  'Decision tree and conversation flow design for each use case.',
      // tab: diseno
      'svc-diseno-h3':    'UI/UX Design',
      'svc-diseno-p':     'I create digital interfaces that feel intuitive and look great. UI/UX design is not just aesthetics: it is structuring information so users reach their goal without friction. I work from the wireframing and prototyping phase through to delivery of development-ready designs.',
      'svc-diseno-f1-h5': 'Wireframes & Prototyping',
      'svc-diseno-f1-p':  'Visual structure of the interface before writing a single line of code.',
      'svc-diseno-f2-h5': 'Visual Design',
      'svc-diseno-f2-p':  'Design systems with consistent typography, colors and components.',
      'svc-diseno-f3-h5': 'UX Research',
      'svc-diseno-f3-p':  'User flow and friction point analysis to improve the experience.',
      'svc-diseno-f4-h5': 'Responsive Design',
      'svc-diseno-f4-p':  'Interfaces adapted for any device with visual consistency.',
      // tab: infra
      'svc-infra-h3':    'IT Infrastructure',
      'svc-infra-p':     'I manage and maintain on-premise and cloud technology infrastructure for companies that require high availability and continuous operation. From server and network management to Microsoft 365 and Active Directory administration, I ensure critical systems run without interruptions.',
      'svc-infra-f1-h5': 'Servers & Virtualization',
      'svc-infra-f1-p':  'Configuration, maintenance and monitoring of physical and virtual servers.',
      'svc-infra-f2-h5': 'Microsoft 365 & Azure AD',
      'svc-infra-f2-p':  'User and license management, SharePoint, Teams and security policies.',
      'svc-infra-f3-h5': 'Networks & Connectivity',
      'svc-infra-f3-p':  'LAN/WAN network configuration, switches, routers and corporate VPNs.',
      'svc-infra-f4-h5': 'N2/N3 Support',
      'svc-infra-f4-p':  'Complex incident resolution with focus on SLA and operational continuity.',
      // tab: auto
      'svc-auto-h3':    'Process Automation',
      'svc-auto-p':     'I identify repetitive tasks and convert them into automated flows that save time and reduce errors. I work with Python for automation scripts, API integration, data processing and connecting systems like Odoo ERP, web platforms and enterprise tools.',
      'svc-auto-f1-h5': 'Python Scripts',
      'svc-auto-f1-p':  'Task automation: reports, data processing, notifications and more.',
      'svc-auto-f2-h5': 'API Integration',
      'svc-auto-f2-p':  'Connecting heterogeneous systems through REST APIs and webhooks.',
      'svc-auto-f3-h5': 'ERP Odoo',
      'svc-auto-f3-p':  'Odoo module integration with web portals and business flow automation.',
      'svc-auto-f4-h5': 'Data Processing',
      'svc-auto-f4-p':  'ETL, data transformation and automated report generation in Excel.',
      // tab: consultoria
      'svc-cons-h3':    'Technology Consulting',
      'svc-cons-p':     'I help companies and entrepreneurs make better technology decisions: which tools to adopt, how to structure their digital infrastructure, how to incorporate AI into their processes or how to design scalable software architecture. Translating technical language into concrete business decisions.',
      'svc-cons-f1-h5': 'Digital Transformation',
      'svc-cons-f1-p':  'Technology roadmap to modernize business processes and tools.',
      'svc-cons-f2-h5': 'Tool Selection',
      'svc-cons-f2-p':  'Evaluation and recommendation of software, SaaS, ERP and cloud platforms.',
      'svc-cons-f3-h5': 'IT Audit',
      'svc-cons-f3-p':  'Review of existing IT systems, security, backups and procedures.',
      'svc-cons-f4-h5': 'AI Projects',
      'svc-cons-f4-p':  'Advice on incorporating artificial intelligence in a practical and profitable way.',
    }
  };

  /* ============================================================
     DARK MODE
     ============================================================ */
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon   = document.getElementById('theme-icon');

  function applyTheme(dark) {
    document.body.classList.toggle('dark-mode', dark);
    if (themeIcon) {
      themeIcon.className = dark ? 'bi bi-sun' : 'bi bi-moon-stars';
    }
  }

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = savedTheme
    ? savedTheme === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-mode');
      applyTheme(!isDark);
      localStorage.setItem('theme', isDark ? 'light' : 'dark');
      initParticles();
    });
  }

  /* ============================================================
     LANGUAGE TOGGLE
     ============================================================ */
  let typedInstance = null;
  let currentLang = localStorage.getItem('lang') || 'es';

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const label = document.getElementById('lang-label');
    if (label) label.textContent = lang === 'es' ? 'EN' : 'ES';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    // Re-init typed with new strings
    const typedStrings = translations[lang]['hero-typed'];
    if (typedStrings) {
      initTyped(typedStrings.split(','));
    }

    localStorage.setItem('lang', lang);
  }

  function initTyped(strings) {
    if (typedInstance) {
      typedInstance.destroy();
      typedInstance = null;
    }
    const el = document.querySelector('.typed');
    if (!el) return;
    el.textContent = '';
    typedInstance = new Typed('.typed', {
      strings,
      loop: true,
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2200,
    });
  }

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLanguage(currentLang === 'es' ? 'en' : 'es');
    });
  }

  /* ============================================================
     NAVBAR
     ============================================================ */
  const header    = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 10);
  });

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger) hamburger.classList.remove('open');
      if (navLinks)  navLinks.classList.remove('open');
    });
  });

  /* ============================================================
     PRELOADER
     ============================================================ */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.style.opacity = '0';
      setTimeout(() => preloader.remove(), 550);
    });
  }

  /* ============================================================
     SCROLL TOP
     ============================================================ */
  const scrollTopBtn = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('active', window.scrollY > 100);
    }
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /* ============================================================
     AOS
     ============================================================ */
  function aosInit() {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      offset: 0,
    });
  }
  window.addEventListener('load', aosInit);

  /* ============================================================
     TYPED.JS + LANGUAGE (initial load)
     ============================================================ */
  window.addEventListener('load', () => {
    applyLanguage(localStorage.getItem('lang') || 'es');
  });

  /* ============================================================
     PURECOUNTER
     ============================================================ */
  new PureCounter();

  /* ============================================================
     SKILLS ANIMATION
     ============================================================ */
  document.querySelectorAll('.skills-animation').forEach(item => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function () {
        item.querySelectorAll('.progress .progress-bar').forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      },
    });
  });

  /* ============================================================
     GLIGHTBOX
     ============================================================ */
  GLightbox({ selector: '.glightbox' });

  /* ============================================================
     SWIPER (testimonials + portfolio carousel)
     ============================================================ */
  function initSwiper() {
    document.querySelectorAll('.init-swiper').forEach(el => {
      const configEl = el.querySelector('.swiper-config');
      if (!configEl) return;
      const config = JSON.parse(configEl.innerHTML.trim());
      new Swiper(el, config);
    });
  }
  window.addEventListener('load', initSwiper);

  /* ============================================================
     PARTICLES.JS
     ============================================================ */
  function initParticles() {
    if (typeof particlesJS === 'undefined') return;

    const dark  = document.body.classList.contains('dark-mode');
    const color = dark ? '#888888' : '#149ddd';

    // Destroy all existing instances
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom.forEach(inst => {
        try { inst.pJS.fn.vendors.destroypJS(); } catch (e) {}
      });
      window.pJSDom = [];
    }

    function makeConfig(count, alpha, speed, interact) {
      return {
        particles: {
          number: { value: count, density: { enable: true, value_area: 900 } },
          color: { value: color },
          shape: { type: 'circle' },
          opacity: {
            value: alpha,
            random: true,
            anim: { enable: true, speed: 0.3, opacity_min: 0.03 },
          },
          size: { value: 2.5, random: true },
          line_linked: {
            enable: true, distance: 160, color,
            opacity: alpha * 0.5, width: 1,
          },
          move: {
            enable: true, speed, direction: 'none',
            random: true, straight: false, out_mode: 'out',
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: interact, mode: 'grab' },
            onclick: { enable: false },
            resize: true,
          },
          modes: { grab: { distance: 140, line_linked: { opacity: 0.4 } } },
        },
        retina_detect: true,
      };
    }

    const sections = [
      { id: 'particles-js',     count: 38, alpha: dark ? 0.12 : 0.18, speed: 1.1, interact: true  },
      { id: 'particles-about',  count: 24, alpha: dark ? 0.08 : 0.13, speed: 0.8, interact: false },
      { id: 'particles-stats',  count: 18, alpha: dark ? 0.07 : 0.11, speed: 0.7, interact: false },
      { id: 'particles-skills', count: 18, alpha: dark ? 0.07 : 0.11, speed: 0.7, interact: false },
      { id: 'particles-resume', count: 18, alpha: dark ? 0.07 : 0.11, speed: 0.7, interact: false },
    ];

    sections.forEach(({ id, count, alpha, speed, interact }) => {
      if (document.getElementById(id)) {
        particlesJS(id, makeConfig(count, alpha, speed, interact));
      }
    });
  }

  window.addEventListener('load', initParticles);

  /* ============================================================
     PARALLAX HERO
     ============================================================ */
  const heroContainer = document.querySelector('.hero-container');
  if (heroContainer) {
    document.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroContainer.style.transform = `translateY(${y * 0.22}px)`;
      heroContainer.style.opacity   = String(Math.max(0, 1 - y / 520));
    });
  }

  /* ============================================================
     DYNAMIC AGE
     ============================================================ */
  const ageEl = document.getElementById('dynamic-age');
  if (ageEl) {
    const birth = new Date(1996, 1, 5);
    const now   = new Date();
    let age     = now.getFullYear() - birth.getFullYear();
    const m     = now.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
    ageEl.textContent = age;
  }

  /* ============================================================
     HASH SCROLL ON LOAD
     ============================================================ */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth',
          });
        }, 120);
      }
    }
  });

  /* ============================================================
     NAVMENU SCROLLSPY
     ============================================================ */
  const navMenuLinks = document.querySelectorAll('.nav-links a');

  function navScrollSpy() {
    navMenuLinks.forEach(link => {
      if (!link.hash) return;
      const section = document.querySelector(link.hash);
      if (!section) return;
      const pos = window.scrollY + 120;
      if (pos >= section.offsetTop && pos <= section.offsetTop + section.offsetHeight) {
        navMenuLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('load', navScrollSpy);
  document.addEventListener('scroll', navScrollSpy);

  /* ============================================================
     PAGE TRANSITIONS (cross-page navigation)
     ============================================================ */
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    if (href.startsWith('#')) return;
    if (/^(https?:|mailto:|tel:|javascript:)/.test(href)) return;
    if (link.getAttribute('target') === '_blank') return;

    link.addEventListener('click', e => {
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      const dest = link.href;
      document.documentElement.classList.add('page-leaving');
      setTimeout(() => { window.location.href = dest; }, 340);
    });
  });

  /* ============================================================
     SERVICES TAB NAVIGATION (services.html)
     ============================================================ */
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  function activateTab(tabId) {
    tabBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-tab') === tabId));
    tabPanels.forEach(p => p.classList.toggle('active', p.id === 'tab-' + tabId));
  }

  if (tabBtns.length) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        activateTab(tab);
        history.replaceState(null, '', '#' + tab);
      });
    });

    // Read hash on load to open correct tab
    const hash = window.location.hash.replace('#', '');
    const exists = document.getElementById('tab-' + hash);
    activateTab(exists ? hash : tabBtns[0].getAttribute('data-tab'));
  }

})();
