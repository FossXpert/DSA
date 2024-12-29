  // Example usage
  const obj = { a: 1, b: { c: 2, d: { e: 3, f: 4 } }, g: 5, h: { i: { j: 6 } } };
  console.log("L",flatObject1(obj));
  
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