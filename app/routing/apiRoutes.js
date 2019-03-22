

var express = require('express');
var api_router = express.Router();
var path = require("path");

var friendArray = require("../data/friends.js");

api_router.get("/api/friends", function(req, res){
    //res.send("Hello from api friends");
    //res.sendFile(path.join(__dirname, "../data/friends.js"));
    //res.sendFile(friendArray);
    return res.json(friendArray)
});

api_router.post("/api/friends", function(req,res){
    
    var newFriend = req.body;
    
    //change text scores to number scores for calculations needed later
    newFriend.scores = newFriend.scores.map(x=>Number(x));
    friendArray.push(newFriend);
     //console.log(newFriend);
     //res.json(newFriend); 
     //console.log(friendArray.length);


    //*****logic to compare newFriend's survey response to other stored friends and find most compatible.****
    

    //loop through the friends array and compare the scores array of friendArray[i] to the scores of the new user. 
    //This will give you a "difference" array of the absolute differnce between the index values of the new user 
    //compared to a friend in the friendArray.
    //Then loop through the differnce array and add the values to get a total_dif score (the total difference score
    //between the newFriend and the friend at friendArray[i].)
    //Create a user object that has the name, photo, and total_dif score for the friend at friendArray[i],
    //and then add the user to the userArray.

     var userArray = [];
     for(var i = 0; i< friendArray.length -1; i++){

        var difference = newFriend.scores.map(function(item, index) {
        
           return Math.abs(item - friendArray[i].scores[index]);
        });   
            var total_dif = 0;
            

            for(var j = 0; j<difference.length; j++){
                total_dif += difference[j];
            }

            var user = {
                name: friendArray[i].name,
                pic: friendArray[i].photo,
                total_difference: total_dif

            };
            userArray.push(user);


        
        //console.log(userArray);
        
    };

    console.log(userArray);

//****** Logic to get most compatible friend from userArray*******////
//Set the most_compatible friend to the first user in the user array.
//Loop through the userArray and if you find a user who has a total_difference
//less than the first user, update most_compatible to be that user.

    var most_compatible = userArray[0];
    for (var i = 0; i< userArray.length; i++){
        if(userArray[i].total_difference < most_compatible.total_difference){
            most_compatible = userArray[i];
        }
    }

    console.log("Most compatible: " + most_compatible.name);
    console.log("Most compatible: " + most_compatible.pic);
    console.log("Most compatible: " + most_compatible.total_difference);
        

    

});

module.exports = api_router;


