var App = require("express")();
var request = require("request");

App.set("view engine", "ejs");

App.get("/", function(req, res) {
   res.render("search"); 
});

App.get("/results", function (req, res) {
    var query = req.query.search;
    request("http://omdbapi.com/?s="+ query + "&apikey=thewdb", function (error, response, body) {
        if (!error && response.statusCode == 200) {
           var data = JSON.parse(body);
           res.render("results", { data });
        }
    });
});

App.listen(process.env.PORT, process.env.IP, function() {
    console.log("Now serving movie App...");
});