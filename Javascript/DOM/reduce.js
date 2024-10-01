// 1. Sum of Numbers (Easy)
// Write a function that uses reduce() to return the sum of all numbers in an arra



const element5 = document.getElementById('new');
element5.addEventListener('click',()=>{
    console.log('Map Section');
    const numbers = [1, 2, 3, 4, 5];
    // Output should be: 15

    function callBackfn(accumulator,currentValue){
        if(currentValue>accumulator){
            accumulator = currentValue;
        }
        return accumulator;
    }
    console.log(numbers.reduce(callBackfn,0));
})

// 3. Flatten a 2D Array (Intermediate)
// Write a function that uses reduce() to flatten a 2D array (an array of arrays) into a single array.

const element6 = document.getElementById('new');
element6.addEventListener('click',()=>{
    console.log('Map Section');
    const arrays = [[1, 2], [3, 4], [5]];
    // Output should be: [1, 2, 3, 4, 5]

    let newArr = []
    arrays.reduce((acc,curr)=>{
        curr.map((value,index)=>{
            newArr.push(value)
        })
    },[])

    console.log(newArr);
})

// 4. Count Occurrences of Elements (Advanced)
// You are given an array of strings. Use reduce() to return an object that counts how many times each string occurs in the array.

const element7 = document.getElementById('new');
element7.addEventListener('click',()=>{
    console.log('Map Section');

    const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
    // Output should be: { apple: 3, banana: 2, orange: 1 }

    fruits.reduce((acc,curr)=>{
        
    },0)


})