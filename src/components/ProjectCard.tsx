import { Link } from 'react-router';
import { useLang } from '../i18n';
import type { Project } from '../types';
import { asset } from '../utils';
import { StatusBadge } from './StatusBadge';
import { ArrowIcon } from './Icons';

export function ProjectCard({ project }: { project: Project }) {
  const { t, ui } = useLang();
  return (
    <article className="card reveal">
      <Link to={`/projets/${project.slug}`} className="card-link" aria-label={`${ui.projects.more} : ${project.title}`}>
        <div className="card-media">
          {project.cover ? (
            <img src={asset(project.cover)} alt="" loading="lazy" />
          ) : (
            <div className="card-media-fallback">{project.title.charAt(0)}</div>
          )}
        </div>
        <div className="card-body">
          <div className="card-meta">
            <StatusBadge status={project.status} />
            <span className="mono muted">{project.year}</span>
          </div>
          <h3 className="card-title">{project.title}</h3>
          <p className="card-intro">{t(project.intro)}</p>
          <ul className="tags" aria-label="Tags">
            {project.tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
          <span className="card-more">
            {ui.projects.more} <ArrowIcon width={16} height={16} />
          </span>
        </div>
      </Link>
    </article>
  );
}
