import { Link, useLocation, useNavigate } from 'react-router';
import { useLang } from '../i18n';
import { useTheme } from '../theme';
import { profile } from '../data/profile';
import { MoonIcon, SunIcon } from './Icons';

export type SectionId = 'projects' | 'about' | 'experience' | 'skills' | 'contact';

/** Fait défiler vers une section de l'accueil, en y retournant si besoin. */
export function useGoToSection() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (id: SectionId) => {
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };
}

const sections: SectionId[] = ['projects', 'about', 'experience', 'skills', 'contact'];

export function Header() {
  const { ui, lang, toggleLang } = useLang();
  const { theme, toggle } = useTheme();
  const goTo = useGoToSection();

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {profile.name}
          <span className="logo-dot">.</span>
        </Link>

        <nav aria-label="Navigation principale" className="nav">
          {sections.map((id) => (
            <button key={id} type="button" className="nav-link" onClick={() => goTo(id)}>
              {ui.nav[id]}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="icon-btn lang-btn" onClick={toggleLang} aria-label={ui.a11y.lang}>
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <button type="button" className="icon-btn" onClick={toggle} aria-label={ui.a11y.theme}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
