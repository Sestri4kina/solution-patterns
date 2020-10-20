/**
Problem Statement

Given an array of points in the a 2D2D2D plane, find ‘K’ closest points to the origin.

Example 1:
Input: points = [[1,2],[1,3]], K = 1
Output: [[1,2]]
Explanation: The Euclidean distance between (1, 2) and the origin is sqrt(5).
The Euclidean distance between (1, 3) and the origin is sqrt(10).
Since sqrt(5) < sqrt(10), therefore (1, 2) is closer to the origin.
*/

// @ts-check
const MinHeap = require('./min-heap.js');

class Point {
    /**
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /** @returns {number} */
    distanceToOrigin() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
};

/**
 * @param {Array<Point>} points 
 * @param {number} k 
 * @returns {Array<Point>}
 */
const findClosestPoints = function(points, k) {
    let result = [];
    let heap = new MinHeap();
    let distancePointsHash = {};

    for (let i = 0; i < points.length; i++) {
        const distance = points[i].distanceToOrigin();
        if (distancePointsHash[distance] === undefined) {
            distancePointsHash[distance] = [points[i]];
        } else {
            distancePointsHash[distance].push(points[i]);
        }
        heap.insert(distance);
    }

    let i = 0;
    while(i < k) {
        const min = heap.removeMin();
        i += distancePointsHash[min].length;
        result.push(...distancePointsHash[min]);
    }

    return result;
};
   
console.log(findClosestPoints([new Point(1, 3), new Point(3, 4), new Point(2, -1)], 2));
