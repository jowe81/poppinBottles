const assert = require('assert').strict;
const recycling = require('../recycling');

describe("recycling library", () => {

  describe("helper functions", () => {

    describe("calculateTotalReturn (dollar amount)", () => {

      it("should return 15 for 10", () => {
        assert.equal(recycling.calculateTotalReturn(10), 15);
      });

      it("should return 35 for 20", () => {
        assert.equal(recycling.calculateTotalReturn(20), 35);
      });

      it("should return 75 for 40", () => {
        assert.equal(recycling.calculateTotalReturn(40), 75);
      });

    });

    describe("recycle", () => {

      it("should return 7 new bottles, 2 leftover caps, 0 leftover bottles for 10 recycled bottles and 10 recycled caps", () =>{
        const result = recycling.recycle(10, 10);
        assert.equal(result.newBottles === 7 && result.leftOverCaps === 2 && result.leftOverBottles === 0, true);
      });

    });

  });

});