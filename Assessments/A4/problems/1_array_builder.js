/*******************************************************************************
Write a function `arrayBuilder(count)` that takes in a count object and returns
an array filled with the appropriate numbers of elements. The order of
the elements in the array does not matter, but repeated elements should be
grouped.

Examples:

arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
arrayBuilder({}); //=> []
*******************************************************************************/

function arrayBuilder(count) {
  // your code here...
  let newArray = []
  for (let animals in count){

    for (let i = 0; i < count[animals]; i++){
        newArray.push(animals)
    }
  }
  return newArray
}




console.log(arrayBuilder({'cats': 2, 'dogs': 1}))

// count is my object
// animals is my key
// obj[key]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayBuilder;
