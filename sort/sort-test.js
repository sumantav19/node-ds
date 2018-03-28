// sort an array with multiple sorting algorithm
var testData = [65, 25, 12, 22, 11];
var selectionSort = require("./selection-sort");
var bubbleSort = require("./bubble-sort");
var recursiveBubbleSort = require("./recursive-bubble-sort");
var insertionSort = require("./insertion-sort");
var mergeSort = require("./merge-sort");
var quickSort = require("./quick-sort");
var chai = require("chai");
var expect = chai.expect;

describe("Sort", function () {
    describe("selection", function () {
        it("should sort the array [65,25,12,22,11] and give output 11,12,22,25,65 after joining the array ", function (done) {
            expect(selectionSort(testData.slice()).join(",")).equals("11,12,22,25,65")
            done();
        });
        it("should sort the array [] and give output \"\"  after joining the array", function (done) {
            expect(selectionSort([]).join(",")).equals("");
            done();
        });
        it("should sort the array [10,20,30] and give output 10,20,30 after joining the array", function (done) {
            expect(selectionSort([10, 20, 30]).join(",")).equals("10,20,30");
            done();
        });
    });
    describe("bubble", function () {
        it("should sort the array [65,25,12,22,11] and give output 11,12,22,25,65 after joining the array ", function (done) {
            expect(bubbleSort(testData.slice()).join(",")).equals("11,12,22,25,65");
            done();
        });
        it("should sort the array [] and give output \"\"  after joining the array", function (done) {
            expect(bubbleSort([]).join(",")).equals("");
            done();
        });
        it("should sort the array [10,20,30] and give output 10,20,30 after joining the array", function (done) {
            expect(bubbleSort([10, 20, 30]).join(",")).equals("10,20,30");
            done();
        });
    });
    describe("recursive bubble", function () {
        it("should sort the array [] and give output \"\"  after joining the array", function (done) {
            expect(recursiveBubbleSort([]).join(",")).equals("");
            done();
        });
        it("should return undefined for undefined input", function (done) {
            expect(recursiveBubbleSort()).to.be.undefined;
            done();
        });
        // it("should throw error for input other than array and undefined", function (done) {
        //     var err = new Error("not an array");
        //     expect(recursiveBubbleSort("Test Array")).to.throw(Error,/array/);
        // });
        it("should sort the array [65,25,12,22,11] and give output 11,12,22,25,65 after joining the array ", function (done) {
            expect(recursiveBubbleSort(testData.slice()).join(",")).equals("11,12,22,25,65");
            done();
        });
    });
    describe("insertion",function(){
        it("should sort the array [65,25,12,22,11] and give output 11,12,22,25,65 after joining the array ", function (done) {
            expect(insertionSort(testData.slice()).join(",")).equals("11,12,22,25,65");
            done();
        });
        it("should sort the array [] and give output \"\"  after joining the array", function (done) {
            expect(insertionSort([]).join(",")).equals("");
            done();
        });
        it("should sort the array [10,20,30] and give output 10,20,30 after joining the array", function (done) {
            expect(insertionSort([10, 20, 30]).join(",")).equals("10,20,30");
            done();
        });
    });
    describe("merge",function(){
       it("should sort the array [65,25,12,22,11] and give output 11,12,22,25,65 after joining the array ", function (done) {
            expect(mergeSort(testData.slice()).join(",")).equals("11,12,22,25,65");
            done();
        });
        it("should sort the array [] and give output \"\"  after joining the array", function (done) {
            expect(mergeSort([]).join(",")).equals("");
            done();
        });
        it("should sort the array [10,20,30] and give output 10,20,30 after joining the array", function (done) {
            expect(mergeSort([10, 20, 30]).join(",")).equals("10,20,30");
            done();
        });
    });
    describe("quick",function(){
       it("should sort the array [65,25,12,22,11] and give output 11,12,22,25,65 after joining the array ", function (done) {
           
            expect(quickSort(testData.slice()).join(",")).equals("11,12,22,25,65");
            done();
        });
        it("should sort the array [] and give output \"\"  after joining the array", function (done) {
            expect(quickSort([]).join(",")).equals("");
            done();
        });
        
        it("should sort the array [10,20,30] and give output 10,20,30 after joining the array", function (done) {
            expect(quickSort([10, 20, 30]).join(",")).equals("10,20,30");
            done();
        });
    });
});