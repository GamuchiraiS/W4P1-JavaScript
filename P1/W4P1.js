// JavaScript source code
var numArr = [];
var avg;
var arrSum;
var belowCounter;
var aboveCounter;

for (let i = 0; i < 10; i++) {
    var userInput = prompt("Please enter a number: ");
    numArr.push(parseInt(userInput));
    //lets the user input the numbers
    //the numbers into an array
}
//method for calculating the average
function calculate_avg(numArr) {
    arrSum = 0;

    for (var i in numArr) {
        arrSum += numArr[i];
    }

    //calculating the average 
    avg = arrSum / 10;
    //returning the average
    return avg;
}
//method for checking the numbers below the average
function belowAverage(numArr, avg) {
    belowCounter = 0;
    for (var i = 0; i < 10; i++) {
        //if the number is less than the average
        //increment the belowCounter
        if (numArr[i] < avg) {
            belowCounter++;
        }
    }
    return belowCounter;
}
//method for checking the numbers above the average
function aboveAverage(numArr, avg) {
    aboveCounter = 0;

    for (var i = 0; i < 10; i++) {
        //if the number is more than the average
        //increment the belowCounter
        if (numArr[i] > avg) {
            aboveCounter++;
        }
    }
    return aboveCounter;
}


const average = calculate_avg(numArr);
console.log("The average is: " + average);
var below = belowAverage(numArr, avg);
console.log("Amount of numbers below the average = " + below);
var above = aboveAverage(numArr, avg);
console.log("Amount of numbers above the average = " + above);
