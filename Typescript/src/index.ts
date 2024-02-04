/** type annotations : are expressed by using a colon followed by the desired type after variable */

// @ts-ignore
let name:string = "sriman"



/** Interface  */
interface Person{
    fname: string;
    lname: string;
}


let person1 : Person = {
    fname: "Srimam",
    lname: "Kumar"
}

console.log(person1.fname+" "+person1.lname);

/** function call signature : refers to the declaration or definition of a function which include name parameer and return type */
function func(a:number):number{
    console.log(a)
    return 10;
}

func(222);

const greet:(mes:string) => void = (mes:string):void => {
    console.log("Arrow fucntion");
}

greet("hello")

/** type alias */

type Student = {
    name : string;
    age : number;
    address?: {city : string; country:string}  //optional
}

let student:Student = {
    name : 'sriman',
    age : 18
}

console.log(student)


/** union (|) and intersection (&)  */

type Employee = {
    name : string;
    age : number;
}

type Manager = {
    name : string;
    position : string;
}

let person3 : Employee & Manager = {
    name : 'sriman',
    age : 21,
    position: "manager"
}

console.log(person3)

/** Generics   */

type Wrapped<T> = { value : T}

let wrap1 = {
    value : "sriman"
}
let wrap2 = {
    value : 18
}

console.log(typeof wrap1.value)
console.log(typeof wrap2.value)


/**  */

type Stu = {
    name : string;
    age : number;
}
//partial makes the values optional

// Required changes all the properties in an object to be required.

let stu1 : Partial<Stu> = {
    name : 'sriman'
}

console.log(stu1.name)


// Record is a shortcut to defining an object type with a specific key type and value type.

let stu2: Record<string, number> = {
    'alice' : 1
}

// Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
interface Pers {
    name: string;
    age: number;
  }
  const pers: Readonly<Pers> = {
    name: "Dylan",
    age: 35,
  };
//   pers.name = 'Israel';  // error


/************************* */

// When used on an object type with explicit keys, keyof creates a union type with those keys.


interface cos<T>{
     name : string;
     age : number;
     class : T;
}

type shop = keyof(cos<number>)


let per5 : cos<number> = {
    name : "sriman",
    age : 5,
    class : 5
}



