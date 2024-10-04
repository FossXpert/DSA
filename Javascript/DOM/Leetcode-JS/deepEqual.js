
function deepEqual(obj1,obj2){
    if(obj1 === obj2)return true;

    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' ||
         obj1 === null || obj2 === null ){
            return false;
    }

    // Check if both objects have the same number of properties
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length)return false;

    // Recursively check each property
    for(let key of keys1 ) {
    // Check if both objects have the same property and recursively check equality
        if(!keys2.includes(key) || !deepEqual(obj1[key],obj2[key])){
            return false;
        }
    }
    return true;
}