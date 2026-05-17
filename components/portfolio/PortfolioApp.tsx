'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type MouseEvent,
} from 'react';
import { translations, type Lang, type TranslationKey } from '@/lib/i18n/translations';
import { successMessages } from '@/lib/i18n/messages';
import {
  CONTRAST_LEVELS,
  THEMES,
  buildThemeClass,
  getAllThemeClasses,
  getSystemContrast,
  getSystemTheme,
} from '@/lib/theme';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { About } from './About';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';
import type { Translate } from './types';

export function PortfolioApp() {
  const [lang, setLang] = useState<Lang>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [resolvedTheme, setResolvedTheme] = useState<string>(THEMES.LIGHT);
  const [resolvedContrast, setResolvedContrast] = useState<string>(CONTRAST_LEVELS.STANDARD);

  const contrastRef = useRef(resolvedContrast);
  const themeRef = useRef(resolvedTheme);
  contrastRef.current = resolvedContrast;
  themeRef.current = resolvedTheme;

  const t: Translate = useCallback(
    (key: TranslationKey) => translations[lang][key] as string,
    [lang],
  );

  const applyAndPersist = useCallback((theme: string, contrast: string) => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('contrast', contrast);
    setResolvedTheme(theme);
    setResolvedContrast(contrast);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const storedContrast = localStorage.getItem('contrast');
    const initialTheme = storedTheme ?? getSystemTheme();
    const initialContrast = storedContrast ?? getSystemContrast();
    applyAndPersist(initialTheme, initialContrast);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- hydrate once from localStorage / system
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const body = document.body;
    const all = getAllThemeClasses();
    body.classList.remove(...all);
    body.classList.add(buildThemeClass(resolvedTheme, resolvedContrast));
  }, [resolvedTheme, resolvedContrast]);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mqTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const onTheme = () => {
      if (!localStorage.getItem('theme')) {
        const next = mqTheme.matches ? THEMES.DARK : THEMES.LIGHT;
        applyAndPersist(next, contrastRef.current);
      }
    };

    const mqContrast = window.matchMedia('(prefers-contrast: more)');
    const onContrast = () => {
      if (!localStorage.getItem('contrast')) {
        const next = mqContrast.matches ? CONTRAST_LEVELS.HIGH : CONTRAST_LEVELS.STANDARD;
        applyAndPersist(themeRef.current, next);
      }
    };

    mqTheme.addEventListener('change', onTheme);
    mqContrast.addEventListener('change', onContrast);
    return () => {
      mqTheme.removeEventListener('change', onTheme);
      mqContrast.removeEventListener('change', onContrast);
    };
  }, [applyAndPersist]);

  const handleThemeChange = (value: string) => {
    const theme = value === 'system' ? getSystemTheme() : value;
    applyAndPersist(theme, resolvedContrast);
  };

  const handleContrastChange = (value: string) => {
    applyAndPersist(resolvedTheme, value);
  };

  const scrollToHash = (hash: string) => {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  const onNavLinkClick = (e: MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    scrollToHash(hash);
  };

  const onHeroHashClick = (e: MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    scrollToHash(hash);
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.alert(successMessages[lang]);
    e.currentTarget.reset();
  };

  return (
    <>
      <Navigation
        t={t}
        lang={lang}
        onLanguageChange={setLang}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((o) => !o)}
        onNavLinkClick={onNavLinkClick}
        navScrolled={navScrolled}
        themeSelectValue={resolvedTheme}
        onThemeChange={handleThemeChange}
        contrastSelectValue={resolvedContrast}
        onContrastChange={handleContrastChange}
      />
      <Hero t={t} onHashClick={onHeroHashClick} />
      <About t={t} />
      <Skills t={t} />
      <Projects t={t} />
      <Contact t={t} onSubmit={onFormSubmit} />
      <Footer t={t} />
    </>
  );
}
