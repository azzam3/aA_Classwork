/******************************************************************************
Write a function fizzBuzz(max) that returns an array of numbers under
the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.

Example:

fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18]
*******************************************************************************/

function fizzBuzz(max) {
  let array = []
  for (let i = 3; i < max; i += 1){
    if (((i % 3 === 0) || (i % 5 === 0)) && (i % 15 !== 0)) {
      array.push(i)
    }
  }
  return array

}

// for this one i know i need to use the modulator so i get a 0 remainder, i need to push each number into and array
// how do i exclude a number
// ! means not so 

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fizzBuzz;
