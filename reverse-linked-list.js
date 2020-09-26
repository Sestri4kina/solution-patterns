/**
Problem Statement

Given the head of a Singly LinkedList, reverse the LinkedList. 
Write a function to return the new head of the reversed LinkedList.
*/

const {ListNode} = require('./list-node.js');

// @ts-check

/**
 * 
 * @param {ListNode} head  
 * @returns {ListNode}
 */

const reverse = function(head) {
    let reversedHead = new ListNode(head.value);
    let curNode = head.next;
  
    while (curNode !== null) {
      oldReversedHead = reversedHead;
      reversedHead = new ListNode(curNode.value);
      reversedHead.next = oldReversedHead;
  
      curNode = curNode.next;
    }
  
    return reversedHead;
};

/**
 * @param {ListNode} head  
 * @returns {ListNode}
 */
const reverseInPlace = function(head) {
    let current = head;
    let previous = null;

    while (current !== null) {
        const next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }

    return previous;
};
  
const head = new ListNode(2);
head.next = new ListNode(4);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(8);
head.next.next.next.next = new ListNode(10);

console.log(reverseInPlace(head));
