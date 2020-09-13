/**
Problem Statement

Given an array containing 0s, 1s and 2s, sort the array in-place. 
You should treat numbers of the array as objects, 
hence, we can’t count 0s, 1s, and 2s to recreate the array.

The flag of the Netherlands consists of three colors: red, white and blue; 
and since our input array also consists of three different numbers 
that is why it is called Dutch National Flag problem.
*/

// @ts-check

/**
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */

const dutch_flag_sort = function(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] === 2) {
            // all 2s move to the end of array
            const [two] = arr.splice(left, 1);
            arr.push(two);
        } else if (arr[left] === 0) {
            // all 0s move to the start of array
            const [zero] = arr.splice(left, 1);
            arr.unshift(zero);
            left++;
        } else {
            left++;
        }

        if (arr[right] === 0) {
            // all 0s move to the start of array
            const [zero] = arr.splice(right, 1);
            arr.unshift(zero);
        } else if (arr[right] === 2) {
            // all 2s move to the end of array
            const [zero] = arr.splice(right, 1);
            arr.push(zero);
            right--;
        } else {
            right--;
        }
    }

    return arr;
};

console.log(dutch_flag_sort([1, 0, 2, 1, 0])); // [0 0 1 1 2]
console.log(dutch_flag_sort([2, 2, 0, 1, 2, 0])); // [0 0 1 2 2 2 ]
