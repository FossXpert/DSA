
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

const parent = document.getElementById('parent');

parent.addEventListener('click',(e)=>{
    console.log(e.target);
})