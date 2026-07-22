# Swiggy Clone - Frontend Interview Assignment

This project is a high-fidelity frontend clone of the Swiggy.com homepage, built entirely from scratch. It serves as a demonstration of production-quality UI implementation, emphasizing clean architecture, responsive design, and semantic markup.

## Project Overview

The objective was to recreate the provided screenshots of Swiggy's interface without copying their underlying source code, HTML structure, or CSS classes. This implementation acts as a robust, standalone frontend build.

## Features

- **Pixel-Perfect UI**: Carefully matches spacing, typography, colors, and layout from reference screenshots.
- **Custom Asset Pipeline**: SVG icons and local image placeholders generated dynamically to remove external dependencies.
- **Interactive JavaScript**: Custom vanilla JS carousel implementations with smooth scrolling, disabling boundary states, and "Show More" expandable sections.
- **Accessibility (A11y)**: Includes `aria-labels`, accessible navigation, semantic heading hierarchy, and keyboard focus considerations.
- **Zero Frameworks**: Built using pure HTML5, CSS3, and Vanilla JavaScript. No Bootstrap, Tailwind, or React.

## Folder Structure

\`\`\`
/
├── index.html            # Main semantic HTML structure
├── css/
│   ├── styles.css        # CSS variables, resets, layout, and component styles
│   └── responsive.css    # Media queries for mobile-first/desktop-down approach
├── js/
│   └── main.js           # Interactive logic for carousels and UI toggles
├── assets/
│   ├── icons/            # SVG icons (e.g., logo, location, arrows)
│   └── images/           # Placeholder graphics and banners (SVGs)
└── README.md             # Project documentation
\`\`\`

## Responsiveness

The application is built to be responsive across multiple device sizes, prioritizing a fluid layout that degrades gracefully from Desktop to Mobile.

Supported breakpoints:
- **1440px / 1280px**: Desktop / Large Laptop
- **1024px**: Laptop / Landscape Tablet
- **768px**: Tablet (Navigation adapts to mobile menu, grids reduce columns)
- **480px / 360px**: Mobile / Small Mobile (Full-width cards, optimized typography)

## Technical Decisions

1.  **CSS Variables**: Utilized `:root` custom properties for consistent theming (colors, spacing scale, shadows, border radii).
2.  **Component Architecture**: CSS is grouped logically (e.g., Header, Hero, Carousel, Cards). BEM-like class naming (`service-card`, `service-card-text`) is used for maintainability without being overly strict.
3.  **Flexbox & Grid**: `display: flex` is heavily utilized for alignment (header, carousels), while `display: grid` is used for the Cities section and Footer to easily manage multi-column layouts across breakpoints.
4.  **Vanilla JS Carousel**: Instead of relying on heavy plugins like Slick or Swiper, a lightweight vanilla JS solution was implemented using `scrollBy` and native CSS smooth scrolling (`scroll-behavior: smooth`).
5.  **Offline Support**: All assets (icons, placeholder images) are local SVGs, meaning the site renders perfectly offline.

## Browser Compatibility

Tested and supported on modern browsers:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest)
- Microsoft Edge (latest)

## How to Run Locally

Since this project consists of static files, no build step or node server is strictly required.

**Option 1: Direct File Open**
Simply open `index.html` in any web browser.

**Option 2: Local Server (Recommended for handling potential CORS issues with local assets in some browsers)**
If you have Python installed:
\`\`\`bash
# Python 3
python -m http.server 8000
\`\`\`
Then navigate to `http://localhost:8000` in your browser.

If you have Node.js and `serve` installed:
\`\`\`bash
npx serve .
\`\`\`

## Deployment Instructions

This project is immediately deployable to platforms like GitHub Pages, Vercel, or Netlify without any build steps.

**Deploy to Vercel/Netlify:**
1. Push the code to a GitHub repository.
2. Link the repository to Vercel or Netlify.
3. Leave the build command empty and set the publish directory to the root `/`.
4. Deploy.

**Deploy to GitHub Pages:**
1. Push the code to the `main` branch of a GitHub repository.
2. Go to Repository Settings > Pages.
3. Select `Deploy from a branch` and choose `main` / `root`.
4. Save. The site will be live shortly.
