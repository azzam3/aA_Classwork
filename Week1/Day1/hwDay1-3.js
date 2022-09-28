// Expression Evaluation Round 2 part 3

var str1 = 'marker';
var num = 'whiteboard'.length - str1.length;
console.log(num); // 10 - 6 = 4
var str2 = 'bootcamp';
console.log(str2[num].toUpperCase());//BOOTCAMP. Answer is C, because we define num to be 4.
var char = str2[num].toLowerCase(); //bootcamp
console.log(char + '!'); // char!