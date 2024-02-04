"use strict";
/** type annotations : are expressed by using a colon followed by the desired type after variable */
// @ts-ignore
let name = "sriman";
let person1 = {
    fname: "Srimam",
    lname: "Kumar"
};
console.log(person1.fname + " " + person1.lname);
/** function call signature : refers to the declaration or definition of a function which include name parameer and return type */
function func(a) {
    console.log(a);
    return 10;
}
func(222);
const greet = (mes) => {
    console.log("Arrow fucntion");
};
greet("hello");
let student = {
    name: 'sriman',
    age: 18
};
console.log(student);
let person3 = {
    name: 'sriman',
    age: 21,
    position: "manager"
};
console.log(person3);
let wrap1 = {
    value: "sriman"
};
let wrap2 = {
    value: 18
};
console.log(typeof wrap1.value);
console.log(typeof wrap2.value);
//partial makes the values optional
// Required changes all the properties in an object to be required.
let stu1 = {
    name: 'sriman'
};
console.log(stu1.name);
// Record is a shortcut to defining an object type with a specific key type and value type.
let stu2 = {
    'alice': 1
};
const pers = {
    name: "Dylan",
    age: 35,
};
let per5 = {
    name: "sriman",
    age: 5,
    class: 5
};
