/**
Problem Statement

Given an array of numbers sorted in ascending order, 
find the range of a given number ‘key’. 
The range of the ‘key’ will be the first and last position of the ‘key’ in the array.
Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

Example 1:
Input: [4, 6, 6, 6, 9], key = 6
Output: [1, 3]
*/

// @ts-check

/**
 * @param {Array<number>} arr 
 * @param {number} key 
 * @returns {Array<number>}
 */
function findRange(arr, key) {
    let result = [- 1, -1];
  
    result[0] = findIndex(arr, key, false);
    if (result[0] !== -1){
        result[1] = findIndex(arr, key, true);
    } 
  
    return result;
};

/**
 * @param {Array<number>} arr 
 * @param {number} key 
 * @param {boolean} findMax 
 * @returns {number}
 */
function findIndex(arr, key, findMax) {
    const length = arr.length;
    let start = 0;
    let end = length - 1;
    let middle = null;
    let index = -1;
  
    while (start <= end) {
        middle = Math.floor(start + (end - start)/2);
    
        if (key === arr[middle]) {
            index = middle;
            if (findMax) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }      
        }
  
        if (key < arr[middle]) {
            end = middle - 1;
        } else if (key > arr[middle]) {
            start = middle + 1;
        }
    }
    
    return index;
}
  
console.log(findRange([4, 6, 6, 6, 9], 6));
console.log(findRange([1, 3, 8, 10, 15], 10));
console.log(findRange([1, 3, 8, 10, 15], 12));
  