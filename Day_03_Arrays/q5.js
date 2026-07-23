/*
Level : Hard

Question : You have student data:
const students = [
    {name:"Nawaz", marks:85},
    {name:"Ahmed", marks:92},
    {name:"Sana", marks:92},
    {name:"zaid",marks:38}
];
*filter only students who passed marks >= 40.
*use map on passed students to add a grade properly.
*print each passed students name and grade using foreach.*/

//Solution:
const students = [
    {name:"Nawaz", marks:85},
    {name:"Ahmed", marks:92},
    {name:"Sana", marks:92},
    {name:"zaid",marks:38}
];
 students
 .filter(student => student.marks >= 40)
 .map(student => {
    let grade;

    if (student.marks >= 80) {
        grade = "Distinction";
    }else if (student.marks >= 60) {
        grade = "First Class";
    }else  {
        grade = "pass";
    }

 return {...student, grade:grade};
})

.forEach(student => {
    console.log(`${student.name} achieved : ${student.grade}`);
    });

    //Output:
    // Nawaz achieved : Distinction
    // Ahmed achieved : First Class
    // Sana achieved : First Class