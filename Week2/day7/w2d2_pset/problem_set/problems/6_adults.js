/***********************************************************************
Write a function `adults(people)` that takes in an array of person
objects. The function should return an array containing the names of
those who have an age of 18 or higher.

Example:

var ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

adults(ppl); // => [ 'John', 'Jane' ]
***********************************************************************/

function adults(people) {
  // this is an array full of objects
  let array = []
  for (let i = 0; i < people.length; i++){
    let list = people[i]
    if (list.age >= 18){
      array.push(list.name)
    }
  }
  return array
}


var ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

console.log(adults(ppl)); // => [ 'John', 'Jane' ]
// /**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// module.exports = adults;
