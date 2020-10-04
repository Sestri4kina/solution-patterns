/**
Problem Statement

Given a binary tree and a number ‘S’, 
find all paths in the tree such that the sum of all the node values of each path equals ‘S’. 
Please note that the paths can start or end at any node but all paths must follow 
direction from parent to child (top to bottom).
*/

// @ts-check

const TreeNode = require('./tree-node.js');

/**
 * @param {TreeNode} root 
 * @param {number} sum
 * @returns {number}
 */

const countPaths = function(root, sum) {
    return countPathsHelper(root, sum, new Array());
};
/**
 * @param {TreeNode} curNode 
 * @param {number} sum 
 * @param {Array<number>} curPath 
 * @returns {number}
 */
const countPathsHelper = function(curNode, sum, curPath) {
    if (curNode === null) {
        return 0;
    }

    let paths = 0;

    curPath.push(curNode.value);

    const curSum = curPath.reduce((x, acc) => x + acc, 0);
    
    if (curSum === sum) {
        paths++;
    } else {
        while(curSum > sum) {
            const first = curPath.shift();

            if (curSum - first === sum) {
                paths++;
            } else if (curSum - first < sum) {
                break;
            }
        }
    }

    paths += countPathsHelper(curNode.left, sum, curPath);
    paths += countPathsHelper(curNode.right, sum, curPath);

    curPath.pop();

    return paths;
}


let root = new TreeNode(12);

root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(countPaths(root, 11) === 2);