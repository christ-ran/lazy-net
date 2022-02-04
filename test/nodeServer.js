const http = require("http");
const lazyNet = require("../build/index.js");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" }),
    res.write("Server has been established.");
  res.end();
});

server.listen(port, (error) => {
  if (error) throw error;
  lazyNet(3000);
});
