// Predict what this code will print out.
// Check your prediction by running the code in your command line
// with `node problems/3_scope.js`

var foo = "Happy";

for (var foo = 0; foo <= 5; foo += 1) {
  console.log(foo); //What will foo be on each iteration? foo will be "Happy" at each iteration
}
// got this wrong its 0 1 2 3 4 5 because we are reassigning foo

console.log(foo); //What will foo be on this line? 6 once we reach 6 we end the for loop