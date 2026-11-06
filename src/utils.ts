/** Préfixe un chemin du dossier public/ avec la base de déploiement. */
export const asset = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, '');
