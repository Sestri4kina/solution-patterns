/**
Problem Statement

Given the head of a LinkedList and a number ‘k’, 
reverse every alternating ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with less than ‘k’ elements, 
reverse it too.
*/

const {ListNode} = require('./list-node.js');

// @ts-check

/**
 * 
 * @param {ListNode} head 
 * @param {number} k
 * @returns {ListNode}
 */
const reverseAlternateKElements = function(head, k) {
    if (k <= 0 || head === null) {
        return head;
    }

    let current = head;
    let previous = null;

    while (true) {
        const lastNodeOfPreviousPart = previous;
        const lastNodeOfSublist = current;

        let m = k;
        while (current !== null && m > 0) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        
            m--;
        }

        if (lastNodeOfPreviousPart !== null) {
            lastNodeOfPreviousPart.next = previous;
        } else {
            head = previous;
        }

        lastNodeOfSublist.next = current;

        m = k;
        while(current !== null && m > 0) {
            previous = current;
            current = current.next;
            m--;
        }

        if (current === null) {
            break;
        }
    }

    return head;
};  
  
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
head.next.next.next.next.next.next = new ListNode(7);
head.next.next.next.next.next.next.next = new ListNode(8);

console.log(head.getListStr());
console.log(reverseAlternateKElements(head, 2).getListStr());
