// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     get details(){
//         return this.name+" "+this.age;
//     }

//     set details(name){
//         this.name = name
//     }
// }


// class Student extends Person{
//     constructor(name, age, gender){
//         super(name, age)
//         this.gender = gender
//     }

//     get details(){
//         return this.name+" "+this.age+" "+this.gender;
//     }
// }


// let person1 = new Person("Ram", 19)

// console.log(person1.details)


// let student1 = new Student("Sriman", 20, "male")
// console.log(student1.details)


// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.details = function(){
//     return this.name+" "+this.age;
// }

// let person1 = new Person("Ram", 18)
// console.log(person1.details())


// let Person = {
//     init: function(name, age){
//         this.name = name
//         this.age = age
//     },

//     get details(){
//         return this.name+" "+this.age;
//     }
// }

// let person1 =  Object.create(Person)
// person1.init("Ram", 18)
// console.log(person1.details)



function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.gender = 'male'

Person.prototype.details = function(){
    console.log(this.name+" "+this.age)
}

let person1 = new Person("Ram", 18)

console.log(person1.details())