const poppinBottles = () => {
  /*


    calcTotalBottles(amount)

      Calculate # of bottles purchased directly
      
      Calculate # of bottles earned through recycling bottles (recursively)
      
      Calculate # of bottles earned through recycling all the caps

  */





};

/*
  Calculate bottles redeemed directly (from 10)
    From bottles (5/0)
    From caps (2/2)

  Calculate leftover bottles
  Calculate leftover caps

  If leftover + redeemed directly >= 2
    result = redeemed directly + getBottlesFromBottles(redeemed directly + leftover)
*/
const getBottlesFromBottles = (n) => {
  const redeemedBottles = Math.floor(n / 2);
  const leftOverBottles = n % 2;
  let result;
  if (redeemedBottles + leftOverBottles >= 2) {
    result = redeemedBottles + getBottlesFromBottles(redeemedBottles + leftOverBottles);
  } else {
    result = redeemedBottles;
  }
  return result;
};

// Same principle as getBottlesFromBottles
const getBottlesFromCaps = (n) => {
  const redeemedBottles = Math.floor(n / 4);
  const leftOverCaps = n % 4;
  if (redeemedBottles + leftOverBottles >= 2) {
    result = redeemedBottles + getBottlesFromBottles(redeemedBottles + leftOverBottles);
  } else {
    result = redeemedBottles;
  }
  let result;
}


const recycle = (bottles, caps) => {
  let result = {};
  if (bottles < 2 && caps < 4) {
    //Not enough bottles or caps to redeem any more bottles
    result.newBottles = 0;
    result.leftOverCaps = caps;
    result.leftOverBottles = bottles;
  } else {
    //Recycle this round
    let newBottlesFromBottles = Math.floor(bottles / 2);
    let newBottlesFromCaps = Math.floor(caps / 4);
    result.newBottles = newBottlesFromBottles + newBottlesFromCaps;
    result.leftOverCaps = caps % 4;
    result.leftOverBottles = bottles % 2;  
  }
  return result;
};

console.log(recycle(10,10));

module.exports = {
  getBottlesFromBottles: getBottlesFromBottles,
  poppinBottles: poppinBottles,
  recycle: recycle
};