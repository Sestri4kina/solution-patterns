/**
Problem Statement 

Given an array of characters where each character represents a fruit tree, 
you are given two baskets and your goal is to put maximum number of fruits in each basket. 
The only restriction is that each basket can have only one type of fruit.
You can start with any tree, but once you have started you can’t skip a tree. 
You will pick one fruit from each tree until you cannot, i.e., 
you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.
*/

// @ts-check

/**
 * @param {Array<string>} fruits
 */

const fruits_into_baskets = function(fruits) {
    let longest = 0;
    let curSubtree = [];
    // track distinct fruits
    let curDistinct = {};
    let curDistinctCount = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        let fruit = fruits[windowEnd];

        if (!curDistinct[fruit]) {
            curDistinct[fruit] = 1;
            curDistinctCount++;
        }

        curSubtree.push(fruit);

        while (curDistinctCount > 2) {
            const removed = curSubtree.shift();
            delete curDistinct[removed];
            curDistinctCount--;
            windowStart++;
        }
        longest = Math.max(longest, windowEnd - windowStart + 1);
    }
    return longest;
};

console.log(3 === fruits_into_baskets(['A', 'B', 'C', 'A', 'C']));
console.log(5 === fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']));
  