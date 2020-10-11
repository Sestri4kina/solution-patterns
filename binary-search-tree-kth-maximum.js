/**
Problem Statement

Implement a function findKthMax(root,k) which will take a BST and 
any number “k” as an input and return kth maximum number from that tree. 
Assume that “k” will always be less than or equal to the total number of nodes.

Input
The root node for a binary search tree and any number k

Output
Returns kth maximum value from the given tree
*/

// @ts-check

const TreeNode = require('./tree-node.js');
const BinarySearchTree = require('./binary-search-tree.js');

let counter;

/**
 * @param {TreeNode} rootNode 
 * @param {number} k
 * @returns {number}
 */
function findKthMax(rootNode, k){
    counter = 0;
    return reverseInOrder(rootNode, k).value;
}

/**
 * @param {TreeNode} rootNode 
 * @param {number} k
 * @returns {TreeNode} 
 */
function reverseInOrder(rootNode, k) {
    if (rootNode) {
        const rightChild = reverseInOrder(rootNode.right, k);

        if (rightChild && counter === k) {
            return rightChild;
        } else {
            counter++;
            if (k === counter) {
                return rootNode;
            }
            
            return reverseInOrder(rootNode.left, k);
        }
    }
}

let BST = new BinarySearchTree(6);
BST.insertBST(1);
BST.insertBST(133);
BST.insertBST(12);

console.log(findKthMax(BST.root, 3) === 6);
