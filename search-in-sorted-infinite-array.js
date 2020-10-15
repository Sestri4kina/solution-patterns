/**
Problem Statement

Given an infinite sorted array (or an array with unknown size), 
find if a given number ‘key’ is present in the array. 
Write a function to return the index of the ‘key’ if it is present in the array, 
otherwise return -1.

Since it is not possible to define an array with infinite (unknown) size, 
you will be provided with an interface ArrayReader to read elements of the array. 
ArrayReader.get(index) will return the number at index; 
if the array’s size is smaller than the index, it will return Integer.MAX_VALUE.

Example 1:
Input: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], key = 16
Output: 6
Explanation: The key is present at index '6' in the array.

Example 2:
Input: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], key = 11
Output: -1
Explanation: The key is not present in the array.
*/

// @ts-check
class ArrayReader {
    /** @param {Array<number>} arr */
    constructor(arr) {
      this.arr = arr;
    }
  
    /** @param {number} index */
    get(index) {
        if (index >= this.arr.length) {
            return Number.MAX_SAFE_INTEGER;
        }
        
        return this.arr[index]
    }
  };
  
 /**
 * @param {ArrayReader} reader 
 * @param {number} key 
 * @returns {number}
 */ 
const searchInInfiniteArray = function(reader, key) {
    let start = 0;
    let end = 2;

    while (key > reader.get(end)) {
        start = end + 1;
        end *= 2;
    }

    let middle;
    while (start <= end) {
        middle = Math.floor(start + (end - start)/2);
        const middleValue = reader.get(middle)
        if (key === middleValue) {
            return middle;
        }

        if (key > middleValue) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return -1;
};
  
let reader = new ArrayReader([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]);
console.log(searchInInfiniteArray(reader, 16) === 6);
console.log(searchInInfiniteArray(reader, 11) === -1);
reader = new ArrayReader([1, 3, 8, 10, 15]);
console.log(searchInInfiniteArray(reader, 15) === 4);
console.log(searchInInfiniteArray(reader, 200) === -1);
