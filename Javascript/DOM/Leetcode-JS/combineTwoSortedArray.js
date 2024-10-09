let array1 = [100, 200, 300];
let array2 = [50, 150, 250, 350];

// After combining: [50, 100, 150, 200, 250, 300, 350]

function sortedArray(){
    let result = []

    let n = array1.length;
    let m = array2.length;

    let i=0,j=0;
    for (i=0,j=0;i<n && j<m;){

        if(array1[i]<array2[j]){
            result.push(array1[i]);
            i++;
        }else{
            result.push(array2[j]);
            j++;
        }
    }

    while(i<n)result.push(array1[i]),i++;
    while(j<m)result.push(array2[j]),j++;
    return result;

}

let combinedArray = sortedArray(array1, array2);
console.log(combinedArray); // Output: [50, 100, 150, 200, 250, 300, 350]
