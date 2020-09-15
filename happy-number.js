/**
Problem Statement

Any number will be called a happy number if, 
after repeatedly replacing it with a number equal to the sum of the square 
of all of its digits, leads us to number ‘1’. 
All other (not-happy) numbers will never reach ‘1’. 
Instead, they will be stuck in a cycle of numbers which does not include ‘1’.
*/

// @ts-check

/**
 * @param {number} num 
 * @returns {number}
 */
const findSquareSumDigits = (num) => {
    return Number(
        String(num).split('')
        .map(Number)
        .map(x => x*x)
        .reduce((acc, cur) => {
            acc += cur;
            return acc;
        }, 0)
    );
}

console.log(findSquareSumDigits(23) === 13);

/**
 * @param {number} num 
 * @returns {boolean}
 */
const find_happy_number = function(num) {
    let slow = num;
    let fast = num;

    while(true) {
        slow = findSquareSumDigits(slow);
        fast = findSquareSumDigits(findSquareSumDigits(fast));

        if (slow === fast) {
            break;
        }
    }
    return slow === 1;
};
  
console.log(find_happy_number(23) === true);
console.log(find_happy_number(12) === false);
