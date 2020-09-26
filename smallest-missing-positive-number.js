/**
Problem Statement

Given an unsorted array containing numbers, 
find the smallest missing positive number in it.
*/

// @ts-check

/**
 * @param {Array<number>} nums
 * @returns {number}
 */

const find_first_missing_positive = function(nums) {
    let i = 0;
  
    while (i < nums.length ) {
        let j = nums[i] - 1;
        // skip all the negative numbers and out of range
        if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
    }
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        return i + 1;
      }
    }
  
    return -1;
  };

console.log(find_first_missing_positive([-3,1,5,4,2]) === 3);
console.log(find_first_missing_positive([3,-2,0,1,2]) ===  4);
console.log(find_first_missing_positive([3,2,5,1]) === 4);
