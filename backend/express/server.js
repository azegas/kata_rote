const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const data = require("../data.json");

app.use(cors()); // Allow all origins

app.get("/", (req, res) => {
  res.json(data); // Use res.json() instead of res.send() - for simple text
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
