/**
Problem Statement

We are given an array containing ‘n’ distinct numbers 
taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of 
the total ‘n+1’ numbers, find the missing number.
*/

// @ts-check

/**
 * @param {Array<number>} nums
 * @returns {number}
 */

const find_missing_number = function(nums) {
    // sort nums
    let i = 0;
    let n = nums.length;

    while (i < n) {
        let j = nums[i];

        if (j < n && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
    }

    // find number not coinciding with its index
    for (let i = 0; i< n; i++) {
        if (i !== nums[i]) {
            return i;
        } 
    }
};

console.log(find_missing_number([4, 0, 3, 1]) === 2);
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]) === 7);
