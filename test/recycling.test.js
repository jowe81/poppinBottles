const assert = require('assert').strict;
const recycling = require('../recycling');

describe("recycling library", () => {

  describe("helper functions", () => {

    describe("calculateTotalReturn, total bottles (dollar amount)", () => {

      it("should return 15 for 10", () => {
        assert.equal(recycling.calculateTotalReturn(10).totalBottles, 15);
      });

      it("should return 35 for 20", () => {
        assert.equal(recycling.calculateTotalReturn(20).totalBottles, 35);
      });

      it("should return 75 for 40", () => {
        assert.equal(recycling.calculateTotalReturn(40).totalBottles, 75);
      });

    });

    describe("recycle", () => {

      it("should return 7 new bottles, 2 leftover caps, 0 leftover bottles for 10 recycled bottles and 10 recycled caps", () =>{
        const result = recycling.recycle(10, 10);
        assert.equal(result.newBottles === 7 && result.leftOverCaps === 2 && result.leftOverBottles === 0, true);
      });

    });

    describe("calculateTotalReturn2 (alternate implementation)", ()=>{

      for (let n = 0; n < 50; n++) {
        it(`should return the same object as calculateTotalReturn for ${n}`, ()=>{
          assert.deepEqual(recycling.calculateTotalReturn(n), recycling.calculateTotalReturn2(n));
        });
      }

    });

  });

});