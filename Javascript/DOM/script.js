
var a = document.querySelectorAll("h1")
a.forEach(element => {
    element.style.color = 'black'
    element.style.backgroundColor = 'teal'
    element.innerText = 'Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation'
});


// Example of event Capturing or trickling

// const parent = document.getElementById('parent')
// const parent1 = document.getElementById('parent1')
// const parent2 = document.getElementById('parent2')
// const parent3 = document.getElementById('parent3')
// const child = document.getElementById('child')

// parent.addEventListener('click',function(){
//     console.log('parent')   
// },true);
// parent1.addEventListener('click',function(){
//     console.log('parent1')   
// },true);
// parent2.addEventListener('click',function(){
//     console.log('parent2')   
// },true);
// parent3.addEventListener('click',function(){
//     console.log('parent3')   
// });
// child.addEventListener('click',function(){
//     console.log('child')   
// });

//Event delegation example

// const parent = document.getElementById('parent');

// parent.addEventListener('click',(e)=>{
   

// })


//Polyfils in Js (Call , Apply and Bind in Js)
// let printName = function(){
//     var fname = 'Rahul';
//     var lname = 'Ray';

//     console.log(this.fname + " " + this.lname);
// }


const element = document.getElementById('new');
element.addEventListener('click',()=>{
    console.log('Hi')

    // let names = {
    //     fname : 'Rishu',
    //     lname : 'Rai'
    // }
    // let printName = function(){
    //     var fname = 'Rahul';
    //     var lname = 'Ray';
    
    //     console.log(this.fname + " " + this.lname);
    // }
    // printName.call(names);

    // let multiply = function(x,y){
    //     console.log(x*y);
    // }
    
    // multiply =  multiply.bind(this,3,3);
    // multiply(4);

    // example for map function
    // Example -1 
    const number = [1,2,3,4,5,6];
    // we have to transform these number to multiply by 2
   
    const multBy2 = number.map((num,index)=>num*2);

    console.log(multBy2);

})

// Currying in Javascript


