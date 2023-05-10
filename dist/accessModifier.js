"use strict";
// // Public: The default access modifier in TypeScript is public, which means that variables, methods, and classes are accessible from anywhere.
// class User {
//     //Property: By default property will be public
//     // public name:string;
//     // public age:number;
//     // public password:number;
//     public name : string;
//     private age : number; //Only accessible for the single class
//     protected password : number;
//     readonly status:Boolean;
//     // Declare constructor
//     constructor(name:string, age:number, password:number,status:Boolean){
//         this.name = name;
//         this.age = age;
//         this.password = password;
//         this.status=status;
//     }
//     //Method is a special type of function
//     getUserDetails(){
//         console.log(`The user name is ${this.name} age ${this.age} `)
//     }
// }
// class Admin extends User {
//     getAdmin(){
//        console.log(`This is ${this.status}`);
//     }
// }
// //Create a object instance
// const user1 = new User('imran',22,23234,true);
// user1.getUserDetails();
// // user1.age=200; In private mode we cannot changed the value
// const admin = new Admin('imran',20,1233,true);
// // admin.status=false cannot changed because the property is readonly\
// admin.getAdmin()
