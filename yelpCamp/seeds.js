var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
        {
            name: "Cloud's Rest",
            image: "https://farm2.staticflickr.com/1075/1132747626_f7adec63dd.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sapien tristique, venenatis sem eu, aliquam arcu. Nunc eu orci eleifend, fermentum ante vel, tempor velit. Nam sed mi libero. Ut mollis mauris quis mi iaculis, et ultrices magna hendrerit. Integer imperdiet et dolor ut gravida. Nullam eu lacus at diam elementum ornare. Vestibulum tempus tristique dui lobortis interdum. Integer at eros id turpis congue gravida quis id tellus. Aenean posuere massa vitae felis convallis tempus. Mauris nec eleifend leo. Integer interdum viverra dapibus. Aenean orci sapien, faucibus sit amet magna sit amet, pharetra sodales est. Pellentesque dapibus eu purus ut facilisis. Ut vitae cursus justo. Aliquam erat volutpat. Donec ligula erat, egestas eget mi ut, aliquam facilisis felis."
        },
        {
            name: "Desert beauty",
            image: "https://farm5.staticflickr.com/4151/5012194135_b2781cc17c.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sapien tristique, venenatis sem eu, aliquam arcu. Nunc eu orci eleifend, fermentum ante vel, tempor velit. Nam sed mi libero. Ut mollis mauris quis mi iaculis, et ultrices magna hendrerit. Integer imperdiet et dolor ut gravida. Nullam eu lacus at diam elementum ornare. Vestibulum tempus tristique dui lobortis interdum. Integer at eros id turpis congue gravida quis id tellus. Aenean posuere massa vitae felis convallis tempus. Mauris nec eleifend leo. Integer interdum viverra dapibus. Aenean orci sapien, faucibus sit amet magna sit amet, pharetra sodales est. Pellentesque dapibus eu purus ut facilisis. Ut vitae cursus justo. Aliquam erat volutpat. Donec ligula erat, egestas eget mi ut, aliquam facilisis felis."
        },
        {
            name: "Nature On",
            image: "https://farm5.staticflickr.com/4016/4270995674_9fd4546267.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sapien tristique, venenatis sem eu, aliquam arcu. Nunc eu orci eleifend, fermentum ante vel, tempor velit. Nam sed mi libero. Ut mollis mauris quis mi iaculis, et ultrices magna hendrerit. Integer imperdiet et dolor ut gravida. Nullam eu lacus at diam elementum ornare. Vestibulum tempus tristique dui lobortis interdum. Integer at eros id turpis congue gravida quis id tellus. Aenean posuere massa vitae felis convallis tempus. Mauris nec eleifend leo. Integer interdum viverra dapibus. Aenean orci sapien, faucibus sit amet magna sit amet, pharetra sodales est. Pellentesque dapibus eu purus ut facilisis. Ut vitae cursus justo. Aliquam erat volutpat. Donec ligula erat, egestas eget mi ut, aliquam facilisis felis."
        }
    ]

function seedDB() {
    Campground.remove({}, function (err) {
        // if(err){
        //     console.log(err);
        // } else {
        //     console.log("Campgrounds removed...");
        //     data.forEach(function(seed) {
        //         Campground.create(seed, function(err, campground){
        //           if(err){
        //               console.log(err);
        //           } else {
        //               console.log("Campground added...");
        //               Comment.create(
        //                     { 
        //                         text: "nice place but i wish there was internet",
        //                         author: "Homer"
        //                     }, function (err, comment) {
        //                         if(err){
        //                             console.log(err);
        //                         } else {
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("Comment created...");
        //                         }
        //                     });
        //           }
        //         });
        //     });
        // }
    });
}

module.exports = seedDB;