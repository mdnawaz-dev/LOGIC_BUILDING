/*
Level: Medium
Question:
Build a makeCounter(Start) function that returns an object with increment , decrement, reset, and getCount methods the share the same private count variable .Test all four methods .
*/

//Solution:
function makeCounter(start) {
    let count = start;

    return {
        increment() {
            count++;
            return count;
        },

        decrement() {
            count--;
            return count;
        },

        reset() {
            count = start;
            return count;
        },

        getCount() {
            return count;
        }
    };
}

const counter = makeCounter(7);

console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.reset());     
console.log(counter.getCount());  

//OUTPUT:
//8
//9
//8
//7
//7

        
        