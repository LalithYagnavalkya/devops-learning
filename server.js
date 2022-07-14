const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://stormy-ravine-46879.herokuapp.com",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("wtf is wrong");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("this is running on port 5000");
});
