/*
Topic: Closures, Callbacks and higher order functions

Level: Easy 

Question:
Write a function multiplyBy(factor) that returns a new function the returned function takes a number and multiple it by factor. create double, triple, quadruple, using it. Test each.
*/

//solution:
function multipleBy(factor) {
    return function(number) {
        return number * factor;
    }
}
const double = multipleBy(2);
const triple = multipleBy(3);
const quadruple = multipleBy(4);

console.log(double(10));
console.log(triple(10));
console.log(quadruple(10)); 

//OUTPUT:
//20
//30
//40