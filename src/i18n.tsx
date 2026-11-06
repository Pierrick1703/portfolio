import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Lang, ProjectStatus } from './types';

const fr = {
  nav: { projects: 'Projets', about: 'À propos', experience: 'Parcours', skills: 'Compétences', contact: 'Contact' },
  hero: { hello: 'Bonjour, je suis', seeProjects: 'Voir mes projets', contactMe: 'Me contacter', open: 'Ouvert aux opportunités' },
  projects: { title: 'Projets', subtitle: 'Ce sur quoi je travaille en ce moment et ce que j\'ai réalisé.', all: 'Tous', more: 'Voir le projet' },
  status: { 'in-progress': 'En cours', done: 'Terminé', paused: 'En pause' } satisfies Record<ProjectStatus, string>,
  project: {
    back: 'Tous les projets',
    description: 'Description',
    technical: 'Description technique',
    stack: 'Stack',
    gallery: 'Galerie',
    repo: 'Code source',
    demo: 'Démo',
    prev: 'Projet précédent',
    next: 'Projet suivant',
    close: 'Fermer',
  },
  about: { title: 'À propos' },
  experience: { title: 'Parcours' },
  skills: { title: 'Compétences' },
  contact: {
    title: 'Contact',
    text: 'Un poste, une question ou un projet ? Écrivez-moi, je réponds rapidement.',
    email: 'M\'écrire',
    cv: 'Télécharger mon CV',
  },
  notFound: { title: 'Page introuvable', back: 'Retour à l\'accueil' },
  footer: { built: 'Conçu et développé avec React, TypeScript et Vite.' },
  a11y: { theme: 'Changer de thème', lang: 'Switch to English', skip: 'Aller au contenu' },
};

type Dict = typeof fr;

const en: Dict = {
  nav: { projects: 'Projects', about: 'About', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
  hero: { hello: 'Hi, I am', seeProjects: 'See my projects', contactMe: 'Get in touch', open: 'Open to opportunities' },
  projects: { title: 'Projects', subtitle: 'What I am working on right now and what I have built.', all: 'All', more: 'View project' },
  status: { 'in-progress': 'In progress', done: 'Completed', paused: 'On hold' },
  project: {
    back: 'All projects',
    description: 'Overview',
    technical: 'Technical details',
    stack: 'Stack',
    gallery: 'Gallery',
    repo: 'Source code',
    demo: 'Live demo',
    prev: 'Previous project',
    next: 'Next project',
    close: 'Close',
  },
  about: { title: 'About' },
  experience: { title: 'Experience' },
  skills: { title: 'Skills' },
  contact: {
    title: 'Contact',
    text: 'A position, a question or a project? Drop me a line, I reply quickly.',
    email: 'Email me',
    cv: 'Download my resume',
  },
  notFound: { title: 'Page not found', back: 'Back to home' },
  footer: { built: 'Designed and built with React, TypeScript and Vite.' },
  a11y: { theme: 'Toggle theme', lang: 'Passer en français', skip: 'Skip to content' },
};

const dictionaries: Record<Lang, Dict> = { fr, en };

interface LangContextValue {
  lang: Lang;
  toggleLang: () => void;
  /** Sélectionne la bonne langue d'une valeur { fr, en } */
  t: <T>(value: Record<Lang, T>) => T;
  ui: Dict;
}

const LangContext = createContext<LangContextValue | null>(null);

function initialLang(): Lang {
  const saved = localStorage.getItem('lang');
  if (saved === 'fr' || saved === 'en') return saved;
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }, [lang]);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      toggleLang: () => setLang((l) => (l === 'fr' ? 'en' : 'fr')),
      t: (v) => v[lang],
      ui: dictionaries[lang],
    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
}
