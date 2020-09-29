/**
Problem Statement

Given a binary tree, populate an array to represent its zigzag level order traversal. 
You should populate the values of all nodes of the first level from left to right, then right to left for the next level and 
keep alternating in the same manner for the following levels.
*/

// @ts-check

const Queue = require('./queue.js');
const TreeNode = require('./tree-node.js');

/**
 * @param {TreeNode} root 
 * @returns {Array<Array<number>>}
 */

const traverse = function(root) {
    let result = [];
    let queue = new Queue();
    queue.enqueue(root);
    let direction = true;

    while (queue.size() > 0) {
        const curSize = queue.size();
        let curLevel = [];

        for (let i = 0; i < curSize; i++) {
            let curNode = queue.dequeue();
            
            if (direction) {
                curLevel.push(curNode.value);
            } else {
                curLevel.unshift(curNode.value);
            }

            if (curNode.left !== null) {
                queue.enqueue(curNode.left);
            }

            if (curNode.right !== null) {
                queue.enqueue(curNode.right);
            }
        }

        result.push(curLevel);
        direction = !direction;
    }

    return result;
};
  
  
let root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
root.right.left.left = new TreeNode(20)
root.right.left.right = new TreeNode(17)

console.log(`Zigzag traversal: ${traverse(root)}`);
