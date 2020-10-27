/**
Problem Statement

Implement the isSubset(list1,list2) function which will take two arrays as 
input and check whether one array is the subset of the other.
Note: The input arrays do not contain duplicate values.

Sample Input:
var list1 = [9,4,7,1,-2,6,5]
var list2 = [7,1,-2]

Sample Output: true
*/

// @ts-check
const HashTable = require('./hash-table.js');

/**
 * @param {Array<number>} list1 
 * @param {Array<number>} list2 
 * @returns {boolean}
 */
function isSubset(list1, list2){
    let hashTable = new HashTable();
    list1.forEach((element, index) => hashTable.insert(element, index));
    
    return list2.every(element => hashTable.search(element) !== null);
}

console.log(isSubset([9,4,7,1,-2,6,5], [7,1,-2]) === true);
console.log(isSubset([9,4,7,1,-2,6,5], [7,1,-2,11,6]) === false);
