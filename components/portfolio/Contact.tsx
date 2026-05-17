import type { FormEvent } from 'react';
import type { Translate } from './types';

type ContactProps = {
  t: Translate;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export function Contact({ t, onSubmit }: ContactProps) {
  return (
    <section id="contact" className="section contact">
      <h2 className="section__title">{t('contact-title')}</h2>
      <div className="contact__content">
        <p className="contact__description">{t('contact-description')}</p>
        <form className="contact__form" onSubmit={onSubmit}>
          <div className="form-field">
            <label htmlFor="name" className="form-field__label">
              {t('contact-name')}
            </label>
            <input type="text" id="name" className="form-field__input" required />
          </div>
          <div className="form-field">
            <label htmlFor="email" className="form-field__label">
              {t('contact-email')}
            </label>
            <input type="email" id="email" className="form-field__input" required />
          </div>
          <div className="form-field">
            <label htmlFor="message" className="form-field__label">
              {t('contact-message')}
            </label>
            <textarea id="message" className="form-field__textarea" required />
          </div>
          <button type="submit" className="button button--filled">
            {t('contact-send')}
          </button>
        </form>
        <div className="social-links">
          <a
            href="https://github.com/herissonneves"
            className="social-links__link"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:herisson.carvalho96@gmail.com" className="social-links__link" title="Email">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
