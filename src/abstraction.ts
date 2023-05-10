//Abstraction using interface
// interface IVehicle{
//    startEngine():void;
//    stopEngine():void;
//    move():void;
// }

//Implement keywords
// class Vehicle implements IVehicle {
//     constructor(
//         public name:string,
//         public brand:string,
//         public model:number
//     ){}
//     startEngine(): void {
//         console.log('Im starting engine')!
//     };
//     stopEngine(): void {
//         console.log('Im stop engine')!   
//     }
//     move(): void {
//         console.log('Im move engine')!  
//     }
//     test(){
//         console.log('I am for testing')
//     }
// };

// const vehicle1 = new Vehicle("car","mobile",32023);


//abstract class
abstract class Cars {
    constructor(
        public name:string,
        public brand:string,
        public model:number
    ){}
   abstract startEngine(): void 
   abstract stopEngine(): void 
   abstract move(): void 
    test(){
        console.log('I am for testing')
    }
}

class CarChild extends Cars{
    startEngine(): void {
        
    }
    stopEngine(): void {
        
    }
    move(): void {
        
    }
}
const car1= new Car("abc","red",'2000');
