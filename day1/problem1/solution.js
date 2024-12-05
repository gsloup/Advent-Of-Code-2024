import fs from 'fs';
import readline from 'readline';

/*
    Reads the input.txt file line by line, sorting the left and right column
        of numbers into their own array
*/
async function processInputFile() {
    let firstList = [];
    let secondList = [];
    
    const rl = readline.createInterface({
        input: fs.createReadStream('./input.txt'),
        output: process.stdout,
        terminal: false
    });
    
    rl.on('line', (line) => {
        const fields = line.split(/\s+/);
        const [ firstNum, secondNum ] = fields.map(Number);
        
        firstList.push(firstNum);
        secondList.push(secondNum);
    });

    await new Promise((resolve) => rl.on('close', resolve));

    return { firstList, secondList };
}
// -----------------------------------------------------------

const { firstList, secondList } = await processInputFile();

// Sort each num array into ascending order
firstList.sort(function(a, b){return a-b});
secondList.sort(function(a, b){return a-b});

let sumOfDifferences = 0;

// Compare each corresponding value from one list to the other, adding the differences between them
firstList.map((firstValue, index) => {
    const secondValue = secondList[index];
    sumOfDifferences += Math.abs(firstValue - secondValue);
})

console.log("The total sum of differences between the two compared lists: ", sumOfDifferences)
/*
    Solves the problem with: 2970687
    "That's the right answer! You are one gold star closer to finding the Chief Historian."
*/
