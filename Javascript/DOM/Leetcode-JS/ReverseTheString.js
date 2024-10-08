//Reverse the string without reversing special char


// Here's an example for you:

// Input: a,b$c

// Expected Output: c,b$a

// Sure! Here's a slightly longer example for you:

// Input: a!!!b.c,d@ef#

// Expected Output: f!!!e.d,c@ba#

function isAlphabet(char){
    if(!char)return false;
    let a = char.charCodeAt(0);
    if((a >=65 && a<=90) || (a>=97 && a<=122)){
        return true
    }
    return false;
}

//remeber Strings are immutable u cannot change them, that's why u have to convert them in array

function reverseString(a){
    const n = a.length;
    const arr = a.split('');
    for(let i=0,j=n-1;i<j;){
        console.log(i)
        if(isAlphabet(arr[i]) === true && isAlphabet(arr[j]) === true){
            let temp = arr[i];
            console.log(temp,arr[i],arr[j])
            arr[i] = arr[j]
            arr[j] = temp

            console.log(temp,arr[i],arr[j])
            i++;
            j--;
        }
        else if(isAlphabet(arr[i]) === false && isAlphabet(arr[j]) === true){
            i++;
        }
        else if(isAlphabet(arr[i]) === true && isAlphabet(arr[j]) === false){
            j--;
        }
        else {
            i++,j--;
        }
    }

    return arr.join('');
}

k = 'a!!!b.c,d@ef#';
console.log(reverseString(k))
console.log("Hi")