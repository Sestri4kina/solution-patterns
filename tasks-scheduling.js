/**
Problem Statement

There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. 
Each task can have some prerequisite tasks which need to be completed before 
it can be scheduled. Given the number of tasks and a list of prerequisite pairs,
find out if it is possible to schedule all the tasks.

Example 1:
Input: Tasks=3, Prerequisites=[0, 1], [1, 2]
Output: true
Explanation: To execute task '1', task '0' needs to finish first. Similarly, 
task '1' needs to finish before '2' can be scheduled. 
A possible sceduling of tasks is: [0, 1, 2] 

Example 2:
Input: Tasks=3, Prerequisites=[0, 1], [1, 2], [2, 0]
Output: false
Explanation: The tasks have cyclic dependency, therefore they cannot be sceduled.
*/

// @ts-check
const Queue = require('./queue.js');

/**
 * 
 * @param {number} tasks 
 * @param {Array<Array<number>>} prerequisites 
 * @returns {boolean}
 */
const isSchedulingPossible = function(tasks, prerequisites) {
    const order = [];

    const incomingEdgesDegree = new Array(tasks).fill(0);
    const graph = Array.from(new Array(tasks)).map(_ => []);

    prerequisites.forEach(([parent, child]) => {
        graph[parent].push(child);
        incomingEdgesDegree[child]++;
    });

    const sources = new Queue();

    incomingEdgesDegree.forEach((degree, i) => {
        if (degree === 0) {
            sources.enqueue(i);
        }
    });

    while (!sources.isEmpty()) {
        const vertex = sources.dequeue();

        order.push(vertex);

        graph[vertex].forEach(child => {
            incomingEdgesDegree[child]--;

            if (incomingEdgesDegree[child] === 0) {
                sources.enqueue(child);
            }
        })
        
    }
    
    if (order.length !== tasks) {
        return false;
    }

    return true;
};
  
console.log(isSchedulingPossible(3, [[0, 1], [1, 2]]) === true);
console.log(isSchedulingPossible(3, [[0, 1], [1, 2], [2, 0]]) === false);
console.log(isSchedulingPossible(6, [[0, 4], [1, 4], [3, 2], [1, 3]]) === true);
