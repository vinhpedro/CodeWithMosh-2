// Lessons on Arrays with codewithmosh


console.log("Exercise 1 - Array from Range:");

const numbers = arrayFromRange(-10, -4);

console.log(numbers); 

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
    output.push(i);
    return output;
}

//_____________________________________________

// Ex. 2 Includes
console.log("Exercise 2 - Includes:");

const arrayOne = [1, 2, 3, 4];

console.log(includes(arrayOne, 5));

function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
        return false;
}

//_____________________________________________

// Ex. 3 Except
console.log("Exercise 2 - Except:");

const numbersThree = [1, 1, 1, 2, 3, 4, 2, 2, 2, 5, 1, 1, 1];

const output = except(numbersThree, [1, 2]);

function except(array, excluded){
    let newArray = [];
    for (let element of array)
        if (!excluded.includes(element))
            newArray.push(element);
        return console.log(newArray);
            
}

//_____________________________________________

// Ex. 4 Except
console.log("Exercise 3 - Moving an Element:");

const numbersFour = [1, 2, 3, 4];
const outputFour = move(numbersFour, 0, 1);

console.log(outputFour);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}

