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

// Lecture
// FUnction Decomposition and Objects

/* Breaking down a problem in to several functions
so that we have clean code, manage complexity, break down the problem into small digestable chunks
Harder to find where the code is messing up
*/

// laligatSum(num) and returns the sum of all the prime numbers less than or equal to that number
// laligatSum(10)  => 2, 3, 5, 7 => 17

// Build an is prime number

function isPrime(number) {
    if (number < 2){
      return false;
    }
    for (let i = 2; i < number; i++){
      if (number % i === 0){
        return false;
      }
    }
    return true
  
  }

  function laligatSum(number){
    let sum = 0;
    for (let i = 2; i <= number; i++){
        if(isPrime(i)){
            sum += i;
        }
    }
    return sum
  } 

  console.log(laligatSum(10))
  console.log(isPrime(7))

  /* Objects are a javascript data structure just like arrays
  they are mutable
  they have key value pairs
  key in a javascript object always a string
  value can be anything that you want to be
  keys are unique
  objects are unordered, whereas arrays are ordered

  when we create that cat object
  nesting objects in objects in a common thing, the values can be anything
  keys have to strings

*/

cat["name"] ="jael";
cat['age'] = 21
console.log(cat)
console.log(cat["color"])

console.log(cat.name)
console.log(cat.color)
console.log(cat.toys)

console.log(cat.test)
// if the key does not exist it will come out as undefined
// we can also use varibles to key into the objects
let test ="name";
console.log(cat[test])// square variable allows you to assign the variable
console.log(cat.test) // looking strictly for the key for test

function printObject(obj){
    for (let key in obj){
        console.log(key)
        console.log(obj[key])
    }
}
printObject(cat) // Prints a collection of keys