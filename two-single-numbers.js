/**
Problem Statement

In a non-empty array of numbers, every number appears exactly twice except 
two numbers that appear only once. Find the two numbers that appear only once.

Example 1:
Input: [1, 4, 2, 1, 3, 5, 6, 2, 3, 5]
Output: [4, 6]

Example 2:
Input: [2, 1, 3, 2]
Output: [1, 3]
*/

// @ts-check

/**
 * @param {Array<number>} nums 
 * @returns {Array<number>}
 */
function findSingleNumbers(nums) {
    let n1XORn2 = 0;

    nums.forEach(num => {
        n1XORn2 ^= num;
    });

    let rightmostSetBit = 1;
    // find the first bit which is set to 1 in n1XORn2
    while ((rightmostSetBit & n1XORn2) === 0) {
        rightmostSetBit = rightmostSetBit << 1;
    }
   
    let num1 = 0;
    let num2 = 0;
    nums.forEach(num => {
        // split in 2 groups according to whether 
        // bit at `rightmostSetBit` position in num is set or not 
        if ((num & rightmostSetBit) !== 0) { // the bit is set
            num1 ^= num; 
        } else { // the bit is not set
            num2 ^= num;
        }
    });

    return [num1, num2];
}
    
console.log(findSingleNumbers([1, 4, 2, 1, 3, 5, 6, 2, 3, 5]));
console.log(findSingleNumbers([2, 1, 3, 2]));
