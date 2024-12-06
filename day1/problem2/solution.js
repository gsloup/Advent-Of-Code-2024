import { processInputFile } from './../problem1/solution.js'

// Get processed lists from problem 1
const { firstList, secondList } = await processInputFile();

let totalSum = 0;
let secondListObj = countOccurrences(secondList)

firstList.map((value) => {
    if (value in secondListObj) {
        console.log("Value", value, "exists", secondListObj[value], "times")
        totalSum += (value * secondListObj[value])
    }
});

console.log(totalSum)

/*
    Creates an object where:
        key = number in array
        value = number of occurances in array
    { 1057: 3, 1060: 1, etc... }
*/
function countOccurrences(array) {
    return array.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc; 
    }, {});
} 

console.log("Answer:", totalSum)

/*
    Answer: 23963899
That's the right answer! You are one gold star closer to finding the Chief Historian
You have completed Day 1!
*/