"use strict";

function skipper(){
    var skip = (parseInt(prompt("Enter an odd number between 1 and 50..")));
    while(skip == null || skip < 1 || skip > 50) {
        skip = (parseInt(prompt("Enter an odd number between 1 AND 50..")));
    }
    for(var i = 0; i <= 50; i++) {
        if (i === skip) {
            console.log("Yikes! Skipping " + skip);
            continue;
        } else {
            console.log(i);
        }
    }
}

function pyrimid_input(){
    let num;
    do {
        num = Number(prompt("Please enter a number: "));
    } while (num < 0 || isNaN(num));

    for (let i = 1; i < num + 1; i++) {
        for (let n = i - 1; n < i; n++) {
            console.log("*".repeat(i));
        }
    }
}

(function(){
    var input = prompt("1 - 10: ");
    var star = "*";
    for(var i = 0; i <= input; i++) {

        for (var n = 0; n < i; n++) {
            console.log(star);
        }

    }
})();

