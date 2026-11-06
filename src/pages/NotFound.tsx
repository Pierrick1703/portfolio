import { Link } from 'react-router';
import { useLang } from '../i18n';

export default function NotFound() {
  const { ui } = useLang();
  return (
    <section className="container narrow notfound">
      <p className="mono accent notfound-code">404</p>
      <h1>{ui.notFound.title}</h1>
      <Link to="/" className="btn btn--primary">
        {ui.notFound.back}
      </Link>
    </section>
  );
}
