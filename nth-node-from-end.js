/**
Problem Statement

In the findNth function, a certain N is specified as an argument. 
You simply need to return the node itself (not the value of the node), 
which is N spaces away from the end of the linked list.
*/

// @ts-check

const {ListNode} = require("./linked-list-cycle");

/**
 * @param {ListNode} head
 * @param {number} n
 * @returns {ListNode}
 */
// obvious solution
function findNth1(head, n) {
    let nthNode = head;
    let listLength = 0;
    let curNode = head;

    while (curNode !== null) {
        curNode = curNode.next;
        listLength++;
    }

    let index = listLength - n;
    let curIndex = 0;
    while (curIndex !== index) {
        nthNode = nthNode.next;
        curIndex++;
    }

    return nthNode;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @returns {ListNode}
 */
// two pointers solution
function findNth(head, n) {
    let nthNode = head;
    let endNode = head;

    let curIndex = 0;
    while (curIndex !== n && endNode !== null) {
        endNode = endNode.next;
        curIndex++;
    }

    if (endNode === null && curIndex < n) {
        return null;
    }

    if (endNode === null && curIndex === n) {
        return head;
    }

    while (endNode !== null) {
        endNode = endNode.next;
        nthNode = nthNode.next;
    }
    
    return nthNode;
}

let head1 = new ListNode(22);
head1.next = new ListNode(18);
head1.next.next = new ListNode(60);
head1.next.next.next = new ListNode(78);
head1.next.next.next.next = new ListNode(47);
head1.next.next.next.next.next = new ListNode(39);
head1.next.next.next.next.next.next = new ListNode(99);

console.log(findNth(head1, 3).value === 47) // 47
console.log(findNth(head1, 7).value === 22) // 22
console.log(findNth(head1, 8) === null)
