/*******************************************************************************
Write a function `leastCommonMultiple(num1, num2)` that returns the
lowest number which is a multiple of both inputs.

Examples:

leastCommonMultiple(2, 3) => 6
leastCommonMultiple(6, 10) => 30
leastCommonMultiple(24, 26) => 312
*******************************************************************************/

function leastCommonMultiple(num1, num2) {
  // your code here...
  for (let i = 1; i <= Infinity; i++){
    if (i % num1 === 0 && i % num2 === 0){
      return i
    } 
  }
}
console.log(leastCommonMultiple(8, 24))

// math want the multiple of num1 and num 2 but the lowest common multiple
// num1 * num2 won't give me the lowest common multiple but will give me a multiple
// num1 % i === 0 but i don't want a remainder or a lower number than num 1
// what if i did i % num1 === 0 && i % num2 === 0

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = leastCommonMultiple;
