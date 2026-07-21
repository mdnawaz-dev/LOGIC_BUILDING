/* Level : Medium
Question 1: Take This string " firstname , lastname , email , phone " -> split into an array then print the total number of elements in the array using template literals.*/

// solution:
const str = " firstname , lastname , email , phone ";
const arr = str.split(",");
console.log(`Total number of elements in the array: ${arr.length}`);

// output:
// Total number of elements in the array: 4