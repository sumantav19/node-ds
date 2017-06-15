var Heap = require("./Heap");
var chai = require("chai");
var expect = chai.expect;
var heap;
describe("Heap", function () {
    // initialize heap with capcity 5;
    before(function (done) {
        heap = Heap(5);
        done();
    })    
    it("should insert  [2,7,8,6,4] in [2,4,8,7,6] order", function (done) {
        heap.insert(2);
        heap.insert(7);
        heap.insert(8);
        heap.insert(6);
        heap.insert(4);
        expect(heap.printHeapArr().join(",")).equals("2,4,8,7,6");
        done();
    })
    it("should return heap full",function(done){
        expect(heap.insert(10)).equals("Heap Full");
        done();
    })
    it("should return 2 on extract min",function(done){
        expect(heap.extractMini()).equals(2);
        done();
    })
     it("should return 4 on extract min",function(done){        
        expect(heap.extractMini()).equals(4);
        done();
    })
    it("should remove 7 from heap",function(done){
        heap.delete(1);
        console.log(heap.printHeapArr());
        expect(heap.printHeapArr().indexOf(7)).equals(-1);       
        done();
    })   
})