const recycling = require('./recycling');

const printResults = (result) => {
  let output = 
      `TOTAL BOTTLES: ${result.totalBottles}\n`
    + `REMAINING BOTTLES: ${result.leftOverBottles}\n`
    + `REMAINING CAPS: ${result.leftOverCaps}\n`
    + `TOTAL EARNED: ${result.earnedFromBottles + result.earnedFromCaps}\n`
    + `  BOTTLES: ${result.earnedFromBottles}\n`
    + `  CAPS: ${result.earnedFromCaps}\n`;
  console.log(output);
};

if (process.argv.length > 2) {
  const amount = process.argv[2];
  if (!isNaN(amount)) {
    printResults(recycling.calculateTotalReturn(amount));
    //printResults(recycling.calculateTotalReturn2(amount));
  } else 
    console.log("Error: Invalid amount given. Please provide a number.");
} else {
  console.log("Error: Please provide a dollar amount.");
}
