// Arrays
// logeach

const arrayRange = require("../p1solution/problems/5_array_range")

// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson

// function logEach(array) {
//     for (let i = 0; i < array.length; i += 1)
//     return(i + ":") + array(i));
// }
// console.log(logEach(["Anthony", "John", "Carson"]);)

// // logEach(array) key
// function logEach(array) {
//     for (let i = 0; i < array.length; i += 1){
//       console.log( i + ": " + array[i])
//     }
//   } 

// logEach(["Anthony", "John", "Carson"]); // prints
// // 0: Anthony
// // 1: John
// // 2: Carson 


// range

// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
// range(1,4) => [1,2,3,4]
// range(4,2) => []

function range (start, end){
    let array =[]
    for (let i = start; i <= end; i+= 1){
        array.push(i);
    }
    return array
}
console.log(range2(1,4))

function range2 (start, end){
    let array = []
    for (let i = start; i <= end; i++){
        array.push(i)
    }
    return array;
}

function range3(start, end){
    let array = []
    for (let i = start; i <= end; i+= 1){
        array.push(i)
    }
    return array;
}

console.log(range3(1,3))

// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
//
//
// Examples:
//
// sumArray([5, 6, 4]); // => 15
// sumArray([7, 3, 9, 11]); // => 30

function sumArray(array) {
    let sum = 0;
  
    for (let i = 0; i < array.length; i += 1) {
      let num = array[i];
      sum += num;
    }
  
    return sum;
  }
  
  

console.log(sumArray([5, 6, 4]))