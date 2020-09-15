/**
Problem Statement

Given the head of a Singly LinkedList, write a function to determine 
if the LinkedList has a cycle in it or not.
*/

// @ts-check

const ListNode = class ListNode {
    /**
     * @param {number} value
     * @param {ListNode} next
     */
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
}

/**
 * @param {ListNode} head 
 * @returns {boolean}
 */
  
const has_cycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false
}

/**
 * @param {ListNode} head 
 * @param {number} length
 */

const createSimpleList = (head, length) => {
    let currentNode = head;
    for (let i = 1; i < length; i++) {
        currentNode.next = new ListNode(i);
        currentNode = currentNode.next;
    }
}
  
  
let head = new ListNode(0)
createSimpleList(head, 6)

console.log(has_cycle(head) === false)

head.next.next.next.next.next.next = head.next.next
console.log(has_cycle(head) === true)

head.next.next.next.next.next.next = head.next.next.next
console.log(has_cycle(head) === true)

module.exports = {
    ListNode,
    createSimpleList
} 
