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

let safeReport = 0; // total num of safe reports

reports.forEach((report) => {
    let status = null; // can be 'increasing', 'decreasing'
    let safe = true; // if still true at the end, add the point

    for (let i = 1; i < report.length; i++) {
        const prevLevel = report[i-1];
        const currentLevel = report[i];
        // console.log("current level =", currentLevel, "previous level =", prevLevel);

        const diff = prevLevel - currentLevel

        // make sure difference in numbers exists and isn't larger than 3
        if (Math.abs(diff) === 0 || Math.abs(diff) > 3) {
            safe = false;
            console.log("NUMBER PROBLEM")
            break;
        }
        // determining the sequence type
        if (diff > 0) {
            // should be decreasing since the prev sequence was decreasing
            if (status === 'increasing') {
                safe = false;
                break;
            }
            status = 'decreasing' // setting if not already set
        } else if (diff < 0) {
            // should be increasing since prev sequence was increasing
            if (status === "decreasing") {
                safe = false;
                break;
            }
            status = 'increasing';
        }
    }
    if (safe) {
        safeReport++;
    }
});

console.log("Number of safe reports: ", safeReport);