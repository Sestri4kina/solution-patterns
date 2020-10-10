/**
Problem Statement



For a given number ‘N’, write a function to generate all combination 
of ‘N’ pairs of balanced parentheses.

Example 1:
Input: N=2
Output: (()), ()()

Example 2:
Input: N=3
Output: ((())), (()()), (())(), ()(()), ()()()
*/

// @ts-check

/** 
 * @param {number} x 
 * @returns {number}
 */
const factorial = x => {
    return (x > 1) ? x * factorial(x-1) : 1;
}

class Parentheses {
    /**
     * @param {string} value 
     * @param {number} open 
     * @param {number} close 
     */
    constructor(value, open, close) {
        this.value = value;
        this.open = open;
        this.close = close;
    }
}

/**
 * 
 * @param {number} num
 * @returns {Array<string>}
 */
const generateValidParenthesesPermurations = function(num) {
    let result = [new Parentheses('(', 1, 0)];
    const iterationLength = factorial(num) + 1; 
   
    for (let i = 0; i < iterationLength; i++) {

        const curLength = result.length;

        for (let j = 0; j < curLength; j++) {
            const item = result[j];
            let value = item.value;
            let open = item.open;
            let close = item.close;

            if (open < num) {
                // update open
                item.value = item.value + '(';
                item.open += 1;

                if (close < open) {
                    // create close
                    const newItem = new Parentheses(value + ')', open, close + 1);
                    result.push(newItem);
                }
            } else if (open === num && close < open) {
                // update close
                item.value = item.value + ')';
                item.close += 1;
            }
        }
    }

    return result.map(x => x.value);
};
  
console.log(JSON.stringify(generateValidParenthesesPermurations(2)));
console.log(JSON.stringify(generateValidParenthesesPermurations(3)));
