console.log("numbers")


//  The basic arithmetric operators
//     + (addition)
//     - (subtraction)
//     * (multiplication)
//     / (division)
//     % (modulo)
console.log(2 + 3);
console.log(5 * 3 + 2)
console.log(10 % 3)

// complete order of math operations in JS is parentheses, multiplication-division-modulo, addition-subtraction.

console.log("booleans")

// The Boolean Data Type
// The Boolean data type is perhaps the simplest type since there are only two possible values, true and false
// Logical Operators

// ! (not)
// && (and)
// || (or)

// JavaScript will evaluate ! then && then ||.

console.log(true || true && false);    // => true
console.log(false && !(false || true)); // => false

console.log("variables")
// Variables are used to store information to be referenced and manipulated in a computer program
// also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by programmers
// It is helpful to think of variables as containers that hold information. Their sole purpose is to label and store data in computer memory

// We can give the variable any name that we wish and assign it a value. Once we initialize a variable, the variable will evaluate to the value assigned:

let bootcamp = "App Academy";
console.log(bootcamp); // 'App Academy'

let birthYear = 2012;
console.log(birthYear); // 2012

// Two Steps: 1. declaration with let 2. assignment with = 
// Once a variable is declared, it will contain undefined as its value. Undefined is a common default value in Javascript
// Once a variable has been declared, we can assign it a value using single-equals =

// Manipulating Variables
// To change the value of a variable, we need to reassign it to a new value with = :
let num = 42
console.log(num + 8); // 50
console.log(num); // 42

num = num +10;
console.log(num); // 52
// In the code above, num + 8 will evaluate to 50, but it will not change the num variable to 50. If we want to change the num variable, we must reassign to it.

let number = 0;
number += 10; // number = number + 10
number -= 2; // number = number -2
console.log(number)
//We also have other shorthand to add or subtract exactly 1 from a variable, the increment (++) and decrement (--) operators:

// Now that we have the ability to perform arithmetic with variables, let's take a look at a common programming mistake, getting a result of NaN (not a number):
let num2;
console.log(num2 + 3); // NaN
// The above code gives NaN because the unassigned num variable contains undefined; adding 3 to undefined results in NaN. In general, any nonsensical arithmetic will result in NaN. Math operations involving undefined is perhaps the most common mistake:

let location = "New York"; // variable location now has the value as the string New York
//declaration = assignment
console.log(location);
console.log(location[1]) // indexing a string 01234
// in variables you can store any value: string, numbers, booleans, whatever you please

let location2;
location2 = "SF";
console.log(location2)

let age = 1;

console.log(age + 5);
console.log(age) // does not change the age variable
age = age + 5 // ressignment of age to 6 // also equivalant age += 5;
console.log(age)

// Need to assign age again (reassingment to change the age variable
// I only need to use the let declaration once. don't need to use let again
// ++ the increment operator adds 1

//Variable quiz
//Initialization is the process of both declaring and assigning a variable on the same line
// let declaration = assignment is initialization

console.log("The string data type")
// Strings are what we'll use to represent textual data. This means that strings are useful in representing things like messages, names etc. A string is a sequence of characters
// .length to obtain a count of the number of characters that comprtise a String
// Index a string to refer to single characters 
// Concatenate strings together
// Strings are wrapped in quotation marks and we are free to mix any characters into a string. this includes spaces, numerics, punctuation and other symples
// If we want to usew a single qupte as a character of a string, we simply need to enclose the string in double quotes and vice versa

//Since a single string can contain any number of characters, we may find it useful to count the number of characters in a string using .length

console.log('ramen'.length); // 5

// Indexing a string
// Strings consist of multiple characters. these characters are numbered by indicies starting at 0
// So in the string 'bootcamp', 'b' is aaat index 0
// We can look at a particular characters of a string by using [ and specifying the index

console.log("bootcamp".length)
console.log("bootcamp"[2])
// that an index should always be a number

