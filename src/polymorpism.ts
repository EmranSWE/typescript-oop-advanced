//Core concept of OOP ,
//Poly means Many and Morph is mean Rup;
class Persons{
    takeWalk():void{
        console.log("Person walking 2 Hour per day")
    }
};
class Student extends Persons{
    takeWalk(): void {
        console.log("Student walking 5 hours a day")
    }
}

class Dev extends Persons{
    takeWalk(): void {
        console.log("Developer walking 3 hours per day")
    }
};

//Polymorphism function 

function getWalk(param:Persons){
    param.takeWalk();
}

const person1 =  new Persons();
const person2 =  new Student();
const person3 =  new Dev();
getWalk(person1)
getWalk(person2)
getWalk(person3)


class Shape{
    getArea(){

    }
};
// area->pi*r*r
class Circle extends Shape{
     radius:number;
    constructor(radius:number){
        super()
        this.radius=radius;
    }

    getArea(): number {
       return Math.PI*this.radius*this.radius 
    }
};


class Rectangle extends Shape{
    height:number;
    width:number;
    constructor(height:number, width:number){
        super();
        this.height=height;
        this.width=width;
    }

    getArea():number{
        return this.width*this.height;
    }
};


function getAreaOfShape(param:Shape){
    console.log(param.getArea())
};

getAreaOfShape(new Circle(10))
getAreaOfShape(new Rectangle(10,12))