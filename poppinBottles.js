const poppinBottles = () => {
  /*


    calcTotalBottles(amount)

      Calculate # of bottles purchased directly
        Calculate # of bottles earned through recycling bottles
        Calculate # of bottles earned through recycling bottle caps

  */





};

/*
  Calculate bottles redeemed directly
  Calculate leftover
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

module.exports = {
  getBottlesFromBottles: getBottlesFromBottles,
  poppinBottles: poppinBottles,
};