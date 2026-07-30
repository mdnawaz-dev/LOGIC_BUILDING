/*
Level: Easy 

Question:
Write a higher order function apply opertaion(arr, operation) that takes an array and a function applies the function to every item and returns a new array. Test with doubling and Squaring.
*/

//solution:
function applyOperation(arr, operation) {
    return arr.map(operation);
}
const arr = [1, 2, 3, 4, 5];
const doubled =  x => x * 2;
const squared =  x => x * x;

console.log(applyOperation(arr, doubled));
console.log(applyOperation(arr, squared));

//OUTPUT:[ 2, 4, 6, 8, 10 ]
// [ 1, 4, 9, 16, 25 ]