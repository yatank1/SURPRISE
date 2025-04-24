// Very simple HTTP server
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Server is running!');
});

server.listen(5000, () => {
  console.log('Server running on port 5000');
});
