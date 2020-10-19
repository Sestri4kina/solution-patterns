/**
Problem Statement

Given an unsorted array of numbers, find Kth smallest number in it.

Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.

Example 1:
Input: [1, 5, 12, 2, 11, 5], K = 3
Output: 5
Explanation: The 3rd smallest number is '5', as the first two smaller numbers are [1, 2].

Example 2:
Input: [1, 5, 12, 2, 11, 5], K = 4
Output: 5
Explanation: The 4th smallest number is '5', as the first three small numbers are [1, 2, 5].
*/

// @ts-check
const MinHeap = require('./min-heap.js');

/**
 * @param {Array<number>} nums 
 * @param {number} k 
 * @returns {number}
 */
const findKthSmallestNumber = function(nums, k) {
    let heap = new  MinHeap();
    heap.buildHeap(nums);

    for (let i = 0; i < k - 1; i++) {
        heap.removeMin();
    }

    return heap.getMin();
};
  
console.log(findKthSmallestNumber([1, 5, 12, 2, 11, 5], 3) === 5);
console.log(findKthSmallestNumber([1, 5, 12, 2, 11, 5], 4) === 5);
console.log(findKthSmallestNumber([5, 12, 11, -1, 12], 3) === 11);
