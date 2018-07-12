var Campground = require("../models/campground");
var Comment = require("../models/comment");

var middlewareObject = {
    
};

middlewareObject.checkCampgroundOwnership = function (req, res, next) {
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function (err, campground) {
            if (err) {
                req.flash("error", "Campground not found");
                res.redirect("back");
            } else {
                if(campground.author.id.equals(req.user._id)){
                    next();
                } else {
                    req.flash("error", "You do not have permission to do that");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You must be logged in to do that");
        res.redirect("back");
    }
}

middlewareObject.checkCommentOwnership = function (req, res, next) {
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function (err, foundComment) {
            if (err) {
                req.flash("error", "Comment not found");
                res.redirect("back");
            } else {
                if(foundComment.author.id.equals(req.user._id)){
                    next();
                } else {
                    req.flash("error", "You do not have permission to do that");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You must be logged in to do that");
        res.redirect("back");
    }
}

middlewareObject.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } 
    req.flash("error", "You must be logged In");
    res.redirect("/login");
}

module.exports = middlewareObject;