/*
Level: Hard

Question: Create a Map based cache system 
Function createCache()
Return object with two methods:
set (key, value) - stores in map
get (key) - returns value or " Not found" using ?? operator
has (key) - returns true or false if key exists in map
clear() - clears the map
size - returns the size of the map

Test with std grades 

*/
//Solution:
const cache = new Map();
function createCache() {
    return {
        set(key, value) { cache.set(key, value); },
        get(key) { return cache.get(key) ?? "Not found"; },
        has(key) { return cache.has(key); },
        clear() { cache.clear(); },
        size() { return cache.size; }
    }
}

const grades = createCache();

grades.set("Nawaz", "A");
grades.set("Ahmed", "B");
grades.set("Sara", "A+");

console.log(grades.get("Nawaz"));
console.log(grades.get("Ali"));

console.log(grades.has("Ahmed"));
console.log(grades.has("Ali"));

console.log(grades.size());

grades.clear();

console.log(grades.size());

//OUTPUT:
//A
//Not found
//true
//false
//3
//0