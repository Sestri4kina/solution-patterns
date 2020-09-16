/**
Problem Statement

Given the head of a Singly LinkedList, 
write a method to check if the LinkedList is a palindrome or not.

Your algorithm should use constant space and 
the input LinkedList should be in the original form once the algorithm 
is finished. The algorithm should have O(N) time complexity 
where ‘N’ is the number of nodes in the LinkedList.
*/

// @ts-check

const {ListNode} = require('./linked-list-cycle');
const {find_middle_of_linked_list} = require('./middle-of-linked-list');

/**
 * @param {ListNode} head 
 * @returns {ListNode}
 */
const reverse = (head) => {
    let prev = null;
    while (head !== null) {
      let next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
}

/**
 * @param {ListNode} head 
 * @returns {boolean}
 */

const is_palindromic_linked_list= function(head) {
    if (head == null || head.next === null) {
        return true;
    }

    // find middle of the linked list
    let middle = find_middle_of_linked_list(head);

    // reverse the second half
    let headSecondHalf = reverse(middle);
    let headSecondHalfCopy = headSecondHalf;

    // compare the first and the second halves
    while (head !== null && headSecondHalf !== null) {
        if (head.value !== headSecondHalf.value) {
            break;
        }
        
        head = head.next;
        headSecondHalf = headSecondHalf.next; 
    }

    // reverse back to the previous
    reverse(headSecondHalfCopy);

    if (head === null || headSecondHalf === null) {
        return true;
    }

    return false;
};
  
  
let head = new ListNode(2)
head.next = new ListNode(4)
head.next.next = new ListNode(6)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(2)

console.log(is_palindromic_linked_list(head) === true)

head.next.next.next.next.next = new ListNode(2)
console.log(is_palindromic_linked_list(head) === false)
