
// Brancges if... else if...else are exclusive
// else acts a default case when none of the preceding conditions are found to be true
// We can also have multiple if statements in a row. Each condition will be checked
// compare that with if ... else if
// A conditional uses an expression that evaluates to either true or false. We can use conditionals to create branching logic within our program and solve more complex provles. Conditionals are useful because out code can be dynamic. Conditionals in programming will always ask a true or false question. If the answer is true, we run some code
// Expression Evaluation Round 2 part 5
var age = 31;

if (age > 30) {
    console.log('older than 30');
} else {
    console.log('younger than 30')
}
// older than 30

// Expression Evaluation Round 2 part 6
var str = 'pasta'
if (str.length >10) {
    console.log('long string');
} else {
    console.log('short string');
}
if (str[0] === 'p') {
    console.log('starts with p');
}
// Expression Evaluation Round 2 part 7
var num = 20;
if (num % 3 === 0){
    console.log('divisible by 3');
} else if (num % 5 === 0) {
    console.log('dibisible by 5')
}
// Expression Evaluation Round 2 part 8
// 8
var num = 15; // try different numbers here

if (num % 3 === 0) {
  console.log('divisible by 3');
}
if (num % 5 === 0) {
  console.log('divisible by 5');
}
// Expression Evaluation Round 2 part 9
// 9
var str = 'Azzam'; // try different strings here

if (str[0] === str[0].toUpperCase()) {
  console.log('starts with a capital!');
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}
// Expression Evaluation Round 2 part 10

var num2 = -55
if (num2 > 0) {
    console.log('positive');
} else if (num2 < 0) {
    console.log('negative');
} else {
    console.log(0);
}
if (num2 % 2 ===0) {
    console.log('even');
} else {
    console.log('odd');
}