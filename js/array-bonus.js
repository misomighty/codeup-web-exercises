"use strict";
/*Write a function that accepts an array whose elements are arrays where each inner array consists of two numbers. The function should return the index of the element whose two inner numbers add up to 9, or -1 if no pairs add up to 9.*/

function findIndexWhereSumIs9(arr) {

    arr.forEach(function(subArr){
        var whereIsit = [];
        var bouncer =subArr[0]+subArr[1]===9;
        if(bouncer){
            whereIsit = subArr;
            return subArr;
        }
        if(!bouncer){
            return -1;
        }

    });

}




findIndexWhereSumIs9([[1, 2], [3, 4], [4, 5], [9, 1]]); // returns 2
findIndexWhereSumIs9([[10, 2], [11, -2], [2, 5], [9, 1]]);// returns 1
findIndexWhereSumIs9([[10, 2], [11, -7], [2, 5], [9, 1]]);// returns -1