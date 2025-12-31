# portilla

A modern, responsive portfolio landing page for IT development professionals entering the job market.

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
│   ├── styles.css          # Main stylesheet
│   └── theme/              # Theme variants
│       ├── dark.css
│       ├── dark-hc.css
│       ├── dark-mc.css
│       ├── light.css
│       ├── light-hc.css
│       └── light-mc.css
├── js/
│   ├── main.js             # Application entry point
│   ├── theme.js            # Theme & contrast management
│   ├── language.js         # Language switching module
│   ├── navigation.js       # Navigation & scrolling module
│   ├── form.js             # Form handling module
│   └── translations.js     # i18n translations data
├── index.html
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
git clone https://github.com/yourusername/portilla.git
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
   - Edit CSS variables in `css/styles.css`
   - Change primary and secondary colors to match your brand

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

The main colors can be customized by editing the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --dark-bg: #0f172a;
    --light-bg: #f8fafc;
    --text-dark: #1e293b;
    --text-light: #64748b;
    --white: #ffffff;
    --accent: #3b82f6;
}
```

### JavaScript Architecture

The application uses a modular ES6 architecture with BEM CSS methodology:

**JavaScript Modules:**

- **`main.js`**: Application entry point, initializes all modules
- **`theme.js`**: Theme and contrast level management with system detection
- **`language.js`**: Handles language switching and translations
- **`navigation.js`**: Menu toggling, smooth scrolling, scroll effects
- **`form.js`**: Contact form handling and validation
- **`translations.js`**: i18n data for all supported languages

**CSS Architecture:**

- **BEM Methodology**: Block Element Modifier naming convention
  - Example: `.navigation__menu--active`
- **Material Design 3 Tokens**: Design system variables
  - Colors: `--md-sys-color-primary`
  - Typography: `--md-sys-typescale-body-large`
  - Elevation: `--md-sys-elevation-level1`
  - Shape: `--md-sys-shape-corner-medium`
  - Motion: `--md-sys-motion-duration-short2`

To add new functionality, create a new module and import it in `main.js`.

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
