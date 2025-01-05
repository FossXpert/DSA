
// Question : 88. support negative Array index in JavaScript
// https://bigfrontend.dev/problem/support-negative-Array-index


  // Example usage
  const originalArr = [1, 2, 3];
  const arr = wrap(originalArr);
  
  // Testing
  console.log(arr[0]); // 1
  console.log(arr[1]); // 2
  console.log(arr[2]); // 3
  console.log(arr[3]); // undefined
  console.log(arr[-1]); // 3
  console.log(arr[-2]); // 2
  console.log(arr[-3]); // 1
  console.log(arr[-4]); // undefined
  
  arr.push(4);
  console.log(arr[3]); // 4
  console.log(originalArr[3]); // 4
  
  arr.shift();
  console.log(arr[0]); // 2
  console.log(originalArr[0]); // 2
  
  arr.bfe = 'bfe';
  console.log(originalArr.bfe); // 'bfe'
  
  arr[-1] = 5;
  console.log(arr); // [2, 3, 5]
  console.log(originalArr); // [2, 3, 5]
  
  originalArr[2] = 6;
  console.log(arr); // [2, 3, 6]
  console.log(originalArr); // [2, 3, 6]


// Code for creating Proxy : 
// Concept used here is Javascript proxy
const target  = {
  fname : "Rahul",
  lname : "Ray",
  age : "26",
  address : "Varanasi , UP"
}

const handler = {
  get(target,prop){
    if(prop in target)return target[prop];
    else return false;
  },
  set(target,prop,value){
      if(!(prop in target)) throw new Error("Prop doesn't exist");
      target[prop] = value;
      return target;
  }
}

const proxy = new Proxy(target,handler);
console.log(proxy.fname)
console.log(proxy.lname)
proxy.fname = 'u'
console.log(proxy.fname)


// Now main question answer on BFE :

function wrap(arr) {
  const handler = {
    get(target, prop) {
      if (prop === Symbol.iterator) {
        return target[prop].bind(target)
      }
      let index = parseInt(prop);
      if (index < 0) {
        index = index + target.length;
        return target[index];
      }
      return target[prop];
    },
    set(target, prop, value) {
      let index = parseInt(prop);
      if (index < 0) {
        index = index + target.length;
        target[index] = value;
        if (index < 0) {
          throw new Error("Index is overflow")
        }

        return true;
      }

      target[prop] = value;
      return true;
    }
  }
  return new Proxy(arr, handler);
}



