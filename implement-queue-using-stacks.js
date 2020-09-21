/**
Problem Statement

You have to implement the enqueue() and dequeue() functions 
using the myStack class we created earlier. 
enqueue() will insert a value into the queue, and 
dequeue() will remove a value from the queue.

Input 
enqueue(): A value to insert into the queue.
dequeue(): Does not require inputs.

Output
enqueue(): Returns True after inserting the value into the queue.
dequeue(): Pops out and returns the oldest value in the queue.
*/

// @ts-check
const Stack = require('./stack.js');

class NewQueue {
    constructor() {
        this.items = new Stack();
        this.tempItems = new Stack();
    }

    enqueue(value) {
        while (!this.items.isEmpty()) {
            this.tempItems.push(this.items.pop());
        }

        this.items.push(value);
        while (!this.tempItems.isEmpty()) {
            this.items.push(this.tempItems.pop());
        }

        return true;
    }

    dequeue() {
        if (this.items.isEmpty()) {
            return null;
        }
        const top = this.items.pop();
        return top;
    }
}

class OptimizedQueue {
    constructor() {
        this.items = new Stack();
        this.tempItems = new Stack();
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        if (this.items.isEmpty() && this.tempItems.isEmpty()) {
            return null;
        } else if (this.tempItems.isEmpty()) {
            while (!this.items.isEmpty()) {
                this.tempItems.push(this.items.pop());
            }

            return this.tempItems.pop()
        }

        return this.tempItems.pop();
    }
}

const queue = new OptimizedQueue();
for (var i = 0; i < 5; i++) {
    queue.enqueue(i + 1);
}

console.log(queue.dequeue() === 1)
console.log(queue.dequeue() === 2)
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.enqueue(55)
console.log(queue.dequeue() === 55)
