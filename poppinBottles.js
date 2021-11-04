/*
  Calculate new bottles, leftover caps, and leftover bottles
  for one set of recycling input data (bottles, caps)
*/
const recycle = (bottles, caps) => {
  let result = {};
  let newBottlesFromBottles = Math.floor(bottles / 2);
  let newBottlesFromCaps = Math.floor(caps / 4);
  result.newBottles = newBottlesFromBottles + newBottlesFromCaps;
  result.leftOverCaps = caps % 4;
  result.leftOverBottles = bottles % 2;
  return result;
};


/*
  Purchase bottles from money
  do
    recycle empty bottles and caps
  while (there are at least 2 bottles or at least 4 caps to recycle)
*/
const calculateTotalReturn = (amount) => {
  let bottles = Math.floor(amount / 2);
  let caps = bottles;
  let thisRoundResult;
  let totalBottles = bottles;
  //console.log("initial bottles",bottles," and caps ",caps);
  do {
    thisRoundResult = recycle(bottles, caps);
    totalBottles += thisRoundResult.newBottles;
    bottles = thisRoundResult.newBottles + thisRoundResult.leftOverBottles;
    caps = thisRoundResult.newBottles + thisRoundResult.leftOverCaps;
    //console.log ("this round result:",thisRoundResult);
  } while (bottles >= 2 || caps >= 4);
  return totalBottles;
};

module.exports = {
  recycle: recycle,
  calculateTotalReturn: calculateTotalReturn,
};