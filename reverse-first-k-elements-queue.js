/**
Problem Statement

Implement the function reverseK(queue, k), 
which takes a queue and a number “k” as input and 
reverses the first “k” elements of the queue.
*/

const Queue = require('./queue.js');
const Stack = require('./stack.js');
// @ts-check

/**
 * 
 * @param {Queue} queue 
 * @param {number} k 
 * @returns {Queue}
 */
function reverseK(queue,k){
    let reversed = new Stack();

    if (queue.isEmpty()) {
        return queue;
    }

    for (let i = 0; i < k; i++) {
        const el = queue.dequeue();
        reversed.push(el);
    }

    for (let i = 0; i < k; i++) {
        const el = reversed.pop();
        queue.enqueue(el);
    }

    for (let i = 0; i < (queue.size() - k); i++) {
      queue.enqueue(queue.dequeue());
    }

    return queue;
}

const queue = new Queue();
for (let i = 0; i < 10; i++) {
    queue.enqueue(i+1);
}

console.log(reverseK(queue, 5)) ;
