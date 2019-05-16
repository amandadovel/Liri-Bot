// create variable axios to access omdb 
var axios = require('axios');

// create movieThis variable to connect to liri.js file and take in command, input, keys 
// also logs everything put in terminal and errors to corresponding txt files

var movieThis = function (command, userInput, keys, actionLog, errorLog) {
    if (userInput === null) {
        userInput = "Mr. Nobody";
    }
    console.log(userInput)

    // create queryURL to access api key 
    var queryURL = "http://omdbapi.com/?apikey=" + keys.id + "&t=" + userInput;
    axios.get(queryURL)
        .then(function (response) {
            var movie = response.data;
            console.log(movie.Response)
            if (movie.Response === "False") {
                console.log("Sorry, no movie data found for " + userInput + ". Try another movie title.")
            } else {
                console.log("\n----------------------\n");
                console.log(command);
                console.log(userInput);
                console.log("\n----------------------\n");
                console.log("\n****************\n");
                console.log("Title:", movie.Title)
                console.log("Release Year:", movie.Year)
                console.log("IMDB Rating:", movie.Ratings[0].Value)
                console.log("Rotten Tomato Rating:", movie.Ratings[1].Value)
                console.log("Production Country:", movie.Country)
                console.log("Language:", movie.Language)
                console.log("Plot:", movie.Plot)
                console.log("Actors:", movie.Actors)
                console.log("\n****************\n");
                console.log("\n----------------------\n");
            }

        })

        // catch and log errors

        .catch(function (err) {
            errorLog(userInput, err);
        })
    // logs terminal input to log.txt

    actionLog(userInput);
}

// module.exports makes properties and modules available outside of file
module.exports = movieThis;