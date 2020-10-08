/**
Problem Statement

Given a set of distinct numbers, find all of its permutations.

Permutation is defined as the re-arranging of the elements of the set. 
For example, {1, 2, 3} has the following six permutations:

    {1, 2, 3}
    {1, 3, 2}
    {2, 1, 3}
    {2, 3, 1}
    {3, 1, 2}
    {3, 2, 1}

If a set has ‘n’ distinct elements it will have n!n!n! permutations.

Example 1:
Input: [1,3,5]
Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]
*/

// @ts-check

/**
 * 
 * @param {Array<number>} nums
 * @returns {Array<Array<number>>} 
 */

const findPermutations = function(nums) {
    let permutations = [[]];

    for (let i = 0; i < nums.length; i++) {
        let newSubsets = [];

        permutations.forEach(subset => {

            for (let j = 0; j < subset.length + 1; j++) {
                const newSubset = subset.slice(0);
                newSubset.splice(j, 0, nums[i]);
                newSubsets.push(newSubset);
            }

        });

        permutations = newSubsets;
    }
    
    return permutations;
};

console.log(JSON.stringify(findPermutations([1, 3, 5])));
