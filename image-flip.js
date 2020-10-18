/**
Problem Statement

Given a binary matrix representing an image, we want to flip the image horizontally, 
then invert it.

To flip an image horizontally means that each row of the image is reversed. 
For example, flipping [0, 1, 1] horizontally results in [1, 1, 0].

To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. 
For example, inverting [1, 1, 0] results in [0, 0, 1].

Example 1:
Input: [
  [1,0,1],
  [1,1,1],
  [0,1,1]
]
Output: [
  [0,1,0],
  [0,0,0],
  [0,0,1]
]

Explanation: First reverse each row: [[1,0,1],[1,1,1],[1,1,0]]. 
Then, invert the image: [[0,1,0],[0,0,0],[0,0,1]]
*/

// @ts-check

/**
 * @param {Array<Array<number>>} matrix 
 * @returns {Array<Array<number>>}
 */
function flipInvertImage(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let start = 0;
        let end = row.length - 1;

        while (start < end) {
            [row[start], row[end]] = [row[end], row[start]];
            start++;
            end--;
        }
    }

    return matrix.map(row => row.map(cell => cell ^ 1));
}
  
console.log(flipInvertImage([[1,0,1], [1,1,1], [0,1,1]]));
console.log(flipInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]));
