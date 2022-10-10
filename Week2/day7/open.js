// Objects
// An object is a data structure that stores other data, similar to how an array stores elements.
// An object differs in that each value stored in an object is associated with a key
// Keys are almost always strings while values cam be any data type: numbers, string, functions, arrays, other objects, anything at all
// Object type are reffered to as 'dictionaries', 'maps', or associative arrays.
// Objects are different from the previous data structures we/ve talked about in two ways
// 1. instead of accessing values within an object through an index of numbers, objects are indexed using keys ( this allows us to access values quickly and efficiently)
// 2. Order is not guarenteed within an Object. WHen you iterate through the values in an object, they may not be in the same order when they were entered
// Objects are defined by using curly braces

let car ={}
console.log(car) // here is out new empty object
// => {}
// We can create new key - value pairs using bracket notation [] and assignment =
car["color"] = "Blue";
car['seats'] = '2';

console.log(car) // => { color: 'Blue', seats: '2' }
console.log(car['color']) // Blue
console.log(car['seats']) // 2
// when we car['color'] we are using color as out key
// you can think of keys and values in an object just like a lock an key in real life. the 'color' key unlocks the corsponding value to give us our car's color 'blue'

// Keys without values
// What happens if we try to acces a key that we have not yet assigne within an object?
console.log(car)
console.log(car['weight']) // => undefined
// the undefined type is the default for unassigned variables, functions without a returnm out of array elements and non existant object values
// using this knowledge we can check if a key exists in an object
console.log(car['color'] === undefined) // false
console.log(car['weight'] === undefined) // true
// Looks like i get a boolean value
// modern javascript has a preferred method to check if an object exists in a key is to use the in operator

console.log(car)
console.log('color' in car) // true
console.log('model' in car) // false

let newVariable ="color";
console.log(newVariable)
console.log(car[newVariable])
console.log(car['color'])
// car[newVariable] and car ['color'] are equivalent
// why is this useful
// we know that varibles can change
// so now the keys we use for objects can change

console.log(car) // { color: 'Blue', seats: '2' }
console.log(newVariable)
console.log(newVariable = "weight")
console.log(newVariable)
console.log(car[newVariable])
console.log(car) // car doesn't change because we didn't assign the new variable key in our object
console.log(newVariable)
// asssigning a key value pair using a variable
console.log(car[newVariable] = 1000);
console.log(car)

// So far we've shown how to access and set values in objects using object[key] - also known as Bracket Notation. However, this is only one of two ways to access values within an object. The second way we can access values within an object is called Dot Notation. We can use . to assign and access our key-value pairs. The easiest difference to notice is when we use dot notation, we don't need to use string quotation marks for the key:

let dog = {};
dog.bark = "Bowowowo"
console.log(dog.bark)
console.log(dog)
/*
Bracket notation vs Dot notation

Now that we know two ways to access values of an object, you are probably asking yourself: which one should you use? Here is a quick list of pros for each.

Dot notation:

    easier to read
    easier to write because we don't have to deal with using quotation marks
    cannot use variables as keys
    keys can't contain numbers as their first character (object.1key doesn't work!)

Bracket notation:

    you can use variables (assigned to string values) as keys!
    It is okay to use variables and Strings that start with numbers as keys (use object['1key'] does work, while object.1key does not)

There are tradeoffs and advantages for either notation, so practice using both! You will learn quickly that there are a ton of different ways to write the same thing in JavaScript. Having both of these options available to you will allow you to use different tools to solve different problems
*/

let myDog = {
    name: "Fido",
    type: "Doge",
    age: 2,
    favoriteToys: ["bone", "ball"]
  };
  
  console.log(myDog.age); // prints 2
  console.log(myDog["favoriteToys"]); // prints ["bone", "ball"]
  
  // Iterating through Objects
  // with objects we cannot rely on indicies to access the values
  //1 Iterate through Object keys and values using a for... in loop
  //2 use the object.keys and the object.values methods to iterate through an object

  // The current key is assigned to *variable* on each iteration.
// for (let variable in object) {
//     statement;
//  }

  // The key we are accessing is assigned to the `currentKey`
// *variable* on each iteration.
let obj = { name: "Rose", cats: 2 };

for (let currentKey in obj) {
    console.log(currentKey);
  }
  
  // prints out:
  // name
  // cats

  function catBuilder(name, color, toys) {

    return{
    name: name,
    color: color,
    toys: toys
    }
}

function catBuilder(name, color, toys) {
    let cat = {
        // return{
        name: name,
        color: color,
        toys: toys
        // }
    }
    return cat
    }

    function doesKeyExist(obj, key) {
        return obj[key] !== undefined
    
    }