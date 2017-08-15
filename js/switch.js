"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.
    case "red":
        console.log("Red sauce on my taco is the best.")
        break;
    case "orange":
        console.log("Orange cheese is a lie")
        break;
    case "yellow":
        console.log("Yellow duck swimming slowly past you.")
        break;
    case "green":
        console.log("Get green grass stains out fast with clorox!")
        break;
    case "blue":
        console.log("Blueberry waffles with blueberry syrup.")
        break;
    default:
        console.log("I don't know anything about that color!")
        break;

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
}

// TODO: HEB offers a 10% discount for shoppers whose total is more than $200. We know that Cameron bought $180, Ryan $250 and George $320. Write a JS program, using conditionals, that logs to the browser, how much Ryan, Cameron and George need to pay. Your program will have to display a line with the name of the person, the amount before the discount, if any, and the amount after the discount.

var cameron = parseInt(180), ryan = parseInt(250), george = parseInt(320);


