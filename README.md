# portilla

A modern, responsive portfolio landing page for IT development professionals entering the job market.

> **About the name**: _Portilla_ means "small door" or "gateway" in Spanish, symbolizing the entry point to my professional profile and career journey in IT development.

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://herissonneves.github.io/portilla/)
[![GitHub Release](https://img.shields.io/github/v/release/herissonneves/portilla?style=for-the-badge)](https://github.com/herissonneves/portilla/releases)
[![License](https://img.shields.io/github/license/herissonneves/portilla?style=for-the-badge)](LICENSE)

🌐 **[View Live Demo](https://herissonneves.github.io/portilla/)**

![Portfolio Preview](https://via.placeholder.com/800x400/2563eb/ffffff?text=Portilla+Portfolio)

## 🌟 Quick Start

**Visit the live website**: [https://herissonneves.github.io/portilla/](https://herissonneves.github.io/portilla/)

The portfolio is fully deployed and ready to explore! Try switching between themes, languages, and contrast levels to experience all features.

## 🚀 Features

- **Material Design 3**: Implements Google's latest Material Design system with design tokens
- **BEM CSS Methodology**: Clean, maintainable CSS with Block Element Modifier naming convention
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Multi-language Support**: Built-in internationalization with English, Portuguese (BR), and Spanish
- **Advanced Theme System**:
  - Light and dark modes with system preference detection
  - Three contrast levels: Standard, Medium, and High Contrast
  - Automatic system theme and contrast detection
  - User preference persistence with localStorage
- **Modern UI/UX**: Clean, professional design with MD3 elevation, typography, and motion systems
- **Interactive Sections**:
  - Hero section with call-to-action buttons
  - About section with professional introduction
  - Skills showcase with categorized technical abilities
  - Projects portfolio with featured work
  - Contact form with social media links
- **Mobile-First Approach**: Optimized for mobile devices with hamburger menu
- **Smooth Navigation**: Smooth scrolling between sections with MD3 motion system
- **Accessibility**: WCAG compliant with ARIA labels, semantic HTML, and high contrast support
- **GitHub Integration**: Direct links to GitHub profile and project repositories
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter Card support
- **Modular Architecture**: Clean separation of concerns with focused modules

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern structure
- **CSS3**: Custom properties, flexbox, grid, animations
- **Material Design 3**: Google's latest design system with design tokens
- **BEM CSS**: Block Element Modifier methodology for scalable CSS architecture
- **JavaScript ES6+**: Modular architecture with ES6 modules
- **No Dependencies**: Pure HTML/CSS/JS - no frameworks or build tools required

## 🎨 Theme System

The project includes a comprehensive Material Design 3 theme system with multiple variants:

### Light Themes

- `light.css` - Standard light theme (low contrast)
- `light-mc.css` - Medium contrast light theme
- `light-hc.css` - High contrast light theme

### Dark Themes

- `dark.css` - Standard dark theme (low contrast)
- `dark-mc.css` - Medium contrast dark theme
- `dark-hc.css` - High contrast dark theme

### Features

- **Automatic Detection**: Detects system theme preference (`prefers-color-scheme`)
- **Contrast Detection**: Detects system contrast preference (`prefers-contrast`)
- **User Preferences**: Saves theme and contrast choices in localStorage
- **Dynamic Switching**: Change themes without page reload
- **System Sync**: Automatically updates when system preferences change

## 🌍 Supported Languages

- 🇺🇸 English (EN)
- 🇧🇷 Portuguese - Brazil (PT)
- 🇪🇸 Spanish (ES)

Language switching is instant and affects all content throughout the page.

## 📁 Project Structure

```text
portilla/
├── css/
│   ├── index.css           # Main stylesheet (imports all modules)
│   ├── base.css            # Reset, variables, typography
│   ├── navigation.css      # Navigation bar
│   ├── language-selector.css
│   ├── theme-selector.css
│   ├── hero.css            # Hero section
│   ├── buttons.css         # Button components
│   ├── sections.css        # Section layout
│   ├── about.css           # About section
│   ├── skills.css          # Skills section
│   ├── projects.css        # Projects section
│   ├── contact.css         # Contact form
│   ├── footer.css          # Footer
│   ├── animations.css      # Keyframe animations
│   ├── responsive.css      # Media queries
│   └── theme/              # Theme variants
│       ├── dark.css
│       ├── dark-hc.css
│       ├── dark-mc.css
│       ├── light.css
│       ├── light-hc.css
│       └── light-mc.css
├── js/
│   ├── main.js             # Application entry point
│   ├── language.js         # Language switching module
│   ├── navigation.js       # Navigation & scrolling module
│   ├── form.js             # Form handling module
│   ├── theme/              # Theme module
│   │   ├── index.js        # Main entry point
│   │   ├── constants.js    # Theme constants
│   │   ├── detection.js    # System preference detection
│   │   ├── utils.js        # Utility functions
│   │   ├── application.js  # Theme application
│   │   ├── state.js        # State management
│   │   └── listeners.js     # System preference listeners
│   └── i18n/               # Internationalization module
│       ├── index.js        # Main entry point
│       ├── en.js           # English translations
│       ├── pt.js           # Portuguese translations
│       ├── es.js           # Spanish translations
│       └── messages.js     # Success messages
├── index.html
├── CHANGELOG.md
├── LICENSE
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser with ES6 module support (Chrome 61+, Firefox 60+, Safari 11+, Edge 16+)
- Optional: A local web server for development (e.g., Live Server, Python's http.server)

**Note**: Due to ES6 modules, you may need to serve the files through a local web server instead of opening `index.html` directly in some browsers.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/herissonneves/portilla.git
```

1. Navigate to the project directory:

```bash
cd portilla
```

1. Open `index.html` in your web browser:

**Option A - Using a local web server (Recommended):**

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

**Option B - Direct file opening (may have limitations with ES6 modules):**

```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

## 🎯 Customization

### Personalizing Your Portfolio

1. **Update Personal Information**:
   - Edit the content in `index.html`
   - Replace placeholder text with your own information

2. **Add Your Projects**:
   - Update the projects section with your actual projects
   - Add project links and descriptions

3. **Update Social Links**:
   - Find the social links section in the contact area
   - Replace `#` with your actual social media URLs

4. **Customize Colors**:
   - Edit CSS variables in `css/base.css`
   - Change primary and secondary colors to match your brand
   - Note: Colors are now managed through Material Design 3 tokens in theme files

5. **Add Your Photo**:
   - Replace the emoji placeholder (👨‍💻) with an actual image
   - Update the `.profile-placeholder` div in `index.html` with an `<img>` tag

6. **Extend Functionality**:
   - JavaScript modules are in the `js/` folder
   - Add new modules and import them in `js/main.js`
   - Follow the existing modular pattern

7. **Customize Theme Colors**:
   - Theme colors are defined in `css/theme/*.css` files
   - Uses Material Design 3 color system
   - Modify color values while maintaining MD3 token names

### Color Customization

Colors are managed through Material Design 3 design tokens. To customize:

1. **Theme Colors**: Edit `css/theme/*.css` files
   - Modify `--md-sys-color-primary`, `--md-sys-color-secondary`, etc.
   - Maintain MD3 token naming convention

2. **Base Variables**: Edit `css/base.css` for non-theme colors
   - Typography scale variables
   - Elevation levels
   - Shape corner radius
   - Motion durations

### JavaScript Architecture

The application uses a modular ES6 architecture with BEM CSS methodology:

**JavaScript Modules:**

- **`main.js`**: Application entry point, initializes all modules
- **`language.js`**: Handles language switching and translations
- **`navigation.js`**: Menu toggling, smooth scrolling, scroll effects
- **`form.js`**: Contact form handling and validation

**Theme Module** (`js/theme/`):

- **`index.js`**: Main entry point, exports all theme functions
- **`constants.js`**: Theme and contrast level constants
- **`detection.js`**: System preference detection
- **`utils.js`**: Utility functions (buildThemeClass, updateThemeControls)
- **`application.js`**: Theme application logic
- **`state.js`**: State management for current theme/contrast
- **`listeners.js`**: System preference change listeners

**i18n Module** (`js/i18n/`):

- **`index.js`**: Main entry point, combines all translations
- **`en.js`**: English translations
- **`pt.js`**: Portuguese (BR) translations
- **`es.js`**: Spanish translations
- **`messages.js`**: Form success messages by language

**CSS Architecture:**

- **Modular Structure**: 14 focused CSS modules
  - `base.css` - Reset, variables, typography
  - `navigation.css` - Navigation bar
  - `hero.css` - Hero section
  - `buttons.css` - Button components
  - Component-specific modules (about, skills, projects, contact, footer)
  - `animations.css` - Keyframe animations
  - `responsive.css` - Media queries
- **BEM Methodology**: Block Element Modifier naming convention
  - Example: `.navigation__menu--active`
- **Material Design 3 Tokens**: Design system variables
  - Colors: `--md-sys-color-primary`
  - Typography: `--md-sys-typescale-body-large`
  - Elevation: `--md-sys-elevation-level1`
  - Shape: `--md-sys-shape-corner-medium`
  - Motion: `--md-sys-motion-duration-short2`
- **Main Entry Point**: `css/index.css` imports all modules

To add new functionality:

- **CSS**: Create a new module in `css/` and import it in `css/index.css`
- **JavaScript**: Create a new module in `js/` and import it in `js/main.js`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/herissonneves/portilla/issues).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

### Herisson Neves

- GitHub: [@herissonneves](https://github.com/herissonneves)
- Email: [herisson.carvalho96@gmail.com](mailto:herisson.carvalho96@gmail.com)

## ⭐️ Show Your Support

Give a ⭐️ if this project helped you!

## 📸 Screenshots

### Desktop View

![Desktop View](https://via.placeholder.com/800x500/2563eb/ffffff?text=Desktop+View)

### Mobile View

![Mobile View](https://via.placeholder.com/400x800/2563eb/ffffff?text=Mobile+View)

### Language Switching

![Language Switching](https://via.placeholder.com/800x500/2563eb/ffffff?text=Multi-language+Support)

---

Built with 💪 for developers entering the IT job market
