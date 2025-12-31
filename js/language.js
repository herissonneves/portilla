/**
 * Language Module
 * Handles language switching and text translation
 */

import { translations } from './translations.js';

let currentLang = 'en';

/**
 * Changes the page language
 * @param {string} lang - Language code (en, pt, es)
 * @param {Event} event - Click event from language button
 */
export function changeLanguage(lang, event) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (event && event.target) {
        event.target.classList.add('active');
    }

    // Update all translatable elements
    updateTranslations(lang);
}

/**
 * Updates all translatable elements on the page
 * @param {string} lang - Language code
 */
function updateTranslations(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[lang][key];
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

/**
 * Gets the current language
 * @returns {string} Current language code
 */
export function getCurrentLanguage() {
    return currentLang;
}

/**
 * Initializes language functionality
 */
export function initLanguage() {
    // Set initial language
    updateTranslations(currentLang);
}

