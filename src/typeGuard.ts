//There are several ways of typeguard: '''typeof|instanceOf|user defined|in '''
type Alphanumeric= string | number;

function add(param1:Alphanumeric,param2:Alphanumeric){
    if(typeof param1== 'number' && typeof param2==='number'){
        return param1+param2;
    }
    else{
        return param1.toString()+param2.toString()
    }
}
add(1,"2");


//In guard
type NormalUSer= {
    name:string
}
type AdminUSer= {
    name:string,
    role:"admin"
}
function getUser (user:NormalUSer|AdminUSer){
    if('role' in user){
        return `I am admin user`
    }
    else{
        return `I am normal user`
    }
}

console.log(getUser({name:"imran",role:"admin"}));

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
  
  function playSound(animal: Animal) {
    if (animal instanceof Dog) {
      animal.bark();
    } else {
      animal.makeSound();
    }
  }
  
  const animal = new Animal();
  const dog = new Dog();
  
  playSound(animal); // Output: Animal makes a sound.
  playSound(dog); // Output: Woof! Woof!