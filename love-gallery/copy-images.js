// Script to copy images from public/images to client/public/images
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'public', 'images');
const destDir = path.join(__dirname, 'client', 'public', 'images');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy all image files
fs.readdirSync(sourceDir).forEach(file => {
  if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.gif')) {
    const sourcePath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);
    
    console.log(`Copying ${file} to ${destPath}`);
    fs.copyFileSync(sourcePath, destPath);
  }
});

console.log('All images copied successfully!');
