/**
Problem Statement

Given ‘N’ ropes with different lengths, we need to connect these ropes into one big rope with minimum cost. 
The cost of connecting two ropes is equal to the sum of their lengths.

Example 1:
Input: [1, 3, 11, 5]
Output: 33
Explanation: First connect 1+3(=4), then 4+5(=9), and then 9+11(=20). So the total cost is 33 (4+9+20)

Example 2:
Input: [3, 4, 5, 6]
Output: 36
Explanation: First connect 3+4(=7), then 5+6(=11), 7+11(=18). Total cost is 36 (7+11+18)
*/

// @ts-check
const MinHeap = require('./min-heap.js');

/**
 * @param {Array<number>} ropeLengths 
 * @returns {number}
 */
const connectRopesWithMinimumCost = function(ropeLengths) {
    let result = 0;
    const heap = new MinHeap();
    heap.buildHeap(ropeLengths);

    while (heap.elements > 1) {
        const min = heap.removeMin() + heap.removeMin();
        result += min;
        heap.insert(min);
    }

   return result;
};
  
console.log(connectRopesWithMinimumCost([1, 3, 11, 5]) === 33);
console.log(connectRopesWithMinimumCost([3, 4, 5, 6]) === 36);
console.log(connectRopesWithMinimumCost([1, 3, 11, 5, 2]) === 42);
