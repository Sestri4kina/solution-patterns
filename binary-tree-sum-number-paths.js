/**
Problem Statement

Given a binary tree where each node can only have a digit (0-9) value, 
each root-to-leaf path will represent a number. 
Find the total sum of all the numbers represented by all paths.
*/

// @ts-check

const TreeNode = require('./tree-node.js');

/**
 * @param {TreeNode} root 
 * @returns {any}
 */

const findSumOfPathNumbers = function(root) {
    return findSumHelper(root, 0);
};

/**
 * @param {TreeNode} root 
 * @param {number} pathSum 
 */
const findSumHelper = function(root, pathSum) {
    if (root === null) {
        return 0;
    }

    pathSum = 10 * pathSum + root.value;

    if (root.left === null && root.right === null) {
        return pathSum;
    }

    return findSumHelper(root.left, pathSum) + 
        findSumHelper(root.right, pathSum);
}

let root = new TreeNode(1);
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)

console.log(findSumOfPathNumbers(root) === 332);
