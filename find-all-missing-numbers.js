/**
Problem Statement

We are given an unsorted array containing numbers taken from the range 1 to ‘n’. 
The array can have duplicates, 
which means some numbers will be missing. Find all those missing numbers.
*/

// @ts-check

/**
 * @param {Array<number>} nums
 * @returns {Array<number>}
 */

const find_missing_numbers = function(nums) {
    let missingNumbers = [];

    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;

        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i+1) {
            missingNumbers.push(i+1);
        }
    }
    
    return missingNumbers;
};

console.log(find_missing_numbers([2,3,1,8,2,3,5,1]));
console.log(find_missing_numbers([2,4,1,2]));
console.log(find_missing_numbers([2,3,2,1]));
