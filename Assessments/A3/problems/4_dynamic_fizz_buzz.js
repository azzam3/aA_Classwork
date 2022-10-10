/*******************************************************************************
Write a function that dynamicFizzBuzz(max, num1, num2) that returns an array
of numbers up to the max. Each number should be either divisible by num1 or num2,
BUT NOT BOTH.

Examples:

dynamicFizzBuzz(20, 5, 3) => [3, 5, 6, 9, 10, 12, 18]
dynamicFizzBuzz(20, 4, 6) => [4, 6, 8, 16, 18]
*******************************************************************************/

function dynamicFizzBuzz(max, num1, num2){
  // your code here...
  let array = []

  for (let i = 1; i < max; i++){
    let a = ((i % num1) === 0)
    let b = ((i % num2) === 0)
    let c = ((i % num2) !== 0)
    let d = ((i % num1) !== 0)
    
    if ((a && c) || (b && d)) {
      array.push(i)
    }
  }
  return array

}

console.log(dynamicFizzBuzz(20, 5, 3))
console.log(dynamicFizzBuzz(20, 4, 6))



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = dynamicFizzBuzz;
