// Base de conocimiento del perfil de Óscar Picazo
// Contenido manual + información profesional extraída de LinkedIn.
// Para ampliar el perfil, añade nuevas entradas siguiendo esta estructura.

const PROFILE_DATA = [
  {
    "type": "EXPERIENCIA",
    "title": "Más de 20 años de experiencia profesional",
    "summary": "Trayectoria en desarrollo de software, análisis, mantenimiento, arquitectura y gestión de proyectos IT desde octubre de 2006.",
    "details": [
      "Desarrollo de software",
      "Análisis",
      "Mantenimiento",
      "Arquitectura",
      "Gestión de proyectos IT"
    ],
    "tags": [
      "Trayectoria",
      "Experiencia",
      "IT",
      "Desarrollo",
      "Gestión de proyectos",
      "Arquitectura"
    ],
    "keywords": [
      "analista",
      "programador",
      "senior developer",
      "project manager"
    ]
  },
  {
    "type": "EXPERIENCIA",
    "title": "Java y evolución tecnológica",
    "summary": "Experiencia con Java y tecnologías del ecosistema, incluyendo Spring, Spring Boot, EJB, Servlets, Spring MVC, JSP, Hibernate, JPA y MyBatis.",
    "details": [
      "Spring",
      "Spring Boot",
      "EJB",
      "Servlets",
      "Spring MVC",
      "JSP",
      "Hibernate",
      "JPA",
      "MyBatis"
    ],
    "tags": [
      "Trayectoria",
      "Java",
      "Spring",
      "Spring Boot",
      "EJB",
      "Servlets",
      "Hibernate",
      "JPA",
      "MyBatis"
    ],
    "keywords": [
      "desarrollo",
      "backend",
      "J2EE",
      "web"
    ]
  },
  {
    "type": "EXPERIENCIA",
    "title": "Clientes y conocimiento de negocio",
    "summary": "Experiencia trabajando con clientes de los sectores industrial y bancario, adquiriendo conocimiento de sus áreas de negocio.",
    "details": [
      "Sector industrial",
      "Sector bancario",
      "Conocimiento de áreas de negocio",
      "Trato con clientes y usuarios"
    ],
    "tags": [
      "Trayectoria",
      "Clientes",
      "Industria",
      "Industrial",
      "Banca",
      "Bancario",
      "Negocio"
    ],
    "keywords": [
      "cliente",
      "usuario",
      "sector bancario",
      "sector industrial"
    ]
  },
  {
    "type": "TRANSFORMACIÓN",
    "title": "Migración y modernización de aplicaciones",
    "summary": "Experiencia en migraciones tecnológicas y modernización de arquitecturas y aplicaciones.",
    "details": [
      "Java 6 → Java 8 → Java 21",
      "EJB + Servlets + JSP → Angular + Spring Boot"
    ],
    "tags": [
      "Migración",
      "Java",
      "Java 6",
      "Java 8",
      "Java 21",
      "Angular",
      "Spring Boot",
      "Modernización"
    ],
    "keywords": [
      "legacy",
      "modernización",
      "evolución tecnológica",
      "transformación"
    ]
  },
  {
    "type": "TRANSFORMACIÓN",
    "title": "Aplicación de la IA como metodología de trabajo",
    "summary": "Análisis y estrategia para adaptar la inteligencia artificial como metodología de trabajo.",
    "details": [
      "Análisis de oportunidades",
      "Estrategia de adopción",
      "Mejora de procesos y tareas mediante IA"
    ],
    "tags": [
      "Análisis",
      "IA",
      "Inteligencia artificial",
      "Metodología",
      "Modernización",
      "Transformación"
    ],
    "keywords": [
      "AI Transformation",
      "adopción",
      "productividad"
    ]
  },
  {
    "type": "IA",
    "title": "Inteligencia artificial aplicada",
    "summary": "Investigación y adopción de herramientas de IA para mejorar el trabajo diario, el desarrollo de software, la documentación y los procesos de IT.",
    "details": [
      "Trabajo diario",
      "Desarrollo de software",
      "Documentación",
      "Procesos de IT"
    ],
    "tags": [
      "IA",
      "Inteligencia artificial",
      "AI",
      "IBM BOB",
      "Continue",
      "Automatización",
      "Documentación"
    ],
    "keywords": [
      "IA generativa",
      "AI",
      "LLM",
      "productividad",
      "desarrollo asistido"
    ]
  },
  {
    "type": "IA",
    "title": "IBM BOB",
    "summary": "Uso de IBM BOB como herramienta de desarrollo asistido por inteligencia artificial.",
    "details": [
      "Desarrollo de skills",
      "Creación de custom modes",
      "Creación y configuración de MCP Servers"
    ],
    "tags": [
      "IA",
      "Inteligencia artificial",
      "IBM BOB",
      "Skills",
      "Custom modes",
      "MCP",
      "MCP Server"
    ],
    "keywords": [
      "agentes",
      "desarrollo asistido",
      "LLM",
      "MCP"
    ]
  },
  {
    "type": "IA",
    "title": "GitHub Copilot",
    "summary": "Análisis y desarrollo de aplicaciones utilizando chat de IA y modo agente.",
    "details": [
      "Chat de IA",
      "Modo agente",
      "Desarrollo de aplicaciones"
    ],
    "tags": [
      "IA",
      "Inteligencia artificial",
      "GitHub Copilot",
      "Copilot",
      "Agente"
    ],
    "keywords": [
      "AI coding",
      "coding agent",
      "desarrollo asistido"
    ]
  },
  {
    "type": "IA",
    "title": "Continue",
    "summary": "Análisis y desarrollo de aplicaciones utilizando chat de IA con un enfoque de gasto reducido, sin utilizar modo agente.",
    "details": [
      "Chat de IA",
      "Desarrollo asistido",
      "Optimización del consumo"
    ],
    "tags": [
      "IA",
      "Inteligencia artificial",
      "Continue",
      "Desarrollo asistido"
    ],
    "keywords": [
      "AI coding",
      "coste",
      "optimización"
    ]
  },
  {
    "type": "GESTIÓN",
    "title": "Gestión y entrega de proyectos IT",
    "summary": "Experiencia en planificación, organización, análisis de incidencias, trato con usuarios, diseño de soluciones, responsabilidad sobre proyectos IT y documentación.",
    "details": [
      "Planificación",
      "Organización",
      "Análisis de incidencias",
      "Trato con usuarios",
      "Diseño de soluciones",
      "Responsabilidad sobre proyectos IT",
      "Documentación"
    ],
    "tags": [
      "Proyectos",
      "Gestión de proyectos",
      "IT Project Manager",
      "Planificación",
      "Organización",
      "Incidencias",
      "Documentación"
    ],
    "keywords": [
      "delivery",
      "project management",
      "PM",
      "gestión",
      "usuarios"
    ]
  },
  {
    "type": "FORMACIÓN",
    "title": "Curso de Java — 300 horas",
    "summary": "Formación específica en Java de 300 horas.",
    "details": [
      "300 horas"
    ],
    "tags": [
      "Java",
      "Formación",
      "Cursos"
    ],
    "keywords": [
      "Java",
      "formación"
    ]
  },
  {
    "type": "FORMACIÓN",
    "title": "Grado Superior — Desarrollo de Aplicaciones",
    "summary": "Formación profesional superior en Desarrollo de Aplicaciones.",
    "details": [
      "IES Tetuán de las Victorias"
    ],
    "tags": [
      "Formación",
      "Desarrollo de aplicaciones",
      "Titulación",
      "FP"
    ],
    "keywords": [
      "desarrollo",
      "programación"
    ]
  },
  {
    "type": "FORMACIÓN",
    "title": "Grado Superior — Administración de Sistemas",
    "summary": "Formación profesional superior en Administración de Sistemas.",
    "details": [
      "IES Virgen de la Paloma"
    ],
    "tags": [
      "Formación",
      "Administración de Sistemas",
      "Titulación",
      "FP"
    ],
    "keywords": [
      "sistemas",
      "administración"
    ]
  },
  {
    "type": "FORMACIÓN",
    "title": "Otros cursos y formaciones",
    "summary": "Cursos realizados de corta duración en diferentes áreas técnicas y de gestión.",
    "details": [
      "PL/SQL",
      "UML",
      "Gestión de proyectos",
      "Calidad",
      "Coach",
      "Test unitarios",
      "Jenkins",
      "Excel",
      "Angular"
    ],
    "tags": [
      "Formación",
      "Cursos",
      "PL/SQL",
      "UML",
      "Gestión",
      "Calidad",
      "Coach",
      "Test",
      "Jenkins",
      "Office",
      "Angular"
    ],
    "keywords": [
      "formación",
      "cursos"
    ]
  },
  {
    "type": "CERTIFICACIÓN",
    "title": "Bootcamp 2026 — IA Generativa, LLM Apps, Agentes IA, Cursor AI",
    "summary": "Formación reciente centrada en inteligencia artificial generativa, aplicaciones con LLM, agentes de IA y herramientas de desarrollo asistido.",
    "details": [
      "IA generativa",
      "LLM Apps",
      "Agentes IA",
      "Cursor AI"
    ],
    "tags": [
      "IA",
      "LLM",
      "Agentes IA",
      "Cursor AI",
      "Formación",
      "Cursos"
    ],
    "keywords": [
      "LLM",
      "AI agents",
      "generative AI"
    ]
  },
  {
    "type": "IDIOMAS",
    "title": "Inglés",
    "summary": "Nivel C1. Utilización habitual del inglés en el puesto actual para comunicarme con compañeros y clientes de distintos países.",
    "details": [
      "C1",
      "Uso profesional diario",
      "Formación continua mediante Twenix",
      "Score de Duolingo: 129"
    ],
    "tags": [
      "Inglés",
      "Idiomas",
      "C1",
      "Twenix",
      "Duolingo"
    ],
    "keywords": [
      "English",
      "professional working proficiency"
    ]
  },
  {
    "type": "TECNOLOGÍA",
    "title": "Ecosistema de desarrollo",
    "summary": "Experiencia y conocimientos en tecnologías de frontend, bases de datos, control de versiones, configuración y formatos de intercambio.",
    "details": [
      "Angular",
      "HTML",
      "PL/SQL",
      "Oracle",
      "Git",
      "SVN",
      "YAML",
      "JSON",
      "XML",
      "JavaScript",
      "CSS",
      "JSP",
      "JSF"
    ],
    "tags": [
      "Angular",
      "HTML",
      "PL/SQL",
      "Oracle",
      "Git",
      "SVN",
      "YAML",
      "JSON",
      "XML",
      "CSS",
      "JS",
      "JavaScript",
      "Java",
      "JSP",
      "JSF"
    ],
    "keywords": [
      "frontend",
      "backend",
      "database",
      "version control"
    ]
  },
  {
    "type": "TECNOLOGÍA",
    "title": "Herramientas",
    "summary": "Experiencia con herramientas de desarrollo, integración, pruebas, bases de datos, colaboración y gestión.",
    "details": [
      "Eclipse",
      "Visual Studio",
      "IntelliJ",
      "GitLab",
      "Postman",
      "SOAP UI",
      "SQL Developer",
      "Microsoft Office",
      "STS",
      "Jenkins",
      "JIRA"
    ],
    "tags": [
      "Eclipse",
      "Visual Studio",
      "IntelliJ",
      "GitLab",
      "Git",
      "Postman",
      "SOAP UI",
      "SQL",
      "Office",
      "STS",
      "Herramientas",
      "IDE",
      "Jenkins",
      "JIRA"
    ],
    "keywords": [
      "IDE",
      "dev tools",
      "integración",
      "gestión"
    ]
  },
  {
    "type": "TECNOLOGÍA",
    "title": "Seguridad y calidad",
    "summary": "Experiencia con herramientas orientadas a seguridad, calidad y análisis de código.",
    "details": [
      "Kiuwan",
      "IQ Server",
      "Sonar",
      "Fortify"
    ],
    "tags": [
      "Fortify",
      "Kiuwan",
      "IQ Server",
      "Sonar",
      "Calidad",
      "Seguridad"
    ],
    "keywords": [
      "code quality",
      "security",
      "static analysis"
    ]
  },
  {
    "type": "TECNOLOGÍA",
    "title": "Testing",
    "summary": "Experiencia con herramientas y tecnologías de testing.",
    "details": [
      "JUnit",
      "JaCoCo",
      "Mockito",
      "Pruebas unitarias"
    ],
    "tags": [
      "JUnit",
      "Prueba unitaria",
      "Testing",
      "JaCoCo",
      "Mockito"
    ],
    "keywords": [
      "unit testing",
      "test",
      "quality"
    ]
  },
  {
    "type": "TECNOLOGÍA",
    "title": "APIs",
    "summary": "Experiencia con publicación y exposición de APIs.",
    "details": [
      "Axway",
      "APIGEE"
    ],
    "tags": [
      "APIs",
      "API",
      "Axway",
      "APIGEE",
      "Integración"
    ],
    "keywords": [
      "REST",
      "API management",
      "integración"
    ]
  },
  {
    "type": "METODOLOGÍA",
    "title": "Metodología de trabajo",
    "summary": "Experiencia trabajando con diferentes metodologías de gestión y desarrollo.",
    "details": [
      "Waterfall",
      "Scrum",
      "Kanban"
    ],
    "tags": [
      "Kanban",
      "Waterfall",
      "Scrum",
      "Metodología",
      "Agile",
      "JIRA"
    ],
    "keywords": [
      "Agile",
      "gestión",
      "proyectos"
    ]
  },
  {
    "type": "EXPERIENCIA",
    "title": "Senior Developer | IT Project Manager — Alvantia",
    "summary": "Senior Developer | IT Project Manager en Alvantia.",
    "details": [
      "Feb 2023 → Actualidad"
    ],
    "tags": [
      "LinkedIn",
      "Experiencia",
      "Alvantia",
      "Senior Developer | IT Project Manager"
    ],
    "keywords": [
      "experiencia profesional",
      "trayectoria",
      "Alvantia",
      "Senior Developer | IT Project Manager"
    ]
  },
  {
    "type": "EXPERIENCIA",
    "title": "Analista de programación — Alvantia",
    "summary": "Analista de programación en Alvantia.",
    "details": [
      "Jul 2008 → Feb 2023"
    ],
    "tags": [
      "LinkedIn",
      "Experiencia",
      "Alvantia",
      "Analista de programación"
    ],
    "keywords": [
      "experiencia profesional",
      "trayectoria",
      "Alvantia",
      "Analista de programación"
    ]
  },
  {
    "type": "EXPERIENCIA",
    "title": "Programador sénior — SOPRA GROUP HOLDING LTD",
    "summary": "Programador sénior en SOPRA GROUP HOLDING LTD.",
    "details": [
      "Desarrollo de aplicaciones web J2EE",
      "Madrid, Madrid, España",
      "Aug 2007 → Aug 2008"
    ],
    "tags": [
      "LinkedIn",
      "Experiencia",
      "SOPRA GROUP HOLDING LTD",
      "Programador sénior",
      "Java",
      "J2EE",
      "Desarrollo web"
    ],
    "keywords": [
      "experiencia profesional",
      "trayectoria",
      "SOPRA GROUP HOLDING LTD",
      "Programador sénior"
    ]
  },
  {
    "type": "EXPERIENCIA",
    "title": "Software Programmer — Mnemo",
    "summary": "Software Programmer en Mnemo.",
    "details": [
      "Madrid, Madrid, España",
      "Oct 2006 → Aug 2007"
    ],
    "tags": [
      "LinkedIn",
      "Experiencia",
      "Mnemo",
      "Software Programmer"
    ],
    "keywords": [
      "experiencia profesional",
      "trayectoria",
      "Mnemo",
      "Software Programmer"
    ]
  },
  {
    "type": "FORMACIÓN",
    "title": "Garben — Curso de Java",
    "summary": "Formación registrada en LinkedIn en Garben.",
    "details": [
      "Curso de Java",
      "300 horas"
    ],
    "tags": [
      "LinkedIn",
      "Formación",
      "Educación",
      "Garben",
      "Curso de Java"
    ],
    "keywords": [
      "formación",
      "educación",
      "Garben",
      "Curso de Java"
    ]
  },
  {
    "type": "FORMACIÓN",
    "title": "IES Tetuan de las Victorias — Grado Superior",
    "summary": "Formación registrada en LinkedIn en IES Tetuan de las Victorias.",
    "details": [
      "Grado Superior"
    ],
    "tags": [
      "LinkedIn",
      "Formación",
      "Educación",
      "IES Tetuan de las Victorias",
      "Grado Superior"
    ],
    "keywords": [
      "formación",
      "educación",
      "IES Tetuan de las Victorias",
      "Grado Superior"
    ]
  },
  {
    "type": "FORMACIÓN",
    "title": "IES Virgen de la Paloma — Administración de sistemas",
    "summary": "Formación registrada en LinkedIn en IES Virgen de la Paloma.",
    "details": [
      "Administración de sistemas"
    ],
    "tags": [
      "LinkedIn",
      "Formación",
      "Educación",
      "IES Virgen de la Paloma",
      "Administración de sistemas"
    ],
    "keywords": [
      "formación",
      "educación",
      "IES Virgen de la Paloma",
      "Administración de sistemas"
    ]
  },
  {
    "type": "CERTIFICACIÓN",
    "title": "Containers & Kubernetes Essentials",
    "summary": "Certificación de IBM.",
    "details": [
      "IBM",
      "Jan 2023"
    ],
    "tags": [
      "LinkedIn",
      "Certificación",
      "IBM",
      "Containers & Kubernetes Essentials"
    ],
    "keywords": [
      "certificación",
      "certificate",
      "IBM",
      "Containers & Kubernetes Essentials"
    ],
    "url": "https://www.credly.com/badges/6a972f69-a47d-4f3a-83d7-298e8a096e74/linked_in_profile"
  },
  {
    "type": "CERTIFICACIÓN",
    "title": "IBM Cloud Essentials",
    "summary": "Certificación de IBM.",
    "details": [
      "IBM",
      "Jan 2023"
    ],
    "tags": [
      "LinkedIn",
      "Certificación",
      "IBM",
      "IBM Cloud Essentials"
    ],
    "keywords": [
      "certificación",
      "certificate",
      "IBM",
      "IBM Cloud Essentials"
    ],
    "url": "https://www.credly.com/badges/f71dc166-a634-42a9-af3e-f240d0979276/linked_in_profile"
  },
  {
    "type": "CERTIFICACIÓN",
    "title": "Fundamentos de la gestión de proyectos",
    "summary": "Certificación de LinkedIn.",
    "details": [
      "LinkedIn",
      "Feb 2023"
    ],
    "tags": [
      "LinkedIn",
      "Certificación",
      "Fundamentos de la gestión de proyectos"
    ],
    "keywords": [
      "certificación",
      "certificate",
      "LinkedIn",
      "Fundamentos de la gestión de proyectos"
    ],
    "url": "https://www.linkedin.com/learning/certificates/2b6efbc2d5d1b5a6deebbe126cdf3d18c1d5911beab0d17480402141e689d890"
  },
  {
    "type": "CERTIFICACIÓN",
    "title": "Curso de elementos avanzados en tu API REST con Spring Boot",
    "summary": "Certificación de OpenWebinars.",
    "details": [
      "OpenWebinars",
      "Dec 2023"
    ],
    "tags": [
      "LinkedIn",
      "Certificación",
      "OpenWebinars",
      "Curso de elementos avanzados en tu API REST con Spring Boot"
    ],
    "keywords": [
      "certificación",
      "certificate",
      "OpenWebinars",
      "Curso de elementos avanzados en tu API REST con Spring Boot"
    ],
    "url": "https://openwebinars.net/cert/eiBW"
  },
  {
    "type": "CERTIFICACIÓN",
    "title": "Fundamentos de Angular",
    "summary": "Certificación de OpenWebinars.",
    "details": [
      "OpenWebinars",
      "Feb 2024"
    ],
    "tags": [
      "LinkedIn",
      "Certificación",
      "OpenWebinars",
      "Fundamentos de Angular"
    ],
    "keywords": [
      "certificación",
      "certificate",
      "OpenWebinars",
      "Fundamentos de Angular"
    ],
    "url": "https://openwebinars.net/cert/4Ppd"
  },
  {
    "type": "TECNOLOGÍA",
    "title": "Aptitudes profesionales de LinkedIn",
    "summary": "Aptitudes registradas en el perfil profesional de LinkedIn.",
    "details": [
      "Microservicios",
      "Prueba unitaria",
      "JUnit",
      "Hibernate",
      "JPA",
      "Microsoft Office",
      "Gestión de proyectos",
      "Microsoft Excel",
      "SQL",
      "Java",
      "HTML",
      "Desarrollo de software",
      "Análisis de negocio",
      "Servicios web",
      "Spring Framework",
      "MyBatis",
      "Oracle Database",
      "Eclipse",
      "NetBeans",
      "Tomcat",
      "Weblogic",
      "Tortoise SVN",
      "jQuery",
      "OSB",
      "EJB",
      "Maven",
      "Ant",
      "Jenkins",
      "Mantis",
      "Arquitectura orientada a servicios (SOA)",
      "Informix 4GL",
      "PL/SQL"
    ],
    "tags": [
      "LinkedIn",
      "Aptitudes",
      "Microservicios",
      "Prueba unitaria",
      "JUnit",
      "Hibernate",
      "JPA",
      "Microsoft Office",
      "Gestión de proyectos",
      "Microsoft Excel",
      "SQL",
      "Java",
      "HTML",
      "Desarrollo de software",
      "Análisis de negocio",
      "Servicios web",
      "Spring Framework",
      "MyBatis",
      "Oracle Database",
      "Eclipse",
      "NetBeans",
      "Tomcat",
      "Weblogic",
      "Tortoise SVN",
      "jQuery",
      "OSB",
      "EJB",
      "Maven",
      "Ant",
      "Jenkins",
      "Mantis",
      "Arquitectura orientada a servicios (SOA)",
      "Informix 4GL",
      "PL/SQL"
    ],
    "keywords": [
      "skills",
      "aptitudes",
      "competencias",
      "Microservicios",
      "Prueba unitaria",
      "JUnit",
      "Hibernate",
      "JPA",
      "Microsoft Office",
      "Gestión de proyectos",
      "Microsoft Excel",
      "SQL",
      "Java",
      "HTML",
      "Desarrollo de software",
      "Análisis de negocio",
      "Servicios web",
      "Spring Framework",
      "MyBatis",
      "Oracle Database",
      "Eclipse",
      "NetBeans",
      "Tomcat",
      "Weblogic",
      "Tortoise SVN",
      "jQuery",
      "OSB",
      "EJB",
      "Maven",
      "Ant",
      "Jenkins",
      "Mantis",
      "Arquitectura orientada a servicios (SOA)",
      "Informix 4GL",
      "PL/SQL"
    ]
  }
];
