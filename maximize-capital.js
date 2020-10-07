/**
Problem Statement

Given a set of investment projects with their respective profits, 
we need to find the most profitable projects. We are given an initial capital and 
are allowed to invest only in a fixed number of projects. 
Our goal is to choose projects that give us the maximum profit. 
Write a function that returns the maximum total capital after selecting the 
most profitable projects.

We can start an investment project only when we have the required capital. 
Once a project is selected, we can assume that its profit has become our capital.

Example 1:

Input: Project Capitals=[0,1,2], Project Profits=[1,2,3], Initial Capital=1, Number of Projects=2
Output: 6
Explanation:
With initial capital of ‘1’, we will start the second project which will give us profit of ‘2’. 
Once we selected our first project, our total capital will become 3 (profit + initial capital).
With ‘3’ capital, we will select the third project, which will give us ‘3’ profit.

After the completion of the two projects, our total capital will be 6 (1+2+3).
*/

// @ts-check
const Heap = require('collections/heap');

/**
 * 
 * @param {Array<number>} projectsCapital 
 * @param {Array<number>} profits 
 * @param {number} numberOfProjects 
 * @param {number} initialCapital 
 * @returns {number}
 */
const findMaximumCapital = function(projectsCapital, profits, numberOfProjects, initialCapital) {
    const projectsHeap = new Heap(projectsCapital, null, (a, b) => b-a);
    let capital = initialCapital;

    for (let i = 0; i < numberOfProjects; i++) {
        // @ts-ignore
        const projectsWithinAvailableCapital = projectsHeap.filter(x => x <= capital);

        const availableProjectsProfits = projectsWithinAvailableCapital.map(capital => {
            const index = projectsHeap.indexOf(capital);
            return profits[index];
        })

        const profitsHeap = new Heap(availableProjectsProfits, null, (a, b) => a-b);

        capital += profitsHeap.peek();
    }

    return capital;
};
  
console.log(findMaximumCapital([0, 1, 2], [1, 2, 3], 2, 1) === 6);
console.log(findMaximumCapital([0, 1, 2, 3], [1, 2, 3, 5], 3, 0) === 8);
