/**
Problem Statement

Given a set of numbers that might contain duplicates, find all of its distinct subsets.

Example 1:
Input: [1, 3, 3]
Output: [], [1], [3], [1,3], [3,3], [1,3,3]
*/

// @ts-check

/**
 * 
 * @param {Array<number>} nums
 * @returns {Array<Array<number>>} 
 */
const findDistinctSubsetsWithDuplicates = function(nums) {
    let subsets = [[]];
    nums.sort((a, b) => a-b);

    for (let i = 0; i < nums.length; i++) {
        let newSubsets;

        if (i > 0 && nums[i] === nums[i-1]) {
            const curLength = subsets.length;
            newSubsets = subsets.slice(curLength/2).map(subset => subset.slice(0));        
        } else {
            newSubsets = subsets.map(subset => subset.slice(0));
        }

        newSubsets.forEach(subset => subset.push(nums[i]));
        subsets = [...subsets, ...newSubsets];
    }

    return subsets;
};
  
console.log(JSON.stringify(findDistinctSubsetsWithDuplicates([1, 3, 3]))); // [], [1], [3], [1,3], [3,3], [1,3,3]
console.log(JSON.stringify(findDistinctSubsetsWithDuplicates([1, 5, 3, 3]))); // [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3]
