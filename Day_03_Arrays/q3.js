/*
Level : Medium 

Question : Take this array [10,20,30,40,50]. Use map to crreate new array where every number is multipled by 3 .
print both original and new array to prove original is unchanged. */

//solution:
const arr = [10,20,30,40,50];
const multiply = arr.map ((arr) => arr * 3);
console.log(multiply);
console.log(arr);

//Output:
//[ 30, 60, 90, 120, 150 ]
//[ 10, 20, 30, 40, 50 ]