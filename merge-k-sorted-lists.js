/**
Problem Statement

Given an array of ‘K’ sorted LinkedLists, merge them into one sorted list.

Example 1:

Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4]
Output: [1, 2, 3, 3, 4, 6, 6, 7, 8]

Example 2:

Input: L1=[5, 8, 9], L2=[1, 7]
Output: [1, 5, 7, 8, 9]
*/

// @ts-check
const MaxHeap = require('./max-heap.js');
const {ListNode} = require('./list-node.js');

/**
 * 
 * @param {Array<ListNode>} lists 
 * @returns {ListNode}
 */
const mergeLists = function(lists) {
    let resultHead = null;
    let heap = new MaxHeap();

    lists.forEach(list => {
        let curNode = list;
        while (curNode !== null) {
            heap.insert(curNode.value);
            curNode = curNode.next;
        }
    })

    while (heap.elements !== 0) {
        const max = heap.removeMax();

        if (resultHead === null) {
            resultHead = new ListNode(max);
        } else {
            let newRoot = new ListNode(max);
            newRoot.next = resultHead;
            resultHead = newRoot;
        }
    }

    return resultHead;
};  

let l1 = new ListNode(2);
l1.next = new ListNode(6);
l1.next.next = new ListNode(8);

let l2 = new ListNode(3);
l2.next = new ListNode(6);
l2.next.next = new ListNode(7);

let l3 = new ListNode(1);
l3.next = new ListNode(3);
l3.next.next = new ListNode(4);

let result = mergeLists([l1, l2, l3]);
let output = "Merged result: ";
while (result != null) {
  output += result.value + " ";
  result = result.next;
}
console.log(output);
