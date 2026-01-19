"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepeatNTimes = exports.GetEntriesAsArray = exports.GetEntries = void 0;
function* GetEntries(r) {
    for (const key in r) {
        yield [key, r[key]];
    }
}
exports.GetEntries = GetEntries;
function GetEntriesAsArray(r) {
    return [...GetEntries(r)];
}
exports.GetEntriesAsArray = GetEntriesAsArray;
function RepeatNTimes(value, n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(value);
    }
    return arr;
}
exports.RepeatNTimes = RepeatNTimes;
//# sourceMappingURL=misc.js.map