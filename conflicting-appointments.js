/**
Problem Statement

Given an array of intervals representing ‘N’ appointments, 
find out if a person can attend all the appointments.
*/

const {Interval} = require('./interval.js');
// @ts-check

/**
 * 
 * @param {Array<Interval>} intervals 
 * @returns {boolean}
 */

const can_attend_all_appointments = function(intervals) {
    intervals.sort((x, y) => x.start - y.start);

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i].start < intervals[i-1].end) {
            return false;
        }
    }

    return true;
};

console.log(can_attend_all_appointments([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
]) === false);
  
console.log(can_attend_all_appointments([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12),
]) === true);
  
console.log(can_attend_all_appointments([
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(3, 6),
]) === false);
