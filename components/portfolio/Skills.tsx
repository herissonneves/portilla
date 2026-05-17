import type { Translate } from './types';

export function Skills({ t }: { t: Translate }) {
  return (
    <section id="skills" className="section section--alternate">
      <h2 className="section__title">{t('skills-title')}</h2>
      <div className="skills__grid">
        <div className="skill-card">
          <h3 className="skill-card__title">{t('skills-frontend-title')}</h3>
          <ul className="skill-card__list">
            <li className="skill-card__item">HTML5 & CSS3</li>
            <li className="skill-card__item">JavaScript (ES6+)</li>
            <li className="skill-card__item">React & Next.js</li>
            <li className="skill-card__item">{t('skills-frontend-responsive')}</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="skill-card__title">{t('skills-backend-title')}</h3>
          <ul className="skill-card__list">
            <li className="skill-card__item">Node.js</li>
            <li className="skill-card__item">Python</li>
            <li className="skill-card__item">RESTful APIs</li>
            <li className="skill-card__item">{t('skills-backend-db')}</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="skill-card__title">{t('skills-tools-title')}</h3>
          <ul className="skill-card__list">
            <li className="skill-card__item">Git & GitHub</li>
            <li className="skill-card__item">VS Code</li>
            <li className="skill-card__item">{t('skills-tools-agile')}</li>
            <li className="skill-card__item">{t('skills-tools-problem')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
