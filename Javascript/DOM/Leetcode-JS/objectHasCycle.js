// What is WeakSet?
// WeakSet is a built-in object in JavaScript that allows you to store weakly held objects. 
// A key characteristic of WeakSet is that the objects it holds are not prevented from being 
// garbage collected if there are no other references to them. Unlike a normal Set,
//  it only allows objects (no primitive values like numbers or strings) and holds them weakly, 
// meaning if the object is no longer referenced elsewhere, it can be garbage collected.


  function hasCycle(obj,seen = new WeakSet()){
    if(obj && typeof obj === 'object'){
        if(seen.has(obj)){
           return true;
        }
        seen.add(obj);
        // Recursively check for cycles in nested objects
        for(let key in obj){
            if(obj.hasOwnProperty(key) && hasCycle(obj[key],seen)) {
                return true;
            }
        }
    }
    return false;
  }
  
// Test cases
const obj1 = {
    a: 1,
    b: {
      c: 2,
      d: 3
    }
  };
  console.log(hasCycle(obj1));  // Output: false (No cycle)
  
  const obj2 = { a: 1 };
  obj2.b = obj2;  // Circular reference
  console.log(hasCycle(obj2));  // Output: true (Cycle detected)

