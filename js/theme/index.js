/**
 * Theme Module - Main Entry Point
 * Handles theme switching (light/dark) and contrast levels
 */

import { THEMES, CONTRAST_LEVELS } from './constants.js';
import { getSystemTheme, getSystemContrast } from './detection.js';
import { applyTheme } from './application.js';
import { getCurrentTheme, getCurrentContrast, setThemeState } from './state.js';
import { setupSystemListeners } from './listeners.js';

/**
 * Changes the theme
 * @param {string} theme - Theme name ('light' or 'dark')
 */
export function changeTheme(theme) {
    if (theme === 'system') {
        theme = getSystemTheme();
    }
    applyTheme(theme, getCurrentContrast(), setThemeState);
}

/**
 * Changes the contrast level
 * @param {string} contrast - Contrast level
 */
export function changeContrast(contrast) {
    if (contrast === 'system') {
        contrast = getSystemContrast();
    }
    applyTheme(getCurrentTheme(), contrast, setThemeState);
}

/**
 * Initializes theme functionality
 */
export function initTheme() {
    // Get stored preferences or use system defaults
    const storedTheme = localStorage.getItem('theme');
    const storedContrast = localStorage.getItem('contrast');
    
    const initialTheme = storedTheme || getSystemTheme();
    const initialContrast = storedContrast || getSystemContrast();
    
    // Apply initial theme
    applyTheme(initialTheme, initialContrast, setThemeState);
    
    // Setup system preference listeners
    setupSystemListeners((theme, contrast) => {
        applyTheme(theme, contrast, setThemeState);
    });
    
    console.log(`Theme initialized: ${initialTheme} (${initialContrast})`);
}

// Re-export state getters
export { getCurrentTheme, getCurrentContrast };

