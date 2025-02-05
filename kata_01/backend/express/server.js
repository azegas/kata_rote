// node server.js

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors()); // Allow all origins

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
