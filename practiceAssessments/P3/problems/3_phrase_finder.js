/*******************************************************************************
Write a function phraseFinder(words, phrase), that takes in an array of words and a
string representing a phrase. The function should return true if the phrase can be
formed by a pair of words from the array. The function should return false if the
phrase cannot be formed by any pair of words.

Examples:

phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello world') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello goodbye') => false
*******************************************************************************/

function phraseFinder(words, phrase){
  // your code here...
  for (let i = 0; i < words.length; i++){
    let word1 = words[i]
  } for (let j = 0; j < words.length; i++){
      let word2 = words[j]
      let p = word1 + " " + word2;
  }
  if p = phrase{
    return true
  }
}
// pairs of words, this tells me that i want a multidimentional array
// 

console.log(phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep'))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = phraseFinder;
