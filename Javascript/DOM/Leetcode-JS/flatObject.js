const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
    },
    k: [0, 1]
  },
  h: 5,
};
//You have to make it flat, output is below
// {
//   a: 1,
//   'b.c': 2,
//   'b.d.e': 3,
//   'b.d.f.g': 4,
//   'b.k.0': 0,
//   'b.k.1': 1,
//   h: 5
// }


function flattenObject(obj,parent){
  let result = {}

  function getFlatObject(obj,parent){
    for(let key in obj){
      let newParent = parent + key;
      let value = obj[key]
      if(typeof value === 'object'){
        getFlatObject(value,newParent+'.')
      }else{
        result[newParent] = value
      }
    }
  }
  getFlatObject(obj,parent)
  return result;
}


const ans = flattenObject(nestedObject, "");
console.log(ans)


