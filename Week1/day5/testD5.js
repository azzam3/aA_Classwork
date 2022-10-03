let array = []
console.log(array)
console.log(array.push (42))
console.log(array.push (100))
console.log(array.push ("Hello"))
console.log(array)
console.log(array[2])

let names = ["tommy", "fred", 'moe']
console.log(names)
console.log(array[1])
console.log(names.length)
console.log(names.push("Daniel"))
console.log(names)
console.log(names.length)
console.log(names.length -1)
console.log(names[(names.length -1)])

console.log(names[2] = "David")
console.log(names)
console.log(names.slice(1,3)) // (inclusive, exclusive)

function printArray(arr){
    for (let i = 0; i < arr.length -``; i += 1){
        console.log(arr[i])
    }
}

let people = ["Kush", "Daniel", "Anthony"];
console.log(printArray(people));


function logEach(array) {
    for (let i = 0; i < array.length; i += 1) {
      console.log(i + ": " + array[i]);
    }
  }
  
logEach(["A", "B", "C", "D"])

// // logEach(array)
// function logEach(array) {
//     for (let i = 0; i < array.length; i += 1){
//       console.log( i + ": " + array[i])
//     }
//   } 

// logEach(["Anthony", "John", "Carson"]); // prints
// // 0: Anthony
// // 1: John
// // 2: Carson 

// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
// range(1,4) => [1,2,3,4]
// range(4,2) => []

// Write a function reverseSentence(sentence) that returns a string where all the
// words in the input sentence are reversed. Don't use Array#reverse.

// Examples:

// reverseSentence("Go to the store") => "store the to Go"
// reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
// *******************************************************************************/

function reverseSentence(sentence) {
  // your code here...
  let words = sentence.split(" "); //Each word in the string returned
  let reverseWords = [];

  for (let i = words.length -1; i >= 0; i--) {
    reverseWords.push(words[i]);
  }
  return reverseWords.join(" ")
}
console.log(reverseSentence("Go to the store"))

// senentence. split
// let i =  senetence

//convert sentence to an array
//Array and split
//
// let str = "sentence"
// let arr = [ ]
// for (i )
// }
// // I have index 0123 and i want to switch it to 3210
// // 
// str.split(" ") // all the places a space appear will give you all the words
// let word = str.split
