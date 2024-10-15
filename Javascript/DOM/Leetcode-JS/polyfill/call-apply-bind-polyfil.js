//.bind() polyfill (Write this in interview) watch Akshay Saini Video


//Normal .bind() working syntax

const userName = {
    firstName: 'Rahul',
    lastName: 'Ray',
    job: 'Y',
    company: 'Infosys'
}

function getDetails(smart,hardWorking) {
    console.log(this.firstName + " " + this.lastName + " " + `who works in ${this.company}, He is ` + smart + ` and ${hardWorking} ` +"guy")
}

let getUser = getDetails.bind(userName, 'smart','hardWorking');
console.log(getUser);
getUser();


//Final ANswer
//First watch thisd vide 
//https://youtu.be/ke_y6z0xRpk?si=ZDNZrdTnMeiibSwd
// Now we have to implement a custom myBind() method who works exactly like .bind()

Function.prototype.myBind = function (...args) {
    let obj = this;
    let params = args.splice(1);
    console.log("params",params);
    return function (...args2) {
        // ..args2 are those arguments which are being passed directly from getUser2()
        let combineArgs = [...params,...args2] //using ES6 Syntax, It creates a larger array
        let combineArgs1 = params.concat(...args2) // using normal concat method
        obj.apply(args[0],combineArgs1);
    }
}

let getUser2 = getDetails.myBind(userName,'Smart');
getUser2("Nice");



// Practice
Function.prototype.mybind = function(...args){
    let obj = this;
    let param = args.splice(1);
    return function(...args2){
        obj.apply(args[0],[...param,...args2])
    }
}


let getUser3 = getDetails.mybind(userName,'Smart');
getUser2("Nice");



