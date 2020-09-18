/**
Problem Statement

Given a list of non-overlapping intervals sorted by their start time, 
insert a given interval at the correct position and merge 
all necessary intervals to produce a list that has only mutually exclusive intervals.
*/

// @ts-check

const {Interval} = require('./merge-intervals.js');
console.log('----------------------')  
/**
 * @param {Array<Interval>} intervals 
 * @param {Interval} new_interval
 * @returns {Array<Interval>}
 */

const insert = function(intervals, new_interval) {
    let start = new_interval.start;
    let end = new_interval.end;
    let beforeIntervalIndex = null;
    let afterIntervalIndex = null;

    for (let i = 0; i < intervals.length; i++) {
        const curStart = intervals[i].start;
        const prevStart = i !== 0 ? intervals[i-1].start : undefined;
        const prevEnd = i !== 0 ? intervals[i-1].end : undefined;

        if (start < curStart) {
            if (prevEnd && start < prevEnd) {
                start = prevStart;
            } else {
                beforeIntervalIndex = i;
            }  
            
            for (let j = i; j < intervals.length; j++) {
                if (end <= intervals[j].end) {
                    end = intervals[j].end;
                    afterIntervalIndex = j+1;
                    break;
                } else {
                    afterIntervalIndex = j+1;
                }
            }

            break;
        }
    }

    return beforeIntervalIndex ? 
        [
            ...intervals.slice(0, beforeIntervalIndex), 
            new Interval(start, end), 
            ...intervals.slice(afterIntervalIndex)
        ] : [
            new Interval(start, end), 
            ...intervals.slice(afterIntervalIndex)
        ];
};

console.log(insert(
    [new Interval(1,3), new Interval(5,7), new Interval(8,12)], 
    new Interval(4,6)
)); // [[1,3], [4,7], [8,12]]
console.log(insert(
    [new Interval(1,3), new Interval(5,7), new Interval(8,12)], 
    new Interval(4,10)
)); // [[1,3], [4,12]]
console.log(insert(
    [new Interval(1,3), new Interval(5,7), new Interval(8,12)], 
    new Interval(4,15)
)); // [[1, 3], [4, 15]]
console.log(insert(
    [new Interval(1,3), new Interval(5,7), new Interval(8,13), new Interval(10,12)], 
    new Interval(2,9)
)); // [[1,13], [10,12]]
