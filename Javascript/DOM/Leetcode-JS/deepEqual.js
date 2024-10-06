function deepEqual(obj1, obj2) {
    // If both are strictly equal (covers primitives and reference equality)
    if (obj1 === obj2) return true;
    
    // If one is not an object, or either is null, they are not equal
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
      return false;
    }
  
    // Check if both objects have the same number of properties
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
  
    // Recursively check each property
    for (let key of keys1) {
      // Check if both objects have the same property and recursively check equality
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
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
  
