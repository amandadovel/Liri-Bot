# Liri-Bot 🤖

 LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.
<img src="https://giphy.com/embed/d7HRdH1OIsHe8TpTuS" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen><a href="https://giphy.com/gifs/nodejs-web-dev-liri-bot-d7HRdH1OIsHe8TpTuS">via GIPHY</a>

## Functionality 💪
#### Here's how the app works: 
1. Get concert data 🎸
`node liri.js concert-this <artist/band name here>`
    1.1. This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
        - Name of the venue
        - Venue location
        - Date of the Event (use moment to format this as "MM/DD/YYYY")

```
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
```

<img src="concert-this.jpg" alt="screen capture of concert.js">

2. Get song data 🎵
`node liri.js spotify-this-song '<song name here>'`

    2.1. This will show the following information about the song in your terminal/bash window
        - Artist(s)
        - The song's name
        - A preview link of the song from Spotify
        - The album that the song is from

```
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
```

<img src="spotify-this.jpg" alt="screen capture of spotify.js">

3. Get movie data 🎬
`node liri.js movie-this '<movie name here>'`

    3.1. This will output the following information to your terminal/bash window:
        * Title of the movie.
        * Year the movie came out.
        * IMDB Rating of the movie.
        * Rotten Tomatoes Rating of the movie.
        * Country where the movie was produced.
        * Language of the movie.
        * Plot of the movie.
        * Actors in the movie.

    3.2. If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

```
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
```
<img src="movie-this.jpg" alt="screen capture of movie.js">

4. Do what it says 💥
 `node liri.js do-what-it-says`

    4.1 Using the fs Node package, LIRI will take the text inside of `random.txt` and then use it to call one of LIRI's commands.


    4.2 It should run `spotify-this-song` for `"I Want it That Way,"` as follows the text in `random.txt`.
    
    4.3 Edit the text in `random.txt` to test out the feature for `movie-this` and `concert-this`.

```
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
```

<img src="dwis.jpg" alt="screen capture of dwis.js">


## Getting Started 🏁

These instructions will get you a copy of the project up and running on your local machine for grading and testing purposes. 

1. Clone repository. Click on the clone button next to the repository (clone with SSH). 
2. Open Terminal and git clone (paste) into directory of your choice. 
3. Open folder in VS Code. 
4. Each JS file is stored in the commands directory. Open the `liri.js` to see the main logic connecting to each of the other files.
5. Open `concert.js` for bands in town information, `movie.js` for omdb information on movies, `spotify.js` for music/song information, `dwis.js` for the `do-what-it-says` logic, `keys.js` stores the id's and keys for each of the api's used. Export makes properties and methods available outside the module file.
6. `.gitignore` stores the files needed for running the application but are kept hidden to avoid unneccessarily pushing them to github. 
7. `error.txt` logs everytime there is an error with time and date of that error. 
8. `log.txt` logs everything typed into the terminal


## Pre-Requisites ✔️

1. Node - use this site to install node into your computer: https://nodejs.org/en/download/
    *to check if node is installed type node -v into your terminal. If installed it will print the version number on the screen.
2. NPM - Node Package Manager. Use this site to assist in downloading packages or modules: https://www.npmjs.com/
3. Create .env file with NPM install. Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. 
```
npm install dotenv
```


## Built With 🔧

* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [Node] (https://nodejs.org/en/download/) - As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications. 
* [Javascript] (https://www.javascript.com/) -JavaScript is the programming language of HTML and the Web
* [JSON] (https://www.json.org/) - Javascript object notation, syntax for storing and exchanging information. 



## Author ⌨️
*** Amanda Dovel *** - [amandadovel](https://github.com/amandadovel)

## Acknowledgments 🌟

* Amber Burroughs, Tutoring badass
