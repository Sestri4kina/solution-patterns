/**
Problem Statement

Given two lists A and B, the intersection is the largest list, 
which contains all the elements that are common to both the sets.
*/

// @ts-check

const {ListNode} = require("./linked-list-cycle");

/**
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @returns {ListNode}
 */

function intersection(head1, head2) {
  const hashMap = {};
  let curNode = head1;

  while (curNode !== null) {
      if (!hashMap[curNode.value]) {
        hashMap[curNode.value] = 1;
      }

      curNode = curNode.next;
  }

  curNode = head2;
  let curNodeResult = null;

  while (curNode !== null) {
      if (hashMap[curNode.value]) {
           if (curNodeResult === null) {
            curNodeResult = new ListNode(curNode.value);
          } else {
            curNodeResult.next = new ListNode(curNode.value);
          }

          hashMap[curNode.value] -= 1;
      }

      curNode = curNode.next;
  }
  return curNodeResult;
}

let head1 = new ListNode(10);
head1.next = new ListNode(20);
head1.next.next = new ListNode(80);
head1.next.next.next = new ListNode(60);

let head2 = new ListNode(20);
head2.next = new ListNode(43);
head2.next.next = new ListNode(60);

console.log(intersection(head2, head1).next.value === 60) // 20 -> 60 -> null 
