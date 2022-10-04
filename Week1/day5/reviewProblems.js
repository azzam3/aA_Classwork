// isInside
// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['chase', 'phi', 'eliot'], 'eliot'); // => true
// isInside(['chase', 'phi', 'eliot'], 'fred'); // => false

function isInside(array, ele){
    if (array.indexOf(ele) === -1){
        return false
    }else {return true}
}

// function isInside(array, ele){
//     return array.indexOf(ele) > -1;
// }

// console.log(isInside(['chase', 'phi', 'eliot'], 'fred'))
// console.log(isInside(['chase', 'phi', 'eliot'], 'eliot'))
// array.indexOf = -1 if false

// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('App Academy'); //=> 'ymedacA ppA'

function reverseStr(str){
    let reversed = '';
    for (let i = str.length -1; i >= 0; i -= 1){
        let char = str[i]
        reversed += char; // add the character to the reverse string, this part i had a difficult time conceptualizing // reassignment of reversed to reversed + char in a loop
        console.log(reversed);
    }
    return reversed;
}

// console.log(reverseStr('bootcamp')); //=> 'pmactoob'
let test = 'test'
console.log(test);
test += ' concat this'
console.log(test);
// this one is  hard for me
// creat an empty string to start
// iterate over each character of the string but in reverse
// use a for loop, characters in a string are indexed in the same way as an array
// start at the end (high) and end in the low(start) loop
// subtract one each time

// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]


function luckySevens(max){
    let array = [];
    for (let i = 7; i <= max; i++){
        if (i % 7 === 0){
            array.push(i)
        }
    }
    return array
}
// console.log(luckySevens(25))
// Is there a difference between using i++ and i+=7? or why would we use one over the other

// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]

function copyMachine(element, num){
    let array = []
    for (let i = 0; i < num; i++){
        array.push(element)
    }
    return array

}
// console.log(copyMachine('candy', 2))

//everyOtherWord
// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]

function everyOtherWord(sentence){
    for (let i = 0; i <= sentence; i += 2)
}