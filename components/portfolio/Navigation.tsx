import type { MouseEvent } from 'react';
import type { Lang } from '@/lib/i18n/translations';
import type { Translate } from './types';

type NavigationProps = {
  t: Translate;
  lang: Lang;
  onLanguageChange: (lang: Lang) => void;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onNavLinkClick: (e: MouseEvent<HTMLAnchorElement>, hash: string) => void;
  navScrolled: boolean;
  themeSelectValue: string;
  onThemeChange: (value: string) => void;
  contrastSelectValue: string;
  onContrastChange: (value: string) => void;
};

export function Navigation({
  t,
  lang,
  onLanguageChange,
  menuOpen,
  onToggleMenu,
  onNavLinkClick,
  navScrolled,
  themeSelectValue,
  onThemeChange,
  contrastSelectValue,
  onContrastChange,
}: NavigationProps) {
  const navClass = ['navigation', navScrolled ? 'navigation--scrolled' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={navClass} id="navigation">
      <div className="navigation__container">
        <div className="navigation__logo">portilla</div>
        <a
          href="https://github.com/herissonneves"
          target="_blank"
          rel="noopener noreferrer"
          className="navigation__github-link"
          aria-label="GitHub Profile"
          title="GitHub Profile"
        >
          <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
        <button
          type="button"
          className="navigation__mobile-toggle"
          onClick={onToggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
        <ul
          className={['navigation__menu', menuOpen ? 'navigation__menu--active' : '']
            .filter(Boolean)
            .join(' ')}
          id="navMenu"
        >
          <li className="navigation__item">
            <a
              href="#home"
              className="navigation__link"
              onClick={(e) => onNavLinkClick(e, '#home')}
            >
              {t('nav-home')}
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#about"
              className="navigation__link"
              onClick={(e) => onNavLinkClick(e, '#about')}
            >
              {t('nav-about')}
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#skills"
              className="navigation__link"
              onClick={(e) => onNavLinkClick(e, '#skills')}
            >
              {t('nav-skills')}
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#projects"
              className="navigation__link"
              onClick={(e) => onNavLinkClick(e, '#projects')}
            >
              {t('nav-projects')}
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#contact"
              className="navigation__link"
              onClick={(e) => onNavLinkClick(e, '#contact')}
            >
              {t('nav-contact')}
            </a>
          </li>
          <li className="navigation__item">
            <div className="theme-selector">
              <select
                id="themeSelect"
                className="theme-selector__control"
                value={themeSelectValue}
                onChange={(e) => onThemeChange(e.target.value)}
                aria-label="Select theme"
              >
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
              <select
                id="contrastSelect"
                className="theme-selector__control"
                value={contrastSelectValue}
                onChange={(e) => onContrastChange(e.target.value)}
                aria-label="Select contrast"
              >
                <option value="standard">Standard</option>
                <option value="medium-contrast">Medium</option>
                <option value="high-contrast">High</option>
              </select>
            </div>
          </li>
          <li className="navigation__item">
            <div className="language-selector">
              {(['en', 'pt', 'es'] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  className={
                    'language-selector__button' +
                    (lang === code ? ' language-selector__button--active' : '')
                  }
                  onClick={() => onLanguageChange(code)}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
