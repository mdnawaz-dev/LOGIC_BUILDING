let A = prompt("Enter a value for A to find which is larger one ");
let B = prompt("Enter a value for B to find which is larger one");
A = Number(A);
B = Number(B);
if(A>B){
  console.log("A is larger");
} else if(B>A) {
  console.log("B is larger");
} else {
  console.log("A==B");
}