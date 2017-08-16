"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
(function() {
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var color = colors[Math.floor(Math.random() * colors.length)];

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
})();

// TODO: HEB offers a 10% discount for shoppers whose total is more than $200. We know that Cameron bought $180, Ryan $250 and George $320. Write a JS program, using conditionals, that logs to the browser, how much Ryan, Cameron and George need to pay. Your program will have to display a line with the name of the person, the amount before the discount, if any, and the amount after the discount.
(function (){
    const customer = [{
        name: "cameron",
        total: 180,

    },{
        name: "ryan",
        total: 250,

    },{
        name: "george",
        total: 320
    }];

    for (let i = 0; i < customer.length; i++) {
        var test = customer[i].name;
        var price = customer[i].total;

        const discount = 0.10;
        var savings = 0;
        if (test < 200) {
            console.log(test + ", for only $" + (price - 200) + " more you can qualify for a %10 discount!");
        } else {
            console.log(test + ", you've saved $" + (price * discount) + "! Your total is" +
                " $" + (price -= (price * discount)));
        }

    }
})();


(function (){
    const flipACoin = Math.floor(Math.random()* 2);
    var toss = flipACoin === 0 ? console.log("Buy the damn house, Jack.") : console.log("Enjoy your new ride!");
})();

(function () {
    const luckyNumber = Math.floor(Math.random() * 6);
    var price = 60;
    console.log(luckyNumber);
    switch (luckyNumber) {
        case 1:
            console.log("10% is nice too. You owe " + (price -= (price * .10)));
            break;
        case 2:
            console.log("20% off! Not bad. You owe " + (price -= (price * .20)));
            break;
        case 3:
            console.log("Awww yeaah! 35% off! You owe " + (price -= (price * .30)));
            break;
        case 4:
            console.log("Holy shit, shopper! 40% off! You owe " + (price -= (price * .40)));
            break;
        case 5:
            console.log("JESUS LAWD HAVE MERCY! It's free! Get out of here scoundrel!");
            break;
        case 0:
            console.log("Uh oh.. no discount for you. Pay up, partner!");
            break;
        default:
            console.log("Error");
            break;
    }
})();

//Write some JavaScript that uses a confirm dialog to ask the user if they would like to enter a number. If they click 'Ok', prompt the user for a number, then use 3 separate alerts to tell the user: whether the number is even or odd what the number plus 100 is if the number is negative or positive if what the user enters is not a number, use an alert to tell them that, and do not display any of the
// above information.

(function (){
    var user_enters = confirm('Would you like to enter a number?');
    if(user_enters === true) {
        var user_num = parseInt(prompt("Enter a number."));
        if (user_num) {
            user_num % 2 === 0 ? alert("Your number is even.") : alert("Your number is odd.");
            user_num < 0 ? alert("Your number is less than 0.") : alert("Your number is positive.");
            alert("Your number plus 100 is: " + (parseInt(user_num) + 100));
        } else {
            prompt("Please enter a valid number.");
        }
    } else {
        alert("WHYY?? :(");
    }
})();