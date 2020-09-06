/**
Problem Statement

Given a string with lowercase letters only, 
if you are allowed to replace no more than ‘k’ letters 
with any letter, find the length of the longest substring 
having the same letters after replacement.
 */

// @ts-check

/**
 * @param {string} str 
 * @param {number} k 
 */

const length_of_longest_substring = function(str, k) {
    let windowStart = 0;
    let maxRepeatLetterCount = 0;
    let frequencies = {};
    let result = 0;

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const char = str[windowEnd];

        if (!frequencies[char]) {
            frequencies[char] = 0;
        }
        frequencies[char]++;

        maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencies[char]);

        if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
            const leftmostChar = str[windowStart];
            frequencies[leftmostChar]--;
            windowStart++;
        }
       
        result = Math.max(result, windowEnd - windowStart + 1);
    }

    return result;
};

console.log(5 === length_of_longest_substring("aabccbb", 2));
console.log(4 === length_of_longest_substring("abbcb", 1));
console.log(3 === length_of_longest_substring("abccde", 1));
