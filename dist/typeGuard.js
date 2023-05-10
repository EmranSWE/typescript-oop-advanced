"use strict";
function add(param1, param2) {
    if (typeof param1 == 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
add(1, "2");
function getUser(user) {
    if ('role' in user) {
        return `I am admin user`;
    }
    else {
        return `I am normal user`;
    }
}
console.log(getUser({ name: "imran", role: "admin" }));
//instanceof guard
class Animal {
    makeSound() {
        console.log("Animal makes a sound.");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}
function playSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.makeSound();
    }
}
const animal = new Animal();
const dog = new Dog();
playSound(animal); // Output: Animal makes a sound.
playSound(dog); // Output: Woof! Woof!
