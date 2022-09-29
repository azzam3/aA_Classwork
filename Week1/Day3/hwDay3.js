// HomeWork Azzam Hamid

// logBetween

// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.
//
// Examples:
//
// logBetween(-1, 2); // prints
// -1
// 0
// 1
// 2
//
// logBetween(14, 6); // prints nothing
//
// logBetween(4,6); // prints
// 4
// 5
// 6

function logBetween(lowNum, highNum) {
    for (let i = lowNum; i <= highNum; i += 1){
        console.log(i)
    }
}
console.log(logBetween(-1, 2))

// Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals. See the following examples.
//
// Examples:
//
// logBetweenStepper(5, 9, 1) // prints
// 5
// 6
// 7
// 8
// 9
//
// logBetweenStepper(-10, 15, 5) // prints
// -10
// -5
// 0
// 5
// 10
// 15

function logBetweenStepper(min, max, step){
    for (let i = min; i <= max; i += step){
        console.log(i)
    }
}

logBetweenStepper(-10, 15, 5)

// Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
//
// Try to solve this in two ways, using a conditional (if) and without using a
// conditional
//
// Example:
//
// printFives(20) // prints
// 0
// 5
// 10
// 15

function printFives(max){
    for (let i = 0; i <= max; i += 5){
        console.log(i)
    }
}
printFives(100)

// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
//
// Examples
//
// printReverse(13, 18) // prints
// 17
// 16
// 15
// 14
//
// printReverse(90, 94) // prints
// 93
// 92
// 91

function printReverse (min, max){
    for (let i = max - 1; i > min; i -= 1){
        console.log(i)
    }
}
printReverse(90, 94)

// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.
//
// Examples:
//
// sumNums(4); // => 10
// sumNums(10); // => 55
// sumNums(365); // => 66795

function sumNums (max){
    let total = 0;
    for (let i = 0; i <= max; i += 1){
        total += i // total = total + i
    }
    return total;
}


console.log(sumNums(4))

// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.
//
// Examples:
//
// isFactorOf(6,2); // => true
// isFactorOf(-6, 2); // => true
// isFactorOf(5,0); // => false
// isFactorOf(22, 7); // => false

function isFactorOf(number, factor){
    return (number % factor === 0)
}
console.log(isFactorOf(6,2)); // => true

// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.
//
// Examples:
//
// fizzBuzz(20); // prints
// 3
// 5
// 6
// 9
// 10
// 12
// 18



// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
//
// Examples:
//
// isPrime(2); // => true
// isPrime(10); // => false
// isPrime(11); // => true
// isPrime(9); // => false
// isPrime(2017); // => true
// num only divisible by 1 and itself

function isPrime(number){
    // check if no nums less than "number" divide into "number"
    for (let i = 2; i < number; i += 1){
        if (number % i === 0) {
            return false;
            // if i divides into number, then number is not prime
        }
    }
    // we only know that a number is prime, After we checked all possible factors and found none
    return true;
}