/**
Problem Statement

Implement a function convertMax(maxHeap) which will convert a binary max-heap into a 
binary min-heap where maxHeap is an array which is given in the maxHeap format, 
i.e the parent is greater than its children.

Input
Max-Heap

Output
Returns the converted array

Sample Input
maxHeap = [9,4,7,1,-2,6,5]

Sample Output
result = [-2,1,5,9,4,6,7]
*/

// @ts-check

/**
 * @param {Array<number>} heap 
 * @param {number} index 
 */
function minHeapify(heap, index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;

    if (heap[left] !== undefined && heap[smallest] > heap[left]) {
        smallest = left;
    }

    if (heap[right] !== undefined && heap[smallest] > heap[right]) {
        smallest = right;
    }

    if (smallest !== index) {
        [heap[index], heap[smallest]] = [heap[smallest], heap[index]]; 
        minHeapify(heap, smallest);
    }  
}

/**
 * @param {Array<number>} maxHeap 
 * @returns {Array<number>}
 */
function convertMaxToMinHeap(maxHeap) {

    for (let i = Math.floor(maxHeap.length/2); i > -1; i--) {
        minHeapify(maxHeap, i);
    }

    return maxHeap;
}

console.log(convertMaxToMinHeap([9,4,7,1,-2,6,5]));
