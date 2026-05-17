import type { Translate } from './types';

export function About({ t }: { t: Translate }) {
  return (
    <section id="about" className="section">
      <h2 className="section__title">{t('about-title')}</h2>
      <div className="about__content">
        <div className="about__text">
          <p className="about__paragraph">{t('about-p1')}</p>
          <p className="about__paragraph">{t('about-p2')}</p>
          <p className="about__paragraph">{t('about-p3')}</p>
          <p className="about__paragraph about__paragraph--highlighted">{t('about-portilla')}</p>
        </div>
        <div className="about__image-container">
          <div className="about__profile">👨‍💻</div>
        </div>
      </div>
    </section>
  );
}
