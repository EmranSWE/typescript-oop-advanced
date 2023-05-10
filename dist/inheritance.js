"use strict";
//Inheritance of Object Oriented Programming
class Employee {
    //Constructor
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    //Method
    getDetails() {
        console.log(`The name of ${this.name} age ${this.age} and salary ${this.salary}`);
    }
}
//Inheritance 
class Manager extends Employee {
    constructor(name, age, salary, power) {
        super(name, age, salary);
        this.power = power;
    }
    getManagerDetails() {
        console.log(`This is ${this.name} and helping the other employee ${this.power}`);
    }
}
//Create an object instance with new keyword
// const emp1 = new Employee('imran',20,20000);
// emp1.getDetails();
const manager = new Manager('Sheikh', 20, 20000, 'Helping the others employee');
manager.getManagerDetails();
