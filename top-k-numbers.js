/**
Problem Statement

Given an unsorted array of numbers, find the ‘K’ largest numbers in it.

Example 1:
Input: [3, 1, 5, 12, 2, 11], K = 3
Output: [5, 12, 11]

Example 2:
Input: [5, 12, 11, -1, 12], K = 3
Output: [12, 11, 12]
*/

// @ts-check
const MaxHeap = require('./max-heap.js');

/**
 * @param {Array<number>} nums 
 * @param {number} k 
 * @returns {Array<number>}
 */
const findKLargestNumbers = function(nums, k) {
    let heap = new MaxHeap();
    heap.buildHeap(nums);
    let result = [];

    for (let i = 0; i < k; i++) {
        result.push(heap.removeMax());
    }

    return result;
};

console.log(JSON.stringify(findKLargestNumbers([3, 1, 5, 12, 2, 11], 3)));
console.log(JSON.stringify(findKLargestNumbers([5, 12, 11, -1, 12], 3)));
