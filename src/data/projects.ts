import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'agent-emploi',
    title: 'Agent IA de recherche d\'emploi',
    year: '2026',
    status: 'paused',
    tags: ['IA', 'Agent', 'Python', 'Self-hosted'],
    intro: {
      fr: "Un agent autonome hébergé sur mon NAS qui collecte des offres d'emploi, les note par rapport à mon CV et le prépare.",
      en: 'An autonomous agent hosted on my NAS that collects job offers, scores them against my CV and prepares a CV.',
    },
    description: {
      fr: [
        "L'agent interroge des API publique selon mes critères, puis un LLM local compare chaque offre à mon CV et lui attribue un score sur 100.",
        "Pour les offres pertinentes, il génère en PDF un CV (de base ou adapté à l'offre) et une lettre de motivation. L'envoi reste sous mon contrôle, depuis un tableau de bord web.",
        "Il travaille selon un planning configurable (jusqu'à 24 h/24). Aucune donnée personnelle ne part vers un service d'IA externe.",
      ],
      en: [
        'The agent queries the all access APIs based on my criteria, then a local LLM compares each offer to my CV and scores it out of 100.',
        'For relevant offers, it generates a PDF CV (base or tailored to the offer) and a cover letter. Sending stays under my control, from a web dashboard.',
        'It runs on a configurable schedule (up to 24/7) . No personal data is sent to an external AI service.',
      ],
    },
    technical: {
      stack: ['Python', 'FastAPI', 'Ollama (Qwen 2.5 7B)', 'MariaDB', 'SQLAlchemy', 'APScheduler', 'WeasyPrint', 'Docker'],
      points: {
        fr: [
          'LLM local via Ollama avec réponses structurées en JSON : score selon un barème fixe, points forts et manques.',
          "Garde-fous contre les hallucinations : les compétences absentes du CV d'origine sont filtrées par le code, l'identité et les dates ne sont jamais modifiées.",
          'Planificateur avec modes automatique / réveillé / endormi et plages horaires, y compris de nuit.',
          'Résistance aux pannes : une source ou le LLM indisponible n\'interrompt pas le reste, les offres sont reprises au cycle suivant.',
          'Génération de PDF à partir de gabarits HTML (Jinja2 + WeasyPrint), stockage en base MariaDB.',
          'Déploiement Docker Compose sur NAS QNAP, tableau de bord protégé par authentification.',
        ],
        en: [
          'Local LLM via Ollama with structured JSON responses: score on a fixed rubric, strengths and gaps.',
          'Hallucination guardrails: skills missing from the original CV are filtered out in code, identity and dates are never changed.',
          'Scheduler with automatic / awake / asleep modes and time windows, including overnight.',
          'Fault tolerance: an unavailable source or LLM does not stop the rest, offers are picked up on the next cycle.',
          'PDF generation from HTML templates (Jinja2 + WeasyPrint), stored in MariaDB.',
          'Docker Compose deployment on a QNAP NAS, dashboard protected by authentication.',
        ],
      },
    },
  },
  {
    slug: 'rag-documents',
    title: 'RAG local sur mes documents',
    year: '2026',
    status: 'done',
    tags: ['IA', 'RAG', 'Python', 'Self-hosted'],
    intro: {
      fr: "Un chatbot qui répond à mes questions à partir des documents de mon PC et de mon NAS, entièrement en local.",
      en: 'A chatbot that answers my questions from the documents on my PC and NAS, fully locally.',
    },
    description: {
      fr: [
        "Un LLM ne connaît pas mes documents et ne peut pas tous les lire à chaque question. Le RAG (Retrieval-Augmented Generation) résout ce problème : une recherche par le sens sélectionne les extraits pertinents, puis le LLM rédige la réponse à partir d'eux en citant ses sources.",
        "L'indexeur lit les PDF (y compris scannés, grâce à l'OCR), Word, Excel, PowerPoint et fichiers texte, les découpe en morceaux et les range dans une base vectorielle. Le chatbot propose aussi des commandes de recherche par le sens, par nom de fichier et de comptage de documents par sujet.",
        "Aucune donnée ne sort de la machine : modèles, base et OCR tournent tous en local.",
      ],
      en: [
        'An LLM does not know my documents and cannot read them all for every question. RAG (Retrieval-Augmented Generation) solves this: a semantic search selects the relevant excerpts, then the LLM writes the answer from them and cites its sources.',
        'The indexer reads PDFs (including scanned ones, through OCR), Word, Excel, PowerPoint and text files, splits them into chunks and stores them in a vector database. The chatbot also offers commands for semantic search, filename search and counting documents by topic.',
        'No data leaves the machine: models, database and OCR all run locally.',
      ],
    },
    technical: {
      stack: ['Python', 'Ollama (Llama 3.1 8B)', 'nomic-embed-text', 'ChromaDB', 'Tesseract OCR', 'pypdf', 'pypdfium2'],
      points: {
        fr: [
          'Pipeline RAG : découpage en morceaux de 1000 caractères avec chevauchement, embeddings, recherche par distance cosinus (index HNSW), réponse en streaming avec citations.',
          'OCR page par page des PDF scannés, déclenché seulement si nécessaire.',
          'Indexation incrémentale : seuls les fichiers modifiés sont retraités, une relance sans changement prend 0 s. Les fichiers du NAS sont conservés si le NAS est déconnecté.',
          'Commande de comptage par seuil relatif au meilleur résultat, plus fiable qu\'un seuil fixe sur des documents administratifs qui se ressemblent.',
          'Diagnostic et correction : pagination contre l\'erreur SQLite « too many SQL variables », exclusion de fichiers parasites.',
        ],
        en: [
          'RAG pipeline: 1000-character chunks with overlap, embeddings, cosine-distance search (HNSW index), streamed answers with citations.',
          'Page-by-page OCR of scanned PDFs, only when needed.',
          'Incremental indexing: only changed files are reprocessed, a rerun with no changes takes 0 s. NAS files are kept when the NAS is offline.',
          'Counting command using a threshold relative to the best match, more reliable than a fixed threshold on similar-looking administrative documents.',
          'Debugging and fixes: pagination to avoid the SQLite "too many SQL variables" error, exclusion of noisy files.',
        ],
      },
    },
  },
  {
    slug: 'assistant-vocal',
    title: 'Assistant numérique à commande vocale',
    year: '2025',
    status: 'in-progress',
    tags: ['IA', 'C#', 'React', 'Python', 'Self-hosted'],
    intro: {
      fr: "Un assistant de bureau toujours actif sur l'ordinateur, qui exécute des actions en réponse à des commandes vocales.",
      en: 'An always-on desktop assistant that carries out actions in response to voice commands.',
    },
    description: {
      fr: [
        "L'assistant m'aide à gérer plusieurs aspects de mon quotidien : mes rendez-vous, l'inventaire de ce que je possède, ainsi que le suivi de mes projets et de mes outils informatiques, comme mon espace de stockage ou mon agent IA.",
      ],
      en: [
        'The assistant helps me manage several aspects of my daily life: my appointments, an inventory of what I own, and the status of my projects and IT tools, such as my storage or my AI agent.',
      ],
    },
    technical: {
      stack: ['C# / .NET', 'React', 'Vite', 'Python', 'Vosk', 'NLP', 'Reconnaissance vocale'],
      points: {
        fr: [
          'Back-end et architecture du projet en C# / .NET.',
          "Traitement du langage et reconnaissance vocale en Python avec Vosk, pour que l'IA tourne autant que possible en local.",
          'Interfaces visuelles développées en React avec Vite.',
        ],
        en: [
          'Back end and project architecture in C# / .NET.',
          'Natural language processing and speech recognition in Python with Vosk, keeping the AI running locally as much as possible.',
          'User interfaces built with React and Vite.',
        ],
      },
    },
  },
  {
    slug: 'jeu-video-2d',
    title: 'Jeu vidéo 2D',
    year: '2025',
    status: 'paused',
    tags: ['Jeu vidéo', '2D', 'Unity', 'C#'],
    intro: {
      fr: "Création d'un jeu vidéo 2D avec Unity.",
      en: 'Building a 2D video game with Unity.',
    },
    description: {
      fr: ["Un jeu d'action et de plateforme en 2D pour ordinateur."],
      en: ['A 2D action platformer for PC.'],
    },
    technical: {
      stack: ['C#', 'Unity'],
      points: {
        fr: ['Écriture des scripts C# qui gèrent les interactions entre les objets et les actions du joueur.'],
        en: ['C# scripts handling interactions between game objects and player actions.'],
      },
    },
  },
];