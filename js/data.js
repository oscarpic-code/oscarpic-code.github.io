const PROFILE_DATA = [
  {
    type: "EXPERIENCIA",
    title: "Más de 20 años de experiencia profesional",
    text: "Trayectoria en desarrollo de software\nanálisis\nmantenimiento\narquitectura\ngestión de proyectos IT desde octubre de 2006.",
    tags: ["Experiencia", "IT", "Desarrollo", "Gestión de proyectos", "Arquitectura"]
  },
  {
    type: "EXPERIENCIA",
    title: "Java y evolución tecnológica",
    text: "Experiencia con Java y tecnologías del ecosistema, incluyendo:\nSpring\nSpring Boot\nEJB\nServlets\nSpring MVC\nJSP\nHibernate\nJPA\nMyBatis",
    tags: ["Java", "Spring", "Spring Boot", "EJB", "Servlets", "Hibernate", "JPA", "MyBatis"]
  },
  {
    type: "TRANSFORMACIÓN",
    title: "Migración y modernización de aplicaciones",
    text: "Experiencia en migraciones tecnológicas, incluyendo:\nJava 6 → Java 8 → Java 21\nEvolución de arquitecturas EJB + Servlets + JSP hacia Angular + Spring Boot.",
    tags: ["Migración", "Java", "Java 6", "Java 8", "Java 21", "Angular", "Spring Boot", "Modernización"]
  },
  {
    type: "IA",
    title: "Inteligencia artificial aplicada",
    text: "Investigación y adopción de herramientas de IA para mejorar:\nEl trabajo diario\nEl desarrollo de software\nLa documentación\nLos procesos de IT",
    tags: ["IA", "Inteligencia artificial", "IBM Bob", "Continue", "Automatización", "Documentación"]
  },
  {
    type: "IA",
    title: "IBM BOB",
    text: "Desarrollo de skills\nCreación de custom modes\nCreación y configuración de MCP-Servers",
    tags: ["IA", "Inteligencia artificial", "IBM Bob", "Skills", "MCP-Server"]
  },
  {
    type: "IA",
    title: "GitHub Copilot",
    text: "Análisis y desarrollo de aplicaciones utilizando chat de IA + modo agente",
    tags: ["IA", "Inteligencia artificial", "Copilot", "Agente"]
  },
  {
    type: "IA",
    title: "Continue",
    text: "Análisis y desarrollo de aplicaciones utilizando chat de IA con gasto reducido sin utilizar modo agente",
    tags: ["IA", "Inteligencia artificial", "Continue"]
  },
  {
    type: "GESTIÓN",
    title: "Gestión y entrega de proyectos IT",
    text: "Experiencia en:\nPlanificación\nOrganización\nAnálisis de incidencias\nTrato con usuarios\nDiseño de soluciones\nResponsabilidad sobre proyectos IT\nDocumentación",
    tags: ["Proyectos", "Gestión de proyectos", "IT Project Manager", "Planificación", "Incidencias", "Documentación"]
  },
  {
    type: "FORMACIÓN",
    title: "Curso de Java — 300 horas",
    text: "Formación específica en Java de 300 horas.",
    tags: ["Java", "Formación","Cursos"]
  },
  {
    type: "FORMACIÓN",
    title: "Grado Superior — Desarrollo de Aplicaciones",
    text: "Formación profesional superior en Desarrollo de Aplicaciones.",
    tags: ["Formación", "Desarrollo de aplicaciones","Titulación"]
  },
  {
    type: "FORMACIÓN",
    title: "Grado Superior — Administración de Sistemas",
    text: "Formación profesional superior en Administración de Sistemas.",
    tags: ["Formación", "Administración de Sistemas","Titulación"]
  },
  {
    type: "FORMACIÓN",
    title: "Otros cursos y formaciones",
    text: "Cursos realizados inferiores a 30 horas:\nPL/SQL\nUML\nGestión de proyectos\nCalidad\nCoach\nTest Unitarios\nJenkins\nExcel\n",
    tags: ["Formación", "Cursos","PL/SQL","UML","Gestión","Calidad","Coach","Test","Jenkins","Office"]
  },
  {
    type: "CERTIFICACIÓN",
    title: "Bootcamp 2026 — IA Generativa, LLM Apps, Agentes IA, Cursor AI",
    text: "Formación reciente centrada en:\nInteligencia artificial generativa\nAplicaciones con LLM\nAgentes de IA\nHerramientas de desarrollo asistido",
    tags: ["IA", "LLM", "Agentes IA", "Cursor AI", "Formación","Cursos"]
  },
  {
    type: "IDIOMAS",
    title: "Inglés",
    text: "Nivel C1.\nUtilizo el inglés a diario en mi puesto actual para comunicarme con compañeros y clientes de distintos países.\nMantengo una formación continua a través de la plataforma Twenix.",
    tags: ["Inglés", "Idiomas", "C1", "Twenix"]
  },
  {
    type: "TECNOLOGÍA",
    title: "Ecosistema de desarrollo",
    text: "Experiencia y conocimientos en:\nAngular\nHTML\nPL/SQL\nGit\nSVN\nYAML\nJSON\nXML\nJS\nCSS\nAdemás del ecosistema Java (JSP, JSF,...)",
    tags: ["Angular", "HTML", "PL/SQL", "Oracle", "Git", "SVN", "YAML", "JSON","CSS","JS","XML","Java"]
  },
  {
    type: "TECNOLOGÍA",
    title: "Herramientas",
    text: "Experiencia con herramientas de trabajo como:\nEclipse\nVisual Studio\nIntelliJ\nGitlab\nPostman\nSOAP UI\nSQL Developer\nHerramientas Office\nSTS\nJenkins\nJIRA",
    tags: ["Eclipse", "Visual Studio", "IntelliJ", "Gitlab", "Git", "Postman", "SOAP UI", "SQL", "Office", "STS", "Herramientas", "Aplicaciones", "IDE", "Jenkins", "JIRA"]
  },
  {
    type: "TECNOLOGÍA",
    title: "Seguridad y calidad",
    text: "Experiencia con herramientas de seguridad y calidad como:\nKiuwan\nIQ Server\nSonar\nFortify",
    tags: ["Fortify", "Kiuwan", "IntelliJ", "IQ", "Git", "Fortify"]
  },
  {
    type: "TECNOLOGÍA",
    title: "Testing",
    text: "Experiencia con herramientas de testing como:\nJunit\nJacoco\nMockito",
    tags: [ "Junit", "IQ", "Jacoco", "Mockito"]
  },
  {
    type: "TECNOLOGÍA",
    title: "APIS",
    text: "Experiencia con publicación de APIS en:\nAxway\nAPIGEE",
    tags: [ "Axway", "APIGEE"]
  },
  {
    type: "METODOLOGIA",
    title: "Metodología de trabajo",
    text: "Metodología de trabajo utilizadas:\nWaterfall\nScrum\nKanban",
    tags: [ "Kanban", "Waterfall", "Scrum", "Metodología", "Agile", "JIRA"]
  }
];
