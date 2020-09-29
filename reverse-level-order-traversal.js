/**
Problem Statement

Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, 
i.e., the lowest level comes first. You should populate the values of all nodes 
in each level from left to right in separate sub-arrays.
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

    while (queue.size() > 0) {
        const curSize = queue.size();
        let curLevel = [];

        for (let i = 0; i < curSize; i++) {
            const curNode = queue.dequeue();

            curLevel.push(curNode.value);

            if (curNode.left !== null) {
                queue.enqueue(curNode.left);
            }

            if (curNode.right !== null) {
                queue.enqueue(curNode.right);
            }
        }

        result.unshift(curLevel);
    }

    return result;
}

let root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Reverse level order traversal: ${traverse(root)}`);
