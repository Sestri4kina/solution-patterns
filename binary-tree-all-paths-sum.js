/**
Problem Statement

Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the 
sum of all the node values of each path equals ‘S’.
*/

// @ts-check

const TreeNode = require('./tree-node.js');

/**
 * @param {TreeNode} root 
 * @param {number} sum
 * @returns {Array<Array<number>>}
 */

const findPaths = function (root, sum) {
    let allPaths = [];
    findPathsHelper(root, sum, new Array(), allPaths);
    return allPaths;
};

/**
 * @param {TreeNode} root 
 * @param {number} sum 
 * @param {Array<number>} curPath 
 * @param {Array<Array<number>>} allPaths 
 */
const findPathsHelper = function (root, sum, curPath, allPaths) {
    if (root === null) {
        return;
    }

    curPath.push(root.value);

    if (root.value === sum && root.left === null && root.right === null) {
        allPaths.push(Array.from(curPath));
    } else {
        findPathsHelper(root.left, sum - root.value, curPath, allPaths);
        findPathsHelper(root.right, sum - root.value, curPath, allPaths);
    }

    curPath.pop();  
} 

let root = new TreeNode(12);
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(findPaths(root, 23));
