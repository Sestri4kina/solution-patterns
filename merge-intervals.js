/**
Problem Statement

Given a list of intervals, merge all the overlapping intervals 
to produce a list that has only mutually exclusive intervals.
*/

// @ts-check

class Interval {
    /**
     * @param {number} start 
     * @param {number} end 
     */
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  
    get_interval() {
      return "[" + this.start + ", " + this.end + "]";
    }
  }
  
/**
 * @param {Array<Interval>} intervals 
 * @returns {Array<Interval>}
 */
const merge = function(intervals) {
    intervals.sort((i1, i2) => i1.start - i2.start);
    let merged = []
    let curStart = intervals[0].start;
    let curEnd = intervals[0].end;

    for (let i = 1; i < intervals.length; i++) {
      if (curEnd >= intervals[i].start) {
        const newEnd = Math.max(curEnd, intervals[i].end);
        curEnd = newEnd;
      } else {
        merged.push(new Interval(curStart, curEnd));
        curStart = intervals[i].start;
        curEnd = intervals[i].end;
      }
    }
    merged.push(new Interval(curStart, curEnd));
    return merged;
};

console.log(merge([new Interval(1,4), new Interval(2,5), new Interval(7,9)])); // [[1,5], [7,9]]
console.log(merge([new Interval(6,7), new Interval(2,4), new Interval(5,9)])) // [[2,4], [5,9]]
console.log(merge([new Interval(1,4), new Interval(2,6), new Interval(3,5)])) // [[1,6]]
