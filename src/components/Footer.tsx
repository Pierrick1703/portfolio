import { useLang } from '../i18n';
import { profile } from '../data/profile';

export function Footer() {
  const { ui } = useLang();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="muted">{ui.footer.built}</span>
      </div>
    </footer>
  );
}
