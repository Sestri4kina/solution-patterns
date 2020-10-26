/**
Problem Statement

Given a set of positive numbers, find if we can partition it into two subsets 
such that the sum of elements in both subsets is equal.

Example 1:

Input: {1, 2, 3, 4}
Output: True
Explanation: The given set can be partitioned into two subsets with equal sum: 
{1, 4} & {2, 3}

Example 2:

Input: {1, 1, 3, 4, 7}
Output: True
Explanation: The given set can be partitioned into two subsets with equal sum: 
{1, 3, 4} & {1, 7}
*/

// @ts-check

/**
 * @param {Array<number>} nums
 * @returns {boolean}
 */
const canPartition = function(nums) {
    const sum = nums.reduce((acc, cur) => acc + cur, 0);

    if (sum % 2 !== 0) {
      return false;
    }
  
    /**
     * @param {Array<number>} nums 
     * @param {number} sum 
     * @param {number} curIndex 
     */
    function canPartionRecursive(nums, sum, curIndex) {
      if (sum === 0) {
        return true;
      }
  
      if (curIndex >= nums.length || sum < 0) {
        return false;
      }
  
      if (canPartionRecursive(nums, sum - nums[curIndex], curIndex + 1)) {
        return true;
      }
      
      return canPartionRecursive(nums, sum, curIndex + 1);
    }
  
    return canPartionRecursive(nums, sum/2, 0);
};
  
console.log(canPartition([1, 2, 3, 4]) === true);
console.log(canPartition([1, 1, 3, 4, 7]) === true);
console.log(canPartition([2, 3, 4, 6]) === false);
