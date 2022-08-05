const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://devops-react.vercel.app/", credentials: true }));
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader(
    "Access-Control-Allow-Origin",
    "http://devops-react.vercel.app/"
  );

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
const port = 3002;
app.get("/", (req, res) => {
  res.send("wtf is wrong");
});
app.get("/getdata", (req, res) => {
  res.send(["hello", "how are you"]);
});

app.listen(port, () => {
  console.log(`this is running on port ${port}`);
});
