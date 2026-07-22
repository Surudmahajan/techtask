const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'assets', 'icons');
const imagesDir = path.join(__dirname, 'assets', 'images');

// Ensure directories exist
[iconsDir, imagesDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

const icons = {
    'swiggy-logo.svg': `<svg width="100" height="30" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="8" fill="#000"/><path d="M15 8c-3.8 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.2-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" fill="#fff"/><text x="40" y="21" font-family="Arial" font-weight="bold" font-size="18" fill="#000">Swiggy</text></svg>`,
    'swiggy-logo-orange.svg': `<svg width="100" height="30" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="8" fill="#ff5200"/><path d="M15 8c-3.8 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.2-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" fill="#fff"/><text x="40" y="21" font-family="Arial" font-weight="bold" font-size="18" fill="#ff5200">Swiggy</text></svg>`,
    'location.svg': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    'chevron-down.svg': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"/></svg>`,
    'search.svg': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,
    'arrow-right-white.svg': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
    'arrow-left.svg': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>`,
    'arrow-right.svg': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
    'menu.svg': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M3 6h18M3 18h18"/></svg>`,
    'discount.svg': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M19 5L5 19M19 19L5 5"/></svg>`,
    'linkedin.svg': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`,
    'instagram.svg': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/></svg>`,
    'facebook.svg': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`,
    'pinterest.svg': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.26 2.66 7.9 6.44 9.29-.09-.79-.17-2.01.03-2.89.18-.8 1.18-5.02 1.18-5.02s-.3-.61-.3-1.5c0-1.41.82-2.46 1.84-2.46.87 0 1.29.65 1.29 1.43 0 .87-.55 2.18-.84 3.4-.24 1.02.51 1.85 1.51 1.85 1.81 0 3.2-1.91 3.2-4.66 0-2.44-1.75-4.14-4.26-4.14-2.88 0-4.57 2.16-4.57 4.39 0 .87.33 1.8.75 2.3.08.1.09.19.07.28l-.24.97c-.03.14-.11.16-.25.1-1.39-.65-2.26-2.69-2.26-4.32 0-3.52 2.56-6.75 7.37-6.75 3.86 0 6.87 2.75 6.87 6.41 0 3.84-2.42 6.93-5.78 6.93-1.13 0-2.19-.59-2.55-1.28l-.7 2.66c-.25.96-.94 2.16-1.4 2.89C10.15 21.84 11.06 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>`,
    'twitter.svg': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>`,
};

const images = {
    'hero-left.svg': `<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="120" fill="#e04a00" opacity="0.5"/><text x="150" y="150" text-anchor="middle" fill="#fff" font-family="Arial" font-size="20">Hero Veggies</text></svg>`,
    'hero-right.svg': `<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="120" fill="#e04a00" opacity="0.5"/><text x="150" y="150" text-anchor="middle" fill="#fff" font-family="Arial" font-size="20">Hero Sushi</text></svg>`,
    'food-delivery.svg': `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#f0f0f5"/><text x="100" y="100" text-anchor="middle" font-family="Arial" font-size="16">Food Delivery</text></svg>`,
    'instamart.svg': `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="180" height="180" rx="16" fill="#f0f0f5"/><text x="100" y="100" text-anchor="middle" font-family="Arial" font-size="16">Instamart Basket</text></svg>`,
    'dineout.svg': `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#f0f0f5"/><text x="100" y="100" text-anchor="middle" font-family="Arial" font-size="16">Dineout Plate</text></svg>`,
    'food-placeholder.svg': `<svg width="140" height="140" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg"><circle cx="70" cy="70" r="70" fill="#f4f4f5"/><text x="70" y="75" text-anchor="middle" font-family="Arial" fill="#999" font-size="14">Food</text></svg>`,
    'grocery-placeholder.svg': `<svg width="120" height="140" viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="140" fill="#f4f4f5"/><text x="60" y="75" text-anchor="middle" font-family="Arial" fill="#999" font-size="14">Grocery</text></svg>`,
    'rest-placeholder.svg': `<svg width="330" height="220" viewBox="0 0 330 220" xmlns="http://www.w3.org/2000/svg"><rect width="330" height="220" fill="#e9e9eb"/><text x="165" y="115" text-anchor="middle" font-family="Arial" fill="#666" font-size="18">Restaurant Image</text></svg>`,
    'app-banner-mockup.svg': `<svg width="200" height="300" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="180" height="380" rx="20" fill="#fff" stroke="#333" stroke-width="4"/><text x="100" y="150" text-anchor="middle" font-family="Arial" font-size="16">App Mockup</text></svg>`,
    'app-store.svg': `<svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="40" rx="8" fill="#000"/><text x="60" y="25" text-anchor="middle" fill="#fff" font-family="Arial" font-size="12">App Store</text></svg>`,
    'play-store.svg': `<svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="40" rx="8" fill="#000"/><text x="60" y="25" text-anchor="middle" fill="#fff" font-family="Arial" font-size="12">Google Play</text></svg>`
};

for (const [name, content] of Object.entries(icons)) {
    fs.writeFileSync(path.join(iconsDir, name), content);
}

for (const [name, content] of Object.entries(images)) {
    fs.writeFileSync(path.join(imagesDir, name), content);
}

console.log('All SVGs generated.');
