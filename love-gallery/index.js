// This file is the main entry point for Vercel deployment
let express, cors, path, morgan;

try {
  express = require('express');
  cors = require('cors');
  path = require('path');
  morgan = require('morgan');
} catch (error) {
  console.error('Error loading dependencies:', error.message);
  console.log('Starting simple HTTP server instead...');

  const http = require('http');
  const fs = require('fs');

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Love Gallery</h1><p>Server is running but dependencies are missing.</p><p>Please install dependencies with: npm install express cors morgan</p>');
  });

  server.listen(5000, () => {
    console.log('Simple HTTP server running on port 5000');
  });

  return; // Exit the script
}

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());
app.use(morgan('dev'));

// Serve static files from the public directory (for images)
app.use(express.static(path.join(__dirname, 'public')));

// Sample data for the images
const images = [
  {
    id: 1,
    url: '/images/image1.jpg',
    caption: 'Our first date (The best girlfriend ever)❤️'
  },
  {
    id: 2,
    url: '/images/image2.jpg',
    caption: 'Remember this beautiful sunset?'
  },
  {
    id: 3,
    url: '/images/image3.jpg',
    caption: 'Holding ur hand felt soo good that day i forgot all my problems thenks for coming into my life'
  },
  {
    id: 4,
    url: '/images/image4.jpg',
    caption: ''
  },
  {
    id: 5,
    url: '/images/image5.jpg',
    caption: 'You make me so happy!'
  },
  {
    id: 6,
    url: '/images/image6.jpg',
    caption: 'Every moment with you is a treasure. You make my heart smile in ways I never thought possible. I love you more than words can express. Thank you for being the most amazing person in my life. ❤️'
  },
  {
    id: 7,
    url: '/images/image7.jpg',
    caption: 'You are the light of my life. You bring so much joy and happiness into my world. I am so grateful to have you in my life. You make me feel loved and cherished every day. Thank you for being the most amazing person in my life. ❤️'
  },
  {
    id: 8,
    url: '/images/image8.jpg',
    caption: 'Standing near lake with u was the best moment of my life '
  },
  {
    id: 9,
    url: '/images/image9.jpg',
    caption: 'flower were feeling jealous of u'
  },
  {
    id: 10,
    url: '/images/image10.jpg',
    caption: 'Forever and always yours ❤️'
  }
];

// Special message
const specialMessage = {
  title: "My Love",
  message: "Every moment with you is a treasure. You make my heart smile in ways I never thought possible. I love you more than words can express. Thank you for being the most amazing person in my life. ❤️"
};

// API Routes
app.get('/api/images', (req, res) => {
  res.json(images);
});

app.get('/api/special-message', (req, res) => {
  res.json(specialMessage);
});

// Serve static files from the client/dist directory
app.use(express.static(path.join(__dirname, 'client/dist')));

// For all other routes, serve the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

// Start the server if not being imported
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export the app for Vercel
module.exports = app;
