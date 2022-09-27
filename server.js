const http = require('http');

const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bienvenido al Servidor JS de TMD');
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});