console.log("cat".length); // => 3
console.log("cat"[3]); // => undefined
console.log("cat"[2]); // => 't'
// indices begin at 0 not 1

//Using indexOf
// We can callculate the index of a given character within a string by using indexOf
console.log("bagel".indexOf("b")); // => 0
console.log("bagel".indexOf("a")); // => 1
console.log("bagel".indexOf("l")); // => 4
console.log("bagel".indexOf("z")); // => -1
// If we attempt to search for a character that is not present in a string, indexOf will return -1
// If we search for a character that appears more than once in a string, indexOf will return the index of the first occurance of that character.
// We can also use indexOf to search for a substring of characters. Under this circumstance, indexOf will return the index where the substring begins in the main string:
console.log("door hinge".indexOf("oor")); // => 1
console.log("door hinge".indexOf("hi")); // => 5
console.log("door hinge".indexOf("hint")); // => -1

// Concatenation
// jsut a fancy word for joining strings together into a single string. To concatenate strings, we use the + operator

console.log("goodbye" + " " + "moon"); // => 'goodbye moon'

console.log("potatoz"["potatoz".length - 1])
// get the last letter of the word by indexing the word - 1. 
// I can solve for a number within the indexes 

console.log("functions")
// FUNCTIONS

// A function is a procedure of code that will run when called
// When we write a function, we can use it as many times as we please
// We only write a function once
// Writing a function is known as a function declaration or function definition

// For example, imagine we want to use code to find the average of two gicen numbers. Tis means we'll write code that takes two numbers, adds them and then divides their sum by two
console.log ((5 + 5)/2) // Writing out the same code again and again is tedious. Instead you can define or declare a reusavle function

// A function declaration is when a function is defined and saved so that we can use it or reuse it later.
//When we use a declared function, we are calling the function/ AKA invokin a function
//a function call is known as a function invocation

// A FUNCTION DEFINITION CONSISTS OF THE FUNCTION KEYWORD FOLLOWED BY THREE THINGS
// 1. THE NAME OF THE FUNCTION
// 2. A LIST OF PARAMETERS TO THE FUNCTION, ENCLOSED IN PARENTHESES ()
// 3. THE CODE TO BE RUN WHEN THIS FUNCTION IS RUN, ENCLOSED IN CURLY BRACES

function average (number1, number2) {
    return ((number1 + number2)/2);
}


//First thing to notice for the above average function is that we didn't use any real numbers. You always want to write functions to accept as wide a range of data as possible. Utilizing the incomin paramaters to a function is key to keeping functions flexxible and reusuable
// In the case of the average function, we want to use it to calculate the average of any two numbers. The parameters for the average function are number1 and number2. In other words, the average function expects to be given two numbers, that will be referenced by the variable names, num1 and num2, in the code to be run.

console.log(average(10, 30))
// When we specify what data to use for a function call, we refer to that process as passing arguments to the function.

//When JavaScrip sees a function definition, JavaScript will not evaluate the code inside the definition. it will execute the code inside the definition only when the function is invoked

// Every functions in JavaScript returns undefined inless otherwise specified

function sayNumber(number) {
    console.log(number);
  }
  
  console.log(sayNumber(1));  // Prints 1 and returns undefined
