const {first} = require('lodash');
/**
Problem Statement

Postfix expression is where the operators appear after the two operands 
involved in the expression. In postfix, the expression written above will become:

6 3 8 * + 4 -

The two operands preceding an operator will be used with that operator
    From the first block of digits 6 3 8, we pick the last two which are 3 and 8.
    Reading the operators from left to right, the first one is *. 
    The expression now becomes 3 * 8
    The next number is 6 while the next operator is +, so we have 6 + 8 * 3.
    The value of this expression is followed by 4, which is right before -. 
    Hence we have 6 + 8 * 3 - 4.

In this problem, you have to implement the evaluatePostFix() function, 
which will compute a postfix expression given to it in a string.

Input
A string containing a valid postfix mathematic expression. 
Each digit is considered a separate number, i.e., there are no double-digit numbers.

Output
An integer result of the given postfix expression.
*/

// @ts-check
const Stack = require('./stack.js');

/**
 * @param {string} exp 
 * @return {number}
 */

function evaluatePostfix(exp){
    const arr = exp.split('');
    const stack = new Stack();
    let result = 0;

    for (let char of arr) {
        if (!isNaN(Number(char))) {
            stack.push(Number(char));
        } else {
            const secondOperand = stack.pop();
            const firstOperand = stack.pop();
            
            result = calculate(firstOperand, secondOperand, char);
            stack.push(result);
        }
    }

    return result;
}

/**
 * 
 * @param {number} firstOperand 
 * @param {number} secondOperand 
 * @param {string} operation 
 * @return {number}
 */
const calculate = (firstOperand, secondOperand, operation) => {
    switch (operation) {
        case '+': 
            return firstOperand + secondOperand;
        case '*': 
            return firstOperand * secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default: 
            throw new Error('Unknown operation!');
    }
}

console.log(evaluatePostfix('231*+9-') === -4);
console.log(evaluatePostfix('921*-8-4+') === 3);
