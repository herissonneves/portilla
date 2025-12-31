/**
 * Form Module
 * Handles contact form submission
 */

import { getCurrentLanguage } from './language.js';
import { successMessages } from './translations.js';

/**
 * Handles form submission
 * @param {Event} event - Form submit event
 */
export function handleSubmit(event) {
    event.preventDefault();
    
    const currentLang = getCurrentLanguage();
    const message = successMessages[currentLang];
    
    alert(message);
    event.target.reset();
}

/**
 * Initializes form functionality
 */
export function initForm() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
}

