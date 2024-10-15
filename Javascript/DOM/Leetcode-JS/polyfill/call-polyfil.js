// Here first we see how the call() methods works
//https://youtu.be/K7Ur441AFy4?si=MibM6Vh2OPxKyuUn

const userName = {
    firstName: 'Rahul',
    lastName: 'Rai',
    job: 'Y',
    company: 'Infosys'
}

function getUserData(smart,hardWorking){
    console.log(this.firstName + " " + this.lastName + " " + `who works in ${this.company}, He is ` + smart + ` and ${hardWorking} ` +"guy")
}

getUserData.call(userName,'smart','powerfull');

//We have to create polyfill for that.
//here is the polyfill for call()

Function.prototype.myCall = function(obj={} , ...args){
    
    if(typeof this !== 'function'){
        throw new Error("Not a callable function"  )
    }
    
    obj.fn = this;
    obj.fn(...args)
}

getUserData.myCall(userName,'smart','powerfull');



//here is the polyfill for apply()

Function.prototype.myApply = function(obj={}, arg = []){

    if(!Array.isArray(arg)){
        throw new Error("CreateListFrom Array like called on object")
    }
    obj.fn = this;
    obj.fn(...arg);
}
getUserData.myApply(userName,['smart','powerfull']);
