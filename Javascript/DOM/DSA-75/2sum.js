function twoSum(nums, target) {
    let map = {};
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (map[complement] !== undefined) {
            return [map[complement], i]; // Return the indices
        }
        
        map[nums[i]] = i;  // Store the current number with its index
    }
    
    return []; // No solution found
}

// Example Usage
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
