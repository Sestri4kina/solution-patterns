/**
Problem Statement

Given the head of a Singly LinkedList, write a function to determine 
if the LinkedList has a cycle in it or not.
*/

// @ts-check

const {ListNode} = require("./linked-list-cycle");

/**
 * @param {ListNode} head 
 * @returns {number}
 */
  
const find_cycle_length = function(head) {
    let slow = head;
    let fast = head;
    let cycleLength = 0;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            slow = slow.next;
            cycleLength++;
            
            while (slow !== fast) {
                cycleLength++;
                slow = slow.next;
            }

            return cycleLength;
        }
    }

    return cycleLength;
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
head.next.next.next.next.next = new ListNode(6)
head.next.next.next.next.next.next = head.next.next.next
console.log(find_cycle_length(head) === 3)
