/**
 * Theme Application
 * Applies theme to the document
 */

import { buildThemeClass, updateThemeControls, getAllThemeClasses } from './utils.js';

/**
 * Applies theme to the document
 * @param {string} theme - Theme name
 * @param {string} contrast - Contrast level
 * @param {Function} setState - Function to update state
 */
export function applyTheme(theme, contrast, setState) {
    const body = document.body;
    
    // Remove all theme classes
    const allClasses = getAllThemeClasses();
    body.classList.remove(...allClasses);
    
    // Apply new theme class
    const themeClass = buildThemeClass(theme, contrast);
    body.classList.add(themeClass);
    
    // Store in localStorage
    localStorage.setItem('theme', theme);
    localStorage.setItem('contrast', contrast);
    
    // Update state
    if (setState) {
        setState(theme, contrast);
    }
    
    // Update theme selector if exists
    updateThemeControls(theme, contrast);
}

