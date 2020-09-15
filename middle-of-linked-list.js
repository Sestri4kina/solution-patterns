/**
Problem Statement

Given the head of a Singly LinkedList, 
write a method to return the middle node of the LinkedList.

If the total number of nodes in the LinkedList is even, 
return the second middle node.
*/

// @ts-check

const {ListNode, createSimpleList} = require("./linked-list-cycle");

/**
 * @param {ListNode} head 
 * @returns {ListNode}
 */

const find_middle_of_linked_list = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
  }
  
  
let head = new ListNode(0)
createSimpleList(head, 5)

console.log(find_middle_of_linked_list(head).value === 2)
  
head.next.next.next.next.next = new ListNode(5)
console.log(find_middle_of_linked_list(head).value === 3)

head.next.next.next.next.next.next = new ListNode(6)
console.log(find_middle_of_linked_list(head).value === 3)