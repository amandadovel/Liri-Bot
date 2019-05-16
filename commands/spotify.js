// create variable and use require to access api module
var Spotify = require("node-spotify-api");

// create spotifyThis variable to connect to liri.js file and take in command, input, keys 
// also logs everything put in terminal and errors to corresponding txt files

var spotifyThis = function (command, userInput, keys, actionLog, errorLog) {
    if (userInput === null) {
        userInput = "The Sign";
    }

    // connecting to keys.js to access spotify api 

    var spotify = new Spotify({
        id: keys.id,
        secret: keys.secret
    })
    var queryParam = userInput;

    // searches through spotify api and limits response to 10 objests 

    spotify.search({
        type: "track",
        query: queryParam,
        limit: 10
    }, function (error, data) {
        if (error) {
            errorLog(userInput, error)
        }
        var songs = data.tracks.items;
        if (songs.length > 0) {
            console.log("\n----------------------\n");
            console.log(command);
            console.log(userInput);
            console.log("\n----------------------\n");
            songs.forEach(function (song) {
                console.log("\n****************\n");
                console.log("Song Name:", song.name)
                console.log("Album:", song.album.name)
                console.log("Artist(s):", song.artists[0].name)
                console.log("Preview Link:", song.preview_url)

            })
            console.log("\n****************\n");
            console.log("\n----------------------\n");

            // else statement if userInput does not exist

        } else {
            console.log("Sorry, no song data was found for " + userInput + ". Try another song!");
        }
        // calls actionLog function to log from terminal to log.txt
        actionLog(userInput);
    })

}

// module.exports makes properties and modules available outside of file

module.exports = spotifyThis;

