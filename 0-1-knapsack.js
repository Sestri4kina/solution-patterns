/**
Problem Statement

Given two integer arrays to represent weights and profits of ‘N’ items, 
we need to find a subset of these items which will give us maximum profit such 
that their cumulative weight is not more than a given number ‘C’. 
Each item can only be selected once,
which means either we put an item in the knapsack or we skip it.
*/

// @ts-check

/**
 * @param {Array<number>} profits
 * @param {Array<number>} weights
 * @param {number} capacity
 * @returns {number}
 */
const solveKnapsack = (profits, weights, capacity) => {

    /**
     * @param {Array<number>} profits 
     * @param {Array<number>} weights 
     * @param {number} capacity 
     * @param {number} curIndex 
     * @returns {number}
     */
    function knapsackRecursive(profits, weights, capacity, curIndex) {
        if (capacity <= 0 || curIndex >= profits.length) {
            return 0;
        }

        let withinCapacityProfit = 0;
        if (weights[curIndex] <= capacity) {
            withinCapacityProfit = profits[curIndex] + 
                knapsackRecursive(profits, weights, capacity - weights[curIndex], curIndex + 1);
        }

        const profit = knapsackRecursive(profits, weights, capacity, curIndex + 1);

        return Math.max(withinCapacityProfit, profit);
    }

    return knapsackRecursive(profits, weights, capacity, 0);
}

const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];
console.log(solveKnapsack(profits, weights, 7) === 22);
console.log(solveKnapsack(profits, weights, 6) === 17);

/** Top-down Dynamic Programming with Memoization */
/**
 * @param {Array<number>} profits
 * @param {Array<number>} weights
 * @param {number} capacity
 * @returns {number}
 */
const solveKnapsackWithMemoization = (profits, weights, capacity) => {
    const dp = [];

    function knapsackRecursive(profits, weights, capacity, curIndex) {
        if (capacity <= 0 || curIndex >= profits.length) {
            return 0;
        }

        dp[curIndex] = dp[curIndex] || [];
        if (dp[curIndex][capacity] !== undefined) {
            return dp[curIndex][capacity];
        }

        let withinCapacityProfit = 0;
        if (weights[curIndex] <= capacity) {
            withinCapacityProfit = profits[curIndex] + 
                knapsackRecursive(profits, weights, capacity - weights[curIndex], curIndex + 1);
        }

        const profit = knapsackRecursive(profits, weights, capacity, curIndex + 1);

        dp[curIndex][capacity] = Math.max(withinCapacityProfit, profit);

        return dp[curIndex][capacity];
    }

    return knapsackRecursive(profits, weights, capacity, 0);
}

console.log(solveKnapsackWithMemoization(profits, weights, 7) === 22);
console.log(solveKnapsackWithMemoization(profits, weights, 6) === 17);
