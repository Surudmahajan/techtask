const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'assets', 'images');
const indexPath = path.join(__dirname, 'index.html');
const cssPath = path.join(__dirname, 'css', 'styles.css');

// 1. Get all UUID-like PNG files (which we just copied and appended .png)
const files = fs.readdirSync(imgDir);
const uuidFiles = files.filter(f => f.length > 30 && f.endsWith('.png')); // UUIDs are long

let html = fs.readFileSync(indexPath, 'utf-8');

// 2. Fix the header logo
html = html.replace('<img src="assets/icons/swiggy-logo.svg" alt="Swiggy Logo" class="logo-img">', '<img src="assets/icons/Group.svg" alt="Swiggy Logo" class="logo-img">');

// 3. Replace grocery placeholders with actual images
let groceryIndex = 0;
while (html.includes('assets/images/grocery-placeholder.svg')) {
    const imgName = uuidFiles[groceryIndex % uuidFiles.length];
    html = html.replace('assets/images/grocery-placeholder.svg', `assets/images/${imgName}`);
    groceryIndex++;
}

// 4. Replace restaurant placeholders with actual images (use the next batch of UUID files)
let restIndex = groceryIndex;
while (html.includes('assets/images/rest-placeholder.svg')) {
    const imgName = uuidFiles[restIndex % uuidFiles.length];
    html = html.replace('assets/images/rest-placeholder.svg', `assets/images/${imgName}`);
    restIndex++;
}

fs.writeFileSync(indexPath, html, 'utf-8');
console.log('HTML updated.');

// 5. Fix CSS for the logo
let css = fs.readFileSync(cssPath, 'utf-8');
css = css.replace('filter: brightness(0) invert(1);', '/* filter removed */');
fs.writeFileSync(cssPath, css, 'utf-8');
console.log('CSS updated.');
