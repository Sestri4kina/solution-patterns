/**
Problem Statement

Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the 
shortest path from the root node to the nearest leaf node.
*/

// @ts-check

const Queue = require('./queue.js');
const TreeNode = require('./tree-node.js');

/**
 * @param {TreeNode} root 
 * @returns {number}
 */

const find_minimum_depth = function(root) {
    if (root === null) {
        return 0;
    }
    let queue = new Queue();
    queue.enqueue(root);
    let curLevel = 0;

    while (queue.size() > 0) {
        const curSize = queue.size();
        curLevel++;

        for (let i = 0; i < curSize; i++) {
            const curNode = queue.dequeue();

            if (curNode.left === null &&  curNode.right === null) {
                return curLevel;
            }

            if (curNode.left !== null) {
                queue.enqueue(curNode.left);
            }

            if (curNode.right !== null) {
                queue.enqueue(curNode.right);
            }  
        }
    }

    return curLevel;
};



let root = new TreeNode(12);
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(find_minimum_depth(root) === 2);

root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)

console.log(find_minimum_depth(root) === 3);
