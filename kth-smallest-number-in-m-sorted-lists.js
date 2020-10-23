/**
Problem Statement

Given ‘M’ sorted arrays, find the K’th smallest number among all the arrays.

Example 1:

Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4], K=5
Output: 4
Explanation: The 5th smallest number among all the arrays is 4, 
this can be verified from the merged 
list of all the arrays: [1, 2, 3, 3, 4, 6, 6, 7, 8]

Example 2:

Input: L1=[5, 8, 9], L2=[1, 7], K=3
Output: 7
Explanation: The 3rd smallest number among all the arrays is 7.
*/

// @ts-check
const MinHeap = require('./min-heap.js');

/**
 * 
 * @param {Array<Array<number>>} lists 
 * @param {number} k
 * @returns {number}
 */
const findKthSmallest = function(lists, k) {
    let heap = new MinHeap();
    // key: number (value from list), value: array of list's indexes
    let curValuesListIndexes = {};
    // key: index of list in lists, value: last element's index added to heap 
    let elementInListIndex = {};
    
    lists.forEach((list, i) => {
        let cur = list[0];
        heap.insert(cur);
        elementInListIndex[i] = 0;

        if (curValuesListIndexes[cur] === undefined) {
            curValuesListIndexes[cur] = [i];
        } else {
            curValuesListIndexes[cur].push(i);
        }
    });


    while (k !== 1) {
        const min = heap.removeMin();
        const listIndex = curValuesListIndexes[min][0];
        const elementIndex = elementInListIndex[listIndex] + 1;

        curValuesListIndexes[min].splice(0, 1);
        elementInListIndex[listIndex] += 1;

        if (elementIndex < lists[listIndex].length) {
            const element = lists[listIndex][elementIndex];
            heap.insert(element);

            if (curValuesListIndexes[element] === undefined) {
                curValuesListIndexes[element] = [listIndex];
            } else {
                curValuesListIndexes[element].push(listIndex);
            }
        }
       
        k--;
    }

    return heap.removeMin();
};
  
console.log(findKthSmallest([[2, 6, 8], [3, 6, 7], [1, 3, 4]], 5) === 4);
