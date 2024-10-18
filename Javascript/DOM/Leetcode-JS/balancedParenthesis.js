const example = "{[[][][]()()]}"

function checkValidParenthesis(){
    let arr = [];
    for (let i = 0; i < example.length; i++) {
        if(example[i] === '[' || example[i] === '{' || example[i] ==='('){
            arr.push(example[i]);
        }
        else if(example[i] === ']' || example[i] === '}' || example[i] ===')'){
            if(arr.length === 0){
                console.log("Invalid Parenthesis")
                return;
            }
            if(arr[arr.length-1] === '[' || arr[arr.length-1] === '{' || arr[arr.length-1] === '('){
                arr.pop();
            }
        }
        console.log(arr)
        console.log(i)
    }
    if(arr.length ===0){
        console.log("Valid Parenthesis") 
    }
}

checkValidParenthesis();