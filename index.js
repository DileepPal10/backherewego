require("dotenv").config();
const express = require("express");
const app = express();

const port = 4000;
app.get("/", (req, res) => {
  res.send("Hello Word");
});
app.get("/twitter", (req, res) => {
  res.send("twiiter is old now");
});
app.get("/login", (req, res) => {
  res.send("<h1>login is not working</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`example app is listening at ${port}`);
});
