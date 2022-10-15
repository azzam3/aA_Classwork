/*******************************************************************************
Write a function sum2Darray(array) that takes in a 2-Dimensional array of numbers.
The function should return the total sum of all numbers in the 2D array.

Examples:

var arr1 = [
  [1,2,3],
  [4,5],
  [6],
];
sum2DArray(arr1); // => 21

var arr2 = [
  [-10, 2, 3],
  [1],
  [10, -5],
  [2]
];
sum2DArray(arr2); // => 3

here I want to use 2 for loops, one to access the first array the second the subarray
*******************************************************************************/

function sum2DArray(array) {
  // your code here...
  let sum = 0
  for (i = 0; i < array.length; i++){
    subArray = array[i]
    for (j = 0; j < subArray.length; j++){
      sum = sum + subArray[j]
    }

  }
  return sum
}

var arr2 = [
  [-10, 2, 3],
  [1],
  [10, -5],
  [2]
];
console.log(sum2DArray(arr2)); // => 3

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sum2DArray;
