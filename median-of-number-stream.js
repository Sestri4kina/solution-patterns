/**
Problem Statement

Design a class to calculate the median of a number stream. 
The class should have the following two methods:

insertNum(int num): stores the number in the class
findMedian(): returns the median of all numbers inserted in the class

If the count of numbers inserted in the class is even, 
the median will be the average of the middle two numbers.
*/

// @ts-check
const Heap = require('collections/heap');

class MedianOfStream {

    constructor() {
        /** @property {Heap} maxHeap */
        this.maxHeap = new Heap([], null, ((a, b) => a - b));
        /** @property {Heap} minHeap */
        this.minHeap = new Heap([], null, ((a, b) => b - a));
    }
    
    /** @param {number} num */
    insert_num(num) {
        const maxHeap = this.maxHeap;
        const minHeap = this.minHeap;

        if (maxHeap.length === 0 || maxHeap.peek() >= num) {
            maxHeap.push(num);
        } else {
            minHeap.push(num);
        }

        // rebalance heaps
        if (maxHeap.length > minHeap.length + 1)  {
            minHeap.push(maxHeap.pop());
        } else if (minHeap.length > maxHeap.length + 1) {
            maxHeap.push(minHeap.pop());
        }
    }
  
    /** @returns {number} */
    find_median() {
        const maxHeap = this.maxHeap;
        const minHeap = this.minHeap;

        if (maxHeap.length === minHeap.length) {
            return 0.5 * (maxHeap.peek() + minHeap.peek());
        }

        return maxHeap.peek();
    }
};
  
const medianOfAStream = new MedianOfStream();

medianOfAStream.insert_num(3)
medianOfAStream.insert_num(1)
console.log(medianOfAStream.find_median() === 2)
medianOfAStream.insert_num(5)
console.log(medianOfAStream.find_median() === 1)
medianOfAStream.insert_num(4)
console.log(medianOfAStream.find_median() === 3.5)
