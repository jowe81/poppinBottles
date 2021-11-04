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

  });

});