"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'indigo'; // TODO: change this to your favorite color from the list
console.log(color);
// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.
    if (color == "red") {
        console.log("Red is the color of fire ants.")
    } else if (color === "orange") {
        console.log("Orange is the color of orange kool-aid.")
    }else if (color === "yellow") {
        console.log("Yellow pee reminds me to drink water.")
    }else if (color === "green") {
        console.log("Green anything is what I don't want on my plate. -Merica")
    }else if (color === "blue") {
        console.log("This river used to be blue until THEY came.")
    }else  {
        console.log("I don't know anything about that color")
    }

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
var match = color === favorite ? console.log("Hey! That's my favorite color!") : console.log("Meh.");