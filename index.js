// Review of first half of Javascript basics with Mosh

// Exercises 
//____________________________________________________________________

// Ex. 1
console.log("Exercise 1 - Swapping Variables:");

let a1 = 'red';
let b1 = 'blue';

let c1 = a1;
a1 = b1;
b1 = c1;

console.log(a1);
console.log(b1);

//____________________________________________________________________

// Ex. 2
console.log("Exercise 2 - Max of Two Numbers:");

function maxNum (number1, number2) {
    return (number1 > number2) ? number1 : number2;
}

console.log(maxNum(30, 20));

//____________________________________________________________________

// Ex. 3
console.log("Exercise 3 - Landscape or Portrait:");

function isLandscape (width, height) {
    return (width > height) ? "Landscape" : "Portrait";
}

console.log(isLandscape(800, 1000));

//____________________________________________________________________

// Ex. 4
console.log("Exercise 4 - FizzBuzz:");

function fizzBuzz (input) {
    if (typeof input !== 'number')
        return NaN;
    
    if ((input % 3 === 0) && (input % 5 === 0))
        return "FizzBuzz";
    
    if (input % 3 === 0) 
        return "Fizz";
    
    if (input % 5 === 0) 
        return "Buzz";
    
    return input;
}

console.log(fizzBuzz(17));

//____________________________________________________________________

// Ex. 5
console.log("Exercise 5 - Demerit Points:");

// Speed Limit = 70
// 5 -> point
// Math.floor(1.3)
// ++12 Points = License Suspended

checkspeed(100);

function checkspeed(speed) {

    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint){
    console.log("Ok.");
    return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint)
    if (points >= 12)
        console.log("License Suspended");
    else 
        console.log("Points", points);

}

//____________________________________________________________________

// Ex. 6
console.log("Exercise 6 - Even and Odd Numbers:");

showNumbers(9);

function showNumbers(limit) {
    for (i = 0; i <= limit; i++)
    return console.log((limit % 2 === 0) ? "Even" : "Odd");
}

//____________________________________________________________________

// Ex. 7
console.log("Exercise 7 - Count Truthy:");

let array = ["Hello", 0, null, 20, NaN, 40, "Twenty"];
console.log(countTruthy(array));

function countTruthy (array) {
    let count = 0;
    for (let value of array)
    if (value)
        count++;
    return count;
}

//____________________________________________________________________

// Ex. 8
console.log("Exercise 8 - String Properties:");

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

showProperties(movie);

function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}

//____________________________________________________________________

// Ex. 9 
console.log("Exercise 9 - Sum of Multiples of 3 and 5:");

console.log(sum(10));

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
        sum += i;

    return sum;

}

//____________________________________________________________________

// Ex. 10 
console.log("Exercise 10 - Grades:");

const marks = [20, 40, 40];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}

//____________________________________________________________________

// Ex. 11 
console.log("Exercise 11 - Stars:");

showStars(5);

function showStars(rows) {
    for (let row = 1; row <= rows; row++){
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}

//____________________________________________________________________

// Ex. 12 
console.log("Exercise 12 - Prime Numbers:");

showPrimes(20);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    
    return true;
}

//____________________________________________________________________

