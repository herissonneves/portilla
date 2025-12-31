/**
 * Theme Detection
 * Detects system preferences for theme and contrast
 */

import { THEMES, CONTRAST_LEVELS } from './constants.js';

/**
 * Gets the system's preferred color scheme
 * @returns {string} 'light' or 'dark'
 */
export function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return THEMES.DARK;
    }
    return THEMES.LIGHT;
}

/**
 * Gets the system's preferred contrast level
 * @returns {string} contrast level
 */
export function getSystemContrast() {
    if (window.matchMedia && window.matchMedia('(prefers-contrast: more)').matches) {
        return CONTRAST_LEVELS.HIGH;
    }
    return CONTRAST_LEVELS.STANDARD;
}

