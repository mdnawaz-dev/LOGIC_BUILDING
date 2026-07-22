/* Level = Medium
Question 2: A User typed there name as " Nawaz " . clean it - remove spaces & convert to proper format : first letter captial & rest small letters.*/
// solution:
const name = " Nawaz ";
const cleanedName = name.trim();
const formattedName = cleanedName[0].toUpperCase() + cleanedName.slice(1).toLowerCase();
console.log(formattedName);

// output: Nawaz