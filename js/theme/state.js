/**
 * Theme State Management
 * Manages current theme and contrast state
 */

let currentTheme = 'light';
let currentContrast = 'standard';

/**
 * Sets the current theme state
 * @param {string} theme - Theme name
 * @param {string} contrast - Contrast level
 */
export function setThemeState(theme, contrast) {
    currentTheme = theme;
    currentContrast = contrast;
}

/**
 * Gets current theme
 * @returns {string} Current theme
 */
export function getCurrentTheme() {
    return currentTheme;
}

/**
 * Gets current contrast level
 * @returns {string} Current contrast level
 */
export function getCurrentContrast() {
    return currentContrast;
}

