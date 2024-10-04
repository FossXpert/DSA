
function deepEqual(obj1,obj2){
    if(obj1 === obj2)return true;

    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' ||
         obj1 === null || obj2 === null ){
            return false;
    }

    const keys1 = obj1.keys;
    const keys2 = obj2.keys;

    if(keys1.length !== keys2.length)return false;

    
}