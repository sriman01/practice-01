"use strict";
/** Interfaces are typically used to define the structure of an object.
 * They describe the shape that an object should have.
   Interfaces can be extended by other interfaces to create complex object shapes or inheritance-like structures.
   Interfaces can also be implemented by classes,
   providing a way to enforce that a class has certain properties and methods. */
class Developer {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
}
