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
let num2 = 1234;
console.log(num2.toExponential(2)); // "1.23e+3"

//toPrecision()
//approximates a number to a specified length
let num3 = 5.6789;
console.log(num3.toPrecision(3)); // "5.68"

//Number.isFinite()
//Checks if a value is a finite number.
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(Infinity)); // false


//valueOf()
//Returns the primitive value of the number object.
let num4 = new Number(10);
console.log(num4.valueOf()); // 10

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
let arrSlice = ["a", "b", "c", "d", "e"];
let resultArrSlice = arrSlice.slice(1, 3);
console.log(resultArrSlice); // ["b", "c"]

//slice(start, end)
//Returns a shallow copy of part of the array.
let arrWithEmoji = ["🍎", "🍌", "🍇", "🍉", "🍓"];
let resultWithEmoji = arr.slice(1, 3);
console.log(resultWithEmoji); // ["🍌", "🍇"]

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
let arrJoin = ["apple", "banana", "cherry"];
let resultArrJoin = arr.join(", ");
console.log(resultArrJoin); // "apple, banana, cherry"


//indexOf(item)
//Returns the first index of an item, or -1.
arr.indexOf("apple");
let arrIndex = ["apple", "banana", "cherry", "apple"];
console.log(arrIndex.indexOf("apple")); // 0
console.log(arrIndex.indexOf("banana")); // 1
console.log(arrIndex.indexOf("grape"));  // -1 (not found)

//includes(item)
//Checks if an item exists in the array.
arr.includes("banana");
let arrInclude = ["apple", "banana", "cherry"];
console.log(arrInclude.includes("banana")); // true
console.log(arrInclude.includes("grape"));  // false


//forEach(callback)
//Executes a function for each array item.
arr.forEach(item => console.log(item));
let arrLoop = ["apple", "banana", "cherry"];
arrLoop.forEach(item => console.log(item));
Output:
// apple
// banana
// cherry


//map(callback)
//Returns a new array with transformed elements.
arr.map(item => item * 2);
let arrMap = [1, 2, 3];
let doubled = arrMap.map(item => item * 2);
console.log(doubled); // [2, 4, 6]
console.log(arr);     // [1, 2, 3]  (original array untouched)

//filter(callback)
//Returns a new array with items that pass the test.
arr.filter(item => item > 10);
let arrFilter = [5, 12, 8, 20, 3];
let filtered = arrFilter.filter(item => item > 10);
console.log(filtered); // [12, 20]
console.log(arr);      // [5, 12, 8, 20, 3] (original array unchanged)

//reduce(callback, initialValue)
//Reduces array to a single value.
arr.reduce((acc, curr) => acc + curr, 0);
let arrReduce = [1, 2, 3, 4];
let sumOfReduce = arrReduce.reduce((acc, curr) => acc + curr, 0);
console.log(sumOfReduce); // 10
let arrReduce2 = [1, 2, 3, 4];
let sumOfReduce2 = arrReduce2.reduce((acc, curr) => acc + curr, 0);
console.log(sumOfReduce2); // 10

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

//Object.values(obj)
//Returns an array of the object’s own enumerable property values.
Object.values({ a: 1, b: 2 }); // [1, 2]

//Object.entries(obj)
//Returns an array of the object’s own key-value pairs as arrays.
Object.entries({ a: 1, b: 2 }); // [["a",1], ["b",2]]
const objEntries = { a: 1, b: 2 };
const entries = Object.entries(objEntries);
console.log(entries); // [["a", 1], ["b", 2]]

//Object.assign(target, ...sources)
//Copies properties from source objects to a target object
Object.assign({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }

//Object.freeze(obj)
//Prevents modification of an object (makes it immutable).
const objFreeze = Object.freeze({ a: 1 });
// obj.a = 2; // fails silently or throws error in strict mode


//Object.seal(obj)
//Prevents adding or removing properties but allows changing existing ones.
const obj = Object.seal({ a: 1 });
// obj.b = 2; // ignored or error
// obj.a = 3; // works


//Object.hasOwn(obj, prop) (modern alternative to obj.hasOwnProperty)
//Checks if object has own property prop.
Object.hasOwn({ a: 1 }, "a"); // true

//Object.getPrototypeOf(obj)
//Returns the prototype of the specified object.
Object.getPrototypeOf({}); // usually Object.prototype

//Object.is(obj1, obj2)
//Determines if two values are the same value (like === but better for NaN and -0).
Object.is(NaN, NaN); // true
Object.is(0, -0);    // false

//Object.defineProperty(obj, prop, descriptor)
//Defines a new property or modifies an existing one with detailed control.
Object.defineProperty(obj, 'a', {
  value: 42,
  writable: false,
  enumerable: true,
  configurable: true
});