/**
Problem Statement

In a non-empty array of integers, every number appears twice except for one, 
find that single number.

Example 1:
Input: 1, 4, 2, 1, 3, 2, 3
Output: 4

Example 2:
Input: 7, 9, 7
Output: 9
*/

// @ts-check

/**
 * @param {Array<number>} arr 
 * @returns {number}
 */
function findSingleNumber(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result ^= arr[i];
    }

    return result;
}
    
console.log(findSingleNumber([1, 4, 2, 1, 3, 2, 3]) === 4);
