var dwis = function (command, userInput, actionLog, errorLog, startLiri, fs) {
    fs.readFile('./random.txt', "UTF8", function read(err, data) {
        if (err) {
            errorLog(userInput, err)
            throw err;
        }

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
        } else {
            console.log("Sorry, random.txt is empty");
        }

    });

}

module.exports = dwis;