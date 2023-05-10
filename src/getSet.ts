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
//     //Getter
//     get getAge():number{
//         return this.age;
//     }
//     //Setter
//     set setAge(age:number){
//         this.age = this.age+age;
//     }
// }

// class Admin extends User {
//     getAdmin(){
//        console.log(`This is ${this.status}`);
//     }
// }


// //Create a object instance
// const user1 = new User('imran',22,23234,true);

// console.log(user1.getAge);


// class Person {
//     private _name: string;
//     private _age: number;

//     get name(): string {
//         return this._name;
//     }

//     set name(value: string) {
//         // Additional validation or logic can be added here
//         this._name = value;
//     }

//     get age(): number {
//         return this._age;
//     }

//     set age(value: number) {
//         if (value >= 0) {
//             this._age = value;
//         } else {
//             throw new Error("Age cannot be negative");
//         }
//     }
// }