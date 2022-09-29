//Console log 1-10
//console.log(1)
//console.log(2)
//console.log(3)
//console.log(4)
//console.log(5)
//console.log(6)
//console.log(7)
//console.log(8)
//console.log(9)
//console.log(10)

function count(start, end) {
    for (let i = start; i <= end; i += 1){
        console.log(i)
    }
}
//console.log(count(1, 10))
count(1, 10)
// i ++ is the same thing is i +=1
// David showed me a shortcut Command + D highlight ALL COUNT changed to count
//THe high level languages are written in low level languages, the reason we have highlevel languages so that we can work faster.]high level= ruby, python,javascript low level languages c# c+++, java
console.log("while loop")
function printRange (start, end){
    let i = start;
    while (i <= end){
        console.log(i);
        i++;
    }
}
printRange(7,21)

//console. log ("infinite")
//let i = 20;
//while (true){
//    console.log(i);
//}

//Continue
function skipFive(num){
    for(let i = 1; i < num; i++){
        if(i === 5){
            continue
        }
        console.log(i);
    }
}
skipFive(20)

function breakAtFive(num){
    for(let i = 1; i <= num; i++){
        if (i === 5) {
            break;
        }
        console.log(i);
    }
}
breakAtFive(20);

console.log("Write a function isPrime(num) that takes in a number and returns true if the number is prime, and false otherwise")

//any number less than 2 is not prime
//a prime number is only divisible by itself and the number 1
// num/num =1
function isPrime(num){
    if (num < 2) return false;
    for (let n = 2; n < num; n++){
        if(num % n === 0){
            return false}
    }
    return true;
}
console.log(isPrime(3))