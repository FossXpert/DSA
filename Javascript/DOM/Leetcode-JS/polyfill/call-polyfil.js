// Here first we see how the call() methods works

const userName = {
    firstName: 'Rahul',
    lastName: 'Rai',
    job: 'Y',
    company: 'Infosys'
}

function getUserData(smart,hardWorking){
    console.log(this.firstName + " " + this.lastName + " " + `who works in ${this.company}, He is ` + smart + ` and ${hardWorking} ` +"guy")
}

getUserData.call(userName);

//We have to create polyfill for that.




