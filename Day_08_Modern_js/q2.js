/*
Level : Easy 

Question: Create a Set from this array and remove duplicate 
const tags = ["js", "css", "js", "html", "css", "js", "react"];
Print the unique tags and the count
*/

//Solution:
const tags = ["js", "css", "js", "html", "css", "js", "react"];
const uniqueTags = new Set(tags);
console.log(uniqueTags);
console.log(uniqueTags.size);

//OUTPUT:
//Set(4) { 'js', 'css', 'html', 'react' }
//4

