/*
Topic: Object oriented Programming

Level: Easy 

Question: Create a class student with name and marks. add a method getgrade() that returns "pass" if marks>= 40, otherwise returns "fail" . create  3 students and test .

*/

//Solution:
class student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    getGrade() {
        if (this.marks >= 40) {
            return "pass";
        } else {
            return "fail";
        }
    }
}

const s1 = new student("Nawaz", 80);
const s2 = new student("Ahmed", 35);
const s3 = new student("Sana", 50);

console.log(s1.getGrade()); // returns "pass"
console.log(s2.getGrade()); // returns "fail"
console.log(s3.getGrade()); // returns "pass"

//Output:
// pass
// fail
// pass

