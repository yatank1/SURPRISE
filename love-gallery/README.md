# Love Gallery

A beautiful photo gallery to surprise your loved one with special moments.

## Features

- Responsive image gallery with 10 images
- Smooth sliding transitions
- Special message page
- Mobile-friendly design

## Deployment Instructions

### Deploy to GitHub Pages

1. **Access the Live Site**
   - The gallery is already deployed and available at: https://yatank1.github.io/SURPRISE/
   - No additional setup is required to view the gallery

2. **How It Works**
   - We've created a dedicated `gh-pages` branch that GitHub Pages uses to serve the site
   - The site is automatically available at the URL above
   - If you see a 404 error, try clearing your browser cache or wait a few minutes

3. **Updating the Gallery**
   - To update the gallery, push changes to the `gh-pages` branch
   - You can also use the GitHub Actions workflow that automatically deploys changes from the main branch

### Deploy to Vercel

1. **Fork or Clone the Repository**
   - Fork this repository to your GitHub account or clone it and push to a new repository.
   - Make sure your repository is public so Vercel can access it.

2. **Push Your Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/love-gallery.git
   git push -u origin main
   ```

3. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com/) and sign up/login with your GitHub account.
   - Click "New Project" and import your repository.

4. **Configure the Project**
   - Select the repository you want to deploy.
   - In the "Configure Project" step:
     - Make sure the "Framework Preset" is set to "Other".
     - Set the "Root Directory" to `.` (dot, meaning the project root).
     - Set the "Build Command" to `npm run build`.
     - Set the "Output Directory" to `client/dist`.
   - In the "Environment Variables" section, add:
     - `NODE_ENV` with value `production`
   - Click "Deploy".

5. **Troubleshooting Deployment Issues**
   - If you see a "NOT_FOUND" error after deployment:
     - Go to your project settings in Vercel.
     - Navigate to the "Git" section.
     - Click "Redeploy" with the "Clear cache and redeploy" option.
   - If issues persist:
     - Check the deployment logs in Vercel for specific errors.
     - Make sure all files are properly committed to your repository.
     - Try the following override settings in your project settings:
       - Build Command: `npm run vercel-build`
       - Output Directory: `client/dist`
       - Install Command: `npm install && cd client && npm install`

6. **Share Your Gallery**
   - Once deployed successfully, Vercel will provide you with a URL (e.g., https://your-gallery.vercel.app).
   - Share this URL with anyone you want to see your gallery.

### Customizing the Gallery

To customize the gallery with your own images:

1. Replace the images in the `public/images` folder with your own images.
2. Update the captions in `server/index.js` to match your new images.
3. Customize the special message in `server/index.js` to your liking.

## Local Development

To run the project locally:

1. Install dependencies:
   ```
   npm run install-all
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## License

ISC
