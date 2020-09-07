/**
Problem Statement

Given a string and a pattern, find out if the string 
contains any permutation of the pattern.
Permutation is defined as the re-arranging of the characters of the string.
*/

// @ts-check

/**
 * @param {string} str 
 * @param {string} pattern 
 */

const find_permutation = function(str, pattern) {
    const patternMap = pattern.split('').reduce((acc, cur) => {
        return {...acc, [cur]: 1};
    }, {});
    const patternLength = pattern.length;
    let curInPatternCount = 0;

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const char = str[windowEnd];

        if (!patternMap[char]) {
            curInPatternCount = 0;
        } else {
            curInPatternCount++;
        }
        
        if (curInPatternCount === patternLength) {
            return true;
        }
    }
    
    return false;
};

console.log(true === find_permutation("oidbcaf", "abc"));
console.log(false === find_permutation("odicf", "dc"));
console.log(true === find_permutation("bcdxabcdy", "bcdyabcdx"));
console.log(true === find_permutation("aaacb", "abc"));
