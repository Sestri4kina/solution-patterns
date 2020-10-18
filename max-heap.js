module.exports = class MaxHeap {
    constructor() {
        this.heap = [];
        this.elements = 0;
    }

    /**
     * @NOTE restores the heap property going UP from a node to the root
     * @param {number} index
     */
    __percolateUp (index) {
        if (index <= 0) {
            return;
        }

        const parent = Math.floor((index - 1) / 2);
        
        if (this.heap[parent] < this.heap[index]) {
            /** @NOTE swapping the value at a parent node 
             * if it is less than the value at a child node */
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            this.__percolateUp(parent);
        }
    }

    /**
     * @NOTE restores the heap property starting from a given node DOWN to the leaves
     * @param {number} index
     */
    __maxHeapify(index) {
        const left = index * 2 + 1;
        const right = index * 2 + 2;
        let largest = index;

        if (this.elements > left && this.heap[largest] < this.heap[left]) {
            largest = left;
        }

        if (this.elements > right && this.heap[largest] < this.heap[right]) {
            largest = right;
        }
            
        if (largest !== index) {
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
            this.__maxHeapify(largest);
        }
    }

    /** @param {number} value */
    insert(value) {
        if (this.elements >= this.heap.length) {
            this.elements = this.elements + 1;
            this.heap.push(value);
            this.__percolateUp(this.heap.length - 1);
        } else {
            this.heap[this.elements] = value;
            this.elements = this.elements + 1;
            this.__percolateUp(this.elements - 1);
        }
    }

    getMax() {
        if (this.elements !== 0) {
            return this.heap[0];
        }
            
        return null;
    }

    /** @returns {number} */
    removeMax() {
        if (this.elements > 1) {
            const max = this.heap[0];
            this.heap[0] = this.heap[this.elements - 1];
            this.elements = this.elements - 1;
            this.__maxHeapify(0);
            return max;
        } else if (this.elements == 1) {
            var max = this.heap[0]
            this.elements = this.elements - 1
            return max;
        } else {
            return null;
        }
    }

    /** @param {Array<number>} arr */
    buildHeap(arr){
        this.heap = arr;
        this.elements = this.heap.length;

        for (let i = this.heap.length - 1; i >= 0; i--){
            this.__maxHeapify(i);
        }
    }
}
