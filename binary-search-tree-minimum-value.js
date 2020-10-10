/**
Problem Statement

Implement the findMin(root) 
function which will find the minimum value in a given Binary Search Tree. 
*/

// @ts-check

const TreeNode = require('./tree-node.js');
const BinarySearchTree = require('./binary-search-tree.js');

/**
 * @param {TreeNode} rootNode 
 * @returns {number}
 */

function findMin(rootNode) {
    if (rootNode === null) {
        return -1;
    }

    let minValue = rootNode.value; 
    let curNode = rootNode;

    while (curNode !== null) {
        if (minValue > curNode.value) {
            minValue = curNode.value;
        }

        if (curNode.left !== null) {
            curNode = curNode.left;
        } else if (curNode.right !== null) {
            curNode = curNode.right;
        } else {
            curNode = curNode.left;
        }
    }

    return minValue;
}

let BST = new BinarySearchTree(6);
BST.insertBST(20);
BST.insertBST(-5);

console.log(findMin(BST.root));
