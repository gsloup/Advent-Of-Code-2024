import fs from 'fs';
import readline from 'readline';

export async function processInputFile() {
    let reports = [];

    const rl = readline.createInterface({
        input: fs.createReadStream('./../input.txt'),
        output: process.stdout,
        terminal: false
    });
    
    rl.on('line', (line) => {
        const fields = line.split(' ');
        reports.push(fields.map(Number));
    });

    await new Promise((resolve) => rl.on('close', resolve));

    return reports;
}
const reports = await processInputFile();
console.log( reports );

reports.forEach((report) => {
    
});