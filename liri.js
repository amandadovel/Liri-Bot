var command = process.argv[2] || null;

var userInput = process.argv.slice(3);
userInput = userInput.join(" ") || null;

if (command !== null) {
    switch (command) {
        case "concert-this":
            console.log("concert");
            break;
        case "spotify-this-song":
            console.log("spotify");
            break;
        case "movie-this":
            console.log("movie");
            break;
        case "do-what-it-says":
            console.log("dwis");
            break;
        default:
            console.log("\n##############\n");
            console.log("I don't know that command!\n");
            console.log("Please add a command: ");
            console.log("----------------------");
            console.log("concert-this");
            console.log("spotify-this-song");
            console.log("movie-this");
            console.log("do-what-it-says");
            console.log("\n##############\n");
    }
} else {
    console.log("\n##############\n");
    console.log("Please add a command: ");
    console.log("----------------------");
    console.log("concert-this");
    console.log("spotify-this-song");
    console.log("movie-this");
    console.log("do-what-it-says");
    console.log("\n##############\n");
}