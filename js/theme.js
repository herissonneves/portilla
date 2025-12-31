/**
 * Theme Module
 * Handles theme switching (light/dark) and contrast levels
 */

const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
};

const CONTRAST_LEVELS = {
    STANDARD: 'standard',
    MEDIUM: 'medium-contrast',
    HIGH: 'high-contrast'
};

let currentTheme = THEMES.LIGHT;
let currentContrast = CONTRAST_LEVELS.STANDARD;

/**
 * Gets the system's preferred color scheme
 * @returns {string} 'light' or 'dark'
 */
function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return THEMES.DARK;
    }
    return THEMES.LIGHT;
}

/**
 * Gets the system's preferred contrast level
 * @returns {string} contrast level
 */
function getSystemContrast() {
    if (window.matchMedia && window.matchMedia('(prefers-contrast: more)').matches) {
        return CONTRAST_LEVELS.HIGH;
    }
    return CONTRAST_LEVELS.STANDARD;
}

/**
 * Builds the theme class name
 * @param {string} theme - Theme name
 * @param {string} contrast - Contrast level
 * @returns {string} Theme class name
 */
function buildThemeClass(theme, contrast) {
    if (contrast === CONTRAST_LEVELS.STANDARD) {
        return theme;
    }
    return `${theme}-${contrast}`;
}

/**
 * Applies theme to the document
 * @param {string} theme - Theme name
 * @param {string} contrast - Contrast level
 */
function applyTheme(theme, contrast) {
    const body = document.body;
    
    // Remove all theme classes
    body.classList.remove(
        THEMES.LIGHT,
        THEMES.DARK,
        `${THEMES.LIGHT}-${CONTRAST_LEVELS.MEDIUM}`,
        `${THEMES.LIGHT}-${CONTRAST_LEVELS.HIGH}`,
        `${THEMES.DARK}-${CONTRAST_LEVELS.MEDIUM}`,
        `${THEMES.DARK}-${CONTRAST_LEVELS.HIGH}`
    );
    
    // Apply new theme class
    const themeClass = buildThemeClass(theme, contrast);
    body.classList.add(themeClass);
    
    // Store in localStorage
    localStorage.setItem('theme', theme);
    localStorage.setItem('contrast', contrast);
    
    currentTheme = theme;
    currentContrast = contrast;
    
    // Update theme selector if exists
    updateThemeControls();
}

/**
 * Updates theme control UI elements
 */
function updateThemeControls() {
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
 * Changes the theme
 * @param {string} theme - Theme name ('light' or 'dark')
 */
export function changeTheme(theme) {
    if (theme === 'system') {
        theme = getSystemTheme();
    }
    applyTheme(theme, currentContrast);
}

/**
 * Changes the contrast level
 * @param {string} contrast - Contrast level
 */
export function changeContrast(contrast) {
    if (contrast === 'system') {
        contrast = getSystemContrast();
    }
    applyTheme(currentTheme, contrast);
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
    applyTheme(initialTheme, initialContrast);
    
    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? THEMES.DARK : THEMES.LIGHT, currentContrast);
            }
        });
        
        window.matchMedia('(prefers-contrast: more)').addEventListener('change', (e) => {
            if (!localStorage.getItem('contrast')) {
                applyTheme(currentTheme, e.matches ? CONTRAST_LEVELS.HIGH : CONTRAST_LEVELS.STANDARD);
            }
        });
    }
    
    console.log(`Theme initialized: ${initialTheme} (${initialContrast})`);
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

