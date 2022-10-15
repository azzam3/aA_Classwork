// A data structure is a container to store and organize data
// let arr = ['jon', 'cloie', 'zack', 'coal'] // array
// // another way is using an object
// let student {
//     name: 'zack'
//     gender: 'male'
//     height: "5'6"
// }

// let student = ["zack", "male", "5'6"]

// in memory an array, given an address, they are adjacent to each other in an array 
// if i wanted to look for an item in an Array, i would have to do loops through the array and find that specfic item in order, takes a long time
// objects are not ordered, the addresses are unordered. most things are stored in objects.  will take a shorter time looking for a specfic item, the look up of an object is constant time O(1)
// more effiecent data structure to work with - depends on what you need. in some instances you care for oreder , in other cases you don't

// Model a student
// use an array
// let student{
//     name
//     year
//     height
//     grades


// }

// Model a class of students
// I would use an array of objects
// each student is represented by an object 

// Model a car
// object

// Model a parking lot
// array

let student1 = {'name' : 'jon' , 'grade' : 2}
let student2 = {'name' : 'sam' , 'grade' : 4}
let student3 = {'name' : 'joe' , 'grade' : 12}

let class1 = [student1, student2, student3]

console.log(class1)

for (let student of class1){
    console.log(student.name)
    console.log(student.grade)
}