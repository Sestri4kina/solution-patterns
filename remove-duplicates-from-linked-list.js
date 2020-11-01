/**
Problem Statement

When a linked list is passed to this function, 
it removes any node that is a duplicate of an already existing node.

Sample Input
LinkedList = 1->2->2->2->3->4->4->5->6

Sample Output
LinkedList = 1->2->3->4->5->6
*/

// @ts-check
const LinkedList = require('./linked-list');
const ListNode = require('./list-node');

/**
 * @param {LinkedList} list 
 */
function removeDuplicates(list) {
    const visitedNodes = {};
    
    if (list.head === null) {
      return list;
    }
  
    let curNode = list.head;
    let prevNode = curNode;
    while (curNode !== null) {
      const value = curNode.value;
  
      if (visitedNodes[value] === undefined) {
        visitedNodes[value] = 1;
      } else {
        // if already visited, remove node
        const next = curNode.next;
        curNode = prevNode;
        curNode.next = next;
      }
  
      prevNode = curNode;
      curNode = curNode.next;
    }
  
    return list;
}

let list = new LinkedList();
list.insertAtHead(7);
list.insertAtHead(7);
list.insertAtHead(7);
list.insertAtHead(22);
list.insertAtHead(14);
list.insertAtHead(21);
list.insertAtHead(14);
list.insertAtHead(7);

console.log(removeDuplicates(list));
