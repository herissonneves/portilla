import type { Translate } from './types';

export function Projects({ t }: { t: Translate }) {
  return (
    <section id="projects" className="section">
      <h2 className="section__title">{t('projects-title')}</h2>
      <div className="projects__grid">
        <article className="project-card">
          <div className="project-card__image">🌐</div>
          <div className="project-card__content">
            <h3 className="project-card__title">{t('project1-title')}</h3>
            <p className="project-card__description">{t('project1-desc')}</p>
            <div className="project-card__tags">
              <span className="tag">Next.js</span>
              <span className="tag">React</span>
              <span className="tag">CSS</span>
            </div>
            <div className="project-card__actions">
              <a
                href="https://github.com/herissonneves/portilla"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--outlined"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
        <article className="project-card">
          <div className="project-card__image">✅</div>
          <div className="project-card__content">
            <h3 className="project-card__title">{t('project2-title')}</h3>
            <p className="project-card__description">{t('project2-desc')}</p>
            <div className="project-card__tags">
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">JavaScript</span>
            </div>
            <div className="project-card__actions">
              <a
                href="https://herissonneves.github.io/axio/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--filled"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/herissonneves/axio"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--outlined"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
        <article className="project-card">
          <div className="project-card__image">🔢</div>
          <div className="project-card__content">
            <h3 className="project-card__title">{t('project3-title')}</h3>
            <p className="project-card__description">{t('project3-desc')}</p>
            <div className="project-card__tags">
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">JavaScript</span>
            </div>
            <div className="project-card__actions">
              <a
                href="https://herissonneves.github.io/quantio/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--filled"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/herissonneves/quantio"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--outlined"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
