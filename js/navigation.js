/**
 * Navigation Module
 * Handles menu toggling and smooth scrolling
 */

/**
 * Toggles the mobile menu visibility
 */
export function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

/**
 * Initializes smooth scrolling for navigation links
 */
export function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                document.getElementById('navLinks').classList.remove('active');
            }
        });
    });
}

/**
 * Adds scroll effect to navigation bar
 */
export function initScrollEffect() {
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
}

/**
 * Initializes all navigation functionality
 */
export function initNavigation() {
    initSmoothScroll();
    initScrollEffect();
}

