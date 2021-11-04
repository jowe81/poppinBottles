const poppinBottles = () => {
  /*


    calcTotalBottles(amount)

      Calculate # of bottles purchased directly
        Calculate # of bottles earned through recycling bottles
        Calculate # of bottles earned through recycling bottle caps

  */





};

const getBottlesFromBottles = (n) => {
  const redeemedBottles = Math.floor(n / 2);
  const result = redeemedBottles + getBottlesFromBottles(redeemedBottles);
  return result;
};

module.exports = {
  getBottlesFromBottles: getBottlesFromBottles,
  poppinBottles: poppinBottles,
};