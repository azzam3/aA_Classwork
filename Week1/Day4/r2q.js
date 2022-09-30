// function plusFive(num) {
//     let add5 = num + 5;
//     console.log(add5)
//     return add5
//   }
//   plusFive(10)


// function plusFive2(num) {
//     let add5 = num + 5;
//     return add5
//   }
// console.log(plusFive2(10));  // => 15
// console.log(plusFive2(2));   // => 7
// console.log(plusFive2(-8));  // => -3


// function plusFive3(num) {
//     let add5 = num + 5;
//     console.log(add5)
//   }
//   plusFive(12)

//   for (let index = 0; index < 10; index += 1) {
//     // the code inside this block will run 10 times
//   }

  // these two do the exact same thing!
function forLoopDoubler (array) {
    // it is convention to shorten index to just i in most cases
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i] * 2;
    }
    return array;
  };
  
  function whileLoopDoubler (array) {
    let i = 0;
    while (i < array.length) {
      array[i] = array[i] * 2;
      i++;
    }
    return array;
  };
  
 console.log(forLoopDoubler([1, 2, 3])); // => [2,4,6]
  whileLoopDoubler([1, 2, 3]); //=> [2,4,6]

  let i = 0
  while (i < 5) {
    console.log ("hello world")
    i ++
  }