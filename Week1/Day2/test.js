console.log("something".indexOf('o')) // !negate 0 falsy
if (!0){
    console.log("in the if");
} else {
    console.log("in the else");
}
//one equal sign is assignment
//triple equal sign is a comparison
let num = 20;
if(num = 30){
    console.log("in the if");
} else {
    console.log("in the else")
}
// Today we will be doing functions
// ALLOW US TO MAKE OUR FUNCTION DRY
// DRY Don't Repeat Yourself
// Procedure of code that will run when called
// function foo(){
//   return 'bar';
//    console.log(foo()); // function invocation ()
//    console.log(foo);
// }

function foo(p1, p2){
    return p1 + " " +p2;
}
console.log(foo('Azzam', 'Hamid'))
// few ways to declare a function
let foo = function(){
    return 'bar';
}
let foo =()=>{
    return 'bar';
}