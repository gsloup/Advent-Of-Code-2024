// import fs from 'fs';
// import readline from 'readline';

// export async function processInputFile() {
//     let reports = [];

//     const rl = readline.createInterface({
//         input: fs.createReadStream('./../input.txt'),
//         output: process.stdout,
//         terminal: false
//     });
    
//     rl.on('line', (line) => {
//         const fields = line.split(' ');
//         reports.push(fields.map(Number));
//     });

//     await new Promise((resolve) => rl.on('close', resolve));

//     return reports;
// }
// const reports = await processInputFile();
// console.log( reports );
const reports = [[
    42, 44, 47, 49,
    51, 52, 54, 52
  ]]

let safeReport = 0;

reports.forEach((report) => {
    let status = 'safe'; // can be 'increasing', 'decreasing', 'unsafe', 'safe'

    for (let i = 0; i < report.length; i++) {
        const currentLevel = report[i];
        console.log("current level =", report[i]);

        if (i > 0) {
            const prevLevel = report[i-1];
            if (prevLevel === currentLevel ||
                (prevLevel > currentLevel && status === "")

            ) {
                status = 'unsafe';
                break;
            }
        }
        if (status = 'unsafe') {
            break;
        }
        
    }
    // add the 'safe' counter here?
    if (status === 'safe') {
        safeReport++;
    }
});