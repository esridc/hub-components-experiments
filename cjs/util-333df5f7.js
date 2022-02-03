'use strict';

/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { cloneObject } from "@esri/hub-common";
 * const original = { foo: "bar" }
 * const copy = cloneObject(original)
 * copy.foo // "bar"
 * copy === original // false
 * ```
 * Make a deep clone, including arrays. Does not handle functions!
 */
function cloneObject(obj) {
    let clone = {};
    // first check array
    if (Array.isArray(obj)) {
        clone = obj.map(cloneObject);
    }
    else if (typeof obj === "object") {
        for (const i in obj) {
            /* istanbul ignore next no need to deal w/ other side of hasOwnProperty() */
            if (obj.hasOwnProperty(i)) {
                const value = obj[i];
                if (value != null && typeof value === "object") {
                    if (value instanceof Date) {
                        clone[i] = new Date(value.getTime());
                    }
                    else {
                        clone[i] = cloneObject(value);
                    }
                }
                else {
                    clone[i] = value;
                }
            }
        }
    }
    else {
        clone = obj;
    }
    return clone;
}
/**
 * Determines if a value is unique in an array
 * Allows for code like:
 *
 * ```js
 * const ary = [ 1, 2, 3, 3, 4, 5, 1 ];
 *
 * const result = ary.filter(unique);
 *
 * result => [ 1, 2, 3, 4, 5 ]
 * ```
 * @param value - the value to search for
 * @param index - the index of the searched value
 * @param ary - the array to search
 * @returns {boolean} - indicating if the value is unique in the array
 */
function unique(value, index, ary) {
    return ary.indexOf(value) === index;
}
/**
 * Add number of days to a given date
 *
 * @export
 * @param {string} date
 * @param {number} numOfDays
 * @returns {string} date string with numOfDays added to the given date
 */
function addDays(date, numOfDays) {
    try {
        const given = new Date(date);
        const dateString = new Date(given.setDate(given.getDate() + numOfDays)).toISOString();
        return dateString.split("T")[0];
    }
    catch (e) {
        throw new Error("Invalid Date");
    }
}
/**
 * Returns an array with arrays of the given size.
 *
 * @param arr Array to split
 * @param size Size of every group
 */
function chunkArray(arr, size) {
    const results = [];
    let index = 0;
    while (index < arr.length) {
        results.push(arr.slice(index, index + size));
        index += size;
    }
    return results;
}

exports.addDays = addDays;
exports.chunkArray = chunkArray;
exports.cloneObject = cloneObject;
exports.unique = unique;
