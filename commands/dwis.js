// create dwis variable to connect to liri.js file and take in command, input, keys 
// also logs everything put in terminal and errors to corresponding txt files
// readFile(random.txt) so dwis.js logic can read appropriate text file

var dwis = function (command, userInput, actionLog, errorLog, startLiri, fs) {
    fs.readFile('./random.txt', "UTF8", function read(err, data) {
        if (err) {
            errorLog(userInput, err)
            throw err;
        }

        // if statement creating variable for content and calling random.txt file.  
        if (data.length > 0) {
            var content = data.split(",");
            if (content.length === 1) {
                var liriCommand = content[0];
                var liriInput = null;
                actionLog(liriInput);
                startLiri(liriCommand, liriInput);
            } else {
                var liriCommand = content[0];
                var liriInput = content[1];
                actionLog(liriInput);
                startLiri(liriCommand, liriInput);
            }

            // create else statement in case random.txt file is deleted
        } else {
            console.log("Sorry, random.txt is empty");
        }

    });

}

module.exports = dwis;