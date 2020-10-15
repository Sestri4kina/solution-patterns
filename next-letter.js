/**
Problem Statement

Given an array of lowercase letters sorted in ascending order, 
find the smallest letter in the given array greater than a given ‘key’.

Assume the given array is a circular list, which means that the last letter is assumed 
to be connected with the first letter. This also means that the smallest letter in the given array 
is greater than the last letter of the array and is also the first letter of the array.
Write a function to return the next letter of the given ‘key’.

Example 1:

Input: ['a', 'c', 'f', 'h'], key = 'f'
Output: 'h'
Explanation: The smallest letter greater than 'f' is 'h' in the given array.

Input: ['a', 'c', 'f', 'h'], key = 'm'
Output: 'a'
Explanation: As the array is assumed to be circular, the smallest letter greater than 'm' is 'a'.
*/

// @ts-check

/**
 * @param {Array<string>} letters 
 * @param {string} key 
 * @returns {string}
 */
const searchNextLetter = function(letters, key) {
    const length = letters.length;
    const keyCode = key.charCodeAt(0);
    let start = 0;
    let end = length - 1;
    let middle = null;
  
    if (keyCode >= letters[end].charCodeAt(0) || keyCode <= letters[start].charCodeAt(0)) {
        return letters[0];
    }
  
    while (start <= end) {
        middle = Math.floor(start + (end - start)/2);
        const middleCode = letters[middle].charCodeAt(0);
    
        if (key === letters[middle]) {
            return letters[middle + 1];
        }
    
        if (keyCode + 1 === middleCode) {
            return letters[middle];
        }
    
        if (keyCode < middleCode) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
};
  
console.log(searchNextLetter(['a', 'c', 'f', 'h'], 'f') === 'h');
console.log(searchNextLetter(['a', 'c', 'f', 'h'], 'b') === 'c');
console.log(searchNextLetter(['a', 'c', 'f', 'h'], 'm') === 'a');
