function add(a){
    console.log("a",a);
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

const ans = add(2)(3)(4)()
console.log(ans);

