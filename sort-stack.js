/**
Problem Statement

You have to implement the sortStack() function, 
which will take a stack and sort all its elements in ascending order.
Input
A stack of integers.

Output
Returns the stack with all its elements sorted.
*/

// @ts-check
const Stack = require('./stack.js');

/**
 * @param {Stack} stack 
 * @return {Stack}
 */
function sortStack(stack) {
    const tempStack = new Stack();
    
    while (!stack.isEmpty()) {
        const curValue = stack.pop();

        if (curValue > tempStack.getTop()) {
            tempStack.push(curValue);
        } else {
            while (!tempStack.isEmpty()) {
                stack.push(tempStack.pop());
            }

            tempStack.push(curValue);
        }
    }

    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }

    return stack;
}

const stack1 = new Stack();
[23,60,12,42,4,97,2].reverse().forEach(x => stack1.push(x));
console.log(sortStack(stack1));

const stack2 = new Stack();
[100, -323, 0].reverse().forEach(x => stack2.push(x));
console.log(sortStack(stack2));

const stack3 = new Stack();
[5,4,3,2,1].reverse().forEach(x => stack3.push(x));
console.log(sortStack(stack3));
