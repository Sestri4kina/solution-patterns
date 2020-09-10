/**
Problem Statement

Given an array of unsorted numbers, 
find all unique triplets in it that add up to zero.
*/

// @ts-check

/**
 * @param {Array<number>} arr
 * @returns {Array<Array<number>>}
 */

const search_triplets = function(arr) {
    let triplets = [];
    arr.sort((x, y) => x-y);
    let i = 0;
    
    while (arr[i] < 0) {
        let left = i+1;
        let right = arr.length - 1;
        const target = arr[i];

        while (
            target + arr[left] + arr[right] !== 0 || left < right
        ) {
            if (target + arr[left] + arr[right] === 0) {
                triplets.push([target, arr[left], arr[right]]);
                left++;
                right--;
            } else if (target + arr[left] + arr[right] > 0) {
                right--;
            } else {
                left++;
            }
        }
        
        i++;
    }

    return triplets;
};

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2])); // [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
console.log(search_triplets([-5, 2, -1, -2, 3])); // [[-5, 2, 3], [-2, -1, 3]]
