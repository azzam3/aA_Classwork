// A Reverse Range
// range(2,7) -> [6, 5, 4, 3]

function reverseRange(start, end) {
    let array =[]
    for (let i = end - 1; i > start; i--){
        array.push(i)
    }
    return array

}
console.log(reverseRange (2, 7))
// first thing i would want to do is to print the array

// Is Prime Number

function isPrime(number){
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++){
        if (number % i === 0){
            return false;
        }
    }

    return true;
}
console.log(isPrime(12))

// Magic Numbers - returns an array of numbers up to the max. Each number should either be divisble by 4 or 6

function magicNumbers(max){
    let array = []
    
    for (let i = 4; i <= max; i++){
        if (((i % 4 === 0) || (i % 6 === 0)) && (i % 12 !== 0)){
            array.push(i)
        }     
    }
    return array
}
console.log(magicNumbers(20))
// if (i % 4 !== 0 || i % 6 !== 0 && i === 12)

// first and last problem

// takes in an array of numebrs and returns either
// the sum of the first amd last elements of the array if there is an even number of elements
// the difference between the first and last elements of the array if there is an odd number of elements
// you can assume the array contains at least one number

// function firstAndLast(array) {
//     if(array.length % 2 === 0){
//         let first = array[0]
//         let last = array[array.length - 1]
//         return (first + last)
//     } else {
//         let first = array[0]
//         let last = array[array.length - 1]
//         return (first - last)
//     }
// }

function firstAndLast(array){
    let first = array[0]
    let last = array[array.length -1]
    if(array.length % 2 === 0){
        return (first + last)
    } else{
        return (first - last)
    }
}
console.log(firstAndLast([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))



// Royal we
// Write a fucntion royalWe(sentnec that returns an string where every word 'I' is replaceed with 'we and every word 'mine' is replaes with 'ours' 'my' to 'our' and 'me' to 'us')

function royalWe(sentence){
    let words = sentence.split(' ');
    let newWords = []

    for (let i = 0; i < words.length; i += 1){
        let word = words[i];
        
        if (word === 'I'){
            newWords.push('we');
        } else if (word === 'mine'){
            newWords.push('ours');
        } else if (word === 'my'){
            newWords.push('our');
        } else if (word === 'me'){
            newWords.push('us');
        } else{ // word does not need to be replaced
            newWords.push(word);

        }
        let newSen = newWords.join(' ')
        return newSen;
    }
}
console.log(royalWe('This is mine. my me I'))
// need a way to look at each single word
// first I want to split the sentence to an array of words and free to iterate overit
