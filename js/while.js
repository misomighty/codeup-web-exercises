"use strict";
function while_looper(){
    var i = 0;
    var counter = 1;
    while (i < 16) {
        counter *= 2;
        console.log(counter);
        i++;
    }
}

function ice_cream(){
    // This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
    // This is how you get a random number between 1 and 5

    console.log("I have: " + allCones);
    while(allCones > 0) {
        var cones = Math.floor(Math.random() * 5) + 1;
        if (allCones < cones){
            console.log("I don't have enough cones to sell you..");
        } else {
                console.log("I've sold " + cones + " cones!");
                allCones -= cones;
                console.log("Now I have " + allCones + " cones!");
            if (allCones === 0) {
                console.log("I can finally go home...");
            }
        }
    }
}
