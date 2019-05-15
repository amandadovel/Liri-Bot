var Spotify = require("node-spotify-api");

var spotifyThis = function (command, userInput, keys, actionLog, errorLog) {
    if (userInput === null) {
        userInput = "The Sign";
    }
    var spotify = new Spotify({
        id: keys.id,
        secret: keys.secret
    })
    var queryParam = userInput;

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

        } else {
            console.log("Sorry, no song data was found for " + userInput + ". Try another song!");
        }
        actionLog(userInput);
    })

}
module.exports = spotifyThis;

