// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/



function saysWelcome(callback) {
  return console.log(`Hello ${callback}, welcome to the site.`)
}

const users = ["jacobcalv", " and bobbie010", " and zoe101"];

function username() {
  let luckyusers = "";
  for (i = 0; i < 1; i++){
    luckyusers = luckyusers + users[i];
  }
  return luckyusers;
}

saysWelcome(username());




function getLength(arr, cb) {
  return arr.length += cb;
}

let length = "";
console.log(getLength(items,length))



function last(arr, cb) {
  return arr[arr.length-1] += cb;
}

let lastString = "";
console.log(last(items,lastString))

//NUMBERS ARRAY/////////////////
const numbers = [15, 16, 123, 158];
////////////////////////////////

function sumNums(x, y, cb) {
 return cb = x + y;
}

let sum = "";
console.log(sumNums(numbers[1],numbers[2],sum));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb = x * y;
}

let multiply = "";
console.log(multiplyNums(numbers[1],numbers[2],multiply));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for(i= 0; i < list.length; i++){
    
    if (list[i] === item){
      return value= true;
    }
    else {return value= false};
  }
  return cb(value);
}
let results = "";

console.log(contains('Pencil', items, results))

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
