// File is used to get the day from user, then run their solution.js with that day's input.txt data

const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8').trim();
console.log(input);