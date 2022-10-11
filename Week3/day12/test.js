// let name = "Jonathan";
// function foo (){
//     console.log(name)  // Whenever we call on the variable, it will look for the variable in the fucntion first then it will go one scope out
// }
// console.log(foo)

// function bar (){
//     let test = "something";
// }
// // console.log(test) 

// function foo2(){
//     let test1 = "this"
//     for (let i = 0; i < 3; i++){
//         console.log(test1);
//         let bar2 = "other"
//     }
//     // console.log(bar2)
// }

// foo2()
// //console.log(test1)

let myFavoriteFood = "pizza"
function outer (){
    let myFavoriteFood = "ramen";
    function inner (){
        let myFavoriteFood = "tacos";
        console.log(myFavoriteFood);
    }
    inner();
    console.log(myFavoriteFood)
}
outer();
console.log(myFavoriteFood);

//What is scope? Scope is the environment in which the variable is defined in other words the curly braces where the variable is defined

// Write a function sumAray(arr) that takes in a array and returns the sum of all the elements
// ex sumArray ([1, 2, 3, 4, 5]) = 15

function sumArray (arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        let ele = arr[i]
        sum += ele
    }
    return sum
}
console.log(sumArray ([1, 2, 3, 4, 5]))

// Hoisting
// Javascript passes our code twice. the first time it hoists all of the function and varibles declared with var
// Hoisting can be thought of as proofreading your code and moving all your defined functions to the top of your code


// foo();
// function foo(){
//     console.log("bar")
// }
// foo();

console.log(bar);
let bar = () => {
    console.log('foo')
}
bar()