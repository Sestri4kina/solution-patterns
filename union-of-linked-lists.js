/**
Problem Statement

Given two lists A and B; the union is the list that contains elements or objects 
that belong to either A, or to B, or to both.
The union function will take two linked lists and return their union.

Sample Input
list1 = 10->20->80->60
list2 = 15->20->30->60->45

Sample Output
union = 45->30->15->10->20->80->60
*/

// @ts-check
const LinkedList = require('./linked-list');

/**
 * 
 * @param {LinkedList<number>} list1 
 * @param {LinkedList<number>} list2 
 * @returns {LinkedList<number>}
 */
function union(list1, list2) {
    if (list1.head === null) {
      return list2;
    }
  
    if (list2.head === null) {
      return list1;
    }
  
    const visitedNodes = {};
    let unionList = new LinkedList();

    let curNode = list1.head;
    while (curNode !== null) {
      const value = curNode.value;
      visitedNodes[value] = 1;
      unionList.insertAtHead(value);
  
      curNode = curNode.next;
    }
    
    curNode = list2.head;
    while (curNode !== null) {
      const value = curNode.value;
      if (visitedNodes[value] === undefined) {
        unionList.insertAtHead(value);
      }
  
      curNode = curNode.next;
    }
    
    return unionList;
}

let list1  = new LinkedList();
let list2  = new LinkedList();
list1.insertAtHead(1);
list1.insertAtHead(2);
list1.insertAtHead(3);
list1.insertAtHead(4);

list2.insertAtHead(3);
list2.insertAtHead(4);
list2.insertAtHead(5);
list2.insertAtHead(6);

console.log(union(list1, list2));
