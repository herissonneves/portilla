/**
 * Main Application Entry Point
 * Initializes all modules and sets up global functions
 */

import { changeLanguage, initLanguage } from './language.js';
import { toggleMenu, initNavigation } from './navigation.js';
import { initForm } from './form.js';
import { initTheme, changeTheme, changeContrast } from './theme/index.js';

/**
 * Initializes the application
 */
function init() {
    // Initialize theme first (to prevent flash of unstyled content)
    initTheme();
    
    // Initialize all modules
    initLanguage();
    initNavigation();
    initForm();
    
    console.log('Portfolio application initialized');
}

// Make functions available globally for inline event handlers
window.changeLanguage = changeLanguage;
window.toggleMenu = toggleMenu;
window.changeTheme = changeTheme;
window.changeContrast = changeContrast;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

