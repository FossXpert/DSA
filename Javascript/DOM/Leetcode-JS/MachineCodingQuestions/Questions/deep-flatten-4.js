


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


function flatObject2(input) {
    const result = []
    const parentKey = ''
    //recursive function
    function makeFlat(input, parentKey) {
        console.log("typeof input : ", typeof input);
        console.log("input : ", input);
        if (typeof input !== 'object' || input === null) {
            console.log('input is :', input);
            return input;
        }
        for (const key in input) {
            let val = input[key];
            let fullKey = parentKey ? (Array.isArray(input) ? (parentKey + '[' + key + ']') : (parentKey + '.' + key)) : key;

            console.log("parentKey : ", parentKey);
            console.log("FullKey : ", fullKey);
            console.log("type of val : ", typeof val);
            console.log('val', val);

            if (typeof val === 'object' && val !== null) {
                makeFlat(val, fullKey);
            }
            else {
                result[fullKey] = val;
            }
        }
    }
    makeFlat(input, parentKey);
    return result;
}
console.log(flatObject2(obj));

// Ans : 
// {
//     "a": 1,
//     "b.c": 2,
//     "b.d.e": 3,
//     "b.d.f.g": 4,
//     "b.d.f.h[0]": 5,
//     "b.d.f.h[1]": 6,
//     "b.d.f.h[2][0]": 7,
//     "b.d.f.h[2][1]": 8,
//     "i.j.k.l": 9,
//     "m[0]": 10,
//     "m[1]": 11,
//     "m[2].n": 12
//   }
  