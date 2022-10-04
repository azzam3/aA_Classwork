let obj = {}; // object is held in curly braces whereas an array is in square brackets []
obj.name = 'a/A'; // { name: 'a/A'}
obj.age = 4; // { name: 'a/A', age: 4 } each key value pair is separated by a comma
// Object contains data in pairs
// when we use brackets, we need to use a string; quotation marks
obj['food'] = 'pizza';
// why do we have 2 different ways to use objects?

console.log(obj); 

let myObj = {};
let myKey = 'name'

myObj[myKey] = 'Bootcamp Prep';
// with square brackets I am allowed to pass a variable 
// without [ ], .myKey results in { myKey: 'Bootcamp Prep' }
console.log(myObj); // { name: 'Bootcamp Prep' }

let dog = {};
dog.name = 'Fido'
console.log(dog)
console.log(dog.name)
dog['name']
dog.age = 11
console.log(dog.age)
// need to know the key to get the value

let dog2 = {name: 'Fifa', age: 8}
console.log(dog2)

let cat = {name: 'Whiskers', color: 'Orange'}
console.log(cat)