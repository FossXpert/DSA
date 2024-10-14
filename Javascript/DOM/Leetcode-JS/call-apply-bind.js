// .call() method

const user = {
    firstName : "Rahul",
    lastName: "Ray",
}

function printName(place='dehradoon',n){
    console.log(this.firstName + " "+ this.lastName + " "+place+n+ this.ok1)
}
// user.printName();
printName.call(user)

const secondUser = {
    firstName : "suman",
    lastName: "Kumari",
    ok1: "hi",
}

//Call() method is used for function borrowing in Js

// user.printName.call(secondUser,"Varanasi","dehradoon")
printName.call(secondUser,"Varanasi","dehradoon")




// .apply() method -

// Nothing new, just the extra arguments are passed inside an Array, rather than
// nromally passing

printName.apply(secondUser,["Varanasi","Dehradoon"])


//.bind() method
// It retruns a new method which can be invoked later. above two doesn't return any method

let printMyName = printName.bind(secondUser,"Varanasi","dehradoon") 
console.log(printMyName)
// it prints a function name,rahter than actual value
//that's why you hve to call it like below();
printMyName();


