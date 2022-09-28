// Coding Problems
//isOdd

// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isOdd(2);    // => false
// isOdd(5);    // => true
// isOdd(-17);  // => true

function isOdd(num) {
    return num % 2 === 1;
}
console.log(isOdd(2));    // => false
console.log(isOdd(5));    // => true
console.log(isOdd(-17));  // => true // this results in false. why? -17 % 2 is = -1. As long as the remainder is not zero it is an odd number

function isOdd2(num) {
    return num % 2 !== 0;
}
console.log(isOdd2(2));    // => false
console.log(isOdd2(5));    // => true
console.log(isOdd2(-17));  // => true 

function isOdd3(num) {
    return num % 2 === 1 || num % 2 === -1;
}
console.log(isOdd3(2));    // => false
console.log(isOdd3(5));    // => true
console.log(isOdd3(-17));  // => true

function isOdd4(num) {
    if (num % 2 !== 0) {
        return true
        } else {
        return false
    }
}
console.log(isOdd4(2));    // => false
console.log(isOdd4(5));    // => true
console.log(isOdd4(-17));  // => true this results in false. why? -17 % 2 is = -1. As long as the remainder is not zero it is an odd number

// Write a function `plusFive` that takes in a number as an argument and returns
// the sum of that number and 5.
//
// Examples:
// plusFive(10);  // => 15
// plusFive(2);   // => 7
// plusFive(-8);  // => -3
//

function plusFive(num) {
    return (num + 5)
  }
  console.log(plusFive(5))
  console.log(plusFive(10))
  console.log(plusFive(2))
  console.log(plusFive(-8))

  function plusFive2(num) {
    console.log(num +5)
  }
  plusFive2(12)
  // The only way that we see something is if we console.log. That's why my code wasn't working before. I typed isOdd(x) instead of console.log(isOdd(x)). If the console.log is inside the function or outside of it, as long as it is there we can see something. But there is a difference between using return and console.log, I just don't understand it yet

 

// Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
//
// Examples:
// threeOrSeven(3);   // => true
// threeOrSeven(42);  // => true
// threeOrSeven(8);   // => false

function threeOrSeven(num) {
    return num % 3 === 0 || num % 7 === 0;
}
// num % 3 === 0 || num % 7 === 0

console.log(threeOrSeven(3));   // => true
console.log(threeOrSeven(42));  // => true
console.log(threeOrSeven(8));   // => false

function threeOrSeven2(num) {
    if (num % 3 === 0){
        return true;
    } else if (num % 7 === 0){
        return true;
    } else{
        return false;
    }
}
// return num % 3 === 0 || num % 7 === 0;

console.log(threeOrSeven2(3));   // => true
console.log(threeOrSeven2(42));  // => true
console.log(threeOrSeven2(8));   // => false

// Write a function `hello` that takes in a string and prints out "Hello, " followed
// by the string. HINT: this function doesn't need to return anything, it should
// just print using console.log
//
// Examples:
// hello("child");    // prints "Hello, child"
// hello("Anthony");  // prints "Hello, Anthony"
//
function hello(str) {
    // your code here...
    return ("Hello, " + str)
  }
  console.log(hello("child"));    // prints "Hello, child"
  console.log(hello("Anthony"));  // prints "Hello, Anthony"



// Write a function `yell` that takes in a string and returns a "yelled" version
// of that string.
//
// Examples:
// yell("I want to go to the store"); // => "I WANT TO GO TO THE STORE!!!"
// yell("Time to program"); // => "TIME TO PROGRAM!!!"
//
function yell(str) {
    let ALLCAPS = str.toUpperCase() + "!!!";
    return ALLCAPS;
  }
// Had trouble writing this code. I didn't thing to use the variable (let)

  console.log(yell("help"))
  console.log(yell("I want to go to the store"))



  // Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:
// whisper("Hey Anthony"); // => "...hey anthony..."
// whisper("YEA! that was fun"); // => "...yea! that was fun..."
function whisper(string) {
    // your code here...
    let quiet ="..." + string.toLowerCase() +"..."
    return quiet
  }

  console.log(whisper("Hey Anthony"));

  // Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isSubstring("The cat went to the store", "he cat went"); // => true
// isSubstring("Time to program", "time"); // => true
// isSubstring("Jump for joy", "joys"); // => false
//
function isSubstring(searchString, subString) {
    if(searchString.indexOf(substring) > -1){
      return true;
    } else {
      return false;
    }
  }
  console.log(isSubstring("The cat went to the store", "he cat went")); // => true)