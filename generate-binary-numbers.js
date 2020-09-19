/**
Problem Statement

Implement a function findBin(n), 
which will generate binary numbers from 1 to n
in the form of a string using a queue.
*/

const Queue = require('./queue.js');
// @ts-check

/**
 * @param {number} num
 * @returns {Array<string>}
 */
function findBin(num) {
    let result = [];
    let queue = new Queue();
    queue.enqueue('1');
    let zeroPlus;
    let onePlus;

    for (let i = 0; i < num; i++) {
        result.push(queue.dequeue());

        zeroPlus = result[i] + '0';
        onePlus = result[i] + '1';

        queue.enqueue(zeroPlus);
        queue.enqueue(onePlus);
    }

    return result;
}

console.log(findBin(3)) // 1,10,11
console.log(findBin(5)) // 1,10,11,100,101
