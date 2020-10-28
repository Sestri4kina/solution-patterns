/**
Problem Statement

By definition, (a, b) and (c, d) are symmetric pairs iff, a = d and b = c. 
In this problem, you have to implement the findSymmetric(list) function which 
will find all the symmetric pairs in the ​given array.

Input
An array of pairs. The first element of each pair would be unique.

Output
An array containing all the symmetric pairs of integers in the input array.

Sample Input
var list = [[1, 2], [3, 4], [5, 9], [4, 3], [9, 5]]

Sample Output
[[3, 4], [4, 3], [5, 9], [9, 5]]
*/

// @ts-check
const HashTable = require('./hash-table.js');

/**
 * @param {Array<Array<number>>} list
 * @returns {Array<Array<number>>}
 */
function findSymmetricPairs(list){
    const hashTable = new HashTable();
    const result = [];

    for (let i = 0; i < list.length; i++) {
        const pair = list[i];
        hashTable.insert(pair[0], pair[1]);

        if (hashTable.search(pair[1]) !== null) {
            if (pair[0] === hashTable.search(pair[1])) {
                result.push(pair);
                result.push([pair[1], pair[0]]);
            }
        }
    }

    return result;
}

console.log(findSymmetricPairs([[1, 2], [3, 4], [5, 9], [4, 3], [9, 5]]));
