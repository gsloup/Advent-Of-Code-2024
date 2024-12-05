const fs = require('fs');
const readline = require('readline')

const rl = readline.createInterface({
    input: fs.createReadStream('./input.txt'),
    output: process.stdout,
    terminal: false
});

let firstList = [];
let secondList = [];

rl.on('line', (line) => {
    const fields = line.split(/\s+/);
    const firstNum = Number(fields[0]);
    const secondNum = Number(fields[1]);

    // console.log(firstNum)
    
    firstList.push(firstNum);
    secondList.push(secondNum);
});

rl.on('close', () => {
    console.log("Done");
    console.log(firstList)
});

