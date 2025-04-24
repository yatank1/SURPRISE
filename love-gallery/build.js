// This script helps with the build process for Vercel
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Install dependencies
console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });
execSync('cd client && npm install', { stdio: 'inherit' });
execSync('cd server && npm install', { stdio: 'inherit' });

// Build the client
console.log('Building client...');
execSync('cd client && npm run build', { stdio: 'inherit' });

// Create necessary directories
console.log('Setting up directories...');
const clientDistDir = path.join(__dirname, 'client/dist');
const distImagesDir = path.join(clientDistDir, 'images');

// Create client/dist directory if it doesn't exist
if (!fs.existsSync(clientDistDir)) {
  fs.mkdirSync(clientDistDir, { recursive: true });
}

// Create client/dist/images directory if it doesn't exist
if (!fs.existsSync(distImagesDir)) {
  fs.mkdirSync(distImagesDir, { recursive: true });
}

// Copy images from public/images to client/dist/images
console.log('Copying images...');
const imagesDir = path.join(__dirname, 'public/images');

if (fs.existsSync(imagesDir)) {
  fs.readdirSync(imagesDir).forEach(file => {
    const sourcePath = path.join(imagesDir, file);
    const destPath = path.join(distImagesDir, file);

    console.log(`Copying ${file} to ${destPath}`);
    fs.copyFileSync(sourcePath, destPath);
  });
}

console.log('Build completed successfully!');
