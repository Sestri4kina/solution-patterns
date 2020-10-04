/**
Problem Statement

Given a binary tree and a number sequence, 
find if the sequence is present as a root-to-leaf path in the given tree.
*/

// @ts-check

const TreeNode = require('./tree-node.js');

/**
 * @param {TreeNode} root 
 * @param {Array<number>} sequence
 * @returns {boolean}
 */

const findPath = function(root, sequence) {
    if (root === null) {
        return sequence.length === 0;
    }

    return findPathHelper(root, sequence, 0);
};
/**
 * 
 * @param {TreeNode} curNode 
 * @param {Array<number>} sequence 
 * @param {number} sequenceIndex
 */
const findPathHelper = function(curNode, sequence, sequenceIndex) {
    if (curNode === null) {
        return false;
    }

    if (sequenceIndex >= sequence.length || curNode.value !== sequence[sequenceIndex]) {
        return false;
    }

    if (
        curNode.left === null && curNode.right === null && 
        sequenceIndex === sequence.length - 1
    ) {
        return true;
    }

    return findPathHelper(curNode.left, sequence, sequenceIndex + 1) || 
        findPathHelper(curNode.right, sequence, sequenceIndex + 1);
}

let root = new TreeNode(1);
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)

console.log(findPath(root, [1, 0, 7]) === false);
console.log(findPath(root, [1, 1, 6]) ===  true);
