// 1. Sum of Numbers (Easy)
// Write a function that uses reduce() to return the sum of all numbers in an arra

// https://youtu.be/zdp0zrpKzIE

const element5 = document.getElementById('new');
element5.addEventListener('click', () => {
    console.log('Map Section');
    const numbers = [1, 2, 3, 4, 5];
    // Output should be: 15

    function callBackfn(accumulator, currentValue) {
        if (currentValue > accumulator) {
            accumulator = currentValue;
        }
        return accumulator;
    }
    console.log(numbers.reduce(callBackfn, 0));
})

// 3. Flatten a 2D Array (Intermediate)
// Write a function that uses reduce() to flatten a 2D array (an array of arrays) into a single array.

const element6 = document.getElementById('new');
element6.addEventListener('click', () => {
    console.log('Map Section');
    const arrays = [[1, 2], [3, 4], [5]];
    // Output should be: [1, 2, 3, 4, 5]

    let result = arrays.reduce((acc, curr) => {
        curr.map((value, index) => {
            acc.push(value)
        })
        return acc;
    }, []);

    console.log(result);
})

// 4. Count Occurrences of Elements (Advanced)
// You are given an array of strings. Use reduce() to return an object that counts how many times each string occurs in the array.

const element7 = document.getElementById('new');
element7.addEventListener('click', () => {
    console.log('Map Section');

    const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
    // Output should be: { apple: 3, banana: 2, orange: 1 }

    let result = fruits.reduce((acc, curr) => {
        //If the fruit exist in accumulator increase val by 1
        if (acc[curr]) {
            acc[curr]++;
        } else {
            acc[curr] = 1
        }
        return acc;
    }, {})

    console.log(result)

})
//5. Group by Property (Advanced)
// Given an array of objects representing people, use reduce() to group them by their age property.

const element8 = document.getElementById('new');
element8.addEventListener('click', () => {
    console.log('Map Section');
    const people = [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'Emily', age: 25 },
        { name: 'Mike', age: 30 }
    ];
    // Output should be:
    // {
    //   25: [{ name: 'John', age: 25 }, { name: 'Emily', age: 25 }],
    //   30: [{ name: 'Jane', age: 30 }, { name: 'Mike', age: 30 }]
    // }

    const result = people.reduce((acc,curr)=>{
        if(!acc[curr.age]){
            acc[curr.age] = []
        }
        acc[curr.age].push(curr)
        return acc;
    },{});
    console.log(result)
})
