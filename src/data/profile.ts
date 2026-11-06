import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Pierrick Cottin',
  role: {
    fr: 'Développeur full-stack · Data & IA',
    en: 'Full-stack Developer · Data & AI',
  },
  pitch: {
    fr: "Plus de 3 ans d'expérience dans le développement d'outils data et web, de la conception à la mise en production. Voici les projets sur lesquels je travaille.",
    en: 'Over 3 years of experience building data and web tools, from design to production. Here are the projects I am working on.',
  },
  about: {
    fr: [
      "Développeur full-stack titulaire d'un Master en Ingénierie Informatique (ESIEE IT), j'interviens sur l'ensemble de la chaîne : conception, développement, mise en production et documentation.",
      "Chez Campus Veolia, j'ai occupé un rôle à la croisée du développement et de la data : conception de pipelines de données, de tableaux de bord décisionnels et d'outils métier sur mesure. Je m'intéresse aujourd'hui particulièrement à l'IA appliquée : LLM locaux, RAG et agents autonomes.",
      "Français natif, anglais courant (TOEIC B2). Je recherche un poste de développeur au sein d'une équipe où je pourrai mettre à profit mes compétences, data et IA.",
    ],
    en: [
      "A full-stack developer holding a Master's degree in Computer Engineering (ESIEE IT), I work across the whole lifecycle: design, development, deployment and documentation.",
      'At Campus Veolia, my role combined software development and data: I designed data pipelines, decision-making dashboards and custom business tools. I am now particularly focused on applied AI: local LLMs, RAG and autonomous agents.',
      'Native French speaker, fluent in English (TOEIC B2). I am looking for a developer position in a team where I can put my software, data and AI skills to use.',
    ],
  },
  location: { fr: 'Île-de-France', en: 'Île-de-France, France' },
  openToWork: true,
  email: 'cottin.pierrick@gmail.com',
  phone: '',
  github: 'https://github.com/Pierrick1703',
  linkedin: 'https://www.linkedin.com/in/pierrickcottin',
  skills: [
    {
      category: { fr: 'Langages', en: 'Languages' },
      items: ['JavaScript', 'Python', 'C# / .NET', 'Java', 'PHP', 'HTML / CSS', 'Google Apps Script', 'SQL'],
    },
    {
      category: { fr: 'Frameworks', en: 'Frameworks' },
      items: ['React', 'Spring Boot', 'Laravel', 'FastAPI'],
    },
    {
      category: { fr: 'Bases de données', en: 'Databases' },
      items: ['MySQL / MariaDB', 'SQL Server', 'PostgreSQL', 'BigQuery', 'Snowflake', 'ChromaDB'],
    },
    {
      category: { fr: 'Cloud & Big Data', en: 'Cloud & Big Data' },
      items: ['Google Cloud Platform', 'Spark', 'Hadoop', 'Docker'],
    },
    {
      category: { fr: 'Data visualisation', en: 'Data visualisation' },
      items: ['Power BI', 'Tableau', 'Looker Studio', 'Excel'],
    },
    {
      category: { fr: 'IA', en: 'AI' },
      items: ['LLM (Ollama)', 'RAG', 'Agents IA', 'NLP', 'Machine Learning'],
    },
    {
      category: { fr: 'Méthodes & outils', en: 'Methods & tools' },
      items: ['API REST & sécurité', 'Git', 'Agile', 'Gestion de projet'],
    },
  ],
  experience: [
    {
      period: '2026 — aujourd’hui',
      title: { fr: 'Conseiller clientèle (emploi temporaire)', en: 'Customer Advisor (temporary position)' },
      org: 'TotalEnergies',
      description: {
        fr: "Relation client au quotidien dans un environnement à forte affluence : rigueur, sens du service et gestion de priorités multiples. En parallèle, développement de projets personnels en IA (agent autonome, RAG).",
        en: 'Day-to-day customer relations in a high-traffic environment: rigour, service mindset and handling multiple priorities. Alongside this, building personal AI projects (autonomous agent, RAG).',
      },
    },
    {
      period: '2023',
      title: { fr: 'Data Engineer & Développeur (intérim)', en: 'Data Engineer & Developer (contract)' },
      org: 'Campus Veolia',
      description: {
        fr: "Pilotage des espaces de stockage de données et structuration de la documentation pour garantir la pérennité et la fiabilité des environnements data. Maintenance corrective et évolutive du système d'information.",
        en: 'Managed data storage spaces and structured the documentation to ensure the long-term reliability of data environments. Corrective and evolutionary maintenance of the information system.',
      },
    },
    {
      period: '2020 — 2023',
      title: { fr: 'Data Engineer & Développeur', en: 'Data Engineer & Developer' },
      org: 'Campus Veolia',
      description: {
        fr: "Conception et mise en production de pipelines de données fiables, avec gestion de la qualité et de la sécurité des données. Développement de tableaux de bord (Looker Studio, Tableau, Excel) pour le pilotage et la prise de décision. Création d'un outil sur mesure de gestion des formations des alternants. Stack : JavaScript, Python, MySQL, Snowflake, Google Cloud Platform, Docker.",
        en: 'Designed and deployed reliable data pipelines with data quality and security management. Built dashboards (Looker Studio, Tableau, Excel) for operational steering and decision-making. Developed a custom tool to manage apprentice training programs. Stack: JavaScript, Python, MySQL, Snowflake, Google Cloud Platform, Docker.',
      },
    },
    {
      period: '2020 — 2023',
      title: {
        fr: 'Master en Ingénierie Informatique — Ingénierie Logiciels et Systèmes',
        en: "Master's degree in Computer Engineering — Software and Systems Engineering",
      },
      org: 'ESIEE IT, Cergy',
      description: {
        fr: "Master obtenu en 2023, précédé d'une Licence informatique générale (2021). Complété en 2024 par une formation Power BI et Machine Learning avec Python.",
        en: "Master's degree obtained in 2023, preceded by a Bachelor's degree in Computer Science (2021). Complemented in 2024 by a Power BI and Machine Learning with Python course.",
      },
    },
    {
      period: '2019 — 2020',
      title: { fr: 'Stagiaire développeur', en: 'Developer Intern' },
      org: 'Institut de Recherche Criminelle de la Gendarmerie Nationale, Pontoise',
      description: {
        fr: "Développement d'un outil d'identification de victimes par l'analyse de données dentaires, réduisant les délais d'identification en contexte médico-légal. Création d'une base de données structurée sur les téléphones portables pour faciliter la recherche et l'analyse dans un cadre d'enquête. Environnement Linux, PHP, JavaScript, MySQL, Docker.",
        en: 'Developed a victim identification tool based on dental data analysis, reducing identification times in a forensic context. Built a structured database of mobile phones to streamline search and analysis in investigations. Linux environment, PHP, JavaScript, MySQL, Docker.',
      },
    },
    {
      period: '2018 — 2020',
      title: {
        fr: 'BTS Services Informatiques aux Organisations, option SLAM',
        en: 'Higher National Diploma in IT Services for Organisations (software development track)',
      },
      org: 'Lycée Jules Ferry, Conflans-Sainte-Honorine',
      description: {
        fr: 'Solutions logicielles et applications métiers. Précédé d\'un Baccalauréat S, spécialité Informatique et sciences du numérique (2018).',
        en: 'Software solutions and business applications. Preceded by a scientific Baccalauréat with a Computer Science specialisation (2018).',
      },
    },
  ],
};
