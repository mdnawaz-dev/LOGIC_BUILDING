let a = prompt("enter the a value for valid triangle");
let b = prompt("enter the b value for valid triangle");
let c = prompt("enter the c value for valid triangle");

let A= Number(a);
let B= Number(b);
let C= Number(c);

let AB = A+B>C;
let AC = A+C>B;
let BC = B+C>A;

if(AB && AC && BC){
  console.log("It is valid triangle");
}else {
  console.log("It is  Invalid triangle");
}