"use strict";


function multiplication_table() {
    const user_num = (parseInt(prompt("Please enter a number: ")));
    for (let i = 1; i <= 10; i++) {
        console.log(user_num + "x" + i + " = " + user_num * i)
    }
}

function random_10() {
    for (let i = 1; i <= 10; i++) {
        var evenOdd = (randomNum % 2 === 0) ? "even" : "odd";
        var randomNum = Math.floor(Math.random() * 20) + 200;
        console.log(randomNum + " is " + evenOdd);
    }
}

function pyrimid() {
    for (var i = 0; i <= 10; i++) {
        var str = i.toString();
        str = (str.length == 2) ?  str.substr(1, 1) : null;
        var repeater = str.repeat(i);
        console.log(repeater);
    }
}

function pyramid2(){
    for(let i = 0=1; i <= 10; i++){
        console.log((i % 10)).toString().repeat(i);
    }
}


function minusFive() {
    var count = 105;
    for (var i = 100/5; i > 0; i--) {
        count -= 5;
        console.log(count);
    }
}
