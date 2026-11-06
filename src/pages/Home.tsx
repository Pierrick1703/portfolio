import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import { useLang } from '../i18n';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { useGoToSection, type SectionId } from '../components/Header';
import { ArrowIcon, FileIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from '../components/Icons';
import { asset } from '../utils';

export default function Home() {
  const { t, ui } = useLang();
  const location = useLocation();
  const goTo = useGoToSection();
  const [filter, setFilter] = useState<string | null>(null);

  // Arrivée depuis une autre page avec une section cible.
  useEffect(() => {
    const target = (location.state as { scrollTo?: SectionId } | null)?.scrollTo;
    if (target) document.getElementById(target)?.scrollIntoView();
  }, [location.state]);

  const allTags = useMemo(() => [...new Set(projects.flatMap((p) => p.tags))].sort(), []);
  const visible = filter ? projects.filter((p) => p.tags.includes(filter)) : projects;

  return (
    <>
      <section className="hero container">
        {profile.openToWork && (
          <p className="pill">
            <span className="pulse" aria-hidden="true" /> {ui.hero.open}
          </p>
        )}
        <p className="mono muted hero-hello">{ui.hero.hello}</p>
        <h1 className="hero-title">{profile.name}</h1>
        <p className="hero-role gradient-text">{t(profile.role)}</p>
        <p className="hero-pitch">{t(profile.pitch)}</p>
        <div className="hero-actions">
          <button type="button" className="btn btn--primary" onClick={() => goTo('projects')}>
            {ui.hero.seeProjects} <ArrowIcon width={18} height={18} />
          </button>
          <button type="button" className="btn" onClick={() => goTo('contact')}>
            {ui.hero.contactMe}
          </button>
        </div>
      </section>

      <section id="projects" className="section container">
        <header className="section-head reveal">
          <h2 className="section-title">
            <span className="mono accent">01.</span> {ui.projects.title}
          </h2>
          <p className="muted">{ui.projects.subtitle}</p>
        </header>

        <div className="filters" role="group" aria-label="Filtres">
          <button type="button" className="chip" aria-pressed={filter === null} onClick={() => setFilter(null)}>
            {ui.projects.all}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className="chip"
              aria-pressed={filter === tag}
              onClick={() => setFilter(filter === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid">
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section id="about" className="section container narrow">
        <h2 className="section-title reveal">
          <span className="mono accent">02.</span> {ui.about.title}
        </h2>
        {t(profile.about).map((para, i) => (
          <p key={i} className="lead reveal">
            {para}
          </p>
        ))}
      </section>

      <section id="experience" className="section container narrow">
        <h2 className="section-title reveal">
          <span className="mono accent">03.</span> {ui.experience.title}
        </h2>
        <ol className="timeline">
          {profile.experience.map((xp) => (
            <li key={xp.period + xp.org} className="timeline-item reveal">
              <span className="mono muted timeline-period">{xp.period}</span>
              <h3 className="timeline-title">
                {t(xp.title)} <span className="muted">· {xp.org}</span>
              </h3>
              <p className="muted">{t(xp.description)}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="skills" className="section container">
        <h2 className="section-title reveal">
          <span className="mono accent">04.</span> {ui.skills.title}
        </h2>
        <div className="skills">
          {profile.skills.map((group) => (
            <div key={group.category.en} className="skill-group reveal">
              <h3 className="skill-title">{t(group.category)}</h3>
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item} className="tag tag--lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section container narrow contact reveal">
        <h2 className="section-title">
          <span className="mono accent">05.</span> {ui.contact.title}
        </h2>
        <p className="lead">{ui.contact.text}</p>
        <div className="contact-actions">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            <MailIcon width={18} height={18} /> {ui.contact.email}
          </a>
          {profile.phone && (
            <a className="btn" href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>
              <PhoneIcon width={18} height={18} /> {profile.phone}
            </a>
          )}
          {profile.cv && (
            <a className="btn" href={asset(profile.cv)} download>
              <FileIcon width={18} height={18} /> {ui.contact.cv}
            </a>
          )}
          {profile.linkedin && (
            <a className="btn btn--icon" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          )}
          {profile.github && (
            <a className="btn btn--icon" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
          )}
        </div>
      </section>
    </>
  );
}
