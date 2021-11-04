/*
  Calculate new bottles, leftover caps, and leftover bottles
  for one set of recycling input data (bottles, caps)
*/
const recycle = (bottles, caps) => {
  let result = {};
  let newBottlesFromBottles = Math.floor(bottles / 2);
  let newBottlesFromCaps = Math.floor(caps / 4);
  result.newBottles = newBottlesFromBottles + newBottlesFromCaps;
  result.newBottlesFromBottles = newBottlesFromBottles;
  result.newBottlesFromCaps = newBottlesFromCaps;
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
  let finalResult = {
    totalBottles: 0,
    earnedFromBottles: 0,
    earnedFromCaps: 0,
    leftOverBottles: 0,
    leftOverCaps: 0,
  };
  finalResult.totalBottles = bottles;
  do {
    thisRoundResult = recycle(bottles, caps);
    finalResult.totalBottles += thisRoundResult.newBottles;
    finalResult.earnedFromBottles += thisRoundResult.newBottlesFromBottles;
    finalResult.earnedFromCaps += thisRoundResult.newBottlesFromCaps;
    bottles = thisRoundResult.newBottles + thisRoundResult.leftOverBottles;
    caps = thisRoundResult.newBottles + thisRoundResult.leftOverCaps;
  } while (bottles >= 2 || caps >= 4);
  finalResult.leftOverBottles = bottles;
  finalResult.leftOverCaps = caps;
  return finalResult;
};

const calculateTotalReturn2 = (amount) => {
  if (amount % 2) amount--;
  let totalBottles = amount * 2 - 5;
  let totalEarned = totalBottles - Math.floor(amount / 2);
  let earnedFromCaps = Math.floor(totalEarned / 3);
  let earnedFromBottles = earnedFromCaps * 2 + 1;
  return {
    totalBottles: totalBottles,
    earnedFromBottles: earnedFromBottles,
    earnedFromCaps: earnedFromCaps,
    leftOverBottles: 1,
    leftOverCaps: 3
  };
};

module.exports = {
  recycle: recycle,
  calculateTotalReturn: calculateTotalReturn,
  calculateTotalReturn2: calculateTotalReturn2,
};