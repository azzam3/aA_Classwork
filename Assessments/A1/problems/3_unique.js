/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/

function unique(array) {
  // your code here...
  let noDuplicates = [];

  for (let i = 0; i < array.length; i += 1){
    let ele = array[i]

    if(noDuplicates.indexOf(ele) === -1){  // if the ele is Not already inside the noDupes array
      noDuplicates.push(ele);
    }
  }

  return noDuplicates

}
// array.indexOf
// for (let i = 0; i = array.length -1; i++)



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique;
