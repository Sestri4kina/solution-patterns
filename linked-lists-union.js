/**
Problem Statement
    Given two lists A and B; the union is the list that contains elements or 
    objects that belong to either A, or to B, or to both
*/

// @ts-check

const {ListNode} = require("./linked-list-cycle");

/**
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @returns {ListNode}
 */

function union(head1, head2) {
    const hashMap = {};
    let curNode = head1;
    let lastNodeList1 = null;
  
    while (curNode !== null) {
      hashMap[curNode.value] = 1;
      curNode = curNode.next;
  
      if (curNode !== null && curNode.next === null) {
        lastNodeList1 = curNode;
      }
    }
  
    curNode = head2;
  
    while (curNode !== null) {
      if (!hashMap[curNode.value]) {
        lastNodeList1.next = new ListNode(curNode.value);
        lastNodeList1 = lastNodeList1.next;
      }
  
      curNode = curNode.next;
    }
  
    return head1;
}

let head1 = new ListNode(12);
head1.next = new ListNode(2);
head1.next.next = new ListNode(43);

let head2 = new ListNode(0);
head2.next = new ListNode(41);

console.log(union(head1, head2).next.next.next.next.value === 41); // 12 -> 2 -> 43 -> 0 -> 41 -> null
