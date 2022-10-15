/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'

I have an array with a bunch of objects
so first I want to loop through the array then
I want to access the students initials and the id
*******************************************************************************/

function highestScore(students) {
  // your code here...
  let str = ''
  let highest = 0;
  for (let i = 0; i < students.length; i++){
    let student = students[i]
    if (highest < student['score']) {
      highest = student['score']
      str = student
    }

  }
  let names = str.name.split(' ')
  return names[0][0] + names[1][0] + str.id
  
}

// let highest = 0
// let answer = ''
// for (let student of students){
//   if student.score > highest){
//     highest = student.score
//     ans = student

//   }
  
// }
// let names = ans.name.split(' ')
// return names[0][0] + names[1][1] + ans.id
 

var students = [
  {name: 'Alvin Zablan', id: 128, score: -42},
  {name: 'Eliot Bradshaw', id: 32, score: 57},
  {name: 'Tommy Duek', id: 2, score: 99},
  {name: 'Fred Sladkey', id: 256, score: 94}
 ];
 
 console.log(highestScore(students)); //=> 'TD2'











/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
