// requires .env, moment, and fs to read api keys, connect to real and file stystem from computer. 
require('dotenv').config();
var keys = require("./keys");

var moment = require("moment");

var fs = require("fs");

// Creates variable to read user input, set to null in case there is no user input. 
var command = process.argv[2] || null;

// Makes user input into a string
var userInput = process.argv.slice(3);
userInput = userInput.join(" ") || null;

// connects liri.js to the other logic files. 
var concertThis = require("./commands/concert");
var spotifyThis = require("./commands/spotify");
var movieThis = require("./commands/movie");
var dwis = require("./commands/dwis");

// Switch statement logging commands, userInput, api Keys, actionlog, and error log to each case.
startLiri(command, userInput);

function startLiri(command, userInput) {
    if (command !== null) {
        switch (command) {
            case "concert-this":
                concertThis(command, userInput, keys.omdb, moment, actionLog, errorLog);
                break;
            case "spotify-this-song":
                spotifyThis(command, userInput, keys.spotify, actionLog, errorLog);
                break;
            case "movie-this":
                movieThis(command, userInput, keys.omdb, actionLog, errorLog);
                break;
            case "do-what-it-says":
                dwis(command, userInput, actionLog, errorLog, startLiri, fs);
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

// if users input is invalid, function to ask them to give a different command. 
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

// Stores user input into a log.txt file with date and time of each command. 
function actionLog(userInput) {
    var actionItem = [moment().format("MM/DD/YYYY hh:mm A"), command, userInput];
    actionItem = actionItem + ";\n";
    fs.appendFile('log.txt', actionItem, function (err) {
        if (err) throw err;
    });
}

// Stores errors into a error.txt file to record each error with date and time. 
function errorLog(userInput, error) {
    var errorItem = [moment().format("MM/DD/YYYY hh:mm A"), command, userInput, error];
    errorItem = errorItem + ";\n";
    fs.appendFile('error.txt', errorItem, function (err) {
        if (err) throw err;
    });
}
