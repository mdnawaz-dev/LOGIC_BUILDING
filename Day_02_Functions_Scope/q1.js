/* Level : Medium

Question : Write a function grade checker (marks) returns "Distinction" if marks>= 75, "First Class" if marks >= 60, "Pass" if marks >= 40, and return "Fail" if marks below 40.*/
// Test :  80 , 60 , 45 , 30 .

//solution: 
function gradechecker(marks) {
    if (marks >= 75) {
        return "Distinction";
    } else if (marks >= 60) {
        return "First Class";
    } else if (marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }

};

console.log(gradechecker(80)); // Distinction
console.log(gradechecker(60));   // First Class  
console.log(gradechecker(45));   // Pass
console.log(gradechecker(30));   // Fail

// Output : Distinction , First Class , Pass , Fail