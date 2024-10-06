
function deepEqual(obj1,obj2){

    if(obj1 === obj2)return true;

    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null ||  obj2 === null){
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length) return false;

    // Recursively checking for keys are equal or not
    for (let keys of keys1){
        if( !keys2.includes(keys) || !deepEqual(obj1[keys],obj2[keys]) ){
            return false;
        }
    }
    return true;
}


const objA = {
    name: 'Alice',
    age: 30,
    details: { hobbies: ['reading', 'swimming'], address: { city: 'Wonderland' } }
  };
  
  const objB = {
    name: 'Alice',
    age: 30,
    details: { hobbies: ['reading', 'swimming'], address: { city: 'Wonderland' } }
  };
  
  const objC = {
    name: 'Alice',
    age: 30,
    details: { hobbies: ['reading', 'dancing'], address: { city: 'Wonderland' } }
  };
  
  console.log(deepEqual(objA, objB));  // true (deeply equal)
  console.log(deepEqual(objA, objC));  // false (different hobbies)
  
