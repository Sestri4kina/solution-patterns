/**
Problem Statement

You must implement the nextGreaterElement() function. 
For each element in an array, it finds the next greater element in that array.
Note: The next greater element is the first element towards the right, 
which is greater than the current element. For example, in the array 
[1, 3, 8, 4, 10, 5], the next greater element of 3 is 8, 
and the next greater element for 8 is 10.

To keep it simple, the next greater element for the last or 
maximum value in the array is -1.

In each iteration, we only check the array elements appearing after the current element.

Input
An integer array.

Output
An array containing the next greater element of each element from the input array. 
For the maximum value in the array, the next greater value is -1.
*/

// @ts-check
const Stack = require('./stack.js');

/**
 * @param {Array<number>} arr 
 * @return {Array<number>}
 */

function nextGreaterElement(arr) {
    const curStack = new Stack();
    const result = [];
    let top, next;

    // traverse array from the end
    for (let i = arr.length - 1; i >= 0; i--) {
        next = arr[i];
        // if stack has some elements
        if (!curStack.isEmpty()) {
            top = curStack.getTop();
            // remove elements from the stack while they are less than next
            while (top < next) {
                if (curStack.isEmpty()) {
                    break;
                }

                curStack.pop();
                top = curStack.getTop();
            }
        }
        // set result
        if (!curStack.isEmpty()) {
            result[i] = curStack.getTop();
        } else {
            result[i] = -1;
        }
        // add current element to the stack
        curStack.push(next);
    }

    return result;
}

console.log(nextGreaterElement([4,6,3,2,8,1]));
console.log(nextGreaterElement([4,8,14,2,16,18,9,5]));
console.log(nextGreaterElement([13,3,12,16,15,11,1,2]));
