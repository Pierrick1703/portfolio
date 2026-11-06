import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router';
import { useLang } from '../i18n';
import { projects } from '../data/projects';
import { StatusBadge } from '../components/StatusBadge';
import { ArrowIcon, ExternalIcon, GithubIcon } from '../components/Icons';
import type { ProjectImage } from '../types';
import { asset } from '../utils';
import NotFound from './NotFound';

export default function ProjectPage() {
  const { slug } = useParams();
  const { t, ui } = useLang();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [zoomed, setZoomed] = useState<ProjectImage | null>(null);

  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) document.title = `${project.title} — Portfolio`;
    return () => {
      document.title = 'Portfolio';
    };
  }, [project]);

  if (!project) return <NotFound />;

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const openImage = (img: ProjectImage) => {
    setZoomed(img);
    dialogRef.current?.showModal();
  };

  return (
    <article className="container narrow project">
      <Link to="/" state={{ scrollTo: 'projects' }} className="back-link">
        <ArrowIcon width={16} height={16} className="flip" /> {ui.project.back}
      </Link>

      <header className="project-head">
        <div className="card-meta">
          <StatusBadge status={project.status} />
          <span className="mono muted">{project.year}</span>
        </div>
        <h1 className="project-title">{project.title}</h1>
        <p className="lead">{t(project.intro)}</p>
        <ul className="tags">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
        {project.links && (
          <div className="project-links">
            {project.links.repo && (
              <a className="btn" href={project.links.repo} target="_blank" rel="noreferrer">
                <GithubIcon width={18} height={18} /> {ui.project.repo}
              </a>
            )}
            {project.links.demo && (
              <a className="btn btn--primary" href={project.links.demo} target="_blank" rel="noreferrer">
                <ExternalIcon width={18} height={18} /> {ui.project.demo}
              </a>
            )}
          </div>
        )}
      </header>

      {project.cover && (
        <img className="project-cover" src={asset(project.cover)} alt="" />
      )}

      <section className="project-section">
        <h2 className="section-title section-title--sm">{ui.project.description}</h2>
        {t(project.description).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </section>

      <section className="project-section">
        <h2 className="section-title section-title--sm">{ui.project.technical}</h2>
        <div className="stack">
          <span className="mono muted">{ui.project.stack}</span>
          <ul className="tags">
            {project.technical.stack.map((s) => (
              <li key={s} className="tag tag--accent">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <ul className="points">
          {t(project.technical.points).map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
      </section>

      {project.images && project.images.length > 0 && (
        <section className="project-section">
          <h2 className="section-title section-title--sm">{ui.project.gallery}</h2>
          <div className="gallery">
            {project.images.map((img) => (
              <figure key={img.src}>
                <button type="button" className="gallery-btn" onClick={() => openImage(img)}>
                  <img src={asset(img.src)} alt={t(img.alt)} loading="lazy" />
                </button>
                <figcaption className="muted">{t(img.alt)}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <nav className="project-nav" aria-label="Projets">
        <Link to={`/projets/${prev.slug}`} className="project-nav-link">
          <span className="mono muted">← {ui.project.prev}</span>
          <span>{prev.title}</span>
        </Link>
        <Link to={`/projets/${next.slug}`} className="project-nav-link project-nav-link--next">
          <span className="mono muted">{ui.project.next} →</span>
          <span>{next.title}</span>
        </Link>
      </nav>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClick={() => dialogRef.current?.close()}
        onClose={() => setZoomed(null)}
      >
        {zoomed && <img src={asset(zoomed.src)} alt={t(zoomed.alt)} />}
        <button type="button" className="icon-btn lightbox-close" aria-label={ui.project.close}>
          ✕
        </button>
      </dialog>
    </article>
  );
}
