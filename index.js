//Metods for numbers


// an INTERGER is a whole number
const myNumber = 50;

//Number.isInteger()
//Checks if a value is an integer.
console.log(Number.isInteger(5)); // true

//Number.parseFloat()
// a number with a decimal point is called a float which references the "floating point"
const myFloat = 40.03


//toString()
// Converts the number to a string.
const myString = "50"

//toFixed()
//Formats a number with a fixed number of decimals.
let num = 5.6789;
console.log(num.toFixed(2)); // "5.68"

//toExponential()
//Returns a string representing the number in exponential notation.
let num = 1234;
console.log(num.toExponential(2)); // "1.23e+3"

//toPrecision()
//approximates a number to a specified length
let num = 5.6789;
console.log(num.toPrecision(3)); // "5.68"

//Number.isFinite()
//Checks if a value is a finite number.
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(Infinity)); // false


//valueOf()
//Returns the primitive value of the number object.
let num = new Number(10);
console.log(num.valueOf()); // 10

//Number.parseInt()
//Parses a string and returns an integer.
console.log(Number.parseInt("15.9")); // 15



//Methods for strings""

//toUpperCase()
//Converts all letters to uppercase.
"hello".toUpperCase(); // "HELLO"

//toLowerCase()
//Converts all letters to lowercase.
"HELLO".toLowerCase(); // "hello"

//charAt(index)
//Returns the character at a specific index.
"JavaScript".charAt(4); // "S"
 
//includes(substring)
//Checks if the string contains a substring.
"banana".includes("na"); // true

//indexOf(substring)
//Returns the index of the first match, or -1.
"hello".indexOf("e"); // 1

//slice(start, end)
//Extracts a section of the string.
"JavaScript".slice(0, 4); // "Java

//substring(start, end)
//Similar to slice, but doesn't accept negative indices.
"JavaScript".substring(0, 4); // "Java"

//split(separator)
//Splits the string into an array.
"a,b,c".split(","); // ["a", "b", "c"]

//trim()
//Removes whitespace from both ends.
"  hello  ".trim(); // "hello"


//replace(search, replacement)
//Replaces part of the string.
"I love cats".replace("cats", "dogs"); // "I love dogs"

//Array methods

//push()
//Adds one or more elements to the end.
arr.push(4);

//pop()
//Removes and returns the last element.
arr.pop();

//shift()
//Removes and returns the first element.
arr.shift();


//unshift()
//Adds one or more elements to the beginning.
arr.unshift(0);


//splice(start, deleteCount, ...items)
//Adds/removes elements at a specific index.
let arr = ["a", "b", "c", "d", "e"];
let result = arr.slice(1, 3);
console.log(result); // ["b", "c"]

//slice(start, end)
//Returns a shallow copy of part of the array.
let arr = ["🍎", "🍌", "🍇", "🍉", "🍓"];
let result = arr.slice(1, 3);
console.log(result); // ["🍌", "🍇"]

//concat()
//Combines arrays into one.
arr1.concat(arr2);
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]
console.log(arr1);     // [1, 2, 3]  (unchanged)


//join(separator)
//Joins elements into a string.
arr.join(", ");
let arr = ["apple", "banana", "cherry"];
let result = arr.join(", ");
console.log(result); // "apple, banana, cherry"


//indexOf(item)
//Returns the first index of an item, or -1.
arr.indexOf("apple");
let arr = ["apple", "banana", "cherry", "apple"];
console.log(arr.indexOf("apple")); // 0
console.log(arr.indexOf("banana")); // 1
console.log(arr.indexOf("grape"));  // -1 (not found)

//includes(item)
//Checks if an item exists in the array.
arr.includes("banana");
let arr = ["apple", "banana", "cherry"];
console.log(arr.includes("banana")); // true
console.log(arr.includes("grape"));  // false


//forEach(callback)
//Executes a function for each array item.
arr.forEach(item => console.log(item));
let arr = ["apple", "banana", "cherry"];
arr.forEach(item => console.log(item));
Output:
apple
banana
cherry


//map(callback)
//Returns a new array with transformed elements.
arr.map(item => item * 2);
let arr = [1, 2, 3];
let doubled = arr.map(item => item * 2);
console.log(doubled); // [2, 4, 6]
console.log(arr);     // [1, 2, 3]  (original array untouched)

//filter(callback)
//Returns a new array with items that pass the test.
arr.filter(item => item > 10);
let arr = [5, 12, 8, 20, 3];
let filtered = arr.filter(item => item > 10);
console.log(filtered); // [12, 20]
console.log(arr);      // [5, 12, 8, 20, 3] (original array unchanged)

//reduce(callback, initialValue)
//Reduces array to a single value.
arr.reduce((acc, curr) => acc + curr, 0);
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

//find(callback)
//Returns the first element that passes the test.
arr.find(item => item > 10);
let arr = [5, 12, 8, 130, 44];
let found = arr.find(item => item > 10);
console.log(found); // 12



//Method for Object


//Object.keys(obj)
//Returns an array of the object’s own enumerable property names (keys).
Object.keys({ a: 1, b: 2 }); // ["a", "b"]












