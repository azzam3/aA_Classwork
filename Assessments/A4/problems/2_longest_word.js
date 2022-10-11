/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
  let words = sentence.split(' ') // sentence.split should have an array with the words ['app', 'academy', 'is', 'cool']
  let longest = words[0]
  
  for (let i = 0; i < words.length; i++){
    if (longest.length <= words[i].length){ // finds the bigger word
      longest = words[i] // reassignment
    }
  }
  return longest
}

console.log(longestWord('app academy is cool'))


// for this one let's see
// I want to do sentence.split to split the sentence into various words
// Once I split the sentence I want to find the longest word how?
// Loop through each word, word with the greatest .length

// function shortestWord(sentence) {
//   var words = sentence.split(' ');
//   var shortest = null;

//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];

//     if (shortest === null || word.length < shortest.length) {
//       shortest = word;
//     }
//   }

//   return shortest;
// }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
