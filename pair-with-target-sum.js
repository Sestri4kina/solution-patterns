/**
Problem Statement

Given an array of sorted numbers and a target sum, 
find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers 
(i.e. the pair) such that they add up to the given target.
*/

// @ts-check

/**
 * @param {Array<number>} arr
 * @param {number} target_sum 
 * @returns {Array<number>}
 */

const pair_with_targetsum = function(arr, target_sum) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    for (let i = 0; i < arr.length / 2 + 1; i++) {
        const curSum = arr[leftPointer] + arr[rightPointer];

        if (curSum === target_sum) {
            return [leftPointer, rightPointer];
        }
        
        if (curSum > target_sum) {
            rightPointer--;
        } else {
            leftPointer++;
        }
    }

    return [-1, -1];
}

console.log([1, 3], pair_with_targetsum([1, 2, 3, 4, 6], 6));
console.log([0, 2], pair_with_targetsum([2, 5, 9, 11], 11));
