/*
Level : Easy

Question : Create a class Animal with constructor taking name and a method makeSound() that returns " ${name} makes a sound". Create 3 animals and test the method.

*/

//Solution:
class Animal {
    constructor (name) {
        this.name = name;
    }
    makeSound() {
        return `${this.name} makes a sound`;
    }

}

const a1 = new Animal("Dog");
const a2 = new Animal("Cat");
const a3 = new Animal("Lion");

console.log(a1.makeSound());
console.log(a2.makeSound());
console.log(a3.makeSound());

//output:
// Dog makes a sound
// Cat makes a sound
// Lion makes a sound   