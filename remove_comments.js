const fs = require('fs');
const path = require('path');

function removeComments(filePath, type) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    if (type === 'html') {
        // Remove HTML comments
        content = content.replace(/<!--[\s\S]*?-->/g, '');
    } else if (type === 'css') {
        // Remove CSS comments
        content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    } else if (type === 'js') {
        // Remove single line JS comments
        content = content.replace(/\/\/.*/g, '');
        // Remove multi-line JS comments
        content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    }

    // Clean up excessive empty lines left by comment removal
    content = content.replace(/\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content, 'utf-8');
}

removeComments(path.join(__dirname, 'index.html'), 'html');
removeComments(path.join(__dirname, 'css', 'styles.css'), 'css');
removeComments(path.join(__dirname, 'css', 'responsive.css'), 'css');
removeComments(path.join(__dirname, 'js', 'main.js'), 'js');

console.log('Comments removed from HTML, CSS, and JS.');
