import { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router';
import { LangProvider, useLang } from './i18n';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Page projet chargée à la demande (code splitting).
const ProjectPage = lazy(() => import('./pages/ProjectPage'));

function Layout() {
  const { ui } = useLang();
  return (
    <>
      <a href="#main" className="skip-link" onClick={(e) => {
        e.preventDefault();
        document.getElementById('main')?.focus();
      }}>
        {ui.a11y.skip}
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Suspense fallback={<div className="container loading" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets/:slug" element={<ProjectPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <LangProvider>
        <Layout />
      </LangProvider>
    </HashRouter>
  );
}
