/**
Problem Statement

Given a set of positive numbers, partition the set into two subsets with minimum difference 
between their subset sums.

Example 1:
Input: {1, 2, 3, 9}
Output: 3
Explanation: We can partition the given set into two subsets where minimum absolute difference 
between the sum of numbers is '3'. Following are the two subsets: {1, 2, 3} & {9}.

Example 2:
Input: {1, 2, 7, 1, 5}
Output: 0
Explanation: We can partition the given set into two subsets where minimum absolute difference 
between the sum of number is '0'. Following are the two subsets: {1, 2, 5} & {7, 1}.

Example 3:
Input: {1, 3, 100, 4}
Output: 92
Explanation: We can partition the given set into two subsets where minimum absolute difference 
between the sum of numbers is '92'. Here are the two subsets: {1, 3, 4} & {100}.
*/

// @ts-check

/**
 * @param {Array<number>} nums
 * @returns {number}
 */
let canPartition = function(nums) {

    /**
     * @param {Array<number>} nums 
     * @param {number} curIndex 
     * @param {number} sum1 
     * @param {number} sum2 
     */
    function canPartitionRecursive(nums, curIndex, sum1, sum2) {
        if (curIndex === nums.length) {
            return Math.abs(sum1 - sum2);
        }

        const diff1 = canPartitionRecursive(nums, curIndex + 1, sum1 + nums[curIndex], sum2);
        const diff2 = canPartitionRecursive(nums, curIndex + 1, sum1, sum2 + nums[curIndex]);

        return Math.min(diff1, diff2);
    }

    return canPartitionRecursive(nums, 0, 0, 0);
}

console.log(canPartition([1, 2, 3, 9]) === 3);
console.log(canPartition([1, 2, 7, 1, 5]) === 0);
console.log(canPartition([1, 3, 100, 4]) === 92);
