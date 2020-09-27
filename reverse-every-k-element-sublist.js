/**
Problem Statement

Given the head of a LinkedList and a number ‘k’, 
reverse every ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
*/

const {ListNode} = require('./list-node.js');

// @ts-check

/**
 * 
 * @param {ListNode} head 
 * @param {number} k
 * @returns {ListNode}
 */

const reverse_every_k_elements = function(head, k) {
    if (k <= 1 || head === null) {
        return head;
    }
      
    let current = head;
    let previous = null;

    let j = 0;
    
    while (current !== null) {
        let lastPrevNode = previous;
        let lastSublistNode = current;
        
        for (let i = j; i < j+k; i++) {
            if (current === null) {
                break;
            }

            const  next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        if (lastPrevNode !== null) {
            lastPrevNode.next = previous;
        } else {
            head = previous;
        }

        lastSublistNode.next = current;
        previous = lastSublistNode;

        j += k;
    }

    return head;
}
  
head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
head.next.next.next.next.next = new ListNode(6)
head.next.next.next.next.next.next = new ListNode(7)
head.next.next.next.next.next.next.next = new ListNode(8)

console.log(reverse_every_k_elements(head, 3));

