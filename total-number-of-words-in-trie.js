/**
Problem Statement

Implement the totalWords() function which will find the total number of words in a trie.
Input
The root node of a trie.

Output
Returns the total number of words in a trie.
*/

// @ts-check

const TrieNode = require('./trie-node.js');
const Trie = require('./trie.js');

/**
 * @param {TrieNode} root 
 * @returns {number}
 */
function totalWords(root){
    let result = {value: 0};
    totalWordsHelper(root, result);
    return result.value;
  }

/**
 * @param {TrieNode} root 
 * @param {Object} result 
 * @param {number} result.value
 */
function totalWordsHelper(root, result) {
    if (root === null) {
        return;
    }
  
    if (root.isEndWord) {
        result.value += 1;
    }
  
    for (let i = 0; i < root.children.length; i++) {
        totalWordsHelper(root.children[i], result);
    }
}

let t = new Trie();
t.insert("data");
t.insert("structures");

console.log(totalWords(t.root) === 2);
