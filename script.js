// takes an array as an argument so need a parameter and
// returns 10 times the array length for 10 minutes per exercise
function calculateWorkoutLength(array) {
    return array.length * 10;
}

// takes two arguments an array and a number of exercises and
// returns a new array generated with random exercises based on
// the number passed into the parameter
function generateRandomExercises(arr, num) {
    const newArray = [];
    for (let i=0; i<num; i++) {
        let indx = Math.floor(Math.random()* arr.length);
        newArray.push(arr[indx])
    }
    return newArray;
}