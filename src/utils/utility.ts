//Pick
interface Person1 {
    names:string;
    email?:string;
    contactNo:string;
}

//Pick a single element from an interface
type email = Pick<Person1, "email"| "contactNo">

//Omit a single element
// type Name = Omit<Person1,"names">

//Partial and required
//Partial ===> to make all the property optional
type optional=Partial<Person>
//Required property
type RequiredType = Required<Person1>;

const person:Readonly <Person1> = {
    names: "Person",
    email:"abb@gmail.com",
    contactNo:'1313'
}

// person.names= 'r3t'

//Record Type
// type myObj = {
//     a:string;
//     b:string;
//     c:string
// }

//Index signature
// type myObj = {
//     [key:string]:string
// }

//Record type
type myObj = Record<'a'|'b'|'c',string>;

const obj = {
    a:"1",
    b:"2",
    c:'3'
}