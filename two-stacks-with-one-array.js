/**
Problem Statement

Write code for the following functions to implement 
two stacks using a single array of a fixed size to store the elements.

push1(value)
Input: an integer
Output: inserts the given value in the first stack, i.e., stack1

push2(value)
Input: an integer
Output: inserts the given value in the second stack i.e., stack2

pop1()
Output: returns and remove the top value of stack1

pop2()
Output: returns and remove the top value of stack2
*/

// @ts-check

class TwoStacks {
    /**
     * @param {number} s
     */
    constructor(s) {
        this.arr = new Array(s);
        this.last1 = -1;
        this.last2 = s;
    }

    /**
     * @param {number} value
     */
    push1(value) {
        if (this.last1 < this.last2) {
            this.last1 += 1;
            this.arr[this.last1] = value;
        } 
    }

    /**
     * @param {number} value
     */
    push2(value) {
        if (this.last2 > this.last1) {
            this.last2 -= 1;
            this.arr[this.last2] = value;
        } 
    }

    /**
     * @returns {number}
     */
    pop1() {
        if (this.last1 >= 0) {
            const last = this.arr[this.last1];
            this.arr[this.last1] = undefined;
            this.last1 -= 1;
            
            return last;
        } else {
            return -1;
        }
    }

    /**
     * @returns {number}
     */
    pop2() {
        if (this.last2 < this.arr.length) {
            const last = this.arr[this.last2];
            this.arr[this.last2] = undefined;
            this.last2 += 1;
      
            return last;
        } else {
            return -1;
        }
      
    }
}

const stack = new TwoStacks(10)
stack.push1(20)
stack.push2(10)
stack.push1(30)
stack.push2(40)
stack.push1(60)
stack.push2(50)

console.log(stack.pop1() === 60)
console.log(stack.pop2() === 50)
console.log(stack.pop1() === 30)
console.log(stack.pop1() === 20)
console.log(stack.pop2() === 40)
console.log(stack.pop2() === 10)

console.log(stack.pop1() === -1)
console.log(stack.pop2() === -1)
