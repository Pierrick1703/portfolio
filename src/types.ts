export type Lang = 'fr' | 'en';

/** Texte traduit : { fr: '...', en: '...' } */
export type Localized = Record<Lang, string>;
/** Liste de paragraphes / puces traduits : { fr: [...], en: [...] } */
export type LocalizedList = Record<Lang, string[]>;

export type ProjectStatus = 'in-progress' | 'done' | 'paused';

export interface ProjectImage {
  /** Chemin relatif au dossier public/, ex: "projects/mon-projet/screen1.png" */
  src: string;
  alt: Localized;
}

export interface Project {
  /** Identifiant utilisé dans l'URL : /#/projets/<slug> */
  slug: string;
  title: string;
  year: string;
  status: ProjectStatus;
  tags: string[];
  /** Image de couverture (relative à public/) */
  cover?: string;
  intro: Localized;
  description: LocalizedList;
  technical: {
    stack: string[];
    points: LocalizedList;
  };
  images?: ProjectImage[];
  links?: { repo?: string; demo?: string };
}

export interface Experience {
  period: string;
  title: Localized;
  org: string;
  description: Localized;
}

export interface SkillGroup {
  category: Localized;
  items: string[];
}

export interface Profile {
  name: string;
  role: Localized;
  pitch: Localized;
  about: LocalizedList;
  location: Localized;
  openToWork: boolean;
  email: string;
  /** Numéro affiché tel quel, ex: "06 12 34 56 78" (laisser vide pour masquer) */
  phone?: string;
  github?: string;
  linkedin?: string;
  /** Chemin relatif à public/, ex: "cv.pdf" */
  cv?: string;
  skills: SkillGroup[];
  experience: Experience[];
}
