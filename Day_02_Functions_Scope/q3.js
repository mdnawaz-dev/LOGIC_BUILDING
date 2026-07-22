// Level : Hard 

/* Question : write a function passwordclearer(password) that:
1.Checks length is at least 8charcters 
2.Checks if it includes at least one number Using includes() - test for digits 0-9 
3.Returns "Strong password" only it Both conditions pass 
4.otherwise Returns specific Message " Too short " or " Must include  a  number"
Test : "abc", "abcdfgh", "abc12345" */

//Solution :
function passwordclearer(password) {
 if(password.length < 8) {
    return "Too short";
 }
 let hasNumber = false;
 for (i = 0; i <= 9; i++) {
    if(password.includes(i.toString())) {
        hasNumber = true;
        break;
    }
 }
   if(hasNumber) {
    return "Strong password";
    } else {
    return "Must include a number";
    }
 };

console.log(passwordclearer("abc"));
console.log(passwordclearer("abcdfgh"));
console.log(passwordclearer("abc12345"));
console.log(passwordclearer("173nawaz"));

// Output: 
// Too short
// Too short
// Strong password
// Strong password
