# Deploying to GitHub Pages

This guide explains how to deploy your Love Gallery to GitHub Pages so you can share it with a permanent URL.

## Prerequisites

1. Make sure you have [Node.js](https://nodejs.org/) installed
2. Make sure you have [Git](https://git-scm.com/) installed
3. Have a [GitHub](https://github.com/) account

## Step 1: Install the gh-pages package

```bash
# Navigate to your project directory
cd love-gallery

# Install the gh-pages package
npm install gh-pages --save-dev
```

## Step 2: Build and deploy

```bash
# Copy images to the client's public directory
node copy-images.js

# Navigate to the client directory
cd client

# Build the project
npm run build

# Deploy to GitHub Pages
npx gh-pages -d dist
```

## Step 3: Configure GitHub Pages

1. Go to your GitHub repository (https://github.com/yatank1/sur)
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. For the "Source" option, select "gh-pages branch"
5. Click "Save"

## Step 4: Access your deployed site

Your site will be available at: https://yatank1.github.io/sur/

It may take a few minutes for the changes to propagate.

## Troubleshooting

If you encounter any issues:

1. Make sure your repository is public
2. Check that the gh-pages branch was created successfully
3. Verify that the "GitHub Pages" section in your repository settings is configured correctly
4. Try clearing your browser cache

## Updating your site

To update your site after making changes:

```bash
# Copy images to the client's public directory
node copy-images.js

# Navigate to the client directory
cd client

# Build the project
npm run build

# Deploy to GitHub Pages
npx gh-pages -d dist
```
