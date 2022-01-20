// express server
const express = require( 'express');
const http = require('http');

const app = express();

app.disable('x-powered-by');
app.disable('etag');
app.disable('content-type');

const server = http.createServer(app);

app.post('/move', (_req, res) => {
  console.log('/move req');
  res.end();
});

const bindAddress = '0.0.0.0';
const port = 10500;

server.listen(port, bindAddress, () => {
  console.log('start listening ...', { bindAddress, port });
});
