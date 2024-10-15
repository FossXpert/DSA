//.bind() polyfill (Write this in interview) watch Akshay Saini Video


//Normal .bind() working syntax

const userName = {
    firstName: 'Rahul',
    lastName: 'Ray',
    job: 'Y',
    company: 'Infosys'
}

function getDetails(smart, hardworking) {
    console.log(this.firstName + " " + this.lastName + " " + `who works in ${this.company}, He is ` + smart + " " + hardWorking+" guy")
}

let getUser = getDetails.bind(userName, 'smart', 'hardWorking');
console.log(getUser)
getUser()



// Now we have to implement a custom myBind() method who works exactly like .bind()


let getCustomUser = getDetails.myBind(userName);

Function.prototype.myBind = function (...args) {
    let obj = args[0]
    return function () {
        
    }
}



