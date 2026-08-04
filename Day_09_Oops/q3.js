/*
Level : Medium

Question :
Create a base class Employee with name and salary. Add a method getDetails(). create a child class Manager extends Employee that adds teamsize. override getDeatails() to also show team size. use super() properly.
*/

//Solution:
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `Name: ${this.name}, Salary: ${this.salary}`;
    }   
}

class Manager extends Employee {
    constructor(name, salary, teamSize) {
        super(name, salary);
        this.teamSize = teamSize;
    }
    getDetails() {
        return `Employee Name: ${this.name}, Salary: ${this.salary}, Team Size: ${this.teamSize}`;
    }
}

const emp1 = new Employee("Nawaz", 50000);
const manager1 = new Manager("Ahmed", 70000, 10);

console.log(emp1.getDetails());
console.log(manager1.getDetails());

//Output:
// Name: Nawaz, Salary: 50000
// Employee Name: Ahmed, Salary: 70000, Team Size: 10
