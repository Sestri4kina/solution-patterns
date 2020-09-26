/**
Problem Statement

In this problem, you have to implement the isBalanced() function, 
which will take a string containing only curly {}, square [], and round () parentheses. 
The function will tell us whether all the parentheses in the string are balanced or not.

For all the parentheses to be balanced, every opening parenthesis must have a closing one. 
The order in which they appear also matters. For example, {[]} is balanced, but {[}] is not.
*/

const Stack = require('./stack.js');

// @ts-check

/**
 * @param {string} exp 
 * @returns {boolean}
 */
function isBalanced(exp) {
    const openBrackets = new Stack();

    for (let i = 0 ; i < exp.length; i++) {
        const bracket = exp[i];
        if (bracket === ')' || bracket === '}' || bracket === ']') {
            if (openBrackets.isEmpty()) {
                return false;
            }

            const openBracket = openBrackets.pop();

            if (
                (bracket === ')' && openBracket !== '(') ||
                (bracket === '}' && openBracket !== '{') ||
                (bracket === ']' && openBracket !== '[')
            ) {
                return false;
            }
        } else {
            openBrackets.push(bracket);
        }
    }

    if (!openBrackets.isEmpty()) {
        return false;
    }

    return true;
}

console.log(isBalanced('{[()]}') === true);
console.log(isBalanced('[{}]') === true);
console.log(isBalanced('[{(}]') === false);
console.log(isBalanced('({[}])') === false);
