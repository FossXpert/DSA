// Polyfill for maps

const arr = [1,2,3,4,5,6]

const result = arr.map((item)=>item*2);

console.log(result);

//Now we are implementing our own polyfill

Array.prototype.myMap((cb)=>cb*2)
function myMap(){
    let result = []
    for(let i=0;i<this.length;i++){
        result.push(this[i])
    }
    return result;
}


