/* Description: Adds one or more elements to the end of an array and returns the new length of the array.  
Question 1:  Given an array of fruits, add "mango" to the end of the array.
*/

// Solution

let fruits = ["apple", "grapes", "pineapple", "coconut"];

fruits.push("mango");
console.log(fruits); //'apple', 'grapes','pineapple', 'coconut','mango'

/* Question 2
.concat()
Description: Used to merge two or more arrays. This method does not change the existing arrays but instead returns a new array.
Question: Concatenate two arrays, one with three different types of fruits and another with three types of vegetables. */

// Solution

let vegetables = ["carrot", "beet", "lettuce"];

let fruitVegie = fruits.concat(vegetables);
console.log(fruitVegie); //[  'apple', 'grapes','pineapple', 'coconut','mango','carrot', 'beet', 'lettuce']

/* . Spread Operator (...)
Description: Allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
Question: Copy an array of numbers into another array and add two more numbers to it using the spread operator. */

// Solution

let numbers = [1, 2, 3];

let newNumbers = [...numbers, 4, 5];
console.log(newNumbers);
[1, 2, 3, 4, 5];

/* .flat()
Description: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
Question: Flatten an array that contains three levels of nested arrays into a single-level array. */

// solution

let nestedArray = ["sunil", "adarsh", [1, 3, [4, 5, [, 7]]], ["chetan"]];

let flattenArray = nestedArray.flat(Infinity); //["sunil", "adarsh", 1, 3, 4, 5, 7, "chetan"]

console.log(flattenArray);

/* Array.isArray()
Description: Determines whether the passed value is an Array.
Question: Check if the given variable is an array.
 */

let isArr = ["i am array"];
let isArrTwo = "i am string";

console.log(Array.isArray(isArr)); //True
console.log(Array.isArray(isArrTwo)); //False

/*  Array.from()
Description: Creates a new, shallow-copied Array instance from an array-like or iterable object.
Question: Convert a string "hello" into an array of characters. */

// solution

let greetings = "hello";

let arrGreetings = Array.from(greetings);

console.log(arrGreetings); //  ['h', 'e', 'l', 'l', 'o']

/* Array.of()
Description: Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
Question: Create an array of numbers using Array.of() method. */

// solution

let someNumbers = Array.of(1, 2, 3);
console.log(someNumbers); // [1, 2, 3]

// Also we can do it this way.
let score_1 = 100;

let score_2 = 99;

let score_3 = 98;

let totalScore = Array.of(score_1, score_2, score_3);

console.log(totalScore); //[100, 99, 98]
