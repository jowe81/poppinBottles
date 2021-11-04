const assert = require('assert').strict;
const poppinBottles = require('../poppinBottles');

describe("poppinBottles", () => {

  describe("helper functions", () => {

    describe("getBottlesfromBottles", () => {

      it("should return 9 for 10", () => {
        assert.equal(poppinBottles.getBottlesFromBottles(10), 9);
      });

      it("should return 19 for 20", () => {
        assert.equal(poppinBottles.getBottlesFromBottles(20), 19);
      });

    });

    describe("recycle", () => {

      it("should return 7 new bottles, 2 leftover caps, 0 leftover bottles for 10 recycled bottles and 10 recycled caps", () =>{
        const result = poppinBottles.recycle(10, 10);
        assert.equal(result.newBottles === 7 && result.leftOverCaps === 2 && result.leftOverBottles === 0, true);
      });

    });

  });

});