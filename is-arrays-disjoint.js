/**
Problem Statement

You have to implement the isDisjoint() function which checks whether two given arrays are disjointed or not.
Two arrays are disjointed if there are no common elements between them. 
The assumption is that there are no duplicate elements in each array.
*/

// @ts-check
const HashTable = require('./hash-table.js');

/**
 * @param {Array<number>} list1 
 * @param {Array<number>} list2 
 * @returns {boolean}
 */

function isDisjoint(list1,list2){  
    const hashTable = new HashTable();
    list1.forEach((element, i) => hashTable.insert(element, i));
    
    return list2.every(element => hashTable.search(element) === null);
}

console.log(isDisjoint([1,3,5,7], [2,4,6,8]) === true);
console.log(isDisjoint([1,2,3,4], [1,2,5]) === false);
