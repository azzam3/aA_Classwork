// Learning about Functions
// A Function is a way I can keep using code, as a programmer we don't want to repeat ourselves
// DRY- Don't Repeat Yourself
//
// console.log("Hello name");
// console.log("Hello World!"); 
//
// We start to get repetitive, especially if I want to write a hello to a lot of people
// Let's define a funciton
//
// function sayHello() {
    //indented (looks like it is automatic in VScode to indent) also keep note of the styling out code. Break a line right after openning the brace.
    // console.log("function start!")
    // console.log("Hello")
    // console.log("function end!")
// }
//Code runs undefined. I do not see an output. at this point we only defined the function. We want to use the function we need to call it.
// Function has two parts, define a function, where i design it and what I want it to do and we need to call it.
// Let's call it now:
// console.log("before the function call")
// sayHello();
// console.log("after the function call")
// I could call the function as many times as I want
// sayHello();
// sayHello();
// sayHello();
// sayHello();
//I want to make my function more dynamic. To do that i need to give it a parameter aka another variable (name)
//function sayHello(name) {
//    console.log("Hello " + name);
//} 
// Basically we are reusing this code
sayHello("Azzam")
sayHello("Jonathan")
sayHello("David")

function sayHello(name) {
    return "Hello  " + name;
}

var result = sayHello("Azzam")
console.log(result);

console.log(sayHello("Bootcamp Prep"));