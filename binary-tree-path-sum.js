/**
Problem Statement

Given a binary tree and a number ‘S’, 
find if the tree has a path from root-to-leaf such that the sum of all the node values 
of that path equals ‘S’.
*/

// @ts-check

const TreeNode = require('./tree-node.js');

/**
 * @param {TreeNode} root 
 * @param {number} sum
 * @returns {boolean}
 */

const hasPath = function(root, sum) {
    if (root === null) {
      return false;
    }

    if (root.value === sum && root.left === null && root.right === null) {
      return true;
    }

    return hasPath(root.left, sum - root.value) || hasPath(root.right, sum - root.value);
  };
  
  
let root = new TreeNode(12);
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(hasPath(root, 23) === true);
console.log(hasPath(root, 16) === false);
