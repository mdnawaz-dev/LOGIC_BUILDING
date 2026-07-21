/* Level: Hard
question 3: Write a function called formatted(email) . It should 
*Remove spaces from Bothsides 
*Convert all letters to lower case
*Check if it contain "@" - if not return "Invalid Email"
*if valid return "valid: " + cleaned email
Test : " Nawaz@gmail.com " and " nawazgmail.com "*/

// solution:
function formatted(email) {
    const cleanedEmail = email.trim();
    const lowerCaseEmail = cleanedEmail.toLowerCase();
    const check = cleanedEmail.includes("@");

    if (check) {
        return "Valid Email: " + cleanedEmail;
    }  
    return "Invalid Email";
}

// test cases
console.log(formatted(" Nawaz@gmail.com "));
console.log(formatted(" nawazgmail.com "));

// output:
// Valid Email: nawaz@gmail.com
// Invalid Email
