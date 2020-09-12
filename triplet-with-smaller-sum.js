/**
Problem Statement

Given an array arr of unsorted numbers and a target sum, 
count all triplets in it such that arr[i] + arr[j] + arr[k] < target 
where i, j, and k are three different indices. 

Write a function to return the count of such triplets.
*/

// @ts-check

/**
 * @param {Array<number>} arr
 * @param {number} target
 * @returns {number} number of all triplets whose sum is smaller than target
 */

const triplet_with_smaller_sum = function(arr, target) {
    arr.sort((x, y) => x-y);
    let count = 0;
    const medium = Math.round((arr.length - 1) / 2);

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            if (arr[i] + arr[left] + arr[right] < target) {
                count++;
            }

            // to iterate over all possible pairs once:
            // iterate from right down to medium,
            // then from left up to medium
            if (right > medium && right - 1 !== left) {
                right--;
            } else {
                right = arr.length - 1;
                left++;
            }   
        }
    }

    return count;
};

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3) === 2);
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5) === 4);
