/**
Problem Statement

You have to implement the findWords() function which will return all the words stored in Trie.
Input
The root node of a trie.

Output
A list of all the words stored in a trie.

Sample Input
keys = ["the", "a", "there", "answer", "any", "by", "bye", "their", "abc"]

Sample Output
["a", "abc", "answer", "any", "by", "bye", "the", "their", "there"]
*/

// @ts-check

const TrieNode = require('./trie-node.js');
const Trie = require('./trie.js');

const MAX_LENGTH_WORD = 20;

/**
 * @param {TrieNode} root 
 * @returns {Array<string>}
 */
function findWords(root) {
    let result = [];
    let curChars = Array.from(new Array(MAX_LENGTH_WORD)).map(_ => null);

    findWordsHelper(root, 0, result, curChars);

    return result;
}

/**
 * @param {TrieNode} root 
 * @param {number} level
 * @param {Array<string>} result 
 * @param {Array<string>} curChars 
 */
function findWordsHelper(root, level, result, curChars) {
    if (root.isEndWord) {
        let curWord = '';
        for (let i = 0; i < level; i++) {
            curWord += curChars[i];
        }
        result.push(curWord);
    }

    for (let i = 0; i < root.children.length; i++) {
        if (root.children[i] !== null) {
            curChars[level] = String.fromCharCode(i + 'a'.charCodeAt(0));
            findWordsHelper(root.children[i], level + 1, result, curChars);
        }
    }
}

let tr = new Trie();
let keys = ["The", "Their", "is", "our", "first", "trie"];
  
for(var x = 0; x < keys.length; x++){
    tr.insert(keys[x]);
}

console.log(findWords(tr.root));
