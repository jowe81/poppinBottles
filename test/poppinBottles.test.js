const assert = require('assert').strict;
const poppinBottles = require('../poppinBottles');

describe("poppinBottles", () => {

  describe("helper functions", () => {

    describe("getBottlesfromBottles", () => {

      it("should return 9 for 10", () => {
        assert.equal(poppinBottles.getBottlesFromBottles(10), 9);
      });

    });

  });

});