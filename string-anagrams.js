/**
Problem Statement

Given a string and a pattern, find all anagrams of 
the pattern in the given string.

Anagram is actually a Permutation of a string.
*/

// @ts-check

/**
 * @param {string} str 
 * @param {string} pattern 
 * @returns {Array<number>}
 */

const find_string_anagrams = function(str, pattern) {
    let result_indexes = [];
    let patternMap = pattern.split('').reduce((acc, cur) => ({...acc, [cur]: 1}), {});
    let windowStart = 0;
    let patternMatched = {};

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const char = str[windowEnd];

        if (patternMap[char] === undefined) {
            windowStart++;
        } else {
            if (!patternMatched[char]) {
                patternMatched[char] = 1
            } else {
                patternMatched[char]++;
            }
        }
        
        if (
            windowEnd - windowStart + 1 === pattern.length &&
            Object.keys(patternMatched).length !== Object.keys(patternMap).length
        ) {
            const charToRemove = str[windowStart];

            if (patternMatched[charToRemove] === 1) {
                delete patternMatched[charToRemove];
            } else {
                patternMatched[charToRemove]--;
            }

            windowStart++;
        }

        if (
            windowEnd - windowStart + 1 === pattern.length &&
            Object.keys(patternMatched).length === Object.keys(patternMap).length 
        ) {
            result_indexes.push(windowStart);

            delete patternMatched[str[windowStart]];
            windowStart++;
        }
    }

    return result_indexes;
};

console.log([1, 2], find_string_anagrams("ppqp", "pq"));
console.log([2, 3, 4], find_string_anagrams("abbcabc", "abc"));
