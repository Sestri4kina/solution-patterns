/**
Problem Statement

Given a set of positive numbers, determine if a subset exists 
whose sum is equal to a given number ‘S’.

Example 1: #
Input: {1, 2, 3, 7}, S=6
Output: True
The given set has a subset whose sum is '6': {1, 2, 3}

Example 2: #
Input: {1, 2, 7, 1, 5}, S=10
Output: True
The given set has a subset whose sum is '10': {1, 2, 7}

Example 3: #
Input: {1, 3, 4, 8}, S=6
Output: False
The given set does not have any subset whose sum is equal to '6'.
*/

// @ts-check

/**
 * @param {Array<number>} nums
 * @param {number} sum
 * @returns {boolean}
 */
const hasSubsetWithSum = function(nums, sum) {

    const dp = [];

    function hasSubsetWithSumRecursive(nums, sum, curIndex) {
        if (curIndex >= nums.length || sum < 0) {
            return false;
        }

        if (sum === 0) {
            return true;
        }

        dp[curIndex] = dp[curIndex] || [];

        if (dp[curIndex][sum] === undefined) {
            
            if (hasSubsetWithSumRecursive(nums, sum, curIndex + 1)) {
                dp[curIndex][sum] = true;
                return dp[curIndex][sum];
            }
    
            dp[curIndex][sum] = hasSubsetWithSumRecursive(nums, sum - nums[curIndex], curIndex + 1);
            return dp[curIndex][sum];
        }

        
    }

    return hasSubsetWithSumRecursive(nums, sum, 0);
}

console.log(hasSubsetWithSum([1, 2, 3, 7], 6) === true);
console.log(hasSubsetWithSum([1, 2, 7, 1, 5], 10) === true);
console.log(hasSubsetWithSum([1, 3, 4, 8], 6) === false);
