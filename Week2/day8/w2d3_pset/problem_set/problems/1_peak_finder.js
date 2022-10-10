/***********************************************************************
Write a function `peakFinder(array)` that takes in an array of numbers.
It should return an array containing the indices of all the peaks. A
peak is an element that is greater than both of its neighbors. If it is
the first or last element, it is a peak if it is greater than its one
neighbor. Assume the array has a length of at least 2.

Hint: this can be solved using a single loop

Examples:

peakFinder([1, 2, 3, 2, 1]); //=> [2]
peakFinder([2, 1, 2, 3, 4, 5]); //=> [0, 5]
peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); //=> [2, 6, 8]
***********************************************************************/

function peakFinder(array) {
let peaks = []
for (let i = 0; i < array.length; i++){
    let point = array[i]
    let before = array[i - 1]
    let after = array[i + 1]
} if (point > before){
    peaks.push(i)
}
return peaks
}
console.log(peakFinder([1, 2, 3, 2, 1]))
// need to be able to compare a number at a specfic index to it's neighbors before that number and after that number to determine the peaks. 
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = peakFinder;
