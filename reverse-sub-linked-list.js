/**
Problem Statement

Given the head of a LinkedList and two positions ‘p’ and ‘q’, 
reverse the LinkedList from position ‘p’ to ‘q’.
*/

const {ListNode} = require('./list-node.js');

// @ts-check

/**
 * 
 * @param {ListNode} head 
 * @param {number} p
 * @param {number} q
 * @returns {ListNode}
 */

const reverse_sub_list = function(head, p, q) {
    if (p === q) {
        return head;
    }

    let current = head;
    let previous = null;

    let i = 0;
    while (i < p) {
        previous = current
        current = current.next;

        i++;
    }

    let lastPreReverseNode = previous;
    let lastReversedNode = current;

    let j = 0;
    while (j < q - p + 1) {
        const next = current.next;
        current.next = previous;
        previous = current;
        current = next;

        j++;
    }

    if (lastPreReverseNode !== null) {
        lastPreReverseNode.next = previous;
    } else {
        lastPreReverseNode = head;
    }

    lastReversedNode = current;

    return head;   
};
  
  
head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
head.next.next.next.next.next = new ListNode(6)
head.next.next.next.next.next.next = new ListsNode(7)

console.log(reverse_sub_list(head, 2, 5));

