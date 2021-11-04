const recycling = require('./recycling');

if (process.argv.length > 2) {
  amount = process.argv[2];
  console.log("TOTAL BOTTLES:",recycling.calculateTotalReturn(amount));
} else {
  console.log("No amount provided");
}
