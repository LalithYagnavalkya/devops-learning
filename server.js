const express = require("express");
const cors = require("cors");
const app = express();

// app.use(express.json());

app.get("/", (req, res) => {
  res.send("wtf is wrong");
});

app.listen(5000, () => {
  console.log("this is running on port 5000");
});
