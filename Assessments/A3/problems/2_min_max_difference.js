/*******************************************************************************
Write a function `minMaxDifference(array)` that return the difference between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxDifference([1,2,3,4,5]) => 4
minMaxDifference([5,4,3,2,1]) => 4
minMaxDifference([4,2,5,1,-5]) => 10
*******************************************************************************/

function minMaxDifference(array){
  let min = array[0]
  let max = array[0]
  for (let i = 0; i < array.length; i++){
    let num = array[i]
    if (min > num) {
      min = num
    } 
    if (max < num) {
      max = num
    }
  }
  return max - min
}

console.log(minMaxDifference([5,4,3,2,1]))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxDifference;
