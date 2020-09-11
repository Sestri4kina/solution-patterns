/**
Problem Statement

Given an array of unsorted numbers and a target number, 
find a triplet in the array whose sum is as close to the target number as possible, 
return the sum of the triplet. If there are more than one such triplet, 
return the sum of the triplet with the smallest sum.
*/

// @ts-check

/**
 * @param {Array<number>} arr
 * @param {number} target_sum
 * @returns {number}
 */

const triplet_sum_close_to_target = function(arr, target_sum) {
    arr.sort((x, y) => x - y);
    let curClosestSum = Number.NEGATIVE_INFINITY;

    let i = 0;
    while (i < arr.length - 2) {
        let left = i+1;
        let right = arr.length -1;

        while(left < right) {
            let curSum = arr[i] + arr[left] + arr[right];
            
            if (curSum > curClosestSum && curSum < target_sum) {
                curClosestSum = curSum;
            }

            if (curSum < target_sum) {
                left++;
            } else {
                right--;
            }

        }

        i++;
    }

    return curClosestSum;
};

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2) === 1);
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1) === 0);
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100) === 3);
