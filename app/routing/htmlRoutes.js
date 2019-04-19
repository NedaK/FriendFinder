


var express = require('express');
var router = express.Router();
var path = require("path");



router.get("/", function(req, res) {
    //res.send("About this home");
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

router.get("/survey", function(req, res) {
    //console.log("PATH: " + path);
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// router.get("/api/friends", function(req, res){
//     res.send("Hello from api friends");
//     //res.sendFile(path.join(__dirname, "../data/friends.js"));
//     //res.sendFile(friendArray);
// });


module.exports = router;