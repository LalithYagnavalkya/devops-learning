const express = require("express");
const cors = require("cors");
const app = express();

// app.use(express.json());
const port = 3001;

app.get("/", (req, res) => {
  res.send("wtf is wrong");
});
app.get("/getdata", (req, res) => {
  res.send(["hello", "how are you"]);
});

app.listen(port, () => {
  console.log(`this is running on port ${port}`);
});
