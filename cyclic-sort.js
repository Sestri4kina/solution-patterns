/**
Problem Statement

We are given an array containing ‘n’ objects. Each object, when created, 
was assigned a unique number from 1 to ‘n’ based on their creation sequence. 
This means that the object with sequence number ‘3’ was created just 
before the object with sequence number ‘4’.

Write a function to sort the objects in-place on their creation sequence 
number in O(n) and without any extra space. For simplicity, 
let’s assume we are passed an integer array containing only the sequence numbers, 
though each number is actually an object.
*/

// @ts-check

/**
 * @param {Array<number>} nums
 * @returns {Array<number>}
 */

const cyclic_sort = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let curElement = nums[i];

        while (curElement !== i+1) {
            // swap values
            let nextElement = nums[curElement - 1];
            nums[i] = nextElement;
            nums[curElement - 1] = curElement;
            curElement = nextElement;
        }

    }

    return nums;
}  
  
console.log(`${cyclic_sort([3, 1, 5, 4, 2])}` === '1,2,3,4,5')
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}` === '1,2,3,4,5,6')
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}` === '1,2,3,4,5,6')
