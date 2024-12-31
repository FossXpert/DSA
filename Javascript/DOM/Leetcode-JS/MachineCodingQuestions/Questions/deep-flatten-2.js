  // Example usage
  //Deep Flatten DEALS WITH THE Objects
  const objj = { a: 1, b: { c: 2, d: { e: 3, f: 4 } }, g: 5, h: { i: { j: 6 } } };
  // console.log("L",flatObject1(obj));
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: {
          g: 4,
          h: [5, 6, [7, 8]]
        }
      }
    },
    i: {
      j: {
        k: {
          l: 9
        }
      }
    },
    m: [10, 11, { n: 12 }]
  };

  
  function flatObject1(input,parentKey = '',result={}){
    
    if(typeof input !== 'object' || input === null){
      return input;
    }
    for (const key in input){
      const val = input[key];
      const fullKey = parentKey ? `${parentKey}.${key}` : key;
      if(typeof val === 'object' && val !== null){
          flatObject1(val,fullKey,result);
      }else{
        result[fullKey] = val; 
      }
    }
    return result;
  }


// My answer

// a:1,
// b.c : 2,
// b.d.e:3
// b.d.f:4,
// g:5,
// h.i.j:6,
