//Pseudocode
// install the given packages
//require keys.js
require('dotenv').config();
var axios = require("axios");
var inquirer = require("inquirer");
var moment = require("moment");
var keys = require("./keys.js");
var spotify = require('node-spotify-api');
var fs = require("fs")

//this is to get access spotify keys
var spotify = new Spotify(keys.spotify);
console.log("keys")
inquirer.prompt(
    {
        type: "list",
        message: "what option do you want to run",
        name: "input",
        choices: ["concert-this",
            "spotify-this-song",
            "movie-this",
            "do-what-it-says"]

    }
)
    .then(function (ans) {
        writeInput(ans.input)
        switch (ans.input) {
            // assign topic and run options
            case "concert-this": firstInput();
                break;
            case "spotify-this-song": secondInput();
                break;
            case "movie-this": thirdInput();
                break;
            case "do-what-it-says": doWhatItSays();
                break;
            default: console.log("choose wisely");
                break;

        }
    })

function firstInput(artist) {
    axios.get("https://rest.bandsintown.com/artists/" +
        artist +
        "/events?app_id=codingbootcamp"
    )
        .then(function (res) {
            for (i = 0; i < res.data.length; i++) {

                var moment = moment(res.data[i].date.time).format(
                    "MMMM Do YYYY, h:mm:ss"
                );
                console.log(moment);

                console.log(res.data[i].venue.name);
                console.log(res.data[i].venue.city);
                console.log("------------------");
            }
        });
};

function secondInput(song) {
    spotify.search({ type: 'track', query: song })

        .then(function (data) {

            for (var i = 0; i < data.tracks.items.length; i++) {
                var songRes = data.tracks.items[i];
                //artist
                console.log("Artist: " + songRes.artists[0].name);
                //song name
                console.log("Song: " + songRes.name);
                //spotify preview link
                console.log("Preview URL: " + songRes.preview_url);
                //album name
                console.log("Album: " + songRes.album.name);
                console.log("-----------------------");
            };
        })


        .catch(function (err) {
            console.log(err);

        });

}

function thirdInput(movieInput) {
    var URL = 'http://www.omdbapi.com/?t=' + movieInput + "&y=&plot=short&apikey=trilogy";

    axios.get(URL)
        .then(function (movieResponse) {
            console.log(" movies !");

            console.log("Title: " + data.Title);
            console.log("Release Year: " + data.Year);
            console.log("IMdB Rating: " + data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + data.tomatoRating);
            console.log("Country: " + data.Country);
            console.log("Language: " + data.Language);
            console.log("Plot: " + data.Plot);
            console.log("Actors: " + data.Actors);



        })
    if (err) {
        console.log('Err occurred.')

        return (movie === "Mr. Nobody")
        console.log("_____________");
        console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");

    }
};
function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        //Return error if error occurs.
        if (error) {
            return console.log(error);
        }

    });

}