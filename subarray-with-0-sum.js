/**
Problem Statement

Implement the findSubZero(list) function which will take in an array of positive and negative integers. 
It will tell us if there exists a sublist in which the sum of all elements is zero. 
The term subarray implies that the elements whose sum is 0 must occur consecutively.

An array with these contents would return true:
[6, 4, -7, 3, 12, 9]

Whereas this would return false as the elements which sum up to be 0 do not appear together:
[-7, 4, 6, 3, 12, 9]

Input
An array containing positive and negative integers.

Output
Returns true if there exists a subarray with its sum equal to 0. Otherwise, the function returns false.

Sample Input: var my_list = [6, 4, -7, 3, 12, 9}]

Sample Output: true
*/

// @ts-check

/**
 * @param {Array<number>} list 
 * @returns {boolean}
 */
function findSubarrayWithZeroSum(list){
    const hasZeroElement = list.some(element => element === 0);
    if (hasZeroElement) {
        return true;
    }

    const negativeNumbersIndexes = [];
    list.forEach((num, i) => {
        if (num < 0) {
            negativeNumbersIndexes.push(i);
        }
    });
    if (negativeNumbersIndexes.length === 0) {
        return false;
    }

    const findSubarrayWithZeroSumByNegativeNumberIndex = (list, negativeNumberIndex) => {
        // check to the right
        let sum = list[negativeNumberIndex];
        let curIndex = negativeNumberIndex + 1;
        let rightmostIndex = curIndex;
        while (sum < 0 &&  curIndex < list.length) {
            rightmostIndex = curIndex;
            sum += list[curIndex];
            curIndex++;
        }
        if (sum === 0) {
            return true;
        }
        rightmostIndex--;

        // check to the left
        curIndex = negativeNumberIndex - 1;
        sum = list[negativeNumberIndex];
        let leftmostIndex = curIndex;
        while (sum < 0 && curIndex >= 0) {
            leftmostIndex = curIndex;
            sum += list[curIndex];
            curIndex--;
        }
        if (sum === 0) {
            return true;
        }
        leftmostIndex++;

        // check whether sum from leftmostIndex to rightmostIndex equals 0
        sum = 0;
        for (let i = leftmostIndex; i <= rightmostIndex; i++) {
            sum += list[i];
        }

        if (sum === 0) {
            return true;
        }

        return false;
    }
    
    // repeat for every negative number in list until all numbers are checked or subarray is found
    for (let index of negativeNumbersIndexes) {
        if (findSubarrayWithZeroSumByNegativeNumberIndex(list, index)) {
            return true;
        } 
    }

    return false;
}

console.log(findSubarrayWithZeroSum([6, 4, -7, 3, 12, 9]) === true);
console.log(findSubarrayWithZeroSum([-7, 4, 6, 3, 12, 9]) === false);
console.log(findSubarrayWithZeroSum([0, 1, -2, 1]) === true);
console.log(findSubarrayWithZeroSum([0, 0, 1, 2]) === true);
console.log(findSubarrayWithZeroSum([1, 1, 1, 1]) === false);
