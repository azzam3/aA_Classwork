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