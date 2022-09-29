// Arrays

// let arr = ['c', 'a', 't']; // 0 1 2 elements

// let str = 'cat';
// str[0] = 'x';
// console.log(str);

// strings are immutable, you cannot change it
// arrays are mutable

// arr[0] = 'x';
// console.log(arr);

let arr = ['hi', 9, 10, true, undefined, null, [1,2]];
console.log(arr);
console.log(arr[0]);
console.log(arr[6])
console.log(arr[6][0])

let fruits = ["apple", "orange", "pear"]
console.log(fruits.length)
console.log(fruits.indexOf('pear'))
console.log(fruits.includes('watermellon')) //false
console.log(fruits.push("watermelon"));
console.log(fruits);
console.log(fruits.pop())
console.log(fruits)
console.log(fruits.unshift("grapes"))
console.log(fruits)

// fruits.shift(); // removes from the front
// non mutating methods

let numbers = [1, 2, 3]
console.log(fruits.concat(numbers));
console.log(fruits);
//.concat does not mutate the array
