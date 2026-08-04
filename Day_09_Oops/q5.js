/*
Level : Hard 

Question: Create a class vehicle with :
constructor (brand, model, year)
method getAge() -- returns ( current year - this.year) 
method getInfo() -- returns "Brand: ${this.brand}, Model: ${this.model}, Age: ${this.getAge()}"
create class Car extends vehicle :
add numDoors 
Override getInfo() to also include numDoors
uses super.getInfo() inside to reuse parent logic
create class ElectricCar extends Car :
add batteryRange
Override getInfo() to also include batteryRange
uses super.getInfo() inside to reuse parent logic

Test with 3 Level inheritance chain
*/

//Solution:
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getAge() {
        return new Date().getFullYear() - this.year;
    }
    getInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}, Age: ${this.getAge()}`;
    } 
}

class Car extends Vehicle {
    constructor(brand, model, year, numDoors) {
        super(brand, model, year);
        this.numDoors = numDoors;
    }
    getInfo() {
        return `${super.getInfo()}, Number of Doors: ${this.numDoors}`;
    }
}

class ElectricCar extends Car {
    constructor(brand, model, year, numDoors, batteryRange) {
        super(brand, model, year, numDoors);
        this.batteryRange = batteryRange;
    }
    getInfo() {
        return `${super.getInfo()}, Battery Range: ${this.batteryRange}Km`;
    }
}

const v1 = new Vehicle("Toyota", "Camry", 2018);
console.log(v1.getInfo()); // Brand: Toyota, Model: Camry, Age: 4
const c1 = new Car("Honda", "Civic", 2020, 4);
console.log(c1.getInfo());
const e1 = new ElectricCar("Tesla", "Model 3", 2021, 4, 75);
console.log(e1.getInfo());

//Output:
// Brand: Toyota, Model: Camry, Age: 8
// Brand: Honda, Model: Civic, Age: 6, Number of Doors: 4
// Brand: Tesla, Model: Model 3, Age: 5, Number of Doors: 4, Battery Range: 75Km