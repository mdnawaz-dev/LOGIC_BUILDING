/*
Topic : Modern JavaScript , Nullish Coalescing , Optional Chaining , Map , set , Modules.
Level : Easy

Question : Create a Map of 4 Students with their marks Use set(), get(), has(), size then iterate and print each student with their mark using template literals.*/

//Solution:
const students = new Map();

students.set('MD Nawaz', 473);
students.set('Ahmed', 450);
students.set('Ali', 420);
students.set('sana', 400); 

console.log(students.get('MD Nawaz')); //473
console.log(students.has('Ahmed')); //true
console.log(students.size); 

students.forEach((marks, name) => {
    console.log(`${name} has scored ${marks} marks.`);
});

//OUTPUT:
//473
//true
//4
//MD Nawaz has scored 473 marks.
//Ahmed has scored 450 marks.
//Ali has scored 420 marks.
//sana has scored 400 marks.
