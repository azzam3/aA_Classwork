/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/

function reverseSentence(sentence) {
  // your code here...
  let words = sentence.split(" "); //Each word in the string returned array of each of the words
  let reverseWords = [];

  for (let i = 0; i < words.length; i += 1) {
   
    reverseWords.unshift(words[i]);
  }
  let revSentence = reverseWords.join(" ")
  return revSentence;
}
// console.log(reverseSentence("Go to the store"))



// senentence. split
// let i =  senetence

//convert sentence to an array
//Array and split
//
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;

