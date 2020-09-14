/**
Problem Statement

Given the head of a Singly LinkedList, write a function to determine 
if the LinkedList has a cycle in it or not.
*/

// @ts-check

class ListNode {
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
  
  
let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
head.next.next.next.next.next = new ListNode(6)
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)
