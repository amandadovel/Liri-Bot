require('dotenv').config();
var keys = require("./keys");

var moment = require("moment");

var fs = require("fs");

var command = process.argv[2] || null;

var userInput = process.argv.slice(3);
userInput = userInput.join(" ") || null;

var concertThis = require("./commands/concert");
var spotifyThis = require("./commands/spotify");

startLiri();

function startLiri() {
    if (command !== null) {
        switch (command) {
            case "concert-this":
                concertThis(command, userInput, keys.omdb, moment, actionLog, errorLog);
                break;
            case "spotify-this-song":
                spotifyThis(command, userInput, keys.spotify, actionLog, errorLog);
                break;
            case "movie-this":
                console.log("movie");
                break;
            case "do-what-it-says":
                console.log("dwis");
                break;
            default:
                console.log("\n##############\n");
                console.log("I don't know '" + command + "' as a command!\n");
                commandError();
        }
    } else {
        commandError();
    }
}

function commandError() {
    console.log("\n##############\n");
    console.log("Please add a liri command: ");
    console.log("----------------------");
    console.log("concert-this");
    console.log("spotify-this-song");
    console.log("movie-this");
    console.log("do-what-it-says");
    console.log("\n##############\n");
}

function actionLog(userInput) {
    var actionItem = [moment().format("MM/DD/YYYY hh:mm A"), command, userInput];
    actionItem = actionItem + ";\n";
    fs.appendFile('log.txt', actionItem, function (err) {
        if (err) throw err;
    });
}

function errorLog(userInput, error) {
    var errorItem = [moment().format("MM/DD/YYYY hh:mm A"), command, userInput, error];
    errorItem = errorItem + ";\n";
    fs.appendFile('error.txt', errorItem, function (err) {
        if (err) throw err;
    });
}
