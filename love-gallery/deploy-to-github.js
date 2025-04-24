// Script to deploy to GitHub Pages
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting deployment to GitHub Pages...');

// Step 1: Copy images to client/public/images
console.log('\nStep 1: Copying images...');
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
    
    console.log(`  Copying ${file} to ${destPath}`);
    fs.copyFileSync(sourcePath, destPath);
  }
});

// Step 2: Build the client
console.log('\nStep 2: Building the client...');
try {
  execSync('cd client && npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('Error building the client:', error.message);
  process.exit(1);
}

// Step 3: Create a copy of index.html as 404.html
console.log('\nStep 3: Creating 404.html...');
try {
  fs.copyFileSync(
    path.join(__dirname, 'client', 'dist', 'index.html'),
    path.join(__dirname, 'client', 'dist', '404.html')
  );
  console.log('  Created 404.html');
} catch (error) {
  console.error('Error creating 404.html:', error.message);
  process.exit(1);
}

// Step 4: Deploy to GitHub Pages
console.log('\nStep 4: Deploying to GitHub Pages...');
try {
  execSync('cd client && npx gh-pages -d dist', { stdio: 'inherit' });
} catch (error) {
  console.error('Error deploying to GitHub Pages:', error.message);
  process.exit(1);
}

console.log('\nDeployment complete! Your site should be available at https://yatank1.github.io/SURPRISE/');
console.log('Note: It may take a few minutes for the changes to propagate.');
