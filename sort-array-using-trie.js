/**
Problem Statement

In this problem, you have to implement the sortArray() function 
which will sort the elements of an array of strings.

Input
An array of strings.

Output
Returns the input array in a sorted state.

Sample Input
keys = ["the", "a", "there", "answer", "any", "by", "bye", "their","abc"]

Sample Output
['a', 'abc','answer','any','by','bye','the','their','there']
*/

// @ts-check

const Trie = require('./trie.js');
const findWords = require('./all-words-in-trie.js');

/**
 * @param {Array<string>} arr 
 * @returns {Array<string>}
 */
function sortArray(arr){
    let trie = new Trie();
    arr.forEach(key => trie.insert(key));
  
    return findWords(trie.root);
}

let arr =["abc", "aba", "ceed", "cde"];

console.log(arr);
console.log(sortArray(arr));
