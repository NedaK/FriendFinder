//var path = require("path");
var express = require("express");
//var fs = require("fs");
//var friendArray = [];

var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js")


var app = express();

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(htmlRoutes);
app.use(apiRoutes);


// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./app/public/home.html"));
// });

// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "./app/public/survey.html"));
// });

// app.get("/api/friends", function(req, res){
    
//     res.sendFile(path.join(__dirname, "./app/data/friends.js"));
//     //res.sendFile(friendArray);
// });

// app.post("/api/friends", function(req,res){
    
//     var newFriend = req.body;
//     console.log(newFriend);

//      res.json(newFriend);
//      friendArray.push(newFriend);
//      console.log(friendArray);

//     fs.writeFile("./app/data/friends.js", JSON.stringify(newFriend, null, 2), function(err, resp){
//         if(err){
//             console.error(err);
//         }
//         else{
//             console.log("Added!");
//         }
//     });

// });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
