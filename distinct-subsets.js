/**
Problem Statement

Given a set with distinct elements, find all of its distinct subsets.

Example 1:
Input: [1, 3]
Output: [], [1], [3], [1,3]
*/

// @ts-check

/**
 * 
 * @param {Array<number>} nums
 * @returns {Array<Array<number>>} 
 */
const findDistinctSubsets = function(nums) {
    let subsets = [[]];

    for (let  i = 0; i < nums.length; i++) {
        let newSubsets = subsets.map(subset => subset.slice(0));
        newSubsets.forEach(subset => subset.push(nums[i]));
        subsets = [...subsets, ...newSubsets];
    }

    return subsets;
};  
  
console.log(findDistinctSubsets([1, 3])); // [], [1], [3], [1,3]
console.log(findDistinctSubsets([1, 5, 3])); // [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]
