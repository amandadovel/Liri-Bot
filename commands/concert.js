// requires .env file 

require('dotenv').config();

// create variable and requires axios to access bands in town  

var axios = require("axios");

// create concertThis variable to connect to liri.js file and take in command, input, keys 
// also logs everything put in terminal and errors to corresponding txt files

var concertThis = function (command, userInput, key, moment, actionLog, errorLog) {
    if (userInput === null) {
        userInput = "Bassnectar";
    }

    // replaces characters with code because of axios documentation 

    var query = userInput;
    query = query.replace(/\//g, "%252F");
    query = query.replace(/\?/g, "%253F");
    query = query.replace(/\*/g, "%252A");
    query = query.replace(/\s/g, "%20");

    // api key 

    var queryURL = "https://rest.bandsintown.com/artists/" + query + "/events?app_id=" + key.id;

    // grabs response from axios object 
    axios.get(queryURL)
        .then(function (response) {
            var events = response.data;
            if (events.length > 0) {
                console.log("\n----------------------\n");
                console.log(command);
                console.log(userInput);
                console.log("\n----------------------\n");
                events.forEach(function (event) {
                    console.log("\n****************\n");
                    console.log("Venue:", event.venue.name)
                    console.log("Location:", event.venue.city, + "," + event.venue.region, event.venue.country)
                    console.log("Date:", moment(event.datetime).format("MM/DD/YYYY"))
                    console.log("Time:", moment(event.datetime).format("hh:mm A"))
                })
                console.log("\n****************\n");
                console.log("\n----------------------\n");

            } else {
                console.log("Sorry, no concert data was found for " + userInput + ". Try another band.")
            }
        })

        // logs errors
        .catch(function (error) {
            errorLog(userInput, error)
        })

    // logs everything typed into terminal
    actionLog(userInput);
}

// module.exports makes properties and modules available outside of file
module.exports = concertThis;