var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!!");
});

app.get("/speak/:animal", function (req, res) {
    var animal = req.params();
    res.send("The " + animal + " says ");
});

app.get("/repeat/:text/:times", function(req, res) {
    var response = "";
    for(var i=0; i< Number(req.params.times); i++) {
        response += req.params.text;
    }
    res.send(response);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found");
});

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Now serving...");
});