/**
 * Theme Listeners
 * Handles system preference change listeners
 */

import { THEMES, CONTRAST_LEVELS } from './constants.js';
import { applyTheme } from './application.js';
import { getCurrentTheme, getCurrentContrast, setThemeState } from './state.js';

/**
 * Sets up listeners for system preference changes
 * @param {Function} applyThemeCallback - Callback to apply theme
 */
export function setupSystemListeners(applyThemeCallback) {
    if (!window.matchMedia) return;
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? THEMES.DARK : THEMES.LIGHT;
            applyThemeCallback(newTheme, getCurrentContrast());
        }
    });
    
    // Listen for system contrast changes
    window.matchMedia('(prefers-contrast: more)').addEventListener('change', (e) => {
        if (!localStorage.getItem('contrast')) {
            const newContrast = e.matches ? CONTRAST_LEVELS.HIGH : CONTRAST_LEVELS.STANDARD;
            applyThemeCallback(getCurrentTheme(), newContrast);
        }
    });
}

