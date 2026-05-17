export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export const CONTRAST_LEVELS = {
  STANDARD: 'standard',
  MEDIUM: 'medium-contrast',
  HIGH: 'high-contrast',
} as const;

export type ThemeName = (typeof THEMES)[keyof typeof THEMES];

export function buildThemeClass(theme: string, contrast: string): string {
  if (contrast === CONTRAST_LEVELS.STANDARD) {
    return theme;
  }
  return `${theme}-${contrast}`;
}

export function getAllThemeClasses(): string[] {
  return [
    THEMES.LIGHT,
    THEMES.DARK,
    `${THEMES.LIGHT}-${CONTRAST_LEVELS.MEDIUM}`,
    `${THEMES.LIGHT}-${CONTRAST_LEVELS.HIGH}`,
    `${THEMES.DARK}-${CONTRAST_LEVELS.MEDIUM}`,
    `${THEMES.DARK}-${CONTRAST_LEVELS.HIGH}`,
  ];
}

export function getSystemTheme(): ThemeName {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return THEMES.DARK;
  }
  return THEMES.LIGHT;
}

export function getSystemContrast(): string {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-contrast: more)').matches
  ) {
    return CONTRAST_LEVELS.HIGH;
  }
  return CONTRAST_LEVELS.STANDARD;
}
