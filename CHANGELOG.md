# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-01-01

### Added {#v1.1.0-added}

- **GitHub Integration**
  - GitHub profile button in navigation bar with official icon
  - Direct links to project repositories (Axio, Quantio)
  - Live demo links for all projects

- **SEO Improvements**
  - Comprehensive meta tags (description, author, keywords)
  - Open Graph tags for social media sharing
  - Twitter Card meta tags
  - Canonical URL configuration

- **Content Enhancements**
  - Name meaning explanation (Portilla = "gateway" in Spanish)
  - Updated project descriptions with accurate information
  - Live demo badges and links in README

- **Modular CSS Architecture**
  - Split CSS into 14 focused modules
  - Base styles, navigation, hero, buttons, sections
  - Component-specific styles (about, skills, projects, contact, footer)
  - Separate animations and responsive modules
  - Main index.css entry point

- **Modular JavaScript Architecture**
  - Theme module split into 7 focused files (constants, detection, utils, application, state, listeners)
  - i18n module split into 5 files (en, pt, es, messages, index)
  - Improved code organization and maintainability
  - Better separation of concerns

### Changed {#v1.1.0-changed}

- **Skills Section**
  - Removed Vue.js (only React remains in frontend skills)
  - Updated to reflect actual expertise

- **Project Cards**
  - Added dual action buttons (Live Demo + GitHub) for Axio and Quantio
  - Removed Portilla live demo (current app is the live version)
  - Improved button styling with Material Design 3

- **Code Quality**
  - Removed all inline styles from HTML
  - Moved styles to proper CSS classes following BEM methodology
  - Improved code maintainability and organization

- **Documentation**
  - Added live demo URL to README
  - Added badges for demo, release, and license
  - Updated project structure documentation
  - Added Quick Start section

### Fixed {#v1.1.0-fixed}

- Markdown linting issues
- Code organization and structure
- Import paths after modularization

## [1.0.0] - 2024-12-31

### Added {#v1.0.0-added}

- **Material Design 3 Implementation**
  - Complete Material Design 3 design token system
  - MD3 color system with 6 theme variants (light/dark with standard/medium/high contrast)
  - MD3 typography scale (Display, Headline, Title, Body, Label)
  - MD3 elevation levels (5 shadow levels)
  - MD3 shape system (corner radius)
  - MD3 motion system (duration and easing curves)

- **Theme System**
  - Automatic system theme detection (`prefers-color-scheme`)
  - Automatic system contrast detection (`prefers-contrast`)
  - 6 theme variants: Light, Light MC, Light HC, Dark, Dark MC, Dark HC
  - User preference persistence with localStorage
  - Dynamic theme switching without page reload
  - Real-time sync with system preference changes
  - Theme and contrast selector UI controls

- **BEM CSS Methodology**
  - Complete refactoring to BEM naming convention
  - Scalable and maintainable CSS architecture
  - Clear separation of blocks, elements, and modifiers
  - Improved code organization and readability

- **Multi-language Support**
  - English, Portuguese (BR), and Spanish translations
  - Language selector with instant switching
  - Complete i18n for all content
  - Modular translation system

- **Modular JavaScript Architecture**
  - ES6 modules for clean code organization
  - Separate modules: main, theme, language, navigation, form, translations
  - No external dependencies or frameworks
  - Vanilla JavaScript implementation

- **Responsive Design**
  - Mobile-first approach
  - Fully responsive layout (desktop, tablet, mobile)
  - Mobile hamburger menu
  - Adaptive typography and spacing

- **Portfolio Sections**
  - Hero section with call-to-action buttons
  - About section with profile introduction
  - Skills section with categorized abilities
  - Projects showcase (Portilla, Axio, Quantio)
  - Contact form with validation
  - Social links (GitHub, Email)

- **Accessibility**
  - WCAG compliant design
  - ARIA labels for screen readers
  - Semantic HTML5 structure
  - High contrast theme support
  - Keyboard navigation support

- **Documentation**
  - Comprehensive README with setup instructions
  - Architecture documentation
  - Customization guidelines
  - Technology stack details

### Changed {#v1.0.0-changed}

- Refactored HTML to use external CSS and JavaScript files
- Updated all CSS classes to follow BEM naming convention
- Improved navigation with scroll effects
- Enhanced form handling with modular approach

### Fixed {#v1.0.0-fixed}

- Markdown linting errors in README
- Empty CSS blocks removed for cleaner code
- Bare URL formatting in documentation

### Project Information

- **Author**: Herisson Neves
- **GitHub**: [@herissonneves](https://github.com/herissonneves)
- **Technologies**: HTML5, CSS3, JavaScript ES6+, Material Design 3, BEM CSS
- **Projects Showcased**:
  - **Portilla**: Portfolio landing page with MD3 and BEM CSS
  - **Axio**: Todo list web application (vanilla JS)
  - **Quantio**: Calculator and unit converter

---

## Initial Release

This is the first stable release of Portilla, a professional portfolio landing page built with modern web technologies and best practices. The project demonstrates expertise in vanilla web development, design systems, and clean code architecture.

**Key Highlights**:

- 🎨 Material Design 3 implementation
- 🏗️ BEM CSS methodology
- 🌍 Multi-language support (EN/PT/ES)
- 🎭 Advanced theme system with contrast levels
- ♿ Accessibility-first approach
- 📱 Fully responsive design
- 🚀 Zero dependencies

[1.1.0]: https://github.com/herissonneves/portilla/releases/tag/v1.1.0
[1.0.0]: https://github.com/herissonneves/portilla/releases/tag/v1.0.0
