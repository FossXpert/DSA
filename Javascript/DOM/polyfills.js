// Polyfill for maps

const arr = [1,2,3,4,5,6]

const result = arr.map((item)=>item*2);

console.log(result);

//Now we are implementing our own polyfill

Array.prototype.myMap = function(cb){
    let result = []
    for(let i=0;i<this.length;i++){
        result.push(cb(this[i]));
    }
    return result;
}

const res = arr.myMap((item) => item*2)
console.log(res);


// Polyfill for Filter();

Array.prototype.myFilter = function(cb){
    let result = [];
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            result.push(this[i]);
        }
    }
    return result;
}

const res1 = arr.myFilter((item) => item%2 ===0)
console.log(res1)

// Polyfill for reduce()

Array.prototype.myReduce = function(cb,initialValue){
    let acc = initialValue;
    console.log(acc)
    console.log(this)
    for (let i = 0; i < this.length; i++) {
        acc = cb(this[i] , acc);
    }
    return acc;
}

const res2 = arr.myReduce((acc,num) => acc+ num,0);

console.log(res2)