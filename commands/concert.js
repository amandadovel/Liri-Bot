require('dotenv').config();

var axios = require("axios");

var concertThis = function (command, userInput, key, moment, actionLog, errorLog) {
    if (userInput === null) {
        userInput = "Pink Floyd";
    }

    var query = userInput;
    query = query.replace(/\//g, "%252F");
    query = query.replace(/\?/g, "%253F");
    query = query.replace(/\*/g, "%252A");
    query = query.replace(/\s/g, "%20");

    var queryURL = "https://rest.bandsintown.com/artists/" + query + "/events?app_id=" + key.id;

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
        .catch(function (error) {
            errorLog(userInput, error)
        })
    actionLog(userInput);
}
module.exports = concertThis;