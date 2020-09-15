/**
Problem Statement

Given the head of a Singly LinkedList, write a function to determine 
if the LinkedList has a cycle in it or not.
*/

// @ts-check

const {ListNode, createSimpleList} = require("./linked-list-cycle");
const {find_cycle_length} = require("./linked-list-cycle-length");

/**
 * @param {ListNode} head 
 * @returns {ListNode}
 */

const find_cycle_start = function(head){
    let pointer1 = head;
    let pointer2 = head;
  
    const cycleLength = find_cycle_length(head);
  
    for (let i = 0; i < cycleLength; i++) {
      pointer2 = pointer2.next;
    }
  
    while (pointer1 !== pointer2) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    }
  
    return pointer1;
};
  
  
let head = new ListNode(0)
createSimpleList(head, 6)

head.next.next.next.next.next.next = head.next.next
console.log(find_cycle_start(head).value === 2)

head.next.next.next.next.next.next = head.next.next.next
console.log(find_cycle_start(head).value === 3)

head.next.next.next.next.next.next = head
console.log(find_cycle_start(head).value === 0)
