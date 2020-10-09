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

    /**
    * @param {TreeNode<number>} currentNode
    * @param {number} value 
    */
    delete(currentNode, value) {
        if (currentNode === null) {
            return false;
        }

        let parentNode;
        // check whether tree has the value to be deleted
        while (currentNode && currentNode.value !== value) {
            parentNode = currentNode;

            if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                currentNode = currentNode.left;
            }
        }

        if (currentNode === null) {
            return false;
        }

        // current node doesn't have children nodes
        if (currentNode.left === null && currentNode.right === null) {
            if (currentNode.value === this.root.value) {
                thir.root = null;
            }

            if (parentNode.value < currentNode.value) {
                parentNode.right = null;
            }

            if (parentNode.value > currentNode.value) {
                parentNode.left = null;
            }

            return true;
        }

        // current node has only left child node
        if (currentNode.right === null) {
            if (currentNode.value === this.root.value) {
                thir.root.left = currentNode.left;
            }

            if (parentNode.value < currentNode.value) {
                parentNode.right = currentNode.left;
            }

            if (parentNode.value > currentNode.value) {
                parentNode.left = currentNode.left;
            }

            return true;
        }

        // current node has only right child node
        if (currentNode.left === null) {
            if (currentNode.value === this.root.value) {
                thir.root.left = currentNode.right;
            }

            if (parentNode.value < currentNode.value) {
                parentNode.right = currentNode.right;
            }

            if (parentNode.value > currentNode.value) {
                parentNode.left = currentNode.right;
            }

            return true;
        }

        // current node has two children
        const minValueNode = currentNode.right;

        while (minValueNode.left !== null) {
            console.log(minValueNode)
            minValueNode = minValueNode.left;
        }

        const minValue = minValueNode.value;
        this.delete(this.root, minValueNode.value);
        currentNode.value = minValue;
        
        return true;
    }
}
