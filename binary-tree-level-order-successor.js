/**
Problem Statement

Given a binary tree and a node, find the level order successor 
of the given node in the tree. The level order successor 
is the node that appears right after the given node in the level order traversal.
*/

// @ts-check

const TreeNode = require('./tree-node.js');
const Queue = require('./queue.js');

/**
 * @param {TreeNode} root 
 * @param {number} key
 * @returns {TreeNode}
 */

const findSuccessor = function(root, key) {
    let queue = new Queue();
    queue.enqueue(root);

    while (!queue.isEmpty()) {
        let curNode = queue.dequeue();

        if (curNode.value === key) {
            if (queue.isEmpty()) {
                return curNode.left;
            } else {
                return queue.dequeue();
            }
        }

        if (curNode.left !== null) {queue.enqueue(curNode.left);}
        if (curNode.right !== null) {queue.enqueue(curNode.right);}
    }

    return null;
};
  
  
let root = new TreeNode(12);
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

let result = findSuccessor(root, 12)
if (result != null)  {
    console.log(result.value === 7);
}

result = findSuccessor(root, 9)
if (result != null) {
    console.log(result.value === 10)
}
