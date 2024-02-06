
let obj1 = {
    name : "sriman",
    getName: function(age){
        console.log(this.name+" "+age)
    }
}

// function getName(){
//     console.log(this.name);
// }

let obj2 = {
    name : "sakshi"
}

Function.prototype.myCall = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this+ 'is not callable');
    }
        context.fn = this
        context.fn(...args)
    
}

Function.prototype.myApply = function(context = {}, args = []){
    if(typeof this !== 'function'){
        throw new Error(this + ' not callable')
    }

    if(!Array.isArray(args)){
        throw new TypeError("invalid arguments")
    }

    context.fn = this
    context.fn(...args)

}

Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this != 'function'){
        throw new Error(this + ' is not callable')
    }

    context.fn = this
    return function(...newArgs){
        return context.fn(...args, ...newArgs)
    }
}

obj1.getName.myApply(obj2, [8])
obj1.getName.myBind(obj2, 8)()



