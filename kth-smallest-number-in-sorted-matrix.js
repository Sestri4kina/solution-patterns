/**
Problem Statement

Given an N*N matrix where each row and column is sorted in ascending order, 
find the Kth smallest element in the matrix.

Example 1:

Input: Matrix=[
    [2, 6, 8], 
    [3, 7, 10],
    [5, 8, 11]
  ], 
  K=5
Output: 7
Explanation: The 5th smallest number in the matrix is 7.
*/

// @ts-check
const MinHeap = require('./min-heap.js');

/**
 * 
 * @param {Array<Array<number>>} matrix 
 * @param {number} k
 * @returns {number}
 */
const findKthSmallest = function(matrix, k) {
    const size = matrix.length;
    let heap = new MinHeap();
    matrix.forEach(row => {heap.insert( row[0])});

    let curColumn = 1;
    let curRow = 0;

    while (k !== 1) {
        heap.removeMin();
        heap.insert( matrix[curRow][curColumn]);

        if (curRow + 1 < size) {
            curRow++;
        } else {
            curRow = 0;
            curColumn++; 
        }
        k--;
    }

    return heap.removeMin();
};
      
console.log(findKthSmallest([[2, 6, 8], [3, 7, 10], [5, 8, 11]], 5) === 7);
