/**
Problem Statement

Given an array of unsorted numbers and a target number, 
find all unique quadruplets in it, 
whose sum is equal to the target number.
*/

const _ = require('lodash');

// @ts-check

/**
 * @param {Array<number>} arr
 * @param {number} target
 * @returns {Array<Array<number>>}
 */

const search_quadruplets = function(arr, target) {
    arr.sort((x, y) => x - y);
    let quadruplets = [];

    for (let i = 0; i < arr.length - 3; i++) {
        for (let j = i + 1; j < arr.length - 2; j++) {
            let left = j + 1;
            let right = arr.length - 1;
            
            while (left < right) {
                let curSum = arr[i] + arr[j] + arr[left] + arr[right];
                
                if (curSum === target) {
                    quadruplets.push([arr[i], arr[j], arr[left], arr[right]]);
                    left++;
                    right--;
                } else if (curSum < target) {
                    left++;
                } else {
                    right--;
                }
            }

        }
    }

    return quadruplets;
};

console.log(_.isEqual(search_quadruplets([4, 1, 2, -1, 1, -3], 1), [[-3, -1, 1, 4], [-3, 1, 1, 2]]));
console.log(_.isEqual(search_quadruplets([2, 0, -1, 1, -2, 2], 2), [[-2, 0, 2, 2], [-1, 0, 1, 2]]));
