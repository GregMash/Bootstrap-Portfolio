// Require dependencies
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/portfolio.html"));
  });

app.get("/resume", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/resume.html"));
  });

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
