/**
Problem Statement

Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it.

Example 1:
Input: [1, 3, 5, 12, 11, 12, 11], K = 2
Output: [12, 11]
Explanation: Both '11' and '12' apeared twice.

Example 2:
Input: [5, 12, 11, 3, 11], K = 2
Output: [11, 5] or [11, 12] or [11, 3]
Explanation: Only '11' appeared twice, all other numbers appeared once.
*/

// @ts-check
const MaxHeap = require('./max-heap.js');

/**
 * 
 * @param {Array<number>} nums 
 * @param {number} k 
 * @returns {Array<number>}
 */
const findKFrequentNumbers = function(nums, k) {
    let frequentNumbers = [];
    let frequencies = {};

    nums.forEach(num => {
        if (frequencies[num] !== undefined) {
            frequencies[num]++;
        } else {
            frequencies[num] = 1;
        }
    });

    let reverseFrequencies = {};

    Object.keys(frequencies).map(key => {
        const value = frequencies[key];
        if (reverseFrequencies[value] === undefined) {
            reverseFrequencies[value] = [key];
        }  else {
            reverseFrequencies[value].push(key);
        }
    })

    let heap = new MaxHeap();
    heap.buildHeap(Object.keys(frequencies).map(key => frequencies[key]));
    
    let j = 0;
    while (j < k) {
        const frequent = heap.removeMax();
        const numbers = reverseFrequencies[frequent];

        if (numbers.length < k - j) {
            frequentNumbers.push(...numbers);
            j += numbers.length;
        } else {
            frequentNumbers.push(...numbers.slice(0, k - j));
            j += numbers.slice(0, k - j).length;
        }
    }

    return frequentNumbers;
};
  
console.log(JSON.stringify(findKFrequentNumbers([1, 3, 5, 12, 11, 12, 11], 2)));
console.log(JSON.stringify(findKFrequentNumbers([5, 12, 11, 3, 11], 2)));
