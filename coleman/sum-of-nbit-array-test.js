var chai = require("chai");
var expect = chai.expect;
var nBitBinaryIntegerSum = require("./sum-of-nbit-array");
var testData = {
    A : [1,0,1,1],
    B : [0,0,1,1],
    C : [0,0,0,0,0]
}

describe("test of n bit array addition",function(){
    it("should return 1,1,1,0 on addition of 1,0,1,1 and 0,0,1,1",function(done){
        expect(nBitBinaryIntegerSum(testData.A,testData.B)).equals("1,1,1,0");
    })
})
