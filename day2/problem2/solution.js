import { checkReports } from './../problem1/solution.js';
// example
const reports = [[1, 2, 3, 5, 9], [10, 6, 5, 4, 2, 0]];
const { safeReport, unsafeReports } = await checkReports(reports);

console.log("Unsafe Reports:", unsafeReports);