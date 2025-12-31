/**
 * Theme Utilities
 * Utility functions for theme management
 */

import { THEMES, CONTRAST_LEVELS } from './constants.js';

/**
 * Builds the theme class name
 * @param {string} theme - Theme name
 * @param {string} contrast - Contrast level
 * @returns {string} Theme class name
 */
export function buildThemeClass(theme, contrast) {
    if (contrast === CONTRAST_LEVELS.STANDARD) {
        return theme;
    }
    return `${theme}-${contrast}`;
}

/**
 * Updates theme control UI elements
 * @param {string} currentTheme - Current theme
 * @param {string} currentContrast - Current contrast level
 */
export function updateThemeControls(currentTheme, currentContrast) {
    const themeSelect = document.getElementById('themeSelect');
    const contrastSelect = document.getElementById('contrastSelect');
    
    if (themeSelect) {
        themeSelect.value = currentTheme;
    }
    
    if (contrastSelect) {
        contrastSelect.value = currentContrast;
    }
}

/**
 * Gets all possible theme class names
 * @returns {string[]} Array of theme class names
 */
export function getAllThemeClasses() {
    return [
        THEMES.LIGHT,
        THEMES.DARK,
        `${THEMES.LIGHT}-${CONTRAST_LEVELS.MEDIUM}`,
        `${THEMES.LIGHT}-${CONTRAST_LEVELS.HIGH}`,
        `${THEMES.DARK}-${CONTRAST_LEVELS.MEDIUM}`,
        `${THEMES.DARK}-${CONTRAST_LEVELS.HIGH}`
    ];
}

