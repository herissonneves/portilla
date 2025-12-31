/**
 * Navigation Module
 * Handles menu toggling and smooth scrolling
 */

/**
 * Toggles the mobile menu visibility
 */
export function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('navigation__menu--active');
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
                document.getElementById('navMenu').classList.remove('navigation__menu--active');
            }
        });
    });
}

/**
 * Adds scroll effect to navigation bar
 */
export function initScrollEffect() {
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('navigation');
        
        if (window.scrollY > 50) {
            nav.classList.add('navigation--scrolled');
        } else {
            nav.classList.remove('navigation--scrolled');
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

