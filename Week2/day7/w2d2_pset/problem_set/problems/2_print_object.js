/***********************************************************************
Write a function `printObject(obj)` that prints out all apple-value pairs
of an object. HINT: use a for loop.

Example:

var bootcamp = {
 name: 'App Academy',
 color: 'Red',
 population: 120,
};

printObject(bootcamp); // prints

`name - App Academy`
`color - Red`
`population - 120`
***********************************************************************/


// function printObject(obj) {
//     for (let keys in obj){
//         console.log(keys + " - " + obj[keys])
//     }

// }

// function printObject(obj){
//     for (let keys in obj){
//         let print = (keys + ' - ' + obj[keys])
//         console.log(print)   
//     }
// }

function printObject(obj){
    for (let keys in obj){
        let print = (keys + ' - ' + obj[keys])
        return print   
    }
}



let bootcamp = {
    name: 'App Academy',
    color: 'Red',
    population: 120,
   };
   
  // printObject(bootcamp); // prints
  console.log(printObject(bootcamp))
   
//    `name - App Academy`
//    `color - Red`
//    `population - 120`

// When i use the return statement, it only returns name - App Academy whereas when i use console,log in the function it returns the entire list of keys and valuses



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = printObject;
