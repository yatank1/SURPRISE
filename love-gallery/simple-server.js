// Simple HTTP server without external dependencies
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;

// Sample data for the images
const images = [
  {
    id: 1,
    url: 'http://49.37.35.184:5000/images/image1.jpg',
    caption: 'Our first date (The best girlfriend ever)❤️'
  },
  {
    id: 2,
    url: 'http://49.37.35.184:5000/images/image2.jpg',
    caption: 'Remember this beautiful sunset?'
  },
  {
    id: 3,
    url: 'http://49.37.35.184:5000/images/image3.jpg',
    caption: 'Holding ur hand felt soo good that day i forgot all my problems thenks for coming into my life'
  },
  {
    id: 4,
    url: 'http://49.37.35.184:5000/images/image4.jpg',
    caption: ''
  },
  {
    id: 5,
    url: 'http://49.37.35.184:5000/images/image5.jpg',
    caption: 'You make me so happy!'
  },
  {
    id: 6,
    url: 'http://49.37.35.184:5000/images/image6.jpg',
    caption: 'Every moment with you is a treasure. You make my heart smile in ways I never thought possible. I love you more than words can express. Thank you for being the most amazing person in my life. ❤️'
  },
  {
    id: 7,
    url: 'http://49.37.35.184:5000/images/image7.jpg',
    caption: 'You are the light of my life. You bring so much joy and happiness into my world. I am so grateful to have you in my life. You make me feel loved and cherished every day. Thank you for being the most amazing person in my life. ❤️'
  },
  {
    id: 8,
    url: 'http://49.37.35.184:5000/images/image8.jpg',
    caption: 'Standing near lake with u was the best moment of my life '
  },
  {
    id: 9,
    url: 'http://49.37.35.184:5000/images/image9.jpg',
    caption: 'flower were feeling jealous of u'
  },
  {
    id: 10,
    url: 'http://49.37.35.184:5000/images/image10.jpg',
    caption: 'Forever and always yours ❤️'
  }
];

// Special message
const specialMessage = {
  title: "My Love",
  message: "Every moment with you is a treasure. You make my heart smile in ways I never thought possible. I love you more than words can express. Thank you for being the most amazing person in my life. ❤️"
};

// Create the server
const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle OPTIONS request (preflight)
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  // Handle API requests
  if (req.url === '/api/images') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(images));
    return;
  }
  
  if (req.url === '/api/special-message') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(specialMessage));
    return;
  }
  
  // Handle image requests
  if (req.url.startsWith('/images/')) {
    const imageName = req.url.split('/').pop();
    const imagePath = path.join(__dirname, 'public', 'images', imageName);
    
    // Check if the file exists
    fs.access(imagePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Image not found');
        return;
      }
      
      // Determine the content type based on file extension
      const ext = path.extname(imagePath).toLowerCase();
      let contentType = 'application/octet-stream';
      
      if (ext === '.jpg' || ext === '.jpeg') {
        contentType = 'image/jpeg';
      } else if (ext === '.png') {
        contentType = 'image/png';
      } else if (ext === '.gif') {
        contentType = 'image/gif';
      }
      
      // Read and serve the image
      fs.readFile(imagePath, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error reading image file');
          return;
        }
        
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      });
    });
    
    return;
  }
  
  // Default response for other requests
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head>
        <title>Love Gallery Server</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
          h1 { color: #e91e63; }
          .status { background-color: #f0f0f0; padding: 15px; border-radius: 5px; }
          .endpoints { margin-top: 20px; }
          .endpoint { background-color: #f9f9f9; padding: 10px; margin-bottom: 10px; border-left: 3px solid #e91e63; }
        </style>
      </head>
      <body>
        <h1>Love Gallery Server</h1>
        <div class="status">
          <p><strong>Status:</strong> Running</p>
          <p><strong>Port:</strong> ${PORT}</p>
        </div>
        <div class="endpoints">
          <h2>Available Endpoints:</h2>
          <div class="endpoint">
            <p><strong>GET /api/images</strong> - Returns all images</p>
          </div>
          <div class="endpoint">
            <p><strong>GET /api/special-message</strong> - Returns the special message</p>
          </div>
          <div class="endpoint">
            <p><strong>GET /images/{filename}</strong> - Returns the specified image</p>
          </div>
        </div>
      </body>
    </html>
  `);
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access the server at: http://localhost:${PORT}`);
  console.log(`API endpoints:`);
  console.log(`- http://localhost:${PORT}/api/images`);
  console.log(`- http://localhost:${PORT}/api/special-message`);
});
