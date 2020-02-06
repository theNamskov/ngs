const http = require("http");
const port = 7000;
const server = http.createServer((request, response) => {
  response.end('Hello World\n');
});

server.listen(port, () => {
  console.log('Server is running...');
});
