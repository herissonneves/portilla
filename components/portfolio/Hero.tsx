import type { MouseEvent } from 'react';
import type { Translate } from './types';

type HeroProps = {
  t: Translate;
  onHashClick: (e: MouseEvent<HTMLAnchorElement>, hash: string) => void;
};

export function Hero({ t, onHashClick }: HeroProps) {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">{t('hero-title')}</h1>
        <p className="hero__subtitle">{t('hero-subtitle')}</p>
        <p className="hero__description">{t('hero-description')}</p>
        <div className="hero__actions">
          <a
            href="#projects"
            className="button button--filled"
            onClick={(e) => onHashClick(e, '#projects')}
          >
            {t('hero-btn-projects')}
          </a>
          <a
            href="#contact"
            className="button button--outlined"
            onClick={(e) => onHashClick(e, '#contact')}
          >
            {t('hero-btn-contact')}
          </a>
        </div>
      </div>
    </section>
  );
}