//the function ends without encounterin a return statement. since nothing was specifically returned when the function returned the default value for a function which is undefined
  function sayNumber2(number3) {
    console.log(number3);
    return true;
  }
  
  console.log(sayNumber2(1));   // Prints 1 and returns true
  // When we hit a return statement, we immediately exit the function, jump back to where we called the function, and evaluate the function call to the value it returned
  //Every function call evaluates to its return value
  //Evert function in Javascript returns undefiend unless a return is specified
  //Once a return statement is encounted, the function will immediaely stop and return the calue, ignoring any code bellow the return statement

  console.log("Parameters vs Arguements")
  // Parameters are comma separated variables specified as part of a function's declaration
  // Arguements are values passed to the function when it is invoked

  function add(firstParameter, secondParameter) {
    console.log(firstParameter + secondParameter);
  }
  
  // the add function declares two parameters
  // > add(1, 2); //=> 3
  // In the above example we declared our parameters when we declared our function. Now arguments work slightly differently - when the function is invoked we are passing in arguments. So in the above example when we invoked add(1, 2) the (1,2) were the arguments being passed in. So when a function is invoked the value of the passed in arguments is assigned to the declared parameters.

  function sayNumber4(number3) {
    return (number3)
  }
  console.log(sayNumber4(24))

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

  // using return instead of console inside the function it is a better habit and you are reusing the function.

  // Define the function:
  function goodbye(name) {
    // your code here...
    return ("Bye" + " " + name + ".")
  }
  // Invoke the function
  console.log(goodbye("Daniel")); // => "Bye Daniel."
  console.log(goodbye("Mark")); // => "Bye Mark."
  console.log(goodbye("Beyonce")); // => "Bye Beyonce."

  function sayGoodbye(name) {
    let msg = "Goodbye, " + name + ". See you later!";
    return msg;
  }
  
  console.log(sayGoodbye("Bob"));

  function plusFive(num) {
    // your code here...
    let add5 = num + 5;
    console.log(add5)
    return add5
  }
  plusFive(10)
//   console.log(plusFive(10));  // => 15
//   console.log(plusFive(2));   // => 7
//   console.log(plusFive(-8));  // => -3

  function isCool(string) {
    let coolSentence = string + " is cool!"
    console.log(coolSentence)
    return coolSentence
  }
  isCool("Music")
  isCool("JavaScript")
  isCool("The world")


  function whisper(str) {
    let whisperedStr = "..." + str.toLowerCase() + "...";
    return whisperedStr;
  }
  
  console.log(whisper("Hey Buddy")); // => "...hey buddy..."
  console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."

  function echo(str) {
    let firstEcho = str.toUpperCase();
    let lastEcho = str.toLowerCase();
  
    return firstEcho + " ... " + str + " ... " + lastEcho;
  }
  
  console.log(echo("Mom!")); // => prints "MOM! ... Mom! ... mom!"
  console.log(echo("hey")); // => prints "HEY ... hey ... hey"
  console.log(echo("JUMp")); // => prints "JUMP ... JUMp ... jump"

  //   Conditionals
//   Start to write functions that can do things conditionally by utilizing control flow
//   control flow is the order in which instructions are executted within a program. One modifies control flow using control structures, expression that alter the control flow based on given parameters
//   conditional statements are used to perform different actons based on different conditions
//  conditional state ments can only hace one if and one else statment
// if statement
//  if statment has two parts
//  1. the test expression - the code that immediately follows the if which goes in parentheses
//  2.then exprestion this code blongs in curly braces after the if expresion, it will only run when if expression is truthy
if (3 === 3) {
    //this is the then expression
    //this code will only rune if the above statement is true
    console.log ("this is a three");
}
// the if statment abovve allows you to specify what shoould happen if your particular expression evaluate to tru. you can chain addition teste exptesion onto this if statement by using a else if statment

// function mathFun(){
//     let x = 2 + 3;
//     if (x === 3) {
//         console.log("we have a 3");
//     } else if ( x === 4){
//         console.log("we have a four")
//     } else if (x === 5){ 
//         console.log("we have a 5")
//     }
// };

// mathFun();

// The else if and if statements do not, however, provide the option to specify something else that should happen in the event that all of the above expressions evaluate to be false. The if...else statement reads just like English. The JS interpreter will execute the else statement if all the above conditions given are false. See below for an example:



