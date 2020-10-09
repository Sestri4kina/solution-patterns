/**
Problem Statement

Given a string, find all of its permutations preserving the character sequence but changing case.

Example 1:
Input: "ad52"
Output: "ad52", "Ad52", "aD52", "AD52"
*/

// @ts-check

/**
 * 
 * @param {string} str
 * @returns {Array<string>} 
 */

const findCaseSensetivePermutations = function(str) {
    const chars = str.split('');
    let permutations = [chars];
	const isSmallLetter = /[a-z]/;
	const isBigLetter = /[A-Z]/;
	const isLetter = /[a-zA-Z]/;

    for (let i = 0; i < chars.length; i++) {
		const char = chars[i];
		if (!isLetter.test(char)) {
			continue;
		}
	   
		permutations.forEach(subset => {
			let newPermutation = subset.slice(0);

			if (isSmallLetter.test(char)) {
				newPermutation.splice(i, 1, char.toUpperCase());
				permutations.push(newPermutation);
			} else if (isBigLetter.test(char)) {
				newPermutation.splice(i, 1, char.toLowerCase());
				permutations.push(newPermutation);
			}
		});
	}

    return permutations.map(arr => arr.join(''));
};
  
console.log(JSON.stringify(findCaseSensetivePermutations("ad52")));
console.log(JSON.stringify(findCaseSensetivePermutations("ab7c")));
