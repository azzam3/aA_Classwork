/***********************************************************************
Write a function oddWordsOut(sentence) that takes in a sentence string
and returns the sentence where words with an odd number of characters
are removed.

Examples:

oddWordsOut('go to the store and buy milk'); // => 'go to milk'
oddWordsOut('what is the answer'); // => 'what is answer'
***********************************************************************/

function oddWordsOut(sentence){
    let array = []
    let words = sentence.split(' ')
  //  console.log(words)
    for (let i = 0; i < words.length; i++){
        let word = words[i]
        if (word.length % 2 === 0 ){
            array.push(word);
        } 
   
    }
    return array.join(" ")
}

console.log(oddWordsOut('go to the store and buy milk'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = oddWordsOut;
