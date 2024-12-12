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
    42, 44, 47, 49, 51, 52, 54, 52
  ]]

let safeReport = 0; // total num of safe reports

reports.forEach((report) => {
    let status; // can be 'increasing', 'decreasing'
    let safe = true; // if still true at the end, add the point

    for (let i = 0; i < report.length; i++) {
        const currentLevel = report[i];
        console.log("current level =", currentLevel);

        if (i > 0) {
            const prevLevel = report[i-1];
            console.log("prev level =", prevLevel);
            // 2 consecutive nums can be equal or different by more than 3
            if ((prevLevel === currentLevel) || (Math.abs(prevLevel - currentLevel) > 3)) {
                console.log("NUM ERROR");
                safe = false;
            // change in status from increasing -> decreasing
            } else if ((prevLevel > currentLevel) && status === 'decreasing') {
                console.log("Status ERROR 1");
                safe = false;
            // change in status from decreasing -> increasing
            } else if ((prevLevel < currentLevel) && status === 'increasing') {
                console.log("Status ERROR 2");
                safe = false;
            }
        }
        if (!safe) {
            console.log('NOT SAFE')
            break;
        }
        
    }
    // add the 'safe' counter here?
    if (safe) {
        safeReport++;
    }
});

console.log("Num of safe reports: ", safeReport);