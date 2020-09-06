/**
Problem Statement

Given an array containing 0s and 1s, if you are allowed to 
replace no more than ‘k’ 0s with 1s, 
find the length of the longest contiguous subarray having all 1s.
 */

// @ts-check

/**
 * @param {Array<number>} arr 
 * @param {number} k 
 */

const length_of_longest_subarr = function(arr, k) {
    let oneCount = 0;
    let windowStart = 0;
    let result = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        const el = arr[windowEnd];

        if (el === 1) {
            oneCount++;
        }

        while (windowEnd - windowStart + 1 - oneCount > k) {
            const leftmostEl = arr[windowStart];
            if (leftmostEl === 1) {
                oneCount--;
            }

            windowStart++;
        }

        result = Math.max(result, windowEnd - windowStart + 1);
    }

    return result;
};

console.log(6 === length_of_longest_subarr([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log(9 === length_of_longest_subarr([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));
