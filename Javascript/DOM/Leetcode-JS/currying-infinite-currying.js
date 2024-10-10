function add(a){
    
    let sum = a;

    function inner(b){
        sum += b;
        return inner; 
    }

    inner.valueOf = function(){
        return sum; 
    }
    return inner;
}

const ans = add(2)(3)(4)(3)(6)(7)(8)(9)(1)(2)(3)(4)(5)(6)
console.log(ans+0);

// Approach for interview:

