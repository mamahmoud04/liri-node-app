//Pseudocode
// install the given packages
//require keys.js

require("dotenv").config();

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
            case "movie-this": secondThird();
                break;
            case "do-what-it-says": readText();
                break;
            default: console.log("choose wisely");
                break;

        }
    })
