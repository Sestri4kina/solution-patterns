/**
Problem Statement

Given an array with positive numbers and a target number, 
find all of its contiguous subarrays 
whose product is less than the target number
*/

// @ts-check

/**
 * @param {Array<number>} arr
 * @param {number} target
 * @returns {Array<Array<number>>}
 */

const find_subarrays = function(arr, target) {
    let result = [];
    let curProduct = 1;
    let windowStart = 0;
    
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        let isCurAdded = false;
        curProduct *= arr[windowEnd];

        if (curProduct < target) {
            result.push(arr.slice(windowStart, windowEnd + 1));
        } else {
            while (curProduct >= target) {
                curProduct = curProduct / arr[windowStart];
                windowStart++;
    
                if (curProduct < target) {
                    result.push(arr.slice(windowStart, windowEnd + 1));
                }
            }
        }

        if (windowStart === windowEnd) {
            isCurAdded = true;
        }

        if (arr[windowEnd] < target && !isCurAdded) {
            result.push([arr[windowEnd]]);
        }
    }
    
    return result;
};

console.log(find_subarrays([2, 5, 3, 10], 30 )); // [2], [5], [2, 5], [3], [5, 3], [10]
console.log(find_subarrays([8, 2, 6, 5], 50)); // [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] 
