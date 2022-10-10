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


function printObject(obj) {
    for (let keys in obj){
        console.log(keys + " - " + obj[keys])
    }

}

var bootcamp = {
    name: 'App Academy',
    color: 'Red',
    population: 120,
   };
   printObject(bootcamp); // prints
   
//    `name - App Academy`
//    `color - Red`
//    `population - 120`

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = printObject;
