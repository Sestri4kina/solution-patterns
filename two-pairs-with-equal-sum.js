/**
Problem Statement

Implement the findPair() function which will find two pairs [a, b] and [c, d] in an array such that:
a+b=c+da+b = c+da+b=c+d
You only have to find the first two pairs in the array which satisfies the above condition. 
Assume that the input array does not contain any duplicates.

Input: An array of distinct integers.

Output: An array containing two pairs (a, b) and (c, d) which satisfy a + b = c + d

Sample Input: var my_list = [3, 4, 7, 1, 12, 9]

Sample Output: [[4,12],[7,9]]
*/

// @ts-check
/**
 * 
 * @param {Array<number>} list 
 * @returns {Array<Array<number>>}
 */
function findPair(list){
    list.sort((a, b) => a-b);
    // find difference between next to each other numbers
    const map = {};
  
    for (let i = 1; i < list.length; i++) {
        map[i] = list[i] - list[i-1];
    }
  
    const reverseMap = {};
    let x1, x2, y1, y2;

    // reverse pair-difference map
    for (let key of Object.keys(map)) {
        const value = map[key];
  
        if (reverseMap[value] === undefined) {
            reverseMap[value] = key;
        } else {
            // if reference map already contains key => two pairs have the same difference
            const i = Number(reverseMap[value]);
            const j = Number(key);
            [x1, y1] = [list[i-1], list[i]];
            [x2, y2] = [list[j-1], list[j]];
            break;
      }
    }
  
    return [[x1, y2], [x2, y1]];
}

console.log(JSON.stringify(findPair([3, 4, 7, 1, 12, 9])));
