/**
Problem Statement

Given a string, find the length of the 
longest substring which has no repeating characters.
*/

/**
 * @param {string} str
 */

// @ts-check

const non_repeat_substring = function(str) {
    let result = 0;
    // key: char, value: last position of char in str;
    let frequencies = new Map();
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const char = str[windowEnd];

        if (!frequencies.has(char)) {
            frequencies.set(char, windowEnd);
        } else {
            const lastCharPosition = frequencies.get(char);
            windowStart = lastCharPosition + 1;
            frequencies.set(char, windowEnd);
        }

        result = Math.max(result, windowEnd - windowStart + 1);
    }

    return result;
};

console.log(3 === non_repeat_substring("aabccbb"));
console.log(2 === non_repeat_substring("abbbb"));
console.log(3 === non_repeat_substring("abccde"));
console.log(7 === non_repeat_substring("cabckfhdcde"));
