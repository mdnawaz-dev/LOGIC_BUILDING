/*
Level: Easy 

Question: Create an array of Marks[85, 42, 91, 38, 55] use filter to get only passing marks (above 40). print the result. */

//solution: 
const Marks = [85, 42, 91, 38, 55];
const passed = Marks.filter(mark => mark > 40);
console.log(passed);

//Output: [ 85, 42, 91, 55 ]