function mathFun() {
    let x = 19;
    if (x === 3) {
      console.log("we have a 3");
    } else if (x === 4) {
      console.log("we have a 4");
    } else {
      console.log("I will return if everything above me is falsey!");
    }
  };
  mathFun(); // => "I will return if everything above me is falsey!"

  // You can chain an arbitrary number of else if statements but there can only be one if statement and one optional else statement. The if introduces the control structure and the else acts as a fail safe to catch everything that didn't meet the above conditions.
  // Only one then expression is ever executed in an if, if...else, or if...else statement. If one of the test expressions is truthy, then the result of its then expression is the result of the entire conditional statement:
  // Additionally, you can nest conditional statements within each other, but it will quickly become difficult to read and is discouraged:

  // A general rule of thumb is that if you are working with a condition that is mutually exclusive, meaning if one condition is true the other condition must be false, then you should use an if/else statement. You can also think of mutually exclusivity like a coin flip - it can be either heads or tails but not both.

//   function isOdd(num) {
//     // your code here!
//     if (num % 2 !== 0) {
//         return true
//     } else {
//       return false
      
//     }
//   }


// //   function isOdd(number) {
// //     return (number % 2 !== 0);
// //   }
  

  
//   console.log(isOdd(2)); // => false
//   console.log(isOdd(5)); // => true
//   console.log(isOdd(-17)); // => true

  function isSubstring (searchString, subString ){
    let lowerSearch = searchString.toLowerCase()
    let lowerSub = subString.toLowerCase()

    return lowerSearch.indexOf(subString) === 1
  }
  //Function ture if substring is part of search string upper or lowercase
  // false otherwise
  // if and else statements have to be used
  // convert string to.lowercase() then evaluate
  // but how do i seach if sub string is inside search string
  // indexof or length might help
  // searchString.indexOf(substring)

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false

// Basic Loops
// Reminder control flow is the order in which instructions are executed within a program
// One modifies control flow using control structures, expressions that alter the control flow based on given parameters. 
// Conditionals, Loops and Arrays
// two most fundamental types of loops: for loop and while loop
// index vvariables start at zero
// What is an iteration

// While there are still dirty dogs you still have a job to do. That is your condition - you will stop giving baths once all 6 dogs are clean. So after one bath you will have 1 clean dog and 5 dirty dogs. You've incremented (increased by one) your number of clean dogs. After each bath you check your condition again until you have 6 clean dogs - that's when you know you can stop!
// the idea of looping - setting a condition, executing an action, doing something to make sure our condition will be met eventually, and rechecking our condition before executing our next action.

// while llop will execute a block of code aslong as a specified condition is true

// let index = 0;

// // this is the condition that will be checked every time this loop is run
// while (index < 10) {
//   console.log("The number is " + index);
//   // this is common shorthand for index = index + 1
//   index++;
// }

//infinite loop
// let index = 0;

// // this is an infinite loop because our condition will never be false
// while (index < 10) {
//   console.log("The number is " + index);
//   // if we do not increase the index then our condition is always true
//   // meaning this will run forever!
// }

// A for loop can be broken down into three sections:

//     The initial expression which will be run once at the beginning of the loop.
//     The condition which is checked every time the loop is run. If this condition is true the loop will run again. If this condition is false the loop will end.
//     The loopEnd expression which will be run at the end of the loop before checking the condition again.

//     for (<initial expression>;<condition>;<loopEnd expression>)

for (let index = 0; index < 10; index += 1) {
    // the code inside this block will run 10 times
  }

  // these two do the exact same thing!
function forLoopDoubler (array) {
    // it is convention to shorten index to just i in most cases
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i] * 2;
    }
    return array;
  };
  
  function whileLoopDoubler (array) {
    let i = 0;
    while (i < array.length) {
      array[i] = array[i] * 2;
      i++;
    }
    return array;
  };
  
  forLoopDoubler([1, 2, 3]); // => [2,4,6]
  whileLoopDoubler([1, 2, 3]); //=> [2,4,6]


  let i = 0
  while (i < 5) {
    console.log ("hello world")
    i ++
  }


function logBetween (lowNum, highNum){
    let i = lowNum;
    while (i <= highNum) {
        console.log(i);
        i++
    }
}
logBetween(4, 6);

function printFives(max){
  for (let i = 0; i < max; i= i + 5){
      console.log(i)
  }
}

