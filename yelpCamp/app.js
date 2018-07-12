var express = require("express");
var App = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var flash = require("connect-flash");
var passport = require("passport");
var localStrategy = require("passport-local");
var methodOverride = require("method-override");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var User = require("./models/user");
var seedDB = require("./seeds");

var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var indexRoutes = require("./routes/index");

mongoose.connect("mongodb://localhost/yelp_camp");
App.use(bodyParser.urlencoded({ extended: true }));
App.set("view engine", "ejs");
App.use(express.static(__dirname + "/public"));
App.use(methodOverride("_method"));
App.use(flash());
//seedDB();

App.use(require("express-session")({
    secret: "Coco es el perro mas loco de todo el universo",
    resave: false,
    saveUninitialized: false
}));

App.use(passport.initialize());
App.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

App.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

App.use(indexRoutes);
App.use("/campgrounds", campgroundRoutes);
App.use("/campgrounds/:id/comments", commentRoutes);

App.listen(process.env.PORT, process.env.IP, function() {
   console.log("El servidor ha sido iniciado..."); 
});