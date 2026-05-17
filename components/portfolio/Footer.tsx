import type { Translate } from './types';

export function Footer({ t }: { t: Translate }) {
  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; {new Date().getFullYear()} Herisson Neves. {t('footer-rights')}
      </p>
    </footer>
  );
}
