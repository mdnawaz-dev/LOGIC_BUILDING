/*
Level : Hard
Question:
write a function called memoize it takes a function as parameter it returns a new function
the new function: Check if this input was already Calculated (use an object Cache)
if yes - return Cached result (don't recalculate)
if No - Calculate store in cache return result
Test - with a slow square function 
const slowsquare = (n) => { 
    imagine this takes long 
    return n*n
    }
const fastsqaure = memoize(slowsquare);
fastsquare(5)=calculates
fastsquare(5)=returns a cache
fastsquare(6)=calculates new
*/

//Solution:
function memoize(fn) {
    const cache = {};
    return function(input) {
        if (cache[input]!== undefined) {
            console.log("From Cache ")
            return cache[input];
        }
console.log("Calculating...")
        const result = fn(input);
        cache[input] = result;
        return result;
    }
};

const slowsquare = (n) => {
    return n*n;
}

const fastsquare = memoize(slowsquare);

console.log(fastsquare(5));
console.log(fastsquare(5));
console.log(fastsquare(6));

//OUTPUT:
//Calculating...
//25
//From Cache 
//25
//Calculating...
//36