/**
Problem Statement

There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task can have some prerequisite tasks 
which need to be completed before it can be scheduled. Given the number of tasks and a list of prerequisite pairs, 
write a method to find the ordering of tasks we should pick to finish all tasks.

Example 1:
Input: Tasks=3, Prerequisites=[0, 1], [1, 2]
Output: [0, 1, 2]
Explanation: To execute task '1', task '0' needs to finish first. Similarly, task '1' needs to finish 
before '2' can be scheduled. A possible scheduling of tasks is: [0, 1, 2] 

Example 2:
Input: Tasks=3, Prerequisites=[0, 1], [1, 2], [2, 0]
Output: []
Explanation: The tasks have cyclic dependency, therefore they cannot be scheduled.
*/

// @ts-check
const Queue = require('./queue.js');

/**
 * @param {number} tasks 
 * @param {Array<Array<number>>} prerequisites
 * @returns {Array<number>} 
 */
const findOrder = function(tasks, prerequisites) {
    const order = [];

    const inDegree = new Array(tasks).fill(0);
    const graph = new Array(tasks).fill(0).map(_ => []);
   
    prerequisites.forEach(([parent, child]) => {
        graph[parent].push(child);
        inDegree[child]++;
    })

    const sources = new Queue();

    inDegree.forEach((degree, i) => {
        if (degree === 0) {
            sources.enqueue(i);
        }
    });

    while(!sources.isEmpty()) {
        const vertex = sources.dequeue();

        order.push(vertex);

        graph[vertex].forEach(child => {
            inDegree[child]--;

            if (inDegree[child] === 0) {
                sources.enqueue(child);
            }
        })
    }

    if (order.length !== tasks) {
        return [];
    }

    return order;
};
  
console.log(JSON.stringify(findOrder(3, [[0, 1], [1, 2]])));
console.log(JSON.stringify(findOrder(3, [[0, 1], [1, 2], [2, 0]])));
console.log(JSON.stringify(findOrder(6, [[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]])));