// Example:

printFives(20) // prints out:
// 0
// 5
// 10
// 15

function fizzBuzz(max){
  for (let i = 0; i < max; i++){
      if (i % 3 === 0 || i % 5 === 0){
          console.log(i)
      }
  }
}
// Examples:

fizzBuzz(20); // prints out:
// 3
// 5
// 6
// 9
// 10
// 12
// 18

// Arrays

// An array in javascript is used to store multiple values within a single structure, much like creating a list, arrays can hold strings, integers and even other arrays. they are incredibly usefulfor holding a bunch of different information all in one place
// Goals
// Write arrays using correct syntax
// Identify that an array is an ordered list of values defined by using square brackets ([ ])
// Use .length to obtain a count of the numbers of elements that comprise an array
// Index an array to refer to a single value
// Concatenate multiple arrays together
// Add and remove items from an array


// Arrays are always wrapped in square brackets ([ ]) and store their comma-separated values in sequential order. Arrays in JavaScript are also very flexible: you can put elements into an array, replace elements in an array, and remove elements from the array.

// let alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// instead of 

// let a = "a";
// let b = "b";
// let c = "c";
// let d = "d";
// // and so on for way too long...

//Calculating the length of an array

console.log([4, 7, 9].length); // => 3
console.log([1, 2].length); // => 2
console.log([].length); // => 0

//Properly indexing an array
// arrays consist of multiple values all stored in sequencial order. numbered by indicides starting a zero

let numbersAndLetters = ["b", "z", 17, "cat"];
console.log(numbersAndLetters[0]); // => "b"
console.log(numbersAndLetters[1]); // => "z"
console.log(numbersAndLetters[2]); // => 17
console.log(numbersAndLetters[3]); // => "cat"

console.log(["a", "b", 'c'][1]); // b
//You can access a value in an array directly by providing an index for the value we'd like to access in that array (array[index])

// You can also calculate the index of a given value within an array by using indexOf:
console.log([1, 3, 5, "apple", "jet"].indexOf(3)); // => 1
console.log([1, 3, 5, "apple", "jet"].indexOf(5)); // => 2
console.log([1, 3, 5, "apple", "jet"].indexOf("jet")); // => 4

// this won't be found in the array
console.log([1, 3, 5, "apple", "jet"].indexOf("potato")); // => -1

//Concatenation with arrays
// The + operator only exists for numbers and strings. If you try to use the + on an array it will try to help you out by converting your arrays into strings.
console.log([1, 2, 3] + [4, 5, 6]); // => 1,2,34,5,6 this is actually a string
// JavaScript was just trying to help! However that is probably not what you meant to do. Good thing JavaScript has a separate method for putting two arrays together. To concatenate arrays, you can use the aptly named .concat method

console.log([1, 2, 3].concat([ 4, 5, 6,])); // => [1, 2, 3, 4, 5, 6]

// manipulating arrays array.push(item) and array.pop()
//Array.push(item) allows you to add items to the back of an array, and Array.pop() removes the last item from the array. For example:

let arr = [1, 2, 3];
arr.push(4);
arr.push(5);
console.log(arr);   // => [1, 2, 3, 4, 5]
arr.pop();
console.log(arr);   // => [1, 2, 3, 4]

// if i want to double something i would multiply it by 2
// how do i take out an individil number from and array
// .length and .push .pop [] to get the index of a particular number

function doubler(array){
  for (let i = 0; i < array.length; i++){
    array[i] = array [i] * 2;
  }
  return array;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]

// logEach(array)
  function logEach(array) {
    for (let i = 0; i < array.length; i += 1){
      console.log( i + ": " + array[i])
    }
  } 

logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson 

function tripler(array) {
  for (let i = 0; i < array.length; i++){
    array[i] = array [i] * 3
  }
  return array
}
console.log(tripler([1,2,3]))

// ** oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
// ** oddRange(6); // => [ 1, 3, 5 ]
// */
