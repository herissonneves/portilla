/**
 * Main Application Entry Point
 * Initializes all modules and sets up global functions
 */

import { changeLanguage, initLanguage } from './language.js';
import { toggleMenu, initNavigation } from './navigation.js';
import { initForm } from './form.js';

/**
 * Initializes the application
 */
function init() {
    // Initialize all modules
    initLanguage();
    initNavigation();
    initForm();
    
    console.log('Portfolio application initialized');
}

// Make functions available globally for inline event handlers
window.changeLanguage = changeLanguage;
window.toggleMenu = toggleMenu;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

