// 2610. Convert an Array Into a 2D Array With Conditions



// You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:

// The 2D array should contain only the elements of the array nums.
// Each row in the 2D array contains distinct integers.
// The number of rows in the 2D array should be minimal.
// Return the resulting array. If there are multiple answers, return any of them.

// Note that the 2D array can have a different number of elements on each row.


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let map = new Map();
    let array = [];
    
    // Iterate over each number in the input array
    for (let num of nums) {
        let placed = false;
        
        // Try to place the number in an existing row
        for (let i = 0; i < array.length; i++) {
            if (!array[i].includes(num)) {
                array[i].push(num);
                placed = true;
                break;
            }
        }
        
        // If the number could not be placed in an existing row, create a new row
        if (!placed) {
            array.push([num]);
        }
    }
    
    return array;
};

// Example usage
console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]));  // Output: [[1, 3, 4, 2], [1, 3], [1]]
console.log(findMatrix([1, 2, 3, 4]));  // Output: [[1, 2, 3, 4]]
