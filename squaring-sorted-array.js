/**
Problem Statement

Given a sorted array, create a new array containing squares 
of all the number of the input array in the sorted order.
*/

// @ts-check

/**
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */

const make_squares = function(arr) {
    let squares = []
    
    let left = 0;
    let right = arr.length - 1;
  
    let i = 0;
    while (i < arr.length) {
  
        if (Math.abs(arr[left]) > Math.abs(arr[right])) {
            squares.unshift(Math.pow(arr[left], 2));
            left++;
            i++;
        } else if (Math.abs(arr[left]) < Math.abs(arr[right]) ) {
            squares.unshift(Math.pow(arr[right], 2));
            right--;
            i++;
        } else if (Math.abs(arr[left]) === Math.abs(arr[right]) && left !== right) {
            squares.unshift(Math.pow(arr[left], 2), Math.pow(arr[right], 2));
            left++;
            right--;
            i += 2;
        } else {
            squares.unshift(Math.pow(arr[left], 2));
            break;
        }
  
    }
  
    return squares;
};

console.log([0, 1, 4, 4, 9], make_squares([-2, -1, 0, 2, 3]));
console.log([0, 1, 1, 4, 9], make_squares([-3, -1, 0, 1, 2]));
