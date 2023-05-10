"use strict";
//Core concept of OOP ,
//Poly means Many and Morph is mean Rup;
class Persons {
    takeWalk() {
        console.log("Person walking 2 Hour per day");
    }
}
;
class Student extends Persons {
    takeWalk() {
        console.log("Student walking 5 hours a day");
    }
}
class Dev extends Persons {
    takeWalk() {
        console.log("Developer walking 3 hours per day");
    }
}
;
//Polymorphism function 
function getWalk(param) {
    param.takeWalk();
}
const person1 = new Persons();
const person2 = new Student();
const person3 = new Dev();
getWalk(person1);
getWalk(person2);
getWalk(person3);
class Shape {
    getArea() {
    }
}
;
// area->pi*r*r
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
;
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.width * this.height;
    }
}
;
function getAreaOfShape(param) {
    console.log(param.getArea());
}
;
getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 12));
