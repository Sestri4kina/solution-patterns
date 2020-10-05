const TreeNode = require('./tree-node.js');

module.exports = class BinarySearchTree {
    /** @param {number} rootValue */
    constructor(rootValue) {
        /** @property {TreeNode<number>} root */
        this.root = new TreeNode(rootValue);
    }

    /** @param {number} newValue */
    insertIterative(newValue) {
        if (this.root === null) {
            this.root = new TreeNode(newValue);
            return;
        }
        let curNode = this.root;
        let lastLeaf;

        while (curNode !== null) {
            lastLeaf = curNode;
            if (newValue >= curNode.value) {
                curNode = curNode.right;
            } else {
                curNode = curNode.left;
            }
        }
        
        if (newValue > lastLeaf.value) {
            lastLeaf.right = new TreeNode(newValue);
        } else {
            lastLeaf.left = new TreeNode(newValue);
        }
    }

    /** 
     * @param {TreeNode<number>} curNode 
     * @param {number} newValue
     */
    insert(curNode, newValue) {
        if (curNode === null) {
            curNode = new TreeNode(newValue);
        } else if (newValue > curNode.value) {
            curNode.right = this.insert(curNode.right, newValue);
        } else {
            curNode.left = this.insert(curNode.left, newValue);
        }

        return curNode;
    }

    /** @param {number} newValue */
    insertBST(newValue) {
        if (this.root === null) {
            this.root = new TreeNode(newValue);
            return;
        }

        this.insert(this.root, newValue);
    }

    /** @param {TreeNode<number>} curNode */
    /** root -> left -> right */
    preOrderPrint(curNode) {
        if (curNode !== null) {
            console.log(curNode.value);
            this.preOrderPrint(curNode.left);
            this.preOrderPrint(curNode.right);
        }
    }

    /** @param {TreeNode<number>} curNode */
    /** left -> root -> right */
    inOrderPrint(curNode) {
        if (curNode !== null) {
            this.inOrderPrint(curNode.left);
            console.log(curNode.value);
            this.inOrderPrint(curNode.right);
        }
    }

    /** @param {TreeNode<number>} curNode */
    /** left -> right -> root */
    postOrderPrint(curNode) {
        if (curNode !== null) {
            this.postOrderPrint(curNode.left);
            this.postOrderPrint(curNode.right);
            console.log(curNode.value);
        }
    }

    /** 
     * @param {TreeNode<number>} curNode
     * @param {number} value 
     */
    search(curNode, value) {
        if (curNode !== null) {
            if (value === curNode.value) {
                return curNode;
            } else if (value > curNode.value) {
                return this.search(curNode.right, value);
            } else {
                return this.search(curNode.left, value);
            }
        } else {
            return curNode;
        }
    }

    /** @param {number} value */
    searchBST(value) {
        return this.search(this.root, value);
    }
}
