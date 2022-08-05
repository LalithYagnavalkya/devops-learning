const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));
const port = 3001;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => {
  res.send("wtf is wrong");
});
app.get("/getdata", (req, res) => {
  res.send(["hello", "how are you"]);
});

app.listen(port, () => {
  console.log(`this is running on port ${port}`);
});
