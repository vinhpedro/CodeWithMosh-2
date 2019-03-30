// Lessons on Objects with codewithmosh

// Ex. 1 Address Object
console.log("Exercise 1 - Address Object:");

const address = {
    street: '1 Mount Saint Nicholas',
    city: 'Carrick On Suir',
    zipCode: 'E236HY'
}

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);

// ____________________________________

// Ex. 2 Factory and Constructor Functions
console.log("Exercise 2 - Factory and Constructor Functions:");


let addressFactoryFunction = createAddress('a', 'b', 'c');
let addressConstructor = new addressTwo('1', '2', '3');

console.log(addressFactoryFunction);

console.log(addressConstructor);

// Factory
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

// Constructor (Pascal Notation)
function addressTwo(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};

// ____________________________________

// Ex. 3 Object Equality
console.log("Exercise 3 - Object Equality:");

// This talks to addressTwo function from exercise 2

let compAddress1 = new addressTwo('a', 'b', 'c');
let compAddress2 = new addressTwo('a', 'b', 'c');

function areEqual(compAddress1, compAddress2){
    // are the values the same
    return compAddress1.street === compAddress2.street &&
        compAddress1.city === compAddress2.city &&
        compAddress1.zipCode === compAddress2.zipCode;
    // if same, return True
}

function areSame(compAddress1, compAddress2){
    // are they at the same location 
    // if not same location, return False
    return compAddress1 === compAddress2;
}

console.log(areEqual(compAddress1, compAddress2));
console.log(areSame(compAddress1, compAddress2));

// ____________________________________

// Ex. 3 Blog Post Object
console.log("Exercise 4 - Blog Post Object:");

/* 
    title
    body
    author
    views
    comments
        (author, body)
    isLive
*/

const blogPost = {
    title: "Does my bum look big in this?",
    body: "I think it does for the following reasons...",
    author: "Trevor Power",
    views: 2376,
    comments: [{
        author: "John Doe",
        body: "I think you look great!"
    }],
    isLive: true
}

console.log(blogPost);

// ____________________________________

// Ex. 4 Constructor Function
console.log("Exercise 4 - Constructor Function:");

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

console.log(Post("Hello", "I am Trev", "Trev"));

