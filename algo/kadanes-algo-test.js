var chai = require("chai");
var expect = chai.expect;
const kadaneAlgo =  require("./kadanes-algo");


describe("Kadane's ALgorithm", function () {
    it("should return maximum sum of contiguous sub-array of [1,2,3]", function (done) {
        expect(kadaneAlgo([1,2,3])).equals(6);
        done();
    });
    it("should return maximum sum of contiguous sub-array of [-1,-2,-3]", function (done) {
        expect(kadaneAlgo([-1,-2,-3])).equals(-1);
        done();
    });
    it("should return maximum sum of contiguous sub-array of [-6,-7,-1,-2,-3]", function (done) {
        expect(kadaneAlgo([-6,-7,-1,-2,-3])).equals(-1);
        done();
    });
    it("should return maximum sum of contiguous sub-array of [1,2,3,-6,-7,10]", function (done) {
        expect(kadaneAlgo([1,2,3,-6,-7,10])).equals(16);
        done();
    });
})