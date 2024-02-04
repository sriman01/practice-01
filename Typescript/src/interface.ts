/** Interfaces are typically used to define the structure of an object. 
 * They describe the shape that an object should have.
   Interfaces can be extended by other interfaces to create complex object shapes or inheritance-like structures.
   Interfaces can also be implemented by classes, 
   providing a way to enforce that a class has certain properties and methods. */

interface Per {
    name: string;
    age: number;
}

interface Emp extends Per {
    position: string;
}

class Developer implements Emp {
    name: string;
    age: number;
    position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
}


/** type aliasing : Type aliases, on the other hand, allow you to create a name for any type, 
 * including primitive types, union types, intersection types, and object types.
   They are useful for creating complex types or reusing existing types in a concise manner.
   Type aliases support union types, intersection types, and mapped types, 
   which allows for more flexibility in defining types.
  */

type Point = {
    x: number;
    y: number;
};

type Action = 'read' | 'write' | 'delete';

type Result<T> = {
    success: boolean;
    data: T;
};
