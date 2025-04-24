// Script to update the gh-pages branch
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting update of gh-pages branch...');

try {
  // Step 1: Save current branch
  console.log('\nStep 1: Saving current branch...');
  const currentBranch = execSync('git branch --show-current').toString().trim();
  console.log(`Current branch: ${currentBranch}`);

  // Step 2: Checkout gh-pages branch
  console.log('\nStep 2: Checking out gh-pages branch...');
  execSync('git checkout gh-pages');
  
  // Step 3: Pull latest changes
  console.log('\nStep 3: Pulling latest changes...');
  execSync('git pull origin gh-pages');
  
  // Step 4: Copy latest files from main branch
  console.log('\nStep 4: Copying latest files...');
  execSync('git checkout main -- love-gallery/public/images');
  execSync('git checkout main -- love-gallery/client/public/data');
  
  // Step 5: Update the index.html file
  console.log('\nStep 5: Updating index.html...');
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Love Gallery</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-image: linear-gradient(to bottom right, #ffe6e6, #ffb3b3);
    }
    .container {
      text-align: center;
      max-width: 800px;
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #ff6b6b;
      font-size: 2.5rem;
      margin-bottom: 20px;
    }
    p {
      color: #666;
      font-size: 1.2rem;
      margin-bottom: 30px;
      line-height: 1.6;
    }
    .heart {
      color: #ff6b6b;
      font-size: 3rem;
      margin-bottom: 20px;
      animation: pulse 1.5s infinite;
    }
    .gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      margin-bottom: 30px;
    }
    .gallery-item {
      width: 200px;
      height: 200px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    .gallery-item:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .message {
      background-color: rgba(255, 107, 107, 0.1);
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 30px;
      border-left: 5px solid #ff6b6b;
    }
    .message p {
      margin: 0;
      color: #555;
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      background-color: #ff6b6b;
      color: white;
      text-decoration: none;
      border-radius: 30px;
      font-weight: bold;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
    }
    .btn:hover {
      background-color: #ff5252;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
    }
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="heart">❤️</div>
    <h1>Our Love Gallery</h1>
    <p>A beautiful collection of our special moments together.</p>
    
    <div class="gallery">
      <div class="gallery-item">
        <img src="./love-gallery/public/images/image1.jpg" alt="Our special moment">
      </div>
      <div class="gallery-item">
        <img src="./love-gallery/public/images/image2.jpg" alt="Our special moment">
      </div>
      <div class="gallery-item">
        <img src="./love-gallery/public/images/image3.jpg" alt="Our special moment">
      </div>
      <div class="gallery-item">
        <img src="./love-gallery/public/images/image4.jpg" alt="Our special moment">
      </div>
      <div class="gallery-item">
        <img src="./love-gallery/public/images/image5.jpg" alt="Our special moment">
      </div>
      <div class="gallery-item">
        <img src="./love-gallery/public/images/image6.jpg" alt="Our special moment">
      </div>
    </div>
    
    <div class="message">
      <p>Every moment with you is a treasure. You make my heart smile in ways I never thought possible. I love you more than words can express. Thank you for being the most amazing person in my life. ❤️</p>
    </div>
    
    <p>Click through our gallery to see all our special moments together.</p>
    
    <a href="https://github.com/yatank1/SURPRISE" class="btn">View on GitHub</a>
  </div>
</body>
</html>`;

  fs.writeFileSync('index.html', indexHtml);
  
  // Step 6: Commit and push changes
  console.log('\nStep 6: Committing and pushing changes...');
  execSync('git add .');
  execSync('git commit -m "Update gh-pages with latest content"');
  execSync('git push origin gh-pages');
  
  // Step 7: Return to original branch
  console.log(`\nStep 7: Returning to ${currentBranch} branch...`);
  execSync(`git checkout ${currentBranch}`);
  
  console.log('\nUpdate complete! Your site should be available at https://yatank1.github.io/SURPRISE/');
  console.log('Note: It may take a few minutes for the changes to propagate.');
  
} catch (error) {
  console.error('Error updating gh-pages branch:', error.message);
  process.exit(1);
}
