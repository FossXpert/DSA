// All types of map question to practice

// 1. Double the Numbers (Easy)
// Write a function that takes an array of numbers and returns a new array where each number is doubled using map().


const element1 = document.getElementById('new');
element1.addEventListener('click',()=>{
    console.log('Map Section');
    const numbers = [1, 2, 3, 4, 5];
    // Output should be: [2, 4, 6, 8, 10]
    console.log(numbers.map((item) => item*2))
})

//2. Extract Specific Property from an Array of Objects (Intermediate)
// Given an array of objects representing people, use map() to return an array of their full names (concatenation of firstName and lastName).
const element2 = document.getElementById('new');
element2.addEventListener('click',()=>{
    console.log('Map Section');

    const people = [
        {firstName: 'Rahul', lastName : 'Ray'},
        {firstName: 'Ravi', lastName : 'Jyoti'},
        {firstName: 'Sarthak', lastName : 'Sinha'},
    ]

    const result =  people.map((value,index) => {
        return value.firstName + ' '+ value.lastName
    })

    console.log(result);
})

// Modify Array of Objects Based on Condition (Advanced)
// You have an array of products, where each product has a price and a discount flag. Use map() to update the price of discounted products by applying a 10% discount. The non-discounted products should remain unchanged.

const element3 = document.getElementById('new');
    element3.addEventListener('click',()=>{
        console.log('Map Section');
        const products = [
            { name: 'Laptop', price: 1000, discount: true },
            { name: 'Phone', price: 500, discount: false },
            { name: 'Tablet', price: 800, discount: true }
          ];
          // Output should be:
          // [
          //   { name: 'Laptop', price: 900, discount: true },
          //   { name: 'Phone', price: 500, discount: false },
          //   { name: 'Tablet', price: 720, discount: true }
          // ]

          const result = products.map((value,index) => {
            // return value.discount ?(value.price - value.price/10):value.price
            value.discount === true? (value.price = (value.price-(value.price)/10)): value.price
            return value;
          })


          console.log(result);
})

//5. Chain map() and filter() (Advanced)
// Given an array of numbers, use map() to return a new
//  array containing the squares of the even numbers 
// only. Use filter() first to remove odd numbers, then map() 
// to square the remaining even numbers.

const element4 = document.getElementById('new');
element4.addEventListener('click',()=>{
    console.log('Map Section');
    const numbers = [1, 2, 3, 4, 5, 6];
    // Output should be: [4, 16, 36]
    let evenNumSquares = []
    numbers.map((value,item) => {
        if(value%2===0)evenNumSquares.push(value*value);
    })
    console.log(evenNumSquares);

})
