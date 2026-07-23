/*
Level : Easy 

Question : Create an array ["JavaScript", "python", "Java", "c++"] use foreach to print each language tilte : "language: JavaScript".*/

//Solution:
const arr = ["JavaScript", "python", "Java", "c++"];
arr.forEach((arr) => {
    console.log(`language: ${arr}`)
});

//Output:
// language: JavaScript
// language: python
// language: Java
// language: c++