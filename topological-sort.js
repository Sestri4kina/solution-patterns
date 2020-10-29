/**
Problem Statement

Topological Sort of a directed graph (a graph with unidirectional edges) is 
a linear ordering of its vertices such that for every directed edge (U, V) 
from vertex U to vertex V, U comes before V in the ordering.

Given a directed graph, find the topological ordering of its vertices.

Example 1:
Input: Vertices=4, Edges=[3, 2], [3, 0], [2, 0], [2, 1]
Output: Following are the two valid topological sorts for the given graph:
1) 3, 2, 0, 1
2) 3, 2, 1, 0

Example 2:
Input: Vertices=5, Edges=[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]
Output: Following are all valid topological sorts for the given graph:
1) 4, 2, 3, 0, 1
2) 4, 3, 2, 0, 1
3) 4, 3, 2, 1, 0
4) 4, 2, 3, 1, 0
5) 4, 2, 0, 3, 1
*/

// @ts-check
const Queue = require('./queue.js');

/**
 * 
 * @param {number} vertices 
 * @param {Array<Array<number>>} edges 
 */
function topologicalSort(vertices, edges) {
    const order = [];

    if (vertices <= 0) {
        return order;
    }

    const incomingEdgesDegree = new Array(vertices).fill(0);
    const graph = Array.from(new Array(vertices)).map(_ => []);

    edges.forEach(([parent, child]) => {
        graph[parent].push(child);
        incomingEdgesDegree[child]++;
    });

    const sources = new Queue();

    incomingEdgesDegree.forEach((degree, index) => {
        if (degree === 0) {
            sources.enqueue(index);
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
        });
    } 

    if (order.length !== vertices) {
        return [];
    }

    return order;
}

console.log(JSON.stringify(topologicalSort(4, [
    [3, 2],
    [3, 0],
    [2, 0],
    [2, 1],
])));

console.log(JSON.stringify(topologicalSort(5, [
    [4, 2],
    [4, 3],
    [2, 0],
    [2, 1],
    [3, 1],
])));
console.log(JSON.stringify(topologicalSort(7, [
    [6, 4],
    [6, 2],
    [5, 3],
    [5, 4],
    [3, 0],
    [3, 1],
    [3, 2],
    [4, 1],
])));
