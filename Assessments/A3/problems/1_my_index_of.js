/*******************************************************************************
Write a function myIndexOf(array, ele) that takes an array and an element.
Return the index of the element in the array, or -1 if it doesn't exist. Assume
the `ele` will be a primitive data type (no arrays or objects).
DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION!

Examples:

myIndexOf([1,2,3,4,5], 5) => 4
myIndexOf(["a", "b", "c"], "a") => 0
myIndexOf(["a", "b", "c"], "d") => -1
*******************************************************************************/

function myIndexOf(array, ele){
  // your code here...
for (let i = 0; i < array.length; i++){
  if (array[i] === ele){
    return i
  }
}
return -1 
}
// took me 17 minutes to figure out this problem. I had trouble with the return statements, and get either the number itself and not the index. Took a lot of trial and error. especialy trying to get the undefined value to result in -1
console.log(myIndexOf([1,2,3,4,5], 5))
console.log(myIndexOf(["a", "b", "c"], "a"))
console.log(myIndexOf(["a", "b", "c"], "d") )
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = myIndexOf;
