/**
Problem Statement

Given a binary tree, populate an array to represent the averages of all of its levels.
*/

// @ts-check

const Queue = require('./queue.js');
const TreeNode = require('./tree-node.js');

/**
 * @param {TreeNode} root 
 * @returns {Array<number>}
 */

const find_level_averages = function(root) {
    let result = [];
    let queue = new Queue();
    queue.enqueue(root);

    while(queue.size() > 0) {
        const curSize = queue.size();
        let curSum = 0;

        for (let i = 0; i < curSize; i++) {
            const curNode = queue.dequeue();
            curSum += curNode.value;

            if (curNode.left !== null) {
                queue.enqueue(curNode.left);
            }

            if (curNode.right !== null) {
                queue.enqueue(curNode.right);
            }
        }

        result.push(curSum / curSize);
    }
    
    return result;
};  
  
let root = new TreeNode(12);
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level averages are: ${find_level_averages(root)}`); // [12, 4, 6.5]
