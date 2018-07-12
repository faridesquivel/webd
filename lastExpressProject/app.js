var app = require("express")();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

var friends = [ "Tony", "Miranda", "Lili", "Sebas"];

app.get("/", function (req, res){
    res.render("home");
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends});
});

app.post("/addFriend", function (req, res) {
    var newFriend = req.body.name;
    friends.push(newFriend);
    res.redirect("friends");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Now serving...");
});