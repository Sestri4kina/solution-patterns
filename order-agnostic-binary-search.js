/**
Problem Statement

Given a sorted array of numbers, find if a given number ‘key’ is 
present in the array. Though we know that the array is sorted, 
we don’t know if it’s sorted in ascending or descending order. You should assume 
that the array can have duplicates.

Write a function to return the index of the ‘key’ if it is present in the array, 
otherwise return -1.

Example 1:
Input: [4, 6, 10], key = 10
Output: 2

Example 2:
Input: [1, 2, 3, 4, 5, 6, 7], key = 5
Output: 4
*/

// @ts-check

/**
 * 
 * @param {Array<number>} arr 
 * @param {number} key 
 * @returns {number}
 */
const binarySearch = function(arr, key) {
    const length = arr.length;
    let start = 0;
    let end = length - 1;
    const direction = arr[start] > arr[end] ? -1 : 1;
    let middle = Math.floor(start + (end - start)/2);
    
    while (middle !== 0 || middle !== length - 1) {
        if (arr[middle] === key) {
            return middle;
        }
        
        if (key > arr[middle]) {
            switch (direction) {
                case 1:
                    start = middle + 1;
                    break;
                case -1:
                    end = middle - 1;
                    break;
            }
        } else {
            switch (direction) {
                case 1:
                    end = middle - 1;
                    break;
                case -1:
                    start = middle + 1;
                    break;
            }
        }

        middle = Math.floor(0.5*(start + end));
    }

    return -1;
};
  
console.log(binarySearch([4, 6, 10], 10) === 2);
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5) === 4);
console.log(binarySearch([10, 6, 4], 10) === 0);
console.log(binarySearch([10, 6, 4], 4) === 2);
