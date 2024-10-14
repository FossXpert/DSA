
// Implement array flat function.

const arr = [1, [2, 3], [4, [5, 6]], [7, [8, [9, 10]]]];

console.log(arr.flat(3))



function customFlatArray(arr,depth=1){

    let result = []
    arr.forEach(element => {
        if(Array.isArray(element) === true && depth >0){
            result  = result.concat(customFlatArray(element,depth-1))
            console.log("resulthere",result);
        }else{
            result.push(element);
            console.log("result1",result)
        }
    });

    return result;

}

console.log(customFlatArray(arr,3))