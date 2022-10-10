// What is a nested loop
// How to transverse a multidimensional loop
let arr = [[1, 2][2,3]]
// looping is repeating the same block of code multiple times
function everyCombination(){
    for (let i =0; i < 3; i++){
        console.log(`outerloop: ${i}`)
        for (let j = 0; j < 5; j++){
            //console.log(i + ' ' + j)
            console.log(`innerloop: ${j}`)
        }
    }
}
console.log(everyCombination())

let students = ['Kevin', 'Jesse', 'Jason', 'Simon'];
function pairStudents (arr){
    for (let i = 0; i < arr.length; i++){
        let student1 = arr[i];
        for (let j = i + 1; j < arr.length; j++){
            let student2 = arr[j];
            console.log(`${student1} will be paired with ${student2}`)
        }//ending for for j
    } //ending for for i
}//ending function
pairStudents(students)

let x = true
console.log(`Hi my name is ${x}`) // backtick

function twoSum (arr, target){
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === target){
                console.log([i,j])
            }
        }
    }
}
twoSum ([0, 1, 2, 3, 4, 5, 6], 5)

let matrix = [
    [1, 2, 3], //Mtrix [0]
    [4, 5, 6], //matrix [1]
    [7, 8, 9]// matrix [2]
];
// console.log(matrix[0])

for (let i = 0; i < matrix.length; i++){ // i = 0
    let subArray = matrix[i]; //sub array = matrix[o]====[1,2,3]
    for (let j = 0; j < subArray.length; j++){ //length is 3 
        let ele = matrix [i][j]; // i=0,j=0 ele is 1, 
        console.log(ele);
    }
}
// console.log(matrix[0])

let geography = [
    [0, 2, 3, 0],
    [1, 4, 3, 1],
    [1, 5, 6, 4],
    [0, 4, 3, 2]
]

function getHighestCoordinateOnAPlane(plane){
    let biggest = plane[0][0]; // 
    let currentBiggestIndex = [0, 0];
    for (let i = 0; i < plane.length; i++){
        let subArray = plane[i];
        for (let j = 0; j < subArray.length; j++){
            if(subArray[j] > biggest){
                biggest = subArray[j]
                currentBiggestIndex = [i,j]
            }
        }
    }
    return currentBiggestIndex;
}
console.log(getHighestCoordinateOnAPlane(geography))

let peopleArr = [
    {name: 'Ry',
    favFoods: ['Brownies', 'Sushi', 'Tacos']
    },
    {name: 'Brooke',
    favFoods: ['Apples', 'Bananas', 'Pears']
    }
]

function printFavoriteFoods(array){
    for (let i = 0; i < array.length; i++){
        let obj = array[i];
        let arrayInObj = obj.favFoods;
        for (let j = 0; j < arrayInObj.length; j++){
            console.log(arrayInObj[j]);
        }
    }
}
printFavoriteFoods(peopleArr)