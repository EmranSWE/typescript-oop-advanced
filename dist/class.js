"use strict";
class Car {
    //Normal process
    // name:string;
    // color:string;
    // model:string;
    // constructor (name:string,color:string,model:string){
    //     this.name=name,
    //     this.color=color;
    //     this.model=model;
    // }
    // Parameter Property
    constructor(name, color, model) {
        this.name = name;
        this.color = color;
        this.model = model;
    }
    buyCar() {
        console.log(`Buy a ${this.name} with color ${this.color} and brand model ${this.model}`);
    }
}
const bmw = new Car('BMW', 'Black', 'BM-2020X-2');
bmw.buyCar();
const toyota = new Car("Toyota", 'Black-blue', 'Tot-2231-XX');
toyota.buyCar();
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getFullName() {
        return this.name;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`);
    }
}
