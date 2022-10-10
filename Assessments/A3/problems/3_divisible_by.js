/*******************************************************************************
Write a function divisibleByFivePairSum(array), that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of five.

Examples:

divisibleByFivePairSum([1, 5, 2, 0, 4]); // => [ [ 0, 4 ], [ 1, 3 ] ]
divisibleByFivePairSum([13, 22, 8, -3, 12]); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]
*******************************************************************************/
console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]

function divisibleByFivePairSum(array){
  // your code here...
  let pairs = []
  for (let i = 0; i < array.length; i++){
    let first = array[i]

    for (let j = i + 1 ; j < array.length; j++){
      let second = array[j]

      if ((first + second) % 5 === 0){
        pairs.push([i , j])

      }


    }
  } 
  return pairs
}
// this question is definately asking for pairs therefore I NEED a multidimentional loop. So two variables i and j
// 
// let firstIndex = array[i]
//
//
//
//
//
//
//

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = divisibleByFivePairSum;
