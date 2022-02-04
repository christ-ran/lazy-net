const express = require("express");
const lazyNet = require("../build/index");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Start server with Express.JS");
});

app.listen(port, () => {
  lazyNet(port, true);
});
