const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/bmicalc", function (req, res) {
  res.sendFile(__dirname + "/public/bmicalc.html");
});

app.post("/bmicalc", function (req, res) {
  var w = parseFloat(req.body.weight);
  var h = parseFloat(req.body.height);
  var bmi = w / (h * h);

  res.send("BMI is " + bmi);
});

app.listen(3000, function () {
  console.log("Server is successfully started.");
});
