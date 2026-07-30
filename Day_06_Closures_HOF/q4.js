/*
Level: Hard
Question:
Write a higher order function filter and transform(arr, filterFn, transformFn) that:
1.First filters the array using filterfn
2.then transforms the result using transformFn
3.returns the new array
Test: start with [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] filter even, then double each.
*/

//Solution:
function filterAndTransform(arr, filterFn, transformFn) {
    const filtered = arr.filter(filterFn)
    const transformed = filtered.map(transformFn);

    return transformed;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterFn = x => x % 2 === 0;
const transformFn = x => x * 2;

console.log(filterAndTransform(arr, filterFn, transformFn));

//OUTPUT:[ 4, 8, 12, 16, 20 ]