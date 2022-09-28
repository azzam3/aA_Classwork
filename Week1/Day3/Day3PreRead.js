// Loops
// Let's say we want to print out some num bers

// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// and so on... We want DRY, must be a better way


// function printTen (){
//     for (let num = 3; num <= 10; num += 2) {
//         console.log(num)
//     }
// }
// printTen();

//1. Initialize a counter of somesort (creating a variable/let)
//2. How far do we want to loop
//3/ How we are going to change out counter

// function printNums (start, end) {
//    for(let i = start; i < end; i += 2) {
//        console.log(i)
//    }
// }

// console.log(printNums(2, 20));
// if we have 100(a higher number) as the start and 0(a lower number) as the end, the code would not have an output. We defined 100 to be start, and 100 is not less than zero according to the second paramater

// While Loops (write the function printNums in terms of while loops)
function printNums(start, end){
    let i =start;

    while (i < end) {
        console.log(i);

        i +=1
    }
}

printNums(2, 12)

// The structure of a for loop is as follows

// for([initialization]; [condition]; [incrementer]) {
    // this is the "body" of the loop
    // do some code
// }

// [initialization] - This expression is where you initialize a variable that will be used a the counter. This counter will be updated in the incrementer and checked in the condition
// [condition] - If this expression evaluates to true, we run another "cycle" pf the loop. If false, we stop and exit the loop. We call each "cycle" in a loop an iteration
// [incrementer] - This expression is evaluated after every iteration of the loop. THis step should bring the counter that was created in the [initialization] closer to a [conditional] that evaluates to false. If your code is trapped in an infinite loop hit ctrl + C to kill the program.





