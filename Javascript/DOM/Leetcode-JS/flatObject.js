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


function flattenObject(obj, parent) {
  let finalObject = {}

  function getFlatObject(obj, parent){

    for (let key in obj) {
      let newParent = key + parent;
      console.log(newParent)

      let value = obj[key];
      console.log("value",value)
      if (typeof value === 'object') {
        getFlatObject(value, newParent + '.');
      } else {
        finalObject[newParent] = value;
      }
    }
  }
  getFlatObject(obj,parent);
  return finalObject;
}


const ans = flattenObject(nestedObject, "");
console.log(ans)


