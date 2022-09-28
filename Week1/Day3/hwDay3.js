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