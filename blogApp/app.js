var express = require("express");
var sanitizer = require("express-sanitizer");
var methodOverride = require("method-override");
var App = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_app");
App.set("view engine", "ejs");
App.use(express.static("public"));
App.use(bodyParser.urlencoded({extended: true}));
App.use(sanitizer());
App.use(methodOverride("_method"));


var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

App.get("/", function(req, res) {
   res.redirect("/blogs"); 
});

App.get("/blogs", function (req, res) {
    Blog.find({}, function (err, blogs) {
       if (err) {
           console.log("Something went wrong...");
       } else {
           res.render("index", {blogs});
       } 
    });
});

App.get("/blogs/new", function(req, res) {
   res.render("new"); 
});

App.post("/blogs", function (req, res) {
    //req.body.blog.body = req.sanitizer(req.body.blog.body);
    Blog.create(req.body.blog, function (err, newBlog) {
       if(err){
           res.render("new");
       } else {
           res.redirect("/blogs");
       }
    });
});

App.get("/blogs/:id", function(req, res) {
   Blog.findById( req.params.id, function (err, foundBlog) {
      if(err){
          res.redirect("/blogs");
      } else {
          res.render("show", { blog: foundBlog });
      }
   }); 
});

App.get("/blogs/:id/edit", function(req, res) {
   Blog.findById(req.params.id, function (err, foundBlog) {
       if(err) {
           res.redirect("/blogs");
       } else {
           res.render("edit", { blog: foundBlog });
       }
   });
});

App.put("/blogs/:id", function (req, res) {
   // req.body.blog.body = req.sanitizer(req.body.blog.body);
   Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err, updatedBlog) {
      if (err) {
          res.redirect("/blogs");
      } else {
          res.redirect("/blogs/" + req.params.id);
      } 
   });
});

App.delete("/blogs/:id", function (req, res) {
   Blog.findByIdAndRemove( req.params.id, function (err) {
       if(err) {
            console.log(err);
       } else {
            res.redirect("/blogs");
       }
   });
});

App.listen(process.env.PORT, process.env.IP, function () {
    console.log("Now listening...");
});
